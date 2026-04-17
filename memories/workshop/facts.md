# workshop / facts

Locked, confirmed decisions for workshop modules.

---

## fanhub-plugin demo: APM package lives in demos/fanhub-plugin/ (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

A complete, installable APM plugin package exists at `demos/fanhub-plugin/`. It contains the exact files participants build across modules 01–06 — sourced directly from the workshop module folders, not from `examples/completed-config/` (which is the Node.js version, not the Breaking Bad/.NET stack).

**Install command (from inside fanhub-unplugged clone):**
```bash
apm install /path/to/demos/fanhub-plugin
```

**What it installs:**
- `.github/copilot-instructions.md` (module 01)
- `docs/architecture.md` + `docs/breaking-bad-universe.md` (module 01 — read by Copilot as codebase context)
- 6 prompts (module 03)
- 3 skills including `new-card-skill` with scripts + templates (module 04)
- `mcp-servers/fanhub-api-server.js` + `.vscode/mcp.json` (module 05)
- 2 agents: `scaffold-entity.agent.md` + `plan.agent.md` (module 06)

**Intended use:** Module 00 closing reveal. Show the bare-clone frustration → `apm install` → ask Copilot the same question → pivot to "now let’s build this ourselves."

**MCP caveat:** `apm install` copies the server file and wires `.vscode/mcp.json`, but the backend must be running separately before the MCP server is useful. Don't demo live MCP calls in the module 00 reveal.

**Do NOT use `examples/completed-config/`** for this demo — it's the Node.js/Express/React stack, not the ASP.NET Core / Blazor / Breaking Bad stack used in the workshop modules.

---

## Canonical skill name: check-data-accuracy

**Date:** 2026-04-13

The prompt file is `check-data-accuracy.prompt.md` and the skill it promotes to is also named `check-data-accuracy` (folder `.github/skills/check-data-accuracy/`). The name was previously `data-accuracy-check` for the skill and `check-data-accuracy` for the prompt — corrected so both match. Consistent across M3/4, M5, M6.

---

## M2 exercise numbering

**Date:** 2026-04-13

Module 2 exercises are numbered **2.1, 2.2, 2.3** (not 2.2, 2.3, 2.4 as previously mislabelled):
- **2.1** — Plan the Lore Card & Page
- **2.2** — Plan the Lore Entry Form
- **2.3** — Execute the Plan

---

## VS Code built-ins replace prompt-to-skill

**Date:** 2026-04-13

The custom `prompt-to-skill` prompt has been removed from M3/4. Workshop now uses VS Code built-in commands (available v1.110+):
- `/create-prompt` — scaffold a new `.prompt.md` file
- `/create-skill` — promote a prompt or workflow to a skill

These are used in exercise steps throughout `03-04-combined.md`. The `<script setup>` block that rendered the old custom prompt is gone.
