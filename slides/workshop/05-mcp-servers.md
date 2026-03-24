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
updated: 2026-03-24
---

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
      ⏰ Give Copilot live context
    </span>
  </div>

  <div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
    "Skills package workflow. MCP servers connect that workflow to the real systems it depends on."
  </div>

  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
</div>

---

# 📖 Story So Far

<div class="grid grid-cols-5 gap-4 mt-8 text-left">

  <div class="p-4 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-2xl mb-2">📚</div>
    <div class="font-bold text-blue-300 mb-2">Module 1</div>
    <div class="text-sm text-gray-300">The team documented repo structure and working standards.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-2xl mb-2">🧩</div>
    <div class="font-bold text-purple-300 mb-2">Module 2</div>
    <div class="text-sm text-gray-300">They learned to research and validate a plan before acting.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-2xl mb-2">🔁</div>
    <div class="font-bold text-orange-300 mb-2">Module 3</div>
    <div class="text-sm text-gray-300">They turned repeated requests into reusable prompts.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-2xl mb-2">🎓</div>
    <div class="font-bold text-purple-300 mb-2">Module 4</div>
    <div class="text-sm text-gray-300">They packaged specialized workflows into Agent Skills.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-2xl mb-2">🔌</div>
    <div class="font-bold text-orange-300 mb-2">Module 5</div>
    <div class="text-sm text-gray-300">Now they need live databases, APIs, and services in the loop.</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl text-white font-semibold mb-2">The gap is no longer workflow knowledge. It is system access.</div>
  <div class="text-sm text-gray-300">MCP servers let Copilot query real tools and live resources instead of depending only on files in the repo.</div>
</div>

---

# 🎯 What You'll Build

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-2xl mb-3">🗄️</div>
    <div class="text-lg font-bold text-blue-300 mb-2">Database access</div>
    <div class="text-sm text-gray-300">Connect Copilot to the FanHub database so schema and table questions are answered from live data.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-2xl mb-3">🐙</div>
    <div class="text-lg font-bold text-purple-300 mb-2">GitHub validation</div>
    <div class="text-sm text-gray-300">Use live pull request and check-run data instead of manually clicking through the GitHub UI.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-2xl mb-3">🔗</div>
    <div class="text-lg font-bold text-orange-300 mb-2">Runtime API checks</div>
    <div class="text-sm text-gray-300">Combine MCP access with earlier skills to validate live API behavior instead of static examples only.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30">
    <div class="text-2xl mb-3">✨</div>
    <div class="text-lg font-bold text-purple-300 mb-2">Interactive and reusable patterns</div>
    <div class="text-sm text-gray-300">Explore MCP Apps for rich UI and Awesome Copilot MCP for faster customization discovery.</div>
  </div>

</div>

<div class="mt-8 text-center text-lg text-gray-300">
  This module moves from static context to live operational context.
</div>

---

# 📚 What MCP Servers Actually Add

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">A standard way to reach external systems</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• MCP servers expose tools, resources, and prompts</li>
      <li>• VS Code can talk to local or remote servers through a shared protocol</li>
      <li>• The same pattern works across many MCP-compatible clients</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Live context instead of copied context</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Query a database without leaving chat</li>
      <li>• Check PR status and approvals from GitHub directly</li>
      <li>• Validate runtime API responses against real rules</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Two common transport patterns</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• <code>stdio</code> for local processes and tools</li>
      <li>• <code>http</code> for hosted or remote services</li>
      <li>• Choose transport based on security, locality, and deployment model</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/30 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">The unlock</div>
    <div class="text-sm text-gray-300">Copilot stops depending on screenshots, pasted output, and stale docs. It can ask the source system directly.</div>
  </div>

</div>

---

# 🔎 Skills and MCP Work Better Together

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

# ⚙️ Core MCP Patterns in This Module

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Local stdio servers</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Great for databases and local development tools</li>
      <li>• Process runs locally and communicates over stdin/stdout</li>
      <li>• Keeps access close to the workspace and avoids extra network hops</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Remote HTTP servers</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Great for hosted services like GitHub</li>
      <li>• Centralized integrations can be shared across many projects</li>
      <li>• Useful when the source system already lives outside your machine</li>
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
layout: two-cols
---

# ❌ Before

<div class="space-y-4 mt-6 text-left">

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

::right::

# ✨ After

<div class="space-y-4 mt-6 text-left">

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

---

# 📊 What to Validate in the Workshop

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-2">Connection quality</div>
    <div class="text-sm text-gray-300">Does the server start cleanly and expose the tools or resources the scenario actually needs?</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-2">Workflow quality</div>
    <div class="text-sm text-gray-300">Does live context meaningfully improve the speed or quality of the outcome?</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-2">Compounding value</div>
    <div class="text-sm text-gray-300">Can this MCP integration work with existing prompts, skills, or standards instead of standing alone?</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl font-bold text-white">The win is not “we connected a server.” The win is “we improved a real workflow with live context.”</div>
</div>

---

# 🔨 Exercise Roadmap

<div class="mt-6 text-left">

<div class="mb-5">
  <div class="text-blue-300 font-bold mb-2">Phase 1 — Query the system directly</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **5.1** | Connect to FanHub Database | Marcus ⭐ | 15 min |
| **5.2** | Automate PR Review Validation | Sarah ⭐ | 15 min |

</div>

<div class="mb-5">
  <div class="text-purple-300 font-bold mb-2">Phase 2 — Combine MCP with previous customizations</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **5.3** | Validate Backend API Against Data Rules | Elena ⭐ | 15 min |

</div>

<div>
  <div class="text-orange-300 font-bold mb-2">Phase 3 — Explore the ecosystem frontier</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **5.4** | Rich UI with MCP Apps | David ⭐ | 12 min |
| **5.5** | Bootstrap with Awesome Copilot MCP | Marcus ⭐ | 10 min |

</div>

</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
  <div class="text-white font-semibold">The sequence matters.</div>
  <div class="text-sm text-gray-300">Start with core connections, then compound them with validation logic, then explore richer interfaces and faster adoption patterns.</div>
</div>

---

# 🔗 Compounding Value

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">What Module 5 adds</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Live database and service access</li>
      <li>• Real-time validation against GitHub or API state</li>
      <li>• Richer interaction patterns, including MCP Apps</li>
      <li>• Faster discovery of reusable customization assets</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">How later modules benefit</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• <strong>Module 6:</strong> custom agents become stronger when they can orchestrate prompts, skills, and live MCP-backed tools together</li>
      <li>• The team moves from isolated customization pieces toward end-to-end Copilot workflows</li>
    </ul>
  </div>

</div>

<div class="mt-8 text-center text-lg text-yellow-300">
  Skills teach a workflow. MCP lets that workflow see the real world it must act on.
</div>

---

# ✅ Module Checklist

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Connect</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Add the right MCP server configuration for the scenario</li>
      <li>• Pick the transport that fits the system and security model</li>
      <li>• Confirm the server starts and exposes useful capabilities</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Apply</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Use live context to improve a real team workflow</li>
      <li>• Combine MCP with prompts, standards, or skills where it helps</li>
      <li>• Keep the integration understandable and easy to reuse</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Validate</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Measure whether manual effort drops</li>
      <li>• Check that outputs are grounded in live data</li>
      <li>• Refine the workflow until the connection is genuinely worth keeping</li>
    </ul>
  </div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-lg text-white font-semibold">A good MCP integration reduces switching, reduces guessing, and increases confidence.</div>
</div>

---
layout: center
---

# ➡️ Next Up: Module 6

<div class="p-8 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-xl shadow-lg max-w-3xl">
  <div class="text-5xl mb-4 text-center">🤖</div>
  <h2 class="text-3xl text-center text-white font-bold mb-4">
    Custom Agents
  </h2>
  <div class="text-lg text-center text-purple-200 mb-6">
    Combine prompts, skills, and MCP servers into one domain-ready workflow
  </div>
  <div class="text-base text-gray-300 text-center mb-4">
    By this point the team has reusable prompts, packaged skills, and live integrations. Next, they bundle those capabilities into focused agents that can orchestrate the whole workflow.
  </div>
  <blockquote class="text-lg text-center text-white italic">
    "What if one Copilot workflow could know our standards, use our skills, and query our live systems at the same time?"
  </blockquote>
  <div class="mt-4 text-center text-purple-300">
    Module 5 complete — ready for orchestration.
  </div>
</div>

---
layout: center
---

# 🔨 Exercise Section

<div class="p-8 bg-gradient-to-br from-orange-900/40 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 max-w-4xl mx-auto">
  <div class="text-5xl mb-4">🧪</div>
  <div class="text-2xl text-white font-bold mb-3">One slide per exercise</div>
  <div class="text-base text-gray-300 mb-4">
    Use these as facilitation prompts during delivery. The detailed exercise markdown remains the source of truth.
  </div>
  <div class="text-sm text-gray-400">
    Each exercise proves a different way MCP can make Copilot more useful with live context.
  </div>
</div>

---

# 🔨 Exercise 5.1 — Connect to FanHub Database

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30">Lead: Marcus ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 15 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Schema knowledge still lives outside the editor, so database work requires extra tools, context switching, and guesswork.</div>
    <div class="text-blue-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Configure a database MCP server so Copilot can answer schema and relationship questions directly from the FanHub database.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Create or update <code>.vscode/mcp.json</code></li>
      <li>• Start the SQLite server and test schema queries</li>
      <li>• Confirm Copilot can inspect tables and relationships from live data</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Database access works from chat</li>
      <li>• Schema lookup time drops dramatically</li>
      <li>• Marcus can stay in flow instead of opening a separate database tool</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 5.2 — Automate PR Review Validation

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">Lead: Sarah ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 15 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">PR readiness is still checked manually across multiple GitHub screens, which is slow and easy to miss under pressure.</div>
    <div class="text-purple-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Use the GitHub MCP server plus a reusable prompt to validate merge readiness against the team’s checklist.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Add GitHub MCP configuration</li>
      <li>• Create a PR validation prompt</li>
      <li>• Query live PR status, approvals, checks, and blockers</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Validation uses live GitHub data</li>
      <li>• The checklist is applied consistently</li>
      <li>• Sarah gets a faster, more reliable merge-readiness report</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 5.3 — Validate Backend API Against Data Rules

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-orange-900/50 text-orange-300 border border-orange-500/30">Lead: Elena ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 15 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Static validation rules are useful, but they cannot catch runtime API behavior unless the workflow can reach the live service.</div>
    <div class="text-orange-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Combine an MCP-backed API connection with earlier validation logic so Copilot can test live responses against domain rules.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Add or create a FanHub API MCP server</li>
      <li>• Query live endpoints from chat</li>
      <li>• Apply validation rules to detect contract violations earlier</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• The API can be inspected live from Copilot</li>
      <li>• Rule violations are surfaced clearly</li>
      <li>• Elena can validate runtime behavior much faster than manual curl-based checks</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 5.4 — Rich UI with MCP Apps

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30">Lead: David ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 12 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Plain-text output is enough for some tasks, but charts, tables, and flame graphs can make patterns far easier to understand.</div>
    <div class="text-blue-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Explore how MCP Apps can render interactive visualizations directly inside chat instead of forcing an export to another tool.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Configure or connect to an MCP Apps demo server</li>
      <li>• Request an interactive visualization</li>
      <li>• Explore how rich UI changes the quality of analysis</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• An interactive visualization renders in chat</li>
      <li>• The team can inspect data without exporting it elsewhere</li>
      <li>• David sees how MCP can improve explanation, not just access</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 5.5 — Bootstrap with Awesome Copilot MCP

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">Lead: Marcus ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 10 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Writing every customization from scratch is educational, but it is not always the fastest or smartest path for real teams.</div>
    <div class="text-purple-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Use Awesome Copilot MCP to search, compare, and install community-curated customizations directly from chat.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Install or connect to the Awesome Copilot MCP server</li>
      <li>• Search for useful instructions, prompts, or chat modes</li>
      <li>• Save one or more community patterns into the repo</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• The team can discover options quickly</li>
      <li>• Installation is faster than manual browsing and copy/paste</li>
      <li>• Marcus can bootstrap customization work without reinventing every pattern</li>
    </ul>
  </div>
</div>
