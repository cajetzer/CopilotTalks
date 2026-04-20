# Plan: Inline HTML → Component Conversion (Generic + copilot-cli.md Focus)

## TL;DR
A repeatable 4-phase loop for any tech-talk deck: catalog raw slides → map to existing components → convert + build → create minimal new components for true gaps only. copilot-cli.md has 25 raw HTML slides; analysis shows ~14 map to existing components, ~4 need TerminalDemoSlide (new), ~3 need ConceptStackSlide (new), and ~4 remain unclear pending visual inspection.

---

## Phase 0 — Understand Component Taxonomy (one-time, done)

**Two distinct categories — never confuse them:**

### Structural Components (position-locked, enforced by slide generator — NEVER replace or repurpose as body content)
| Component | Deck Position |
|---|---|
| `TitleSlide` | Slide 1 always |
| `CoreQuestionSlide` | Slide 2 always |
| `TocSlide` | Slide 3 always |
| `SectionOpenerSlide` | First slide of each Part (1–4) |
| `BeforeAfterSlide` | Closing comparison (N-3) |
| `WhatYouCanDoTodaySlide` | N-2 always |
| `ReferencesSlide` | N-1 always |
| `ThankYouSlide` | Last slide always |

For copilot-cli.md: **all structural slots are already correct** — slides 1–3, 6, 13, 20, 25, 29–32 use structural components. Leave them alone.

### Content Components (Tier-1 body, optional within sections — conversion work happens here)
`FourCardGridSlide`, `CodeWithFeaturesSlide`, `BeforeAfterMetricsSlide`, `BeforeAfterPanelsSlide`, `ThreeColumnCardSlide`, `ProblemSolutionOutcomeSlide`, `TwoColPairedConceptsSlide`

The 25 raw HTML slides are ALL body content slides (within sections, between openers). New components created in Phase 4 must also be content-tier components: standard chrome props (`partNumber`, `pillIcon`, `pillLabel`, `title`, `insight?`), no position-locking.

---

## Phase 1 — Catalog + Pattern Map (per deck)

### For any deck:
1. Read the deck file and list every `<!-- SLIDE: -->` that is raw HTML (not a component).
2. Describe each slide's visual pattern using standard vocabulary:
   - grid (2×2, 3×1, etc.) | code+features | before/after | terminal | stacked-list | hero-stat | tier-header
3. Map each slide to a candidate existing component or flag as "new component needed."

### copilot-cli.md Catalog (25 raw HTML slides → mapped):

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 4 | The Distance Model | Vertical stacked labels (5 items, gradients) | — | **New: ConceptStackSlide** |
| 5 | The 84% Problem | Hero stat + 2×2 card grid | CoreQuestionSlide (stretch) | **Unclear — inspect** |
| 7 | Plan Mode: Fundamental Shift | Before/after numbered steps | BeforeAfterPanelsSlide | ✅ Map |
| 8 | Docker Debugging Demo | Full terminal block | — | **New: TerminalDemoSlide** |
| 9 | Real-Time Steering | 2-col stacked feature cards | TwoColPairedConceptsSlide | ✅ Map |
| 10 | Reasoning Models | 4-tier header + 2-box content | FourCardGridSlide (stretch) | **Unclear — inspect** |
| 11 | Operating Modes | 2×2 cards with code snippets | FourCardGridSlide (may need update) | Conditional |
| 12 | CI/CD Automation | Full terminal block (YAML) | — | **New: TerminalDemoSlide** |
| 14 | Built-in Agents | 2×2 icon+title+description | FourCardGridSlide | ✅ Map |
| 15 | /fleet Fan-Out | Code left + stacked cards right | CodeWithFeaturesSlide (left) | ✅ Map |
| 16 | Cloud Delegation | Code left + stacked cards right | CodeWithFeaturesSlide (left) | ✅ Map |
| 17 | Context Management | Asymmetric 2-col (3 small + 1 large) | TwoColPairedConceptsSlide | Conditional |
| 18 | Extensibility | 3-col pill-header cards | ThreeColumnCardSlide | ✅ Map |
| 19 | Mental Model Shift | 2-col do/don't (green/red) | BeforeAfterPanelsSlide | ✅ Map |
| 21 | How --remote Works | Code left + 3 stacked cards right | CodeWithFeaturesSlide (left) | ✅ Map |
| 22 | Why --remote Matters | 3 tall vertical cards | ThreeColumnCardSlide | ✅ Map |
| 23 | Combination Patterns | 5 horizontal label+content rows | — | **New: ConceptStackSlide** |
| 24 | Walking-to-Meeting Demo | Terminal + 3 metric tiles below | — | **New: TerminalDemoSlide** |
| 26 | Log Forensics | Code left + 3 stacked cards right | CodeWithFeaturesSlide (left) | ✅ Map |
| 27 | Infra Patrol & Multi-Machine | 2 mini-demos side by side (code) | TwoColPairedConceptsSlide | ✅ Map |
| 28 | GitHub.com Integration | 2×2 grid with code examples | FourCardGridSlide (may need update) | Conditional |

**Direct maps (no component changes): ~12 slides**
**Conditional maps (component may need minor update): ~3 slides** (11, 17, 28 — depend on whether FourCardGridSlide supports code per card)
**New components needed: ~2-3 types covering ~6 slides**

---

## Phase 2 — Direct Conversion + Build

### Step 2a: Convert the ✅ Map slides
Convert each slide using the mapped existing component. No component files touched.

Convert in this order (low risk first):
1. Slide 14 → `<FourCardGridSlide>` (cleanest 2×2)
2. Slide 18 → `<ThreeColumnCardSlide>` (pill-header columns)
3. Slide 22 → `<ThreeColumnCardSlide>` (3 tall cards)
4. Slide 7 → `<BeforeAfterPanelsSlide>` (before/after steps)
5. Slide 19 → `<BeforeAfterPanelsSlide>` (do/don't)
6. Slide 9 → `<TwoColPairedConceptsSlide>`
7. Slide 27 → `<TwoColPairedConceptsSlide>` (mini-demos with code)
8. Slides 15, 16, 21, 26 → `<CodeWithFeaturesSlide codePosition="left">` (×4)

### Step 2b: Build + visual inspect
Run `.\build.ps1 Tech-talks` from slides/ — validate `copilot-cli` deck passes with `[OK]`.
Use inspect-slide skill to screenshot converted slides.

---

## Phase 3 — Conditional Maps (Component Updates)

Inspect slides 11, 17, 28 visually after step 2b:
- **Slide 11 / Slide 28** (2×2 with code per card): If FourCardGridSlide cards don't support embedded code, assess whether adding a `code?` prop to each card object is a small enough change or warrants a new variant.
- **Slide 17** (asymmetric 2-col): TwoColPairedConceptsSlide uses equal columns — if asymmetric sizing is required, note as "new component needed" instead.

Decision gate: **Update existing component only if the change is ≤ 1 new optional prop with no layout restructuring.**

---

## Phase 4 — New Component Creation

### New components to create (minimum set):

#### A. TerminalDemoSlide
- **Covers:** Slides 8, 12, 24 (and possibly 26 if code-only)
- **Props:** `partNumber`, `pillIcon`, `pillLabel`, `title`, `terminal` (content string or lines array), `metrics?` (Array of {value, label} — optional, shown below terminal)
- **Visual:** Section chrome top → full-width monospaced terminal block (bg-gray-950, text-xs, colored text lines) → optional metric tiles row
- **Pattern ref:** CodeWithFeaturesSlide for section chrome; BeforeAfterMetricsSlide for metric tiles

#### B. ConceptStackSlide
- **Covers:** Slides 4, 23
- **Props:** `partNumber`, `pillIcon`, `pillLabel`, `title`, `items` (Array of {label, description, accent?}), `insight?`
- **Visual:** Section chrome → vertical stack of full-width rows, each: colored left label pill + right description. Gradient accent progression (cyan→blue→indigo→purple→pink across items)
- **Pattern ref:** Same gradient progression as SectionOpenerSlide color themes

#### C. Slide 5 / Slide 10 — defer decision
After inspecting visuals: slide 5 (hero stat + grid) may need a HeroStatSlide; slide 10 (4-tier) may be a FourCardGridSlide with header row. Decide after Phase 2 build.

---

## Phase 5 — Update Slide Generator + Template

### Files to update:
- `slides/TEMPLATE.md` — add new component usage examples for each new component
- `.github/agents/slide-generator.agent.md` — update component catalog section with new component names, props, and when-to-use guidance
- `slides/tech-talks/components/README.md` — add documentation blocks for new components

---

## Phase 6 — Regenerate + Final Build

1. Re-run slide generator (if applicable) to produce clean component-based version of copilot-cli.md
2. Run full build: `.\build.ps1 Tech-talks`
3. Inspect all converted slides via inspect-slide skill

---

## Relevant Files

- `slides/tech-talks/copilot-cli.md` — target deck (25 raw HTML slides)
- `slides/tech-talks/components/*.vue` — all 14 existing components
- `slides/tech-talks/components/README.md` — component documentation
- `slides/TEMPLATE.md` — deck authoring template (update in Phase 5)
- `.github/agents/slide-generator.agent.md` — generator agent instructions (update in Phase 5)
- `slides/build.ps1` — build script (run from slides/ directory)

**Key existing components to reuse most:**
- `CodeWithFeaturesSlide.vue` — covers 4+ slides (code+features left pattern)
- `FourCardGridSlide.vue` — covers 2-3 slides (2×2 icon cards)
- `TwoColPairedConceptsSlide.vue` — covers 3 slides
- `BeforeAfterPanelsSlide.vue` — covers 2 slides
- `ThreeColumnCardSlide.vue` — covers 2 slides

---

## Verification

Per phase:
- **Phase 2:** `.\build.ps1 Tech-talks` from slides/ → `[OK]` on copilot-cli
- **Phase 2:** `inspect-slide` screenshots of all converted slides
- **Phase 4:** Build after each new component added → `[OK]` before adding next
- **Phase 6:** Full `.\build.ps1 Tech-talks` → all 17 decks `[OK]`

---

## Decisions + Scope

- **In scope:** copilot-cli.md as the reference deck; generic process applies to any deck
- **Out of scope:** Converting other decks in this session; dark/light theme validation beyond build
- **Rule:** Only create a new component when ≥2 slides share the same visual gap AND no existing component can be updated with ≤1 optional prop change
- **Rule:** Components with fixed card counts (CoreQuestionSlide: 6, TocSlide: 4, SectionOpenerSlide: 3, BeforeAfterSlide: 3 metrics) are not extended — use a different component
- **Rule:** Structural components are never used as body content components — they are position-locked and enforced by the slide generator
