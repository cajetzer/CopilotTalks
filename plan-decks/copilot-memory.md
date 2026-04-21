# Deck: copilot-memory

**Status:** 🔵 Cataloged — conversion not yet started  
**Deck file:** `slides/tech-talks/copilot-memory.md`  
**Raw HTML slides:** 13 (out of 24 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | Memory Tool Architecture | 2-col: left Store Operation (pseudo-code), right Retrieve Operation (pseudo-code) | `CodeWithFeaturesSlide` | ✅ Map |
| 6 | Storage Decision Logic | 2-col decision matrix: left ✅ Store (green bullets), right ❌ Don't Store (red bullets) + info box | `BeforeAfterPanelsSlide` | ✅ Map |
| 7 | Semantic Retrieval & Sync | 2-col: left Semantic Retrieval bullets, right Cross-Environment Sync pseudo-code block | `CodeWithFeaturesSlide` | ✅ Map |
| 9 | Enabling Memory | Code config block (VS Code JSON) + 3 equal-width cards below (What Happens / Multi-Env / Zero Config) | `CodeWithFeaturesSlide` | ✅ Map |
| 10 | Viewing and Managing Memories | 2-col: left memory viewing examples (list), right delete/management stacked boxes | `BeforeAfterPanelsSlide` | ✅ Map |
| 12 | Ideal Candidates for Memory | 2×2 grid: Coding Style / Workflow / Communication / Architectural Decisions (icon+title+bullets) | `FourCardGridSlide` | ✅ Map |
| 13 | What Should NOT Be Stored | 2×2 grid: Session-Specific / Temp Debugging / Sensitive Info / Team Standards (with italic rationale) | `FourCardGridSlide` | ✅ Map |
| 14 | Memory vs Custom Instructions | 2-col: purple "Use Memory When" bullets vs cyan "Use Instructions When" bullets + code examples | `TwoColPairedConceptsSlide` | ✅ Map |
| 15 | The Persistence Test | 2×2 grid: 4 decision questions (title + specific phrasing + rationale) + best practice box | `FourCardGridSlide` | ✅ Map |
| 17 | Privacy and Security Model | 2-col: left ✅ What Gets Stored (green), right ❌ NEVER Stored (red) + 2×2 enterprise grid | `BeforeAfterPanelsSlide` | ✅ Map |
| 18 | Memory Hygiene & Best Practices | 2-col: green "Good—Explicit" (code examples) vs red "Vague—Generic" (bad examples) + 4-step hygiene strip | `BeforeAfterPanelsSlide` | ✅ Map |
| 19 | Progressive Memory Profiles | 4-col progressive flow: Week 1→4 (emoji number + title + desc + bullets) + outcome box | `TerminalDemoSlide` (planned) | Conditional |
| 20 | Real-World Impact | 3-col impact tiles (Style / Architectural / Communication), each with Before→After metrics + ROI summary | `BeforeAfterMetricsSlide` | ✅ Map |

**Summary:** 12 direct maps · 1 conditional · 0 keep raw HTML

---

## Phase 2 — Conversion Order

1. Slides 6, 10, 17, 18 → `<BeforeAfterPanelsSlide>`
2. Slides 5, 7, 9 → `<CodeWithFeaturesSlide>`
3. Slides 12, 13, 15 → `<FourCardGridSlide>`
4. Slide 14 → `<TwoColPairedConceptsSlide>`
5. Slide 20 → `<BeforeAfterMetricsSlide>`

---

## Phase 3 — Conditional Decisions

- **Slide 19** (Progressive Memory Profiles): 4-column horizontal progression (Week 1→4) — could use `ConceptStackSlide` if horizontal layout is supported, or `TerminalDemoSlide` for sequential stages. Most likely keep raw HTML until ConceptStackSlide or a dedicated horizontal-flow component exists.

---

## Notes
- Total slides: 24 (11 structural, 13 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener (parts 1–4), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- Exceptional match rate: 12/13 raw slides map cleanly
- `BeforeAfterPanelsSlide` dominates (4 direct maps) — deck is fundamentally about what-to/what-not-to patterns
- `FourCardGridSlide` used 3× for the "what to store" taxonomy slides
