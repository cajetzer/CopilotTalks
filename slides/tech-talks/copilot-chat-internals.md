---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Chat Internals: Debugging AI Interactions
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot Chat Internals
module: tech-talks/copilot-chat-internals
mdc: true
section: Copilot Tools
status: active
updated: 2026-04-10
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
title="Copilot Chat Internals"
subtitle="Debugging AI Interactions"
tagline="Transform AI debugging from guesswork into systematic investigation"
meta="Tech Talk · 40 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="Why didn't Copilot do what I expected—and how do I systematically debug it?"
subtext="The difference between it not working and knowing exactly why is understanding what context the model received."
highlight="DevTools for AI closes this gap."
:cards='[
  { icon: "🔍", title: "Developers Debugging Poor AI Responses", description: "Inspect the actual context sent to the model vs. what you expected it to see" },
  { icon: "⚙️", title: "Teams Authoring Custom Instructions", description: "Validate that instruction files are loading, applying, and taking effect correctly" },
  { icon: "🧩", title: "MCP Extension and Tool Authors", description: "Debug tool call sequences, request payloads, and server response behavior" },
  { title: "Black Box → Glass Box", description: "See every file, instruction, and tool call the model actually received" },
  { title: "Context Visibility", description: "Inspect open files, workspace instructions, and active MCP tool configurations" },
  { title: "Fast Iteration", description: "Diagnose and fix context issues in minutes, not debugging sessions of hours" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🎯", title: "Agent Debug Panel", subtitle: "Real-time event monitoring", blurb: "v1.110 flagship debugging tool", slide: 4 },
    { icon: "🔍", title: "Request Inspection", subtitle: "See what is sent, how models think", blurb: "Debug View + Thinking + Context", slide: 7 },
    { icon: "⚙️", title: "Config & Infrastructure", subtitle: "Validate customizations, debug tools", blurb: "Diagnostics + Logs + MCP", slide: 11 },
    { icon: "🔧", title: "Troubleshooting Patterns", subtitle: "Systematic diagnostic workflows", blurb: "Minutes to root cause, not hours", slide: 14 },
  ]'
/>

---

<!-- SLIDE: Part 1 — Agent Debug Panel -->

<SectionOpenerSlide
  :partNumber="1"
  title="Agent Debug Panel"
  subtitle="Real-time event monitoring with chart visualization"
  :cards='[
    { icon: "📊", title: "Live Event Stream", blurb: "Every chat event as it happens" },
    { icon: "🎨", title: "Chart View", blurb: "Visualize flow, timing, chains" },
    { icon: "✅", title: "Customization Audit", blurb: "Verify config file load status" },
  ]'
  :terminal='{ context: "VS Code 1.110 flagship debugging feature", detail: "your live dashboard for AI interactions" }'
/>

---

<!-- SLIDE: What Agent Debug Panel Shows -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Agent Debug Panel</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></span>
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Real-Time Event Visibility</div>
<div class="text-xs text-white/50">Watch every AI interaction unfold—no black boxes</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1 text-sm">📝 Chat Events</div>
<div class="text-xs text-gray-300">Every message, tool call, response with timestamps</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1 text-sm">🛠️ Tool Invocations</div>
<div class="text-xs text-gray-300">Live view with timing, success/fail status</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/30 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1 text-sm">📦 Loaded Customizations</div>
<div class="text-xs text-gray-300">Instructions, skills, agents—✅/❌ status</div>
</div>
</div>

<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/30 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1 text-sm">💬 Model Responses</div>
<div class="text-xs text-gray-300">Raw responses, including thinking tokens</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-pink-800/30 rounded-lg border border-pink-500/30">
<div class="font-bold text-pink-300 mb-1 text-sm">⚠️ Errors & Warnings</div>
<div class="text-xs text-gray-300">Immediate failure visibility with context</div>
</div>
<div class="p-3 bg-gradient-to-br from-rose-900/40 to-rose-800/30 rounded-lg border border-rose-500/30">
<div class="font-bold text-rose-300 mb-1 text-sm">🎨 Chart View Mode</div>
<div class="text-xs text-gray-300">Flow diagram—tool chains, timing, handoffs</div>
</div>
</div>
</div>

<div class="mt-4 grid grid-cols-3 gap-2 text-xs">
<div class="p-2 bg-cyan-600/80 rounded text-center text-white font-semibold">Cmd: Open Agent Debug Panel</div>
<div class="p-2 bg-blue-600/80 rounded text-center text-white font-semibold">Chat gear → View Agent Logs</div>
<div class="p-2 bg-indigo-600/80 rounded text-center text-white font-semibold">Click timestamp → filtered view</div>
</div>
</div>
</div>

---

<!-- SLIDE: Agent Debug Panel vs Chat Debug View -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Agent Debug Panel</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
<span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></span>
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">When to Use Each Tool</div>
<div class="text-xs text-white/50">Complementary debugging layers—monitoring vs deep inspection</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 rounded-xl border-2 border-cyan-500/30">
<div class="text-center mb-3">
<div class="text-2xl">🎯</div>
<div class="font-bold text-cyan-300">Agent Debug Panel</div>
</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-cyan-900/30 rounded">✅ Real-time streaming</div>
<div class="p-2 bg-cyan-900/30 rounded">✅ Chart View visualization</div>
<div class="p-2 bg-cyan-900/30 rounded">✅ Config load audit</div>
<div class="p-2 bg-cyan-900/30 rounded">✅ Tool timing</div>
<div class="p-2 bg-cyan-900/30 rounded">✅ Session history</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl border-2 border-blue-500/30">
<div class="text-center mb-3">
<div class="text-2xl">🔍</div>
<div class="font-bold text-blue-300">Chat Debug View</div>
</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-blue-900/30 rounded">✅ Deep response inspection</div>
<div class="p-2 bg-blue-900/30 rounded">✅ Full system prompt</div>
<div class="p-2 bg-blue-900/30 rounded">✅ Complete context</div>
<div class="p-2 bg-blue-900/30 rounded">✅ Per-exchange details</div>
<div class="p-2 bg-blue-900/30 rounded">❌ Static snapshots</div>
</div>
</div>
</div>

<div class="mt-4 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 text-center">
<div class="text-sm font-semibold text-green-300">Workflow: Keep Agent Debug Panel open during dev sessions, switch to Chat Debug View for specific deep-dives</div>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case: Custom Instructions Not Loading -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Agent Debug Panel</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
<span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></span>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Real-World Impact: Configuration Errors</div>
<div class="text-xs text-white/50">From 45 minutes of blind debugging to 4 minutes with evidence</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/30">
<div class="font-bold text-red-300 text-sm mb-1">❌ The Problem</div>
<div class="text-xs text-gray-300">Team wrote custom instructions in <code class="bg-gray-800 px-1">.github/copilot-instructions.md</code> to enforce coding standards. Copilot generated code that violated those standards. Developers spent 45 minutes debugging prompts.</div>
</div>

<div class="p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30">
<div class="font-bold text-green-300 text-sm mb-1">✅ The Solution</div>
<div class="text-xs text-gray-300">Opened Agent Debug Panel → Loaded Customizations section → discovered YAML frontmatter syntax error on line 3 (missing colon after <code class="bg-gray-800 px-1">applyTo</code>). File failed to load entirely.</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 text-sm mb-1">🔧 Implementation</div>
<div class="text-xs text-gray-300 space-y-1">
<div>1. Gear icon → View Agent Logs</div>
<div>2. Check "Loaded Customizations"</div>
<div>3. See error: "YAML parse line 3"</div>
<div>4. Fix syntax, verify ✅ status</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 text-sm mb-1">📊 Outcome</div>
<div class="text-xs text-gray-300 space-y-1">
<div><span class="text-green-400 font-bold">4 minutes</span> instead of 45</div>
<div><span class="text-green-400 font-bold">41 min savings</span> per error</div>
<div>Team average: 2/week</div>
<div><span class="text-cyan-400 font-bold">~1.4 hr/week saved</span></div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Request Inspection -->

<SectionOpenerSlide
  :partNumber="2"
  title="Request Inspection"
  subtitle="See what’s sent, understand model reasoning, manage context"
  :cards='[
    { icon: "🔍", title: "Chat Debug View", blurb: "Complete request/response breakdown" },
    { icon: "🧠", title: "Thinking Tokens", blurb: "Model reasoning visibility" },
    { icon: "📊", title: "Context Control", blurb: "/compact, /fork, window indicator" },
  ]'
  :terminal='{ context: "From \"why did it do that?\" to \"I see why it did that\"", detail: "evidence-based prompt refinement" }'
/>

---

<!-- SLIDE: Chat Debug View Pipeline -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Request Inspection</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></span>
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Chat Debug View: The Request Pipeline</div>
<div class="text-xs text-white/50">See every component from prompt to response</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1 text-sm">1. System Prompt</div>
<div class="text-xs text-gray-300">Base instructions that set up AI behavior—what makes Copilot "act like Copilot"</div>
</div>

<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1 text-sm">2. User Prompt & Context</div>
<div class="text-xs text-gray-300">Your request + files, instructions, agents, skills sent to the model</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1 text-sm">3. Tool Invocations</div>
<div class="text-xs text-gray-300">Which tools called, parameters, success/fail, response data</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1 text-sm">4. Model Response</div>
<div class="text-xs text-gray-300">Full response before formatting—raw model output</div>
</div>

<div class="mt-2 grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-blue-600/80 rounded text-center text-white font-semibold">Cmd: Show Chat Debug View</div>
<div class="p-2 bg-indigo-600/80 rounded text-center text-white font-semibold">Chat overflow menu → Show Debug</div>
</div>
</div>
</div>

---

<!-- SLIDE: Thinking Tokens & Context -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Request Inspection</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
<span class="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></span>
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Thinking Tokens & Context Window</div>
<div class="text-xs text-white/50">See how the model reasons, manage context space</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/30 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1 text-sm">🧠 Thinking Tokens</div>
<div class="text-xs text-gray-300 mb-2">Models like Claude, o-series show internal reasoning before generating responses</div>
<div class="text-xs text-indigo-200/70 space-y-1">
<div>• Problem decomposition</div>
<div>• Tool selection logic</div>
<div>• Context evaluation</div>
<div>• Uncertainty signals</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/30 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1 text-sm">⚙️ Enable Thinking Display</div>
<div class="text-xs text-gray-300">Setting: <code class="bg-gray-800 px-1">chat.renderThinking</code></div>
<div class="text-xs text-purple-200/70 mt-1 space-y-1">
<div>• "collapsed" (default)</div>
<div>• "expanded" (auto-show)</div>
<div>• "hidden" (suppress)</div>
</div>
</div>
</div>

<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1 text-sm">📊 Context Window Indicator (v1.110)</div>
<div class="text-xs text-gray-300 mb-2">Visual percentage + token breakdown by category</div>
<div class="text-xs text-cyan-200/70 space-y-1">
<div>&lt;60%: Healthy</div>
<div>60-80%: Monitor</div>
<div>&gt;80%: /compact or start fresh</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1 text-sm">🔧 Context Commands</div>
<div class="text-xs text-gray-300 space-y-1">
<div><code class="bg-gray-800 px-1">/compact</code> — Compress history (95% → 42%)</div>
<div><code class="bg-gray-800 px-1">/fork</code> — Branch conversation, explore alternatives</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case: Thinking Reveals Prompt Ambiguity -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Request Inspection</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
<span class="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></span>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Real-World Impact: Prompt Debugging</div>
<div class="text-xs text-white/50">From 30 minutes of trial-and-error to 5 minutes with model reasoning</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/30">
<div class="font-bold text-red-300 text-sm mb-1">❌ The Problem</div>
<div class="text-xs text-gray-300">Request for "add caching" produced incorrect Redis implementation when team used in-memory caching. Developer couldn't understand why Copilot chose wrong approach.</div>
</div>

<div class="p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30">
<div class="font-bold text-green-300 text-sm mb-1">✅ The Solution</div>
<div class="text-xs text-gray-300">Enabled thinking token display (<code class="bg-gray-800 px-1">chat.renderThinking: expanded</code>). Model reasoning showed: "User mentioned caching—Redis is industry standard for distributed systems." Realized prompt didn't specify in-memory requirement.</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 text-sm mb-1">🔧 Implementation</div>
<div class="text-xs text-gray-300 space-y-1">
<div>1. Settings → <code class="bg-gray-800 px-1">renderThinking</code> → "expanded"</div>
<div>2. Re-run original prompt</div>
<div>3. Read thinking tokens</div>
<div>4. Refine: "add in-memory caching using Map"</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 text-sm mb-1">📊 Outcome</div>
<div class="text-xs text-gray-300 space-y-1">
<div><span class="text-green-400 font-bold">5 minutes</span> with thinking</div>
<div>vs <span class="text-red-400">30 min</span> trial-and-error</div>
<div><span class="text-cyan-400 font-bold">80% faster</span> prompt debug</div>
<div>Evidence-based refinement</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Config & Infrastructure -->

<SectionOpenerSlide
  :partNumber="3"
  title="Config & Infrastructure"
  subtitle="Validate customizations, debug tools, troubleshoot infrastructure"
  :cards='[
    { icon: "⚙️", title: "Diagnostics View", blurb: "Config validation & load status" },
    { icon: "📜", title: "Extension Logs", blurb: "Network, auth, lifecycle events" },
    { icon: "🔌", title: "MCP Servers", blurb: "External tool management" },
  ]'
  :terminal='{ context: "From silent failures to clear root causes", detail: "infrastructure-level troubleshooting" }'
/>

---

<!-- SLIDE: Diagnostics View & Extension Logs -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Config & Infrastructure</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></span>
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Configuration & Deep Debugging</div>
<div class="text-xs text-white/50">Validate config files, troubleshoot network and auth</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/30 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1 text-sm">⚙️ Diagnostics View</div>
<div class="text-xs text-gray-300 mb-2">Verify custom agents, instructions, prompts, skills load successfully</div>
<div class="text-xs text-indigo-200/70 space-y-1">
<div>• All active customization files</div>
<div>• Load status (✅/❌)</div>
<div>• Error messages & line numbers</div>
<div>• Application order</div>
</div>
<div class="mt-2 text-xs bg-gray-900/50 p-2 rounded">Chat view → right-click → <span class="text-indigo-300 font-semibold">Diagnostics</span></div>
</div>
</div>

<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/30 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1 text-sm">📜 Extension Logs (Trace Mode)</div>
<div class="text-xs text-gray-300 mb-2">Deep troubleshooting for infrastructure issues</div>
<div class="text-xs text-purple-200/70 space-y-1">
<div>• Network requests/responses</div>
<div>• Authentication status</div>
<div>• Error stack traces</div>
<div>• Performance timing</div>
</div>
<div class="mt-2 text-xs bg-gray-900/50 p-2 rounded">Developer: Set Log Level → <span class="text-purple-300 font-semibold">Trace</span></div>
</div>
</div>
</div>

<div class="mt-3 grid grid-cols-4 gap-2 text-xs">
<div class="p-2 bg-gradient-to-r from-red-600/80 to-orange-600/80 rounded text-center text-white font-semibold">Agent not available → YAML error</div>
<div class="p-2 bg-gradient-to-r from-orange-600/80 to-amber-600/80 rounded text-center text-white font-semibold">Instructions ignored → Wrong location</div>
<div class="p-2 bg-gradient-to-r from-amber-600/80 to-yellow-600/80 rounded text-center text-white font-semibold">Skills not triggering → Glob mismatch</div>
<div class="p-2 bg-gradient-to-r from-yellow-600/80 to-green-600/80 rounded text-center text-white font-semibold">Copilot not responding → Network/auth</div>
</div>
</div>
</div>

---

<!-- SLIDE: MCP Servers & Network Diagnostics -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Config & Infrastructure</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
<span class="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></span>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">External Tools & Network</div>
<div class="text-xs text-white/50">Manage MCP servers, diagnose connectivity</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-gradient-to-br from-pink-900/40 to-pink-800/30 rounded-xl border border-pink-500/30">
<div class="font-bold text-pink-300 mb-2 text-sm">🔌 MCP Server Management</div>
<div class="text-xs text-gray-300 mb-2">MCP servers extend Copilot with external capabilities—databases, APIs, custom tools</div>
<div class="text-xs text-pink-200/70 space-y-1 mb-2">
<div><span class="text-white font-semibold">Status:</span> Running/Stopped/Error</div>
<div><span class="text-white font-semibold">Actions:</span> Show Output, Restart, Stop</div>
</div>
<div class="text-xs bg-gray-900/50 p-2 rounded">Cmd: <span class="text-pink-300 font-semibold">MCP: List Servers</span></div>
</div>

<div class="p-4 bg-gradient-to-br from-rose-900/40 to-rose-800/30 rounded-xl border border-rose-500/30">
<div class="font-bold text-rose-300 mb-2 text-sm">🌐 Network Diagnostics</div>
<div class="text-xs text-gray-300 mb-2">For firewall, VPN, proxy issues</div>
<div class="text-xs text-rose-200/70 space-y-1 mb-2">
<div>• Endpoint connectivity</div>
<div>• Proxy configuration</div>
<div>• Certificate validation</div>
<div>• Authentication tokens</div>
</div>
<div class="text-xs bg-gray-900/50 p-2 rounded">Cmd: <span class="text-rose-300 font-semibold">GitHub Copilot: Collect Diagnostics</span></div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
<div class="text-xs font-semibold text-indigo-300 mb-1">Real-World: MCP Server Timeout (3-5 hr/day savings)</div>
<div class="text-xs text-gray-300">Custom agent using database schema MCP server started failing intermittently. No error message—agent just returned generic code. MCP: List Servers → Show Output revealed connection timeout (5s) due to VPN latency. Increased timeout to 15s. Reliability: 60% → 99%. Saved 3-5 retries per query × 20 queries/day = <span class="text-green-400 font-bold">1-1.5 hr/day saved</span> for team of 4.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Troubleshooting Patterns -->

<SectionOpenerSlide
  :partNumber="4"
  title="Troubleshooting Patterns"
  subtitle="Systematic workflows for common AI debugging scenarios"
  :cards='[
    { icon: "📋", title: "Proven Workflows", blurb: "Step-by-step diagnostic patterns" },
    { icon: "⚡", title: "Fast Root Cause", blurb: "Minutes, not hours" },
    { icon: "🎯", title: "Evidence-Based", blurb: "No more guesswork" },
  ]'
  :terminal='{ context: "From reactive firefighting to systematic debugging", detail: "repeatable investigation processes" }'
/>

---

<!-- SLIDE: Common Troubleshooting Workflows -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Troubleshooting Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">1 of 1</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Systematic Diagnostic Workflows</div>
<div class="text-xs text-white/50">Four common scenarios with proven step-by-step patterns</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/30 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1 text-sm">1️⃣ "Copilot Ignores My Instructions"</div>
<div class="text-xs text-gray-300 space-y-1">
<div>1. Open Diagnostics (right-click Chat)</div>
<div>2. Verify file listed & loaded</div>
<div>3. Open Chat Debug View</div>
<div>4. Check instructions in context</div>
<div><span class="text-purple-200">Common:</span> Wrong location, YAML error, truncated</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-pink-900/40 to-pink-800/30 rounded-lg border border-pink-500/30">
<div class="font-bold text-pink-300 mb-1 text-sm">2️⃣ "Wrong Files in Context"</div>
<div class="text-xs text-gray-300 space-y-1">
<div>1. Open Chat Debug View</div>
<div>2. Expand context section</div>
<div>3. Review actual files included</div>
<div><span class="text-pink-200">Common:</span> @workspace unexpected, #file path wrong</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-rose-900/40 to-rose-800/30 rounded-lg border border-rose-500/30">
<div class="font-bold text-rose-300 mb-1 text-sm">3️⃣ "Tool Invocation Failed"</div>
<div class="text-xs text-gray-300 space-y-1">
<div>1. Open Chat Debug View</div>
<div>2. Expand tool invocations</div>
<div>3. Check error message</div>
<div><span class="text-rose-200">Common:</span> MCP server down, auth failure, bad input</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-fuchsia-900/40 to-fuchsia-800/30 rounded-lg border border-fuchsia-500/30">
<div class="font-bold text-fuchsia-300 mb-1 text-sm">4️⃣ "Response Doesn't Match Codebase"</div>
<div class="text-xs text-gray-300 space-y-1">
<div>1. Open Chat Debug View</div>
<div>2. Check context sent</div>
<div>3. Verify instructions mention patterns</div>
<div><span class="text-fuchsia-200">Common:</span> Relevant files missing, context limit reached</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 text-center">
<div class="text-sm font-semibold text-green-300">Mental Model Shift: From "AI responses are unpredictable black boxes" to "Every interaction is inspectable, debuggable, and improvable"</div>
</div>
</div>
</div>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="Black-Box Debugging to Observable Reasoning"
:leftItems='["Black-box reasoning", "Debugging: 45 min per issue", "Refinement: 30 min per cycle", "Trial-and-error debugging"]'
:rightItems='["Observable thinking tokens", "Debugging: 4 min per issue", "Refinement: 5 min per cycle", "Systematic investigation"]'
:metrics='[
  { value: "45 min → 4 min", detail: "Debugging acceleration" },
  { value: "30 min → 5 min", detail: "Refinement cycle" },
  { value: "1–2 hrs/week", detail: "Savings" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Open Agent Debug Panel (Developer: Open Agent Debug Panel)", "Enable thinking display in Settings: chat.renderThinking expanded", "Check Diagnostics: Right-click Chat → gear icon → Diagnostics", "Try /compact in a long conversation"]'
  :thisWeek='["Keep Agent Debug Panel open during dev sessions", "Monitor context window indicator before large context additions", "Validate customizations immediately after editing instruction files"]'
  :thisMonth='["Build debugging workflow: Agent Debug Panel → Chat Debug View → Diagnostics → Logs", "Practice /fork for parallel investigation branches", "Create team documentation for common diagnostic patterns"]'
  footer="VS Code provides complete AI observability. Mastering Agent Debug Panel, Chat Debug View, Thinking Tokens, and Diagnostics transforms debugging from expensive trial-and-error into systematic investigation — saving teams 1-2 hours/week per developer."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Primary Documentation", color: "cyan", items: [
        { href: "https://code.visualstudio.com/docs/copilot/chat/chat-debug-view", label: "Chat Debug View", description: "Complete guide to request inspection and debugging" },
        { href: "https://code.visualstudio.com/docs/copilot/troubleshooting", label: "Troubleshoot AI in VS Code", description: "Comprehensive troubleshooting reference" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/mcp-servers", label: "MCP Servers", description: "Configuring and debugging external tool servers" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/custom-instructions", label: "Custom Instructions", description: "Instructions configuration reference" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom Agents", description: "Building agents with focused tools and personas" },
        { href: "https://code.visualstudio.com/updates/v1_110", label: "VS Code v1.110", description: "Agent Debug Panel debut" },
        { href: "https://code.visualstudio.com/updates", label: "Latest Release Notes", description: "Keep up with new debugging and agent features" }
    ] },
    { title: "🎓 Related CopilotTraining Content", color: "purple", items: [
        { label: "Copilot Primitives", description: "Foundation: Learn context mechanisms before debugging them" },
        { label: "Copilot Hooks", description: "Governance: Use Debug View to inspect hook execution" },
        { label: "Custom Agents Workshop", description: "Application: Debug agent tool invocations" },
        { label: "Custom Instructions Workshop", description: "Configuration: Troubleshoot instruction load failures" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="Copilot Chat Internals: Debugging AI Interactions"
:cards="[
  { icon: '🔍', value: 'Agent Debug Panel', detail: 'Real-time event monitoring', subdetail: 'See every prompt, context file, and tool call' },
  { icon: '👁️', value: 'Complete Visibility', detail: 'Request, thinking, context, config', subdetail: 'From user message to LLM response' },
  { icon: '⏱️', value: 'Minutes, Not Hours', detail: 'Systematic troubleshooting', subdetail: 'No more guessing why AI behaved unexpectedly' },
]"
prompt="Questions? Open Agent Debug Panel today and see every AI interaction in real-time"
/>
