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
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import ProblemSolutionOutcomeSlide from './components/ProblemSolutionOutcomeSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
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
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="Agent Debug Panel"
  title="When to Use Each Tool"
  :left='{
    header: "Agent Debug Panel",
    icon: "🎯",
    items: ["Real-time streaming", "Chart View visualization", "Config load audit", "Tool timing", "Session history"]
  }'
  :right='{
    header: "Chat Debug View",
    icon: "🔍",
    items: ["Deep response inspection", "Full system prompt", "Complete context", "Per-exchange details", "Static snapshots only"]
  }'
  :insight='{ icon: "💡", text: "Keep Agent Debug Panel open during dev sessions, switch to Chat Debug View for specific deep-dives." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Use Case: Custom Instructions Not Loading -->
<ProblemSolutionOutcomeSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="Agent Debug Panel"
  title="Real-World Impact: Configuration Errors"
  :problem='{
    header: "Problem",
    items: [
      { title: "Custom instructions silently ignored", detail: "Team wrote .github/copilot-instructions.md to enforce coding standards — Copilot generated code that violated them" },
      { title: "45 minutes of blind debugging", detail: "Developers had no way to find why instructions were not being applied" }
    ]
  }'
  :solution='{
    header: "Solution",
    items: [
      { title: "Opened Agent Debug Panel", detail: "Gear icon → View Agent Logs → Loaded Customizations section" },
      { title: "Discovered YAML syntax error on line 3", detail: "Missing colon after applyTo — file failed to load entirely" },
      { title: "Fixed syntax and verified green status", detail: "Confirmed file loading with clear error message and line number" }
    ]
  }'
  :outcome='{
    header: "Outcome",
    items: [
      { title: "4 minutes instead of 45", detail: "91% reduction in debug time — from blind searching to root cause" },
      { title: "Team saves ~1.4 hr/week", detail: "2 configuration errors per week × 41 minutes saved each" }
    ]
  }'
  :insight='{ icon: "💡", text: "Agent Debug Panel shows exactly which customization files loaded, which failed, and why — ending silent configuration failures." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

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
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🔍"
  pillLabel="Request Inspection"
  title="Thinking Tokens & Context Window"
  :left='{
    header: "Model Reasoning",
    icon: "🧠",
    items: [
      { title: "Thinking Tokens", detail: "Models like Claude and o-series show internal reasoning before generating responses" },
      { title: "What you see", detail: "Problem decomposition, tool selection logic, context evaluation, uncertainty signals" },
      { title: "Enable display", detail: "Settings: chat.renderThinking — collapsed (default), expanded (auto-show), or hidden" }
    ]
  }'
  :right='{
    header: "Context Management",
    icon: "📊",
    items: [
      { title: "Context Window Indicator (v1.110)", detail: "Visual percentage + token breakdown by category" },
      { title: "Health thresholds", detail: "<60% healthy · 60-80% monitor · >80% use /compact or start fresh" },
      { title: "/compact", detail: "Compress conversation history (95% → 42%)" },
      { title: "/fork", detail: "Branch conversation to explore alternatives without losing the main thread" }
    ]
  }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Use Case: Thinking Reveals Prompt Ambiguity -->
<ProblemSolutionOutcomeSlide
  :partNumber="2"
  pillIcon="🔍"
  pillLabel="Request Inspection"
  title="Real-World Impact: Prompt Debugging"
  :problem='{
    header: "Problem",
    items: [
      { title: "Wrong implementation from ambiguous prompt", detail: "Request for add caching produced Redis implementation when team used in-memory caching" },
      { title: "30 minutes of trial-and-error", detail: "Developer had no way to understand why Copilot chose the wrong approach" }
    ]
  }'
  :solution='{
    header: "Solution",
    items: [
      { title: "Enabled thinking token display", detail: "Settings: chat.renderThinking set to expanded" },
      { title: "Read model reasoning", detail: "Thinking showed: User mentioned caching — Redis is industry standard for distributed systems" },
      { title: "Identified prompt ambiguity", detail: "Prompt did not specify in-memory requirement — model made a reasonable default assumption" },
      { title: "Refined prompt", detail: "add in-memory caching using Map — correct result on first try" }
    ]
  }'
  :outcome='{
    header: "Outcome",
    items: [
      { title: "5 minutes vs 30 minutes", detail: "80% faster prompt debugging with evidence-based refinement" },
      { title: "Replaced guesswork with reasoning", detail: "Thinking tokens reveal why the model decided what it decided" }
    ]
  }'
  :insight='{ icon: "💡", text: "Thinking tokens reveal model reasoning — turning prompt debugging from guesswork into evidence-based refinement." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

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
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="⚙️"
  pillLabel="Config & Infrastructure"
  title="Configuration & Deep Debugging"
  :left='{
    header: "Diagnostics View",
    icon: "⚙️",
    items: [
      { title: "All active customization files", detail: "Custom agents, instructions, prompts, and skills with load status" },
      { title: "Error messages & line numbers", detail: "Exact failure point for YAML and configuration errors" },
      { title: "Application order", detail: "See which files apply and in what sequence" },
      "Access: Chat view → right-click → Diagnostics"
    ]
  }'
  :right='{
    header: "Extension Logs (Trace Mode)",
    icon: "📜",
    items: [
      { title: "Network requests & responses", detail: "Full request payloads and response data for connectivity issues" },
      { title: "Authentication status", detail: "Token validation, session state, proxy configuration" },
      { title: "Error stack traces & performance timing", detail: "Root cause details for infrastructure failures" },
      "Access: Developer: Set Log Level → Trace"
    ]
  }'
  :insight='{ icon: "🔍", text: "Agent not available? YAML error. Instructions ignored? Wrong location. Skills not triggering? Glob mismatch. Copilot not responding? Network/auth." }'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: MCP Servers & Network Diagnostics -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="⚙️"
  pillLabel="Config & Infrastructure"
  title="External Tools & Network"
  :left='{
    header: "MCP Server Management",
    icon: "🔌",
    items: [
      { title: "Status monitoring", detail: "Running / Stopped / Error — real-time server health" },
      { title: "Actions", detail: "Show Output, Restart, Stop for each configured MCP server" },
      "Command: MCP: List Servers"
    ]
  }'
  :right='{
    header: "Network Diagnostics",
    icon: "🌐",
    items: [
      { title: "Endpoint connectivity", detail: "Verify access to GitHub Copilot API endpoints" },
      { title: "Proxy & certificate validation", detail: "Identify firewall, VPN, and certificate issues" },
      { title: "Authentication tokens", detail: "Check token validity and session state" },
      "Command: GitHub Copilot: Collect Diagnostics"
    ]
  }'
  :insight='{ icon: "💡", text: "Real-world win: MCP server timeout raised from 5s to 15s over VPN boosted reliability from 60% to 99% — saving a team of 4 up to 1.5 hr/day." }'
  :progressDots='{ current: 2, total: 2, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

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
<FourCardGridSlide
  :partNumber="4"
  pillIcon="🔧"
  pillLabel="Troubleshooting Patterns"
  title="Systematic Diagnostic Workflows"
  :cards='[
    { icon: "1️⃣", title: "Copilot Ignores My Instructions", description: "Open Diagnostics → verify file loaded → open Chat Debug View → check instructions in context. Common: wrong location, YAML error, or truncated." },
    { icon: "2️⃣", title: "Wrong Files in Context", description: "Open Chat Debug View → expand context section → review actual files included. Common: @workspace unexpected, #file path wrong." },
    { icon: "3️⃣", title: "Tool Invocation Failed", description: "Open Chat Debug View → expand tool invocations → check error message. Common: MCP server down, auth failure, bad input schema." },
    { icon: "4️⃣", title: "Response Does Not Match Codebase", description: "Open Chat Debug View → check context sent → verify instructions mention patterns. Common: relevant files missing, context limit reached." }
  ]'
  :insight='{ icon: "🎯", text: "From black-box AI responses to inspectable, debuggable interactions — every AI interaction is observable and improvable." }'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

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
