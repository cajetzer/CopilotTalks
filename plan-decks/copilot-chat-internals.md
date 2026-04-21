# Deck: copilot-chat-internals

**Status:** 🔵 Cataloged — conversion not yet started
**Deck file:** `slides/tech-talks/copilot-chat-internals.md`
**Raw HTML slides:** 10 (out of 20 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | What Agent Debug Panel Shows | 2×3 six-item card grid (Chat Events/Tool Invocations/Customizations/Responses/Errors/Chart View) | `FourCardGridSlide` | Conditional |
| 6 | Agent Debug Panel vs Chat Debug View | 2-col side-by-side: left Agent Debug (5 ✅ items), right Chat Debug View (4 ✅ + 1 ✗) + footer callout | `TwoColPairedConceptsSlide` | ✅ Map |
| 7 | Use Case: Custom Instructions Not Loading | Vertical narrative: red problem → green solution → 2-col blue/purple (steps + outcome metrics) | `ProblemSolutionOutcomeSlide` | ✅ Map |
| 9 | Chat Debug View Pipeline | 4 stacked labeled boxes (System Prompt / User Prompt & Context / Tool Invocations / Model Response) + footer | `ConceptStackSlide` (new) | Conditional |
| 10 | Thinking Tokens & Context | 2×2 card grid (Thinking Tokens / Enable Thinking / Context Window Indicator / Context Commands) | `TwoColPairedConceptsSlide` | ✅ Map |
| 11 | Use Case: Thinking Reveals Prompt Ambiguity | Same vertical narrative pattern as slide 7 | `ProblemSolutionOutcomeSlide` | ✅ Map |
| 13 | Diagnostics View & Extension Logs | 2-col: left Diagnostics View card, right Extension Logs card; 4 diagnostic scenario boxes footer | `TwoColPairedConceptsSlide` | ✅ Map |
| 14 | MCP Servers & Network Diagnostics | 2-col: left MCP Server Mgmt card, right Network Diagnostics card; case study footer with metrics | `TwoColPairedConceptsSlide` | ✅ Map |
| 16 | Common Troubleshooting Workflows | 2×2 grid (4 numbered workflows, each with title + diagnostic steps) + insight footer | `FourCardGridSlide` | ✅ Map |

**Summary:** 7 direct maps · 2 conditional · 0 keep raw HTML

---

## Phase 2 — Conversion Order

1. Slide 6 → `<TwoColPairedConceptsSlide>`
2. Slide 7 → `<ProblemSolutionOutcomeSlide>`
3. Slide 10 → `<TwoColPairedConceptsSlide>`
4. Slide 11 → `<ProblemSolutionOutcomeSlide>`
5. Slide 13 → `<TwoColPairedConceptsSlide>`
6. Slide 14 → `<TwoColPairedConceptsSlide>`
7. Slide 16 → `<FourCardGridSlide>`

---

## Phase 3 — Conditional Decisions

- **Slide 5** (Agent Debug Panel Shows): 6-card grid — `FourCardGridSlide` is a 4-card component. If all 6 cards are essential, keep raw HTML. If 2 can be folded into the `insight` prop or descriptions are short enough to collapse → attempt map. Otherwise keep raw.
- **Slide 9** (Chat Debug View Pipeline): 4 vertically stacked labeled pipeline stages + footer action buttons. `ConceptStackSlide` (when built) handles stacked labeled rows with left pill + right content. Revisit after ConceptStackSlide is built.

---

## Notes
- Total slides: 20 (10 structural, 10 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener (parts 1–4), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- Heavy `TwoColPairedConceptsSlide` usage (4 slides) — very cohesive deck
- `ProblemSolutionOutcomeSlide` reused twice for use-case narrative slides
- 0 keep raw HTML — all slides have viable component candidates
