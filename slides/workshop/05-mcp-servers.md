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
The workflow is better. The context is richer. But the moment someone asks about live data, we're back to switching tabs and copying field values by hand. The gap is no longer <span class="text-orange-300 font-semibold">workflow knowledge</span> — it's system access.
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
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 What You'll Build</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-2xl mb-3">🗄️</div>
    <div class="text-lg font-bold text-blue-300 mb-2">Live character data access</div>
    <div class="text-sm text-gray-300">Connect Copilot to FanHub data so character schema, content, and records can be inspected directly in chat.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-2xl mb-3">🧠</div>
    <div class="text-lg font-bold text-purple-300 mb-2">An MCP-aware skill</div>
    <div class="text-sm text-gray-300">Upgrade the Module 4.2 skill so it can use live FanHub data when investigating character records to recommend follow-up work.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-2xl mb-3">🔗</div>
    <div class="text-lg font-bold text-orange-300 mb-2">Runtime API checks</div>
    <div class="text-sm text-gray-300">Validate the running FanHub character-detail API against the behavior your feature and skill workflows expect.</div>
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
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 What MCP Servers Actually Add</span>
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
      <li>Query FanHub character data without leaving chat</li>
      <li>Investigate duplicate records from live data instead of assumptions</li>
      <li>Validate runtime API responses against real character-detail expectations</li>
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
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔎 Skills and MCP Work Better Together</span>
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
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Core MCP Patterns in This Module</span>
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
<div class="text-white text-xs font-semibold mb-1">Connect live data</div>
<div class="text-gray-400 text-xs leading-snug">Configure an MCP server for direct Copilot access to FanHub character data</div>
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
<span class="text-xs text-gray-500">Elena &#x2B50;</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Validate runtime</div>
<div class="text-gray-400 text-xs leading-snug">Use MCP to verify running character-detail endpoints return correct data</div>
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
<h2 class="!text-2xl !font-bold text-white !m-0">Connect to FanHub Character Data</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-cyan-400 text-sm text-gray-300">
Character schema and sample rows still live outside the editor, so feature work starts with lookups and guesswork. <strong class="text-white">This exercise connects Copilot to live FanHub data so the team can inspect real schema, records, and field patterns without leaving the workflow.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create or update <span class="font-mono text-blue-300">.vscode/mcp.json</span> for the FanHub database connection</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Start the SQLite MCP server and test character-data queries from chat</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Inspect schema, sample rows, and optional-field patterns directly from live FanHub data</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Character data access works directly from Copilot chat</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Schema and sample-row lookup time drops dramatically</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Marcus can stay in flow instead of opening a separate database tool</div>
</div>
<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-xs text-gray-300 italic">💭 <strong class="text-blue-300">Marcus:</strong> "Wait — it's querying the actual database? Not a mock? Hold on, let me re-ask that schema question. Okay this changes things."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: .vscode/mcp.json — FanHub Database -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: .vscode/mcp.json — FanHub Database</span>
</div>

<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-gray-400">{</div>
<div class="pl-4 text-blue-300">"servers"<span class="text-white">: {</span></div>
<div class="pl-8 text-green-300">"fanhub-db"<span class="text-white">: {</span></div>
<div class="pl-12 text-blue-300">"command"<span class="text-white">: </span><span class="text-orange-300">"npx"</span><span class="text-white">,</span></div>
<div class="pl-12 text-blue-300">"args"<span class="text-white">: [</span><span class="text-orange-300">"-y", "mcp-sqlite"</span><span class="text-white">],</span></div>
<div class="pl-12 text-blue-300">"env"<span class="text-white">: {</span></div>
<div class="pl-16 text-blue-300">"SQLITE_DB_PATH"<span class="text-white">: </span><span class="text-orange-300">"${workspaceFolder}/dotnet/fanhub.db"</span></div>
<div class="pl-12 text-white">}</div>
<div class="pl-8 text-white">}</div>
<div class="pl-4 text-white">}</div>
<div class="text-gray-400">}</div>
<div class="mt-3 text-gray-400">// Now available in chat as:</div>
<div class="text-cyan-300">#fanhub-db what character fields are nullable?</div>
<div class="text-cyan-300">#fanhub-db show me 5 sample rows from the characters table</div>
<div class="text-cyan-300">#fanhub-db which records have missing display_name values?</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">📁 .vscode/mcp.json · SQLite MCP server connecting Copilot to live FanHub character data</div>
</div>

---

<!-- SLIDE: 📋 Example: Copilot Chat — Character Data Queries -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Copilot Chat — Character Data Queries</span>
</div>

<div class="relative z-10 mb-4 text-sm text-gray-300">
Once <code class="text-blue-300 font-mono">fanhub-db</code> is running in Agent mode, reference it directly in Copilot Chat:
</div>

<div class="relative z-10 space-y-3">
<div class="bg-gray-950/80 rounded-xl border border-cyan-500/30 font-mono text-xs p-4 text-gray-300">
<div class="text-cyan-400/60 text-[10px] mb-2 uppercase tracking-wider">schema lookup</div>
<div class="text-cyan-300">@workspace #mcp-fanhub-db</div>
<div class="text-gray-200 ml-4">Show me the schema for character-related tables.</div>
</div>
<div class="bg-gray-950/80 rounded-xl border border-cyan-500/30 font-mono text-xs p-4 text-gray-300">
<div class="text-cyan-400/60 text-[10px] mb-2 uppercase tracking-wider">sample data + optional fields</div>
<div class="text-cyan-300">@workspace #mcp-fanhub-db</div>
<div class="text-gray-200 ml-4">Show me sample character rows and highlight optional fields or empty values.</div>
</div>
<div class="bg-gray-950/80 rounded-xl border border-cyan-500/30 font-mono text-xs p-4 text-gray-300">
<div class="text-cyan-400/60 text-[10px] mb-2 uppercase tracking-wider">feature relevance</div>
<div class="text-cyan-300">@workspace #mcp-fanhub-db</div>
<div class="text-gray-200 ml-4">Which columns look most relevant to the character detail experience?</div>
</div>
</div>

<div class="relative z-10 mt-4 text-xs text-gray-400">💡 Each query stays in chat — no tab switch, no separate database tool, no copy-paste into context</div>
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
<div class="text-gray-500">---</div>
<div class="text-orange-300">name<span class="text-white">: </span><span class="text-green-300">lore-accuracy-check</span></div>
<div class="text-orange-300">description<span class="text-white">: &gt;</span></div>
<div class="text-green-300 ml-4">Use this skill when asked to verify, validate,</div>
<div class="text-green-300 ml-4">or fact-check a lore entry, character bio,</div>
<div class="text-green-300 ml-4">seed data, or any show content.</div>
<div class="text-green-300 ml-4">Triggers on: check lore, verify lore,</div>
<div class="text-green-300 ml-4">fact-check, canon check, lore accuracy.</div>
<div class="text-gray-500">---</div>
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

<!-- SLIDE: Duplicate or messy records in the database only ma -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">5.3</div>
<div>
<div class="text-orange-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Validate Running Character Detail API</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Elena ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
Duplicate or messy records in the database only matter if the running system exposes them. <strong class="text-white">This exercise adds a FanHub API MCP server so Copilot can validate live character-detail responses against the behavior the UI and upgraded skill workflows expect.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Add or create a FanHub API MCP server that can query live character-detail endpoints</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300"><code>/Character-Detail-Review "Jesse Pinkman"</code></span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Check whether missing, conflicting, or fallback-prone fields show up in the runtime contract</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The API can be inspected live from Copilot</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Runtime risks for the character-detail experience are surfaced clearly</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Elena can validate running behavior much faster than manual curl-based checks</div>
</div>
<div class="mt-4 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30 text-xs text-gray-300 italic">💭 <strong class="text-orange-300">Elena:</strong> "So the workflow flagged edge cases from a sample. But what about the live API? If they don't match, we have a different problem."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: docs/5.3-fanhub-api-server.js -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: docs/5.3-fanhub-api-server.js</span>
</div>

<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-gray-500">// Minimal stdio MCP server — wraps the running FanHub API</div>
<div class="text-blue-300">const <span class="text-white">http</span> = require(<span class="text-orange-300">"http"</span>);</div>
<div class="text-blue-300">const <span class="text-white">readline</span> = require(<span class="text-orange-300">"readline"</span>);</div>
<div class="mt-2 text-blue-300">const <span class="text-white">API_BASE_URL</span> = process.env.<span class="text-cyan-300">FANHUB_API_URL</span> || <span class="text-orange-300">"http://localhost:5265"</span>;</div>
<div class="mt-2 text-gray-500">// tools/list — two tools exposed to Copilot</div>
<div class="text-white">tools: [</div>
<div class="pl-4 text-white">{ name: <span class="text-orange-300">"get_characters"</span>,</div>
<div class="pl-6 text-gray-300">description: <span class="text-orange-300">"Fetch all characters from the running FanHub API"</span> },</div>
<div class="pl-4 text-white">{ name: <span class="text-orange-300">"get_character_by_id"</span>,</div>
<div class="pl-6 text-gray-300">description: <span class="text-orange-300">"Fetch a single character detail record from the running FanHub API"</span>,</div>
<div class="pl-6 text-gray-300">inputSchema: { id: { type: <span class="text-orange-300">"string"</span> } } }</div>
<div class="text-white">]</div>
<div class="mt-2 text-gray-500">// tools/call — routes to /api/characters or /api/characters/:id</div>
<div class="text-blue-300">if <span class="text-white">(tool ===</span> <span class="text-orange-300">"get_characters"</span><span class="text-white">)</span> getJson(<span class="text-orange-300">"/api/characters"</span>);</div>
<div class="text-blue-300">if <span class="text-white">(tool ===</span> <span class="text-orange-300">"get_character_by_id"</span><span class="text-white">)</span> getJson(<span class="text-orange-300">`/api/characters/${args.id}`</span>);</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">📁 docs/5.3-fanhub-api-server.js · Custom stdio MCP server — run with <code>node docs/5.3-fanhub-api-server.js</code></div>
</div>

---

<!-- SLIDE: 📋 Example: validate-character-api-contract.prompt.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: validate-character-api-contract.prompt.md</span>
</div>

<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-[26rem] text-gray-300 leading-relaxed">
<div class="text-purple-300">---</div>
<div class="text-blue-300">mode: <span class="text-green-300">ask</span></div>
<div class="text-blue-300">description: <span class="text-green-300">Validate the running FanHub character API against expected character-detail behavior.</span></div>
<div class="text-purple-300">---</div>
<div class="mt-2 text-gray-300">Use <span class="text-cyan-300">`#mcp-fanhub-api`</span> and, when useful, <span class="text-cyan-300">`#mcp-fanhub-db`</span>.</div>
<div class="mt-2 text-gray-300">Your job:</div>
<div class="text-gray-400">1. Query the running FanHub API for the character-detail response</div>
<div class="text-gray-400">2. Identify missing or surprising fields</div>
<div class="text-gray-400">3. Compare runtime behavior to what the UI and tests likely expect</div>
<div class="text-gray-400">4. Flag fallback or optional-field risks before the PR</div>
<div class="mt-2 text-gray-300">Return:</div>
<div class="text-gray-400">- endpoint checked</div>
<div class="text-gray-400">- response observations</div>
<div class="text-gray-400">- likely frontend/test risks</div>
<div class="text-gray-400">- recommendation: <span class="text-green-300">looks safe</span> / <span class="text-orange-300">needs follow-up</span></div>
<div class="mt-3 text-gray-500">// Usage:</div>
<div class="text-cyan-300">@workspace /validate-character-api-contract</div>
<div class="text-gray-400 ml-4">Validate the running character detail API. Focus on optional</div>
<div class="text-gray-400 ml-4">fields, fallback behavior, and anything that could break the</div>
<div class="text-gray-400 ml-4">character detail experience.</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">📁 .github/prompts/validate-character-api-contract.prompt.md · Validates runtime API response against character-detail expectations</div>
</div>

---

<!-- SLIDE: 🔗 Compounding Value -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Compounding Value</span>
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

<div class="mt-8 text-center text-lg text-yellow-300">
  Skills teach a workflow. MCP lets that workflow see the real world it must act on.
</div>

---

<!-- SLIDE: ✅ Module Checklist -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Module Checklist</span>
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
<div class="text-sm text-gray-300 mt-2">Update <span class="font-mono text-blue-200">ARCHITECTURE.md</span> and <span class="font-mono text-purple-200">.github/copilot-instructions.md</span> so agents you build next know what data sources are available.</div>
</div><div class="grid grid-cols-2 gap-5 mt-4 text-left">
<div class="p-5 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">🏗️</div>
<div>
<div class="text-blue-300 font-bold">Document your MCP infrastructure</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">ARCHITECTURE.md</div>
</div>
</div>
<div class="text-sm text-gray-300 space-y-2">
<div>Add an MCP section listing each server, what it exposes (DB schema, API routes), and how it's configured.</div>
<div class="text-blue-200">Custom agents in Module 6 will need to know which external systems they can query.</div>
</div>
</div>
<div class="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🧭</div>
<div>
<div class="text-purple-300 font-bold">Declare live data capabilities</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">copilot-instructions.md</div>
</div>
</div>
<div class="text-sm text-gray-300 space-y-2">
<div>Tell Copilot it can now query the FanHub database and API directly — and when to do so vs. relying on static files.</div>
<div class="text-purple-200">Without this, Copilot won't reach for live data even when it would give better answers.</div>
</div>
</div>
</div><div class="mt-4 p-4 rounded-xl bg-gray-900/60 border border-white/10 text-center">
<div class="text-sm text-yellow-300 font-semibold">Evergreen docs are not cleanup work — they are leverage for every later module.</div>
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
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Copilot just queried the actual database and told me the character count was wrong. While I was looking at the seed data."</div>
<div class="text-xs text-gray-500">The gap between local and live just closed.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-blue-400">
<div class="text-xs font-bold text-blue-300 mb-0.5">David</div>
<div class="text-xs text-gray-500 italic mb-2">The Thoughtful Architect</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Live context changes the nature of the question. You&#39;re no longer asking Copilot to reason about what might be true."</div>
<div class="text-xs text-gray-500">Reasoning about reality instead of assumptions.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-green-400">
<div class="text-xs font-bold text-green-300 mb-0.5">Sarah</div>
<div class="text-xs text-gray-500 italic mb-2">The Skeptical Senior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"The MCP tool found the endpoint regression before the test suite did. That&#39;s not a demo — that&#39;s a workflow."</div>
<div class="text-xs text-gray-500">Found the regression. Flagged it. Moved on.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-purple-400">
<div class="text-xs font-bold text-purple-300 mb-0.5">Elena</div>
<div class="text-xs text-gray-500 italic mb-2">The Pragmatic Engineer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"It called the API, got the response, and flagged the schema mismatch. I didn&#39;t prompt it to. It just did the work."</div>
<div class="text-xs text-gray-500">Expected a false positive. Got a real one.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-orange-400">
<div class="text-xs font-bold text-orange-300 mb-0.5">Marcus</div>
<div class="text-xs text-gray-500 italic mb-2">The Curious Tinkerer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Copilot can read the database now? The real one? While we&#39;re talking to it? I need a minute."</div>
<div class="text-xs text-gray-500">Still processing what a tool call actually means.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-cyan-400">
<div class="text-xs font-bold text-cyan-300 mb-0.5">Rafael</div>
<div class="text-xs text-gray-500 italic mb-2">The Pragmatic Lead</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Real-time data means the plan is always current. We&#39;re not coordinating around stale context anymore."</div>
<div class="text-xs text-gray-500">Current data. Current plan. No sync meeting required.</div>
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
