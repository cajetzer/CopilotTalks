# agentic_sdlc / facts

Confirmed facts about agentic SDLC tech-talk decks: agentic-sdlc, agentic-workflows, agentic-journey, enterprise-patterns.

---

## agentic-workflows deck: prop lint status as of 2026-04-22

`schema_version: 1` | `date: 2026-04-22`

`slides/tech-talks/agentic-workflows.md` — 24 slides, builds `[OK]`. One known prop lint warning that is intentional/accepted:

- **line 307**: `FrameworkMappingRowsSlide` — label `"Labels & Assign"` (15 chars, max 13). The label wraps slightly in the `w-28` column but the slide is still readable. Accepted as-is by author.

All other prop limits pass: no description overflows, no blurb overflows, no title overflows.

---

## agentic-sdlc deck: WGLL content absorbed into AgentRC levels (2026-04-24)

`schema_version: 1` | `date: 2026-04-24`

The `captures/wgll.md` "What Good Looks Like" framework was fully woven into `tech-talks/agentic-sdlc/README.md`, the deck recipe, and `slides/tech-talks/agentic-sdlc.md`. Key decisions:

**Do not mention WGLL.** All signals, metrics, and adoption criteria from WGLL are absorbed invisibly into AgentRC L1–L5 level definitions. No "WGLL", "Ring X", "two frameworks", or dual-model framing anywhere — not in slides, recipe, or README.

**Single enriched model.** Each AgentRC level (L1–L5) now has three signal dimensions: Platform Readiness, Adoption Depth, and Governance maturity. The content reads as one authoritative framework, not a comparison.

**README structure after merge:**
- Section "Two Frameworks, One Journey" → renamed "Maturity Assessment Framework"
- "WGLL Ring Signals" sub-headings → "Adoption & Governance Signals" / "Developer Adoption Signals"
- Mapping table (L1 ↔ Ring X columns) → Platform Readiness / Adoption Stage columns
- Implementation Roadmap: "WGLL Ring X actions" → plain adoption/governance actions
- WGLL removed from References

**Deck recipe:** Subtitle updated to "Designing the SDLC Your Agents Deserve". Section "Unified Maturity Model" → "Maturity Model". All highlight moments rewritten without WGLL attribution.

**Build state:** `.\build.ps1 -Deck agentic-sdlc` — zero warnings as of 2026-04-24.

---


`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/agentic-sdlc.md` is 🟢 Conformed. 11 raw HTML slides remain by design.

**Converted (5 slides):**

| Slide | Name | Component | Notes |
|---|---|---|---|
| 12 | Monorepo Default | `TwoColPairedConceptsSlide` (partNumber=2, 1 of 3) | ✅ converted 2026-04-21 |
| 13 | The Coordination Tax | `BeforeAfterMetricsSlide` (partNumber=2, 2 of 3, 3 metrics) | ✅ converted 2026-04-21 |
| 16 | The Economic Shift | `BeforeAfterPanelsSlide` (partNumber=3, 1 of 3) | ✅ converted 2026-04-21 |
| 20 | The 10-Minute Rule | `BeforeAfterPanelsSlide` (partNumber=4, 1 of 3) | ✅ converted 2026-04-21 |
| 23 | Key Takeaways | `FourCardGridSlide` (partNumber=4, 1 of 1) | ✅ converted 2026-04-21; standalone summary slide, not part of section dot progression |

**Kept raw HTML (11 slides):**

| Slide | Name | Reason |
|---|---|---|
| 5 | The AgentRC Levels | 5-column horizontal progression with arrow connectors — no component covers 5-col layouts |
| 6 | Level 1 — Functional | Deck-specific: quote block + 3-col grid (Time Lost / What Changes / Key Checks) ×5 pattern |
| 7 | Level 2 — Documented | Same 3-col pattern as slide 6 |
| 8 | Level 3 — Standardized | Same 3-col pattern as slide 6 |
| 9 | Level 4 — Optimized | Same 3-col pattern as slide 6 |
| 10 | Level 5 — Autonomous | Same 3-col pattern as slide 6 |
| 14 | Enforced Module Boundaries | Code snippets embedded in before/after panels — `BeforeAfterPanelsSlide` items are plain strings, can't render code |
| 17 | Intent-Based PRs | 3 stacked numbered steps + 2-col comparison — `ConceptStackSlide` not yet built |
| 18 | The Governance Pyramid | Pyramid-shaped stacked sections — bespoke visual, no component match |
| 21 | How to Achieve Fast CI | 5-column horizontal cards — FourCardGridSlide is 4 cards only |
| 22 | Zero-Flake Tolerance | Problem callout box + 2-col + metric strip — problem box at top has no component fit |

**Deck-specific pattern note:**
Slides 6–10 (Level 1–5 detail slides) share an identical layout: italic quote block + 3-column grid. This pattern is unique to this deck. If it recurs elsewhere, create a `LevelDetailSlide` component. Until then, keep raw HTML.

**Slide 17 (Intent-Based PRs) future path:**
Blocked on `ConceptStackSlide` (planned but not built). When `ConceptStackSlide` is built, revisit this slide. The 3 stacked numbered steps (Intent Specification / Policy Enforcement / Outcome Validation) are the target pattern.
