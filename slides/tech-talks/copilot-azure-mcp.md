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
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import TitleSlide from './components/structure/TitleSlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="GitHub Copilot CLI + Azure MCP"
subtitle="Rapid Azure Prototyping and Deployment"
tagline="Infrastructure becomes conversational — AI that knows what's running in your subscriptions"
meta="Tech Talk · 45 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I prototype and deploy Azure solutions conversationally from my terminal?"
subtext="With AI that actually knows what's already running in your subscriptions —"
highlight="no more portal context-switching or assumption-based deployments."
:cards='[
  { icon: "☁️", title: "Cloud Developers Deploying to Azure", description: "Conversational provisioning — ask about your resources, then deploy in minutes" },
  { icon: "🔧", title: "DevOps Engineers Managing Infrastructure", description: "Query live subscription state and validate configs from the terminal directly" },
  { icon: "🚀", title: "Platform Teams Prototyping Faster", description: "Plan Mode validation before any resource change — from 45 minutes to 8 minutes" },
  { title: "No Portal Switching", description: "Stay in terminal — Copilot queries live Azure resource state for you" },
  { title: "Live State Aware", description: "Knows your actual running resources before suggesting changes or deployments" },
  { title: "Pre-Flight Validation", description: "Catch mismatched SKUs and quota errors before the deployment actually runs" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "💬", title: "Live Azure Context", subtitle: "Conversational resource discovery and config extraction", blurb: "Query live state without portal tab-switching", slide: 4 },
    { icon: "🔄", title: "The Prototype Loop", subtitle: "Plan Mode validation before deployment", blurb: "45 minutes → 8 minutes with live context", slide: 8 },
    { icon: "⚙️", title: "Configuration & Setup", subtitle: "10-minute installation and connection", blurb: "VS Code, npm, or Docker — your choice", slide: 12 },
    { icon: "🛡️", title: "Guardrails & Trust Boundaries", subtitle: "RBAC-scoped access and read-only mode", blurb: "Safe exploration without elevation", slide: 15 },
  ]'
/>
---

<!-- SLIDE: Part 1 — Live Azure Context -->

<SectionOpenerSlide
  :partNumber="1"
  title="Live Azure Context"
  subtitle="Conversational resource discovery and config extraction"
  :cards='[
    { icon: "💬", title: "Ask, Don’t Browse", blurb: "Query what exists without portal" },
    { icon: "📋", title: "Extract Configs", blurb: "Live resources become templates" },
    { icon: "🔍", title: "Session Context", blurb: "Previous queries stay in memory" },
  ]'
  :terminal='{ context: "No more portal tab-switching", detail: "infrastructure state in conversation" }'
/>
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
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="💬"
  pillLabel="Live Azure Context"
  title="The Mental Model Shift"
  :left='{ header: "Move Away From", icon: "🔄", items: [{ title: "Portal-First Discovery", detail: "Open Azure Portal, navigate resource groups, check configs, copy values, switch back to terminal" }, { title: "Documentation Copy-Paste", detail: "Copy ARM/Bicep examples from docs, manually adjust parameters — produces generic configs" }, { title: "Deploy-Then-Debug", detail: "Deploy infrastructure to discover config mismatches — wrong region, SKU, missing dependency" }] }'
  :right='{ header: "Move Toward", icon: "✅", items: [{ title: "Terminal-First Conversation", detail: "Start with conversational queries — AI retrieves current state faster and keeps it in session context" }, { title: "Live Resource Templating", detail: "Extract configs from actual running resources — production-validated starting points with correct networking, SKUs, conventions" }, { title: "Validate-Then-Deploy", detail: "Use Plan Mode with Azure MCP to validate before deployment — AI checks proposed configs against live resources and subscription limits" }] }'
  :insight='{ icon: "💡", text: "Infrastructure prototyping becomes conversational — AI queries live Azure state, validates assumptions in real-time, and generates configs from actual running resources." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — The Prototype Loop -->

<SectionOpenerSlide
  :partNumber="2"
  title="The Prototype Loop"
  subtitle="Plan Mode validation before deployment"
  :cards='[
    { icon: "💭", title: "Plan With AI", blurb: "Clarifying questions before code" },
    { icon: "✅", title: "Validate Against Live State", blurb: "Catch mismatches pre-deployment" },
    { icon: "⚡", title: "Generate Infrastructure Code", blurb: "Production-validated Bicep output" },
  ]'
  :terminal='{ context: "Traditional: 4-6 deploy-fail-adjust cycles", detail: "With Plan Mode: 1-2 cycles, validated first" }'
/>
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
<BeforeAfterMetricsSlide
  :partNumber="2"
  pillIcon="🔄"
  pillLabel="The Prototype Loop"
  title="The Compression Effect"
  :before='{ header: "Traditional Prototype Loop", items: [{ title: "Portal Discovery (10-15 min)", detail: "Navigate resource groups, check existing configs, copy networking settings" }, { title: "Documentation Lookup (5-10 min)", detail: "Search ARM/Bicep examples, valid SKU options, autoscale configuration syntax" }, { title: "Write Infrastructure Code (10-15 min)", detail: "Manually create Bicep/ARM template with guessed parameters" }, { title: "Deployment Fails (3 cycles, 15 min)", detail: "Missing VNet integration, wrong subnet, firewall gaps — manually discovered" }] }'
  :after='{ header: "Plan Mode + Azure MCP", items: [{ title: "Conversational Planning (2 min)", detail: "State goal in Copilot CLI Plan Mode, answer AI clarifying questions" }, { title: "Live Validation (1 min)", detail: "AI queries existing resources, validates proposed config against live state" }, { title: "Generate Bicep (1 min)", detail: "AI produces infrastructure code with correct networking, firewall rules, autoscale" }, { title: "Review and Deploy (4 min)", detail: "Pre-validated parameters, zero portal visits, first deployment succeeds" }] }'
  :metrics='[
    { value: "45 min", label: "Before" },
    { value: "8 min", label: "After" },
    { value: "5.6×", label: "Faster" }
  ]'
  :insight='{ icon: "💡", text: "Zero portal visits, one deployment cycle — 3-4 failed deployments reduced to zero." }'
/>

---

<!-- SLIDE: Real Use Case: Environment Cloning -->
<BeforeAfterMetricsSlide
  :partNumber="2"
  pillIcon="🔄"
  pillLabel="The Prototype Loop"
  title="Real Use Case: Rapid Environment Cloning"
  :before='{ header: "Manual Process (~2 hours)", items: ["Open Azure Portal, navigate resource groups, check configs", "Copy parameters manually — networking, SKUs, scaling rules", "Translate production parameters to staging by hand", "Multiple portal tabs, manual SKU lookups, parameter translation"] }'
  :after='{ header: "With Azure MCP (15 minutes)", items: ["Connect to prod read-only and list all resources in prod-rg", "AI returns full inventory with SKUs, networking, scaling rules", "Generate Bicep for staging with cost-optimized SKUs", "Plan Mode validates staging subscription capacity before deploy"] }'
  :metrics='[
    { value: "8×", label: "Faster" },
    { value: "2 hrs → 15 min", label: "Time saved" },
    { value: "85%", label: "Cost reduction" }
  ]'
  :insight='{ icon: "✓", text: "Zero portal tab-switching, no manual SKU lookups — cost optimizations applied automatically (Premium GRS → Standard LRS, P2 → S1, 10k RU/s → 1k RU/s)." }'
/>

---

<!-- SLIDE: Part 3 — Configuration & Setup -->

<SectionOpenerSlide
  :partNumber="3"
  title="Configuration & Setup"
  subtitle="10-minute installation and connection"
  :cards='[
    { icon: "📦", title: "Install MCP Server", blurb: "VS Code, npm, or Docker" },
    { icon: "🔐", title: "Authenticate", blurb: "Uses existing az login credentials" },
    { icon: "🔌", title: "Connect to CLI", blurb: "Single JSON config file" },
  ]'
  :terminal='{ context: "10 minutes from install to first query", detail: "no new auth required — inherits Azure CLI session" }'
/>
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
<FourCardGridSlide
  :partNumber="3"
  pillIcon="⚙️"
  pillLabel="Configuration & Setup"
  title="Service Selection and Verification"
  :cards='[
    { icon: "📦", title: "Service Selection", description: "Add AZURE_MCP_ENABLED_SERVICES to limit the 40+ tools. Options: storage, cosmosdb, monitor, appconfig, resources, sql, keyvault, aks, functions, appservice" },
    { icon: "🔄", title: "Restart After Config", description: "Run copilot /reset after any config changes. Configuration changes take effect only after Copilot CLI restart." },
    { icon: "✅", title: "Verification Test", description: "Ask: List all resource groups in my subscription. AI should invoke azure.resources.list-groups and return live results confirming connection." },
    { icon: "💡", title: "Key Points", description: "No separate Azure authentication needed. Single JSON config file. Service selection optional but recommended for focused workflows." }
  ]'
/>

---

<!-- SLIDE: Part 4 — Guardrails & Trust Boundaries -->

<SectionOpenerSlide
  :partNumber="4"
  title="Guardrails & Trust Boundaries"
  subtitle="RBAC-scoped access and read-only mode"
  :cards='[
    { icon: "🔐", title: "RBAC Inheritance", blurb: "No privilege elevation" },
    { icon: "👀", title: "Read-Only Mode", blurb: "Safe production exploration" },
    { icon: "🔒", title: "Subscription Boundaries", blurb: "Separate dev/prod access" },
  ]'
  :terminal='{ context: "Start with Reader role on production", detail: "upgrade to Contributor only on dedicated dev subscriptions" }'
/>
---

<!-- SLIDE: Understanding RBAC Inheritance -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="🛡️"
  pillLabel="Guardrails & Trust Boundaries"
  title="Understanding RBAC Inheritance"
  :left='{ header: "RBAC Scoping", icon: "🔐", items: [{ title: "Reader Role", detail: "MCP can query resources but not modify — safe for production exploration" }, { title: "Contributor Role", detail: "MCP can create, update, delete resources — use only on dev/staging subscriptions" }, { title: "Owner Role", detail: "MCP can manage RBAC itself — dangerous for conversational workflows, avoid" }, { title: "Recommendation", detail: "Use a dedicated service principal with scoped permissions rather than your personal Owner-level account" }] }'
  :right='{ header: "What MCP Can See", icon: "👁️", items: ["\u2705 Resource configurations", "\u2705 Resource metadata (tags, locations)", "\u2705 Logs & metrics (with Reader)", "\u274c Key Vault secrets", "\u274c Data inside resources (blobs, rows, documents)", "MCP uses DefaultAzureCredential and requests fresh tokens on each SDK call — no credential storage"] }'
  :insight='{ icon: "💡", text: "Azure MCP cannot access secrets or escalate privileges — it translates prompts into API calls bound by your RBAC roles. Execution fails without the required permissions, regardless of what the AI suggests." }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Read-Only Mode for Safe Exploration -->
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="🛡️"
  pillLabel="Guardrails & Trust Boundaries"
  title="Read-Only Mode for Safe Exploration"
  codePosition="left"
  :code='{ language: "bash", filename: "setup-readonly-sp.sh", content: "# Create read-only service principal\naz ad sp create-for-rbac \\\n  --name \"copilot-mcp-readonly\" \\\n  --role \"Reader\" \\\n  --scopes /subscriptions/YOUR_SUB_ID\n\n# Output: appId, password, tenant (save these)\n# Then add to mcp-servers.json env block:\n# \"AZURE_TENANT_ID\": \"your-tenant-id\",\n# \"AZURE_CLIENT_ID\": \"appId-from-sp\",\n# \"AZURE_CLIENT_SECRET\": \"password-from-sp\"" }'
  :features='[
    { icon: "✅", title: "Verify Read-Only", description: "Read query: List all storage accounts — succeeds. Write query: Create storage account — fails with Reader role denied error." },
    { icon: "🔒", title: "Benefits of Read-Only Mode", description: "Safe for production exploration, no risk of accidental deletion, ideal for team-wide enablement without governance concerns" },
    { icon: "⬆️", title: "Upgrade to Write", description: "Grant Contributor only on dev/staging subscriptions with cost guardrails — never on production" }
  ]'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Subscription Boundaries -->
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="🔐"
  pillLabel="Guardrails & Trust Boundaries"
  title="Subscription Boundaries"
  codePosition="left"
  :code='{ language: "json", filename: "~/.copilot/mcp-servers.json", content: "{\n  \"mcpServers\": [\n    {\n      \"name\": \"azure-mcp-production\",\n      \"command\": \"npx\",\n      \"args\": [\"@azure/mcp\"],\n      \"env\": {\n        \"AZURE_SUBSCRIPTION_ID\": \"prod-sub-id\",\n        \"AZURE_CLIENT_ID\": \"readonly-sp-id\"\n      }\n    },\n    {\n      \"name\": \"azure-mcp-dev\",\n      \"command\": \"npx\",\n      \"args\": [\"@azure/mcp\"],\n      \"env\": {\n        \"AZURE_SUBSCRIPTION_ID\": \"dev-sub-id\",\n        \"AZURE_CLIENT_ID\": \"contributor-sp-id\"\n      }\n    }\n  ]\n}" }'
  :features='[
    { icon: "🛣️", title: "Trust Building Path", description: "Stage 1: Reader on production. Stage 2: Contributor on dev. Stage 3: Contributor with peer review on staging. Stage 4: Production after governance setup." },
    { icon: "⚠️", title: "What to Resist", description: "Unrestricted production access without RBAC scoping, and deploying untrusted configs without peer review." }
  ]'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="Portal-Based to Conversational Terminal"
:leftItems='["Portal navigation for exploration", "Tools: 4–6 CLI commands", "Setup: 10 min per workspace", "Context: assumptions, documentation"]'
:rightItems='["Conversational terminal queries", "Tools: 1 integrated MCP server", "Setup: 8 minutes", "Context: live subscriptions"]'
:metrics='[
  { value: "hours → 8 min", detail: "Prototype time" },
  { value: "4–6 → 1", detail: "Tool consolidation" },
  { value: "10 min", detail: "Setup time" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Install Azure MCP Server (VS Code extension or npm install -g @azure/mcp)", "Authenticate: az login", "Verify MCP: copilot /tools", "Run first query: List all resource groups"]'
  :thisWeek='["Create a read-only service principal for production", "Configure multi-subscription MCP access (prod read-only, dev contributor)", "Explore production resources conversationally", "Scaffold infrastructure from live templates"]'
  :thisMonth='["Configure custom instructions for team conventions", "Run end-to-end deployment with Plan Mode", "Set up organization-level MCP governance"]'
  footer="Start with read-only mode on production subscriptions to explore Azure MCP safely. The 45-minute → 8-minute compression happens when AI has live context, not assumptions."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Official Documentation", color: "cyan", items: [
        { href: "https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/get-started", label: "Get started with Azure MCP Server", description: "Installation, authentication, and first queries" },
        { href: "https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/", label: "Azure MCP Server Documentation", description: "Service coverage, API reference, configuration options" },
        { href: "https://github.com/Azure/azure-mcp", label: "Azure MCP Server GitHub Repository", description: "Source code, examples, community contributions" },
        { href: "https://spec.modelcontextprotocol.io/", label: "Model Context Protocol Specification", description: "MCP standard, tool discovery, client-server architecture" },
        { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices", label: "Best practices for GitHub Copilot CLI", description: "Custom instructions, permissions, MCP integration" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server", label: "Add an MCP server to Copilot CLI", description: "Connection configuration and verification" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli", label: "Using GitHub Copilot CLI", description: "Interactive mode, Plan Mode, cloud delegation" }
    ] },
    { title: "Community Resources", color: "purple", items: [
        { href: "https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azure-mcp-server", label: "Azure MCP Server - VS Code Extension", description: "VS Code extension setup and usage" },
        { href: "https://mcpservers.org/servers/github-com-microsoft-mcp", label: "Azure MCP Server - MCP Registry", description: "Complete service list and capability matrix" },
        { label: "Related CopilotTraining Talks", description: "GitHub Copilot CLI · MCP Apps · Agentic Workflows" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="Azure MCP Server: Live Infrastructure Context"
:cards="[
  { icon: '⚡', value: '45 → 8 min', detail: 'Infrastructure workflow compression', subdetail: 'From portal clicking to natural language' },
  { icon: '☁️', value: '40+ services', detail: 'Azure covered by MCP tools', subdetail: 'VMs, networking, storage, databases, and more' },
  { icon: '🚀', value: '15 min', detail: 'To your first live query', subdetail: 'Install server, configure auth, ask questions' },
]"
prompt="Questions? Let's discuss your Azure setup and where conversational infrastructure fits first."
/>
