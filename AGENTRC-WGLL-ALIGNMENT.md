# AgentRC Assessment Checks (WGLL-aligned)
> What agentRC should check at each level — updated 2026-04-27

| Symbol | Meaning | Notes |
|---|---|---|
| ✅ | File check | Detectable from repo files alone — no token or API access needed |
| 🔌 | GitHub API | Requires a GitHub token with `repo` or `read:org` scope |
| 📊 | Copilot Metrics API | Requires org-level Copilot Metrics API access |
| ⚠️ | Blocker | A check that must pass before advancing to the next level |
| — | Not assessed | API scope not available — check skipped, not penalized |

---

## L1 — Aware
> Infrastructure exists. Copilot access granted. Nothing AI-specific yet required.

| Check | Signal |
|---|---|
| Build/CI configuration present | `/.github/workflows/*.yml` exists |
| README exists | `README.md` present |
| Basic repo hygiene (license, gitignore) | standard files present |

---

## L2 — Experimenting
> Instructions exist. Individuals are starting to use Copilot.

| Check | Signal | Type |
|---|---|---|
| Copilot instructions present | `.github/copilot-instructions.md` exists | ✅ |
| Issue templates exist | `.github/ISSUE_TEMPLATE/` with at least one template | ✅ |
| Dev environment documented | `.devcontainer/` or setup guide in README | ✅ |
| Copilot active users > 0 | Metrics API: any seat active | 📊 |

---

## L3 — Adopting
> Daily habits formed. Agentic work beginning. Team-level standards in place.

| Check | Signal | Type |
|---|---|---|
| Instructions have quality content | word count ≥ 200, repo-specific paths/commands, framework references | ✅ |
| Prompt files present | ≥ 3 files in `.github/prompts/` | ✅ |
| Agent instructions present | `AGENTS.md` exists | ✅ |
| CCA setup present | `.github/workflows/copilot-setup-steps.yml` exists | ✅ |
| Code owners defined | `CODEOWNERS` present | ✅ |
| Security scanning configured | CodeQL, secret scanning, or Dependabot in workflows | ✅ |
| At least one agentic workflow | `.github/workflows/*.md` with `on:` frontmatter + matching `.lock.yml` | ✅ |
| Issue triage automated | gh-aw workflow with `on: issues:` trigger | ✅ |
| Copilot MAU ≥ 30% of seats | Metrics API | 📊 |
| Completion acceptance rate ≥ 25% | Metrics API | 📊 |

---

## L4 — Optimizing
> Delegation in place. Quality is infrastructure. Agents handle routine judgment calls.

| Check | Signal | Type |
|---|---|---|
| MCP configured | `.vscode/mcp.json` or devcontainer MCP block with ≥ 2 servers | ✅ |
| Custom agents defined | `.github/agents/*.agent.md` exists | ✅ |
| Skills defined | `.github/skills/` exists | ✅ |
| Agentic PR automation | gh-aw workflow with `safe-outputs: create-pull-request: draft: true` | ✅ |
| Orchestrator pattern | gh-aw workflow with `safe-outputs: dispatch-workflow:` | ✅ |
| CI failure diagnosis | gh-aw workflow on `workflow_run: conclusion: failure` | ✅ |
| Automated code review | gh-aw workflow with `create-pull-request-review-comment` safe-output | ✅ |
| GitHub Projects automation | gh-aw workflow with `create-project` or `create-project-status-update` | ✅ |
| Decompose/planner prompt | `.github/prompts/decompose.prompt.md` or similar | ✅ |
| Code review automated | CCR configured as automatic reviewer | 🔌 |
| Branch protection enforced | Branch ruleset requiring CI pass | 🔌 |
| Coding guidelines configured | ≥ 5 custom guidelines in CCR | 🔌 |
| Copilot org settings deliberate | Org-level features explicitly configured (not defaults) | 🔌 |
| Seat utilization ≥ 80% | Metrics API | 📊 |
| CCA PR merge rate ≥ 60% | Metrics API | 📊 |

---

## L5 — Transforming
> Intake pipeline is agentic. Measurement drives continuous improvement.

| Check | Signal | Type |
|---|---|---|
| Agentic intake chain | gh-aw with `issues.opened` trigger + decompose pattern + `create-issue: group: true` | ✅ |
| Meta-workflows present | gh-aw with `on: workflow_run:` monitoring other gh-aw workflows | ✅ |
| Intake MCP sources | MCP servers for monitoring/ticketing/Slack wired to issue creation | ✅ |
| Copilot Spaces configured | High-value knowledge in Spaces | 🔌 |
| Repo templates pre-seed AI config | Org templates include instructions, AGENTS.md, prompts | 🔌 |
| Copilot MAU ≥ 60% of seats | Metrics API | �� |
| DORA correlation tracked | PR cycle time, deploy frequency correlated to Copilot usage | 📊 |
| % issues machine-triaged | Intake automation measurably reducing human triage burden | 📊 |
| ROI narrative documented | Quantified value story exists and is maintained | 📊 |

---

## Sample output

```
agentrc readiness

  Level: L3 (Adopting)

  ✅ L2 checks: all passed
  ✅ L3 checks: all passed
  ⚠️  L4 blockers (3):
       · MCP config not found (.vscode/mcp.json or devcontainer)
       · No gh-aw PR automation workflow detected
       · CCR not configured as automatic reviewer [requires: repo scope]

  Run `agentrc adoption` to see usage metrics alongside configuration gaps.
```

---

<details>
<summary>📎 Detailed analysis — framework notes, signal rationale, implementation timeline</summary>

## Framework Notes

AgentRC is a **ladder** — one L1–L5 number out. WGLL's 5 rings (Developer Workstation, Agentic
Development, Code Quality, Enterprise Platform, Measurement) are a **signal taxonomy** that
organizes which checks belong at which level. Rings don't produce independent scores.

Level names align to WGLL: Aware / Experimenting / Adopting / Optimizing / Transforming.

Checks that require API access (🔌 📊) are skipped gracefully when scope is unavailable — they
are listed as `Not Assessed`, never penalized.

## gh-aw (GitHub Agentic Workflows)

A distinct technology: `.github/workflows/*.md` files compiled to `.lock.yml` via `gh aw compile`.
Not CCA. Not MCP. Not AGENTS.md. AI agents embedded inside GitHub Actions for judgment-based
repository automation (issue triage, CI diagnosis, code simplification, orchestrator patterns,
meta-workflows). All gh-aw checks are ✅ file-level — no API required.

Safe-output complexity is a maturity proxy:
- Labels/comments only → L3
- Issue creation with grouping → L4
- Draft PR creation → L4
- Orchestrator dispatch (`dispatch-workflow`) → L4
- Meta-workflows monitoring other workflows → L5

## Agentic Intake (the L5 gate)

L5 requires that work ENTERS the system agentically — not just that CCA executes it.
The intake chain: external signal → accept agent → triage → research → plan/decompose → CCA-ready issue.
gh-aw implements this chain. A repo with `issues.opened` triage + orchestrator decompose + GitHub
Projects automation has the intake foundation for true L5.

## Implementation Timeline

```
Week 1-2:   Rename levels to WGLL · split AI Tooling → instructions + agentic infrastructure
            · add instruction quality heuristics (word count, paths, framework refs)
Week 3-4:   Add gh-aw detection (all ✅ checks above) · add L5 intake gate signals
Week 5-6:   Add GitHub API checks (CCR, branch rulesets, coding guidelines)
            · add `agentrc adoption` command (Metrics API)
Week 7-8:   Drift detection · APM/managed package awareness
Q2:         `agentrc assess` unified command · Ring 4 enterprise · eval history/trends
Later:      Batch org segmentation · Ghost Agent simulation · GitHub App surface
```

</details>
