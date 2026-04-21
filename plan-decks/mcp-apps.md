# Deck: mcp-apps

**Status:** 🔵 Cataloged — conversion not yet started
**Deck file:** `slides/tech-talks/mcp-apps.md`
**Raw HTML slides:** 15 (out of 26 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | Charts Component | Header (1 of 5), left capabilities bullets, right TypeScript code block | `CodeWithFeaturesSlide` | ✅ Map |
| 6 | Tables Component | Header (2 of 5), left capabilities, right code block (table spec) | `CodeWithFeaturesSlide` | ✅ Map |
| 7 | Forms Component | Header (3 of 5), two left panels (Forms + Trees/Cards), combined code block (form + tree) | `CodeWithFeaturesSlide` | Conditional |
| 8 | Custom Components | Header (4 of 5), two left panels (Security + When to Use), large code block | `CodeWithFeaturesSlide` | ✅ Map |
| 9 | Component Decision Tree | 2×2 grid of 4 decision cards (Charts/Tables/Forms/Trees) + full-width "Don't Use When" warning | — | **Keep raw HTML** (decision grid + warning callout, bespoke) |
| 11 | MCP Server Structure | Header (1 of 3, blue), Key Points box, TypeScript code block (src/index.ts) | `CodeWithFeaturesSlide` | ✅ Map |
| 12 | Callback Handling | Header (2 of 3, blue), Callback Workflow box, code block (form response + handler) + pattern footer | `CodeWithFeaturesSlide` | ✅ Map |
| 13 | Configuration and Testing | Header (3 of 3, blue), Testing Steps (5 bullets), JSON config code block | `CodeWithFeaturesSlide` | ✅ Map |
| 15 | Dashboard Pattern | Header (1 of 4, indigo), Pattern box, code block (multi-component: chart + table) | `CodeWithFeaturesSlide` | ✅ Map |
| 16 | Progressive Drill-Down Pattern | Header (2 of 4, indigo), Pattern box, code block (chart with onClick + handler) | `CodeWithFeaturesSlide` | ✅ Map |
| 17 | Form-Driven Workflow Pattern | Header (3 of 4, indigo), Pattern box, code block (form + callback) | `CodeWithFeaturesSlide` | ✅ Map |
| 18 | Hierarchical Navigation Pattern | Header (4 of 4, indigo), Pattern + Integration Patterns boxes, code block (tree + callback) | `CodeWithFeaturesSlide` | ✅ Map |
| 20 | Use Case 1: System Metrics Dashboard | 2-col Before/After + TypeScript code block + metric footer (15-20 min → 90 sec, 8×) | `BeforeAfterMetricsSlide` | ✅ Map |
| 21 | Use Case 2: Database Query Results | Same Before/After pattern + code block + metrics footer (10 min → 2 min, 240 min/day) | `BeforeAfterMetricsSlide` | ✅ Map |
| 22 | Use Case 3: Project Scaffolding Forms | Same Before/After pattern + code block + metrics footer | `BeforeAfterMetricsSlide` | ✅ Map |

**Summary:** 13 direct maps · 1 conditional · 1 keep raw HTML

### Keep Raw HTML rationale
- **Slide 9** (Component Decision Tree): 2×2 decision grid + full-width "Don't Use When" warning callout — bespoke decision-tree layout.

---

## Phase 2 — Conversion Order

`CodeWithFeaturesSlide` is the overwhelming pattern here — convert in section order:
1. Slides 5, 6, 8 → `<CodeWithFeaturesSlide>` (Component Types section)
2. Slides 11, 12, 13 → `<CodeWithFeaturesSlide>` (Building MCP Apps section)
3. Slides 15, 16, 17, 18 → `<CodeWithFeaturesSlide>` (Real-World Patterns section)
4. Slides 20, 21, 22 → `<BeforeAfterMetricsSlide>` (Use Cases section — batch of 3)

---

## Phase 3 — Conditional Decisions

- **Slide 7** (Forms Component): Has 2 left-side panels (Forms caps + Trees/Cards combined) rather than 1 single feature panel. If `CodeWithFeaturesSlide` supports a multi-section left column → ✅ Map. Otherwise → keep raw HTML (or split into 2 slides for Forms and Trees/Cards separately).

---

## Notes
- Total slides: 26 (11 structural, 15 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener (parts 1–4), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- `CodeWithFeaturesSlide` dominates with 12 uses — this is one of the most code-heavy decks in the catalog
- The 4-slide pattern section (15–18) and 3-slide use case section (20–22) are natural batches
- 13/15 raw slides map cleanly — only 1 keep raw, 1 conditional
