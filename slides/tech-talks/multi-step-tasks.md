---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Multi-Step Tasks: Context Isolation with Subagents
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Multi-Step Tasks - Context Isolation with Subagents
module: tech-talks/multi-step-tasks
mdc: true
status: active
updated: 2026-02-01
---

<script setup>
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="Multi-Step Tasks"
subtitle="Context Isolation with Subagents"
tagline="Prevent context pollution with isolated subagent execution"
meta="Tech Talk · 45 minutes"
/>

---

<!-- SLIDE: The Question This Talk Answers -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤔 The Question This Talk Answers</span>
<div class="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="flex items-center justify-center h-full">
<div class="text-center max-w-4xl">
<div class="text-4xl font-bold text-cyan-300 mb-8">
"How do I prevent context pollution when my agent task requires multiple phases of research, analysis, and implementation?"
</div>
<div class="mt-12 grid grid-cols-3 gap-4">
<div class="p-4 bg-red-900/30 rounded-lg">
<div class="text-3xl mb-2">🚨</div>
<div class="text-sm font-bold text-red-300">Context Bloat</div>
<div class="text-xs text-gray-400 mt-1">18K tokens of exploration</div>
</div>
<div class="p-4 bg-yellow-900/30 rounded-lg">
<div class="text-3xl mb-2">⏱️</div>
<div class="text-sm font-bold text-yellow-300">Sequential Waste</div>
<div class="text-xs text-gray-400 mt-1">45 min one-at-a-time</div>
</div>
<div class="p-4 bg-green-900/30 rounded-lg">
<div class="text-3xl mb-2">✨</div>
<div class="text-sm font-bold text-green-300">Isolated Execution</div>
<div class="text-xs text-gray-400 mt-1">2K token summaries</div>
</div>
</div>
<div class="mt-8 p-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg border border-cyan-500/50">
<span class="text-lg text-cyan-200"><strong>The Answer:</strong> Subagents provide isolated context windows for focused work phases</span>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Navigate by Section -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Navigate by Section</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-6 mt-8">
<div @click="$nav.go(6)" class="cursor-pointer p-6 bg-cyan-900/40 rounded-lg border-2 border-cyan-500 hover:bg-cyan-900/60 transition-all">
<div class="text-3xl mb-2">🎯</div>
<div class="text-lg font-bold text-cyan-300">Fundamentals</div>
<div class="text-sm text-gray-300 mt-1">Core concepts &amp; invocation</div>
<div class="text-xs text-gray-400 mt-2">Isolated contexts &amp; parallel execution</div>
</div>
<div @click="$nav.go(10)" class="cursor-pointer p-6 bg-blue-900/40 rounded-lg border-2 border-blue-500 hover:bg-blue-900/60 transition-all">
<div class="text-3xl mb-2">🔧</div>
<div class="text-lg font-bold text-blue-300">Custom Agents</div>
<div class="text-sm text-gray-300 mt-1">Specialized subagents</div>
<div class="text-xs text-gray-400 mt-2">Security, testing, docs reviewers</div>
</div>
<div @click="$nav.go(13)" class="cursor-pointer p-6 bg-indigo-900/40 rounded-lg border-2 border-indigo-500 hover:bg-indigo-900/60 transition-all">
<div class="text-3xl mb-2">🎚️</div>
<div class="text-lg font-bold text-indigo-300">Control &amp; Workflows</div>
<div class="text-sm text-gray-300 mt-1">Visibility &amp; orchestration</div>
<div class="text-xs text-gray-400 mt-2">Version-controlled patterns</div>
</div>
</div>
<div class="mt-8 p-4 bg-gradient-to-r from-cyan-900/30 to-indigo-900/30 rounded-lg text-center">
<span class="text-white font-bold">💡 Click any section to jump directly there</span>
</div>
</div>
</div>

---

<!-- SLIDE: The Problem: Context Pollution -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚨 The Problem: Context Pollution</span>
<div class="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-4">
<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-2">🚨 Context Window Bloat</div>
<div class="text-sm text-gray-300">Every prompt and response accumulates — failed experiments, exploratory tangents, verbose research all dilute focus and consume tokens</div>
</div>
<div class="p-4 bg-yellow-900/40 rounded-lg border-l-4 border-yellow-500">
<div class="text-lg font-bold text-yellow-300 mb-2">⏱️ Sequential Bottlenecks</div>
<div class="text-sm text-gray-300">Complex workflows execute one-at-a-time when phases could run in parallel</div>
</div>
<div class="p-4 bg-orange-900/40 rounded-lg border-l-4 border-orange-500">
<div class="text-lg font-bold text-orange-300 mb-2">💭 Exploratory Pollution</div>
<div class="text-sm text-gray-300">Dead-end investigations and rejected approaches clutter the main context forever</div>
</div>
<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-500">
<div class="text-lg font-bold text-purple-300 mb-2">💸 Token Costs Compound</div>
<div class="text-sm text-gray-300">Full conversation histories consume expensive tokens even when only summary findings matter</div>
</div>
</div>
<div class="mt-6 p-4 bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-lg">
<div class="text-sm text-gray-200">
<span class="font-bold text-orange-300">Example:</span> By the time implementation starts, context contains 18K tokens of research (only 800 relevant) + 4 rejected architectures + 12 dead-end file investigations. The agent struggles to distinguish signal from noise.
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Solution: Subagents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ The Solution: Subagents</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-6">
<div>
<h3 class="text-xl font-bold text-cyan-300 mb-4">🎯 What It Does</h3>
<div class="text-sm text-gray-300 space-y-2">
<div>Subagents provide <strong class="text-cyan-400">isolated context windows</strong> separate from the main chat session</div>
<div>Main agent delegates tasks → subagent works autonomously → only final summary returns</div>
<div>All intermediate exploration stays isolated</div>
</div>
</div>
<div>
<h3 class="text-xl font-bold text-blue-300 mb-4">🔑 Key Capabilities</h3>
<div class="text-sm text-gray-300 space-y-2">
<div>• <strong>Context Isolation:</strong> Research doesn't pollute main session</div>
<div>• <strong>Parallel Execution:</strong> Multiple subagents run simultaneously</div>
<div>• <strong>Summary-Only Returns:</strong> Main agent receives final results only</div>
<div>• <strong>Custom Agent Integration:</strong> Run specialized agents as subagents</div>
</div>
</div>
</div>
<div class="mt-6 p-4 bg-gradient-to-r from-cyan-900/60 to-blue-900/60 rounded-lg">
<div class="text-sm text-white">
<strong>The architectural insight:</strong> Separate "orchestration context" (main agent) from "execution context" (subagents). This separation multiplies throughput and improves quality.
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Subagent Fundamentals -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Subagent Fundamentals</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Core Concepts &amp; Invocation</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-cyan-300 font-semibold">Isolated Contexts</div>
<div class="text-xs opacity-70 mt-1">Each subagent has its own window</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-blue-300 font-semibold">Parallel Execution</div>
<div class="text-xs opacity-70 mt-1">Run multiple tasks simultaneously</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📋</div>
<div class="text-indigo-300 font-semibold">Summary Returns</div>
<div class="text-xs opacity-70 mt-1">Only final results come back</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Section 1 of 3 · Context isolation patterns</span><br />
<span class="text-cyan-300 mt-1 block">↳ Understanding isolated contexts and parallel execution</span>
</div>
</div>
</div>

---

<!-- SLIDE: Core Mechanism -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Subagent Fundamentals</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-4">
<div class="p-4 bg-purple-900/40 rounded-lg">
<div class="text-lg font-bold text-purple-300 mb-3">💬 Implicit Invocation</div>
<div class="mb-3 p-3 bg-gray-800 rounded text-xs font-mono text-gray-300">
Run a subagent to research OAuth2<br/>
patterns, focusing on token storage<br/>
best practices. Return structured<br/>
summary with recommended libraries.
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>✅ Exploratory research</div>
<div>✅ Ad-hoc delegation</div>
<div>✅ Quick investigations</div>
</div>
</div>
<div class="p-4 bg-blue-900/40 rounded-lg">
<div class="text-lg font-bold text-blue-300 mb-3">📄 Explicit Invocation (Prompt Files)</div>
<div class="mb-3 p-3 bg-gray-800 rounded text-xs font-mono text-gray-300">
<div class="opacity-60">&#45;&#45;&#45;</div>
name: feature-research<br/>
tools: ['agent', 'read']<br/>
<div class="opacity-60">&#45;&#45;&#45;</div>
Run a subagent to research...
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>✅ Reproducible workflows</div>
<div>✅ Version-controlled</div>
<div>✅ Multi-phase workflows</div>
</div>
</div>
</div>
<div class="mt-4 grid grid-cols-4 gap-3 text-xs">
<div class="p-2 bg-cyan-900/40 rounded">
<div class="font-bold text-cyan-300">Isolated Context</div>
<div class="text-gray-400">Each subagent has own window</div>
</div>
<div class="p-2 bg-blue-900/40 rounded">
<div class="font-bold text-blue-300">Autonomous</div>
<div class="text-gray-400">Works independently</div>
</div>
<div class="p-2 bg-indigo-900/40 rounded">
<div class="font-bold text-indigo-300">Summary Return</div>
<div class="text-gray-400">Only final results</div>
</div>
<div class="p-2 bg-purple-900/40 rounded">
<div class="font-bold text-purple-300">Inherits Config</div>
<div class="text-gray-400">Same agent/model</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Context Isolation Benefits -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-600/80 to-emerald-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Subagent Fundamentals</span>
<div class="flex-1 h-px bg-gradient-to-r from-green-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="mt-4">
<table class="w-full text-sm">
<thead>
<tr class="bg-gray-800">
<th class="text-left p-3 text-red-300">❌ Without Subagents</th>
<th class="text-left p-3 text-green-300">✅ With Subagents</th>
</tr>
</thead>
<tbody class="text-gray-300">
<tr class="border-b border-gray-700">
<td class="p-3">Research clutters main context (15K tokens)</td>
<td class="p-3 bg-green-900/20">Research stays isolated (500 token summary)</td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-3">Sequential execution (Phase 1 → Phase 2 → Phase 3)</td>
<td class="p-3 bg-green-900/20">Parallel execution (Phase 1 ‖ Phase 2 ‖ Phase 3)</td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-3">Failed experiments persist (4 rejected approaches)</td>
<td class="p-3 bg-green-900/20">Only successes return (1 recommended approach)</td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-3">Token costs compound (25K tokens total)</td>
<td class="p-3 bg-green-900/20">Token costs contained (6K tokens total)</td>
</tr>
<tr>
<td class="p-3">Context quality degrades (signal buried in noise)</td>
<td class="p-3 bg-green-900/20">Context stays focused (only relevant summaries)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

---

<!-- SLIDE: Parallel Execution Example -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Subagent Fundamentals</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="text-lg font-bold text-cyan-300 mb-3">📋 The Prompt</div>
<div class="p-4 bg-gray-800 rounded text-xs font-mono text-gray-300">
Analyze this authentication module<br/>
using three parallel subagents:<br/><br/>
1. Security: Check vulnerabilities<br/>
2. Performance: Review for N+1<br/>
3. Testing: Assess coverage<br/><br/>
Synthesize findings into<br/>
prioritized action items.
</div>
</div>
<div>
<div class="text-lg font-bold text-blue-300 mb-3">⚡ What Happens</div>
<div class="text-sm text-gray-300 space-y-3">
<div>🔀 <strong>3 subagents spawn simultaneously</strong></div>
<div>Each works in isolated context reading code and forming conclusions</div>
<div>📊 <strong>Main agent receives 3 summaries:</strong>
<div class="text-xs mt-1 space-y-1 text-gray-400">
<div>• "Security: 2 high-risk issues..."</div>
<div>• "Performance: 3 optimizations..."</div>
<div>• "Testing: Coverage at 45%..."</div>
</div>
</div>
<div>✨ Main agent synthesizes prioritized action items</div>
</div>
</div>
</div>
<div class="mt-6 p-4 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">⚡ Throughput: 3 concerns in ~8 min (parallel) vs. ~20 min (sequential) = 2.5x faster</span>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Custom Agents as Subagents -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Custom Agents as Subagents</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Specialized Behavior &amp; Tools</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-blue-300 font-semibold">Focused Tools</div>
<div class="text-xs opacity-70 mt-1">Restricted tool sets per role</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🧠</div>
<div class="text-indigo-300 font-semibold">Domain Expertise</div>
<div class="text-xs opacity-70 mt-1">OWASP, TDD, docs patterns built-in</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-purple-300 font-semibold">Consistent Persona</div>
<div class="text-xs opacity-70 mt-1">Same checklist every time</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Section 2 of 3 · Domain-specific expertise</span><br />
<span class="text-blue-300 mt-1 block">↳ Apply focused instructions to subtasks</span>
</div>
</div>
</div>

---

<!-- SLIDE: The Pattern: Specialized Subagents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Custom Agents as Subagents</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="text-lg font-bold text-purple-300 mb-3">🎯 Why Custom Agents</div>
<div class="text-sm text-gray-300 space-y-2">
<div>By default, subagents inherit main session's agent and model</div>
<div>To apply <strong class="text-purple-400">specialized behavior</strong> — security-focused analysis, strict TDD enforcement, documentation generation</div>
<div>Custom agents define <strong class="text-purple-400">focused instructions</strong>, limited tool sets, and specific personas</div>
</div>
</div>
<div>
<div class="text-lg font-bold text-blue-300 mb-3">🔧 Example: Security Review Agent</div>
<div class="p-3 bg-gray-800 rounded text-xs font-mono text-gray-300">
<div class="opacity-60">&#45;&#45;&#45;</div>
name: Security-Review<br/>
tools: ['read', 'search', 'grep']<br/>
<div class="opacity-60">&#45;&#45;&#45;</div>
You are a security expert<br/>
specializing in OWASP Top 10.<br/><br/>
Analyze code for:<br/>
• Authentication vulnerabilities<br/>
• Authorization bypass risks<br/>
• Injection attack vectors<br/>
• Secrets exposure
</div>
</div>
</div>
<div class="col-span-2 grid grid-cols-3 gap-3 mt-4">
<div class="p-3 bg-cyan-900/40 rounded">
<div class="text-sm font-bold text-cyan-300">Focused Tools</div>
<div class="text-xs text-gray-400">Security agent only has read/search — can't modify code</div>
</div>
<div class="p-3 bg-blue-900/40 rounded">
<div class="text-sm font-bold text-blue-300">Specialized Instructions</div>
<div class="text-xs text-gray-400">Domain expertise (OWASP patterns) built into agent</div>
</div>
<div class="p-3 bg-indigo-900/40 rounded">
<div class="text-sm font-bold text-indigo-300">Persona Consistency</div>
<div class="text-xs text-gray-400">Same checklist every time, no need to re-explain</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Real-World: Multi-Concern PR Review -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Custom Agents as Subagents</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="text-sm text-gray-300 mb-4">
<strong class="text-blue-300">Goal:</strong> Review PR using specialized subagents for security, performance, and test coverage
</div>
<div class="grid grid-cols-3 gap-4 mt-4">
<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-400">
<div class="text-sm font-bold text-red-300 mb-2">🔒 Security-Review Agent</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Identify vulnerabilities</div>
<div>• Check for OWASP Top 10</div>
<div>• Return critical/high findings</div>
</div>
</div>
<div class="p-3 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-400">
<div class="text-sm font-bold text-yellow-300 mb-2">⚡ Performance-Optimizer Agent</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Check for N+1 queries</div>
<div>• Review memory leaks</div>
<div>• Assess algorithm complexity</div>
</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-400">
<div class="text-sm font-bold text-green-300 mb-2">✅ Testing Agent</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Calculate coverage delta</div>
<div>• Identify untested edge cases</div>
<div>• Suggest missing scenarios</div>
</div>
</div>
</div>
<div class="mt-6 p-4 bg-gradient-to-r from-cyan-900/60 to-blue-900/60 rounded-lg">
<div class="text-sm text-white">
<strong>Outcome:</strong> 3 specialized reviews run in parallel (~12 min), each in isolated context with focused expertise. Main agent receives 3 structured reports, synthesizes into one coherent PR review.
</div>
</div>
<div class="mt-4 p-3 bg-green-900/40 rounded text-center">
<span class="text-green-300 font-bold">⚡ Total time: 12 min vs. 35 min sequential generic review = 2.9x faster</span>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Controlling Subagent Behavior -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-violet-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-violet-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-violet-400 bg-clip-text text-transparent leading-tight">Controlling Subagent Behavior</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Visibility &amp; Orchestration Controls</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🎚️</div>
<div class="text-indigo-300 font-semibold">Visibility Controls</div>
<div class="text-xs opacity-70 mt-1">user-invokable &amp; disable flags</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">📄</div>
<div class="text-purple-300 font-semibold">Prompt Files</div>
<div class="text-xs opacity-70 mt-1">Version-controlled workflows</div>
</div>
<div class="px-4 py-3 bg-violet-900/30 rounded-xl border border-violet-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-violet-300 font-semibold">Reproducibility</div>
<div class="text-xs opacity-70 mt-1">Auditable, composable patterns</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Section 3 of 3 · Version-controlled patterns</span><br />
<span class="text-indigo-300 mt-1 block">↳ Fine-grained control for reproducible workflows</span>
</div>
</div>
</div>

---

<!-- SLIDE: Visibility Controls -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎚️ Control &amp; Workflows</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="text-lg font-bold text-purple-300 mb-3">🎚️ Control Properties</div>
<table class="w-full text-xs mt-2">
<thead>
<tr class="bg-gray-800">
<th class="text-left p-2">Property</th>
<th class="text-left p-2">Default</th>
<th class="text-left p-2">Purpose</th>
</tr>
</thead>
<tbody class="text-gray-300">
<tr class="border-b border-gray-700">
<td class="p-2 font-mono">user-invokable</td>
<td class="p-2 text-green-400">true</td>
<td class="p-2">Show in agent dropdown</td>
</tr>
<tr>
<td class="p-2 font-mono">disable-model-invocation</td>
<td class="p-2 text-green-400">false</td>
<td class="p-2">Prevent AI using as subagent</td>
</tr>
</tbody>
</table>
<div class="mt-4 text-sm text-gray-300">
<strong class="text-purple-300">Example:</strong> Create internal helper agent<br/>
<code class="text-xs">user-invokable: false</code><br/>
→ Keeps dropdown clean, enforces workflow structure
</div>
</div>
<div>
<div class="text-lg font-bold text-blue-300 mb-3">🎯 Restricting Available Subagents</div>
<div class="p-3 bg-gray-800 rounded text-xs font-mono text-gray-300 mb-3">
<div class="opacity-60">&#45;&#45;&#45;</div>
name: TDD<br/>
tools: ['agent', 'read', 'edit']<br/>
agents: ['Red', 'Green', 'Refactor']<br/>
<div class="opacity-60">&#45;&#45;&#45;</div>
Implement using test-driven dev.<br/><br/>
1. Use <strong>Red</strong> agent: write tests<br/>
2. Use <strong>Green</strong> agent: minimal code<br/>
3. Use <strong>Refactor</strong> agent: improve
</div>
<div class="text-xs text-gray-300">
Without <code>agents</code> restriction, TDD agent might select generic Implementation agent instead of specialized Green agent
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Prompt File Integration -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎚️ Control &amp; Workflows</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="text-lg font-bold text-cyan-300 mb-3">📄 Version-Controlled Workflows</div>
<div class="text-sm text-gray-300 space-y-2">
<div><strong class="text-cyan-400">Version Control:</strong> Workflow evolves with codebase — add security checks to Phase 2, all future features benefit</div>
<div><strong class="text-cyan-400">Reproducibility:</strong> Every feature goes through same research process — no forgotten steps</div>
<div><strong class="text-cyan-400">Composability:</strong> Prompt files can invoke other prompt files — build library of research workflows</div>
<div><strong class="text-cyan-400">Auditability:</strong> Git history shows when workflow changed and why</div>
</div>
</div>
<div>
<div class="text-lg font-bold text-blue-300 mb-3">🔄 Example: Feature Research Workflow</div>
<div class="p-3 bg-gray-800 rounded text-xs font-mono text-gray-300">
<div class="opacity-60">&#45;&#45;&#45;</div>
name: feature-research-workflow<br/>
tools: ['agent', 'read', 'search']<br/>
<div class="opacity-60">&#45;&#45;&#45;</div>
# Research-Driven Implementation<br/><br/>
## Phase 1: Codebase Research<br/>
Run subagent to research patterns,<br/>
utilities, and constraints.<br/><br/>
## Phase 2: Industry Best Practices<br/>
Run subagent to research libraries,<br/>
security, and performance.<br/><br/>
## Phase 3: Test Coverage<br/>
Run subagent to analyze test<br/>
structure and identify gaps.<br/><br/>
## Phase 4: Implementation<br/>
Using findings, implement feature.
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Anti-Patterns & Best Practices -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚠️ Anti-Patterns &amp; Best Practices</span>
<div class="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-4">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-2">❌ Over-Delegation</div>
<div class="text-xs text-gray-300 mb-2">Delegating trivially small tasks adds overhead</div>
<div class="p-2 bg-gray-800 rounded text-xs font-mono text-red-200 mb-2">
Run a subagent to read config file<br/>
Run a subagent to count lines<br/>
Run a subagent to check extension
</div>
<div class="text-xs text-gray-300"><strong>Rule:</strong> Delegate tasks with 5+ file reads or complex analysis, not &lt;5 second operations</div>
</div>
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-2">❌ Vague Subagent Tasks</div>
<div class="text-xs text-gray-300 mb-2">Underspecified tasks return vague summaries</div>
<div class="p-2 bg-gray-800 rounded text-xs font-mono text-red-200 mb-2">
Run a subagent to research auth
</div>
<div class="text-xs text-gray-300"><strong>Rule:</strong> Specify scope, output format, and success criteria for every task</div>
</div>
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-base font-bold text-red-300 mb-2">❌ Ignoring Subagent Results</div>
<div class="text-xs text-gray-300 mb-2">Subagents research but main agent doesn't synthesize</div>
<div class="p-2 bg-gray-800 rounded text-xs font-mono text-red-200 mb-2">
[3 summaries posted without action]
</div>
<div class="text-xs text-gray-300"><strong>Rule:</strong> Always instruct main agent to synthesize into prioritized recommendations</div>
</div>
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-base font-bold text-green-300 mb-2">✅ Best Practice Summary</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• <strong>Task Decomposition:</strong> Break work into focused, independent subtasks</div>
<div>• <strong>Clear Output:</strong> Specify exactly what subagent should return</div>
<div>• <strong>Appropriate Parallelization:</strong> Run independent analyses in parallel</div>
<div>• <strong>Result Synthesis:</strong> Combine and interpret subagent results into actions</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Real-World Use Cases -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-600/80 to-emerald-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🌐 Real-World Use Cases</span>
<div class="flex-1 h-px bg-gradient-to-r from-green-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-4 text-xs">
<div class="p-3 bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
<div class="text-sm font-bold text-blue-300 mb-2">📚 Pre-Implementation Research</div>
<div class="text-gray-300"><strong>Problem:</strong> Implementation without understanding patterns leads to inconsistent code<br/><strong>Solution:</strong> Subagent researches existing patterns, utilities, conventions<br/><strong>Metric:</strong> Pattern-inconsistent reviews dropped from 40% to &lt;10%</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border-l-4 border-purple-400">
<div class="text-sm font-bold text-purple-300 mb-2">⚡ Parallel Concern Analysis</div>
<div class="text-gray-300"><strong>Problem:</strong> Sequential evaluation takes 45+ min, risks fatigue oversights<br/><strong>Solution:</strong> 3 parallel subagents (security ‖ performance ‖ maintainability)<br/><strong>Metric:</strong> 12 min vs. 45 min sequential = 3.75x faster</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg border-l-4 border-green-400">
<div class="text-sm font-bold text-green-300 mb-2">🔍 Solution Exploration</div>
<div class="text-gray-300"><strong>Problem:</strong> Exploring 3 caching approaches creates 24K tokens of noise<br/><strong>Solution:</strong> 3 parallel subagents prototype approaches in isolation<br/><strong>Metric:</strong> 2K tokens vs. 24K = 92% reduction</div>
</div>
<div class="p-3 bg-orange-900/30 rounded-lg border-l-4 border-orange-400">
<div class="text-sm font-bold text-orange-300 mb-2">🌐 Multi-Repo Dependencies</div>
<div class="text-gray-300"><strong>Problem:</strong> Understanding impact across 3 repos takes 2+ hours sequentially<br/><strong>Solution:</strong> 3 parallel subagents investigate separate repos<br/><strong>Metric:</strong> 20 min vs. 2+ hours = 6x faster</div>
</div>
<div class="p-3 bg-red-900/30 rounded-lg border-l-4 border-red-400">
<div class="text-sm font-bold text-red-300 mb-2">📋 Regulatory Compliance</div>
<div class="text-gray-300"><strong>Problem:</strong> Researching PCI-DSS, GDPR, SOC2 sequentially is error-prone<br/><strong>Solution:</strong> 3 specialized subagents research compliance frameworks<br/><strong>Benefit:</strong> Implementation checklist shows overlapping requirements</div>
</div>
<div class="p-3 bg-cyan-900/30 rounded-lg border-l-4 border-cyan-400">
<div class="text-sm font-bold text-cyan-300 mb-2">🔐 Security-First API Development</div>
<div class="text-gray-300"><strong>Workflow:</strong> Security research ‖ pattern analysis → implementation → security audit<br/><strong>Benefit:</strong> Version-controlled, all APIs follow same rigor automatically<br/><strong>Outcome:</strong> Reproducible security-first development</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Mental Model Shift -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Mental Model Shift</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-4 mt-6">
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">✅ Move Toward</div>
<div class="text-xs text-gray-300 space-y-2">
<div><strong>Delegation Over Monolithic:</strong> Break complex tasks into focused phases</div>
<div><strong>Summary-Only Flow:</strong> Return structured findings, not full logs (4-6x token reduction)</div>
<div><strong>Specialized Subagents:</strong> Use custom agents for domain-specific tasks</div>
<div><strong>Parallel Research:</strong> Run independent tasks simultaneously (3-5x throughput)</div>
</div>
</div>
<div class="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
<div class="text-lg font-bold text-yellow-300 mb-3">⚠️ Move Away From</div>
<div class="text-xs text-gray-300 space-y-2">
<div><strong>Everything in Main Context:</strong> Doing research + analysis + implementation all in one session</div>
<div><strong>Sequential Deep Research:</strong> Waiting for one task to complete before starting next</div>
<div><strong>Keeping Failed Experiments:</strong> Leaving dead-ends in context</div>
</div>
</div>
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">🛑 Move Against</div>
<div class="text-xs text-gray-300 space-y-2">
<div><strong>Vague Subagent Tasks:</strong> Delegating "research auth" without scope</div>
<div><strong>Over-Delegation:</strong> Spawning subagents for trivial tasks</div>
<div><strong>Ignoring Results:</strong> Main agent doesn't synthesize findings</div>
</div>
</div>
</div>
<div class="mt-6 p-4 bg-gradient-to-r from-cyan-900/60 to-blue-900/60 rounded-lg">
<div class="text-sm text-white">
<strong>Example Transformation:</strong> Before: Single agent researches 30 files, explores 5 architectures — 18K tokens, 45 min. After: Main spawns 3 parallel subagents, receives 3 summaries (2K tokens), synthesizes in 3 min — 35 min total, 4x lower cost.
</div>
</div>
</div>
</div>

---

<!-- SLIDE: When to Use This Pattern -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-600/80 to-emerald-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🗺️ When to Use This Pattern</span>
<div class="flex-1 h-px bg-gradient-to-r from-green-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-6">
<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
<div class="text-lg font-bold text-green-300 mb-3">✅ Use This Pattern When:</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Task has distinct phases (research → analysis → planning → implementation)</div>
<div>• Need to explore multiple approaches without cluttering main context</div>
<div>• Independent subtasks can run in parallel (security ‖ performance ‖ testing)</div>
<div>• Different concerns require specialized focus (custom agents as subagents)</div>
</div>
</div>
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="text-lg font-bold text-red-300 mb-3">❌ Don't Use This Pattern When:</div>
<div class="text-sm text-gray-300 space-y-2">
<div>• Task is simple enough for one agent — Use Plan Mode instead</div>
<div>• Need different agent types (local → background → cloud) — Use agent handoffs</div>
<div>• Need specialized roles with personas — Use agent-teams pattern</div>
<div>• Phases must work on different Git branches — Use parallel-execution pattern</div>
</div>
</div>
</div>
<div class="mt-6 p-3 bg-gray-800 rounded-lg text-xs font-mono text-gray-300">
<div>Q: Is your task too complex for one agent in one go?</div>
<div>├─ No (simple, single-phase task)</div>
<div>│  → Use single agent in Plan Mode</div>
<div>└─ Yes (multi-phase or exploratory)</div>
<div class="ml-4">Q: Does it need multiple specialized roles?</div>
<div class="ml-4">├─ Yes → Use agent-teams pattern</div>
<div class="ml-4">└─ No → 👉 Use multi-step-tasks (subagents)</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-4 mt-4 text-xs">
<div class="p-3 bg-cyan-900/40 rounded-lg">
<div class="text-sm font-bold text-cyan-300 mb-2">⚡ Immediate (15 min)</div>
<div class="text-gray-300 space-y-1">
<div>☐ Try implicit subagent in chat: "Run a subagent to research authentication patterns and return summary"</div>
<div>☐ Check if <code>runSubagent</code> tool enabled: <code>@workspace /tools</code></div>
<div>☐ Identify phases that could run as parallel subagents</div>
</div>
</div>
<div class="p-3 bg-blue-900/40 rounded-lg">
<div class="text-sm font-bold text-blue-300 mb-2">🔧 Short-Term (1 hour)</div>
<div class="text-gray-300 space-y-1">
<div>☐ Create first prompt file with subagent workflow</div>
<div>☐ Define one custom agent for specialized subagent role (e.g., security-review)</div>
<div>☐ Test parallel execution: "Analyze PR using three parallel subagents"</div>
</div>
</div>
<div class="p-3 bg-indigo-900/40 rounded-lg">
<div class="text-sm font-bold text-indigo-300 mb-2">🚀 Advanced (2-4 hours)</div>
<div class="text-gray-300 space-y-1">
<div>☐ Build reproducible research workflow (research → analysis → synthesis)</div>
<div>☐ Implement visibility controls: internal helper agent with <code>user-invokable: false</code></div>
<div>☐ Design multi-phase pipeline with <code>agents</code> property restrictions</div>
</div>
</div>
</div>
<div class="mt-6 p-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg border border-cyan-500/50">
<div class="text-sm text-gray-200">
<strong class="text-cyan-300">Next Steps:</strong> Complete immediate actions → Explore <a href="../workshop/06-custom-agents/" class="text-blue-400 underline">Custom Agents</a> to create specialized subagent roles → Share your throughput improvements → Explore <a href="../agent-teams/" class="text-blue-400 underline">Agent Teams</a> for role-based workflows
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Related Patterns -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Related Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-4 bg-purple-900/30 rounded-lg">
<div class="text-lg font-bold text-purple-300 mb-3">🔗 Complementary Features</div>
<div class="text-sm text-gray-300 space-y-2">
<div><strong class="text-purple-400">Agent Teams:</strong> When you need specialized roles (planner/coder/reviewer) vs. context isolation</div>
<div><strong class="text-purple-400">Custom Agents:</strong> Create specialized agents to run as subagents</div>
<div><strong class="text-purple-400">Parallel Execution:</strong> When phases need separate Git branches vs. isolated contexts</div>
<div><strong class="text-purple-400">Prompt Files:</strong> Externalize subagent workflows for reproducibility</div>
</div>
</div>
<div class="p-4 bg-blue-900/30 rounded-lg">
<div class="text-lg font-bold text-blue-300 mb-3">🗺️ Pattern Comparison</div>
<table class="w-full text-xs mt-2">
<thead>
<tr class="bg-gray-800">
<th class="text-left p-2">Pattern</th>
<th class="text-left p-2">Best For</th>
</tr>
</thead>
<tbody class="text-gray-300">
<tr class="border-b border-gray-700">
<td class="p-2 font-bold text-cyan-400">Multi-Step Tasks</td>
<td class="p-2">Context isolation within one session</td>
</tr>
<tr class="border-b border-gray-700">
<td class="p-2">Agent Teams</td>
<td class="p-2">Role separation (planner/coder/reviewer)</td>
</tr>
<tr>
<td class="p-2">Parallel Execution</td>
<td class="p-2">Independent branches/experiments</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Primary Documentation", color: "cyan", items: [
        { href: "https://code.visualstudio.com/docs/copilot/agents/subagents", label: "VS Code Subagents Documentation", description: "Core concepts, invocation patterns, usage scenarios, and custom agent integration" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom Agents Documentation", description: "Create specialized agents for subagent roles with focused tools and instructions" },
        { href: "https://code.visualstudio.com/docs/copilot/agents/overview", label: "Agents Overview", description: "Understanding agent types (local, background, cloud) and when to use each" }
    ] },
    { title: "🔧 Additional Resources", color: "purple", items: [
        { href: "https://code.visualstudio.com/docs/copilot/chat/chat-sessions", label: "Chat Sessions", description: "Managing agent sessions and context across conversations" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/prompt-files", label: "Prompt Files", description: "Create reusable prompt templates with subagent workflows" },
        { href: "https://code.visualstudio.com/docs/copilot/chat/chat-tools", label: "Tools in Chat", description: "Understanding tools available to agents and subagents" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="Multi-Step Tasks: Context Isolation with Subagents"
:cards="[
  { icon: '🎯', value: 'Context Isolation', detail: 'Research stays separated', subdetail: 'Main session stays clean and focused' },
  { icon: '⚡', value: '3–5x Throughput', detail: 'Parallel execution multiplies output', subdetail: 'Multiple subagents work simultaneously' },
  { icon: '🔧', value: 'Specialized Agents', detail: 'Domain expertise per subtask', subdetail: 'Right tool for each job' },
]"
prompt="Questions? Let's discuss how subagents can transform your complex workflows"
/>