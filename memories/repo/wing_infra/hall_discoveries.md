# wing_infra / hall_discoveries

Breakthroughs — patterns that solved persistent problems in Slidev slide authoring.

---

## Build script wrapper solves agent invocation path context issues (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

Creating a simple wrapper script at `slides/build.ps1` that delegates to `scripts/build-all.ps1` solves a persistent problem with agent/automation tools invoking the build system: agents often run from various working directories and PowerShell has trouble resolving relative paths consistently across contexts.

**The pattern:**
```powershell
# slides/build.ps1
$ScriptsDir = Join-Path $PSScriptRoot scripts
Push-Location $ScriptsDir
& .\build-all.ps1 @args
Pop-Location
```

This wrapper:
- ✅ Captures the slides/ directory using `$PSScriptRoot` (location-independent)
- ✅ Changes directory before invoking the main script (ensures correct path resolution)
- ✅ Forwards all parameters unchanged (supports `-Folder`, `-Verbose` flags)
- ✅ Restores the original directory via `finally` block (no side effects)

**Result:** Agents can call `slides\build.ps1` from any working directory without path logic. The wrapper handles navigation automatically. Build output is deterministic and reliable.

---

## SectionOpenerSlide: multi-part rollout via per-part regex replacement (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

Rolling out a component that appears 4 times per deck (Part 1–4 section openers) requires a per-part regex loop, not a single block replacement:

```js
function buildPartRegex(partNumber) {
  return new RegExp(
    `(<!-- SLIDE: Part ${partNumber}[^\\n]*-->)\\n\\n<div[\\s\\S]*?(?=\\n---)`,
    ''
  )
}
// iterate parts 1–4 per deck
for (const part of parts) {
  updated = updated.replace(buildPartRegex(part.partNumber), `$1\n\n${buildComponent(part)}`)
}
```

Key differences from TocSlide rollout:
- One deck has **4 section openers** → loop over parts, accumulate replacements, count them
- **Skip guard:** `if (content.includes('<SectionOpenerSlide'))` catches already-converted decks
- **Content data extracted per deck per part** using a subagent Explore pass across all 16 decks before writing the script
- Apostrophes in prop values use Unicode right-single-quote `\u2019` (not `&#39;`) in the JS data constants — the rollout script itself applies `esc()` which replaces `'` → `\u2019` at output time

**Script:** `slides/scripts/rollout-section-opener-slide.mjs` — idempotent, safe to re-run.

---

## TocSlide rollout script pattern for bulk component injection (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

Bulk-replacing a Slidev slide block across 17 decks with a component works reliably with this pattern:

1. **Regex to match the block:** `<!-- SLIDE: Table of Contents -->\n[\s\S]*?(?=\n---\n)` — matches from comment to the line just before the next `---` separator
2. **Add import idempotently:** check `content.includes("import TocSlide")` before inserting
3. **Attribute syntax:** `:sections='[{ icon: "...", title: "..." }]'` — outer single quotes, inner double quotes. Never use `&quot;` (decoded by HTML parser) and never use bare apostrophes (terminates attribute).
4. **Script location:** `slides/scripts/rollout-toc-slide.mjs` — contains all 17 decks' section data, idempotent (safe to re-run)

**Capture script:** `slides/scripts/capture-toc-slides.mjs` — spins up a fresh slidev dev per deck (killing previous), screenshots slide 3, saves to `captures/<deck>-toc.png`. ~30s per deck.

---

## CoreQuestionSlide component extracted from all 17 tech-talk decks (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All 17 active tech-talk decks previously used inline HTML for slide 2 (Core Question). Extracted into a shared `slides/tech-talks/components/CoreQuestionSlide.vue` component. Pilot deck was `copilot-cli.md`. All 17 decks updated.

**Component location:** `slides/tech-talks/components/CoreQuestionSlide.vue`
**Import path:** `./components/CoreQuestionSlide.vue`

**Card layout pattern that works:**
- Row 1 (indices 0-2): audience/use-case cards with `icon` prop — icon renders as ghost watermark (`absolute bottom-1 right-2 text-5xl opacity-10`)
- Row 2 (indices 3-5): insight/stat/pain cards — `icon` optional, typically omitted
- Exactly 6 cards required; component console.errors if count differs
- Row 1 uses `bg/30` (prominent); Row 2 uses `bg/20` (muted)

**copilot-acp** was normalized from amber/orange to cyan/blue during this rollout.

**Template updated:** `slides/tech-talks/template.md` now documents CoreQuestionSlide as REQUIRED slide 2 with full usage docs.

**Captures:** 17 screenshots saved to `captures/<deck>-core-question.png`.

---

## ReferencesSlide component extracted from all 21 tech-talk decks (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All 21 active tech-talk decks previously used inline HTML for the References slide. Extracted into a shared `slides/tech-talks/components/ReferencesSlide.vue` component. All decks updated to import and use it.

**Component location:** `slides/tech-talks/components/ReferencesSlide.vue`
**Import path:** `./components/ReferencesSlide.vue` (same rule as TitleSlide/ThankYouSlide)

**Props:**
```ts
groups: Array<{
  title: string     // group heading
  color: string     // cyan | purple | blue | indigo | green | pink | orange | rose | amber | teal
  items: Array<{
    href?: string   // omit for cross-references to other talks (renders as <span>)
    label: string
    description: string
  }>
}>
```

**Template and agent instructions updated:** `slides/tech-talks/template.md` and `.github/agents/slide-generator.agent.md` both now include REQUIRED guidance for using this component.

**Captures:** 21 reference-slide screenshots saved to `captures/<deck>-references.png`.

---

## Slide Generator agent produces HTML balance errors requiring manual fixes (2026-04-13)

`schema_version: 1` | `date: 2026-04-13`

The Slide Generator agent (even with MemPalace pre-flight queries) produces decks with HTML balance errors that require manual correction before building. In the vscode-latest.md generation (24 slides), 7 slides had div balance issues:

**Common error patterns:**
1. **Missing wrapper div** — First column of a 2-col grid missing its `<div class="p-3 bg-gradient-to-br ...">` wrapper
2. **Extra closing `</div>`** — Blank line followed by duplicate `</div></div></div>` at slide end
3. **Duplicated content blocks** — Same grid section repeated twice with slight variations

**Post-generation checklist:**
```powershell
# Check all slides for div balance
$content = Get-Content "slides/tech-talks/<deck>.md" -Raw
$slides = $content -split '\r\n---\r\n'
for ($i = 0; $i -lt $slides.Count; $i++) {
    $opens = ([regex]::Matches($slides[$i], '<div[^>]*>')).Count
    $closes = ([regex]::Matches($slides[$i], '</div>')).Count
    if ($opens -ne $closes) { Write-Host "Slide $i: $opens opens, $closes closes" }
}
```

**Root cause hypothesis:** The agent's context window or chunked generation causes it to lose track of nesting depth, especially on slides with 3+ levels of nested divs.

---

## BeforeAfterSlide component simplified: hardcoded labels reduce prop complexity (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

Removed `leftLabel` and `rightLabel` props from BeforeAfterSlide component. Labels are now hardcoded as "Before" and "After" directly in the template.

**Why this works:**
- Before/After is _semantically fixed_ — there's never a use case for "Past" or "Initial State"
- Removing props simplifies component API from 5 props to 3 props (header, leftItems, rightItems, metrics)
- All 17 tech-talk decks were updated: removed redundant `leftLabel="Before" rightLabel="After"` lines
- Agents generate simpler markup with fewer attribute lines to get wrong

**Standardization bonus:**
- All 17 decks now use identical slide comment: `<!-- SLIDE: Before/After -->`
- Agents and humans can search for "Before/After" to find this slide in any deck
- Previously each deck had a unique comment (The Value Recap, From Manual Bottlenecks to Agentic Velocity, etc.) making cross-deck navigation harder

**Template and generator updated:**
- `slides/tech-talks/template.md`: BeforeAfterSlide section now documents `header`, `leftItems` (4 bullets), `rightItems` (4 bullets), `metrics` (exactly 3)
- `.github/agents/slide-generator.agent.md`: Added N-3 component to required slides table and validation checklist

**Verified:** All 17 decks rebuild successfully with no changes to visual output.

---

**Source:** vscode-latest.md generation session 2026-04-13 — 7 of 24 slides required manual div balance fixes before build would pass.

---

## WhatYouCanDoTodaySlide: named props beat array-of-objects for fixed structure (2026-04-15)

`schema_version: 1` | `date: 2026-04-15`

When a component has a **fixed, known number of structurally identical slots**, named props are dramatically better than an array-of-objects prop:

**Before (array-of-objects):**
```html
<WhatYouCanDoTodaySlide
  :columns='[
    { icon: "⚡", label: "Immediate (15 min)", items: ["item 1", "item 2"] },
    { icon: "🔧", label: "Short-Term (1 hour)", items: ["item 1", "item 2"] },
    { icon: "🚀", label: "Advanced (2-4 hours)", items: ["item 1", "item 2"] }
  ]'
  footer="Takeaway."
/>
```

**After (named props):**
```html
<WhatYouCanDoTodaySlide
  :today='["item 1", "item 2"]'
  :thisWeek='["item 1", "item 2"]'
  :thisMonth='["item 1", "item 2"]'
  footer="Takeaway."
/>
```

**Why it wins:**
- Prop names ARE the column headers — zero ambiguity, no label drift across decks
- Labels and icons hardcoded in component — removed 17 inconsistent label strings ("Immediate 15 min" vs "Now (15 min)" vs "15-Minute Quick Start")
- Callsites read like plain English with no nesting
- Icons become background decoration instead of inline content — cleaner card design

**Apply this pattern** to any future component where the number of slots is fixed and known at design time (e.g., a 3-metric summary card, a 2-column before/after).

---

## Simplify slide generator by pointing to template.md instead of duplicating (2026-04-15)

`schema_version: 1` | `date: 2026-04-15`

The slide-generator agent previously contained 5 verbose paragraphs duplicating prop schemas already in `slides/tech-talks/template.md`. Since the template is loaded in pre-flight step 5, the agent only needs the structural frame (which slide, what count constraints) — not the full prop API.

**Pattern:** replace verbose per-component sections in the agent with a single reference table:

| Slide | Component | Key generative constraint |
|---|---|---|
| 2 | CoreQuestionSlide | Exactly 6 cards: 3 audience + 3 stats |
| 3 | TocSlide | `slide` values must be counted AFTER generating all slides |
| N-2 | WhatYouCanDoTodaySlide | All 4 props required; immediately before References |

Then one pointer: "See `slides/tech-talks/template.md` for full prop schemas and escaping rules."

**Result:** agent file ~40% shorter, zero duplication, template becomes the single source of truth.

`schema_version: 1` | `date: 2026-04-10`

The "Core Question" slide (slide 2 in all tech-talk decks) has a canonical format derived from `copilot-web.md`. Applied across 16 decks for visual consistency.

**Canonical structure:**
```html
<div class="p-8 bg-gradient-to-br from-{color}-900/30 to-{color2}-900/30 rounded-xl border-2 border-{color}-500/40 text-center">
  <div class="text-3xl font-semibold mb-4">"The core question text"</div>
  <div class="text-xl opacity-90 mt-6">Supporting explanation with <span class="text-{color}-300 font-semibold">highlighted key insight.</span></div>
</div>
```

**Key differences from old format:**
| Element | Old | New |
|---------|-----|-----|
| Emoji | 🔓 | 🤔 |
| Quote padding | `p-3`–`p-6` | `p-8` |
| Border | `border` | `border-2` |
| Quote text | `text-xl`–`text-2xl font-bold` | `text-3xl font-semibold` |
| Alignment | left | `text-center` |
| Supporting text | none or separate card | inline with highlighted span |
| Bottom cards | colored amber/orange/red | monochrome cyan/blue/indigo (or amber for amber-themed decks) |

**Color preservation:** Decks with amber/orange theme (copilot-acp, copilot-code-review, enterprise-patterns) keep their color scheme but adopt the structural pattern.

**Source:** User request to standardize Core Question slides across all tech-talks to match copilot-web.md format. Session 2026-04-10.

---

## research.md is the hallucination antidote for tech-talks (2026-04-10)

`schema_version: 1` | `date: 2026-04-10`

When a tech-talk README contains hallucinated content (fabricated APIs, non-existent config schemas, made-up metrics), the correct fix is to **regenerate from research.md**, not to patch the README.

**Why this works:**
- `research.md` is created from verified URLs and contains facts extracted directly from official docs
- The Tech Talk Generator agent can be instructed to use research.md as the primary source
- research.md contains the "Source URL Analysis" section with explicit key facts per URL

**Anti-pattern:** Trying to fix hallucinations by editing the README directly often misses embedded hallucinations (fake cross-references, invented statistics, fabricated file paths). Complete regeneration is faster and more reliable.

**Process:**
1. Check if `tech-talks/<slug>/research.md` exists
2. If yes: Instruct Tech Talk Generator to regenerate README from research.md
3. After generation: Manually remove any remaining broken links (cross-ref to non-existent tech-talks)
4. Delete slides and regenerate fresh

**Source:** copilot-code-review rewrite session 2026-04-10 — README had 5+ categories of hallucination, all traced back to generation without research.md grounding.

---

## Persona architecture decision: hub+leaf + Persona-as-Prompt (2026-04-09)

`schema_version: 1` | `date: 2026-04-09`

Agent Council session produced a persona architecture plan (saved as `persona-update-plan.md` in repo root). Key decisions:

**File structure:**
- `workshop/00-orientation/PERSONAS.md` → hub/index (keeps team table, story arc, self-assessment)
- `workshop/00-orientation/personas/sarah.md` etc. → leaf files with YAML frontmatter:
  ```yaml
  lens: ROI, proof, measurable value
  voice: Drily skeptical
  content-types: [workshop, tech-talk]
  ```
- Each leaf also gets `## Arc Notes (by module)` table — prevents agents writing wrong-arc-stage dialogue

**Persona-as-Prompt insight:** Individual persona files can double as `.prompt.md` files — docs AND invokable Copilot prompts (`@sarah` pressure-tests content through her lens). Dogfoods Module 3/6 curriculum.

**Tech-talks:** Use personas as archetypes, not characters. Pattern: "Sarah *types*" not "Sarah *says*". Three lightweight patterns: "Who This Hits" box (top), Reaction Line (max 3/talk), Impact Table (before/after). Never scripted dialogue arcs.

**Graduated adoption:** Phase 1 = author-side only (no visible changes to published talks). Phase 2 = speaker notes. Phase 3 = visible callouts after validation.

**Source:** Agent Council session 2026-04-09; `persona-update-plan.md`.

---



`schema_version: 1` | `date: 2026-04-08`

ASCII art / monospace diagrams in Slidev slides consume significantly more vertical space than their line count suggests due to line-height and font metrics. Replace ASCII flow diagrams with CSS card layouts (flex/grid with `bg-*-900/20` backgrounds and colored borders). CSS cards convey the same information at roughly half the height and are visually consistent with the cockpit style.

**Source:** agent-teams.md s10 Coordinator Pattern — ASCII diagram replaced with CSS card layout, resolving severe overflow.

---

## Harness dot detection: regex must match both w-2 and w-2.5 variants

`schema_version: 1` | `date: 2026-04-08`

The inspect-slide.js `hasProgressDots()` originally used `/w-2\s+h-2\s+rounded-full/` which missed `w-2.5 h-2.5` (used in agentic-sdlc). Fixed to `/w-2\.?5?\s+h-2\.?5?\s+rounded-full/`. Always test the harness against both dot styles after any regex change.

**Source:** agentic-sdlc false positive scan — 12 slides flagged as missing dots when they already had correct w-2.5 span dots. Fixed in commit 23e6563.

---

## Tip banners cause overflow on slides with 2-col cards + code block

`schema_version: 1` | `date: 2026-04-09`

A consistent overflow pattern found across many regenerated decks: slides with a 2-column card grid PLUS a settings code block PLUS a green tip/info banner at the bottom reliably exceed slide height.

The tip banner pattern that causes the issue:
```html
<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 text-center">
  <div class="text-xs font-semibold text-green-300">💡 ...</div>
</div>
```
Each banner adds ~44px (mt-2 + p-2 + text line).

**Fix strategy (in order of preference):**
1. Remove the tip banner entirely — they are supplemental and not missed
2. Change `gap-4` → `gap-3` on the card grid (saves 4px)
3. Reduce `mt-3` → `mt-2` on the code section (saves 4px)
4. If still overflowing, add explicit `max-h-*` to the pre element

**Source:** vscode-latest.md — 10 slides overflowing, all fixed by removing banners and changing gap-4→gap-3; copilot-memory.md, enterprise-patterns.md had same pattern.

---

## Scrollable code block: the correct fix for code-heavy overflow

`schema_version: 1` | `date: 2026-04-10`

When a slide has a large fenced code block that overflows the bottom of the slide, **do not tighten spacing or reduce font size** — the code is already at minimum readable size. Instead, make the code container vertically scrollable.

**Pattern:** add `flex flex-col flex-1 min-h-0` to the parent container, then `overflow-y-auto` to the code wrapper:
```html
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
  <div class="...text description..."></div>
  <div class="flex flex-col flex-1 min-h-0">
    <pre class="... overflow-y-auto flex-1 min-h-0">...</pre>
  </div>
</div>
```

`flex-1 min-h-0` on both the outer flex column and the pre element is required — without `min-h-0`, flexbox does not constrain the child's scroll boundary.

**User preference (confirmed):** This is the explicitly preferred approach for code-heavy slides. Do not try to compress code content — scrollable is always better than illegibly small.

**Source:** agentic-workflows.md s9 "Core Message Flow" — code block overflow resolved this way; approach confirmed by user.

---

## Scrollable code blocks preserve content detail without overflow

`schema_version: 1` | `date: 2026-04-10`

Pattern: `overflow-y-auto max-h-32` on code containers allows vertical scrolling while keeping slide height fixed. Used successfully on copilot-azure-mcp slide 18 to restore full 23-line JSON config (user preferred full detail over condensed 4-line summary). The `max-h-*` is critical — `min-h-0` alone does not prevent harness overflow detection (see hall_facts entry on flex-1 overflow-y-auto).

**Key insight:** Preserves both content richness and layout integrity — no height penalty to slide render time. Users consistently prefer scrollable detail over condensed/summarized code.

**Source:** copilot-azure-mcp review session 2026-04-10 — user requested restoration of full config block with scroll.

---

## Multi-line YAML in Slidev code blocks causes hidden Vue parse errors

`schema_version: 1` | `date: 2026-04-09`

When a `<code>` block contains YAML with pipe syntax (`|`) or inline multi-line strings, Slidev's Vue parser silently fails at runtime. The slide shows "An error occurred on this slide" in the browser, but `inspect-slide.js` reports the slide as syntactically clean (because the HTML tag balance is correct — the error is Vue template rendering, not structural).

**Affected slides:** copilot-code-review s5 and s10 (both had YAML with multi-line pipes).

**Root cause:** The parser can't distinguish between YAML content and Vue template syntax boundaries inside the code block.

**Fix:** Flatten YAML examples to single-line keys without inline comments or pipe strings. If multi-line is needed, move the YAML outside the `<code>` block or simplify to a shorter example.

**Prevention:** After editing slides with YAML examples, check the browser view manually — inspect-slide alone won't catch this error.

**Source:** copilot-code-review slide review 2026-04-09 — both problematic slides identified and fixed.
