# Deck: copilot-sdk

**Status:** � Conformed — 6 slides converted, 4 kept raw HTML (flow diagram ×2, long scripts ×2)
**Deck file:** `slides/tech-talks/copilot-sdk.md`
**Raw HTML slides converted:** 6 of 10

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | How SDK Works | 4-item horizontal flow (Application→SDK→CLI→Service) + 2-col responsibility boxes | — | **Keep raw HTML** (4-stage flow diagram, no component match) |
| 6 | SDK Capabilities | 4-col grid (Core Agent / Advanced / SDK-Specific / Security-Production features) + info banner | `FourCardGridSlide` | ✅ Map |
| 8 | Getting Started | 2-col: left install commands (3 languages) + prerequisites; right Python basic chat code | `CodeWithFeaturesSlide` | ✅ Map |
| 9 | Pattern 1 — CLI Tool | Full Python script (release-notes.py) + outcome metric banner (92% reduction) | `TerminalDemoSlide` (planned) | Conditional |
| 11 | Pattern 2 — Web API | Flask API code block (PR analysis + security client) + 2 info boxes (Security / Integration) | `CodeWithFeaturesSlide` | ✅ Map |
| 12 | Pattern 3 — Scheduled Automation | Python automation script + schedule definition + outcome metric (45min→5min) | `TerminalDemoSlide` (planned) | Conditional |
| 14 | Use Case 1 — Release Engineering | 2-col red/green before-after + implementation highlights + outcome metric (2+ hrs → 10 min) | `BeforeAfterMetricsSlide` | Conditional |
| 15 | Use Case 2 — Test Infrastructure | Same before-after pattern: analysis outputs + outcome (45min→5min, 60% blockage reduction) | `BeforeAfterMetricsSlide` | Conditional |
| 16 | Use Case 3 — Code Review Bots | Same before-after pattern: review scope + outcome (50% faster, 2× throughput) | `BeforeAfterMetricsSlide` | Conditional |

**Summary:** 3 direct maps · 6 conditional · 1 keep raw HTML

### Keep Raw HTML rationale
- **Slide 5:** 4-stage horizontal flow diagram (Application→SDK→CLI→Service) with responsibility breakdowns — no component covers ordered pipeline diagrams.

---

## Phase 2 — Conversion Order

1. Slide 6 → `<FourCardGridSlide>` (SDK Capabilities)
2. Slide 8 → `<CodeWithFeaturesSlide>` (Getting Started)
3. Slide 11 → `<CodeWithFeaturesSlide>` (Web API Pattern)

---

## Phase 3 — Conditional Decisions

- **Slides 9, 12** (Pattern 1/3): Full-script code blocks + outcome metric banners. `TerminalDemoSlide` (when built) is designed for this. Until then, keep raw HTML.
- **Slides 14, 15, 16** (Use Cases 1–3): All three follow the same 2-col red/green before-after + implementation box + metric outcome pattern. `BeforeAfterMetricsSlide` should cover this. Hinge: does the "implementation highlights" middle section fit in the component? If so → ✅ Map all three. These three are a natural batch to convert together.

---

## Notes
- Total slides: 20 (10 structural, 10 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener (parts 1–4), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- Slides 14–16 are the same template repeated — convert as a batch
- Slides 9 and 12 are code-pattern demos that will benefit from `TerminalDemoSlide` once built
