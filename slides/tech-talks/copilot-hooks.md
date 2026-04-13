---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot Hooks
  Programmable governance and lifecycle control for AI agent workflows
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot Hooks - Governance & Compliance
module: tech-talks/copilot-hooks
mdc: true
status: active
updated: 2026-02-11
---

<script setup>
import TitleSlide from '../components/TitleSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="GitHub Copilot Hooks"
subtitle="Programmable Governance for Agent Workflows"
tagline="Real-time control and compliance at every lifecycle moment"
meta="Tech Talk · 45 minutes"
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
<div class="text-3xl font-semibold mb-4">"How do I govern AI agent workflows without blocking their velocity?"</div>
<div class="text-xl opacity-90 mt-6">Security needs prevention. Compliance needs audit trails. Quality needs enforcement. <span class="text-cyan-300 font-semibold">Hooks intercept agent actions in real-time without adding manual gates.</span></div>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 rounded-lg border border-cyan-500/20 text-center">
<div class="text-cyan-300 font-bold">Autonomous Ops</div>
<div class="opacity-70 mt-1">Files, commands, APIs</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-lg border border-blue-500/20 text-center">
<div class="text-blue-300 font-bold">Compliance Needs</div>
<div class="opacity-70 mt-1">SOC 2, HIPAA, PCI-DSS</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 rounded-lg border border-indigo-500/20 text-center">
<div class="text-indigo-300 font-bold">Real-Time Enforcement</div>
<div class="opacity-70 mt-1">Prevent, don't detect</div>
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
<div class="grid grid-cols-2 gap-6 mt-2 max-w-4xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">🔄</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Lifecycle Control</div>
<div class="text-sm text-gray-300 mt-1">8 hook events for governance</div>
<div class="text-xs text-cyan-400/70 mt-2">SessionStart, PreToolUse, PostToolUse, SubagentStart, Stop, and more</div>
</div>
</div>
<div @click="$nav.go(8)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">🛡️</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Preventive Enforcement</div>
<div class="text-sm text-gray-300 mt-1">PreToolUse power</div>
<div class="text-xs text-blue-400/70 mt-2">Deny operations before execution, modify inputs, require approval</div>
</div>
</div>
<div @click="$nav.go(12)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">📋</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Observability & Audit</div>
<div class="text-sm text-gray-300 mt-1">Complete lifecycle logging</div>
<div class="text-xs text-indigo-400/70 mt-2">JSON Lines format, structured queries, compliance evidence</div>
</div>
</div>
<div @click="$nav.go(16)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🏢</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Real-World Patterns</div>
<div class="text-sm text-gray-300 mt-1">HIPAA, SOC 2, quality gates</div>
<div class="text-xs text-purple-400/70 mt-2">Multi-layer security, context injection, compliance trails</div>
</div>
</div>
</div>

<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Lifecycle Control -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Lifecycle Control</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">8 hook events for governance</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-cyan-300 font-semibold">8 Lifecycle Events</div>
<div class="text-xs opacity-70 mt-1">Session, prompt, tool, subagent, compaction, stop</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-blue-300 font-semibold">Synchronous Execution</div>
<div class="text-xs opacity-70 mt-1">Agents wait for hook completion — fast is critical</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📝</div>
<div class="text-indigo-300 font-semibold">JSON I/O</div>
<div class="text-xs opacity-70 mt-1">Structured context in, decisions out via stdin/stdout</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Control points at every lifecycle moment</span><br />
<span class="text-cyan-300 mt-1 block">↳ governance without velocity loss</span>
</div>
</div>
</div>

---

<!-- SLIDE: The 8 Lifecycle Events -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Lifecycle Control</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">8 Hook Events — When Each Fires</div>
<div class="text-xs text-white/50">Hooks execute at specific moments in the agent lifecycle</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">SessionStart</div>
<div class="opacity-80">First prompt of new session — initialize resources, inject context</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">UserPromptSubmit</div>
<div class="opacity-80">User submits prompt — audit requests, track patterns</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">PreToolUse ⚡</div>
<div class="opacity-80">Before tool execution — deny, modify, or approve operations</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">PostToolUse</div>
<div class="opacity-80">After tool completes — log results, run formatters, inject context</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">PreCompact</div>
<div class="opacity-80">Before context compaction — export important state before truncation</div>
</div>
<div class="p-2 bg-gradient-to-br from-rose-900/30 to-rose-800/20 rounded-lg border border-rose-500/30">
<div class="font-semibold text-rose-300 mb-1">SubagentStart</div>
<div class="opacity-80">Subagent spawns — track nested usage, inject guidelines</div>
</div>
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">SubagentStop</div>
<div class="opacity-80">Subagent completes — aggregate results, cleanup resources</div>
</div>
<div class="p-2 bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-lg border border-orange-500/30">
<div class="font-semibold text-orange-300 mb-1">Stop</div>
<div class="opacity-80">Session ends — generate reports, enforce completion requirements</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30 text-xs">
<span class="text-cyan-300 font-semibold">Key insight:</span> PreToolUse is the only hook that can deny operations. Others observe, log, or inject context.
</div>
</div>
</div>

---

<!-- SLIDE: Hook Configuration Format -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Lifecycle Control</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Hook Configuration</div>
<div class="text-xs text-white/50">JSON files in .github/hooks/*.json — workspace hooks take precedence</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<pre class="overflow-y-auto max-h-48 text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg p-2"><code class="language-json">{
  "hooks": {
    "PreToolUse": [
      {
        "type": "command",
        "command": "./scripts/validate-tool.sh",
        "timeout": 15
      }
    ],
    "PostToolUse": [
      {
        "type": "command",
        "command": "npx prettier --write \"$TOOL_INPUT_FILE_PATH\""
      }
    ]
  }
}</code></pre>

<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Configuration Locations</div>
<div class="space-y-1 opacity-80">
<div>• <code class="text-xs">.github/hooks/*.json</code> — Project-specific</div>
<div>• <code class="text-xs">~/.claude/settings.json</code> — Personal</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">Platform Overrides</div>
<div class="space-y-1 opacity-80">
<div>• <code class="text-xs">windows</code> — PowerShell scripts</div>
<div>• <code class="text-xs">linux</code> / <code class="text-xs">osx</code> — Bash scripts</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Execution Flow -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Lifecycle Control</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Hook Execution Flow</div>
<div class="text-xs text-white/50">Synchronous, JSON-based control loop</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="flex items-center justify-center gap-2 flex-wrap">
<div class="p-2 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">🎯</div>
<div class="text-xs font-semibold text-cyan-300">Event Fires</div>
<div class="text-xs opacity-70">Tool request</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-2 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">🔍</div>
<div class="text-xs font-semibold text-blue-300">Discover</div>
<div class="text-xs opacity-70">Read configs</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">📤</div>
<div class="text-xs font-semibold text-indigo-300">Invoke</div>
<div class="text-xs opacity-70">Spawn shell</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-2 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">📥</div>
<div class="text-xs font-semibold text-purple-300">Context</div>
<div class="text-xs opacity-70">Write JSON</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-2 bg-gradient-to-br from-pink-900/40 to-pink-800/40 rounded-lg border border-pink-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">⏳</div>
<div class="text-xs font-semibold text-pink-300">Wait</div>
<div class="text-xs opacity-70">Up to timeout</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-2 bg-gradient-to-br from-rose-900/40 to-rose-800/40 rounded-lg border border-rose-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">✅</div>
<div class="text-xs font-semibold text-rose-300">Decision</div>
<div class="text-xs opacity-70">Parse output</div>
</div>
</div>

<div class="mt-3 grid grid-cols-3 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="font-semibold text-emerald-300 mb-1">Exit 0</div>
<div class="opacity-80">Success — parse stdout as JSON</div>
</div>
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">Exit 2</div>
<div class="opacity-80">Blocking error — stop processing</div>
</div>
<div class="p-2 bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-lg border border-yellow-500/30">
<div class="font-semibold text-yellow-300 mb-1">Other</div>
<div class="opacity-80">Warning — show to user, continue</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Performance & Timing -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Lifecycle Control</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Performance Considerations</div>
<div class="text-xs text-white/50">Hooks run synchronously — keep them fast to avoid degrading responsiveness</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Target Execution Times</div>
<div class="space-y-1 opacity-80">
<div>• Security checks / logging: <span class="text-cyan-400">&lt;2s</span></div>
<div>• Linting / validation: <span class="text-cyan-400">&lt;5s</span></div>
<div>• External API calls: <span class="text-cyan-400">&lt;30s</span> (use timeout override)</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">Performance Patterns</div>
<div class="space-y-1 opacity-80">
<div>• Cache expensive computations (regex, policy lookups)</div>
<div>• Use asynchronous logging (append to file)</div>
<div>• Offload slow work to background jobs</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-lg border border-amber-500/30 text-xs">
<div class="font-semibold text-amber-300 mb-1">⚡ Why Speed Matters</div>
<div class="opacity-80">Agent waits for hook completion. A 10-second hook on every tool use = 50 seconds of waiting across 5 tools. Keep it under 2 seconds per hook for seamless experience.</div>
</div>
<div class="grid grid-cols-2 gap-2 text-xs mt-2">
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">❌ Common Pitfalls</div>
<div class="space-y-1 opacity-80">
<div>• Network calls without timeout (blocks indefinitely)</div>
<div>• Unoptimized regexes on large files</div>
<div>• Synchronous file I/O without batching</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-lg border border-green-500/30">
<div class="font-semibold text-green-300 mb-1">✅ Quick Wins</div>
<div class="space-y-1 opacity-80">
<div>• Add hook execution timing logs</div>
<div>• Use hook <span class="text-green-400 font-mono">timeout</span> field (default 30s)</div>
<div>• Profile with <span class="text-green-400 font-mono">--debug-hooks</span> flag</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Preventive Enforcement -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Preventive Enforcement</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">PreToolUse is the only hook that can deny operations</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🛡️</div>
<div class="text-blue-300 font-semibold">Block Before Execution</div>
<div class="text-xs opacity-70 mt-1">Deny dangerous operations with permissionDecision: deny</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">✏️</div>
<div class="text-indigo-300 font-semibold">Modify Inputs</div>
<div class="text-xs opacity-70 mt-1">Enforce safe defaults via updatedInput</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🤝</div>
<div class="text-purple-300 font-semibold">Require Approval</div>
<div class="text-xs opacity-70 mt-1">Use permissionDecision: ask for human judgment</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Other hooks observe — PreToolUse controls</span><br />
<span class="text-blue-300 mt-1 block">↳ the only gate for real-time prevention</span>
</div>
</div>
</div>

---

<!-- SLIDE: Security Check Implementation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Preventive Enforcement</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Security Check Script</div>
<div class="text-xs text-white/50">Block dangerous operations before execution</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div v-pre class="overflow-y-auto max-h-48 text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg p-2 font-mono">
<span class="text-blue-300">#!/bin/bash</span><br />
<span class="text-gray-400">INPUT=$(cat)</span><br />
<span class="text-gray-400">TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')</span><br />
<span class="text-gray-400">COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')</span><br />
<br />
<span class="text-gray-600"># Block dangerous delete operations</span><br />
<span class="text-gray-400">if echo "$COMMAND" | grep -qE 'rm -rf /|del /s /q|format'; then</span><br />
<span class="text-yellow-400">  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Destructive operation blocked"}}'</span><br />
<span class="text-gray-400">  exit 0</span><br />
<span class="text-gray-400">fi</span><br />
<br />
<span class="text-gray-600"># Block privilege escalation</span><br />
<span class="text-gray-400">if echo "$COMMAND" | grep -qE '^sudo |^runas '; then</span><br />
<span class="text-yellow-400">  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Privilege escalation not allowed"}}'</span><br />
<span class="text-gray-400">  exit 0</span><br />
<span class="text-gray-400">fi</span><br />
<br />
<span class="text-yellow-400">echo '{"continue":true}'</span><br />
<span class="text-gray-400">exit 0</span>
</div>

<div class="p-2 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-lg border border-blue-500/30 text-xs">
<span class="text-blue-300 font-semibold">Key principle:</span> Deny by default. Hooks should block operations unless explicitly approved. This reduces attack surface for policy bypass.
</div>
</div>
</div>

---

<!-- SLIDE: Permission Decisions -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Preventive Enforcement</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Permission Decisions</div>
<div class="text-xs text-white/50">Three control modes for PreToolUse</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-3 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="text-xl mb-1">✅</div>
<div class="font-semibold text-emerald-300 mb-1">allow</div>
<div class="opacity-80">Auto-approve execution — operation proceeds immediately</div>
</div>
<div class="p-2 bg-gradient-to-br from-amber-900/30 to-amber-800/20 rounded-lg border border-amber-500/30">
<div class="text-xl mb-1">🤔</div>
<div class="font-semibold text-amber-300 mb-1">ask</div>
<div class="opacity-80">Require user confirmation — safer than auto-allow for sensitive operations</div>
</div>
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-xl mb-1">🛑</div>
<div class="font-semibold text-red-300 mb-1">deny</div>
<div class="opacity-80">Block execution — operation is rejected immediately</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30 text-xs">
<div class="font-semibold text-blue-300 mb-1">Priority When Multiple Hooks Run</div>
<div class="opacity-80">1. <span class="text-red-300">deny</span> (most restrictive) → 2. <span class="text-amber-300">ask</span> → 3. <span class="text-emerald-300">allow</span> (least restrictive)</div>
</div>

<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">updatedInput</div>
<div class="opacity-80">Modify tool parameters to enforce safe defaults (e.g., add --dry-run flag)</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">additionalContext</div>
<div class="opacity-80">Inject context into conversation (e.g., "Modified to dry-run mode per policy")</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: File Path & Environment Restrictions -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Preventive Enforcement</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Path & Environment Policies</div>
<div class="text-xs text-white/50">Restrict operations by directory and environment</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">File Path Restrictions</div>
<pre class="text-xs opacity-80 mt-1 overflow-x-auto"><code>if [[ ! "$PATH_ARG" =~ ^(src/|test/|docs/) ]]; then
  deny "Only edit src/, test/, docs/"
fi</code></pre>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">Environment-Aware Policies</div>
<pre class="text-xs opacity-80 mt-1 overflow-x-auto"><code>if [[ "$CWD" =~ /production/ ]]; then
  deny "Production requires deployment"
fi</code></pre>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30 text-xs">
<div class="font-semibold text-purple-300 mb-1">Multi-Environment Example</div>
<div class="space-y-1 opacity-80">
<div>• <span class="text-red-300">Production:</span> Block all writes — require manual deployment process</div>
<div>• <span class="text-amber-300">Staging:</span> Ask for approval on destructive operations (rm, delete, drop)</div>
<div>• <span class="text-emerald-300">Development:</span> Permissive — allow all operations</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Context Injection -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Preventive Enforcement</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Context Injection</div>
<div class="text-xs text-white/50">SessionStart and SubagentStart can inject project-specific information</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div v-pre class="overflow-y-auto max-h-48 text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg p-2 font-mono">
<span class="text-blue-300">#!/bin/bash</span><br />
<span class="text-gray-600"># .github/hooks/scripts/inject-context.sh</span><br />
<br />
<span class="text-gray-400">PROJECT=$(cat package.json 2>/dev/null | jq -r '.name + " v" + .version')</span><br />
<span class="text-gray-400">BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")</span><br />
<br />
<span class="text-gray-400">cat &lt;&lt;EOF</span><br />
<span class="text-yellow-400">&#123;</span><br />
<span class="text-yellow-400">  "hookSpecificOutput": &#123;</span><br />
<span class="text-yellow-400">    "hookEventName": "SessionStart",</span><br />
<span class="text-yellow-400">    "additionalContext": "Project: $PROJECT | Branch: $BRANCH | Node: $(node -v)"</span><br />
<span class="text-yellow-400">  &#125;</span><br />
<span class="text-yellow-400">&#125;</span><br />
<span class="text-gray-400">EOF</span>
</div>

<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">Use Cases</div>
<div class="space-y-1 opacity-80">
<div>• Project version & branch information</div>
<div>• Environment variables & API keys</div>
<div>• Team-specific guidelines</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">Hooks That Support It</div>
<div class="space-y-1 opacity-80">
<div>• <span class="text-cyan-300">SessionStart</span> — Session initialization</div>
<div>• <span class="text-blue-300">SubagentStart</span> — Subagent guidelines</div>
<div>• <span class="text-indigo-300">PreToolUse</span> — Tool context</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Observability & Audit -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">Observability & Audit</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Complete lifecycle logging for compliance and debugging</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📋</div>
<div class="text-indigo-300 font-semibold">JSON Lines Format</div>
<div class="text-xs opacity-70 mt-1">One JSON object per line — direct querying with jq</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔍</div>
<div class="text-purple-300 font-semibold">Complete Trails</div>
<div class="text-xs opacity-70 mt-1">Log all 8 lifecycle events for 100% coverage</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">📊</div>
<div class="text-pink-300 font-semibold">SQL-Like Queries</div>
<div class="text-xs opacity-70 mt-1">Filter, aggregate, export to CSV or databases</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Audit from 60-70% manual → 100% automated</span><br />
<span class="text-indigo-300 mt-1 block">↳ 2-3 hours → 5 minutes per audit request</span>
</div>
</div>
</div>

---

<!-- SLIDE: JSON Lines Logging -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Observability & Audit</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Structured Logging with JSON Lines</div>
<div class="text-xs text-white/50">One JSON object per line — append-safe, query-friendly format</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div v-pre class="overflow-y-auto max-h-48 text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg p-2 font-mono">
<span class="text-blue-300">#!/bin/bash</span><br />
<span class="text-gray-600"># Log tool usage</span><br />
<span class="text-gray-400">INPUT=$(cat)</span><br />
<span class="text-gray-400">LOG_FILE="logs/audit.jsonl"</span><br />
<span class="text-gray-400">mkdir -p logs</span><br />
<br />
<span class="text-yellow-400">echo "$INPUT" | jq -c '. + &#123;event: "PostToolUse", loggedAt: (now | todate)&#125;' >> "$LOG_FILE"</span>
</div>

<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">Why JSON Lines?</div>
<div class="space-y-1 opacity-80">
<div>• <span class="text-cyan-300">Direct querying:</span> Use jq for SQL-like filtering</div>
<div>• <span class="text-blue-300">Append safety:</span> Concurrent writes don't corrupt</div>
<div>• <span class="text-indigo-300">Tool compatibility:</span> Import to Elasticsearch, Datadog, SQLite</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">Example Queries</div>
<div class="space-y-1 opacity-80 font-mono">
<div>jq -r '.tool_name' audit.jsonl | sort | uniq -c</div>
<div>jq 'select(.permissionDecision == "deny")' audit.jsonl</div>
<div>jq -r '[.timestamp, .tool_name] | @csv' audit.jsonl</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Complete Audit Configuration -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Observability & Audit</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Complete Audit Trail</div>
<div class="text-xs text-white/50">Wire up all 8 lifecycle hooks for 100% observability</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<pre class="overflow-y-auto max-h-48 text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg p-2"><code class="language-json">{
  "hooks": {
    "SessionStart": [{"type": "command", "command": "./scripts/log-session-start.sh"}],
    "UserPromptSubmit": [{"type": "command", "command": "./scripts/log-prompt.sh"}],
    "PreToolUse": [{"type": "command", "command": "./scripts/log-tool-pre.sh"}],
    "PostToolUse": [{"type": "command", "command": "./scripts/log-tool-post.sh"}],
    "PreCompact": [{"type": "command", "command": "./scripts/log-pre-compact.sh"}],
    "SubagentStart": [{"type": "command", "command": "./scripts/log-subagent-start.sh"}],
    "SubagentStop": [{"type": "command", "command": "./scripts/log-subagent-stop.sh"}],
    "Stop": [{"type": "command", "command": "./scripts/log-session-end.sh"}]
  }
}</code></pre>

<div class="p-2 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30 text-xs">
<span class="text-indigo-300 font-semibold">Example log output:</span> Each line is a complete JSON object — session start, prompt submission, tool executions, subagent spawns, session end. Query with jq: <code class="text-xs">cat logs/audit.jsonl | jq 'select(.event == "PreToolUse" and .permissionDecision == "deny")'</code>
</div>
</div>
</div>

---

<!-- SLIDE: Querying Audit Logs -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Observability & Audit</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Querying Audit Logs</div>
<div class="text-xs text-white/50">SQL-like filtering with jq — no database required, 100% queryable</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">📊 Count tool usage</div>
<pre class="text-xs opacity-80 mt-1 overflow-x-auto"><code>cat logs/audit.jsonl | jq -r '.tool_name // empty' | sort | uniq -c | sort -rn</code></pre>
<div class="text-xs opacity-60 mt-1">Top tools per session/user/time period</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">🚫 All denied operations</div>
<pre class="text-xs opacity-80 mt-1 overflow-x-auto"><code>cat logs/audit.jsonl | jq 'select(.permissionDecision == "deny")' | jq -r '.reason'</code></pre>
<div class="text-xs opacity-60 mt-1">Why operations were blocked; investigate patterns</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">📈 Export for reports</div>
<pre class="text-xs opacity-80 mt-1 overflow-x-auto"><code>cat logs/audit.jsonl | jq -r '[.timestamp, .tool_name, .response] | @csv' > report.csv</code></pre>
<div class="text-xs opacity-60 mt-1">Compliance reports, dashboards, trend analysis</div>
</div>
<div class="p-2 bg-gradient-to-br from-rose-900/30 to-rose-800/20 rounded-lg border border-rose-500/30">
<div class="font-semibold text-rose-300 mb-1">🤖 Subagent lifecycle</div>
<pre class="text-xs opacity-80 mt-1 overflow-x-auto"><code>jq 'select(.event | IN("SubagentStart","SubagentStop"))' audit.jsonl</code></pre>
<div class="text-xs opacity-60 mt-1">Subagent execution time, spawn count, tool usage per agent</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30 text-xs">
<span class="text-indigo-300 font-semibold">Zero Infrastructure:</span> jq runs on your laptop. No log aggregation service, no vendor lock-in. Grep that file from 2022 and answer compliance questions.
</div>
</div>
</div>

---

<!-- SLIDE: Integration Patterns -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Observability & Audit</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">External System Integration</div>
<div class="text-xs text-white/50">Connect hooks to Slack, PagerDuty, Datadog, Jira, databases</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-xl mb-1">💬</div>
<div class="font-semibold text-indigo-300 mb-1">Slack Notifications</div>
<div class="opacity-80">Send alerts on security violations with violation details and session context</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="text-xl mb-1">📟</div>
<div class="font-semibold text-purple-300 mb-1">PagerDuty Alerts</div>
<div class="opacity-80">Trigger on-call alerts for production security violations</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="text-xl mb-1">📊</div>
<div class="font-semibold text-pink-300 mb-1">Datadog / New Relic</div>
<div class="opacity-80">Send performance metrics via StatsD protocol for real-time dashboards</div>
</div>
<div class="p-2 bg-gradient-to-br from-rose-900/30 to-rose-800/20 rounded-lg border border-rose-500/30">
<div class="text-xl mb-1">🎫</div>
<div class="font-semibold text-rose-300 mb-1">Jira / ServiceNow</div>
<div class="opacity-80">Create incidents for blocked dangerous operations via REST API</div>
</div>
</div>

<div class="p-2 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30 text-xs">
<span class="text-indigo-300 font-semibold">Pattern:</span> Hooks execute curl commands with JSON payloads. Keep them fast (<5s) by offloading slow API calls to background jobs triggered by the hook.
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Real-World Patterns -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Real-World Patterns</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Proven implementations for security, compliance, and quality</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🏥</div>
<div class="text-purple-300 font-semibold">HIPAA Compliance</div>
<div class="text-xs opacity-70 mt-1">Complete audit trail: 2-3 hours → 5 minutes per audit</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-pink-300 font-semibold">SOC 2 Enforcement</div>
<div class="text-xs opacity-70 mt-1">Preventive controls: 3 incidents/year → 0</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">✨</div>
<div class="text-rose-300 font-semibold">Quality Gates</div>
<div class="text-xs opacity-70 mt-1">Rework time: 7.5 hours/sprint → 0</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Multi-layer security + context injection + compliance trails</span><br />
<span class="text-purple-300 mt-1 block">↳ governance that scales</span>
</div>
</div>
</div>

---

<!-- SLIDE: HIPAA Compliance Audit Trail -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">� Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Use Case: HIPAA Compliance Audit Trail</div>
<div class="text-xs text-white/50">Healthcare — agent-generated code changes must be 100% auditable for 7-year retention</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-center mb-1">
<div class="text-xl">❌</div>
<div class="font-bold text-red-300">Before Hooks</div>
</div>
<div class="space-y-1 opacity-80">
<div>⏱️ <strong>Audit time:</strong> 2-3 hours manual</div>
<div>📊 <strong>Coverage:</strong> 60-70% of changes</div>
<div>🔍 <strong>Query:</strong> Manual grep/awk</div>
<div>💾 <strong>Retention:</strong> Manual archival</div>
<div>❓ <strong>Auditor Q:</strong> "Who changed what, when?" → Manual investigation</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="text-center mb-1">
<div class="text-xl">✅</div>
<div class="font-bold text-emerald-300">With Hooks</div>
</div>
<div class="space-y-1 opacity-80">
<div>⚡ <strong>Audit time:</strong> 5 minutes automated</div>
<div>📊 <strong>Coverage:</strong> 100% (all 8 events)</div>
<div>🔍 <strong>Query:</strong> SQL-like jq filtering</div>
<div>💾 <strong>Retention:</strong> Automatic S3 archival</div>
<div>✓ <strong>Auditor Q:</strong> Single jq query → instant answer</div>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-2 mt-2 text-xs">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">🔗 Hook Setup</div>
<div class="opacity-80">All 8 hooks append to <code>logs/audit.jsonl</code>. SessionStart logs user+branch, Stop hook pushes to S3.</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">📋 Sample Query</div>
<div class="opacity-80 font-mono">jq -r '[.timestamp, .user, .event] | @csv' audit.jsonl | sort > audit-report.csv</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: SOC 2 Security Enforcement -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Use Case: SOC 2 Security Enforcement</div>
<div class="text-xs text-white/50">SaaS company — prevent dangerous operations before agent can execute them</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-center mb-1">
<div class="text-xl">❌</div>
<div class="font-bold text-red-300">Before Hooks</div>
</div>
<div class="space-y-1 opacity-80">
<div>🔍 <strong>Detection:</strong> Post-incident review</div>
<div>📋 <strong>Evidence:</strong> Manual log piecing</div>
<div>💼 <strong>Audit cost:</strong> 40 hours/year</div>
<div>🚨 <strong>Incidents:</strong> 3/year (rm -rf, DROP)</div>
<div>⏱️ <strong>Remediation:</strong> Days after discovery</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="text-center mb-1">
<div class="text-xl">✅</div>
<div class="font-bold text-emerald-300">With Hooks</div>
</div>
<div class="space-y-1 opacity-80">
<div>⚡ <strong>Detection:</strong> Real-time prevention</div>
<div>📋 <strong>Evidence:</strong> Automated denial log</div>
<div>💼 <strong>Audit cost:</strong> 5 hours (report only)</div>
<div>🚨 <strong>Incidents:</strong> 0 (blocked at gate)</div>
<div>✓ <strong>Remediation:</strong> Instant feedback to agent</div>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-2 mt-2 text-xs">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">🚫 Blocked Operations</div>
<div class="opacity-80">PreToolUse regex: <code>rm -rf / | DROP | TRUNCATE | sudo | curl.*admin</code>. Violations to <code>violations.jsonl</code> with reason.</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">🔔 Alert Integration</div>
<div class="opacity-80">PostToolUse hook sends denial events to Slack + PagerDuty. Immediate ops visibility.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Multi-Tenant Quality Gates -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Use Case: Multi-Tenant SaaS Quality Gates</div>
<div class="text-xs text-white/50">Agent-generated code must pass lint/format/type checks before file write</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-center mb-1">
<div class="text-xl">❌</div>
<div class="font-bold text-red-300">Without Shift-Left</div>
</div>
<div class="space-y-1 opacity-80">
<div>🔴 <strong>Violations/PR:</strong> 15 average</div>
<div>⏱️ <strong>Rework time:</strong> 7.5 hrs/sprint</div>
<div>🔄 <strong>Rework loops:</strong> 3/PR typical</div>
<div>🚫 <strong>CI failures:</strong> 15+/sprint</div>
<div>💸 <strong>Wasted:</strong> 120 hrs/quarter</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="text-center mb-1">
<div class="text-xl">✅</div>
<div class="font-bold text-emerald-300">With Hooks</div>
</div>
<div class="space-y-1 opacity-80">
<div>✓ <strong>Violations:</strong> 0 (blocked)</div>
<div>⚡ <strong>Rework time:</strong> 0</div>
<div>🎯 <strong>Rework loops:</strong> 1 (immediate)</div>
<div>✓ <strong>CI failures:</strong> 0</div>
<div>💰 <strong>Saved:</strong> 120 hrs/quarter</div>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-2 mt-2 text-xs">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">🔍 PreToolUse Validation</div>
<div class="opacity-80">ESLint + Prettier + TypeScript on proposed changes. Non-compliant code denied before write, agent gets error feedback immediately.</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">📊 Quality Metrics</div>
<div class="opacity-80">PostToolUse logs rule violations. Dashboard shows which standards agents violate most → training signal.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚡ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-lg font-bold text-cyan-300 mb-2">🚀 <strong>15 Minutes</strong></div>
<div class="space-y-1 opacity-80 text-xs">
<div>• <a href="https://code.visualstudio.com/docs/copilot/customization/hooks" class="text-cyan-400 underline">Read hooks documentation</a></div>
<div>• Create <code>.github/hooks/</code> directory</div>
<div>• Test <code>/hooks</code> slash command</div>
<div>• Understand 8 lifecycle events</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-lg font-bold text-blue-300 mb-2">⚡ <strong>1-2 Hours</strong></div>
<div class="space-y-1 opacity-80 text-xs">
<div>• Copy security-check.sh template</div>
<div>• Deploy PreToolUse hook to test repo</div>
<div>• Add context injection (SessionStart)</div>
<div>• Test with dangerous operations</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-lg font-bold text-indigo-300 mb-2">🔄 <strong>2-4 Hours</strong></div>
<div class="space-y-1 opacity-80 text-xs">
<div>• Implement all 8 hooks (audit trail)</div>
<div>• Add PostToolUse logging to JSON</div>
<div>• Integrate Slack alert on denials</div>
<div>• Query logs with jq</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="text-lg font-bold text-purple-300 mb-2">📈 <strong>Scale to Org</strong></div>
<div class="space-y-1 opacity-80 text-xs">
<div>• Generalize hook library</div>
<div>• Deploy org-wide policies</div>
<div>• Connect to compliance system</div>
<div>• Monitor via compliance dashboard</div>
</div>
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
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-lg font-bold text-blue-300 mb-2">📖 Official Docs</div>
<div class="space-y-1 opacity-90">
<div>• <a href="https://code.visualstudio.com/docs/copilot/customization/hooks" class="text-cyan-400 underline">Agent Hooks in VS Code</a></div>
<div>• <a href="https://docs.github.com/en/copilot/concepts/agents" class="text-blue-400 underline">Copilot Agents Concepts</a></div>
<div>• <a href="https://docs.github.com/en/copilot/reference/hooks-configuration" class="text-indigo-400 underline">Hooks Config Reference</a></div>
<div>• <a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents" class="text-purple-400 underline">Hooks How-Tos</a></div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-lg font-bold text-indigo-300 mb-2">🔗 Related Topics</div>
<div class="space-y-1 opacity-90">
<div>• Terminal Sandboxing — OS-level controls</div>
<div>• Custom Instructions — Agent behavior</div>
<div>• Enterprise Patterns — Org governance</div>
<div>• Custom Agents — Building your own</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="text-lg font-bold text-purple-300 mb-2">📝 Key Concepts</div>
<div class="space-y-1 opacity-90">
<div>• 8 Lifecycle Events</div>
<div>• Permission Decision Patterns</div>
<div>• JSON Lines Audit Trail</div>
<div>• Real-time Compliance Checking</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="text-lg font-bold text-pink-300 mb-2">🛠️ Tools & Examples</div>
<div class="space-y-1 opacity-90">
<div>• <code>jq</code> — Query audit logs</div>
<div>• <code>curl</code> — API integrations</div>
<div>• Hook templates in repo</div>
<div>• Compliance dashboards</div>
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
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">GitHub Copilot Hooks: Programmable Governance</span>
</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-lg">8 Lifecycle Events</div>
<div class="text-gray-300 mt-2 text-xs">Complete control at every moment — session, tool, subagent, stop</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-bold text-lg">PreToolUse Power</div>
<div class="text-gray-300 mt-2 text-xs">The only hook that can deny operations before execution</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-bold text-lg">100% Audit Trails</div>
<div class="text-gray-300 mt-2 text-xs">JSON Lines logging: 2-3 hours → 5 minutes per compliance report</div>
</div>
</div>

<div class="mt-6 text-sm opacity-60 relative z-10">Questions? Let's discuss governance patterns for your environment</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
