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
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
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
<BeforeAfterPanelsSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Terminal Sees Reality"
  title="Traditional vs Plan Mode Workflow"
  :before='{ header: "Traditional Workflow", items: ["Make request — describe what you need", "AI generates solution — assumes intent, picks one interpretation", "You review and fix — discover wrong assumptions", "Repeat ×8 — average attempts before success"] }'
  :after='{ header: "Plan Mode (Shift+Tab)", items: ["Make request — describe what you need", "AI asks questions — clarifies intent before acting", "Collaborate on plan — review strategy before any code", "Done in ~2 attempts — ambiguity caught before code"] }'
  :progressDots='{ current: 1, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
  insight="From trial-and-error to collaborative strategy — 8 debugging attempts → 2 with Plan Mode"
/>

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
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Terminal Sees Reality"
  title="Steer While the Agent Thinks"
  :left='{ header: "Enqueue & Redirect", items: ["📨 Enqueue Messages — send follow-ups while Copilot is still working on a task", "🚫 Reject, Then Redirect — deny a tool call then steer with a follow-up message"] }'
  :right='{ header: "Direction & Permissions", items: ["🔄 Change Direction — course-correct without starting over mid-task", "🎮 Permission Controls — pre-approve tools, paths, and URLs with --allow-tool"] }'
  :progressDots='{ current: 3, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
  insight="Enqueue messages, reject with explanation, change direction mid-flight — without restarting"
/>

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
<FourCardGridSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Terminal Sees Reality"
  title="Four Operating Modes"
  :cards='[
    { icon: "💬", title: "Interactive", description: "Conversational sessions for collaborative debugging and exploration — context maintained across commands" },
    { icon: "⚙️", title: "Programmatic", description: "Single-command execution for scripts and CI/CD — structured output, no conversation history" },
    { icon: "☁️", title: "Cloud Delegation", description: "Background execution frees terminal and IDE — PR created when agent finishes; best for 20+ min tasks" },
    { icon: "🌐", title: "Remote", description: "Start on any machine, steer from GitHub.com or Mobile via URL/QR code — session lives where the problem is" }
  ]'
  :progressDots='{ current: 5, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

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
<FourCardGridSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Scaling the Reach"
  title="Four Specialized Agents"
  :cards='[
    { icon: "🔍", title: "Explore Agent", description: "Fast codebase analysis without cluttering main context — returns focused answers under 300 words" },
    { icon: "⚙️", title: "Task Agent", description: "Execute commands with smart output filtering — brief summary on success, full output on failure" },
    { icon: "📋", title: "Plan Agent", description: "Analyze dependencies and create multi-step strategies you review before execution" },
    { icon: "🔎", title: "Code-Review Agent", description: "High signal-to-noise review — only surfaces bugs, security issues, and logic errors; never style" }
  ]'
  :progressDots='{ current: 1, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
  insight="Multiple agents can work simultaneously — three operations in the time of one"
/>

---

<!-- SLIDE: /fleet Fan-Out -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Scaling the Reach"
  title="/fleet: Explicit Parallel Orchestration"
  codePosition="left"
  :code='{ language: "bash", content: "$ copilot\n> /fleet implement all phases of\n  this auth refactor plan\n─────────────────────\n🤖 Orchestrator: 4 subtasks\n  → Subagent 1: Update user model\n  → Subagent 2: Migrate auth routes\n  → Subagent 3: Update test suite\n  → Subagent 4: Update docs\n✅ All subtasks complete." }'
  :features='[
    { icon: "⚡", title: "Speed", description: "Parallel subtasks complete in the time of the longest, not the sum" },
    { icon: "🔒", title: "Context Isolation", description: "Each subagent gets its own context window — no pollution between tasks" },
    { icon: "🎯", title: "Specialization", description: "Custom agents matched to subtasks — @test-writer, @security-reviewer" },
    { icon: "💰", title: "Model Selection", description: "Subagents default to low-cost models; override per-subtask for critical work" }
  ]'
  :progressDots='{ current: 2, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
  insight="Plan with Shift+Tab, then /fleet to execute — decompose, delegate, merge"
/>

---

<!-- SLIDE: Cloud Delegation -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Scaling the Reach"
  title="Cloud Delegation: Work Outlives Your Attention"
  codePosition="left"
  :code='{ language: "bash", content: "$ copilot\n> &\"Analyze entire codebase for\n  security vulnerabilities\"\n─────────────────────\n✅ Task delegated to cloud agent.\nCommits unstaged changes,\ncreates branch.\nPR arrives when complete.\n\n[Terminal is free for other work]" }'
  :features='[
    { icon: "⏱️", title: "Best for 20+ minute tasks", description: "Security audits, large refactors, test scaffolding, doc generation" },
    { icon: "🚀", title: "Fully independent execution", description: "Runs on GitHub infrastructure — both IDE and terminal stay free; PR created when done" },
    { icon: "⏳", title: "Removes the time distance", description: "Work continues while you sleep, eat, or meet — the session outlives your attention" }
  ]'
  :progressDots='{ current: 3, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

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
<ThreeColumnCardSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Scaling the Reach"
  title="Custom Agents, Plugins & /ide Bridge"
  :columns='[
    { icon: "🤖", title: "Custom Agents", description: "Specialized agents for your team workflows", items: ["~/.copilot/agents/", ".github/agents/", ".github-private/agents/"] },
    { icon: "🧩", title: "Plugins", description: "Community and team-created extensions from marketplaces", items: ["copilot plugin install", "copilot plugin marketplace"] },
    { icon: "💻", title: "/ide Bridge", description: "Connect to a running IDE — edits open as diffs, IDE shares diagnostics and selection", items: ["> /ide  # connect", "# auto-connects by default", "# diffs open in IDE for approval"] }
  ]'
  :progressDots='{ current: 5, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Mental Model Shift -->
<BeforeAfterPanelsSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Scaling the Reach"
  title="Mental Model Shift"
  :before='{ header: "🛑 Move Against", items: ["Pasting secrets into prompts — use env vars; credentials are prompt content", "--yolo outside sandboxed environments — blanket permissions = prod access if authenticated", "Skipping Plan Mode when rushing — most valuable precisely when in a hurry", "--remote + --yolo on production — always scope permissions; use Copilot Hooks"] }'
  :after='{ header: "✅ Move Toward", items: ["AI as thought partner for greenfield — 90 min library research → 15 min with scaffold", "Plan before you build (Shift+Tab) — 8 attempts → 2; catch ambiguity early", "Delegate with & — IDE and terminal stay completely free", "Sessions as durable work — start on workstation, steer from phone, review from laptop"] }'
  :progressDots='{ current: 6, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
  insight="The session is the unit of work, not the shell — start anywhere, steer anywhere, resume anywhere"
/>

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
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="🌐"
  pillLabel="Anywhere"
  title="Remote Sessions: The Last Distance Falls"
  codePosition="left"
  :code='{ language: "bash", content: "# SSH into production\n$ ssh ops@prod-server-3\n$ copilot --remote\n─────────────────────\n🔗 Remote session started.\nMonitor and steer from:\n  github.com/copilot/sessions/abc123\n  [QR CODE]\n─────────────────────\n# Or start mid-session:\n> /remote" }'
  :features='[
    { icon: "👀", title: "See what Copilot is doing", description: "Real-time visibility from phone, tablet, or any browser" },
    { icon: "🎮", title: "Approve and steer", description: "Approve permissions, send steering messages, inject new prompts from any device" },
    { icon: "🔄", title: "Resume anywhere", description: "copilot --resume from a completely different machine — context travels with the session" }
  ]'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Why --remote Matters -->
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="🌐"
  pillLabel="Anywhere"
  title="The Session Becomes Portable, Not the Machine"
  :columns='[
    { icon: "💾", title: "Work stays where it lives", description: "Logs never leave the production boundary. No scp, no rsync, no uploading to third-party tools. Compliance-friendly by default." },
    { icon: "🏃", title: "Momentum survives context changes", description: "Walking to a meeting, switching devices, paged at 2 AM — the session is continuous. You do not restart; you reconnect." },
    { icon: "📱", title: "Devices are interchangeable viewports", description: "Your laptop, phone, and tablet all connect to the same durable AI work session. The session is the entity; devices just display it." }
  ]'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
  insight="SSH moves your keystrokes. --remote moves a reasoning session."
/>

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
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="🚀"
  pillLabel="Real-World Patterns"
  title="Log Forensics Without Data Transfer"
  codePosition="left"
  :code='{ language: "bash", content: "# On the server where logs live\n$ ssh analytics@log-server\n$ copilot --remote\n─────────────────────\n> \"Analyze access logs from the\n  last 24 hours. Find top IPs\n  with 401s on /api/auth.\n  Check for credential stuffing.\"\n─────────────────────\n[runs: grep, awk, sort, uniq]\nFound: 3 IPs with >10K attempts.\nPattern: sequential usernames.\nFix: Block at WAF." }'
  :features='[
    { icon: "🔒", title: "Logs never leave the machine", description: "No scp, no rsync, no uploading to third-party tools — PII stays in the production boundary" },
    { icon: "⚡", title: "Speed at scale", description: "Analyzing locally is orders of magnitude faster than transferring 12GB — some logs are too big to download" },
    { icon: "🧠", title: "AI reasons, not just greps", description: "Detects patterns like credential stuffing and sequential usernames that grep alone would miss" }
  ]'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Infra Patrol & Multi-Machine -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="🚀"
  pillLabel="Real-World Patterns"
  title="Infrastructure Patrol & Multi-Machine Orchestration"
  :left='{ header: "🛡️ Persistent Infra Patrol", items: ["Start with: tmux new -s copilot-patrol && copilot --remote --allow-tool shell(kubectl)", "Prompt: Monitor K8s cluster, check pod health every 5 min, alert if abnormal", "Monitoring says CPU at 92% — AI patrol says why and proposes a fix"] }'
  :right='{ header: "🌐 Multi-Machine Orchestration", items: ["Open copilot --remote on prod-db-1, prod-api-3, and prod-worker-7 simultaneously", "Single prompt: check disk, validate SSL, compare deployed versions", "Results merged into one report — your browser becomes a console for distributed AI ops"] }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
  insight="Persistent monitoring that reasons — not just checks health, but investigates anomalies"
/>

---

<!-- SLIDE: GitHub.com Integration -->
<FourCardGridSlide
  :partNumber="4"
  pillIcon="🚀"
  pillLabel="Real-World Patterns"
  title="GitHub.com from Your Terminal"
  :cards='[
    { icon: "📋", title: "Issues", description: "List open issues assigned to you, start working on one, or raise an issue — all from the terminal" },
    { icon: "🔄", title: "Pull Requests", description: "List open PRs, check changes in a PR, merge all open PRs — without context-switching to the browser" },
    { icon: "⚙️", title: "Actions Workflows", description: "Create a workflow that runs eslint on PRs, push and open a PR — described in English, executed by Copilot" },
    { icon: "💡", title: "Key Insight", description: "GitHub.com becomes an extension of your terminal — describe a change in English, end up with a PR on GitHub.com" }
  ]'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
  insight="The gap between terminal work and GitHub workflows disappears — describe once, ship everywhere"
/>

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
