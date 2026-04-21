# Deck: enterprise-patterns

**Status:** 🔵 Cataloged — conversion not yet started  
**Deck file:** `slides/tech-talks/enterprise-patterns.md`  
**Raw HTML slides:** 11 (out of 22 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | The Traditional Problem | 2-col before-after: left red (3 ✗ bullets + 2,000 hrs tile), right cyan (3 ✓ bullets + 16× ROI tile) | `BeforeAfterMetricsSlide` | ✅ Map |
| 6 | What to Standardize | 2×2 grid: Security / Frameworks / Quality / Performance (icon+title+bullets, gradient borders) | `FourCardGridSlide` | ✅ Map |
| 7 | Monorepo Nested Playbooks | 2-col: left nested code block (file tree); right decision matrix (3 bullets + explanation) | `CodeWithFeaturesSlide` | ✅ Map |
| 9 | Organizational Agent Skills | 2-col card grid + 3-step workflow strip below + insight box | — | **Keep raw HTML** (unique agent skills layout with code-pill names + 3-step workflow below) |
| 10 | Copilot Knowledge Bases | 2-col: left problem (4 ✗ bullets); right knowledge base solution + repo structure code + 3-col metric tiles | `BeforeAfterMetricsSlide` | ✅ Map |
| 12 | Model Governance & Auto Selection | 2-col: left policy framework (4 bullets, indigo); right cost optimization (4 ✓ bullets, purple) + 3 metric tiles | `TwoColPairedConceptsSlide` | ✅ Map |
| 13 | Flexible Licensing Strategies | 3 equal-width cards: Full Seats / Usage-Based / Review-Only (icon+title+subtitle+3 bullets) + 3 metric tiles | `ThreeColumnCardSlide` | ✅ Map |
| 14 | Compliance Automation | 2-col: left 🛡️ control points (3 bullets); right 🤖 automated validation code block + 3 metric tiles (HIPAA/SOC 2/FedRAMP) | `CodeWithFeaturesSlide` | ✅ Map |
| 16 | Metrics Framework | 3 equal-width cards: Leading / Intermediate / Lagging (emoji+title+4 metric bullets) + 3 tiles + insight | `ThreeColumnCardSlide` | ✅ Map |
| 17 | Self-Service Onboarding | 2-col: left 📦 kit components (folder/code structure); right ⏱️ 30-minute 4-step flow + 3 metric tiles | `CodeWithFeaturesSlide` | ✅ Map |
| 18 | Federated Governance Model & ROI | 2-col: left platform team owns (4 bullets + investment box, pink); right teams own (4 bullets + returns box, orange) + 3 metric tiles + insight | `TwoColPairedConceptsSlide` | ✅ Map |

**Summary:** 10 direct maps · 0 conditional · 1 keep raw HTML

### Keep Raw HTML rationale
- **Slide 9** (Organizational Agent Skills): 2-col card grid with code-pill-formatted skill names (domain expertise + cross-cutting), plus a 3-step horizontal workflow strip (Author→Publish→Propagate) at the bottom. The dual-region layout (card grid above + workflow below) doesn't fit any single component.

---

## Phase 2 — Conversion Order

1. Slide 5 → `<BeforeAfterMetricsSlide>` (Traditional Problem)
2. Slide 6 → `<FourCardGridSlide>` (What to Standardize)
3. Slides 7, 14, 17 → `<CodeWithFeaturesSlide>` (Monorepo Playbooks, Compliance, Self-Service)
4. Slide 10 → `<BeforeAfterMetricsSlide>` (Knowledge Bases)
5. Slides 12, 18 → `<TwoColPairedConceptsSlide>` (Model Governance, Federated Governance)
6. Slides 13, 16 → `<ThreeColumnCardSlide>` (Licensing Strategies, Metrics Framework)

---

## Notes
- Total slides: 22 (11 structural, 11 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener (parts 1–4), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- Excellent match rate: 10/11 raw slides map directly
- `CodeWithFeaturesSlide` dominates (3 instances) — this is a code + governance pattern deck
- `ThreeColumnCardSlide` used 2× and `TwoColPairedConceptsSlide` 2× — consistent structure throughout
