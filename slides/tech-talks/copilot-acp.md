---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot ACP: The Agent Client Protocol
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot ACP - Universal AI Integration
module: tech-talks/copilot-acp
mdc: true
status: active
updated: 2026-02-11
---

<!-- SLIDE: Title Slide -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent relative z-10">GitHub Copilot ACP</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-violet-600/80 to-purple-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-violet-500/25">The Agent Client Protocol</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Universal AI integration for any editor, tool, or workflow</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

<!-- SLIDE: The Core Question -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔓 The Core Question</span>
<div class="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-6 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl border border-amber-500/30 max-w-4xl mx-auto">
<div class="text-2xl font-bold text-amber-300 mb-4">
"How do I integrate GitHub Copilot's agentic capabilities into any editor, tool, or workflow — not just VS Code?"
</div>
</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-sm">
<div class="p-4 bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-lg border border-violet-500/30">
<div class="text-xl mb-2">🔒</div>
<div class="font-semibold text-violet-300">Editor Lock-In</div>
<div class="text-xs opacity-80 mt-1">Teams using Zed, JetBrains, Neovim, or Emacs can't access Copilot's agent experience</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-lg border border-purple-500/30">
<div class="text-xl mb-2">🔌</div>
<div class="font-semibold text-purple-300">N×M Integration Matrix</div>
<div class="text-xs opacity-80 mt-1">Every IDE needs a custom plugin for each AI agent — fragmented ecosystem</div>
</div>
<div class="p-4 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
<div class="text-xl mb-2">🚧</div>
<div class="font-semibold text-indigo-300">No Standard Protocol</div>
<div class="text-xs opacity-80 mt-1">Unlike LSP for language servers, there's no protocol for editor ↔ agent communication</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Table of Contents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-6">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Table of Contents</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-2 max-w-4xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-violet-900/40 to-purple-900/40 rounded-xl border-2 border-violet-500/50 hover:border-violet-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-violet-500/10">
<div class="text-3xl mb-2">🎯</div>
<div class="text-lg font-bold bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">The LSP Analogy</div>
<div class="text-sm text-gray-300 mt-1">ACP is "LSP for AI agents"</div>
<div class="text-xs text-violet-400/70 mt-2">From N×M integrations to N+M standard protocol</div>
</div>
</div>
<div @click="$nav.go(7)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🏗️</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Protocol Architecture</div>
<div class="text-sm text-gray-300 mt-1">Four-layer design</div>
<div class="text-xs text-purple-400/70 mt-2">Transport → Protocol → Session → Application</div>
</div>
</div>
<div @click="$nav.go(11)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-blue-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">🚀</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">Getting Started</div>
<div class="text-sm text-gray-300 mt-1">From zero to connected</div>
<div class="text-xs text-indigo-400/70 mt-2">Start server, connect SDK, send first prompt</div>
</div>
</div>
<div @click="$nav.go(14)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">🛡️</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Security & Use Cases</div>
<div class="text-sm text-gray-300 mt-1">Trust boundaries and real-world patterns</div>
<div class="text-xs text-blue-400/70 mt-2">Zed integration, CI/CD, polyrepo workflows</div>
</div>
</div>
</div>
<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — The LSP Analogy -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-violet-900/25 via-purple-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-violet-600/40 to-purple-600/40 rounded-full border border-violet-400/30 text-violet-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent leading-tight">The LSP Analogy</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Standardizing editor ↔ agent communication</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-violet-900/30 rounded-xl border border-violet-500/30">
<div class="text-2xl mb-1">📐</div>
<div class="text-violet-300 font-semibold">N×M Problem</div>
<div class="text-xs opacity-70 mt-1">Every editor × every agent = fragmentation</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-purple-300 font-semibold">N+M Solution</div>
<div class="text-xs opacity-70 mt-1">One protocol connects any editor to any agent</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-indigo-300 font-semibold">Proven Pattern</div>
<div class="text-xs opacity-70 mt-1">LSP did this for language servers, ACP for AI agents</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Before: Each editor builds custom AI plugin</span><br />
<span class="text-violet-300 mt-1 block">↳ After: Implement ACP client once, connect to any agent</span>
</div>
</div>
</div>

---

<!-- SLIDE: Before ACP vs After ACP -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-violet-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 The Standardization Shift</span>
<div class="flex-1 h-px bg-gradient-to-r from-violet-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-violet-400 shadow-lg shadow-violet-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6">
<div>
<div class="text-lg font-bold text-red-300 mb-3">❌ Before ACP</div>
<div class="space-y-2 text-sm">
<div class="p-3 bg-red-900/20 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">N×M Integration Matrix</div>
<div class="text-xs opacity-80">Each editor builds custom plugin for each agent — VS Code needs one, JetBrains needs another</div>
</div>
<div class="p-3 bg-red-900/20 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">Brittle Update Cycles</div>
<div class="text-xs opacity-80">Agent updates break editor-specific integrations; maintainers spend months on glue code</div>
</div>
<div class="p-3 bg-red-900/20 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">Editor Lock-In</div>
<div class="text-xs opacity-80">Switching editors means losing AI capabilities entirely</div>
</div>
<div class="p-3 bg-red-900/20 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">Automation Gaps</div>
<div class="text-xs opacity-80">CI/CD pipelines and custom tools can't leverage agent capabilities without bespoke wiring</div>
</div>
</div>
</div>
<div>
<div class="text-lg font-bold text-green-300 mb-3">✅ After ACP</div>
<div class="space-y-2 text-sm">
<div class="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
<div class="font-semibold text-green-300 mb-1">N+M Standard Protocol</div>
<div class="text-xs opacity-80">Each editor implements ACP client once; each agent implements server once — scales linearly</div>
</div>
<div class="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
<div class="font-semibold text-green-300 mb-1">Protocol Versioning</div>
<div class="text-xs opacity-80">Agent updates maintain compatibility through versioned protocol; integrations stay stable</div>
</div>
<div class="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
<div class="font-semibold text-green-300 mb-1">Editor Freedom</div>
<div class="text-xs opacity-80">Use Zed, JetBrains, Neovim, or Emacs — full agent experience available in all ACP-compatible editors</div>
</div>
<div class="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
<div class="font-semibold text-green-300 mb-1">Universal Integration</div>
<div class="text-xs opacity-80">CI/CD, custom tools, and dashboards connect through standard SDKs in TypeScript, Python, Rust, Kotlin</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Key Capabilities -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-violet-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚡ What ACP Enables</span>
<div class="flex-1 h-px bg-gradient-to-r from-violet-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-violet-400 shadow-lg shadow-violet-500/50"></div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-xl border border-violet-500/30">
<div class="text-xl mb-1">🌐</div>
<div class="font-bold text-violet-300 mb-1">Universal Editor Support</div>
<div class="text-xs opacity-90 mb-1">Any ACP-compatible editor connects to Copilot without custom plugins</div>
<div class="text-xs opacity-70 font-mono bg-black/30 p-2 rounded">Zed, JetBrains, Neovim, Emacs — all supported through one protocol</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/30">
<div class="text-xl mb-1">📡</div>
<div class="font-bold text-purple-300 mb-1">Bidirectional Streaming</div>
<div class="text-xs opacity-90 mb-1">Real-time, interactive communication — agents stream responses and request permissions as they work</div>
<div class="text-xs opacity-70 font-mono bg-black/30 p-2 rounded">Response chunks appear instantly, not after completion</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-xl border border-indigo-500/30">
<div class="text-xl mb-1">💬</div>
<div class="font-bold text-indigo-300 mb-1">Stateful Sessions</div>
<div class="text-xs opacity-90 mb-1">Persistent conversation context across multiple prompts within a session</div>
<div class="text-xs opacity-70 font-mono bg-black/30 p-2 rounded">No need to re-explain context every prompt</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
<div class="text-xl mb-1">🛡️</div>
<div class="font-bold text-blue-300 mb-1">Permission-Mediated Security</div>
<div class="text-xs opacity-90 mb-1">Every tool invocation goes through explicit user approval, maintaining trust boundaries</div>
<div class="text-xs opacity-70 font-mono bg-black/30 p-2 rounded">Enterprise-ready security model built into protocol</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-violet-900/20 to-purple-900/20 rounded-xl border border-violet-500/20">
<div class="font-semibold text-violet-300 mb-1">🔧 Multi-Language SDK Ecosystem</div>
<div class="text-xs opacity-90">Official SDKs in TypeScript, Python, Rust, and Kotlin for building custom integrations in your team's preferred language</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Protocol Architecture -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-indigo-900/15 to-blue-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-indigo-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent leading-tight">Protocol Architecture</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Four layers of standardization</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-4 gap-2 text-xs max-w-4xl">
<div class="px-3 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-xl mb-1">🔌</div>
<div class="text-purple-300 font-semibold">Transport</div>
<div class="opacity-70 mt-1">NDJSON over stdio/TCP</div>
</div>
<div class="px-3 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-xl mb-1">🔄</div>
<div class="text-indigo-300 font-semibold">Protocol</div>
<div class="opacity-70 mt-1">JSON-RPC bidirectional</div>
</div>
<div class="px-3 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-xl mb-1">💬</div>
<div class="text-blue-300 font-semibold">Session</div>
<div class="opacity-70 mt-1">Stateful context</div>
</div>
<div class="px-3 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-xl mb-1">🎯</div>
<div class="text-cyan-300 font-semibold">Application</div>
<div class="opacity-70 mt-1">AI + UI logic</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Inspired by LSP's proven design</span><br />
<span class="text-purple-300 mt-1 block">↳ Four layers decouple editors from agents</span>
</div>
</div>
</div>

---

<!-- SLIDE: Four-Layer Architecture -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Four-Layer Architecture</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-sm font-semibold text-white mb-0.5">ACP is built on four composable layers</div>
<div class="text-xs text-white/50">Each layer handles a distinct concern — transport, protocol, session, and application</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs h-full">
<div class="p-3 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">🔌</div>
<div class="font-bold text-purple-300">1. Transport Layer</div>
</div>
<div class="space-y-1 opacity-90 ml-8">
<div>Newline-delimited JSON-RPC 2.0 messages</div>
<div class="font-mono bg-black/30 p-1.5 rounded opacity-80 mt-1">
<div class="text-purple-300"># stdio (editors) or TCP (network)</div>
<div>copilot --acp --stdio</div>
<div>copilot --acp --port 3000</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-xl border border-indigo-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">🔄</div>
<div class="font-bold text-indigo-300">2. Protocol Layer</div>
</div>
<div class="space-y-1 opacity-90 ml-8">
<div>Bidirectional request/response orchestration</div>
<div class="grid grid-cols-2 gap-1 mt-1">
<div class="bg-black/30 p-1.5 rounded opacity-80">
<div class="text-indigo-300 mb-0.5">Client → Agent:</div>
<div class="font-mono text-xs">initialize, session/new, session/prompt</div>
</div>
<div class="bg-black/30 p-1.5 rounded opacity-80">
<div class="text-blue-300 mb-0.5">Agent → Client:</div>
<div class="font-mono text-xs">requestPermission, sessionUpdate</div>
</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">💬</div>
<div class="font-bold text-blue-300">3. Session Layer</div>
</div>
<div class="space-y-1 opacity-90 ml-8">
<div>Stateful context management</div>
<div>• Conversation history across prompts</div>
<div>• Working dir + MCP config per session</div>
<div>• Multiple concurrent sessions on one connection</div>
</div>
</div>
<div class="p-3 bg-gradient-to-r from-cyan-900/30 to-teal-900/30 rounded-xl border border-cyan-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">🎯</div>
<div class="font-bold text-cyan-300">4. Application Layer</div>
</div>
<div class="grid grid-cols-2 gap-2 ml-0 opacity-90 mt-1">
<div>
<div class="font-semibold text-cyan-300 mb-1">Agent Side:</div>
<div>AI model interaction, code analysis, tool execution</div>
</div>
<div>
<div class="font-semibold text-teal-300 mb-1">Client Side:</div>
<div>UI rendering, permission dialogs, output formatting</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Core Message Flow -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📡 Message Flow Sequence</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 h-full">
<div class="font-mono text-xs bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/30 p-4 overflow-auto">
<div class="text-purple-300 font-bold mb-3 text-sm">Client (Editor) ↔ Agent (Copilot CLI)</div>
<div class="space-y-2 opacity-90">
<div>
<div class="text-green-400">──── initialize ──────────────────▶</div>
<div class="text-xs text-gray-400 ml-2">Capability negotiation</div>
</div>
<div>
<div class="text-blue-400">◀─── initializeResult ────────────</div>
</div>
<div class="mt-3">
<div class="text-green-400">──── session/new ─────────────────▶</div>
<div class="text-xs text-gray-400 ml-2">Create workspace context</div>
</div>
<div>
<div class="text-blue-400">◀─── newSessionResult ────────────</div>
</div>
<div class="mt-3">
<div class="text-green-400">──── session/prompt ──────────────▶</div>
<div class="text-xs text-gray-400 ml-2">Send user prompt</div>
</div>
<div>
<div class="text-blue-400">◀─── sessionUpdate (streaming) ───</div>
<div class="text-blue-400">◀─── sessionUpdate (streaming) ───</div>
</div>
<div class="mt-3">
<div class="text-yellow-400">◀─── requestPermission ───────────</div>
<div class="text-xs text-gray-400 ml-2">Agent needs tool access</div>
</div>
<div>
<div class="text-green-400">──── permissionResponse ──────────▶</div>
<div class="text-xs text-gray-400 ml-2">User approves/denies</div>
</div>
<div>
<div class="text-blue-400">◀─── sessionUpdate (streaming) ───</div>
<div class="text-blue-400">◀─── promptResult ────────────────</div>
<div class="text-xs text-gray-400 ml-2">Response complete</div>
</div>
</div>
</div>

<div class="space-y-3 text-xs">
<div class="p-3 bg-gradient-to-br from-violet-900/20 to-purple-900/20 rounded-lg border border-violet-500/20">
<div class="font-semibold text-violet-300 mb-2">🔑 Key Properties</div>
<div class="space-y-1 opacity-90">
<div>• Every message follows JSON-RPC 2.0 format for broad tooling compatibility</div>
<div>• Streaming updates enable real-time response rendering in editors</div>
<div>• Permission requests are always mediated by the client</div>
<div>• Agents never act without approval — architecturally enforced</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-lg border border-purple-500/20">
<div class="font-semibold text-purple-300 mb-2">🎯 Why This Matters</div>
<div class="space-y-1 opacity-90">
<div>• <span class="text-green-400">Bidirectional</span> — Both client and server can initiate requests</div>
<div>• <span class="text-blue-400">Streaming</span> — Responses appear as they're generated, not after completion</div>
<div>• <span class="text-yellow-400">Permission-mediated</span> — Enterprise-ready security built into protocol</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/20 to-blue-900/20 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-2">📚 Session Context</div>
<div class="opacity-90">Sessions maintain conversation history — subsequent prompts build on prior context without re-explaining</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: ACP vs MCP vs LSP -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Protocol Comparison</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-semibold text-white mb-1">ACP, MCP, and LSP — Complementary Protocols</div>
<div class="text-xs text-white/50">Each solves a different integration problem</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<table class="w-full text-xs border-collapse">
<thead>
<tr class="bg-purple-900/30 border-b-2 border-purple-500/40">
<th class="p-2 text-left font-semibold text-purple-300">Aspect</th>
<th class="p-2 text-left font-semibold text-violet-300">ACP</th>
<th class="p-2 text-left font-semibold text-indigo-300">MCP</th>
<th class="p-2 text-left font-semibold text-blue-300">LSP</th>
</tr>
</thead>
<tbody class="text-xs">
<tr class="border-b border-purple-500/20 hover:bg-purple-900/20">
<td class="p-2 font-semibold opacity-90">Purpose</td>
<td class="p-2 opacity-80">Editor ↔ Agent communication</td>
<td class="p-2 opacity-80">Model ↔ Tool integration</td>
<td class="p-2 opacity-80">Editor ↔ Language Server</td>
</tr>
<tr class="border-b border-purple-500/20 hover:bg-purple-900/20">
<td class="p-2 font-semibold opacity-90">Best For</td>
<td class="p-2 opacity-80">Universal AI agent access</td>
<td class="p-2 opacity-80">Extending agent capabilities</td>
<td class="p-2 opacity-80">Code intelligence features</td>
</tr>
<tr class="border-b border-purple-500/20 hover:bg-purple-900/20">
<td class="p-2 font-semibold opacity-90">Sessions</td>
<td class="p-2 opacity-80">Stateful, persistent</td>
<td class="p-2 opacity-80">Stateless per invocation</td>
<td class="p-2 opacity-80">Stateful per workspace</td>
</tr>
<tr class="border-b border-purple-500/20 hover:bg-purple-900/20">
<td class="p-2 font-semibold opacity-90">Transport</td>
<td class="p-2 opacity-80">JSON-RPC over stdio/TCP</td>
<td class="p-2 opacity-80">JSON-RPC over stdio/SSE</td>
<td class="p-2 opacity-80">JSON-RPC over stdio/TCP</td>
</tr>
<tr class="border-b border-purple-500/20 hover:bg-purple-900/20">
<td class="p-2 font-semibold opacity-90">Analogy</td>
<td class="p-2 opacity-80">Plug any agent into any editor</td>
<td class="p-2 opacity-80">Plug any tool into any model</td>
<td class="p-2 opacity-80">Plug any language into any editor</td>
</tr>
</tbody>
</table>

<div class="mt-3 p-3 bg-gradient-to-r from-violet-900/20 to-purple-900/20 rounded-xl border border-violet-500/30">
<div class="font-semibold text-violet-300 mb-1">🔗 How They Work Together</div>
<div class="text-xs opacity-90 space-y-1">
<div><span class="text-purple-300 font-semibold">ACP</span> defines how editors communicate with agents (prompts, responses, permissions)</div>
<div><span class="text-indigo-300 font-semibold">MCP</span> defines how agents access tools (filesystem, GitHub API, databases)</div>
<div><span class="text-blue-300 font-semibold">Result:</span> ACP sessions configure MCP servers — the client tells the agent which tools are available, and the agent uses MCP to access them</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Getting Started -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-blue-900/15 to-cyan-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-blue-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent leading-tight">Getting Started</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">From zero to connected in 5 minutes</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🚀</div>
<div class="text-indigo-300 font-semibold">Start ACP Server</div>
<div class="text-xs opacity-70 mt-1">One command launches Copilot as protocol server</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🔌</div>
<div class="text-blue-300 font-semibold">Connect SDK</div>
<div class="text-xs opacity-70 mt-1">TypeScript, Python, Rust, or Kotlin client</div>
</div>
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">💬</div>
<div class="text-cyan-300 font-semibold">Send Prompt</div>
<div class="text-xs opacity-70 mt-1">Create session and stream responses</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Prerequisites: Copilot subscription + CLI installed</span><br />
<span class="text-indigo-300 mt-1 block">↳ Node.js v22+ for TypeScript SDK examples</span>
</div>
</div>
</div>

---

<!-- SLIDE: Start the ACP Server & Connect SDK -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Quick Start Steps</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2">Step 1: Start the ACP Server</div>
<div class="text-xs opacity-90 mb-2">The <code class="bg-black/40 px-1 rounded">--acp</code> flag transforms Copilot CLI into a protocol server</div>
<div class="font-mono text-xs bg-black/40 p-3 rounded space-y-1">
<div class="text-gray-400"># Verify installation</div>
<div class="text-green-400">copilot --version</div>
<div class="text-gray-400 mt-2"># Start in stdio mode (recommended)</div>
<div class="text-green-400">copilot --acp --stdio</div>
<div class="text-gray-400 mt-2"># Or TCP mode for network access</div>
<div class="text-green-400">copilot --acp --port 3000</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2">Step 2: Install TypeScript SDK</div>
<div class="text-xs opacity-90 mb-2">Official SDK with full typing and examples</div>
<div class="font-mono text-xs bg-black/40 p-3 rounded">
<div class="text-green-400">npm install @agentclientprotocol/sdk</div>
</div>
<div class="mt-3 text-xs opacity-80">
Also available: Python, Rust, Kotlin SDKs
</div>
</div>
</div>

<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">Step 3: Basic Client Code</div>
<div class="font-mono text-xs bg-black/40 p-3 rounded space-y-0.5">
<div><span class="text-purple-400">import</span> <span class="text-white">* as acp from <span class="text-green-400">"@agentclientprotocol/sdk"</span>;</span></div>
<div><span class="text-purple-400">import</span> <span class="text-white">{'{'} spawn {'}'} from <span class="text-green-400">"node:child_process"</span>;</span></div>
<div class="text-gray-400 mt-1">// Spawn server, create stream + client</div>
<div><span class="text-purple-400">const</span> <span class="text-white">process = spawn(<span class="text-green-400">"copilot"</span>, [<span class="text-green-400">"--acp"</span>, <span class="text-green-400">"--stdio"</span>]);</span></div>
<div><span class="text-purple-400">const</span> <span class="text-white">stream = acp.ndJsonStream(output, input);</span></div>
<div class="text-gray-400 mt-1">// Connect, create session, send prompt</div>
<div><span class="text-purple-400">const</span> <span class="text-white">conn = <span class="text-purple-400">new</span> acp.ClientSideConnection();</span></div>
<div><span class="text-purple-400">await</span> <span class="text-white">conn.initialize({'{'} protocolVersion {'}'});</span></div>
<div><span class="text-purple-400">const</span> <span class="text-white">session = <span class="text-purple-400">await</span> conn.newSession({'{'}cwd{'}'});</span></div>
<div><span class="text-purple-400">await</span> <span class="text-white">conn.prompt({'{'} sessionId, prompt {'}'});</span></div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Successful Connection -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Verify Connection</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-xs opacity-90">A successful connection produces these artifacts in sequence — steps 1 &amp; 2 of 4:</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="space-y-3 text-sm">
<div class="p-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">1</div>
<div class="font-bold text-green-300">Initialize Response</div>
</div>
<div class="ml-9 text-xs opacity-90 mb-2">Agent capabilities and protocol version returned immediately</div>
<div class="ml-9 font-mono text-xs bg-black/40 p-2 rounded">
<div class="text-gray-400">{'{'} protocolVersion: "1.0", capabilities: {'{'} streaming: true, ... {'}'} {'}'}</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">2</div>
<div class="font-bold text-green-300">New Session Result</div>
</div>
<div class="ml-9 text-xs opacity-90 mb-2">Unique sessionId for all subsequent prompts in this conversation</div>
<div class="ml-9 font-mono text-xs bg-black/40 p-2 rounded">
<div class="text-gray-400">{'{'} sessionId: "abc123-xyz789", status: "ready" {'}'}</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Streaming & Prompt Results -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Streaming & Results</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-xs opacity-90">Steps 3 &amp; 4 of 4 — real-time response streaming and completion:</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="space-y-3 text-sm">
<div class="p-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">3</div>
<div class="font-bold text-green-300">Streaming Updates</div>
</div>
<div class="ml-9 text-xs opacity-90 mb-2">Agent processes your prompt — response chunks arrive in real-time</div>
<div class="ml-9 font-mono text-xs bg-black/40 p-2 rounded">
<div class="text-blue-400">sessionUpdate: {'{'} type: "agent_message_chunk", text: "The purpose..." {'}'}</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">4</div>
<div class="font-bold text-green-300">Prompt Result</div>
</div>
<div class="ml-9 text-xs opacity-90 mb-2">Response complete with stop reason</div>
<div class="ml-9 font-mono text-xs bg-black/40 p-2 rounded">
<div class="text-gray-400">{'{'} stopReason: "end_turn", sessionId: "abc123-xyz789" {'}'}</div>
</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl border border-indigo-500/20">
<div class="text-xs opacity-90"><span class="text-indigo-300 font-semibold">Key Point:</span> Sessions maintain context — subsequent prompts in the same session build on prior conversation without re-explaining</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Security & Use Cases -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-cyan-900/15 to-teal-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-cyan-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent leading-tight">Security & Use Cases</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Trust boundaries and real-world patterns</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🛡️</div>
<div class="text-blue-300 font-semibold">Permission Model</div>
<div class="text-xs opacity-70 mt-1">Every tool invocation requires approval</div>
</div>
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-cyan-300 font-semibold">Editor Integration</div>
<div class="text-xs opacity-70 mt-1">Zed: 2 weeks vs 3+ months custom build</div>
</div>
<div class="px-4 py-3 bg-teal-900/30 rounded-xl border border-teal-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-teal-300 font-semibold">Polyrepo Workflows</div>
<div class="text-xs opacity-70 mt-1">Cross-repo context in one session</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Agents never bypass permission layer</span><br />
<span class="text-blue-300 mt-1 block">↳ Enterprise-ready trust without blind faith</span>
</div>
</div>
</div>

---

<!-- SLIDE: Permission Model -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-1">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Trust Without Blind Faith</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-2 text-sm">
<div class="space-y-1.5">
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1.5 text-xs">How Permission Mediation Works</div>
<div class="text-xs opacity-90 space-y-1">
<div class="bg-black/30 p-1.5 rounded">
<div class="text-green-400 font-mono text-xs">Agent: "I need to run `npm test`"</div>
</div>
<div class="text-center opacity-70 text-xs">↓</div>
<div class="bg-black/30 p-1.5 rounded">
<div class="text-blue-400 font-mono text-xs">Client: Shows permission dialog to user</div>
</div>
<div class="text-center opacity-70 text-xs">↓</div>
<div class="bg-black/30 p-1.5 rounded">
<div class="text-yellow-400 font-mono text-xs">User: Approves or denies with explanation</div>
</div>
<div class="text-center opacity-70 text-xs">↓</div>
<div class="bg-black/30 p-1.5 rounded">
<div class="text-green-400 font-mono text-xs">Agent: Executes or adapts approach</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1.5 text-xs">Policy-Based Approval</div>
<div class="font-mono text-xs bg-black/40 p-2 rounded space-y-0.5">
<div class="text-gray-400">// Automated rules for known-safe ops</div>
<div><span class="text-purple-400">const</span> <span class="text-white">SAFE = [<span class="text-green-400">"read_file"</span>, <span class="text-green-400">"list_directory"</span>];</span></div>
<div><span class="text-purple-400">const</span> <span class="text-white">BLOCKED = [<span class="text-red-400">"delete_file"</span>];</span></div>
<div class="mt-1"><span class="text-purple-400">if</span> <span class="text-white">(SAFE.includes(tool))</span></div>
<div class="text-green-400 ml-4">return {'{'} approved {'}'};</div>
<div><span class="text-purple-400">if</span> <span class="text-white">(BLOCKED.includes(tool))</span></div>
<div class="text-red-400 ml-4">return {'{'} cancelled {'}'};</div>
<div><span class="text-yellow-400">return</span> <span class="text-white">await promptUser();</span></div>
</div>
</div>
</div>

<div class="space-y-1.5">
<table class="w-full text-xs">
<thead>
<tr class="border-b border-teal-500/30">
<th class="text-left py-0.5 text-teal-300">Concern</th>
<th class="text-left py-0.5 text-emerald-300">ACP Solution</th>
</tr>
</thead>
<tbody class="opacity-90">
<tr class="border-b border-teal-500/10">
<td class="py-0.5">Unauthorized file access</td>
<td class="py-0.5">Permission callback gates every operation</td>
</tr>
<tr class="border-b border-teal-500/10">
<td class="py-0.5">Arbitrary command execution</td>
<td class="py-0.5">Shell commands require explicit approval</td>
</tr>
<tr class="border-b border-teal-500/10">
<td class="py-0.5">Data exfiltration</td>
<td class="py-0.5">Network operations mediated through client</td>
</tr>
<tr class="border-b border-teal-500/10">
<td class="py-0.5">Scope creep</td>
<td class="py-0.5">Session-scoped permissions; new session resets</td>
</tr>
<tr>
<td class="py-0.5">Audit trail</td>
<td class="py-0.5">Client logs all permission requests and outcomes</td>
</tr>
</tbody>
</table>
</div>

<div class="p-2 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/20">
<div class="text-xs opacity-90"><span class="text-blue-300 font-semibold">Architecturally Enforced:</span> Agents never bypass the permission layer — it's built into the protocol, not optional. Organizations can implement custom policies for auto-approval, audit logging, and scope isolation.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case — Zed Editor Integration -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Use Case: Zed Editor Integration</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-4 text-sm">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30">
<div class="text-xl mb-2">🚧</div>
<div class="font-bold text-red-300 mb-2">The Problem</div>
<div class="text-xs opacity-90">Zed users wanted Copilot's full agent experience but had no integration path. Building VS Code extension-compatible layer would take months and break with each update.</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
<div class="text-xl mb-2">✅</div>
<div class="font-bold text-blue-300 mb-2">The Solution</div>
<div class="text-xs opacity-90 mb-2">Zed implemented ACP client support, connecting directly to <code class="bg-black/40 px-1 rounded">copilot --acp --stdio</code></div>
<div class="font-mono text-xs bg-black/40 p-2 rounded">
<div class="text-gray-400"># Zed's agent config</div>
<div class="text-green-400">copilot --acp --stdio</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="text-xl mb-2">🎉</div>
<div class="font-bold text-green-300 mb-2">The Outcome</div>
<div class="text-xs opacity-90 space-y-2">
<div>✅ Full Copilot agent experience in Zed</div>
<div>✅ <span class="text-green-400 font-semibold">2 weeks</span> integration work vs <span class="text-red-400">3+ months</span> custom build</div>
<div>✅ No maintenance burden when Copilot updates</div>
<div>✅ Protocol versioning ensures compatibility</div>
</div>
</div>
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">
<div class="p-4 bg-gradient-to-br from-violet-900/20 to-purple-900/20 rounded-xl border border-violet-500/30">
<div class="font-bold text-violet-300 mb-2">Use Case: CI/CD Code Review Dashboard</div>
<div class="text-xs opacity-90 space-y-1">
<div><span class="text-violet-300 font-semibold">Problem:</span> Custom dashboard needs multi-turn review conversations, not simple commands</div>
<div><span class="text-purple-300 font-semibold">Solution:</span> ACP client creates session per PR, sends diff context, streams review feedback</div>
<div><span class="text-indigo-300 font-semibold">Outcome:</span> Review coverage increased from 60% to 100% of PRs with contextual, iterative feedback</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-indigo-900/20 to-blue-900/20 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2">Use Case: Polyrepo Development</div>
<div class="text-xs opacity-90 space-y-1">
<div><span class="text-indigo-300 font-semibold">Problem:</span> Teams working across multiple repos need cross-repo context</div>
<div><span class="text-blue-300 font-semibold">Solution:</span> ACP session with parent folder cwd + MCP filesystem servers for each repo</div>
<div><span class="text-cyan-300 font-semibold">Outcome:</span> Onboarding time drops from 2 weeks to 3 days with AI-guided cross-repo exploration</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: ACP Agent Orchestrator -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Featured Project: ACP Agent Orchestrator</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">What It Does</div>
<div class="text-xs opacity-90 space-y-1">
<div>• Launches one <code class="bg-black/40 px-1 rounded">copilot --acp --stdio</code> process per repository</div>
<div>• Orchestrator agent coordinates work across worker agents</div>
<div>• Broadcast prompts to all workers simultaneously</div>
<div>• Coalesced results panel synthesizes cross-repo findings</div>
<div>• Interactive card UI with streaming and real-time permissions</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-teal-900/30 to-emerald-900/30 rounded-xl border border-teal-500/30">
<div class="font-bold text-teal-300 mb-2">Architecture Stack</div>
<table class="w-full text-xs">
<thead>
<tr class="border-b border-teal-500/30">
<th class="text-left py-1 text-teal-300">Layer</th>
<th class="text-left py-1 text-emerald-300">Technology</th>
</tr>
</thead>
<tbody class="opacity-90">
<tr class="border-b border-teal-500/10">
<td class="py-1">Backend</td>
<td class="py-1">Node.js + Express + Socket.IO</td>
</tr>
<tr class="border-b border-teal-500/10">
<td class="py-1">Frontend</td>
<td class="py-1">React + Vite + Tailwind CSS</td>
</tr>
<tr>
<td class="py-1">ACP Integration</td>
<td class="py-1">@agentclientprotocol/sdk</td>
</tr>
</tbody>
</table>
</div>

<img src="./copilot-acp/images/acp-orchestrator-agents.png" class="rounded-lg border border-cyan-500/30 w-full h-24 object-cover object-top" alt="Multiple agents working across repositories" />
</div>

<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2">Flagship Scenario: Cross-Repo Documentation Audit</div>
<div class="text-xs opacity-90 space-y-1">
<div class="bg-black/30 p-2 rounded"><span class="text-green-400">1.</span> Broadcast audit prompts to all worker agents simultaneously</div>
<div class="bg-black/30 p-2 rounded"><span class="text-blue-400">2.</span> Coalesce worker outputs and synthesize cross-repo findings</div>
<div class="bg-black/30 p-2 rounded"><span class="text-purple-400">3.</span> Create coordinated issues and PRs in each repo</div>
<div class="bg-black/30 p-2 rounded"><span class="text-cyan-400">4.</span> Merge coordination through orchestrator's issue map</div>
</div>
</div>

<img src="./copilot-acp/images/acp-orchestrator-results.png" class="rounded-lg border border-blue-500/30 w-full h-24 object-cover object-top" alt="Coalesced broadcast results showing cross-repo synthesis" />

<div class="p-3 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl border border-indigo-500/20">
<div class="font-mono text-xs opacity-90 space-y-1">
<div class="text-indigo-300"># Try it yourself</div>
<div>git clone https://github.com/MSBart2/cli-acp.git</div>
<div>cd cli-acp/webapp && npm run install:all</div>
<div>npm run dev <span class="text-gray-400"># Open http://localhost:5173</span></div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: SDK Ecosystem -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-1">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Multi-Language SDK Ecosystem</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm">
<div class="space-y-2">
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1.5 text-xs">Official SDKs — Build in Your Language</div>
<table class="w-full text-xs">
<thead>
<tr class="border-b border-blue-500/30">
<th class="text-left py-1 text-blue-300">SDK</th>
<th class="text-left py-1 text-cyan-300">Install</th>
</tr>
</thead>
<tbody class="opacity-90">
<tr class="border-b border-blue-500/10">
<td class="py-0.5 font-semibold">TypeScript</td>
<td class="py-0.5 font-mono text-xs">npm install @agentclientprotocol/sdk</td>
</tr>
<tr class="border-b border-blue-500/10">
<td class="py-0.5 font-semibold">Python</td>
<td class="py-0.5 font-mono text-xs">pip install agent-client-protocol</td>
</tr>
<tr class="border-b border-blue-500/10">
<td class="py-0.5 font-semibold">Rust</td>
<td class="py-0.5 font-mono text-xs">cargo add agent-client-protocol</td>
</tr>
<tr>
<td class="py-0.5 font-semibold">Kotlin</td>
<td class="py-0.5 font-mono text-xs">Maven/Gradle: acp-kotlin</td>
</tr>
</tbody>
</table>
</div>

<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1.5 text-xs">Python TCP Client Example</div>
<div class="font-mono text-xs bg-black/40 p-2 rounded space-y-0.5">
<div><span class="text-purple-400">from</span> <span class="text-white">agent_client_protocol <span class="text-purple-400">import</span> connect_tcp</span></div>
<div class="mt-1"><span class="text-purple-400">async with</span> <span class="text-white">connect_tcp(<span class="text-green-400">"localhost"</span>, <span class="text-yellow-400">3000</span>) as conn:</span></div>
<div class="ml-4"><span class="text-purple-400">await</span> <span class="text-white">conn.initialize()</span></div>
<div class="ml-4"><span class="text-white">session = <span class="text-purple-400">await</span> conn.new_session()</span></div>
<div class="ml-4"><span class="text-white">result = <span class="text-purple-400">await</span> conn.prompt(...)</span></div>
<div class="ml-4"><span class="text-blue-400">print</span><span class="text-white">(result.text)</span></div>
</div>
</div>
</div>

<div class="space-y-2">
<div class="p-2 bg-gradient-to-br from-teal-900/30 to-emerald-900/30 rounded-xl border border-teal-500/30">
<div class="font-bold text-teal-300 mb-1.5 text-xs">MCP Integration Through ACP Sessions</div>
<div class="text-xs opacity-80 mb-1.5">ACP sessions configure MCP servers, giving the agent access to external tools</div>
<div class="font-mono text-xs bg-black/40 p-2 rounded space-y-0.5">
<div class="text-gray-400">// Create session with MCP servers</div>
<div><span class="text-purple-400">const</span> <span class="text-white">session = await conn.newSession({'{'}</span></div>
<div class="ml-2"><span class="text-white">cwd: process.cwd(),</span></div>
<div class="ml-2"><span class="text-white">mcpServers: [</span></div>
<div class="ml-4"><span class="text-white">{'{'} name: <span class="text-green-400">"github"</span>, transport: {'{'} type: <span class="text-green-400">"stdio"</span>,</span></div>
<div class="ml-6"><span class="text-white">command: <span class="text-green-400">"npx"</span>, args: [<span class="text-green-400">"-y"</span>, <span class="text-green-400">"@mcp/server-github"</span>] {'}'} {'}'}</span></div>
<div class="ml-2"><span class="text-white">]</span></div>
<div><span class="text-white">{'}'});</span></div>
</div>
</div>

<div class="p-2 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl border border-indigo-500/20">
<div class="text-xs opacity-90"><span class="text-indigo-300 font-semibold">Key Relationship:</span> ACP defines how editors talk to agents; MCP defines how agents access tools. They're complementary — ACP sessions configure which MCP servers the agent can use.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-teal-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-teal-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="font-bold text-green-300 mb-2 flex items-center gap-2">
<div class="text-xl">⚡</div>
<div>Immediate Actions (15 min)</div>
</div>
<div class="space-y-2 text-xs opacity-90">
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">□</div>
<div>Verify Copilot CLI installed: <code class="bg-black/40 px-1 rounded">copilot --version</code></div>
</div>
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">□</div>
<div>Start ACP server: <code class="bg-black/40 px-1 rounded">copilot --acp --stdio</code></div>
</div>
<div class="flex items-start gap-2">
<div class="text-green-400 mt-0.5">□</div>
<div>Read official ACP server docs</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2 flex items-center gap-2">
<div class="text-xl">🔧</div>
<div>Short-Term Implementation (1 hour)</div>
</div>
<div class="space-y-2 text-xs opacity-90">
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">□</div>
<div>Install SDK: <code class="bg-black/40 px-1 rounded">npm install @agentclientprotocol/sdk</code></div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">□</div>
<div>Run basic client example against Copilot ACP</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">□</div>
<div>Modify <code class="bg-black/40 px-1 rounded">requestPermission</code> to implement a simple approval policy</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400 mt-0.5">□</div>
<div>Try multi-turn conversation to see session context in action</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 flex items-center gap-2">
<div class="text-xl">🚀</div>
<div>Advanced Exploration (2-4 hours)</div>
</div>
<div class="space-y-2 text-xs opacity-90">
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">□</div>
<div>Clone and run the <a href="https://github.com/MSBart2/cli-acp" class="text-indigo-300 underline">ACP Agent Orchestrator</a></div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">□</div>
<div>Build custom ACP client for your team's preferred editor or tool</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">□</div>
<div>Implement policy-based permissions for your org's security requirements</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">□</div>
<div>Integrate MCP servers through ACP sessions for extended tool access</div>
</div>
<div class="flex items-start gap-2">
<div class="text-indigo-400 mt-0.5">□</div>
<div>Explore Python or Rust SDKs for non-TypeScript workflows</div>
</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-violet-900/20 to-purple-900/20 rounded-xl border border-violet-500/30">
<div class="font-bold text-violet-300 mb-1">🔗 Next Steps After Completion</div>
<div class="text-xs opacity-90 space-y-1">
<div>1. ✅ Complete immediate actions above</div>
<div>2. 📖 Review related talk: <span class="text-violet-300 font-semibold">Copilot CLI</span> for terminal-native AI workflows</div>
<div>3. 📖 Review related talk: <span class="text-purple-300 font-semibold">MCP Apps</span> for extending agent capabilities with tools</div>
<div>4. 🚀 Explore the <a href="https://agentclientprotocol.com/protocol/overview" class="text-indigo-300 underline">ACP protocol specification</a> for advanced integration patterns</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: References & Resources -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-violet-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 References & Resources</span>
<div class="flex-1 h-px bg-gradient-to-r from-violet-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-auto">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="space-y-2">
<div class="p-2 bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-xl border border-violet-500/30">
<div class="font-bold text-violet-300 mb-1">📚 Official Documentation</div>
<div class="space-y-2 opacity-90">
<div>
<a href="https://docs.github.com/en/copilot/reference/acp-server" class="text-violet-300 hover:text-violet-200 underline block">Copilot CLI ACP Server Reference</a>
<div class="text-gray-400 text-xs">Server modes, integration examples, TypeScript client code</div>
</div>
<div>
<a href="https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-getting-started" class="text-violet-300 hover:text-violet-200 underline block">Getting Started with Copilot CLI</a>
<div class="text-gray-400 text-xs">Installation, authentication, and first steps</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1">🔧 Protocol Specification</div>
<div class="space-y-1 opacity-90">
<div>
<a href="https://agentclientprotocol.com/protocol/overview" class="text-purple-300 hover:text-purple-200 underline block">ACP Protocol Overview</a>
<div class="text-gray-400 text-xs">Full specification with message types and session lifecycle</div>
</div>
<div>
<a href="https://github.com/agentclientprotocol/agent-client-protocol" class="text-purple-300 hover:text-purple-200 underline block">ACP Spec Repository (2K+ stars)</a>
<div class="text-gray-400 text-xs">Protocol schema, SDKs, and community libraries</div>
</div>
<div>
<a href="https://agentclientprotocol.com/get-started/architecture" class="text-purple-300 hover:text-purple-200 underline block">ACP Architecture Guide</a>
<div class="text-gray-400 text-xs">Four-layer architecture design and principles</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1">🔌 SDKs & Integration</div>
<div class="space-y-1 opacity-90">
<div>
<a href="https://www.npmjs.com/package/@agentclientprotocol/sdk" class="text-indigo-300 hover:text-indigo-200 underline block">TypeScript SDK (npm)</a>
<div class="text-gray-400 text-xs">Reference implementation with full typing</div>
</div>
<div>
<a href="https://pypi.org/project/agent-client-protocol/" class="text-indigo-300 hover:text-indigo-200 underline block">Python SDK (PyPI)</a>
<div class="text-gray-400 text-xs">Python client/agent library</div>
</div>
<div>
<a href="https://crates.io/crates/agent-client-protocol" class="text-indigo-300 hover:text-indigo-200 underline block">Rust SDK (crates.io)</a>
<div class="text-gray-400 text-xs">Rust client/agent library</div>
</div>
<div>
<a href="https://zed.dev/acp/agent/github-copilot" class="text-indigo-300 hover:text-indigo-200 underline block">Zed ACP Agent: GitHub Copilot</a>
<div class="text-gray-400 text-xs">Zed's native Copilot integration via ACP</div>
</div>
</div>
</div>
</div>

<div class="space-y-2">
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1">🚀 Featured Project</div>
<div class="space-y-1 opacity-90">
<div>
<a href="https://github.com/MSBart2/cli-acp" class="text-blue-300 hover:text-blue-200 underline block">ACP Agent Orchestrator</a>
<div class="text-gray-400 text-xs">Multi-agent orchestration with broadcast prompts and cross-repo synthesis</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1">📰 Blog Posts & Announcements</div>
<div class="space-y-1 opacity-90">
<div>
<a href="https://github.blog/changelog/2026-01-28-acp-support-in-copilot-cli-is-now-in-public-preview/" class="text-cyan-300 hover:text-cyan-200 underline block">ACP Support in Copilot CLI — Public Preview</a>
<div class="text-gray-400 text-xs">Launch announcement and motivation</div>
</div>
<div>
<a href="https://github.blog/ai-and-ml/github-copilot/power-agentic-workflows-in-your-terminal-with-github-copilot-cli/" class="text-cyan-300 hover:text-cyan-200 underline block">Power Agentic Workflows in Your Terminal</a>
<div class="text-gray-400 text-xs">Copilot CLI agentic workflow patterns</div>
</div>
<div>
<a href="https://codestandup.com/posts/2025/agent-client-protocol-acp-explained/" class="text-cyan-300 hover:text-cyan-200 underline block">Agent Client Protocol (ACP) Explained</a>
<div class="text-gray-400 text-xs">Comprehensive explainer comparing ACP to LSP</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-teal-900/30 to-emerald-900/30 rounded-xl border border-teal-500/30">
<div class="font-bold text-teal-300 mb-1">🎯 Community & Analysis</div>
<div class="space-y-1 opacity-90">
<div>
<a href="https://blog.promptlayer.com/agent-client-protocol-the-lsp-for-ai-coding-agents/" class="text-teal-300 hover:text-teal-200 underline block">ACP: The LSP for AI Agents — PromptLayer</a>
<div class="text-gray-400 text-xs">Industry analysis of ACP's significance</div>
</div>
<div>
<a href="https://deepwiki.com/zed-industries/agent-client-protocol/2-protocol-specification" class="text-teal-300 hover:text-teal-200 underline block">ACP Protocol Specification — DeepWiki</a>
<div class="text-gray-400 text-xs">Community deep-dive on protocol internals</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Thank You -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center">
<div class="relative">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-48" alt="" /></div>
<img src="./sdp-logo.png" class="w-48 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Thank You</h1>
<div class="mt-6 text-xl opacity-80">Questions?</div>

<div class="mt-8 grid grid-cols-3 gap-6 w-full max-w-3xl">
<div class="text-center p-4 bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-xl border border-violet-500/30">
<div class="text-3xl font-bold text-violet-300">N+M</div>
<div class="text-sm mt-1 opacity-70">Integrations</div>
<div class="text-xs mt-2 opacity-60">vs N×M without ACP</div>
</div>
<div class="text-center p-4 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/30">
<div class="text-3xl font-bold text-purple-300">4</div>
<div class="text-sm mt-1 opacity-70">Protocol Layers</div>
<div class="text-xs mt-2 opacity-60">Transport → Protocol → Session → Application</div>
</div>
<div class="text-center p-4 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-xl border border-indigo-500/30">
<div class="text-3xl font-bold text-indigo-300">4</div>
<div class="text-sm mt-1 opacity-70">Language SDKs</div>
<div class="text-xs mt-2 opacity-60">TypeScript, Python, Rust, Kotlin</div>
</div>
</div>

<div class="mt-8 w-32 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
</div>
</div>
