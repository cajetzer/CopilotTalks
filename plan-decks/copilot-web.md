# Deck: copilot-web

**Status:** 🔵 Cataloged — conversion not yet started
**Deck file:** `slides/tech-talks/copilot-web.md`
**Raw HTML slides:** 11 (out of 23 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | Triggering the Agent | 3 equal-width cards (GitHub.com / VS Code / Mobile) with icon+title+desc+extra text | `ThreeColumnCardSlide` | ✅ Map |
| 6 | Inside the Sandbox | 2-col numbered list 1–8 (each: colored border, icon, bold title, desc) | `ConceptStackSlide` (planned) | Conditional |
| 7 | The Evidence Bundle | 2×2 grid: Summary / Tests / Files / Alerts (icon+title+subtitle, gradient bg) | `FourCardGridSlide` | ✅ Map |
| 8 | Separation of Duties | 2-col (Constraint / Why It Matters) + 3-col practical (Tech Lead / Agent / Reviewer) | — | Conditional (2 components needed) |
| 10 | Effective Issue Anatomy | 2-col: left ❌ Weak example (red), right ✅ Effective example (green) + 4 metric pills | `BeforeAfterPanelsSlide` | ✅ Map |
| 11 | Image-Based Issue Creation | 3-col evolution: 📸 Old Way → flow arrow → 🤖 With Web Copilot + metric pills | `ProblemSolutionOutcomeSlide` | Conditional |
| 13 | copilot-setup-steps.yml | 2-col: left code block + 4 tip pills; right visual | `CodeWithFeaturesSlide` | ✅ Map |
| 14 | The Agent Firewall | 2-col: left green allowlist + warning; right blocked log code + interpretation | `BeforeAfterMetricsSlide` | ✅ Map |
| 15 | Firewall Configuration Levels | 2-col: Organization Level (blue, 4 feature boxes) vs Repository Level (indigo, 4 feature boxes) | `TwoColPairedConceptsSlide` | ✅ Map |
| 17 | Evidence-First Review | 3-col flow: Read Bundle → Review Diff → Approve/Iterate + comment comparison boxes | `ProblemSolutionOutcomeSlide` | ✅ Map |
| 18 | Mobile Review and Custom Agents | 2-col: left mobile 5-step workflow + metric pill; right agent spec code block | `CodeWithFeaturesSlide` | ✅ Map |
| 19 | What to Delegate | 2-col: ✅ Delegate (green, 5 items) vs 👤 Keep Human (blue, 5 items) + insight box | `BeforeAfterPanelsSlide` | ✅ Map |

**Summary:** 8 direct maps · 3 conditional · 0 keep raw HTML

---

## Phase 2 — Conversion Order

1. Slide 5 → `<ThreeColumnCardSlide>` (Triggering the Agent)
2. Slide 7 → `<FourCardGridSlide>` (Evidence Bundle)
3. Slide 10 → `<BeforeAfterPanelsSlide>` (Effective Issue Anatomy)
4. Slide 13 → `<CodeWithFeaturesSlide>` (copilot-setup-steps.yml)
5. Slide 14 → `<BeforeAfterMetricsSlide>` (Agent Firewall)
6. Slide 15 → `<TwoColPairedConceptsSlide>` (Firewall Levels)
7. Slide 17 → `<ProblemSolutionOutcomeSlide>` (Evidence-First Review)
8. Slide 18 → `<CodeWithFeaturesSlide>` (Mobile Review)
9. Slide 19 → `<BeforeAfterPanelsSlide>` (What to Delegate)

---

## Phase 3 — Conditional Decisions

- **Slide 6** (Inside the Sandbox): 8 numbered steps in 2 columns with colored left-border accents. `ConceptStackSlide` (when built) targets vertical stacked labeled rows — closest match. But 8 steps across 2 columns may not fit the single-column ConceptStack spec. → Revisit after ConceptStackSlide is built.
- **Slide 8** (Separation of Duties): Two distinct layout regions — 2-col (Constraint/Why) at top + 3-col (Lead/Agent/Reviewer) at bottom. Needs two components or a custom composite. → Keep raw HTML or split into 2 slides.
- **Slide 11** (Image-Based Issue Creation): 3-stage evolution flow. `ProblemSolutionOutcomeSlide` handles 3-step flows. Hinge: does the metric pill row at the bottom fit as the `insight` prop? → Likely ✅ Map.

---

## Notes
- Total slides: 23 (12 structural, 11 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener (parts 1–4), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- 0 keep raw HTML — all slides have viable component candidates
- Excellent deck for Phase 2 conversion: 8 direct maps with no new components required
