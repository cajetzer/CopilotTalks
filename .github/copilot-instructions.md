# Copilot Instructions for CopilotTraining Content Development

## Repository Structure

Three content types, each with dedicated agents:

- **`workshop/`** — Hands-on training modules with personas, exercises, and metrics → use `module-planner` or `module-creator` agents
- **`tech-talks/`** — Technical deep-dives for practitioners → use `Tech Talk Generator` agent
- **`exec-talks/`** — Executive thought leadership for strategic decision-making

---

## Tone and Voice

- **Respectful** — Treat all experience levels with dignity
- **Practical** — Focus on what works, not theory for theory's sake
- **Honest** — Acknowledge limitations and tradeoffs
- **Outcome-based** — "validates/demonstrates/implements" not "learns/discovers/gains confidence"

---

## Content Rules (apply everywhere)

**Archived content is frozen.** Any file with `status: archived` in frontmatter must never be modified by any agent. Stop and inform the user.

**All content files require frontmatter:**

```yaml
status: active # or "archived"
updated: YYYY-MM-DD
```

Tech talks and exec talks also require `section:` matching a valid value from `slides/SECTIONS.md`.

**Quick Voice Checklist:**

- [ ] Outcomes not learning — built/validated, not discovered
- [ ] Metrics included — at least 2-3 quantified Before/After improvements
- [ ] Persona-authentic — Sarah=ROI, David=expertise, Marcus=workflow, Elena=quality, Rafael=business value

---

## MemPalace — Project Memory

Institutional knowledge lives in `memories/repo/` as Markdown files organized by wing and hall. **Cardinal rule: MemPalace suggests; repo files confirm.**

Agents query the relevant hall after pre-flight gates complete, before content generation. Writes happen at session END only, after one-shot user approval. Full usage patterns: `@mempalace` skill.

---

## Agent Invocation Guidelines

When calling subagents (via `runSubagent`), keep prompts minimal:

- **Trust agent configuration** — Agents already have access to this file and their own `.agent.md` instructions
- **Be concise** — Just specify the target (e.g., "Generate slides for workshop/03-custom-prompts")
- **Don't repeat rules** — Never re-state guidelines already in agent definitions

---

## Slide Generation

Use the `slide-generator` agent. Full rules are in `.github/agents/slide-generator.agent.md` and `slides/TEMPLATE.md`. Key invariants that apply everywhere:

- `---` separator always on its own line — never `---<!-- SLIDE:` on same line
- No per-slide frontmatter (`layout:`, `class:`, `transition:`) — use CSS
- Every slide including slide 1 needs `<!-- SLIDE: Name -->` comment
- Run `node slides/scripts/sync-index-dates.mjs` after any slide change
