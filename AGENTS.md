# CopilotTraining Agent Instructions

> **Quick reference:** `AGENTS.aaak` — condensed orientation for agents (sections, slide rules, personas, gotchas). Load it at session start for fast context without reading all the full docs.

---

## Repository Structure

Three content types, each with dedicated agents:

- **`workshop/`** — Hands-on training modules with personas, exercises, and metrics → use `module-planner` or `module-creator` agents
- **`tech-talks/`** — Technical deep-dives for practitioners → use `Tech Talk Generator` agent
- **`exec-talks/`** — Executive thought leadership for strategic decision-making → use `Exec Talk Generator` agent

---

## Content Rules (apply everywhere)

**Archived content is frozen.** Any file with `status: archived` in frontmatter must never be modified by any agent. Stop and inform the user.

**All content files require frontmatter:**

```yaml
status: active # or "archived"
updated: YYYY-MM-DD
```

Tech talks and exec talks also require `section:` matching a valid value from `slides/SECTIONS.md`.

---

## Tone and Voice

Respectful · Practical · Honest · Outcome-based. Full voice rules, persona quick reference, and before-submit checklist: `AGENTS.aaak`.

---

## Workbench — Project Memory

Institutional knowledge lives in `memories/` as Markdown files organized by **bench** (domain folder) and **drawer** (typed file). **Cardinal rule: the Workbench suggests; repo files confirm.**

Agents query the relevant drawer after pre-flight gates complete, before content generation. Writes happen at session END only, after one-shot user approval. Full usage patterns: `@workbench` skill.

**When anything doesn't go as expected — a command fails, a convention is unclear, behavior is surprising, or you're about to iterate through guesses — query the Workbench before proceeding.** It contains verified solutions, known gotchas, and prior decisions. Use `@workbench` as your first response to uncertainty, not a last resort.

---

## Agent Invocation Guidelines

Keep subagent prompts minimal — agents already have this file and their own `.agent.md` instructions. Full guidance: `AGENTS.aaak`.

---

## Slide Generation

Two agents — pick by category:

| Category | Agent |
|---|---|
| `tech-talks/` | **Tech Talk Slide Generator** — Vue components, no raw HTML |
| `workshop/` or `exec-talks/` | **Slide Generator** — cockpit HTML templates |

Key invariants (all categories):

- `---` separator always on its own line — never `---<!-- SLIDE:` on same line
- No per-slide frontmatter (`layout:`, `class:`, `transition:`) — use CSS
- Every slide including slide 1 needs `<!-- SLIDE: Name -->` comment
- Run `node slides/scripts/sync-index-dates.mjs` after any slide change
