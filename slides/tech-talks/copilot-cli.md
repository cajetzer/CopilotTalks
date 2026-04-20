---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot CLI
  AI at the Point of Work
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot CLI
module: tech-talks/copilot-cli
section: Copilot Tools
status: active
updated: 2026-04-17
mdc: true
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

<!-- SLIDE: Title -->
<TitleSlide
  title="GitHub Copilot CLI"
  subtitle="AI at the Point of Work"
  tagline="Start Anywhere. Steer Anywhere. Resume Anywhere."
  meta="Tech Talk &#183; Copilot Tools &#183; 45 min"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="How do I bring AI to where the work actually is?"
  subtext="Most AI tools live in the editor. The work lives"
  highlight=" everywhere else."
  :cards='[
    { icon: "&#x1F527;", title: "Developers", description: "Plan, scaffold, and debug from the terminal with full runtime context" },
    { icon: "&#x2699;&#xFE0F;", title: "DevOps Engineers", description: "Automate CI/CD, triage logs, and patrol infrastructure" },
    { icon: "&#x1F4F1;", title: "On-Call Responders", description: "Steer remote sessions from any device during incidents" },
    { title: "84% non-coding work", description: "Most dev time is debugging, deploying, and triaging &#8212; not writing code" },
    { title: "8 attempts &#8594; 2", description: "Plan Mode catches ambiguity before the first line of code" },
    { title: "Geography eliminated", description: "&#45;&#45;remote puts AI where the problem is; you steer from anywhere" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "&#x1F3AF;", title: "The Terminal Sees Reality", subtitle: "Plan Mode, reasoning, and runtime context", blurb: "84% of work happens outside the editor &#8212; meet it there", slide: 6 },
    { icon: "&#x26A1;", title: "Scaling the Reach", subtitle: "Agents, /fleet, cloud delegation, and context", blurb: "One task becomes many; work outlives your attention", slide: 13 },
    { icon: "&#x1F310;", title: "Anywhere", subtitle: "Remote sessions and the last distance falls", blurb: "AI goes to the machine. You steer from wherever you are", slide: 20 },
    { icon: "&#x1F680;", title: "Real-World Patterns", subtitle: "Use cases and what you can do today", blurb: "Walking-to-meeting debug, log forensics, infra patrol", slide: 25 }
  ]'
/>

---

<!-- SLIDE: The Distance Model -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F9E0; Core Framework</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">The Distance Model</div>
<div class="text-sm text-gray-400">Each section removes a different kind of distance between you and the work</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="space-y-2.5 text-sm">
<div class="p-3 bg-gradient-to-r from-cyan-500/15 to-blue-500/10 rounded-lg border border-cyan-500/30 flex items-center gap-4">
<div class="w-24 shrink-0 font-bold text-cyan-300">Intent</div>
<div class="flex-1 text-white/80">AI stops guessing, starts asking</div>
<div class="shrink-0 text-xs text-cyan-400/80 font-mono">Plan Mode</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-500/15 to-indigo-500/10 rounded-lg border border-blue-500/30 flex items-center gap-4">
<div class="w-24 shrink-0 font-bold text-blue-300">Complexity</div>
<div class="flex-1 text-white/80">One task becomes many, run in parallel</div>
<div class="shrink-0 text-xs text-blue-400/80 font-mono">/fleet fan-out</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-500/15 to-purple-500/10 rounded-lg border border-indigo-500/30 flex items-center gap-4">
<div class="w-24 shrink-0 font-bold text-indigo-300">Context</div>
<div class="flex-1 text-white/80">Session survives compaction, remembers across sessions</div>
<div class="shrink-0 text-xs text-indigo-400/80 font-mono">Auto-compact + Memory</div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-500/15 to-pink-500/10 rounded-lg border border-purple-500/30 flex items-center gap-4">
<div class="w-24 shrink-0 font-bold text-purple-300">Time</div>
<div class="flex-1 text-white/80">Work outlives your attention</div>
<div class="shrink-0 text-xs text-purple-400/80 font-mono">Cloud delegation (&amp;)</div>
</div>
<div class="p-3 bg-gradient-to-r from-pink-500/15 to-rose-500/10 rounded-lg border border-pink-500/30 flex items-center gap-4">
<div class="w-24 shrink-0 font-bold text-pink-300">Geography</div>
<div class="flex-1 text-white/80">AI meets the problem where it lives</div>
<div class="shrink-0 text-xs text-pink-400/80 font-mono">&#45;&#45;remote</div>
</div>
</div>
<div class="mt-3 text-center text-xs text-white/40 italic">The session is the unit of work, not the shell</div>
</div>
</div>

---

<!-- SLIDE: The 84% Problem -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4CA; Why the Terminal?</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">The IDE Only Sees Code</div>
<div class="text-sm text-gray-400">The terminal sees everything else</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 h-full">
<div class="flex flex-col justify-center items-center">
<div class="text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">68%</div>
<div class="text-sm text-white/70 text-center max-w-xs">of developer time is spent on non-feature work: debugging, maintenance, deployments, log analysis, CI triage</div>
<div class="mt-3 text-xs text-white/40 italic">Source: Stripe, The Developer Coefficient (2018)</div>
</div>
<div class="space-y-3 text-xs">
<div class="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
<div class="font-semibold text-cyan-300 mb-1">&#x1F50D; Container logs &amp; process state</div>
<div class="text-white/70">Runtime diagnostics live in the terminal, not source files</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-1">&#x1F310; Network traffic &amp; env vars</div>
<div class="text-white/70">Configuration and connectivity are checked at the shell</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-1">&#x1F4C1; File system &amp; disk state</div>
<div class="text-white/70">Storage, permissions, and deployment artifacts</div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-1">&#x2699;&#xFE0F; CI/CD pipelines &amp; deploys</div>
<div class="text-white/70">Build failures, test results, deployment validation</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 1 &#8212; The Terminal Sees Reality -->

<SectionOpenerSlide
  :partNumber="1"
  title="The Terminal Sees Reality"
  subtitle="Plan Mode, reasoning models, and runtime context"
  :cards='[
    { icon: "&#x1F3AF;", title: "Plan Mode", blurb: "Ask questions before writing code" },
    { icon: "&#x1F9E0;", title: "Reasoning Models", blurb: "GPT-5.2-Codex with tunable depth" },
    { icon: "&#x1F50D;", title: "Runtime Context", blurb: "Logs, env vars, network, processes" }
  ]'
  :terminal='{ context: "Removing the intent distance", detail: "8 debugging attempts &#8594; 2 with Plan Mode" }'
/>

---

<!-- SLIDE: Plan Mode: The Fundamental Shift -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F3AF; The Terminal Sees Reality</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Traditional vs Plan Mode Workflow</div>
<div class="text-xs text-white/50">From trial-and-error to collaborative strategy</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 h-full text-xs">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-xl border border-red-500/30 flex flex-col">
<div class="flex items-center gap-2 mb-3 pb-2 border-b border-red-500/20">
<span class="text-base">&#x274C;</span>
<span class="font-bold text-red-300 text-sm">Traditional Workflow</span>
</div>
<div class="space-y-3">
<div class="flex gap-3 items-start">
<div class="w-5 h-5 rounded-full bg-red-900/80 border border-red-500/60 flex items-center justify-center text-red-300 font-bold text-xs shrink-0">1</div>
<div><div class="font-semibold text-white/90">Make request</div><div class="opacity-60 mt-0.5">Describe what you need</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-5 h-5 rounded-full bg-red-900/80 border border-red-500/60 flex items-center justify-center text-red-300 font-bold text-xs shrink-0">2</div>
<div><div class="font-semibold text-white/90">AI generates solution</div><div class="opacity-60 mt-0.5">Assumes intent, picks one interpretation</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-5 h-5 rounded-full bg-red-900/80 border border-red-500/60 flex items-center justify-center text-red-300 font-bold text-xs shrink-0">3</div>
<div><div class="font-semibold text-white/90">You review and fix</div><div class="opacity-60 mt-0.5">Discover wrong assumptions</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-5 h-5 rounded-full bg-orange-900/80 border border-orange-500/60 flex items-center justify-center text-orange-300 font-bold text-xs shrink-0">&#x21BA;</div>
<div><div class="font-semibold text-orange-300">Repeat &#215; 8</div><div class="opacity-60 mt-0.5">Average attempts before success</div></div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl border border-green-500/30 flex flex-col">
<div class="flex items-center gap-2 mb-3 pb-2 border-b border-green-500/20">
<span class="text-base">&#x2705;</span>
<span class="font-bold text-green-300 text-sm">Plan Mode (Shift+Tab)</span>
</div>
<div class="space-y-3">
<div class="flex gap-3 items-start">
<div class="w-5 h-5 rounded-full bg-green-900/80 border border-green-500/60 flex items-center justify-center text-green-300 font-bold text-xs shrink-0">1</div>
<div><div class="font-semibold text-white/90">Make request</div><div class="opacity-60 mt-0.5">Describe what you need</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-5 h-5 rounded-full bg-green-900/80 border border-green-500/60 flex items-center justify-center text-green-300 font-bold text-xs shrink-0">2</div>
<div><div class="font-semibold text-white/90">AI asks questions</div><div class="opacity-60 mt-0.5">Clarifies intent before acting</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-5 h-5 rounded-full bg-green-900/80 border border-green-500/60 flex items-center justify-center text-green-300 font-bold text-xs shrink-0">3</div>
<div><div class="font-semibold text-white/90">Collaborate on plan</div><div class="opacity-60 mt-0.5">Review strategy before any code</div></div>
</div>
<div class="flex gap-3 items-start">
<div class="w-5 h-5 rounded-full bg-emerald-900/80 border border-emerald-500/60 flex items-center justify-center text-emerald-300 font-bold text-xs shrink-0">&#x2713;</div>
<div><div class="font-semibold text-emerald-300">Done in ~2 attempts</div><div class="opacity-60 mt-0.5">Ambiguity caught before code</div></div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Docker Debugging Demo -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F3AF; The Terminal Sees Reality</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Plan Mode in Action: Docker Debugging</div>
<div class="text-xs text-white/50">Root cause in 8 minutes instead of 45</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="font-mono text-xs bg-gray-950/60 rounded-xl border border-cyan-500/20 p-4 space-y-2 overflow-y-auto max-h-72">
<div class="text-green-400">$ copilot</div>
<div class="text-cyan-300">&gt; "Debug why the backend container won&#39;t start"</div>
<div class="text-yellow-300/80 mt-2">&#x1F914; Copilot (Plan Mode):</div>
<div class="text-white/70 pl-4">Before I start, a few questions:</div>
<div class="text-white/70 pl-4">1. Check docker-compose config, logs, or both?</div>
<div class="text-white/70 pl-4">2. Include environment variable analysis?</div>
<div class="text-white/70 pl-4">3. Any recent changes to services or network?</div>
<div class="text-cyan-300 mt-2">&gt; "Start with logs, then check config if needed"</div>
<div class="text-yellow-300/80 mt-2">&#x1F914; Copilot:</div>
<div class="text-white/70 pl-4">Here&#39;s my plan:</div>
<div class="text-white/70 pl-4">1. Retrieve container logs for backend service</div>
<div class="text-white/70 pl-4">2. Analyze error patterns and stack traces</div>
<div class="text-white/70 pl-4">3. Inspect docker-compose.yml if logs suggest config issue</div>
<div class="text-white/70 pl-4">4. Check environment variables if auth errors found</div>
<div class="border-t border-cyan-500/20 my-2"></div>
<div class="text-green-400">&#x2705; Found: Port 5000 mapped to 5001 in docker-compose.yml</div>
<div class="text-green-400">&#x2705; Fix applied. Container starts successfully.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Real-Time Steering -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F3AF; The Terminal Sees Reality</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Steer While the Agent Thinks</div>
<div class="text-xs text-white/50">Enqueue messages, reject with explanation, change direction mid-flight</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
<div class="font-semibold text-cyan-300 mb-1">&#x1F4E8; Enqueue Messages</div>
<div class="text-white/70">Send follow-ups while Copilot is still working</div>
<div class="font-mono text-xs mt-2 bg-gray-950/40 rounded p-2 text-white/60">&gt; "Also check if Redis is running"<br/>&gt; "Focus on auth errors first"</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-1">&#x1F6AB; Reject, Then Redirect</div>
<div class="text-white/70">Deny a tool call, then steer with a follow-up</div>
<div class="font-mono text-xs mt-2 bg-gray-950/40 rounded p-2 text-white/60">[No] &#8594; &gt; "Don&#39;t delete tmp/ &#8212;<br/>it has cached artifacts we need"</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-1">&#x1F504; Change Direction</div>
<div class="text-white/70">Course-correct without starting over</div>
<div class="font-mono text-xs mt-2 bg-gray-950/40 rounded p-2 text-white/60">&gt; "Actually, skip the database &#8212;<br/>the issue is in the API layer"</div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-1">&#x1F3AE; Permission Controls</div>
<div class="text-white/70">Pre-approve tools, paths, and URLs</div>
<div class="font-mono text-xs mt-2 bg-gray-950/40 rounded p-2 text-white/60">$ copilot --allow-tool &#39;shell(git:*)&#39;<br/>&gt; /allow-all   &gt; /reset-allowed-tools</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Reasoning Models -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F3AF; The Terminal Sees Reality</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Configurable Reasoning Depth</div>
<div class="text-xs text-white/50">GPT-5.2-Codex with tunable effort &#183; Ctrl+T to reveal thinking</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-4 gap-3 mb-4 text-xs">
<div class="p-3 bg-gradient-to-b from-green-500/15 to-green-500/5 rounded-lg border border-green-500/30 text-center">
<div class="text-lg mb-1">&#x26A1;</div>
<div class="font-bold text-green-300">Low</div>
<div class="text-white/60 mt-1">Fast queries</div>
<div class="text-white/40 mt-1">Simple lookups</div>
</div>
<div class="p-3 bg-gradient-to-b from-blue-500/15 to-blue-500/5 rounded-lg border border-blue-500/30 text-center">
<div class="text-lg mb-1">&#x2696;&#xFE0F;</div>
<div class="font-bold text-blue-300">Medium</div>
<div class="text-white/60 mt-1">Default</div>
<div class="text-white/40 mt-1">Balanced speed/depth</div>
</div>
<div class="p-3 bg-gradient-to-b from-purple-500/15 to-purple-500/5 rounded-lg border border-purple-500/30 text-center">
<div class="text-lg mb-1">&#x1F9E0;</div>
<div class="font-bold text-purple-300">High</div>
<div class="text-white/60 mt-1">Complex problems</div>
<div class="text-white/40 mt-1">Multi-service debugging</div>
</div>
<div class="p-3 bg-gradient-to-b from-pink-500/15 to-pink-500/5 rounded-lg border border-pink-500/30 text-center">
<div class="text-lg mb-1">&#x1F525;</div>
<div class="font-bold text-pink-300">Extra High</div>
<div class="text-white/60 mt-1">Critical decisions</div>
<div class="text-white/40 mt-1">Architecture, security</div>
</div>
</div>
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
<div class="font-semibold text-cyan-300 mb-1">&#x1F50D; Ctrl+T: Show Reasoning</div>
<div class="text-white/70">See the model&#39;s thought process step-by-step. Persists across sessions. Great for learning prompting patterns.</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-1">&#x1F4B0; /model: Cost Control</div>
<div class="text-white/70">Each model shows a multiplier (1x, 2x, etc.) indicating premium request cost. Pick the right tradeoff for your task.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Operating Modes -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F3AF; The Terminal Sees Reality</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">5 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Four Operating Modes</div>
<div class="text-xs text-white/50">Choose the right mode for the task</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
<div class="font-semibold text-cyan-300 mb-1">&#x1F4AC; Interactive</div>
<div class="font-mono text-white/50 mb-1">$ copilot</div>
<div class="text-white/70">Conversational sessions for collaborative debugging and exploration. Context maintained across commands.</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-1">&#x2699;&#xFE0F; Programmatic</div>
<div class="font-mono text-white/50 mb-1">$ copilot -p "task"</div>
<div class="text-white/70">Single-command execution for scripts and CI/CD. Structured output. No conversation history.</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-1">&#x2601;&#xFE0F; Cloud Delegation</div>
<div class="font-mono text-white/50 mb-1">$ &amp; "analyze security"</div>
<div class="text-white/70">Background execution frees terminal and IDE. PR created when agent finishes. Best for 20+ min tasks.</div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-1">&#x1F310; Remote</div>
<div class="font-mono text-white/50 mb-1">$ copilot &#45;&#45;remote</div>
<div class="text-white/70">Start on any machine, steer from GitHub.com or Mobile via URL/QR code. Session lives where the problem is.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: CI/CD Automation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F3AF; The Terminal Sees Reality</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">6 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Programmatic Mode in CI/CD</div>
<div class="text-xs text-white/50">Build failure analysis in GitHub Actions &#183; 25 min &#8594; 5 min</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="font-mono text-xs bg-gray-950/60 rounded-xl border border-cyan-500/20 p-4 space-y-1 overflow-y-auto max-h-72">
<div class="text-purple-300"># .github/workflows/build.yml</div>
<div class="text-white/70">- name: Analyze build failure</div>
<div class="text-white/70">  if: failure()</div>
<div class="text-white/70">  run: |</div>
<div class="text-cyan-300 pl-4">copilot -p "Analyze build failure. \</div>
<div class="text-cyan-300 pl-6">Check recent commits, dependencies, \</div>
<div class="text-cyan-300 pl-6">and error patterns. Suggest fixes." \</div>
<div class="text-amber-300 pl-6">&#45;&#45;allow-tool &#39;shell(gh)&#39; \</div>
<div class="text-amber-300 pl-6">&#45;&#45;allow-tool &#39;shell(git)&#39; \</div>
<div class="text-white/70 pl-6">&gt; failure-analysis.txt</div>
<div class="border-t border-cyan-500/20 my-2"></div>
<div class="text-white/70">- name: Post analysis as PR comment</div>
<div class="text-white/70">  if: failure()</div>
<div class="text-white/70">  run: |</div>
<div class="text-cyan-300 pl-4">gh pr comment $&#123;&#123; github.event.pull_request.number &#125;&#125; \</div>
<div class="text-cyan-300 pl-6">&#45;&#45;body-file failure-analysis.txt</div>
</div>
<div class="mt-3 text-xs text-white/50 text-center">Zero human intervention for known failure types &#183; Pattern recognition across historical failures</div>
</div>
</div>

---

<!-- SLIDE: Part 2 &#8212; Scaling the Reach -->

<SectionOpenerSlide
  :partNumber="2"
  title="Scaling the Reach"
  subtitle="Built-in agents, /fleet fan-out, cloud delegation, and infinite context"
  :cards='[
    { icon: "&#x1F916;", title: "Built-in Agents", blurb: "Explore, Task, Plan, Code-review" },
    { icon: "&#x1F680;", title: "/fleet Fan-Out", blurb: "Parallel decomposition at scale" },
    { icon: "&#x267E;&#xFE0F;", title: "Infinite Sessions", blurb: "Auto-compaction + repo memory" }
  ]'
  :terminal='{ context: "Removing complexity, context, and time distance", detail: "One task becomes many &#8212; work outlives your attention" }'
/>

---

<!-- SLIDE: Built-in Agents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x26A1; Scaling the Reach</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Four Specialized Agents</div>
<div class="text-xs text-white/50">Copilot routes automatically based on your intent</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="flex items-center gap-2 mb-2">
<span class="text-base">&#x1F50D;</span>
<span class="font-bold text-blue-300">Explore Agent</span>
</div>
<div class="text-white/70 mb-2">Fast codebase analysis without cluttering main context. Returns focused answers under 300 words.</div>
<div class="font-mono bg-gray-950/40 rounded p-2 text-white/50">&gt; "How does auth work in this service?"</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="flex items-center gap-2 mb-2">
<span class="text-base">&#x2699;&#xFE0F;</span>
<span class="font-bold text-indigo-300">Task Agent</span>
</div>
<div class="text-white/70 mb-2">Execute commands with smart output filtering. Brief summary on success, full output on failure.</div>
<div class="font-mono bg-gray-950/40 rounded p-2 text-white/50">&gt; "Run the test suite"</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="flex items-center gap-2 mb-2">
<span class="text-base">&#x1F4CB;</span>
<span class="font-bold text-blue-300">Plan Agent</span>
</div>
<div class="text-white/70 mb-2">Analyze dependencies and create multi-step strategies you review before execution.</div>
<div class="font-mono bg-gray-950/40 rounded p-2 text-white/50">&gt; "Plan the API versioning refactor"</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="flex items-center gap-2 mb-2">
<span class="text-base">&#x1F50E;</span>
<span class="font-bold text-indigo-300">Code-Review Agent</span>
</div>
<div class="text-white/70 mb-2">High signal-to-noise review. Only surfaces bugs, security issues, and logic errors. Never style.</div>
<div class="font-mono bg-gray-950/40 rounded p-2 text-white/50">&gt; /review</div>
</div>
</div>
<div class="mt-2 text-xs text-white/40 text-center">Multiple agents can work simultaneously &#8212; three operations in the time of one</div>
</div>
</div>

---

<!-- SLIDE: /fleet Fan-Out -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x26A1; Scaling the Reach</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">/fleet: Explicit Parallel Orchestration</div>
<div class="text-xs text-white/50">Decompose, delegate, merge &#8212; one prompt, many subagents</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 h-full text-xs">
<div class="space-y-3">
<div class="font-mono bg-gray-950/60 rounded-lg border border-blue-500/20 p-3 space-y-1">
<div class="text-green-400">$ copilot</div>
<div class="text-blue-300">&gt; /fleet implement all phases of</div>
<div class="text-blue-300">  this auth refactor plan</div>
<div class="border-t border-blue-500/20 my-1.5"></div>
<div class="text-yellow-300/80">&#x1F916; Orchestrator: 4 subtasks identified</div>
<div class="text-white/70">  &#x2192; Subagent 1: Update user model</div>
<div class="text-white/70">  &#x2192; Subagent 2: Migrate auth routes</div>
<div class="text-white/70">  &#x2192; Subagent 3: Update test suite</div>
<div class="text-white/70">  &#x2192; Subagent 4: Update documentation</div>
<div class="text-green-400 mt-1">&#x2705; All subtasks complete. Merging.</div>
</div>
<div class="text-white/40 italic text-center">Plan with Shift+Tab, then /fleet to execute</div>
</div>
<div class="space-y-2.5">
<div class="p-2.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300">&#x26A1; Speed</div>
<div class="text-white/70">Parallel subtasks complete in the time of the longest, not the sum</div>
</div>
<div class="p-2.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300">&#x1F512; Context Isolation</div>
<div class="text-white/70">Each subagent gets its own context window &#8212; no pollution between tasks</div>
</div>
<div class="p-2.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300">&#x1F3AF; Specialization</div>
<div class="text-white/70">Custom agents (@test-writer, @security-reviewer) matched to subtasks</div>
</div>
<div class="p-2.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300">&#x1F4B0; Model Selection</div>
<div class="text-white/70">Subagents default to low-cost models; override per-subtask for critical work</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Cloud Delegation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x26A1; Scaling the Reach</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Cloud Delegation: Work Outlives Your Attention</div>
<div class="text-xs text-white/50">Delegate with &amp; prefix &#183; IDE and terminal stay completely free</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="space-y-3">
<div class="font-mono bg-gray-950/60 rounded-lg border border-blue-500/20 p-3 space-y-1">
<div class="text-green-400">$ copilot</div>
<div class="text-blue-300">&gt; &amp;"Analyze entire codebase for</div>
<div class="text-blue-300">  security vulnerabilities"</div>
<div class="border-t border-blue-500/20 my-1.5"></div>
<div class="text-green-400">&#x2705; Task delegated to cloud agent.</div>
<div class="text-white/70">Commits unstaged changes, creates branch.</div>
<div class="text-white/70">PR arrives when analysis completes.</div>
<div class="border-t border-blue-500/20 my-1.5"></div>
<div class="text-cyan-300">[Terminal is free for other work]</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-1">Best for 20+ minute tasks</div>
<div class="text-white/70">Security audits, large refactors, test scaffolding, doc generation</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-1">Fully independent execution</div>
<div class="text-white/70">Runs on GitHub&#39;s infrastructure. Both IDE and terminal stay free. PR created when done.</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-1">Removes the time distance</div>
<div class="text-white/70">Work doesn&#39;t need you present. The session continues while you sleep, eat, or meet.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Context Management -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x26A1; Scaling the Reach</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Infinite Sessions &amp; Repository Memory</div>
<div class="text-xs text-white/50">The foundation that makes sessions worth reconnecting to</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-1">&#x267E;&#xFE0F; Auto-Compaction at 95%</div>
<div class="text-white/70">When context approaches token limit, history is automatically compressed. Important decisions persist. Verbose output pruned.</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-1">&#x1F9E0; Repository Memory</div>
<div class="text-white/70">Copilot learns your conventions, patterns, and preferred approaches. Applied automatically in future sessions.</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-1">&#x1F4CA; Monitoring Tools</div>
<div class="font-mono text-white/50">/context &#8212; visual token breakdown</div>
<div class="font-mono text-white/50">/usage &#8212; session statistics</div>
<div class="font-mono text-white/50">/compact &#8212; manual compression</div>
</div>
</div>
<div class="flex flex-col justify-center">
<div class="p-4 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-xl border border-blue-500/30 text-center">
<div class="text-3xl mb-2">&#x1F517;</div>
<div class="font-bold text-white mb-2">Sessions Are Durable</div>
<div class="text-white/70 mb-3">Think tmux or Jupyter &#8212; persistent state you connect to, not ephemeral chat you restart</div>
<div class="text-blue-300/80 font-mono text-xs">copilot &#45;&#45;resume</div>
<div class="text-white/40 mt-1">Reconnect from any device. Context travels with the session.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Extensibility -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x26A1; Scaling the Reach</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">5 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Custom Agents, Plugins &amp; /ide Bridge</div>
<div class="text-xs text-white/50">Extend capabilities beyond built-in features</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-3 gap-3 text-xs">
<div class="p-3 bg-gradient-to-b from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-2">&#x1F916; Custom Agents</div>
<div class="text-white/70 mb-2">Specialized agents for your team&#39;s workflows</div>
<div class="font-mono bg-gray-950/40 rounded p-2 text-white/50 space-y-0.5">
<div>~/.copilot/agents/</div>
<div>.github/agents/</div>
<div>.github-private/agents/</div>
</div>
</div>
<div class="p-3 bg-gradient-to-b from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-2">&#x1F9E9; Plugins</div>
<div class="text-white/70 mb-2">Community and team-created extensions from marketplaces</div>
<div class="font-mono bg-gray-950/40 rounded p-2 text-white/50 space-y-0.5">
<div>copilot plugin install</div>
<div>copilot plugin marketplace</div>
</div>
</div>
<div class="p-3 bg-gradient-to-b from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-2">&#x1F4BB; /ide Bridge</div>
<div class="text-white/70 mb-2">Connect to a running IDE &#8212; edits open as diffs, IDE shares diagnostics &amp; selection</div>
<div class="font-mono bg-gray-950/40 rounded p-2 text-white/50 space-y-0.5">
<div>&gt; /ide              # connect</div>
<div># auto-connects by default</div>
<div># diffs open in IDE for approval</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Mental Model Shift -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x26A1; Scaling the Reach</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">6 of 6</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Mental Model Shift</div>
<div class="text-xs text-white/50">From command execution to AI session steering</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="space-y-3">
<div class="text-base font-bold text-green-400 mb-2">&#x2705; Move Toward</div>
<div class="p-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
<div class="font-medium mb-0.5">AI as thought partner for greenfield</div>
<div class="opacity-80">90 min library research &#8594; 15 min with scaffold</div>
</div>
<div class="p-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
<div class="font-medium mb-0.5">Plan before you build (Shift+Tab)</div>
<div class="opacity-80">8 attempts &#8594; 2; catch ambiguity early</div>
</div>
<div class="p-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
<div class="font-medium mb-0.5">Delegate with &amp; &#8212; don&#39;t block</div>
<div class="opacity-80">IDE and terminal stay completely free</div>
</div>
<div class="p-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
<div class="font-medium mb-0.5">Sessions as durable work</div>
<div class="opacity-80">Start on workstation, steer from phone, review from laptop</div>
</div>
</div>
<div class="space-y-3">
<div class="text-base font-bold text-red-400 mb-2">&#x1F6D1; Move Against</div>
<div class="p-2.5 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20">
<div class="font-medium mb-0.5">Pasting secrets into prompts</div>
<div class="opacity-80">Use env vars &#8212; credentials are prompt content</div>
</div>
<div class="p-2.5 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20">
<div class="font-medium mb-0.5">&#45;&#45;yolo outside sandboxed environments</div>
<div class="opacity-80">Blanket permissions = prod access if authenticated</div>
</div>
<div class="p-2.5 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20">
<div class="font-medium mb-0.5">Skipping Plan Mode when rushing</div>
<div class="opacity-80">Most valuable precisely when you&#39;re in a hurry</div>
</div>
<div class="p-2.5 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20">
<div class="font-medium mb-0.5">&#45;&#45;remote + &#45;&#45;yolo on production</div>
<div class="opacity-80">Always scope permissions; use Copilot Hooks</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 &#8212; Anywhere -->

<SectionOpenerSlide
  :partNumber="3"
  title="Anywhere"
  subtitle="Remote sessions and the last distance falls"
  :cards='[
    { icon: "&#x1F310;", title: "&#45;&#45;remote Flag", blurb: "Start on any machine, steer from any device" },
    { icon: "&#x1F4F1;", title: "Mobile Steering", blurb: "URL/QR code to GitHub.com or Mobile" },
    { icon: "&#x1F517;", title: "Session Portability", blurb: "Devices are viewports, not anchors" }
  ]'
  :terminal='{ context: "SSH moves your keystrokes", detail: "&#45;&#45;remote moves a reasoning session" }'
/>

---

<!-- SLIDE: How --remote Works -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F310; Anywhere</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Remote Sessions: The Last Distance Falls</div>
<div class="text-xs text-white/50">AI goes to the machine. You steer from wherever you are.</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="font-mono bg-gray-950/60 rounded-lg border border-indigo-500/20 p-3 space-y-1">
<div class="text-purple-300"># SSH into production</div>
<div class="text-green-400">$ ssh ops@prod-server-3</div>
<div class="text-green-400">$ copilot &#45;&#45;remote</div>
<div class="border-t border-indigo-500/20 my-1.5"></div>
<div class="text-indigo-300">&#x1F517; Remote session started.</div>
<div class="text-white/70">Monitor and steer from:</div>
<div class="text-cyan-300">  github.com/copilot/sessions/abc123</div>
<div class="text-white/70">  [QR CODE]</div>
<div class="border-t border-indigo-500/20 my-1.5"></div>
<div class="text-purple-300"># Or mid-session:</div>
<div class="text-green-400">&gt; /remote</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-1">&#x1F440; See what Copilot is doing</div>
<div class="text-white/70">Real-time visibility from phone, tablet, or any browser</div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-1">&#x1F3AE; Approve and steer</div>
<div class="text-white/70">Approve permissions, send steering messages, inject new prompts</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-1">&#x1F504; Resume anywhere</div>
<div class="text-white/70">copilot &#45;&#45;resume from a completely different machine</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Why --remote Matters -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F310; Anywhere</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">The Session Becomes Portable, Not the Machine</div>
<div class="text-xs text-white/50">SSH moves your keystrokes. &#45;&#45;remote moves a reasoning session.</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="space-y-3 text-sm">
<div class="p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/25">
<div class="flex items-center gap-3 mb-2">
<span class="text-2xl">&#x1F4BE;</span>
<div class="font-bold text-indigo-300">Work stays where it lives</div>
</div>
<div class="text-white/70 text-xs">Logs never leave the production boundary. No scp, no rsync, no uploading to third-party analysis tools. Compliance-friendly by default.</div>
</div>
<div class="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/25">
<div class="flex items-center gap-3 mb-2">
<span class="text-2xl">&#x1F3C3;</span>
<div class="font-bold text-purple-300">Momentum survives context changes</div>
</div>
<div class="text-white/70 text-xs">Walking to a meeting, switching devices, getting paged at 2 AM &#8212; the session is continuous. You don&#39;t restart; you reconnect.</div>
</div>
<div class="p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/25">
<div class="flex items-center gap-3 mb-2">
<span class="text-2xl">&#x1F4F1;</span>
<div class="font-bold text-indigo-300">Devices are interchangeable viewports</div>
</div>
<div class="text-white/70 text-xs">Your laptop, phone, and tablet all connect to the same durable AI work session. The session is the entity; devices just display it.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Combination Patterns -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F310; Anywhere</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">&#45;&#45;remote Composes with Everything</div>
<div class="text-xs text-white/50">The flag that multiplies every other capability</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="space-y-2.5 text-xs">
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20 flex items-center gap-4">
<div class="w-40 shrink-0 font-bold text-indigo-300">Plan Mode + &#45;&#45;remote</div>
<div class="flex-1 text-white/70">Safer live-system ops &#8212; AI asks questions before touching production. Critical when approving from a phone.</div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20 flex items-center gap-4">
<div class="w-40 shrink-0 font-bold text-purple-300">/fleet + &#45;&#45;remote</div>
<div class="flex-1 text-white/70">Coordinate across multiple environments simultaneously. One prompt, five servers, parallel execution.</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20 flex items-center gap-4">
<div class="w-40 shrink-0 font-bold text-indigo-300">Cloud + &#45;&#45;remote</div>
<div class="flex-1 text-white/70">Persistent infra patrol &#8212; agent watches, investigates anomalies, reports findings. Review from any device.</div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20 flex items-center gap-4">
<div class="w-40 shrink-0 font-bold text-purple-300">Memory + &#45;&#45;remote</div>
<div class="flex-1 text-white/70">When you /resume from a new device, repo memory and context travel with it &#8212; no re-explaining.</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20 flex items-center gap-4">
<div class="w-40 shrink-0 font-bold text-indigo-300">tmux + &#45;&#45;remote</div>
<div class="flex-1 text-white/70">Sessions survive SSH disconnects. Combine with tmux or screen for true persistence.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Walking-to-Meeting Demo -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F310; Anywhere</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">The Walking-to-Meeting Debug</div>
<div class="text-xs text-white/50">Alert fires 3 min before standup. You start and finish without stopping.</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="font-mono text-xs bg-gray-950/60 rounded-xl border border-indigo-500/20 p-4 space-y-1 overflow-y-auto max-h-64">
<div class="text-purple-300"># 9:02 AM &#8212; Alert fires. SSH into staging.</div>
<div class="text-green-400">$ ssh ops@staging-auth-01</div>
<div class="text-green-400">$ copilot &#45;&#45;remote</div>
<div class="text-indigo-300">&gt; "The auth service is returning 503. Debug it."</div>
<div class="border-t border-indigo-500/20 my-1.5"></div>
<div class="text-purple-300"># 9:05 AM &#8212; Scan QR code. Grab your bag.</div>
<div class="text-purple-300"># 9:07 AM &#8212; Walking to standup. Phone shows:</div>
<div class="text-green-400">"Found: JWT_SECRET missing from staging env."</div>
<div class="border-t border-indigo-500/20 my-1.5"></div>
<div class="text-purple-300"># From phone:</div>
<div class="text-indigo-300">&gt; "Check if other services depend on that secret"</div>
<div class="text-green-400">Copilot: 2 more services affected. Proposing fix.</div>
<div class="border-t border-indigo-500/20 my-1.5"></div>
<div class="text-purple-300"># 9:12 AM &#8212; Walk into standup:</div>
<div class="text-white/90">"Staging auth is fixed. 3 services were affected."</div>
</div>
<div class="mt-3 grid grid-cols-3 gap-2 text-xs text-center">
<div class="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
<div class="font-bold text-indigo-300">No restart</div>
<div class="text-white/50">Same session, new device</div>
</div>
<div class="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
<div class="font-bold text-purple-300">No sacrifice</div>
<div class="text-white/50">Meeting + debug, not or</div>
</div>
<div class="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
<div class="font-bold text-indigo-300">10 minutes</div>
<div class="text-white/50">Alert to resolution</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 &#8212; Real-World Patterns -->

<SectionOpenerSlide
  :partNumber="4"
  title="Real-World Patterns"
  subtitle="Use cases and what you can do today"
  :cards='[
    { icon: "&#x1F50D;", title: "Log Forensics", blurb: "12GB of logs, zero data transfer" },
    { icon: "&#x1F6E1;&#xFE0F;", title: "Infra Patrol", blurb: "Persistent monitoring with reasoning" },
    { icon: "&#x1F310;", title: "Multi-Machine", blurb: "Five servers, one prompt" }
  ]'
  :terminal='{ context: "Bring reasoning to the data", detail: "instead of moving the data to the reasoning" }'
/>

---

<!-- SLIDE: Log Forensics -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F680; Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Log Forensics Without Data Transfer</div>
<div class="text-xs text-white/50">12GB of logs &#183; zero bytes transferred &#183; compliance-friendly</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="font-mono bg-gray-950/60 rounded-lg border border-purple-500/20 p-3 space-y-1">
<div class="text-purple-300"># On the server where logs live</div>
<div class="text-green-400">$ ssh analytics@log-server</div>
<div class="text-green-400">$ copilot &#45;&#45;remote</div>
<div class="border-t border-purple-500/20 my-1.5"></div>
<div class="text-indigo-300">&gt; "Analyze access logs from the last</div>
<div class="text-indigo-300">  24 hours. Find top 10 IPs with 401</div>
<div class="text-indigo-300">  responses on /api/auth. Check for</div>
<div class="text-indigo-300">  credential stuffing patterns."</div>
<div class="border-t border-purple-500/20 my-1.5"></div>
<div class="text-yellow-300/80">[runs: grep, awk, sort, uniq]</div>
<div class="text-green-400">Found: 3 IPs with &gt;10K attempts.</div>
<div class="text-green-400">Pattern: sequential usernames.</div>
<div class="text-green-400">Recommendation: Block at WAF.</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-1">&#x1F512; Logs never leave the machine</div>
<div class="text-white/70">No scp, no rsync, no uploading to third-party tools. PII stays in the production boundary.</div>
</div>
<div class="p-3 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-lg border border-pink-500/20">
<div class="font-semibold text-pink-300 mb-1">&#x26A1; Speed at scale</div>
<div class="text-white/70">Analyzing locally is orders of magnitude faster than transferring 12GB. Some logs are too big to download at all.</div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-1">&#x1F9E0; AI reasons, not just greps</div>
<div class="text-white/70">Detects patterns (credential stuffing, sequential usernames) that grep alone would miss.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Infra Patrol & Multi-Machine -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F680; Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Infrastructure Patrol &amp; Multi-Machine Orchestration</div>
<div class="text-xs text-white/50">Persistent monitoring that reasons &#183; Distributed debugging from one dashboard</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="space-y-3">
<div class="font-semibold text-purple-300 text-sm mb-1">&#x1F6E1;&#xFE0F; Persistent Infra Patrol</div>
<div class="font-mono bg-gray-950/60 rounded-lg border border-purple-500/20 p-3 space-y-1">
<div class="text-green-400">$ tmux new -s copilot-patrol</div>
<div class="text-green-400">$ copilot &#45;&#45;remote \</div>
<div class="text-amber-300">  &#45;&#45;allow-tool &#39;shell(kubectl)&#39;</div>
<div class="border-t border-purple-500/20 my-1.5"></div>
<div class="text-indigo-300">&gt; "Monitor the K8s cluster.</div>
<div class="text-indigo-300">  Check pod health every 5 min.</div>
<div class="text-indigo-300">  Alert me if anything abnormal."</div>
</div>
<div class="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 text-center">
<div class="text-white/70">Monitoring says <span class="text-red-400">"CPU at 92%"</span></div>
<div class="text-white/70">AI patrol says <span class="text-green-400">why</span> and proposes a fix</div>
</div>
</div>
<div class="space-y-3">
<div class="font-semibold text-pink-300 text-sm mb-1">&#x1F310; Multi-Machine Orchestration</div>
<div class="font-mono bg-gray-950/60 rounded-lg border border-pink-500/20 p-3 space-y-1">
<div class="text-purple-300"># Three remote sessions:</div>
<div class="text-white/70">copilot &#45;&#45;remote on prod-db-1</div>
<div class="text-white/70">copilot &#45;&#45;remote on prod-api-3</div>
<div class="text-white/70">copilot &#45;&#45;remote on prod-worker-7</div>
<div class="border-t border-pink-500/20 my-1.5"></div>
<div class="text-indigo-300">&gt; "Check disk, validate SSL,</div>
<div class="text-indigo-300">  compare deployed versions."</div>
<div class="text-green-400">Results merged into one report.</div>
</div>
<div class="p-2 bg-pink-500/10 rounded-lg border border-pink-500/20 text-center">
<div class="text-white/70">Your browser becomes a <span class="text-pink-300">console</span></div>
<div class="text-white/70">for supervising distributed AI ops</div>
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
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F680; Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">GitHub.com from Your Terminal</div>
<div class="text-xs text-white/50">Issues, PRs, and Actions without context-switching to the browser</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 text-xs mb-3">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-1">&#x1F4CB; Issues</div>
<div class="font-mono bg-gray-950/40 rounded p-2 text-white/50 space-y-0.5">
<div>&gt; "List open issues assigned to me"</div>
<div>&gt; "Start working on issue #42"</div>
<div>&gt; "Raise an issue: file handle</div>
<div>   never closed in src/auth.py"</div>
</div>
</div>
<div class="p-3 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-lg border border-pink-500/20">
<div class="font-semibold text-pink-300 mb-1">&#x1F504; Pull Requests</div>
<div class="font-mono bg-gray-950/40 rounded p-2 text-white/50 space-y-0.5">
<div>&gt; "List my open PRs"</div>
<div>&gt; "Check changes in PR #123"</div>
<div>&gt; "Merge all my open PRs"</div>
</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-1">&#x2699;&#xFE0F; Actions Workflows</div>
<div class="font-mono bg-gray-950/40 rounded p-2 text-white/50 space-y-0.5">
<div>&gt; "Create a workflow that runs</div>
<div>   eslint on PRs. Push and</div>
<div>   open a PR."</div>
</div>
</div>
<div class="p-3 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-lg border border-pink-500/20">
<div class="font-semibold text-pink-300 mb-1">&#x1F4A1; Key Insight</div>
<div class="text-white/70">Copilot can create PRs on your behalf &#8212; you&#39;re marked as the author. Describe a change in English, end up with a PR on GitHub.com.</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-xs"><span class="font-bold text-purple-300">🎯 Key Insight:</span> <span class="text-white/80">GitHub.com becomes an extension of your terminal — issues, PRs, and Actions without ever context-switching to the browser</span></div>
</div>
</div>
</div>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="From Manual Commands to AI at the Point of Work"
  :leftItems='["SSH in, run commands, copy-paste output into chat", "8 trial-and-error debugging attempts", "Download logs, analyze locally, lose compliance", "Wait until you are at your desk to respond"]'
  :rightItems='["AI runs where the problem is, steers from anywhere", "2 attempts with Plan Mode clarifying intent", "Log forensics on-server, zero data transfer", "Steer from phone, resolve during the walk"]'
  :metrics='[
    { value: "84% &#8594; covered", detail: "Terminal-native AI for the non-coding majority" },
    { value: "8 &#8594; 2 attempts", detail: "Plan Mode catches ambiguity before code" },
    { value: "0 bytes transferred", detail: "Log forensics stays on the server" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Install CLI and run your first plan mode task", "Try /ide to open a file in VS Code mid-session", "Run &#45;&#45;remote on a staging server and scan the QR code", "Explore built-in agents: ask a debug question"]'
  :thisWeek='["Write .github/copilot-instructions.md for your repo", "Add copilot -p to one CI/CD pipeline for failure analysis", "Run a /fleet task across parallel workstreams", "Delegate a long task with &amp; and verify IDE stays free"]'
  :thisMonth='["Automate a repetitive GitHub workflow end-to-end", "Build a multi-step fleet pipeline for your project", "Try log forensics on a server with &#45;&#45;remote", "Create team-wide custom instructions and share them"]'
  footer="Run plan mode on a task you do daily &#8212; it shows exactly what the agent will do before acting."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Official Documentation", color: "cyan", items: [
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli", label: "About GitHub Copilot CLI", description: "Core concepts and capabilities" },
        { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/steer-remotely", label: "Remote Control Sessions", description: "Monitor and steer sessions from web and mobile" },
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-remote-access", label: "Remote Access Administration", description: "Administering remote access for Copilot Business/Enterprise" },
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet", label: "Running tasks in parallel with /fleet", description: "Parallel orchestration documentation" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli", label: "Use Copilot CLI", description: "Command syntax and workflows" },
        { href: "https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli", label: "Install Copilot CLI", description: "Setup for all platforms" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-instructions", label: "Custom instructions", description: "Repository-specific behavior configuration" }
    ] },
    { title: "Latest Features &amp; Community", color: "purple", items: [
        { href: "https://github.blog/changelog/2026-04-13-remote-control-cli-sessions-on-web-and-mobile-in-public-preview/", label: "Remote control CLI on web &amp; mobile", description: "April 2026 announcement &#8212; public preview" },
        { href: "https://github.blog/changelog/2026-01-21-github-copilot-cli-plan-before-you-build-steer-as-you-go/", label: "Plan Mode announcement", description: "Plan before you build &#8212; steer as you go" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server", label: "Add an MCP server", description: "Extending with external tools" },
        { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing", label: "Finding and installing plugins", description: "Plugin ecosystem and marketplaces" },
        { href: "https://github.com/github/copilot-cli", label: "Public repository", description: "Issue tracking and community discussions" },
        { href: "https://github.com/orgs/community/discussions/191814", label: "Community discussion", description: "Share your favorite use cases and locations" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="Thank You"
  subtitle="GitHub Copilot CLI: AI at the Point of Work"
  :cards="[
    { icon: '&#x1F3AF;', value: 'Plan First', detail: 'Shift+Tab before building', subdetail: '8 attempts &#8594; 2 with upfront planning' },
    { icon: '&#x1F310;', value: 'Start Anywhere', detail: '&#45;&#45;remote puts AI where the problem is', subdetail: 'Steer from phone, laptop, or browser' },
    { icon: '&#x1F680;', value: 'Resume Anywhere', detail: 'Sessions are durable work, not ephemeral chat', subdetail: 'The terminal was never the destination' },
  ]"
  prompt="Start anywhere. Steer anywhere. Resume anywhere."
/>

---
src: ./copilot-cli-reference.md
---
