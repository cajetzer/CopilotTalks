---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Parallel Execution: When Agents Work Simultaneously
  Tech Talk - CopilotTraining
drawings:
  persist: false
transition: slide-left
title: Parallel Execution - When Agents Work Simultaneously
module: tech-talks/parallel-execution
mdc: true
status: active
updated: 2026-02-01
---

<!-- SLIDE: Title -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50">
<img src="./sdp-logo.png" class="w-64" alt="" />
</div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
Parallel Execution
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">
When Agents Work Simultaneously
</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">
Run multiple agents on different branches without conflicts
</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

<!-- SLIDE: When to Use This Pattern -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤔 When to Use This Pattern</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-8">
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">✅ Use parallel execution when:</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Multiple independent tasks can run simultaneously</div>
<div>• Testing different architectural approaches side-by-side</div>
<div>• Agents working on different features without blocking</div>
<div>• Autonomous execution without supervision overhead</div>
</div>
</div>

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">❌ Don't use when:</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Tasks have dependencies (sequential execution needed)</div>
<div>• Just need context isolation (see multi-step-tasks)</div>
<div>• Need specialized roles (see agent-teams)</div>
<div>• Tasks are simple enough for single agent</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">Best for: Independent feature development, experiments, parallel refactoring</span>
</div>
</div>
</div>

---

<!-- SLIDE: The Supervision Bottleneck -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚧 The Supervision Bottleneck</span>
<div class="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-6">
<div class="space-y-4">
<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-2">Interactive agents require constant supervision</div>
<div class="text-sm text-gray-400">Traditional AI workflows depend on continuous human guidance and feedback</div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-2">Context switching destroys productivity</div>
<div class="text-sm text-gray-400">Every agent question interrupts flow, requiring mental context reload</div>
</div>
</div>

<div class="space-y-4">
<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-2">Serial execution limits parallelism</div>
<div class="text-sm text-gray-400">Can't start next task while monitoring current agent progress</div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-2">Supervision scales linearly with tasks</div>
<div class="text-sm text-gray-400">Two agents require twice the supervision overhead</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
<span class="text-white font-bold">⚠️ Human attention becomes the limiting factor in AI-accelerated workflows</span>
</div>
</div>
</div>

---

<!-- SLIDE: Background Agents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ Background Agents</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-4 mt-8">
<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-3xl mb-2">🎯</div>
<div class="text-sm font-bold text-blue-300 mb-2">Complete Autonomy</div>
<div class="text-xs text-gray-300">From planning through delivery without human intervention</div>
</div>

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-3xl mb-2">🌳</div>
<div class="text-sm font-bold text-blue-300 mb-2">Git Worktree Isolation</div>
<div class="text-xs text-gray-300">Independent working directories prevent conflicts</div>
</div>

<div class="p-4 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-3xl mb-2">🤝</div>
<div class="text-sm font-bold text-blue-300 mb-2">Hand-Off Workflow</div>
<div class="text-xs text-gray-300">Interactive planning transitions to autonomous execution</div>
</div>
</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg">
<div class="text-sm text-gray-300 leading-relaxed">
Background agents fundamentally change the supervision equation. Define intent and constraints <span class="text-cyan-400 font-bold">once</span>, then agents work completely autonomously until completion. Each agent operates in a separate filesystem location—a complete clone of your repository. Changes never touch your active workspace.
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">Continue implementing the next feature while agents work independently</span>
</div>
</div>
</div>

---

<!-- SLIDE: Git Worktree Isolation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🌳 Git Worktree Isolation</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-red-300 mb-3">❌ Traditional single workspace:</div>
<div class="text-xs font-mono text-gray-300 space-y-1">
<div>repo/</div>
<div>├── .git/</div>
<div>└── src/</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;└── main.js  ← <span class="text-red-400">only one checkout</span></div>
</div>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
<div class="text-sm font-bold text-green-300 mb-3">✅ Worktree-based isolation:</div>
<div class="text-xs font-mono text-gray-300 space-y-1">
<div>repo/</div>
<div>├── .git/  ← <span class="text-cyan-400">shared repository</span></div>
<div>├── main/src/main.js  ← <span class="text-blue-400">your work</span></div>
<div>├── worktree-agent-1/src/main.js  ← <span class="text-green-400">agent A</span></div>
<div>└── worktree-agent-2/src/main.js  ← <span class="text-purple-400">agent B</span></div>
</div>
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-3">
<div class="p-3 bg-green-900/30 rounded-lg text-sm">
<span class="text-green-400">✓</span> <span class="text-white font-bold">True isolation</span><br/>
<span class="text-xs text-gray-400">File changes never affect main workspace</span>
</div>
<div class="p-3 bg-green-900/30 rounded-lg text-sm">
<span class="text-green-400">✓</span> <span class="text-white font-bold">Shared repository</span><br/>
<span class="text-xs text-gray-400">All worktrees use same .git, full history</span>
</div>
<div class="p-3 bg-green-900/30 rounded-lg text-sm">
<span class="text-green-400">✓</span> <span class="text-white font-bold">Branch independence</span><br/>
<span class="text-xs text-gray-400">Each worktree checks out different branch</span>
</div>
<div class="p-3 bg-green-900/30 rounded-lg text-sm">
<span class="text-green-400">✓</span> <span class="text-white font-bold">Parallel safety</span><br/>
<span class="text-xs text-gray-400">Multiple agents modify same files without conflicts</span>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Hand-Off Workflow -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-600/80 to-emerald-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤝 Hand-Off Workflow</span>
<div class="flex-1 h-px bg-gradient-to-r from-green-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-4 gap-3 mt-6">
<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400">
<div class="text-xl mb-2">💬</div>
<div class="text-xs font-bold text-blue-300 mb-1">1. Interactive Planning</div>
<div class="text-xs text-gray-400">5-15 minutes</div>
<div class="text-xs text-gray-400 mt-1">Clarify requirements and approach</div>
</div>

<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400">
<div class="text-xl mb-2">📦</div>
<div class="text-xs font-bold text-green-300 mb-1">2. Context Capture</div>
<div class="text-xs text-gray-400">Automatic</div>
<div class="text-xs text-gray-400 mt-1">Preserve conversation and state</div>
</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400">
<div class="text-xl mb-2">🚀</div>
<div class="text-xs font-bold text-purple-300 mb-1">3. Background Execution</div>
<div class="text-xs text-gray-400">0 min active</div>
<div class="text-xs text-gray-400 mt-1">Agent implements autonomously</div>
</div>

<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400">
<div class="text-xl mb-2">✅</div>
<div class="text-xs font-bold text-orange-300 mb-1">4. Review & Integration</div>
<div class="text-xs text-gray-400">5-10 minutes</div>
<div class="text-xs text-gray-400 mt-1">Examine and merge results</div>
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-sm font-bold text-red-300 mb-2">❌ Before: Supervised Development</div>
<div class="text-xs text-gray-300">Plan (15 min) + Implement (<span class="text-red-400 font-bold">60 min supervised</span>) + Review (10 min)</div>
<div class="text-xs text-white font-bold mt-2">= 85 minutes active time</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-sm font-bold text-green-300 mb-2">✅ After: Hand-Off to Background</div>
<div class="text-xs text-gray-300">Plan (15 min) + Hand-off (2 min) + Review (10 min) + <span class="text-green-400 font-bold">Parallel work</span></div>
<div class="text-xs text-white font-bold mt-2">= 27 minutes active time</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">68% reduction in active time per task</span>
</div>
</div>
</div>

---

<!-- SLIDE: Parallel Patterns 1/2 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔀 Parallel Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="space-y-4 mt-6">
<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
<div class="text-base font-bold text-blue-300 mb-2">🚀 Parallel Execution (Independent Tasks)</div>
<div class="text-sm text-gray-300 mb-2">
Task A → Agent 1 (worktree-1) → Branch A<br/>
Task B → Agent 2 (worktree-2) → Branch B<br/>
Task C → Agent 3 (worktree-3) → Branch C
</div>
<div class="text-xs text-gray-400">
<span class="text-cyan-400 font-bold">Best for:</span> Independent features, non-overlapping refactoring, parallel test/docs
</div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-400">
<div class="text-base font-bold text-green-300 mb-2">🧪 Experimental Variants (A/B Approaches)</div>
<div class="text-sm text-gray-300 mb-2">
Requirement → Agent 1 (GraphQL approach) → Branch A<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘ Agent 2 (REST approach)&nbsp;&nbsp;&nbsp;→ Branch B
</div>
<div class="text-xs text-gray-400">
<span class="text-cyan-400 font-bold">Best for:</span> Architecture decisions, performance optimization, API design exploration
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">All agents work simultaneously without conflicts</span>
</div>
</div>
</div>

---

<!-- SLIDE: Parallel Patterns 2/2 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔀 Parallel Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="mt-8 p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
<div class="text-base font-bold text-purple-300 mb-3">⚙️ Specialized Parallel Work</div>
<div class="text-sm text-gray-300 mb-3">
<div class="flex items-center justify-center gap-3">
<div class="text-xs">Feature Complete</div>
<div class="text-2xl">→</div>
<div class="flex flex-col gap-2">
<div class="p-2 bg-blue-900/60 rounded text-xs">Refactoring Agent</div>
<div class="p-2 bg-green-900/60 rounded text-xs">Testing Agent</div>
<div class="p-2 bg-orange-900/60 rounded text-xs">Documentation Agent</div>
</div>
<div class="text-2xl">→</div>
<div class="text-xs">Integration</div>
</div>
</div>
<div class="text-xs text-gray-400">
<span class="text-cyan-400 font-bold">Best for:</span> Post-implementation cleanup, cross-cutting improvements, quality enhancement
</div>
</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg">
<div class="text-sm text-gray-300 leading-relaxed">
Different agents tackle different concerns <span class="text-cyan-400 font-bold">simultaneously</span>. For architectural decisions, run experimental variants: two agents implement different approaches, you compare finished results and choose the superior implementation.
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Transforms architecture debates into empirical comparisons</span>
</div>
</div>
</div>

---

<!-- SLIDE: Session Management -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎛️ Session Management</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-6">
<div class="space-y-3">
<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="text-sm font-bold text-blue-300 mb-2">📋 Session Type Picker</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Choose: local, background, cloud, Claude</div>
<div>• Hand-off ongoing sessions between environments</div>
<div>• Seamless workflow transitions</div>
</div>
</div>

<div class="p-3 bg-green-900/40 rounded-lg">
<div class="text-sm font-bold text-green-300 mb-2">👁️ Agent Sessions View</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Resize, multi-select, filter sessions</div>
<div>• Active agents list with status</div>
<div>• Progress monitoring without interrupts</div>
</div>
</div>
</div>

<div class="space-y-3">
<div class="p-3 bg-purple-900/40 rounded-lg">
<div class="text-sm font-bold text-purple-300 mb-2">🚦 Agent Status Indicator</div>
<div class="text-xs text-gray-300 space-y-1">
<div>🔵 In-progress - Agent actively working</div>
<div>🟡 Unread - Session has new updates</div>
<div>🔴 Attention - Requires input or approval</div>
</div>
</div>

<div class="p-3 bg-orange-900/40 rounded-lg">
<div class="text-sm font-bold text-orange-300 mb-2">💡 Pro Tip</div>
<div class="text-xs text-gray-300">
Bind <code class="text-cyan-400">workbench.action.chat.newLocalChat</code> to keyboard shortcut for quick local sessions
</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Run 5-10 parallel agent sessions without losing track of progress</span>
</div>
</div>
</div>

---

<!-- SLIDE: Custom Agents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛠️ Custom Agents</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="mt-6 space-y-4">
<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
<div class="text-base font-bold text-blue-300 mb-2">📁 Repository-Defined Agents (.github/agents/)</div>
<div class="text-sm text-gray-300">Load automatically in VS Code and CLI • Execute identically in background as foreground</div>
</div>

<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-green-900/40 rounded-lg">
<div class="text-lg mb-1">🔍</div>
<div class="text-xs font-bold text-green-300 mb-1">@review-enforcer</div>
<div class="text-xs text-gray-400">Architecture validation on every PR without manual oversight</div>
</div>

<div class="p-3 bg-purple-900/40 rounded-lg">
<div class="text-lg mb-1">🧪</div>
<div class="text-xs font-bold text-purple-300 mb-1">@test-generator</div>
<div class="text-xs text-gray-400">Comprehensive test suites from implementation in parallel</div>
</div>

<div class="p-3 bg-orange-900/40 rounded-lg">
<div class="text-lg mb-1">🔧</div>
<div class="text-xs font-bold text-orange-300 mb-1">@refactor-specialist</div>
<div class="text-xs text-gray-400">Modernize patterns across 50+ files autonomously</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gray-800 rounded-lg">
<div class="text-sm text-gray-300 leading-relaxed">
Custom agents become <span class="text-cyan-400 font-bold">exponentially more valuable</span> in background mode. Agents execute with the same quality as interactive mode but without supervision cost.
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">Same configurations work across local, background, and cloud</span>
</div>
</div>
</div>

---

<!-- SLIDE: Cloud Agents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">☁️ Cloud Agents</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="mt-8 grid grid-cols-2 gap-6">
<div class="space-y-3">
<div class="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
<div class="text-sm font-bold text-blue-300 mb-2">🚀 Capabilities (1.109)</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Model selection for cloud execution</div>
<div>• Custom agents from default branch</div>
<div>• Partner agents where available</div>
<div>• Multi-root workspace support</div>
</div>
</div>

<div class="p-3 bg-gray-800 rounded-lg">
<div class="text-xs text-cyan-400 font-bold mb-2">💡 When to Use Cloud Agents</div>
<div class="text-xs text-gray-300 space-y-1">
<div>✓ Large-scale refactoring (100+ files)</div>
<div>✓ Cross-repository operations</div>
<div>✓ Long-running tasks without timeouts</div>
<div>✓ No local resource constraints</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-indigo-900/60 to-purple-900/40 rounded-lg border-2 border-indigo-400">
<div class="text-base font-bold text-indigo-300 mb-3">🌐 Massive Parallel Execution</div>
<div class="text-sm text-gray-300 leading-relaxed mb-3">
Run <span class="text-cyan-400 font-bold">10 cloud agents</span> simultaneously while your local machine handles <span class="text-green-400 font-bold">3 background agents</span>, all coordinated from VS Code's unified interface.
</div>
<div class="text-xs text-gray-400 italic">
GitHub infrastructure handles compute for large operations that would strain local resources
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case: Isolated Worktree Experiments -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💼 Use Case</span>
<div class="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-2">❌ The Problem</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Experimental features risk main branch</div>
<div>• 90 minutes reverting failed experiments</div>
<div>• Merge conflicts from competing approaches</div>
<div>• Risk aversion prevents exploration</div>
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-base font-bold text-green-300 mb-2">✅ The Solution</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Launch 2-3 agents with different approaches</div>
<div>• Each in isolated worktree + branch</div>
<div>• Compare finished implementations empirically</div>
<div>• Merge winner, discard failed worktrees</div>
</div>
</div>
</div>

<div class="mt-4 grid grid-cols-3 gap-3">
<div class="p-3 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<div class="text-white font-bold text-sm">90 min → 5 min</div>
<div class="text-xs text-gray-300 mt-1">Rollback time</div>
</div>
<div class="p-3 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<div class="text-white font-bold text-sm">0 conflicts</div>
<div class="text-xs text-gray-300 mt-1">Isolation prevents interference</div>
</div>
<div class="p-3 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<div class="text-white font-bold text-sm">3x experiments</div>
<div class="text-xs text-gray-300 mt-1">Negligible cost enables exploration</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case: Autonomous Architecture Review -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-600/80 to-emerald-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Use Case</span>
<div class="flex-1 h-px bg-gradient-to-r from-green-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-2">❌ The Problem</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• 30 minutes per PR for architecture validation</div>
<div>• Inconsistent standards application</div>
<div>• Review bottleneck (hours/days waiting)</div>
<div>• Can't scale to 20+ PRs daily</div>
</div>
</div>

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-base font-bold text-green-300 mb-2">✅ The Solution</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• @review-enforcer agent with standards</div>
<div>• PR creation triggers background review</div>
<div>• Agent analyzes patterns, dependencies, budgets</div>
<div>• Humans focus on business logic, not rules</div>
</div>
</div>
</div>

<div class="mt-4 grid grid-cols-3 gap-3">
<div class="p-3 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<div class="text-white font-bold text-sm">30 min → 2 min</div>
<div class="text-xs text-gray-300 mt-1">Standards validation per PR</div>
</div>
<div class="p-3 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<div class="text-white font-bold text-sm">100% consistent</div>
<div class="text-xs text-gray-300 mt-1">Architecture rules application</div>
</div>
<div class="p-3 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<div class="text-white font-bold text-sm">20+ PRs daily</div>
<div class="text-xs text-gray-300 mt-1">Without scaling review team</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Best Practices -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-600/80 to-emerald-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Best Practices</span>
<div class="flex-1 h-px bg-gradient-to-r from-green-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-base font-bold text-green-300 mb-3">✅ Ideal Scenarios</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Well-defined requirements with clear acceptance criteria</div>
<div>• Refactoring with established patterns</div>
<div>• Test generation from implementation</div>
<div>• Documentation from code</div>
<div>• Standards enforcement and validation</div>
</div>
</div>

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-3">❌ Not Recommended</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Ambiguous requirements needing clarification</div>
<div>• Novel architecture requiring creative exploration</div>
<div>• Complex debugging needing interactive testing</div>
<div>• Security-critical changes requiring oversight</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg">
<div class="text-lg font-bold text-white text-center">
Spend 15 minutes on interactive planning to ensure autonomous execution succeeds
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Metrics & ROI -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Metrics & ROI</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="mt-6 space-y-4">
<div class="p-4 bg-gradient-to-br from-green-900/60 to-blue-900/40 rounded-lg border-2 border-green-400">
<div class="text-base font-bold text-green-300 mb-3">⏱️ Time Savings Per Feature</div>
<div class="grid grid-cols-2 gap-4">
<div class="text-sm text-gray-300">
<div class="text-red-400">Traditional supervised:</div>
<div class="text-2xl font-bold text-white">105 minutes</div>
<div class="text-xs text-gray-400">active time</div>
</div>
<div class="text-sm text-gray-300">
<div class="text-green-400">Background agent:</div>
<div class="text-2xl font-bold text-white">45 minutes</div>
<div class="text-xs text-gray-400">active time</div>
</div>
</div>
<div class="mt-2 text-center text-white font-bold text-lg">57% savings per feature</div>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="text-sm font-bold text-blue-300 mb-2">📈 Weekly Capacity Gains</div>
<div class="text-xs text-gray-300">10 features/week → 600 minutes (10 hours) reclaimed</div>
<div class="text-xs text-white font-bold mt-1">Enables 20+ features/week at same time investment</div>
</div>

<div class="p-3 bg-purple-900/40 rounded-lg">
<div class="text-sm font-bold text-purple-300 mb-2">🎯 Quality Improvements</div>
<div class="text-xs text-gray-300">Architecture: 30 min/PR → 2 min/PR</div>
<div class="text-xs text-gray-300">Test coverage: 60% → 85%</div>
<div class="text-xs text-white font-bold mt-1">20+ PRs daily vs. 5-6 with manual process</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Key Takeaways -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Key Takeaways</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="space-y-3 mt-8">
<div class="p-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg">
<div class="text-xl font-bold text-white mb-2">🤝 Hand-Off Pattern Transforms Productivity</div>
<div class="text-sm text-gray-200">Plan locally → execute autonomously → review finished work</div>
</div>

<div class="p-4 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-lg">
<div class="text-xl font-bold text-white mb-2">🌳 Git Worktrees Enable Safe Parallelism</div>
<div class="text-sm text-gray-200">Multiple agents work simultaneously without conflicts</div>
</div>

<div class="p-4 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-lg">
<div class="text-xl font-bold text-white mb-2">⚡ Supervision Shifts from Continuous to Review</div>
<div class="text-sm text-gray-200">27 minutes active time vs. 85 minutes with traditional approach</div>
</div>

<div class="p-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg">
<div class="text-xl font-bold text-white mb-2">🛡️ Isolation Enables Risk-Free Experimentation</div>
<div class="text-sm text-gray-200">Failed experiments discard with one command, no merge conflicts</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 References</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-8">
<div class="space-y-3">
<div class="text-lg font-bold text-cyan-300 mb-3">📚 Related Patterns</div>
<div class="p-3 bg-gray-800 rounded-lg text-sm">
<div class="text-white font-bold">Need task decomposition?</div>
<div class="text-cyan-400">→ See multi-step-tasks</div>
<div class="text-xs text-gray-400">Research/analysis phases</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg text-sm">
<div class="text-white font-bold">Need specialized roles?</div>
<div class="text-cyan-400">→ See agent-teams</div>
<div class="text-xs text-gray-400">Planner/coder/reviewer patterns</div>
</div>
</div>

<div class="space-y-3">
<div class="text-lg font-bold text-indigo-300 mb-3">🔗 Resources</div>
<div class="p-3 bg-gray-800 rounded-lg text-xs">
<div class="text-white space-y-1">
<div>• VS Code: Background Agents</div>
<div>• VS Code: Cloud Agents</div>
<div>• VS Code 1.109: Session Management</div>
<div>• Git Worktrees (Technical Reference)</div>
</div>
</div>
<div class="p-3 bg-gray-800 rounded-lg text-xs">
<div class="text-cyan-400 font-bold mb-1">Related Talks:</div>
<div class="text-white space-y-1">
<div>• Agentic SDLC (Part 2)</div>
<div>• Copilot CLI</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Thank You -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-indigo-500/15 rounded-full blur-3xl"></div>
<div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
<div class="relative z-10 text-center">
<div class="relative mb-6 inline-block">
<div class="absolute inset-0 blur-2xl opacity-40">
<img src="./sdp-logo.png" class="w-20" alt="" />
</div>
<img src="./sdp-logo.png" class="w-20 relative" alt="SDP Logo" />
</div>
<div class="mb-6">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-sm font-medium shadow-lg">
Parallel Execution: When Agents Work Simultaneously
</span>
</div>
<div class="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
<div class="p-4 bg-gray-800/80 rounded-xl border border-cyan-500/30 backdrop-blur">
<div class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">68%</div>
<div class="text-xs text-cyan-300 font-semibold mt-1">reduction</div>
<div class="text-xs text-gray-400 mt-1">active time per task</div>
</div>
<div class="p-4 bg-gray-800/80 rounded-xl border border-blue-500/30 backdrop-blur">
<div class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">27 min</div>
<div class="text-xs text-blue-300 font-semibold mt-1">active time</div>
<div class="text-xs text-gray-400 mt-1">vs 85 min supervised</div>
</div>
<div class="p-4 bg-gray-800/80 rounded-xl border border-indigo-500/30 backdrop-blur">
<div class="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Zero</div>
<div class="text-xs text-indigo-300 font-semibold mt-1">conflicts</div>
<div class="text-xs text-gray-400 mt-1">git worktree isolation</div>
</div>
</div>
<div class="text-base opacity-60">
Questions? Let's discuss running your first parallel agent experiment
</div>
<div class="mt-4 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mx-auto"></div>
</div>
</div>