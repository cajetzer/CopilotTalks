---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## What's New in Copilot for VS Code: v1.108 – v1.115
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: What's New in Copilot for VS Code - v1.108 to v1.115
module: tech-talks/vscode-latest
mdc: true
section: Copilot Tools
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
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="What's New in Copilot for VS Code"
subtitle="v1.108 – v1.115: Eight Releases of AI Innovation"
tagline="From assistant to autonomous agent team"
meta="Tech Talk · 45-60 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="Which new VS Code Copilot features matter most — and how do I start using them today?"
subtext="Eight releases in four months brought sweeping changes to Copilot in VS Code."
highlight="Autopilot, subagents, and a companion app — from one assistant to a team you orchestrate."
:cards='[
  { icon: "🔧", title: "VS Code Power Users Tracking Updates", description: "Know which releases matter and how to enable new features immediately" },
  { icon: "👥", title: "Team Leads Enabling Agent Workflows", description: "Background agents, subagents, and worktrees for parallel autonomous work" },
  { icon: "🎓", title: "Developers New to Copilot Agent Mode", description: "Jump from inline completions to full agentic orchestration in minutes" },
  { title: "Weekly Releases", description: "Starting v1.111, weekly stable updates — features ship faster than ever" },
  { title: "4 Agent Types", description: "Local, Background, Cloud, and Claude — each optimized for different tasks" },
  { title: "Autopilot", description: "Fully autonomous operation — delegates, executes, and reports back independently" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🤖", title: "Agent Sessions & Orchestration", subtitle: "Multi-session workflows and specialized agents", blurb: "4 agent types, subagents, worktree isolation", slide: 4 },
    { icon: "🧩", title: "Agent Customization", subtitle: "Skills, Plugins, and org-level control", blurb: "GA Agent Skills, /create-* commands, /init", slide: 9 },
    { icon: "🧠", title: "Claude Integration", subtitle: "Thinking tokens and Anthropic SDK", blurb: "Visible reasoning, steering, context editing", slide: 14 },
    { icon: "🔒", title: "Security & UX", subtitle: "Sandboxing, automation, and browser tools", blurb: "Terminal sandboxing, YOLO mode, agentic browser", slide: 17 },
  ]'
/>
---

<!-- SLIDE: Part 1 — Agent Sessions & Orchestration -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Agent Sessions & Orchestration</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">From single-chat to multi-agent workflows</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-cyan-300 font-semibold">4 Agent Types</div>
<div class="text-xs opacity-70 mt-1">Local, Background, Cloud, Claude</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🌳</div>
<div class="text-blue-300 font-semibold">Worktree Isolation</div>
<div class="text-xs opacity-70 mt-1">Background agents in dedicated Git worktrees</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🤝</div>
<div class="text-indigo-300 font-semibold">Subagents</div>
<div class="text-xs opacity-70 mt-1">Parallel delegation with Explore agent</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Plan locally → implement in background → merge selectively</span><br />
<span class="text-cyan-300 mt-1 block">↳ multi-session workflow pattern</span>
</div>
</div>
</div>

---

<!-- SLIDE: Four Agent Types -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Agent Sessions & Orchestration</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Four Agent Types</div>
<div class="text-xs text-white/50">Choose the right agent for each workflow phase</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-lg">💬</div>
<div class="font-bold text-cyan-300 text-sm">Local</div>
</div>
<div class="space-y-1 text-xs">
<div class="text-gray-300">Real-time in Chat view</div>
<div class="p-1.5 bg-cyan-900/30 rounded"><span class="text-cyan-400">✓</span> Interactive planning</div>
<div class="p-1.5 bg-cyan-900/30 rounded"><span class="text-cyan-400">✓</span> Quick explorations</div>
<div class="p-1.5 bg-cyan-900/30 rounded"><span class="text-cyan-400">✓</span> Fastest feedback loop</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-lg">🌳</div>
<div class="font-bold text-blue-300 text-sm">Background</div>
</div>
<div class="space-y-1 text-xs">
<div class="text-gray-300">Isolated Git worktree</div>
<div class="p-1.5 bg-blue-900/30 rounded"><span class="text-blue-400">✓</span> Multi-file autonomous tasks</div>
<div class="p-1.5 bg-blue-900/30 rounded"><span class="text-blue-400">✓</span> No workspace conflicts</div>
<div class="p-1.5 bg-blue-900/30 rounded"><span class="text-blue-400">✓</span> Review via diff before merge</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-lg">☁️</div>
<div class="font-bold text-indigo-300 text-sm">Cloud</div>
</div>
<div class="space-y-1 text-xs">
<div class="text-gray-300">GitHub-hosted infrastructure</div>
<div class="p-1.5 bg-indigo-900/30 rounded"><span class="text-indigo-400">✓</span> Cross-repo operations</div>
<div class="p-1.5 bg-indigo-900/30 rounded"><span class="text-indigo-400">✓</span> Scale beyond local resources</div>
<div class="p-1.5 bg-indigo-900/30 rounded"><span class="text-indigo-400">✓</span> Org-level indexing</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-lg">🧠</div>
<div class="font-bold text-purple-300 text-sm">Claude</div>
</div>
<div class="space-y-1 text-xs">
<div class="text-gray-300">Anthropic SDK with thinking tokens</div>
<div class="p-1.5 bg-purple-900/30 rounded"><span class="text-purple-400">✓</span> Complex reasoning tasks</div>
<div class="p-1.5 bg-purple-900/30 rounded"><span class="text-purple-400">✓</span> Architectural decisions</div>
<div class="p-1.5 bg-purple-900/30 rounded"><span class="text-purple-400">✓</span> Visible hypothesis formation</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Background Agents & Git Worktrees -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Agent Sessions & Orchestration</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Background Agents with Git Worktree Isolation</div>
<div class="text-xs text-white/50">Autonomous work without workspace conflicts</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="text-center mb-2">
<div class="text-xl">✅</div>
<div class="font-bold text-green-300 text-sm">How It Works</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-green-900/30 rounded">Agent creates new worktree automatically</div>
<div class="p-1.5 bg-green-900/30 rounded">Changes committed per turn in worktree</div>
<div class="p-1.5 bg-green-900/30 rounded">Your main workspace stays untouched</div>
<div class="p-1.5 bg-green-900/30 rounded">Multiple agents run in parallel</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="text-center mb-2">
<div class="text-xl">🔍</div>
<div class="font-bold text-blue-300 text-sm">Review & Merge</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-blue-900/30 rounded">Diff view when agent completes</div>
<div class="p-1.5 bg-blue-900/30 rounded">Apply all changes at once</div>
<div class="p-1.5 bg-blue-900/30 rounded">Cherry-pick specific files</div>
<div class="p-1.5 bg-blue-900/30 rounded">Discard if not satisfactory</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-mono text-gray-400 mb-1">git.worktreeIncludeFiles</div>
<pre class="overflow-y-auto max-h-24 text-xs bg-gray-950/80 p-2 rounded border border-gray-700/30"><code class="language-json">{
  "git.worktreeIncludeFiles": [
    "config/local.json",
    ".env.local"
  ]
}</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: Subagents & Explore -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Agent Sessions & Orchestration</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Parallel Subagents & Explore</div>
<div class="text-xs text-white/50">Delegate subtasks to specialized agents that run independently</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/30">
<div class="text-center mb-2">
<div class="text-xl">🤝</div>
<div class="font-bold text-cyan-300 text-sm">Subagents</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-cyan-900/30 rounded">Run in their own context windows</div>
<div class="p-1.5 bg-cyan-900/30 rounded">Operate in parallel for speed</div>
<div class="p-1.5 bg-cyan-900/30 rounded">Split independent tasks efficiently</div>
<div class="p-1.5 bg-cyan-900/30 rounded">Return results to parent agent</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="text-center mb-2">
<div class="text-xl">🔍</div>
<div class="font-bold text-blue-300 text-sm">Explore Subagent (v1.110)</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-blue-900/30 rounded">Dedicated codebase research agent</div>
<div class="p-1.5 bg-blue-900/30 rounded">Read-only: search + file read tools only</div>
<div class="p-1.5 bg-blue-900/30 rounded">Fast models (Claude Haiku, Gemini Flash)</div>
<div class="p-1.5 bg-blue-900/30 rounded">Offloads all Plan agent research</div>
</div>
</div>
</div>

<div class="mt-3 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-mono text-gray-400 mb-1">chat.exploreAgent.defaultModel</div>
<pre class="overflow-y-auto max-h-32 text-xs bg-gray-950/80 p-2 rounded border border-gray-700/30"><code class="language-json">{
  "chat.exploreAgent.defaultModel": "claude-haiku-4-5"
}</code></pre>
</div>

<div class="mt-2 grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-red-900/30 rounded">
<div class="font-bold text-red-300">Before — Sequential</div>
<div class="text-gray-400">Research → Plan → Implement (serial)</div>
</div>
<div class="p-2 bg-green-900/30 rounded">
<div class="font-bold text-green-300">After — Parallel</div>
<div class="text-gray-400">Explore (parallel) → Plan + Implement</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Session Management -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Agent Sessions & Orchestration</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Session Management & Context Control</div>
<div class="text-xs text-white/50">Fork, compact, and organize your agent conversations</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-lg">🔀</div>
<div class="font-bold text-cyan-300 text-sm">/fork</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>Branch conversations</div>
<div class="p-1.5 bg-cyan-900/30 rounded">Explore alternatives without losing context</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-lg">🗜️</div>
<div class="font-bold text-blue-300 text-sm">/compact</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>Summarize history</div>
<div class="p-1.5 bg-blue-900/30 rounded">Free space when approaching context limits</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-lg">📊</div>
<div class="font-bold text-indigo-300 text-sm">Context Window</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>Token usage indicator</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Hover for breakdown by category</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-sm">Agent Sessions Welcome Page (v1.109)</div>
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-purple-900/30 rounded">Sessions front and center at startup</div>
<div class="p-2 bg-purple-900/30 rounded">Search and filter across sessions</div>
<div class="p-2 bg-purple-900/30 rounded">Status: in-progress, unread, needs attention</div>
<div class="p-2 bg-purple-900/30 rounded">Visible in command center</div>
</div>
</div>

<div class="mt-2 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-mono text-gray-400 mb-1">workbench.startupEditor</div>
<pre class="overflow-y-auto max-h-24 text-xs bg-gray-950/80 p-2 rounded border border-gray-700/30"><code class="language-json">{
  "workbench.startupEditor": "agentSessionsWelcomePage"
}</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Agent Customization -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Agent Customization</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Skills, Plugins, and org-level control</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🧩</div>
<div class="text-blue-300 font-semibold">Agent Skills GA</div>
<div class="text-xs opacity-70 mt-1">From experimental to enabled by default</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📦</div>
<div class="text-indigo-300 font-semibold">Agent Plugins</div>
<div class="text-xs opacity-70 mt-1">Prepackaged bundles from Extensions view</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🏢</div>
<div class="text-purple-300 font-semibold">Org-Level</div>
<div class="text-xs opacity-70 mt-1">Enforce consistency across teams</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Package domain expertise once</span><br />
<span class="text-blue-300 mt-1 block">↳ agents apply it automatically</span>
</div>
</div>
</div>

---

<!-- SLIDE: Agent Skills — Now GA -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Agent Customization</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Agent Skills — From Experimental to GA</div>
<div class="text-xs text-white/50">v1.108 experimental → v1.109 generally available and enabled by default</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="text-center mb-2">
<div class="text-xl">📁</div>
<div class="font-bold text-blue-300 text-sm">Structure</div>
</div>
<div class="text-xs font-mono text-gray-300 bg-gray-900/50 p-2 rounded">
.github/skills/<br />
&nbsp;&nbsp;api-design/<br />
&nbsp;&nbsp;&nbsp;&nbsp;SKILL.md<br />
&nbsp;&nbsp;security-review/<br />
&nbsp;&nbsp;&nbsp;&nbsp;SKILL.md
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="text-center mb-2">
<div class="text-xl">⚙️</div>
<div class="font-bold text-indigo-300 text-sm">Settings</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-indigo-900/30 rounded">Enabled by default in v1.109+</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Add custom skill locations</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Extensions can package skills</div>
<div class="p-1.5 bg-indigo-900/30 rounded">On-demand loading per task</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-mono text-gray-400 mb-1">chat.useAgentSkills & chat.agentSkillsLocations</div>
<pre class="overflow-y-auto max-h-16 text-xs bg-gray-950/80 p-2 rounded border border-gray-700/30"><code class="language-json">{
  "chat.useAgentSkills": true,
  "chat.agentSkillsLocations": {
    "~/.copilot/skills": true,
    "shared/team-skills": true
  }
}</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: Agent Plugins -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Agent Customization</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Agent Plugins (Experimental, v1.110)</div>
<div class="text-xs text-white/50">Prepackaged bundles of skills, commands, agents, MCP servers, and hooks</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="text-center mb-2">
<div class="text-xl">📦</div>
<div class="font-bold text-indigo-300 text-sm">What's in a Plugin</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-indigo-900/30 rounded">Skills (domain expertise)</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Custom agents (.agent.md)</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Slash commands + MCP servers</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Lifecycle hooks</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="text-center mb-2">
<div class="text-xl">🔌</div>
<div class="font-bold text-purple-300 text-sm">How to Install</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-purple-900/30 rounded">Search @agentPlugins in Extensions view</div>
<div class="p-1.5 bg-purple-900/30 rounded">Or use Chat: Plugins command</div>
<div class="p-1.5 bg-purple-900/30 rounded">Add custom plugin marketplaces</div>
<div class="p-1.5 bg-purple-900/30 rounded">Register local plugin directories</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-mono text-gray-400 mb-1">chat.plugins.enabled, marketplaces, paths</div>
<pre class="overflow-y-auto max-h-24 text-xs bg-gray-950/80 p-2 rounded border border-gray-700/30"><code class="language-json">{
  "chat.plugins.enabled": true,
  "chat.plugins.marketplaces": ["copilot-plugins", "awesome-copilot"],
  "chat.plugins.paths": {
    "/path/to/local/plugin": true
  }
}</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: /create-* Commands & /init -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Agent Customization</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">/create-* Commands & /init</div>
<div class="text-xs text-white/50">Generate customization files directly from conversations</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2 text-sm">/create-* Family (v1.110)</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-cyan-900/30 rounded"><span class="font-mono text-cyan-400">/create-prompt</span> — Reusable prompt file</div>
<div class="p-1.5 bg-cyan-900/30 rounded"><span class="font-mono text-cyan-400">/create-instruction</span> — Project conventions</div>
<div class="p-1.5 bg-cyan-900/30 rounded"><span class="font-mono text-cyan-400">/create-skill</span> — Multi-step workflow package</div>
<div class="p-1.5 bg-cyan-900/30 rounded"><span class="font-mono text-cyan-400">/create-agent</span> — Specialized custom agent</div>
<div class="p-1.5 bg-cyan-900/30 rounded"><span class="font-mono text-cyan-400">/create-hook</span> — Lifecycle automation</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2 text-sm">/init — Bootstrap Your Workspace (v1.109)</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-blue-900/30 rounded">Analyzes your project structure</div>
<div class="p-2 bg-blue-900/30 rounded">Generates tailored copilot-instructions.md or AGENTS.md</div>
<div class="p-2 bg-blue-900/30 rounded">Run once per project to establish baseline</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="font-bold text-green-300 mb-2 text-sm">💡 Workflow Pattern</div>
<div class="grid grid-cols-3 gap-2 text-xs">
<div class="p-2 bg-green-900/30 rounded text-center">
<div class="font-bold text-green-400 mb-1">1. Debug Issue</div>
<div class="text-gray-300">Solve problem in chat</div>
</div>
<div class="p-2 bg-green-900/30 rounded text-center">
<div class="font-bold text-green-400 mb-1">2. /create-skill</div>
<div class="text-gray-300">Capture procedure</div>
</div>
<div class="p-2 bg-green-900/30 rounded text-center">
<div class="font-bold text-green-400 mb-1">3. Reuse</div>
<div class="text-gray-300">Agents apply it next time</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-center">
<span class="text-white font-bold text-xs">Natural language works too: "save this workflow as a skill"</span>
</div>
</div>
</div>

---

<!-- SLIDE: Org-Level Instructions & Custom Agent Controls -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Agent Customization</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Org-Level Instructions & Custom Agent Controls</div>
<div class="text-xs text-white/50">Enforce consistency across teams</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="text-center mb-2">
<div class="text-xl">🏢</div>
<div class="font-bold text-indigo-300 text-sm">Org-Level (v1.108 → v1.109)</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-indigo-900/30 rounded">Org-level custom agents</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Org-level custom instructions</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Enforce consistent AI guidance</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Enabled by default in v1.109+</div>
</div>
<div class="mt-2 p-2 bg-gray-900/50 rounded text-xs font-mono">
github.copilot.chat.organizationInstructions.enabled: true
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="text-center mb-2">
<div class="text-xl">⚙️</div>
<div class="font-bold text-purple-300 text-sm">Custom Agent Controls (v1.109)</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-purple-900/30 rounded"><span class="font-mono text-purple-400">user-invokable: false</span> — Subagent-only</div>
<div class="p-1.5 bg-purple-900/30 rounded"><span class="font-mono text-purple-400">disable-model-invocation</span> — Block auto-invoke</div>
<div class="p-1.5 bg-purple-900/30 rounded"><span class="font-mono text-purple-400">agents: [...]</span> — Restrict subagent access</div>
<div class="p-1.5 bg-purple-900/30 rounded">Multiple model support with fallbacks</div>
</div>
</div>
</div>

<div class="mt-3 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-mono text-gray-400 mb-1">Custom agent .agent.md frontmatter example</div>
<pre class="overflow-y-auto max-h-32 text-xs bg-gray-950/80 p-2 rounded border border-gray-700/30"><code class="language-yaml">&#45;&#45;&#45;
name: architect
model: ['Claude Sonnet 4.5 (copilot)', 'GPT-5 (copilot)']
tools: ['readFiles', 'codeSearch', 'agent']
agents: ['Modify', 'Search']
user-invokable: true
&#45;&#45;&#45;</code></pre>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-xs">💡 Agent Debug Panel: View exactly which customizations load for each session</span>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Claude & Anthropic Integration -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-violet-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-violet-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-violet-400 bg-clip-text text-transparent leading-tight">Claude & Anthropic Integration</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Thinking tokens and visible reasoning</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🧠</div>
<div class="text-indigo-300 font-semibold">Claude Agent SDK</div>
<div class="text-xs opacity-70 mt-1">Anthropic harness in VS Code</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">💭</div>
<div class="text-purple-300 font-semibold">Thinking Tokens</div>
<div class="text-xs opacity-70 mt-1">Visible hypothesis formation</div>
</div>
<div class="px-4 py-3 bg-violet-900/30 rounded-xl border border-violet-500/30">
<div class="text-2xl mb-1">🔧</div>
<div class="text-violet-300 font-semibold">Tool Search Tool</div>
<div class="text-xs opacity-70 mt-1">Discover relevant tools from large pools</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">See how Claude reasons through complex problems</span><br />
<span class="text-indigo-300 mt-1 block">↳ visible thinking tokens show hypothesis formation in real-time</span>
</div>
</div>
</div>

---

<!-- SLIDE: Thinking Tokens -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 Claude & Anthropic Integration</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Thinking Tokens</div>
<div class="text-xs text-white/50">Visible reasoning shows hypothesis formation, tool selection, error recovery</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="text-center mb-2">
<div class="text-xl">💭</div>
<div class="font-bold text-indigo-300 text-sm">Visible Reasoning</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-indigo-900/30 rounded">Hypothesis formation in real-time</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Tool selection reasoning</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Error recovery strategies</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Interleaved thinking between tool calls</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="text-center mb-2">
<div class="text-xl">⚙️</div>
<div class="font-bold text-purple-300 text-sm">Configuration</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-purple-900/30 rounded">Default: 4000 tokens budget</div>
<div class="p-1.5 bg-purple-900/30 rounded">Set 0 to disable thinking</div>
<div class="p-1.5 bg-purple-900/30 rounded">Detailed or compact style</div>
<div class="p-1.5 bg-purple-900/30 rounded">Collapse noisy tool sections</div>
</div>
</div>
</div>
<div class="mt-2 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-mono text-gray-400 mb-1">Thinking token settings</div>
<pre class="overflow-y-auto max-h-20 text-xs bg-gray-950/80 p-2 rounded border border-gray-700/30"><code class="language-json">{
  "github.copilot.chat.anthropic.thinking.budgetTokens": 10000,
  "chat.thinking.style": "detailed",
  "chat.agent.thinking.collapsedTools": ["terminal", "search"],
  "chat.tools.autoExpandFailures": true
}</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: Claude Agent SDK -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 Claude & Anthropic Integration</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Claude Agent SDK</div>
<div class="text-xs text-white/50">Anthropic agent harness with models from your GitHub Copilot subscription</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1 text-sm">Available (v1.109 → v1.110)</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-indigo-900/30 rounded">Appears as session type in picker</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Uses Copilot subscription models</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Steering and queuing (v1.110)</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Session renaming</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Context window with compaction</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-sm">Additional Features (v1.110)</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-purple-900/30 rounded">/compact, /agents, /hooks slash commands</div>
<div class="p-1.5 bg-purple-900/30 rounded">getDiagnostics tool access</div>
<div class="p-1.5 bg-purple-900/30 rounded">Custom thinking phrases</div>
<div class="p-1.5 bg-purple-900/30 rounded">Tool search tool for large pools</div>
<div class="p-1.5 bg-purple-900/30 rounded">Performance improvements</div>
</div>
</div>
</div>

<div class="mt-3 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-mono text-gray-400 mb-1">Custom thinking phrases (v1.110)</div>
<pre class="overflow-y-auto max-h-32 text-xs bg-gray-950/80 p-2 rounded border border-gray-700/30"><code class="language-json">{
  "chat.agent.thinking.phrases": {
    "mode": "replace",
    "phrases": [
      "Analyzing architecture...",
      "Evaluating patterns..."
    ]
  }
}</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: Copilot Memory -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 Claude & Anthropic Integration</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Copilot Memory (Preview, v1.109)</div>
<div class="text-xs text-white/50">Persistent context across sessions</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="text-center mb-2">
<div class="text-xl">🧠</div>
<div class="font-bold text-purple-300 text-sm">What It Stores</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-purple-900/30 rounded">Preferences and conventions</div>
<div class="p-1.5 bg-purple-900/30 rounded">Project context</div>
<div class="p-1.5 bg-purple-900/30 rounded">Important decisions</div>
<div class="p-1.5 bg-purple-900/30 rounded">Available across sessions</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="text-center mb-2">
<div class="text-xl">📝</div>
<div class="font-bold text-indigo-300 text-sm">v1.110 Enhancement</div>
</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-indigo-900/30 rounded">Plans from Plan agent persist to session memory</div>
<div class="p-2 bg-indigo-900/30 rounded">Survive context compaction</div>
<div class="p-2 bg-indigo-900/30 rounded">Remain available across turns</div>
</div>
</div>
</div>

<div class="mt-3 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-mono text-gray-400 mb-1">Enable Copilot Memory</div>
<pre class="overflow-y-auto max-h-24 text-xs bg-gray-950/80 p-2 rounded border border-gray-700/30"><code class="language-json">{
  "github.copilot.chat.copilotMemory.enabled": true
}</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Security & UX -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Security & UX</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Sandboxed autonomy and agentic browser tools</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-purple-300 font-semibold">Terminal Sandboxing</div>
<div class="text-xs opacity-70 mt-1">OS-level restriction on agent commands</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-pink-300 font-semibold">YOLO Mode</div>
<div class="text-xs opacity-70 mt-1">/yolo to toggle auto-approve globally</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🌐</div>
<div class="text-rose-300 font-semibold">Agentic Browser</div>
<div class="text-xs opacity-70 mt-1">Agents interact with web apps autonomously</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Auto-approve safe commands while sandboxing blocks system access</span><br />
<span class="text-purple-300 mt-1 block">↳ sandboxed autonomy pattern</span>
</div>
</div>
</div>

---

<!-- SLIDE: Terminal Sandboxing & Auto-Approval -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Security & UX</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Terminal Sandboxing & Auto-Approval</div>
<div class="text-xs text-white/50">OS-level sandboxing + progressive auto-approval expansion</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="text-center mb-2">
<div class="text-xl">🔒</div>
<div class="font-bold text-purple-300 text-sm">Terminal Sandboxing (v1.109+)</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-purple-900/30 rounded">File system: workspace directory only</div>
<div class="p-1.5 bg-purple-900/30 rounded">Network: blocked by default</div>
<div class="p-1.5 bg-purple-900/30 rounded">Allowlist specific domains</div>
<div class="p-1.5 bg-purple-900/30 rounded">macOS (sandbox-exec) & Linux (Landlock)</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-xl border border-pink-500/30">
<div class="text-center mb-2">
<div class="text-xl">⚡</div>
<div class="font-bold text-pink-300 text-sm">YOLO Mode (v1.110)</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-pink-900/30 rounded">/yolo or /autoApprove to enable</div>
<div class="p-1.5 bg-pink-900/30 rounded">/disableYolo to turn off</div>
<div class="p-1.5 bg-pink-900/30 rounded">Global auto-approve toggle</div>
<div class="p-1.5 bg-pink-900/30 rounded">Workspace npm scripts auto-approved</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-mono text-gray-400 mb-1">Sandboxing & auto-approve settings</div>
<pre class="overflow-y-auto max-h-24 text-xs bg-gray-950/80 p-2 rounded border border-gray-700/30"><code class="language-json">{
  "chat.tools.terminal.sandbox.enabled": true,
  "chat.tools.terminal.sandbox.network": ["github.com", "npmjs.com"],
  "chat.tools.terminal.enableAutoApprove": true,
  "chat.tools.terminal.autoApproveWorkspaceNpmScripts": true
}</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: Agentic Browser Tools -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Security & UX</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Agentic Browser Tools (Experimental, v1.110)</div>
<div class="text-xs text-white/50">Agents autonomously interact with the integrated browser to validate web apps</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2 text-sm">Page Navigation</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-cyan-900/30 rounded font-mono">openBrowserPage</div>
<div class="p-1.5 bg-cyan-900/30 rounded font-mono">navigatePage</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2 text-sm">Page Content</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-blue-900/30 rounded font-mono">readPage</div>
<div class="p-1.5 bg-blue-900/30 rounded font-mono">screenshotPage</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 text-sm">User Interaction</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-indigo-900/30 rounded font-mono">clickElement</div>
<div class="p-1.5 bg-indigo-900/30 rounded font-mono">typeInPage</div>
<div class="p-1.5 bg-indigo-900/30 rounded font-mono">handleDialog</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-sm">🎯 Use Case: Build + Validate in One Loop</div>
<div class="grid grid-cols-3 gap-2 text-xs">
<div class="p-2 bg-purple-900/30 rounded text-center">
<div class="font-bold text-purple-400 mb-1">1. Build</div>
<div class="text-gray-300">Agent writes React component</div>
</div>
<div class="p-2 bg-purple-900/30 rounded text-center">
<div class="font-bold text-purple-400 mb-1">2. Validate</div>
<div class="text-gray-300">Agent opens browser, tests interaction</div>
</div>
<div class="p-2 bg-purple-900/30 rounded text-center">
<div class="font-bold text-purple-400 mb-1">3. Iterate</div>
<div class="text-gray-300">Fix → re-test autonomously</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Chat UX Improvements -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Security & UX</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Chat UX & Productivity Improvements</div>
<div class="text-xs text-white/50">Model picker, contextual tips, integrated browser, external indexing</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-xl border border-pink-500/30">
<div class="font-bold text-pink-300 mb-2 text-sm">Model Picker Redesign (v1.110)</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-pink-900/30 rounded">Organized sections (Auto, Featured, Recent, Other)</div>
<div class="p-1.5 bg-pink-900/30 rounded">Search box for large lists</div>
<div class="p-1.5 bg-pink-900/30 rounded">Rich hover with model capabilities</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-sm">Contextual Tips (v1.110)</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-purple-900/30 rounded">Feature discovery suggestions</div>
<div class="p-1.5 bg-purple-900/30 rounded">Based on your usage patterns</div>
<div class="p-1.5 bg-purple-900/30 rounded">chat.tips.enabled</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 text-sm">Integrated Browser (v1.109)</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-indigo-900/30 rounded">Replaces limited Simple Browser</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Sign into websites</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Use DevTools</div>
<div class="p-1.5 bg-indigo-900/30 rounded">Send elements to chat for AI assistance</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2 text-sm">External Indexing (v1.109)</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-blue-900/30 rounded">Non-GitHub workspaces can be remotely indexed</div>
<div class="p-1.5 bg-blue-900/30 rounded">Fast semantic search (#codebase)</div>
<div class="p-1.5 bg-blue-900/30 rounded">Same experience as GitHub repos</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Update VS Code to v1.110+", "Try /init to bootstrap workspace instructions", "Enable thinking tokens (budgetTokens: 4000)", "Try /fork to branch a conversation"]'
  :thisWeek='["Enable terminal sandboxing (sandbox.enabled: true)", "Create first Agent Skill in .github/skills/", "Install an Agent Plugin via @agentPlugins", "Use /compact to manually compact conversation"]'
  :thisMonth='["Define custom agent with subagent invocation", "Enable Copilot Memory (copilotMemory.enabled)", "Try agentic browser tools (enableChatTools: true)", "Use /create-skill to extract a debugging workflow"]'
  footer="VS Code has evolved from a single-chat assistant to a multi-agent orchestration platform. Plan locally → implement in background → validate in browser → merge selectively. The workflow pattern is the real unlock."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📦 Release Notes (v1.108–v1.115)", color: "cyan", items: [
        { href: "https://code.visualstudio.com/updates/v1_115", label: "v1.115 (Apr 8)", description: "VS Code Agents app, terminal tools" },
        { href: "https://code.visualstudio.com/updates/v1_114", label: "v1.114 (Apr 1)", description: "Video in chat, simplified #codebase" },
        { href: "https://code.visualstudio.com/updates/v1_113", label: "v1.113 (Mar 25)", description: "Customizations editor, nested subagents" },
        { href: "https://code.visualstudio.com/updates/v1_112", label: "v1.112 (Mar 18)", description: "Browser debugging, MCP sandboxing" },
        { href: "https://code.visualstudio.com/updates/v1_111", label: "v1.111 (Mar 9)", description: "Autopilot mode, weekly releases begin" },
        { href: "https://code.visualstudio.com/updates/v1_110", label: "v1.110 (Feb)", description: "Agent Plugins, browser tools, /create-*" },
        { href: "https://code.visualstudio.com/updates/v1_109", label: "v1.109 (Jan)", description: "Skills GA, Claude Agent, Memory" },
        { href: "https://code.visualstudio.com/updates/v1_108", label: "v1.108 (Dec)", description: "Skills experimental, Agent Sessions" }
    ] },
    { title: "📘 Documentation", color: "purple", items: [
        { href: "https://code.visualstudio.com/docs/copilot/overview", label: "GitHub Copilot in VS Code", description: "Features, agents, customization" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/agent-plugins", label: "Agent Plugins", description: "Installing and creating bundles" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/agent-skills", label: "Agent Skills", description: "Creating SKILL.md files" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom Agents", description: ".agent.md definitions" },
        { href: "https://code.visualstudio.com/docs/copilot/agents/background-agents", label: "Background Agents", description: "Git worktree isolation" },
        { href: "https://code.visualstudio.com/docs/copilot/chat/mcp-servers", label: "MCP Servers", description: "Model Context Protocol setup" },
        { href: "https://code.visualstudio.com/docs/copilot/chat/copilot-memory", label: "Copilot Memory", description: "Persistent context across sessions" },
        { href: "https://code.visualstudio.com/docs/copilot/chat/chat-customizations", label: "Chat Customizations", description: "Unified customization editor" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="What's New in Copilot for VS Code: v1.108 – v1.115"
:cards="[
  { icon: '📅', value: '8 Releases', detail: 'Weekly cadence from v1.111', subdetail: 'Rapid innovation and iteration' },
  { icon: '🤖', value: 'Autopilot', detail: 'Full agent autonomy (v1.111)', subdetail: 'Hands-free multi-file editing' },
  { icon: '🎭', value: 'Agents App', detail: 'Parallel sessions (v1.115)', subdetail: 'Multiple agents, zero context confusion' },
  { icon: '⚙️', value: 'Customizations', detail: 'Unified editor (v1.113)', subdetail: 'One place for all configuration' },
]"
prompt="Questions? Let's discuss which features to adopt first for your workflow"
/>
