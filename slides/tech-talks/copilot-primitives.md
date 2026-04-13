---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Configuration Primitives
  Making AI Understand Your Codebase
drawings:
  persist: false
transition: slide-left
title: Copilot Configuration Primitives
module: tech-talks/copilot-primitives
mdc: true
status: active
updated: 2026-03-23
---

<script setup>
import TitleSlide from '../components/TitleSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="Copilot Configuration Primitives"
subtitle="Making AI Understand Your Codebase"
tagline="Four building blocks that transform Copilot from generic assistant to team-aware partner"
meta="Tech Talk · 30 minutes"
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
<div class="text-3xl font-semibold mb-4">"How can I make GitHub Copilot understand my codebase better?"</div>
<div class="text-xl opacity-90 mt-6">This isn't a limitation of the AI model — it's a context problem. <span class="text-cyan-300 font-semibold">Copilot's response quality is directly proportional to how much it knows about your specific codebase.</span></div>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 rounded-lg border border-cyan-500/20 text-center">
<div class="text-cyan-300 font-bold">Repeated Context</div>
<div class="opacity-70 mt-1">Same explanations every session</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-lg border border-blue-500/20 text-center">
<div class="text-blue-300 font-bold">Generic Responses</div>
<div class="opacity-70 mt-1">Textbook, not your patterns</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 rounded-lg border border-indigo-500/20 text-center">
<div class="text-indigo-300 font-bold">Inconsistent Quality</div>
<div class="opacity-70 mt-1">Varies by developer context</div>
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
<div class="grid grid-cols-2 gap-4 mt-6 max-w-4xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">📖</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Instructions</div>
<div class="text-sm text-gray-300 mt-1">The foundation — always-on context</div>
<div class="text-xs text-cyan-400/70 mt-1">Transform Copilot in 5 minutes</div>
</div>
</div>
<div @click="$nav.go(9)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">🔧</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Skills</div>
<div class="text-sm text-gray-300 mt-1">On-demand expertise packs</div>
<div class="text-xs text-blue-400/70 mt-1">Progressive loading keeps context efficient</div>
</div>
</div>
<div @click="$nav.go(11)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">📋</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Custom Prompts</div>
<div class="text-sm text-gray-300 mt-1">Reusable workflow templates</div>
<div class="text-xs text-indigo-400/70 mt-1">Standardized team tasks via /command</div>
</div>
</div>
<div @click="$nav.go(13)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🤖</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Custom Agents</div>
<div class="text-sm text-gray-300 mt-1">Specialized AI personas</div>
<div class="text-xs text-purple-400/70 mt-1">Constrained tools + guided handoffs</div>
</div>
</div>
</div>

<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Instructions -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Instructions</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">The foundation — always-on context</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">📖</div>
<div class="text-cyan-300 font-semibold">Always Active</div>
<div class="text-xs opacity-70 mt-1">Injected into every request automatically</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-blue-300 font-semibold">Three Selectors</div>
<div class="text-xs opacity-70 mt-1">Repo-wide, path-specific, and directory-local</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-indigo-300 font-semibold">5-Minute Setup</div>
<div class="text-xs opacity-70 mt-1">Immediate project-aware responses</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">One file = team-aware Copilot</span><br />
<span class="text-cyan-300 mt-1 block">↳ encode conventions once, apply everywhere</span>
</div>
</div>
</div>

---

<!-- SLIDE: Instructions — Three Selectors -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Instructions</span>
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
<div class="text-lg font-bold text-white mb-0.5">Three Ways to Scope Instructions</div>
<div class="text-xs text-white/50">Each selector targets a different context level</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="flex flex-col p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">📦</div>
<div class="font-bold text-cyan-300 text-sm mb-1">Repository Selector</div>
<div class="text-xs opacity-80 mb-2">Applies to every request in the repo</div>
<div class="flex-1 bg-gray-950/50 rounded p-2 font-mono text-xs text-cyan-200 border border-cyan-500/20">
.github/<br/>copilot-instructions.md
</div>
<div class="mt-2 text-xs text-cyan-400/70">Best for: tech stack, build commands, coding standards</div>
</div>

<div class="flex flex-col p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="font-bold text-blue-300 text-sm mb-1">File-Pattern Selector</div>
<div class="text-xs opacity-80 mb-2">Applies when <code>applyTo</code> matches</div>
<div class="flex-1 bg-gray-950/50 rounded p-2 font-mono text-xs text-blue-200 border border-blue-500/20">
.github/instructions/<br/>models.instructions.md
</div>
<div class="mt-2 text-xs text-blue-400/70">Best for: path-specific conventions (src/models/**)</div>
</div>

<div class="flex flex-col p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📂</div>
<div class="font-bold text-indigo-300 text-sm mb-1">Directory Selector</div>
<div class="text-xs opacity-80 mb-2">Nearest file in tree (agent playbook)</div>
<div class="flex-1 bg-gray-950/50 rounded p-2 font-mono text-xs text-indigo-200 border border-indigo-500/20">
frontend/<br/>AGENTS.md
</div>
<div class="mt-2 text-xs text-indigo-400/70">Best for: local commands, tests, subproject rules</div>
</div>
</div>

<div class="mt-3 p-2 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30">
<div class="text-xs opacity-90"><strong>Key Principle:</strong> All matching instructions combine. Repo-wide + path-specific + directory-local all apply when relevant.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Instructions — Repository-Wide Pattern -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Instructions</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Repository-Wide Instructions Example</div>
<div class="text-xs text-white/50">.github/copilot-instructions.md — the 5-minute transformation</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="flex-1 bg-gray-950/80 rounded-xl border border-cyan-500/30 p-3 overflow-y-auto flex flex-col gap-2 text-xs">
<div class="font-mono text-cyan-300"># Repository Instructions</div>
<div class="text-gray-300 leading-relaxed space-y-1">
<div>This repository uses <strong>TypeScript with strict type checking enabled</strong>.</div>
<div class="mt-2 font-semibold text-white">## Build and Test</div>
<div>• Build: <code class="bg-gray-900 px-1 rounded">npm run build</code></div>
<div>• Tests: <code class="bg-gray-900 px-1 rounded">npm test</code> (Jest, co-located in __tests__/)</div>
<div class="mt-2 font-semibold text-white">## Coding Standards</div>
<div>• Prefer functional programming patterns</div>
<div>• Use explicit return types for all functions</div>
<div>• Add JSDoc comments for exported functions</div>
<div>• Use named exports (avoid default exports)</div>
<div class="mt-2 font-semibold text-white">## Error Handling</div>
<div>• Use custom error classes extending Error</div>
<div>• Log with structured logging (logger.error())</div>
<div>• Never swallow errors silently</div>
</div>
</div>

<div class="grid grid-cols-2 gap-2">
<div class="p-2 bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 rounded-lg border border-emerald-500/30">
<div class="text-xs font-semibold text-emerald-300 mb-1">✅ Before vs After</div>
<div class="text-xs opacity-80 space-y-1">
<div><strong>Before:</strong> Generic Express boilerplate</div>
<div><strong>After:</strong> TypeScript endpoint with Prisma, custom errors, JSDoc, co-located tests</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30">
<div class="text-xs font-semibold text-cyan-300 mb-1">📊 Real Impact</div>
<div class="text-xs opacity-80 space-y-1">
<div><strong>40% reduction</strong> in style review comments</div>
<div><strong>5 minutes</strong> to implement</div>
<div><strong>Zero training</strong> — instant team-wide effect</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Instructions — Path-Specific Targeting -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Instructions</span>
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
<div class="text-lg font-bold text-white mb-0.5">Path-Specific Instructions</div>
<div class="text-xs text-white/50">Different rules for different file patterns using applyTo globs</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex-1 min-h-0 bg-gray-950/80 rounded-xl border border-cyan-500/30 p-3 overflow-y-auto max-h-64">
<div class="font-mono text-xs text-cyan-300 mb-2">
.github/instructions/models.instructions.md
</div>
<div class="bg-gray-900/70 rounded p-2 mb-2 font-mono text-xs">
<div class="text-blue-400">---</div>
<div class="text-white">applyTo: "src/models/**/*.ts"</div>
<div class="text-blue-400">---</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div class="font-semibold text-white"># Database Model Instructions</div>
<div class="mt-1">When working with database models:</div>
<div>• Use Prisma schema definitions</div>
<div>• Include JSDoc comments with field descriptions</div>
<div>• Define relationships explicitly with @relation</div>
<div>• Add indexes for foreign keys</div>
<div>• Use snake_case for DB columns, camelCase in TypeScript</div>
<div>• Always include audit fields: createdAt, updatedAt</div>
</div>
</div>

<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30">
<div class="text-xs font-semibold text-cyan-300 mb-1">🎯 Precision</div>
<div class="text-xs opacity-80">Only loads for matching files — keeps context budget clean</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-lg border border-blue-500/30">
<div class="text-xs font-semibold text-blue-300 mb-1">🔄 Combines</div>
<div class="text-xs opacity-80">Merges with repo-wide instructions when both match</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-xs font-semibold text-indigo-300 mb-1">🗂️ Examples</div>
<div class="text-xs opacity-80">src/web/** (React), src/api/** (Express), tests/** (test rules)</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Instructions — AGENTS.md Playbook -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Instructions</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">AGENTS.md: The Open Agent Playbook</div>
<div class="text-xs text-white/50">Local commands, tests, and cross-agent workflow guidance</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex-1 bg-gray-950/80 rounded-xl border border-cyan-500/30 p-3 overflow-y-auto">
<div class="font-mono text-xs text-cyan-300 mb-2">frontend/AGENTS.md</div>
<div class="text-xs text-gray-300 space-y-1">
<div class="font-semibold text-white"># AGENTS.md</div>
<div class="mt-1 font-semibold text-white">## Dev environment tips</div>
<div>• Install dependencies: <code class="bg-gray-900 px-1 rounded">pnpm install</code></div>
<div>• Start frontend: <code class="bg-gray-900 px-1 rounded">pnpm --filter web dev</code></div>
<div class="mt-1 font-semibold text-white">## Testing instructions</div>
<div>• Run tests: <code class="bg-gray-900 px-1 rounded">pnpm --filter web test</code></div>
<div>• Lint before PR: <code class="bg-gray-900 px-1 rounded">pnpm --filter web lint</code></div>
<div class="mt-1 font-semibold text-white">## PR instructions</div>
<div>• Title format: <code class="bg-gray-900 px-1 rounded">[web] &lt;Title&gt;</code></div>
</div>
</div>

<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30">
<div class="text-xs font-semibold text-cyan-300 mb-1">🗺️ Nearest File Wins</div>
<div class="text-xs opacity-80">Directory tree traversal finds the most specific playbook</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-lg border border-blue-500/30">
<div class="text-xs font-semibold text-blue-300 mb-1">🔁 Monorepo-Friendly</div>
<div class="text-xs opacity-80">frontend/, infra/, api/ each get their own rules</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-xs font-semibold text-indigo-300 mb-1">🤝 Open Format</div>
<div class="text-xs opacity-80">Works across GitHub Copilot, Claude, and coding agents</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Skills -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Skills</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">On-demand expertise packs</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">📦</div>
<div class="text-blue-300 font-semibold">Progressive Loading</div>
<div class="text-xs opacity-70 mt-1">3 levels: discovery → instructions → resources</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-indigo-300 font-semibold">AI-Activated</div>
<div class="text-xs opacity-70 mt-1">Loaded when task matches skill description</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔁</div>
<div class="text-purple-300 font-semibold">Cross-Tool Portable</div>
<div class="text-xs opacity-70 mt-1">VS Code + CLI + coding agent</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Unlike always-on instructions</span><br />
<span class="text-blue-300 mt-1 block">↳ skills load only when relevant</span>
</div>
</div>
</div>

---

<!-- SLIDE: Skills — Progressive Loading Architecture -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Skills</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Progressive Loading: Why Skills Stay Efficient</div>
<div class="text-xs text-white/50">3-level loading system keeps context budget clean even with dozens of skills</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-3 gap-2">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">1️⃣</div>
<div class="font-bold text-blue-300 text-sm">Discovery</div>
</div>
<div class="text-xs opacity-80 mb-2">Always loaded (lightweight metadata)</div>
<div class="bg-gray-950/50 rounded p-2 font-mono text-xs text-blue-200 border border-blue-500/20">
name: test-runner<br/>
description: Run tests...
</div>
<div class="mt-2 text-xs text-blue-400/70">~50 bytes per skill</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">2️⃣</div>
<div class="font-bold text-indigo-300 text-sm">Instructions</div>
</div>
<div class="text-xs opacity-80 mb-2">When prompt matches skill description</div>
<div class="bg-gray-950/50 rounded p-2 font-mono text-xs text-indigo-200 border border-indigo-500/20">
Full SKILL.md body<br/>
process, rules, when to use
</div>
<div class="mt-2 text-xs text-indigo-400/70">~1-2 KB when matched</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">3️⃣</div>
<div class="font-bold text-purple-300 text-sm">Resources</div>
</div>
<div class="text-xs opacity-80 mb-2">When Copilot references them</div>
<div class="bg-gray-950/50 rounded p-2 font-mono text-xs text-purple-200 border border-purple-500/20">
scripts/, examples/<br/>
templates
</div>
<div class="mt-2 text-xs text-purple-400/70">Only when explicitly used</div>
</div>
</div>

<div class="flex-1 bg-gray-950/80 rounded-xl border border-blue-500/30 p-3">
<div class="text-xs font-semibold text-white mb-2">Example Skill Structure</div>
<div class="font-mono text-xs text-gray-300 space-y-0.5">
<div class="text-blue-400">.github/skills/</div>
<div class="ml-3">test-runner/</div>
<div class="ml-6 text-cyan-300">SKILL.md <span class="text-gray-500">← Level 2: instructions</span></div>
<div class="ml-6 text-indigo-300">test-template.ts <span class="text-gray-500">← Level 3: resource</span></div>
<div class="ml-6">scripts/</div>
<div class="ml-9 text-purple-300">run-tests.sh <span class="text-gray-500">← Level 3: resource</span></div>
</div>
</div>

<div class="p-2 bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 rounded-lg border border-emerald-500/30">
<div class="text-xs"><strong>Real Impact:</strong> 50 skills installed = 2.5 KB baseline. Only the 1-2 relevant skills load full content. Context stays clean.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Skills — Scripts -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Skills</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Scripts: Executable Automation</div>
<div class="text-xs text-white/50">Give Copilot verified, team-approved commands — no hallucinated CLI flags</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">📜</div>
<div class="font-bold text-cyan-300">What Are Scripts?</div>
</div>
<div class="text-xs opacity-80 mb-2">Shell scripts, Python files, or any executable that Copilot can read, understand, and run.</div>
<div class="bg-gray-950/50 rounded p-2 font-mono text-xs border border-cyan-500/20 space-y-0.5">
<div class="text-cyan-300">scripts/run-tests.sh</div>
<div class="text-cyan-300">scripts/validate-schema.py</div>
<div class="text-cyan-300">scripts/deploy-preview.sh</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 rounded-xl border border-emerald-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">✨</div>
<div class="font-bold text-emerald-300">Why Scripts Matter</div>
</div>
<div class="space-y-1">
<div class="flex items-start gap-2">
<div class="text-emerald-400">→</div>
<div class="text-xs"><strong class="text-emerald-300">Verified:</strong> No guessing at CLI flags</div>
</div>
<div class="flex items-start gap-2">
<div class="text-emerald-400">→</div>
<div class="text-xs"><strong class="text-emerald-300">Team-approved:</strong> Your exact workflows</div>
</div>
<div class="flex items-start gap-2">
<div class="text-emerald-400">→</div>
<div class="text-xs"><strong class="text-emerald-300">Self-documenting:</strong> Copilot reads to understand</div>
</div>
<div class="flex items-start gap-2">
<div class="text-emerald-400">→</div>
<div class="text-xs"><strong class="text-emerald-300">Composable:</strong> Chain for complex ops</div>
</div>
</div>
</div>
</div>
<div class="bg-gray-950/80 rounded-xl border border-blue-500/30 p-3">
<div class="text-xs font-semibold text-white mb-2">Example: SKILL.md Referencing Scripts</div>
<div class="grid grid-cols-2 gap-4">
<div class="font-mono text-xs text-gray-300 space-y-0.5">
<div class="text-blue-400">test-runner/</div>
<div class="ml-3 text-white">SKILL.md</div>
<div class="ml-3 text-cyan-300">scripts/</div>
<div class="ml-6 text-cyan-200">run-tests.sh</div>
<div class="ml-6 text-cyan-200">coverage-report.sh</div>
<div class="ml-6 text-cyan-200">watch-mode.sh</div>
</div>
<div class="text-xs space-y-1.5">
<div class="text-gray-400">SKILL.md tells Copilot:</div>
<div class="bg-gray-900/50 rounded px-2 py-1 font-mono text-emerald-300">"Run scripts/run-tests.sh to execute"</div>
<div class="bg-gray-900/50 rounded px-2 py-1 font-mono text-emerald-300">"Run scripts/coverage-report.sh for coverage"</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Skills — Templates -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Skills</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Templates: Starter Patterns</div>
<div class="text-xs text-white/50">Enforce team patterns — components include tests, routes include error handling</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">📋</div>
<div class="font-bold text-purple-300">What Are Templates?</div>
</div>
<div class="text-xs opacity-80 mb-2">Starter files with placeholders that Copilot fills in, ensuring consistency.</div>
<div class="bg-gray-950/50 rounded p-2 font-mono text-xs border border-purple-500/20 space-y-0.5">
<div class="text-purple-300">templates/component.tsx</div>
<div class="text-purple-300">templates/test-case.spec.ts</div>
<div class="text-purple-300">templates/api-route.ts</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-xl border border-pink-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">✨</div>
<div class="font-bold text-pink-300">Why Templates Matter</div>
</div>
<div class="space-y-1">
<div class="flex items-start gap-2">
<div class="text-pink-400">→</div>
<div class="text-xs"><strong class="text-pink-300">Consistency:</strong> Same structure every time</div>
</div>
<div class="flex items-start gap-2">
<div class="text-pink-400">→</div>
<div class="text-xs"><strong class="text-pink-300">Completeness:</strong> Tests, types, docs by default</div>
</div>
<div class="flex items-start gap-2">
<div class="text-pink-400">→</div>
<div class="text-xs"><strong class="text-pink-300">Best practices:</strong> Error handling baked in</div>
</div>
<div class="flex items-start gap-2">
<div class="text-pink-400">→</div>
<div class="text-xs"><strong class="text-pink-300">Reduced review:</strong> Already meets standards</div>
</div>
</div>
</div>
</div>
<div class="bg-gray-950/80 rounded-xl border border-purple-500/30 p-3">
<div class="text-xs font-semibold text-white mb-2">Example: Component Template with Placeholders</div>
<div class="grid grid-cols-2 gap-4">
<div class="bg-gray-900/50 rounded p-2 font-mono text-xs text-purple-200 space-y-0.5 border border-purple-500/20">
<div class="text-purple-400">// templates/component.tsx</div>
<div>import &#123; FC &#125; from 'react';</div>
<div>interface &#123;&#123;name&#125;&#125;Props &#123; ... &#125;</div>
<div>export const &#123;&#123;name&#125;&#125;: FC = () =&gt; &#123;</div>
<div class="ml-2">return &lt;div&gt;...&lt;/div&gt;;</div>
<div>&#125;;</div>
</div>
<div class="text-xs space-y-1.5">
<div class="text-gray-400">Copilot replaces placeholders:</div>
<div class="bg-gray-900/50 rounded px-2 py-1 font-mono text-pink-300">&#123;&#123;name&#125;&#125; → UserProfile</div>
<div class="bg-gray-900/50 rounded px-2 py-1 font-mono text-pink-300">Props filled from requirements</div>
<div class="bg-gray-900/50 rounded px-2 py-1 font-mono text-pink-300">Test file auto-generated alongside</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Custom Prompts -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">Custom Prompts</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Reusable workflow templates</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">⌨️</div>
<div class="text-indigo-300 font-semibold">User-Invoked</div>
<div class="text-xs opacity-70 mt-1">Triggered via /command in chat</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">📋</div>
<div class="text-purple-300 font-semibold">Variable Interpolation</div>
<div class="text-xs opacity-70 mt-1">{{componentName}}, ${selection}, ${file}</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-pink-300 font-semibold">References Instructions</div>
<div class="text-xs opacity-70 mt-1">Reuse conventions without duplication</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Turn frequent tasks into /commands</span><br />
<span class="text-indigo-300 mt-1 block">↳ standardize workflows across the team</span>
</div>
</div>
</div>

---

<!-- SLIDE: Custom Prompts — Component Generator Example -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Custom Prompts</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<span class="text-white/40 text-xs ml-1">1 of 1</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-xl font-bold text-white mb-1">Example: /component Generator</div>
<div class="text-sm text-white/60">Standardize React component scaffolding across the team</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="flex-1 min-h-0 bg-gray-950/80 rounded-xl border border-indigo-500/30 p-3 overflow-y-auto flex flex-col gap-2 max-h-52">
<div class="font-mono text-xs text-indigo-300">.github/prompts/component.prompt.md</div>
<div class="bg-gray-900/70 rounded p-2 font-mono text-xs space-y-0.5">
<div class="text-blue-400">---</div>
<div class="text-white">name: component</div>
<div class="text-white">description: Generate React component with TypeScript, tests, docs</div>
<div class="text-white">tools: ['editFiles', 'createFile']</div>
<div class="text-white">agent: agent</div>
<div class="text-blue-400">---</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div class="font-semibold text-white"># Component Generator</div>
<div class="mt-1">Create a new React component following our team's standards.</div>
<div class="mt-1 font-semibold text-white">## Files to Create</div>
<div class="bg-gray-900/70 rounded p-2 font-mono text-xs space-y-0.5 text-indigo-200">
<div>src/components/&#123;&#123;componentName&#125;&#125;/</div>
<div class="ml-3">&#123;&#123;componentName&#125;&#125;.tsx</div>
<div class="ml-3">&#123;&#123;componentName&#125;&#125;.types.ts</div>
<div class="ml-3">&#123;&#123;componentName&#125;&#125;.module.css</div>
<div class="ml-3">__tests__/&#123;&#123;componentName&#125;&#125;.test.tsx</div>
</div>
<div class="mt-1 font-semibold text-white">## Requirements</div>
<div>• Use functional components with hooks</div>
<div>• Include TypeScript props interface with JSDoc</div>
<div>• Follow conventions in [coding standards](../../copilot-instructions.md)</div>
</div>
</div>

<div class="grid grid-cols-2 gap-2">
<div class="p-2 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-xs font-semibold text-indigo-300 mb-1">💬 Usage</div>
<div class="text-xs opacity-80">Type <code class="bg-gray-900 px-1 rounded">/component MyButton</code> in chat</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30">
<div class="text-xs font-semibold text-purple-300 mb-1">🔁 Consistency</div>
<div class="text-xs opacity-80">Same structure every time, no manual repetition</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Custom Agents -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Custom Agents</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Specialized AI personas with constrained tools</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-purple-300 font-semibold">Tool Constraints</div>
<div class="text-xs opacity-70 mt-1">Exactly which tools are available — and which aren't</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">🤝</div>
<div class="text-pink-300 font-semibold">Guided Handoffs</div>
<div class="text-xs opacity-70 mt-1">Plan → Implement → Review with context preserved</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🎭</div>
<div class="text-rose-300 font-semibold">Session Persona</div>
<div class="text-xs opacity-70 mt-1">Instructions, model, and temperature for a specific role</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Different tasks need different capabilities</span><br />
<span class="text-purple-300 mt-1 block">↳ constrain tools to prevent accidental edits</span>
</div>
</div>
</div>

---

<!-- SLIDE: Custom Agents — Planner Example with Handoffs -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Custom Agents</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Example: Planning Agent with Handoffs</div>
<div class="text-xs text-white/50">Read-only planning → implementation → review workflow</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-3">
<div class="flex flex-col bg-gray-950/80 rounded-xl border border-purple-500/30 p-3">
<div class="font-mono text-xs text-purple-300 mb-2">.github/agents/planner.agent.md</div>
<div class="bg-gray-900/70 rounded p-2 mb-2 font-mono text-xs space-y-0.5">
<div class="text-blue-400">---</div>
<div class="text-white">name: planner</div>
<div class="text-white">description: Generate plans. Read-only.</div>
<div class="text-white">tools: ['search', 'readFile', 'listFiles']</div>
<div class="text-white">handoffs:</div>
<div class="text-white ml-3">- label: Start Implementation</div>
<div class="text-white ml-5">agent: agent</div>
<div class="text-blue-400">---</div>
</div>
<div class="text-xs text-gray-300 flex-1 space-y-1">
<div class="font-semibold text-white"># Planning Agent</div>
<div>Senior architect role. Research codebase, generate plan.</div>
<div class="mt-1"><strong>Rule:</strong> NEVER modify files — read-only</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="text-xs font-semibold text-purple-300 mb-1">🔒 Why Constrain Tools?</div>
<div class="text-xs opacity-80 space-y-0.5">
<div>• <strong>Planner:</strong> read-only prevents edits</div>
<div>• <strong>Security:</strong> search but no terminal</div>
<div>• <strong>DB admin:</strong> SQL but no frontend</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-rose-900/40 rounded-xl border border-pink-500/30">
<div class="text-xs font-semibold text-pink-300 mb-1">🤝 Handoff Workflow</div>
<div class="text-xs opacity-80 space-y-0.5">
<div><strong>1:</strong> Planner creates plan</div>
<div><strong>2:</strong> "Start Implementation" button</div>
<div><strong>3:</strong> Switches to agent with context</div>
<div><strong>4:</strong> Optional security handoff</div>
</div>
</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 rounded-lg border border-emerald-500/30">
<div class="text-xs"><strong class="text-emerald-300">Real Impact:</strong> DB admin agent = zero production migration rollbacks in 6 months, 60% faster schema review.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Custom Agents — Advanced Patterns -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Custom Agents</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-xl font-bold text-white mb-1">Advanced Patterns: Squad &#38; AgentCouncil</div>
<div class="text-sm text-white/60">Open-source frameworks that take custom agents to the next level</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-2 mb-3">
<div class="text-2xl">👥</div>
<div class="font-bold text-blue-300 text-lg">Squad</div>
</div>
<div class="text-sm opacity-90 mb-3">Persistent AI development team with specialized roles, memory, and parallel execution.</div>
<div class="space-y-2 text-sm">
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div><strong class="text-blue-300">Named agents:</strong> Ripley (lead), Dallas (frontend), Kane (backend)</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div><strong class="text-blue-300">Memory:</strong> Scribe agent maintains context across sessions</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div><strong class="text-blue-300">Ralph:</strong> Autonomous backlog processing</div>
</div>
</div>
<div class="mt-3 font-mono text-xs bg-gray-950/60 rounded p-2 text-blue-200">npx github:bradygaster/squad</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="flex items-center gap-2 mb-3">
<div class="text-2xl">🎭</div>
<div class="font-bold text-purple-300 text-lg">AgentCouncil</div>
</div>
<div class="text-sm opacity-90 mb-3">Multi-model deliberation — Claude, GPT, and Gemini debate your decisions.</div>
<div class="space-y-2 text-sm">
<div class="flex items-start gap-2">
<div class="text-purple-400">→</div>
<div><strong class="text-purple-300">Collaborative:</strong> Models build on each other's ideas</div>
</div>
<div class="flex items-start gap-2">
<div class="text-purple-400">→</div>
<div><strong class="text-purple-300">Adversarial:</strong> Models attack positions to stress-test</div>
</div>
<div class="flex items-start gap-2">
<div class="text-purple-400">→</div>
<div><strong class="text-purple-300">Synthesis:</strong> Final answer incorporates all perspectives</div>
</div>
</div>
<div class="mt-3 font-mono text-xs bg-gray-950/60 rounded p-2 text-purple-200">council: should we use microservices?</div>
</div>
</div>
<div class="p-3 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30">
<div class="text-sm"><strong class="text-cyan-300">Deep Dive:</strong> See the <strong>Agent Teams</strong> tech talk for full coverage of Squad memory, ceremonies, and AgentCouncil modes.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Choosing the Right Primitive -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-emerald-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Decision Guide</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="mb-3">
<div class="text-lg font-bold text-white mb-0.5">Start Simple, Add Complexity When Needed</div>
<div class="text-xs text-white/50">Progressive adoption path — most teams should follow this sequence</div>
</div>

<div class="grid grid-cols-2 gap-3 mb-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-2">✅ Adoption Sequence</div>
<div class="text-xs opacity-90 space-y-1">
<div><strong>Week 1:</strong> copilot-instructions.md (5 min → immediate value)</div>
<div><strong>Week 2:</strong> Path-specific .instructions.md (targeted rules)</div>
<div><strong>Week 3:</strong> First prompt for most common task</div>
<div><strong>Month 2:</strong> Skills for cross-project capabilities</div>
<div><strong>Month 3:</strong> Agents for complex orchestration</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-red-900/40 to-orange-900/40 rounded-xl border border-red-500/30">
<div class="text-sm font-semibold text-red-300 mb-2">❌ Common Mistakes</div>
<div class="text-xs opacity-90 space-y-1">
<div>• Start with agents → over-engineers simple problems</div>
<div>• 5-page instructions → consumes context budget</div>
<div>• Task-specific instructions → bloats every request</div>
<div>• Skipping configuration → leaves 80% value unused</div>
</div>
</div>
</div>

<div class="grid grid-cols-4 gap-2">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-xs font-semibold text-cyan-300 mb-1">📖 Instructions</div>
<div class="text-xs opacity-80">Always know our conventions</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-xs font-semibold text-blue-300 mb-1">🔧 Skills</div>
<div class="text-xs opacity-80">When this task appears</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-xs font-semibold text-indigo-300 mb-1">📋 Prompts</div>
<div class="text-xs opacity-80">When I run /command</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-xs font-semibold text-purple-300 mb-1">🤖 Agents</div>
<div class="text-xs opacity-80">When I want this persona</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-cyan-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-emerald-600/80 to-cyan-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-emerald-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="flex flex-col p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="text-xl mb-1">⚡</div>
<div class="text-sm font-bold text-cyan-300 mb-2">Immediate (5-15 min)</div>
<div class="text-xs opacity-90 space-y-1 flex-1">
<div>☐ Create .github/copilot-instructions.md</div>
<div>☐ Add tech stack, build commands, coding standards</div>
<div>☐ Try /init to auto-generate from workspace</div>
<div>☐ Check References section to verify they load</div>
</div>
</div>

<div class="flex flex-col p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="text-xl mb-1">🔨</div>
<div class="text-sm font-bold text-blue-300 mb-2">Short-Term (1 hour)</div>
<div class="text-xs opacity-90 space-y-1 flex-1">
<div>☐ Add path-specific .instructions.md files</div>
<div>☐ Create first .prompt.md for common task</div>
<div>☐ Review Awesome Copilot for examples</div>
<div>☐ Share instructions via version control</div>
</div>
</div>

<div class="flex flex-col p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="text-xl mb-1">🚀</div>
<div class="text-sm font-bold text-indigo-300 mb-2">Advanced (2-4 hours)</div>
<div class="text-xs opacity-90 space-y-1 flex-1">
<div>☐ Build skill for frequent capability</div>
<div>☐ Create planning agent (read-only)</div>
<div>☐ Set up Plan → Implement → Review handoffs</div>
<div>☐ Explore agentskills.io standard</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 rounded-xl border border-emerald-500/30">
<div class="text-sm font-semibold text-emerald-300 mb-1">🎯 The 5-Minute Transformation</div>
<div class="text-xs opacity-90">One copilot-instructions.md file = 40% reduction in style review comments + project-aware responses from day one. This is the highest ROI customization available.</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-gray-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-slate-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-slate-600/80 to-gray-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 References</span>
<div class="flex-1 h-px bg-gradient-to-r from-slate-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="text-sm font-bold text-white mb-3">Official Documentation & Resources</div>
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-slate-900/40 to-gray-900/40 rounded-xl border border-slate-500/30">
<div class="text-xs font-semibold text-slate-300 mb-2">📖 Overview & Getting Started</div>
<div class="text-xs opacity-90 space-y-1">
<div>• <a href="https://code.visualstudio.com/docs/copilot/copilot-customization" class="text-cyan-400 hover:text-cyan-300">Customize AI in Visual Studio Code</a></div>
<div>• <a href="https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot" class="text-cyan-400 hover:text-cyan-300">Adding repository custom instructions</a></div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-slate-900/40 to-gray-900/40 rounded-xl border border-slate-500/30">
<div class="text-xs font-semibold text-slate-300 mb-2">📖 Instructions Files</div>
<div class="text-xs opacity-90 space-y-1">
<div>• <a href="https://code.visualstudio.com/docs/copilot/customization/custom-instructions" class="text-blue-400 hover:text-blue-300">Use custom instructions in VS Code</a></div>
<div>• <a href="https://docs.github.com/en/copilot/reference/custom-instructions-support" class="text-blue-400 hover:text-blue-300">Custom instructions support reference</a></div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-slate-900/40 to-gray-900/40 rounded-xl border border-slate-500/30">
<div class="text-xs font-semibold text-slate-300 mb-2">📖 Skills, Prompts, Agents</div>
<div class="text-xs opacity-90 space-y-1">
<div>• <a href="https://code.visualstudio.com/docs/copilot/customization/agent-skills" class="text-indigo-400 hover:text-indigo-300">Use Agent Skills in VS Code</a></div>
<div>• <a href="https://code.visualstudio.com/docs/copilot/customization/prompt-files" class="text-indigo-400 hover:text-indigo-300">Use prompt files in VS Code</a></div>
<div>• <a href="https://code.visualstudio.com/docs/copilot/customization/custom-agents" class="text-indigo-400 hover:text-indigo-300">Custom agents in VS Code</a></div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-slate-900/40 to-gray-900/40 rounded-xl border border-slate-500/30">
<div class="text-xs font-semibold text-slate-300 mb-2">🌐 Open Standards & Community</div>
<div class="text-xs opacity-90 space-y-1">
<div>• <a href="https://agents.md/" class="text-purple-400 hover:text-purple-300">AGENTS.md open format</a></div>
<div>• <a href="https://agentskills.io/" class="text-purple-400 hover:text-purple-300">Agent Skills open standard</a></div>
<div>• <a href="https://github.com/github/awesome-copilot" class="text-purple-400 hover:text-purple-300">Awesome Copilot repository</a></div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Thank You -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-indigo-900/30"></div>
<div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-8">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-48" alt="" /></div>
<img src="./sdp-logo.png" class="w-48 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">Thank You</h1>
<div class="grid grid-cols-3 gap-4 max-w-3xl mb-8">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="text-3xl font-bold text-cyan-300 mb-1">4</div>
<div class="text-xs text-gray-300">Configuration Primitives</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="text-3xl font-bold text-blue-300 mb-1">5 min</div>
<div class="text-xs text-gray-300">To Transform Copilot</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="text-3xl font-bold text-indigo-300 mb-1">40%</div>
<div class="text-xs text-gray-300">Reduction in Review Comments</div>
</div>
</div>
<div class="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
</div>
</div>
