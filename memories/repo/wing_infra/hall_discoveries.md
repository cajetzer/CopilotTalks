# wing_infra / hall_discoveries

Breakthroughs — patterns that solved persistent problems in Slidev slide authoring.

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

**Source:** vscode-latest.md generation session 2026-04-13 — 7 of 24 slides required manual div balance fixes before build would pass.

---

## Core Question slide standardization pattern (2026-04-10)

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

