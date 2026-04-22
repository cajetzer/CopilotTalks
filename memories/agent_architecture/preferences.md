# agent_architecture / preferences

Author framing, voice, and ordering decisions for agent-teams and ACP decks. An agent reading only the slide files would miss these choices.

---

## copilot-acp: N×M framing is the throughline, not "lock-in" (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

The deck uses "N×M" as the problem label throughout — not just "editor lock-in" or "fragmentation." The math is made explicit in every section: "5 editors × 10 agents = 50 integrations" in Part 1, "N+M" in Part 2's LSP analogy slide, echoed in the terminal transcript and BeforeAfter closing. This makes the payoff ("ACP collapses N×M to N+M") land with more force because the audience has internalized the formula.

**Do not soften to vague "fragmentation" language** — the specificity of the math is intentional and audience-tested.

**Source:** `tech-talks/copilot-acp/deck.recipe.yml` (arcNarrative), `slides/tech-talks/copilot-acp.md` (all four sections)

---

## copilot-acp: LSP analogy belongs in Part 2, not Part 1 (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

The deck.recipe.yml had an open decision: should Part 1 be named "The LSP Analogy"? Answer: **No.** Part 1 is "N×M Problem" — it plants the seed by showing the N×M matrix and mentioning LSP solved a similar problem. Part 2 "Protocol Architecture" is where the LSP analogy pays off with the full before/after comparison table and math.

Premature resolution in Part 1 collapses the tension before the audience has enough context to appreciate the solution. The structural centerpiece (LSP analogy) belongs in the middle act, not the opening.

**Source:** `tech-talks/copilot-acp/deck.recipe.yml` OPEN DECISION comment at end of file

---

## copilot-acp: Permissions section framed as "adoption enablers" not "restrictions" (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

Part 4 (Permissions & Security) explicitly answers "can I ship this?" for platform engineers — every constraint is presented as unlocking enterprise adoption, not limiting agent capability. The section opener subtitle uses: "Every constraint is an adoption enabler." This framing was chosen because the target audience (platform engineers evaluating ACP for org rollout) will dismiss a security section that feels like a wall of caveats.

The WorkflowShowdown slide shows "without ACP" (blind trust / no control) vs "with ACP" (granular control without blocking capability) — reinforcing that the permission model *adds* capability by making adoption safe.

**Do not reframe as "limitations" or "guardrails"** — the deck's entire security section depends on the adoption-enabler frame.

**Source:** `tech-talks/copilot-acp/deck.recipe.yml` sectionModes["Permissions & Security"].note
