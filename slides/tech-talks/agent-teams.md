---
theme: default
class: text-center
highlighter: shiki
lineNumbers: falseok -
info: |
  ## Building Agent Systems: Subagents, Teams, and Autonomous Execution
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Building Agent Systems - Subagents, Teams, and Autonomous Execution
module: tech-talks/agent-teams
mdc: true
status: active
updated: 2026-04-13
---

<script setup>
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="Building Agent Systems"
subtitle="Subagents, Teams, and Autonomous Execution"
tagline="Mechanisms for composing multi-agent AI systems that handle complex tasks"
meta="Tech Talk · 60 minutes "
/>

---

<!-- SLIDE: The Core Question -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤔 The Core Question</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border-2 border-cyan-500/40 text-center">
<div class="text-3xl font-semibold mb-4">"What mechanisms make multi-agent AI work — and how do I compose them into systems?"</div>
<div class="text-xl opacity-90 mt-6">Systems that handle complex tasks, run autonomously, and improve over time. <span class="text-cyan-300 font-semibold">Beyond single-agent limits to coordinated AI teams.</span></div>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 rounded-lg border border-cyan-500/20 text-center">
<div class="text-cyan-300 font-bold">Single Agent Ceiling</div>
<div class="opacity-70 mt-1">300-500 LOC limit</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-lg border border-blue-500/20 text-center">
<div class="text-blue-300 font-bold">Supervision Bottleneck</div>
<div class="opacity-70 mt-1">Can't look away</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 rounded-lg border border-indigo-500/20 text-center">
<div class="text-indigo-300 font-bold">Workspace Collisions</div>
<div class="opacity-70 mt-1">Merge conflicts at scale</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Table of Contents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Table of Contents</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">🧱</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Subagents: The Building Block</div>
<div class="text-sm text-gray-300 mt-1">Isolated context windows for delegation</div>
<div class="text-xs text-cyan-400/70 mt-2">The primitive mechanism behind all multi-agent patterns</div>
</div>
</div>
<div @click="$nav.go(9)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">👥</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Agent Teams</div>
<div class="text-sm text-gray-300 mt-1">Organized specialists via Squad</div>
<div class="text-xs text-blue-400/70 mt-2">Role-based coordination with persistent memory</div>
</div>
</div>
<div @click="$nav.go(13)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">🚀</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Autonomous Execution</div>
<div class="text-sm text-gray-300 mt-1">Background agents + worktrees</div>
<div class="text-xs text-indigo-400/70 mt-2">85 active min → 27: supervision-free execution</div>
</div>
</div>
<div @click="$nav.go(17)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🎭</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Multi-Model Deliberation</div>
<div class="text-sm text-gray-300 mt-1">AgentCouncil collaborative & adversarial</div>
<div class="text-xs text-purple-400/70 mt-2">Claude + GPT + Gemini debate to stress-test answers</div>
</div>
</div>
</div>

<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Subagents: The Building Block -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Subagents: The Building Block</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">The primitive mechanism that makes all multi-agent patterns possible</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-cyan-300 font-semibold">Context Isolation</div>
<div class="text-xs opacity-70 mt-1">Each subagent runs in its own window</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-blue-300 font-semibold">Parallel Execution</div>
<div class="text-xs opacity-70 mt-1">3 research subagents = 3x throughput</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📊</div>
<div class="text-indigo-300 font-semibold">Summary-Only Returns</div>
<div class="text-xs opacity-70 mt-1">500 tokens back vs. 20K exploration</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Research + dead-ends stay isolated</span><br />
<span class="text-cyan-300 mt-1 block">↳ main context stays clean</span>
</div>
</div>
</div>

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

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Agent Teams</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Organized specialists via the coordinator-delegate pattern</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-blue-300 font-semibold">Role Specialization</div>
<div class="text-xs opacity-70 mt-1">Right agent for the right task</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🧠</div>
<div class="text-indigo-300 font-semibold">Persistent Memory</div>
<div class="text-xs opacity-70 mt-1">Knowledge compounds across sessions</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">⚙️</div>
<div class="text-purple-300 font-semibold">Tool Enforcement</div>
<div class="text-xs opacity-70 mt-1">Reviewers can't edit, by design</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">10-minute setup via Squad</span><br />
<span class="text-blue-300 mt-1 block">↳ persistent team that lives in your repo</span>
</div>
</div>
</div>

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
<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-3">📂 Memory Layers</div>
<table class="w-full text-xs">
<thead class="text-left border-b border-purple-500/30">
<tr>
<th class="pb-2 font-semibold text-purple-300">File</th>
<th class="pb-2 font-semibold text-purple-300">Contents</th>
<th class="pb-2 font-semibold text-purple-300">Scope</th>
</tr>
</thead>
<tbody class="text-gray-300">
<tr><td class="py-1.5">charter.md</td><td>Identity, expertise</td><td class="text-cyan-400">That agent</td></tr>
<tr><td class="py-1.5">history.md</td><td>Project learnings</td><td class="text-cyan-400">That agent</td></tr>
<tr><td class="py-1.5">decisions.md</td><td>Team decisions</td><td class="text-green-400">All agents</td></tr>
<tr><td class="py-1.5">skills/</td><td>Reusable patterns</td><td class="text-green-400">All agents</td></tr>
</tbody>
</table>
</div>
<div class="space-y-3">
<div class="font-bold text-white mb-1 text-sm">📈 Memory Grows Over Time</div>
<div class="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
<div class="font-semibold text-green-400 mb-1">🌱 First session</div>
<div class="text-xs opacity-80">Project description, tech stack</div>
</div>
<div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-400 mb-1">🌿 After a few sessions</div>
<div class="text-xs opacity-80">Conventions, component patterns</div>
</div>
<div class="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-400 mb-1">🌳 Mature project</div>
<div class="text-xs opacity-80">Full architecture, tech debt map</div>
</div>
</div>
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
<div class="grid grid-cols-2 gap-3">
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
</div>
</div>

---

<!-- SLIDE: Part 3 — Autonomous Execution -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">Autonomous Execution</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Background agents + Git worktrees for supervision-free execution</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">⏱️</div>
<div class="text-indigo-300 font-semibold">85 → 27 Active Minutes</div>
<div class="text-xs opacity-70 mt-1">Shift from continuous to review-only</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔀</div>
<div class="text-purple-300 font-semibold">Zero Conflicts</div>
<div class="text-xs opacity-70 mt-1">Each agent in own worktree branch</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">🚀</div>
<div class="text-pink-300 font-semibold">Parallel Execution</div>
<div class="text-xs opacity-70 mt-1">3 tasks: 51 min vs. 255 min supervised</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Built into VS Code 1.109+</span><br />
<span class="text-indigo-300 mt-1 block">↳ no additional setup required</span>
</div>
</div>
</div>

---

<!-- SLIDE: Git Worktree Isolation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Autonomous: Git Worktree Isolation</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Independent Working Directories, Same Repository</div>
<div class="text-xs text-white/50">Each background agent gets its own worktree — its own branch, its own filesystem space</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="flex flex-col gap-3">
<div class="font-mono text-xs bg-gray-950/80 border border-indigo-500/30 rounded-lg p-3">
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
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1">🔄 Lifecycle</div>
<div class="text-xs opacity-90 space-y-1">
<div><span class="text-green-400">1.</span> VS Code creates worktree + branch</div>
<div><span class="text-blue-400">2.</span> Agent executes in isolated worktree</div>
<div><span class="text-purple-400">3.</span> Your main/ workspace never touched</div>
<div><span class="text-cyan-400">4.</span> Review branch → merge or remove</div>
</div>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1">⚡ Key Benefits</div>
<div class="text-xs opacity-90 space-y-1">
<div>• Agent A and Agent B can both edit main.js — zero conflicts</div>
<div>• Failed experiments: 5 min to remove vs. 90 min reverting</div>
<div>• Breaking changes isolated from active work</div>
<div>• Instant rollback: just remove worktree</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="font-bold text-pink-300 mb-1">📊 vs. Supervised Isolation</div>
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
<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="font-bold text-green-300 mb-2 text-xs">✅ What Agents Need</div>
<div class="text-xs opacity-90 space-y-2">
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
<div class="flex flex-col gap-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 text-xs">🎯 Three Parallel Patterns</div>
<div class="text-xs space-y-1.5">
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
</div>
</div>

---

<!-- SLIDE: Part 4 — Multi-Model Deliberation -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Multi-Model Deliberation</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">When different models think differently — AgentCouncil</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🤝</div>
<div class="text-purple-300 font-semibold">Collaborative Mode</div>
<div class="text-xs opacity-70 mt-1">Build on each other's ideas</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">🗡️</div>
<div class="text-pink-300 font-semibold">Adversarial Mode</div>
<div class="text-xs opacity-70 mt-1">Attack positions to stress-test</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🎭</div>
<div class="text-rose-300 font-semibold">Model Diversity</div>
<div class="text-xs opacity-70 mt-1">Claude + GPT + Gemini</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Copilot CLI skill — no build required</span><br />
<span class="text-purple-300 mt-1 block">↳ drop-in: council: your question</span>
</div>
</div>
</div>

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
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎭 Multi-Model: Two Modes</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/40">
<div class="flex items-center gap-2 mb-1"><span class="text-xl">🤝</span><span class="font-bold text-cyan-300">Collaborative (Default)</span></div>
<div class="text-xs opacity-80 mb-2">Agents explore independently, read each other's drafts, improve</div>
<div class="font-mono text-xs bg-gray-950/60 border border-cyan-500/20 rounded p-2 mb-2 space-y-0.5">
<div class="text-cyan-400">Phase 1 (parallel): Alpha, Beta, Gamma each draft</div>
<div class="text-blue-400">Phase 2 (parallel): Each reads others → improved version</div>
<div class="text-green-400">Phase 3: Orchestrator synthesizes all three</div>
</div>
<div class="text-xs opacity-80">
<span class="font-semibold text-cyan-400">7 model calls</span> · ~2 sequential subagent calls
</div>
<div class="text-xs mt-1 font-semibold text-cyan-300">✅ Best For: Brainstorming · Design exploration · Research synthesis</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/40 to-rose-900/40 rounded-xl border border-red-500/40">
<div class="flex items-center gap-2 mb-1"><span class="text-xl">🗡️</span><span class="font-bold text-red-300">Adversarial</span></div>
<div class="text-xs opacity-80 mb-2">Draft independently, identify dominant position, others attack it</div>
<div class="font-mono text-xs bg-gray-950/60 border border-red-500/20 rounded p-2 mb-2 space-y-0.5">
<div class="text-red-400">Phase 1 (parallel): Alpha, Beta, Gamma tackle independently</div>
<div class="text-amber-400">Phase 2: Orchestrator identifies strongest position</div>
<div class="text-orange-400">Phase 3 (parallel): Others attempt to tear it apart</div>
<div class="text-purple-400">Phase 4: Verdict — SURVIVED / MODIFIED / OVERTURNED</div>
</div>
<div class="text-xs opacity-80">
<span class="font-semibold text-red-400">6 model calls</span> · ~2 sequential subagent calls
</div>
<div class="text-xs mt-1 font-semibold text-red-300">✅ Best For: Architecture decisions · Security reviews · Tech comparisons</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-xs">🎯 Mode Detection (Automatic)</div>
<div class="grid grid-cols-3 gap-3 text-xs">
<div class="p-2 bg-cyan-900/20 rounded border border-cyan-500/20">
<div class="font-semibold text-cyan-300 mb-1">🤝 Triggers</div>
<div class="opacity-80 font-mono">council:, brainstorm:</div>
</div>
<div class="p-2 bg-red-900/20 rounded border border-red-500/20">
<div class="font-semibold text-red-300 mb-1">🗡️ Triggers</div>
<div class="opacity-80 font-mono">debate:, stress-test:, vs</div>
</div>
<div class="p-2 bg-purple-900/20 rounded border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-1">📝 Verbose</div>
<div class="opacity-80">Shows all drafts, attacks, verdict</div>
</div>
</div>
</div>
</div>
</div>

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

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-rose-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-pink-600/80 to-rose-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-pink-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30 flex-1">
<div class="font-bold text-green-300 mb-3 flex items-center gap-2">
<span>⚡</span> <span>Immediate (10 minutes)</span>
</div>
<div class="text-xs opacity-90 space-y-2">
<div class="flex items-start gap-2">
<span class="text-green-400">□</span>
<span>Try implicit subagent invocation: "Run a subagent to research how auth works"</span>
</div>
<div class="flex items-start gap-2">
<span class="text-green-400">□</span>
<span>Parallel subagent review: "Analyze this PR using three subagents: Security, Performance, Testing"</span>
</div>
<div class="flex items-start gap-2">
<span class="text-green-400">□</span>
<span>Hand off to background agent: VS Code 1.109 session picker</span>
</div>
</div>
</div>
</div>

<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30 flex-1">
<div class="font-bold text-blue-300 mb-3 flex items-center gap-2">
<span>🚀</span> <span>Short-Term (1-2 hours)</span>
</div>
<div class="text-xs opacity-90 space-y-2">
<div class="flex items-start gap-2">
<span class="text-blue-400">□</span>
<span>Install Squad: npx github:bradygaster/squad</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400">□</span>
<span>Run 3-5 tasks with "Team, ..." fan-out</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400">□</span>
<span>Check .ai-team/decisions.md after sessions</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400">□</span>
<span>Install AgentCouncil: try adversarial council on a real decision</span>
</div>
</div>
</div>
</div>

<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30 flex-1">
<div class="font-bold text-purple-300 mb-3 flex items-center gap-2">
<span>🎯</span> <span>Advanced (1-2 weeks)</span>
</div>
<div class="text-xs opacity-90 space-y-2">
<div class="flex items-start gap-2">
<span class="text-purple-400">□</span>
<span>Enable GitHub Issues integration with squad label triage</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400">□</span>
<span>Activate Ralph (work monitor) for continuous backlog processing</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400">□</span>
<span>Combine: AgentCouncil for decisions → Squad for implementation</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400">□</span>
<span>Measure: implementation time, rework, test coverage, context switching</span>
</div>
</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1 text-base">🔑 Key Takeaway</div>
<div class="text-sm opacity-90">
The right agent for the right task, with the right isolation, at the right time — subagents are the building block, teams organize them, background agents make them autonomous, and multi-model deliberation validates decisions before execution.
</div>
</div>
</div>
</div>

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
