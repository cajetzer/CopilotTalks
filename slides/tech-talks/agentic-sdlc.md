---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agentic SDLC: Infrastructure for AI Velocity
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Agentic SDLC - Level 5 Infrastructure for AI Velocity
module: tech-talks/agentic-sdlc
mdc: true
section: Agentic Engineering
status: active
updated: 2026-04-02
---

<script setup>
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import TitleSlide from './components/structure/TitleSlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="Agentic SDLC"
subtitle="Level 5 Infrastructure for AI Velocity"
tagline="Progress from standardized engineering to autonomous delivery without losing trust"
meta="Tech Talk · 30 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I rewire repositories and workflows to scale from 2-3 features/week to 10-15/day?"
subtext="AI agents produce code 10-15x faster than humans can review it."
highlight="The bottleneck shifts from writing to reviewing — and your infrastructure must shift with it."
:cards='[
  { icon: "🏗️", title: "Platform Engineers Building AgentRC", description: "Repo structure, CI pipelines, and test coverage optimized for AI agents" },
  { icon: "👔", title: "Engineering Managers at Scale", description: "Moving from sprint planning to autonomous PR queues shipping 10-15 features daily" },
  { icon: "🔬", title: "Tech Leads Redesigning Code Review", description: "Transitioning from line-by-line review to evidence-based governance at scale" },
  { title: "Code Volume", description: "500-2000 LOC in 15 min — human review capacity cannot keep up" },
  { title: "Review Capacity", description: "Review does not scale linearly with agent output — new patterns required" },
  { title: "CI Critical Path", description: "Flaky tests block agents — fast, reliable CI becomes a critical dependency" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "📐", title: "AgentRC Maturity Model", subtitle: "5 levels from functional to autonomous", blurb: "What each level unlocks for speed, automation, and safety", slide: 4 },
    { icon: "🏗️", title: "Repository Topology", subtitle: "Agent-native monorepo patterns", blurb: "Eliminate coordination overhead, enable atomic changes", slide: 11 },
    { icon: "📋", title: "PR Workflows", subtitle: "Outcome validation at scale", blurb: "From line-by-line review to evidence-based governance", slide: 15 },
    { icon: "🏭", title: "Trust Manufacturing", subtitle: "CI as a trust factory", blurb: "<10 min PR checks, zero-flake tolerance, attestations", slide: 19 },
  ]'
/>
---

<!-- SLIDE: Part 1 — AgentRC Maturity Model -->

<SectionOpenerSlide
  :partNumber="1"
  title="AgentRC Maturity Model"
  subtitle="5 levels from functional to autonomous"
  :cards='[
    { icon: "📐", title: "AgentRC Levels", blurb: "5 stages from functional to autonomous" },
    { icon: "⚡", title: "The Breakpoint", blurb: "Where Level 3 habits fail at Level 5 volume" },
    { icon: "🔄", title: "New Operating Model", blurb: "Evidence-based trust at machine velocity" },
  ]'
  :terminal='{ context: "Level 5 requires Level 5 infrastructure", detail: "not just more agents" }'
/>
---

<!-- SLIDE: The AgentRC Levels -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📐 AgentRC Maturity Model</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-4">
<div class="text-lg font-bold text-white mb-0.5">5 Levels of Repository Readiness</div>
<div class="text-xs text-white/50">Each level unlocks a new class of agent capability — they compound</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-4">
<div class="flex items-stretch gap-2">
<div class="flex-1 flex flex-col p-3 bg-gradient-to-b from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-500/40 text-center">
<div class="text-3xl font-black text-slate-400 leading-none mb-1">L1</div>
<div class="w-full h-px bg-slate-500/30 mb-2"></div>
<div class="text-sm font-bold text-slate-300 mb-1">Functional</div>
<div class="text-xs text-slate-400 flex-1">Reliable scripts &amp; baseline CI signals</div>
<div class="mt-2 text-lg">🔧</div>
</div>
<div class="flex items-center text-slate-600 text-xl font-thin px-0.5">›</div>
<div class="flex-1 flex flex-col p-3 bg-gradient-to-b from-blue-900/50 to-blue-800/50 rounded-xl border border-blue-500/40 text-center">
<div class="text-3xl font-black text-blue-400 leading-none mb-1">L2</div>
<div class="w-full h-px bg-blue-500/30 mb-2"></div>
<div class="text-sm font-bold text-blue-300 mb-1">Documented</div>
<div class="text-xs text-blue-200/70 flex-1">Explicit conventions agents can follow</div>
<div class="mt-2 text-lg">📖</div>
</div>
<div class="flex items-center text-blue-700 text-xl font-thin px-0.5">›</div>
<div class="flex-1 flex flex-col p-3 bg-gradient-to-b from-indigo-900/50 to-indigo-800/50 rounded-xl border border-indigo-500/40 text-center">
<div class="text-3xl font-black text-indigo-400 leading-none mb-1">L3</div>
<div class="w-full h-px bg-indigo-500/30 mb-2"></div>
<div class="text-sm font-bold text-indigo-300 mb-1">Standardized</div>
<div class="text-xs text-indigo-200/70 flex-1">CI/CD policies &amp; auditable review paths</div>
<div class="mt-2 text-lg">⚙️</div>
</div>
<div class="flex items-center text-indigo-600 text-xl font-thin px-0.5">›</div>
<div class="flex-1 flex flex-col p-3 bg-gradient-to-b from-cyan-900/50 to-cyan-800/50 rounded-xl border border-cyan-500/40 text-center">
<div class="text-3xl font-black text-cyan-400 leading-none mb-1">L4</div>
<div class="w-full h-px bg-cyan-500/30 mb-2"></div>
<div class="text-sm font-bold text-cyan-300 mb-1">Optimized</div>
<div class="text-xs text-cyan-200/70 flex-1">MCP tools &amp; multi-step agent workflows</div>
<div class="mt-2 text-lg">🤖</div>
</div>
<div class="flex items-center text-cyan-600 text-xl font-thin px-0.5">›</div>
<div class="flex-1 flex flex-col p-3 bg-gradient-to-b from-emerald-900/50 to-emerald-800/50 rounded-xl border border-emerald-500/40 text-center relative">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-emerald-500/80 rounded-full text-white text-[10px] font-bold tracking-wide">TARGET</div>
<div class="text-3xl font-black text-emerald-400 leading-none mb-1 mt-1">L5</div>
<div class="w-full h-px bg-emerald-500/30 mb-2"></div>
<div class="text-sm font-bold text-emerald-300 mb-1">Autonomous</div>
<div class="text-xs text-emerald-200/70 flex-1">Agents as primary producers, machine-paced</div>
<div class="mt-2 text-lg">🚀</div>
</div>
</div>
<div class="p-3 bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 rounded-xl border border-emerald-500/30 text-center">
<div class="text-sm font-semibold text-emerald-300">L1–L4 are prerequisites, not stepping stones — each level must stay healthy as you reach for L5</div>
</div>
</div>
</div>

---

<!-- SLIDE: Level 1 — Functional -->
<div class="h-full flex flex-col justify-center px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📐 AgentRC Maturity Model</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 5</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-xl font-bold text-white mb-1">🔧 Functional</div>
<div class="text-sm text-gray-400">Safe for AI-assisted development with close human review</div>
</div>
<div class="relative z-10 mb-3 p-3 bg-gray-900/50 rounded-xl border border-white/10 text-sm text-gray-300 italic">
&ldquo;A repo at Level 1 is safe for AI-assisted development — a human can clone, build, and test it with confidence. Agents can produce output, but need close human review because there are no enforced conventions or CI gates to catch mistakes automatically.&rdquo;
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-gradient-to-br from-red-950/60 to-gray-900/80 border border-red-500/20">
<div class="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">⏳ Where Time is Lost</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• PRs fail due to fragile build paths</div>
        <div>• CI babysitting and setup/debug time</div>
        <div>• Agent PRs arrive without context, require back-and-forth</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-950/60 to-gray-900/80 border border-green-500/20">
<div class="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">✅ What Changes</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• Build/test paths become explicit and measurable</div>
        <div>• CI setup and debug time are reduced</div>
        <div>• Linting removes style review churn</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-cyan-950/60 to-gray-900/80 border border-cyan-500/20">
<div class="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">🔍 Key Checks</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• Linting configured</div>
        <div>• Build + test scripts</div>
        <div>• README present</div>
        <div>• Lockfile present</div>
        <div>• Custom AI instructions (copilot-instructions.md)</div>
</div>
</div>
</div>
</div>
---

<!-- SLIDE: Level 2 — Documented -->
<div class="h-full flex flex-col justify-center px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📐 AgentRC Maturity Model</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 5</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-xl font-bold text-white mb-1">📝 Documented</div>
<div class="text-sm text-gray-400">Meaningful AI autonomy with convention awareness</div>
</div>
<div class="relative z-10 mb-3 p-3 bg-gray-900/50 rounded-xl border border-white/10 text-sm text-gray-300 italic">
&ldquo;A repo at Level 2 is safe for AI-assisted development with meaningful autonomy. Agents understand conventions, have a CI gate to catch regressions, and can be connected to live tools via MCP. Human review is still essential, but the volume of rework comments drops significantly.&rdquo;
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-gradient-to-br from-red-950/60 to-gray-900/80 border border-red-500/20">
<div class="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">⏳ Where Time is Lost</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• AI output violates repo conventions</div>
        <div>• Author rework and reviewers re-explaining norms</div>
        <div>• Agents act on underspecified issues, miss requirements</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-950/60 to-gray-900/80 border border-green-500/20">
<div class="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">✅ What Changes</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• Repo-specific AI instructions in place</div>
        <div>• Instruction consistency enforced</div>
        <div>• Author rewrites and review cycles reduced</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-cyan-950/60 to-gray-900/80 border border-cyan-500/20">
<div class="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">🔍 Key Checks</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• CI workflow configured</div>
        <div>• CODEOWNERS present</div>
        <div>• PR template present</div>
        <div>• Issue templates</div>
        <div>• MCP config present</div>
</div>
</div>
</div>
</div>
---

<!-- SLIDE: Level 3 — Standardized -->
<div class="h-full flex flex-col justify-center px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📐 AgentRC Maturity Model</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 5</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-xl font-bold text-white mb-1">📋 Standardized</div>
<div class="text-sm text-gray-400">Supervised autonomous operation with policy compliance</div>
</div>
<div class="relative z-10 mb-3 p-3 bg-gray-900/50 rounded-xl border border-white/10 text-sm text-gray-300 italic">
&ldquo;A repo at Level 3 is ready for supervised autonomous operation — agents can be trusted to draft complete, policy-compliant PRs and handle multi-step tasks. Security guardrails, dependency hygiene, and observability are in place so that what agents produce can be safely shipped with targeted human review.&rdquo;
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-gradient-to-br from-red-950/60 to-gray-900/80 border border-red-500/20">
<div class="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">⏳ Where Time is Lost</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• Inconsistent repo behaviors increase reviewer context switching</div>
        <div>• CI variance, ownership confusion, policy exceptions add overhead</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-950/60 to-gray-900/80 border border-green-500/20">
<div class="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">✅ What Changes</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• CI-enforced readiness standards in place</div>
        <div>• Reviewer overhead and escalation time reduced</div>
        <div>• Security and dependency hygiene automated</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-cyan-950/60 to-gray-900/80 border border-cyan-500/20">
<div class="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">🔍 Key Checks</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• Branch protection configured</div>
        <div>• Security policy (SECURITY.md)</div>
        <div>• Dependabot configured</div>
        <div>• Custom AI agents</div>
        <div>• Commit convention enforced</div>
</div>
</div>
</div>
</div>
---

<!-- SLIDE: Level 4 — Optimized -->
<div class="h-full flex flex-col justify-center px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📐 AgentRC Maturity Model</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 5</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-xl font-bold text-white mb-1">⚡ Optimized</div>
<div class="text-sm text-gray-400">End-to-end autonomous task execution without scaffolding</div>
</div>
<div class="relative z-10 mb-3 p-3 bg-gray-900/50 rounded-xl border border-white/10 text-sm text-gray-300 italic">
&ldquo;At Level 4, agents can be trusted to execute well-defined end-to-end tasks — read an issue, write code, run tests, open a PR — without human scaffolding at each step. Pre-commit authoring time starts falling meaningfully as autonomous task execution becomes routine.&rdquo;
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-gradient-to-br from-red-950/60 to-gray-900/80 border border-red-500/20">
<div class="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">⏳ Where Time is Lost</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• Developers manually chain steps AI could execute end-to-end</div>
        <div>• Context switching between tools</div>
        <div>• Pre-commit authoring time for routine changes</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-950/60 to-gray-900/80 border border-green-500/20">
<div class="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">✅ What Changes</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• MCP-enabled tool use gives agents real repo access</div>
        <div>• Agent skills handle multi-step work</div>
        <div>• Pre-commit authoring time and manual orchestration reduced</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-cyan-950/60 to-gray-900/80 border border-cyan-500/20">
<div class="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">🔍 Key Checks</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• Custom agents configured</div>
        <div>• Skills present</div>
        <div>• Release automation configured</div>
        <div>• MCP actively used in workflows</div>
</div>
</div>
</div>
</div>
---

<!-- SLIDE: Level 5 — Autonomous -->
<div class="h-full flex flex-col justify-center px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📐 AgentRC Maturity Model</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">5 of 5</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-xl font-bold text-white mb-1">🚀 Autonomous</div>
<div class="text-sm text-gray-400">Agents as primary producers — humans review and approve</div>
</div>
<div class="relative z-10 mb-3 p-3 bg-gray-900/50 rounded-xl border border-white/10 text-sm text-gray-300 italic">
&ldquo;At Level 5, agents handle authoring entirely. Human time becomes review and approval, not execution. CI gates and continuous evaluation prevent context from going stale as the codebase evolves.&rdquo;
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-gradient-to-br from-red-950/60 to-gray-900/80 border border-red-500/20">
<div class="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">⏳ Where Time is Lost</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• Human engineering time still required to author even routine changes</div>
        <div>• Manual prompt iteration for well-understood task types</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-950/60 to-gray-900/80 border border-green-500/20">
<div class="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">✅ What Changes</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• Fully autonomous agent workflows: issue → code → tests → PR without scaffolding</div>
        <div>• CI enforces agentrc eval pass rate</div>
        <div>• Context and instructions kept fresh by gates</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-cyan-950/60 to-gray-900/80 border border-cyan-500/20">
<div class="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">🔍 Key Checks</div>
<div class="text-xs text-gray-300 space-y-1.5">
        <div>• agentrc eval gate in CI (e.g., --fail-level 80)</div>
        <div>• Agent output quality tracked over time</div>
        <div>• Instructions enforced, not just present</div>
</div>
</div>
</div>
</div>
---

<!-- SLIDE: Part 2 — Repository Topology -->

<SectionOpenerSlide
  :partNumber="2"
  title="Repository Topology"
  subtitle="Rewiring code boundaries for agent-native delivery"
  :cards='[
    { icon: "🏗️", title: "Monorepo Design", blurb: "Atomic changes across the full stack" },
    { icon: "🎯", title: "Module Boundaries", blurb: "Build-time enforcement, zero drift" },
    { icon: "⚡", title: "War Story", blurb: "6-hour feature drop to 45 minutes" },
  ]'
  :terminal='{ context: "Eliminate cross-repo coordination", detail: "the hidden tax on agent throughput" }'
/>
---

<!-- SLIDE: Monorepo Default for Agent Velocity -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Repository Topology</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <span class="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">🏗️ Monorepo: Default for Agent Velocity</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border-2 border-green-500/30">
<div class="text-center mb-2">
<div class="text-xl">✅</div>
<div class="font-bold text-green-300 text-sm">Monorepo Benefits</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-green-900/30 rounded"><span class="font-bold text-green-400">Atomic changes:</span> API + 7 call sites in 1 PR, not 8</div>
<div class="p-1.5 bg-green-900/30 rounded"><span class="font-bold text-green-400">Agent navigation:</span> grep instead of GitHub search</div>
<div class="p-1.5 bg-green-900/30 rounded"><span class="font-bold text-green-400">Shared patterns:</span> Local imports, no "which version?"</div>
<div class="p-1.5 bg-green-900/30 rounded"><span class="font-bold text-green-400">Unified CI:</span> Consistent standards, shared cache</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-xl border-2 border-orange-500/30">
<div class="text-center mb-2">
<div class="text-xl">⚡</div>
<div class="font-bold text-orange-300 text-sm">Multi-Repo: Only When Needed</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-orange-900/30 rounded">Hard access boundaries (PCI-regulated payment)</div>
<div class="p-1.5 bg-orange-900/30 rounded">Independent lifecycles (mobile vs web, truly separate)</div>
<div class="p-1.5 bg-orange-900/30 rounded">Regulatory mandates (physical separation required)</div>
<div class="p-1.5 bg-orange-900/30 rounded">Organizational constraints (acquired company, temporary)</div>
</div>
</div>
</div>
<div class="mt-2 p-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-sm">🎯 Decision Rule: If agents touch >1 repo for >30% of features → consolidate to monorepo</span>
</div>
</div>
</div>

---

<!-- SLIDE: The Coordination Tax -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Repository Topology</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">💸 The Coordination Tax</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border border-red-500/30">
<div class="font-bold text-red-300 mb-2 text-sm">❌ Before — Polyrepo</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="p-1.5 bg-red-900/20 rounded">Feature touches 3 repos</div>
<div class="p-1.5 bg-red-900/20 rounded">45-minute CI in each repo</div>
<div class="p-1.5 bg-red-900/20 rounded">Reviews happen in sequence, not parallel</div>
<div class="p-1.5 bg-red-900/20 rounded">Contract mismatch discovered late</div>
<div class="p-1.5 bg-red-900/20 rounded">Deploy ordering becomes a coordination meeting</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-xl border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2 text-sm">✅ After — Monorepo</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="p-1.5 bg-emerald-900/20 rounded">One atomic PR across all modules</div>
<div class="p-1.5 bg-emerald-900/20 rounded">8-minute affected-only CI</div>
<div class="p-1.5 bg-emerald-900/20 rounded">20-minute outcome review</div>
<div class="p-1.5 bg-emerald-900/20 rounded">One deployment path</div>
<div class="p-1.5 bg-emerald-900/20 rounded">Rollback is a single motion</div>
</div>
</div>
</div>
<div class="grid grid-cols-3 gap-3 text-center">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-400 font-bold text-xl">3-5 days → 4-6 hrs</div>
<div class="text-xs text-white/50 mt-1">Time to production</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-400 font-bold text-xl">60 min → 8 min</div>
<div class="text-xs text-white/50 mt-1">CI on affected paths</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-400 font-bold text-xl">40% → 5%</div>
<div class="text-xs text-white/50 mt-1">Developer coordination time</div>
</div>
</div>
</div>
</div>
---

<!-- SLIDE: Enforced Module Boundaries -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Repository Topology</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></span>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">📦 Enforced Module Boundaries</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border-2 border-red-500/30">
<div class="text-center mb-3">
<div class="text-2xl">❌</div>
<div class="font-bold text-red-300">Suggested (Fails at Level 5)</div>
</div>
<div class="text-xs font-mono text-gray-300 bg-gray-900/50 p-2 rounded mb-2">
// @internal - Don't import this!<br />
export class PaymentProcessor {}
</div>
<div class="text-xs text-gray-400">Agents don't read comments — they follow import patterns they observe</div>
</div>
<div class="p-4 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-xl border-2 border-emerald-500/30">
<div class="text-center mb-3">
<div class="text-2xl">✅</div>
<div class="font-bold text-emerald-300">Enforced (Works at Level 5)</div>
</div>
<div class="text-xs font-mono text-gray-300 bg-gray-900/50 p-2 rounded mb-2">
// nx.json boundary enforcement<br />
{<br />
  "sourceTag": "scope:payment",<br />
  "onlyDependOnLibsWithTags": ["scope:shared"]<br />
}
</div>
<div class="text-xs text-gray-400">Build-time failures prevent violations; clear error messages guide corrections</div>
</div>
</div>

<div class="mt-4 space-y-2 text-xs">
<div class="p-2 bg-gray-800 rounded"><span class="text-cyan-400">✓ Architectural decay prevention:</span> Can't create circular dependencies</div>
<div class="p-2 bg-gray-800 rounded"><span class="text-green-400">✓ CI catches violations before merge:</span> Agent learns constraint from build failure</div>
<div class="p-2 bg-gray-800 rounded"><span class="text-blue-400">✓ Documentation via enforcement:</span> Rules ARE the documentation</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — PR Workflows -->

<SectionOpenerSlide
  :partNumber="3"
  title="PR Workflows"
  subtitle="Scaling governance from line-by-line review to outcome validation"
  :cards='[
    { icon: "📋", title: "Intent-Based PRs", blurb: "Evidence bundles, not implementation reviews" },
    { icon: "🔺", title: "Governance Pyramid", blurb: "Tiered automation by risk level" },
    { icon: "💰", title: "Economic Shift", blurb: "Scarcity moves from code to review bandwidth" },
  ]'
  :terminal='{ context: "300 lines/day human review can’t scale to 15,000 lines/day", detail: "the model must change" }'
/>
---

<!-- SLIDE: The Economic Shift -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 PR Workflows</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <span class="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">💰 The Economic Shift</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border-2 border-red-500/30">
<div class="text-center mb-3">
<div class="text-2xl">⚠️</div>
<div class="font-bold text-red-300">Level 3 Scarcity</div>
</div>
<div class="space-y-2 text-sm">
<div class="p-2 bg-red-900/30 rounded">Developer time to write code</div>
<div class="p-2 bg-red-900/30 rounded">Code quality (bugs in implementation)</div>
<div class="p-2 bg-red-900/30 rounded">Implementation speed</div>
<div class="p-2 bg-red-900/30 rounded">Review thoroughness</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-xl border-2 border-emerald-500/30">
<div class="text-center mb-3">
<div class="text-2xl">✨</div>
<div class="font-bold text-emerald-300">Level 5 Scarcity</div>
</div>
<div class="space-y-2 text-sm">
<div class="p-2 bg-emerald-900/30 rounded">Governance capacity to review</div>
<div class="p-2 bg-emerald-900/30 rounded">Trust at scale (can we ship this velocity?)</div>
<div class="p-2 bg-emerald-900/30 rounded">Architectural coherence</div>
<div class="p-2 bg-emerald-900/30 rounded">Compliance verification speed</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-center">
<span class="text-white font-bold">💡 The Shift: From "can we write it fast enough?" to "can we trust it at this velocity?"</span>
</div>
</div>
</div>

---

<!-- SLIDE: Intent-Based PRs -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 PR Workflows</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">📋 Intent-Based PRs: Evidence Bundles</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="space-y-3 text-sm">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2">1. Intent Specification (What Humans Provide)</div>
<div class="text-xs text-gray-300">Feature requirements, constraints, acceptance criteria — goal-level direction, not implementation detail</div>
</div>

<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">2. Policy Enforcement (Automated Checks)</div>
<div class="text-xs text-gray-300">Security scan, boundary enforcement, compliance validation — 90% automated, 10% human judgment</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2">3. Outcome Validation (Human Review Focus)</div>
<div class="text-xs text-gray-300">Does implementation match intent? Edge cases handled? Feature integrates correctly? NOT "why Map on line 47?"</div>
</div>
</div>

<div class="mt-4 grid grid-cols-2 gap-4">
<div class="p-3 bg-red-900/30 rounded-lg">
<div class="text-sm font-bold text-red-300">Traditional Review</div>
<div class="text-xs text-gray-400">3 hours, 200-line limit, line-by-line scrutiny</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg">
<div class="text-sm font-bold text-green-300">Intent-Based Review</div>
<div class="text-xs text-gray-400">20 minutes, 2000-line payloads, outcome validation</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 text-center">
<div class="text-xs font-semibold text-green-300">Result: 50x review capacity increase — 15,000 lines/day becomes manageable</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Governance Pyramid -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 PR Workflows</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></span>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">🔺 The Governance Pyramid</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="flex flex-col items-center gap-2 mt-3">
<div class="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center max-w-md">
<div class="text-sm font-bold text-white">Human Governance (10%)</div>
<div class="text-xs text-blue-200 mt-0.5">Strategic decisions · High-risk changes · Architectural fit</div>
</div>

<div class="text-2xl text-gray-500">↓</div>

<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 text-center max-w-2xl">
<div class="text-base font-bold text-cyan-300 mb-2">Automated Governance (90%)</div>
<div class="grid grid-cols-3 gap-1.5 text-xs">
<div class="p-1.5 bg-cyan-900/50 rounded">Security scanning</div>
<div class="p-1.5 bg-blue-900/50 rounded">Test coverage</div>
<div class="p-1.5 bg-indigo-900/50 rounded">Performance benchmarks</div>
<div class="p-1.5 bg-purple-900/50 rounded">Architecture rules</div>
<div class="p-1.5 bg-pink-900/50 rounded">Compliance checks</div>
<div class="p-1.5 bg-cyan-900/50 rounded">Dependency audits</div>
</div>
</div>
</div>

<div class="mt-3 grid grid-cols-2 gap-3 text-sm">
<div class="p-2.5 bg-red-900/30 rounded-lg">
<div class="font-bold text-red-300 text-xs">Traditional Governance</div>
<div class="text-xs text-gray-400">22 manual gates, 4-7 days PR→merge</div>
</div>
<div class="p-2.5 bg-green-900/30 rounded-lg">
<div class="font-bold text-green-300 text-xs">Level 5 Governance</div>
<div class="text-xs text-gray-400">4 human checkpoints, 2-4 hours PR→merge</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Trust Manufacturing -->

<SectionOpenerSlide
  :partNumber="4"
  title="Trust Manufacturing"
  subtitle="Transforming CI from quality gate to trust evidence production"
  :cards='[
    { icon: "⏱️", title: "10-Minute Rule", blurb: "Fast CI = agent throughput × safety" },
    { icon: "🎯", title: "Zero-Flake Tolerance", blurb: "Flaky tests block 15 PRs/day at scale" },
    { icon: "🏭", title: "Attestations", blurb: "Automated trust signals at shipping velocity" },
  ]'
  :terminal='{ context: "CI becomes a trust factory", detail: "production rate must match agent output rate" }'
/>
---

<!-- SLIDE: The 10-Minute Rule -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏭 Trust Manufacturing</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <span class="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">⏱️ The 10-Minute Rule</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border-2 border-red-500/30">
<div class="text-center mb-3">
<div class="text-2xl">⏱️</div>
<div class="font-bold text-red-300">If CI Takes 60 Minutes</div>
</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-red-900/30 rounded">Generate code (5 min) → Wait CI (60 min) → Fix → Repeat</div>
<div class="p-2 bg-red-900/30 rounded">4 iterations = 4 hours total</div>
<div class="p-2 bg-red-900/30 rounded">Agent sits idle 80% of the time</div>
</div>
<div class="mt-3 text-center text-sm font-bold text-red-300">Effective velocity: 2-3 features/day</div>
</div>
<div class="p-4 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-xl border-2 border-emerald-500/30">
<div class="text-center mb-3">
<div class="text-2xl">⚡</div>
<div class="font-bold text-emerald-300">If CI Takes 8 Minutes</div>
</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-emerald-900/30 rounded">Generate code (5 min) → Wait CI (8 min) → Fix → Repeat</div>
<div class="p-2 bg-emerald-900/30 rounded">4 iterations = 52 minutes total</div>
<div class="p-2 bg-emerald-900/30 rounded">Agent productive 95% of the time</div>
</div>
<div class="mt-3 text-center text-sm font-bold text-emerald-300">Effective velocity: 10-15 features/day</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">🎯 Target: &lt;10 minutes for PR checks, &lt;30 minutes for full pipeline</span>
</div>
</div>
</div>

---

<!-- SLIDE: How to Achieve Fast CI -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏭 Trust Manufacturing</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">⚙️ How to Achieve Fast CI</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-5 gap-3 text-xs">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30">
<div class="text-2xl mb-2">🎯</div>
<div class="font-bold text-cyan-300">Affected Analysis</div>
<div class="text-gray-400 mt-1">Test only changed modules: 80 min → 8 min</div>
</div>

<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold text-blue-300">Parallelize</div>
<div class="text-gray-400 mt-1">Distribute across runners: 8 min → 4 min</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="text-2xl mb-2">💾</div>
<div class="font-bold text-purple-300">Cache Aggressively</div>
<div class="text-gray-400 mt-1">Dependencies, builds, test results</div>
</div>

<div class="p-3 bg-gradient-to-br from-pink-900/40 to-pink-800/40 rounded-lg border border-pink-500/30">
<div class="text-2xl mb-2">🔨</div>
<div class="font-bold text-pink-300">Incremental Builds</div>
<div class="text-gray-400 mt-1">Rebuild only what changed</div>
</div>

<div class="p-3 bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
<div class="text-2xl mb-2">🚀</div>
<div class="font-bold text-green-300">Strategic Splitting</div>
<div class="text-gray-400 mt-1">Fast smoke tests first (fail fast)</div>
</div>
</div>

<div class="mt-6 space-y-2 text-sm">
<div class="p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">
<div class="font-bold text-gray-300">Example Impact</div>
<div class="text-xs text-gray-400 mt-1">First build: 23 minutes → Cached build with affected analysis: 3 minutes (7.6x speedup)</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Zero-Flake Tolerance -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏭 Trust Manufacturing</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></span>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">🎯 Zero-Flake Tolerance</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border-2 border-red-500/30 mb-4">
<div class="font-bold text-red-300 mb-2">⚠️ The Problem with Flaky Tests</div>
<div class="text-xs text-gray-300 space-y-1">
<div>Single flaky test (5% failure rate) × 20 PRs/day = 1 spurious failure/day</div>
<div>10 flaky tests = 10 failures/day → Developers lose trust in CI</div>
<div>"Just rerun it" becomes default → Green builds mean nothing</div>
</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">
<div class="p-3 bg-gradient-to-br from-orange-900/40 to-orange-800/40 rounded-lg border border-orange-500/30">
<div class="font-bold text-orange-300 mb-2">Zero Tolerance Policy</div>
<div class="space-y-1 text-xs text-gray-300">
<div>1. Quarantine on first flake</div>
<div>2. Fix within 2 days or delete</div>
<div>3. After 2 days: auto-disabled</div>
<div>4. Track flake rate: &lt;2% target</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
<div class="font-bold text-green-300 mb-2">How to Fix Flaky Tests</div>
<div class="space-y-1 text-xs text-gray-300">
<div>Race conditions → waitFor(), not sleep()</div>
<div>External deps → Mock APIs</div>
<div>Time-dependent → Mock system time</div>
<div>Order-dependent → Unique IDs per test</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 text-center">
<div class="text-sm font-semibold text-green-300">Real-world impact: 18% flake rate → 1.2% | Agent idle time: 35% → 8% | Manual reruns: 45/week → 2/week</div>
</div>
</div>
</div>

---

<!-- SLIDE: Key Takeaways -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Key Takeaways</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-4 max-w-4xl mx-auto">
<div class="p-4 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="flex items-center gap-3">
<div class="text-2xl font-bold text-cyan-400">1</div>
<div>
<div class="font-semibold text-cyan-300">AgentRC Level 5 is a maturity target</div>
<div class="text-sm opacity-80">Autonomous delivery only works if Levels 1-4 foundations are solid</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="flex items-center gap-3">
<div class="text-2xl font-bold text-blue-400">2</div>
<div>
<div class="font-semibold text-blue-300">Monorepo eliminates coordination overhead</div>
<div class="text-sm opacity-80">Default for 80% of product teams when agents touch 2+ repos frequently</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="flex items-center gap-3">
<div class="text-2xl font-bold text-indigo-400">3</div>
<div>
<div class="font-semibold text-indigo-300">PR review shifts to outcome validation</div>
<div class="text-sm opacity-80">Evidence bundles + automated gates + human judgment on intent match</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="flex items-center gap-3">
<div class="text-2xl font-bold text-purple-400">4</div>
<div>
<div class="font-semibold text-purple-300">CI becomes a trust factory</div>
<div class="text-sm opacity-80">&lt;10 min PR checks, &lt;2% flake rate, automated attestations at scale</div>
</div>
</div>
</div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 text-center">
<div class="text-lg font-semibold text-green-300">Result: 100x throughput scaling — 150 features/year → 3,600 features/year with maintained quality</div>
</div>
</div>
</div>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="🚀 From Manual Bottlenecks to Agentic Velocity"
  :leftItems="[
    'Developers block on cross-repo coordination — hours of meetings per feature',
    'Polyrepo workflows create 45-minute CI per repo, line-by-line reviews dominate',
    'Agent autonomy stalls at Level 2/3 — no trust infrastructure for Level 5 velocity',
    'Code quality depends on human review bandwidth — cannot scale beyond 300 lines/day'
  ]"
  :rightItems="[
    'Monorepo atomicity eliminates coordination tax — one PR, one review, one deployment',
    'Affected-only CI cuts runtime from 45 min to 8 min — 6-hour features done in 45 minutes',
    'Evidence-based trust enables Level 5 autonomy — CI as trust factory, not quality gate',
    '15,000+ lines/day at quality — intent-based validation replaces line-by-line review'
  ]"
  :metrics="[
    { value: '150 → 3,600', detail: 'Features per year' },
    { value: '3-5 days → 4-6 hours', detail: 'Time to production' },
    { value: 'L2 → L5', detail: 'Agent autonomy level' }
  ]"
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Run agentrc assess on your repo to get a maturity score", "Identify your single biggest blocker to reaching L2", "Add an AGENTS.md with intent and architecture context", "Check your CI runtime — is it under 10 minutes?"]'
  :thisWeek='["Enforce module boundaries with Nx or equivalent tooling", "Get CI consistently under 10 minutes", "Achieve AgentRC L2: documented and repeatable workflows", "Target a CI flake rate below 2%"]'
  :thisMonth='["Reach AgentRC L3+ with standardized agent workflows", "Implement hermetic builds for reproducible trust signals", "Adopt intent-based PRs and governance pyramid controls", "Enable autonomous agent merge for qualifying PRs"]'
  footer="Getting CI under 10 minutes is the single highest-leverage action — it unlocks faster agent feedback loops, more concurrent PRs, and the trust signals that make autonomous merge possible."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "🤖 AgentRC & GitHub", color: "cyan", items: [
        { href: "https://github.com/MSBart2/agentrc", label: "AgentRC Framework", description: "Repository AI-readiness maturity model and workflow automation" },
        { href: "https://github.com/MSBart2/agentrc/blob/feat/workflow-automation-pillar/docs/maturity-models.md", label: "AgentRC Maturity Model Docs", description: "L1–L5 level definitions, checks, and progression criteria" },
        { href: "https://docs.github.com/en/actions", label: "GitHub Actions Documentation", description: "CI/CD workflow automation, parallelization, and caching strategies" },
        { href: "https://docs.github.com/en/copilot", label: "GitHub Copilot Documentation", description: "Agent mode, custom instructions, MCP integration" }
    ] },
    { title: "🛠️ Tools & Standards", color: "purple", items: [
        { href: "https://nx.dev", label: "Nx Monorepo Tools", description: "Build orchestration, module boundaries, affected analysis, caching" },
        { href: "https://slsa.dev", label: "SLSA Framework", description: "Supply chain security levels and software attestation standards" },
        { href: "https://bazel.build/basics/hermeticity", label: "Hermetic Builds (Bazel)", description: "Deterministic build principles for reproducible trust signals" },
        { label: "Related Tech Talks", description: "Agentic Journey · Agent Teams · Enterprise Patterns · Agentic Workflows" }
    ] }
  ]'
/>
---
<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="Agentic SDLC: Infrastructure for AI Velocity"
:cards="[
  { icon: '🚀', value: '2–3 → 10–15', detail: 'Features per day', subdetail: 'Level 5 infrastructure acceleration' },
  { icon: '📈', value: '100x', detail: 'Throughput scaling potential', subdetail: 'With proper tooling and process changes' },
  { icon: '⚡', value: '<10 min', detail: 'CI trust cycle target', subdetail: 'Hermetic builds + parallel execution' },
]"
prompt="Questions? Let's discuss your path to Level 5 — and what infrastructure changes to prioritize first"
/>