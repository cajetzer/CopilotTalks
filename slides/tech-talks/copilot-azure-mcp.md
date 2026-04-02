---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot CLI + Azure MCP: Rapid Azure Prototyping and Deployment
  CopilotTraining
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot CLI + Azure MCP
module: tech-talks/copilot-azure-mcp
status: active
updated: 2026-04-01
mdc: true
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">GitHub Copilot CLI + Azure MCP</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">Rapid Azure Prototyping and Deployment</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Infrastructure becomes conversational — AI that knows what's running in your subscriptions</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
<div class="abs-br m-6 flex gap-2"><span class="text-sm opacity-50">Tech Talk · 45 minutes</span></div>

---

<!-- SLIDE: The Core Question -->

<div class="h-full flex flex-col items-center justify-center">
<div class="text-center">
<h1 class="!text-4xl mb-6">🎯 The Core Question</h1>
<div class="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border-2 border-cyan-500/50 max-w-4xl mx-auto">
<div class="text-2xl font-semibold text-cyan-300 mb-4">"How do I prototype and deploy Azure solutions conversationally from my terminal?"</div>
<div class="text-lg opacity-90">...with AI that actually knows what's already running in my subscriptions?</div>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-4xl mx-auto">
<div class="p-3 bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 rounded-lg border border-cyan-500/20">
<div class="text-cyan-400 font-semibold mb-1">No Portal Switching</div>
<div class="opacity-80">Query live state conversationally</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-lg border border-blue-500/20">
<div class="text-blue-400 font-semibold mb-1">Real Context</div>
<div class="opacity-80">AI validates against actual resources</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/20 to-indigo-800/20 rounded-lg border border-indigo-500/20">
<div class="text-indigo-400 font-semibold mb-1">45 min → 8 min</div>
<div class="opacity-80">Prototype loop compression</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Table of Contents -->

<div class="h-full flex flex-col items-center justify-center">
<h1 class="!text-4xl mb-8">📖 Table of Contents</h1>
<div class="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 hover:scale-105 transition-all">
<div class="text-3xl mb-3">💬</div>
<div class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Live Azure Context</div>
<div class="text-sm opacity-80 mt-2">Terminal conversations with live resource awareness</div>
</div>
<div @click="$nav.go(8)" class="cursor-pointer p-6 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30 hover:scale-105 transition-all">
<div class="text-3xl mb-3">🔄</div>
<div class="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">The Prototype Loop</div>
<div class="text-sm opacity-80 mt-2">Plan Mode + validation = 45 min → 8 min</div>
</div>
<div @click="$nav.go(11)" class="cursor-pointer p-6 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30 hover:scale-105 transition-all">
<div class="text-3xl mb-3">⚙️</div>
<div class="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Configuration & Setup</div>
<div class="text-sm opacity-80 mt-2">10 minutes to live Azure queries</div>
</div>
<div @click="$nav.go(13)" class="cursor-pointer p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30 hover:scale-105 transition-all">
<div class="text-3xl mb-3">🛡️</div>
<div class="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Guardrails & Trust</div>
<div class="text-sm opacity-80 mt-2">RBAC scoping and read-only modes</div>
</div>
</div>
</div>

---

<!-- SLIDE: Live Azure Context in Terminal Conversations -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Live Azure Context</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">in Terminal Conversations</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">🔍</div>
<div class="text-cyan-300 font-semibold">Query</div>
<div class="text-xs opacity-70 mt-1">Ask what's running live</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">📐</div>
<div class="text-blue-300 font-semibold">Scaffold</div>
<div class="text-xs opacity-70 mt-1">Generate IaC from real configs</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">✅</div>
<div class="text-indigo-300 font-semibold">Validate</div>
<div class="text-xs opacity-70 mt-1">Check before you deploy</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-500">copilot &gt; </span><span class="text-cyan-300">What storage accounts exist in my subscription?</span><br />
<span class="text-gray-400 mt-1 block">↳ Found 4 accounts in East US — GRS replication, TLS 1.2...</span>
</div>
</div>
</div>

---

<!-- SLIDE: What's Now Possible -->

<div class="h-full flex flex-col justify-center">
<h1 class="!text-3xl mb-6">✨ What's Now Possible</h1>
<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/20">
<div class="font-bold text-cyan-300 mb-2">Query Live State Conversationally</div>
<div class="text-sm opacity-90">Ask "What storage accounts exist in my subscription?" directly in terminal — no portal tab-switching</div>
<div class="mt-2 text-xs text-cyan-400">Example: "Show me Cosmos DB databases with their throughput settings"</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-500/20">
<div class="font-bold text-blue-300 mb-2">Scaffold From Existing Resources</div>
<div class="text-sm opacity-90">Generate ARM/Bicep/Terraform by describing running resources: "Create a similar App Service for staging"</div>
<div class="mt-2 text-xs text-blue-400">AI extracts live configs as templates, not generic docs examples</div>
</div>
<div class="p-4 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/20">
<div class="font-bold text-indigo-300 mb-2">Validate Before Deployment</div>
<div class="text-sm opacity-90">AI checks proposed changes against actual subscription state: "Will this break production?"</div>
<div class="mt-2 text-xs text-indigo-400">Catches config mismatches pre-deployment</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
<div class="font-bold text-purple-300 mb-2">Plan With Real Context</div>
<div class="text-sm opacity-90">Plan Mode + Azure MCP = AI knows what exists, their configs, and valid parameter ranges</div>
<div class="mt-2 text-xs text-purple-400">Guesswork drops to near-zero</div>
</div>
</div>
<div class="mt-4 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/30 text-center">
<div class="text-green-300 font-semibold">Infrastructure-as-conversation: complex Azure operations become natural language interactions with full environmental awareness</div>
</div>
</div>

---

<!-- SLIDE: Interactive Resource Discovery -->

<h1 class="!text-3xl mb-4">🔍 Interactive Resource Discovery</h1>

<div class="grid grid-cols-2 gap-4 text-sm">
<div>
<div class="font-bold text-cyan-300 mb-2">Example: Query Storage Accounts</div>
<div class="font-mono bg-gray-900/60 p-3 rounded text-xs mb-2">
<div class="text-green-400">> List all storage accounts with locations and SKUs</div>
<div class="mt-2 text-gray-300">
Found 4 storage accounts:<br /><br />
1. <b>proddata001</b> (East US)<br />
   - SKU: Standard_GRS<br />
   - Public access: Disabled<br /><br />
2. <b>stagingdata001</b> (West US 2)<br />
   - SKU: Standard_LRS<br />
   - Public access: Enabled (blob only)<br /><br />
3. <b>devlogs</b> (East US 2)<br />
   - SKU: Standard_LRS<br /><br />
4. <b>backuparchive</b> (Central US)<br />
   - SKU: Standard_RAGRS
</div>
</div>
</div>
<div>
<div class="font-bold text-blue-300 mb-2">Extract Network Configuration</div>
<div class="font-mono bg-gray-900/60 p-3 rounded text-xs mb-2">
<div class="text-green-400">> Show network config for proddata001</div>
<div class="mt-2 text-gray-300">
<b>Network Configuration:</b><br /><br />
Virtual Network Rules:<br />
- prod-vnet/app-subnet<br />
- prod-vnet/db-subnet<br /><br />
Firewall Rules:<br />
- Allow: 203.0.113.0/24<br />
- Allow: 198.51.100.50<br /><br />
Private Endpoints:<br />
- prod-storage-pe01<br /><br />
Public Access: Disabled<br />
Min TLS: 1.2
</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-cyan-900/20 rounded border border-cyan-500/20 text-xs">
<b class="text-cyan-300">Key Point:</b> <span class="text-gray-300">AI returns structured data from live Azure APIs — not cached, not docs. Context persists across session for follow-up questions.</span>
</div>

---

<!-- SLIDE: Configuration Extraction for Templating -->

<h1 class="!text-3xl mb-4">📋 Configuration Extraction for Templating</h1>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>
<div class="font-bold text-cyan-300 mb-2">Prompt: Create Similar Resource</div>
<div class="font-mono bg-gray-900/60 p-3 rounded text-xs">
<div class="text-green-400">> Create a similar storage account config for staging</div>
</div>
<div class="mt-3 font-bold text-blue-300 mb-2">AI Response: Staging-Appropriate Config</div>
<div class="font-mono bg-gray-900/60 p-3 rounded text-xs leading-relaxed">
Based on proddata001:<br /><br />
{<br />
&nbsp;&nbsp;"name": "stagingdata002",<br />
&nbsp;&nbsp;"location": "West US 2",<br />
&nbsp;&nbsp;"sku": "Standard_LRS",  <span class="text-yellow-400">// Changed from GRS</span><br />
&nbsp;&nbsp;"networkRules": {<br />
&nbsp;&nbsp;&nbsp;&nbsp;"virtualNetworkRules": [<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"staging-vnet/app-subnet"<br />
&nbsp;&nbsp;&nbsp;&nbsp;],<br />
&nbsp;&nbsp;&nbsp;&nbsp;"ipRules": ["203.0.113.0/24"],<br />
&nbsp;&nbsp;&nbsp;&nbsp;"defaultAction": "Deny"<br />
&nbsp;&nbsp;},<br />
&nbsp;&nbsp;"minimumTlsVersion": "TLS1_2",<br />
&nbsp;&nbsp;"allowBlobPublicAccess": false<br />
}
</div>
</div>
<div>
<div class="font-bold text-indigo-300 mb-2">What Changed From Production</div>
<div class="space-y-2">
<div class="p-2 bg-indigo-900/20 rounded border border-indigo-500/20">
<div class="font-bold text-indigo-400">SKU Downgraded</div>
<div class="text-gray-300">Standard_LRS instead of GRS — staging doesn't need geo-redundancy</div>
</div>
<div class="p-2 bg-purple-900/20 rounded border border-purple-500/20">
<div class="font-bold text-purple-400">VNet Updated</div>
<div class="text-gray-300">Points to staging-vnet instead of prod-vnet</div>
</div>
<div class="p-2 bg-pink-900/20 rounded border border-pink-500/20">
<div class="font-bold text-pink-400">CI/CD IP Removed</div>
<div class="text-gray-300">Staging uses different pipeline agent</div>
</div>
</div>
<div class="mt-3 p-3 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded border border-green-500/20">
<b class="text-green-300">Next Step:</b> <span class="text-gray-300">"Convert this to Bicep" → production-validated IaC template in seconds</span>
</div>
</div>
</div>

---

<!-- SLIDE: The Prototype Loop -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">The Prototype Loop</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Plan → Generate → Deploy</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-2 gap-4 text-sm max-w-3xl">
<div class="px-4 py-3 bg-red-900/20 rounded-xl border border-red-500/30">
<div class="text-red-300 font-bold mb-1">❌ Traditional</div>
<div class="text-xs opacity-70">Guess → deploy → fail → fix</div>
<div class="text-red-400 font-semibold mt-2">~45 min · 4–6 iterations</div>
</div>
<div class="px-4 py-3 bg-green-900/20 rounded-xl border border-green-500/30">
<div class="text-green-300 font-bold mb-1">✅ Plan Mode + Azure MCP</div>
<div class="text-xs opacity-70">Query → validate → deploy once</div>
<div class="text-green-400 font-semibold mt-2">~8 min · 1–2 iterations</div>
</div>
</div>
<div class="mt-5 px-6 py-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full border border-blue-400/20 text-blue-200 text-sm">
Validate assumptions <em>before</em> deployment — not after
</div>
</div>
</div>

---

<!-- SLIDE: Plan Mode Workflow Example -->

<h1 class="!text-3xl mb-3">🎯 Plan Mode: Clarify Before Code</h1>

<div class="grid grid-cols-2 gap-3 text-xs">
<div>
<div class="font-bold text-cyan-300 mb-2">Step 1: State the Goal (Shift+Tab)</div>
<div class="font-mono bg-gray-900/60 p-2 rounded mb-3">
<div class="text-green-400">> I need to deploy a new App Service for the payments API, similar to the orders API but with its own database</div>
</div>
<div class="font-bold text-blue-300 mb-2">Step 2: AI Asks Questions</div>
<div class="bg-blue-900/20 p-2 rounded border border-blue-500/20 mb-1">
<b class="text-blue-400">Region preference?</b> Orders API runs in East US. Co-locate or different region?
</div>
<div class="bg-blue-900/20 p-2 rounded border border-blue-500/20 mb-1">
<b class="text-blue-400">App Service Plan?</b> Share existing or dedicated?
</div>
<div class="bg-blue-900/20 p-2 rounded border border-blue-500/20 mb-1">
<b class="text-blue-400">Database type?</b> Azure SQL, Cosmos, or existing?
</div>
<div class="bg-blue-900/20 p-2 rounded border border-blue-500/20 mb-1">
<b class="text-blue-400">Networking?</b> Orders uses prod-vnet/app-subnet. Same or separate?
</div>
<div class="font-bold text-indigo-300 mb-2 mt-2">Step 3: Developer Answers</div>
<div class="font-mono bg-gray-900/60 p-2 rounded text-xs">
1. Same region (East US)<br />
2. Dedicated plan for isolation<br />
3. New Azure SQL with firewall rules<br />
4. Same VNet, separate subnet (payments-subnet)<br />
5. Autoscale 2-5 instances
</div>
</div>
<div>
<div class="font-bold text-purple-300 mb-2">Step 4: AI Validates Against Live Resources</div>
<div class="bg-purple-900/20 p-2 rounded border border-purple-500/20 mb-2 text-xs">
✅ East US capacity available<br />
✅ prod-vnet/payments-subnet exists (10.0.3.0/24, empty)<br />
✅ Azure SQL quota: 8/20 databases<br />
⚠️ Firewall: payments-subnet not in SQL allowlist — will add
</div>
<div class="font-bold text-pink-300 mb-2">Proposed Architecture</div>
<div class="font-mono bg-gray-900/60 p-2 rounded text-xs mb-2">
App Service Plan: payments-asp-001<br />
&nbsp;&nbsp;└─ App Service: payments-api<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ VNet: prod-vnet/payments-subnet<br /><br />
Azure SQL Server: prod-sqlserver-eastus<br />
&nbsp;&nbsp;└─ Database: payments-db (S1)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ Firewall: Allow payments-subnet
</div>
<div class="p-2 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded border border-green-500/20 text-center">
<b class="text-green-300">Estimated cost:</b> <span class="text-gray-300">~$150/month</span><br />
<div class="text-xs text-green-400 mt-1">Approve plan to generate Bicep? (y/n)</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-cyan-900/20 rounded border border-cyan-500/20 text-xs">
<b class="text-cyan-300">What Just Happened:</b> Plan Mode asked domain-specific questions, AI queried live state, validated subscription limits, proposed architecture pre-deployment, caught firewall gap before it caused failure. Developer reviews & deploys. <b class="text-green-400">Traditional: 45 min. With Plan Mode: 8 min.</b>
</div>

---

<!-- SLIDE: Real Use Case - Environment Cloning -->

<h1 class="!text-3xl mb-3">🚀 Use Case: Rapid Environment Cloning</h1>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>
<div class="font-bold text-cyan-300 mb-2">The Scenario</div>
<div class="p-3 bg-cyan-900/20 rounded border border-cyan-500/20 mb-2">
Create a complete staging environment mirroring production App Service, Storage, and Cosmos DB — normally a 2-hour task with portal navigation
</div>
<div class="font-bold text-blue-300 mb-2">The Workflow</div>
<div class="font-mono bg-gray-900/60 p-3 rounded leading-relaxed">
<div class="text-green-400">> copilot &#45;&#45;mcp azure-mcp-production</div>
<div class="text-gray-300 mt-1">> List all resources in prod-rg with configs</div>
<div class="text-blue-400 mt-2"># AI returns inventory: SKUs, networking, scaling</div>
<div class="text-gray-300 mt-2">> Generate Bicep for staging with:</div>
<div class="text-gray-300">&nbsp;&nbsp;- Standard_LRS vs Premium_GRS</div>
<div class="text-gray-300">&nbsp;&nbsp;- S1 vs P2 for App Service</div>
<div class="text-gray-300">&nbsp;&nbsp;- 1000 RU/s vs 10000 for Cosmos</div>
<div class="text-gray-300">&nbsp;&nbsp;- VNet: staging-vnet</div>
<div class="text-yellow-400 mt-2"># Plan Mode validates staging subscription</div>
<div class="text-green-400 mt-2">Deploy preview: $1200/mo → $180/mo</div>
</div>
</div>
<div>
<div class="font-bold text-indigo-300 mb-2">What You Get</div>
<div class="space-y-2">
<div class="p-2 bg-indigo-900/20 rounded border border-indigo-500/20">
<div class="font-bold text-indigo-400">Complete staging environment in 15 minutes</div>
<div class="text-gray-300">Production-validated configurations with cost optimizations</div>
</div>
<div class="p-2 bg-purple-900/20 rounded border border-purple-500/20">
<div class="font-bold text-purple-400">No portal tab-switching</div>
<div class="text-gray-300">All discovery and generation in terminal conversation</div>
</div>
<div class="p-2 bg-pink-900/20 rounded border border-pink-500/20">
<div class="font-bold text-pink-400">No manual SKU lookups</div>
<div class="text-gray-300">AI extracts from live templates, proposes cost-optimized variants</div>
</div>
</div>
<div class="mt-3 p-3 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded border border-green-500/30 text-center">
<div class="font-bold text-green-300 text-base">2 hours → 15 minutes</div>
<div class="text-gray-300">87% time savings on environment cloning</div>
</div>
</div>
</div>

---

<!-- SLIDE: Configuration and Setup -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-violet-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-violet-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">Configuration and Setup</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">10 minutes to live Azure queries</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📦</div>
<div class="text-indigo-300 font-semibold">Install</div>
<div class="text-xs opacity-70 mt-1">VS Code · npm · Docker</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔐</div>
<div class="text-purple-300 font-semibold">Authenticate</div>
<div class="text-xs opacity-70 mt-1">az login — no elevation</div>
</div>
<div class="px-4 py-3 bg-violet-900/30 rounded-xl border border-violet-500/30">
<div class="text-2xl mb-1">🔗</div>
<div class="text-violet-300 font-semibold">Connect</div>
<div class="text-xs opacity-70 mt-1">copilot /tools to verify</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-500">$ </span><span class="text-indigo-300">npm install -g @azure/mcp</span><br />
<span class="text-gray-400 block mt-1">↳ azure-mcp ready · copilot /tools → azure-mcp ✓</span>
</div>
</div>
</div>

---

<!-- SLIDE: Three Steps to Live Azure Queries -->

<div class="h-full flex flex-col overflow-hidden px-2">
<h1 class="!text-2xl !mb-4">⚙️ Three Steps to Live Azure Queries</h1>
<div class="grid grid-cols-3 gap-4 flex-1 min-h-0 text-xs">
<div class="flex flex-col bg-indigo-900/20 rounded-xl border border-indigo-500/30 overflow-hidden">
<div class="px-4 py-3 bg-indigo-900/40 border-b border-indigo-500/20">
<div class="text-indigo-300 font-bold text-sm">1 · Install</div>
<div class="text-gray-400 text-xs mt-0.5">Pick your preferred method</div>
</div>
<div class="p-3 flex-1 space-y-2">
<div class="font-mono bg-gray-950/60 p-2 rounded leading-snug">
<div class="text-gray-500 text-[10px] mb-1"># VS Code (recommended)</div>
<div class="text-indigo-300">Install from Marketplace</div>
</div>
<div class="font-mono bg-gray-950/60 p-2 rounded leading-snug">
<div class="text-gray-500 text-[10px] mb-1"># npm</div>
<div class="text-indigo-300">npm install -g @azure/mcp</div>
</div>
<div class="font-mono bg-gray-950/60 p-2 rounded leading-snug">
<div class="text-gray-500 text-[10px] mb-1"># Docker</div>
<div class="text-indigo-300 text-[10px] leading-relaxed">docker pull mcr.microsoft.com/<br/>azure-mcp-server:latest</div>
</div>
</div>
</div>
<div class="flex flex-col bg-purple-900/20 rounded-xl border border-purple-500/30 overflow-hidden">
<div class="px-4 py-3 bg-purple-900/40 border-b border-purple-500/20">
<div class="text-purple-300 font-bold text-sm">2 · Authenticate</div>
<div class="text-gray-400 text-xs mt-0.5">MCP inherits your session</div>
</div>
<div class="p-3 flex-1 space-y-2">
<div class="font-mono bg-gray-950/60 p-2 rounded leading-snug">
<div class="text-gray-500 text-[10px] mb-1"># Sign in</div>
<div class="text-purple-300">az login</div>
</div>
<div class="font-mono bg-gray-950/60 p-2 rounded leading-snug">
<div class="text-gray-500 text-[10px] mb-1"># Set subscription</div>
<div class="text-purple-300">az account set \<br/>&nbsp;&nbsp;--subscription \<br/>&nbsp;&nbsp;"Your-Subscription"</div>
</div>
<div class="mt-2 p-2 bg-purple-900/30 rounded border border-purple-500/20 text-gray-300">
No credential storage. No elevation. MCP reads your existing <code class="text-green-400">az login</code> token.
</div>
</div>
</div>
<div class="flex flex-col bg-violet-900/20 rounded-xl border border-violet-500/30 overflow-hidden">
<div class="px-4 py-3 bg-violet-900/40 border-b border-violet-500/20">
<div class="text-violet-300 font-bold text-sm">3 · Connect &amp; Verify</div>
<div class="text-gray-400 text-xs mt-0.5">Confirm the tool is live</div>
</div>
<div class="p-3 flex-1 space-y-2">
<div class="font-mono bg-gray-950/60 p-2 rounded leading-snug">
<div class="text-gray-500 text-[10px] mb-1"># List connected tools</div>
<div class="text-violet-300">copilot /tools</div>
<div class="text-gray-400 mt-1">↳ azure-mcp ✓</div>
</div>
<div class="font-mono bg-gray-950/60 p-2 rounded leading-snug">
<div class="text-gray-500 text-[10px] mb-1"># First live query</div>
<div class="text-violet-300">copilot<br/>&gt; List all resource groups</div>
</div>
<div class="mt-2 p-2 bg-green-900/20 rounded border border-green-500/20 text-green-300 font-semibold text-center">
✅ Setup complete
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: MCP Configuration JSON -->

<div class="h-full flex flex-col overflow-hidden px-2">
<h1 class="!text-2xl !mb-3">📝 Azure MCP Configuration</h1>
<div class="grid grid-cols-2 gap-4 text-xs flex-1 min-h-0">
<div class="flex flex-col min-h-0">
<div class="font-bold text-cyan-300 mb-1.5">~/.copilot/mcp-servers.json</div>
<div class="font-mono bg-gray-900/60 p-2.5 rounded leading-snug overflow-auto flex-1 text-[11px]">
{<br />
&nbsp;&nbsp;"mcpServers": [<br />
&nbsp;&nbsp;&nbsp;&nbsp;{<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "azure-mcp",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"command": "npx",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"args": ["@azure/mcp"],<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"env": {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"AZURE_SUBSCRIPTION_ID": "your-sub-id",<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"AZURE_MCP_ENABLED_SERVICES":<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"storage,cosmosdb,monitor,appconfig"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
&nbsp;&nbsp;&nbsp;&nbsp;}<br />
&nbsp;&nbsp;]<br />
}
</div>
</div>
<div class="flex flex-col gap-1.5">
<div class="font-bold text-blue-300 mb-0.5">Available Services (40+ total)</div>
<div class="p-2 bg-blue-900/20 rounded border border-blue-500/20">
<b class="text-blue-400">Core:</b> <span class="text-gray-300">storage, cosmosdb, sql, keyvault, resources</span>
</div>
<div class="p-2 bg-indigo-900/20 rounded border border-indigo-500/20">
<b class="text-indigo-400">Compute:</b> <span class="text-gray-300">appservice, functions, aks</span>
</div>
<div class="p-2 bg-purple-900/20 rounded border border-purple-500/20">
<b class="text-purple-400">Monitoring:</b> <span class="text-gray-300">monitor (KQL queries), appconfig</span>
</div>
<div class="p-2 bg-pink-900/20 rounded border border-pink-500/20">
<b class="text-pink-400">DevOps:</b> <span class="text-gray-300">repos, pipelines, work items</span>
</div>
<div class="p-2 bg-cyan-900/20 rounded border border-cyan-500/20 mt-auto">
<b class="text-cyan-300">Tip:</b> <span class="text-gray-300">Limit services to reduce token usage. After changes: <code class="text-green-400">copilot /reset</code></span>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Guardrails and Trust Boundaries -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent">Guardrails and</h1>
<h1 class="!text-5xl !font-bold !mt-0 !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent">Trust Boundaries</h1>
<h2 class="!text-xl !font-normal !m-0 opacity-70 mb-6">RBAC scoping · read-only modes · subscription separation</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-purple-300 font-semibold">No Elevation</div>
<div class="text-xs opacity-70 mt-1">Inherits your az login scope</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">👁️</div>
<div class="text-pink-300 font-semibold">Read-Only First</div>
<div class="text-xs opacity-70 mt-1">Safe prod exploration</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🗂️</div>
<div class="text-rose-300 font-semibold">Scope per Env</div>
<div class="text-xs opacity-70 mt-1">Prod RO · Dev write</div>
</div>
</div>
<div class="mt-5 px-6 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-400/20 text-purple-200 text-sm">
MCP is a translation layer, not a privilege escalation vector
</div>
</div>
</div>

---

<!-- SLIDE: RBAC and Read-Only Modes -->

<div class="h-full flex flex-col overflow-hidden px-2">
<h1 class="!text-2xl !mb-4">🔒 RBAC and Read-Only Modes</h1>
<div class="grid grid-cols-3 gap-3 text-xs flex-1 min-h-0">
<div class="p-3 bg-purple-900/20 rounded border border-purple-500/20">
<div class="font-bold text-purple-300 mb-2">RBAC Inheritance</div>
<div class="text-gray-300 mb-2">MCP Server uses your <code class="text-green-400">az login</code> session — no credential storage, no elevation</div>
<div class="space-y-1">
<div class="p-1 bg-blue-900/20 rounded"><b class="text-blue-400">Reader:</b> Query only</div>
<div class="p-1 bg-yellow-900/20 rounded"><b class="text-yellow-400">Contributor:</b> Create/modify</div>
<div class="p-1 bg-red-900/20 rounded"><b class="text-red-400">Owner:</b> Manage RBAC (risky)</div>
</div>
</div>
<div class="p-3 bg-pink-900/20 rounded border border-pink-500/20">
<div class="font-bold text-pink-300 mb-2">Read-Only Mode</div>
<div class="font-mono bg-gray-900/60 p-2 rounded text-xs mb-2">
az ad sp create-for-rbac \<br />
&nbsp;&nbsp;--name "copilot-mcp-ro" \<br />
&nbsp;&nbsp;--role "Reader" \<br />
&nbsp;&nbsp;--scopes /subscriptions/ID
</div>
<div class="text-gray-300">Safe for production exploration — no modification risk</div>
</div>
<div class="p-3 bg-blue-900/20 rounded border border-blue-500/20">
<div class="font-bold text-blue-300 mb-2">Multi-Subscription Setup</div>
<div class="text-gray-300 mb-2">Separate MCP connections per environment:</div>
<div class="space-y-1">
<div class="p-1 bg-green-900/20 rounded"><b class="text-green-400">azure-mcp-prod:</b> Read-only</div>
<div class="p-1 bg-blue-900/20 rounded"><b class="text-blue-400">azure-mcp-dev:</b> Contributor</div>
</div>
<div class="font-mono bg-gray-900/60 p-1 rounded text-xs mt-2">
copilot &#45;&#45;mcp azure-mcp-prod
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-amber-900/20 to-red-900/20 rounded border border-red-500/30 text-xs text-center">
<b class="text-red-300">⚠️ Don't:</b> <span class="text-gray-300">Give MCP full Owner access to production without review workflows. Even AI-validated configs require human review before prod deployment.</span>
</div>
</div>

---

<!-- SLIDE: Subscription Scoping Patterns -->

<div class="h-full flex flex-col overflow-hidden px-2">
<h1 class="!text-2xl !mb-4">🗂️ Subscription Scoping Patterns</h1>
<div class="grid grid-cols-2 gap-4 flex-1 min-h-0 text-xs">
<div class="flex flex-col gap-3">
<div class="p-3 bg-gray-900/60 rounded-xl border border-gray-700/40">
<div class="text-sm font-bold text-white mb-2">Recommended Multi-Env Setup</div>
<div class="space-y-2">
<div class="flex items-center gap-3 p-2 bg-green-900/20 rounded border border-green-500/20">
<div class="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></div>
<div><span class="text-green-300 font-mono font-bold">azure-mcp-prod</span> <span class="text-gray-400">— Reader role, query only</span></div>
</div>
<div class="flex items-center gap-3 p-2 bg-blue-900/20 rounded border border-blue-500/20">
<div class="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
<div><span class="text-blue-300 font-mono font-bold">azure-mcp-staging</span> <span class="text-gray-400">— Contributor, limited scope</span></div>
</div>
<div class="flex items-center gap-3 p-2 bg-purple-900/20 rounded border border-purple-500/20">
<div class="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
<div><span class="text-purple-300 font-mono font-bold">azure-mcp-dev</span> <span class="text-gray-400">— Contributor, full sandbox</span></div>
</div>
</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-xl border border-gray-700/40">
<div class="text-sm font-bold text-white mb-2">Create a Read-Only Service Principal</div>
<div class="font-mono bg-gray-950/80 p-2 rounded leading-snug text-[10px]">
<span class="text-gray-500"># Safe for production exploration</span><br/>
<span class="text-purple-300">az ad sp create-for-rbac</span> \<br/>
&nbsp;&nbsp;<span class="text-blue-300">--name</span> <span class="text-green-300">"copilot-mcp-ro"</span> \<br/>
&nbsp;&nbsp;<span class="text-blue-300">--role</span> <span class="text-green-300">"Reader"</span> \<br/>
&nbsp;&nbsp;<span class="text-blue-300">--scopes</span> /subscriptions/<span class="text-yellow-300">PROD_ID</span>
</div>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="p-3 bg-gray-900/60 rounded-xl border border-gray-700/40">
<div class="text-sm font-bold text-white mb-2">Team Governance via Custom Instructions</div>
<div class="font-mono bg-gray-950/80 p-2 rounded leading-snug text-[10px] mb-2">
<span class="text-gray-500"># .github/copilot-instructions.md</span><br/>
<span class="text-blue-300">## Azure Conventions</span><br/>
<span class="text-gray-300">- All resources: kebab-case naming</span><br/>
<span class="text-gray-300">- Production queries: use azure-mcp-prod</span><br/>
<span class="text-gray-300">- Never suggest Owner role assignments</span><br/>
<span class="text-gray-300">- Tag all new resources: env + team + cost-center</span>
</div>
<div class="text-gray-400">Org-wide rules travel with the repo — every dev gets consistent guardrails automatically</div>
</div>
<div class="p-3 bg-amber-900/20 rounded-xl border border-amber-500/30">
<div class="text-amber-300 font-bold text-sm mb-2">⚠️ Prod Deployment Rule</div>
<div class="text-gray-300">AI-generated configs still need human review before production. Use MCP for <em class="text-white">exploration and staging validation</em> — keep a PR gate on prod deploys.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->

<h1 class="!text-3xl mb-4">✅ What You Can Do Today</h1>

<div class="grid grid-cols-3 gap-3 text-xs">
<div class="p-3 bg-green-900/20 rounded border border-green-500/20">
<div class="font-bold text-green-300 mb-2 text-base">⏱️ 15-Minute Quick Start</div>
<div class="space-y-2">
<div class="p-2 bg-green-900/30 rounded">
<div class="font-bold text-green-400">1. Install Azure MCP</div>
<div class="text-gray-300">VS Code extension or <code class="text-cyan-400">npm install -g @azure/mcp</code></div>
</div>
<div class="p-2 bg-green-900/30 rounded">
<div class="font-bold text-green-400">2. Authenticate</div>
<div class="text-gray-300"><code class="text-cyan-400">az login</code> and set subscription</div>
</div>
<div class="p-2 bg-green-900/30 rounded">
<div class="font-bold text-green-400">3. Verify</div>
<div class="text-gray-300"><code class="text-cyan-400">copilot /tools</code> → confirm azure-mcp listed</div>
</div>
<div class="p-2 bg-green-900/30 rounded">
<div class="font-bold text-green-400">4. First query</div>
<div class="text-gray-300">"List all resource groups"</div>
</div>
</div>
</div>
<div class="p-3 bg-blue-900/20 rounded border border-blue-500/20">
<div class="font-bold text-blue-300 mb-2 text-base">🔧 1-Hour Deep Dive</div>
<div class="space-y-2">
<div class="p-2 bg-blue-900/30 rounded">
<div class="font-bold text-blue-400">Complete quick start</div>
</div>
<div class="p-2 bg-blue-900/30 rounded">
<div class="font-bold text-blue-400">Create read-only SP for prod</div>
<div class="text-gray-300">Safe production exploration</div>
</div>
<div class="p-2 bg-blue-900/30 rounded">
<div class="font-bold text-blue-400">Multi-subscription config</div>
<div class="text-gray-300">Prod (RO) + Dev (write)</div>
</div>
<div class="p-2 bg-blue-900/30 rounded">
<div class="font-bold text-blue-400">Explore + scaffold</div>
<div class="text-gray-300">"Show App Services" → "Generate Bicep for dev"</div>
</div>
</div>
</div>
<div class="p-3 bg-purple-900/20 rounded border border-purple-500/20">
<div class="font-bold text-purple-300 mb-2 text-base">🚀 2-4 Hour Mastery</div>
<div class="space-y-2">
<div class="p-2 bg-purple-900/30 rounded">
<div class="font-bold text-purple-400">Complete deep dive</div>
</div>
<div class="p-2 bg-purple-900/30 rounded">
<div class="font-bold text-purple-400">Custom instructions</div>
<div class="text-gray-300">Team Azure conventions in <code class="text-cyan-400">.github/copilot-instructions.md</code></div>
</div>
<div class="p-2 bg-purple-900/30 rounded">
<div class="font-bold text-purple-400">End-to-end deployment</div>
<div class="text-gray-300">Plan Mode → validate → generate → deploy real workload</div>
</div>
<div class="p-2 bg-purple-900/30 rounded">
<div class="font-bold text-purple-400">Org governance</div>
<div class="text-gray-300">MCP Registry for team tool discovery</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->

<h1 class="!text-3xl mb-4">🔗 References</h1>

<div class="grid grid-cols-2 gap-4 text-xs">
<div>
<div class="font-bold text-cyan-300 mb-2 text-sm">📖 Official Documentation</div>
<div class="space-y-1">
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/get-started" class="text-cyan-400 hover:text-cyan-300 font-medium">Get started with Azure MCP Server</a>
<div class="text-gray-400 mt-0.5">Installation, authentication, and first queries</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/" class="text-cyan-400 hover:text-cyan-300 font-medium">Azure MCP Server Documentation</a>
<div class="text-gray-400 mt-0.5">Service coverage, API reference, configuration options</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://github.com/Azure/azure-mcp" class="text-cyan-400 hover:text-cyan-300 font-medium">Azure MCP Server GitHub Repository</a>
<div class="text-gray-400 mt-0.5">Source code, examples, community contributions</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://spec.modelcontextprotocol.io/" class="text-cyan-400 hover:text-cyan-300 font-medium">Model Context Protocol Specification</a>
<div class="text-gray-400 mt-0.5">MCP standard, tool discovery, client-server architecture</div>
</div>
</div>
</div>
<div>
<div class="font-bold text-purple-300 mb-2 text-sm">🛠️ Copilot CLI Integration</div>
<div class="space-y-1">
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices" class="text-purple-400 hover:text-purple-300 font-medium">Best practices for GitHub Copilot CLI</a>
<div class="text-gray-400 mt-0.5">Custom instructions, permissions, MCP integration</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server" class="text-purple-400 hover:text-purple-300 font-medium">Add an MCP server to Copilot CLI</a>
<div class="text-gray-400 mt-0.5">Connection configuration and verification</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli" class="text-purple-400 hover:text-purple-300 font-medium">Using GitHub Copilot CLI</a>
<div class="text-gray-400 mt-0.5">Interactive mode, Plan Mode, cloud delegation</div>
</div>
<div class="p-2 bg-gray-900/50 rounded border border-gray-700/50">
<a href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azure-mcp-server" class="text-purple-400 hover:text-purple-300 font-medium">Azure MCP Server - VS Code Extension</a>
<div class="text-gray-400 mt-0.5">Extension setup and usage</div>
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
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">GitHub Copilot CLI + Azure MCP</span>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-400 font-bold text-lg">45 min → 8 min</div>
<div class="opacity-80 text-xs">Prototype loop compression</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-400 font-bold text-lg">40+ services</div>
<div class="opacity-80 text-xs">Conversational Azure access</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-400 font-bold text-lg">10 minutes</div>
<div class="opacity-80 text-xs">Setup to first live query</div>
</div>
</div>
<div class="mt-6 text-sm opacity-60 relative z-10">Questions? Let's discuss infrastructure-as-conversation and Azure MCP patterns</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
