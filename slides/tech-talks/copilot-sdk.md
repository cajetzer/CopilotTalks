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
section: Customization & Context
status: active
updated: 2026-04-14
---

<script setup>
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
import CoreQuestionSlide from './components/CoreQuestionSlide.vue'
import TocSlide from './components/TocSlide.vue'
import WhatYouCanDoTodaySlide from './components/WhatYouCanDoTodaySlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="GitHub Copilot SDK"
subtitle="Build AI-Powered Tools for Your Workflows"
tagline="Transform repetitive analysis into automated intelligence"
meta="Tech Talk · 45 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I embed Copilot's agentic capabilities directly into my own applications and workflows?"
subtext="When AI automation needs go beyond IDE and CLI — release notes, test analysis —"
highlight="the SDK provides production-tested agent runtime as a programmable library."
:cards='[
  { icon: "🔧", title: "Backend Engineers Building Automation", description: "Embed Copilot agent runtime directly in Node.js scripts and CI/CD pipelines" },
  { icon: "🚀", title: "DevOps Teams Owning CI/CD Pipelines", description: "Auto-generate release notes, analyze test failures, and triage flaky tests" },
  { icon: "🏗️", title: "Platform Teams Creating Internal Tools", description: "Jira, Slack, and GitHub integrations with AI decision-making built right in" },
  { title: "Automation Gap", description: "AI capabilities needed beyond IDE and CLI — SDK bridges this gap programmatically" },
  { title: "Production Runtime", description: "No DIY agent loops — SDK provides battle-tested Copilot runtime as a library" },
  { title: "Integrations Ready", description: "Connect Jira, Slack, and CI/CD with AI that understands your team context" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🏗️", title: "Architecture", subtitle: "How SDK wraps Copilot CLI", blurb: "Agent runtime as a library", slide: 4 },
    { icon: "🚀", title: "Getting Started", subtitle: "Install, configure, first SDK call", blurb: "pip install in 15 minutes", slide: 7 },
    { icon: "🌐", title: "Advanced Patterns", subtitle: "Web APIs and scheduled automation", blurb: "Embed agents in any application", slide: 10 },
    { icon: "📊", title: "Real-World Use Cases", subtitle: "Release notes, test analysis, more", blurb: "2 hours → 10 minutes automation wins", slide: 13 },
  ]'
/>
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

<!-- SLIDE: Part 2 — Getting Started -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Getting Started</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Install, configure, and make your first SDK call</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-2 gap-3 text-sm max-w-2xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">📦</div>
<div class="text-blue-300 font-semibold">Installation</div>
<div class="text-xs opacity-70 mt-1">pip install in 15 minutes</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">⚙️</div>
<div class="text-indigo-300 font-semibold">CLI Tool Pattern</div>
<div class="text-xs opacity-70 mt-1">Release notes generator example</div>
</div></div>
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
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">� Getting Started</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Installation & Basic Usage</div>
<div class="text-xs text-white/50">Prerequisites: Copilot CLI installed and authenticated</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="grid grid-cols-2 gap-3 text-sm mb-3">
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
<div class="p-3 bg-gray-950/60 rounded-lg border border-gray-700/50 flex-1 min-h-0 flex flex-col">
<div class="text-xs text-gray-400 mb-2">Python: Basic Chat Example</div>
<div class="overflow-y-auto flex-1 bg-gray-900/50 rounded p-3 font-mono text-xs text-gray-300 leading-relaxed">
<div><span class="text-purple-400">from</span> github_copilot_sdk <span class="text-purple-400">import</span> CopilotClient</div>
<div class="mt-2 text-green-400"># Initialize client (spawns CLI in server mode)</div>
<div>client = CopilotClient()</div>
<div class="mt-2 text-green-400"># Simple chat interaction</div>
<div>response = client.chat(<span class="text-amber-300">"Explain OAuth vs JWT"</span>)</div>
<div><span class="text-cyan-400">print</span>(response.text)</div>
<div class="mt-2 text-green-400"># Streaming for better UX</div>
<div><span class="text-purple-400">for</span> chunk <span class="text-purple-400">in</span> client.chat_stream(<span class="text-amber-300">"Analyze this repository"</span>):</div>
<div class="ml-4"><span class="text-cyan-400">print</span>(chunk.text, end=<span class="text-amber-300">''</span>, flush=<span class="text-cyan-400">True</span>)</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Pattern 1 - CLI Tool -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">� Getting Started</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Pattern 1: CLI Tool with SDK Backend</div>
<div class="text-xs text-white/50">Example: Release notes generator</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="p-3 bg-gray-950/60 rounded-lg border border-gray-700/50 flex-1 min-h-0 flex flex-col">
<div class="text-xs text-gray-400 mb-2">release-notes.py — Generate customer-facing notes from git commits</div>
<div class="overflow-y-auto flex-1 bg-gray-900/50 rounded p-3 font-mono text-xs text-gray-300 leading-relaxed">
<div class="text-gray-500">#!/usr/bin/env python3</div>
<div><span class="text-purple-400">import</span> argparse</div>
<div><span class="text-purple-400">from</span> github_copilot_sdk <span class="text-purple-400">import</span> CopilotClient</div>
<div class="mt-2"><span class="text-purple-400">def</span> <span class="text-cyan-400">main</span>():</div>
<div class="ml-4">parser = argparse.ArgumentParser(description=<span class="text-amber-300">'Release notes generator'</span>)</div>
<div class="ml-4">parser.add_argument(<span class="text-amber-300">'--from-tag'</span>, required=<span class="text-cyan-400">True</span>)</div>
<div class="ml-4">parser.add_argument(<span class="text-amber-300">'--to-tag'</span>, default=<span class="text-amber-300">'HEAD'</span>)</div>
<div class="ml-4">args = parser.parse_args()</div>
<div class="ml-4 mt-2">client = CopilotClient()</div>
<div class="ml-4">prompt = <span class="text-amber-300">f"""</span></div>
<div class="ml-4"><span class="text-amber-300">Generate release notes from &#123;args.from_tag&#125; to &#123;args.to_tag&#125;.</span></div>
<div class="ml-4"><span class="text-amber-300">Categorize as Features, Fixes, Breaking Changes, Security.</span></div>
<div class="ml-4"><span class="text-amber-300">Explain customer value, not technical implementation.</span></div>
<div class="ml-4"><span class="text-amber-300">"""</span></div>
<div class="ml-4 mt-2">response = client.chat(prompt)</div>
<div class="ml-4"><span class="text-cyan-400">print</span>(response.text)</div>
<div class="mt-2"><span class="text-purple-400">if</span> __name__ == <span class="text-amber-300">'__main__'</span>:</div>
<div class="ml-4">main()</div>
</div>
</div>
<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30 text-center text-xs">
<span class="text-green-200">Outcome: 2 hours → 10 minutes per release (92% time reduction)</span>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Advanced Patterns -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-blue-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-blue-400 bg-clip-text text-transparent leading-tight">Advanced Patterns</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Web APIs and scheduled automation</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-2 gap-3 text-sm max-w-2xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🌐</div>
<div class="text-indigo-300 font-semibold">Web APIs</div>
<div class="text-xs opacity-70 mt-1">REST endpoints exposing SDK capabilities</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">⏰</div>
<div class="text-purple-300 font-semibold">Scheduled Tasks</div>
<div class="text-xs opacity-70 mt-1">Automated analysis on cron schedules</div>
</div></div>
<div class="mt-4 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-4 py-2 text-left max-w-xl">
<span class="text-gray-400">From simple scripts to production services</span><br />
<span class="text-indigo-300 mt-1 block">↳ embed agents in any application or workflow</span>
</div></div>
</div>

---

<!-- SLIDE: Pattern 2 - Web API -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🌐 Advanced Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Pattern 2: Web API with SDK</div>
<div class="text-xs text-white/50">Expose SDK capabilities via REST endpoints</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="p-3 bg-gray-950/60 rounded-lg border border-gray-700/50 flex-1 min-h-0 flex flex-col">
<div class="text-xs text-gray-400 mb-2">Flask API: PR analysis endpoint with security-restricted SDK client</div>
<div class="overflow-y-auto flex-1 bg-gray-900/50 rounded p-3 font-mono text-xs text-gray-300 leading-relaxed">
<div><span class="text-purple-400">from</span> flask <span class="text-purple-400">import</span> Flask, request, jsonify</div>
<div><span class="text-purple-400">from</span> github_copilot_sdk <span class="text-purple-400">import</span> CopilotClient</div>
<div class="mt-2">app = Flask(__name__)</div>
<div>client = CopilotClient(</div>
<div class="ml-4">allowed_tools=[<span class="text-amber-300">'file_read'</span>],  <span class="text-green-400"># Read-only for security</span></div>
<div class="ml-4">working_directory=<span class="text-amber-300">'/tmp/pr-diffs'</span></div>
<div>)</div>
<div class="mt-2"><span class="text-cyan-400">@app.route</span>(<span class="text-amber-300">'/api/analyze-pr'</span>, methods=[<span class="text-amber-300">'POST'</span>])</div>
<div><span class="text-purple-400">def</span> <span class="text-cyan-400">analyze_pr</span>():</div>
<div class="ml-4">pr_diff = request.json.get(<span class="text-amber-300">'diff'</span>)</div>
<div class="ml-4"><span class="text-purple-400">if not</span> pr_diff:</div>
<div class="ml-8"><span class="text-purple-400">return</span> jsonify(&#123;<span class="text-amber-300">'error'</span>: <span class="text-amber-300">'Missing diff'</span>&#125;), 400</div>
<div class="ml-4 mt-2">prompt = <span class="text-amber-300">f"""</span></div>
<div class="ml-4"><span class="text-amber-300">Review this PR for security, logic errors, performance issues.</span></div>
<div class="ml-4"><span class="text-amber-300">Provide actionable feedback with line numbers:</span></div>
<div class="ml-4"><span class="text-amber-300">&#123;pr_diff&#125;</span></div>
<div class="ml-4"><span class="text-amber-300">"""</span></div>
<div class="ml-4 mt-2"><span class="text-purple-400">try</span>:</div>
<div class="ml-8">response = client.chat(prompt)</div>
<div class="ml-8"><span class="text-purple-400">return</span> jsonify(&#123;<span class="text-amber-300">'analysis'</span>: response.text&#125;)</div>
<div class="ml-4"><span class="text-purple-400">except</span> Exception <span class="text-purple-400">as</span> e:</div>
<div class="ml-8"><span class="text-purple-400">return</span> jsonify(&#123;<span class="text-amber-300">'error'</span>: <span class="text-cyan-400">str</span>(e)&#125;), 500</div>
</div>
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
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🌐 Advanced Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Pattern 3: Scheduled Automation</div>
<div class="text-xs text-white/50">Run SDK-powered analysis on a schedule</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="p-3 bg-gray-950/60 rounded-lg border border-gray-700/50 flex-1 min-h-0 flex flex-col">
<div class="text-xs text-gray-400 mb-2">Daily test failure analysis — identifies root causes, flaky tests, suggested fixes</div>
<div class="overflow-y-auto flex-1 bg-gray-900/50 rounded p-3 font-mono text-xs text-gray-300 leading-relaxed">
<div><span class="text-purple-400">import</span> schedule, time, json</div>
<div><span class="text-purple-400">from</span> github_copilot_sdk <span class="text-purple-400">import</span> CopilotClient</div>
<div class="mt-2"><span class="text-purple-400">def</span> <span class="text-cyan-400">analyze_test_failures</span>():</div>
<div class="ml-4"><span class="text-green-400">"""Runs every morning to analyze overnight test failures"""</span></div>
<div class="ml-4">client = CopilotClient()</div>
<div class="ml-4">report = fetch_latest_test_report()  <span class="text-green-400"># External function</span></div>
<div class="ml-4 mt-2">prompt = <span class="text-amber-300">f"""</span></div>
<div class="ml-4"><span class="text-amber-300">Analyze test failures from last 24 hours:</span></div>
<div class="ml-4"><span class="text-amber-300">1. Root causes with confidence scores (high/medium/low)</span></div>
<div class="ml-4"><span class="text-amber-300">2. Flaky tests based on failure patterns</span></div>
<div class="ml-4"><span class="text-amber-300">3. Specific code locations to investigate</span></div>
<div class="ml-4"><span class="text-amber-300">4. Suggested fixes for each failure</span></div>
<div class="ml-4 mt-1"><span class="text-amber-300">Test Report (JSON):</span></div>
<div class="ml-4"><span class="text-amber-300">&#123;json.dumps(report, indent=2)&#125;</span></div>
<div class="ml-4"><span class="text-amber-300">"""</span></div>
<div class="ml-4 mt-2">analysis = client.chat(prompt)</div>
<div class="ml-4">notify_team(analysis.text)  <span class="text-green-400"># Slack, Jira, email</span></div>
<div class="ml-4">create_jira_tickets(parse_issues(analysis.text))</div>
<div class="mt-2"><span class="text-green-400"># Schedule daily at 9:00 AM</span></div>
<div>schedule.every().day.at(<span class="text-amber-300">"09:00"</span>).do(analyze_test_failures)</div>
</div>
</div>
<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30 text-center text-xs">
<span class="text-green-200">45 min → 5 min per failed build | Flaky tests caught on first failure</span>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Real-World Use Cases -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
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
<WhatYouCanDoTodaySlide
  :today='["Install Copilot CLI and authenticate", "pip install github-copilot-sdk", "Run the basic example"]'
  :thisWeek='["Identify a repetitive analysis task", "Build a basic CLI tool (Pattern 1)", "Test with real data"]'
  :thisMonth='["Add error handling and retries", "MCP server integration", "Deploy as webhook or cron job"]'
  footer="Start with release notes or test analysis — highest immediate ROI. Then add error handling, MCP integration, and deploy as a webhook or scheduled job to automate repetitive analysis at scale."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Primary Documentation", color: "cyan", items: [
        { href: "https://github.com/github/copilot-sdk", label: "GitHub Copilot SDK Repository", description: "Installation, API reference, language-specific examples" },
        { href: "https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/", label: "SDK Blog Announcement", description: "Technical preview announcement and architecture overview" },
        { href: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line", label: "Copilot CLI Documentation", description: "Understanding the agent runtime SDK wraps" }
    ] },
    { title: "Additional Resources", color: "purple", items: [
        { href: "https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md", label: "Python SDK Cookbook", description: "Python-specific patterns and recipes" },
        { href: "https://docs.github.com/en/copilot/concepts/billing/copilot-requests", label: "Copilot Requests & Billing", description: "Understanding quotas and usage tracking" },
        { href: "https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md", label: "BYOK Documentation", description: "Bring Your Own Key for custom model providers" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="GitHub Copilot SDK: Build AI-Powered Tools"
:cards="[
  { icon: '📝', value: '92%', detail: 'Time reduction on release notes', subdetail: '2 hours → 10 min with automated generation' },
  { icon: '🧪', value: '60%', detail: 'Less CI blockage time', subdetail: 'Automated test analysis and recommendations' },
  { icon: '🚀', value: '2×', detail: 'PR throughput increase', subdetail: 'Code quality enforcement bots' },
]"
prompt="Questions? Let's discuss your automation use cases"
/>
