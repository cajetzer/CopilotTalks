---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot CLI + Azure MCP
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot CLI + Azure MCP
module: tech-talks/copilot-azure-mcp
mdc: true
section: Copilot Tools
status: active
updated: 2026-04-22
---

<script setup>
import TitleSlide from './components/structure/TitleSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import ProblemSolutionOutcomeSlide from './components/ProblemSolutionOutcomeSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
import WorkflowShowdownStepsSlide from './components/WorkflowShowdownStepsSlide.vue'
import AITerminalTranscriptSlide from './components/AITerminalTranscriptSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="GitHub Copilot CLI + Azure MCP"
  subtitle="Rapid Azure Prototyping and Deployment"
  tagline="Infrastructure becomes conversational — AI that knows what's running in your subscriptions"
  meta="CopilotTraining Tech Talk"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="What if Copilot already knew what was running in your Azure subscriptions before you typed a single word?"
  subtext="Today, AI assistants give generic infrastructure advice. They don't know your actual subscription state, your running resources, or your current quota."
  highlight="Azure MCP closes that gap — live subscription context, directly in terminal conversations."
  :cards='[
    { icon: "☁️", title: "Azure Developer", description: "Query live subscriptions, scaffold configs from running resources, deploy validated" },
    { icon: "⚙️", title: "DevOps Engineer", description: "Compress prototype cycles, clone environments, validate infra code against live state" },
    { icon: "🔒", title: "Platform / Security Lead", description: "Read-only service principals, subscription-scoped boundaries, permission escalation path" },
    { title: "45 min → 8 min", description: "Portal click workflow → conversational deployment with Plan Mode + live context" },
    { title: "0 manual pastes", description: "Azure MCP reads live subscription state automatically — no copying configs to terminal" },
    { title: "1 conversation", description: "Clone an environment to any region with validated parameters — one session" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "⚡", title: "Live Azure Context",    subtitle: "AI that knows your running infrastructure", blurb: "Live subscription context in the terminal, no tab-switching", slide: 4 },
    { icon: "🔄", title: "Prototype Loop",         subtitle: "45-minute portal workflow → 8-minute conversation", blurb: "Plan Mode + Azure MCP: clarify against live resources first", slide: 9 },
    { icon: "⚙️", title: "Configuration & Setup",  subtitle: "Replicate the demo before the next standup", blurb: "Install, scope, and connect the Azure MCP server", slide: 14 },
    { icon: "🛡️", title: "Guardrails & Trust",     subtitle: "The enterprise trust close", blurb: "Read-only service principal and permission escalation path", slide: 17 }
  ]'
/>

---

<!-- SLIDE: Part 1 — Live Azure Context in Terminal Conversations -->
<SectionOpenerSlide
  :partNumber="1"
  title="Live Azure Context"
  subtitle="Live subscription context in the terminal — AI that knows what&#39;s running, no portal tab-switching."
  :cards='[
    { icon: "🔍", title: "Live Context",   blurb: "Real subscription state — resources, quotas, regions — in every answer" },
    { icon: "🚫", title: "No Tab-Switching", blurb: "Portal stays closed; AI answers from actual subscription data" },
    { icon: "💬", title: "Conversational", blurb: "Plain language queries, live accurate answers" }
  ]'
  :terminal='{ context: "gh copilot chat — with Azure MCP connected", detail: "What VMs are running in my subscription right now?" }'
/>

---

<!-- SLIDE: What Azure MCP Unlocks -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="⚡"
  pillLabel="Live Context: What Changes"
  title="Four Capabilities That Reframe Infrastructure Work"
  :cards='[
    { icon: "🔍", title: "Live Discovery", description: "Ask what&#39;s running — AI queries real Azure APIs and returns current structured state" },
    { icon: "📋", title: "Config Extraction", description: "Extract live resource configs as starting points — production-validated, not doc examples" },
    { icon: "✅", title: "Pre-Deploy Validation", description: "AI checks proposed changes against actual quotas, VNets, and SKU availability" },
    { icon: "🔁", title: "Session Context", description: "Query results stay in conversation — follow-up questions need no re-query" }
  ]'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Terminal Demo — Live Context -->
<AITerminalTranscriptSlide
  :partNumber="1"
  pillIcon="💬"
  pillLabel="Live Context: Demo"
  title="Asking Your Subscription What&#39;s Running"
  subtitle="No portal tab. No manual config copying. Just a question."
  :transcript='[
    { type: "prompt", text: "gh copilot chat" },
    { type: "user", text: "What storage accounts exist in my subscription?" },
    { type: "thinking", label: "🔍 Querying azure.storage.list-accounts..." },
    { type: "response", lines: ["Found 4 storage accounts:", "• proddata001 — East US — Standard_GRS — public access: disabled", "• stagingdata001 — West US 2 — Standard_LRS — public access: enabled (blob)", "• devlogs — East US 2 — Standard_LRS", "• backuparchive — Central US — Standard_RAGRS"] },
    { type: "user", text: "Show me the network config for proddata001" },
    { type: "thinking", label: "🔍 Querying azure.storage.get-account-details..." },
    { type: "response", lines: ["proddata001 network config:", "• VNet rules: prod-vnet/app-subnet, prod-vnet/db-subnet", "• Private endpoint: prod-storage-pe01", "• Public access: Disabled — Min TLS: 1.2"] },
    { type: "outcome", text: "Live state in conversation. Portal stayed closed." }
  ]'
  footerMetric="Real subscription data — no manual config pasting"
  :progressDots='{ current: 2, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Config Extraction -->
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="📋"
  pillLabel="Live Context: Templating"
  title="Scaffold New Resources from Live Production Templates"
  :left='{
    header: "Old Way",
    icon: "📄",
    items: [
      { title: "Copy from docs", detail: "Generic ARM/Bicep examples, wrong for your environment" },
      { title: "Manual parameter hunting", detail: "Open portal, find resource, copy settings — repeat per field" },
      { title: "Deploy and debug", detail: "First deployment often fails on config mismatch" }
    ]
  }'
  :right='{
    header: "With Azure MCP",
    icon: "⚡",
    items: [
      { title: "Extract from live resource", detail: "\"Create a staging version of proddata001\" — AI reads live config" },
      { title: "AI adapts automatically", detail: "Downgrades SKU for cost, updates VNet to staging, retains security settings" },
      { title: "Production-validated template", detail: "Generated config matches your actual naming conventions and networking" }
    ]
  }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Environment Cloning -->
<BeforeAfterMetricsSlide
  :partNumber="1"
  pillIcon="🔁"
  pillLabel="Live Context: Environment Clone"
  title="Clone an Environment in One Conversation"
  :before='{ header: "Without Azure MCP", items: [
    { title: "Manual inventory", detail: "List every resource — portal navigation, notes, copy-paste" },
    "Copy configs field by field — SKUs, networking rules, app settings, scaling",
    { title: "Guess cross-region params", detail: "Some SKUs unavailable in target region — discovered on failed deploy" },
    "3–5 failed deployments before environment is consistent"
  ] }'
  :after='{ header: "With Azure MCP", items: [
    "Ask: \"What resources are in staging-rg?\" — AI returns full inventory",
    { title: "\"Clone staging-rg to West US 2\"", detail: "AI reads all configs, adapts region-specific params, flags SKU differences" },
    "Bicep generated from live state — validated against target region availability",
    "One deployment. One conversation."
  ] }'
  :metrics='[
    { value: "1", label: "conversation to clone" },
    { value: "0", label: "manual config copies" },
    { value: "82%", label: "time reduction" }
  ]'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — The Prototype Loop: Plan → Generate → Deploy -->
<SectionOpenerSlide
  :partNumber="2"
  title="Plan → Generate → Deploy"
  subtitle="45-minute portal workflow → 8-minute conversation. Plan Mode validates against live resources before generating code."
  :cards='[
    { icon: "🗺️", title: "Plan Mode",     blurb: "AI asks clarifying questions against live resources before generating code" },
    { icon: "⚡", title: "Speed",          blurb: "45-minute portal click workflow → 8-minute conversation" },
    { icon: "📋", title: "Clone Environments", blurb: "Exact replica with validated parameters, any region, one conversation" }
  ]'
  :terminal='{ context: "gh copilot chat --plan", detail: "Deploy a Function App — AI checks quotas, regions, and existing resources first" }'
/>

---

<!-- SLIDE: Plan Mode + Azure MCP -->
<WorkflowShowdownStepsSlide
  :partNumber="2"
  pillIcon="🗺️"
  pillLabel="Prototype Loop: Plan Mode"
  title="Plan Mode Reorders the Deployment Workflow"
  subtitle="Validate assumptions against live Azure resources before a single line of code is written"
  leftLabel="Traditional Prototype Loop"
  rightLabel="Plan Mode + Azure MCP"
  :steps='[
    { left: { label: "Guess config", note: "Docs examples, manual research, assumptions" }, right: { label: "State the goal", note: "\"Deploy a Function App similar to the payments API\"" } },
    { left: { label: "Write infra code", note: "ARM/Bicep/Terraform — possibly wrong for your env" }, right: { label: "AI asks clarifying questions", note: "Region? Dedicated plan? Database type? Networking?" } },
    { left: { label: "Deploy", note: "First attempt — usually fails on config mismatch" }, right: { label: "AI validates against live state", note: "Checks quotas, VNets, SQL capacity, available SKUs" } },
    { left: { label: "Debug and fix", note: "Portal for diagnosis, repeat 3–5 times" }, right: { label: "Generate + deploy", note: "Bicep from live templates — first deployment succeeds" } }
  ]'
  :outcomeLeft='{ icon: "🔄", label: "Avg 3–5 iterations, 45 min" }'
  :outcomeRight='{ icon: "✅", label: "1–2 iterations, 8 min" }'
  summaryMetric="45 min of guesswork → 8 min of validated conversation"
  :progressDots='{ current: 1, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Plan Mode Terminal Demo -->
<AITerminalTranscriptSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Prototype Loop: Demo"
  title="Plan Mode Validates Before It Generates"
  subtitle="AI asks clarifying questions, queries live resources, catches a firewall gap before deployment"
  :transcript='[
    { type: "prompt", text: "gh copilot chat" },
    { type: "user", text: "Deploy a new App Service for the payments API, similar to the orders API" },
    { type: "thinking", label: "📋 Plan Mode: gathering clarifying questions..." },
    { type: "response", lines: ["Before I generate anything, a few questions:", "1. Same region as orders API (East US), or separate for redundancy?", "2. Share existing prod-asp-001, or dedicated plan?", "3. New database, or connect to existing SQL server?"] },
    { type: "user", text: "East US. Dedicated plan. New Azure SQL database on existing server." },
    { type: "thinking", label: "🔍 Validating against live subscription..." },
    { type: "response", lines: ["✅ East US capacity: S2 App Service Plan available", "✅ prod-sqlserver-eastus: 8/20 databases used, can create new", "⚠️ payments-subnet not in SQL firewall — will add rule"] },
    { type: "outcome", text: "Firewall gap caught in conversation, not post-deployment." }
  ]'
  footerMetric="Misconfiguration caught before deployment — not after"
  :progressDots='{ current: 2, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Generated Bicep -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="📄"
  pillLabel="Prototype Loop: Output"
  title="Bicep Generated from Live Templates, Not Docs Examples"
  codePosition="left"
  :code='{ language: "bicep", filename: "payments-infrastructure.bicep", content: "// Extracted from live orders API config\nresource appServicePlan\n  \"Microsoft.Web/serverfarms@2022-03-01\" = {\n  name: \"payments-asp-001\"\n  location: \"eastus\"\n  sku: { name: \"S2\", capacity: 2 }\n}\nresource appService\n  \"Microsoft.Web/sites@2022-03-01\" = {\n  name: \"payments-api\"\n  properties: {\n    serverFarmId: appServicePlan.id\n    virtualNetworkSubnetId: paymentsSubnetId\n    siteConfig: {\n      alwaysOn: true\n      minTlsVersion: \"1.2\"\n      ftpsState: \"Disabled\"\n    }\n  }\n}\n// + autoscale, SQL db, firewall rule" }'
  :features='[
    { icon: "📐", title: "Production conventions", description: "TLS 1.2, FTPS disabled, VNet integration — extracted from existing prod App Service" },
    { icon: "✅", title: "Pre-validated params", description: "Region, SKU, and firewall confirmed against live subscription before code was written" },
    { icon: "⚠️", title: "Gap already fixed", description: "SQL firewall rule for payments-subnet added before deploy — not discovered post-failure" },
    { icon: "🚀", title: "Deploy immediately", description: "az deployment group create — one command, first deployment succeeds" }
  ]'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Loop Compression -->
<HeroStatSlide
  :partNumber="2"
  pillIcon="⏱️"
  pillLabel="Prototype Loop: Impact"
  title="The Compression That Changes How Teams Prototype"
  subtitle="From hours of guesswork to minutes of validated conversation"
  :hero='{ value: "82%", label: "reduction in prototype-to-deploy cycle time", source: "45-minute portal workflow → 8-minute conversational deployment with Plan Mode + Azure MCP" }'
  :supporting='[
    { icon: "🎯", title: "Validation before code", description: "Assumptions checked against live quotas, SKUs, and networking before Bicep is written" },
    { icon: "📋", title: "Production-grounded configs", description: "Generated code extracts real conventions from running resources — not generic docs" },
    { icon: "🔁", title: "Environment cloning", description: "Clone any resource group to any region in one conversation with auto-adapted parameters" },
    { icon: "💰", title: "Cost-aware generation", description: "AI reads current SKUs and proposes cost-optimized alternatives for dev/staging" }
  ]'
  :insight='{ icon: "💡", text: "AI grounded in live context doesn&#39;t just answer faster — it answers correctly the first time." }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Part 3 — Configuration and Setup -->
<SectionOpenerSlide
  :partNumber="3"
  title="Configuration and Setup"
  subtitle="Install and scope the Azure MCP server in 10 minutes — replicate the demo before the next standup."
  :cards='[
    { icon: "📦", title: "Install",       blurb: "One command to add the Azure MCP server to Copilot CLI" },
    { icon: "🔐", title: "Scope",         blurb: "Read-only service principal — safe for any team member to run" },
    { icon: "✅", title: "Verify",         blurb: "Confirm the connection with a live subscription query" }
  ]'
  :terminal='{ context: "gh copilot mcp add azure-mcp", detail: "Azure MCP connected — subscription context ready" }'
/>

---

<!-- SLIDE: Install and Connect -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="📦"
  pillLabel="Setup: Install"
  title="Three Steps: Install, Authenticate, Connect"
  codePosition="left"
  :code='{ language: "bash", filename: "setup.sh", content: "# 1. Install the Azure MCP server\nnpm install -g @azure/mcp\n\n# 2. Authenticate with your Azure account\naz login\naz account set --subscription \"your-subscription-name\"\n\n# 3. Configure ~/.copilot/mcp-servers.json\n{\n  \"mcpServers\": [{\n    \"name\": \"azure-mcp\",\n    \"command\": \"npx\",\n    \"args\": [\"@azure/mcp\"],\n    \"env\": {\n      \"AZURE_SUBSCRIPTION_ID\": \"your-id\"\n    }\n  }]\n}\n\n# 4. Verify the connection\ngh copilot chat\n> List all resource groups" }'
  :features='[
    { icon: "⏱️", title: "10 minutes total", description: "Install + auth + config + verify — replicate before the next standup" },
    { icon: "🔑", title: "Reuses az login", description: "No separate authentication — inherits your existing Azure CLI session and permissions" },
    { icon: "🎛️", title: "Scope services", description: "AZURE_MCP_ENABLED_SERVICES=storage,cosmosdb — reduce noise, focus on what you need" }
  ]'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Service Selection -->
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="🎛️"
  pillLabel="Setup: Scope"
  title="40+ Services — Scope to What You Need"
  :columns='[
    { icon: "🏗️", title: "Infrastructure", description: "Resources, App Service, AKS, Functions, SQL, Cosmos DB, Key Vault, Storage", items: ["Resource Groups", "ARM deployments", "Pricing SKUs"] },
    { icon: "📊", title: "Observability", description: "Monitor, Log Analytics KQL queries, App Insights, App Configuration stores", items: ["Live log queries", "Metrics history", "Config stores"] },
    { icon: "🔧", title: "DevOps", description: "Azure DevOps: work items, pipelines, pull requests, build status", items: ["Pipeline status", "Work item queries", "PR reviews"] }
  ]'
  :insight='{ icon: "💡", text: "Start with resources + storage + monitor — covers 80% of discovery workflows. Add services as needed." }'
  :progressDots='{ current: 2, total: 2, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — Guardrails and Trust Boundaries -->
<SectionOpenerSlide
  :partNumber="4"
  title="Guardrails and Trust Boundaries"
  subtitle="Read-only service principal and permission escalation path — a safe on-ramp before granting write access."
  :cards='[
    { icon: "🔒", title: "Read-Only First", blurb: "Service principal starts read-only — explore safely, escalate deliberately" },
    { icon: "📈", title: "Escalation Path",  blurb: "Structured permission promotion: read → targeted write → full deploy" },
    { icon: "🏢", title: "Enterprise Ready", blurb: "Org-wide MCP policy, audit trails, and subscription-scoped boundaries" }
  ]'
  :terminal='{ context: "Service principal scope: Reader role", detail: "Explore safely. Escalate deliberately. Ship with confidence." }'
/>

---

<!-- SLIDE: RBAC Inheritance -->
<FrameworkMappingRowsSlide
  :partNumber="4"
  pillIcon="🔒"
  pillLabel="Guardrails: RBAC Model"
  title="MCP Inherits Your Permissions — No Elevation"
  :rows='[
    { label: "Reader role", description: "Query and discover only — no create, update, or delete", tag: "Safe start" },
    { label: "Contributor", description: "Full create/update/delete — use only in dev/staging subs", tag: "Write enabled" },
    { label: "Owner role", description: "Can manage RBAC itself — avoid for MCP workflows", tag: "Too broad" },
    { label: "Svc principal", description: "Scoped identity shared by team — not personal creds", tag: "Recommended" }
  ]'
  :insight='{ icon: "🎯", text: "Start every team with a Reader service principal. Explore safely. Escalate deliberately." }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Two Trust Strategies -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="📈"
  pillLabel="Guardrails: Two Strategies"
  title="Read-Only Exploration vs Write-Enabled Prototyping"
  :left='{
    header: "Read-Only First",
    icon: "🔍",
    items: [
      { title: "Reader service principal", detail: "az ad sp create-for-rbac --role Reader" },
      { title: "Safe on production", detail: "Entire team can query production without risk" },
      { title: "Covers 70% of the value", detail: "Discovery, templating, validation — all read-only" }
    ],
    code: { language: "bash", content: "az ad sp create-for-rbac \\\n  --name copilot-mcp-readonly \\\n  --role Reader \\\n  --scopes /subscriptions/PROD_ID" }
  }'
  :right='{
    header: "Write in Dev/Staging",
    icon: "🚀",
    items: [
      { title: "Contributor on isolated sub", detail: "Separate dev subscription from production" },
      { title: "Cost guardrails required", detail: "Spending limits before enabling write access" },
      { title: "Peer review on AI configs", detail: "Generated Bicep goes through PR before deploy" }
    ],
    code: { language: "bash", content: "az ad sp create-for-rbac \\\n  --name copilot-mcp-dev \\\n  --role Contributor \\\n  --scopes /subscriptions/DEV_ID" }
  }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Permission Escalation Path -->
<WorkflowShowdownStepsSlide
  :partNumber="4"
  pillIcon="🛡️"
  pillLabel="Guardrails: Escalation Path"
  title="The On-Ramp Teams Can Trust"
  subtitle="Earn write access incrementally — each step adds capability with accountability"
  leftLabel="What You Can Do"
  rightLabel="What It Requires"
  :steps='[
    { left: { label: "Discover & query", note: "List resources, extract configs, analyze logs" }, right: { label: "Reader service principal", note: "5-minute setup, safe on production" } },
    { left: { label: "Clone environments", note: "Generate validated Bicep from live resources" }, right: { label: "Contributor on dev sub", note: "Isolated subscription, spending limit set" } },
    { left: { label: "Deploy from conversation", note: "AI-generated infra, full prototype loop" }, right: { label: "Peer review process", note: "PR review on AI configs before deploy" } },
    { left: { label: "Production deployments", note: "Live changes with full Azure MCP context" }, right: { label: "Full team governance", note: "RBAC policy, audit trail, approval workflow" } }
  ]'
  :outcomeLeft='{ icon: "🔍", label: "Start here — immediate value, zero risk" }'
  :outcomeRight='{ icon: "🚀", label: "Earn this — each step builds team confidence" }'
  summaryMetric="Read-only today → full deployment with governance in one sprint"
  :progressDots='{ current: 3, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="From Portal Tab-Switching to Conversational Infrastructure"
  :leftItems='[
    "Open portal, navigate to correct subscription, find the resource type",
    "Copy resource names, regions, and config into a separate note or prompt",
    "Paste context into AI, receive generic advice disconnected from your state",
    "45 minutes of clicks and context-switching to prototype a single deployment"
  ]'
  :rightItems='[
    "Ask Copilot CLI in plain language — Azure MCP provides live subscription context automatically",
    "Plan Mode asks clarifying questions against real resources before generating anything",
    "AI-generated Bicep/ARM code is grounded in your actual quotas, regions, and existing resources",
    "8-minute conversational deployment loop from idea to running infrastructure"
  ]'
  :metrics='[
    { value: "82%", detail: "Prototype time reduction: 45 min portal clicks → 8 min conversation" },
    { value: "0", detail: "Manual config pastes — Azure MCP reads live state automatically" },
    { value: "1", detail: "Conversation to clone an environment to any region with validated parameters" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Install the Azure MCP server with gh copilot mcp add", "Run a live subscription query to verify the connection", "Ask Copilot about your running resources in plain language"]'
  :thisWeek='["Use Plan Mode + Azure MCP to prototype your next deployment conversationally", "Clone a non-production environment to a new region in one conversation", "Show a colleague the 45-min → 8-min compression demo"]'
  :thisMonth='["Set up a read-only service principal for your team to explore safely", "Define your permission escalation path from read to targeted write", "Evaluate Azure MCP for org-wide rollout with subscription-scoped boundaries"]'
  footer="Start with read-only — live context alone changes how your team thinks about infrastructure."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
      { href: "https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/get-started", label: "Get started with the Azure MCP Server", description: "Install, configure, and connect the Azure MCP server to Copilot CLI" },
      { href: "https://github.com/Azure/azure-mcp", label: "Azure MCP Server GitHub Repository", description: "Source, changelog, and community contributions for the Azure MCP server" },
      { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices", label: "Best practices for GitHub Copilot CLI", description: "CLI usage patterns, Plan Mode, and MCP integration guidance" }
    ] },
    { title: "🛠️ Related Talks", color: "purple", items: [
      { label: "Copilot CLI", description: "Core CLI capabilities — Plan Mode, programmatic mode, and terminal-first workflows" },
      { label: "MCP Apps", description: "Model Context Protocol servers — building and connecting custom tool integrations" },
      { label: "Enterprise Patterns", description: "Org-wide Copilot rollout, permission governance, and team trust models" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="GitHub Copilot CLI + Azure MCP"
  subtitle="Rapid Azure Prototyping and Deployment"
  :cards="[
    { value: '8 min', detail: 'Portal click workflow compressed to conversational deployment — Plan Mode + live Azure context' },
    { value: 'Live state', detail: 'Azure MCP gives Copilot real subscription context — no manual config pasting, ever' },
    { value: 'Read-only first', detail: 'Safe on-ramp: explore your infrastructure before granting a single write permission' },
  ]"
  prompt="Which Azure workflow in your team still requires the most tab-switching and manual context — and how would live subscription context change it?"
/>
