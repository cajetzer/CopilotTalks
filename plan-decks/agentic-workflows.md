# Deck: agentic-workflows

**Status:** � Conformed — build verified ✓
**Deck file:** `slides/tech-talks/agentic-workflows.md`
**Raw HTML slides converted:** 7 of 9 (slides 12, 14 kept raw — 8 and 6 cards respectively, exceed FourCardGridSlide limit of 4)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | Intent-Driven Automation | 2×2 grid, 4 cards (icon+title+desc) + insight box | `FourCardGridSlide` | ✅ Map |
| 6 | The Shift | 2-col red/green before-after, 5 bullets each + summary box | `BeforeAfterPanelsSlide` | ✅ Map |
| 8 | Three-Phase Architecture | 3 equal-width columns (Authoring/Compilation/Execution) + icon + bullets + code block | `ThreeColumnCardSlide` | ✅ Map |
| 9 | Markdown to YAML Example | Single code block (YAML) + 3 metric chips below | `CodeWithFeaturesSlide` | Conditional |
| 10 | Execution Flow | 2-col workflow: left 5-step agent job, right 5-step handlers | `TwoColPairedConceptsSlide` | ✅ Map |
| 12 | Safe Output Types | 2-col card grid (4+3 cards), each with icon+title+desc | `FourCardGridSlide` | ✅ Map |
| 14 | Proven Patterns | 2-col card grid (3+3 cards), each with pattern title+desc | `FourCardGridSlide` | ✅ Map |
| 15 | Use Case — Issue Triage | 2×2 grid (Problem/Workflow/Value/Examples) + insight box | `FourCardGridSlide` | ✅ Map |
| 16 | Mental Model Shift | 3-col: ✅ Move Toward / ⚠️ Move Away / 🛑 Stop Doing + bullet lists | `ThreeColumnCardSlide` | ✅ Map |

**Summary:** 8 direct maps · 1 conditional · 0 keep raw HTML

---

## Phase 2 — Conversion Order

1. Slide 6 → `<BeforeAfterPanelsSlide>`
2. Slide 8 → `<ThreeColumnCardSlide>`
3. Slide 10 → `<TwoColPairedConceptsSlide>`
4. Slide 16 → `<ThreeColumnCardSlide>`
5. Slides 5, 12, 14, 15 → `<FourCardGridSlide>`

---

## Phase 3 — Conditional Decisions

- **Slide 9** (Markdown to YAML Example): Single large code block + 3 metric chips at bottom. No feature bullets column — `CodeWithFeaturesSlide` expects code left + features right. If metric chips can stand in as the "features" column → ✅ Map. Otherwise → keep raw HTML.

---

## Notes
- Total slides: 20 (11 structural, 9 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener (parts 1–4), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- Very clean deck — 8 of 9 raw slides map directly. No new components needed.
