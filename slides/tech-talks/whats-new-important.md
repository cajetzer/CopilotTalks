---
theme: default
colorSchema: dark
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot: Latest Capabilities and Effective Patterns
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: "GitHub Copilot: Latest Capabilities and Effective Patterns"
mdc: true
section: Developers
status: active
updated: 2026-06-11
---

<script setup>
import TitleSlide from './components/structure/TitleSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import ProblemSolutionOutcomeSlide from './components/ProblemSolutionOutcomeSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="What Changed and Why It Matters"
  subtitle="Seven surfaces, eight capabilities, context discipline"
  tagline="Map. Execute. Review."
  meta="GitHub Copilot · Developers · 30 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="What changed in the last 4 months? How do surfaces and context patterns improve outcomes?"
  subtext="The practical answer is"
  highlight="route tasks to the right surface with intentional context design."
  :cards='[
    { icon: "🗺️", title: "Seven surfaces", description: "Each with different tool access and execution models" },
    { icon: "🆕", title: "Eight capabilities", description: "Fleet, subagents, rubber duck, skills, agents window, terminal, cloud agent, plan agent" },
    { icon: "🧰", title: "Context discipline", description: "Progressive disclosure and scope reduction reduce noise and token waste" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🗺️", title: "Surface Map", subtitle: "Seven surfaces, shared foundation", blurb: "Where each surface fits, tool access, and execution model", slide: 4 },
    { icon: "🆕", title: "Recent Capabilities", subtitle: "Eight matured in last 4 months", blurb: "Fleet, subagents, rubber duck, skills, agents window, terminal, cloud agent, plan agent", slide: 10 },
    { icon: "🧠", title: "Context Engineering", subtitle: "Progressive disclosure + scope reduction", blurb: "Four-layer disclosure, skills, MCP filtering, scope budgeting", slide: 17 },
    { icon: "🎯", title: "Multi-Surface Patterns", subtitle: "Three topologies + five selection rules", blurb: "App-centric, IDE-centric, CLI-centric orchestration", slide: 23 }
  ]'
/>

---

<!-- SLIDE: Part 1 - Surface Map -->
<SectionOpenerSlide
  :partNumber="1"
  title="Surface Map"
  subtitle="Seven surfaces, one shared foundation."
  :cards='[
    { icon: "💬", title: "VS Code Chat", blurb: "Interactive Q&A and quick exploration" },
    { icon: "🤖", title: "VS Code Agent Mode", blurb: "Autonomous multi-file implementation" },
    { icon: "🎯", title: "GitHub Copilot App", blurb: "Desktop agent-native orchestration" }
  ]'
  :terminal='{ context: "Surface-task alignment is now mandatory", detail: "Different surfaces expose different tool access and execution models" }'
/>

---

<!-- SLIDE: Seven Surfaces Overview -->
<ThreeColumnCardSlide
  :partNumber="1"
  pillIcon="🗺️"
  pillLabel="Surface Map"
  title="All Seven Surfaces Share Instructions + MCP Config"
  :columns='[
    { icon: "💬", title: "Interactive", description: "Chat, Agent Mode, GitHub.com for quick feedback loops and review", items: ["VS Code Chat", "VS Code Agent Mode", "GitHub Copilot App"] },
    { icon: "🔄", title: "Parallel execution", description: "Background agents, fleet, and parallel app sessions for independent workstreams", items: ["Background agents", "Copilot CLI /fleet", "Copilot App sessions"] },
    { icon: "🖥️", title: "Terminal & review", description: "CLI and GitHub.com for runtime work, validation, and final approval", items: ["Copilot CLI", "GitHub.com", "Integrated terminal"] }
  ]'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Surface Selection Matrix -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="🗺️"
  pillLabel="Surface Map"
  title="Choose Surface by Task Shape"
  description="Use these routing rules instead of one-tool-for-everything habits"
  codePosition="top"
  :code='`
| Task Type | Best Surface | Why |
|-----------|--------------|-----|
| Quick question | VS Code Chat | Streaming response, file context |
| Deep refactor | VS Code Agent Mode | Multi-file iteration, loop control |
| PR review | GitHub.com + App | Diff-centric, approval workflow |
| CI debugging | Copilot CLI | Full system access, remote shells |
| Parallel tasks | Copilot App + /fleet | Session isolation, independent progress |
`'
  :features='[
    { icon: "✅", title: "Same instructions everywhere", description: "copilot-instructions.md applies to all surfaces" },
    { icon: "✅", title: "Same MCP config", description: "Tools and skills auto-available across surfaces" },
    { icon: "✅", title: "Different execution models", description: "Each surface offers different tool access and interaction patterns" }
  ]'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: GitHub Copilot App as First-Class Surface -->
<ProblemSolutionOutcomeSlide
  :partNumber="1"
  pillIcon="🗺️"
  pillLabel="Surface Map"
  title="GitHub Copilot App (Technical Preview)"
  problem="Agent orchestration in IDE is powerful but limited to local editing"
  solution="Desktop app brings agents + integrated terminal/browser + MCP + skills + canvases"
  :outcome='{ icon: "🚀", highlight: "End-to-end agent sessions without IDE constraints", description: "Session management, steering, diff review, and parallel workstream visibility in one app" }'
  :features='[
    { icon: "🖥️", title: "Integrated terminal + browser", description: "Validation without context switches" },
    { icon: "🧠", title: "Parallel sessions", description: "Independent worktrees per session, visible steering" },
    { icon: "🔌", title: "MCP + skills + canvases", description: "Full customization like VS Code + visual workflows" }
  ]'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Part 2 - Recent Capabilities -->
<SectionOpenerSlide
  :partNumber="2"
  title="Recent Capabilities"
  subtitle="Eight capabilities matured in the last 4 months."
  :cards='[
    { icon: "🧩", title: "Fleet + subagents", blurb: "Parallel and delegated execution" },
    { icon: "🦆", title: "Rubber duck", blurb: "Design review before code" },
    { icon: "💾", title: "Skills + controls", blurb: "Scoped workflows and safety gates" }
  ]'
  :terminal='{ context: "Feature maturity is operational", detail: "Focus on which capability matches which task shape" }'
/>

---

<!-- SLIDE: Fleet Mode + Subagents -->
<BeforeAfterMetricsSlide
  :partNumber="2"
  pillIcon="🆕"
  pillLabel="Capabilities"
  title="Fleet Mode & Subagents: Parallel and Scoped"
  header="From Serial to Parallel, From Broad to Bounded"
  :leftItems='["One agent, full context, one task at a time", "Broad scope, high context overhead", "Manual task splitting required"]'
  :rightItems='["Fleet: multiple independent tasks in parallel", "Subagents: scoped delegated subtasks", "Automatic routing and context reduction"]'
  :metrics='[
    { value: "~3-5x", detail: "faster on independent task batches" },
    { value: "40-50%", detail: "context reduction per subagent" },
    { value: "0 context resets", detail: "between parallel workstreams" }
  ]'
  :progressDots='{ current: 1, total: 5, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Rubber Duck + Skills-Based Gating -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🆕"
  pillLabel="Capabilities"
  title="Rubber Duck Pattern & Skills"
  :leftConcept='{ title: "Rubber Duck (CLI)", description: "Describe design to Copilot before coding. Get critique, spot assumptions, catch errors early.", items: ["Design → Copilot → Feedback → Refine", "Before implementation, not after", "Second-opinion workflow"] }'
  :rightConcept='{ title: "Skills-Based Context Gating", description: "Encode workflows (.github/skills/) and let agents auto-invoke. Scope + structure reduce discovery work.", items: ["Skill: test runner + failure triage", "Agent auto-selects + invokes", "Only task-relevant context loaded"] }'
  :progressDots='{ current: 2, total: 5, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: VS Code Agents Window + Terminal Controls -->
<FourCardGridSlide
  :partNumber="2"
  pillIcon="🆕"
  pillLabel="Capabilities"
  title="Orchestration Upgrades"
  :cards='[
    { icon: "🪟", title: "Agents window", description: "Multi-session orchestration and steering" },
    { icon: "🔗", title: "Remote agents", description: "Continuous running when client disconnects" },
    { icon: "🛡️", title: "Terminal safety", description: "Risk assessment + command summaries" },
    { icon: "📦", title: "Context compression", description: "Output summarization before ingestion" }
  ]'
  :progressDots='{ current: 3, total: 5, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Cloud Agent + Visual Studio Plan -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🆕"
  pillLabel="Capabilities"
  title="Cloud Agent & Plan-Agent Workflows"
  :leftConcept='{ title: "Cloud Agent: Plan-First", description: "Branch without PR, review plan before edits, run deep research sessions. Staged delegation (research → plan → implement → review).", items: ["Branch without auto-PR", "Plan before code", "Deep research mode"] }'
  :rightConcept='{ title: "Visual Studio Plan Agent", description: "Read-only investigation phase with explicit planning before code generation. Context window controls and multi-file diffs.", items: ["Plan mode (read-only)", "Context indicators", "Multi-file diff review"] }'
  :progressDots='{ current: 4, total: 5, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Eight Capabilities Summary -->
<HeroStatSlide
  :partNumber="2"
  pillIcon="🆕"
  pillLabel="Recent Capabilities"
  title="Eight Capabilities: Choose by Task Shape"
  subtitle="Fleet mode, subagents, rubber duck, skills, agents window, terminal controls, cloud agent, plan agent"
  :hero='{ value: "Capability fit", label: "Match execution model to task scope and risk profile first", source: "Parallel work, delegated subtasks, scoped validation loops, design review, and staged discovery" }'
  :supporting='[
    { icon: "🧩", title: "Scope boundaries", description: "Subtasks stay reviewable when scope is small and concrete" },
    { icon: "🔁", title: "Parallel execution", description: "Independent workstreams can progress without serial blocking" },
    { icon: "🎯", title: "Review-centric", description: "Human effort shifts from typing to validation and steering" }
  ]'
  :insight='{ icon: "💡", text: "Feature maturity is operational. Ask: Which capability reduces overhead for this task shape?" }'
  :progressDots='{ current: 5, total: 5, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Part 3 - Context Engineering -->
<SectionOpenerSlide
  :partNumber="3"
  title="Context Engineering"
  subtitle="Progressive disclosure and intentional design."
  :cards='[
    { icon: "🪜", title: "Four-layer disclosure", blurb: "Load context by intent, structure, runtime, validation" },
    { icon: "🧩", title: "Scope via skills", blurb: "Encode workflows to avoid discovery work" },
    { icon: "🔌", title: "MCP filtering", blurb: "Expose only relevant tools and data first" }
  ]'
  :terminal='{ context: "Context quality beats quantity", detail: "Scope and sequencing determine output quality more than prompt length" }'
/>

---

<!-- SLIDE: Four-Layer Progressive Disclosure -->
<FrameworkMappingRowsSlide
  :partNumber="3"
  pillIcon="🧰"
  pillLabel="Context"
  title="Progressive Disclosure: Four Layers"
  description="Start minimal, expand only when task requires it"
  :rows='[
    { layer: "Layer 1", title: "Intent", content: "Task objective, constraints, acceptance criteria only", icon: "📋" },
    { layer: "Layer 2", title: "Structure", content: "Add targeted file/module context (#codebase, specific reads)", icon: "📁" },
    { layer: "Layer 3", title: "Runtime", content: "Add terminal output, test failures, logs, MCP-backed data", icon: "▶️" },
    { layer: "Layer 4", title: "Validation", content: "Gate completion through scoped checks (lint/test/build)", icon: "✅" }
  ]'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Scope Reduction via Skills -->
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="🧰"
  pillLabel="Context"
  title="Skills Reduce Discovery Overhead"
  :columns='[
    { icon: "🧪", title: "Workflow encoding", description: "Define skill: test runner + failure triage" },
    { icon: "🔍", title: "Auto-invocation", description: "Agent selects + invokes when task mentions testing" },
    { icon: "📊", title: "Scoped execution", description: "Skill runs on src/auth/ only, not full codebase" }
  ]'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Query Filtering via MCP -->
<ProblemSolutionOutcomeSlide
  :partNumber="3"
  pillIcon="🧰"
  pillLabel="Context"
  title="MCP: Scope Tools to Task-Relevant Subsystems"
  problem="Broad MCP config exposes full filesystem and all endpoints → context noise"
  solution="Restrict MCP scope: expose folder/toolset/endpoint only for current task, expand only when blocked"
  :outcome='{ icon: "🎯", highlight: "Minimal tool context by intent", description: "Agent has smaller attack surface, less discovery work, clearer outputs" }'
  :features='[
    { icon: "📁", title: "Folder-level scoping", description: "MCP file access limited to src/auth/, not entire codebase" },
    { icon: "🔌", title: "Endpoint gating", description: "Only required API calls exposed (e.g., test endpoint, not deploy)" },
    { icon: "🛡️", title: "Local validation first", description: "Run lint/test locally before broad MCP queries" }
  ]'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Part 4 - Multi-Surface Patterns -->
<SectionOpenerSlide
  :partNumber="4"
  title="Multi-Surface Patterns"
  subtitle="Three topologies + five selection rules."
  :cards='[
    { icon: "📱", title: "App-centric", blurb: "Plan and steer from Copilot App" },
    { icon: "💻", title: "IDE-centric", blurb: "Deep implementation in VS Code" },
    { icon: "🖥️", title: "CLI-centric", blurb: "Runtime work in terminal" }
  ]'
  :terminal='{ context: "Plan → Execute → Review across surfaces", detail: "Treat surfaces as a coordinated system" }'
/>

---

<!-- SLIDE: Topology A: App-Centric Orchestration -->
<ProblemSolutionOutcomeSlide
  :partNumber="4"
  pillIcon="🎯"
  pillLabel="Patterns"
  title="Topology A: App-Centric Orchestration"
  problem="Issue-driven feature work needs parallel session management and quick validation"
  solution="Start from issue/PR in Copilot App → split to bounded sessions → validate in integrated terminal/browser → review from app or GitHub.com"
  :outcome='{ icon: "📱", highlight: "Single orchestration center with visibility + steering", description: "App sessions, parallel worktrees, integrated validation, diff-ready output" }'
  :features='[
    { icon: "📋", title: "Step 1: Plan", description: "Chat in app or GitHub issue, split scope into workstreams" },
    { icon: "🔀", title: "Step 2: Execute", description: "Run parallel app sessions for independent subtasks" },
    { icon: "✅", title: "Step 3: Validate", description: "Use integrated terminal/browser, then review from app" }
  ]'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Topology B: IDE-Centric Implementation -->
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="🎯"
  pillLabel="Patterns"
  title="Topology B: IDE-Centric Implementation"
  description="Deep code work in VS Code with app oversight for orchestration"
  codePosition="top"
  :code='`
1. IDE: Agent Mode for bounded multi-file edits
2. IDE: Click "Continue in Background" for parallel task
3. App: Monitor background agent progress in-session
4. App/GitHub: Review and finalize diffs
`'
  :features='[
    { icon: "💻", title: "Deep editing", description: "VS Code Agent Mode for local multi-file refactors" },
    { icon: "🧭", title: "Orchestration", description: "Copilot App or CLI for cross-task steering" },
    { icon: "🔍", title: "Review surface", description: "GitHub.com or app for final diff approval" }
  ]'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Topology C: CLI-Centric Runtime Work -->
<BeforeAfterMetricsSlide
  :partNumber="4"
  pillIcon="🎯"
  pillLabel="Patterns"
  title="Topology C: CLI-Centric Runtime Work"
  header="From Ad-Hoc Terminal Commands to Agentic Workflows"
  :leftItems='["Manual debug loop in terminal", "No context between runs", "Copy-paste error messages"]'
  :rightItems='["Copilot CLI or app terminal", "Session history and chronicle", "Agent-guided debugging workflow"]'
  :metrics='[
    { value: "/fleet", detail: "parallel independent tasks" },
    { value: "/chronicle", detail: "query previous sessions" },
    { value: "/rubber-duck", detail: "design review before edits" }
  ]'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Five Surface Selection Rules -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🎯"
  pillLabel="Patterns"
  title="Five Surface Selection Rules"
  :columns='[
    { icon: "📍", title: "Rule 1: State location", description: "Start where authoritative state lives (issues/PRs → app, code → IDE, runtime → CLI)" },
    { icon: "🔗", title: "Rule 2: Dependency graph", description: "Parallelize truly independent workstreams; keep dependent changes in one chain" },
    { icon: "⚖️", title: "Rule 3: Orchestration ≠ execution", description: "App/GitHub for orchestration and continuity; IDE/CLI own deep execution details" }
  ]'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Surface Selection Rules (Continued) -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🎯"
  pillLabel="Patterns"
  title="Five Surface Selection Rules (Continued)"
  :columns='[
    { icon: "🔍", title: "Rule 4: Review early", description: "Treat diff review as part of implementation, not a final step. Move to review surfaces early" },
    { icon: "📈", title: "Rule 5: Escalate over dumping", description: "Start narrow. Expand context only when blocked" }
  ]'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Before/After: The Transformation -->
<BeforeAfterSlide
  header="From Single-Surface Habits to Multi-Surface Execution"
  :leftItems='[
    "Route every task through one chat surface",
    "Overload prompts with broad context",
    "Run work serially even when tasks are independent",
    "Validate late at the end of implementation"
  ]'
  :rightItems='[
    "Choose surface by task shape and state location",
    "Expand context in layers as needed",
    "Run independent workstreams in parallel",
    "Validate in-loop with scoped checks and review"
  ]'
  :metrics='[
    { value: "Scope first", detail: "Set boundaries before delegation" },
    { value: "Surface fit", detail: "Execution model should match task shape" },
    { value: "Review-ready", detail: "Use iterative validation and diff-based review" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='[
    "Map your current workflow to one topology (app-centric, IDE-centric, or CLI-centric)",
    "Install GitHub Copilot App preview and run one parallel session",
    "Try /fleet in Copilot CLI on two independent tasks"
  ]'
  :thisWeek='[
    "Add one scoped skill in .github/skills/ for a recurring workflow",
    "Restrict one MCP server to task-specific scope and compare results",
    "Run a refactor task with explicit scope budgeting - does it fit one module?"
  ]'
  :thisMonth='[
    "Audit your team workflow for inefficient surface switching",
    "Document surface selection rules as team guidance",
    "Measure context consumed before/after progressive disclosure"
  ]'
  footer="Seven surfaces, one config. Choose the right one for what you're doing right now."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
      { href: "https://code.visualstudio.com/docs/copilot/overview", label: "GitHub Copilot in VS Code", description: "Chat, agent mode, background agents" },
      { href: "https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started", label: "GitHub Copilot App - Getting Started", description: "Technical preview session model and workflows" },
      { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli", label: "About GitHub Copilot CLI", description: "Terminal-native patterns, /fleet, /rubber-duck" },
      { href: "https://code.visualstudio.com/docs/copilot/customization/mcp-servers", label: "MCP Servers in VS Code", description: "Configuring scope-gated tool access" }
    ] },
    { title: "🛠️ Capabilities & Patterns", color: "purple", items: [
      { href: "https://github.blog/changelog/2026-05-14-subagents-and-skills-in-github-copilot-app/", label: "Subagents & Skills", description: "Scope reduction and workflow encoding (May 2026)" },
      { href: "https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases/", label: "VS Code May Releases", description: "Agents window, remote sessions, terminal controls" },
      { href: "https://github.blog/changelog/2026-04-01-research-plan-and-code-with-copilot-cloud-agent/", label: "Cloud Agent: Plan-First Workflows", description: "Branch without PR, deep research capabilities" },
      { href: "https://github.com/danielmeppiel/awesome-ai-native", label: "Awesome AI-Native Patterns", description: "Context engineering and progressive disclosure discipline" }
    ] },
    { title: "🎓 Related Tech Talks", color: "blue", items: [
      { label: "Copilot Primitives", description: "Instructions → skills → agents production model" },
      { label: "Agentic Workflows", description: "Multi-step task patterns and plan/act/verify loops" },
      { label: "Agent Teams", description: "Coordinating multiple agents and subagent delegation" },
      { label: "Copilot Code Review", description: "Automatic review setup and compliance patterns" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="What's New & Important"
  subtitle="GitHub Copilot: Latest Capabilities and Effective Patterns"
  :cards='[
    { value: "7 surfaces", detail: "Same instructions, MCP config - route each task type to the right surface" },
    { value: "8 capabilities", detail: "Fleet, subagents, rubber duck, skills, agents window, terminal, cloud agent, plan agent" },
    { value: "Progressive disclosure", detail: "Context engineering as discipline: load by intent, structure, runtime, validation" }
  ]'
  prompt="Which topology fits your team workflow best? How does surface routing change your planning?"
/>
