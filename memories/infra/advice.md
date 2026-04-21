# infra / advice

Patterns that consistently work for Slidev slide authoring and editing.

---

## Cross-deck component frequency after full 18-deck catalog (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

After cataloging all 18 tech-talk decks, the actual component demand ranking is:

| Component | Deck count | Notes |
|---|---|---|
| `CodeWithFeaturesSlide` | 8+ decks | mcp-apps uses it 12× alone |
| `BeforeAfterMetricsSlide` | 7 decks | — |
| `TwoColPairedConceptsSlide` | 5 decks | vscode-latest alone has 8 instances (2-col + JSON pattern) |
| `FourCardGridSlide` | 7 decks | — |
| `BeforeAfterPanelsSlide` | 4 decks | copilot-memory uses it 4× |
| `ThreeColumnCardSlide` | 4 decks | — |
| `ConceptStackSlide` (planned) | 6 decks | copilot-cli, agent-teams, agentic-journey, copilot-chat-internals, copilot-web, agentic-sdlc |
| `TerminalDemoSlide` (planned) | 2–3 decks | copilot-cli, copilot-sdk; conditional in copilot-memory |

**Key insight — `ConceptStackSlide` is now the blocking new component:** it appears as a conditional or direct-map need in 6 decks. Building it unlocks ~10 previously-conditional slides across copilot-cli, agent-teams, agentic-journey, copilot-chat-internals, copilot-web, and agentic-sdlc.

**vscode-latest batch decision:** 8 raw slides in that deck follow a "2-col paired concepts + embedded JSON settings block below" pattern. If `TwoColPairedConceptsSlide` is extended to accept an optional `code` prop (or `codeBlock` slot), all 8 convert in one pass. If not, all 8 stay raw. Worth deciding before touching that deck.

**Decks with highest structural component ratio (already well-converted):** `copilot-plugins` (72%), `copilot-primitives` (75%) — these will be fast to complete.

---

## Tier-1 components adopted in first real deck (copilot-plugins): 6 of 12 body slides (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

First deck generated under the new Tier-1 component catalog (after updating `slides/tech-talks/template.md`) used components on 6 of 12 body slides and fell back to inline HTML for 4 genuinely unique layouts. This ratio (50%) is healthy — it means the components are earning their place without over-constraining creativity.

**Components used and why:**
- `TwoColPairedConceptsSlide` ×2 — `copilot plugin` vs `apm` (non-opposed comparison; cool palette correct)
- `CodeWithFeaturesSlide` ×2 — CLI command flow + feature explanations (code-left layout)
- `ThreeColumnCardSlide` ×1 — three discovery sources (marketplace / awesome-copilot / plugins repo)
- `BeforeAfterPanelsSlide` ×1 — without/with lockfile (opposition without metrics)

**Inline HTML (4 slides) — why components were skipped:**
- 3-column action grid with semantic colors (emerald=install, blue=update, red=remove) — `ThreeColumnCardSlide` uses section palette, not semantic colors
- CLI vs VS Code UI comparison with custom step formatting
- Principles slide combining before/after with 3-principle breakdown
- Multi-project code examples side-by-side

**Takeaway for future generation:** When falling back to inline HTML, the reason should be "the layout genuinely doesn't match" not "I didn’t check." The generator pre-flight now includes COMPONENT-ARCHETYPES.md read (step 8) to force the check.

---

## Topic benches must defer to component files, never duplicate them (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

When writing to a topic bench (e.g. `agent_architecture/facts.md`), if the fact is encoded in a Vue component or shared helper (`useSectionTheme.ts`, any Tier-1 slide component, `useTheme.ts`), do NOT duplicate it in the drawer. Instead, write a one-line pointer at the top of the drawer naming the component as the source of truth.

**Why:** drawers go stale silently. A color map written in 2026-04-08 still reads as authoritative in 2026-04-17 even after `useSectionTheme.ts` became canonical. An agent following the drawer can introduce drift no one notices until visual inconsistency surfaces.

**Rule of thumb for topic benches — only write entries that satisfy ALL of:**
- Not derivable by reading the deck file
- Not encoded in any component or shared helper
- Carries framing, audience, ordering, or rejection rationale a future agent would otherwise miss

**Counter-examples (these belong in the deck or in `infra`, not a topic bench):**
- "agent-teams Part 1 uses cyan" → in `useSectionTheme.ts`
- "copilot-acp uses BeforeAfterMetricsSlide on s12" → visible in deck
- "section openers don't get progress dots" → universal Slidev rule, lives in `infra/advice.md`

**Good example (the keeper in `agent_architecture/facts.md`):**
- "copilot-acp demo is MSBart2/cli-acp orchestrator web app, NOT a TypeScript SDK tutorial" — framing decision, only the URL is in the deck, agent would default to wrong interpretation otherwise.

---

## Two-column conformance: reference layout and edit pattern (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

**Reference layout (gold standard):** `captures/twocol/agent-teams-s20-two-modes.png`

**Structural elements (top to bottom):**
1. Pill header (colored, emoji) — top-left
2. Progress dots — top-right with "N of M" counter
3. Title/subtitle text row
4. Two side-by-side bordered content cards (equal width, `grid grid-cols-2`)
5. Bottom summary bar with gradient + `🎯 Key Insight:` label

**Edit pattern applied to each conformance slide:**
- Grid: `gap-6`/`gap-4` → `gap-3` for tighter card spacing
- Cards: `p-4` → `p-3` to reclaim vertical space
- Grid div: add `mb-3` for space before bottom bar
- Bottom bar: `<div class="p-3 bg-gradient-to-br from-{color}-900/30 ... rounded-xl border ...">` with bold label + summary text
- Use existing deck section colors for visual consistency

**Overflow fix for dense 2-col slides (e.g., agent-teams s15 with repo tree + table):**
- Header pill: `mb-2` → `mb-1`
- Title block: `mb-2` → `mb-1`
- Grid: `gap-3` → `gap-2`, `mb-3` → `mb-2`
- Cards: `p-2.5` → `p-2`, inner `gap-2` → `gap-1.5`
- Card headers: `mb-1` → `mb-0.5`
- Bottom bar: `p-3` → `p-2`
- This pattern reclaims ~30-40px total, enough to clear footer overflow

**What makes a slide "easy to conform" (Tier 1 criterion refined with user):**
- Already has 2-col card layout
- Content is sparse enough that adding a bottom bar won't overflow
- Does NOT have misplaced bars mid-content or complex nested structures
- Number of cards per column is irrelevant — just needs the 2-col bones

---

## Demo walkthrough authoring rule: README first, no invented commands (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

When authoring `demos/` walkthroughs for tech-talks, the **only acceptable source of commands, flags, and feature claims** is the corresponding `tech-talks/<name>/README.md`. Never invent commands, flags, or capabilities.

**Checklist before writing any exercise:**
1. Read the talk's README — capabilities, artifacts, key commands are listed there
2. Every CLI flag used must appear in the README or its linked docs
3. Every UI flow (Rulesets, GitHub UI, etc.) must match the README's config instructions
4. FanHub's real known bugs (Jesse Pinkman duplicate, broken genre filter, missing validation) should be used as exercise material where relevant — they're in `BUGS.md`

**Common failure mode caught this session:** First draft invented `copilot agentic --intent`, `copilot squad --assemble`, `copilot council --debate` — none exist. Complete rewrite required after user feedback.

**Structure that works:** Source talk → 5 exercises max → each grounds a specific capability claim → "What to notice" after each exercise anchors the insight.

**Target repo for FanHub exercises:** `github.com/MSBart2/FanHub` — four language tracks, identical bugs across all four.

---

## Tech-talk components: prettification pattern for maintainability (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

All tech-talk components (`TitleSlide`, `CoreQuestionSlide`, `BeforeAfterSlide`, `TocSlide`, `WhatYouCanDoTodaySlide`, `ReferencesSlide`, `ThankYouSlide`, `SectionOpenerSlide`) follow a consistent HTML prettification pattern for readability:

**Template structure:**
```vue
<template>
  <!-- High-level container description -->
  <div class="h-full flex flex-col...">
    <!-- Ambient gradient background -->
    <div class="absolute inset-0..." :class="t.ambientBg"></div>

    <!-- ===== SECTION NAME ===== -->
    <!-- Section-level explanation -->
    <div class="relative z-10...">
      <!-- Element-level explanation -->
      <div>{{ content }}</div>
    </div>
  </div>
</template>
```

**Rules:**
1. Each major DOM section gets a comment block: `<!-- ===== SECTION NAME ===== -->`
2. Before complex elements (v-for loops, computed class bindings), add an explanatory comment
3. Multi-line formatting for readability — one attribute per line for complex bindings
4. Comments explain **purpose** ("Large icon watermark") and **data binding** ("Renders card.icon as background")
5. Section separators improve visual scanning when reading the component

**Benefits:**
- Future agents can quickly understand component structure without reading the script
- Maintenance changes are easier to reason about
- Consistent style across all 8 components reduces cognitive load
- Comment density helps onboard new contributors

**Build-verified:** All 17 tech-talks build successfully with prettified components (2026-04-16).

---

## Slidev: Standardized slide comments improve agent/human navigation (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

All 17 tech-talk decks now use identical slide comments for component-based slides. Example: `<!-- SLIDE: Before/After -->` instead of deck-specific names like "The Value Recap" or "From Manual Bottlenecks to Agentic Velocity".

**Benefits:**
- Agents and humans can search for `<!-- SLIDE: Before/After -->` across all decks with identical results
- Enables bulk regex operations on standardized markers (e.g., finding all Before/After slides at once)
- Cross-deck consistency reduces friction when navigating or editing multiple decks
- Build-verified and deployed across all 17 decks with zero visual/functional change

**Pattern applied:**
- `<!-- SLIDE: Title -->` — opening slide
- `<!-- SLIDE: Core Question -->` — slide 2
- `<!-- SLIDE: Table of Contents -->` — slide 3
- `<!-- SLIDE: Before/After -->` — closing section intro (N-3)
- `<!-- SLIDE: What You Can Do Today -->` — closing section CTA (N-2)
- `<!-- SLIDE: References -->` — closing section references (N-1)
- `<!-- SLIDE: Thank You -->` — closing slide (N)
- Section openers use `<!-- SLIDE: Part N — {TITLE} -->` pattern (deck-specific, but includes part number for consistency)

**Do NOT:** Use unique descriptive names for component-based slides (the "Value Recap" vs "Before/After" inconsistency made bulk editing harder and reduced regex effectiveness).

---

## Slidev: Content limits per slide (hard limits)

`schema_version: 1` | `date: 2026-04-08`

| Element | Maximum | If Exceeded |
|---------|---------|-------------|
| Bullets per column | 5 | Split into (1/2)/(2/2) slides |
| Paragraph length | 200 chars | Break into bullets or split |
| Use cases per slide | 2 | "Part 1" / "Part 2" |
| Code examples per slide | 1 | Dedicated "Implementation" slide |
| Comparison pairs | 3 | Split slides |
| Grid items | 6 (2×3) | Continuation slide |
| Vertical div stacks | 3 | Grid layout or split |

Prefer splitting over condensing — more slides with clear content beats fewer cramped slides.

**Source:** Established limits from slide authoring experience across multiple decks.

---

## Overflow fix hierarchy: try in this order

`schema_version: 1` | `date: 2026-04-10`

When inspect-slide.js reports overflow on a content slide, fix attempts in this order:

| Step | Technique | When to use |
|------|-----------|-------------|
| 1 | Tighten spacing: `mb-N→mb-(N-1)`, `gap-N→gap-(N-1)`, `p-N→p-(N-1)` | Most cards and text lists — first pass always |
| 2 | Reduce font: `text-sm→text-xs` on body, `text-base→text-sm` on headings | When step 1 gains < 8px or doesn't clear |
| 3 | Scrollable code: `flex flex-col flex-1 min-h-0` + `overflow-y-auto` | Slides with a dominant code block |
| 4 | Restructure to 2-col grid: `grid grid-cols-2` | 3+ stacked full-width cards after two passes of step 1 |
| 5 | Split slide | When content genuinely requires more space than one slide allows |

**Do NOT** compress code block content (font size, line wrapping). Step 3 (scrollable) is always preferable to illegibly tiny code.

**For closing-section slides** (What You Can Do Today): reduce `mt-N` on the Key Takeaway box first — these slides use an explicit `mt-` offset that adds significant height.

**Source:** Refined across agent-teams, agentic-workflows, agentic-journey, and copilot-acp fix sessions.

---

## Slidev: Editorial ranking — README order ≠ slide order

`schema_version: 1` | `date: 2026-04-08`

README files are comprehensive reference docs; slide decks are curated presentations. Before picking content:
1. Score use cases on novelty, differentiation, and audience impact
2. Prefer recent additions over established patterns
3. Elevate surprising integrations ("I didn't know it could do that" moments)
4. Compress or skip table-stakes demos (basic Docker debugging, CI/CD triage)
5. Keep 2-3 use cases with the most dramatic metrics; drop the rest

**Source:** Recurring issue where agents transcribed README sections in order instead of curating for presentation value.

---

## After splitting a slide, update ALL sibling dot totals in the section

`schema_version: 1` | `date: 2026-04-08`

When splitting a slide that belongs to a section with progress dots, update ALL earlier slides in that section to reflect the new total. The new slide only handles itself — sibling slides must be updated manually.

**Example:** Splitting s21 changed Part 4 from 3 to 4 slides. s19 "1 of 3" and s20 "2 of 3" both required updates to "1 of 4" and "2 of 4".

**Source:** agent-teams.md — Part 4 dot count correction after s21 split.

---

## Split slide narrative rule: table on A, workflow/install on B

`schema_version: 1` | `date: 2026-04-08`

When splitting an overflowing slide, put the decision/comparison table on slide A and the workflow/install/how-to content on slide B. This keeps "why/what" separate from "how", improves presentation flow, and gives each half adequate breathing room.

**Source:** agent-teams.md — s11 split (team formation vs memory/persistence), s21 split (decision table vs combining workflow + install).

---

## Progress dots: three things must sync when section size changes

`schema_version: 1` | `date: 2026-04-08`

Progress dot rows have three parts that must all update together when section size changes — **for every deck, not just agent-teams**:
1. Visual dot elements count (add/remove `<div class="w-2 h-2 rounded-full ...">` divs)
2. Active dot position (which dot gets `bg-{accent}-400` vs `bg-white/20`)
3. "N of M" label text

Partial updates produce visually inconsistent slides that are subtle to spot when scrolling.

**Source:** agent-teams.md — s19/s20 dot total update from "of 3" to "of 4" required all three components.

---

## Tailwind spacing for overflow mitigation

`schema_version: 1` | `date: 2026-04-10`

When reducing overflow on grid-based slides, this spacing reduction pattern is reliable:
- `gap-3→gap-1.5` saves ~6px per gap
- `p-1.5→p-1` saves ~6px per element
- `space-y-1→space-y-0.5` saves ~2px per item
- `mb-1→mb-0.5` saves ~2px per header

**Balance target:** `p-1.5 + gap-1.5` provides good balance between readability and compactness on content cards. More aggressive cuts (`p-1`, `gap-1`) are possible but start compromising visual hierarchy.

**Example:** copilot-azure-mcp slides 16-18 both had 340px+ overflow; applying this pattern (starting at gap-1.5 + p-1.5) eliminated overflow while maintaining readability.

**Source:** copilot-azure-mcp review session 2026-04-10 — systematic spacing reduction across responsive-layout slides.

---

## When authoring Copilot-related tech-talks: verify against official GitHub docs

`schema_version: 1` | `date: 2026-04-09`

GitHub Copilot features evolve rapidly and agents frequently hallucinate configuration schemas, file formats, and APIs. **Always cross-reference claimed features** against:
- GitHub official docs: https://docs.github.com/en/copilot/
- GitHub blog announcements: https://github.blog/ search for "Copilot"

**Pattern to avoid:** Inventing file formats (e.g., `copilot-review.yml` for Code Review), YAML config schemas with unsupported fields, or trigger-based automation that doesn't exist in the API.

**Best practice for content:** Use web search to verify any configuration claim before writing it into the talk. One hallucinated example spreads across all future regenerations.

**Source:** copilot-code-review hallucination audit 2026-04-09 — fictional `copilot-review.yml` and YAML schemas had to be completely rewritten.
