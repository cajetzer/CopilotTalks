---
name: exec-recipe-review
description: >
  Review an exec-talk's README and produce an exec.recipe.yml. Uses a 3-agent collaborative
  council to analyze section weighting, executive audience fit, narrative arc, and action
  clarity. Always overwrites any existing recipe. Triggers: "review the talk", "create the
  recipe", "is this landing for execs", "section weighting", "coverage gap", "recipe",
  "executive framing".
infer: true
---

# Exec Recipe Review Skill

Read the exec-talk README, analyze its structure with an Agent Council, and write `exec.recipe.yml`. This skill **always produces a fresh recipe** — it does not preserve or patch an existing one. The recipe is the authoritative input for the Slide Generator when building exec-talk decks.

**Key Constraints:**
- **Max 4 sections** — Council should consolidate, not expand. Exec talks are tighter than tech talks. Each section earns ~8–12 slides in a 30–45 min briefing.
- **Executive audience is the filter** — Every section must be evaluated through the lens of a CXO, VP, or transformation lead. If a section teaches implementation, it needs to be reframed as business implications or cut.
- **Slide generator ensures consistency** — Once you commit a recipe, the [Slide Generator agent](../../agents/slide-generator.agent.md) generates all slides using the Primer-style HTML template system with uniform structure. Focus the council on *decision clarity and business credibility*, not slide-level details.
- **Recipe schema** — Read `.github/skills/exec-recipe-review/EXEC-RECIPE-TEMPLATE.yml` to understand all valid fields before writing the output file.

---

## When to Invoke This Skill

- After a new exec-talk README is complete
- User wants to revise section structure, business framing, or action clarity
- User questions whether a section earns its airtime ("are we spending too long on X")
- User notices a business angle is missing ("we never explain the cost of not acting")
- User asks to "review the talk" or check if the structure matches the executive audience

**Not for:** Minor wording tweaks, slide-level fixes, or tech-talk decks (use `deck-recipe-review` for those).

---

## Pre-Flight: Gather Source Material

Before dispatching the council, read BOTH of these. The council prompt must include the full context — agents cannot read files themselves.

```
1. exec-talks/<topic>/README.md                                           — full section content + key metrics
2. .github/skills/exec-recipe-review/EXEC-RECIPE-TEMPLATE.yml            — recipe schema (all valid fields)
```

Do **not** read the existing `slides/exec-talks/<topic>.md`. The recipe is the authoritative spec for the slide generator — existing slides will be overwritten and should not constrain the council's reasoning.

From these, extract:
- The `## ` H2 headings from the README — these are the candidate sections
- Target audience + talk duration (from README frontmatter or intro)
- The core business question or decision the talk is designed to drive
- Key metrics, risk frames, and business moments
- The specific concern the user raised (if invoked manually)

---

## Council Dispatch: Phase 1 (All 3 Parallel)

Dispatch all three agents simultaneously. Each gets the SAME full context block (see template below) with a different cognitive role.

### Context Block Template

```
TASK: [One-sentence description of the structural question]

TALK: [title], [duration], audience: [audience list]
CORE QUESTION: "[the business question or decision the talk drives]"

CANDIDATE SECTIONS (from README ## headings):
1. "[Section Name]" — [2-line description of what it covers]
2. ...

CONSTRAINTS:
- Max 4 sections (no exceptions — consolidate, don't expand)
- Audience is executives: every section must land as business implication, not implementation detail
- Slide generator will apply Primer-style HTML templates for structural consistency

USER CONCERN: [Exact concern — what's taking too much space / what's missing / what's not landing]

KNOWN MATERIAL:
- [Any key metrics, business models, or frameworks already in the README]
- [Any competitive data, cost figures, or risk framing that exists]
```

### Alpha Prompt (Deep Explorer)

```
You are Alpha on an Agent Council (Collaborative mode).
Your role: Generate a comprehensive, creative response.

[CONTEXT BLOCK]

Analyze: Is the current section structure the best use of this talk's time with a C-suite audience?
What should change and why?

1. Write a thorough response exploring the problem space deeply
2. Add '## Open Questions': what needs to be answered before slides can be written?
3. Add '## Wild Ideas': at least one unconventional structural approach
Be expansive — breadth over polish.
```

### Beta Prompt (Practical Builder)

```
You are Beta on an Agent Council (Collaborative mode).
Your role: Ground the problem in reality while finding opportunities.

[CONTEXT BLOCK]

Analyze: Is the current section structure the best use of this talk's time with a C-suite audience?

1. Write your response focused on practical, validated approaches
2. Add '## Building Blocks': what business content already exists that could fill gaps?
3. Add '## Combinations': what sections could be merged or reframed for executive credibility?
Output a concrete recommended sectionOrder with emphasis levels and rationale.
Be constructive. Find opportunities, not just constraints.
```

### Gamma Prompt (Elegant Minimalist)

```
You are Gamma on an Agent Council (Collaborative mode).
Your role: Find the most elegant, minimal solution and open new angles.

[CONTEXT BLOCK]

Analyze: What is the single structural change that would most sharpen this talk for executives?

1. Write the simplest viable restructuring
2. Add '## Alternative Angles': reframe the problem from 2 different executive perspectives
3. Add '## What If': propose one boundary-pushing variation (e.g., reorder to lead with risk/urgency)
Be concrete about the new sectionOrder and what changes in highlightMoments.
```

---

## Council Dispatch: Phase 2 (All 3 Parallel Improve)

After all three Phase 1 responses return, dispatch all three again simultaneously. Each agent gets the other two drafts and writes an IMPROVED version.

Key instruct for each: *"Steal the best ideas from the other two shamelessly. Look for novel syntheses. Keep your natural strength but enrich it. Maintain the executive audience lens — if an idea adds implementation depth, reject it."*

---

## Council Dispatch: Phase 3 (Orchestrator Synthesis)

Single orchestrator prompt with all three Phase 2 improved versions. Ask for:

1. **Verdict** (2-3 sentences) — the core structural problem and fix for this executive audience
2. **`arcToc`** — one line ≤ 80 chars, section names joined by ` → ` (use "The X" naming pattern if appropriate)
3. **`arcNarrative`** — a prose paragraph: what each section establishes for the executive, where credibility and urgency peak, and why the ordering drives a decision
4. **Concrete `sectionOrder`** with `sectionModes` (emphasis + one-line note per section)
5. **Updated `highlightMoments`** list — what to drop, what to add (quantified business metrics preferred)
6. **One open decision** — the single thing the user must resolve before slides can be generated

---

## Mapping Output to exec.recipe.yml

Write the **complete** `exec.recipe.yml` file — all fields. Source them as follows:

| Field | Source |
|---|---|
| `version` | Always `1` |
| `deck.title` | README H1 title |
| `deck.subtitle` | README subtitle line or guiding question, condensed |
| `deck.tagline` | README one-line promise / focus (from intro block) |
| `deck.arcToc` | Council Phase 3 output |
| `deck.arcNarrative` | Council Phase 3 output |
| `deck.sectionOrder` | Council Phase 3 output |
| `deck.sectionModes` | Council Phase 3 output |
| `deck.highlightMoments` | Council Phase 3 output |
| `deck.preamble` | **Always** `[{ src: "./exec-spine.md" }]` for exec talks — every exec deck imports the shared series context slide. Do NOT set to `[]`. |
| `deck.appendix` | `[]` unless the talk has explicit appendix content |

Use `EXEC-RECIPE-TEMPLATE.yml` (read during pre-flight) as the schema for field names, YAML structure, and inline comments. If there is an open decision from the council, append it as a YAML comment at the end of the file: `# OPEN DECISION: [question] — [paths and consequences]`.

**Post-Recipe Workflow:**
1. Commit updated `exec.recipe.yml`
2. Invoke [Slide Generator agent](../../agents/slide-generator.agent.md) with the exec-talk path
3. Slide Generator uses the Primer-style HTML template system to create consistent slides for all sections
4. No manual slide editing needed — the template ensures title slides, overview, section openers, closers, and references are auto-generated

---

## Quality Checks Before Committing

- [ ] **Max 4 sections** — Council output has exactly 4 or fewer sections. If more, consolidate.
- [ ] Every section in the new `sectionOrder` exists as a `## ` heading in the README
- [ ] No section has been marked `high` that contains primarily implementation detail — reframe or cut
- [ ] `arcToc` is a single line ≤ 80 chars using ` → ` separators between section names
- [ ] `arcNarrative` is a prose paragraph explaining the sequencing logic for an executive audience
- [ ] The open decision is documented in the file — don't silently absorb it
- [ ] `highlightMoments` list is 3-5 items with quantified metrics where possible
- [ ] No `highlightMoments` entry describes a tool command, code pattern, or implementation step
- [ ] **After approval**: Slide Generator agent will regenerate all slides using the Primer-style HTML system — you don't need to update individual slides
- [ ] `deck.preamble` is `[{ src: "./exec-spine.md" }]` — never `[]` for exec talks

---

## Common Executive Talk Anti-Patterns

| Anti-Pattern | Signal | Exec Fix |
|---|---|---|
| Implementation section | Section covers a tool, CLI, or configuration step rather than a business outcome | Reframe as "What this means for your platform team" or absorb into the stakes section |
| Missing urgency | No section answers "why now" or "cost of not acting" | Add a stakes/imperative section before the action close |
| Passive closing section | Last section = "Resources" or "References" — leaders leave with no decision | Reframe as "What Leadership Must Authorize" or "Three Decisions This Quarter" |
| Metric-free talk | Key points are directional but not quantified | Audit README for any numbers; if none exist, flag as an open decision |
| All sections equal weight | All `high` or all `medium` | Force a ranking — the credibility peak and the urgency section should be highest emphasis |
| Too many sections | 5+ sections in a 30-min exec briefing | Consolidate: the opening frame and the system/model can often be one section |
| Audience confusion | Section mixes exec-level framing with developer-level detail | Cut the detail; add a speaker note that "detail available on request" |

---

## Example Invocations

- "we're spending two sections on the operating model — review the exec talk and see if that's the best use of time"
- "we never explain the cost of not acting — is it worth adding a section?"
- "council: does the agentic-delivery talk structure land for a CXO audience?"
- "review the exec recipe before we regenerate slides"
- "is this the best use of our time with VPs who only have 30 minutes?"
