---
theme: default
class: text-center
highlighter: shiki
lineNumbers: falseok -
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
updated: 2026-04-13
---

<script setup>
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
import CoreQuestionSlide from './components/CoreQuestionSlide.vue'
import TocSlide from './components/TocSlide.vue'
import WhatYouCanDoTodaySlide from './components/WhatYouCanDoTodaySlide.vue'
import SectionOpenerSlide from './components/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/BeforeAfterSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="Agent Teams"
subtitle="Subagents, Teams, and Autonomous Execution"
tagline="Mechanisms for composing multi-agent AI systems that handle complex tasks"
meta="Tech Talk · 60 minutes "
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="What mechanisms make multi-agent AI work — and how do I compose them into systems?"
subtext="Systems that handle complex tasks, run autonomously, and improve over time."
highlight="Beyond single-agent limits to coordinated AI teams."
:cards='[
  { icon: "🏗️", title: "Platform Engineers Building Systems", description: "Orchestrating multiple AI agents across complex, long-running tasks" },
  { icon: "👔", title: "Engineering Managers Scaling Output", description: "Parallelizing work across background agents and git worktrees" },
  { icon: "🔬", title: "Staff Engineers Tackling Big Refactors", description: "Decomposing 5,000+ LOC challenges into isolated parallel workstreams" },
  { title: "Single Agent Ceiling", description: "Context windows hit 300-500 LOC limits — teams and worktrees break through" },
  { title: "Supervision Bottleneck", description: "Background agents and squads free you from watching every step" },
  { title: "Workspace Collisions", description: "Git worktrees eliminate merge conflicts across parallel agent work" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🧱", title: "Subagents: The Building Block", subtitle: "Isolated context windows for delegation", blurb: "The primitive behind all multi-agent patterns", slide: 4 },
    { icon: "👥", title: "Agent Teams", subtitle: "Organized specialists via Squad", blurb: "Role-based coordination with persistent memory", slide: 9 },
    { icon: "🚀", title: "Autonomous Execution", subtitle: "Background agents + worktrees", blurb: "85 active min → 27: supervision-free execution", slide: 13 },
    { icon: "🎭", title: "Multi-Model Deliberation", subtitle: "AgentCouncil collaborative & adversarial", blurb: "Claude + GPT + Gemini debate to stress-test answers", slide: 17 },
  ]'
/>
---

<!-- SLIDE: Part 1 — Subagents: The Building Block -->

<SectionOpenerSlide
  :partNumber="1"
  title="Subagents: The Building Block"
  subtitle="The primitive mechanism that makes all multi-agent patterns possible"
  :cards='[
    { icon: "🔒", title: "Context Isolation", blurb: "Each subagent runs in its own window" },
    { icon: "⚡", title: "Parallel Execution", blurb: "3 research subagents = 3x throughput" },
    { icon: "📊", title: "Summary-Only Returns", blurb: "500 tokens back vs. 20K exploration" },
  ]'
  :terminal='{ context: "Research + dead-ends stay isolated", detail: "main context stays clean" }'
/>

---

<!-- SLIDE: Core Mechanism -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧱 Subagents: Core Mechanism</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Isolated Context Windows</div>
<div class="text-xs text-white/50">Each subagent runs in its own 200K context — only summaries return</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="font-mono text-xs bg-gray-950/80 border border-cyan-500/30 rounded-lg p-3 mb-3">
<div class="text-cyan-400 font-bold mb-1">MAIN AGENT (coordinates)</div>
<div class="ml-2 text-gray-300">
<div class="mb-1">├── <span class="text-green-400">SubAgent A: research auth patterns</span>  ← own 200K context</div>
<div class="ml-4 text-gray-500">│   reads 30 files, explores 5 approaches  ← never pollutes main</div>
<div class="ml-4 mb-1 text-blue-300">│   returns: 500-token structured summary  ──→ main receives this only</div>
<div class="mb-1">├── <span class="text-green-400">SubAgent B: analyze test coverage</span>  ← own 200K context</div>
<div class="ml-4 text-gray-500">│   runs coverage tools, finds gaps  ← independent execution</div>
<div class="ml-4 mb-1 text-blue-300">│   returns: 300-token findings  ──→ main receives this only</div>
<div>└── <span class="text-green-400">SubAgent C: security audit</span>  ← own 200K context (parallel)</div>
<div class="ml-4 text-gray-500">    checks OWASP patterns  ← no shared state</div>
<div class="ml-4 text-blue-300">    returns: 400-token risk report  ──→ main receives this only</div>
</div>
</div>
<div class="grid grid-cols-2 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">✅ Key Characteristics</div>
<div class="text-xs opacity-90 space-y-0.5">
<div>• Own context window per subagent</div>
<div>• Multiple run simultaneously when independent</div>
<div>• Only final result passes back (100-500 tokens)</div>
<div>• Inherit main session's agent by default</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">📊 Impact</div>
<div class="text-xs opacity-90 space-y-0.5">
<div>• 4-6x token reduction from summary returns</div>
<div>• 2.75x faster with 3 parallel subagents</div>
<div>• 30-40% quality improvement from isolation</div>
<div>• Research never pollutes implementation</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Two Invocation Patterns -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧱 Two Invocation Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6">
<div class="flex flex-col">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/40">
<div class="text-xl mb-2">💬</div>
<div class="font-bold text-cyan-300 text-lg mb-2">Pattern 1: Implicit (Chat Hints)</div>
<div class="text-sm opacity-90 mb-3">Just describe the delegation in natural language</div>
<div class="font-mono text-xs bg-gray-950/60 border border-cyan-500/20 rounded p-3 mb-3">
<div class="text-gray-300">Run a subagent to research OAuth2 implementation patterns in Node.js, focusing on token storage best practices and refresh rotation strategies. Return a structured summary with: recommended libraries, tradeoffs, and risks.</div>
</div>
<div class="text-xs opacity-80">
<div class="font-semibold text-cyan-400 mb-1">✅ Best For</div>
<div>• Exploratory research</div>
<div>• Ad-hoc delegation</div>
<div>• Quick investigative subtasks</div>
</div>
</div>
</div>

<div class="flex flex-col">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/40">
<div class="text-xl mb-2">📄</div>
<div class="font-bold text-blue-300 text-lg mb-2">Pattern 2: Explicit (Prompt Files)</div>
<div class="text-sm opacity-90 mb-3">Define multi-phase workflows in .md files</div>
<div class="font-mono text-xs bg-gray-950/60 border border-blue-500/20 rounded p-3 mb-3">
<div class="text-gray-400">---</div>
<div class="text-gray-300">name: feature-research</div>
<div class="text-gray-300">tools: ['agent','read','search']</div>
<div class="text-gray-400">---</div>
<div class="text-gray-300 mt-1">## Phase 1: Codebase Research</div>
<div class="text-gray-300">## Phase 2: Industry Practices</div>
<div class="text-gray-300">## Phase 3: Implementation</div>
</div>
<div class="text-xs opacity-80">
<div class="font-semibold text-blue-400 mb-1">✅ Best For</div>
<div>• Reproducible workflows</div>
<div>• Version-controlled procedures</div>
<div>• Team-wide consistency</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Parallel Subagents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-10 pt-1">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧱 Parallel Subagents</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Independent Tasks Run Simultaneously</div>
<div class="text-xs text-white/50">2.75x faster with isolated, independent analysis from each agent</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 mb-3">
<div class="font-mono text-sm text-cyan-300 mb-2">Example Prompt:</div>
<div class="text-sm opacity-90">
Analyze this authentication module using three parallel subagents:
</div>
<div class="grid grid-cols-3 gap-3 mt-2 text-xs">
<div class="p-2 bg-red-900/30 rounded border border-red-500/30">
<div class="font-semibold text-red-300">1. Security</div>
<div class="opacity-80">Vulnerabilities, auth bypass, token handling</div>
</div>
<div class="p-2 bg-amber-900/30 rounded border border-amber-500/30">
<div class="font-semibold text-amber-300">2. Performance</div>
<div class="opacity-80">N+1 queries, validation overhead, memory</div>
</div>
<div class="p-2 bg-green-900/30 rounded border border-green-500/30">
<div class="font-semibold text-green-300">3. Testing</div>
<div class="opacity-80">Coverage gaps, edge cases, test utilities</div>
</div>
</div>
<div class="text-sm opacity-90 mt-2">
Synthesize findings into prioritized action items with severity levels.
</div>
</div>
<div class="grid grid-cols-2 gap-4 text-sm">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-2">⏱️ Timing Comparison</div>
<div class="text-xs opacity-90 space-y-1.5">
<div class="flex justify-between"><span>Serial time:</span><span class="text-amber-300">~22 minutes</span></div>
<div class="flex justify-between"><span>Parallel time:</span><span class="text-green-300">~8 minutes</span></div>
<div class="flex justify-between font-bold"><span>Speedup:</span><span class="text-cyan-300">2.75x faster</span></div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-2">🎯 Custom Agents as Subagents</div>
<div class="text-xs opacity-90">
<div class="mb-1">Use specialized agents with restricted tools:</div>
<div class="font-mono bg-gray-950/60 p-2 rounded">
<div class="text-gray-400">user-invokable: false</div>
<div class="text-gray-300">↳ hidden, internal only</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Mental Model Shift -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Mental Model Shift</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
</div>
<div class="relative z-10 mb-4">
<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/40 max-w-3xl mx-auto">
<div class="text-lg font-bold text-cyan-300 italic">
"From 'one smart agent handles everything' to 'the right agent for the right task, with the right isolation, at the right time'"
</div>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6">
<div class="flex flex-col gap-3">
<div class="p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30">
<div class="font-bold text-green-300 mb-2 flex items-center gap-2">
<span>✅</span> <span>Move Toward</span>
</div>
<div class="text-xs opacity-90 space-y-2">
<div><span class="font-semibold">Delegation with Isolation</span> — Focused phases, clean coordinator context</div>
<div><span class="font-semibold">Summary-Only Returns</span> — 4-6x token reduction, cleaner decisions</div>
<div><span class="font-semibold">Tool Constraints = Role Enforcement</span> — System-enforced boundaries</div>
<div><span class="font-semibold">Hand-Off Over Supervision</span> — 65-82% reduction in active time</div>
<div><span class="font-semibold">Knowledge Compounding</span> — Agents write history, start smarter</div>
</div>
</div>
</div>

<div class="flex flex-col gap-3">
<div class="p-4 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30">
<div class="font-bold text-amber-300 mb-2 flex items-center gap-2">
<span>⚠️</span> <span>Move Away From</span>
</div>
<div class="text-xs opacity-90 space-y-2">
<div><span class="font-semibold">Everything in Main Context</span> — Context bloat prevents parallelization</div>
<div><span class="font-semibold">Supervised Execution</span> — Supervision is the bottleneck</div>
<div><span class="font-semibold">General Tools for All Roles</span> — Accidental cross-role work</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-red-900/30 to-rose-900/30 rounded-lg border border-red-500/30">
<div class="font-bold text-red-300 mb-2 flex items-center gap-2">
<span>🛑</span> <span>Move Against</span>
</div>
<div class="text-xs opacity-90 space-y-2">
<div><span class="font-semibold">Vague Subagent Tasks</span> — Unusable summaries, wasted overhead</div>
<div><span class="font-semibold">Sequencing Parallelizable Work</span> — 3x longer with no benefit</div>
<div><span class="font-semibold">Raw Returns from Subagents</span> — Explodes context, defeats isolation</div>
</div>
</div>
</div>
</div>
</div>
</div>

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
<div class="h-full flex flex-col justify-start relative overflow-hidden px-10 pt-1">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">👥 Agent Teams: Squad</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Persistent AI Development Team via GitHub Copilot</div>
<div class="text-xs text-white/50">Install in one command: npx github:bradygaster/squad</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-3">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1">📋 Form Your Team</div>
<div class="font-mono text-xs bg-gray-950/60 border border-blue-500/20 rounded p-2">
<div class="text-cyan-400 mb-1">Squad proposes:</div>
<div class="text-gray-300">🏗️ Ripley   — Lead</div>
<div class="text-gray-300">⚛️ Dallas   — Frontend Dev</div>
<div class="text-gray-300">🔧 Kane     — Backend Dev</div>
<div class="text-gray-300">🧪 Lambert  — Tester</div>
<div class="text-gray-300">📋 Scribe   — Memory (silent)</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1">💬 Routing in Action</div>
<div class="font-mono text-xs bg-gray-950/60 border border-indigo-500/20 rounded p-2 space-y-1.5">
<div class="text-green-400">&gt; Ripley, fix error handling</div>
<div class="text-gray-400">↳ direct to lead</div>
<div class="text-green-400 mt-1">&gt; Team, build the login page</div>
<div class="text-gray-400">↳ fans out to all in parallel</div>
</div>
</div>
</div>
<div class="grid grid-cols-4 gap-2 text-xs">
<div class="p-3 bg-blue-900/20 rounded border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-1">Reviewer Protocol</div>
<div class="opacity-80">On reject → different agent revises</div>
</div>
<div class="p-3 bg-indigo-900/20 rounded border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-1">Ralph Monitor</div>
<div class="opacity-80">Autonomous backlog processing</div>
</div>
<div class="p-3 bg-purple-900/20 rounded border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-1">Ceremonies</div>
<div class="opacity-80">Design Review, Retrospective</div>
</div>
<div class="p-3 bg-pink-900/20 rounded border border-pink-500/20">
<div class="font-semibold text-pink-300 mb-1">Model Routing</div>
<div class="opacity-80">Docs→Haiku, Code→Sonnet</div>
</div>
</div>
</div>
</div>


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
        { label: "Agentic SDLC", description: "Repo/CI/CD patterns for agent volume at scale" },
        { label: "Agentic Workflows", description: "GitHub-native automation patterns" },
        { label: "Custom Agents Workshop", description: "Hands-on creation and testing" },
        { label: "Copilot Primitives", description: "Instructions, prompts, skills, agents" }
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
