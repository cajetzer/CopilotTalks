# workshop / facts

Locked, confirmed decisions for workshop modules.

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
