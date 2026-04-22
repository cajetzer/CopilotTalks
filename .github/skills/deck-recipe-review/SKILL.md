---
name: deck-recipe-review
description: >
  Review a tech-talk's section structure against audience needs and coverage gaps,
  then update its deck.recipe.yml. Uses a 3-agent collaborative council to analyze
  section weighting, missing topics, and narrative arc. Triggers: "review the talk",
  "is this the best use of our time", "section weighting", "coverage gap", "recipe".
infer: true
---

# Deck Recipe Review Skill

Diagnose structural problems in a tech-talk's section order, surface coverage gaps, and produce a concrete updated `deck.recipe.yml`. Uses a collaborative Agent Council for multi-perspective analysis.

**Key Constraints:**
- **Max 4 sections** — Council should consolidate, not expand. Each section gets ~12-15 slides in 60-min talks.
- **Slide generator ensures consistency** — Once you commit a recipe, the [Tech Talk Slide Generator agent](../../agents/tech-talk-slide-generator.agent.md) generates all slides using the Vue component system with uniform structure (title, toc, section openers, closers, references). Focus the council on *narrative logic and audience fit*, not slide-level details.

---

## When to Invoke This Skill

- User questions whether a section is worth its airtime ("we're spending a whole section on X")
- User notices a topic is missing ("we never show how to build/configure/deploy Y")
- User asks to "review the talk" or check if the structure matches the audience
- Preparing to regenerate slides from a recipe and want to validate it first

**Not for:** Minor wording tweaks, slide-level fixes, or adding a single slide.

---

## Pre-Flight: Gather Source Material

Before dispatching the council, read ALL of these. The council prompt must include the full context — agents cannot read files themselves.

```
1. tech-talks/<topic>/README.md        — full section content + key artifacts
2. tech-talks/<topic>/deck.recipe.yml  — current sectionOrder, sectionModes, highlightMoments
3. slides/tech-talks/<topic>.md        — list all <!-- SLIDE: --> comments to see actual slide count per section
```

From these, extract:
- Current `sectionOrder` with section names
- Current `sectionModes` (emphasis levels)
- Current `highlightMoments`
- Approx slide count per section (from the .md file)
- Target audience + talk duration
- The specific concern the user raised

---

## Council Dispatch: Phase 1 (All 3 Parallel)

Dispatch all three agents simultaneously. Each gets the SAME full context block (see template below) with a different cognitive role.

### Context Block Template

```
TASK: [One-sentence description of the structural question]

TALK: [title], [duration], audience: [audience list]
CORE QUESTION: "[the talk's stated core question]"

CURRENT SECTIONS (with slide counts):
1. "[Section Name]" (emphasis: X, ~N slides) — [2-line description of what it covers]
2. ...

CONSTRAINTS:
- Max 4 sections (no exceptions — consolidate, don't expand)
- Slide generator will apply the component system for structural consistency

USER CONCERN: [Exact concern — what's taking too much space / what's missing]

KNOWN MATERIAL:
- [Any relevant artifacts, demos, or examples that already exist in the repo]
- [Any CLI commands or toolchain status that affects feasibility]
```

### Alpha Prompt (Deep Explorer)

```
You are Alpha on an Agent Council (Collaborative mode).
Your role: Generate a comprehensive, creative response.

[CONTEXT BLOCK]

Analyze: Is the current section weighting the best use of the talk's time?
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

Analyze: Is the current section weighting the best use of the talk's time?

1. Write your response focused on practical, validated approaches
2. Add '## Building Blocks': what content already exists that could fill gaps?
3. Add '## Combinations': what topics could be merged or split for better flow?
Output a concrete recommended sectionOrder with emphasis levels and rationale.
Be constructive. Find opportunities, not just constraints.
```

### Gamma Prompt (Elegant Minimalist)

```
You are Gamma on an Agent Council (Collaborative mode).
Your role: Find the most elegant, minimal solution and open new angles.

[CONTEXT BLOCK]

Analyze: What is the single structural change that would most improve this talk?

1. Write the simplest viable restructuring
2. Add '## Alternative Angles': reframe the problem from 2 different perspectives
3. Add '## What If': propose one boundary-pushing variation
Be concrete about the new sectionOrder and what changes in highlightMoments.
```

---

## Council Dispatch: Phase 2 (All 3 Parallel Improve)

After all three Phase 1 responses return, dispatch all three again simultaneously. Each agent gets the other two drafts and writes an IMPROVED version.

Key instruct for each: *"Steal the best ideas from the other two shamelessly. Look for novel syntheses. Keep your natural strength but enrich it."*

---

## Council Dispatch: Phase 3 (Orchestrator Synthesis)

Single orchestrator prompt with all three Phase 2 improved versions. Ask for:

1. **Verdict** (2-3 sentences) — the core structural problem and fix
2. **Concrete `sectionOrder`** with `sectionModes` (emphasis + one-line note per section)
3. **Updated `highlightMoments`** list — what to drop, what to add
4. **One open decision** — the single thing the user must resolve before slides can be generated

---

## Mapping Output to recipe.yml

Update `deck.recipe.yml` with the synthesized output:

```yaml
# Add a comment above sectionOrder explaining the narrative arc
# Arc: [Consumer → Producer → Sharer] or whatever the council identified
# Keep to 4 sections maximum.

sectionOrder:
  - "New Section Name 1"
  - "New Section Name 2"
  - "New Section Name 3"
  - "New Section Name 4"

sectionModes:
  "New Section Name 1":
    emphasis: high
    note: >
      [One-sentence note from the council's section description]
  "New Section Name 2":
    emphasis: high
    note: >...
  "New Section Name 3":
    emphasis: medium-high
    note: >...
  "New Section Name 4":
    emphasis: medium
    note: >...

highlightMoments:
  - "[Keep existing ones the council validated]"
  - "[New ones the council added]"
  # Drop ones the council demoted (keep 4-5 total)

# If there's an open decision, add it as a YAML comment:
# OPEN DECISION: [The question] — [the two paths and their consequences]
```

**Post-Recipe Workflow:**
1. Commit updated `deck.recipe.yml`
2. Invoke [Tech Talk Slide Generator agent](../../agents/tech-talk-slide-generator.agent.md) with the talk path
3. Slide Generator uses the Vue component system to create consistent slides for all sections
4. No manual slide editing needed — the template ensures title slides, TOCs, section openers, closers, and references are auto-generated

---

## Quality Checks Before Committing

- [ ] **Max 4 sections** — Council output has exactly 4 or fewer sections. If more, consolidate.
- [ ] Every section in the new `sectionOrder` exists as a major section (`##`) in the README
- [ ] No section has been promoted to `high` that the council flagged as risky without noting the risk
- [ ] The narrative arc is explicit in a comment above `sectionOrder`
- [ ] The open decision is documented in the file — don't silently absorb it
- [ ] `highlightMoments` list is 3-5 items (not more — dilutes focus)
- [ ] **After approval**: Tech Talk Slide Generator agent will regenerate all slides using the Vue component system — you don't need to update individual slides

---

## Common Structural Anti-Patterns

| Anti-Pattern | Signal | Fix |
|---|---|---|
| Mechanism as section | Section covers a tool/output (lockfiles, CI flags) rather than a capability or decision | Absorb as callout inside the parent capability section |
| Identity crisis | Talk's core question promises X but all slides deliver Y | Rename sections with verb-led titles that match what the audience *does* |
| Consumption-only for a producer audience | Platform/ops teams are in the audience but all sections are consumer-perspective | Add at least one producer-perspective section |
| Passive closing section | Last section = "Resources" or "References" — audience leaves with no next action | Reframe as "Contribution Targets" or "What to Try This Week" |
| All sections equal weight | All `high` or all `medium` | Force a ranking — the climax section should be the highest-emphasis section |

---

## Example Invocations

- "we're spending a whole section just on X — review the talk and see if that's the best use of our time"
- "we never show how to do Y — is it worth adding a section?"
- "council: does the copilot-plugins talk structure match what platform teams actually need?"
- "review the tech-talk recipe before we regenerate slides"
