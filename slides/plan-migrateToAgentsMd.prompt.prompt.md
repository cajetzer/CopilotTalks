# Plan: Migrate `copilot-instructions.md` → `AGENTS.md`

Move the repo's always-on instructions from `.github/copilot-instructions.md` to `AGENTS.md` at the repo root — the format VS Code 1.116's `/init` now prefers. 6 files change, in 3 sequential phases.

---

## Phase 1 — Create the new file

1. Create `AGENTS.md` at repo root by copying `.github/copilot-instructions.md` verbatim, then make two internal edits within the new file:
   - Title line: `# Copilot Instructions for CopilotTraining Content Development` → `# CopilotTraining Agent Instructions`
   - The quick-reference callout on line 3: path `.github/copilot-instructions.aaak` → `AGENTS.aaak` (repo root, no `.github/` prefix)

## Phase 2 — Repoint all references *(all edits are independent, can be done together)*

2. `.github/copilot-instructions.aaak` line 2: `Full docs: \`copilot-instructions.md\`` → `Full docs: \`AGENTS.md\``
3. `.github/copilot-instructions.aaak` line 224: `Full instructions: .github/copilot-instructions.md` → `Full instructions: AGENTS.md` (root)
4. All files referencing `.github/copilot-instructions.aaak` by path: update to `AGENTS.aaak` (repo root, no `.github/` prefix) — includes `AGENTS.md` (the quick-reference callout, step 1), `.github/agents/module-creator.agent.md`, `.github/agents/module-planner.agent.md`, and any other agent `.md` files that link the quick-reference path
5. `.github/agents/module-creator.agent.md`: `.github/copilot-instructions.md` → `AGENTS.md`
6. `.github/agents/module-planner.agent.md`: `.github/copilot-instructions.md` → `AGENTS.md`
7. `README.md`: link `[.github/copilot-instructions.md](.github/copilot-instructions.md)` → `[AGENTS.md](AGENTS.md)`
8. `OUTLINE.md`: both occurrences of `.github/copilot-instructions.md` → `AGENTS.md`

## Phase 2b — Move the quick-reference file *(after Phase 2 path edits are applied)*

Move `.github/copilot-instructions.aaak` → `AGENTS.aaak` at repo root. The `.aaak` extension is kept intentionally (prevents VS Code auto-load); the base name changes to mirror `AGENTS.md` and the file moves out of `.github/` alongside it.

## Phase 3 — Delete the old file *(after Phase 2 / 2b are verified)*

9. Delete `.github/copilot-instructions.md` entirely — VS Code will no longer find it to auto-load.

---

## Relevant files

| File | Change |
|------|--------|
| `AGENTS.md` | New file at repo root (created in step 1) |
| `.github/copilot-instructions.md` | Source content → deleted in step 9 |
| `.github/copilot-instructions.aaak` | 2 path references updated, then moved to `AGENTS.aaak` (repo root) |
| `AGENTS.aaak` | New file at repo root (moved from `.github/copilot-instructions.aaak`) |
| `.github/agents/module-creator.agent.md` | 1 path reference |
| `.github/agents/module-planner.agent.md` | 1 path reference |
| `README.md` | 1 link |
| `OUTLINE.md` | 2 occurrences |

## Verification

1. Open a new chat session — VS Code should load `AGENTS.md` as always-on context (confirm via Chat Customizations welcome page or Agent Debug Logs)
2. Grep for `.github/copilot-instructions.md` across the repo — zero matches expected (file is deleted)
3. Grep for `copilot-instructions.aaak` across the repo — zero matches expected (all references updated to `AGENTS.aaak`)
4. Confirm `AGENTS.aaak` at repo root still loads correctly by checking agent responses reference the right quick-reference path

## Decisions / Scope

- `.github/copilot-instructions.aaak` is moved to `AGENTS.aaak` at repo root — the `.aaak` extension is kept (prevents auto-load); the base name changes to mirror `AGENTS.md` and both files now live at repo root together. The move happens in Phase 2b, after all path references have been updated.
- `.github/copilot-instructions.md` is deleted outright (not stubbed) — no need to keep a redirect once `AGENTS.md` is in place.
- `memory-plan.md` "replace with 2KB bootstrap" idea is explicitly out of scope — that's a content refactor, separate effort
- `session-log.md`, `persona-update-plan.md` have stale path references but are planning artifacts, not agent-loaded — leaving them as-is
