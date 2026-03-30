---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 5: MCP Servers
  Connect Copilot to live systems, not just workspace files
drawings:
  persist: false
transition: slide-left
title: Module 5 - MCP Servers
module: workshop/05-mcp-servers
mdc: true
status: active
updated: 2026-03-26
---

<!-- SLIDE: Module 5: MCP Servers -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-purple-900/20"></div>
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-72" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-72 relative" alt="SDP Logo" />
  </div>

  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent relative z-10">
    Module 5: MCP Servers
  </h1>

  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
      ⏰ Copilot gets live context
    </span>
  </div>

  <div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
    "Skills package expertise. MCP servers connect that expertise to real systems."
  </div>

  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>

  <div class="relative z-10 flex items-stretch gap-1 text-[10px] mt-4 px-4">
    <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
      <div class="font-bold text-gray-400 text-xs">M1</div>
      <div class="text-gray-500 mt-0.5 whitespace-nowrap">Instructions</div>
    </div>
    <div class="flex items-center text-gray-600 px-0.5">›</div>
    <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
      <div class="font-bold text-gray-400 text-xs">M2</div>
      <div class="text-gray-500 mt-0.5 whitespace-nowrap">Plan Mode</div>
    </div>
    <div class="flex items-center text-gray-600 px-0.5">›</div>
    <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
      <div class="font-bold text-gray-400 text-xs">M3</div>
      <div class="text-gray-500 mt-0.5 whitespace-nowrap">Prompts</div>
    </div>
    <div class="flex items-center text-gray-600 px-0.5">›</div>
    <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
      <div class="font-bold text-gray-400 text-xs">M4</div>
      <div class="text-gray-500 mt-0.5 whitespace-nowrap">Skills</div>
    </div>
    <div class="flex items-center text-gray-600 px-0.5">›</div>
    <div class="flex-1 p-2 bg-gradient-to-b from-orange-600/80 to-orange-800/60 rounded-lg border border-orange-400/50 text-center shadow-lg shadow-orange-900/30">
      <div class="font-bold text-white text-xs">M5</div>
      <div class="text-orange-200 mt-0.5 whitespace-nowrap">MCP</div>
    </div>
    <div class="flex items-center text-gray-600 px-0.5">›</div>
    <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
      <div class="font-bold text-gray-400 text-xs">M6</div>
      <div class="text-gray-500 mt-0.5 whitespace-nowrap">Agents</div>
    </div>
  </div>
</div>

---

<!-- SLIDE: The workflow is better. The context is richer. But -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-16 py-8">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="text-orange-300 font-bold text-lg tracking-wide">⏰ : Monday, 2:30 PM</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-2 flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-base font-bold text-white shadow-lg shadow-cyan-500/30 flex-shrink-0">R</div>
<div class="text-gray-300 text-sm">
<span class="text-white font-semibold">Rafael</span> opens a feature ticket and realizes every answer still requires leaving the editor to check a live system.
</div>
</div>

<div class="relative z-10 mb-3 py-2 px-3 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 shadow-xl backdrop-blur-sm">
<p class="text-gray-200 text-xs leading-relaxed">
<span class="text-orange-300/60 font-serif text-base">"</span>
Every time I open a ticket that touches live data, the first three answers I need all require leaving the editor.
 At some point that's not a tool limitation — it's a sprint tax. I'm not interested in paying it.
<span class="text-orange-300/60 font-serif text-base">"</span>
</p>
</div>

<div class="relative z-10 grid grid-cols-5 gap-3 mb-3 text-left">
<div class="p-3 rounded-xl bg-gray-900/60 border border-blue-500/30">
<div class="text-blue-300 font-bold text-xs mb-1">Module 1</div>
<div class="text-white font-semibold text-xs mb-1">Document the standards</div>
<div class="text-xs text-gray-400 leading-tight">Structure and instructions created a reliable baseline.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold text-xs mb-1">Module 2</div>
<div class="text-white font-semibold text-xs mb-1">Plan the work</div>
<div class="text-xs text-gray-400 leading-tight">Plan mode made complex work reviewable.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-orange-500/30">
<div class="text-orange-300 font-bold text-xs mb-1">Module 3</div>
<div class="text-white font-semibold text-xs mb-1">Save the best prompts</div>
<div class="text-xs text-gray-400 leading-tight">Repeated prompts became reusable entry points.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold text-xs mb-1">Module 4</div>
<div class="text-white font-semibold text-xs mb-1">Package expertise</div>
<div class="text-xs text-gray-400 leading-tight">Specialized workflows became teachable skills.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-xs mb-1">Module 5</div>
<div class="text-white font-semibold text-xs mb-1">Connect live systems</div>
<div class="text-xs text-gray-400 leading-tight">Now the goal is live databases, APIs, and services in the loop.</div>
</div>
</div>

<div class="relative z-10 flex items-center gap-3 p-3 bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-xl border border-red-500/40 shadow-lg">
<span class="text-xl flex-shrink-0">⚡</span>
<p class="text-white font-bold text-sm">
MCP servers let Copilot query <span class="text-orange-300">real tools and live resources</span> without leaving the workflow.
</p>
</div>
</div>

---

<!-- SLIDE: 🎯 What Youll Build -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 What You'll Build</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-2xl mb-3">🗄️</div>
    <div class="text-lg font-bold text-blue-300 mb-2">Live lore data access</div>
    <div class="text-sm text-gray-300">Connect Copilot to FanHub so lore records, character data, and relationship fields can be inspected directly in chat.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-2xl mb-3">🧠</div>
    <div class="text-lg font-bold text-purple-300 mb-2">An MCP-aware accuracy skill</div>
    <div class="text-sm text-gray-300">Upgrade the <code class="text-emerald-300">lore-accuracy-check</code> skill so it validates against the actual database, not just the universe file.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-2xl mb-3">🔍</div>
    <div class="text-lg font-bold text-orange-300 mb-2">A lore consistency audit</div>
    <div class="text-sm text-gray-300">Run the upgraded skill against existing database entries and surface discrepancies that the static check would have missed.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30">
    <div class="text-2xl mb-3">🤖</div>
    <div class="text-lg font-bold text-purple-300 mb-2">A bridge to Module 6</div>
    <div class="text-sm text-gray-300">By the end of this module, the team has live data access and runtime checks ready to be orchestrated by an agent.</div>
  </div>

</div>

<div class="mt-8 text-center text-lg text-gray-300">
  This module moves from static context to live operational context.
</div>

---

<!-- SLIDE: 📚 What MCP Servers Actually Add -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 What MCP Servers Actually Add</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">A standard way to reach external systems</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>MCP servers expose tools, resources, and prompts</li>
      <li>VS Code can talk to local or remote servers through a shared protocol</li>
      <li>The same pattern works across many MCP-compatible clients</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Live context instead of copied context</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Query FanHub data without leaving chat</li>
      <li>Investigate duplicate records from live data instead of assumptions</li>
      <li>Validate runtime API responses against real lore expectations</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Two common transport patterns</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li><code>stdio</code> for local processes and tools</li>
      <li><code>http</code> for hosted or remote services</li>
      <li>Choose transport based on security, locality, and deployment model</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/30 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">The unlock</div>
    <div class="text-sm text-gray-300">Copilot stops depending on screenshots, pasted output, and stale docs. It can ask the source system directly.</div>
  </div>

</div>

---

<!-- SLIDE: 🔎 Skills and MCP Work Better Together -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔎 Skills and MCP Work Better Together</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Instructions</div>
    <div class="text-sm text-gray-300">Define standards and expected behavior.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Skills</div>
    <div class="text-sm text-gray-300">Package a domain workflow with examples, templates, and scripts.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">MCP Servers</div>
    <div class="text-sm text-gray-300">Bring live databases, APIs, repositories, and other systems into that workflow.</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl font-bold text-white">A strong pattern is: standards guide the work, skills package the workflow, MCP supplies live context.</div>
</div>

---

<!-- SLIDE: ⚙️ Core MCP Patterns in This Module -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Core MCP Patterns in This Module</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Local stdio servers</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Great for databases and local development tools</li>
      <li>Process runs locally and communicates over stdin/stdout</li>
      <li>Keeps access close to the workspace and avoids extra network hops</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Runtime service wrappers</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Great for exposing a running API through an MCP-friendly wrapper</li>
      <li>Centralized checks can be reused across prompts, skills, and agents</li>
      <li>Useful when the source system is running outside the editor but still part of local development</li>
    </ul>
  </div>

</div>

<div class="mt-8 grid grid-cols-3 gap-5 text-left">
  <div class="p-4 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-2">Config</div>
    <div class="text-sm text-gray-300"><code>.vscode/mcp.json</code> becomes the workspace entry point.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-2">Discovery</div>
    <div class="text-sm text-gray-300">VS Code discovers tools, resources, and prompts from each running server.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-2">Invocation</div>
    <div class="text-sm text-gray-300">Copilot can call the right tool when the task needs live system access.</div>
  </div>
</div>

---

<!-- SLIDE: ❌ Before -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/15 via-transparent to-green-900/15"></div>
<div class="relative z-10 grid grid-cols-2 gap-8">
<div class="pr-4 border-r border-white/10">
<div class="mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-red-700/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">❌ Before</span>
</div>
<div class="space-y-4 text-left">
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Manual lookup work keeps breaking flow</div>
  <div class="text-sm text-gray-300">Schema checks, PR validation, and API inspection all require extra tabs, terminals, or tools.</div>
</div>
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Static documentation goes stale</div>
  <div class="text-sm text-gray-300">The team can document expected behavior, but production reality still lives elsewhere.</div>
</div>
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Live validation is too slow to become habit</div>
  <div class="text-sm text-gray-300">When every check is manual, the team does fewer checks and catches issues later.</div>
</div>
</div>
</div>
<div class="pl-4">
<div class="mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-700/80 to-green-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ After</span>
</div>
<div class="space-y-4 text-left">
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">Live system questions stay in chat</div>
  <div class="text-sm text-gray-300">Copilot can query databases, repositories, or APIs without requiring a context switch.</div>
</div>
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">Earlier customizations become more useful</div>
  <div class="text-sm text-gray-300">Skills and prompts can now operate on real data and live service output.</div>
</div>
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">Validation gets faster and more credible</div>
  <div class="text-sm text-gray-300">The team can confirm reality directly instead of depending on memory or copied snapshots.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 🔨 Exercises -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F528; Exercises &mdash; MCP</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-4 shadow-lg shadow-orange-900/20">
<div class="text-lg font-bold text-white">3 exercises &middot; ~45 minutes &middot; shared leadership</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-blue-300 font-bold text-base">5.1</div>
<span class="text-xs text-gray-500">Marcus &#x2B50;</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Connect live lore data</div>
<div class="text-gray-400 text-xs leading-snug">Configure an MCP server so Copilot can query live FanHub lore records to support the accuracy-checking workflow</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-purple-300 font-bold text-base">5.2</div>
<span class="text-xs text-gray-500">Elena &#x2B50;</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Upgrade lore-accuracy skill</div>
<div class="text-gray-400 text-xs leading-snug">Add live MCP data to the check-lore-accuracy skill so it validates against the actual database, not just the universe file</div>
</div>
<div class="p-3 bg-orange-900/30 rounded-lg border border-orange-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-orange-300 font-bold text-base">5.3</div>
<span class="text-xs text-gray-500">Sarah &#x2B50;</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Run a lore consistency audit</div>
<div class="text-gray-400 text-xs leading-snug">Use both MCP servers to catch DB-vs-universe errors AND lore that exists in the database but never reaches the API client</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-900/40 rounded-lg border border-white/10 text-center text-xs text-gray-400">
Each exercise rotates the lead persona &mdash; everyone contributes, everyone follows.
</div>
</div>

---

<!-- SLIDE: Character schema and sample rows still live outsid -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">5.1</div>
<div>
<div class="text-blue-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Connect Live Lore Data to the Accuracy Workflow</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-cyan-400 text-sm text-gray-300">
The <code class="text-emerald-300">lore-accuracy-check</code> skill validates entries against the universe file — but it can&#39;t catch errors that are ALREADY in the database. <strong class="text-white">This exercise connects Copilot to live FanHub lore data so the skill can cross-check real records, not just the universe file.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create or update <span class="font-mono text-blue-300">.vscode/mcp.json</span> for the FanHub database connection</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Start the SQLite MCP server and test lore-data queries from chat</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Explore what records exist that could diverge from the universe file</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Character and lore data is queryable from Copilot chat</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Marcus can ask lore questions without leaving the workflow</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The team can see what live records the skill will compare against</div>
</div>
<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-xs text-gray-300 italic">💭 <strong class="text-blue-300">Marcus:</strong> "Wait — it&#39;s showing me what&#39;s actually stored? Not what we think is stored? I was half-reading a Hacker News thread about data provenance — hold on, I need to re-read that now with this context."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: .vscode/mcp.json — FanHub Database -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: .vscode/mcp.json — FanHub Database</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 flex-1">
<div class="bg-gray-950 rounded-xl border border-gray-700/50 p-4 font-mono text-xs overflow-auto select-all cursor-text">
<div class="text-gray-400">{</div>
<div class="pl-4 text-blue-300">"servers"<span class="text-white">: {</span></div>
<div class="pl-8 text-green-300">"fanhub-db"<span class="text-white">: {</span></div>
<div class="pl-12 text-blue-300">"command"<span class="text-white">: </span><span class="text-orange-300">"npx"</span><span class="text-white">,</span></div>
<div class="pl-12 text-blue-300">"args"<span class="text-white">: [</span><span class="text-orange-300">"-y", "mcp-sqlite",</span></div>
<div class="pl-16 text-orange-300">"${workspaceFolder}/dotnet/Backend/fanhub.db"</div>
<div class="pl-12 text-white">]</div>
<div class="pl-8 text-white">}</div>
<div class="pl-4 text-white">}</div>
<div class="text-gray-400">}</div>
</div>
<div class="flex flex-col gap-3">
<div class="bg-gray-900/60 rounded-xl p-3 border border-blue-500/30 text-xs">
<div class="text-blue-400 font-semibold text-sm mb-2">&#x1F4A1; What this does</div>
<div class="space-y-2 text-gray-300">
<div class="flex items-start gap-2"><div class="text-blue-400 flex-shrink-0">&#x203A;</div><div>Registers <span class="font-mono text-green-300">fanhub-db</span> as a named MCP server in the workspace</div></div>
<div class="flex items-start gap-2"><div class="text-blue-400 flex-shrink-0">&#x203A;</div><div>Runs <code class="text-orange-300">mcp-sqlite</code> via npx &mdash; no manual install required</div></div>
<div class="flex items-start gap-2"><div class="text-blue-400 flex-shrink-0">&#x203A;</div><div>Points directly at the live FanHub database file on disk</div></div>
</div>
</div>
<div class="bg-gray-900/60 rounded-xl p-3 border border-gray-700/50 text-xs flex-1">
<div class="text-gray-400 font-semibold uppercase tracking-widest text-xs mb-2">&#x1F4CB; Now available in chat</div>
<div class="font-mono space-y-1.5 text-cyan-300 select-all cursor-text">
<div>#fanhub-db what lore entries exist for Walter White?</div>
<div>#fanhub-db show me records where status or relationship fields look incomplete</div>
<div>#fanhub-db which entries might contradict the universe file?</div>
</div>
</div>
<div class="bg-blue-900/20 rounded-lg p-2.5 border border-blue-500/20 text-xs text-gray-300 italic">
&#x1F4AD; <strong class="text-blue-300">Marcus:</strong> "Wait &mdash; it&#39;s querying the actual database? Not a mock? Hold on, let me re-ask that lore question. Okay this changes things."
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: Copilot Chat — Lore Data Queries -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Copilot Chat — Lore Data Queries</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-4 text-sm text-gray-300">
Once <code class="text-blue-300 font-mono">fanhub-db</code> is running in Agent mode, reference it directly to query live lore data:
</div>

<div class="relative z-10 space-y-3">
<div class="bg-gray-950/80 rounded-xl border border-cyan-500/30 font-mono text-xs p-4 text-gray-300">
<div class="text-cyan-400/60 text-[10px] mb-2 uppercase tracking-wider">lore entry lookup</div>
<div class="text-gray-200 ml-4 select-all cursor-text">#mcp-fanhub-db Show me lore entries for Walter White and flag any that look incomplete or inconsistent.</div>
</div>
<div class="bg-gray-950/80 rounded-xl border border-cyan-500/30 font-mono text-xs p-4 text-gray-300">
<div class="text-cyan-400/60 text-[10px] mb-2 uppercase tracking-wider">cross-reference check</div>
<div class="text-gray-200 ml-4 select-all cursor-text">#mcp-fanhub-db Show me character records where the canon status field is empty or missing — these might be accuracy check gaps.</div>
</div>
<div class="bg-gray-950/80 rounded-xl border border-cyan-500/30 font-mono text-xs p-4 text-gray-300">
<div class="text-cyan-400/60 text-[10px] mb-2 uppercase tracking-wider">discrepancy hunting</div>
<div class="text-gray-200 ml-4 select-all cursor-text">#mcp-fanhub-db Compare lore entries in the database against what I&#39;d expect from the universe file — flag anything suspicious.</div>
</div>
</div>

<div class="relative z-10 mt-4 flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-900/40 to-blue-900/30 rounded-xl border border-cyan-500/30 shadow-lg">
<span class="text-xl flex-shrink-0">💡</span>
<p class="text-white text-xs font-medium">Each lore query stays in chat — <span class="text-cyan-300">no tab switch, no separate database tool, no copy-paste into context</span></p>
</div>
</div>

---

<!-- SLIDE: The lore-accuracy skill catches writing errors. MCP catches data entry errors. -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">5.2</div>
<div>
<div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Upgrade lore-accuracy-check with MCP</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Elena &#x2B50;</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">&#x23F1; 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-purple-400 text-sm text-gray-300">
The <code class="text-emerald-300">lore-accuracy-check</code> skill from M3/M4 verifies lore entries against the universe file. <strong class="text-white">This exercise upgrades it to also query live FanHub data via MCP &mdash; so it catches discrepancies between what the universe file says and what's actually stored in the database.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">&#x1F4CB; Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Open <span class="font-mono text-emerald-300">.github/skills/lore-accuracy-check/SKILL.md</span> from M3/M4</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Add a verification step that queries <span class="font-mono text-purple-300">#mcp-fanhub-db</span> to cross-check lore claims against live character records</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Test: submit a lore entry that conflicts with a database record &mdash; does the skill catch it?</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">&#x2705; Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> SKILL.md references <span class="font-mono text-purple-300">#mcp-fanhub-db</span> in its verification process</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> Skill surfaces a DB-vs-universe discrepancy the file check alone would miss</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> Output still uses the Status / Issues / Verified format from M3/M4</div>
</div>
<div class="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-xs text-gray-300 italic">&#x1F4AD; <strong class="text-purple-300">Elena:</strong> "So before, the skill caught writing errors. Now it catches data entry errors too. Those are two different failure modes &mdash; and we were only checking one."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: lore-accuracy-check — MCP upgrade -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4CB; Example: lore-accuracy-check &mdash; MCP upgrade</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 flex-1">
<div class="bg-gray-950 rounded-xl border border-gray-700/50 p-4 font-mono text-xs overflow-auto select-all">
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div class="text-orange-300">name<span class="text-white">: </span><span class="text-green-300">lore-accuracy-check</span></div>
<div class="text-orange-300">description<span class="text-white">: &gt;</span></div>
<div class="text-green-300 ml-4">Use this skill when asked to verify, validate,</div>
<div class="text-green-300 ml-4">or fact-check a lore entry, character bio,</div>
<div class="text-green-300 ml-4">seed data, or any show content.</div>
<div class="text-green-300 ml-4">Triggers on: check lore, verify lore,</div>
<div class="text-green-300 ml-4">fact-check, canon check, lore accuracy.</div>
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div class="mt-2 text-orange-400">## Verification process</div>
<div class="text-gray-400">1. Read the content to check carefully</div>
<div class="text-gray-400">2. Read relevant sections of [show]-universe.md</div>
<div class="text-gray-400">3. For each claim, find the corresponding fact</div>
<div class="text-purple-300">4. Query <span class="text-cyan-300">#mcp-fanhub-db</span> to cross-check</div>
<div class="text-purple-300 ml-4">against live character records</div>
<div class="text-purple-300">5. Flag any DB-vs-universe discrepancies</div>
<div class="text-gray-400">6. Flag remaining discrepancies with correct info</div>
<div class="text-gray-400">7. Note Unverifiable claims</div>
<div class="mt-2 text-orange-400">## Resources</div>
<div class="text-gray-400">- docs/[show]-universe.md &mdash; canon source</div>
<div class="text-purple-300">- <span class="text-cyan-300">#mcp-fanhub-db</span> &mdash; live records</div>
</div>
<div class="flex flex-col gap-3">
<div class="bg-gray-900/60 rounded-xl p-3 border border-purple-500/30 text-xs">
<div class="text-purple-400 font-semibold text-sm mb-2">&#x1F4A1; What MCP adds</div>
<div class="space-y-2 text-gray-300">
<div class="flex items-start gap-2"><div class="text-purple-400 flex-shrink-0">&#x2023;</div><div><strong class="text-white">Before</strong> &mdash; catches writing errors (wrong facts vs. universe file)</div></div>
<div class="flex items-start gap-2"><div class="text-purple-400 flex-shrink-0">&#x2023;</div><div><strong class="text-white">After</strong> &mdash; also catches data entry errors (DB record contradicts universe file)</div></div>
<div class="flex items-start gap-2"><div class="text-purple-400 flex-shrink-0">&#x2023;</div><div><strong class="text-white">Two failure modes</strong> &mdash; one skill now covers both</div></div>
</div>
</div>
<div class="bg-gray-900/60 rounded-xl p-3 border border-gray-700/50 text-xs flex-1">
<div class="text-gray-400 font-semibold uppercase tracking-widest text-xs mb-2">&#x1F4CA; New output section</div>
<div class="font-mono space-y-1 text-gray-300">
<div class="text-orange-300">**DB Check** (if MCP available):</div>
<div class="text-gray-400 ml-3">- Live record matches &rarr; &#x2713; Consistent</div>
<div class="text-gray-400 ml-3">- Live record differs &rarr; flag discrepancy</div>
<div class="text-gray-400 ml-3">- No record found &rarr; note as missing</div>
</div>
</div>
<div class="bg-purple-900/20 rounded-lg p-2.5 border border-purple-500/20 text-xs text-gray-300 italic">
&#x1F4AD; <strong class="text-purple-300">Elena:</strong> "We built the skill to catch what we couldn&rsquo;t remember. Now it also catches what we entered wrong. Same skill, wider net."
</div>
</div>
</div>
</div>
</div>


---

<!-- SLIDE: 💬 Example: Invoking the Upgraded Skill -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-orange-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4AC; Example: Invoking the Upgraded Skill</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 mb-3 text-xs text-gray-400">Add an incorrect lore fact manually, or ask Copilot "please add the lore item from #bad-lore-fact.json to the database"</div>
<div class="relative z-10 grid grid-cols-2 gap-4 flex-1">
<div class="flex flex-col gap-3">
<div class="font-mono text-sm bg-red-900/20 rounded-xl border border-red-500/30 p-5 text-gray-200 leading-relaxed select-all cursor-text flex-1">
<div class="text-orange-400 mb-3">can you validate the lore facts in the system?</div>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="p-4 bg-gray-900/60 rounded-xl border border-purple-500/30 text-xs">
<div class="text-purple-300 font-bold mb-3">What happens when you invoke it</div>
<div class="space-y-3 text-gray-300">
<div class="flex items-start gap-2">
<div class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
<div>Reads the selected lore entry and identifies every factual claim</div>
</div>
<div class="flex items-start gap-2">
<div class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
<div>Cross-checks each claim against <code class="text-emerald-300">docs/[show]-universe.md</code></div>
</div>
<div class="flex items-start gap-2">
<div class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
<div><span class="text-purple-300 font-semibold">New with MCP</span> &mdash; also queries <code class="text-cyan-300">#mcp-fanhub-db</code> to check what&#39;s actually stored in the live database</div>
</div>
<div class="flex items-start gap-2">
<div class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
<div>Returns <strong class="text-white">Status / Issues / Verified claims</strong> &mdash; flagging both writing errors and DB discrepancies</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-900/40 to-orange-900/30 rounded-xl border border-purple-400/30 text-xs">
<div class="text-white font-semibold mb-1">Before vs. After</div>
<div class="space-y-1.5 text-gray-300">
<div class="flex items-center gap-2"><span class="text-gray-500 line-through text-[10px]">Static only</span><span class="text-gray-400 text-[10px]">&mdash; catches writing errors vs. universe file</span></div>
<div class="flex items-center gap-2"><span class="text-purple-300 font-medium text-[10px]">MCP-upgraded</span><span class="text-gray-400 text-[10px]">&mdash; also catches DB records that contradict canon</span></div>
</div>
</div>
<div class="p-3 bg-gray-900/40 rounded-xl border border-emerald-500/20 text-xs text-gray-300 italic">
&#x1F4AD; <strong class="text-emerald-300">Elena:</strong> "The static check told us what <em>should</em> be true. The MCP check tells us what <em>is</em> stored. I&#39;d been treating those as the same question."
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Run the upgraded skill — does it catch what the static check missed? -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">5.3</div>
<div>
<div class="text-orange-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Run a Lore Consistency Audit</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah &#x2B50;</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">&#x23F1; 20 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-4 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
The skill now has DB access. But what about entries that <em>exist in the database but never reach the client</em>? <strong class="text-white">This exercise adds a second MCP server for the running FanHub API — so the audit can catch not just DB-vs-universe errors, but also DB-vs-API gaps.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">&#x1F4CB; Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Use <span class="font-mono text-cyan-300">#mcp-fanhub-db</span> to query existing lore entries from the database</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Run <span class="font-mono text-emerald-300">/lore-accuracy-check</span> — the skill cross-checks both the universe file and live DB records</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Add <span class="font-mono text-orange-300">fanhub-api</span> to <span class="font-mono text-blue-300">.vscode/mcp.json</span> — a second MCP server wrapping the running FanHub API</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Use <span class="font-mono text-amber-300">#mcp-fanhub-api</span> to check whether DB lore records are actually returned by the API &mdash; find entries that exist in the database but are absent or incomplete in the API response</span></div>
</div>
</div>
<div class="space-y-2">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">&#x2705; Success Criteria</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> The skill surfaces at least one DB record that contradicts the universe file</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> Sarah can generate an actionable correction list without leaving the workflow</div>
<div class="flex items-center gap-2 p-2 bg-amber-900/20 rounded-lg border border-amber-700/30"><span class="text-amber-400">&#x2610;</span> Elena finds at least one lore entry present in the DB but absent or incomplete in the API response</div>
<div class="flex items-center gap-2 p-2 bg-amber-900/20 rounded-lg border border-amber-700/30"><span class="text-amber-400">&#x2610;</span> The audit pattern covers both failure modes: wrong data stored, and correct data not surfaced</div>
</div>
<div class="mt-3 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30 text-xs text-gray-300 italic">&#x1F4AD; <strong class="text-orange-300">Sarah:</strong> "Every lore entry added before we had the skill is potentially wrong. I want the DB check <em>and</em> the API check. If a bad record survives both, I want to know how."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: .vscode/mcp.json — Both Servers -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-amber-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4CB; Example: .vscode/mcp.json &mdash; Both Servers</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 flex-1">
<div class="bg-gray-950 rounded-xl border border-gray-700/50 p-4 font-mono text-xs overflow-auto select-all cursor-text">
<div class="text-gray-400">{</div>
<div class="pl-4 text-blue-300">"servers"<span class="text-white">: {</span></div>
<div class="pl-8 text-cyan-300">"fanhub-db"<span class="text-white">: {</span></div>
<div class="pl-12 text-blue-300">"command"<span class="text-white">: </span><span class="text-orange-300">"npx"</span><span class="text-white">,</span></div>
<div class="pl-12 text-blue-300">"args"<span class="text-white">: [</span><span class="text-orange-300">"-y", "mcp-sqlite",</span></div>
<div class="pl-16 text-orange-300">"${workspaceFolder}/dotnet/Backend/fanhub.db"</div>
<div class="pl-12 text-white">]</div>
<div class="pl-8 text-white">},</div>
<div class="pl-8 text-amber-300">"fanhub-api"<span class="text-white">: {</span></div>
<div class="pl-12 text-blue-300">"type"<span class="text-white">: </span><span class="text-orange-300">"stdio"</span><span class="text-white">,</span></div>
<div class="pl-12 text-blue-300">"command"<span class="text-white">: </span><span class="text-orange-300">"node"</span><span class="text-white">,</span></div>
<div class="pl-12 text-blue-300">"args"<span class="text-white">: [</span><span class="text-orange-300">"./mcp-servers/fanhub-api-server.js"</span><span class="text-white">],</span></div>
<div class="pl-12 text-blue-300">"env"<span class="text-white">: {</span></div>
<div class="pl-16 text-blue-300">"FANHUB_API_URL"<span class="text-white">: </span><span class="text-orange-300">"http://localhost:5265"</span></div>
<div class="pl-12 text-white">}</div>
<div class="pl-8 text-white">}</div>
<div class="pl-4 text-white">}</div>
<div class="text-gray-400">}</div>
</div>
<div class="flex flex-col gap-3">
<div class="bg-gray-900/60 rounded-xl p-3 border border-cyan-500/30 text-xs">
<div class="text-cyan-300 font-bold mb-2">&#x1F5C4;&#xFE0F; fanhub-db</div>
<div class="text-gray-300 space-y-1">
<div>SQLite MCP server via <code class="text-orange-300">mcp-sqlite</code></div>
<div>Exposes the database directly — schemas, records, relationships</div>
<div class="text-cyan-200 font-mono mt-1">#mcp-fanhub-db ...</div>
</div>
</div>
<div class="bg-gray-900/60 rounded-xl p-3 border border-amber-500/30 text-xs">
<div class="text-amber-300 font-bold mb-2">&#x1F310; fanhub-api</div>
<div class="text-gray-300 space-y-1">
<div>Custom stdio server wrapping the <em>running</em> FanHub API at <code class="text-orange-300">localhost:5265</code></div>
<div>Exposes what the API actually returns to clients — not what&#39;s stored</div>
<div class="text-amber-200 font-mono mt-1">#mcp-fanhub-api ...</div>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-900/40 to-amber-900/30 rounded-xl border border-white/10 text-xs">
<span class="text-lg flex-shrink-0">&#x26A1;</span>
<p class="text-white font-medium">Together they cover two failure modes: <span class="text-cyan-300">wrong data stored</span> and <span class="text-amber-300">correct data not surfaced</span></p>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: lore-accuracy-check — API upgrade -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4CB; Example: lore-accuracy-check &mdash; API upgrade</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 flex-1">
<div class="bg-gray-950 rounded-xl border border-gray-700/50 p-4 font-mono text-xs overflow-auto select-all">
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div class="text-orange-300">name<span class="text-white">: </span><span class="text-green-300">lore-accuracy-check</span></div>
<div class="text-orange-300">description<span class="text-white">: &gt;</span></div>
<div class="text-green-300 ml-4">Use this skill when asked to verify, validate,</div>
<div class="text-green-300 ml-4">or fact-check a lore entry, character bio,</div>
<div class="text-green-300 ml-4">seed data, or any show content.</div>
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div class="mt-2 text-orange-400">## Verification process</div>
<div class="text-gray-400">1. Read the content to check carefully</div>
<div class="text-gray-400">2. Read relevant sections of [show]-universe.md</div>
<div class="text-gray-400">3. For each claim, find the corresponding fact</div>
<div class="text-cyan-300">4. Query <span class="text-cyan-300">#mcp-fanhub-db</span> to cross-check</div>
<div class="text-cyan-300 ml-4">against live character records</div>
<div class="text-cyan-300">5. Flag any DB-vs-universe discrepancies</div>
<div class="text-amber-300">6. Query <span class="text-amber-300">#mcp-fanhub-api</span> to verify the entry</div>
<div class="text-amber-300 ml-4">is actually returned by the running API</div>
<div class="text-amber-300">7. Flag any DB records missing from API responses</div>
<div class="text-gray-400">8. Flag remaining discrepancies with correct info</div>
<div class="text-gray-400">9. Note Unverifiable claims</div>
<div class="mt-2 text-orange-400">## Resources</div>
<div class="text-gray-400">- docs/[show]-universe.md &mdash; canon source</div>
<div class="text-cyan-300">- <span class="text-cyan-300">#mcp-fanhub-db</span> &mdash; live records</div>
<div class="text-amber-300">- <span class="text-amber-300">#mcp-fanhub-api</span> &mdash; running API</div>
</div>
<div class="flex flex-col gap-3">
<div class="bg-gray-900/60 rounded-xl p-3 border border-amber-500/30 text-xs">
<div class="text-amber-400 font-semibold text-sm mb-2">&#x1F4A1; What the API check adds</div>
<div class="space-y-2 text-gray-300">
<div class="flex items-start gap-2"><div class="text-cyan-400 flex-shrink-0">&#x2023;</div><div><strong class="text-white">DB check</strong> &mdash; catches data stored wrong (canon violation)</div></div>
<div class="flex items-start gap-2"><div class="text-amber-400 flex-shrink-0">&#x2023;</div><div><strong class="text-white">API check</strong> &mdash; catches correct data silently dropped or truncated before the client sees it</div></div>
<div class="flex items-start gap-2"><div class="text-white flex-shrink-0">&#x2023;</div><div><strong class="text-white">Three failure classes</strong> &mdash; one skill now covers all of them</div></div>
</div>
</div>
<div class="bg-gray-900/60 rounded-xl p-3 border border-gray-700/50 text-xs flex-1">
<div class="text-gray-400 font-semibold uppercase tracking-widest text-xs mb-2">&#x1F4CA; New output section</div>
<div class="font-mono space-y-1 text-gray-300">
<div class="text-amber-300">**API Check** (if #mcp-fanhub-api available):</div>
<div class="text-gray-400 ml-3">- Entry returned by API &rarr; &#x2713; Surfaced</div>
<div class="text-gray-400 ml-3">- Entry missing from API &rarr; flag as API gap</div>
<div class="text-gray-400 ml-3">- Entry truncated &rarr; flag missing fields</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: The Skill Covers All Three -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-purple-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4CB; Example: The Skill Covers All Three</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4 flex-1">
<div class="flex flex-col gap-3">
<div class="bg-gray-950/80 rounded-xl border border-purple-500/30 font-mono text-xs p-4 text-gray-300 flex-1">
<div class="text-purple-400/60 text-[10px] mb-2 uppercase tracking-wider">skill invocation — unchanged</div>
<div class="text-purple-300">can you validate the lore facts in the system?</div>
<div class="mt-4 space-y-1.5 text-[10.5px]">
<div class="text-gray-500">// 1. checks universe file (writing errors)</div>
<div class="text-cyan-400">// 2. queries #mcp-fanhub-db (DB-vs-universe errors)</div>
<div class="text-amber-400">// 3. queries #mcp-fanhub-api (DB-vs-API gaps)</div>
</div>
<div class="mt-4 pt-3 border-t border-white/10 text-[10.5px] text-gray-400">Same invocation. Both MCP servers are reached automatically when available.</div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-900/30 to-amber-900/20 rounded-xl border border-white/10 text-xs">
<div class="text-white font-semibold mb-1">Before vs. After</div>
<div class="space-y-1.5 text-gray-300">
<div class="flex items-start gap-2"><div class="text-gray-500 flex-shrink-0">›</div><div><span class="text-gray-500 line-through">Static only</span> &mdash; catches writing errors vs. universe file</div></div>
<div class="flex items-start gap-2"><div class="text-cyan-400 flex-shrink-0">›</div><div><span class="text-cyan-300">+ DB check</span> &mdash; also catches data stored wrong</div></div>
<div class="flex items-start gap-2"><div class="text-amber-400 flex-shrink-0">›</div><div><span class="text-amber-300">+ API check</span> &mdash; also catches correct data never surfaced</div></div>
</div>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="bg-gray-900/60 rounded-xl p-3 border border-gray-700/50 text-xs flex-1">
<div class="text-gray-300 font-semibold uppercase tracking-widest text-xs mb-3">&#x1F4CA; Three failure classes — now all covered</div>
<div class="space-y-2 font-mono text-[10.5px]">
<div class="flex items-center gap-2"><span class="px-2 py-0.5 bg-red-900/60 border border-red-500/40 rounded text-red-300">DB error + API exposes it</span><span class="text-gray-500">&rarr; fix now</span></div>
<div class="flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-900/60 border border-amber-500/40 rounded text-amber-300">DB correct + API drops it</span><span class="text-gray-500">&rarr; API bug</span></div>
<div class="flex items-center gap-2"><span class="px-2 py-0.5 bg-gray-800 border border-gray-600/40 rounded text-gray-400">DB error + API hides it</span><span class="text-gray-500">&rarr; log it</span></div>
</div>
<div class="mt-3 pt-3 border-t border-white/10 text-[10.5px] text-gray-400">Each class gets a different priority. The skill now tells you which one you&#39;re looking at.</div>
</div>
<div class="bg-amber-900/20 rounded-lg p-2.5 border border-amber-500/20 text-xs text-gray-300 italic">
&#x1F4AD; <strong class="text-amber-300">Elena:</strong> "Same skill. Two more lines in the SKILL.md. Now it tells me whether bad data is stored, whether good data is missing, and which one the client actually sees."
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: Audit Output — DB Discrepancy Found -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Audit Output — Two Failure Modes Found</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 flex-1">
<div class="bg-gray-950 rounded-xl border border-red-500/30 p-4 font-mono text-xs overflow-auto text-gray-300 leading-relaxed">
<div class="text-orange-300 font-semibold mb-1">DB Check:</div>
<div class="text-orange-300 font-semibold">Status: <span class="text-red-400">Inaccurate (DB discrepancy)</span></div>
<div class="mt-2 text-orange-300 font-semibold">Issues:</div>
<div class="text-gray-300 ml-3">• Universe file: Walter White taught at J.P. Wynne High School</div>
<div class="text-red-400 ml-3">• DB record (char-002): institution_name = "University of New Mexico"</div>
<div class="text-gray-400 ml-3 italic">↳ Not caught by static check — DB entry was wrong, universe file was correct</div>
<div class="mt-2 text-orange-300 font-semibold">Verified claims:</div>
<div class="text-green-400 ml-3">✓ Walter &amp; Jesse partnership — confirmed</div>
<div class="text-green-400 ml-3">✓ Jesse was Walter&#39;s former student — confirmed</div>
<div class="text-green-400 ml-3">✓ Cook location: Superlab — confirmed</div>
</div>
<div class="bg-gray-950 rounded-xl border border-amber-500/30 p-4 font-mono text-xs overflow-auto text-gray-300 leading-relaxed">
<div class="text-amber-300 font-semibold mb-1">API Check:</div>
<div class="text-amber-300 font-semibold">Status: <span class="text-amber-400">API Gap Found</span></div>
<div class="mt-2 text-amber-300 font-semibold">Issues:</div>
<div class="text-gray-300 ml-3">• DB has 47 lore entries for Breaking Bad characters</div>
<div class="text-amber-400 ml-3">• API returns 44 — entries for char-011, char-023, char-031 missing</div>
<div class="text-gray-400 ml-3 italic">↳ Records exist and are correctly stored — API endpoint silently omits them</div>
<div class="mt-2 text-amber-300 font-semibold">Highest priority:</div>
<div class="text-red-400 ml-3">• char-002 DB error IS surfaced by the API — clients see wrong canon</div>
<div class="text-gray-400 ml-3 italic">↳ Fix the DB record first; then investigate the 3 missing API entries</div>
</div>
</div>
<div class="bg-orange-900/20 rounded-lg p-3 border border-orange-500/20 text-xs text-gray-300 italic">
&#x1F4AD; <strong class="text-orange-300">Sarah:</strong> "Found it. The DB had the university error Marcus&#39;s PR introduced — and the API is serving it. That&#39;s the one we fix now." &nbsp;&nbsp; <strong class="text-amber-300">Elena:</strong> "And three entries that are correct in the DB but never reach the client. That&#39;s a separate bug. I&#39;m logging both."
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: mcp-servers/fanhub-api-server.js -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4CB; Example: mcp-servers/fanhub-api-server.js</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 flex-1">
<div class="bg-gray-950 rounded-xl border border-gray-700/50 p-4 font-mono text-xs overflow-auto select-all cursor-text leading-relaxed">
<div class="text-gray-500">// stdio MCP server &mdash; wraps the running FanHub API</div>
<div class="text-blue-300">const <span class="text-white">API_BASE_URL</span> = process.env.<span class="text-amber-300">FANHUB_API_URL</span> || <span class="text-orange-300">"http://localhost:5265"</span>;</div>
<div class="mt-2 text-gray-500">// Handshake</div>
<div class="text-white">if (method === <span class="text-orange-300">"initialize"</span>) {</div>
<div class="pl-4 text-gray-300">send(id, { protocolVersion: <span class="text-orange-300">"2024-11-05"</span>,</div>
<div class="pl-8 text-gray-300">serverInfo: { name: <span class="text-orange-300">"fanhub-api"</span> } });</div>
<div class="text-white">}</div>
<div class="mt-2 text-gray-500">// Three tools exposed to Copilot</div>
<div class="text-white">if (method === <span class="text-orange-300">"tools/list"</span>) {</div>
<div class="pl-4 text-cyan-300">{ name: <span class="text-orange-300">"get_lore"</span>,</div>
<div class="pl-6 text-gray-400">description: <span class="text-orange-300">"Fetch all lore entries from the API"</span> },</div>
<div class="pl-4 text-cyan-300">{ name: <span class="text-orange-300">"get_lore_by_id"</span>,</div>
<div class="pl-6 text-gray-400">inputSchema: { id: { type: <span class="text-orange-300">"string"</span> } } },</div>
<div class="pl-4 text-amber-300">{ name: <span class="text-orange-300">"create_lore"</span>,</div>
<div class="pl-6 text-gray-400">inputSchema: { showId, category, title, description } }</div>
<div class="text-white">}</div>
<div class="mt-2 text-gray-500">// Routes tools/call to API endpoints</div>
<div class="text-blue-300">if (tool === <span class="text-orange-300">"get_lore"</span>) getJson(<span class="text-orange-300">"/api/lore"</span>);</div>
<div class="text-blue-300">if (tool === <span class="text-orange-300">"get_lore_by_id"</span>) getJson(<span class="text-orange-300">`/api/lore/${args.id}`</span>);</div>
<div class="text-amber-300">if (tool === <span class="text-orange-300">"create_lore"</span>) postJson(<span class="text-orange-300">"/api/lore"</span>, args);</div>
</div>
<div class="flex flex-col gap-3">
<div class="bg-gray-900/60 rounded-xl p-3 border border-amber-500/30 text-xs">
<div class="text-amber-300 font-bold mb-2">&#x1F6E0;&#xFE0F; How it works</div>
<div class="space-y-2 text-gray-300">
<div class="flex items-start gap-2"><div class="text-amber-400 flex-shrink-0">&#x203A;</div><div>Pure stdio &mdash; reads JSON-RPC from stdin, writes responses to stdout. No port, no daemon.</div></div>
<div class="flex items-start gap-2"><div class="text-amber-400 flex-shrink-0">&#x203A;</div><div><code class="text-amber-200">FANHUB_API_URL</code> env var points it at the running API &mdash; swap the URL for any environment</div></div>
<div class="flex items-start gap-2"><div class="text-amber-400 flex-shrink-0">&#x203A;</div><div>VS Code starts it automatically when the workspace opens via <code class="text-blue-300">.vscode/mcp.json</code></div></div>
</div>
</div>
<div class="bg-gray-900/60 rounded-xl p-3 border border-cyan-500/30 text-xs">
<div class="text-cyan-300 font-bold mb-2">&#x1F4CB; Three tools</div>
<div class="space-y-2 text-gray-300">
<div class="flex items-start gap-2"><div class="text-cyan-400 flex-shrink-0">&#x203A;</div><div><code class="text-cyan-300">get_lore</code> &mdash; list all entries; used to compare count vs. DB</div></div>
<div class="flex items-start gap-2"><div class="text-cyan-400 flex-shrink-0">&#x203A;</div><div><code class="text-cyan-300">get_lore_by_id</code> &mdash; spot-check a specific record the DB audit flagged</div></div>
<div class="flex items-start gap-2"><div class="text-amber-400 flex-shrink-0">&#x203A;</div><div><code class="text-amber-300">create_lore</code> &mdash; create a corrected entry without leaving the workflow</div></div>
</div>
</div>
<div class="bg-gradient-to-r from-amber-900/30 to-orange-900/20 rounded-lg p-2.5 border border-amber-400/30 text-xs">
<div class="text-amber-200 font-semibold mb-1">&#x26A1; The audit can fix, not just find</div>
<div class="text-gray-300">The <code class="text-amber-300">create_lore</code> tool means Copilot can propose and apply corrections directly &mdash; the skill doesn&#39;t just report what&#39;s wrong, it can write the fix.</div>
</div>
</div>
</div>
<div class="relative z-10 mt-2 text-xs text-gray-500">&#x1F4C1; mcp-servers/fanhub-api-server.js &middot; Run with <code>node mcp-servers/fanhub-api-server.js</code> &middot; Launched automatically by VS Code via .vscode/mcp.json</div>
</div>
</div>

---

<!-- SLIDE: 🔗 Compounding Value -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Compounding Value</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">What Module 5 adds</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Live FanHub database access for the character story arc</li>
      <li>An upgraded Module 4 skill that can work from real records</li>
      <li>Runtime API validation against what the frontend actually depends on</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">How later modules benefit</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li><strong>Module 6:</strong> custom agents become stronger when they can orchestrate the skill, the live FanHub data, and the running API together</li>
      <li>The team moves from local workflow logic toward end-to-end character-feature operations</li>
    </ul>
  </div>

</div>

<div class="mt-8 flex justify-center">
  <div class="px-8 py-4 bg-gradient-to-r from-purple-900/40 via-orange-900/30 to-purple-900/40 rounded-2xl border border-purple-500/40 shadow-lg shadow-purple-900/20 text-center max-w-3xl">
    <div class="text-xs text-purple-400 font-semibold uppercase tracking-widest mb-2">💭 Elena</div>
    <span class="text-sm text-gray-200 italic">"The universe file told me what <em class="text-white">should</em> be true. The database told me what <em class="text-white">was</em> stored. The API told me what actually reaches the client. I have been trying to cover all three failure modes manually. I still have edge cases to run. I always have edge cases to run."</span>
  </div>
</div>

---

<!-- SLIDE: ✅ Module Checklist -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Module Checklist</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Connect</div>
    <ul class="space-y-2 text-gray-300">
      <li>Add the right MCP server configuration for the scenario</li>
      <li>Pick the transport that fits the system and security model</li>
      <li>Confirm the server starts and exposes useful capabilities</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Apply</div>
    <ul class="space-y-2 text-gray-300">
      <li>Use live context to improve a real team workflow</li>
      <li>Combine MCP with prompts, standards, or skills where it helps</li>
      <li>Keep the integration understandable and easy to reuse</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Validate</div>
    <ul class="space-y-2 text-gray-300">
      <li>Measure whether manual effort drops</li>
      <li>Check that outputs are grounded in live data</li>
      <li>Refine the workflow until the connection is genuinely worth keeping</li>
    </ul>
  </div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-lg text-white font-semibold">A good MCP integration reduces switching, grounds the workflow in live systems, and increases confidence.</div>
</div>

---

<!-- SLIDE: 📚 Keep the Foundation Evergreen -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 Keep the Foundation Evergreen</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div><div class="mt-4 p-5 bg-gradient-to-r from-blue-900/25 via-purple-900/25 to-orange-900/20 rounded-2xl border border-white/10 text-center">
<div class="text-lg font-bold text-white">Before Module 6, document the live context you've wired in.</div>
<div class="text-sm text-gray-300 mt-2">Update <span class="font-mono text-blue-200">ARCHITECTURE.md</span> and <span class="font-mono text-purple-200">.github/copilot-instructions.md</span> so the agents you build next know what data sources and MCP servers are available.</div>
</div><div class="mt-4 font-mono text-sm bg-gray-900/80 rounded-xl border border-blue-500/30 p-5 text-gray-200">
<div class="text-xs text-gray-500 mb-3">You already built the tool. Run it.</div>
<div class="text-orange-400 font-bold">/refresh-docs</div>
<div class="text-gray-400 mt-3 text-xs font-sans">The <span class="font-mono text-blue-300">refresh-docs.prompt.md</span> you built in Module 3 updates <span class="font-mono text-blue-200">ARCHITECTURE.md</span> and <span class="font-mono text-purple-200">copilot-instructions.md</span> with the new MCP servers and live data sources — so Module 6 agents know they exist and can use them.</div>
</div><div class="mt-4 p-4 rounded-xl bg-gradient-to-r from-orange-900/30 via-yellow-900/20 to-orange-900/30 border border-orange-500/30 text-center">
<div class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">🔁 Build the habit</div>
<div class="text-sm text-white font-semibold">Run <span class="font-mono text-orange-300">/refresh-docs</span> after every meaningful change.</div>
<div class="text-xs text-gray-400 mt-1">Each PR that updates docs keeps the foundation relevant — so Copilot always has accurate context to work from.</div>
</div>

---

<!-- SLIDE: Module 5 Is Locked In -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/15 via-red-500/10 to-purple-500/15 rounded-full blur-3xl"></div>
<div class="relative z-10 mb-4">
<div class="absolute inset-0 blur-2xl opacity-50">
<img src="./sdp-logo.png" class="w-48 mx-auto" alt="" />
</div>
<img src="./sdp-logo.png" class="w-48 mx-auto relative" alt="SDP Logo" />
</div>
<h1 class="!text-[2.7rem] !font-bold !mb-3 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent relative z-10">
Module 5 Is Locked In
</h1>
<div class="relative z-10 mb-6">
<span class="px-5 py-2 bg-gradient-to-r from-purple-600/80 to-red-600/80 rounded-full text-white text-base font-medium shadow-lg shadow-purple-500/25">
🤖 Next Up: Module 6 — Custom Agents
</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 max-w-3xl w-full px-6 mb-6">
<div class="p-3 bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30 text-center">
<div class="text-xl mb-1">🔌</div>
<div class="text-orange-300 font-bold text-sm">You Connected Live Data</div>
<div class="text-gray-400 text-xs mt-1">FanHub character data is now queryable directly from Copilot chat</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30 text-center">
<div class="text-xl mb-1">🧪</div>
<div class="text-red-300 font-bold text-sm">You Upgraded the Skill</div>
<div class="text-gray-400 text-xs mt-1">The character-change workflow now operates on real records, not guesswork</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xl mb-1">🤖</div>
<div class="text-purple-300 font-bold text-sm">Now Build the Agent</div>
<div class="text-gray-400 text-xs mt-1">Module 6 combines prompts, skills, and live data into one orchestrated workflow</div>
</div>
</div>
<div class="relative z-10 text-base text-gray-200 max-w-3xl px-10 mb-6 leading-snug">
MCP servers let Copilot see the real world. <span class="text-white font-semibold">Custom agents will let it act on all of it at once.</span>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<!-- SLIDE: 💭 The Team, After Module 5 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💭 The Team, After Module 5</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-amber-400">
<div class="text-xs font-bold text-amber-300 mb-0.5">Jessica</div>
<div class="text-xs text-gray-500 italic mb-2">The Eager Junior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I kept waiting for it to be wrong so I could go back to doing it manually. It wasn&#39;t wrong. I ran it three more times. I don&#39;t know what to do with that."</div>
<div class="text-xs text-gray-500">Testing the tool to find an excuse not to trust it.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-blue-400">
<div class="text-xs font-bold text-blue-300 mb-0.5">David</div>
<div class="text-xs text-gray-500 italic mb-2">The Seasoned Architect</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Technically the correct term is &#39;grounding&#39; — you&#39;re anchoring inference in verified external state rather than learned approximation. That it took this long is the more interesting observation."</div>
<div class="text-xs text-gray-500">Corrected the vocabulary. Conceded the result.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-green-400">
<div class="text-xs font-bold text-green-300 mb-0.5">Sarah</div>
<div class="text-xs text-gray-500 italic mb-2">The Skeptical Senior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Three lore errors found. Two API gaps. One regression caught before the PR. I didn&#39;t ask for any of that. I was going to run those checks manually at 5pm. It&#39;s 2:30."</div>
<div class="text-xs text-gray-500">Just the numbers. Zero enthusiasm. Entirely convinced.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-purple-400">
<div class="text-xs font-bold text-purple-300 mb-0.5">Elena</div>
<div class="text-xs text-gray-500 italic mb-2">The Quality Champion</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"DB error in char-002: confirmed. API gap in char-011 and two more: confirmed. Seventeen edge cases still queued. I expect at least four to surface something. I am professionally obligated to keep checking."</div>
<div class="text-xs text-gray-500">Already running the next test before finishing the last one.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-orange-400">
<div class="text-xs font-bold text-orange-300 mb-0.5">Marcus</div>
<div class="text-xs text-gray-500 italic mb-2">The DevOps Developer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Sorry — I was reading an MCP internals thread while the audit ran and then I looked up and it had already found the thing. Also I&#39;m adding this to the CI pipeline. Give me a minute. Two things."</div>
<div class="text-xs text-gray-500">Two parallel trains. Already shipping before he's finished reading.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-cyan-400">
<div class="text-xs font-bold text-cyan-300 mb-0.5">Rafael</div>
<div class="text-xs text-gray-500 italic mb-2">The Product Visionary</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I&#39;m going to stop you there. The three failure classes map to two epics and a Q3 OKR. &#39;Wrong data stored&#39; is content ops. &#39;API drops it&#39; is reliability. We&#39;re shipping this."</div>
<div class="text-xs text-gray-500">Tuned out the implementation. Made the call.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Reference Material -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-10 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/15 via-gray-900/40 to-purple-900/15"></div>
<div class="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 text-center mb-5">
<div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Further Reading</div>
<h1 class="!text-3xl !font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent !mb-0">Reference Material</h1>
<div class="text-sm text-gray-400 mt-1">Official documentation for Module 5 — MCP Servers</div>
</div>

<div class="relative z-10 grid grid-cols-2 gap-3">
<a href="https://code.visualstudio.com/docs/copilot/customization/mcp-servers" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/40 transition-colors no-underline">
<div class="font-semibold text-cyan-300 text-sm mb-1">MCP Servers in VS Code</div>
<div class="text-xs text-gray-400">Configuring MCP servers, tool exposure, and resource access</div>
</a>
<a href="https://modelcontextprotocol.io/" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-blue-500/40 transition-colors no-underline">
<div class="font-semibold text-blue-300 text-sm mb-1">Model Context Protocol Specification</div>
<div class="text-xs text-gray-400">The open protocol that connects AI agents to external tools and data</div>
</a>
<a href="https://github.com/modelcontextprotocol/servers" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-purple-500/40 transition-colors no-underline">
<div class="font-semibold text-purple-300 text-sm mb-1">MCP Servers Repository</div>
<div class="text-xs text-gray-400">Official and community MCP server implementations ready to use</div>
</a>
<a href="https://github.com/modelcontextprotocol/typescript-sdk" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/40 transition-colors no-underline">
<div class="font-semibold text-cyan-300 text-sm mb-1">MCP TypeScript SDK</div>
<div class="text-xs text-gray-400">Build your own MCP server to expose custom tools and data sources</div>
</a>
<a href="https://code.visualstudio.com/blogs/2026/01/26/mcp-apps-support" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-blue-500/40 transition-colors no-underline">
<div class="font-semibold text-blue-300 text-sm mb-1">MCP Apps Support in VS Code</div>
<div class="text-xs text-gray-400">Rich interactive UI components surfaced directly through MCP</div>
</a>
<a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-purple-500/40 transition-colors no-underline">
<div class="font-semibold text-purple-300 text-sm mb-1">Add an MCP Server to Copilot CLI</div>
<div class="text-xs text-gray-400">Extending terminal-based AI workflows with MCP tools</div>
</a>
</div>
</div>
