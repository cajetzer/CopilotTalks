# Content Freshness Strategy
> Working notes — started 2026-04-27

---

## The Two Problems

### Problem 1: Mapping
Create a durable, queryable artifact that says:
> "Official doc section X is the authoritative source for training content Y."

### Problem 2: Freshness
When the authoritative source changes, get a signal early enough to act — and route that signal to the right content owner.

---

## Source-of-Truth URLs

### VS Code / Copilot in VS Code
| Doc Section | URL | Covers |
|---|---|---|
| Overview | https://code.visualstudio.com/docs/copilot/overview | High-level feature map |
| Getting Started | https://code.visualstudio.com/docs/copilot/getting-started | Onboarding flow |
| Inline Suggestions | https://code.visualstudio.com/docs/copilot/ai-powered-suggestions | Completions, NES |
| Inline Chat | https://code.visualstudio.com/docs/copilot/chat/inline-chat | In-editor chat |
| Agents Overview | https://code.visualstudio.com/docs/copilot/agents/overview | Agent types, delegation |
| Planning Agent | https://code.visualstudio.com/docs/copilot/agents/planning | Plan mode |
| Cloud Agents | https://code.visualstudio.com/docs/copilot/agents/cloud-agents | Copilot coding agent |
| Chat Sessions | https://code.visualstudio.com/docs/copilot/chat/chat-sessions | Session management |
| Customization Overview | https://code.visualstudio.com/docs/copilot/customization/overview | All customization levers |
| Custom Instructions | https://code.visualstudio.com/docs/copilot/customization/custom-instructions | .github/copilot-instructions.md |
| Agent Skills | https://code.visualstudio.com/docs/copilot/customization/agent-skills | .github/skills/ |
| Custom Agents | https://code.visualstudio.com/docs/copilot/customization/custom-agents | .github/agents/ |
| MCP Servers | https://code.visualstudio.com/docs/copilot/customization/mcp-servers | MCP integration |
| Hooks | https://code.visualstudio.com/docs/copilot/customization/hooks | Event-based automation |
| Smart Actions | https://code.visualstudio.com/docs/copilot/copilot-smart-actions | Commit messages, rename, fix |
| VS Code Release Notes (current) | https://code.visualstudio.com/updates | Weekly release cadence |

### GitHub Copilot Platform (cross-modality)
> **TODO: Add URLs below** — these cover web, CLI, code review, and platform-level capabilities
> Source: docs.github.com/en/copilot

| Doc Section | URL | Covers | Modality |
|---|---|---|---|
| Copilot overview | https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot | TBD | all |
| _add more rows_ | | | |

---

## The Modality Split

This is the thorniest dimension. The VSCode docs are 100% VS Code-centric, but training
content spans multiple modalities.

### Modality taxonomy
| Modality tag | Description |
|---|---|
| `vscode` | Only available in VS Code |
| `all` | Available across VS Code, github.com, CLI, JetBrains, etc. |
| `github-web` | Available on github.com (code review, issues, PRs) |
| `cli` | Available via GitHub Copilot CLI |

### Content × Modality matrix

| Content | Primary modality | Source-of-truth feed |
|---|---|---|
| Workshop modules (01–06) | `vscode` | VS Code release notes + VSCode docs |
| tech-talk: vscode-latest | `vscode` | VS Code release notes |
| tech-talk: copilot-chat-internals | `vscode` | VSCode docs |
| tech-talk: copilot-memory | `vscode` | VSCode docs |
| tech-talk: copilot-web | `github-web` | GitHub Copilot platform docs |
| tech-talk: copilot-code-review | `github-web` | GitHub Copilot platform docs |
| tech-talk: copilot-cli | `cli` | GitHub Copilot platform docs |
| tech-talk: copilot-primitives | `all` | Both feeds |
| tech-talk: enterprise-patterns | `all` | Both feeds |
| tech-talk: mcp-apps | `vscode` | VSCode docs |

---

## Mapping Approach: Distributed Frontmatter

Add `doc_refs:` to each workshop module README and tech-talk README.

### Schema
```yaml
doc_refs:
  - url: https://code.visualstudio.com/docs/copilot/customization/custom-instructions
    covers: "the .github/copilot-instructions.md behavior and frontmatter"
    modality: vscode
    last_verified: YYYY-MM-DD
```

### Distinction from existing `references:`
- `references:` = general citations (already in use, e.g. vscode-latest)
- `doc_refs:` = authoritative source relationship ("if this page changes, review this content")

---

## Freshness Signal Options

### Option 1: VS Code release notes (recommended for vscode content)
- Published every 1–2 weeks at https://code.visualstudio.com/updates
- Explicitly calls out Copilot changes in each release
- Low noise, high signal — already tracked in `vscode-latest` tech talk
- **Action:** When updating `vscode-latest`, cross-reference the `doc_refs` map to flag which workshop modules may need attention

### Option 2: Watch microsoft/vscode-docs on GitHub
- Source for the VSCode docs pages
- Filter notifications to `docs/copilot/` path
- Noisy (editorial changes mixed with material changes)
- Better as a supplementary signal than primary

### Option 3: Watch github/docs on GitHub (for platform docs)
- Source for docs.github.com/en/copilot
- Same tradeoff — noisy, but complete

### Option 4: GH Actions scheduled checker
- Weekly cron in this repo
- Fetch key doc pages, hash content, compare to stored baseline
- Open a GitHub issue when content drifts
- **Can't distinguish** material vs. editorial changes — needs human review
- Good for catching *new doc sections* (structural changes)

### Option 5: AI-assisted diff review
- When a change is detected (by option 2/3/4), pass the before/after diff to Copilot
- Ask: "Does this change affect training content? Which modules?"
- Turns raw diffs into actionable training review tickets

---

## Recommended Approach (phased)

### Phase 1: Establish the map
1. Add `doc_refs:` frontmatter to 7 workshop module READMEs
2. Add `doc_refs:` to the top ~5 most-visited tech talks
3. Add `modality:` field to existing content frontmatter
4. Populate the GitHub Copilot platform docs table above (needs URLs from user)

### Phase 2: Operationalize the signal
1. Adopt the VS Code release notes cadence as the primary trigger
2. When `vscode-latest` is updated, use the `doc_refs` map to produce a "review checklist" for workshop modules
3. Optionally: GH Actions checker for structural/nav changes to the docs site

### Phase 3: Automate the triage
1. When doc changes detected, use Copilot to summarize training implications
2. Auto-open issues in this repo with the affected content files tagged

---

## Open Questions
- [ ] What are the canonical GitHub Copilot platform doc sections that map to cross-modality content? (User to supply URLs)
- [ ] Should `doc_refs` live in module frontmatter, or in a central CONTENT-MAP.yml?
- [ ] Is the target audience for all content assumed to be VS Code users? Or do the workshop modules need to explicitly address other IDEs?
- [ ] Who owns the freshness review process — a single person, or distributed per module?
- [ ] Should `vscode-latest` be the "trigger" talk that causes other content reviews, or should that be automated separately?
