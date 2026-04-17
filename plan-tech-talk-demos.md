# Tech-Talk Demo Repository Evaluation

**Date:** April 17, 2026
**Scope:** 17 active tech-talk markdown files
**Evaluation Criteria:** Learning Impact, Hands-On Value, Practitioner Need, Complexity, Reuse Potential

---

## Executive Summary

| Category | Count | Talks |
|----------|-------|-------|
| 🟢 **STRONG YES** | 7 | ACP, Azure MCP, CLI, Code Review, Coding Agent, Agentic SDLC, Agent Teams |
| 🟡 **MAYBE** | 6 | Agentic Workflows, Agentic Journey, Hooks, Memory, SDK, Primitives |
| 🔴 **NOT NOW** | 4 | Chat Internals, Vscode-latest, Enterprise Patterns, MCP Apps |

**Key Insight:** Demo value correlates with **hands-on setup + clear iteration loops**. Talks that require developers to "try this workflow" score high. Talks that are purely conceptual or require heavy infrastructure score low.

---

## Detailed Evaluation

### 🟢 STRONG YES — High-Value Hands-On Opportunities

#### 1. **Copilot ACP**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟢 Very high — "LSP for AI agents" concept becomes concrete when devs connect their editor to Copilot via ACP |
| **Hands-On Value** | 🟢 Excellent — Start ACP server, connect Zed/JetBrains/Neovim, see real agent responses; immediate gratification |
| **Practitioner Need** | 🟢 Real — Teams locked out of VS Code urgently need this; non-VS Code users are current pain point |
| **Complexity** | 🟡 Medium — ACP is a protocol; setting up multiple clients requires some scaffolding but is conceptually clean |
| **Reuse Potential** | 🟢 High — Demo repo becomes reference implementation for any editor integration; could include Zed + JetBrains examples |

**Demo Idea:**
A multi-client demo showing the same Copilot ACP server connected to 3 clients simultaneously (VS Code, Zed, Neovim via terminal). Includes:
- Pre-configured ACP server startup scripts
- Example ACP clients for each editor (TypeScript/Python/Rust)
- Test cases showing same prompt → different client UX
- Simple tool-building tutorial (e.g., "add a custom diagnostic tool")

**Rationale:** ACP is the only truly universal Copilot integration surface. Early adopters will treat this reference implementation as gospel.

---

#### 2. **Copilot Azure MCP**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟢 High — Live Azure state queries transform from "I think I remember" to "let me ask the AI my actual infrastructure" |
| **Hands-On Value** | 🟢 Excellent — 10-minute setup: auth + MCP → immediately query live resources, scaffold configs, test deployments |
| **Practitioner Need** | 🟢 Strong — Azure developers spend 30-40% of time in portal or CLI docs; this directly addresses that friction |
| **Complexity** | 🟡 Medium — Requires Azure subscription + CLI credentials; MCP setup is straightforward, infrastructure understanding helps |
| **Reuse Potential** | 🟢 High — Demo serves as both learning resource and production-ready starting point; extends to other cloud MCPs (AWS, GCP) |

**Demo Idea:**
"From Portal to Prompt" scenario: Starting with nothing, scaffold a realistic environment:
- Authenticate CLI + Azure MCP in 3 commands
- Query live resources (storage accounts, databases, app configs)
- Generate Bicep/Terraform from running infrastructure
- Deploy variant configuration and validate changes
- Demonstrate Plan Mode catching errors before execution

**Rationale:** Compression from 45 min (manual portal navigation) to 8 min (conversational) is transformative. Practitioners immediately see ROI.

---

#### 3. **Copilot CLI**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟢 High — "AI at the point of work" becomes visceral when debugging production logs from a terminal, steered from your phone |
| **Hands-On Value** | 🟢 Excellent — Install in 2 min, use Plan Mode to debug a real scenario, experience context persistence across commands |
| **Practitioner Need** | 🟢 Very strong — 84% of dev time is outside the IDE (terminal work, deployments, debugging); this addresses the gap |
| **Complexity** | 🟡 Medium — CLI itself is simple; value comes from integrating into existing workflows (CI/CD, remote debugging, log analysis) |
| **Reuse Potential** | 🟢 High — Demo scenarios become playbooks for common tasks (log analysis, failed build triage, deployment validation) |

**Demo Idea:**
"Debug Like an Expert" playbook with pre-configured scenarios:
- Local debugging: Trace a bug using Plan Mode with 2-turn conversation vs. 8 attempts
- Remote session: Start Copilot CLI on staging server, steer from GitHub.com/copilot QR code
- CI triage: Analyze failed build with full context from logs, suggest fixes
- Log forensics: Query structured logs, correlate across services, identify root cause
- Demonstrate `/fleet` fan-out for parallel investigation subtasks

**Rationale:** CLI is used by developers, DevOps, platform engineers—broadest addressable audience. Remote steering is the "wow" moment.

---

#### 4. **Copilot Code Review**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟢 High — Seeing security vulnerabilities caught automatically + suggested fixes changes perspective on code quality gates |
| **Hands-On Value** | 🟢 Excellent — Configure webhook (15 min), push a PR with intentional issues, see inline comments with remediation; instant feedback loop |
| **Practitioner Need** | 🟢 Very strong — PR review bottleneck is universal pain point; 40-60% time savings is measurable business value |
| **Complexity** | 🟡 Medium — GitHub webhook setup is straightforward; value compounds when integrated with security compliance automation |
| **Reuse Potential** | 🟢 High — Setup becomes team/org standard; custom review rules can be reused across repos |

**Demo Idea:**
"Building a Code Review Factory" with working artifacts:
- Reference repository with intentional security bugs, style violations, test gaps
- Pre-configured webhook (copy-paste ready)
- Custom review rules for team-specific standards (framework patterns, compliance checks)
- Metrics dashboard tracking review time reduction and vulnerability catch rate
- Integration example: Code Review → automatic remediation → re-review loop
- Compliance scenario: SOC2/HIPAA checks running autonomously

**Rationale:** This is directly deployable to production immediately after learning. High practitioner adoption likelihood.

---

#### 5. **GitHub Copilot Coding Agent (From Issue to PR)**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟢 High — Seeing an issue → tested PR transformation in 5 minutes shifts thinking about what "done" means |
| **Hands-On Value** | 🟢 Excellent — File issue, assign to Copilot, watch it build, review draft PR, iterate; immediate gratification |
| **Practitioner Need** | 🟢 Strong — Every team has backlog items that never ship because they're "too routine"; this directly addresses capacity |
| **Complexity** | 🟡 Medium — Requires `copilot-setup-steps.yml` configuration specific to tech stack; straightforward but not trivial |
| **Reuse Potential** | 🟢 High — Setup becomes team standard; can be extended with custom agents for domain-specific tasks |

**Demo Idea:**
"From Backlog to Merged" sample repo with pre-configured agent environment:
- Multiple well-scoped issues (CRUD endpoints, dependency upgrades, test coverage gaps)
- Working `copilot-setup-steps.yml` for Node/Python/Go tech stacks
- Custom agent rules + review agents ready to enforce team standards
- Metrics tracking: issue → PR time, iteration count, approval rate
- Sandbox environment: team sees agent making mistakes, reviews, agent iterates
- Advanced: demonstrate firewall blocking risky operations, agent recovering

**Rationale:** This is the "job replacement fear" demo that actually shows value (capacity, not replacement). Direct ROI measurement possible.

---

#### 6. **Agentic SDLC: Infrastructure for AI Velocity**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟢 High — Understanding 100x velocity jump requires seeing monorepo structure, PR workflows, CI trust factory working together |
| **Hands-On Value** | 🟡 Good (not excellent) — Hands-on = significant infrastructure work; most value is architectural understanding + templates |
| **Practitioner Need** | 🟢 Strong — Only orgs doing 10+ features/day need this; but those that do urgently need it |
| **Complexity** | 🔴 High — Requires Nx monorepo understanding, Docker, GitHub Actions expertise, supply chain security concepts |
| **Reuse Potential** | 🟢 High — Repo topology, CI configs, agent instructions become organization standard |

**Demo Idea:**
"Build a Level 5 SDLC" reference architecture repo with:
- Pre-configured Nx monorepo with multiple services
- Hermetic builds + affected analysis examples
- GitHub Actions workflows: fast feedback (<10 min), policy-gated merges
- Agent instructions optimized for autonomous delivery
- Evidence bundle generation (security attestation)
- Metrics dashboard: throughput, quality, deployment safety
- Case study: scaling from 2-3 features/week → 10-15 features/day

**Rationale:** This is the "architectural bible" for large orgs. Not every team needs it, but those that do will reference it constantly.

---

#### 7. **Agent Teams: Building Multi-Agent Systems**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟢 High — Subagent isolation, parallel execution, team coordination become concrete with working examples |
| **Hands-On Value** | 🟢 Excellent — Small example (3 subagents researching, planning, building) runs in demo; scaling from there is clear |
| **Practitioner Need** | 🟢 Strong — Single-agent ceiling is real; teams hitting that limit urgently need patterns |
| **Complexity** | 🟡 Medium — Agent orchestration is conceptually complex but examples make it approachable |
| **Reuse Potential** | 🟢 High — Subagent patterns become templates for research teams, planning teams, review teams |

**Demo Idea:**
"Build a Multi-Agent Team" working examples:
- Simple 2-agent team: Researcher + Implementer with shared context
- Complex 3-agent team: Deep Explorer, Practical Builder, Elegant Minimalist (the Agent Council pattern)
- Background agents running in Git worktrees with autonomous completion
- Session isolation + result synthesis examples
- Metrics: context window efficiency, per-agent token usage, iteration reduction
- Common patterns: research → plan → execute, multiple implementations compared, etc.

**Rationale:** This is the fundamental shift beyond single-agent assistance. Early adopters will use these patterns across their entire workflow.

---

### 🟡 MAYBE — Good Concepts, Complexity/Scope Trade-offs

#### 8. **GitHub Agentic Workflows**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟡 Medium — Concept (intent-driven automation) is powerful, but execution visibility requires understanding GitHub's internals |
| **Hands-On Value** | 🟡 Decent — Install CLI, write simple workflow, deploy; but most value comes from understanding workflow design patterns |
| **Practitioner Need** | 🟡 Medium — Repository automation is universal, but automation that requires judgment is niche |
| **Complexity** | 🟡 Medium — CLI is simple; designing safe workflows and security guardrails requires thought |
| **Reuse Potential** | 🟡 Medium — Workflow patterns are repo-specific; reuse is limited unless abstracted into reusable components |

**Demo Value Assessment:** Works as either:
- **Light demo:** Simple workflows (issue triage, progress summaries) showing intent-driven approach
- **Full reference:** Repository with 5-10 production workflows + security patterns, but requires substantial setup

**Recommendation:** If creating, focus on 2-3 "golden path" workflows (issue triage, PR validation, progress reports) rather than trying to show all possibilities. Don't attempt to create a comprehensive demo without strong community demand.

---

#### 9. **Agentic Journey: Incremental Adoption Path**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟡 Medium — Value is in the adoption strategy (4-phase approach), not in code artifacts |
| **Hands-On Value** | 🟡 Decent — Each workflow file is copy-paste ready, but value is understanding sequencing |
| **Practitioner Need** | 🟡 Medium — Strong for teams starting Copilot agent adoption; less relevant for early adopters |
| **Complexity** | 🟡 Medium — GitHub Actions YAML + GitHub Copilot API concepts required |
| **Reuse Potential** | 🟡 Medium — Workflow templates are useful but need team-specific customization |

**Demo Value Assessment:** Works as:
- **Documentation + templates:** 4 workflow files (.github/workflows/) with detailed README explaining sequencing
- **Not as:** Standalone repository (demo value is in understanding the sequence, not running code)

**Recommendation:** This is better served as comprehensive documentation in the tech-talk repository itself (workflow templates + configuration guide) rather than a separate demo repo.

---

#### 10. **Copilot Hooks: Programmable Governance**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟡 Medium — Concept (preventing violations before they happen) is powerful; execution requires JSON + shell scripting |
| **Hands-On Value** | 🟡 Decent — Set up hook, trigger violation, see it blocked; but realistic use cases are org-specific |
| **Practitioner Need** | 🟡 Medium — Only regulated/security-conscious orgs need this; not mainstream concern |
| **Complexity** | 🟡 Medium — Hook configuration is JSON; shell scripting + policy definition are the hard parts |
| **Reuse Potential** | 🟡 Medium — Hook patterns (audit, deny, context injection) are reusable but need customization |

**Demo Value Assessment:** Works as:
- **Reference implementation:** Pre-built hooks (audit trail, security denial, context injection) with explanations
- **Best for:** Orgs with governance/compliance requirements who want to see it's possible

**Recommendation:** Create a lightweight demo with 3-4 "golden path" hooks (security check, audit logging, context injection) rather than exhaustive coverage. Focus on "here's how to prevent deletion" and "here's how to audit everything."

---

#### 11. **Copilot Memory: Stateful Preferences**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟡 Medium — Concept is simple (persistent storage); main value is showing what kinds of things to remember |
| **Hands-On Value** | 🟡 Decent — Enable setting, use chat, save preference; but value is longitudinal (compound across sessions) |
| **Practitioner Need** | 🟡 Medium — Valuable for individuals using Copilot daily; less relevant for casual users or teams |
| **Complexity** | 🟢 Low — Feature is built-in; demo is mostly about demonstrating good practices |
| **Reuse Potential** | 🔴 Low — Memory is personal; not much to reuse across teams |

**Demo Value Assessment:** Works as:
- **Brief tutorial video/guide:** "What to store in Copilot Memory" with examples
- **Not as:** Separate repository (there's no code to execute)

**Recommendation:** Skip dedicated demo repo; instead create a markdown guide in the tech-talk repo with examples of "good" vs. "bad" things to remember.

---

#### 12. **Copilot Configuration Primitives**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟡 Medium — Concept (layering instructions, skills, prompts) is powerful; understanding precedence/interaction requires examples |
| **Hands-On Value** | 🟡 Decent — Create instructions file, see immediate effect on chat responses; iterative improvement is manual |
| **Practitioner Need** | 🟡 Medium — Valuable for teams using Copilot; less relevant for infra/DevOps use cases |
| **Complexity** | 🟡 Medium — Individual primitives are simple; understanding how they layer together requires careful explanation |
| **Reuse Potential** | 🟡 Medium — Instructions/skills are team-specific; some patterns are reusable but need customization |

**Demo Value Assessment:** Works as:
- **Reference repository:** Example codebase with production-ready instructions, skills, prompts, agents
- **Complexity:** Requires 4-5 well-documented examples to show layering patterns

**Recommendation:** Create as reference repo only if there's strong demand; otherwise the tech-talk slides + inline examples suffice.

---

### 🔴 NOT NOW — Conceptual/Advanced; Low Hands-On Value

#### 13. **Copilot Chat Internals: Debugging AI**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟢 High (understanding) | 🔴 Low (hands-on) — Visibility tools are built-in; most value is in knowing they exist |
| **Hands-On Value** | 🔴 Low — There's nothing to run or build; value is in knowing how to use existing tools |
| **Practitioner Need** | 🟡 Medium — Only advanced users debugging complex issues need deep understanding |
| **Complexity** | 🟡 Medium — Requires understanding VS Code extension architecture, request/response formatting |
| **Reuse Potential** | 🔴 None — This is observability, not implementation |

**Rationale:** This is a **diagnostic skill**, not a system to build. Demo repo would contain... what? No code to execute, no infrastructure to set up. Practitioners learn this by doing, not by cloning a repo.

**Recommendation:** 🔴 **Skip demo repo.** This talk is best served by:
- Recorded demo video showing each diagnostic tool in action
- Markdown troubleshooting guide in the tech-talk repo
- Interactive walkthrough in a live presentation

---

#### 14. **VS Code Latest: Release Cadence Digest**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟡 Medium — Overview of new features is useful; hands-on application depends on features chosen |
| **Hands-On Value** | 🔴 Low — Features are built into VS Code; demo would be "here's a feature, use it" |
| **Practitioner Need** | 🟡 Medium — Developers using VS Code should know what's new; value is in adoption, not in learning infrastructure |
| **Complexity** | 🟢 Minimal — Features are enabled via settings; no infrastructure needed |
| **Reuse Potential** | 🔴 None — This is a release digest, not an architecture |

**Rationale:** Features ship in VS Code releases; practitioners enable them directly. No demo repo needed—the feature IS the demo.

**Recommendation:** 🔴 **Skip demo repo.** Instead:
- Create a markdown guide in the talk repo: "Feature Checklist for v1.108-v1.115" with settings + usage examples
- Link to official VS Code release notes
- Consider a recorded demo video for selected high-impact features

---

#### 15. **Enterprise Patterns: Scaling Copilot Org-Wide**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟡 Medium — Understanding is valuable; most value is in templates + strategy, not in running code |
| **Hands-On Value** | 🟡 Decent (if simplified) — Can set up org instructions, but full enterprise setup is months of work |
| **Practitioner Need** | 🔴 Low — Only relevant for large orgs (500+ developers); not mainstream |
| **Complexity** | 🔴 Very High — Requires org admin access, API orchestration, metrics infrastructure, policy engines |
| **Reuse Potential** | 🟢 High — Templates are reusable, but each org customizes significantly |

**Rationale:** Enterprise transformation is **months-long engagement**, not a demo repo. The value is in the strategy + templates, not in "cloning and running."

**Recommendation:** 🔴 **Skip full demo repo.** Instead:
- Create a **starter templates** package in the tech-talk repo:
  - Organization-wide instructions template
  - Skill library structure example
  - Metrics dashboard baseline
  - Governance policy samples
- Focus on **decision guidance** (how to choose between approaches) rather than implementation

If enterprise customers specifically request a demo, consider a **private reference implementation** (GitHub Enterprise org) shown during consulting engagement, not a public repo.

---

#### 16. **MCP Apps: Rich Interactive UI in Chat**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟡 Medium — Concept (interactive components in chat) is powerful; execution requires understanding MCP + component specs |
| **Hands-On Value** | 🟡 Decent — Build simple interactive component (chart/table), see it in chat; but iteration is slow |
| **Practitioner Need** | 🟡 Medium — Valuable for teams doing heavy data exploration; less relevant for general dev work |
| **Complexity** | 🟡 High — Requires MCP server implementation + component specification knowledge |
| **Reuse Potential** | 🟡 Medium — Component patterns are reusable; but MCP server implementation is domain-specific |

**Demo Value Assessment:** Works as:
- **Reference components library:** Interactive table, chart, tree, form with MCP server examples
- **Best for:** Teams building sophisticated MCP apps (not mainstream)

**Recommendation:** 🟡 **Conditional demo repo:**
- If MCP adoption accelerates, create reference library of 4-5 production-ready components (data table, chart, tree, form, custom card)
- Include MCP server examples and integration guide
- For now, consider this lower priority; revisit after MCP marketplace matures

---

#### 17. **Copilot SDK: Programmatic Agent Control**
| Criterion | Assessment |
|-----------|-----------|
| **Learning Impact** | 🟡 Medium — Useful for understanding what's possible programmatically; most value is in docs |
| **Hands-On Value** | 🟡 Decent — Install SDK, write 10 lines of code, embed agent; but real value requires building full app |
| **Practitioner Need** | 🟡 Medium — Strong for platform engineers; less relevant for individual developers |
| **Complexity** | 🟡 Medium — SDK is well-designed; building realistic automation is non-trivial |
| **Reuse Potential** | 🟡 Medium — Code patterns are reusable; most value is in understanding how to integrate SDK into existing apps |

**Demo Value Assessment:** Works as:
- **Starter template** + **example applications:**
  - Release notes generator (Git API + SDK)
  - Test failure analyzer (CI logs + SDK)
  - Duplicate detection (GitHub API + SDK)
  - Custom dashboard (metrics API + SDK)

**Recommendation:** 🟡 **Conditional demo repo:**
- Create if SDK demand is strong
- Focus on 3-4 **real use cases** (not toy examples) that show actual developer pain points
- Include working starter template + documentation
- For now, can defer; revisit after SDK GA (currently in preview)

---

## Recommendations by Timeline

### 🚀 **Phase 1 (Immediate — Highest ROI)**
Start with these 5 repos (7 talks total):
1. **Copilot CLI** — Broadest audience, immediate impact, clear demo scenarios
2. **Copilot Code Review** — Direct ROI measurement, deployable immediately
3. **Copilot ACP** — Opens new editor ecosystem, reference implementation needed
4. **Copilot Azure MCP** — Strong practitioner pain point, 10-minute setup
5. **Coding Agent** — Direct employment of agent-authored code, strongest ROI story

**Estimated effort:** 3-4 weeks / 60-80 hours of development
**Expected impact:** Practitioners can immediately adopt patterns; repos become reference implementations

---

### 🏗️ **Phase 2 (Near-term — Medium ROI, Higher Complexity)**
Add these after Phase 1 stabilizes:
1. **Agent Teams** — Essential for orgs hitting single-agent ceiling
2. **Agentic SDLC** — Architects need reference implementation

**Estimated effort:** 4-6 weeks / 80-120 hours
**Expected impact:** Reference architectures for scaling; moderate audience reach

---

### 📋 **Phase 3 (Later — Conditional/Premium)**
Defer until demand justifies scope:
1. **Agentic Workflows** — Light reference repo if strong demand
2. **Hooks** — Reference patterns for regulated orgs
3. **MCP Apps** — Reference component library (after MCP marketplace matures)
4. **SDK Examples** — Starter templates (after GA release)

---

### 🔴 **Skip Entirely**
These are better served by documentation/video rather than demo repos:
1. **Chat Internals** — Diagnostic skill, not implementation
2. **VS Code Latest** — Release digest, not architecture
3. **Enterprise Patterns** — Strategy + templates (not code-focused demo)
4. **Copilot Memory** — Built-in feature, no code to run

---

## Key Decision Framework

**Create a demo repo if:**
- ✅ Developers say "I want to try this" (not "I want to understand this")
- ✅ There's a clear setup → iteration loop → visible result (< 1 hour)
- ✅ The repo becomes a reference implementation for 50+ teams
- ✅ Copying the repo saves a team 10+ hours of setup

**Don't create a demo repo if:**
- ❌ Main value is conceptual understanding (use documentation + video)
- ❌ Setup time > 30 minutes or requires extensive customization
- ❌ Audience is < 10% of developers (too niche)
- ❌ Result depends on user's own infrastructure (not portable)

---

## Appendix: Quick Reference

### By Audience
| Audience | High-Value Demos |
|----------|-----------------|
| **Individual Developers** | CLI, Code Review, Coding Agent |
| **Team Leads** | Agent Teams, Code Review, Coding Agent |
| **DevOps/Platform Engineers** | CLI, Agentic SDLC, Hooks, ACP |
| **Enterprise Architects** | Agent Teams, Agentic SDLC, Enterprise Patterns (templates only) |
| **Tool Builders** | ACP, MCP Apps, SDK |

### By Pain Point Addressed
| Pain Point | Demo Solution |
|-----------|--------------|
| "I can't debug in production" | **Copilot CLI** |
| "Code reviews take forever" | **Copilot Code Review** |
| "Agents are stuck at single-task ceiling" | **Agent Teams** |
| "My CI/CD is a bottleneck" | **Agentic SDLC** |
| "I can only use VS Code" | **Copilot ACP** |
| "Azure setup is tedious" | **Copilot Azure MCP** |
| "We have a backlog of routine work" | **Copilot Coding Agent** |
| "I want to see if this works first" | **Copilot CLI** (Plan Mode) |

---

## Notes on Existing Reference

The **copilot-acp reference** (msbart2/cli-acp) mentioned in the context is a good model:
- Focused scope (ACP protocol, multi-client demo)
- Copy-paste ready configuration
- Clear "before/after" workflow comparison
- Serves as both learning resource and production starting point

**Apply this model to Phase 1 repos.**

---

## Success Metrics

After creating these demos, success looks like:
- Practitioners fork/clone the repos within 2 weeks of talk publication
- GitHub issues in demo repos asking "how do I adapt this for X?" (shows it's valuable)
- 50%+ of organizations claim they used a demo repo as their starting point
- Demo repos become the #1 search result for "[talk-name] + setup" on GitHub
