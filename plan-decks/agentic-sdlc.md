# Deck: agentic-sdlc

**Status:** 🔵 Cataloged — conversion not yet started  
**Deck file:** `slides/tech-talks/agentic-sdlc.md`  
**Raw HTML slides:** 16 (out of 27 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | The AgentRC Levels | 5-col horizontal level cards (L1→L5) + arrows + summary bar | — | **Keep raw HTML** (5-col progression, no match) |
| 6 | Level 1 — Functional | Quote block + 3-col grid (time lost / what changes / key checks) | — | Deck-specific (×5 pattern) |
| 7 | Level 2 — Documented | Same 3-col pattern as slide 6 | — | Deck-specific (×5 pattern) |
| 8 | Level 3 — Standardized | Same 3-col pattern as slide 6 | — | Deck-specific (×5 pattern) |
| 9 | Level 4 — Optimized | Same 3-col pattern as slide 6 | — | Deck-specific (×5 pattern) |
| 10 | Level 5 — Autonomous | Same 3-col pattern as slide 6 | — | Deck-specific (×5 pattern) |
| 12 | Monorepo Default | 2-col comparison (✅ Monorepo vs ⚡ Multi-Repo) + CTA bar | `TwoColPairedConceptsSlide` | Conditional |
| 13 | The Coordination Tax | 2-col red/green before-after + 3 metric tiles row | `BeforeAfterMetricsSlide` | ✅ Map |
| 14 | Enforced Module Boundaries | 2-col ❌/✅ with code snippets + 3 summary rows | `BeforeAfterPanelsSlide` | Conditional |
| 16 | The Economic Shift | 2-col red/green scarcity comparison + CTA bar | `BeforeAfterPanelsSlide` | ✅ Map |
| 17 | Intent-Based PRs | 3 stacked numbered steps + 2-col summary comparison + metric bar | `ConceptStackSlide` (new) | Conditional |
| 18 | The Governance Pyramid | Pyramid shape (Human 10% → Automated 90%) + 2-col metric comparison | — | **Keep raw HTML** (pyramid visual, too bespoke) |
| 20 | The 10-Minute Rule | 2-col red/green if/then comparison (60-min vs 8-min CI) + CTA bar | `BeforeAfterPanelsSlide` | ✅ Map |
| 21 | How to Achieve Fast CI | 5-col horizontal cards + example impact box | — | **Keep raw HTML** (5-col, no standard match) |
| 22 | Zero-Flake Tolerance | Problem box + 2-col grid (policy / how to fix) + summary bar | `TwoColPairedConceptsSlide` | Conditional |
| 23 | Key Takeaways | 2×2 numbered card grid (4 cards) + summary bar | `FourCardGridSlide` | ✅ Map |

**Summary:** 4 direct maps · 4 conditional · 3 keep raw HTML · 5 deck-specific (level detail pattern)

### Keep Raw HTML rationale
- **Slide 5 (AgentRC Levels):** 5-column horizontal progression with arrow connectors — no component covers 5-column layouts.
- **Slide 18 (Governance Pyramid):** Pyramid-shaped stacked sections with a centered triangle layout — bespoke visual idiom.
- **Slide 21 (Fast CI):** 5-column horizontal card grid — `FourCardGridSlide` is 4 cards only.

### Deck-specific pattern (slides 6–10)
All 5 level slides share an identical layout: italic quote block + 3-column grid (⏳ Time Lost / ✅ What Changes / 🔍 Key Checks). This pattern appears nowhere else in the deck catalog so far. Options:
- **Keep raw HTML** (current verdict) — safe for now
- **New `LevelDetailSlide` component** if this pattern recurs across other decks, or if this deck is prioritized for full conversion

---

## Phase 2 — Conversion Order

Convert ✅ slides (4 direct maps; no new components required):
1. Slide 16 → `<BeforeAfterPanelsSlide>` (Economic Shift)
2. Slide 20 → `<BeforeAfterPanelsSlide>` (10-Minute Rule)
3. Slide 13 → `<BeforeAfterMetricsSlide>` (Coordination Tax)
4. Slide 23 → `<FourCardGridSlide>` (Key Takeaways)

Then conditionals (after visual inspection), then ConceptStackSlide (slide 17) once built.

---

## Phase 3 — Conditional Decisions (post-visual-inspect)

- **Slide 12** (Monorepo Default): 2-col comparison is clean — `TwoColPairedConceptsSlide` should fit. Hinges on whether the cyan CTA decision-rule bar maps to the `insight` prop. → Likely ✅ Map.
- **Slide 14** (Module Boundaries): Panels contain `<div class="font-mono">` code examples + summary rows beneath. `BeforeAfterPanelsSlide` has a bottom section — if code blocks render correctly in the prop → ✅ Map. Otherwise → keep raw HTML.
- **Slide 17** (Intent-Based PRs): 3 stacked numbered steps with title/desc + bottom 2-col comparison. `ConceptStackSlide` (when built) handles stacked numbered rows. 2-col comparison would need `insight` or be dropped. Revisit after ConceptStackSlide spec is finalized.
- **Slide 22** (Zero-Flake): Problem prose at top + 2-col (policy / how to fix) + metric summary. `TwoColPairedConceptsSlide` covers the 2-col; problem box may need to be the subtitle area. → Likely ✅ Map conditional on subtitle flexibility.

---

## Phase 4 — New Components Needed

### ConceptStackSlide (shared — already planned)
- **Covers here:** Slide 17 (3 stacked numbered intent/policy/outcome steps)
- No additional new components needed for this deck beyond what's already planned.

---

## Notes
- Slide count: 27 total (11 structural, 16 raw HTML)
- Structural: Title, CoreQuestion, TocSlide, 4× SectionOpener (parts 1–4), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- The 5 level slides (6–10) are the most distinctive pattern in this deck — all share exactly the same 3-column skeleton with only content differences
