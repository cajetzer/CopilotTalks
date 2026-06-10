---
theme: default
colorSchema: dark
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot ACP
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot ACP
mdc: true
section: Agentic Engineering
status: active
updated: 2026-06-10
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
  title="GitHub Copilot ACP"
  subtitle="The Agent Client Protocol"
  tagline="One protocol. Any editor. Any tool. Any workflow."
  meta="CopilotTraining Tech Talk"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="What if every editor could run Copilot agents — without anyone writing custom integration glue?"
  subtext="Today, Copilot's full agent experience is locked to VS Code. Zed, JetBrains, Neovim, and Emacs users are left out."
  highlight="ACP collapses the N×M editor-agent matrix to N+M — the same move LSP made for language servers."
  :cards='[
    { icon: "🔧", title: "Platform Engineer", description: "Stop maintaining N editor integrations — implement ACP once, all agents work immediately" },
    { icon: "✏️", title: "Editor Maintainer", description: "Implement one ACP client and your editor supports every ACP-compatible AI agent" },
    { icon: "👥", title: "Developer", description: "Use Copilot agents in any editor — not just VS Code — with full streaming and context" },
    { title: "N×M → N+M", description: "5 editors × 10 agents = 50 integrations today; ACP collapses it to 15" },
    { title: "14 lines to connect", description: "TypeScript SDK: zero to live streaming Copilot agent response in under 5 minutes" },
    { title: "4 official SDKs", description: "TypeScript, Python, Rust, Kotlin — day-one SDK support for ACP server integration" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🔢", title: "N×M Problem",          subtitle: "The editor lock-in crisis and the familiar fix", blurb: "N×M integration chaos → N+M via one protocol", slide: 4 },
    { icon: "🏗️", title: "Protocol Architecture", subtitle: "ACP is LSP for AI agents", blurb: "Four-layer model, LSP analogy, ACP vs MCP comparison", slide: 9 },
    { icon: "🚀", title: "SDK Ecosystem",          subtitle: "One flag, fourteen lines, live streaming response", blurb: "copilot --acp --stdio + TypeScript SDK demo", slide: 13 },
    { icon: "🔒", title: "Permissions & Security", subtitle: "Adoption enablers, not restrictions", blurb: "Permission callbacks, policy-based CI/CD strategies", slide: 18 }
  ]'
/>

---

<!-- SLIDE: Part 1 — N×M Problem -->
<SectionOpenerSlide
  :partNumber="1"
  title="N×M Problem"
  subtitle="Every editor building custom glue for every AI agent — the integration matrix that kills adoption before it starts."
  :cards='[
    { icon: "🔒", title: "Editor Lock-In",    blurb: "Zed, JetBrains, Neovim, Emacs users locked out of Copilot agents" },
    { icon: "📐", title: "N×M Matrix",        blurb: "Every editor × every agent = a new custom integration to build and maintain" },
    { icon: "📡", title: "Familiar Fix",      blurb: "We solved this for language servers. ACP does the same for AI agents." }
  ]'
  :terminal='{ context: "The N×M problem: 5 editors × 10 agents = 50 custom integrations", detail: "ACP: N+M — 5 editor clients + 10 agent servers = 15 things to build" }'
/>

---

<!-- SLIDE: The Integration Crisis -->
<HeroStatSlide
  :partNumber="1"
  pillIcon="📐"
  pillLabel="N×M Problem: The Crisis"
  title="The Integration Matrix Nobody Can Maintain"
  subtitle="Every AI agent needs a custom plugin for every editor — and every update breaks them all"
  :hero='{ value: "N×M", label: "custom integrations required today — multiplicative, not additive", source: "5 editors × 10 agents = 50 bespoke integrations to build, test, and maintain" }'
  :supporting='[
    { icon: "🔒", title: "VS Code lock-in", description: "Copilot&#39;s full agent experience is only available in VS Code — other editors get nothing" },
    { icon: "🔧", title: "Agent author burden", description: "Each agent must build and maintain 5 separate editor plugins — more glue than capability" },
    { icon: "💥", title: "Update fragility", description: "Every Copilot update potentially breaks 50 custom integrations simultaneously" },
    { icon: "🚧", title: "CI/CD blind spot", description: "Pipelines and custom tools have no standard way to connect to AI coding agents" }
  ]'
  :insight='{ icon: "💡", text: "We have seen this pattern before — and we already know how to fix it." }'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Before and After ACP -->
<BeforeAfterPanelsSlide
  :partNumber="1"
  pillIcon="🔢"
  pillLabel="N×M Problem: Before / After"
  title="From Integration Matrix to Protocol Standard"
  :before='{ header: "Before ACP", items: [
    { title: "Per-editor plugin required", detail: "Zed needs its own, JetBrains needs its own, Neovim needs its own" },
    { title: "50+ custom integrations", detail: "5 editors × 10+ agents = unmaintainable matrix" },
    { title: "Updates break everything", detail: "Each agent update risks breaking all N editor plugins" },
    "No standard permission model — security decisions vary per-integration"
  ] }'
  :after='{ header: "After ACP", items: [
    { title: "One client, all agents", detail: "Each editor implements ACP client once — all ACP servers work immediately" },
    { title: "N+M integrations", detail: "5 editors + 10 agents = 15 things to build — ever" },
    { title: "Protocol versioning", detail: "Compatibility guaranteed across versions — no glue code breaks" },
    "Permission-callback model built into the protocol — consistent, auditable, policy-configurable"
  ] }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The LSP Precedent -->
<WorkflowShowdownStepsSlide
  :partNumber="1"
  pillIcon="📡"
  pillLabel="N×M Problem: The Familiar Fix"
  title="LSP Already Solved This — For Language Servers"
  subtitle="The same N×M → N+M collapse, applied to AI coding agents"
  leftLabel="Before LSP (and Before ACP)"
  rightLabel="After LSP (and After ACP)"
  :steps='[
    { left: { label: "N editors, M servers", note: "Each combo needs custom glue code" }, right: { label: "N editors + M servers", note: "Each implements one standard protocol" } },
    { left: { label: "N×M integrations", note: "Grows multiplicatively — unsustainable" }, right: { label: "N+M integrations", note: "Grows additively — manageable" } },
    { left: { label: "Per-editor plugin updates", note: "Every server change cascades to all clients" }, right: { label: "Protocol versioning", note: "One spec to maintain, backwards compatibility built in" } },
    { left: { label: "Fragmented ecosystem", note: "Editor choice = capability tradeoff" }, right: { label: "Open ecosystem", note: "Editor choice has zero capability cost" } }
  ]'
  :outcomeLeft='{ icon: "💥", label: "50 integrations — none maintainable" }'
  :outcomeRight='{ icon: "✅", label: "15 integrations — all protocol-compatible" }'
  summaryMetric="LSP did it for languages. ACP does it for AI agents."
  :progressDots='{ current: 3, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: What ACP Standardizes -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="🔢"
  pillLabel="N×M Problem: The Solution"
  title="Four Capabilities ACP Standardizes for Every Editor"
  :cards='[
    { icon: "📡", title: "Bidirectional Streaming", description: "Real-time response chunks and permission requests — no polling, no batch APIs" },
    { icon: "🔗", title: "Stateful Sessions", description: "Conversation context persists across prompts — no re-explaining workspace state" },
    { icon: "🔐", title: "Permission Mediation", description: "Every tool call goes through the client — agents never act without approval" },
    { icon: "🌐", title: "Transport Agnostic", description: "stdio for editors, TCP/WebSocket for dashboards — one protocol, any transport" }
  ]'
  :insight='{ icon: "🎯", text: "Any editor implementing these four capabilities connects to any ACP-compatible agent immediately." }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — Protocol Architecture -->
<SectionOpenerSlide
  :partNumber="2"
  title="Protocol Architecture"
  subtitle="ACP is LSP for AI agents — collapsing N×M to N+M through the same standardization that transformed language tooling."
  :cards='[
    { icon: "🧱", title: "Four Layers",       blurb: "Transport → Protocol → Session → Application — the ACP stack" },
    { icon: "🔁", title: "LSP Analogy",       blurb: "Pre-ACP N×M grid vs post-ACP N+M model — the same paradigm shift" },
    { icon: "⚖️", title: "ACP vs MCP vs LSP", blurb: "Comparison table that defuses the &#39;we already have MCP&#39; objection" }
  ]'
  :terminal='{ context: "ACP: Agent Client Protocol — an open standard for editor-agent communication", detail: "Transport-agnostic: stdio, WebSocket, HTTP SSE — one protocol, any transport" }'
/>

---

<!-- SLIDE: Four-Layer Architecture -->
<FrameworkMappingRowsSlide
  :partNumber="2"
  pillIcon="🏗️"
  pillLabel="Protocol Architecture: Four Layers"
  title="The ACP Stack: Four Layers of Standardization"
  :rows='[
    { label: "Transport", description: "JSON-RPC 2.0 over stdio (editors) or TCP (network tools)", tag: "stdio / TCP" },
    { label: "Protocol", description: "Request/response: initialize, session/new, prompt, permissionRequest", tag: "JSON-RPC 2.0" },
    { label: "Session", description: "Conversation context across prompts — cwd, MCP servers, history", tag: "Stateful" },
    { label: "Application", description: "Agent logic (Copilot AI) + client UX (editor, dialogs)", tag: "Business logic" }
  ]'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: LSP Analogy -->
<BeforeAfterMetricsSlide
  :partNumber="2"
  pillIcon="🔁"
  pillLabel="Protocol Architecture: LSP Analogy"
  title="The N×M → N+M Collapse That Changed Language Tooling"
  :before='{ header: "Before ACP", items: [
    { title: "Each editor", detail: "builds custom plugin for each AI agent" },
    { title: "Agent authors", detail: "maintain N editor-specific integrations" },
    "N editors × M agents = N×M integrations to build and maintain",
    "Updates break per-editor glue code with every release"
  ] }'
  :after='{ header: "After ACP", items: [
    { title: "Each editor", detail: "implements ACP client once" },
    { title: "Agent authors", detail: "implement ACP server once" },
    "N editors + M agents = N+M integrations total",
    "Protocol versioning ensures compatibility — no glue code breaks"
  ] }'
  :metrics='[
    { value: "N+M", label: "total integrations" },
    { value: "1×", label: "client implementation per editor" },
    { value: "∞", label: "agents that work immediately" }
  ]'
  :insight='{ icon: "🔁", text: "LSP proved this model works at scale. ACP applies the identical math to AI agents." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: ACP vs MCP vs LSP -->
<ThreeColumnCardSlide
  :partNumber="2"
  pillIcon="⚖️"
  pillLabel="Protocol Architecture: Comparison"
  title="ACP vs MCP vs LSP — Not Competitors, Complements"
  :columns='[
    { icon: "🔗", title: "LSP", description: "Editor ↔ Language Server — code intelligence (completions, hover, go-to-def)", items: ["Stateful per workspace", "stdio or TCP transport", "Standard: editors adopt once"] },
    { icon: "🤖", title: "ACP", description: "Editor ↔ AI Agent — agentic coding assistance, streaming responses, sessions", items: ["Stateful sessions", "stdio or TCP transport", "Standard: editors adopt once"] },
    { icon: "🛠️", title: "MCP", description: "AI Model ↔ Tool — agent accesses external tools, APIs, file systems, databases", items: ["Stateless per invocation", "stdio or SSE transport", "Tool access extension layer"] }
  ]'
  :insight='{ icon: "💡", text: "ACP and MCP are complementary: ACP sessions configure MCP servers, giving agents access to external tools without bypassing the permission model." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Part 3 — SDK Ecosystem -->
<SectionOpenerSlide
  :partNumber="3"
  title="SDK Ecosystem"
  subtitle="One flag starts the server. Fourteen lines of TypeScript produce a live streaming agent response."
  :cards='[
    { icon: "⚡", title: "One Flag",          blurb: "copilot --acp --stdio — server running before the next slide loads" },
    { icon: "💻", title: "SDK Demo",          blurb: "14 lines of TypeScript: zero to streaming Copilot agent response" },
    { icon: "🔄", title: "Flywheel",          blurb: "4 official SDKs + community growth = ACP becomes an open standard" }
  ]'
  :terminal='{ context: "copilot --acp --stdio", detail: "Server ready. N×M problem: solved." }'
/>

---

<!-- SLIDE: Terminal Demo -->
<AITerminalTranscriptSlide
  :partNumber="3"
  pillIcon="⚡"
  pillLabel="SDK Ecosystem: Server Start"
  title="copilot --acp --stdio — The N×M Problem in One Flag"
  subtitle="Before the next slide loads, the ACP server is running and accepting connections"
  :transcript='[
    { type: "prompt", text: "copilot --version" },
    { type: "response", lines: ["GitHub Copilot CLI 1.4.0"] },
    { type: "prompt", text: "copilot --acp --stdio" },
    { type: "thinking", label: "🚀 Starting ACP server..." },
    { type: "response", lines: ["ACP server ready on stdio", "Protocol version: 2025-02-14", "Waiting for client connection..."] },
    { type: "divider" },
    { type: "user", text: "← ACP client connects, initializes, creates session" },
    { type: "response", lines: ["Session created: sess_a1b2c3", "Working directory: /workspace/my-project", "MCP servers: 0 configured"] },
    { type: "outcome", text: "Server running. 50 custom integrations → 1 flag." }
  ]'
  footerMetric="N×M integration problem solved before the next slide"
  :progressDots='{ current: 1, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: TypeScript SDK -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="💻"
  pillLabel="SDK Ecosystem: TypeScript Demo"
  title="14 Lines: Zero to Live Streaming Agent Response"
  codePosition="left"
  :code='{ language: "typescript", filename: "basic-client.ts", content: "import * as acp from &#39;@agentclientprotocol/sdk&#39;;\nimport { spawn } from &#39;node:child_process&#39;;\n\nconst proc = spawn(&#39;copilot&#39;, [&#39;--acp&#39;, &#39;--stdio&#39;]);\nconst stream = acp.ndJsonStream(\n  WritableStream(proc.stdin),\n  ReadableStream(proc.stdout)\n);\nconst conn = new acp.ClientSideConnection(\n  (_agent) => ({\n    async sessionUpdate(p) {\n      if (p.update.sessionUpdate === &#39;agent_message_chunk&#39;)\n        process.stdout.write(p.update.content.text);\n    },\n    async requestPermission(p) {\n      return { outcome: { outcome: &#39;approved&#39; } };\n    }\n  }), stream);\nawait conn.initialize({ protocolVersion: acp.PROTOCOL_VERSION });\nconst s = await conn.newSession({ cwd: process.cwd() });\nawait conn.prompt({ sessionId: s.sessionId,\n  prompt: [{ type: &#39;text&#39;, text: &#39;Explain this project&#39; }] });" }'
  :features='[
    { icon: "📦", title: "One package", description: "npm install @agentclientprotocol/sdk — official TypeScript SDK" },
    { icon: "🔄", title: "Streaming live", description: "sessionUpdate fires per chunk — responses appear as they&#39;re generated" },
    { icon: "🔐", title: "Permission hook", description: "requestPermission intercepts every tool call — you control what the agent can do" },
    { icon: "🧵", title: "Session context", description: "newSession with cwd — agent understands your workspace from the start" }
  ]'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: SDK Ecosystem -->
<FourCardGridSlide
  :partNumber="3"
  pillIcon="🌐"
  pillLabel="SDK Ecosystem: Four Languages"
  title="Four Official SDKs — Build in Your Language"
  :cards='[
    { icon: "🟦", title: "TypeScript", description: "@agentclientprotocol/sdk — reference implementation, most examples, Node.js v22+" },
    { icon: "🐍", title: "Python", description: "pip install agent-client-protocol — asyncio-native TCP client, ideal for scripts" },
    { icon: "🦀", title: "Rust", description: "cargo add agent-client-protocol — high-performance client for system tools" },
    { icon: "☕", title: "Kotlin", description: "Maven/Gradle via acp-kotlin — JVM integration for JetBrains and Android tooling" }
  ]'
  :insight='{ icon: "🔄", text: "All SDKs implement the same protocol — a client built in Python connects to any ACP server, including Copilot CLI." }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: MCP Integration and Flywheel -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🔄"
  pillLabel="SDK Ecosystem: Ecosystem Growth"
  title="MCP Integration + The Platform Flywheel"
  :left='{
    header: "ACP + MCP Together",
    icon: "🛠️",
    items: [
      { title: "ACP sessions configure MCP", detail: "Pass MCP server config in newSession() — agent gets tool access" },
      { title: "Complementary protocols", detail: "ACP = editor ↔ agent; MCP = agent ↔ tools. No overlap." },
      { title: "GitHub MCP + ACP", detail: "Agent reads PRs, issues, code via MCP — all mediated through ACP permission callbacks" }
    ],
    code: { language: "typescript", content: "newSession({ cwd, mcpServers: [\n  { name: &#39;github&#39;,\n    transport: { type: &#39;stdio&#39;,\n    command: &#39;npx&#39;, args: [&#39;@modelcontextprotocol/server-github&#39;] } }\n] })" }
  }'
  :right='{
    header: "The Platform Flywheel",
    icon: "🔄",
    items: [
      { title: "More editors → more servers", detail: "Each new ACP editor client creates demand for more ACP agent servers" },
      { title: "More servers → more value", detail: "Each new ACP agent server increases the value of every ACP editor" },
      { title: "Open standard outcome", detail: "Flywheel turns ACP from a Copilot feature into an ecosystem standard" }
    ]
  }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — Permissions & Security -->
<SectionOpenerSlide
  :partNumber="4"
  title="Permissions & Security"
  subtitle="Every constraint is an adoption enabler — this section answers &#39;can I ship this?&#39; for platform engineers."
  :cards='[
    { icon: "🔐", title: "Permission Model",  blurb: "Agent proposes → client mediates → user or policy decides" },
    { icon: "📋", title: "Two Strategies",    blurb: "Interactive approval for editors, policy-based for CI/CD pipelines" },
    { icon: "✅", title: "Enterprise Ready",   blurb: "Auto-approve reads, prompt writes, block deletes — three lines of config" }
  ]'
  :terminal='{ context: "Permission callback: agent proposes, policy decides", detail: "auto-approve reads, prompt writes, block deletes — CI/CD safe" }'
/>

---

<!-- SLIDE: Permission Flow -->
<WorkflowShowdownStepsSlide
  :partNumber="4"
  pillIcon="🔐"
  pillLabel="Permissions: The Model"
  title="Every Tool Call Is Mediated — Architecturally, Not Optionally"
  subtitle="Agent proposes, client mediates, user or policy decides"
  leftLabel="Without ACP Permission Model"
  rightLabel="With ACP Permission Model"
  :steps='[
    { left: { label: "Agent runs freely", note: "No interception — arbitrary commands execute" }, right: { label: "Agent proposes action", note: "requestPermission sent to client before execution" } },
    { left: { label: "No visibility", note: "User discovers what happened post-execution" }, right: { label: "Client presents request", note: "Tool name, arguments, context shown to user or policy" } },
    { left: { label: "No control", note: "Dangerous operations indistinguishable from safe ones" }, right: { label: "User or policy decides", note: "approved / cancelled / with explanation" } },
    { left: { label: "Trust or don&#39;t trust", note: "Binary — no middle ground" }, right: { label: "Agent proceeds or adapts", note: "Approved: executes. Cancelled: agent finds alternative." } }
  ]'
  :outcomeLeft='{ icon: "⚠️", label: "Blind trust required for any automation" }'
  :outcomeRight='{ icon: "✅", label: "Granular control without blocking agent capability" }'
  summaryMetric="Permission-mediated trust: enterprise-safe without sacrificing agent capability"
  :progressDots='{ current: 1, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Two Permission Strategies -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="📋"
  pillLabel="Permissions: Two Strategies"
  title="Interactive Approval vs Policy-Based Automation"
  :left='{
    header: "Interactive (Editor Sessions)",
    icon: "👤",
    items: [
      { title: "User reviews each request", detail: "Tool name, arguments, and context shown in editor UI" },
      { title: "Approve or cancel with reason", detail: "Agent adapts its approach based on user response" },
      { title: "Best for: explorative work", detail: "When you want full visibility into every agent action" }
    ],
    code: { language: "typescript", content: "async requestPermission(params) {\n  console.log(`Tool: ${params.tool}`);\n  const ok = await promptUser(`Allow ${params.tool}?`);\n  return { outcome: { outcome: ok ? &#39;approved&#39; : &#39;cancelled&#39; } };\n}" }
  }'
  :right='{
    header: "Policy-Based (CI/CD Pipelines)",
    icon: "⚙️",
    items: [
      { title: "Auto-approve reads", detail: "read_file, list_directory, search_code — always safe" },
      { title: "Auto-deny dangerous ops", detail: "delete_file, execute_command — blocked without user prompt" },
      { title: "Best for: automation", detail: "Headless environments where user interaction isn&#39;t possible" }
    ],
    code: { language: "typescript", content: "const SAFE = [&#39;read_file&#39;, &#39;list_directory&#39;];\nconst BLOCKED = [&#39;delete_file&#39;, &#39;execute_command&#39;];\nasync requestPermission({ tool }) {\n  if (SAFE.includes(tool)) return approved;\n  if (BLOCKED.includes(tool)) return cancelled;\n  return await promptUser(tool);\n}" }
  }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Enterprise Security -->
<FrameworkMappingRowsSlide
  :partNumber="4"
  pillIcon="🔒"
  pillLabel="Permissions: Enterprise Ready"
  title="Every Enterprise Security Concern Has an ACP Answer"
  :rows='[
    { label: "File access", description: "Permission callback gates every file op — explicit approval required", tag: "requestPermission" },
    { label: "Command exec", description: "Shell commands blocked by policy; agents find safe alternatives", tag: "policy-based" },
    { label: "Data egress", description: "Network ops mediated through client — no exfiltration without approval", tag: "client-mediated" },
    { label: "Scope creep", description: "Session-scoped — permissions reset each new session", tag: "session-isolated" },
    { label: "Audit trail", description: "Client logs all permission requests and outcomes for audit", tag: "auditable" }
  ]'
  :insight='{ icon: "✅", text: "Permission mediation is architecturally enforced — agents cannot bypass it. The protocol makes trust explicit." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="From N×M Integration Chaos to N+M Protocol Simplicity"
  :leftItems='[
    "Every editor builds custom glue code for every AI agent it wants to support",
    "Zed, JetBrains, Neovim users locked out — Copilot agents VS Code only",
    "Each integration breaks independently when agent APIs change",
    "No standard permission model — security decisions made per-integration"
  ]'
  :rightItems='[
    "ACP: one protocol, any editor implements the client once",
    "Any editor with an ACP client gets all ACP-compatible agents immediately",
    "Agent servers implement ACP once — all clients benefit automatically",
    "Permission-callback model: consistent, auditable, policy-configurable"
  ]'
  :metrics='[
    { value: "N×M → N+M", detail: "Integration count collapses from multiplicative to additive" },
    { value: "14 lines", detail: "TypeScript SDK: zero to live streaming agent response" },
    { value: "4 SDKs", detail: "TypeScript, Python, Rust, Kotlin — day-one official support" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Run copilot --acp --stdio and watch the server start", "Read the ACP Server reference docs (link in References)", "Try the TypeScript SDK quickstart in 14 lines"]'
  :thisWeek='["Build a minimal ACP client in your editor of choice", "Connect an MCP server through an ACP session", "Explore REPL mode for interactive agent exploration"]'
  :thisMonth='["Implement permission callbacks for your team&#39;s security requirements", "Ship an ACP-compatible agent server for your internal tooling", "Evaluate ACP as the standard for your platform&#39;s AI agent strategy"]'
  footer="Start with copilot --acp --stdio — your first agent connection is one flag away."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
      { href: "https://docs.github.com/en/copilot/reference/acp-server", label: "Copilot CLI ACP Server reference", description: "Complete reference for the ACP server protocol and configuration" },
      { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-getting-started", label: "Getting started with Copilot CLI", description: "Install and configure Copilot CLI to run the ACP server" }
    ] },
    { title: "🛠️ Related Talks", color: "purple", items: [
      { label: "Copilot SDK", description: "Building custom Copilot extensions and agents with the SDK" },
      { label: "Agent Teams", description: "Multi-agent orchestration and AgentCouncil deliberation patterns" },
      { label: "MCP Apps", description: "Model Context Protocol servers and tool integration patterns" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="GitHub Copilot ACP"
  subtitle="The Agent Client Protocol"
  :cards="[
    { value: 'N+M', detail: 'One protocol collapses the editor-agent matrix — the same math that made LSP the language tooling standard' },
    { value: '14 lines', detail: 'TypeScript SDK: zero to live streaming Copilot agent response in under 5 minutes' },
    { value: '4 SDKs', detail: 'TypeScript, Python, Rust, Kotlin — ACP is an open standard, not a VS Code feature' },
  ]"
  prompt="Which editor in your stack would benefit most from ACP support — and who would you talk to about implementing it?"
/>
