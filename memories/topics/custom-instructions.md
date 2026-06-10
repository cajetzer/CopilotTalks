# topics / custom-instructions

**Topic:** Custom Instructions

---

## Canonical description

Custom instructions let developers and teams steer Copilot's behavior without modifying individual prompts. Three primary mechanisms: (1) `.github/copilot-instructions.md` — repo-level instructions injected into every request automatically; (2) VS Code prompt files (`.prompt.md` in `.github/prompts/`) — reusable snippets attached manually or via `#file`; (3) VS Code workspace/user settings (`github.copilot.chat.codeGeneration.instructions`) — JSON-based instruction injection. Instructions compose — repo-level + user settings + prompt files can all be active simultaneously. The `copilot-primitives` talk frames instructions as one of four fundamental primitives alongside skills, agents, and extensions.

---

## Coverage map

| Artifact | Depth | Notes |
|---|---|---|
| `tech-talks/whats-new-important` | Secondary | Hackathon primer: instructions template as the highest-ROI setup artifact; explains repo-level + agent-guidance sections in the hackathon context |
| `slides/tech-talks/copilot-primitives.md` | Primary | Instructions as a primitive — all three mechanisms, composition model |
| `slides/tech-talks/copilot-hooks.md` | Major section | Hooks fire before/after instruction processing; used to validate and augment instructions |
| `slides/tech-talks/copilot-chat-internals.md` | Secondary | Context window breakdown shows where instructions land; diagnostics for troubleshooting |
| `slides/tech-talks/enterprise-patterns.md` | Secondary | Org-level instruction governance — who owns `.github/copilot-instructions.md`, versioning |
| `slides/tech-talks/copilot-memory.md` | Mention | Memory as a dynamic instruction source — memory contents injected as instruction context |
| `workshop/01-instructions/` | Primary | Hands-on workshop: writing effective instructions, prompt files, testing |

---

## Framing notes

- **`copilot-primitives`** is the canonical reference for the three mechanisms and how they compose — always resolve ambiguity here first
- **`copilot-chat-internals`** shows *where* instructions land in the context window — useful for explaining why instruction content matters and how to debug instruction conflicts
- **`copilot-hooks`** treats instructions as something hooks can intercept and modify — it assumes instruction familiarity and focuses on programmatic control
- **`enterprise-patterns`** treats instructions as governance artifacts — ownership, review process, org-wide standardization
- The distinction between *repo-level* (`.github/copilot-instructions.md`) and *user-level* (VS Code settings) instruction sources matters for enterprise deployment; `enterprise-patterns` and `copilot-primitives` are the primary places this is taught
- Prompt files (`.prompt.md`) are a newer addition and may not be consistently covered across all talks — check for staleness

## Drift risks

- The VS Code settings key (`github.copilot.chat.codeGeneration.instructions`) has changed between releases; `vscode-latest` may contain updated names
- The file location for prompt files has shifted (`.github/prompts/` vs other locations) — verify against current docs when updating any talk that covers them
- `copilot-chat-internals` depends on context window internals that change with model and Copilot version updates
