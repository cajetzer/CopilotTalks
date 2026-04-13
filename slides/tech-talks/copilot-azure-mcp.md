---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot CLI + Azure MCP: Rapid Azure Prototyping and Deployment
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot CLI + Azure MCP
module: tech-talks/copilot-azure-mcp
mdc: true
section: Copilot Tools
status: active
updated: 2026-04-10
---

<script setup>
import TitleSlide from '../components/TitleSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="GitHub Copilot CLI + Azure MCP"
subtitle="Rapid Azure Prototyping and Deployment"
tagline="Infrastructure becomes conversational — AI that knows what's running in your subscriptions"
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
<div class="text-3xl font-semibold mb-4">"How do I prototype and deploy Azure solutions conversationally from my terminal?"</div>
<div class="text-xl opacity-90 mt-6">With AI that actually knows what's already running in your subscriptions — <span class="text-cyan-300 font-semibold">no more portal context-switching or assumption-based deployments.</span></div>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 rounded-lg border border-cyan-500/20 text-center">
<div class="text-cyan-300 font-bold">No Portal Switching</div>
<div class="opacity-70 mt-1">Stay in terminal</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-lg border border-blue-500/20 text-center">
<div class="text-blue-300 font-bold">Live State Aware</div>
<div class="opacity-70 mt-1">Knows your resources</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 rounded-lg border border-indigo-500/20 text-center">
<div class="text-indigo-300 font-bold">Pre-Flight Validation</div>
<div class="opacity-70 mt-1">Catch errors early</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Table of Contents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Table of Contents</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-4 max-w-4xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-1">💬</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Live Azure Context</div>
<div class="text-sm text-gray-300 mt-1">Conversational resource discovery and config extraction</div>
<div class="text-xs text-cyan-400/70 mt-1">Query live state without portal tab-switching</div>
</div>
</div>
<div @click="$nav.go(8)" class="cursor-pointer group">
<div class="p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-1">🔄</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">The Prototype Loop</div>
<div class="text-sm text-gray-300 mt-1">Plan Mode validation before deployment</div>
<div class="text-xs text-blue-400/70 mt-1">45 minutes → 8 minutes with live context</div>
</div>
</div>
<div @click="$nav.go(12)" class="cursor-pointer group">
<div class="p-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-1">⚙️</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Configuration & Setup</div>
<div class="text-sm text-gray-300 mt-1">10-minute installation and connection</div>
<div class="text-xs text-indigo-400/70 mt-1">VS Code, npm, or Docker — your choice</div>
</div>
</div>
<div @click="$nav.go(15)" class="cursor-pointer group">
<div class="p-4 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-1">🛡️</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Guardrails & Trust Boundaries</div>
<div class="text-sm text-gray-300 mt-1">RBAC-scoped access and read-only mode</div>
<div class="text-xs text-purple-400/70 mt-1">Safe exploration without elevation</div>
</div>
</div>
</div>

<div class="mt-4 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Live Azure Context -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Live Azure Context</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Conversational resource discovery and config extraction</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">💬</div>
<div class="text-cyan-300 font-semibold">Ask, Don't Browse</div>
<div class="text-xs opacity-70 mt-1">Query what exists without portal</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">📋</div>
<div class="text-blue-300 font-semibold">Extract Configs</div>
<div class="text-xs opacity-70 mt-1">Live resources become templates</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🔍</div>
<div class="text-indigo-300 font-semibold">Session Context</div>
<div class="text-xs opacity-70 mt-1">Previous queries stay in memory</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">No more portal tab-switching</span><br />
<span class="text-cyan-300 mt-1 block">↳ infrastructure state in conversation</span>
</div>
</div>
</div>

---

<!-- SLIDE: Interactive Resource Discovery -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Live Azure Context</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-bold text-white mb-0.5">Interactive Resource Discovery</div>
<div class="text-xs text-white/50">Ask what's running — AI queries live Azure APIs</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-1">Query Storage Accounts</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1 mb-2">
<span class="text-gray-400">You:</span> List all storage accounts with their locations and SKUs
</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-cyan-400">•</span>
<span><strong>proddata001</strong> (East US) — Standard_GRS</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400">•</span>
<span><strong>stagingdata001</strong> (West US 2) — Standard_LRS</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400">•</span>
<span><strong>devlogs</strong> (East US 2) — Standard_LRS</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400">•</span>
<span><strong>backuparchive</strong> (Central US) — Standard_RAGRS</span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-1">Query Cosmos DB Throughput</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1 mb-2">
<span class="text-gray-400">You:</span> What Cosmos DB databases exist and what are their throughput settings?
</div>
<div class="text-xs">
<div class="font-semibold text-blue-300 mb-1">cosmos-prod-eastus</div>
<div class="space-y-1">
<div class="flex items-start gap-2">
<span class="text-blue-400">→</span>
<span>user-profiles: 10,000 RU/s (autoscale: 40,000)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400">→</span>
<span>transaction-logs: 5,000 RU/s</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400">→</span>
<span>analytics-cache: Serverless</span>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Configuration Extraction for Templating -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Live Azure Context</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-bold text-white mb-0.5">Configuration Extraction for Templating</div>
<div class="text-xs text-white/50">Live resources become scaffolds for new configs</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-1">Extract Network Config</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1 mb-2">
<span class="text-gray-400">You:</span> Show me network configuration for proddata001 storage account
</div>
<div class="text-xs">
<div class="mb-1"><strong>VNet Rules:</strong></div>
<div class="ml-2 mb-1 opacity-80 text-xs">
prod-vnet/app-subnet (East US)<br />
prod-vnet/db-subnet (East US)
</div>
<div class="mb-1"><strong>Firewall:</strong></div>
<div class="ml-2 opacity-80 text-xs">
Allow: 203.0.113.0/24 (office)<br />
Allow: 198.51.100.50 (CI/CD)
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-1">Scaffold Staging Variant</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1 mb-2">
<span class="text-gray-400">You:</span> Create similar storage account config for staging environment
</div>
<div class="text-xs">
<div class="font-semibold text-blue-300 mb-1">AI generates:</div>
<div class="space-y-1">
<div class="flex items-start gap-2">
<span class="text-green-400">✓</span>
<span class="text-xs">SKU downgraded: GRS → LRS (cost savings)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-green-400">✓</span>
<span class="text-xs">VNet updated: prod-vnet → staging-vnet</span>
</div>
<div class="flex items-start gap-2">
<span class="text-green-400">✓</span>
<span class="text-xs">CI/CD IP removed (different pipeline)</span>
</div>
</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-2">What Just Happened</div>
<div class="space-y-1 text-xs">
<div class="p-2 bg-gray-900/50 rounded">
<div class="font-semibold text-white mb-1">1. Live Query</div>
<div class="opacity-80">AI fetched actual production storage account config</div>
</div>
<div class="p-2 bg-gray-900/50 rounded">
<div class="font-semibold text-white mb-1">2. Intelligent Adaptation</div>
<div class="opacity-80">Generated staging config with environment-appropriate changes</div>
</div>
<div class="p-2 bg-gray-900/50 rounded">
<div class="font-semibold text-white mb-1">3. One More Prompt</div>
<div class="opacity-80">"Generate Bicep from this config" → validated infrastructure code</div>
</div>
</div>
<div class="mt-2 p-2 bg-amber-900/30 border border-amber-500/30 rounded text-xs">
<div class="font-semibold text-amber-300">Time Saved</div>
<div class="opacity-80 mt-1">Portal navigation + manual parameter lookup: <span class="line-through">30 min</span> → Conversational extraction: 2 min</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Mental Model Shift -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Live Azure Context</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-bold text-white mb-0.5">The Mental Model Shift</div>
<div class="text-xs text-white/50">Infrastructure prototyping becomes conversational</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="flex flex-col gap-2">
<div class="text-sm font-semibold text-red-400 mb-1">🔄 Move Away From</div>
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/30 text-xs">
<div class="font-semibold text-red-300 mb-1">Portal-First Discovery</div>
<div class="opacity-80">Open Azure Portal, navigate resource groups, check configs, copy values, switch back to terminal</div>
</div>
<div class="p-3 bg-gradient-to-br from-orange-900/30 to-amber-900/30 rounded-lg border border-orange-500/30 text-xs">
<div class="font-semibold text-orange-300 mb-1">Documentation Copy-Paste</div>
<div class="opacity-80">Copy ARM/Bicep examples from docs, manually adjust parameters — produces generic configs</div>
</div>
<div class="p-3 bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-lg border border-amber-500/30 text-xs">
<div class="font-semibold text-amber-300 mb-1">Deploy-Then-Debug</div>
<div class="opacity-80">Deploy infrastructure to discover config mismatches (wrong region, SKU, missing dependency)</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="text-sm font-semibold text-cyan-400 mb-1">✅ Move Toward</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30 text-xs">
<div class="font-semibold text-cyan-300 mb-1">Terminal-First Conversation</div>
<div class="opacity-80">Start with conversational queries — AI retrieves current state faster and keeps it in session context</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30 text-xs">
<div class="font-semibold text-blue-300 mb-1">Live Resource Templating</div>
<div class="opacity-80">Extract configs from actual running resources — production-validated starting points with correct networking, SKUs, conventions</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30 text-xs">
<div class="font-semibold text-indigo-300 mb-1">Validate-Then-Deploy</div>
<div class="opacity-80">Use Plan Mode with Azure MCP to validate before deployment — AI checks proposed configs against live resources and subscription limits</div>
</div>
</div>
</div>
<div class="mt-1 p-2 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-500/30">
<div class="text-xs font-bold text-emerald-300 mb-0.5">Core Insight</div>
<div class="text-xs text-white/80">Infrastructure prototyping becomes conversational — AI queries live Azure state, validates assumptions in real-time, and generates configs from actual running resources</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — The Prototype Loop -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">The Prototype Loop</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Plan Mode validation before deployment</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">💭</div>
<div class="text-blue-300 font-semibold">Plan With AI</div>
<div class="text-xs opacity-70 mt-1">Clarifying questions before code</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">✅</div>
<div class="text-indigo-300 font-semibold">Validate Against Live State</div>
<div class="text-xs opacity-70 mt-1">Catch mismatches pre-deployment</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-purple-300 font-semibold">Generate Infrastructure Code</div>
<div class="text-xs opacity-70 mt-1">Production-validated Bicep output</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Traditional: 4-6 deploy-fail-adjust cycles</span><br />
<span class="text-blue-300 mt-1 block">↳ With Plan Mode: 1-2 cycles, validated first</span>
</div>
</div>
</div>

---

<!-- SLIDE: Plan Mode: Clarify Before Code -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 The Prototype Loop</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-bold text-white mb-0.5">Plan Mode: Clarify Before Code</div>
<div class="text-xs text-white/50">AI asks domain-specific questions and validates against live resources</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-1">Step 1: State the Goal</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1 text-white/90">
<span class="text-blue-400">[Shift+Tab for Plan Mode]</span><br />
<span class="text-gray-400">You:</span> I need to deploy a new App Service for the payments API. Similar to orders API but with its own database connection.
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-1">Step 2: AI Asks Questions</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-indigo-400">1.</span>
<span><strong>Region?</strong> Orders API in East US. Co-locate or separate for redundancy?</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400">2.</span>
<span><strong>App Service Plan?</strong> Share existing or dedicated for isolation?</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400">3.</span>
<span><strong>Database type?</strong> Azure SQL, Cosmos DB, or existing DB?</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400">4.</span>
<span><strong>Networking?</strong> Orders API uses prod-vnet/app-subnet. Same or separate?</span>
</div>
</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-1">Step 3: Your Answers</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-purple-400">✓</span>
<span>Same region (East US) for latency</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400">✓</span>
<span>Dedicated App Service Plan for isolation</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400">✓</span>
<span>New Azure SQL with firewall rules</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400">✓</span>
<span>Same VNet, separate subnet (payments-subnet)</span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-xl border border-pink-500/30">
<div class="text-sm font-semibold text-pink-300 mb-1">Step 4: AI Validates</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-green-400">✅</span>
<span><strong>East US capacity:</strong> Available for S2 plan</span>
</div>
<div class="flex items-start gap-2">
<span class="text-green-400">✅</span>
<span><strong>payments-subnet exists:</strong> 10.0.3.0/24, empty</span>
</div>
<div class="flex items-start gap-2">
<span class="text-green-400">✅</span>
<span><strong>Azure SQL quota:</strong> 8 of 20 DBs used</span>
</div>
<div class="flex items-start gap-2">
<span class="text-amber-400">⚠️</span>
<span><strong>Firewall gap:</strong> Will add payments-subnet to SQL allowlist</span>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Compression Effect -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 The Prototype Loop</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-bold text-white mb-0.5">The Compression Effect</div>
<div class="text-xs text-white/50">Traditional workflow vs Plan Mode + Azure MCP</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="flex flex-col">
<div class="text-sm font-semibold text-red-400 mb-1">Traditional Prototype Loop</div>
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30">
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-gray-900/50 rounded border-l-2 border-red-500">
<div class="font-semibold text-red-300">1. Portal Discovery (10-15 min)</div>
<div class="opacity-80 text-xs">Open Azure Portal, navigate resource groups, check existing App Service configs, copy networking settings</div>
</div>
<div class="p-1.5 bg-gray-900/50 rounded border-l-2 border-orange-500">
<div class="font-semibold text-orange-300">2. Documentation Lookup (5-10 min)</div>
<div class="opacity-80 text-xs">Search for ARM template examples, valid SKU options, autoscale configuration syntax</div>
</div>
<div class="p-1.5 bg-gray-900/50 rounded border-l-2 border-amber-500">
<div class="font-semibold text-amber-300">3. Write Infrastructure Code (10-15 min)</div>
<div class="opacity-80 text-xs">Manually create Bicep/ARM template with guessed parameters</div>
</div>
<div class="p-1.5 bg-gray-900/50 rounded border-l-2 border-yellow-500">
<div class="font-semibold text-yellow-300">4. Deployment Fails (3× cycles, 15 min)</div>
<div class="opacity-80 text-xs">Missing VNet integration, wrong subnet, firewall gaps — manually discovered and fixed</div>
</div>
</div>
<div class="mt-2 p-2 bg-red-900/50 border border-red-500/50 rounded text-center">
<div class="font-bold text-red-300 text-base">45 minutes</div>
<div class="text-xs opacity-80">3-4 failed deployments typical</div>
</div>
</div>
</div>
<div class="flex flex-col">
<div class="text-sm font-semibold text-blue-400 mb-1">Plan Mode + Azure MCP</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-gray-900/50 rounded border-l-2 border-blue-500">
<div class="font-semibold text-blue-300">1. Conversational Planning (2 min)</div>
<div class="opacity-80 text-xs">State goal in Copilot CLI Plan Mode, answer AI's clarifying questions</div>
</div>
<div class="p-1.5 bg-gray-900/50 rounded border-l-2 border-indigo-500">
<div class="font-semibold text-indigo-300">2. Live Validation (1 min)</div>
<div class="opacity-80 text-xs">AI queries existing App Service, VNet, SQL server, validates proposed config against live state</div>
</div>
<div class="p-1.5 bg-gray-900/50 rounded border-l-2 border-purple-500">
<div class="font-semibold text-purple-300">3. Generate Bicep (1 min)</div>
<div class="opacity-80 text-xs">AI produces infrastructure code with correct networking, firewall rules, autoscale settings</div>
</div>
<div class="p-1.5 bg-gray-900/50 rounded border-l-2 border-pink-500">
<div class="font-semibold text-pink-300">4. Review and Deploy (4 min)</div>
<div class="opacity-80 text-xs">Developer reviews generated Bicep; all parameters pre-validated; first deployment succeeds</div>
</div>
</div>
<div class="mt-2 p-2 bg-blue-900/50 border border-blue-500/50 rounded text-center">
<div class="font-bold text-blue-300 text-base">8 min <span class="text-xs text-emerald-300">· 5.6× faster</span></div>
<div class="text-xs opacity-80">Zero portal visits, 1 deployment cycle</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Real Use Case: Environment Cloning -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 The Prototype Loop</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-bold text-white mb-0.5">Real Use Case: Rapid Environment Cloning</div>
<div class="text-xs text-white/50">Production → staging in 15 minutes with cost optimizations</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-1">The Scenario</div>
<div class="text-xs opacity-90">
Developer needs complete staging environment that mirrors production App Service, Storage, and Cosmos DB configurations. Normally a 2-hour task with portal navigation, manual config extraction, and parameter translation.
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-1">The Workflow</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-indigo-400">1.</span>
<span>Connect to prod (read-only): List all resources in prod-rg</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400">2.</span>
<span>AI returns full inventory with SKUs, networking, scaling rules</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400">3.</span>
<span>Prompt: "Generate Bicep for staging with cost-optimized SKUs"</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400">4.</span>
<span>Plan Mode validates staging subscription capacity</span>
</div>
</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-1">Cost Optimizations Applied</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-purple-400">→</span>
<span><strong>Storage:</strong> Premium_GRS → Standard_LRS (geo-redundancy not needed)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400">→</span>
<span><strong>App Service:</strong> P2 → S1 (lower traffic volume)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400">→</span>
<span><strong>Cosmos DB:</strong> 10,000 RU/s → 1,000 RU/s (testing workloads)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400">→</span>
<span><strong>VNet:</strong> prod-vnet → staging-vnet (correct integration)</span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-500/30">
<div class="text-sm font-semibold text-emerald-300 mb-1">What You Get</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-emerald-400">✓</span>
<span>Complete staging environment in <strong>15 minutes</strong></span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400">✓</span>
<span>Production-validated configs with environment-appropriate SKUs</span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400">✓</span>
<span>Cost optimizations applied automatically (85% reduction)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400">✓</span>
<span>Zero portal tab-switching, no manual SKU lookups</span>
</div>
</div>
<div class="mt-2 p-2 bg-emerald-900/50 border border-emerald-500/50 rounded text-center">
<div class="font-bold text-emerald-300">8× faster than manual process</div>
<div class="text-xs opacity-80">From 2 hours → 15 minutes</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Configuration & Setup -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">Configuration & Setup</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">10-minute installation and connection</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📦</div>
<div class="text-indigo-300 font-semibold">Install MCP Server</div>
<div class="text-xs opacity-70 mt-1">VS Code, npm, or Docker</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔐</div>
<div class="text-purple-300 font-semibold">Authenticate</div>
<div class="text-xs opacity-70 mt-1">Uses existing az login credentials</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">🔌</div>
<div class="text-pink-300 font-semibold">Connect to CLI</div>
<div class="text-xs opacity-70 mt-1">Single JSON config file</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">10 minutes from install to first query</span><br />
<span class="text-indigo-300 mt-1 block">↳ no new auth required — inherits Azure CLI session</span>
</div>
</div>
</div>

---

<!-- SLIDE: Installation and Connection -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Configuration & Setup</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-bold text-white mb-0.5">Installation and Connection</div>
<div class="text-xs text-white/50">Three install options, single config file, 10 minutes total</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="flex flex-col gap-1.5">
<div class="p-2 bg-gray-900/50 rounded text-xs">
<div class="font-semibold text-indigo-300 mb-1">Option 1: VS Code Extension (Recommended)</div>
<div class="opacity-80">Install from VS Code Marketplace, auto-configures MCP server</div>
</div>
<div class="p-2 bg-gray-900/50 rounded text-xs">
<div class="font-semibold text-purple-300 mb-1">Option 2: Package Manager</div>
<div class="font-mono text-xs opacity-80 mt-1">
npm install -g @azure/mcp<br />
pip install msmcp-azure<br />
dotnet add package Azure.Mcp
</div>
</div>
<div class="p-2 bg-gray-900/50 rounded text-xs">
<div class="font-semibold text-pink-300 mb-1">Option 3: Docker</div>
<div class="font-mono text-xs opacity-80 mt-1">
docker pull mcr.microsoft.com/azure-mcp-server:latest
</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-0.5">Authentication</div>
<div class="text-xs mb-1 opacity-90">Uses your existing Azure credentials</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1">
az login<br />
az account set --subscription "Your-Subscription"
</div>
<div class="mt-1 p-2 bg-purple-900/50 border border-purple-500/50 rounded text-xs">
<div class="font-semibold text-purple-300">MCP server inherits these credentials</div>
<div class="opacity-80">Operates within your RBAC permissions</div>
</div>
</div>
</div>
<div class="flex flex-col gap-1.5">
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-xl border border-pink-500/30">
<div class="text-sm font-semibold text-pink-300 mb-1">Connect to Copilot CLI</div>
<div class="text-xs mb-1 opacity-90">Create or update <code class="bg-gray-950/80 px-1 py-0.5 rounded">~/.copilot/mcp-servers.json</code></div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1">
{<br />
&nbsp;&nbsp;"mcpServers": [{<br />
&nbsp;&nbsp;&nbsp;&nbsp;"name": "azure-mcp",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"command": "npx",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"args": ["@azure/mcp"],<br />
&nbsp;&nbsp;&nbsp;&nbsp;"env": {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"AZURE_SUBSCRIPTION_ID": "your-sub-id"<br />
&nbsp;&nbsp;&nbsp;&nbsp;}<br />
&nbsp;&nbsp;}]<br />
}
</div>
</div>
<div class="p-2 bg-gradient-to-br from-rose-900/30 to-red-900/30 rounded-xl border border-rose-500/30">
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1 mb-1">
copilot /tools
</div>
<div class="text-xs opacity-90">Look for <span class="text-rose-400">azure-mcp</span> listing 40+ tools including azure.storage, azure.cosmosdb, azure.monitor, and more.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Service Selection and Verification -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Configuration & Setup</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-bold text-white mb-0.5">Service Selection and Verification</div>
<div class="text-xs text-white/50">Limit enabled services for focused workflows</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-1">Service Selection (Optional)</div>
<div class="text-xs mb-1 opacity-90">Add <code class="bg-gray-950/80 px-1 py-0.5 rounded">AZURE_MCP_ENABLED_SERVICES</code> to limit the 40+ exposed tools:</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1">
"AZURE_MCP_ENABLED_SERVICES":<br />
&nbsp;&nbsp;"storage,cosmosdb,monitor,appconfig"
</div>
<div class="mt-1 text-xs opacity-80">
<strong>Options:</strong> storage, cosmosdb, monitor, appconfig, resources, sql, keyvault, aks, functions, appservice
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-1">Restart After Config Changes</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1 mb-1">
copilot /reset
</div>
<div class="text-xs opacity-90">Configuration changes take effect after Copilot CLI restart</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-xl border border-pink-500/30">
<div class="text-sm font-semibold text-pink-300 mb-1">Verification Test</div>
<div class="space-y-1 text-xs">
<div class="font-mono bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1">
<span class="text-gray-400">You:</span> List all resource groups in my subscription
</div>
<div class="p-2 bg-pink-900/50 border border-pink-500/50 rounded">
<div class="font-semibold text-pink-300 mb-0.5">Expected</div>
<div class="opacity-80">AI invokes <code class="bg-gray-950/80 px-1 py-0.5 rounded">azure.resources.list-groups</code> and returns live results</div>
</div>
<div class="p-2 bg-green-900/30 border border-green-500/30 rounded">
<div class="font-semibold text-green-300 mb-0.5">✅ Success</div>
<div class="opacity-80">Live resource group names appear — Azure MCP is connected</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-500/30">
<div class="text-sm font-semibold text-emerald-300 mb-1">Key Points</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-emerald-400">•</span>
<span>No separate Azure authentication — uses existing <code class="bg-gray-950/80 px-1 py-0.5 rounded">az login</code> session</span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400">•</span>
<span>Configuration is a single JSON file</span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400">•</span>
<span>Service selection is optional but recommended for focused workflows</span>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Guardrails & Trust Boundaries -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Guardrails & Trust Boundaries</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">RBAC-scoped access and read-only mode</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔐</div>
<div class="text-purple-300 font-semibold">RBAC Inheritance</div>
<div class="text-xs opacity-70 mt-1">No privilege elevation</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">👀</div>
<div class="text-pink-300 font-semibold">Read-Only Mode</div>
<div class="text-xs opacity-70 mt-1">Safe production exploration</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-rose-300 font-semibold">Subscription Boundaries</div>
<div class="text-xs opacity-70 mt-1">Separate dev/prod access</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Start with Reader role on production</span><br />
<span class="text-purple-300 mt-1 block">↳ upgrade to Contributor only on dedicated dev subscriptions</span>
</div>
</div>
</div>

---

<!-- SLIDE: Understanding RBAC Inheritance -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Guardrails & Trust Boundaries</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-1">
<div class="text-base font-bold text-white mb-0">Understanding RBAC Inheritance</div>
<div class="text-xs text-white/50">MCP server operates within your authenticated permissions — no elevation</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-1">
<div class="flex flex-col gap-0.5">
<div class="p-1 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-0">How RBAC Scoping Works</div>
<div class="space-y-0.5 text-xs">
<div class="p-1 bg-gray-900/50 rounded border-l-2 border-purple-500">
<div class="font-semibold text-purple-300 mb-0 text-xs">Reader Role</div>
<div class="opacity-80 text-xs">MCP can query resources but not modify</div>
</div>
<div class="p-1 bg-gray-900/50 rounded border-l-2 border-pink-500">
<div class="font-semibold text-pink-300 mb-0 text-xs">Contributor Role</div>
<div class="opacity-80 text-xs">MCP can create, update, delete resources</div>
</div>
<div class="p-1 bg-gray-900/50 rounded border-l-2 border-red-500">
<div class="font-semibold text-red-300 mb-0 text-xs">Owner Role</div>
<div class="opacity-80 text-xs">MCP can manage RBAC itself (dangerous for conversational workflows)</div>
</div>
</div>
<div class="mt-0.5 p-1 bg-amber-900/30 border border-amber-500/30 rounded text-xs">
<div class="font-semibold text-amber-300 mb-0">⚠️ Recommendation</div>
<div class="opacity-80 text-xs">Create a dedicated service principal with scoped permissions for MCP workflows rather than using your personal Owner-level account</div>
</div>
</div>
<div class="p-0.5 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-xl border border-pink-500/30">
<div class="text-sm font-semibold text-pink-300 mb-0">Security Boundary</div>
<div class="text-xs space-y-0.25">
<div class="p-0.5 bg-gray-900/50 rounded">
<div class="font-semibold text-white mb-0 text-xs leading-tight">Authentication Binding</div>
<div class="opacity-80 text-xs leading-tight">MCP uses <code class="bg-gray-950/80 px-0.5 py-0.5 rounded text-xs">DefaultAzureCredential</code> — environment, managed identity, then Azure CLI</div>
</div>
<div class="p-0.5 bg-gray-900/50 rounded">
<div class="font-semibold text-white mb-0 text-xs leading-tight">No Credential Storage</div>
<div class="opacity-80 text-xs leading-tight">MCP requests fresh tokens from Azure Identity on each SDK call</div>
</div>
<div class="p-0.5 bg-gray-900/50 rounded">
<div class="font-semibold text-white mb-0 text-xs leading-tight">Server-Side RBAC</div>
<div class="opacity-80 text-xs leading-tight">Every call includes current principal's token; permissions enforced server-side</div>
</div>
</div>
</div>
</div>
<div class="flex flex-col gap-0.5">
<div class="p-0.5 bg-gradient-to-br from-rose-900/30 to-red-900/30 rounded-xl border border-rose-500/30">
<div class="text-sm font-semibold text-rose-300 mb-0">What MCP Can See</div>
<div class="text-xs space-y-0">
<div class="flex items-start gap-1.5">
<span class="text-green-400 text-sm">✅</span>
<span class="text-xs leading-tight">Resource configurations</span>
</div>
<div class="flex items-start gap-1.5">
<span class="text-green-400 text-sm">✅</span>
<span class="text-xs leading-tight">Resource metadata (tags, locations)</span>
</div>
<div class="flex items-start gap-1.5">
<span class="text-green-400 text-sm">✅</span>
<span class="text-xs leading-tight">Logs & metrics (with Reader)</span>
</div>
<div class="flex items-start gap-1.5">
<span class="text-red-400 text-sm">❌</span>
<span class="text-xs leading-tight">Key Vault secrets</span>
</div>
<div class="flex items-start gap-1.5">
<span class="text-red-400 text-sm">❌</span>
<span class="text-xs leading-tight">Data inside resources</span>
</div>
</div>
</div>
<div class="p-0.5 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-500/30">
<div class="text-sm font-semibold text-emerald-300 mb-0">Security Implication</div>
<div class="text-xs opacity-90 mb-0.5">Azure MCP cannot access secrets or escalate privileges — it translates prompts into API calls bound by your RBAC roles.</div>
<div class="p-0.5 bg-emerald-900/50 border border-emerald-500/50 rounded text-xs">
<div class="font-semibold text-emerald-300 mb-0 text-xs">Key Point</div>
<div class="opacity-80 text-xs">Execution always fails without Delete permissions, no matter what AI suggests.</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Read-Only Mode for Safe Exploration -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Guardrails & Trust Boundaries</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-bold text-white mb-0.5">Read-Only Mode for Safe Exploration</div>
<div class="text-xs text-white/50">Create service principal with Reader role for production subscriptions</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="flex flex-col gap-1.5">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-1">Create Read-Only Service Principal</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1">
az ad sp create-for-rbac --name "copilot-mcp-readonly" --role "Reader" --scopes /subscriptions/YOUR_SUB_ID
</div>
<div class="mt-1 text-xs opacity-80">
Output: appId, password, tenant (save these)
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-xl border border-pink-500/30">
<div class="text-sm font-semibold text-pink-300 mb-1">Configure MCP with Service Principal</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-2 py-1">
"env": {<br />
&nbsp;&nbsp;"AZURE_TENANT_ID": "your-tenant-id",<br />
&nbsp;&nbsp;"AZURE_CLIENT_ID": "appId-from-sp",<br />
&nbsp;&nbsp;"AZURE_CLIENT_SECRET": "password-from-sp",<br />
&nbsp;&nbsp;"AZURE_SUBSCRIPTION_ID": "your-sub-id"<br />
}
</div>
</div>
</div>
<div class="flex flex-col gap-1.5">
<div class="p-3 bg-gradient-to-br from-rose-900/30 to-red-900/30 rounded-xl border border-rose-500/30">
<div class="text-sm font-semibold text-rose-300 mb-1">Verify Read-Only Behavior</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 bg-gray-900/50 rounded">
<div class="text-green-300 font-semibold mb-0.5">✅ Read query (succeeds)</div>
<div class="font-mono opacity-80">You: List all storage accounts</div>
</div>
<div class="p-1.5 bg-gray-900/50 rounded">
<div class="text-red-300 font-semibold mb-0.5">❌ Write query (fails)</div>
<div class="font-mono opacity-80 mb-0.5">You: Create storage account "test"</div>
<div class="text-red-400">Error: Service principal has 'Reader' role — write denied</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-500/30">
<div class="text-sm font-semibold text-emerald-300 mb-1">Benefits of Read-Only Mode</div>
<div class="text-xs space-y-0.5">
<div class="flex items-start gap-2"><span class="text-emerald-400">✓</span><span>Safe for production subscription exploration</span></div>
<div class="flex items-start gap-2"><span class="text-emerald-400">✓</span><span>No risk of accidental resource deletion</span></div>
<div class="flex items-start gap-2"><span class="text-emerald-400">✓</span><span>Ideal for learning Azure MCP capabilities</span></div>
<div class="flex items-start gap-2"><span class="text-emerald-400">✓</span><span>Team-wide enablement without governance concerns</span></div>
</div>
<div class="mt-1.5 p-1.5 bg-emerald-900/50 border border-emerald-500/50 rounded text-xs">
<div class="font-semibold text-emerald-300 mb-0.5">Upgrade to Write</div>
<div class="opacity-80">Grant Contributor only on dev/staging subscriptions with cost guardrails</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Subscription Boundaries -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Guardrails & Trust Boundaries</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-1">
<div class="text-base font-bold text-white mb-0">Subscription Boundaries</div>
<div class="text-xs text-white/50">Configure separate MCP connections per environment</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-1.5">
<div class="p-1.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30 flex flex-col min-h-0">
<div class="text-sm font-semibold text-purple-300 mb-0.5">Multi-Subscription Configuration</div>
<div class="font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded px-1.5 py-1 leading-tight overflow-y-auto flex-1 max-h-32">
{<br />
&nbsp;&nbsp;"mcpServers": [<br />
&nbsp;&nbsp;&nbsp;&nbsp;{<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "azure-mcp-production",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"command": "npx",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"args": ["@azure/mcp"],<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"env": {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"AZURE_SUBSCRIPTION_ID": "prod-sub-id",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"AZURE_CLIENT_ID": "readonly-sp-id",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"AZURE_CLIENT_SECRET": "readonly-secret"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
&nbsp;&nbsp;&nbsp;&nbsp;},<br />
&nbsp;&nbsp;&nbsp;&nbsp;{<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "azure-mcp-dev",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"command": "npx",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"args": ["@azure/mcp"],<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"env": {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"AZURE_SUBSCRIPTION_ID": "dev-sub-id",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"AZURE_CLIENT_ID": "contributor-sp-id",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"AZURE_CLIENT_SECRET": "contributor-secret"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
&nbsp;&nbsp;&nbsp;&nbsp;}<br />
&nbsp;&nbsp;]<br />
}
</div>
<div class="mt-1 p-1.5 bg-purple-900/50 border border-purple-500/50 rounded text-xs">
<div class="font-semibold text-purple-300 mb-0.5">Usage</div>
<div class="opacity-80 text-xs leading-tight">copilot --mcp azure-mcp-production<br />copilot --mcp azure-mcp-dev</div>
</div>
</div>
<div class="flex flex-col gap-1">
<div class="p-1.5 bg-gradient-to-br from-rose-900/30 to-red-900/30 rounded-xl border border-rose-500/30">
<div class="text-sm font-semibold text-rose-300 mb-0.5">Trust Building Path</div>
<div class="space-y-1 text-xs">
<div class="p-1 bg-gray-900/50 rounded border-l-2 border-blue-500">
<div class="font-semibold text-blue-300 mb-0 text-xs">Stage 1: Read-Only</div>
<div class="opacity-80 text-xs leading-tight">Reader on production — query, no risk</div>
</div>
<div class="p-1 bg-gray-900/50 rounded border-l-2 border-indigo-500">
<div class="font-semibold text-indigo-300 mb-0 text-xs">Stage 2: Dev Prototyping</div>
<div class="opacity-80 text-xs leading-tight">Contributor on dev — full workflows</div>
</div>
<div class="p-1 bg-gray-900/50 rounded border-l-2 border-purple-500">
<div class="font-semibold text-purple-300 mb-0 text-xs">Stage 3: Staging</div>
<div class="opacity-80 text-xs leading-tight">Contributor with peer review</div>
</div>
<div class="p-1 bg-gray-900/50 rounded border-l-2 border-pink-500">
<div class="font-semibold text-pink-300 mb-0 text-xs">Stage 4: Production</div>
<div class="opacity-80 text-xs leading-tight">After governance setup</div>
</div>
</div>
</div>
<div class="p-1.5 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl border border-amber-500/30">
<div class="text-sm font-semibold text-amber-300 mb-0.5">⚠️ Resistance</div>
<div class="text-xs space-y-1">
<div class="p-1 bg-gray-900/50 rounded">
<div class="font-semibold text-red-300 mb-0 text-xs">Unrestricted Production Access</div>
<div class="opacity-80 text-xs leading-tight">Dangerous without RBAC scoping</div>
</div>
<div class="p-1 bg-gray-900/50 rounded">
<div class="font-semibold text-red-300 mb-0 text-xs">Untrusted Configs</div>
<div class="opacity-80 text-xs leading-tight">Always review before deployment</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-emerald-600/80 to-teal-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-emerald-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-500/30">
<div class="text-sm font-semibold text-emerald-300 mb-1">15-Minute Quick Start</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-emerald-400">1.</span>
<span>Install Azure MCP Server (VS Code extension or <code class="bg-gray-950/80 px-1 py-0.5 rounded">npm install -g @azure/mcp</code>)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400">2.</span>
<span>Authenticate: <code class="bg-gray-950/80 px-1 py-0.5 rounded">az login</code></span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400">3.</span>
<span>Verify MCP: <code class="bg-gray-950/80 px-1 py-0.5 rounded">copilot /tools</code></span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400">4.</span>
<span>Run first query: "List all resource groups"</span>
</div>
</div>
<div class="mt-2 p-2 bg-emerald-900/50 border border-emerald-500/50 rounded text-xs">
<div class="font-semibold text-emerald-300">Success Criteria</div>
<div class="opacity-80">AI returns live resource group list from your Azure subscription</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-xl border border-teal-500/30">
<div class="text-sm font-semibold text-teal-300 mb-1">1-Hour Deep Dive</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-teal-400">1.</span>
<span>Complete 15-minute quick start</span>
</div>
<div class="flex items-start gap-2">
<span class="text-teal-400">2.</span>
<span>Create read-only service principal for production</span>
</div>
<div class="flex items-start gap-2">
<span class="text-teal-400">3.</span>
<span>Configure multi-subscription MCP access (prod read-only, dev contributor)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-teal-400">4.</span>
<span>Explore production resources conversationally</span>
</div>
<div class="flex items-start gap-2">
<span class="text-teal-400">5.</span>
<span>Scaffold infrastructure from live templates</span>
</div>
</div>
<div class="mt-2 p-2 bg-teal-900/50 border border-teal-500/50 rounded text-xs">
<div class="font-semibold text-teal-300">Success Criteria</div>
<div class="opacity-80">Query production safely (read-only) and generate infrastructure code for dev environments</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-1">2-4 Hour Mastery Path</div>
<div class="text-xs space-y-1">
<div class="flex items-start gap-2">
<span class="text-cyan-400">1.</span>
<span>Complete 1-hour deep dive</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400">2.</span>
<span>Configure custom instructions for team conventions</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400">3.</span>
<span>Run end-to-end deployment with Plan Mode (e.g., deploy containerized API with Azure Container Apps)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400">4.</span>
<span>Set up organization-level MCP governance (if applicable)</span>
</div>
</div>
<div class="mt-2 p-2 bg-cyan-900/50 border border-cyan-500/50 rounded text-xs">
<div class="font-semibold text-cyan-300">Success Criteria</div>
<div class="opacity-80">Complete real deployment using conversational workflows, validated against live state, with team conventions integrated</div>
</div>
</div>
</div>
<div class="mt-2 p-2 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-1">Key Takeaway</div>
<div class="text-xs text-white/90">Start with read-only mode on production subscriptions to explore Azure MCP safely. Upgrade to write access only on dedicated dev/staging subscriptions with peer-reviewed workflows. The 45-minute → 8-minute compression happens when AI has live context, not assumptions.</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 References</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-1">Official Documentation</div>
<div class="space-y-1 text-xs">
<div>
<a href="https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/get-started" class="text-cyan-400 hover:text-cyan-300 underline">Get started with Azure MCP Server</a>
<div class="opacity-70 text-xs">Installation, authentication, and first queries</div>
</div>
<div>
<a href="https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/" class="text-cyan-400 hover:text-cyan-300 underline">Azure MCP Server Documentation</a>
<div class="opacity-70 text-xs">Service coverage, API reference, configuration options</div>
</div>
<div>
<a href="https://github.com/Azure/azure-mcp" class="text-cyan-400 hover:text-cyan-300 underline">Azure MCP Server GitHub Repository</a>
<div class="opacity-70 text-xs">Source code, examples, community contributions</div>
</div>
<div>
<a href="https://spec.modelcontextprotocol.io/" class="text-cyan-400 hover:text-cyan-300 underline">Model Context Protocol Specification</a>
<div class="opacity-70 text-xs">MCP standard, tool discovery, client-server architecture</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-1">Copilot CLI Integration</div>
<div class="space-y-1 text-xs">
<div>
<a href="https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices" class="text-blue-400 hover:text-blue-300 underline">Best practices for GitHub Copilot CLI</a>
<div class="opacity-70 text-xs">Custom instructions, permissions, MCP integration</div>
</div>
<div>
<a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server" class="text-blue-400 hover:text-blue-300 underline">Add an MCP server to Copilot CLI</a>
<div class="opacity-70 text-xs">Connection configuration and verification</div>
</div>
<div>
<a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli" class="text-blue-400 hover:text-blue-300 underline">Using GitHub Copilot CLI</a>
<div class="opacity-70 text-xs">Interactive mode, Plan Mode, cloud delegation</div>
</div>
</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-1">Related CopilotTraining Talks</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-indigo-400">→</span>
<div>
<div class="font-semibold text-white">GitHub Copilot CLI</div>
<div class="opacity-70">Foundational understanding of terminal-native AI workflows, Plan Mode, cloud delegation</div>
</div>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400">→</span>
<div>
<div class="font-semibold text-white">MCP Apps</div>
<div class="opacity-70">Building custom MCP servers for internal tools and proprietary systems</div>
</div>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400">→</span>
<div>
<div class="font-semibold text-white">Agentic Workflows</div>
<div class="opacity-70">Delegating complex multi-step tasks to background agents with /fleet parallelization</div>
</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-1">Community Resources</div>
<div class="space-y-1 text-xs">
<div>
<a href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azure-mcp-server" class="text-purple-400 hover:text-purple-300 underline">Azure MCP Server - VS Code Extension</a>
<div class="opacity-70 text-xs">VS Code extension setup and usage</div>
</div>
<div>
<a href="https://mcpservers.org/servers/github-com-microsoft-mcp" class="text-purple-400 hover:text-purple-300 underline">Azure MCP Server - MCP Registry</a>
<div class="opacity-70 text-xs">Complete service list and capability matrix</div>
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
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-48" alt="" /></div>
<img src="./sdp-logo.png" class="w-48 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Thank You!</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">Azure MCP Server: Live Infrastructure Context</span>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-400 font-bold text-lg">45 → 8 min</div>
<div class="opacity-80 text-xs">infrastructure workflow compression</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-400 font-bold text-lg">40+ services</div>
<div class="opacity-80 text-xs">Azure covered by MCP tools</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-400 font-bold text-lg">15 min</div>
<div class="opacity-80 text-xs">to your first live query</div>
</div>
</div>
<div class="mt-6 text-sm opacity-60 relative z-10">Questions? Let's discuss your Azure setup and where conversational infrastructure fits first.</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
