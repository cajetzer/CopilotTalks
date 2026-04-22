---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agent Teams: Subagents, Teams, and Autonomous Execution
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Agent Teams - Subagents, Teams, and Autonomous Execution
module: tech-talks/agent-teams
mdc: true
section: Agentic Engineering
status: active
updated: 2026-04-21
---

<script setup>
// Required scaffold (all decks)
import TitleSlide from './components/structure/TitleSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import ThankYouSlide from './components/structure/ThankYouSlide.vue'

// Tier-1 body-content components
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import ProblemSolutionOutcomeSlide from './components/ProblemSolutionOutcomeSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="Agent Teams"
  subtitle="Subagents, Teams, and Autonomous Execution"
  tagline="Mechanisms for composing multi-agent AI systems that handle complex tasks"
  meta="Tech Talk · 60 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="What are the mechanisms that make multi-agent AI work—and how do I compose them into systems that handle complex tasks, run autonomously, and improve over time?"
  subtext="Single agents hit a hard ceiling around 300-500 LOC or 3-4 hours of work. Context accumulates, supervision becomes the bottleneck, and quality degrades."
  highlight="The solution is not a smarter single agent—it is composing agents the way you would compose a team."
  :cards='[
    { icon: "🔧", title: "Developers Building Agent Systems", description: "From single-agent workflows to coordinated multi-agent execution" },
    { icon: "🏗️", title: "Architects Scaling AI Capacity", description: "Parallel execution, role specialization, autonomous background work" },
    { icon: "👔", title: "Engineering Managers", description: "Reducing supervision overhead from continuous to review-only" },
    { title: "Context Pollution", description: "Single agent juggling research + planning + implementation accumulates 50-80% irrelevant context" },
    { title: "Supervision Bottleneck", description: "Cannot parallelize when you cannot look away—traditional workflows demand continuous guidance" },
    { title: "Quality Degradation", description: "Output quality drops 30-40% as context window fills with dead-end explorations" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🧱", title: "Subagents: The Building Block", subtitle: "The primitive mechanism", blurb: "Isolated context windows, parallel execution, summary-only returns", slide: 4 },
    { icon: "👥", title: "Agent Teams: Organized Specialists", subtitle: "Role-based coordination", blurb: "Squad gives you persistent specialists that compound knowledge", slide: 9 },
    { icon: "🚀", title: "Autonomous Execution", subtitle: "Background agents + worktrees", blurb: "Hand off to background agents—85 active minutes become 27", slide: 14 },
    { icon: "🎭", title: "Agent Council", subtitle: "Multi-model deliberation", blurb: "Claude + GPT + Gemini in collaborative or adversarial modes", slide: 18 },
  ]'
/>

---

<!-- SLIDE: Part 1 — Subagents: The Building Block -->
<SectionOpenerSlide
  :partNumber="1"
  title="Subagents: The Building Block"
  subtitle="The primitive mechanism that makes all multi-agent patterns possible"
  :cards='[
    { icon: "🧱", title: "Isolated Context", blurb: "Each subagent runs in its own 200K window" },
    { icon: "⚡", title: "Parallel Execution", blurb: "3 independent tasks = 3× throughput, 0 extra supervision" },
    { icon: "📦", title: "Summary Returns", blurb: "4-6× token reduction—only findings come back" },
  ]'
  :terminal='{ context: "The main agent delegates a task—VS Code spawns a subagent with its own context", detail: "All intermediate exploration stays isolated; only the final summary returns" }'
/>

---

<!-- SLIDE: Core Mechanism -->
<HeroStatSlide
  :partNumber="1"
  pillIcon="🧱"
  pillLabel="Subagents: Core Mechanism"
  title="The Core Mechanism"
  subtitle="Subagents run in isolated context windows separate from the main chat session"
  :hero='{ value: "200K", label: "tokens per subagent window—independent of main context", source: "Each subagent reads 30 files, explores 5 approaches—returns only a 500-token summary" }'
  :supporting='[
    { icon: "🔍", title: "Delegation with Isolation", description: "Main agent delegates—subagent works autonomously in its own context" },
    { icon: "🚫", title: "No Context Pollution", description: "Research, dead-ends, and exploration never accumulate in the main session" },
    { icon: "⚙️", title: "Parallel by Default", description: "Multiple subagents run simultaneously when tasks are independent" },
    { icon: "📋", title: "Structured Summaries", description: "Typically 100-500 tokens vs. 5K-20K if done in main context" }
  ]'
  :insight='{ icon: "💡", text: "Key Insight: Subagents inherit the main session&#39;s agent and model by default—override with custom agents for specialized behavior." }'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Two Invocation Patterns -->
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🔧"
  pillLabel="Subagents: Invocation"
  title="Two Invocation Patterns"
  :left='{
    header: "Implicit (Chat Hints)",
    icon: "💬",
    items: [
      { title: "Natural language delegation", detail: "Run a subagent to research OAuth2 patterns..." },
      "Main agent interprets intent and spawns subagent",
      "Best for exploratory research and ad-hoc delegation",
      { title: "Zero setup", detail: "Just describe the delegation in chat" }
    ]
  }'
  :right='{
    header: "Explicit (Prompt Files)",
    icon: "📄",
    items: [
      { title: "Multi-phase workflows in .md files", detail: "frontmatter declares tools and phases" },
      "Reproducible procedures, version-controlled",
      "Best for team-wide consistency",
      { title: "Phase separation", detail: "Research → Industry patterns → Implementation" }
    ],
    code: { language: "yaml", content: "---\nname: feature-workflow\ntools: [&#39;agent&#39;, &#39;read&#39;, &#39;edit&#39;]\n---" }
  }'
  :insight='{ icon: "🎯", text: "Parallel subagents: 3 independent tasks run simultaneously—22 min serial becomes 8 min parallel (2.75× faster)." }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Parallel Subagents in Action -->
<ProblemSolutionOutcomeSlide
  :partNumber="1"
  pillIcon="⚡"
  pillLabel="Subagents: Parallel Execution"
  title="Parallel Subagents in Action"
  :problem='{
    items: [
      "Single agent analyzes auth module sequentially",
      "Security → Performance → Testing: 22 minutes total",
      "Each phase pollutes context for the next",
      { title: "Serial bottleneck", detail: "Cannot parallelize supervision" }
    ]
  }'
  :solution='{
    items: [
      "3 parallel subagents: Security, Performance, Testing",
      "Each works in own context simultaneously",
      "Main agent receives 3 structured summaries"
    ],
    code: { language: "markdown", content: "Analyze auth module using 3 parallel subagents:\n1. Security: vulnerabilities, token handling\n2. Performance: N+1 queries, memory leaks  \n3. Testing: coverage gaps, edge cases\n\nSynthesize into prioritized action items." }
  }'
  :outcome='{
    items: [
      "All 3 finish in ~8 minutes (parallel)",
      "Independent analysis from each specialist",
      "Main context stays clean for synthesis"
    ],
    metrics: [
      { value: "2.75×", label: "faster" },
      { value: "6×", label: "token reduction" }
    ]
  }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Control Frontmatter Properties -->
<ThreeColumnCardSlide
  :partNumber="1"
  pillIcon="⚙️"
  pillLabel="Subagents: Advanced Controls"
  title="Control Frontmatter Properties"
  :columns='[
    { icon: "🔒", title: "user-invokable: false", description: "Hide from agent dropdown—internal helper only; available as subagent but not user-selectable" },
    { icon: "🚫", title: "disable-model-invocation: true", description: "Prevent AI from spawning this as subagent—use for root orchestrators only" },
    { icon: "📋", title: "agents: [&#39;Red&#39;, &#39;Green&#39;]", description: "Restrict which subagents this agent can spawn—enforce valid delegation paths" }
  ]'
  :insight='{ icon: "💡", text: "Custom agents as subagents: security-focused analysis, strict TDD enforcement—specialized behavior via agent definitions." }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>



---

<!-- SLIDE: Part 2 — Agent Teams -->

<SectionOpenerSlide
  :partNumber="2"
  title="Agent Teams"
  subtitle="Organized specialists via the coordinator-delegate pattern"
  :cards='[
    { icon: "🎯", title: "Role Specialization", blurb: "Right agent for the right task" },
    { icon: "🧠", title: "Persistent Memory", blurb: "Knowledge compounds across sessions" },
    { icon: "⚙️", title: "Tool Enforcement", blurb: "Reviewers can&apos;t edit, by design" },
  ]'
  :terminal='{ context: "10-minute setup via Squad", detail: "persistent team that lives in your repo" }'
/>

---

<!-- SLIDE: The Coordinator Pattern -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">👥 Agent Teams: The Coordinator Pattern</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Separates "What to Do" from "How to Do It"</div>
<div class="text-xs text-white/50">The coordinator routes work, spawns specialists, enforces protocols — never implements directly</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="mb-3 p-3 bg-blue-900/40 border border-blue-500/40 rounded-xl text-center">
<div class="text-blue-200 font-bold text-sm mb-1">🎯 COORDINATOR</div>
<div class="flex justify-center gap-6 text-xs text-gray-400">
<span>Routes work → specialist subagents</span>
<span>·</span>
<span>Enforces reviewer protocol</span>
<span>·</span>
<span>Selects models per task</span>
<span>·</span>
<span class="text-yellow-300 font-semibold">NEVER implements directly</span>
</div>
</div>
<div class="grid grid-cols-3 gap-3 mb-3">
<div class="p-3 bg-green-900/30 border border-green-500/30 rounded-lg text-center">
<div class="font-bold text-green-300 text-xs mb-1">LEAD</div>
<div class="text-xs text-gray-400 space-y-0.5"><div>Scope · Review · Decide</div></div>
<div class="text-cyan-300 text-xs mt-1 opacity-70">Own context</div>
</div>
<div class="p-3 bg-green-900/30 border border-green-500/30 rounded-lg text-center">
<div class="font-bold text-green-300 text-xs mb-1">DEV(S)</div>
<div class="text-xs text-gray-400 space-y-0.5"><div>Build · Code · Debug</div></div>
<div class="text-cyan-300 text-xs mt-1 opacity-70">Own context</div>
</div>
<div class="p-3 bg-green-900/30 border border-green-500/30 rounded-lg text-center">
<div class="font-bold text-green-300 text-xs mb-1">TESTER</div>
<div class="text-xs text-gray-400 space-y-0.5"><div>Test · QA · Edge cases</div></div>
<div class="text-cyan-300 text-xs mt-1 opacity-70">Own context</div>
</div>
</div>
<div class="mb-3 p-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-center">
<span class="text-purple-300 font-bold text-xs">🧠 SHARED MEMORY</span>
<span class="text-gray-400 text-xs ml-3">decisions.md + history.md</span>
</div>
<div class="grid grid-cols-5 gap-2 text-xs">
<div class="p-2 bg-blue-900/30 rounded border border-blue-500/30 text-center">
<div class="font-semibold text-blue-300">Research</div>
<div class="opacity-60">search, fetch · Read-only</div>
</div>
<div class="p-2 bg-indigo-900/30 rounded border border-indigo-500/30 text-center">
<div class="font-semibold text-indigo-300">Planning</div>
<div class="opacity-60">search, create · Docs only</div>
</div>
<div class="p-2 bg-purple-900/30 rounded border border-purple-500/30 text-center">
<div class="font-semibold text-purple-300">Implement</div>
<div class="opacity-60">edit, create · Full power</div>
</div>
<div class="p-2 bg-pink-900/30 rounded border border-pink-500/30 text-center">
<div class="font-semibold text-pink-300">Review</div>
<div class="opacity-60">search, lint · Can't modify</div>
</div>
<div class="p-2 bg-rose-900/30 rounded border border-rose-500/30 text-center">
<div class="font-semibold text-rose-300">Testing</div>
<div class="opacity-60">create, run · Test scope</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Squad: The Production Implementation -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="👥"
  pillLabel="Agent Teams: Squad"
  title="Persistent AI Development Team via GitHub Copilot"
  :left='{
    header: "Form Your Team",
    icon: "📋",
    items: [
      { title: "Reviewer Protocol", detail: "On reject → different agent revises, not the same one" },
      { title: "Ceremonies", detail: "Design Review and Retrospective built in" }
    ],
    code: { language: "text", content: "Squad proposes:\n🏗️ Ripley   — Lead\n⚛️ Dallas   — Frontend Dev\n🔧 Kane     — Backend Dev\n🧪 Lambert  — Tester\n📋 Scribe   — Memory (silent)" }
  }'
  :right='{
    header: "Routing in Action",
    icon: "💬",
    items: [
      { title: "Ralph Monitor", detail: "Autonomous backlog processing — runs without supervision" },
      { title: "Model Routing", detail: "Docs → Haiku, Code → Sonnet — cost-aware dispatch" }
    ],
    code: { language: "text", content: "> Ripley, fix error handling\n↳ direct to lead\n\n> Team, build the login page\n↳ fans out to all in parallel" }
  }'
  :insight='{ icon: "⚡", text: "Install in one command: npx github:bradygaster/squad" }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>


---

<!-- SLIDE: Squad: Memory & Persistence -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">👥 Agent Teams: Squad Memory</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Knowledge Compounds with Every Session</div>
<div class="text-xs text-white/50">Each agent reads its own history — shared decisions available to all</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-3">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2">📂 Memory Layers</div>
<table class="w-full text-xs">
<thead class="text-left border-b border-purple-500/30">
<tr>
<th class="pb-1 font-semibold text-purple-300">File</th>
<th class="pb-1 font-semibold text-purple-300">Contents</th>
<th class="pb-1 font-semibold text-purple-300">Scope</th>
</tr>
</thead>
<tbody class="text-gray-300">
<tr><td class="py-1">charter.md</td><td>Identity, expertise</td><td class="text-cyan-400">That agent</td></tr>
<tr><td class="py-1">history.md</td><td>Project learnings</td><td class="text-cyan-400">That agent</td></tr>
<tr><td class="py-1">decisions.md</td><td>Team decisions</td><td class="text-green-400">All agents</td></tr>
<tr><td class="py-1">skills/</td><td>Reusable patterns</td><td class="text-green-400">All agents</td></tr>
</tbody>
</table>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl border border-green-500/30">
<div class="font-bold text-green-300 mb-2">📈 Memory Grows Over Time</div>
<div class="space-y-1.5 text-xs">
<div class="p-2 bg-green-900/20 rounded border border-green-500/20">
<span class="font-semibold text-green-400">🌱 First session:</span> <span class="opacity-80">Project description, tech stack</span>
</div>
<div class="p-2 bg-blue-900/20 rounded border border-blue-500/20">
<span class="font-semibold text-blue-400">🌿 After a few sessions:</span> <span class="opacity-80">Conventions, component patterns</span>
</div>
<div class="p-2 bg-purple-900/20 rounded border border-purple-500/20">
<span class="font-semibold text-purple-400">🌳 Mature project:</span> <span class="opacity-80">Full architecture, tech debt map</span>
</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-xs"><span class="font-bold text-blue-300">🎯 Key Insight:</span> <span class="text-white/80">Memory compounds from session to session — each agent learns from its own work and shared team decisions become institutional knowledge</span></div>
</div>
</div>
</div>

---

<!-- SLIDE: When to Use Agent Teams -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-10 pt-1">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">👥 Agent Teams: When to Use</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-3">
<div>
<div class="text-sm font-bold text-white mb-1.5">The Unified Decision Tree</div>
<div class="font-mono text-xs bg-gray-950/80 border border-blue-500/30 rounded-lg p-2.5">
<div class="text-blue-400 font-bold mb-1">Q: What's the nature of your task?</div>
<div class="text-gray-300 ml-2 space-y-0.5">
<div>├─ Simple, single-phase (&lt;200 LOC)</div>
<div class="ml-3 text-gray-400">→ Plan Mode (built-in)</div>
<div>├─ Multi-phase, one role</div>
<div class="ml-3 text-gray-400">→ Single subagent per phase</div>
<div>├─ <span class="text-blue-300 font-bold">Specialized roles needed</span></div>
<div class="ml-3 text-blue-300">→ 👉 Agent Teams + Squad</div>
<div>├─ Autonomous, no supervision</div>
<div class="ml-3 text-gray-400">→ Background Agents + Worktrees</div>
<div>├─ Architecture under uncertainty</div>
<div class="ml-3 text-gray-400">→ AgentCouncil adversarial</div>
<div>└─ At scale: teams + CI/CD</div>
<div class="ml-3 text-gray-500">→ See: Agentic SDLC</div>
</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-white mb-1.5">Comparison Matrix</div>
<table class="w-full text-xs border-collapse">
<thead class="border-b border-blue-500/30">
<tr class="text-left">
<th class="pb-1 font-semibold text-blue-300">Aspect</th>
<th class="pb-1 font-semibold text-blue-300">Plan Mode</th>
<th class="pb-1 font-semibold text-blue-300">Subagents</th>
<th class="pb-1 font-semibold text-blue-300">Agent Teams</th>
</tr>
</thead>
<tbody class="text-gray-300">
<tr class="border-b border-blue-500/10">
<td class="py-0.5 text-gray-400">Best For</td>
<td>Simple</td>
<td>Multi-phase</td>
<td class="text-blue-300 font-semibold">Role specialization</td>
</tr>
<tr class="border-b border-blue-500/10">
<td class="py-0.5 text-gray-400">Setup</td>
<td>0</td>
<td>0</td>
<td class="text-blue-300 font-semibold">10 min (Squad)</td>
</tr>
<tr class="border-b border-blue-500/10">
<td class="py-0.5 text-gray-400">Supervision</td>
<td>Interactive</td>
<td>Summary</td>
<td class="text-blue-300 font-semibold">Checkpoint gates</td>
</tr>
<tr class="border-b border-blue-500/10">
<td class="py-0.5 text-gray-400">Throughput</td>
<td>1x</td>
<td>2–3x</td>
<td class="text-blue-300 font-semibold">3–5x</td>
</tr>
<tr>
<td class="py-0.5 text-gray-400">Memory</td>
<td>Session</td>
<td>Session</td>
<td class="text-blue-300 font-semibold">Persistent</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-xs"><span class="font-bold text-blue-300">🎯 Key Insight:</span> <span class="text-white/80">Start simple with Plan Mode — add complexity only when the task demands specialized roles or persistent memory</span></div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Autonomous Execution -->

<SectionOpenerSlide
  :partNumber="3"
  title="Autonomous Execution"
  subtitle="Background agents + Git worktrees for supervision-free execution"
  :cards='[
    { icon: "⏱️", title: "85 → 27 Active Minutes", blurb: "Shift from continuous to review-only" },
    { icon: "🔀", title: "Zero Conflicts", blurb: "Each agent in own worktree branch" },
    { icon: "🚀", title: "Parallel Execution", blurb: "3 tasks: 51 min vs. 255 min supervised" },
  ]'
  :terminal='{ context: "Built into VS Code 1.109+", detail: "no additional setup required" }'
/>

---

<!-- SLIDE: Git Worktree Isolation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-1">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Autonomous: Git Worktree Isolation</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-1">
<div class="text-lg font-bold text-white mb-0.5">Independent Working Directories, Same Repository</div>
<div class="text-xs text-white/50">Each background agent gets its own worktree — its own branch, its own filesystem space</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-2 mb-2">
<div class="flex flex-col gap-1.5">
<div class="font-mono text-xs bg-gray-950/80 border border-indigo-500/30 rounded-lg p-2">
<div class="text-indigo-400 font-bold mb-1">repo/ (shared .git/)</div>
<div class="text-gray-300 space-y-0.5">
<div>├── main/src/main.js</div>
<div class="ml-3 text-gray-500">↑ your active work (untouched)</div>
<div>├── worktree-agent-1/src/main.js</div>
<div class="ml-3 text-gray-500">↑ Agent A workspace</div>
<div>└── worktree-agent-2/src/main.js</div>
<div class="ml-3 text-gray-500">↑ Agent B workspace</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-0.5">🔄 Lifecycle</div>
<div class="text-xs opacity-90 space-y-0.5">
<div><span class="text-green-400">1.</span> VS Code creates worktree + branch</div>
<div><span class="text-blue-400">2.</span> Agent executes in isolated worktree</div>
<div><span class="text-purple-400">3.</span> Your main/ workspace never touched</div>
<div><span class="text-cyan-400">4.</span> Review branch → merge or remove</div>
</div>
</div>
</div>
<div class="flex flex-col gap-1.5">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-0.5">⚡ Key Benefits</div>
<div class="text-xs opacity-90 space-y-0.5">
<div>• Agent A and Agent B can both edit main.js — zero conflicts</div>
<div>• Failed experiments: 5 min to remove vs. 90 min reverting</div>
<div>• Breaking changes isolated from active work</div>
<div>• Instant rollback: just remove worktree</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="font-bold text-pink-300 mb-0.5">📊 vs. Supervised Isolation</div>
<table class="w-full text-xs">
<thead class="border-b border-pink-500/30">
<tr class="text-left">
<th class="pb-1 text-pink-300">Scenario</th>
<th class="pb-1 text-pink-300">Shared</th>
<th class="pb-1 text-pink-300">Worktree</th>
</tr>
</thead>
<tbody class="text-gray-300">
<tr><td class="py-0.5">Failed experiment</td><td class="text-amber-300">90 min</td><td class="text-green-300">5 min</td></tr>
<tr><td class="py-0.5">Merge conflicts</td><td class="text-red-300">High</td><td class="text-green-300">Zero</td></tr>
<tr><td class="py-0.5">Rollback</td><td class="text-amber-300">Complex</td><td class="text-green-300">Instant</td></tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-xs"><span class="font-bold text-indigo-300">🎯 Key Insight:</span> <span class="text-white/80">Zero-risk experimentation — each agent works independently in its own worktree, your main workspace stays untouched</span></div>
</div>
</div>
</div>

---

<!-- SLIDE: The Hand-Off Workflow -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Autonomous: The Hand-Off Workflow</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Three Phases Replace Continuous Supervision</div>
<div class="text-xs text-white/50">Plan → Hand-off → Review: 68% reduction in active time (85 min → 27 min)</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl border border-amber-500/30">
<div class="font-bold text-amber-300 mb-1 text-xs flex items-center gap-2">⚠️ BEFORE: Supervised Execution</div>
<div class="font-mono text-xs bg-gray-950/60 border border-amber-500/20 rounded p-2 flex items-center gap-2 flex-wrap">
<span class="text-blue-400">Plan (15 min)</span>
<span class="text-gray-500">→</span>
<span class="text-amber-400">Implement (60 min, supervised)</span>
<span class="text-gray-500">→</span>
<span class="text-green-400">Review (10 min)</span>
<span class="text-amber-300 font-bold ml-auto">Active: 85 min</span>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="font-bold text-green-300 mb-1 text-xs flex items-center gap-2">✅ AFTER: Background Agent (1 task)</div>
<div class="font-mono text-xs bg-gray-950/60 border border-green-500/20 rounded p-2">
<div class="flex items-center gap-2 flex-wrap mb-1">
<span class="text-blue-400">Plan (15 min)</span>
<span class="text-gray-500">→</span>
<span class="text-purple-400">Hand-off (2 min)</span>
<span class="text-gray-500">→</span>
<span class="text-green-400">Review (10 min)</span>
<span class="text-green-300 font-bold ml-auto">Active: 27 min</span>
</div>
<div class="text-xs text-gray-500">Agent executes in worktree while you do other work</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1 text-xs">🚀 3 PARALLEL TASKS (AFTER)</div>
<div class="font-mono text-xs bg-gray-950/60 border border-indigo-500/20 rounded p-2 flex items-center gap-2 flex-wrap">
<span class="text-gray-300">Plan all 3 (15 min) → Hand-off (6 min) → Review all 3 (30 min)</span>
<span class="text-indigo-300 font-bold ml-auto">Active: 51 min vs. 255 min serial</span>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 flex items-center gap-6">
<div class="font-bold text-cyan-300">💡 The Math</div>
<div class="text-xs text-gray-300 flex-1">10 tasks/week supervised = 850 min active &nbsp;·&nbsp; 10 tasks/week with background agents = 270 min active</div>
<div class="text-xl font-bold text-cyan-300 whitespace-nowrap">9.7 hrs/week reclaimed</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Autonomous Success Criteria -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Autonomous: Success Criteria</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Clear Hand-Offs Enable Autonomous Execution</div>
<div class="text-xs text-white/50">Vague hand-offs produce mid-task clarifications — defeating the purpose entirely</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-3">
<div class="p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="font-bold text-green-300 mb-2 text-xs">✅ What Agents Need</div>
<div class="text-xs opacity-90 space-y-1.5">
<div>
<div class="font-semibold text-green-400 mb-0.5">Explicit Acceptance Criteria</div>
<div class="opacity-80">"Generate tests achieving 80%+ coverage for auth module"</div>
</div>
<div>
<div class="font-semibold text-green-400 mb-0.5">Constraints &amp; Non-Goals</div>
<div class="opacity-80">"Do not modify database schema or change API contracts"</div>
</div>
<div>
<div class="font-semibold text-green-400 mb-0.5">Links to Context</div>
<div class="opacity-80">Existing patterns, documentation, historical decisions</div>
</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1.5 text-xs">🎯 Three Parallel Patterns</div>
<div class="text-xs space-y-1">
<div class="flex gap-2"><span class="text-purple-300 font-semibold shrink-0">1. Independent Features</span><span class="opacity-70">A, B, C → worktree-a, -b, -c</span></div>
<div class="flex gap-2"><span class="text-pink-300 font-semibold shrink-0">2. Experimental Variants</span><span class="opacity-70">Redis vs. LRU vs. hybrid — benchmarks decide</span></div>
<div class="flex gap-2"><span class="text-rose-300 font-semibold shrink-0">3. Specialized Roles</span><span class="opacity-70">Agent A refactors, B tests, C updates docs</span></div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1 text-xs">⚡ CLI Fan-Out: /fleet</div>
<div class="font-mono text-xs bg-gray-950/60 border border-purple-500/20 rounded p-2 mb-1">
/fleet implement Feature A in auth/, Feature B in payments/
</div>
<div class="text-xs text-gray-400">Main agent orchestrates; subtasks run in parallel with own contexts</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-xs"><span class="font-bold text-indigo-300">🎯 Key Insight:</span> <span class="text-white/80">Specificity in hand-offs directly determines autonomous success rate — vague instructions produce mid-task clarifications that defeat the purpose</span></div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Multi-Model Deliberation -->

<SectionOpenerSlide
  :partNumber="4"
  title="Multi-Model Deliberation"
  subtitle="When different models think differently — AgentCouncil"
  :cards='[
    { icon: "🤝", title: "Collaborative Mode", blurb: "Build on each other&apos;s ideas" },
    { icon: "🗡️", title: "Adversarial Mode", blurb: "Attack positions to stress-test" },
    { icon: "🎭", title: "Model Diversity", blurb: "Claude + GPT + Gemini" },
  ]'
  :terminal='{ context: "Copilot CLI skill — no build required", detail: "drop-in: council: your question" }'
/>

---

<!-- SLIDE: The Ensemble -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎭 Multi-Model: The Ensemble</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Model Diversity vs. Role Specialization</div>
<div class="text-xs text-white/50">Three model families tackle the same problem — then interact to surface what no single model produces alone</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30 mb-3">
<div class="font-bold text-purple-300 mb-1 text-xs">The Core Insight</div>
<div class="text-xs opacity-90 italic">
Different models have different blind spots. Claude is good at nuance but may overcomplicate. GPT might miss edge cases Claude catches. Gemini has strong factual grounding but different reasoning patterns.
</div>
</div>
<table class="w-full text-xs border-collapse mb-3">
<thead class="border-b border-purple-500/30">
<tr class="text-left">
<th class="pb-1.5 font-semibold text-purple-300">Agent</th>
<th class="pb-1.5 font-semibold text-purple-300">Collaborative Role</th>
<th class="pb-1.5 font-semibold text-purple-300">Adversarial Role</th>
<th class="pb-1.5 font-semibold text-purple-300">Default Model</th>
</tr>
</thead>
<tbody class="text-gray-300">
<tr class="border-b border-purple-500/10">
<td class="py-1.5 font-semibold text-cyan-400">Alpha</td>
<td>Deep Explorer</td>
<td>Drafter &amp; Red Teamer</td>
<td class="font-mono text-xs">claude-opus-4.6</td>
</tr>
<tr class="border-b border-purple-500/10">
<td class="py-1.5 font-semibold text-blue-400">Beta</td>
<td>Practical Builder</td>
<td>Fact-Checker &amp; Validator</td>
<td class="font-mono text-xs">gpt-5.4</td>
</tr>
<tr class="border-b border-purple-500/10">
<td class="py-1.5 font-semibold text-green-400">Gamma</td>
<td>Elegant Minimalist</td>
<td>Optimizer &amp; Devil's Advocate</td>
<td class="font-mono text-xs">gemini-3.1-pro</td>
</tr>
<tr>
<td class="py-1.5 font-semibold text-purple-400">Orchestrator</td>
<td>Author (synthesis)</td>
<td>Judge (verdict)</td>
<td class="font-mono text-xs">claude-opus-4.6</td>
</tr>
</tbody>
</table>
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30 flex items-center gap-4">
<div class="font-bold text-pink-300 text-xs">⚙️ All Models Configurable</div>
<div class="text-xs opacity-90">Swap any agent to match your access or preference — the deliberation pattern works regardless of specific model choices</div>
</div>
</div>
</div>

---

<!-- SLIDE: Two Modes -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="🎭"
  pillLabel="Multi-Model: Two Modes"
  title="AgentCouncil Runs in Two Distinct Modes"
  :left='{
    header: "Collaborative (Default)",
    icon: "🤝",
    items: [
      { title: "Phase 1 (parallel)", detail: "Alpha, Beta, Gamma each draft independently" },
      { title: "Phase 2 (parallel)", detail: "Each reads the others draft and produces an improved version" },
      { title: "Phase 3", detail: "Orchestrator synthesizes all three drafts" },
      { title: "7 model calls total", detail: "~2 sequential subagent calls; rest run in parallel" },
      { title: "Best for", detail: "Brainstorming · design exploration · research synthesis" }
    ]
  }'
  :right='{
    header: "Adversarial",
    icon: "🗡️",
    items: [
      { title: "Phase 1 (parallel)", detail: "Alpha, Beta, Gamma tackle the question independently" },
      { title: "Phase 2", detail: "Orchestrator identifies the strongest position" },
      { title: "Phase 3 (parallel)", detail: "Other agents attempt to tear it apart" },
      { title: "Phase 4", detail: "Verdict: SURVIVED / MODIFIED / OVERTURNED" },
      { title: "6 model calls total", detail: "Best for architecture decisions, security reviews, tech comparisons" }
    ]
  }'
  :insight='{ icon: "🎯", text: "Mode auto-detected from prompt verbs: council:/brainstorm: → collaborative; debate:/stress-test:/vs → adversarial." }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: When to Use AgentCouncil vs. Squad -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎭 Multi-Model: When to Use What</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">AgentCouncil vs. Squad — Deliberation vs. Execution</div>
<div class="text-xs text-white/50">Use AgentCouncil to validate decisions, Squad to implement them</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<table class="w-full text-xs border-collapse">
<thead class="border-b border-purple-500/30">
<tr class="text-left">
<th class="pb-1.5 font-semibold text-purple-300">Situation</th>
<th class="pb-1.5 font-semibold text-purple-300">Use</th>
<th class="pb-1.5 font-semibold text-purple-300">Why</th>
</tr>
</thead>
<tbody class="text-gray-300">
<tr class="border-b border-purple-500/10">
<td class="py-2">"What's the right architecture?"</td>
<td class="text-red-300 font-semibold">AgentCouncil 🗡️</td>
<td>Stress-test across model families before committing</td>
</tr>
<tr class="border-b border-purple-500/10">
<td class="py-2">"Brainstorm caching strategies"</td>
<td class="text-cyan-300 font-semibold">AgentCouncil 🤝</td>
<td>Diverse perspectives, novel synthesis</td>
</tr>
<tr class="border-b border-purple-500/10">
<td class="py-2">"Build the authentication system"</td>
<td class="text-blue-300 font-semibold">Squad</td>
<td>Role specialists execute with persistent memory</td>
</tr>
<tr class="border-b border-purple-500/10">
<td class="py-2">"Review this PR for security issues"</td>
<td class="text-red-300 font-semibold">AgentCouncil 🗡️</td>
<td>Multiple models attack implementation independently</td>
</tr>
<tr>
<td class="py-2">"We agreed — now implement it"</td>
<td class="text-blue-300 font-semibold">Squad</td>
<td>Coordinator delegates, tester runs in parallel</td>
</tr>
</tbody>
</table>
</div>
</div>

---

<!-- SLIDE: Combining AgentCouncil + Squad -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎭 Multi-Model: Combining Both</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Deliberation → Execution</div>
<div class="text-xs text-white/50">Use AgentCouncil to decide, Squad to implement — decisions flow automatically via decisions.md</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-3">
<div class="p-3 bg-red-900/20 rounded-xl border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">Step 1: Deliberate with AgentCouncil</div>
<div class="text-xs opacity-80 mb-2">Stress-test assumptions, validate approach, choose among options</div>
<div class="font-mono text-xs bg-gray-950/60 border border-red-500/20 rounded p-2">
debate: WebSockets vs SSE for 10K users
</div>
</div>
<div class="p-3 bg-blue-900/20 rounded-xl border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">Step 2: Execute with Squad</div>
<div class="text-xs opacity-80 mb-2">Hand the validated decision to Squad — recorded in decisions.md for all agents</div>
<div class="font-mono text-xs bg-gray-950/60 border border-blue-500/20 rounded p-2">
Team, implement SSE + message queue<br/>per the validated design
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-xl border border-pink-500/30">
<div class="font-bold text-pink-300 mb-1.5">⚡ Installing AgentCouncil</div>
<div class="font-mono text-xs bg-gray-950/60 border border-pink-500/20 rounded p-2 space-y-0.5">
<div class="text-gray-300">git clone https://github.com/Sentry01/AgentCouncil.git</div>
<div class="text-gray-400"># As a Copilot CLI skill</div>
<div class="text-gray-300">cp skills/agent-council/skill.md ~/.copilot/skills/</div>
<div class="text-gray-400"># As a standalone agent</div>
<div class="text-gray-300">cp agents/AgentCouncil.agent.md ~/.copilot/agents/</div>
</div>
<div class="text-xs opacity-60 mt-1.5">No dependencies. No build. Just markdown files.</div>
</div>
</div>
</div>


---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="Breaking the Single-Agent Ceiling"
:leftItems='["Context ceiling: 300–500 LOC", "Pollution: 50–80%", "Speedup: 85 min", "Single-threaded reasoning"]'
:rightItems='["Unlimited context across agents", "Pollution: eliminated", "Speedup: 27 min", "Parallel review: Security, Performance, Testing"]'
:metrics='[
  { value: "300–500 LOC → ∞", detail: "Context ceiling" },
  { value: "50–80% → 0%", detail: "Pollution eliminated" },
  { value: "85 min → 27 min", detail: "Speedup" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Use implicit subagent invocation for research tasks", "Try parallel subagent review: Security, Performance, and Testing", "Hand off to background agent via VS Code session picker"]'
  :thisWeek='["Install Squad: npx github:bradygaster/squad", "Run 3-5 tasks with the Team fan-out pattern", "Check .ai-team/decisions.md after sessions", "Install AgentCouncil: try adversarial council on a real decision"]'
  :thisMonth='["Enable GitHub Issues integration with squad label triage", "Activate Ralph (work monitor) for continuous backlog processing", "Combine: AgentCouncil for decisions → Squad for implementation", "Measure: implementation time, rework, test coverage, context switching"]'
  footer="The right agent for the right task, with the right isolation, at the right time — subagents are the building block, teams organize them, background agents make them autonomous, and multi-model deliberation validates decisions before execution."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Core Mechanism", color: "cyan", items: [
        { href: "https://code.visualstudio.com/docs/copilot/agents/subagents", label: "VS Code Subagents", description: "Context isolation, parallel execution" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom Agents in VS Code", description: "YAML frontmatter, tools, models" },
        { href: "https://code.visualstudio.com/updates/v1_109#_agent-orchestration", label: "VS Code 1.109 Agent Orchestration", description: "Invocation controls, parallel support" },
        { href: "https://code.visualstudio.com/docs/copilot/agents/background-agents", label: "Background Agents", description: "Hand-off workflow, worktree integration" },
        { href: "https://git-scm.com/docs/git-worktree", label: "Git Worktrees", description: "Technical reference, lifecycle" },
        { href: "https://code.visualstudio.com/updates/v1_109#_agent-session-management", label: "VS Code 1.109 Session Management", description: "Session picker, multi-agent monitoring" }
    ] },
    { title: "Production Implementations", color: "purple", items: [
        { href: "https://github.com/bradygaster/squad", label: "Squad Repository", description: "Persistent memory, parallel execution, GitHub Issues" },
        { href: "https://github.com/bradygaster/squad/blob/main/docs/guide.md", label: "Squad Product Guide", description: "Comprehensive usage guide" },
        { href: "https://github.com/bradygaster/squad/blob/main/docs/features/ralph.md", label: "Ralph Work Monitor", description: "Autonomous backlog processing" },
        { href: "https://github.com/Sentry01/AgentCouncil", label: "AgentCouncil Repository", description: "Multi-model deliberation for Copilot CLI" },
        { href: "https://github.com/bradygaster/squad/blob/main/docs/features/ralph.md", label: "Agentic SDLC", description: "Repo/CI/CD patterns for agent volume at scale" },
        { href: "https://code.visualstudio.com/docs/copilot/agents", label: "Agentic Workflows", description: "GitHub-native automation patterns" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom Agents Workshop", description: "Hands-on creation and testing" },
        { href: "https://code.visualstudio.com/docs/copilot/prompt-crafting", label: "Copilot Primitives", description: "Instructions, prompts, skills, agents" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="Building Agent Systems: Subagents, Teams, and Autonomous Execution"
:cards="[
  {
    icon: '🧱',
    value: '4',
    detail: 'Patterns Covered',
    subdetail: 'Subagents → Teams → Autonomous → Multi-Model',
  },
  {
    icon: '⚡',
    value: '10 min',
    detail: 'To First Agent Team',
    subdetail: 'Squad setup via npx',
  },
  {
    icon: '🚀',
    value: '68%',
    detail: 'Active Time Reduction',
    subdetail: '85 min → 27 min with background agents',
  },
]"
prompt="Ready to compose your multi-agent systems"
/>
