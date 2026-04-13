## Plan: Shared Tech-Talk Style System Pilot via Agentic SDLC

Use `slides/tech-talks/agentic-sdlc.md` as the pilot deck for extracting shared Slidev presentation structure into `slides/style.css`, with the explicit long-term goal that all tech-talk Slidev decks reuse the same shared CSS system for layout, shells, recurring panels, and navigation scaffolding.

This is not just a deck cleanup. It is the first phase of building a reusable tech-talk style layer. Agentic SDLC is the proving ground because its slide families repeat heavily, but the system must stay generic enough for other decks that share the same broad layout/content/sequence patterns while allowing deviations for code snippets, examples, product screenshots, or one-off narrative slides.

## Principles

1. Treat Agentic SDLC as the pilot, not the boundary.
2. Extract structure first, not every visual accent.
3. Move by archetype, not by slide order.
4. Shared CSS must be generic, namespaced, and reusable across tech-talk decks.
5. Deck-specific accents, unusual compositions, and special code/example slides can remain partially inline until a second deck proves the pattern is truly shared.
6. Every phase needs an exit gate using the inspect-slide harness plus visual review.

## Target Outcome

1. `slides/style.css` becomes the real shared source of reusable tech-talk presentation classes.
2. `agentic-sdlc.md` stops carrying repeated inline structural Tailwind for common slide families.
3. Other tech-talk decks can adopt the same classes incrementally.
4. Inline markup remains for genuinely unique content, especially code-heavy or example-heavy slides that do not yet map cleanly to shared patterns.

## Style System Contract

Before implementation, define three tiers and keep them separate:

### Tier 1 — Global primitives

These are safe to use across all tech-talk decks.

- Layout shells
- Shared spacing wrappers
- Neutral card and panel surfaces
- Breadcrumb rows
- Progress dot rows
- Divider rules
- Base hero and section shells
- Neutral code/reference surfaces

### Tier 2 — Shared tech-talk archetypes

These are reusable patterns, but only after being proven on more than one deck.

- Core question card
- Table-of-contents grid
- Section opener layout
- Standard comparison layout
- Standard metric strip / impact bar
- Key takeaways grid
- Reference list surface

### Tier 3 — Deck-specific expressions

These should remain inline or deck-local until they clearly recur elsewhere.

- Accent palettes unique to one deck
- Special code/example framing
- Screenshot framing specific to a product UI
- One-off narrative slides
- Content-specific spacing hacks required by a single slide

## Naming Rules

All shared classes in `slides/style.css` should be namespaced with `sv-`.

Examples:

- `sv-hero-shell`
- `sv-section-shell`
- `sv-content-shell`
- `sv-breadcrumb-row`
- `sv-progress-dots`
- `sv-question-card`
- `sv-neutral-panel`
- `sv-compare-2`
- `sv-metric-strip`
- `sv-reference-list`

Do not create deck-specific class names like `agentic-sdlc-cover`.

## Promotion Rules

A pattern should move from inline markup into `slides/style.css` only if at least one of these is true:

1. It appears in 3 or more slides within Agentic SDLC and is likely common across tech-talk decks.
2. It appears in Agentic SDLC and can be cleanly applied to a second tech-talk deck during the cross-deck pilot.
3. It is a structural primitive that every deck benefits from regardless of palette.

Keep a pattern inline if it is tied to a single slide’s narrative, code payload, or screenshot composition.

## Phase Plan

### Phase 0 — Baseline and content freeze

Goal: establish a stable target before changing structure.

Actions:

1. Confirm the current slide count and slide names in `agentic-sdlc.md`.
2. Build the archetype map by slide name, not just number.
3. Freeze structural edits to `agentic-sdlc.md` during the migration.
4. Capture baseline inspect-slide screenshots for one representative slide from each archetype.
5. Record footer behavior from `slides/tech-talks/global-bottom.vue` so new shells do not break the global footer.
6. Create a checkpoint branch or equivalent rollback point before any deck markup changes begin.

Exit gate:

1. Representative slides are identified by name.
2. Baseline screenshots exist for each pilot archetype.
3. The deck is stable enough to refactor without drifting slide positions.
4. A rollback point exists before Phase 1 starts.

### Phase 0.5 — Shared style contract

Goal: decide what is shared before writing CSS.

Actions:

1. Lock the `sv-` naming convention.
2. Write the Tier 1 / Tier 2 / Tier 3 boundary into the plan and later into `slides/style.css` comments.
3. Define what remains inline during the pilot: accent colors, one-off examples, screenshot framing, and code-specific layouts.
4. Define phase exit criteria for all later phases.
5. Define what "materially simpler" means for migrated slides.

Working definition of materially simpler:

1. Fewer repeated structural utility clusters copied across slides.
2. Fewer wrapper lines dedicated only to layout or spacing.
3. Shared shells replace repeated inline layout scaffolding.
4. Accent-only inline utilities remain, but structure no longer repeats verbatim across the deck.

Exit gate:

1. Shared class naming is fixed.
2. Promotion rules are fixed.
3. The team agrees on what is allowed to stay inline.
4. The team agrees on the definition of materially simpler.

### Phase 1 — Shared primitive layer in `slides/style.css`

Goal: create additive shared primitives without breaking existing decks.

Target scope:

- `sv-hero-shell`
- `sv-section-shell`
- `sv-content-shell`
- `sv-breadcrumb-row`
- `sv-progress-dots`
- `sv-divider`
- `sv-neutral-panel`
- `sv-code-panel`
- `sv-callout-surface`
- `sv-card-grid`

Rules:

1. Add new classes only; do not delete deck markup yet.
2. Focus on structure, spacing, and neutral surfaces.
3. Do not solve palette tokenization in this phase beyond leaving room for it.
4. If a candidate class only works after deck-specific exceptions in the pilot deck, do not promote it as shared.

Exit gate:

1. `style.css` contains the agreed shared classes.
2. Existing decks are not changed yet.
3. Footer compatibility has been visually checked on one shell using the inspect harness.
4. No Phase 1 class has required deck-specific naming or exceptions to exist.

### Phase 2 — Hero archetype pilot in Agentic SDLC

Goal: prove the shared centered-hero shell.

Representative slides:

- Title Slide
- Thank You

Move into shared CSS:

- full-height centered shell
- orb/glow positioning
- logo block positioning
- title stack spacing
- metadata placement
- divider treatment

Keep inline for now:

- deck-specific accent colors
- exact hero text content

Exit gate:

1. Both slides pass inspect-slide with no overflow.
2. Footer still aligns correctly.
3. Visual parity is acceptable in the running deck.

### Phase 3 — Question and section-opener pilot in Agentic SDLC

Goal: prove the shared question and section shell patterns.

Representative slides:

- The Core Question
- Part 1 — AgentRC Maturity Model

Move into shared CSS:

- question-card shell
- section opener shell
- section orb placement
- headline stack spacing
- teaser-card row structure
- monochrome callout/code surface

Keep inline for now:

- accent color families
- section-specific teaser content

Exit gate:

1. Both slides pass inspect-slide.
2. Shared classes feel generic, not deck-specific.
3. No extra wrapper complexity was introduced.

### Phase 3.5 — Cross-deck pilot

Goal: prove the extracted classes are truly reusable beyond Agentic SDLC.

Pilot decks:

- `slides/tech-talks/copilot-web.md`
- `slides/tech-talks/agent-teams.md`

Actions:

1. Use `copilot-web.md` as the denser cross-deck pilot because it closely matches the tech-talk rhythm while still carrying its own content shapes.
2. Use `agent-teams.md` as the simpler cross-deck pilot to confirm that shared shells are not overfit to denser decks.
3. Apply the shared hero/question/section classes with minimal adaptation.
4. Run inspect-slide on all pilot slides across Agentic SDLC, Copilot Web, and Agent Teams.

Suggested representative pilot slides:

1. `copilot-web.md`: Title, The Core Question, Part 1 opener.
2. `agent-teams.md`: one title/hero slide, one section opener, and one standard content slide.

Purpose:

This is the point where the work stops being a deck refactor and becomes a real shared style system.

Exit gate:

1. At least one other tech-talk deck can use the new classes without ad hoc redesign.
2. Any classes that prove too deck-specific are demoted back to inline usage or narrower shared scope.
3. If Cross-Deck Pilot requires major per-deck rewrites to make a shared class work, that class is not yet shared and must be demoted.

### Phase 4 — Repeated breadcrumb content archetype pilot

Goal: prove the most repeated content frame in Agentic SDLC.

Representative slides:

- The AgentRC Levels
- Level 1 — Functional

Then expand to:

- Level 2 — Documented
- Level 3 — Standardized
- Level 4 — Optimized
- Level 5 — Autonomous

Move into shared CSS:

- breadcrumb row
- progress dots row
- section title block
- quote/explainer panel
- tri-column evidence card grid
- neutral metric/support strips

Exit gate:

1. Two pilot slides pass inspect-slide.
2. The remaining Level slides can be migrated with minimal new CSS.
3. The same classes still feel reusable for other decks with breadcrumb navigation.
4. Shared breadcrumb classes do not require Agentic-SDLC-specific assumptions to remain stable.

### Phase 5 — Comparison and metric-heavy archetypes

Goal: extract reusable comparison and metrics patterns without overgeneralizing code/example content.

Representative slides:

- The Coordination Tax
- The Economic Shift
- Intent-Based PRs
- The 10-Minute Rule
- Zero-Flake Tolerance

Move into shared CSS where appropriate:

- `sv-compare-2`
- `sv-compare-3`
- `sv-metric-strip`
- `sv-impact-bar`
- `sv-list-panel`

Keep inline where appropriate:

- code/example blocks
- unique arrows/flows
- narrative emphasis that is not clearly shared

Exit gate:

1. Shared comparison patterns cover these slides with minimal exceptions.
2. Code-heavy or one-off content stays legible and does not get forced into brittle shared classes.
3. Any comparison pattern that requires slide-specific hacks stays inline and is not promoted.

### Phase 6 — Dense recap and references

Goal: extract closing-state patterns that other decks can reuse.

Representative slides:

- Key Takeaways
- References

Move into shared CSS:

- recap-card grid
- shared list/reference surface
- footer-like end-state block spacing

Exit gate:

1. These slides pass inspect-slide.
2. The patterns are broad enough for other decks to reuse with different content.

### Phase 6.5 — Tokenization boundary

Goal: decide how shared classes will support multiple deck accent families later.

Actions:

1. Document which accents still remain inline.
2. Decide whether the next step should use CSS custom properties for shared accent hooks.
3. Do not fully tokenize everything yet unless the pilot proves it is worth the complexity.

This phase is intentionally a boundary-setting phase, not a full re-theme.

### Phase 7 — Tighten, normalize, and lock stable class names

Goal: clean up after the pilot and prepare the classes for broader adoption.

Actions:

1. Remove obsolete inline structural utilities from `agentic-sdlc.md`.
2. Normalize class names.
3. Keep content-specific and accent-specific inline utilities only where justified.
4. Record which shared classes are now considered stable.
5. Checkpoint the branch or create a rollback point before documentation changes begin.

Exit gate:

1. Agentic SDLC is materially cleaner.
2. Shared classes are stable enough for other decks to adopt.
3. No naming churn remains.

### Phase 8 — Documentation and governance

Goal: make the shared system usable by other tech-talk decks and future authors.

Update:

- `slides/TEMPLATE.md`
- `slides/copilot-brand.md`

Add or maintain:

- a shared class registry for tech-talk Slidevs
- example markup for each stable shared class
- guidance on what should remain inline
- adoption guidance for existing decks

This is where the plan becomes sustainable instead of just successful once.

Rules:

1. Do not update `slides/TEMPLATE.md` or `slides/copilot-brand.md` until shared class names are stable.
2. Documentation should reflect only classes that survived Agentic SDLC and the cross-deck pilot.
3. Include guidance on when a deck should keep structure inline rather than forcing it into shared CSS.

### Phase 9 — Rollout to other tech-talk decks

Goal: migrate additional decks deliberately rather than all at once.

Suggested rollout:

1. Pick one simpler deck.
2. Pick one denser deck.
3. Migrate by archetype using the already-proven classes.
4. Track which classes required changes and which held up unchanged.

Do not attempt a repo-wide big-bang conversion.

## Archetype Map for Agentic SDLC

Use slide names as the primary reference. Slide numbers are secondary and must be revalidated during execution.

### Hero archetype

- Title Slide
- Thank You

### Question / overview archetype

- The Core Question
- Key Takeaways

### Table-of-contents archetype

- Table of Contents

### Section-opener archetype

- Part 1 — AgentRC Maturity Model
- Part 2 — Repository Topology
- Part 3 — PR Workflows
- Part 4 — Trust Manufacturing

### Standard breadcrumb content archetype

- The AgentRC Levels
- Monorepo Default for Agent Velocity
- Enforced Module Boundaries
- The Economic Shift
- Intent-Based PRs
- The Governance Pyramid
- How to Achieve Fast CI
- References

### Repeated progression archetype

- Level 1 — Functional
- Level 2 — Documented
- Level 3 — Standardized
- Level 4 — Optimized
- Level 5 — Autonomous

### Comparison / metric-heavy archetype

- The Coordination Tax
- The Economic Shift
- The 10-Minute Rule
- Zero-Flake Tolerance

### Dense reference / recap archetype

- Key Takeaways
- References

## Verification Plan

For every pilot phase and every later archetype batch:

1. Run `node scripts/inspect-slide.js agentic-sdlc <slide-number>` before editing the representative slide.
2. View the generated screenshot in `slides/.harness/`.
3. Edit only the targeted archetype.
4. Re-run inspect-slide on the same representative slide.
5. Confirm no overflow, no missing progress dots, no structural regressions, and acceptable visual parity.
6. Spot-check at least one more slide in the same archetype before migrating the whole batch.
7. After each batch, check editor diagnostics on `slides/tech-talks/agentic-sdlc.md`.
8. After cross-deck pilot phases, run the same inspect-slide loop on the second deck’s representative slides.
9. Stop the phase immediately if inspect-slide fails on representative slides and the failure is not quickly attributable to a small fix.

## Hard Stop Rules

1. If a proposed shared class only works by adding deck-specific exceptions, do not promote it.
2. If a phase introduces 3 or more regressions across representative slides, stop and revert to the last checkpoint.
3. If cross-deck pilot slides need major rewrites to consume a shared class, the class is not ready for shared status.
4. If the shared system makes code or example slides less legible, keep those structures inline.
5. If documentation would describe unstable class names, defer docs until the names are locked.

## Phase Exit Criteria

### A phase is complete only if:

1. The representative slides for that phase pass inspect-slide.
2. The migrated markup is materially simpler than before.
3. No new deck-specific shared classes were introduced casually.
4. The class names used in the phase still feel valid for other tech-talk decks.
5. Any exceptions that remain inline are explicitly justified.
6. A checkpoint exists before moving to the next phase.

## Checkpoint Strategy

1. Create a checkpoint before any markup migration begins.
2. Create a new checkpoint at the end of every successful phase.
3. Do not proceed to the next phase if representative slides are failing inspect-slide at the current checkpoint.

## Relevant Files

- `/workspaces/CopilotTraining/slides/tech-talks/agentic-sdlc.md`
- `/workspaces/CopilotTraining/slides/style.css`
- `/workspaces/CopilotTraining/slides/TEMPLATE.md`
- `/workspaces/CopilotTraining/slides/copilot-brand.md`
- `/workspaces/CopilotTraining/slides/tech-talks/global-bottom.vue`
- `/workspaces/CopilotTraining/slides/scripts/inspect-slide.js`
- `/workspaces/CopilotTraining/.github/skills/inspect-slide/SKILL.md`

## Scope Boundaries

### Included

- Shared structural class extraction from Agentic SDLC into `style.css`
- Building a reusable tech-talk class system
- Cross-deck pilot validation
- Documentation and rollout planning for other tech-talk decks

### Explicitly deferred

- Repo-wide migration of all tech-talk decks in one pass
- Full light-mode beautification across all decks
- Full color-token system for every deck in the first implementation pass
- Forcing complex code/example slides into shared classes before they are proven reusable

## Known Deviations to Expect Across Decks

Other tech-talk decks will broadly share layout, content rhythm, and section sequencing, but the largest deviations are likely to appear in:

- code snippet slides
- CLI/demo output slides
- screenshot/product UI slides
- heavy comparison tables
- one-off example narratives

The shared system should embrace that reality. Common structure belongs in `style.css`. Exceptional content can remain partially inline until repeated use proves it deserves extraction.

## Shared Class Registry

As part of Phase 8, maintain a shared class registry that captures:

1. class name
2. purpose
3. tier (`Tier 1`, `Tier 2`, or still deck-local)
4. which decks currently use it
5. any known limitations

This can live in existing docs or a dedicated registry file, but the plan should treat it as required governance for a cross-deck shared system.

## Light-Mode Note

Light-mode beautification is not part of this first extraction pass. However, shared classes should avoid painting the system further into a dark-only corner. Structural classes should remain compatible with future tokenization or CSS custom-property work.

## Final Recommendation

Use Agentic SDLC to build the first real shared tech-talk style system, but do not declare a class “shared” until it has survived both:

1. a clean pilot inside Agentic SDLC, and
2. at least one cross-deck reuse check.

That is the line between a successful refactor and a reusable presentation system.
