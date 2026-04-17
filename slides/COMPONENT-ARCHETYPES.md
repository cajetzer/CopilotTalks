# Slide Component Archetypes — Specification Catalog

> Generated from audit of all 17 active tech-talk slide decks (~192 content slides).
> Goal: every content slide renders via one of these components with different props.

---

## Summary

| # | Component | Count | Description |
|---|-----------|------:|-------------|
| 1 | `TwoColComparisonSlide` | **48** | Two-column before/after, versus, or paired-concept layout |
| 2 | `CardGridSlide` | **32** | 2×2 or 2×3 grid of feature/capability cards |
| 3 | `CodeExplainerSlide` | **24** | Code block (left) + explanatory cards/text (right) |
| 4 | `MultiColCardsSlide` | **22** | 3–5 equal-width card columns (features, phases, tiers) |
| 5 | `UseCaseSlide` | **16** | Problem → Solution → Outcome narrative with metrics |
| 6 | `SequentialFlowSlide` | **14** | Horizontal or vertical numbered step progression |
| 7 | `BeforeAfterMetricsSlide` | **12** | Before/After comparison + quantified metric cards |
| 8 | `TerminalDemoSlide` | **8** | Terminal frame with scrollable output + side annotations |
| 9 | `HeroStatSlide` | **6** | Large hero number/callout + supporting detail cards |
| 10 | `DecisionMatrixSlide` | **6** | Grid/table comparing options across criteria |
| 11 | `ProgressionSlide` | **4** | Level/phase progression with progress dots and detail panel |

**Total coverage: ~192 slides across 11 archetypes.**

---

## 1. `TwoColComparisonSlide`

**Count:** ~48 slides · **The workhorse layout**

### What it looks like
Two equal columns comparing two concepts, approaches, or states. Each column has a header, optional icon/badge, and 2–6 bullet items or sub-cards. An optional bottom row spans full-width for a callout or insight.

### Structural properties
- Exactly 2 columns (50/50 or 40/60 split)
- Column headers with contrasting color accents (e.g., red vs green, gray vs blue)
- Optional bottom-span insight/callout row
- Optional code snippets within either column

### Props
```ts
interface TwoColComparisonSlideProps {
  title: string
  subtitle?: string
  leftColumn: {
    header: string
    headerColor: 'red' | 'gray' | 'blue' | 'yellow' // accent
    icon?: string
    items: Array<{ icon?: string; text: string; detail?: string }>
    code?: string
  }
  rightColumn: {
    header: string
    headerColor: 'green' | 'blue' | 'cyan' | 'purple'
    icon?: string
    items: Array<{ icon?: string; text: string; detail?: string }>
    code?: string
  }
  insight?: { icon?: string; text: string } // full-width bottom callout
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `agentic-sdlc` | The Economic Shift (2-col comparison + highlight callout) |
| `copilot-cli` | Mental Model Shift (Move Toward vs Move Against) |
| `copilot-azure-mcp` | The Mental Model Shift (Away From vs Toward) |
| `copilot-memory` | Memory vs Instructions (2-col comparison + layered card) |
| `agentic-workflows` | The Shift (prescriptive vs intent-driven) |

---

## 2. `CardGridSlide`

**Count:** ~32 slides

### What it looks like
A 2×2 or 2×3 uniform grid of cards. Each card has an icon/emoji, title, and 1–3 line description. Cards are equal-sized with consistent border/gradient styling. Optional bottom highlight row.

### Structural properties
- Grid: 2×2 (4 cards) or 2×3 (6 cards)
- Each card: icon + title + short description
- Uniform card sizing and styling
- Optional full-width bottom insight or highlight

### Props
```ts
interface CardGridSlideProps {
  title: string
  subtitle?: string
  columns: 2 | 3
  cards: Array<{
    icon: string
    title: string
    description: string
    accentColor?: string
  }>
  bottomHighlight?: { icon?: string; text: string }
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `agentic-workflows` | Intent-Driven Automation (2×2: intent/security/adaptive/improvement) |
| `copilot-cli` | Operating Modes (2×2: Interactive/Programmatic/Cloud/Remote) |
| `copilot-acp` | Key Capabilities (2×2 grid + bottom highlight) |
| `copilot-code-review` | Six Capabilities (2×3 grid) |
| `vscode-latest` | Four Agent Types (2×2 card grid) |

---

## 3. `CodeExplainerSlide`

**Count:** ~24 slides

### What it looks like
A code block (usually left, sometimes top) paired with explanatory cards or annotation text. The code block may be syntax-highlighted YAML, JSON, Python, Bash, or TypeScript. The explanation side has 2–4 small info cards or a bulleted list.

### Structural properties
- 1 code block (mono-font, syntax highlighted)
- 2–4 explanatory cards or annotation items alongside
- Code can be left-col or top with cards below/right
- Language tag for syntax highlighting

### Props
```ts
interface CodeExplainerSlideProps {
  title: string
  subtitle?: string
  code: {
    language: 'yaml' | 'json' | 'python' | 'bash' | 'typescript' | 'markdown'
    content: string
    filename?: string
  }
  codePosition: 'left' | 'top'
  explanations: Array<{
    icon?: string
    title: string
    description: string
  }>
  insight?: { icon?: string; text: string }
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `copilot-primitives` | AGENTS.md Playbook (code + 3 feature cards) |
| `copilot-hooks` | Security Check (Bash code + key principle card) |
| `copilot-hooks` | Complete Audit Config (JSON config + explanation) |
| `copilot-memory` | Memory Tool Architecture (2-col Store + Retrieve code) |
| `vscode-latest` | Background Agents (2-col how it works + code) |

---

## 4. `MultiColCardsSlide`

**Count:** ~22 slides

### What it looks like
3 to 5 equal-width columns, each containing a card with icon, title, and description or bullet list. Used for feature breakdowns, phase descriptions, comparison grids, and tier layouts. Distinguished from `CardGridSlide` by being a single-row or freeform column layout rather than a strict 2-row grid.

### Structural properties
- 3–5 equal-width columns in a single row
- Each column: icon + title + items/description
- No row wrapping (single horizontal band)
- Optional top-span header or subtitle

### Props
```ts
interface MultiColCardsSlideProps {
  title: string
  subtitle?: string
  columns: Array<{
    icon?: string
    title: string
    accentColor?: string
    items: Array<{ text: string; detail?: string }>
    // OR
    description?: string
  }>
  insight?: { icon?: string; text: string }
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `agentic-sdlc` | AgentRC Levels (5-column progression with level cards) |
| `copilot-cli` | Reasoning Models (4-col comparison: Low/Med/High/Extra) |
| `copilot-acp` | ACP vs MCP vs LSP (3-col comparison table) |
| `enterprise-patterns` | Flexible Licensing (3-col licensing tiers) |
| `enterprise-patterns` | Metrics Framework (3-col metric types) |

---

## 5. `UseCaseSlide`

**Count:** ~16 slides

### What it looks like
A structured narrative: Problem statement (red/yellow accent) → Solution description (blue/green accent) → Outcome/metrics (green accent). May include a code snippet in the solution section. Often has an "insight" callout at bottom.

### Structural properties
- 3 distinct sections: Problem, Solution, Outcome
- Color-coded sections (danger → info → success)
- Optional code block in solution
- Optional metrics row in outcome
- Optional bottom insight callout

### Props
```ts
interface UseCaseSlideProps {
  title: string
  subtitle?: string
  problem: {
    icon?: string
    title?: string // defaults to "Problem"
    items: string[]
  }
  solution: {
    icon?: string
    title?: string // defaults to "Solution"
    items: string[]
    code?: { language: string; content: string }
  }
  outcome: {
    icon?: string
    title?: string // defaults to "Outcome"
    items: string[]
    metrics?: Array<{ label: string; value: string; color?: string }>
  }
  insight?: { icon?: string; text: string }
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `copilot-acp` | Use Case — Zed Editor (3-col problem/solution/outcome) |
| `copilot-acp` | Use Case — CI/CD Dashboard |
| `copilot-acp` | Use Case — Polyrepo |
| `agentic-journey` | Use Case — Duplicate Elimination |
| `agentic-workflows` | Use Case — Issue Triage |

---

## 6. `SequentialFlowSlide`

**Count:** ~14 slides

### What it looks like
A numbered or arrowed sequence of 3–6 steps displayed horizontally or vertically. Each step is a card with a number badge, title, and description. Arrows or connecting lines between steps. Optional benefit/info cards below the flow.

### Structural properties
- 3–6 sequential steps with number badges
- Horizontal flow with `→` connectors (or vertical with `↓`)
- Each step: number + title + short description
- Optional bottom row of supplementary cards

### Props
```ts
interface SequentialFlowSlideProps {
  title: string
  subtitle?: string
  direction: 'horizontal' | 'vertical'
  steps: Array<{
    number: number
    title: string
    description: string
    icon?: string
    accentColor?: string
  }>
  supplementary?: Array<{
    icon?: string
    title: string
    description: string
  }>
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `copilot-hooks` | Execution Flow (6-step horizontal flow + 3 exit code cards) |
| `copilot-code-review` | Hybrid Analysis (3-step flow + benefit cards) |
| `copilot-code-review` | Deployment Patterns (4-col phase breakdown) |
| `copilot-sdk` | How SDK Works (4-stage horizontal flow + 2 cards) |
| `copilot-acp` | Start Server & Connect SDK (3-step + code) |

---

## 7. `BeforeAfterMetricsSlide`

**Count:** ~12 slides

### What it looks like
Side-by-side Before (red/gray) and After (green/blue) comparison with quantified improvement metrics displayed as stat cards below or alongside. Distinct from `TwoColComparisonSlide` by the mandatory presence of numeric metrics.

### Structural properties
- 2-column before/after with color coding
- 2–4 metric cards with numeric values
- Metrics show percentage/time improvements
- Optional process description in each column

### Props
```ts
interface BeforeAfterMetricsSlideProps {
  title: string
  subtitle?: string
  before: {
    title?: string // defaults to "Before"
    items: string[]
    accent?: 'red' | 'gray' | 'yellow'
  }
  after: {
    title?: string // defaults to "After"
    items: string[]
    accent?: 'green' | 'blue' | 'cyan'
  }
  metrics: Array<{
    label: string
    value: string      // e.g., "73%", "4.2h → 18min"
    icon?: string
    color?: string
  }>
  insight?: { icon?: string; text: string }
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `copilot-sdk` | Use Case 1 — Release Engineering (Before/After + metrics) |
| `copilot-sdk` | Use Case 2 — Test Infrastructure |
| `copilot-sdk` | Use Case 3 — Code Review Bots |
| `copilot-hooks` | HIPAA Compliance (Before/After + setup cards) |
| `copilot-hooks` | SOC 2 Enforcement (Before/After + alert cards) |

---

## 8. `TerminalDemoSlide`

**Count:** ~8 slides

### What it looks like
A `TerminalFrame` component (already exists) showing scrollable CLI output, with 2–3 annotation cards alongside or below explaining what's happening. The terminal dominates the slide.

### Structural properties
- Terminal frame (dark bg, mono font, scrollable)
- 2–3 side or bottom annotation cards
- Terminal content is the primary visual
- Optional pill-badges for key commands

### Props
```ts
interface TerminalDemoSlideProps {
  title: string
  subtitle?: string
  terminal: {
    command?: string        // shown as prompt line
    output: string          // scrollable content
    maxHeight?: string      // CSS max-height
  }
  annotations: Array<{
    icon?: string
    title: string
    description: string
  }>
  badges?: string[]         // pill-shaped command badges
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `copilot-cli` | Docker Debugging Demo (terminal + scrollable output) |
| `copilot-cli` | Walking-to-Meeting Demo (terminal + 3 pill-badge cards) |
| `copilot-cli` | Log Forensics (terminal + feature boxes) |
| `copilot-azure-mcp` | The Compression Effect (scrollable code/output demo) |
| `copilot-acp` | Core Message Flow (terminal + explanation boxes) |

---

## 9. `HeroStatSlide`

**Count:** ~6 slides

### What it looks like
One massive statistic, quote, or callout dominates the left/center of the slide. Supporting detail cards or explanatory text flanks the hero element. Used for "wow" moments and key takeaways.

### Structural properties
- 1 oversized stat/callout (large font, gradient text)
- 2–4 smaller supporting cards
- High visual contrast between hero and supporting elements

### Props
```ts
interface HeroStatSlideProps {
  title: string
  heroStat: {
    value: string       // "84%", "10 min", "$2.4M"
    label: string       // what the stat measures
    color?: string      // gradient class
  }
  supportingCards: Array<{
    icon?: string
    title: string
    description: string
  }>
  insight?: { icon?: string; text: string }
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `copilot-cli` | The 84% Problem (large hero stat + 4 supporting cards) |
| `agentic-sdlc` | The 10-Minute Rule (60min vs 8min dramatic comparison) |
| `agentic-workflows` | Mental Model Shift (large callout + comparison) |
| `agent-teams` | Mental Model Shift (callout + move-toward/move-away) |

---

## 10. `DecisionMatrixSlide`

**Count:** ~6 slides

### What it looks like
A structured grid or table helping the audience choose between options. Rows are options, columns are criteria. Cells contain checkmarks, badges, or short text. May include a code decision tree variant.

### Structural properties
- Table/matrix with option rows × criteria columns
- Visual indicators (✓/✗, color badges, ratings)
- Optional decision tree or flowchart variant
- 3–5 columns, 3–6 rows typical

### Props
```ts
interface DecisionMatrixSlideProps {
  title: string
  subtitle?: string
  columns: string[]                     // criteria headers
  rows: Array<{
    label: string
    icon?: string
    cells: Array<{
      value: string                     // "✓", "✗", text, or badge
      color?: string
    }>
  }>
  recommendation?: { icon?: string; text: string }
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `copilot-primitives` | Choosing the Right Primitive (4×3 matrix) |
| `agent-teams` | When to Use Agent Teams (decision quadrants) |
| `agent-teams` | When to Use AgentCouncil vs. Squad (decision matrix) |
| `mcp-apps` | Component Decision Tree (2×2 decision matrix) |
| `agentic-journey` | When to Graduate (decision matrix + ROI) |

---

## 11. `ProgressionSlide`

**Count:** ~4 slides

### What it looks like
A level/week/phase progression showing growth over time. A horizontal track with markers at each level, plus a detail panel for the currently highlighted level. Progress dots indicate which level is being discussed.

### Structural properties
- Horizontal level/phase track with position markers
- Detail panel for one level (problem/solution/checks)
- Progress dots synced to level position
- Visual progression (left = early, right = advanced)

### Props
```ts
interface ProgressionSlideProps {
  title: string
  subtitle?: string
  levels: Array<{
    number: number
    label: string
    icon?: string
  }>
  activeLevel: number
  detail: {
    sections: Array<{
      title: string        // e.g., "Problem", "Solution", "Checks"
      icon?: string
      items: string[]
    }>
  }
  progressDots?: { current: number; total: number }
}
```

### Example slides
| Deck | Slide |
|------|-------|
| `agentic-sdlc` | Level 1–5 slides (5 slides using same archetype with different active level) |
| `copilot-memory` | Progressive Profiles (4-week progressive build) |

---

## Outlier Slides (Low-Fit)

These ~4 slides don't cleanly fit any archetype. Recommendation: stretch an existing archetype or leave as raw HTML.

| Deck | Slide | Current Pattern | Recommendation |
|------|-------|----------------|----------------|
| `agentic-sdlc` | The Governance Pyramid | Pyramid diagram + metrics | Render as `HeroStatSlide` with custom SVG pyramid in hero slot, or raw HTML |
| `agent-teams` | The Coordinator Pattern | Central coordinator node + radiating role columns + tools | Stretch `MultiColCardsSlide` with optional header node, or raw HTML |
| `agent-teams` | The Ensemble | Coordinator + specialist columns + comparison grid | Stretch `MultiColCardsSlide` with comparison row, or raw HTML |
| `agent-teams` | Combining AgentCouncil + Squad | Layered architecture diagram | Raw HTML (unique architectural diagram) |

---

## Cross-Archetype Props (shared by all)

Every component inherits these base props:

```ts
interface BaseSlideProps {
  title: string
  subtitle?: string
  progressDots?: {
    current: number
    total: number
  }
  sectionColors?: {
    from: string    // e.g., "cyan-400"
    to: string      // e.g., "blue-400"
  }
}
```

---

## Coverage Verification

| Deck | Slides | Mapped | Outliers |
|------|--------|--------|----------|
| agentic-sdlc | 16 | 15 | 1 (Governance Pyramid) |
| agentic-journey | 12 | 12 | 0 |
| agentic-workflows | 10 | 10 | 0 |
| agent-teams | 16 | 13 | 3 (Coordinator, Ensemble, Combined) |
| copilot-cli | 21 | 21 | 0 |
| copilot-acp | 15 | 15 | 0 |
| copilot-azure-mcp | 11 | 11 | 0 |
| copilot-chat-internals | 9 | 9 | 0 |
| copilot-code-review | 14 | 14 | 0 |
| copilot-hooks | 15 | 15 | 0 |
| copilot-memory | 13 | 13 | 0 |
| copilot-primitives | 11 | 11 | 0 |
| copilot-sdk | 9 | 9 | 0 |
| copilot-web | 12 | 12 | 0 |
| enterprise-patterns | 11 | 11 | 0 |
| mcp-apps | 15 | 15 | 0 |
| vscode-latest | 14 | 14 | 0 |
| **Total** | **~192** | **~188** | **4** |

---

## Archetype Distribution

```
TwoColComparisonSlide    ████████████████████████  48  (25%)
CardGridSlide            ████████████████          32  (17%)
CodeExplainerSlide       ████████████              24  (13%)
MultiColCardsSlide       ███████████               22  (11%)
UseCaseSlide             ████████                  16   (8%)
SequentialFlowSlide      ███████                   14   (7%)
BeforeAfterMetricsSlide  ██████                    12   (6%)
TerminalDemoSlide        ████                       8   (4%)
HeroStatSlide            ███                        6   (3%)
DecisionMatrixSlide      ███                        6   (3%)
ProgressionSlide         ██                         4   (2%)
```

---

## Implementation Priority

Recommended build order (by coverage × reuse value):

1. **`TwoColComparisonSlide`** — covers 25% of all slides
2. **`CardGridSlide`** — covers 17%, very uniform structure
3. **`CodeExplainerSlide`** — covers 13%, pairs with existing TerminalFrame
4. **`MultiColCardsSlide`** — covers 11%, close to CardGrid but distinct layout
5. **`UseCaseSlide`** — covers 8%, highly standardized Problem/Solution/Outcome
6. **`SequentialFlowSlide`** — covers 7%, step-by-step is a clear pattern
7. **`BeforeAfterMetricsSlide`** — covers 6%, specialization of TwoCol
8. **`TerminalDemoSlide`** — covers 4%, wraps existing TerminalFrame
9. **`HeroStatSlide`** — covers 3%, visually distinctive
10. **`DecisionMatrixSlide`** — covers 3%, table-based
11. **`ProgressionSlide`** — covers 2%, niche but reusable
