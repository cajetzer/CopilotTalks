---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Agentic Workflows: Repository Automation with AI Agents
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Agentic Workflows - Repository Automation with AI Agents
module: tech-talks/agentic-workflows
mdc: true
section: Agentic Engineering
status: active
updated: 2026-03-05
---

<script setup>
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
import CoreQuestionSlide from './components/CoreQuestionSlide.vue'
import TocSlide from './components/TocSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="GitHub Agentic Workflows"
subtitle="Repository Automation with AI Agents"
tagline="Write repository automation in natural language, execute with security-first AI agents"
meta="Tech Talk · 45-60 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How can I automate repository tasks that require judgment and context?"
subtext="Triage, code review, progress reports — tasks needing judgment, not just triggers."
highlight="Agentic workflows replace brittle YAML with AI that adapts to context."
:cards='[
  { icon: "🔧", title: "DevOps Engineers Automating Repo Tasks", description: "GitHub Actions triggering AI agents on push, PR, and issue events" },
  { icon: "📝", title: "Team Leads Eliminating Manual Reviews", description: "Auto-triage issues, synthesize progress reports, and review PRs without blocking" },
  { icon: "⚡", title: "Platform Engineers Building Safe Agents", description: "Markdown intent compiled to secure, sandboxed, validated YAML workflows" },
  { title: "Beyond YAML", description: "No brittle conditionals — AI adapts to repository state and context dynamically" },
  { title: "Context-Aware", description: "Agents understand issues, code history, and project state — not just event payloads" },
  { title: "Secure by Design", description: "Managed permissions and validated write operations keep agent actions safe" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🎯", title: "The Opportunity", subtitle: "Intent-driven automation with AI agents", blurb: "Write what you want to happen, AI figures out how", slide: 4 },
    { icon: "🏗️", title: "Core Architecture", subtitle: "Markdown → Secure YAML compilation", blurb: "Sandboxed agents, validated write operations", slide: 7 },
    { icon: "🔒", title: "Safe Outputs", subtitle: "Security-first write operations", blurb: "AI decides, sanitized handlers execute", slide: 11 },
    { icon: "🏭", title: "Agent Factory Patterns", subtitle: "100+ proven workflow patterns", blurb: "Specialization reveals possibilities", slide: 13 },
  ]'
/>
---

<!-- SLIDE: Part 1 — The Opportunity -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">The Opportunity</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Intent-driven automation with AI agents</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">📝</div>
<div class="text-cyan-300 font-semibold">Markdown Workflows</div>
<div class="text-xs opacity-70 mt-1">Natural language instructions, not YAML</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🔐</div>
<div class="text-blue-300 font-semibold">Security-First</div>
<div class="text-xs opacity-70 mt-1">Read-only AI + validated write operations</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-indigo-300 font-semibold">Context-Aware</div>
<div class="text-xs opacity-70 mt-1">AI adapts decisions to repository state</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">From scripting "how" to declaring "what"</span><br />
<span class="text-cyan-300 mt-1 block">↳ AI navigates the path</span>
</div>
</div>
</div>

---

<!-- SLIDE: Intent-Driven Automation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 The Opportunity</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
</div>
<div class="relative z-10 mb-4">
<div class="text-lg font-bold text-white mb-0.5">What's Now Possible</div>
<div class="text-xs text-white/50">AI-powered repository automation that adapts to context</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6">
<div class="space-y-4">
<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="text-lg font-bold text-cyan-300 mb-2">Intent-Driven Automation</div>
<div class="text-sm text-gray-300">Describe desired outcomes in Markdown, not implementation steps</div>
<div class="text-xs text-cyan-400/70 mt-2 font-mono">"Triage new issues based on content"</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="text-lg font-bold text-blue-300 mb-2">Security-First Design</div>
<div class="text-sm text-gray-300">Sandboxed agents with read-only access by default</div>
<div class="text-xs text-blue-400/70 mt-2">Write operations require explicit "safe outputs"</div>
</div>
</div>
<div class="space-y-4">
<div class="p-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="text-lg font-bold text-indigo-300 mb-2">Adaptive Intelligence</div>
<div class="text-sm text-gray-300">Make decisions based on repository state and context</div>
<div class="text-xs text-indigo-400/70 mt-2">Understand code structure, issue context, PR relationships</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="text-lg font-bold text-purple-300 mb-2">Continuous Improvement</div>
<div class="text-sm text-gray-300">Daily automated enhancements that compound over time</div>
<div class="text-xs text-purple-400/70 mt-2">Code simplifications, docs updates, metric tracking</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Shift -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 The Shift</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-8 h-full">
<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30 flex-1">
<div class="text-xl font-bold text-red-300 mb-3">❌ Prescriptive Automation</div>
<div class="space-y-2 text-sm text-gray-300">
<div class="flex items-start gap-2">
<div class="text-red-400 mt-0.5">•</div>
<div>Write exact steps in YAML</div>
</div>
<div class="flex items-start gap-2">
<div class="text-red-400 mt-0.5">•</div>
<div>Account for every branch and edge case</div>
</div>
<div class="flex items-start gap-2">
<div class="text-red-400 mt-0.5">•</div>
<div>Update workflow when requirements change</div>
</div>
<div class="flex items-start gap-2">
<div class="text-red-400 mt-0.5">•</div>
<div>Deterministic: same input → same output</div>
</div>
<div class="flex items-start gap-2">
<div class="text-red-400 mt-0.5">•</div>
<div>Can't adapt to context or make judgments</div>
</div>
</div>
<div class="mt-4 p-3 bg-red-950/50 rounded-lg border border-red-500/20">
<div class="text-xs font-mono text-red-300">Complex YAML, brittle logic, constant maintenance</div>
</div>
</div>
</div>
<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30 flex-1">
<div class="text-xl font-bold text-green-300 mb-3">✅ Intent-Driven Automation</div>
<div class="space-y-2 text-sm text-gray-300">
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">•</div>
<div>Describe desired outcome in natural language</div>
</div>
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">•</div>
<div>AI adapts to repository context</div>
</div>
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">•</div>
<div>Workflow learns from repository state</div>
</div>
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">•</div>
<div>Context-sensitive: AI decides best path</div>
</div>
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">•</div>
<div>Judgment calls based on code, issues, PRs</div>
</div>
</div>
<div class="mt-4 p-3 bg-green-950/50 rounded-lg border border-green-500/20">
<div class="text-xs font-mono text-green-300">Write what, not how — AI figures out the path</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Core Architecture -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Core Architecture</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Markdown → Secure YAML compilation</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">📝</div>
<div class="text-blue-300 font-semibold">Author in Markdown</div>
<div class="text-xs opacity-70 mt-1">Natural language workflow definitions</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-indigo-300 font-semibold">Compile to YAML</div>
<div class="text-xs opacity-70 mt-1">Secure lock files with isolation</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-purple-300 font-semibold">Execute Safely</div>
<div class="text-xs opacity-70 mt-1">Read-only AI + validated handlers</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Three-phase workflow execution</span><br />
<span class="text-blue-300 mt-1 block">↳ authoring → compilation → execution</span>
</div>
</div>
</div>

---

<!-- SLIDE: Three-Phase Architecture -->

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Core Architecture</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
</div>
<div class="relative z-10 mb-4">
<div class="text-lg font-bold text-white mb-0.5">How Agentic Workflows Execute</div>
<div class="text-xs text-white/50">Three distinct phases from authoring to execution</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-4 h-full">
<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30 flex-1">
<div class="flex items-center gap-2 mb-3">
<div class="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-300 font-bold">1</div>
<div class="text-lg font-bold text-cyan-300">Authoring</div>
</div>
<div class="space-y-2 text-sm text-gray-300">
<div class="text-xs text-cyan-400 font-semibold mb-1">Markdown + Frontmatter</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 mt-0.5">•</div>
<div>Triggers (schedule, events)</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 mt-0.5">•</div>
<div>Read-only permissions</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 mt-0.5">•</div>
<div>Safe-output declarations</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 mt-0.5">•</div>
<div>Natural language instructions</div>
</div>
</div>
<div class="mt-3 p-2 bg-cyan-950/50 rounded border border-cyan-500/20">
<div class="text-xs font-mono text-cyan-300">.github/workflows/triage.md</div>
</div>
</div>
</div>
<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30 flex-1">
<div class="flex items-center gap-2 mb-3">
<div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 font-bold">2</div>
<div class="text-lg font-bold text-blue-300">Compilation</div>
</div>
<div class="space-y-2 text-sm text-gray-300">
<div class="text-xs text-blue-400 font-semibold mb-1">gh aw compile</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">•</div>
<div>Parse frontmatter & body</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">•</div>
<div>Generate secure YAML</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">•</div>
<div>Agent job (read-only)</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">•</div>
<div>Handler jobs (minimal write)</div>
</div>
</div>
<div class="mt-3 p-2 bg-blue-950/50 rounded border border-blue-500/20">
<div class="text-xs font-mono text-blue-300">triage.lock.yml</div>
</div>
</div>
</div>
<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30 flex-1">
<div class="flex items-center gap-2 mb-3">
<div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold">3</div>
<div class="text-lg font-bold text-indigo-300">Execution</div>
</div>
<div class="space-y-2 text-sm text-gray-300">
<div class="text-xs text-indigo-400 font-semibold mb-1">When triggered</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">•</div>
<div>Agent explores repo</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">•</div>
<div>Produces JSON output</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">•</div>
<div>Handlers validate & sanitize</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">•</div>
<div>Execute approved ops</div>
</div>
</div>
<div class="mt-3 p-2 bg-indigo-950/50 rounded border border-indigo-500/20">
<div class="text-xs font-mono text-indigo-300">Audit trail markers</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Markdown to YAML Example -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Core Architecture</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Workflow Example</div>
<div class="text-xs text-white/50">Simple issue triage workflow in Markdown</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30 flex flex-col flex-1 min-h-0">
<div class="bg-gray-950/80 border border-gray-700/50 rounded-lg p-3 font-mono text-xs leading-relaxed flex-1 min-h-0 overflow-y-auto">
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div><span class="text-blue-400">on</span><span class="text-gray-300">:</span></div>
<div class="ml-4"><span class="text-blue-300">issues</span><span class="text-gray-300">:</span></div>
<div class="ml-8 text-gray-300">types: [opened]</div>
<div><span class="text-blue-400">permissions</span><span class="text-gray-300">:</span></div>
<div class="ml-4 text-gray-300">contents: read</div>
<div class="ml-4 text-gray-300">issues: write</div>
<div><span class="text-blue-400">safe-outputs</span><span class="text-gray-300">:</span></div>
<div class="ml-4"><span class="text-blue-300">add-labels</span><span class="text-gray-300">:</span></div>
<div class="ml-8 text-gray-300">allowed: [bug, feature, docs]</div>
<div class="ml-8 text-gray-300">max: 3</div>
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div class="mt-2 text-purple-400 font-semibold">## Issue Triage Workflow</div>
<div class="text-gray-400">Analyze new issues and apply appropriate labels.</div>
<div class="mt-1 text-cyan-400">### Instructions</div>
<div class="text-gray-300">1. Read the issue title and body</div>
<div class="text-gray-300">2. Identify the issue type</div>
<div class="text-gray-300">3. Apply 1-3 relevant labels</div>
<div class="text-gray-300">4. If unclear, ask for clarification</div>
</div>
<div class="mt-2 grid grid-cols-3 gap-3 text-xs">
<div class="p-2 bg-cyan-950/50 rounded border border-cyan-500/20">
<div class="text-cyan-300 font-semibold mb-1">Trigger</div>
<div class="text-gray-300">New issues only</div>
</div>
<div class="p-2 bg-blue-950/50 rounded border border-blue-500/20">
<div class="text-blue-300 font-semibold mb-1">Security</div>
<div class="text-gray-300">Read-only + labels</div>
</div>
<div class="p-2 bg-indigo-950/50 rounded border border-indigo-500/20">
<div class="text-indigo-300 font-semibold mb-1">Intent</div>
<div class="text-gray-300">Natural language</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Execution Flow -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚡ Execution Flow</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Secure Execution Model</div>
<div class="text-xs text-white/50">Separation of concerns: AI decides, handlers execute</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="text-base font-bold text-blue-300 mb-2">🤖 Agent Job (Read-Only)</div>
<div class="space-y-1.5 text-sm text-gray-300">
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">1.</div>
<div>Spin up isolated container</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">2.</div>
<div>Load AI agent (Copilot, Claude, etc.)</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">3.</div>
<div>Provide instructions & read-only tools</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">4.</div>
<div>Agent explores repository context</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">5.</div>
<div>Produces structured JSON output</div>
</div>
</div>
<div class="mt-2 p-2 bg-blue-950/50 rounded border border-blue-500/20">
<div class="text-xs font-mono text-blue-300">Zero write access</div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="text-base font-bold text-indigo-300 mb-2">✅ Safe-Output Handlers</div>
<div class="space-y-1.5 text-sm text-gray-300">
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">1.</div>
<div>Receive agent's JSON output</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">2.</div>
<div>Validate schema & permissions</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">3.</div>
<div>Sanitize inputs (escape XML, validate URLs)</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">4.</div>
<div>Enforce limits (max ops, expiration)</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">5.</div>
<div>Execute approved operations & log</div>
</div>
</div>
<div class="mt-2 p-2 bg-indigo-950/50 rounded border border-indigo-500/20">
<div class="text-xs font-mono text-indigo-300">Minimal write permissions</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Safe Outputs -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">Safe Outputs</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Security-first write operations</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-indigo-300 font-semibold">Declared Operations</div>
<div class="text-xs opacity-70 mt-1">Pre-approved write operations</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🛡️</div>
<div class="text-purple-300 font-semibold">Validation Pipeline</div>
<div class="text-xs opacity-70 mt-1">Sanitize, rate-limit, domain-check</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">📝</div>
<div class="text-pink-300 font-semibold">Audit Trail</div>
<div class="text-xs opacity-70 mt-1">Every action logged with markers</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">AI decides, validated handlers execute</span><br />
<span class="text-indigo-300 mt-1 block">↳ security through separation of concerns</span>
</div>
</div>
</div>

---

<!-- SLIDE: Safe Output Types -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Safe Outputs</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 1</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Available Operations</div>
<div class="text-xs text-white/50">Pre-approved write operations with configurable guardrails</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-base font-bold text-indigo-300 mb-1">Issues</div>
<div class="text-xs text-gray-300">Create, update, close, link sub-issues</div>
<div class="mt-1 text-xs font-mono text-indigo-400">Auto-expiration, grouping, cross-repo</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30">
<div class="text-base font-bold text-purple-300 mb-1">Pull Requests</div>
<div class="text-xs text-gray-300">Create, update, push commits, request reviews</div>
<div class="mt-1 text-xs font-mono text-purple-400">Draft mode, base branch, CI triggering</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-rose-900/40 rounded-lg border border-pink-500/30">
<div class="text-base font-bold text-pink-300 mb-1">Comments</div>
<div class="text-xs text-gray-300">Add comments, hide spam</div>
<div class="mt-1 text-xs font-mono text-pink-400">Max limits, workflow markers</div>
</div>
<div class="p-3 bg-gradient-to-br from-rose-900/40 to-red-900/40 rounded-lg border border-rose-500/30">
<div class="text-base font-bold text-rose-300 mb-1">Labels & Assignments</div>
<div class="text-xs text-gray-300">Add/remove labels, assign reviewers, milestones</div>
<div class="mt-1 text-xs font-mono text-rose-400">Allowed lists, max operations</div>
</div>
</div>
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-lg border border-blue-500/30">
<div class="text-base font-bold text-blue-300 mb-1">Code Review</div>
<div class="text-xs text-gray-300">Add review comments, submit reviews, resolve threads</div>
<div class="mt-1 text-xs font-mono text-blue-400">APPROVE, REQUEST_CHANGES, COMMENT</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-base font-bold text-indigo-300 mb-1">Projects</div>
<div class="text-xs text-gray-300">Create projects, update items, post status updates</div>
<div class="mt-1 text-xs font-mono text-indigo-400">Requires PAT token, v2 projects only</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30">
<div class="text-base font-bold text-purple-300 mb-1">Workflow Orchestration</div>
<div class="text-xs text-gray-300">Dispatch other workflows</div>
<div class="mt-1 text-xs font-mono text-purple-400">Orchestrator-worker pattern, no loops</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-fuchsia-900/40 rounded-lg border border-pink-500/30">
<div class="text-base font-bold text-pink-300 mb-1">Noop (Critical!)</div>
<div class="text-xs text-gray-300">Signal "no action needed"</div>
<div class="mt-1 text-xs font-mono text-pink-400">#1 failure mode: always include noop</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Agent Factory Patterns -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Agent Factory Patterns</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">100+ proven workflow patterns</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🏭</div>
<div class="text-purple-300 font-semibold">Peli's Factory</div>
<div class="text-xs opacity-70 mt-1">100+ specialized workflows tested continuously</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-pink-300 font-semibold">Specialization Wins</div>
<div class="text-xs opacity-70 mt-1">Many focused agents > one monolithic agent</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-rose-300 font-semibold">Continuous Patterns</div>
<div class="text-xs opacity-70 mt-1">Daily improvements that compound over time</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Repository-level AI automation is transformative</span><br />
<span class="text-purple-300 mt-1 block">↳ embedded agents have outsized impact</span>
</div>
</div>
</div>

---

<!-- SLIDE: Proven Patterns -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏭 Agent Factory Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-4">
<div class="text-lg font-bold text-white mb-0.5">Proven Patterns from the Factory</div>
<div class="text-xs text-white/50">Real patterns tested continuously in github/gh-aw repository</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30">
<div class="text-base font-bold text-purple-300 mb-2">🔄 Continuous Simplicity</div>
<div class="text-xs text-gray-300 mb-2">Daily scan for code simplification opportunities</div>
<div class="text-xs text-purple-400/70">→ Create PR with suggestions</div>
<div class="text-xs text-purple-400/70">→ Small daily improvements compound</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-rose-900/40 rounded-lg border border-pink-500/30">
<div class="text-base font-bold text-pink-300 mb-2">📚 Continuous Documentation</div>
<div class="text-xs text-gray-300 mb-2">Detect outdated docs when code changes</div>
<div class="text-xs text-pink-400/70">→ PR updating docs to match code</div>
<div class="text-xs text-pink-400/70">→ Maintains code-docs consistency</div>
</div>
<div class="p-3 bg-gradient-to-br from-rose-900/40 to-red-900/40 rounded-lg border border-rose-500/30">
<div class="text-base font-bold text-rose-300 mb-2">🎯 Issue Group Management</div>
<div class="text-xs text-gray-300 mb-2">Parent issue with linked sub-issue tasks</div>
<div class="text-xs text-rose-400/70">→ Track sub-issue completion</div>
<div class="text-xs text-rose-400/70">→ Auto-close parent when all resolved</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-base font-bold text-indigo-300 mb-2">🔀 Orchestrator-Worker</div>
<div class="text-xs text-gray-300 mb-2">Coordinator dispatches specialized workers</div>
<div class="text-xs text-indigo-400/70">→ Workers run tasks in parallel</div>
<div class="text-xs text-indigo-400/70">→ Orchestrator synthesizes results</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 rounded-lg border border-purple-500/30">
<div class="text-base font-bold text-purple-300 mb-2">🔍 Meta-Workflows</div>
<div class="text-xs text-gray-300 mb-2">Workflows that monitor other workflows</div>
<div class="text-xs text-purple-400/70">→ Analyze logs, performance, failures</div>
<div class="text-xs text-purple-400/70">→ Self-optimizing automation system</div>
</div>
<div class="p-3 bg-gradient-to-br from-fuchsia-900/40 to-pink-900/40 rounded-lg border border-fuchsia-500/30">
<div class="text-base font-bold text-fuchsia-300 mb-2">📊 Analytics & Reports</div>
<div class="text-xs text-gray-300 mb-2">Read-only monitoring and insights</div>
<div class="text-xs text-fuchsia-400/70">→ Daily/weekly repository reports</div>
<div class="text-xs text-fuchsia-400/70">→ Trend analysis, contributor stats</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case — Issue Triage -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💡 Real-World Use Case</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-4">
<div class="text-lg font-bold text-white mb-0.5">Issue Triage Automation</div>
<div class="text-xs text-white/50">Automatic consistent labeling based on content analysis</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-5">
<div class="space-y-3">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30">
<div class="text-base font-bold text-red-300 mb-2">❌ The Problem</div>
<div class="space-y-1.5 text-sm text-gray-300">
<div class="flex items-start gap-2">
<div class="text-red-400 mt-0.5">•</div>
<div>Dozens of new issues weekly</div>
</div>
<div class="flex items-start gap-2">
<div class="text-red-400 mt-0.5">•</div>
<div>Manual labeling is tedious</div>
</div>
<div class="flex items-start gap-2">
<div class="text-red-400 mt-0.5">•</div>
<div>Inconsistent categorization</div>
</div>
<div class="flex items-start gap-2">
<div class="text-red-400 mt-0.5">•</div>
<div>Maintainers waste time on admin</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="text-base font-bold text-purple-300 mb-2">📝 The Workflow</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-start gap-2">
<div class="text-purple-400 font-mono">on:</div>
<div>issues: [opened]</div>
</div>
<div class="flex items-start gap-2">
<div class="text-purple-400 font-mono">safe-outputs:</div>
<div>add-labels (max: 3)</div>
</div>
<div class="flex items-start gap-2">
<div class="text-purple-400 font-mono">instructions:</div>
<div>Read issue, identify type, apply labels</div>
</div>
</div>
</div>
</div>
<div class="space-y-3">
<div class="p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="text-base font-bold text-green-300 mb-2">✅ The Value</div>
<div class="space-y-1.5 text-sm text-gray-300">
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">•</div>
<div>Instant triage on every issue</div>
</div>
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">•</div>
<div>Consistent labeling patterns</div>
</div>
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">•</div>
<div>Maintainers focus on substance</div>
</div>
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">•</div>
<div>Context-aware decisions</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="text-base font-bold text-blue-300 mb-2">🔍 Example Decisions</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div>"App crashes on startup" → <span class="text-red-400">bug</span></div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div>"Add dark mode" → <span class="text-green-400">feature</span></div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div>"How do I configure X?" → <span class="text-yellow-400">question</span>, <span class="text-purple-400">docs</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Mental Model Shift -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 Mental Model Shift</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-4">
<div class="text-lg font-bold text-white mb-0.5">Core Insight</div>
<div class="text-xs text-white/50">From scripted steps to adaptive intent</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 mb-5">
<div class="text-xl font-bold text-cyan-300 mb-3 text-center">
Express intent without implementation details — AI adapts to repository context
</div>
</div>

<div class="grid grid-cols-3 gap-4">
<div>
<div class="text-sm font-bold text-green-400 mb-2">✅ Move Toward</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-start gap-1.5">
<div class="text-green-400 mt-0.5">•</div>
<div>Natural language instructions</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-green-400 mt-0.5">•</div>
<div>Context-aware decisions</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-green-400 mt-0.5">•</div>
<div>Read-only by default</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-green-400 mt-0.5">•</div>
<div>Safe-output validation</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-green-400 mt-0.5">•</div>
<div>Human-in-the-loop (draft PRs)</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-green-400 mt-0.5">•</div>
<div>Specialized workflows</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-green-400 mt-0.5">•</div>
<div>Continuous improvement</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-green-400 mt-0.5">•</div>
<div>Meta-workflows</div>
</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-yellow-400 mb-2">⚠️ Move Away From</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-start gap-1.5">
<div class="text-yellow-400 mt-0.5">•</div>
<div>Complex YAML workflows</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-yellow-400 mt-0.5">•</div>
<div>Deterministic-only logic</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-yellow-400 mt-0.5">•</div>
<div>Manual triage & coordination</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-yellow-400 mt-0.5">•</div>
<div>One-size-fits-all agents</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-yellow-400 mt-0.5">•</div>
<div>Unlimited agent permissions</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-yellow-400 mt-0.5">•</div>
<div>Set-and-forget automation</div>
</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-red-400 mb-2">🛑 Stop Doing</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-start gap-1.5">
<div class="text-red-400 mt-0.5">•</div>
<div>AI direct write access</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-red-400 mt-0.5">•</div>
<div>Ignoring noop pattern</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-red-400 mt-0.5">•</div>
<div>Skipping lock file compilation</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-red-400 mt-0.5">•</div>
<div>Manually editing lock files</div>
</div>
<div class="flex items-start gap-1.5">
<div class="text-red-400 mt-0.5">•</div>
<div>Triggering on every commit</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-4">
<div class="text-lg font-bold text-white mb-0.5">Get Started</div>
<div class="text-xs text-white/50">From installation to first workflow in 15 minutes</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-4">
<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30 flex-1">
<div class="flex items-center gap-2 mb-3">
<div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-sm">15m</div>
<div class="text-base font-bold text-purple-300">Immediate</div>
</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-start gap-2">
<div class="text-purple-400 mt-0.5">1.</div>
<div>Install gh-aw CLI extension</div>
</div>
<div class="flex items-start gap-2">
<div class="text-purple-400 mt-0.5">2.</div>
<div>Create first workflow</div>
</div>
<div class="flex items-start gap-2">
<div class="text-purple-400 mt-0.5">3.</div>
<div>Add instructions & safe-outputs</div>
</div>
<div class="flex items-start gap-2">
<div class="text-purple-400 mt-0.5">4.</div>
<div>Compile and deploy</div>
</div>
</div>
<div class="mt-3 p-2 bg-purple-950/50 rounded border border-purple-500/20">
<div class="text-xs font-mono text-purple-300">gh aw new my-workflow</div>
</div>
</div>
</div>
<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-pink-900/40 to-rose-900/40 rounded-xl border border-pink-500/30 flex-1">
<div class="flex items-center gap-2 mb-3">
<div class="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-300 font-bold text-sm">1h</div>
<div class="text-base font-bold text-pink-300">Build Skills</div>
</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-start gap-2">
<div class="text-pink-400 mt-0.5">•</div>
<div>Explore Peli's Agent Factory</div>
</div>
<div class="flex items-start gap-2">
<div class="text-pink-400 mt-0.5">•</div>
<div>Study Safe Outputs reference</div>
</div>
<div class="flex items-start gap-2">
<div class="text-pink-400 mt-0.5">•</div>
<div>Review example workflows</div>
</div>
<div class="flex items-start gap-2">
<div class="text-pink-400 mt-0.5">•</div>
<div>Understand security model</div>
</div>
</div>
<div class="mt-3 p-2 bg-pink-950/50 rounded border border-pink-500/20">
<div class="text-xs font-mono text-pink-300">Learn patterns</div>
</div>
</div>
</div>
<div class="flex flex-col">
<div class="p-4 bg-gradient-to-br from-rose-900/40 to-red-900/40 rounded-xl border border-rose-500/30 flex-1">
<div class="flex items-center gap-2 mb-3">
<div class="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300 font-bold text-sm">1d</div>
<div class="text-base font-bold text-rose-300">Go Deep</div>
</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-start gap-2">
<div class="text-rose-400 mt-0.5">•</div>
<div>Create 3-5 specialized workflows</div>
</div>
<div class="flex items-start gap-2">
<div class="text-rose-400 mt-0.5">•</div>
<div>Implement orchestrator pattern</div>
</div>
<div class="flex items-start gap-2">
<div class="text-rose-400 mt-0.5">•</div>
<div>Build continuous improvement</div>
</div>
<div class="flex items-start gap-2">
<div class="text-rose-400 mt-0.5">•</div>
<div>Try AgentCouncil</div>
</div>
</div>
<div class="mt-3 p-2 bg-rose-950/50 rounded border border-rose-500/20">
<div class="text-xs font-mono text-rose-300">Production-ready</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-2">🎯 Key Concepts to Master</div>
<div class="grid grid-cols-5 gap-2 text-xs text-gray-300">
<div class="text-center">
<div class="text-green-400 font-semibold">Safe Outputs</div>
<div class="text-xs opacity-70">Security foundation</div>
</div>
<div class="text-center">
<div class="text-green-400 font-semibold">Noop Pattern</div>
<div class="text-xs opacity-70">Prevent #1 failure</div>
</div>
<div class="text-center">
<div class="text-green-400 font-semibold">Compilation</div>
<div class="text-xs opacity-70">MD → secure YAML</div>
</div>
<div class="text-center">
<div class="text-green-400 font-semibold">Specialization</div>
<div class="text-xs opacity-70">Many focused agents</div>
</div>
<div class="text-center">
<div class="text-green-400 font-semibold">Human-in-Loop</div>
<div class="text-xs opacity-70">Trust but verify</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Official Documentation", color: "cyan", items: [
        { href: "https://github.github.com/gh-aw/introduction/overview/", label: "Introduction & Overview", description: "Overview of GitHub Agentic Workflows" },
        { href: "https://github.github.com/gh-aw/introduction/architecture/", label: "Security Architecture", description: "Sandboxed agents, validated write operations" },
        { href: "https://github.github.io/gh-aw/reference/safe-outputs/", label: "Safe Outputs Reference", description: "Pre-approved write operations and guardrails" },
        { href: "https://github.github.com/gh-aw/setup/quick-start/", label: "Quick Start Guide", description: "From installation to first workflow" }
    ] },
    { title: "Key Resources", color: "purple", items: [
        { href: "https://github.github.com/gh-aw/blog/2026-01-12-agent-factory/", label: "Peli&#39;s Agent Factory Blog", description: "100+ proven workflow patterns tested continuously" },
        { href: "https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows/", label: "Meet the Workflows", description: "Walkthrough of real production patterns" },
        { href: "https://github.blog/ai-and-ml/automate-repository-tasks-with-agentic-workflows/", label: "GitHub Blog Announcement", description: "Official announcement and overview" },
        { href: "https://josh-ops.com/posts/github-agentic-workflows/", label: "Community Examples", description: "Community-contributed workflow examples" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="GitHub Agentic Workflows: Repository Automation with AI Agents"
:cards="[
  { icon: '📝', value: 'Intent-Driven', detail: 'Markdown → Automation', subdetail: 'Natural language workflow definition' },
  { icon: '🔒', value: 'Security-First', detail: 'Sandboxed + Validated', subdetail: 'Hook system enforces guardrails' },
  { icon: '🏭', value: '100+ Patterns', detail: 'Proven at Scale', subdetail: 'Production-ready templates' },
]"
prompt="Questions? Let's discuss how to bring agent capabilities to your workflows"
codeLabel="Start with"
codeSnippet="gh extension install github/gh-aw"
/>
