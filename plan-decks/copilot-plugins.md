# Deck: copilot-plugins

**Status:** 🔵 Cataloged — conversion not yet started  
**Deck file:** `slides/tech-talks/copilot-plugins.md`  
**Raw HTML slides:** 7 (out of 25 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 6 | Installing and Managing Plugins | 3-col card grid: Install (emerald) / Update (blue) / Remove (red); each with code + desc | `ThreeColumnCardSlide` | ✅ Map |
| 8 | CLI vs VS Code UI | 2-col: left CLI Workflow card (bullets+commands), right VS Code UI Workflow card (bullets+steps) + sync notification box | `TwoColPairedConceptsSlide` | Conditional |
| 12 | Configuration as Code Benefits | 2-col: left stacked red/green before-after cards; right tall blue "Three Principles" numbered card | `BeforeAfterPanelsSlide` | Conditional |
| 13 | Per-Repository Configuration | 3-col: 3 project cards (data-pipeline/web-app/microservice), each with emoji + name + tech stack snippet + desc | `ThreeColumnCardSlide` | ✅ Map |
| 17 | Lockfile Workflow | 4-col lifecycle: 1 Initial Setup / 2 Daily Use / 3 Updates / 4 CI Validation; each with big number + title + bullets | `ConceptStackSlide` (planned) | Conditional |
| 18 | CI Integration | 2-col: left GitHub Actions YAML code block; right 3 stacked outcome boxes (Success/Failure/Fix) | `CodeWithFeaturesSlide` | Conditional |
| 21 | Use Case — Standardized Code Review | 2-col top (Scenario prose + Shared Template YAML); middle full-width 3-step workflow (Setup→Onboard→Result) | `CodeWithFeaturesSlide` | Conditional |

**Summary:** 2 direct maps · 5 conditional · 0 keep raw HTML

---

## Phase 2 — Conversion Order

1. Slide 6 → `<ThreeColumnCardSlide>` (Install/Update/Remove)
2. Slide 13 → `<ThreeColumnCardSlide>` (Per-Repository Config)

---

## Phase 3 — Conditional Decisions

- **Slide 8** (CLI vs VS Code UI): Clean 2-col comparison with an additional sync notification at the bottom. `TwoColPairedConceptsSlide` should handle this if the notification maps to `insight`. → Likely ✅ Map.
- **Slide 12** (Config as Code Benefits): Left = before/after stacked cards; right = tall "Three Principles" card with numbered sections. Asymmetric — `BeforeAfterPanelsSlide` expects symmetric panels. The "Principles" right panel breaks symmetry. → Likely keep raw HTML.
- **Slide 17** (Lockfile Workflow): 4-col horizontal lifecycle. `ConceptStackSlide` (when built) targets vertical stacked rows. Horizontal 4-stage progression doesn't match that spec. → Keep raw HTML unless ConceptStackSlide supports horizontal mode.
- **Slide 18** (CI Integration): Code left + stacked outcome boxes right is close to `CodeWithFeaturesSlide` pattern. Hinge: are 3 stacked outcome pills acceptable as "features"? → Likely ✅ Map.
- **Slide 21** (Standardized Code Review): Prose + code top section + full-width 3-step workflow below. Mixed layout — `CodeWithFeaturesSlide` covers the top but the 3-step workflow below doesn't have a component slot. → Keep raw HTML.

---

## Notes
- Total slides: 25 (18 structural, 7 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener, CodeWithFeaturesSlide (slides 5, 10, 11), TwoColPairedConceptsSlide (slide 7), BeforeAfterPanelsSlide (slide 16), ThreeColumnCardSlide (slide 20), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- This deck already has the highest structural component ratio (18/25 = 72%)
- Only 7 raw HTML slides remain; 2 direct maps, 5 conditional
