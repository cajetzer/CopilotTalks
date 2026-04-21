# Deck: agent-teams

**Status:** � Cataloged — conversion not yet started
**Deck file:** `slides/tech-talks/agent-teams.md`
**Raw HTML slides:** 14 (all body content slides; structural slots already correct)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | Core Mechanism | ASCII tree (left) + 2×2 metric grid (right) | — | **Keep raw HTML** (unique diagram) |
| 6 | Two Invocation Patterns | 2-col, each with code block + bullets | `TwoColPairedConceptsSlide` | ✅ Map |
| 7 | Parallel Subagents | Code example + 3-role pills + timing comparison | `CodeWithFeaturesSlide` (top) | Conditional |
| 8 | Mental Model Shift | Centered quote box + 3-col guidance (Toward/Away/Against) | `ThreeColumnCardSlide` | Conditional |
| 10 | The Coordinator Pattern | Multi-tier role hierarchy (coordinator→lead/dev/tester→shared memory→tasks) | — | **Keep raw HTML** (unique role diagram) |
| 11 | Squad: Production Implementation | 2×2 grid (team roster, routing, protocols, model routing) | `FourCardGridSlide` | Conditional |
| 12 | Squad Memory & Persistence | 2-col (markdown table left, 3-stage growth boxes right) | — | **Keep raw HTML** (table structure) |
| 13 | When to Use Agent Teams | ASCII decision tree (left) + comparison matrix table (right) | — | **Keep raw HTML** (decision tree diagram) |
| 15 | Git Worktree Isolation | Filesystem tree (left) + lifecycle + comparison table (right) | — | **Keep raw HTML** (filesystem tree diagram) |
| 16 | The Hand-Off Workflow | 3 stacked timing workflow boxes (Before/After/Parallel) + math box | `ConceptStackSlide` | ✅ Map (new component) |
| 17 | Autonomous: Success Criteria | 2-col (criteria subsections left, 3 parallel patterns + /fleet right) | `TwoColPairedConceptsSlide` | Conditional |
| 19 | The Ensemble | Insight box + 4-row agent roles table (Alpha/Beta/Gamma/Orchestrator) | — | **Keep raw HTML** (table structure) |
| 21 | When to Use AgentCouncil vs. Squad | 5-row × 3-col comparison table | — | **Keep raw HTML** (table structure) |
| 22 | Combining Both | 2-step workflow (red deliberate box + blue execute box, each with code) + install code below | `TwoColPairedConceptsSlide` | Conditional |

**Summary:** 1 direct map · 5 conditional · 1 new component (ConceptStackSlide, already planned) · 7 keep raw HTML

### Keep Raw HTML rationale
Slides 5, 10, 12, 13, 15, 19, 21 contain ASCII trees, filesystem diagrams, role-hierarchy visuals, or multi-column comparison tables that have no component equivalent and are genuinely one-of-a-kind. Converting them would degrade content fidelity with no reuse benefit.

---

## Phase 2 — Conversion Order

Convert ✅ slides (1 direct map + ConceptStackSlide candidate):
1. Slide 6 → `<TwoColPairedConceptsSlide>` (2-col code blocks, implicit vs. explicit invocation)
2. Slide 16 → `<ConceptStackSlide>` (3 stacked workflow boxes) — requires ConceptStackSlide to be built first (see Phase 4)

---

## Phase 3 — Conditional Decisions (post-visual-inspect)

- **Slide 7** (Parallel Subagents): Top section = code showing 3 subagents; bottom = timing comparison. Does `CodeWithFeaturesSlide` accommodate a timing table as a "feature"? If not → keep raw HTML.
- **Slide 8** (Mental Model Shift): Quote box header + 3-column guidance. If `ThreeColumnCardSlide` can take the quote as `insight`, ✅ map. Otherwise → keep raw HTML.
- **Slide 11** (Squad Implementation): 2×2 with monospace team roster and routing code per card. If `FourCardGridSlide` doesn't support code-per-card → keep raw HTML.
- **Slide 17** (Success Criteria): Right column has two distinct sub-sections (/fleet + 3-patterns). If `TwoColPairedConceptsSlide` supports nested `items` groups → ✅ map. Otherwise → keep raw HTML.
- **Slide 22** (Combining Both): 2-col with code + bottom install block. `TwoColPairedConceptsSlide` with `code` props on each column + `insight` for install block. Likely ✅ — inspect first.

---

## Phase 4 — New Components Needed

### ConceptStackSlide (shared with copilot-cli)
- **Covers here:** Slide 16 (3 stacked timing workflow boxes)
- **Props:** `partNumber`, `pillIcon`, `pillLabel`, `title`, `items` (Array of `{label, description, accent?}`), `insight?`
- **Visual:** Section chrome → vertical full-width rows: colored left label/header + right content, gradient accent progression
- This component is also needed for copilot-cli slides 4 and 23 — build it once, reuse here.

---

## Notes
