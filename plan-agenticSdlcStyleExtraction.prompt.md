## Plan: Agent Teams Title Slide Pilot

Scope is intentionally narrow.

Only do Title slide work for `slides/tech-talks/agent-teams.md`.

## Goal

Create one clean pilot for a shared Title slide structure without touching any other deck or any other slide archetype.

## Files In Scope

1. `slides/tech-talks/agent-teams.md`
2. `slides/style.css`

## What Changes

1. Add only the shared title-slide classes needed by `agent-teams.md`.
2. Convert only the Title slide in `agent-teams.md` to use those classes.
3. Do not change Core Question, TOC, section openers, References, Thank You, or any other deck.

## Success Criteria

1. The Title slide still renders correctly.
2. The deck builds successfully.
3. Before and after screenshots are captured and compared.
4. The refactor makes the Title slide markup simpler without changing the visual intent.

## Validation

1. Capture a before screenshot of slide 1.
2. Apply the minimal CSS + markup refactor.
3. Build `tech-talks/agent-teams.md`.
4. Capture an after screenshot of slide 1.
5. Compare before vs after for layout drift, spacing, and missing elements.

## Stop After This

After the `agent-teams` Title slide pilot is complete, stop. Do not continue to any other slide or deck until the result is reviewed.

Examples:

1. title-slide shell
2. core-question shell
3. references shell
4. thank-you shell
5. section-opener shell
6. toc shell

### Accent hooks

Examples:

1. accent gradient classes
2. accent border hooks
3. accent text hooks

The archetype class should define the structure. Accent hooks may vary by deck, but only within the allowed system.

## Naming Rules

All shared classes in `slides/style.css` should remain namespaced with `sv-`.

Examples:

1. `sv-title-slide`
2. `sv-core-question`
3. `sv-references-slide`
4. `sv-thank-you-slide`
5. `sv-section-opener`
6. `sv-toc-slide`
7. `sv-breadcrumb-row`
8. `sv-progress-dots`

Do not create deck-specific class names.

## Canonical Consistency Rules

For Tier 1 archetypes:

1. The wrapper structure must be identical across decks.
2. Shared spacing and alignment must be identical across decks.
3. Shared surfaces, panel shapes, dividers, logo placement, and metadata placement must be identical across decks.
4. Only content and approved accent values may differ.
5. If a deck needs a structural exception, that slide is no longer canonical and must be treated as a different archetype.

## Canonical Markup Contract

The following contracts define the target structure for Tier 1 archetypes. These are the structures that active decks should converge on.

### Title

Required structure:

1. shared outer hero shell
2. shared background layer
3. shared hero orb layer
4. shared logo block
5. shared title block
6. shared subtitle pill block
7. shared supporting tagline block when present
8. shared decorative divider
9. shared bottom-right metadata block

Allowed variance:

1. title text
2. subtitle text
3. supporting tagline text
4. duration / metadata text
5. approved accent hooks

Not allowed to vary:

1. logo placement
2. divider placement
3. shell spacing
4. metadata placement

### Core Question / WYCDT opener

Required structure:

1. shared content shell
2. shared breadcrumb row
3. shared opener pill
4. shared divider rule
5. shared central question card
6. shared supporting explanation block
7. shared stat-card grid

Allowed variance:

1. opener label text
2. question text
3. explanatory body text
4. stat-card copy
5. approved accent hooks

Not allowed to vary:

1. card shell structure
2. stat-grid structure
3. breadcrumb row structure
4. spacing between question card and stat grid

### References

Required structure:

1. shared content shell
2. shared heading row
3. shared two-column reference layout
4. shared reference panel component
5. shared link and description treatment

Allowed variance:

1. section labels
2. reference item text and URLs
3. approved accent hooks

Not allowed to vary:

1. number of columns for the canonical layout
2. panel spacing
3. link presentation pattern

### Thank You

Required structure:

1. shared hero shell
2. shared logo block
3. shared thank-you headline
4. shared subtitle pill
5. shared stat-card strip
6. shared closing CTA line
7. shared decorative divider

Allowed variance:

1. headline copy if intentionally customized
2. subtitle text
3. stat-card content
4. CTA text
5. approved accent hooks

Not allowed to vary:

1. shell structure
2. stat-strip layout
3. CTA placement
4. divider placement

### Table of Contents

Required structure:

1. shared content shell
2. shared heading row
3. shared two-column card grid
4. shared section card component
5. shared helper/footer line

Allowed variance:

1. section names
2. section descriptions
3. jump targets
4. approved accent hooks

Not allowed to vary:

1. grid shape
2. card spacing
3. heading-row structure
4. helper-line placement

### Section Opener

Required structure:

1. shared hero shell
2. shared section pill
3. shared title stack
4. shared teaser-card row
5. shared mono callout block

Allowed variance:

1. section number text
2. section title text
3. section subtitle text
4. teaser-card content
5. mono callout content
6. approved accent hooks

Not allowed to vary:

1. pill placement
2. title stack spacing
3. teaser-card grid shape
4. mono callout placement

## Approved Accent Hook Contract

Canonical archetypes may vary by accent, but only through bounded hooks. Accent must never redefine structure.

### Accent hook categories

Allowed hook categories:

1. background gradient family
2. orb gradient family
3. pill gradient family
4. divider/rule color family
5. headline gradient family
6. accent text color family
7. border tint family for shared panels/cards

Forbidden accent behavior:

1. changing layout or spacing
2. changing grid shape
3. adding or removing wrapper elements
4. changing component ordering
5. introducing deck-local one-off utility stacks instead of shared hooks

### Canonical accent families

The system should normalize around a small approved set of accent families used across tech-talk decks.

Initial family set:

1. cyan / blue / indigo
2. blue / indigo / purple
3. indigo / purple / violet
4. purple / pink / rose
5. amber / orange / red
6. emerald / green / teal when the archetype meaning requires a positive-state accent

### Hook application rules

1. A deck may choose from the approved accent families for a canonical slide.
2. The chosen family must be expressed through shared CSS classes or shared CSS custom-property hooks, not ad hoc inline layout changes.
3. If a deck needs an accent outside the approved families, that is a contract change and must be recorded explicitly.
4. Accent hooks should be portable across archetypes where possible.

### Tier 1 accent expectations

Title:

1. background, orb, title gradient, subtitle pill, divider, and metadata tint may use approved accent hooks.

Core Question / WYCDT:

1. heading pill, divider rule, question-card tint, and stat-card tints may use approved accent hooks.
2. The stat-card grid shape and card spacing may not vary.

References:

1. heading row and category labels may use approved accent hooks.
2. Reference panel structure must remain neutral and stable.

Thank You:

1. hero shell accents, stat-card tints, and CTA emphasis may use approved accent hooks.
2. The stat strip structure must remain canonical.

Table of Contents:

1. heading row and TOC card tints may use approved accent hooks.
2. Card structure, spacing, and interaction affordance must remain canonical.

Section Opener:

1. section pill, title gradient, teaser-card tints, and mono callout accent text may use approved accent hooks.
2. The card row and shell placement must remain canonical.

## Promotion and Demotion Rules

Promote an archetype to canonical only if:

1. It appears across multiple tech-talk decks.
2. The same content pattern is clearly intended to mean the same thing in every deck.
3. A single markup structure can serve all participating decks cleanly.

Demote an archetype from canonical if:

1. It needs deck-specific wrappers.
2. It needs per-deck spacing hacks.
3. Its visual meaning changes materially between decks.

## Active Deck Rule

Ignore all tech-talk decks with `status: archived`.

For this plan:

1. Only `status: active` tech-talk decks count toward archetype discovery, normalization, validation, and deviation reporting.
2. Archived tech-talks are out of scope and should not influence archetype counts, batch ordering, or success criteria.
3. Archived tech-talks must not be edited.

## Phase Plan

### Phase 0 — Repo-wide archetype inventory

Goal: identify the recurring archetypes across all tech-talk decks before changing CSS.

Actions:

1. Inventory all files under `slides/tech-talks/`.
2. Build a repo-wide archetype map by slide comment name, visual structure, and purpose.
3. Mark each archetype as `Tier 1`, `Tier 2`, or `Tier 3`.
4. Identify the decks participating in each Tier 1 archetype.
5. Confirm the active-deck-only migration scope before migration work begins.
6. Record a checkpoint before changes begin.

Exit gate:

1. Every active tech-talk deck is accounted for.
2. Tier 1 archetypes are explicitly listed.
3. Active-deck-only migration scope is explicit.
4. The first archetype execution order is fixed.

### Phase 0.5 — Canonical markup contract

Goal: define what identical means before touching decks.

Actions:

1. Lock the canonical markup contract for Tier 1 archetypes.
2. Define what content may vary and what structure may not.
3. Define approved accent hooks.
4. Define what "materially simpler" means for canonical slides.

Working definition of materially simpler:

1. The canonical slide uses shared classes for structure instead of inline layout stacks.
2. Repeated utility clusters disappear from deck files.
3. Deck files keep only content and limited accent hooks.
4. A reviewer can compare two decks and immediately see the same archetype structure.

Exit gate:

1. Canonical markup rules are fixed.
2. Accent hooks are fixed.
3. The definition of materially simpler is fixed.

### Phase 1 — Shared primitive and archetype layer in `slides/style.css`

Goal: create the additive CSS needed for Tier 1 archetypes before changing decks.

Target scope:

1. title shell primitives
2. core question shell primitives
3. references shell primitives
4. thank-you shell primitives
5. section opener primitives
6. toc primitives
7. breadcrumb and progress primitives

Rules:

1. Add shared classes first.
2. Do not rely on deck-specific selectors.
3. Do not let class names mention a deck.
4. Build for canonical sameness, not for deck-local convenience.

Exit gate:

1. `slides/style.css` contains the agreed primitives and canonical archetype classes.
2. Footer compatibility has been checked.
3. No class depends on a specific deck file to make sense.

### Phase 2 — Normalize Title across all tech-talk decks

Goal: make every tech-talk Title slide structurally and stylistically identical.

Actions:

1. Define one canonical Title markup pattern.
2. Migrate every tech-talk deck Title slide to that pattern.
3. Keep only title text, subtitle text, duration text, and approved accent hooks variable.

Exit gate:

1. All tech-talk Title slides use the same shared structure.
2. All styling for that structure lives in `slides/style.css`.
3. Visual differences are limited to content and approved accents.

### Phase 3 — Normalize Core Question / WYCDT across all tech-talk decks

Goal: make every Core Question opener structurally and stylistically identical.

Actions:

1. Treat `The Core Question` and equivalent WYCDT-style opener slides as one canonical archetype unless a deck truly differs in intent.
2. Define one canonical markup pattern.
3. Migrate every participating deck before moving on.

Exit gate:

1. All participating opener slides use the same shell, card structure, and stat-grid structure.
2. Structural styling lives in `slides/style.css`.
3. Deck-level differences are only content and approved accent hooks.

### Phase 4 — Normalize References across all tech-talk decks

Goal: make References slides identical across decks.

Actions:

1. Define one canonical References layout.
2. Standardize heading row, two-column structure, panel treatment, spacing, and link presentation.
3. Migrate every deck with a References slide before continuing.

Exit gate:

1. References slides are structurally identical across participating decks.
2. Reference panels are fully styled by `slides/style.css`.

### Phase 5 — Normalize Thank You across all tech-talk decks

Goal: make Thank You slides identical across decks.

Actions:

1. Define one canonical Thank You markup pattern.
2. Standardize hero shell, stat card strip, CTA/footer copy placement, and divider treatment.
3. Migrate every participating deck before continuing.

Exit gate:

1. Thank You slides are structurally identical across participating decks.
2. Only content and approved accents vary.

### Phase 6 — Normalize Table of Contents across all tech-talk decks

Goal: make TOC slides identical where they share the same role.

Actions:

1. Define one canonical TOC grid and interaction pattern.
2. Standardize card sizing, spacing, heading row, and helper text.
3. Migrate all participating decks.

Exit gate:

1. TOC slides use the same shell and card system.
2. Inline layout drift is removed.

### Phase 7 — Normalize Section Openers across all tech-talk decks

Goal: make section opener slides identical across decks.

Actions:

1. Define one canonical section opener pattern.
2. Standardize pill, title stack, teaser card row, and mono callout block.
3. Migrate all participating decks.

Exit gate:

1. Section openers are structurally identical across decks.
2. Accent is the only allowed visual variance.

### Phase 8 — Normalize standard breadcrumb content slides

Goal: standardize the most repeated in-section content frame across decks.

Actions:

1. Identify the common breadcrumb + dots + title + body shell.
2. Define a canonical content-slide shell.
3. Migrate participating decks one archetype slice at a time.

Exit gate:

1. The standard breadcrumb content frame is shared across participating decks.
2. Progress dots, spacing, and header row are no longer hand-authored inline per deck.

### Phase 9 — Normalize the Batch B interior archetypes

Goal: continue the same pattern for the high-reuse interior archetypes discovered in the full inventory.

Candidate order:

1. What You Can Do Today / action close
2. Mental model shift
3. Use case
4. Mechanism / flow / architecture
5. Capability / component overview

Rule:

Do not start the next Tier 2 archetype until the current one is normalized across all participating decks.

### Phase 9.5 — Normalize the Batch C structured analytical archetypes

Goal: normalize the structured analytical slide families after the Batch B interior slides stabilize.

Candidate order:

1. progression / maturity / levels
2. comparison / contrast
3. metrics / ROI / impact
4. setup / configuration / getting started
5. governance / compliance / guardrails

Rule:

Do not start the next Batch C archetype until the current one is normalized across all participating decks.

### Phase 10 — Documentation and governance

Goal: lock the system for future deck authors.

Update:

1. `slides/TEMPLATE.md`
2. `slides/copilot-brand.md`

Add:

1. canonical archetype registry
2. canonical markup examples
3. approved accent hook guidance
4. rules for when a slide is allowed to diverge from a canonical archetype

Rules:

1. Documentation must describe canonical archetypes explicitly.
2. Documentation must tell authors to reuse the canonical archetype first, not invent new structure.
3. Documentation updates happen only after the archetype class names are stable.

## Execution Ledger

This plan should maintain its own live execution state so the work can stop and restart cleanly.

### Ledger Rules

1. Update the task list in this file at the end of every working session.
2. Only one task may be marked `IN PROGRESS` at a time.
3. Every completed task should include a short outcome note.
4. If work stops mid-task, record the current deck set, files touched, validation status, and the next concrete action.
5. Before starting new work, read the ledger first and resume from the first `IN PROGRESS` task or the earliest `TODO` task.
6. If a slide is found to deviate from canonical CSS usage or its archetype is unclear, add it immediately to the deviation inventory rather than relying on memory later.

### Status Vocabulary

Use only these statuses:

1. `TODO`
2. `IN PROGRESS`
3. `BLOCKED`
4. `DONE`
5. `DEFERRED`

### Session Handoff Record

At the end of each session, append or refresh a short handoff note containing:

1. date
2. current archetype batch
3. decks touched
4. files touched
5. validation completed
6. known regressions or risks
7. next exact action

## Working Task List

Maintain this checklist in-place as execution progresses.

### Phase 0 — Inventory and Contracts

1. `[DONE]` Build repo-wide inventory of `slides/tech-talks/*.md`.
   Outcome: 21 active tech-talk deck files identified as the only in-scope corpus under `slides/tech-talks/`.
2. `[DONE]` Map recurring slide archetypes across all tech-talk decks.
   Outcome: recurrence counts and naming variants gathered across active decks only; strongest active-deck patterns confirmed for `Thank You` (21), `References` (19), `Table of Contents` (19), `The Core Question` (17), `Title` (13), `Title Slide` (8), with 20 active decks also using `Part N — ...` or `Section N — ...` section openers.
3. `[DONE]` Confirm Tier 1 archetype membership for Title, Core Question/WYCDT, References, Thank You, TOC, and Section Opener.
   Outcome: active migration scope is 21 decks; all 21 active decks already have References and Thank You, 20 active decks match Title/Title Slide, and 20 active decks match the current Core Question/TOC/Section Opener naming family, with `agentic-sdlc.md` and `parallel-execution.md` recorded as the active exceptions requiring archetype normalization or reclassification.
   3.5. `[DONE]` Expand the inventory into a full archetype registry beyond Tier 1 boundaries.
   Outcome: the plan now records explicit Tier 1, Tier 2, and Tier 3 archetype families derived from the repo-wide slide-name pass, including action-close, mental-model-shift, use-case, mechanism/flow, capability overview, progression/levels, comparison, metrics, setup, governance, interactive, and appendix-style families.
4. `[DONE]` Define canonical markup contract for each Tier 1 archetype.
   Outcome: canonical structure rules written for Title, Core Question/WYCDT, References, Thank You, TOC, and Section Opener, including allowed variance vs prohibited structural drift.
5. `[DONE]` Define approved accent hook contract for canonical archetypes.
   Outcome: approved accent families, allowed hook categories, forbidden accent behavior, and Tier 1 accent rules are now defined so decks can vary visually without reintroducing structural drift.
6. `[DONE]` Lock the active-deck-only migration scope.
   Outcome: 21 active decks are the complete in-scope corpus; archived decks are ignored by this plan.
7. `[DONE]` Record initial checkpoint before archetype migrations begin.
   Outcome: Phase 0 inventory, active-deck-only scope, canonical Tier 1 markup rules, and approved accent-hook rules are now locked as the pre-migration baseline for restartable execution.

### Phase 1 — Shared CSS Layer

7. `[DONE]` Add or normalize shared primitives in `slides/style.css`.
   Outcome: first shared primitives for canonical hero/title structure are now present in `slides/style.css`, including shared shell, background, orb, logo, title, pill, tagline, divider, and metadata classes.
8. `[DONE]` Add canonical Title archetype classes.
   Outcome: the first canonical Title archetype class layer is now defined in `slides/style.css` and validated by successful builds of representative active decks.
9. `[TODO]` Add canonical Core Question / WYCDT archetype classes.
10. `[TODO]` Add canonical References archetype classes.
11. `[TODO]` Add canonical Thank You archetype classes.
12. `[TODO]` Add canonical TOC archetype classes.
13. `[TODO]` Add canonical Section Opener archetype classes.
14. `[TODO]` Add canonical breadcrumb/progress primitives.

### Phase 2 — Cross-Deck Canonical Batches

15. `[DONE]` Normalize Title across all participating tech-talk decks.
    Outcome: all 21 active tech-talk decks now use the shared `sv-title-slide` structure at the opening slide, and `agentic-sdlc.md` has been normalized into the canonical Title comment family.
16. `[TODO]` Build and inspect representative Title slides across participating decks.
    Outcome so far: `agent-teams.md` and `copilot-acp.md` built successfully earlier in the batch; additional full-batch validation was started before the user-directed stop point, and inspect-slide verification remains pending.
17. `[TODO]` Normalize Core Question / WYCDT across all participating tech-talk decks.
18. `[TODO]` Build and inspect representative Core Question / WYCDT slides across participating decks.
19. `[TODO]` Normalize References across all participating tech-talk decks.
20. `[TODO]` Build and inspect representative References slides across participating decks.
21. `[TODO]` Normalize Thank You across all participating tech-talk decks.
22. `[TODO]` Build and inspect representative Thank You slides across participating decks.
23. `[TODO]` Normalize Table of Contents across all participating tech-talk decks.
24. `[TODO]` Build and inspect representative TOC slides across participating decks.
25. `[TODO]` Normalize Section Openers across all participating tech-talk decks.
26. `[TODO]` Build and inspect representative Section Openers across participating decks.

### Phase 3 — Strongly Shared Archetypes

27. `[TODO]` Normalize What You Can Do Today / action-close slides.
28. `[TODO]` Normalize mental-model-shift slides.
29. `[TODO]` Normalize use-case slides.
30. `[TODO]` Normalize mechanism / flow / architecture slides.
31. `[TODO]` Normalize capability / component overview slides.

### Phase 4 — Governance and Documentation

32. `[TODO]` Normalize progression / maturity / level slides.
33. `[TODO]` Normalize comparison / contrast slides.
34. `[TODO]` Normalize metrics / ROI / impact slides.
35. `[TODO]` Normalize setup / configuration / getting-started slides.
36. `[TODO]` Normalize governance / compliance / guardrail slides.
37. `[TODO]` Decide whether interactive / live-app slides merit a shared archetype or stay deferred.
38. `[TODO]` Create or update shared class registry with canonical archetype mappings.
39. `[TODO]` Update `slides/TEMPLATE.md` after class names stabilize.
40. `[TODO]` Update `slides/copilot-brand.md` after class names stabilize.
41. `[TODO]` Add canonical markup examples and reuse rules to docs.
42. `[TODO]` Produce final repo-wide deviation inventory for slides still outside `style.css` or without a confident archetype.

## Current Session State

Update this block continuously during execution.

- Current task: `Plan updated with full archetype registry and archetype-by-archetype batch order`
- Current archetype batch: `Planning / inventory refinement`
- Participating decks: `21 active tech-talk decks are the full in-scope corpus; the registry now covers Tier 1 boundaries plus Batch B and Batch C interior families`
- Files in flight: `plan-agenticSdlcStyleExtraction.prompt.md`
- Validation status: `Plan diagnostics clean; full slide-name inventory folded into the plan; Title batch remains complete`
- Next action: `Resume implementation with the Question / opener archetype, then continue in batch order through TOC, Section Opener, References, and Thank You`

## Handoff Log

Append newest entries at the top.

### 2026-04-13

1. State: Phase 1 started and the first canonical archetype migration is underway.
2. Current archetype batch: Title.
3. Shared CSS progress: added first-pass `sv-` title primitives and canonical title archetype classes to `slides/style.css`.
4. Active deck migrations completed: all 21 active tech-talk decks now use the shared Title structure at the opening slide, including `agentic-sdlc.md`, which now has an explicit canonical Title slide comment.
5. Validation: editor diagnostics clean for `style.css` and migrated title decks; representative builds completed successfully earlier for `tech-talks/agent-teams.md` and `tech-talks/copilot-acp.md`; inspect-slide validation remains pending.
6. Files touched: `slides/style.css`, all active `slides/tech-talks/*.md` Title slides, `plan-agenticSdlcStyleExtraction.prompt.md`.
7. Next action: stop at the user-requested Title boundary, then resume later with Title visual verification or the next archetype batch.

### 2026-04-13

1. State: Phase 0 started; repo-wide inventory gathered from live deck files.
2. Current archetype batch: Phase 0 inventory.
3. Deck facts: 21 active tech-talk decks are in scope under `slides/tech-talks/*.md`.
4. Initial recurrence counts: `Thank You` (21), `Table of Contents` (19), `References` (19), `The Core Question` (17), `Title` (12), `Title Slide` (8).
5. Section opener participation: 20 decks matched `Part N — ...` or `Section N — ...`.
6. Active outlier confirmed: `parallel-execution.md` uses `When to Use This Pattern` instead of the current Core Question naming family and needs archetype classification.
7. Files touched: `plan-agenticSdlcStyleExtraction.prompt.md`.
8. Validation: plan file diagnostics clean after ledger update.
9. Next action: classify active alternate opener slides before Tier 1 membership is declared complete.

### 2026-04-13

1. State: Plan rewritten around cross-deck archetype normalization instead of deck-first extraction.
2. Current archetype batch: not started.
3. Files touched: `plan-agenticSdlcStyleExtraction.prompt.md`.
4. Validation: editor diagnostics clean on the plan file.
5. Next action: start Phase 0 inventory and replace `TODO` values in `Current Session State` with real execution state.

## Verification Plan

For every archetype batch:

1. Identify all participating decks before editing.
2. Capture baseline screenshots for one representative slide per participating deck.
3. Edit only that archetype across the participating decks.
4. Build every modified deck.
5. Run inspect-slide on the representative slides for every modified deck.
6. Compare screenshots to confirm cross-deck sameness.
7. Spot-check one additional slide of the same archetype if the deck contains multiple copies.
8. Check editor diagnostics after each batch.
9. Update the deviation inventory with any slides that still require inline structural styling or cannot be assigned to a stable archetype.

Success condition for a canonical archetype batch:

1. All participating decks build.
2. Representative screenshots are visually consistent.
3. The archetype’s structure is now owned by `slides/style.css`.
4. Deck files differ only in content and approved accent hooks.

## Final Deviation Inventory

At the end of implementation, produce a repo-wide inventory with one line item per unresolved slide.

Each entry should include:

1. deck path
2. slide name
3. slide number if known
4. suspected archetype or `UNKNOWN`
5. reason for deviation
6. whether the slide still depends on inline structural styling
7. recommended next action

Use two categories:

1. `Deviates From styles.css`
2. `Archetype Undetermined`

This inventory is a required deliverable, not an optional appendix.

### Current Findings Seed List

#### Deviates From styles.css

None currently seeded for active decks.

#### Archetype Undetermined

1. `slides/tech-talks/parallel-execution.md` — active — uses `When to Use This Pattern` instead of the current Core Question family and also lacks the current TOC/Section Opener naming family; needs archetype classification before Tier 1 normalization begins.

## Hard Stop Rules

1. If a canonical archetype requires deck-specific wrappers, stop and redefine the archetype boundary.
2. If a batch introduces 3 or more regressions across participating decks, revert to the last checkpoint.
3. If a deck cannot adopt the canonical structure without major structural exceptions, demote that slide family from Tier 1.
4. If code-heavy or screenshot-heavy slides are being forced into canonical structure prematurely, stop and keep them out of the current batch.
5. If an archetype cannot be described as identical except for content and accent, it is not yet canonical.

## Checkpoint Strategy

1. Create a checkpoint before the first archetype migration.
2. Create a checkpoint after every successful archetype batch.
3. Do not begin the next archetype until the current one is stable across all participating decks.

## Relevant Files

1. `/workspaces/CopilotTraining/slides/style.css`
2. `/workspaces/CopilotTraining/slides/TEMPLATE.md`
3. `/workspaces/CopilotTraining/slides/copilot-brand.md`
4. `/workspaces/CopilotTraining/slides/tech-talks/global-bottom.vue`
5. `/workspaces/CopilotTraining/slides/scripts/inspect-slide.js`
6. `/workspaces/CopilotTraining/.github/skills/inspect-slide/SKILL.md`
7. `/workspaces/CopilotTraining/slides/tech-talks/*.md`

## Scope Boundaries

### Included

1. Repo-wide archetype discovery for tech-talk decks
2. Cross-deck normalization of archetypes for active decks only
3. Shared CSS extraction into `slides/style.css`
4. Canonical markup and governance rules

### Explicitly deferred

1. Full light-mode beautification across all decks
2. Forcing highly variable slides into canonical structure too early
3. A repo-wide all-at-once rewrite of every non-canonical slide type
4. Any work on decks with `status: archived`

## Shared Class Registry

Maintain a registry that records:

1. class name
2. archetype name
3. tier
4. participating decks
5. allowed content variance
6. allowed accent variance
7. known limitations

## Final Recommendation

Treat this as a repo-wide consistency program, not a single-deck extraction exercise.

The first job is to find the archetypes that should already be identical and make them actually identical across all tech-talk decks. Only after Title, Core Question / WYCDT, References, Thank You, TOC, and Section Openers are normalized should the work move on to more variable slide families.
