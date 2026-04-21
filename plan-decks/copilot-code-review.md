# Deck: copilot-code-review

**Status:** � Conformed — build verified 2026-04-21
**Deck file:** `slides/tech-talks/copilot-code-review.md`
**Raw HTML slides:** 14 (out of 25 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | Basic Setup — 5 Min to First Review | 2-col: left 3 procedural step cards (cyan); right 2 action cards + 1 success box | — | **Keep raw HTML** (procedural step + outcome pattern) |
| 6 | Custom Guidance with Instruction Files | 2 side-by-side code blocks (instruction file examples) + 2 guidance boxes below | — | **Keep raw HTML** (dual code-block comparison) |
| 7 | Branch Protection Integration | 2-col: left 3 procedural steps; right 1 enforcement + 1 manual action box | — | **Keep raw HTML** (procedural workflow, no component match) |
| 8 | Deployment Patterns (Phased Rollout) | 2×2 grid of 4 phase cards (Pilot/Tune/Expand/Standardize) + best-practice box | `FourCardGridSlide` | ✅ Map |
| 10 | Six Capability Categories | 2×3 grid of 6 category cards (Security/Quality/Tests/Perf/Compliance/Architecture) | `FourCardGridSlide` | Conditional |
| 11 | The Hybrid Analysis Approach | 3-box horizontal flow (Layer 1→2→3 with timing) + 2 benefit/metric boxes | — | **Keep raw HTML** (process flow diagram) |
| 12 | Balancing Automation and Human Review | 2-col (Copilot Handles / Humans Handle) + 5-step workflow below | `TwoColPairedConceptsSlide` | ✅ Map |
| 14 | The Interactive Time-Savings Calculator | 2-col: left workflow steps + metric boxes; right GitHub Actions YAML + link | `CodeWithFeaturesSlide` | Conditional |
| 15 | Quality Metrics — Beyond Time Savings | 2×2 grid: 4 metric cards (Incidents/Revert Rate/Security Vuln/Onboarding) + title + metric + desc | `FourCardGridSlide` | ✅ Map |
| 16 | Optional Reporting Automation | 2-col: left use-case + recommendation; right GitHub Actions workflow YAML | `CodeWithFeaturesSlide` | Conditional |
| 18 | Compliance Through Instruction Files | 2-col: left compliance instructions code; right 2 benefit boxes + 1 practice box | `CodeWithFeaturesSlide` | ✅ Map |
| 19 | HIPAA Compliance Example | 2-col: left HIPAA instructions code; right real-world case study + key patterns | `CodeWithFeaturesSlide` | ✅ Map |
| 20 | PCI-DSS Payment Security | 2-col: left PCI-DSS instructions code; right e-commerce case study + enforcement | `CodeWithFeaturesSlide` | ✅ Map |
| 21 | Compliance Audit Trail Generation | 2-col: left process + export boxes; right reports + pro-tip boxes (audit process grid) | — | **Keep raw HTML** (audit governance layout, too specific) |

**Summary:** 6 direct maps · 3 conditional · 5 keep raw HTML

### Keep Raw HTML rationale
- **Slides 5, 7:** Procedural step-by-step flows with distinct outcome boxes — no pattern match.
- **Slide 6:** Dual side-by-side code block comparison — bespoke code-compare layout.
- **Slide 11:** 3-layer process flow diagram with timing annotations — flow visualization.
- **Slide 21:** Audit trail governance process — unique compliance-specific layout.

---

## Phase 2 — Conversion Order

1. Slide 8 → `<FourCardGridSlide>` (Deployment Patterns)
2. Slide 12 → `<TwoColPairedConceptsSlide>` (Automation vs Human)
3. Slide 15 → `<FourCardGridSlide>` (Quality Metrics)
4. Slide 18 → `<CodeWithFeaturesSlide>` (Compliance Instructions)
5. Slide 19 → `<CodeWithFeaturesSlide>` (HIPAA Example)
6. Slide 20 → `<CodeWithFeaturesSlide>` (PCI-DSS)

---

## Phase 3 — Conditional Decisions

- **Slide 10** (Six Capability Categories): `FourCardGridSlide` is 4 cards only. Could map if 2 categories are deprioritized or folded into descriptions. Otherwise keep raw (or split across 2 slides).
- **Slide 14** (Time-Savings Calculator): Features left / code right is the reverse of `CodeWithFeaturesSlide`. If the component supports a `codePosition: right` variant → ✅ Map. Otherwise keep raw.
- **Slide 16** (Reporting Automation): Same inverted layout as slide 14 (use case left, code right). Same conditional decision.

---

## Notes
- Total slides: 25 (11 structural, 14 raw HTML)
- `CodeWithFeaturesSlide` is the dominant pattern (3 direct + 2 conditional) — this is a very code-heavy deck
- Slides 18–20 form a natural "compliance trilogy" all using the same code-left/guidance-right pattern
