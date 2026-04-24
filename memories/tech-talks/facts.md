# tech-talks / facts

Confirmed facts specific to the tech-talk content pipeline, workflow, and catalog.

---

## component-test.md is a visual testing harness — not a tech-talk (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/component-test.md` exists solely as a **visual testing harness** for the 13 Tier-1 body components. It is **not a tech-talk**. Never include it when listing tech-talks, counting tech-talks, generating content for tech-talks, or running conformance sweeps. Exclude it from any "all tech-talks" enumeration.

---

## Tech-talk pipeline: 3-stage sequence with deck-recipe-review skill (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

The tech-talk authoring pipeline is a strict 3-stage sequence:

1. **Tech Talk Generator** — writes `README.md`. Final step invokes the deck-recipe-review skill. Does NOT create `deck.recipe.yml` itself.
2. **Deck Recipe Review skill** — owns recipe creation entirely. Runs a 3-agent Agent Council. Produces a **complete, fresh** `deck.recipe.yml` with ALL fields. Always overwrites — never patches.
3. **Tech Talk Slide Generator** — reads `deck.recipe.yml` as the sole Phase A input. If recipe is missing, **hard stops**: "Run the deck-recipe-review skill first."

**Key change from prior workflow:** File-clear gate promoted to pre-flight in slide generator: `Set-Content ... "<!-- generating -->"` runs BEFORE Phase A, not inside it.

---

## research.md prevents hallucination recurrence in tech-talks (2026-04-10)

`schema_version: 1` | `date: 2026-04-10`

When regenerating a tech-talk README, always check for `tech-talks/<slug>/research.md`. If it exists, instruct Tech Talk Generator to use it as primary source. research.md contains facts verified from official URLs.

The `copilot-code-review` README had pervasive hallucinations (fictional `copilot-review.yml` config schema, non-existent cross-references). Fixed by complete regeneration from `research.md`. Any deck with a `research.md` file has gone through hallucination-antidote treatment.
