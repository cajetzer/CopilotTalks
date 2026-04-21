# Deck: agentic-journey

**Status:** 🔵 Cataloged — conversion not yet started  
**Deck file:** `slides/tech-talks/agentic-journey.md`  
**Raw HTML slides:** 11 (all body content slides; structural slots already correct)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | Triage Workflow & Metrics | 4 stacked numbered steps (left) + 2×2 metric grid (right) | `ConceptStackSlide` (new) | ✅ Map (new component) |
| 6 | Use Case — Duplicate Elimination | 2-col red/green panels + bottom outcome box | `BeforeAfterPanelsSlide` | ✅ Map |
| 8 | Historical Context Innovation | Concept explanation + 2-col before/after narrative + example | `BeforeAfterPanelsSlide` | ✅ Map |
| 9 | Planning Metrics & Example | 2-col before/after metrics (red/green) + indigo detail panel | `BeforeAfterMetricsSlide` | Conditional |
| 11 | The Copilot Coding Agent | 3-col capability grid (icon+title+desc) + 2-col comparison | `ThreeColumnCardSlide` | Conditional |
| 12 | Assigning the Copilot Agent | 2-col workflow paths (manual/automated) + 3-col detail grid below | `TwoColPairedConceptsSlide` | ✅ Map |
| 13 | Coding Metrics | 2-col before/after metrics + guideline checklist grid + ROI | `BeforeAfterMetricsSlide` | ✅ Map |
| 15 | Review Focus Areas | 4-col equal cards (security/logic/perf/tests) + insight box | `FourCardGridSlide` | ✅ Map |
| 16 | Review Metrics & Security Impact | 2-col red/green narrative + 4 metric tiles row + ROI | `BeforeAfterMetricsSlide` | ✅ Map |
| 17 | When to Graduate to Full SDLC | 2-col warnings/solutions + nested upgrade path comparison | `TwoColPairedConceptsSlide` | Conditional |
| 18 | Expected ROI | 4-row × 4-col phase financial grid + combined summary | — | **Keep raw HTML** (financial dashboard) |

**Summary:** 6 direct maps · 3 conditional · 1 new component (ConceptStackSlide, shared) · 1 keep raw HTML

### Keep Raw HTML rationale
Slide 18 is a financial ROI dashboard with a 4×4 metric grid (phase × metric-type) — no component pattern covers columnar financial summary tables. Keep as bespoke HTML.

---

## Phase 2 — Conversion Order

Convert ✅ slides (6 direct maps; ConceptStackSlide must be built first):
1. Slide 6 → `<BeforeAfterPanelsSlide>`
2. Slide 8 → `<BeforeAfterPanelsSlide>`
3. Slide 13 → `<BeforeAfterMetricsSlide>`
4. Slide 15 → `<FourCardGridSlide>`
5. Slide 16 → `<BeforeAfterMetricsSlide>`
6. Slide 12 → `<TwoColPairedConceptsSlide>`
7. Slide 5 → `<ConceptStackSlide>` (after ConceptStackSlide is built — see Phase 4)

---

## Phase 3 — Conditional Decisions (post-visual-inspect)

- **Slide 9** (Planning Metrics + detail panel): `BeforeAfterMetricsSlide` has metric tiles at bottom. This slide has an indigo detail panel (formatted plan example) below the before/after. If that panel fits as `insight`, ✅ map. Otherwise → keep raw HTML.
- **Slide 11** (Copilot Coding Agent): 3-col capability grid + bottom 2-col comparison box. `ThreeColumnCardSlide` covers the top grid; if `insight` can hold the 2-col comparison → ✅ map. Otherwise → keep raw HTML.
- **Slide 17** (Graduate to Full SDLC): 2-col warnings/solutions + nested 2-col upgrade path table inside. `TwoColPairedConceptsSlide` with nested `items` — if the upgrade comparison fits as items → ✅ map. Otherwise → keep raw HTML.

---

## Phase 4 — New Components Needed

### ConceptStackSlide (shared with copilot-cli and agent-teams)
- **Covers here:** Slide 5 (4 stacked numbered workflow steps + metrics grid)
- **Already planned** — build once, reuse across all three decks.

---

## Notes
