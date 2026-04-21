# Deck: copilot-azure-mcp

**Status:** 🔵 Cataloged — conversion not yet started
**Deck file:** `slides/tech-talks/copilot-azure-mcp.md`
**Raw HTML slides:** 11 (out of 22 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | Interactive Resource Discovery | 2-col query showcase: Storage Accounts card + Cosmos DB Throughput card, monospace results | — | **Keep raw HTML** (bespoke query showcase with result lists) |
| 6 | Configuration Extraction for Templating | Multi-card workflow: left Extract Network Config + Scaffold Variant; right 3 nested steps | — | **Keep raw HTML** (complex workflow with mixed card types) |
| 7 | The Mental Model Shift | 2-col: left 3 red "Move Away From" cards, right 3 cyan "Move Toward" cards; emerald insight | `TwoColPairedConceptsSlide` | ✅ Map |
| 9 | Plan Mode: Clarify Before Code | 4-step process boxes in irregular 2×2 grid (each step: title + content) | — | **Keep raw HTML** (4-step process, irregular grid) |
| 10 | The Compression Effect | 2-col before/after timeline: red 4-step (45 min) vs blue 4-step (8 min/5.6×) | `BeforeAfterMetricsSlide` | ✅ Map |
| 11 | Real Use Case: Rapid Environment Cloning | 2-col: left Scenario + 4-step Workflow; right Cost Optimizations + What You Get + metric | `BeforeAfterMetricsSlide` | Conditional |
| 13 | Installation and Connection | 2-col mixed: left 3 install options + auth snippet; right JSON config + verify command | — | **Keep raw HTML** (heterogeneous install/config/auth layout) |
| 14 | Service Selection and Verification | 4 distinct card sections (Service Selection, Restart, Verification, Key Points) | `FourCardGridSlide` | ✅ Map |
| 16 | Understanding RBAC Inheritance | 2-col: left RBAC scoping roles + security boundary; right capability matrix (✅/❌) | `TwoColPairedConceptsSlide` | Conditional |
| 17 | Read-Only Mode for Safe Exploration | 2-col: left CLI commands + JSON config; right success/fail examples + benefits checklist | `CodeWithFeaturesSlide` | ✅ Map |
| 18 | Subscription Boundaries | 2-col: left large JSON config block; right 4-stage trust path + 2 warning boxes | `CodeWithFeaturesSlide` | ✅ Map |

**Summary:** 5 direct maps · 2 conditional · 4 keep raw HTML

### Keep Raw HTML rationale
- **Slide 5:** Query showcase with live result output — bespoke demo visualization.
- **Slide 6:** Complex workflow progression with mixed card types and nested steps.
- **Slide 9:** 4-step process with irregular grid — not a standard 3-step flow.
- **Slide 13:** Heterogeneous layout combining install options, auth code, config JSON, and verification — no single component fits.

---

## Phase 2 — Conversion Order

1. Slide 7 → `<TwoColPairedConceptsSlide>` (Mental Model Shift)
2. Slide 10 → `<BeforeAfterMetricsSlide>` (Compression Effect)
3. Slide 14 → `<FourCardGridSlide>` (Service Selection)
4. Slide 17 → `<CodeWithFeaturesSlide>` (Read-Only Mode)
5. Slide 18 → `<CodeWithFeaturesSlide>` (Subscription Boundaries)

---

## Phase 3 — Conditional Decisions

- **Slide 11** (Rapid Environment Cloning): Narrative scenario on left, cost optimizations + outcome on right. `BeforeAfterMetricsSlide` works if treating scenario as "before" state and optimized environment as "after". Hinge: does the metric (8× faster) map to the metrics tiles prop? → Likely ✅ Map.
- **Slide 16** (RBAC Inheritance): 2-col with heavy nested detail (role boxes, capability matrix). `TwoColPairedConceptsSlide` possible if nested boxes simplify to bullet items. If nesting is essential → keep raw HTML.

---

## Notes
- Total slides: 22 (11 structural, 11 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener, BeforeAfter, WhatYouCanDoToday, References, ThankYou
