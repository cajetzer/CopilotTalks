# customization_context / facts

Confirmed facts about Copilot customization topics: primitives, hooks, memory, SDK, MCP apps, and plugins.

---

## copilot-plugins framing: CLI-first, personal vs team infrastructure distinction (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

The copilot-plugins tech-talk uses a **CLI-first framing** throughout — every section leads with CLI commands before mentioning VS Code UI equivalents. This is an intentional structural decision.

**Key framing distinction:** `copilot plugin` commands vs `apm` orchestration. The talk explicitly separates:

- **`copilot plugin install/list/update/uninstall`** — personal toolbox, ad-hoc exploration, single plugins
- **`apm install` + `apm.yml` manifest** — team infrastructure, reproducible configuration, orchestrated stack

**The "aha moment"** the talk builds toward: understanding WHEN to use each path. Not "one is better than the other" — they serve different coordination needs.

**Why this matters for future agents:** An agent reading only the deck might treat these as interchangeable commands or focus on VS Code UI. The CLI-first structure and the personal/team distinction are deliberate pedagogical choices that need to be preserved in any slide generation or content updates.

**Mental model encoded in the demo:** The walkthrough (`demos/copilot-plugins-walkthrough.md`) uses Exercise 2 (`copilot plugin install`) for personal exploration, then Exercise 3 (`apm install`) for team setup. Exercise 6 reinforces the "which command when" table. This progression is the teaching spine.

**Cross-references:**
- Demo file: `demos/copilot-plugins-walkthrough.md`
- README: `tech-talks/copilot-plugins/README.md`
- Deck recipe: `tech-talks/copilot-plugins/deck.recipe.yml`
