---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot CLI
  Terminal-Native AI for Developers and DevOps
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot CLI
module: tech-talks/copilot-cli
section: Copilot Tools
status: active
updated: 2026-06-24
mdc: true
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
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="GitHub Copilot CLI"
subtitle="Terminal-Native AI"
tagline="For Developers & DevOps Engineers"
meta="Tech Talk · 45 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I bring AI into my terminal workflow?"
subtext="Whether building something new, debugging, or managing infrastructure —"
highlight="Copilot CLI meets you at the command line, where the real work happens."
:cards='[
  { icon: "🔧", title: "Developers Building New Software", description: "Scaffolding projects, exploring libraries, architecture decisions" },
  { icon: "🐛", title: "Debugging Your Own Code", description: "Container failures, async bugs, intermittent test flakes" },
  { icon: "⚙️", title: "DevOps Managing Infrastructure", description: "Docker, deployments, CI/CD analysis, log triage" },
  { title: "Terminal sees runtime context", description: "Logs, env vars, process state, network — not just source files" },
  { title: "16% coding, 84% everything else", description: "Most AI tools optimize the 16% and leave 84% untouched" },
  { title: "Catch ambiguity before code", description: "Plan Mode asks questions; prevents 6-8 rework iterations" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🎯", title: "Plan Mode & Steering", subtitle: "Collaborative planning before implementation", blurb: "45 min → 8 min debugging, 8 attempts → 2", slide: 6 },
    { icon: "⚡", title: "Operating Modes", subtitle: "Interactive, programmatic, and cloud delegation", blurb: "IDE and terminal stay completely free", slide: 10 },
    { icon: "🤖", title: "Built-in Agents", subtitle: "Specialized agents and /fleet fan-out", blurb: "Explicit parallel orchestration", slide: 14 },
    { icon: "🚀", title: "Use Cases & Reference", subtitle: "Real-world patterns plus CLI reference", blurb: "90 min → 15 min scaffolding, commands & config", slide: 17 },
  ]'
/>
---

<!-- SLIDE: Objectives -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Learning Objectives</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">What You'll Learn</div>
<div class="text-sm text-gray-400">Six key capabilities for terminal-native AI workflows</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-3 text-sm">
<div class="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20 flex items-start gap-3">
<span class="text-xl flex-shrink-0">✅</span>
<div>
<div class="font-semibold">Understand when CLI beats IDE</div>
<div class="text-xs opacity-70 mt-1">Terminal sees runtime context; IDE only sees source files</div>
</div>
</div>
<div class="p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20 flex items-start gap-3">
<span class="text-xl flex-shrink-0">✅</span>
<div>
<div class="font-semibold">Use Plan Mode to reduce debugging cycles</div>
<div class="text-xs opacity-70 mt-1">8 attempts → 2 with collaborative planning</div>
</div>
</div>
<div class="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20 flex items-start gap-3">
<span class="text-xl flex-shrink-0">✅</span>
<div>
<div class="font-semibold">Leverage /fleet for parallel orchestration</div>
<div class="text-xs opacity-70 mt-1">Explicitly decompose work across subagents</div>
</div>
</div>
<div class="p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20 flex items-start gap-3">
<span class="text-xl flex-shrink-0">✅</span>
<div>
<div class="font-semibold">Know when to delegate to cloud agents</div>
<div class="text-xs opacity-70 mt-1">Free your IDE and terminal for other work</div>
</div>
</div>
<div class="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20 flex items-start gap-3">
<span class="text-xl flex-shrink-0">✅</span>
<div>
<div class="font-semibold">Integrate GitHub.com workflows</div>
<div class="text-xs opacity-70 mt-1">Issues, PRs, and Actions from the terminal</div>
</div>
</div>
<div class="p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20 flex items-start gap-3">
<span class="text-xl flex-shrink-0">✅</span>
<div>
<div class="font-semibold">Automate CI/CD with programmatic mode</div>
<div class="text-xs opacity-70 mt-1">Build failure analysis in GitHub Actions</div>
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
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 Mental Model Shift</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">From Command Execution to AI Collaboration</div>
<div class="text-sm text-gray-400">Terminal as a thought partner, not just a command processor</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="space-y-3">
<div class="text-base font-bold text-green-400 mb-2">✅ Move Toward</div>
<div class="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
<div class="font-medium mb-1">AI as thought partner for greenfield work</div>
<div class="opacity-80">90 min library research → 15 min with scaffold</div>
</div>
<div class="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
<div class="font-medium mb-1">Plan before you build (Shift+Tab)</div>
<div class="opacity-80">8 debugging attempts → 2; catch ambiguity early</div>
</div>
<div class="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
<div class="font-medium mb-1">Delegate long-running tasks with `&`</div>
<div class="opacity-80">IDE and terminal stay completely free; PR arrives when done</div>
</div>
<div class="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
<div class="font-medium mb-1">Let /fleet execute the plan</div>
<div class="opacity-80">Parallel orchestration, not step-by-step manual execution</div>
</div>
</div>
<div class="space-y-3">
<div class="text-base font-bold text-red-400 mb-2">🛑 Move Against</div>
<div class="p-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20">
<div class="font-medium mb-1">Pasting secrets into prompts</div>
<div class="opacity-80">Use env vars or secret managers — credentials are prompt content</div>
</div>
<div class="p-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20">
<div class="font-medium mb-1">`&#45;&#45;yolo` outside sandboxed environments</div>
<div class="opacity-80">Blanket permissions = prod access if authenticated to prod</div>
</div>
<div class="p-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20">
<div class="font-medium mb-1">Skipping Plan Mode when in a hurry</div>
<div class="opacity-80">Most valuable precisely when rushing — prevents 30 min rework</div>
</div>
<div class="p-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20">
<div class="font-medium mb-1">Starting new projects from the IDE</div>
<div class="opacity-80">Terminal has the most context — design partner before opening editor</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Plan Mode & Steering -->

<SectionOpenerSlide
  :partNumber="1"
  title="Plan Mode & Steering"
  subtitle="Collaborative planning before implementation"
  :cards='[
    { icon: "🎯", title: "Fundamental Shift", blurb: "Plan first, implement second" },
    { icon: "❓", title: "ask_user Tool", blurb: "Agent seeks input when uncertain" },
    { icon: "📊", title: "Real Impact", blurb: "Significantly fewer debugging iterations" },
  ]'
  :terminal='{ context: "8 debugging attempts → 2 with Plan Mode", detail: "45 min debugging session → 8 min" }'
/>
---

<!-- SLIDE: Plan Mode: The Fundamental Shift -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Plan Mode & Steering</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Traditional vs Plan Mode Workflow</div>
<div class="text-xs text-white/50">From trial-and-error to collaborative strategy</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 h-full text-xs">

<div class="p-4 bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-xl border border-red-500/30 flex flex-col">
<div class="flex items-center gap-2 mb-3 pb-2 border-b border-red-500/20">
<span class="text-base">❌</span>
<span class="font-bold text-red-300 text-sm">Traditional Workflow</span>
</div>
<div class="relative flex-1">
<div class="absolute left-[11px] top-1 bottom-12 w-px bg-red-500/25"></div>
<div class="space-y-3">
<div class="flex gap-3 items-start">
<div class="w-[22px] h-[22px] rounded-full bg-red-900/80 border border-red-500/60 flex items-center justify-center text-red-300 font-bold text-xs shrink-0 z-10">1</div>
<div><div class="font-semibold text-white/90">Make request</div><div class="opacity-60 mt-0.5">Describe what you need</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-[22px] h-[22px] rounded-full bg-red-900/80 border border-red-500/60 flex items-center justify-center text-red-300 font-bold text-xs shrink-0 z-10">2</div>
<div><div class="font-semibold text-white/90">AI generates solution</div><div class="opacity-60 mt-0.5">Assumes intent, picks one interpretation</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-[22px] h-[22px] rounded-full bg-red-900/80 border border-red-500/60 flex items-center justify-center text-red-300 font-bold text-xs shrink-0 z-10">3</div>
<div><div class="font-semibold text-white/90">You review and fix</div><div class="opacity-60 mt-0.5">Discover wrong assumptions</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-[22px] h-[22px] rounded-full bg-orange-900/80 border border-orange-500/60 flex items-center justify-center text-orange-300 font-bold text-xs shrink-0 z-10">↺</div>
<div><div class="font-semibold text-orange-300">Repeat</div><div class="opacity-60 mt-0.5">Back to step 1</div></div>
</div>
</div>
</div>
<div class="mt-3 px-3 py-2 bg-red-500/15 rounded-lg border border-red-500/25 text-center text-red-300 font-semibold">
⚠️ 8 attempts average
</div>
</div>

<div class="p-4 bg-gradient-to-br from-emerald-900/30 to-green-900/20 rounded-xl border border-emerald-500/30 flex flex-col">
<div class="flex items-center gap-2 mb-3 pb-2 border-b border-emerald-500/20">
<span class="text-base">✨</span>
<span class="font-bold text-emerald-300 text-sm">Plan Mode Workflow</span>
</div>
<div class="relative flex-1">
<div class="absolute left-[11px] top-1 bottom-12 w-px bg-emerald-500/25"></div>
<div class="space-y-2">
<div class="flex gap-3 items-start">
<div class="w-[22px] h-[22px] rounded-full bg-emerald-900/80 border border-emerald-500/60 flex items-center justify-center text-emerald-300 font-bold text-xs shrink-0 z-10">1</div>
<div><div class="font-semibold text-white/90">Make request</div><div class="opacity-60 mt-0.5">Describe what you need</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-[22px] h-[22px] rounded-full bg-emerald-900/80 border border-emerald-500/60 flex items-center justify-center text-emerald-300 font-bold text-xs shrink-0 z-10">2</div>
<div><div class="font-semibold text-white/90">AI asks clarifying questions</div><div class="opacity-60 mt-0.5">Uses ask_user tool to pause and probe</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-[22px] h-[22px] rounded-full bg-emerald-900/80 border border-emerald-500/60 flex items-center justify-center text-emerald-300 font-bold text-xs shrink-0 z-10">3</div>
<div><div class="font-semibold text-white/90">Collaborate on plan</div><div class="opacity-60 mt-0.5">Align on approach before code</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-[22px] h-[22px] rounded-full bg-emerald-900/80 border border-emerald-500/60 flex items-center justify-center text-emerald-300 font-bold text-xs shrink-0 z-10">4</div>
<div><div class="font-semibold text-white/90">Review plan</div><div class="opacity-60 mt-0.5">Approve strategy</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-[22px] h-[22px] rounded-full bg-cyan-900/80 border border-cyan-500/60 flex items-center justify-center text-cyan-300 font-bold text-xs shrink-0 z-10">✓</div>
<div><div class="font-semibold text-cyan-300">Generate implementation</div><div class="opacity-60 mt-0.5">Right the first time</div></div>
</div>
</div>
</div>
<div class="mt-3 px-3 py-2 bg-emerald-500/15 rounded-lg border border-emerald-500/25 text-center text-emerald-300 font-semibold">
✅ 2 attempts average
</div>
</div>

</div>
</div>
</div>

---

<!-- SLIDE: How Plan Mode Works -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Plan Mode & Steering</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">How Plan Mode Works</div>
<div class="text-xs text-white/50">Press Shift+Tab to toggle; uses ask_user tool; steer in real-time</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="space-y-2">
<div class="p-2.5 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">🔑 Activation</div>
<div class="opacity-90">Press <strong>Shift+Tab</strong> to toggle Plan Mode on/off</div>
<div class="mt-1 font-mono text-xs bg-black/40 p-1.5 rounded leading-snug">
<div>$ copilot</div>
<div>&gt; [Shift+Tab]</div>
<div>✅ Plan Mode enabled</div>
</div>
</div>
<div class="p-2.5 bg-blue-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">❓ ask_user Tool</div>
<div class="opacity-90">Model pauses and asks for clarification</div>
<div class="mt-1 space-y-0.5 text-xs">
<div>• "Should I check config, logs, or both?"</div>
<div>• "Include env variable analysis?"</div>
<div>• "Start with network or dependencies?"</div>
</div>
</div>
<div class="p-2.5 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">⚙️ Advanced Reasoning</div>
<div class="opacity-90">GPT-5.2-Codex with configurable reasoning effort</div>
<div class="mt-1 space-y-0.5 text-xs">
<div>• <strong>Low</strong>: Fast, straightforward queries</div>
<div>• <strong>High/Extra High</strong>: Architectural decisions</div>
<div>• Press <strong>Ctrl+T</strong> to reveal reasoning steps</div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2.5 bg-purple-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">🎯 Real-Time Steering</div>
<div class="opacity-90">Adjust direction mid-response</div>
<div class="mt-1">
<div class="font-mono text-xs bg-black/40 p-1.5 rounded mb-1 leading-snug">
# While Copilot analyzes logs:<br/>
&gt; "Also check if Redis is running"<br/>
&gt; "Focus on auth errors first"
</div>
<div class="opacity-80">Messages enqueued and incorporated immediately</div>
</div>
</div>
<div class="p-2.5 bg-pink-900/30 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">🚫 Inline Rejection Feedback</div>
<div class="opacity-90">Reject tool permissions and explain why</div>
<div class="mt-1">
<div class="font-mono text-xs bg-black/40 p-1.5 rounded mb-1 leading-snug">
# AI wants to run `rm -rf tmp/*`<br/>
&gt; [Press Esc] "Don't delete tmp/ &#45;&#45;<br/>
&nbsp;&nbsp;cached artifacts needed"
</div>
<div class="opacity-80">Copilot adapts approach without stopping</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Docker Debugging Example -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Plan Mode & Steering</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-1">Docker Debugging with Plan Mode</div>
<div class="text-xs text-white/50">45 minutes → 8 minutes (83% reduction) | 8 attempts → 2 attempts</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="font-mono text-xs bg-gray-950/90 p-3 rounded-lg border border-cyan-500/30 flex-1 min-h-0 overflow-y-auto">
<div class="text-cyan-400">$ copilot</div>
<div class="text-white mt-1">&gt; "Debug why the backend container won't start"</div>
<div class="mt-2 text-blue-300">🤔 Copilot (Plan Mode):</div>
<div class="text-gray-300 mt-1">I can help with that. Before I start, a few questions:</div>
<div class="text-gray-300 mt-1">1. Should I check docker-compose configuration, container logs, or both?</div>
<div class="text-gray-300">2. Do you want environment variable analysis?</div>
<div class="text-gray-300">3. Any recent changes to services or network configuration?</div>
<div class="mt-2 text-white">&gt; "Start with logs, then check config if needed"</div>
<div class="mt-2 text-blue-300">🤔 Copilot:</div>
<div class="text-gray-300 mt-1">Understood. Here's my plan:</div>
<div class="text-gray-300">1. Retrieve container logs for backend service</div>
<div class="text-gray-300">2. Analyze error patterns and stack traces</div>
<div class="text-gray-300">3. If logs suggest config issue, inspect docker-compose.yml</div>
<div class="text-gray-300">4. Check environment variables if authentication/connection errors found</div>
<div class="mt-2 text-gray-300">Proceed with this plan? (y/n)</div>
<div class="mt-1 text-white">&gt; y</div>
<div class="mt-2 text-green-400">✅ Copilot:</div>
<div class="text-gray-300 mt-1">[Executes plan, finds misconfigured port binding in docker-compose.yml]</div>
<div class="text-gray-300">Found: Port 5000 mapped to 5001, but app expects 5000 internally.</div>
<div class="text-gray-300">Fix: Change service.ports from "5001:5000" to "5000:5000"</div>
<div class="mt-2 text-gray-300">Apply this fix? (y/n)</div>
</div>
<div class="grid grid-cols-3 gap-2 text-xs">
<div class="p-2 bg-green-900/30 rounded border border-green-500/30 text-center">
<div class="font-bold text-green-400">45 min → 8 min</div>
<div class="opacity-80">83% time reduction</div>
</div>
<div class="p-2 bg-blue-900/30 rounded border border-blue-500/30 text-center">
<div class="font-bold text-blue-400">8 attempts → 2</div>
<div class="opacity-80">Clarified intent first</div>
</div>
<div class="p-2 bg-purple-900/30 rounded border border-purple-500/30 text-center">
<div class="font-bold text-purple-400">Root cause + fix</div>
<div class="opacity-80">Not just symptoms</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Operating Modes -->

<SectionOpenerSlide
  :partNumber="2"
  title="Operating Modes"
  subtitle="Interactive, programmatic, and cloud delegation"
  :cards='[
    { icon: "💬", title: "Interactive", blurb: "Real-time chat with agent steering" },
    { icon: "🤖", title: "Programmatic", blurb: "Integrate into scripts and automation" },
    { icon: "☁️", title: "Cloud Delegation", blurb: "GitHub-hosted background execution" },
  ]'
  :terminal='{ context: "IDE and terminal stay completely free", detail: "agents run where you want them" }'
/>
---

<!-- SLIDE: Three Operating Modes -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚡ Operating Modes</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Three Ways to Work with Copilot CLI</div>
<div class="text-xs text-white/50">Match the mode to the workflow: collaborate, automate, or delegate</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-3 gap-3 text-xs">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30">
<div class="text-2xl mb-2 text-center">💬</div>
<div class="font-bold text-cyan-300 mb-2 text-center">Interactive Mode</div>
<div class="font-mono text-xs bg-black/40 p-2 rounded mb-2">
$ copilot<br/>
&gt; "Analyze last 100 log lines"<br/>
&gt; "What's causing memory spike?"
</div>
<div class="space-y-1 opacity-90">
<div><strong>Purpose:</strong> Conversational debugging</div>
<div><strong>Context:</strong> Maintained across commands</div>
<div><strong>Best for:</strong> Unknown root causes, iterative investigation</div>
<div><strong>/ide:</strong> Open files in VS Code mid-session — CLI conversation stays alive</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-lg border border-blue-500/30">
<div class="text-2xl mb-2 text-center">🤖</div>
<div class="font-bold text-blue-300 mb-2 text-center">Programmatic Mode</div>
<div class="font-mono text-xs bg-black/40 p-2 rounded mb-2">
copilot -p "Analyze failure" \<br/>
&nbsp;&nbsp;&#45;&#45;allow-tool 'shell(gh)' \<br/>
&nbsp;&nbsp;&gt; analysis.txt
</div>
<div class="space-y-1 opacity-90">
<div><strong>Purpose:</strong> Headless automation</div>
<div><strong>Context:</strong> Stateless, single execution</div>
<div><strong>Best for:</strong> CI/CD pipelines, GitHub Actions, scripted operations</div>
<div><strong>Output:</strong> Structured for parsing</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-2xl mb-2 text-center">☁️</div>
<div class="font-bold text-indigo-300 mb-2 text-center">Cloud Delegation</div>
<div class="font-mono text-xs bg-black/40 p-2 rounded mb-2">
$ copilot<br/>
&gt; "&amp;Analyze codebase for<br/>
&nbsp;&nbsp;security vulnerabilities"<br/>
<br/>
✅ Delegated to cloud agent
</div>
<div class="space-y-1 opacity-90">
<div><strong>Purpose:</strong> Background execution</div>
<div><strong>Freedom:</strong> IDE and terminal completely free</div>
<div><strong>Best for:</strong> 20+ min tasks — security audits, refactors, test scaffolding</div>
<div><strong>Result:</strong> PR created when done</div>
</div>
</div>
</div>
<div class="mt-3 grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gray-900/50 rounded border border-yellow-500/30">
<strong class="text-yellow-400">Permission management:</strong> "Approve for session" auto-approves pending parallel requests of same type
</div>
<div class="p-2 bg-gray-900/50 rounded border border-orange-500/30">
<strong class="text-orange-400">Convenience flags:</strong> <code>&#45;&#45;allow-all-tools</code> or <code>&#45;&#45;yolo</code> (use carefully in trusted environments)
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Cloud Delegation Deep Dive -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚡ Operating Modes</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Cloud Delegation: The Differentiator</div>
<div class="text-xs text-white/50">IDE and terminal stay completely free — agent runs independently, PR arrives when done</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="p-3 bg-purple-900/40 rounded-lg border border-purple-500/30 flex flex-col">
<div class="font-semibold text-purple-300 mb-2">How It Works</div>
<div class="font-mono text-xs bg-black/40 p-2 rounded mb-2 leading-snug">
$ copilot<br/>
&gt; "&amp;Analyze entire codebase for<br/>
&nbsp;&nbsp;security vulnerabilities"<br/>
<br/>
✅ Task delegated to cloud agent<br/>
Agent session: github.com/...<br/>
PR will be created when complete<br/>
<br/>
[Terminal is now free]
</div>
<div class="opacity-90">Prefix any request with <strong>&amp;</strong> to delegate to GitHub Copilot coding agent in the cloud</div>
</div>
<div class="p-3 bg-blue-900/40 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-2">Best For (20+ min tasks)</div>
<div class="space-y-1.5 opacity-90">
<div>• Security vulnerability scans across codebase</div>
<div>• Large refactoring operations</div>
<div>• Test suite scaffolding and generation</div>
<div>• Documentation generation across modules</div>
<div>• Dependency update analysis and migration</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Cloud Delegation — What Happens -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚡ Operating Modes</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Cloud Delegation: Under the Hood</div>
<div class="text-xs text-white/50">What happens after you prefix a request with &amp;</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="p-3 bg-indigo-900/40 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-2">What Happens</div>
<div class="space-y-1.5 opacity-90">
<div class="flex gap-2"><span class="text-indigo-400 font-bold shrink-0">1.</span><span>Copilot commits unstaged changes</span></div>
<div class="flex gap-2"><span class="text-indigo-400 font-bold shrink-0">2.</span><span>Creates a new branch</span></div>
<div class="flex gap-2"><span class="text-indigo-400 font-bold shrink-0">3.</span><span>Delegates task to cloud coding agent</span></div>
<div class="flex gap-2"><span class="text-indigo-400 font-bold shrink-0">4.</span><span>Agent works independently</span></div>
<div class="flex gap-2"><span class="text-indigo-400 font-bold shrink-0">5.</span><span>PR created automatically when done</span></div>
<div class="flex gap-2"><span class="text-indigo-400 font-bold shrink-0">6.</span><span>You get notified to review</span></div>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="p-3 bg-cyan-900/40 rounded-lg border border-cyan-500/30 flex-1">
<div class="font-semibold text-cyan-300 mb-2">Key Benefits</div>
<div class="space-y-1.5 opacity-90">
<div>✅ <strong>IDE completely free</strong> — no agent occupying your editor</div>
<div>✅ <strong>Terminal completely free</strong> — continue other work immediately</div>
<div>✅ <strong>No blocking</strong> — agent runs independently of your local session</div>
<div>✅ <strong>Automatic PR</strong> — results delivered as a reviewable pull request</div>
<div>✅ <strong>Session tracking</strong> — monitor progress via GitHub.com link</div>
</div>
</div>
<div class="p-2 bg-green-900/20 rounded border border-green-500/20 text-center">
<div class="font-bold text-green-400">The Unlock</div>
<div class="opacity-90">Long-running tasks no longer block your tools</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Built-in Agents -->

<SectionOpenerSlide
  :partNumber="3"
  title="Built-in Agents"
  subtitle="Specialized agents and /fleet fan-out"
  :cards='[
    { icon: "🔍", title: "Explore", blurb: "Fast read-only codebase research" },
    { icon: "⚙️", title: "Task", blurb: "General purpose implementation agent" },
    { icon: "📋", title: "Plan", blurb: "Strategic planning and estimation" },
  ]'
  :terminal='{ context: "Orchestrator assigns work to subagents", detail: "/fleet coordinates explicit parallel execution" }'
/>
---

<!-- SLIDE: Four Agent Types -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Built-in Agents</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Four Specialized Agents + IDE Bridge</div>
<div class="text-xs text-white/50">Copilot automatically routes tasks based on intent — no explicit calls needed</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-2 text-xs mb-2">
<div class="p-2.5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30">
<div class="text-xl mb-1">🔍</div>
<div class="font-bold text-cyan-300 mb-1">Explore Agent</div>
<div class="opacity-90 mb-1">Fast codebase analysis without cluttering main context</div>
<div class="space-y-0.5">
<div>• Focused answers under 300 words</div>
<div>• Safe to run in parallel</div>
<div>• Perfect for "how does X work?"</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-lg border border-blue-500/30">
<div class="text-xl mb-1">⚙️</div>
<div class="font-bold text-blue-300 mb-1">Task Agent</div>
<div class="opacity-90 mb-1">Execute commands with smart output filtering</div>
<div class="space-y-0.5">
<div>• Brief summary on success</div>
<div>• Full output only on failure</div>
<div>• Reduces conversation clutter</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-xl mb-1">📋</div>
<div class="font-bold text-indigo-300 mb-1">Plan Agent</div>
<div class="opacity-90 mb-1">Analyze dependencies and create multi-step strategies</div>
<div class="space-y-0.5">
<div>• Surfaces risks upfront</div>
<div>• You review plan before execution</div>
<div>• Perfect for complex refactors</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30">
<div class="text-xl mb-1">👀</div>
<div class="font-bold text-purple-300 mb-1">Code-Review Agent</div>
<div class="opacity-90 mb-1">High signal-to-noise review — only bugs and security issues, never style</div>
<div class="space-y-0.5">
<div>• Focuses human attention where it matters</div>
<div>• Invoke with <span class="font-mono bg-black/40 px-1 rounded">/review</span></div>
</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-pink-900/40 to-rose-900/40 rounded-lg border border-pink-500/30 text-xs flex items-center gap-3">
<div class="font-bold text-pink-300 shrink-0">💻 IDE Bridge</div>
<div class="opacity-80">Open any file in VS Code from active CLI session — terminal context stays alive</div>
<div class="font-mono bg-black/40 px-2 py-0.5 rounded ml-auto shrink-0">/ide src/users/api.py</div>
</div>
</div>
</div>

---

<!-- SLIDE: /fleet: Explicit Parallel Fan-Out -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Built-in Agents</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-1">/fleet: The Headline Differentiator</div>
<div class="text-xs text-white/50">Explicitly decompose plans into parallel subtasks — orchestrator assigns work to subagents</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="space-y-3">
<div class="p-3 bg-purple-900/40 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-2">What /fleet Does</div>
<div class="space-y-1 opacity-90">
<div>1. Main agent <strong>decomposes</strong> your prompt into subtasks</div>
<div>2. Assesses dependencies — what can parallelize</div>
<div>3. Acts as <strong>orchestrator</strong>: assigns subtasks to subagents</div>
<div>4. Subagents run in <strong>parallel</strong>, each in own context window</div>
<div>5. Results merged back by orchestrator</div>
</div>
</div>
<div class="font-mono bg-gray-950/90 p-2 rounded border border-purple-500/30">
/fleet create a test suite:<br/>
&nbsp;&nbsp;unit tests for auth,<br/>
&nbsp;&nbsp;integration tests for API,<br/>
&nbsp;&nbsp;e2e tests for login flow
</div>
<div class="p-2 bg-blue-900/20 rounded border border-blue-500/20">
<div class="font-semibold text-blue-400">Pair with Plan Mode</div>
<div class="opacity-90 mt-1">Shift+Tab → plan → "Accept plan and build on autopilot + /fleet"</div>
</div>
</div>
<div class="space-y-3">
<div class="space-y-2">
<div class="p-2 bg-gray-900/50 rounded border border-green-500/30">
<strong class="text-green-400">Speed</strong> — parallel subtasks complete in time of longest, not sum
</div>
<div class="p-2 bg-gray-900/50 rounded border border-blue-500/30">
<strong class="text-blue-400">Context isolation</strong> — each subagent has own window, no pollution
</div>
<div class="p-2 bg-gray-900/50 rounded border border-purple-500/30">
<strong class="text-purple-400">Specialization</strong> — custom agents (<code>@test-writer</code>) auto-matched to subtasks
</div>
<div class="p-2 bg-gray-900/50 rounded border border-yellow-500/30">
<strong class="text-yellow-400">Model selection</strong> — subagents default to low-cost; specify per-subtask in prompt
</div>
</div>
<div class="p-2 bg-orange-900/20 rounded border border-orange-500/20">
<strong class="text-orange-400">⚠️ Cost note:</strong> Each subagent makes independent LLM calls — use <code>/model</code> to check multiplier
</div>
<div class="p-2 bg-gray-900/40 rounded">
<div class="font-semibold mb-1">Best for</div>
<div class="opacity-90">Test suites, multi-module refactors, documentation across modules</div>
<div class="font-semibold mt-2 mb-1">Not useful for</div>
<div class="opacity-90">Inherently sequential tasks (step B needs step A's output)</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Use Cases & Reference -->

<SectionOpenerSlide
  :partNumber="4"
  title="Use Cases & Reference"
  subtitle="Real-world patterns and complete CLI reference"
  :cards='[
    { icon: "🌱", title: "Greenfield", blurb: "Project scaffolding (90 → 15 min)" },
    { icon: "🐛", title: "Debugging", blurb: "Root cause analysis (45 → 8 min)" },
    { icon: "🐙", title: "GitHub.com", blurb: "Web interface for CLI agents" },
  ]'
  :terminal='{ context: "Time shifts from writing code", detail: "to planning and reviewing" }'
/>
---

<!-- SLIDE: Greenfield Scaffolding -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-green-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Use Cases & Reference</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">🌱 Greenfield Scaffolding</div>
<div class="text-xs text-white/50">AI as thought partner before writing any code — architecture decisions with documented rationale</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-3 h-full text-xs">
<div class="font-mono bg-black/50 border border-emerald-500/20 p-3 rounded-lg overflow-hidden">
<div class="text-emerald-400/60 text-xs mb-2">$ copilot</div>
<div class="space-y-1 leading-snug">
<div><span class="text-white/50">&gt;</span> <span class="text-white">"I need a REST API with async support in Python. Walk me through framework and ORM options"</span></div>
<div class="text-emerald-300/80 mt-2">🤔 Copilot (Plan Mode):<br/>A few questions first:<br/>1. Async throughout, or mixed?<br/>2. Containers or serverless?<br/>3. Simple CRUD or complex joins?</div>
<div class="mt-2"><span class="text-white/50">&gt;</span> <span class="text-white">"Fully async, containers, complex queries with joins"</span></div>
<div class="text-emerald-300/80 mt-2">🤔 Recommendation: FastAPI + SQLAlchemy 2.0 async. Best ecosystem maturity for your needs.<br/><br/>Shall I scaffold the structure?</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/30">
<div class="text-emerald-300 font-semibold mb-1">⏱ 90 min → 15 min</div>
<div class="opacity-80">Library research + project setup + dependency decisions</div>
</div>
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1">📋 Documented rationale</div>
<div class="opacity-80">Every architectural decision explained inline, not implied</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1">🏗️ Working scaffold immediately</div>
<div class="opacity-80">Not a blank template — actual project structure generated</div>
</div>
<div class="p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
<div class="text-cyan-300 font-semibold mb-1">🧠 Plan Mode advantage</div>
<div class="opacity-80">Asks clarifying questions first, not after you've committed to an architecture</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Docker Debugging -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Use Cases & Reference</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">🐳 Docker Debugging: Runtime Context</div>
<div class="text-xs text-white/50">Terminal sees the live environment — not just source files. Evidence gathered automatically.</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-3 text-xs" style="height:100%">
<div class="font-mono bg-black/50 border border-cyan-500/20 p-3 rounded-lg overflow-y-auto min-h-0">
<div class="text-cyan-400/60 text-xs mb-2">$ copilot</div>
<div class="space-y-1 leading-snug">
<div><span class="text-white/50">&gt;</span> <span class="text-white">"My auth service is returning 503 in staging but works locally"</span></div>
<div class="text-cyan-300/80 mt-2">🤔 Copilot: Let me check the running environment.</div>
<div class="text-white/50 mt-2">[runs: docker logs auth-service]<br/>[runs: docker exec ... env | grep]<br/>[runs: curl redis-staging:6379]</div>
<div class="text-green-400 mt-2">✅ Found: JWT_SECRET missing from staging container. Redis is fine.<br/><br/>Service failing silently on token validation, returning 503 not 401.<br/><br/>Fix: Add JWT_SECRET to staging secrets and restart container.</div>
</div>
</div>
<div class="flex flex-col gap-1.5 min-h-0">
<div class="p-2.5 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-semibold mb-0.5">⏱ 45 min → 8 min</div>
<div class="opacity-80">Manual log hunting replaced by automated cross-system evidence gathering</div>
</div>
<div class="p-2.5 bg-blue-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-0.5">🔍 Cross-system diagnosis</div>
<div class="opacity-80">Container, env vars, network — all in one session, no context switching</div>
</div>
<div class="p-2.5 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-0.5">🎯 Root cause + side-effects</div>
<div class="opacity-80">Missing secret <em>and</em> the misleading 503 status code identified together</div>
</div>
<div class="p-2.5 bg-purple-900/20 rounded-lg border border-purple-500/20">
<div class="text-purple-300 font-semibold mb-0.5">💡 The key unlock</div>
<div class="opacity-80">No copy-pasting logs into chat — Copilot runs the commands itself</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: GitHub.com Integration -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Use Cases & Reference</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">GitHub.com Integration: The Surprise</div>
<div class="text-xs text-white/50">Manage issues, PRs, and Actions directly from terminal — no browser context-switching</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs flex-1 min-h-0">
<div class="flex flex-col gap-2 min-h-0">
<div class="p-2.5 bg-purple-900/40 rounded-lg border border-purple-500/30 flex-1 min-h-0 overflow-hidden">
<div class="font-semibold text-purple-300 mb-1">🐙 Working with Issues</div>
<div class="font-mono bg-black/40 p-1.5 rounded text-xs leading-snug">
&gt; "List all open issues assigned to me in my-org/my-repo"<br/>
<br/>
&gt; "I've been assigned .../issues/42 — start working on it in a feature branch"<br/>
<br/>
&gt; "Raise an issue: src/auth.py file handle is never closed"
</div>
</div>
<div class="p-2.5 bg-pink-900/40 rounded-lg border border-pink-500/30 flex-1 min-h-0 overflow-hidden">
<div class="font-semibold text-pink-300 mb-1">🔀 Working with Pull Requests</div>
<div class="font-mono bg-black/40 p-1.5 rounded text-xs leading-snug">
&gt; "List my open PRs"<br/>
<br/>
&gt; "Check changes in PR .../pull/123 — report any serious errors"<br/>
<br/>
&gt; "Merge all open PRs I've created in my-org/my-repo"
</div>
</div>
</div>
<div class="flex flex-col gap-2 min-h-0">
<div class="p-2.5 bg-indigo-900/40 rounded-lg border border-indigo-500/30 flex-1 min-h-0 overflow-hidden">
<div class="font-semibold text-indigo-300 mb-1">⚙️ GitHub Actions Workflows</div>
<div class="font-mono bg-black/40 p-1.5 rounded text-xs leading-snug mb-1">
&gt; "Create a workflow that runs eslint on PRs and fails if errors found. Push and open a PR"
</div>
<div class="text-white/70 text-xs">Natural language → working YAML — no writing from scratch</div>
</div>
<div class="p-2.5 bg-blue-900/40 rounded-lg border border-blue-500/30 flex-1 min-h-0 overflow-hidden">
<div class="font-semibold text-blue-300 mb-1">🔌 GitHub MCP Server</div>
<div class="font-mono bg-black/40 p-1.5 rounded text-xs leading-snug mb-1">
&gt; "Use the GitHub MCP server to find good first issues for a new team member"
</div>
<div class="text-white/70 text-xs">Connect to external tools via Model Context Protocol</div>
</div>
<div class="p-2 bg-green-900/20 rounded border border-green-500/20 text-xs">
<strong class="text-green-400">Key Insight:</strong> Copilot CLI can create PRs on your behalf — you're marked as author. Describe change in English, get PR on GitHub.com.
</div>
</div>
</div>
<div class="grid grid-cols-3 gap-2 text-xs shrink-0">
<div class="p-2 bg-cyan-900/30 rounded border border-cyan-500/30 text-center">
<div class="font-bold text-cyan-400">No browser switches</div>
<div class="opacity-80">GitHub.com tasks in terminal flow</div>
</div>
<div class="p-2 bg-blue-900/30 rounded border border-blue-500/30 text-center">
<div class="font-bold text-blue-400">Issue → branch → PR</div>
<div class="opacity-80">Without switching tools</div>
</div>
<div class="p-2 bg-purple-900/30 rounded border border-purple-500/30 text-center">
<div class="font-bold text-purple-400">Workflow from NL</div>
<div class="opacity-80">Not YAML from scratch</div>
</div>
</div>
---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="Trial-and-Error to Plan-First Workflow"
:leftItems='["Attempts: 8 per task", "Docker debugging: 45 min", "Scaffolding: 90 min", "Manual verification"]'
:rightItems='["Attempts: 2 with plan review", "Docker debugging: 8 min", "Scaffolding: 15 min", "AI verification built-in"]'
:metrics='[
  { value: "8 → 2", detail: "Attempt reduction" },
  { value: "45 min → 8 min", detail: "Docker debugging" },
  { value: "90 min → 15 min", detail: "Scaffolding time" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Install the Copilot CLI and authenticate", "Run your first task with plan mode enabled", "Compare the plan to what you would have done manually", "Explore the four built-in agent types"]'
  :thisWeek='["Write custom instructions for your repo conventions", "Run a /fleet task across multiple parallel workstreams", "Try cloud delegation for a GitHub issue or PR task", "Add an MCP server for your stack"]'
  :thisMonth='["Automate a repetitive GitHub workflow end-to-end", "Build a multi-step fleet pipeline for your project", "Configure plugins for your domain tooling", "Create team-wide custom instructions and share them"]'
  footer="Run plan mode on a task you do daily — it shows exactly what the agent will do before acting, making the first few tries low-risk and fast to learn."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Official Documentation", color: "cyan", items: [
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli", label: "About GitHub Copilot CLI", description: "Core concepts and capabilities" },
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet", label: "Running tasks in parallel with /fleet", description: "Parallel orchestration documentation" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli", label: "Use Copilot CLI", description: "Command syntax and workflows" },
        { href: "https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli", label: "Install Copilot CLI", description: "Setup for all platforms" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-instructions", label: "Custom instructions", description: "Repository-specific behavior configuration" }
    ] },
    { title: "Additional Resources", color: "purple", items: [
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server", label: "Add an MCP server", description: "Extending with external tools" },
        { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing", label: "Finding and installing plugins", description: "Plugin ecosystem and marketplaces" },
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-cli-plugins", label: "About plugins", description: "Plugin concepts and capabilities" },
        { href: "https://github.blog/changelog/2026-01-21-github-copilot-cli-plan-before-you-build-steer-as-you-go/", label: "Plan Mode announcement", description: "Latest features blog post" },
        { href: "https://github.com/github/copilot-cli", label: "Public repository", description: "Issue tracking and community discussions" }
    ] }
  ]'
/>
---

<!-- SLIDE: Interactive Mode Commands -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 10</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4 text-white">Interactive Mode &#8212; Type <code class="bg-zinc-800 px-2 py-0.5 rounded text-yellow-300">/</code> to explore</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="copilot - interactive session" prompt="/" size="lg">
<div class="space-y-1 text-sm leading-relaxed">
<div class="text-cyan-400 font-semibold mt-1">Agent environment</div>
<div><span class="text-green-400 w-24 inline-block">/init</span><span class="text-zinc-400">Initialize AGENTS.md for this repo</span></div>
<div><span class="text-green-400 w-24 inline-block">/agent</span><span class="text-zinc-400">Select a custom agent</span></div>
<div><span class="text-green-400 w-24 inline-block">/skills</span><span class="text-zinc-400">Manage skills</span></div>
<div><span class="text-green-400 w-24 inline-block">/mcp</span><span class="text-zinc-400">Manage MCP servers</span></div>
<div><span class="text-green-400 w-24 inline-block">/plugin</span><span class="text-zinc-400">Manage plugins</span></div>
<div class="text-cyan-400 font-semibold mt-3">Models &amp; subagents</div>
<div><span class="text-green-400 w-24 inline-block">/model</span><span class="text-zinc-400">Select AI model</span></div>
<div><span class="text-green-400 w-24 inline-block">/delegate</span><span class="text-zinc-400">Hand off &#8594; GitHub PR</span></div>
<div><span class="text-green-400 w-24 inline-block">/fleet</span><span class="text-zinc-400">Parallel subagent execution</span></div>
<div><span class="text-green-400 w-24 inline-block">/tasks</span><span class="text-zinc-400">View background tasks</span></div>
<div class="text-cyan-400 font-semibold mt-3">Code</div>
<div><span class="text-green-400 w-24 inline-block">/diff</span><span class="text-zinc-400">Review current changes</span></div>
<div><span class="text-green-400 w-24 inline-block">/pr</span><span class="text-zinc-400">Operate on pull requests</span></div>
<div><span class="text-green-400 w-24 inline-block">/review</span><span class="text-zinc-400">Code review agent</span></div>
<div><span class="text-green-400 w-24 inline-block">/plan</span><span class="text-zinc-400">Implementation plan before coding</span></div>
</div>
</TerminalFrame>
<TerminalFrame title="copilot - interactive session (cont.)" size="lg">
<div class="space-y-1 text-sm leading-relaxed">
<div class="text-cyan-400 font-semibold mt-1">Session</div>
<div><span class="text-green-400 w-28 inline-block">/resume</span><span class="text-zinc-400">Switch sessions</span></div>
<div><span class="text-green-400 w-28 inline-block">/compact</span><span class="text-zinc-400">Summarize context window</span></div>
<div><span class="text-green-400 w-28 inline-block">/context</span><span class="text-zinc-400">Show token usage</span></div>
<div><span class="text-green-400 w-28 inline-block">/share</span><span class="text-zinc-400">Export session to file / gist</span></div>
<div><span class="text-green-400 w-28 inline-block">/rewind</span><span class="text-zinc-400">Undo last turn + revert files</span></div>
<div class="text-cyan-400 font-semibold mt-3">Permissions</div>
<div><span class="text-green-400 w-28 inline-block">/allow-all</span><span class="text-zinc-400">Enable all tools/paths/URLs</span></div>
<div><span class="text-green-400 w-28 inline-block">/add-dir</span><span class="text-zinc-400">Whitelist a directory</span></div>
<div><span class="text-green-400 w-28 inline-block">/cwd</span><span class="text-zinc-400">Change working directory</span></div>
<div class="text-cyan-400 font-semibold mt-3">Research &amp; More</div>
<div><span class="text-green-400 w-28 inline-block">/research</span><span class="text-zinc-400">Deep research via GitHub + web</span></div>
<div><span class="text-green-400 w-28 inline-block">/changelog</span><span class="text-zinc-400">CLI version history (+ AI summary)</span></div>
<div><span class="text-green-400 w-28 inline-block">/ide</span><span class="text-zinc-400">Connect to VS Code workspace</span></div>
<div><span class="text-green-400 w-28 inline-block">/new</span><span class="text-zinc-400">Fresh conversation</span></div>
</div>
</TerminalFrame>
</div>
</div>
</div>

---

<!-- SLIDE: Non-Interactive Mode (Scripting) -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-white/40 text-xs">2 of 10</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4 text-white">Non-Interactive Mode &#8212; Scriptable AI</h2>
<TerminalFrame title="shell" size="full">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div class="text-zinc-500"># One-shot prompt, exits after response</div>
<div class="text-green-400">copilot -p "Fix the failing test in auth.test.ts" --allow-all</div>
<div class="mt-2 text-zinc-500"># Quiet output &#8212; only agent response, no stats (great for piping)</div>
<div class="text-green-400">copilot -p "Summarize this PR" --silent | pbcopy</div>
<div class="mt-2 text-zinc-500"># Autopilot &#8212; continues autonomously until done</div>
<div class="text-green-400">copilot -p "Migrate all API routes to use the new auth middleware" --allow-all --autopilot</div>
<div class="mt-2 text-zinc-500"># Share session output as a GitHub gist</div>
<div class="text-green-400">copilot -p "Audit this repo for security issues" --allow-all --share-gist</div>
<div class="mt-2 text-zinc-500"># Structured JSON output for CI pipelines</div>
<div class="text-green-400">copilot -p "Run tests and report failures" --allow-all --output-format json</div>
</div>
</TerminalFrame>
</div>
</div>

---

<!-- SLIDE: Permissions Model -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-white/40 text-xs">3 of 10</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4 text-white">Permissions &#8212; Granular Control</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="fine-grained permissions" size="lg">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div class="text-zinc-500"># Allow specific tool categories</div>
<div class="text-green-400">copilot --allow-tool=write --allow-tool=shell</div>
<div class="mt-2 text-zinc-500"># Allow all git except push</div>
<div class="text-green-400">copilot --allow-tool='shell(git:*)' \</div>
<div class="text-green-400">        --deny-tool='shell(git push)'</div>
<div class="mt-2 text-zinc-500"># Restrict to specific directories</div>
<div class="text-green-400">copilot --add-dir ~/workspace --add-dir /tmp</div>
<div class="mt-2 text-zinc-500"># Allow GitHub API access</div>
<div class="text-green-400">copilot --allow-url=github.com</div>
</div>
</TerminalFrame>
<TerminalFrame title="yolo mode (trust, but verify)" size="lg">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div class="text-zinc-500"># Enable everything &#8212; tools, paths, URLs</div>
<div class="text-green-400">copilot --yolo</div>
<div class="mt-2 text-zinc-500"># Same as:</div>
<div class="text-green-400">copilot --allow-all-tools \</div>
<div class="text-green-400">        --allow-all-paths \</div>
<div class="text-green-400">        --allow-all-urls</div>
<div class="mt-2"><span class="text-yellow-300">--allow-all</span><span class="text-zinc-400">   shorthand for all three</span></div>
<div><span class="text-yellow-300">--yolo</span><span class="text-zinc-400">        alias for --allow-all</span></div>
<div class="mt-2 text-zinc-500"># Required for non-interactive (-p) mode</div>
<div class="text-green-400">copilot -p "..." --allow-all-tools</div>
</div>
</TerminalFrame>
</div>
</div>
</div>

---

<!-- SLIDE: copilot init -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-white/40 text-xs">4 of 10</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4 text-white"><code class="bg-zinc-800 px-2 rounded text-yellow-300">copilot init</code> &#8212; Bootstrap Your Repo</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="shell" prompt="copilot init" size="lg">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div class="text-zinc-300 italic">Analyzing codebase structure...</div>
<div class="text-zinc-300 italic">Detecting build system: npm</div>
<div class="text-zinc-300 italic">Detecting test framework: jest</div>
<div class="text-zinc-300 italic">Detecting language: TypeScript</div>
<div class="mt-2 text-green-400">&#10003; Created .github/copilot-instructions.md</div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-4 text-sm">
<div class="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">What it generates</div>
<div class="text-zinc-300">Analyzes your repo with read-only tools and writes <code class="text-yellow-300">.github/copilot-instructions.md</code> with:</div>
<ul class="mt-2 space-y-1 text-zinc-400 list-disc list-inside">
<li>Build &amp; test commands</li>
<li>Coding conventions</li>
<li>Project structure overview</li>
<li>Technology stack details</li>
</ul>
</div>
<div class="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">Why it matters</div>
<div class="text-zinc-400">Every future session in this repo automatically loads these instructions &#8212; no need to re-explain your project to Copilot.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: copilot login -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-white/40 text-xs">5 of 10</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4 text-white"><code class="bg-zinc-800 px-2 rounded text-yellow-300">copilot login</code> &#8212; Authentication</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="shell" size="lg">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div class="text-zinc-500"># Interactive browser flow (default)</div>
<div class="text-green-400">copilot login</div>
<div class="mt-2 text-zinc-500"># GitHub Enterprise Cloud (data residency)</div>
<div class="text-green-400">copilot login --host https://example.ghe.com</div>
<div class="mt-2 text-zinc-500"># Headless / CI &#8212; use env var instead of login</div>
<div class="text-green-400">COPILOT_GITHUB_TOKEN=github_pat_... copilot</div>
<div class="mt-2 text-zinc-500"># Token precedence order:</div>
<div class="text-zinc-400">  COPILOT_GITHUB_TOKEN</div>
<div class="text-zinc-400">  GH_TOKEN</div>
<div class="text-zinc-400">  GITHUB_TOKEN</div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-4 text-sm">
<div class="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">Supported token types</div>
<ul class="space-y-1 text-zinc-400 list-disc list-inside">
<li>Fine-grained PATs (v2) with <em>Copilot Requests</em> permission</li>
<li>OAuth tokens from GitHub Copilot CLI app</li>
<li>OAuth tokens from GitHub CLI (gh) app</li>
</ul>
<div class="mt-2 text-red-400 text-xs">&#10007; Classic PATs (ghp_...) are not supported</div>
</div>
<div class="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">Token storage</div>
<div class="text-zinc-400">Stored in system credential store. Falls back to plain text in <code class="text-yellow-300">~/.copilot/</code> if no credential store is available.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: copilot plugin -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-white/40 text-xs">6 of 10</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4 text-white"><code class="bg-zinc-800 px-2 rounded text-yellow-300">copilot plugin</code> &#8212; Extend with Plugins</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="shell" size="lg">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div class="text-zinc-500"># Browse the default marketplace</div>
<div class="text-green-400">copilot plugin marketplace browse copilot-plugins</div>
<div class="mt-2 text-zinc-500"># Install from GitHub repository</div>
<div class="text-green-400">copilot plugin install github/my-plugin</div>
<div class="mt-2 text-zinc-500"># Install from local directory</div>
<div class="text-green-400">copilot plugin install ./my-local-plugin</div>
<div class="mt-2 text-zinc-500"># List installed plugins</div>
<div class="text-green-400">copilot plugin list</div>
<div class="mt-2 text-zinc-500"># Update / uninstall</div>
<div class="text-green-400">copilot plugin update my-plugin</div>
<div class="text-green-400">copilot plugin uninstall my-plugin</div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-4 text-sm">
<div class="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">What plugins can add</div>
<ul class="space-y-1 text-zinc-400 list-disc list-inside">
<li>Additional skills &amp; agents</li>
<li>Git hooks</li>
<li>MCP servers</li>
<li>LSP servers</li>
</ul>
</div>
<div class="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">Built-in marketplaces</div>
<div class="font-mono text-xs space-y-1">
<div><span class="text-yellow-300">copilot-plugins</span><span class="text-zinc-400"> github/copilot-plugins</span></div>
<div><span class="text-yellow-300">awesome-copilot</span><span class="text-zinc-400"> github/awesome-copilot</span></div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Configuration Settings -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-white/40 text-xs">7 of 10</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4 text-white"><code class="bg-zinc-800 px-2 rounded text-yellow-300">copilot help config</code> &#8212; Key Settings</h2>
<TerminalFrame title="~/.copilot/config.json" size="full">
<div class="grid grid-cols-2 gap-x-8 text-sm leading-relaxed">
<div>
<div class="text-cyan-400 font-semibold mb-2">Behavior</div>
<div class="space-y-1 font-mono text-xs">
<div><span class="text-yellow-300">model</span><span class="text-zinc-400"> &#8212; AI model (gpt-5.2, claude-sonnet-4.6, ...)</span></div>
<div><span class="text-yellow-300">autoUpdate</span><span class="text-zinc-400"> &#8212; auto-download CLI updates (default: true)</span></div>
<div><span class="text-yellow-300">experimental</span><span class="text-zinc-400"> &#8212; enable experimental features</span></div>
<div><span class="text-yellow-300">renderMarkdown</span><span class="text-zinc-400"> &#8212; render markdown in terminal</span></div>
<div><span class="text-yellow-300">respectGitignore</span><span class="text-zinc-400"> &#8212; hide gitignored files from @ picker</span></div>
<div><span class="text-yellow-300">includeCoAuthoredBy</span><span class="text-zinc-400"> &#8212; add Co-authored-by to commits</span></div>
<div><span class="text-yellow-300">compactPaste</span><span class="text-zinc-400"> &#8212; collapse large pastes (&gt;10 lines)</span></div>
</div>
<div class="text-cyan-400 font-semibold mt-4 mb-2">Terminal</div>
<div class="space-y-1 font-mono text-xs">
<div><span class="text-yellow-300">mouse</span><span class="text-zinc-400"> &#8212; enable mouse support in alt screen</span></div>
<div><span class="text-yellow-300">beep</span><span class="text-zinc-400"> &#8212; beep when attention required</span></div>
<div><span class="text-yellow-300">banner</span><span class="text-zinc-400"> &#8212; always / once / never</span></div>
<div><span class="text-yellow-300">bashEnv</span><span class="text-zinc-400"> &#8212; BASH_ENV support for bash shells</span></div>
<div><span class="text-yellow-300">powershellFlags</span><span class="text-zinc-400"> &#8212; startup flags for pwsh (Windows)</span></div>
</div>
</div>
<div>
<div class="text-cyan-400 font-semibold mb-2">Security</div>
<div class="space-y-1 font-mono text-xs">
<div><span class="text-yellow-300">allowed_urls</span><span class="text-zinc-400"> &#8212; pre-approved URL/domain list</span></div>
<div><span class="text-yellow-300">denied_urls</span><span class="text-zinc-400"> &#8212; blocked domains (takes precedence)</span></div>
</div>
<div class="text-cyan-400 font-semibold mt-4 mb-2">Available models</div>
<div class="font-mono text-xs space-y-0.5 text-zinc-400">
<div>claude-sonnet-4.6 &nbsp; claude-opus-4.6</div>
<div>claude-haiku-4.5 &nbsp; claude-sonnet-4.5</div>
<div>gpt-5.4 &nbsp; gpt-5.3-codex &nbsp; gpt-5.2</div>
<div>gpt-5.2-codex &nbsp; gpt-5.1 &nbsp; gpt-4.1</div>
<div>gpt-5.4-mini &nbsp; gpt-5-mini</div>
</div>
<div class="text-cyan-400 font-semibold mt-4 mb-2">Teams</div>
<div class="font-mono text-xs">
<div><span class="text-yellow-300">companyAnnouncements</span><span class="text-zinc-400"> &#8212; messages shown in banner on startup</span></div>
</div>
</div>
</div>
</TerminalFrame>
</div>
</div>

---

<!-- SLIDE: Environment Variables -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-white/40 text-xs">8 of 10</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4 text-white"><code class="bg-zinc-800 px-2 rounded text-yellow-300">copilot help environment</code> &#8212; Key Env Vars</h2>
<TerminalFrame title="environment" size="full">
<div class="grid grid-cols-2 gap-x-8 text-xs leading-relaxed font-mono">
<div>
<div class="text-cyan-400 font-semibold text-sm mb-2">Authentication</div>
<div class="space-y-1">
<div><span class="text-yellow-300">COPILOT_GITHUB_TOKEN</span><span class="text-zinc-400"> &#8212; PAT / OAuth token (highest precedence)</span></div>
<div><span class="text-yellow-300">GH_TOKEN</span><span class="text-zinc-400"> &#8212; GitHub CLI token (second)</span></div>
<div><span class="text-yellow-300">GITHUB_TOKEN</span><span class="text-zinc-400"> &#8212; CI token (third)</span></div>
<div><span class="text-yellow-300">GH_HOST</span><span class="text-zinc-400"> &#8212; GitHub Enterprise hostname</span></div>
</div>
<div class="text-cyan-400 font-semibold text-sm mt-4 mb-2">Behavior</div>
<div class="space-y-1">
<div><span class="text-yellow-300">COPILOT_ALLOW_ALL</span><span class="text-zinc-400">=true &#8212; skip all confirmations</span></div>
<div><span class="text-yellow-300">COPILOT_MODEL</span><span class="text-zinc-400"> &#8212; override AI model</span></div>
<div><span class="text-yellow-300">COPILOT_AUTO_UPDATE</span><span class="text-zinc-400">=false &#8212; disable auto-update</span></div>
<div><span class="text-yellow-300">COPILOT_HOME</span><span class="text-zinc-400"> &#8212; override ~/.copilot directory</span></div>
<div><span class="text-yellow-300">COPILOT_OFFLINE</span><span class="text-zinc-400">=true &#8212; no network (needs BYOK)</span></div>
<div><span class="text-yellow-300">COPILOT_CUSTOM_INSTRUCTIONS_DIRS</span><span class="text-zinc-400"> &#8212; extra AGENTS.md dirs</span></div>
</div>
</div>
<div>
<div class="text-cyan-400 font-semibold text-sm mb-2">BYOK &#8212; Bring Your Own Key</div>
<div class="space-y-1">
<div><span class="text-yellow-300">COPILOT_PROVIDER_BASE_URL</span><span class="text-zinc-400"> &#8212; custom API endpoint</span></div>
<div><span class="text-yellow-300">COPILOT_PROVIDER_TYPE</span><span class="text-zinc-400"> &#8212; openai / azure / anthropic</span></div>
<div><span class="text-yellow-300">COPILOT_PROVIDER_API_KEY</span><span class="text-zinc-400"> &#8212; API key</span></div>
<div><span class="text-yellow-300">COPILOT_PROVIDER_WIRE_API</span><span class="text-zinc-400"> &#8212; completions / responses</span></div>
</div>
<div class="text-cyan-400 font-semibold text-sm mt-4 mb-2">Proxy &amp; Output</div>
<div class="space-y-1">
<div><span class="text-yellow-300">HTTP_PROXY / HTTPS_PROXY</span><span class="text-zinc-400"> &#8212; outbound proxy URL</span></div>
<div><span class="text-yellow-300">NO_PROXY</span><span class="text-zinc-400"> &#8212; bypass list (comma-separated)</span></div>
<div><span class="text-yellow-300">NO_COLOR</span><span class="text-zinc-400"> &#8212; disable color output</span></div>
<div><span class="text-yellow-300">PLAIN_DIFF</span><span class="text-zinc-400">=true &#8212; disable rich diff</span></div>
</div>
<div class="text-cyan-400 font-semibold text-sm mt-4 mb-2">OpenTelemetry</div>
<div class="space-y-1">
<div><span class="text-yellow-300">OTEL_EXPORTER_OTLP_ENDPOINT</span><span class="text-zinc-400"> &#8212; enables OTel automatically</span></div>
<div><span class="text-yellow-300">COPILOT_OTEL_FILE_EXPORTER_PATH</span><span class="text-zinc-400"> &#8212; JSON-lines output file</span></div>
</div>
</div>
</div>
</TerminalFrame>
</div>
</div>

---

<!-- SLIDE: BYOK - Custom Model Providers -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-white/40 text-xs">9 of 10</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4 text-white">BYOK &#8212; Bring Your Own Key</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="shell" size="lg">
<div class="space-y-1 text-xs leading-relaxed font-mono">
<div class="text-zinc-500"># Ollama (local, no auth required)</div>
<div class="text-green-400">COPILOT_PROVIDER_BASE_URL=http://localhost:11434/v1 \</div>
<div class="text-green-400">COPILOT_MODEL=deepseek-coder-v2:16b \</div>
<div class="text-green-400">copilot</div>
<div class="mt-2 text-zinc-500"># Custom OpenAI-compatible endpoint</div>
<div class="text-green-400">COPILOT_PROVIDER_BASE_URL=https://my-api.example.com/v1 \</div>
<div class="text-green-400">COPILOT_PROVIDER_API_KEY=sk-... \</div>
<div class="text-green-400">COPILOT_MODEL=gpt-4 \</div>
<div class="text-green-400">copilot</div>
<div class="mt-2 text-zinc-500"># Azure OpenAI with deployment name</div>
<div class="text-green-400">COPILOT_PROVIDER_TYPE=azure \</div>
<div class="text-green-400">COPILOT_PROVIDER_BASE_URL=https://my.openai.azure.com \</div>
<div class="text-green-400">COPILOT_PROVIDER_MODEL_ID=gpt-4 \</div>
<div class="text-green-400">COPILOT_PROVIDER_WIRE_MODEL=my-gpt4-deployment \</div>
<div class="text-green-400">copilot</div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-4 text-sm">
<div class="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">Provider types</div>
<div class="font-mono text-xs space-y-1">
<div><span class="text-yellow-300">openai</span><span class="text-zinc-400"> &#8212; default; covers Ollama, vLLM, Foundry Local</span></div>
<div><span class="text-yellow-300">azure</span><span class="text-zinc-400"> &#8212; Azure OpenAI (host URL only)</span></div>
<div><span class="text-yellow-300">anthropic</span><span class="text-zinc-400"> &#8212; Anthropic API</span></div>
</div>
</div>
<div class="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">When to use</div>
<ul class="text-zinc-400 text-xs list-disc list-inside space-y-1">
<li>Air-gapped or offline environments</li>
<li>Enterprise contracts with specific model providers</li>
<li>Local development with Ollama / Foundry Local</li>
<li>Cost control with self-hosted models</li>
</ul>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: /fleet - Parallel Subagent Execution -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-white/40 text-xs">10 of 10</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4 text-white"><code class="bg-zinc-800 px-2 rounded text-yellow-300">/fleet</code> &#8212; Parallel Subagent Execution</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="copilot - interactive session" prompt="/fleet" size="lg">
<div class="space-y-1 text-xs leading-relaxed font-mono">
<div class="text-zinc-400 italic">Refactor the auth module, add unit tests for all edge cases,</div>
<div class="text-zinc-400 italic">update the API docs, and run the linter across the repo.</div>
<div class="mt-2 text-zinc-500">/fleet</div>
<div class="mt-1 text-zinc-300">&#10003; Plan created &#8212; 4 subtasks identified</div>
<div class="mt-2 text-zinc-500">Subtask 1 &nbsp;[subagent-1] &nbsp;Refactor auth module</div>
<div class="text-zinc-500">Subtask 2 &nbsp;[subagent-2] &nbsp;Write unit tests for auth</div>
<div class="text-zinc-500">Subtask 3 &nbsp;[subagent-3] &nbsp;Update API documentation</div>
<div class="text-zinc-500">Subtask 4 &nbsp;[subagent-4] &nbsp;Run linter across repo</div>
<div class="mt-2 text-zinc-400 italic">Running in parallel...</div>
<div class="mt-1 text-green-400">&#10003; [subagent-4] Linter: 3 warnings fixed</div>
<div class="text-green-400">&#10003; [subagent-1] Auth module refactored (auth.ts, session.ts)</div>
<div class="text-green-400">&#10003; [subagent-3] API docs updated (12 endpoints)</div>
<div class="text-green-400">&#10003; [subagent-2] 24 unit tests added, all passing</div>
<div class="mt-2 text-green-400 font-semibold">&#10003; All subtasks complete</div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-3 text-sm">
<div class="bg-zinc-900 rounded-lg p-3 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">How it works</div>
<ul class="text-zinc-400 text-xs list-disc list-inside space-y-1">
<li>Main agent acts as orchestrator</li>
<li>Decomposes prompt into independent subtasks</li>
<li>Runs subtasks in parallel, each with its own context window</li>
<li>Manages dependencies; merges results</li>
</ul>
</div>
<div class="bg-zinc-900 rounded-lg p-3 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">Best used for</div>
<ul class="text-zinc-400 text-xs list-disc list-inside space-y-1">
<li>Multi-file refactors + test generation</li>
<li>Audits + fixes across modules</li>
<li>Large dependency updates in monorepos</li>
</ul>
</div>
<div class="bg-zinc-900 rounded-lg p-3 border border-zinc-700">
<div class="text-cyan-400 font-semibold mb-2">Power combos</div>
<div class="font-mono text-xs space-y-1">
<div class="text-zinc-400">Shift+Tab &#8594; plan &#8594; <span class="text-yellow-300">Accept + autopilot + /fleet</span></div>
<div class="text-zinc-300 italic mt-1">"Use GPT-5.3-Codex to refactor..."</div>
<div class="text-zinc-300 italic">"Use @test-writer to create tests..."</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="GitHub Copilot CLI: Terminal-Native AI"
:cards="[
  { icon: '📋', value: 'Plan First', detail: 'Shift+Tab before building', subdetail: '8 attempts → 2 with upfront planning' },
  { icon: '⏳', value: 'Delegate Long Tasks', detail: '& prefix keeps IDE free', subdetail: 'Background execution frees your workflow' },
  { icon: '🚀', value: 'Orchestrate with /fleet', detail: 'Explicit parallel fan-out', subdetail: 'For complex multi-step plans' },
]"
prompt="Questions? Let's discuss GitHub.com from your terminal next"
/>
