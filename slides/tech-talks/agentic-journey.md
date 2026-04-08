---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## The Agentic Journey: Incremental Path from Issue to PR Automation
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: The Agentic Journey - Incremental Path from Issue to PR Automation
module: tech-talks/agentic-journey
mdc: true
status: active
updated: 2026-02-01
---

<!-- SLIDE: Title Slide -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">The Agentic Journey</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">Incremental Path from Issue to PR Automation</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">4-Workflow Issue Lifecycle with Historical Context Planning</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

<!-- SLIDE: The Core Question -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔓 The Core Question</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 max-w-4xl mx-auto">
<div class="text-2xl font-bold text-cyan-300 mb-4">
"How do I start getting value from GitHub Copilot agents without rewiring my entire SDLC?"
</div>
</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-sm">
<div class="p-4 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30">
<div class="text-xl mb-2">⏱️</div>
<div class="font-semibold text-amber-300">Manual Triage Overhead</div>
<div class="text-xs opacity-80 mt-1">20-30 minutes per issue — classification, duplicate checking, team routing</div>
</div>
<div class="p-4 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
<div class="text-xl mb-2">🎯</div>
<div class="font-semibold text-orange-300">Planning from Scratch</div>
<div class="text-xs opacity-80 mt-1">2-4 hours researching codebase without learning from past similar work</div>
</div>
<div class="p-4 bg-gradient-to-br from-red-900/30 to-purple-900/30 rounded-lg border border-red-500/30">
<div class="text-xl mb-2">🔍</div>
<div class="font-semibold text-red-300">Review Bottleneck</div>
<div class="text-xs opacity-80 mt-1">Agent-generated code arrives 10-15x faster than human review capacity</div>
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
<div class="text-3xl mb-2">📥</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Phase 1: Agentic Intake</div>
<div class="text-sm text-gray-300 mt-1">Automatic triage & duplicate detection</div>
<div class="text-xs text-cyan-400/70 mt-2">20-30 min → 3 min per issue</div>
</div>
</div>
<div @click="$nav.go(7)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">📋</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Phase 2: Agentic Planning</div>
<div class="text-sm text-gray-300 mt-1">Historical context research & execution plans</div>
<div class="text-xs text-blue-400/70 mt-2">2-4 hours → 15 min planning time</div>
</div>
</div>
<div @click="$nav.go(10)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">💻</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Phase 3: Agentic Coding</div>
<div class="text-sm text-gray-300 mt-1">Implementation from approved plans</div>
<div class="text-xs text-indigo-400/70 mt-2">8-12 hours → 1-2 hours to PR</div>
</div>
</div>
<div @click="$nav.go(12)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🔍</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Phase 4: Code Review</div>
<div class="text-sm text-gray-300 mt-1">Security & outcome validation</div>
<div class="text-xs text-purple-400/70 mt-2">2-4 hours → 20 min review time</div>
</div>
</div>
</div>

<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Agentic Intake -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Agentic Intake</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Automatic triage, duplicate detection, and routing</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">🔍</div>
<div class="text-cyan-300 font-semibold">Context Gathering</div>
<div class="text-xs opacity-70 mt-1">Issue analysis + related file detection</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-blue-300 font-semibold">Duplicate Detection</div>
<div class="text-xs opacity-70 mt-1">Search 6 months history, 88% accuracy</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-indigo-300 font-semibold">Smart Routing</div>
<div class="text-xs opacity-70 mt-1">Classification, priority, team assignment</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Every new issue triggers automated analysis</span><br />
<span class="text-cyan-300 mt-1 block">↳ 20-30 min → 3 min per issue</span>
</div>
</div>
</div>

---

<!-- SLIDE: Triage Workflow & Metrics -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📥 Agentic Intake</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-xs text-white/50">Triggered automatically on every new issue — 4 steps in ~3 minutes</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">1</div>
<div class="font-bold text-cyan-300 text-sm">Context Gathering</div>
</div>
<div class="text-xs text-gray-300">Read issue title, description, related files, recent similar issues</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">2</div>
<div class="font-bold text-blue-300 text-sm">Duplicate Detection</div>
</div>
<div class="text-xs text-gray-300">Search open and closed issues from last 6 months, calculate similarity</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs">3</div>
<div class="font-bold text-indigo-300 text-sm">Routing & Labeling</div>
</div>
<div class="text-xs text-gray-300">Classify type, priority, affected component, suggest assignee</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">4</div>
<div class="font-bold text-purple-300 text-sm">Context Summary</div>
</div>
<div class="text-xs text-gray-300">Generate analysis with affected files, root cause, suggested approach</div>
</div>
</div>
<div>
<div class="p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 mb-3">
<div class="font-bold text-white text-sm mb-3">Success Metrics (50 issues/month)</div>
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-red-900/30 rounded">
<div class="text-red-400 font-mono">30 min</div>
<div class="text-gray-400 mt-0.5">Before: Time to triage</div>
</div>
<div class="p-2 bg-green-900/30 rounded">
<div class="text-green-400 font-mono">&lt;5 min</div>
<div class="text-gray-400 mt-0.5">After: Time to triage</div>
</div>
<div class="p-2 bg-red-900/30 rounded">
<div class="text-red-400 font-mono">60%</div>
<div class="text-gray-400 mt-0.5">Before: Duplicate detection</div>
</div>
<div class="p-2 bg-green-900/30 rounded">
<div class="text-green-400 font-mono">&gt;90%</div>
<div class="text-gray-400 mt-0.5">After: Duplicate detection</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 text-center">
<div class="text-sm font-semibold text-cyan-300">ROI: $2,000/month savings · 2-3 hours setup</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case — Duplicate Elimination -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📥 Agentic Intake</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-xs text-white/50">Real-world team: 50 issues/month with 15% duplicate rate</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-3">❌ The Problem</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="p-2 bg-red-900/30 rounded">Developers spend <span class="text-red-400 font-mono">45 minutes</span> per duplicate researching before realizing already fixed</div>
<div class="p-2 bg-red-900/30 rounded">Context-switch cost pulls developers away from feature work</div>
<div class="p-2 bg-red-900/30 rounded">Manual duplicate search only catches <span class="text-red-400 font-mono">60%</span> — others discovered mid-implementation</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-3">✅ The Solution</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="p-2 bg-green-900/30 rounded">Phase 1 agent searches open + closed issues, calculates similarity</div>
<div class="p-2 bg-green-900/30 rounded">Auto-labels duplicates with references to original fix</div>
<div class="p-2 bg-green-900/30 rounded">Detection rate: <span class="text-green-400 font-mono">&gt;90%</span> — catches duplicates in <span class="text-green-400 font-mono">3 minutes</span></div>
</div>
</div>
</div>

<div class="mt-2 p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/30">
<div class="text-sm font-bold text-cyan-300 mb-2">Outcome</div>
<div class="text-xs text-gray-300">
Duplicate rate dropped from <span class="text-red-400">15%</span> to <span class="text-green-400">&lt;3%</span>. Saved <span class="text-cyan-400 font-mono">7 × 40 minutes = 4.7 hours/month</span> on duplicates alone.
</div>
</div>

<div class="mt-2 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50 text-xs text-gray-300">
<span class="font-bold text-gray-400 uppercase tracking-wider text-[10px]">Example: </span>Issue #4821 matched #4203 at 88% similarity — auto-labeled in 3 min, saving 45 min of duplicate work.
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Agentic Planning -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Agentic Planning</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Historical context research & execution plan generation</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🔍</div>
<div class="text-blue-300 font-semibold">Historical Context</div>
<div class="text-xs opacity-70 mt-1">Search similar past issues + PRs</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📋</div>
<div class="text-indigo-300 font-semibold">Execution Plan</div>
<div class="text-xs opacity-70 mt-1">Files, dependencies, effort estimate</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">✋</div>
<div class="text-purple-300 font-semibold">Human Approval</div>
<div class="text-xs opacity-70 mt-1">Agents plan, humans decide</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Plans informed by historical data</span><br />
<span class="text-blue-300 mt-1 block">↳ ±20% estimate accuracy vs ±50% without</span>
</div>
</div>
</div>

---

<!-- SLIDE: Historical Context Innovation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Agentic Planning</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">The Key Innovation: Learning From History</div>
<div class="text-xs text-white/50">Don't plan from scratch — research similar past implementations first</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30 mb-2">
<div class="text-sm font-bold text-blue-300 mb-2">Example: Adding Microsoft OAuth Support</div>
<div class="text-xs text-gray-300">
<div class="p-3 bg-blue-900/30 rounded-lg mb-2">
<div class="font-mono text-blue-400 mb-1">Agent searches for similar past issues and PRs:</div>
<div class="ml-3 space-y-1.5">
<div>• <strong>"Add Google OAuth"</strong> (#2847) → PR #2851: 6 hours, 8 files</div>
<div class="ml-3 text-cyan-400">Lesson: Token refresh edge case required extra test</div>
<div>• <strong>"Add GitHub OAuth"</strong> (#3104) → PR #3109: 5 hours, 7 files</div>
<div class="ml-3 text-cyan-400">Lesson: Multi-tenant config needed for enterprise users</div>
</div>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-2">❌ Without Historical Context</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Plan from scratch every time</div>
<div>• Miss edge cases from previous work</div>
<div>• <span class="text-red-400 font-mono">±50%</span> estimate accuracy</div>
<div>• Mid-implementation surprises</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-lg border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-2">✅ With Historical Context</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Learn patterns from similar issues</div>
<div>• Surface edge cases before coding</div>
<div>• <span class="text-green-400 font-mono">±20%</span> estimate accuracy</div>
<div>• <span class="text-green-400">60% fewer</span> mid-implementation surprises</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-500/30 text-center">
<div class="text-xs font-semibold text-blue-300">Result: Planning time 4 hours → 15 minutes — and more accurate plans · ROI: $7,000/month</div>
</div>
</div>
</div>

---

<!-- SLIDE: Planning Metrics & Example -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Agentic Planning</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Human Approval Gate & Metrics</div>
<div class="text-xs text-white/50">Plan posts as issue comment and waits for `/approve-plan` command</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-1">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-2">Before Agents</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="flex justify-between p-1 bg-red-900/20 rounded">
<span>Time to plan</span>
<span class="text-red-400 font-mono">4 hours</span>
</div>
<div class="flex justify-between p-1 bg-red-900/20 rounded">
<span>Estimate accuracy</span>
<span class="text-red-400 font-mono">±50%</span>
</div>
<div class="flex justify-between p-1 bg-red-900/20 rounded">
<span>Missing requirements</span>
<span class="text-red-400 font-mono">25%</span>
</div>
<div class="flex justify-between p-1 bg-red-900/20 rounded">
<span>Historical context</span>
<span class="text-red-400 font-mono">0%</span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-2">After Automation</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="flex justify-between p-1 bg-green-900/20 rounded">
<span>Time to plan</span>
<span class="text-green-400 font-mono">&lt;30 min</span>
</div>
<div class="flex justify-between p-1 bg-green-900/20 rounded">
<span>Estimate accuracy</span>
<span class="text-green-400 font-mono">±20%</span>
</div>
<div class="flex justify-between p-1 bg-green-900/20 rounded">
<span>Missing requirements</span>
<span class="text-green-400 font-mono">&lt;10%</span>
</div>
<div class="flex justify-between p-1 bg-green-900/20 rounded">
<span>Historical context</span>
<span class="text-green-400 font-mono">&gt;80%</span>
</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-1">Example Plan Output</div>
<div class="text-xs font-mono text-gray-300 space-y-1">
<div class="text-indigo-400">📋 EXECUTION PLAN: Add Microsoft OAuth Support</div>
<div class="ml-3 space-y-0.5">
<div class="text-cyan-400">Historical Context:</div>
<div class="ml-3 opacity-80">Based on Issue #2847 "Add Google OAuth" and #3104 "Add GitHub OAuth"</div>
<div class="ml-3">✓ Token refresh edge cases require explicit testing</div>
<div class="ml-3">✓ Multi-tenant configuration needed for enterprise</div>
<div class="text-cyan-400 mt-1">Affected Files:</div>
<div class="ml-3">1. src/auth/providers/microsoft-oauth.ts (new)</div>
<div class="ml-3">2. src/auth/oauth-handler.ts (modify)</div>
<div class="text-cyan-400">Estimated Effort: 6-8 hours (historical average)</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Agentic Coding -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">Agentic Coding</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Implementation from approved plans</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">✅</div>
<div class="text-indigo-300 font-semibold">Already Available</div>
<div class="text-xs opacity-70 mt-1">Assign to copilot-swe-agent[bot]</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">📋</div>
<div class="text-purple-300 font-semibold">Plan-Driven</div>
<div class="text-xs opacity-70 mt-1">Implementation follows approved plan</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-pink-300 font-semibold">Auto-PR Creation</div>
<div class="text-xs opacity-70 mt-1">Tests + commit + push + PR</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">This workflow formalizes the process</span><br />
<span class="text-indigo-300 mt-1 block">↳ connecting Phase 2 plan to GitHub Copilot agent</span>
</div>
</div>
</div>

---

<!-- SLIDE: Coding Metrics -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💻 Agentic Coding</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 1</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Implementation Quality & Speed</div>
<div class="text-xs text-white/50">Phase 3 connects approved plans to GitHub Copilot SWE agent</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-2">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-1">Before Agents</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex justify-between p-1.5 bg-red-900/20 rounded">
<span>Implementation time</span>
<span class="text-red-400 font-mono">8-12 hours</span>
</div>
<div class="flex justify-between p-1.5 bg-red-900/20 rounded">
<span>Time to first PR</span>
<span class="text-red-400 font-mono">1-2 days</span>
</div>
<div class="flex justify-between p-1.5 bg-red-900/20 rounded">
<span>Initial test pass rate</span>
<span class="text-red-400 font-mono">70%</span>
</div>
<div class="flex justify-between p-1.5 bg-red-900/20 rounded">
<span>PRs requiring rework</span>
<span class="text-red-400 font-mono">30%</span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-1">After Automation</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex justify-between p-1.5 bg-green-900/20 rounded">
<span>Implementation time</span>
<span class="text-green-400 font-mono">1-2 hours</span>
</div>
<div class="flex justify-between p-1.5 bg-green-900/20 rounded">
<span>Time to first PR</span>
<span class="text-green-400 font-mono">2-4 hours</span>
</div>
<div class="flex justify-between p-1.5 bg-green-900/20 rounded">
<span>Initial test pass rate</span>
<span class="text-green-400 font-mono">&gt;90%</span>
</div>
<div class="flex justify-between p-1.5 bg-green-900/20 rounded">
<span>PRs requiring rework</span>
<span class="text-green-400 font-mono">&lt;15%</span>
</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-2">Implementation Guidelines (from prompt template)</div>
<div class="text-xs text-gray-300 grid grid-cols-2 gap-2">
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Follow existing code style and patterns</div>
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Write tests for all new functionality</div>
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Make small, atomic commits</div>
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Keep functions focused and single-purpose</div>
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Ensure proper error handling</div>
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Add descriptive commit messages</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xs font-semibold text-purple-300">Result: 6-10x faster implementation with higher quality · ROI: $17,000/month</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Code Review -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Code Review Agent</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Security, logic, performance, and test coverage validation</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-purple-300 font-semibold">Security Scan</div>
<div class="text-xs opacity-70 mt-1">SQL injection, XSS, auth bypasses</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-pink-300 font-semibold">Performance Check</div>
<div class="text-xs opacity-70 mt-1">O(n²) algorithms, N+1 queries</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🧪</div>
<div class="text-rose-300 font-semibold">Test Coverage</div>
<div class="text-xs opacity-70 mt-1">Edge cases, integration tests</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Agent volume is 10-15x traditional</span><br />
<span class="text-purple-300 mt-1 block">↳ code review becomes the bottleneck</span>
</div>
</div>
</div>

---

<!-- SLIDE: Review Focus Areas -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Code Review</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">What the Agent Reviews: 4 Focus Areas</div>
<div class="text-xs text-white/50">Complete automated analysis in ~6 minutes — structured output for human validation</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-2">
<div class="p-2 bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-lg border border-red-500/30">
<div class="flex items-center justify-between mb-1">
<div class="font-bold text-red-300 text-sm">🔒 Security</div>
<div class="text-xs text-red-400 font-mono">~2 min</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• SQL injection patterns</div>
<div>• XSS vulnerabilities</div>
<div>• Auth bypass risks</div>
<div>• Hardcoded secrets</div>
<div>• Unsafe dependencies</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-orange-900/40 to-orange-800/40 rounded-lg border border-orange-500/30">
<div class="flex items-center justify-between mb-1">
<div class="font-bold text-orange-300 text-sm">⚙️ Logic</div>
<div class="text-xs text-orange-400 font-mono">~2 min</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Error handling completeness</div>
<div>• Edge case coverage</div>
<div>• Race conditions</div>
<div>• Resource leaks</div>
<div>• State management bugs</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="flex items-center justify-between mb-1">
<div class="font-bold text-purple-300 text-sm">⚡ Performance</div>
<div class="text-xs text-purple-400 font-mono">~1 min</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• O(n²) algorithms</div>
<div>• N+1 query patterns</div>
<div>• Blocking operations</div>
<div>• Caching opportunities</div>
<div>• Memory inefficiencies</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/40 to-pink-800/40 rounded-lg border border-pink-500/30">
<div class="flex items-center justify-between mb-1">
<div class="font-bold text-pink-300 text-sm">🧪 Tests</div>
<div class="text-xs text-pink-400 font-mono">~1 min</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Coverage on new code</div>
<div>• Edge case test presence</div>
<div>• Integration test quality</div>
<div>• Flaky test detection</div>
<div>• Test maintainability</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-1">The Paradigm Shift</div>
<div class="text-xs text-gray-300">
Human review shifts from <span class="text-red-400">"read every line"</span> to <span class="text-green-400">"validate outcomes against intent"</span> — does the implementation match the approved plan? Agent catches 95% of technical issues; humans validate strategic alignment.
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Review Metrics & Security Impact -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Code Review</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Impact: Security Review at Scale</div>
<div class="text-xs text-white/50">Real-world example: 40 PRs/month team generating agent code</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-4">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-3">❌ The Problem</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="p-2 bg-red-900/30 rounded"><span class="text-red-400 font-mono">2-4 hours</span> per PR review</div>
<div class="p-2 bg-red-900/30 rounded">Race condition in token refresh logic slipped through manual review</div>
<div class="p-2 bg-red-900/30 rounded">Caused production incident — 45 min downtime</div>
<div class="p-2 bg-red-900/30 rounded">Review capacity bottleneck blocking velocity</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-3">✅ The Solution</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="p-2 bg-green-900/30 rounded">Agent analyzes security, logic, performance in <span class="text-green-400 font-mono">6 minutes</span></div>
<div class="p-2 bg-green-900/30 rounded">Race condition pattern flagged automatically</div>
<div class="p-2 bg-green-900/30 rounded">Human reads agent analysis in <span class="text-green-400 font-mono">15 min</span> vs entire diff in 3 hours</div>
<div class="p-2 bg-green-900/30 rounded">Same pattern caught in next PR before merge</div>
</div>
</div>
</div>

<div class="grid grid-cols-4 gap-3 mb-3">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30 text-center">
<div class="text-lg font-bold text-purple-300">3h → 20m</div>
<div class="text-xs opacity-70 mt-1">Review time per PR</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30 text-center">
<div class="text-lg font-bold text-pink-300">&gt;95%</div>
<div class="text-xs opacity-70 mt-1">Critical bugs caught</div>
</div>
<div class="p-3 bg-gradient-to-br from-rose-900/30 to-rose-800/20 rounded-lg border border-rose-500/30 text-center">
<div class="text-lg font-bold text-rose-300">0/quarter</div>
<div class="text-xs opacity-70 mt-1">Security incidents</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30 text-center">
<div class="text-lg font-bold text-purple-300">8-12x</div>
<div class="text-xs opacity-70 mt-1">Review capacity</div>
</div>
</div>

<div class="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xs font-semibold text-purple-300">Outcome: Review bottleneck eliminated · Security improved · ROI: $10,000/month</div>
</div>
</div>
</div>

---

<!-- SLIDE: When to Graduate to Full SDLC -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Graduation Path</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">The Inflection Point: When Quick Wins Hit Limits</div>
<div class="text-xs text-white/50">Watch for these signals that you've outgrown Phases 1-4</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-2">
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-xs font-bold text-red-300 mb-1 uppercase tracking-wider">⚠️ Signals You've Outgrown Phase 1-4</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• <strong>Repository Chaos:</strong> Agents touching 3-5 repos per feature</div>
<div>• <strong>CI Bottleneck:</strong> Queue time &gt;60 minutes</div>
<div>• <strong>Review Overwhelm:</strong> 50+ PRs open, 10+ days to review</div>
<div>• <strong>Test Flakiness:</strong> &gt;10% flaky test rate</div>
<div>• <strong>Manual Governance:</strong> Compliance requires human review</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-lg border border-green-500/30">
<div class="text-xs font-bold text-green-300 mb-1 uppercase tracking-wider">✅ Solutions: Full SDLC Transformation</div>
<div class="text-xs text-gray-300 space-y-1">
<div>→ <strong>Monorepo consolidation</strong> (eliminate coordination overhead)</div>
<div>→ <strong>Trust factory CI</strong> (&lt;10 min PR checks)</div>
<div>→ <strong>Outcome-based PRs</strong> (evidence bundles)</div>
<div>→ <strong>Hermetic builds</strong> (deterministic signal)</div>
<div>→ <strong>Automated attestations</strong> (compliance verification)</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="text-sm font-bold text-cyan-300 mb-1">The Upgrade Path</div>
<div class="text-xs font-mono text-gray-300">
<div class="grid grid-cols-2 gap-3">
<div>
<div class="text-cyan-400 mb-1">PHASE 1-4 (Quick Wins)</div>
<div class="space-y-0.5 ml-2">
<div>✓ Issue → PR automation</div>
<div>✓ Agent-generated code</div>
<div>✓ Code review assistance</div>
<div>~ Manual coordination</div>
<div>~ Traditional CI (slow)</div>
<div class="text-cyan-400 mt-2">THROUGHPUT: 5-10 features/week</div>
</div>
</div>
<div>
<div class="text-green-400 mb-1">PHASE 5 (Full SDLC)</div>
<div class="space-y-0.5 ml-2">
<div>✓ Monorepo with module boundaries</div>
<div>✓ Feature-scale PRs (500-2000 lines)</div>
<div>✓ Intent-based reviews</div>
<div>✓ Atomic merges</div>
<div>✓ CI as trust factory (&lt;10 min)</div>
<div class="text-green-400 mt-2">THROUGHPUT: 10-15 features/day</div>
</div>
</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-xl border border-pink-500/30 text-center">
<div class="text-xs font-semibold text-pink-300">Phases 1-4 build proof of value and executive support for the full transformation</div>
</div>
</div>
</div>

---

<!-- SLIDE: Expected ROI -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-cyan-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-emerald-600/80 to-cyan-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💰 ROI Analysis</span>
<div class="flex-1 h-px bg-gradient-to-r from-emerald-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Expected ROI by Phase</div>
<div class="text-xs text-white/50">Based on $100/hour developer cost, 50 issues/month</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="space-y-1.5 mb-1">
<div class="grid grid-cols-4 gap-3">
<div class="p-2 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30 text-center">
<div class="text-xl font-bold text-cyan-300">Phase 1</div>
<div class="text-xs opacity-70">Intake</div>
</div>
<div class="p-2 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg border border-gray-700/30">
<div class="text-xs text-gray-400 mb-1">Setup</div>
<div class="text-sm text-white font-mono">2-3 hours</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
<div class="text-xs text-gray-400 mb-1">Monthly</div>
<div class="text-sm text-green-300 font-mono">$2,000</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 rounded-lg border border-emerald-500/30">
<div class="text-xs text-gray-400 mb-1">Annual</div>
<div class="text-sm text-emerald-300 font-mono">$24,000</div>
</div>
</div>
<div class="grid grid-cols-4 gap-3">
<div class="p-2 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30 text-center">
<div class="text-xl font-bold text-blue-300">Phase 2</div>
<div class="text-xs opacity-70">Planning</div>
</div>
<div class="p-2 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg border border-gray-700/30">
<div class="text-xs text-gray-400 mb-1">Setup</div>
<div class="text-sm text-white font-mono">2-3 hours</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
<div class="text-xs text-gray-400 mb-1">Monthly</div>
<div class="text-sm text-green-300 font-mono">$7,000</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 rounded-lg border border-emerald-500/30">
<div class="text-xs text-gray-400 mb-1">Annual</div>
<div class="text-sm text-emerald-300 font-mono">$84,000</div>
</div>
</div>
<div class="grid grid-cols-4 gap-3">
<div class="p-2 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30 text-center">
<div class="text-xl font-bold text-indigo-300">Phase 3</div>
<div class="text-xs opacity-70">Coding</div>
</div>
<div class="p-2 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg border border-gray-700/30">
<div class="text-xs text-gray-400 mb-1">Setup</div>
<div class="text-sm text-white font-mono">0 hours</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
<div class="text-xs text-gray-400 mb-1">Monthly</div>
<div class="text-sm text-green-300 font-mono">$17,000</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 rounded-lg border border-emerald-500/30">
<div class="text-xs text-gray-400 mb-1">Annual</div>
<div class="text-sm text-emerald-300 font-mono">$204,000</div>
</div>
</div>
<div class="grid grid-cols-4 gap-3">
<div class="p-2 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30 text-center">
<div class="text-xl font-bold text-purple-300">Phase 4</div>
<div class="text-xs opacity-70">Review</div>
</div>
<div class="p-2 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg border border-gray-700/30">
<div class="text-xs text-gray-400 mb-1">Setup</div>
<div class="text-sm text-white font-mono">1-2 hours</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
<div class="text-xs text-gray-400 mb-1">Monthly</div>
<div class="text-sm text-green-300 font-mono">$10,000</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 rounded-lg border border-emerald-500/30">
<div class="text-xs text-gray-400 mb-1">Annual</div>
<div class="text-sm text-emerald-300 font-mono">$120,000</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-r from-emerald-600/80 to-cyan-600/80 rounded-xl border-2 border-emerald-400 shadow-lg">
<div class="grid grid-cols-3 gap-4 text-center">
<div>
<div class="text-xs text-white/70 mb-1">Combined Setup</div>
<div class="text-xl font-bold text-white">~8 hours</div>
</div>
<div>
<div class="text-xs text-white/70 mb-1">Monthly Savings</div>
<div class="text-xl font-bold text-white">$36,000</div>
</div>
<div>
<div class="text-xs text-white/70 mb-1">Annual Savings</div>
<div class="text-xl font-bold text-white">$432,000</div>
</div>
</div>
</div>

<div class="mt-2 text-center text-xs text-gray-400 italic">Phase 5 (full SDLC) adds $1.8M/year but requires 3-6 month investment</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Next Steps</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">What You Can Do Today</div>
<div class="text-xs text-white/50">Progressive implementation path — each phase builds on the previous</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-4">
<div class="p-4 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/30">
<div class="text-sm font-bold text-cyan-300 mb-3">🚀 Immediate (15 minutes)</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="flex items-start gap-2">
<div class="text-cyan-400 mt-0.5">□</div>
<div>Review the 4 workflow files in talk repository</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 mt-0.5">□</div>
<div>Identify repo with highest issue volume</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 mt-0.5">□</div>
<div>Check prerequisites: Actions enabled, Copilot license active</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="text-sm font-bold text-blue-300 mb-3">⚡ Short-Term (2-3 hours)</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">□</div>
<div>Copy <span class="font-mono">1-issue-triage.yml</span> to your repo</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">□</div>
<div>Create prompt templates in <span class="font-mono">.github/prompts/</span></div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">□</div>
<div>Configure <span class="font-mono">COPILOT_GITHUB_TOKEN</span> secret</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">□</div>
<div>Create test issue and verify workflow</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-3">📈 Advanced (1-2 weeks)</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">□</div>
<div>Add Phases 2-4 progressively (one per week)</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">□</div>
<div>Customize prompts for team coding standards</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">□</div>
<div>Track metrics: triage time, plan accuracy, review speed</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">□</div>
<div>Monitor for Phase 5 graduation signals</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-bold text-purple-300 mb-2">Next Steps After Completion</div>
<div class="text-xs text-gray-300 space-y-1">
<div>1. ✅ Complete Phase 1 deployment and validate for 1-2 weeks</div>
<div>2. 📖 Review <strong>Agentic SDLC</strong> talk for full transformation planning</div>
<div>3. 📊 Build ROI dashboard from metrics to justify expansion</div>
<div>4. 🚀 Present results to leadership using <strong>Agentic Delivery</strong> executive framing</div>
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
<div class="grid grid-cols-2 gap-4 text-xs">
<div>
<div class="font-bold text-cyan-300 mb-2 text-sm">📖 Official Documentation</div>
<div class="space-y-1.5">
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://docs.github.com/en/copilot" class="text-cyan-400 hover:text-cyan-300 font-medium">GitHub Copilot Documentation</a>
<div class="text-gray-400 mt-0.5">Core concepts, getting started guide, and overview</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent" class="text-cyan-400 hover:text-cyan-300 font-medium">Copilot Coding Agent for PRs</a>
<div class="text-gray-400 mt-0.5">Agent-assisted PR workflows and review</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line" class="text-cyan-400 hover:text-cyan-300 font-medium">Using Copilot in the Command Line</a>
<div class="text-gray-400 mt-0.5">CLI installation and programmatic mode</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions" class="text-cyan-400 hover:text-cyan-300 font-medium">GitHub Actions Workflow Syntax</a>
<div class="text-gray-400 mt-0.5">Triggers, jobs, steps, and permissions</div>
</div>
</div>
</div>
<div>
<div class="font-bold text-purple-300 mb-2 text-sm">🎓 Related Content</div>
<div class="space-y-1.5">
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<span class="text-purple-400 font-medium">Agentic SDLC</span>
<div class="text-gray-400 mt-0.5">Full Gen-4 transformation: repository topology, PR workflows, CI trust factory</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<span class="text-purple-400 font-medium">Agent Teams</span>
<div class="text-gray-400 mt-0.5">Specialized agent patterns for complex multi-agent coordination</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<span class="text-purple-400 font-medium">Copilot Hooks</span>
<div class="text-gray-400 mt-0.5">Governance and control mechanisms for agent behavior</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<span class="text-purple-400 font-medium">Enterprise Patterns</span>
<div class="text-gray-400 mt-0.5">Organization-wide adoption patterns and rollout strategies</div>
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
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-48" alt="" /></div>
<img src="./sdp-logo.png" class="w-48 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Thank You!</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">The Agentic Journey: Incremental Path to Automation</span>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-400 font-bold text-lg">20-30min → 3min</div>
<div class="opacity-80 text-xs">Issue triage time with Phase 1</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-400 font-bold text-lg">±20%</div>
<div class="opacity-80 text-xs">Plan accuracy with historical context</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-400 font-bold text-lg">$432K/year</div>
<div class="opacity-80 text-xs">Combined ROI (50 issues/month)</div>
</div>
</div>
<div class="mt-6 text-sm opacity-60 relative z-10">Questions? Let's discuss your incremental adoption path — start with Phase 1 this week</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
