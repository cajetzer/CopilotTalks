# Deck: copilot-hooks

**Status:** 🔵 Cataloged — conversion not yet started
**Deck file:** `slides/tech-talks/copilot-hooks.md`
**Raw HTML slides:** 15 (out of 26 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | The 8 Lifecycle Events | 2×4 eight-item grid with gradient-colored event cards (icon+title+desc) + insight box | — | **Keep raw HTML** (8-event grid, no component handles 2×4 variant-color) |
| 6 | Hook Configuration Format | JSON code block + 2-col card grid below (Config Locations / Platform Overrides) | `CodeWithFeaturesSlide` | ✅ Map |
| 7 | Execution Flow | 6-step horizontal flow diagram (Event→Discover→Invoke→Context→Wait→Decision) + 3-col outcome cards | — | **Keep raw HTML** (procedural flow diagram) |
| 8 | Performance & Timing | 2-col (Target Times / Performance Patterns) + amber alert + 2-col (Pitfalls ❌ / Quick Wins ✅) | `BeforeAfterMetricsSlide` | ✅ Map |
| 10 | Security Check Implementation | Single bash code block + insight box (no feature column) | — | **Keep raw HTML** (code-only, no parallel features) |
| 11 | Permission Decisions | 2-col + 1-col: ✅ allow + updatedInput / 🤔 ask / 🛑 deny; blue priority rule box | — | **Keep raw HTML** (decision state tree, not comparable cards) |
| 12 | File Path & Environment Restrictions | 2-col code blocks (File Path / Environment-Aware Policies) + purple multi-env example | `TwoColPairedConceptsSlide` | ✅ Map |
| 13 | Context Injection | bash code block + 2-col card grid (Use Cases / Hooks That Support It) | `CodeWithFeaturesSlide` | ✅ Map |
| 15 | JSON Lines Logging | bash/jq code block + 2-col card grid (Why JSON Lines? / Example Queries) | `CodeWithFeaturesSlide` | ✅ Map |
| 16 | Complete Audit Configuration | Full JSON code block + insight box with jq query (no feature column) | — | **Keep raw HTML** (code-only) |
| 17 | Querying Audit Logs | 4-col card grid (Count/Denied/Export/Subagent) each with code block + desc | `FourCardGridSlide` | ✅ Map |
| 18 | Integration Patterns | 4-col card grid (Slack/PagerDuty/Datadog/Jira) with icon+title+desc | `FourCardGridSlide` | ✅ Map |
| 21 | SOC 2 Security Enforcement | 2-col red/green (❌ Before / ✅ With Hooks) + 2-col card grid below | `BeforeAfterMetricsSlide` | ✅ Map |
| 22 | Multi-Tenant Quality Gates | 2-col before/after + metric pairs (value+label) + 2-col card grid below | `BeforeAfterMetricsSlide` | ✅ Map |

Note: Slide 20 (HIPAA Compliance Audit Trail) is already a `BeforeAfterMetricsSlide` component.

**Summary:** 9 direct maps · 0 conditional · 5 keep raw HTML (slides 5, 7, 10, 11, 16)

### Keep Raw HTML rationale
- **Slide 5:** 8-event lifecycle grid with distinct color coding per event — no 2×4 variant exists.
- **Slide 7:** 6-step horizontal flow diagram with exit-code outcomes — procedural/diagram idiom.
- **Slide 10:** Code-only slide with no parallel feature column.
- **Slide 11:** Permission decision tree (allow/ask/deny) — mutually exclusive states, not comparable cards.
- **Slide 16:** Code-only audit configuration — no parallel feature column.

---

## Phase 2 — Conversion Order

1. Slides 6, 13, 15 → `<CodeWithFeaturesSlide>`
2. Slides 8, 21, 22 → `<BeforeAfterMetricsSlide>`
3. Slide 12 → `<TwoColPairedConceptsSlide>`
4. Slides 17, 18 → `<FourCardGridSlide>`

---

## Notes
- Total slides: 26 (11 structural, 15 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener, BeforeAfterMetricsSlide (slide 20), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- 9/15 raw slides map cleanly — 60% reduction in raw HTML footprint
- `CodeWithFeaturesSlide` (×3) and `BeforeAfterMetricsSlide` (×3) are the dominant patterns
