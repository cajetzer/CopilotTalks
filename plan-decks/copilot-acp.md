# Deck: copilot-acp

**Status:** 🔵 Cataloged — conversion not yet started
**Deck file:** `slides/tech-talks/copilot-acp.md`
**Raw HTML slides:** 10 (out of 25 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 8 | Four-Layer Architecture | 2×2 grid of colored boxes with nested monospace code blocks (4 protocol layers) | `ConceptStackSlide` (new) | Conditional |
| 9 | Core Message Flow | 2-col: left = monospace message sequence (10 step flow), right = 3 colored property panels | — | **Keep raw HTML** (bidirectional sequence diagram, no match) |
| 10 | ACP vs MCP vs LSP | Full-width 4-column comparison table (5 rows) + insight panel below | — | **Keep raw HTML** (comparison table archetype) |
| 12 | Start ACP Server & Connect SDK | 2-col: left = 2 step boxes (CLI + npm), right = 2 step boxes (TypeScript client code) | `CodeWithFeaturesSlide` | Conditional |
| 13 | Successful Connection | Vertical stack of 2 green success boxes (numbered 1/2 + monospace JSON) | — | **Keep raw HTML** (numbered success steps, too specific) |
| 14 | Streaming & Prompt Results | Continuation of slide 13 pattern (steps 3/4) + indigo insight panel | — | **Keep raw HTML** (same numbered step pattern) |
| 16 | Permission Model | 2-col: left = permission flow diagram + policy code table; right = comparison table + insight | — | **Keep raw HTML** (permission flow diagram, bespoke) |
| 18 | Use Case — CI/CD Code Review Dashboard | 3-col red/blue/green Problem→Solution→Outcome + insight panel | `ProblemSolutionOutcomeSlide` | ✅ Map |
| 19 | Use Case — Polyrepo Development | Same 3-col pattern as slide 18 | `ProblemSolutionOutcomeSlide` | ✅ Map |
| 20 | ACP Agent Orchestrator | 2-col mixed content: lists + code + images + tables (multi-panel) | — | **Keep raw HTML** (genuinely mixed content) |
| 21 | SDK Ecosystem | 2-col: left = SDK table (4 languages) + 2 code examples; right = tall single panel | `CodeWithFeaturesSlide` | Conditional |

**Summary:** 2 direct maps · 3 conditional · 5 keep raw HTML

### Keep Raw HTML rationale
- **Slides 9:** Bidirectional sequence diagram — no component pattern covers ordered message flows.
- **Slide 10:** 4-column feature comparison table — genuinely tabular.
- **Slides 13–14:** Numbered sequential step pattern (steps 1→4 across two slides) — bespoke.
- **Slide 16:** Permission flow diagram with decision tree logic.
- **Slide 20:** Multi-panel mixed content (lists + code + images + tables).

---

## Phase 2 — Conversion Order

1. Slide 18 → `<ProblemSolutionOutcomeSlide>`
2. Slide 19 → `<ProblemSolutionOutcomeSlide>`

---

## Phase 3 — Conditional Decisions

- **Slide 8** (Four-Layer Architecture): 2×2 colored protocol layer cards with nested code blocks. `ConceptStackSlide` if it supports nested code; otherwise keep raw HTML.
- **Slide 12** (Start ACP Server): 4 steps split across 2 columns; `CodeWithFeaturesSlide` if code blocks count as features. Otherwise keep raw HTML.
- **Slide 21** (SDK Ecosystem): 2 code blocks + language table on left, single panel right. `CodeWithFeaturesSlide` if it can handle 2+ code blocks. Otherwise keep raw HTML.

---

## Notes
- Total slides: 25 (15 structural, 10 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener, BeforeAfterPanelsSlide, FourCardGridSlide, ProblemSolutionOutcomeSlide (slide 17), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- This deck already has several content components in place (Slides 5–6, 17 already use FourCardGridSlide, BeforeAfterPanelsSlide, ProblemSolutionOutcomeSlide)
