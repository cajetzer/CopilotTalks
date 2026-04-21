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
section: Agentic Engineering
status: active
updated: 2026-02-11
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
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import ProblemSolutionOutcomeSlide from './components/ProblemSolutionOutcomeSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="GitHub Copilot ACP"
subtitle="The Agent Client Protocol"
tagline="Universal AI integration for any editor, tool, or workflow"
meta="Tech Talk · 45 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I integrate Copilot's agentic capabilities into any editor, tool, or workflow?"
subtext="Not just VS Code — any editor deserves the same Copilot agent experience."
highlight="ACP is the LSP for AI agents — a standard protocol for editor communication."
:cards='[
  { icon: "🛠️", title: "Extension Developers Building AI Tools", description: "Embed Copilot agent runtime in VS Code extensions using the ACP SDK" },
  { icon: "🖊️", title: "Teams Using Non-VS Code Editors", description: "Zed, JetBrains, Neovim, and Emacs — same Copilot agent experience everywhere" },
  { icon: "🏗️", title: "Platform Teams Building Integrations", description: "Connect CI/CD pipelines, review tools, and terminals to Copilot agents via ACP" },
  { title: "Editor Lock-In", description: "Teams outside VS Code miss agent features — ACP solves this universally" },
  { title: "N×M Problem", description: "N editors × M agents becomes N+M with a standard open protocol" },
  { title: "Custom Tools", description: "Embed the Copilot agent runtime directly into any application or workflow" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🎯", title: "The LSP Analogy", subtitle: "ACP is \u2018LSP for AI agents\u2019", blurb: "From N\u00d7M integrations to N+M standard protocol", slide: 4 },
    { icon: "🏗️", title: "Protocol Architecture", subtitle: "Four-layer design", blurb: "Transport → Protocol → Session → Application", slide: 7 },
    { icon: "🚀", title: "Getting Started", subtitle: "From zero to connected", blurb: "Start server, connect SDK, send first prompt", slide: 11 },
    { icon: "🛡️", title: "Security & Use Cases", subtitle: "Trust boundaries and real-world patterns", blurb: "Zed integration, CI/CD, polyrepo workflows", slide: 14 },
  ]'
/>
---

<!-- SLIDE: Part 1 — The LSP Analogy -->

<SectionOpenerSlide
  :partNumber="1"
  title="The LSP Analogy"
  subtitle="Standardizing editor ↔ agent communication"
  :cards='[
    { icon: "📐", title: "N×M Problem", blurb: "Every editor × every agent = fragmentation" },
    { icon: "⚡", title: "N+M Solution", blurb: "One protocol connects any editor to any agent" },
    { icon: "🔄", title: "Proven Pattern", blurb: "LSP did this for language servers, ACP for AI" },
  ]'
  :terminal='{ context: "Before: Each editor builds custom AI plugin", detail: "After: Implement ACP client once, connect to any agent" }'
/>
---

<!-- SLIDE: Before ACP vs After ACP -->
<BeforeAfterPanelsSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Standardization Shift"
  title="From N×M Integration Chaos to N+M Standard Protocol"
  :before='{
    header: "❌ Before ACP",
    items: [
      { title: "N×M Integration Matrix", detail: "Each editor builds custom plugin for each agent — VS Code needs one, JetBrains needs another" },
      { title: "Brittle Update Cycles", detail: "Agent updates break editor-specific integrations; maintainers spend months on glue code" },
      { title: "Editor Lock-In", detail: "Switching editors means losing AI capabilities entirely" },
      { title: "Automation Gaps", detail: "CI/CD pipelines and custom tools cant leverage agent capabilities without bespoke wiring" }
    ]
  }'
  :after='{
    header: "✅ After ACP",
    items: [
      { title: "N+M Standard Protocol", detail: "Each editor implements ACP client once; each agent implements server once — scales linearly" },
      { title: "Protocol Versioning", detail: "Agent updates maintain compatibility through versioned protocol; integrations stay stable" },
      { title: "Editor Freedom", detail: "Use Zed, JetBrains, Neovim, or Emacs — full agent experience available in all ACP-compatible editors" },
      { title: "Universal Integration", detail: "CI/CD, custom tools, and dashboards connect through standard SDKs in TypeScript, Python, Rust, Kotlin" }
    ]
  }'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Key Capabilities -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="⚡"
  pillLabel="What ACP Enables"
  title="Four Capabilities That Define the Protocol"
  :cards='[
    { icon: "🌐", title: "Universal Editor Support", description: "Zed, JetBrains, Neovim, Emacs — all supported through one protocol, no custom plugins required" },
    { icon: "📡", title: "Bidirectional Streaming", description: "Response chunks appear instantly; agents stream output and request permissions as they work" },
    { icon: "💬", title: "Stateful Sessions", description: "Persistent conversation context across multiple prompts — no re-explaining context every turn" },
    { icon: "🛡️", title: "Permission-Mediated Security", description: "Every tool invocation goes through explicit user approval, maintaining enterprise trust boundaries" }
  ]'
  :insight='{ icon: "🔧", text: "Multi-language SDK ecosystem: official SDKs in TypeScript, Python, Rust, and Kotlin for custom integrations" }'
  :progressDots='{ current: 2, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — Protocol Architecture -->

<SectionOpenerSlide
  :partNumber="2"
  title="Protocol Architecture"
  subtitle="Four layers of standardization"
  :cards='[
    { icon: "🔌", title: "Transport", blurb: "NDJSON over stdio/TCP" },
    { icon: "🔄", title: "Protocol", blurb: "JSON-RPC bidirectional" },
    { icon: "💬", title: "Session", blurb: "Stateful context management" },
  ]'
  :terminal='{ context: "Inspired by LSP’s proven design", detail: "Four layers decouple editors from agents" }'
/>
---

<!-- SLIDE: Four-Layer Architecture -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Four-Layer Architecture</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
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
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📡 Message Flow Sequence</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
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
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Protocol Comparison</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
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

<SectionOpenerSlide
  :partNumber="3"
  title="Getting Started"
  subtitle="From zero to connected in 5 minutes"
  :cards='[
    { icon: "🚀", title: "Start ACP Server", blurb: "One command launches Copilot as protocol server" },
    { icon: "🔌", title: "Connect SDK", blurb: "TypeScript, Python, Rust, or Kotlin client" },
    { icon: "💬", title: "Send Prompt", blurb: "Create session and stream responses" },
  ]'
  :terminal='{ context: "Prerequisites: Copilot subscription + CLI installed", detail: "Node.js v22+ for TypeScript SDK examples" }'
/>
---

<!-- SLIDE: Start the ACP Server & Connect SDK -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Quick Start Steps</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
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
<div><span class="text-purple-400">import</span> <span class="text-white">&#123; spawn &#125; from <span class="text-green-400">"node:child_process"</span>;</span></div>
<div class="text-gray-400 mt-1">// Spawn server, create stream + client</div>
<div><span class="text-purple-400">const</span> <span class="text-white">process = spawn(<span class="text-green-400">"copilot"</span>, [<span class="text-green-400">"--acp"</span>, <span class="text-green-400">"--stdio"</span>]);</span></div>
<div><span class="text-purple-400">const</span> <span class="text-white">stream = acp.ndJsonStream(output, input);</span></div>
<div class="text-gray-400 mt-1">// Connect, create session, send prompt</div>
<div><span class="text-purple-400">const</span> <span class="text-white">conn = <span class="text-purple-400">new</span> acp.ClientSideConnection();</span></div>
<div><span class="text-purple-400">await</span> <span class="text-white">conn.initialize(&#123; protocolVersion &#125;);</span></div>
<div><span class="text-purple-400">const</span> <span class="text-white">session = <span class="text-purple-400">await</span> conn.newSession(&#123;cwd&#125;);</span></div>
<div><span class="text-purple-400">await</span> <span class="text-white">conn.prompt(&#123; sessionId, prompt &#125;);</span></div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Successful Connection -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Verify Connection</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
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
<div class="text-gray-400">&#123; protocolVersion: "1.0", capabilities: &#123; streaming: true, ... &#125; &#125;</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">2</div>
<div class="font-bold text-green-300">New Session Result</div>
</div>
<div class="ml-9 text-xs opacity-90 mb-2">Unique sessionId for all subsequent prompts in this conversation</div>
<div class="ml-9 font-mono text-xs bg-black/40 p-2 rounded">
<div class="text-gray-400">&#123; sessionId: "abc123-xyz789", status: "ready" &#125;</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Streaming & Prompt Results -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Streaming & Results</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
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
<div class="text-blue-400">sessionUpdate: &#123; type: "agent_message_chunk", text: "The purpose..." &#125;</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">4</div>
<div class="font-bold text-green-300">Prompt Result</div>
</div>
<div class="ml-9 text-xs opacity-90 mb-2">Response complete with stop reason</div>
<div class="ml-9 font-mono text-xs bg-black/40 p-2 rounded">
<div class="text-gray-400">&#123; stopReason: "end_turn", sessionId: "abc123-xyz789" &#125;</div>
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

<SectionOpenerSlide
  :partNumber="4"
  title="Security & Use Cases"
  subtitle="Trust boundaries and real-world patterns"
  :cards='[
    { icon: "🛡️", title: "Permission Model", blurb: "Every tool invocation requires approval" },
    { icon: "🎯", title: "Editor Integration", blurb: "Zed: 2 weeks vs 3+ months custom build" },
    { icon: "🔄", title: "Polyrepo Workflows", blurb: "Cross-repo context in one session" },
  ]'
  :terminal='{ context: "Agents never bypass permission layer", detail: "Enterprise-ready trust without blind faith" }'
/>
---

<!-- SLIDE: Permission Model -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-1">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Trust Without Blind Faith</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 6</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-1.5 text-xs">
<div class="space-y-1">
<div class="p-1.5 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1 text-xs">How Permission Mediation Works</div>
<div class="opacity-90 space-y-0.5 text-xs">
<div class="bg-black/30 px-1.5 py-0.5 rounded text-green-400 font-mono">Agent: "I need to run `npm test`"</div>
<div class="text-center opacity-70 text-xs leading-none">↓</div>
<div class="bg-black/30 px-1.5 py-0.5 rounded text-blue-400 font-mono">Client: Shows permission dialog</div>
<div class="text-center opacity-70 text-xs leading-none">↓</div>
<div class="bg-black/30 px-1.5 py-0.5 rounded text-yellow-400 font-mono">User: Approves or denies</div>
<div class="text-center opacity-70 text-xs leading-none">↓</div>
<div class="bg-black/30 px-1.5 py-0.5 rounded text-green-400 font-mono">Agent: Executes</div>
</div>
</div>
<div class="p-1.5 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1 text-xs">Policy-Based Approval</div>
<div class="font-mono text-xs bg-black/40 px-1.5 py-1 rounded space-y-0">
<div class="text-gray-400">// Automated rules</div>
<div><span class="text-purple-400">const</span> SAFE = [<span class="text-green-400">"read"</span>, <span class="text-green-400">"list"</span>];</div>
<div><span class="text-purple-400">const</span> BLOCKED = [<span class="text-red-400">"delete"</span>];</div>
<div class="text-xs">if (SAFE) → approve</div>
</div>
</div>
</div>
<div class="space-y-1">
<table class="w-full text-xs">
<thead>
<tr class="border-b border-teal-500/30">
<th class="text-left py-0 text-teal-300 text-xs">Concern</th>
<th class="text-left py-0 text-emerald-300 text-xs">Solution</th>
</tr>
</thead>
<tbody class="opacity-90">
<tr class="border-b border-teal-500/10">
<td class="py-0">Unauthorized access</td>
<td class="py-0 text-xs">Permission gates every op</td>
</tr>
<tr class="border-b border-teal-500/10">
<td class="py-0">Command execution</td>
<td class="py-0 text-xs">Requires approval</td>
</tr>
<tr class="border-b border-teal-500/10">
<td class="py-0">Data exfiltration</td>
<td class="py-0 text-xs">Network mediated</td>
</tr>
<tr class="border-b border-teal-500/10">
<td class="py-0">Scope creep</td>
<td class="py-0 text-xs">Session-scoped</td>
</tr>
<tr>
<td class="py-0">Audit trail</td>
<td class="py-0 text-xs">All logged</td>
</tr>
</tbody>
</table>
<div class="p-1 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded text-xs border border-blue-500/20">
<span class="text-blue-300 font-semibold">Built-in:</span> Permission layer is part of the protocol, not optional.
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case — Zed Editor Integration -->
<ProblemSolutionOutcomeSlide
  :partNumber="4"
  pillIcon="🎯"
  pillLabel="Use Case: Zed Editor Integration"
  title="Any Editor. Zero Custom Code."
  :problem='{
    header: "Problem",
    items: [
      { title: "Zed users wanted Copilot agent support", detail: "VS Code extension layer would take months and break with each update" },
      { title: "Permanent maintenance burden", detail: "Custom per-editor integration code becomes a forever-cost" },
      { title: "Months of engineering work", detail: "3+ months estimated for full feature parity" }
    ]
  }'
  :solution='{
    header: "Solution",
    items: [
      { title: "Zed implemented ACP client", detail: "Connect directly to Copilot CLI over stdio — protocol, not plugin" },
      { title: "Single config block in settings.json", detail: "One copilot --acp --stdio command line spawns the agent" }
    ]
  }'
  :outcome='{
    header: "Outcome",
    items: [
      { title: "Shipped in 2 weeks", detail: "vs 3+ months for a custom plugin approach" },
      { title: "Zero ongoing maintenance", detail: "Protocol versioning means agent updates dont break Zed" },
      { title: "Pattern works in any editor", detail: "JetBrains, Neovim, Emacs follow the same recipe" }
    ]
  }'
  :insight='{ icon: "💡", text: "ACP insight: protocol neutrality means any tool gets full Copilot experience — no custom code, no maintenance." }'
  :progressDots='{ current: 2, total: 6, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Use Case — CI/CD Code Review Dashboard -->
<ProblemSolutionOutcomeSlide
  :partNumber="4"
  pillIcon="🎯"
  pillLabel="Use Case: CI/CD Code Review Dashboard"
  title="Reviews That Remember. Feedback That Compounds."
  :problem='{
    header: "Problem",
    items: [
      { title: "Multi-turn reviews lost context", detail: "REST calls started fresh each time — reviewers re-explained context for every follow-up" },
      { title: "60% of PRs reviewed", detail: "Follow-up questions abandoned when context was lost" }
    ]
  }'
  :solution='{
    header: "Solution",
    items: [
      { title: "ACP session per PR", detail: "Diff, context, and review history persist across rounds" },
      { title: "Authors ask follow-ups without losing thread", detail: "Same session, same context, iterative conversation" }
    ],
    code: { language: "python", content: "session = acp.create(cwd=repo)\nsession.send(pr_diff)\nsession.stream()  # in context" }
  }'
  :outcome='{
    header: "Outcome",
    items: [
      { title: "Coverage: 60% → 100% of PRs", detail: "40% gained review coverage from stateful sessions" },
      { title: "Iterative feedback from context", detail: "Follow-up questions answered in same session" },
      { title: "Quality improves across rounds", detail: "Reviewer context compounds with each exchange" }
    ]
  }'
  :insight='{ icon: "💡", text: "ACP insight: Stateful sessions turn one-shot commands into iterative conversations — like a good human reviewer vs. a linter." }'
  :progressDots='{ current: 3, total: 6, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Use Case — Polyrepo Development -->
<ProblemSolutionOutcomeSlide
  :partNumber="4"
  pillIcon="🎯"
  pillLabel="Use Case: Polyrepo Development"
  title="Cross-Repo Intelligence. Zero Context Switching."
  :problem='{
    header: "Problem",
    items: [
      { title: "5-10 repos, context lost every switch", detail: "Each repo is a separate session — cross-boundary references require manual copy-paste" },
      { title: "Onboarding takes 2 weeks", detail: "Every boundary resets context; new devs do weeks of repo archaeology" }
    ]
  }'
  :solution='{
    header: "Solution",
    items: [
      { title: "One ACP session at workspace root", detail: "MCP servers give targeted access to each repo without merging them" },
      { title: "AI navigates repos in single conversation", detail: "Context spans repository boundaries as naturally as reading one codebase" }
    ],
    code: { language: "bash", content: "# Workspace session\ncopilot --acp --stdio --cwd /workspace\n\"filesystem-api\": ./api" }
  }'
  :outcome='{
    header: "Outcome",
    items: [
      { title: "Onboarding: 2 weeks → 3 days", detail: "Context persists across boundaries — no more repo archaeology" },
      { title: "Traces calls API → web → infra", detail: "How does X work? answered across all repos in one session" },
      { title: "MCP scoping keeps context focused", detail: "Targeted per-repo access without losing workspace-level thread" }
    ]
  }'
  :insight='{ icon: "💡", text: "ACP insight: Session-scoped context + MCP servers turns polyrepo into a navigable codebase — without merging repos." }'
  :progressDots='{ current: 4, total: 6, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: ACP Agent Orchestrator -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Featured Project: ACP Agent Orchestrator</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">5 of 6</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="space-y-1">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1">What It Does</div>
<div class="opacity-90 space-y-0.5 text-xs">
<div>• One `copilot --acp --stdio` per repo</div>
<div>• Orchestrator coordinates workers</div>
<div>• Broadcast prompts to all simultaneously</div>
<div>• Coalesce results and synthesize</div>
<div>• Interactive card UI</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-teal-900/30 to-emerald-900/30 rounded-lg border border-teal-500/30">
<div class="font-bold text-teal-300 mb-1">Stack</div>
<table class="w-full text-xs">
<thead>
<tr class="border-b border-teal-500/30">
<th class="text-left py-0.5 text-teal-300 text-xs">Layer</th>
<th class="text-left py-0.5 text-emerald-300 text-xs">Tech</th>
</tr>
</thead>
<tbody class="opacity-90">
<tr class="border-b border-teal-500/10">
<td class="py-0.5 text-xs">Backend</td>
<td class="py-0.5 text-xs">Node + Socket.IO</td>
</tr>
<tr class="border-b border-teal-500/10">
<td class="py-0.5 text-xs">Frontend</td>
<td class="py-0.5 text-xs">React + Vite</td>
</tr>
<tr>
<td class="py-0.5 text-xs">ACP</td>
<td class="py-0.5 text-xs">@agentclientprotocol/sdk</td>
</tr>
</tbody>
</table>
<img src="./copilot-acp/images/acp-orchestrator-agents.png" class="rounded border border-cyan-500/30 w-full h-16 object-cover object-top mt-1" alt="Multiple agents" />
</div>
</div>
<div class="space-y-1">
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1">Scenario: Cross-Repo Audit</div>
<div class="text-xs opacity-90 space-y-0.5">
<div class="bg-black/30 px-1.5 py-0.5 rounded"><span class="text-green-400">1.</span> Broadcast audit prompts</div>
<div class="bg-black/30 px-1.5 py-0.5 rounded"><span class="text-blue-400">2.</span> Coalesce & synthesize findings</div>
<div class="bg-black/30 px-1.5 py-0.5 rounded"><span class="text-cyan-400">3.</span> Create coordinated PRs</div>
</div>
</div>
<img src="./copilot-acp/images/acp-orchestrator-results.png" class="rounded border border-blue-500/30 w-full h-16 object-cover object-top" alt="Results" />
<div class="p-1.5 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded border border-indigo-500/20">
<div class="font-mono text-xs opacity-90 space-y-0">
<div class="text-indigo-300">git clone https://github.com/MSBart2/cli-acp.git</div>
<div class="text-gray-400">cd cli-acp/webapp && npm run install:all && npm run dev</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: SDK Ecosystem -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-1">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Multi-Language SDK Ecosystem</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">6 of 6</span>
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
<div><span class="text-purple-400">const</span> <span class="text-white">session = await conn.newSession(&#123;</span></div>
<div class="ml-2"><span class="text-white">cwd: process.cwd(),</span></div>
<div class="ml-2"><span class="text-white">mcpServers: [</span></div>
<div class="ml-4"><span class="text-white">&#123; name: <span class="text-green-400">"github"</span>, transport: &#123; type: <span class="text-green-400">"stdio"</span>,</span></div>
<div class="ml-6"><span class="text-white">command: <span class="text-green-400">"npx"</span>, args: [<span class="text-green-400">"-y"</span>, <span class="text-green-400">"@mcp/server-github"</span>] &#125; &#125;</span></div>
<div class="ml-2"><span class="text-white">]</span></div>
<div><span class="text-white">&#125;);</span></div>
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

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="🌐 From Tool Silos to Universal Protocol"
  :leftItems="[
    'Every editor needs a custom AI plugin — VS Code, Zed, Neovim, JetBrains all incompatible',
    'Agents lock into specific editor integrations with brittle update cycles',
    'Tools and CI/CD have no way to leverage agent capabilities',
    'Developers lose AI features when switching editors'
  ]"
  :rightItems="[
    'One ACP server works with any ACP-compatible editor or tool out of the box',
    'Agents implement once, work everywhere — agents scale linearly with editors',
    'CI/CD, custom tools, and dashboards all connect via standard SDKs',
    'Developer experience consistent across your entire toolchain'
  ]"
  :metrics="[
    { value: 'N×M → N+M', detail: 'Integration model shift' },
    { value: '2-3 weeks → 2-3 days', detail: 'Time to add new editor' },
    { value: 'Any Editor', detail: 'Full agent parity everywhere' }
  ]"
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Check CLI: copilot --version", "Start ACP daemon: copilot --acp --stdio", "Verify stdio connection works", "Browse the spec and GitHub repo"]'
  :thisWeek='["Install SDK: npm install @acp/sdk", "Run basic client example", "Implement a permission policy", "Try multi-turn conversation"]'
  :thisMonth='["Clone ACP Orchestrator repo", "Connect to multiple polyrepos", "Run ACP agents across repos", "Experiment with permission layers"]'
  footer="ACP gives you a vendor-neutral stdio protocol for multi-agent systems — start with the daemon, implement permission policies, and scale to polyrepo orchestration as your architecture grows."
/>


---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "🤖 Official Docs & Protocol", color: "cyan", items: [
        { href: "https://agentclientprotocol.com", label: "Agent Client Protocol (ACP)", description: "Official spec, architecture overview, and quick start" },
        { href: "https://docs.github.com/en/copilot/reference/acp-server", label: "Copilot CLI ACP Server Reference", description: "Server modes, integration examples, TypeScript client" },
        { href: "https://github.com/agentclientprotocol/agent-client-protocol", label: "ACP GitHub Repository", description: "Open source protocol spec and community libraries" },
        { href: "https://zed.dev/acp", label: "Zed ACP Integration", description: "How Zed implemented ACP client support" }
    ] },
    { title: "🛠️ SDKs & Implementation", color: "purple", items: [
        { href: "https://www.npmjs.com/package/@agentclientprotocol/sdk", label: "TypeScript SDK (npm)", description: "Reference implementation with full type safety" },
        { href: "https://pypi.org/project/agent-client-protocol/", label: "Python SDK (PyPI)", description: "Python client and agent implementation" },
        { href: "https://crates.io/crates/agent-client-protocol", label: "Rust SDK (crates.io)", description: "Rust library for building ACP clients and agents" },
        { label: "Related Tech Talks", description: "Copilot CLI · MCP Apps · Agent Teams · Customization" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="GitHub Copilot ACP: Universal AI Integration"
:cards="[
  { icon: '🔌', value: 'N+M', detail: 'Integrations with ACP', subdetail: 'Instead of N×M point-to-point connections' },
  { icon: '📚', value: '4', detail: 'Protocol Layers', subdetail: 'Context, Completion, Tools, LLM' },
  { icon: '🛠️', value: 'Any', detail: 'Editor or Tool', subdetail: 'Build once, run everywhere' },
]"
prompt="Questions? Let's discuss how to bring agent capabilities to your tools"
/>
