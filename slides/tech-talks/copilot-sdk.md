---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot SDK: Build AI-Powered Tools for Your Workflows
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot SDK
module: tech-talks/copilot-sdk
mdc: true
status: active
updated: 2026-02-18
---

<!-- SLIDE: Title Slide -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">GitHub Copilot SDK</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">Build AI-Powered Tools for Your Workflows</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Transform repetitive analysis into automated intelligence</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 45 minutes</span>
</div>

---

<!-- SLIDE: The Core Question -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔓 The Core Question</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-4 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 max-w-4xl mx-auto mb-4">
<div class="text-xl font-bold text-cyan-300 mb-2">
"How do I embed Copilot's agentic capabilities directly into my own applications and workflows?"
</div>
</div>

<div class="grid grid-cols-3 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30">
<div class="text-xl mb-1">🤖</div>
<div class="font-semibold text-amber-300 text-sm">Automation Gap</div>
<div class="text-xs opacity-80 mt-1">Release notes, test analysis need AI but don't fit IDE/CLI patterns</div>
</div>
<div class="p-3 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
<div class="text-xl mb-1">⏱️</div>
<div class="font-semibold text-orange-300 text-sm">Build Time Cost</div>
<div class="text-xs opacity-80 mt-1">Months building planning loops, tool orchestration before solving real problems</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/30 to-purple-900/30 rounded-lg border border-red-500/30">
<div class="text-xl mb-1">🔗</div>
<div class="font-semibold text-red-300 text-sm">Integration Required</div>
<div class="text-xs opacity-80 mt-1">Custom tools need to integrate with Jira, Slack, CI/CD — not run standalone</div>
</div>
</div>

<div class="mt-3 p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30 text-center">
<div class="text-sm text-cyan-200">The SDK provides production-tested agent runtime as a programmable library</div>
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
<div class="grid grid-cols-3 gap-4 mt-2 max-w-5xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">🏗️</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Architecture</div>
<div class="text-sm text-gray-300 mt-1">How SDK wraps Copilot CLI</div>
<div class="text-xs text-cyan-400/70 mt-1">Agent runtime as a library</div>
</div>
</div>
<div @click="$nav.go(7)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">🔧</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Integration Patterns</div>
<div class="text-sm text-gray-300 mt-1">CLI tools, APIs, automation</div>
<div class="text-xs text-blue-400/70 mt-1">Embed agents in any application</div>
</div>
</div>
<div @click="$nav.go(12)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">🚀</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Real-World Use Cases</div>
<div class="text-sm text-gray-300 mt-1">Release notes, test analysis, more</div>
<div class="text-xs text-indigo-400/70 mt-1">2 hours → 10 minutes automation wins</div>
</div>
</div>
</div>

<div class="mt-4 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Architecture & Capabilities -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Architecture & Capabilities</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">How SDK wraps the Copilot CLI agent runtime</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">🔌</div>
<div class="text-cyan-300 font-semibold">JSON-RPC Interface</div>
<div class="text-xs opacity-70 mt-1">SDK spawns CLI in server mode, communicates via stdio</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🌐</div>
<div class="text-blue-300 font-semibold">Multi-Language SDKs</div>
<div class="text-xs opacity-70 mt-1">Python, TypeScript, Go, .NET — consistent APIs</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-indigo-300 font-semibold">Production Features</div>
<div class="text-xs opacity-70 mt-1">Streaming, memory, MCP, BYOK, tool permissions</div>
</div>
</div>
<div class="mt-4 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-4 py-2 text-left max-w-xl">
<span class="text-gray-400">CLI is the agent runtime; SDK is how you control it</span><br />
<span class="text-cyan-300 mt-1 block">↳ programmatically</span>
</div>
</div>
</div>

---

<!-- SLIDE: How SDK Works -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Architecture</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Communication Flow</div>
<div class="text-xs text-white/50">SDK spawns CLI in server mode and communicates via JSON-RPC over stdio</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="flex items-center justify-center gap-2 flex-wrap mb-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30 text-center min-w-[140px]">
<div class="text-xl mb-1">💻</div>
<div class="text-sm font-semibold text-cyan-300">Your Application</div>
<div class="text-xs opacity-70">Defines prompts & logic</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30 text-center min-w-[140px]">
<div class="text-xl mb-1">📦</div>
<div class="text-sm font-semibold text-blue-300">SDK Client</div>
<div class="text-xs opacity-70">JSON-RPC over stdio</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30 text-center min-w-[140px]">
<div class="text-xl mb-1">🤖</div>
<div class="text-sm font-semibold text-indigo-300">Copilot CLI</div>
<div class="text-xs opacity-70">Agent runtime (server mode)</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30 text-center min-w-[140px]">
<div class="text-xl mb-1">☁️</div>
<div class="text-sm font-semibold text-purple-300">Copilot Service</div>
<div class="text-xs opacity-70">Model inference</div>
</div>
</div>

<div class="grid grid-cols-2 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">SDK Responsibilities</div>
<div class="space-y-1 text-xs">
<div>• Spawns/connects to CLI process</div>
<div>• Manages JSON-RPC communication</div>
<div>• Provides streaming APIs</div>
<div>• Handles lifecycle & errors</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">CLI Responsibilities</div>
<div class="space-y-1 text-xs">
<div>• Planning & tool orchestration</div>
<div>• Multi-turn execution loops</div>
<div>• Context & memory management</div>
<div>• GitHub authentication</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: SDK Capabilities -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Architecture</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">What You Get</div>
<div class="text-xs text-white/50">All Copilot CLI features accessible programmatically + SDK-specific advantages</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1 text-sm">Core Agent Features</div>
<div class="space-y-1 text-xs">
<div>✅ Planning & multi-turn execution</div>
<div>✅ Tool invocation (files, shell, Git)</div>
<div>✅ Multiple AI models (GPT-4, Claude)</div>
<div>✅ Custom agents, skills, tools</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1 text-sm">Advanced Features</div>
<div class="space-y-1 text-xs">
<div>✅ MCP server integration</div>
<div>✅ Persistent memory across sessions</div>
<div>✅ Real-time streaming responses</div>
<div>✅ BYOK (Bring Your Own Key)</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-indigo-300 mb-1 text-sm">SDK-Specific Advantages</div>
<div class="space-y-1 text-xs">
<div>🎯 Embed in any application</div>
<div>🎯 Programmatic prompt control</div>
<div>🎯 Tool permission sandboxing</div>
<div>🎯 Error handling & retries</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1 text-sm">Security & Production</div>
<div class="space-y-1 text-xs">
<div>🔒 Restricted tool permissions</div>
<div>🔒 Working directory limits</div>
<div>🔒 Rate limiting & quotas</div>
<div>🔒 Production error handling</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30 text-center text-xs">
<span class="text-cyan-200">Same production-tested runtime as Copilot CLI — no rebuilding agent infrastructure</span>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Integration Patterns -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Integration Patterns</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Building tools with the SDK</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">⚙️</div>
<div class="text-blue-300 font-semibold">CLI Tools</div>
<div class="text-xs opacity-70 mt-1">Command-line tools powered by SDK backend</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🌐</div>
<div class="text-indigo-300 font-semibold">Web APIs</div>
<div class="text-xs opacity-70 mt-1">REST endpoints exposing SDK capabilities</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">⏰</div>
<div class="text-purple-300 font-semibold">Scheduled Tasks</div>
<div class="text-xs opacity-70 mt-1">Automated analysis on cron schedules</div>
</div>
</div>
<div class="mt-4 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-4 py-2 text-left max-w-xl">
<span class="text-gray-400">Install SDK in 15 minutes, embed agents in any app</span><br />
<span class="text-blue-300 mt-1 block">↳ no months-long platform build</span>
</div>
</div>
</div>

---

<!-- SLIDE: Getting Started -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Integration Patterns</span>
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
<div class="text-lg font-bold text-white mb-0.5">Installation & Basic Usage</div>
<div class="text-xs text-white/50">Prerequisites: Copilot CLI installed and authenticated</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm mb-2">
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1 text-xs">Install SDK</div>
<div class="space-y-1 text-xs font-mono">
<div class="text-gray-300">Python: <span class="text-cyan-400">pip install github-copilot-sdk</span></div>
<div class="text-gray-300">TypeScript: <span class="text-cyan-400">npm install @github/copilot-sdk</span></div>
<div class="text-gray-300">Go: <span class="text-cyan-400">go get github.com/github/copilot-sdk/go</span></div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1 text-xs">Prerequisites</div>
<div class="space-y-1 text-xs">
<div>✓ Copilot CLI installed & authenticated</div>
<div>✓ GitHub Copilot subscription</div>
<div>✓ Python 3.8+ / Node 18+ / Go 1.20+ / .NET 6+</div>
</div>
</div>
</div>

<div class="p-2 bg-gray-950/60 rounded-lg border border-gray-700/50">
<div class="text-xs text-gray-400 mb-1">Python: Basic Chat Example</div>
<pre class="overflow-y-auto max-h-48 text-xs"><code class="language-python">from github_copilot_sdk import CopilotClient

# Initialize client (spawns CLI in server mode)
client = CopilotClient()

# Simple chat interaction
response = client.chat("Explain OAuth vs JWT")
print(response.text)

# Streaming for better UX
for chunk in client.chat_stream("Analyze this repository"):
    print(chunk.text, end='', flush=True)</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: Pattern 1 - CLI Tool -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Integration Patterns</span>
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
<div class="text-lg font-bold text-white mb-0.5">Pattern 1: CLI Tool with SDK Backend</div>
<div class="text-xs text-white/50">Example: Release notes generator</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="p-2 bg-gray-950/60 rounded-lg border border-gray-700/50 flex-1 min-h-0">
<div class="text-xs text-gray-400 mb-1">release-notes.py — Generate customer-facing notes from git commits</div>
<pre class="overflow-y-auto max-h-48 text-xs"><code class="language-python">#!/usr/bin/env python3
import argparse
from github_copilot_sdk import CopilotClient

def main():
    parser = argparse.ArgumentParser(description='Release notes generator')
    parser.add_argument('--from-tag', required=True)
    parser.add_argument('--to-tag', default='HEAD')
    args = parser.parse_args()

    client = CopilotClient()
    
    prompt = f"""
    Generate release notes from {args.from_tag} to {args.to_tag}.
    Categorize as Features, Fixes, Breaking Changes, Security.
    Explain customer value, not technical implementation.
    """
    
    response = client.chat(prompt)
    print(response.text)

if __name__ == '__main__':
    main()</code></pre>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30 text-center text-xs">
<span class="text-green-200">Outcome: 2 hours → 10 minutes per release (92% time reduction)</span>
</div>
</div>
</div>

---

<!-- SLIDE: Pattern 2 - Web API -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Integration Patterns</span>
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
<div class="text-lg font-bold text-white mb-0.5">Pattern 2: Web API with SDK</div>
<div class="text-xs text-white/50">Expose SDK capabilities via REST endpoints</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="p-2 bg-gray-950/60 rounded-lg border border-gray-700/50 flex-1 min-h-0">
<div class="text-xs text-gray-400 mb-1">Flask API: PR analysis endpoint with security-restricted SDK client</div>
<pre class="overflow-y-auto max-h-48 text-xs"><code class="language-python">from flask import Flask, request, jsonify
from github_copilot_sdk import CopilotClient

app = Flask(__name__)
client = CopilotClient(
    allowed_tools=['file_read'],  # Read-only for security
    working_directory='/tmp/pr-diffs'
)

@app.route('/api/analyze-pr', methods=['POST'])
def analyze_pr():
    pr_diff = request.json.get('diff')
    if not pr_diff:
        return jsonify({'error': 'Missing diff'}), 400

    prompt = f"""
    Review this PR for security, logic errors, performance issues.
    Provide actionable feedback with line numbers:
    {pr_diff}
    """
    
    try:
        response = client.chat(prompt)
        return jsonify({'analysis': response.text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500</code></pre>
</div>

<div class="mt-2 grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded border border-blue-500/30">
<span class="font-semibold text-blue-300">Security:</span> Restricted tools, sandboxed directory
</div>
<div class="p-2 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded border border-green-500/30">
<span class="font-semibold text-green-300">Integration:</span> Webhooks, CI/CD, internal dashboards
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Pattern 3 - Scheduled Automation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Integration Patterns</span>
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
<div class="text-lg font-bold text-white mb-0.5">Pattern 3: Scheduled Automation</div>
<div class="text-xs text-white/50">Run SDK-powered analysis on a schedule</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="p-2 bg-gray-950/60 rounded-lg border border-gray-700/50 flex-1 min-h-0">
<div class="text-xs text-gray-400 mb-1">Daily test failure analysis — identifies root causes, flaky tests, suggested fixes</div>
<pre class="overflow-y-auto max-h-48 text-xs"><code class="language-python">import schedule, time, json
from github_copilot_sdk import CopilotClient

def analyze_test_failures():
    """Runs every morning to analyze overnight test failures"""
    client = CopilotClient()
    report = fetch_latest_test_report()  # External function
    
    prompt = f"""
    Analyze test failures from last 24 hours:
    1. Root causes with confidence scores (high/medium/low)
    2. Flaky tests based on failure patterns
    3. Specific code locations to investigate
    4. Suggested fixes for each failure
    
    Test Report (JSON):
    {json.dumps(report, indent=2)}
    """
    
    analysis = client.chat(prompt)
    notify_team(analysis.text)  # Slack, Jira, email
    create_jira_tickets(parse_issues(analysis.text))

# Schedule daily at 9:00 AM
schedule.every().day.at("09:00").do(analyze_test_failures)</code></pre>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30 text-center text-xs">
<span class="text-green-200">45 min → 5 min per failed build | Flaky tests caught on first failure</span>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Real-World Use Cases -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">Real-World Use Cases</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Production deployments with measurable outcomes</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📝</div>
<div class="text-indigo-300 font-semibold">Release Notes</div>
<div class="text-xs opacity-70 mt-1">2 hours → 10 minutes</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🧪</div>
<div class="text-purple-300 font-semibold">Test Analysis</div>
<div class="text-xs opacity-70 mt-1">45 min → 5 min per failure</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">🚨</div>
<div class="text-pink-300 font-semibold">Incident Response</div>
<div class="text-xs opacity-70 mt-1">40% faster MTTR</div>
</div>
</div>
<div class="mt-4 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-4 py-2 text-left max-w-xl">
<span class="text-gray-400">From manual analysis to automated intelligence</span><br />
<span class="text-indigo-300 mt-1 block">↳ real time savings at production scale</span>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case 1 - Release Engineering -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Real-World Use Cases</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Release Engineering Automation</div>
<div class="text-xs text-white/50">Automated git commit analysis → categorized customer-facing release notes</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm mb-2">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-center mb-2">
<div class="text-xl">❌</div>
<div class="font-bold text-red-300 text-sm">Before</div>
</div>
<div class="space-y-1 text-xs">
<div>• 100-200 commits manual review</div>
<div>• 2+ hours per release</div>
<div>• Quality varies by author</div>
<div>• Release managers do git archaeology</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="text-center mb-2">
<div class="text-xl">✨</div>
<div class="font-bold text-emerald-300 text-sm">After (SDK)</div>
</div>
<div class="space-y-1 text-xs">
<div>• SDK analyzes git history automatically</div>
<div>• 10 minutes per release</div>
<div>• Consistent quality every time</div>
<div>• Managers focus on strategy</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30 text-xs">
<div class="font-semibold text-indigo-300 mb-1">Implementation Highlights</div>
<div class="space-y-1">
<div>✓ Categorizes: Features, Fixes, Breaking Changes, Security Updates</div>
<div>✓ Explains customer value, not technical implementation</div>
<div>✓ Includes issue references and migration steps</div>
<div>✓ Outputs markdown ready for GitHub releases</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30 text-center text-xs">
<span class="text-green-200 font-semibold">Outcome: 2+ hours → 10 minutes (92% time reduction)</span>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case 2 - Test Infrastructure -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Real-World Use Cases</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Intelligent Test Infrastructure Monitoring</div>
<div class="text-xs text-white/50">Automated failure analysis, flaky test detection, root cause identification</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm mb-2">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-center mb-2">
<div class="text-xl">❌</div>
<div class="font-bold text-red-300 text-sm">Before</div>
</div>
<div class="space-y-1 text-xs">
<div>• Manual log analysis per failure</div>
<div>• 45 min average per failed build</div>
<div>• Flaky tests undetected until 3rd failure</div>
<div>• PRs blocked by CI issues</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="text-center mb-2">
<div class="text-xl">✨</div>
<div class="font-bold text-emerald-300 text-sm">After (SDK)</div>
</div>
<div class="space-y-1 text-xs">
<div>• SDK analyzes test reports automatically</div>
<div>• 5 min per failed build</div>
<div>• Flaky tests caught on first failure</div>
<div>• 60% reduction in CI blockage time</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30 text-xs">
<div class="font-semibold text-indigo-300 mb-1">Analysis Outputs</div>
<div class="space-y-1">
<div>• Root causes with confidence scores (high/medium/low)</div>
<div>• Flaky test detection via error pattern analysis</div>
<div>• Specific file paths and line numbers for investigation</div>
<div>• Concrete suggested fixes prioritized by quick wins</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30 text-center text-xs">
<span class="text-green-200 font-semibold">Outcome: 45 min → 5 min per build | 60% less CI blockage</span>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case 3 - Code Review Bots -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Real-World Use Cases</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Code Quality Enforcement Bots</div>
<div class="text-xs text-white/50">Pre-review analysis of PR diffs against team-specific standards</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm mb-2">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-center mb-2">
<div class="text-xl">❌</div>
<div class="font-bold text-red-300 text-sm">Before</div>
</div>
<div class="space-y-1 text-xs">
<div>• Senior engineers check basic standards</div>
<div>• 2-3 day wait for feedback</div>
<div>• Review bottleneck on architecture team</div>
<div>• Junior devs stuck on preventable issues</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="text-center mb-2">
<div class="text-xl">✨</div>
<div class="font-bold text-emerald-300 text-sm">After (SDK Bot)</div>
</div>
<div class="space-y-1 text-xs">
<div>• SDK bot checks standards automatically</div>
<div>• Instant inline feedback on PR</div>
<div>• Seniors focus on architecture/design</div>
<div>• PR throughput doubled</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30 text-xs">
<div class="font-semibold text-indigo-300 mb-1">Review Scope</div>
<div class="space-y-1">
<div>Security: SQL injection, XSS, auth issues • Performance: N+1 queries, missing pagination</div>
<div>Error handling: try/catch, timeouts, retries • Testing: coverage requirements, migration tests</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30 text-center text-xs">
<span class="text-green-200 font-semibold">Outcome: 50% faster reviews | 2× PR throughput | Instant feedback</span>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3 text-sm mb-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-xl mb-2">⚡</div>
<div class="font-semibold text-cyan-300 text-sm mb-1">Immediate (15 min)</div>
<div class="space-y-1 text-xs">
<div>□ Install Copilot CLI</div>
<div>□ <code class="text-cyan-400">pip install github-copilot-sdk</code></div>
<div>□ Run basic example</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-xl mb-2">🔨</div>
<div class="font-semibold text-blue-300 text-sm mb-1">Short-Term (1 hour)</div>
<div class="space-y-1 text-xs">
<div>□ Identify repetitive analysis</div>
<div>□ Build basic CLI tool (Pattern 1)</div>
<div>□ Test with real data</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-xl mb-2">🚀</div>
<div class="font-semibold text-indigo-300 text-sm mb-1">Advanced (2-4 hours)</div>
<div class="space-y-1 text-xs">
<div>□ Add error handling + retries</div>
<div>□ MCP server integration</div>
<div>□ Deploy as webhook/cron</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30 text-sm">
<div class="font-semibold text-purple-300 mb-2 text-sm">Related Patterns & Next Steps</div>
<div class="grid grid-cols-2 gap-2 text-xs">
<div>📖 <span class="text-blue-400">Copilot CLI</span> — Interactive terminal experience</div>
<div>📖 <span class="text-blue-400">MCP Apps</span> — Extend SDK with internal systems</div>
<div>📖 <span class="text-blue-400">Agentic SDLC</span> — Full repository automation</div>
<div>📖 <span class="text-blue-400">Custom Agents</span> — Domain-specific agent patterns</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30 text-center">
<div class="text-sm text-purple-200">Start with release notes or test analysis — highest immediate ROI</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 References</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-2 text-sm">Primary Documentation</div>
<div class="space-y-2 text-xs">
<div>
<a href="https://github.com/github/copilot-sdk" target="_blank" class="text-blue-400 hover:text-blue-300">GitHub Copilot SDK Repository</a>
<div class="text-gray-400 text-xs">Installation, API reference, language-specific examples</div>
</div>
<div>
<a href="https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/" target="_blank" class="text-blue-400 hover:text-blue-300">SDK Blog Announcement</a>
<div class="text-gray-400 text-xs">Technical preview announcement and architecture overview</div>
</div>
<div>
<a href="https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line" target="_blank" class="text-blue-400 hover:text-blue-300">Copilot CLI Documentation</a>
<div class="text-gray-400 text-xs">Understanding the agent runtime SDK wraps</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-2 text-sm">Additional Resources</div>
<div class="space-y-2 text-xs">
<div>
<a href="https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md" target="_blank" class="text-blue-400 hover:text-blue-300">Python SDK Cookbook</a>
<div class="text-gray-400 text-xs">Python-specific patterns and recipes</div>
</div>
<div>
<a href="https://docs.github.com/en/copilot/concepts/billing/copilot-requests" target="_blank" class="text-blue-400 hover:text-blue-300">Copilot Requests & Billing</a>
<div class="text-gray-400 text-xs">Understanding quotas and usage tracking</div>
</div>
<div>
<a href="https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md" target="_blank" class="text-blue-400 hover:text-blue-300">BYOK Documentation</a>
<div class="text-gray-400 text-xs">Bring Your Own Key for custom model providers</div>
</div>
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
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">GitHub Copilot SDK: Build AI-Powered Tools</span>
</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-lg">92%</div>
<div class="text-gray-300 mt-2 text-xs">Time reduction on release notes (2 hours → 10 min)</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-bold text-lg">60%</div>
<div class="text-gray-300 mt-2 text-xs">Less CI blockage time via automated test analysis</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-bold text-lg">2×</div>
<div class="text-gray-300 mt-2 text-xs">PR throughput with code quality enforcement bots</div>
</div>
</div>

<div class="mt-6 text-sm opacity-60 relative z-10">Questions? Let's discuss your automation use cases</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
