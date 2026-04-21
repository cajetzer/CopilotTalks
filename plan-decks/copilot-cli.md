# Deck: copilot-cli

**Status:** 🔵 Cataloged — conversion not yet started
**Deck file:** `slides/tech-talks/copilot-cli.md`
**Raw HTML slides:** 25 (all body content slides; structural slots already correct)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 4 | The Distance Model | Vertical stacked labels (5 items, gradients) | — | **New: ConceptStackSlide** |
| 5 | The 84% Problem | Hero stat + 2×2 card grid | — | **Unclear — inspect** |
| 7 | Plan Mode: Fundamental Shift | Before/after numbered steps | `BeforeAfterPanelsSlide` | ✅ Map |
| 8 | Docker Debugging Demo | Full-width terminal block | — | **New: TerminalDemoSlide** |
| 9 | Real-Time Steering | 2-col stacked feature cards | `TwoColPairedConceptsSlide` | ✅ Map |
| 10 | Reasoning Models | 4-tier header + 2-box content | — | **Unclear — inspect** |
| 11 | Operating Modes | 2×2 cards with code snippets | `FourCardGridSlide` | Conditional |
| 12 | CI/CD Automation | Full-width terminal block (YAML) | — | **New: TerminalDemoSlide** |
| 14 | Built-in Agents | 2×2 icon+title+description | `FourCardGridSlide` | ✅ Map |
| 15 | /fleet Fan-Out | Code left + stacked cards right | `CodeWithFeaturesSlide` (left) | ✅ Map |
| 16 | Cloud Delegation | Code left + stacked cards right | `CodeWithFeaturesSlide` (left) | ✅ Map |
| 17 | Context Management | Asymmetric 2-col (3 small + 1 large) | `TwoColPairedConceptsSlide` | Conditional |
| 18 | Extensibility | 3-col pill-header cards | `ThreeColumnCardSlide` | ✅ Map |
| 19 | Mental Model Shift | 2-col do/don't (green/red) | `BeforeAfterPanelsSlide` | ✅ Map |
| 21 | How --remote Works | Code left + 3 stacked cards right | `CodeWithFeaturesSlide` (left) | ✅ Map |
| 22 | Why --remote Matters | 3 tall vertical cards | `ThreeColumnCardSlide` | ✅ Map |
| 23 | Combination Patterns | 5 horizontal label+content rows | — | **New: ConceptStackSlide** |
| 24 | Walking-to-Meeting Demo | Terminal + 3 metric tiles below | — | **New: TerminalDemoSlide** |
| 26 | Log Forensics | Code left + 3 stacked cards right | `CodeWithFeaturesSlide` (left) | ✅ Map |
| 27 | Infra Patrol & Multi-Machine | 2 mini-demos side by side (code) | `TwoColPairedConceptsSlide` | ✅ Map |
| 28 | GitHub.com Integration | 2×2 grid with code examples | `FourCardGridSlide` | Conditional |

**Summary:** 12 direct maps · 3 conditional · 6 needing new components (2–3 types)

---

## Phase 2 — Conversion Order

Convert ✅ slides in this order (low risk first):
1. Slide 14 → `<FourCardGridSlide>` (cleanest 2×2)
2. Slide 18 → `<ThreeColumnCardSlide>` (pill-header columns)
3. Slide 22 → `<ThreeColumnCardSlide>` (3 tall cards)
4. Slide 7 → `<BeforeAfterPanelsSlide>` (before/after steps)
5. Slide 19 → `<BeforeAfterPanelsSlide>` (do/don't)
6. Slide 9 → `<TwoColPairedConceptsSlide>`
7. Slide 27 → `<TwoColPairedConceptsSlide>` (mini-demos with code)
8. Slides 15, 16, 21, 26 → `<CodeWithFeaturesSlide codePosition="left">` (×4)

---

## Phase 3 — Conditional Decisions (post-visual-inspect)

- **Slide 11 / Slide 28** (2×2 with code per card): Does `FourCardGridSlide` support embedded code per card? If not, assess ≤1 prop update vs new component.
- **Slide 17** (asymmetric 2-col): `TwoColPairedConceptsSlide` uses equal columns — if asymmetric required, flag new component.

---

## Phase 4 — New Components Needed

### A. TerminalDemoSlide
- **Covers:** Slides 8, 12, 24
- **Props:** `partNumber`, `pillIcon`, `pillLabel`, `title`, `terminal` (lines array or string), `metrics?` (Array of `{value, label}`)
- **Visual:** Section chrome → full-width monospaced block (bg-gray-950) → optional metric tiles row

### B. ConceptStackSlide
- **Covers:** Slides 4, 23
- **Props:** `partNumber`, `pillIcon`, `pillLabel`, `title`, `items` (Array of `{label, description, accent?}`), `insight?`
- **Visual:** Section chrome → vertical full-width rows: colored left label pill + right description, gradient accent progression

### C. Slides 5 + 10 — deferred
Inspect visually after Phase 2. Slide 5 may need `HeroStatSlide`; slide 10 may fit a `FourCardGridSlide` header-row variant.

---

## Notes
