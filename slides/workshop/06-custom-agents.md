---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 6: Custom Agents
  Bundle tools, skills, and workflow constraints into role-based presets
drawings:
  persist: false
transition: slide-left
title: Module 6 - Custom Agents
module: workshop/06-custom-agents
mdc: true
status: active
updated: 2026-03-26
---

<!-- SLIDE: Module 6: Custom Agents -->
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
    Module 6: Custom Agents
  </h1>

  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
      ⏰ Turn capabilities into roles
    </span>
  </div>

  <div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
    "Agents are where instructions, prompts, skills, and MCP access become an actual workflow teammate."
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
    <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
      <div class="font-bold text-gray-400 text-xs">M5</div>
      <div class="text-gray-500 mt-0.5 whitespace-nowrap">MCP</div>
    </div>
    <div class="flex items-center text-gray-600 px-0.5">›</div>
    <div class="flex-1 p-2 bg-gradient-to-b from-orange-600/80 to-orange-800/60 rounded-lg border border-orange-400/50 text-center shadow-lg shadow-orange-900/30">
      <div class="font-bold text-white text-xs">M6</div>
      <div class="text-orange-200 mt-0.5 whitespace-nowrap">Agents</div>
    </div>
  </div>
</div>

---

<!-- SLIDE: We have prompts, skills, and MCP — and theyre all -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-16 py-8">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="text-orange-300 font-bold text-lg tracking-wide">⏰ : Monday, 3:45 PM</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 mb-2 flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-base font-bold text-white shadow-lg shadow-orange-500/30 flex-shrink-0">S</div>
<div class="text-gray-300 text-sm">
<span class="text-white font-semibold">Sarah</span> looks at everything the team has built and starts thinking about what becomes possible when it all works together.
</div>
</div>
<div class="relative z-10 mb-3 py-2 px-3 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 shadow-xl backdrop-blur-sm">
<p class="text-gray-200 text-xs leading-relaxed">
<span class="text-orange-300/60 font-serif text-base">"</span>
We have prompts, skills, and MCP — and they're all working. Now imagine if switching between review and implementation didn't require any setup at all. What if <span class="text-orange-300 font-semibold">Copilot</span> was already waiting for us?<span class="text-orange-300/60 font-serif text-base">"</span>
</p>
</div>
<div class="relative z-10 grid grid-cols-6 gap-3 mb-3 text-left">
<div class="p-3 rounded-xl bg-gray-900/60 border border-blue-500/30">
<div class="text-blue-300 font-bold text-xs mb-1">Module 1</div>
<div class="text-white font-semibold text-xs mb-1">Document the standards</div>
<div class="text-xs text-gray-400 leading-tight">Instructions created a reliable baseline.</div>
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
<div class="text-xs text-gray-400 leading-tight">Specialized expertise became callable skills.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-xs mb-1">Module 5</div>
<div class="text-white font-semibold text-xs mb-1">Connect live systems</div>
<div class="text-xs text-gray-400 leading-tight">MCP brought real databases and APIs into the loop.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-red-500/30">
<div class="text-red-300 font-bold text-xs mb-1">Module 6</div>
<div class="text-white font-semibold text-xs mb-1">Bundle into agent</div>
<div class="text-xs text-gray-400 leading-tight">Now the goal is actual delivery.</div>
</div>
</div>
<div class="relative z-10 flex items-center gap-3 p-3 bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-xl border border-red-500/40 shadow-lg">
<span class="text-xl flex-shrink-0">⚡</span>
<p class="text-white font-bold text-sm">Custom agents let the team switch into the <span class="text-orange-300">right role instantly</span> — tools, instructions, and handoffs already configured.</p>
</div>
</div>

---

<!-- SLIDE: 🤖 Built-In Agents You Already Have -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Built-In Agents You Already Have</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-left">

<div class="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">⚡</div>
<div class="text-blue-300 font-bold text-sm">Copilot Coding Agent</div>
</div>
<div class="text-xs text-gray-300 mb-3">Assigns itself to a GitHub Issue, works autonomously in a sandboxed environment, and opens a pull request when done.</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">▸</span><span>Triggered from a GitHub Issue — assign Copilot as the owner</span></div>
<div class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">▸</span><span>Reads repo context, plans, implements, and runs tests in a secure cloud workspace</span></div>
<div class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">▸</span><span>Delivers a PR with a summary of decisions made</span></div>
</div>
<div class="mt-2 p-2 bg-blue-900/30 rounded-lg border border-blue-500/20 text-xs text-gray-300">
<span class="text-blue-300 font-semibold">Uses your workshop work:</span> respects repo instructions, invokes skills, and queries MCP servers — everything from Modules 1–5 shapes how it works.
</div>
<div class="mt-2 text-xs text-blue-300/70 italic">Best for: well-scoped tasks with a clear issue description</div>
</div>

<div class="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">🔍</div>
<div class="text-purple-300 font-bold text-sm">Copilot Code Review</div>
</div>
<div class="text-xs text-gray-300 mb-3">Reviews pull requests automatically and leaves inline comments with actionable suggestions — no setup required.</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-start gap-2"><span class="text-purple-400 mt-0.5">▸</span><span>Request a review from <code>@github-copilot</code> on any PR</span></div>
<div class="flex items-start gap-2"><span class="text-purple-400 mt-0.5">▸</span><span>Surfaces logic issues, missing edge cases, and style inconsistencies</span></div>
<div class="flex items-start gap-2"><span class="text-purple-400 mt-0.5">▸</span><span>Can be configured with custom review instructions in repo settings</span></div>
</div>
<div class="mt-2 p-2 bg-purple-900/30 rounded-lg border border-purple-500/20 text-xs text-gray-300">
<span class="text-purple-300 font-semibold">Uses your workshop work:</span> respects repo instructions and invokes skills — your Module 1 and 4 work directly improves review quality.
</div>
<div class="mt-2 text-xs text-purple-300/70 italic">Best for: a fast first-pass review before human reviewers engage</div>
</div>

</div>

<div class="mt-3 p-3 bg-gradient-to-r from-blue-900/25 via-purple-900/20 to-orange-900/15 rounded-xl border border-white/10 text-center">
<div class="text-sm text-white font-semibold">These are GitHub-hosted agents. Module 6 is about <span class="text-orange-300">your own</span> — purpose-built for the FanHub workflow.</div>
</div>
</div>

---

<!-- SLIDE: 🎯 What Youll Build -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 What You'll Build</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-2xl mb-3">🧪</div>
    <div class="text-lg font-bold text-blue-300 mb-2">A character-review agent</div>
    <div class="text-sm text-gray-300">Read-only tools plus the prompt, skill, and MCP-aware workflow the team already built for character-detail review.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-2xl mb-3">🛠️</div>
    <div class="text-lg font-bold text-purple-300 mb-2">An implementation agent</div>
    <div class="text-sm text-gray-300">Full editing tools and systematic Feature Spec-driven execution for getting work done thoroughly.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-2xl mb-3">🔗</div>
    <div class="text-lg font-bold text-orange-300 mb-2">A connected handoff flow</div>
    <div class="text-sm text-gray-300">Implementation and review become part of the same deliberate workflow instead of two disconnected chats.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-emerald-900/30 to-blue-900/20 border border-emerald-500/30">
    <div class="text-2xl mb-3">🚀</div>
    <div class="text-lg font-bold text-emerald-300 mb-2">An agent-team capstone</div>
    <div class="text-sm text-gray-300">Squad gives the team one glimpse of what persistent, multi-agent collaboration could look like inside the repo.</div>
  </div>

</div>

<div class="mt-8 text-center text-lg text-gray-300">
  Module 6 is about operationalizing everything the workshop has taught so far.
</div>
</div>

---

<!-- SLIDE: 📚 What Custom Agents Actually Are -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 What Custom Agents Actually Are</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-left">

  <div class="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold text-sm mb-2">A role-specific operating mode</div>
    <ul class="text-xs text-gray-300 space-y-1.5">
      <li>YAML frontmatter defines tools, model, handoffs, and related controls</li>
      <li>Markdown instructions define the workflow and constraints</li>
      <li>The agent appears as a reusable preset for a specific kind of work</li>
    </ul>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold text-sm mb-2">A way to encode workflow boundaries</div>
    <ul class="text-xs text-gray-300 space-y-1.5">
      <li>Review agents can be read-only</li>
      <li>Implementation agents can have edit tools</li>
      <li>Handoffs connect roles without collapsing their boundaries</li>
    </ul>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold text-sm mb-2">A place where earlier customizations meet</div>
    <ul class="text-xs text-gray-300 space-y-1.5">
      <li>Repository instructions still guide behavior</li>
      <li>Skills can provide domain workflow support</li>
      <li>MCP access can add live context where the role needs it</li>
    </ul>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-orange-900/30 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold text-sm mb-2">The real payoff</div>
    <div class="text-xs text-gray-300">You stop re-explaining the mode of work and start selecting the right teammate for the job.</div>
  </div>

</div>
</div>

---

<!-- SLIDE: 🔄 Agents vs Instructions vs Skills vs MCP -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Agents vs Instructions vs Skills vs MCP</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-4 gap-4 mt-8 text-left">

  <div class="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-2">Instructions</div>
    <div class="text-sm text-gray-300">Tell Copilot how to behave.</div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-2">Prompts</div>
    <div class="text-sm text-gray-300">Package repeated requests.</div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-2">Skills</div>
    <div class="text-sm text-gray-300">Teach a specialized capability.</div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-orange-900/30 to-purple-900/20 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-2">Agents</div>
    <div class="text-sm text-gray-300">Compose the right tools and workflow for a role.</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl font-bold text-white">Agents are the orchestration layer.</div>
  <div class="text-sm text-gray-300">They decide which capabilities are available, when to stop, and where the workflow goes next.</div>
</div>
</div>

---

<!-- SLIDE: ⚙️ Core Agent Design Patterns -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Core Agent Design Patterns</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-left">

  <div class="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold text-sm mb-2">Tool selection is policy</div>
    <ul class="text-xs text-gray-300 space-y-1.5">
      <li>Read-only tools enforce research or review boundaries</li>
      <li>Editing tools should only appear where implementation is expected</li>
      <li>The tool list shapes the behavior as much as the prompt does</li>
    </ul>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold text-sm mb-2">Instructions define the workflow</div>
    <ul class="text-xs text-gray-300 space-y-1.5">
      <li>Stopping rules prevent scope creep</li>
      <li>Style guides make output more consistent</li>
      <li>Ordered phases reduce improvisation</li>
    </ul>
  </div>

</div>

<div class="mt-4 grid grid-cols-3 gap-4 text-left">
  <div class="p-3 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold text-sm mb-1">Handoffs</div>
    <div class="text-xs text-gray-300">Turn isolated tasks into guided workflows from one role to the next.</div>
  </div>

  <div class="p-3 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold text-sm mb-1">Model and scope controls</div>
    <div class="text-xs text-gray-300">Pick the environment and invocation pattern that fit the job.</div>
  </div>

  <div class="p-3 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold text-sm mb-1">Workspace vs web</div>
    <div class="text-xs text-gray-300">Some workflows stay focused and local. Others hint at broader team orchestration.</div>
  </div>
</div>
</div>

---

<!-- SLIDE: 📄 The AGENTS.md Standard -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📄 The AGENTS.md Standard</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-5">
<div class="flex flex-col gap-3">
<div class="p-4 rounded-xl bg-gray-900/60 border border-blue-500/30">
<div class="text-blue-300 font-bold text-sm mb-2">What it is</div>
<div class="text-xs text-gray-300 leading-relaxed">An open community convention for documenting AI agent instructions in a way that works across editors — VS Code, Cursor, and others. A plain markdown file in <code>.github/agents/</code> that any agent-aware tool can read.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold text-sm mb-2">YAML frontmatter + Markdown body</div>
<div class="bg-gray-950 rounded-lg font-mono text-xs p-3 text-gray-300 leading-relaxed">
<div class="text-purple-300">---</div>
<div class="text-blue-300">name: <span class="text-green-300">character-review</span></div>
<div class="text-blue-300">description: <span class="text-green-300">Review character changes</span></div>
<div class="text-blue-300">tools: <span class="text-orange-300">['search', 'fetch']</span></div>
<div class="text-blue-300">handoffs:</div>
<div class="pl-4 text-blue-300">- agent: <span class="text-green-300">implement</span></div>
<div class="text-purple-300">---</div>
<div class="mt-1 text-gray-400"># Workflow instructions here</div>
<div class="text-gray-400">Analysis only. Do not modify files.</div>
</div>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
<div class="text-orange-300 font-bold text-sm mb-2">Why it matters for the team</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-start gap-2"><span class="text-orange-400 mt-0.5">▸</span><span><strong class="text-white">Portable</strong> — The same <code>.agent.md</code> file works in any AGENTS.md-compatible editor</span></div>
<div class="flex items-start gap-2"><span class="text-orange-400 mt-0.5">▸</span><span><strong class="text-white">Shareable</strong> — Commit agent configs to the repo; the whole team gets the same presets</span></div>
<div class="flex items-start gap-2"><span class="text-orange-400 mt-0.5">▸</span><span><strong class="text-white">Discoverable</strong> — New team members open VS Code and the agents are already there</span></div>
<div class="flex items-start gap-2"><span class="text-orange-400 mt-0.5">▸</span><span><strong class="text-white">Convention-based</strong> — No proprietary lock-in; the format is community-owned</span></div>
</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/60 border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-sm mb-2">Where agents live</div>
<div class="font-mono text-xs text-gray-300 space-y-1">
<div><span class="text-orange-300">.github/agents/</span><span class="text-gray-500">  ← workspace agents (team)</span></div>
<div class="pl-4 text-gray-400">character-review.agent.md</div>
<div class="pl-4 text-gray-400">implement.agent.md</div>
<div class="pl-4 text-gray-400">breaking-bad-expert.agent.md</div>
<div class="mt-2"><span class="text-purple-300">~/.config/github-copilot/agents/</span></div>
<div class="pl-4 text-gray-500">← personal agents (just you)</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-r from-orange-900/40 to-red-900/30 border border-orange-500/30 text-xs">
<span class="text-orange-300 font-semibold">👉 agents.md</span> <span class="text-gray-300">— The open standard spec: </span><span class="text-blue-300 font-mono">agents.md</span>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: ❌ Before -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/15 via-transparent to-green-900/15"></div>
<div class="relative z-10 grid grid-cols-2 gap-8 h-full py-4">
<div class="pr-4 border-r border-white/10">
<div class="mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-red-700/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">❌ Before</span>
</div>
<div class="space-y-4">
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-2">Work starts with reconfiguration</div>
<div class="text-sm text-gray-300">The user re-explains whether this is planning, implementation, review, or analysis work.</div>
</div>
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-2">Boundaries are easy to blur</div>
<div class="text-sm text-gray-300">A planning conversation can drift into editing or a review session can accidentally make changes.</div>
</div>
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-2">Workflow transitions are manual</div>
<div class="text-sm text-gray-300">Even when the next step is obvious, the handoff from plan to implement or implement to review is not encoded.</div>
</div>
</div>
</div>
<div class="pl-4">
<div class="mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-700/80 to-green-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ After</span>
</div>
<div class="space-y-4">
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-2">Roles become instant presets</div>
<div class="text-sm text-gray-300">The team picks the right agent and starts in the right mode immediately.</div>
</div>
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-2">Constraints are enforced, not implied</div>
<div class="text-sm text-gray-300">Read-only planning or review is backed by tool restrictions and instructions, not just good intentions.</div>
</div>
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-2">Handoffs create a real workflow chain</div>
<div class="text-sm text-gray-300">Plan, implement, and review become a sequence the team can actually reuse.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📊 What to Validate in the Workshop -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 What to Validate in the Workshop</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-2">Role fit</div>
    <div class="text-sm text-gray-300">Does the agent’s tool list and instruction set actually match the work it is supposed to perform?</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-2">Workflow reliability</div>
    <div class="text-sm text-gray-300">Does the agent consistently stay in scope and produce the kind of output the role needs?</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-2">Handoff quality</div>
    <div class="text-sm text-gray-300">Does the transition to the next role preserve context and reduce manual setup?</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl font-bold text-white">A good custom agent feels like a workflow upgrade, not just a renamed chat mode.</div>
</div>
</div>

---

<!-- SLIDE: 🔨 Exercise Roadmap -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercise Roadmap</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="mt-5 p-4 bg-gradient-to-r from-blue-900/25 via-purple-900/20 to-orange-900/15 rounded-xl border border-white/10 text-center">
  <div class="text-base text-white font-semibold mb-1">Turn earlier customizations into reusable teammates.</div>
  <div class="text-xs text-gray-300">Pattern first, then review, sharpen the spec, implement, and see the horizon.</div>
</div>

<div class="mt-5 grid grid-cols-5 gap-3 text-left">

  <div class="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold border border-blue-400/30">6.1</span>
      <span class="text-xs text-gray-400">15 min</span>
    </div>
    <div class="text-base font-bold text-blue-300 mb-2 leading-tight">Study the Default Plan Agent</div>
    <div class="text-xs text-gray-300 mb-3 leading-snug">Learn the Explore subagent pattern, tool-list-as-role-boundary, and handoff chain before building your own.</div>
    <div class="text-xs text-gray-400">Lead: All ⭐</div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold border border-emerald-400/30">6.2</span>
      <span class="text-xs text-gray-400">15 min</span>
    </div>
    <div class="text-base font-bold text-emerald-300 mb-2 leading-tight">Explore Agent Teams with Squad</div>
    <div class="text-xs text-gray-300 mb-3 leading-snug">See where the Explore subagent pattern goes at scale — persistent multi-agent coordination in VS Code.</div>
    <div class="text-xs text-gray-400">Lead: Marcus ⭐</div>
  </div>

</div>

<div class="mt-3 p-4 rounded-xl bg-gradient-to-br from-amber-900/40 via-orange-900/30 to-amber-900/40 border border-amber-500/40 text-left">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-bold border border-amber-400/30">6.3</span>
      <span class="text-base font-bold text-amber-300">Build the @content-author Agent</span>
      <span class="px-2 py-0.5 bg-amber-500/20 rounded-full text-amber-200 text-[10px] border border-amber-400/30">⭐ CAPSTONE — Five Modules, One Agent</span>
    </div>
    <div class="flex gap-3 text-xs text-gray-400">
      <span>Lead: All ⭐🤝</span>
      <span>25 min</span>
    </div>
  </div>
  <div class="mt-2 text-xs text-gray-300">Create <code>@content-author</code> — wires universe context (M1), <code>create-card-and-page skill</code> (M4), <code>data-accuracy-check</code> (M3/M4), and live MCP data (M5) into one agent that adds a Quotes entity end-to-end from a single instruction.</div>
</div>

<div class="mt-4 p-3 bg-gray-900/60 rounded-xl border border-white/10 text-center">
  <div class="text-sm text-white font-semibold">One arc: study the pattern → explore agent teams → build the capstone.</div>
</div>
</div>

---

<!-- SLIDE: 🔗 Compounding Value -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Compounding Value</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">What Module 6 adds</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Role-based presets instead of repetitive setup</li>
      <li>Explicit workflow boundaries between review and implementation</li>
      <li>Handoffs that connect Feature Spec execution to character review</li>
      <li>A capstone glimpse of persistent agent teams beyond single-role presets</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Why it matters</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Instructions, prompts, skills, and MCP are more valuable when they are easy to invoke in the right context</li>
      <li>Teams get more consistency because workflow design is encoded, not remembered</li>
      <li>Even a small two-agent flow makes Copilot feel more like a deliberate teammate system than a single chat box</li>
    </ul>
  </div>

</div>

<div class="mt-4 flex items-center gap-3 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30">
<span class="text-xl flex-shrink-0">⚡</span>
<p class="text-white font-bold text-sm">Module 6 is the orchestration layer that turns separate customizations into <span class="text-orange-300">repeatable delivery patterns</span>.</p>
</div>
</div>

---

<!-- SLIDE: 🔨 Exercises -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F528; Exercises &mdash; Agents</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-4 shadow-lg shadow-orange-900/20">
<div class="text-lg font-bold text-white">3 exercises · ~55 minutes · shared leadership</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-blue-300 font-bold text-base">6.1</div>
<span class="text-xs text-gray-500">All ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Study the pattern</div>
<div class="text-gray-400 text-xs leading-snug">Explore subagent pattern, tool-list boundary, stopping rules, handoff chain</div>
</div>
<div class="p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-emerald-300 font-bold text-base">6.2</div>
<span class="text-xs text-gray-500">Marcus ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Explore Squad</div>
<div class="text-gray-400 text-xs leading-snug">See the Explore subagent pattern at scale — persistent multi-agent coordination</div>
</div>
<div class="p-3 bg-amber-900/30 rounded-lg border border-amber-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-amber-300 font-bold text-base">6.3</div>
<span class="text-xs text-gray-500">All ⭐🤝 capstone</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Build the capstone</div>
<div class="text-gray-400 text-xs leading-snug">Create @content-author — one agent that activates M1–M5 from a single instruction</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-900/40 rounded-lg border border-white/10 text-center text-xs text-gray-400">
Study the pattern → explore what it becomes → build it yourself.
</div>
</div>

---

<!-- SLIDE: Before building custom agents, the team needs a me -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">6.1</div>
<div>
<div class="text-blue-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Study the Default Plan Agent</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">All ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-blue-400 text-sm text-gray-300">
Before building a custom agent, study how the default <code>@plan</code> agent is designed — its Explore subagent, its tool list, its stopping rules. <strong class="text-white">This is where you learn to read agent configs like architecture, not just configuration files.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Open the Plan agent file — find <code>agents: ['Explore']</code> and explain why it spawns a subagent before doing anything else</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Study the tool list — note what is <em>absent</em> (<code>edit</code>, <code>create</code>, <code>delete</code>). The only write tool is <code>vscode/memory</code> — for the plan itself, never code</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Trace the handoff chain: <code>@plan</code> → <code>Start Implementation</code>. Name the design decision each step encodes</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Can explain why Explore subagents run before planning begins</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Can name what's absent from the tool list and why that's intentional</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Can trace the full handoff chain and explain each transition</div>
</div>
<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-xs text-gray-300 italic">💭 <strong class="text-blue-300">David:</strong> "Technically, a custom agent is just a deliberate override of the default. The real question is whether we understand what we’re overriding — otherwise we’re not customizing, we’re guessing with extra steps."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: default plan agent — key patterns -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: default plan agent — key patterns</span>
</div>
<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-purple-300">---</div>
<div class="text-blue-300">name: <span class="text-green-300">Plan</span></div>
<div class="text-blue-300">description: <span class="text-green-300">Researches and outlines multi-step plans</span></div>
<div class="text-blue-300">tools: <span class="text-orange-300">['search', 'fetch', 'usages', 'githubRepo', 'runSubAgent', 'get_issue', 'get_pull_request']</span></div>
<div class="text-blue-300">handoffs:</div>
<div class="pl-4 text-blue-300">- label: <span class="text-green-300">Start Implementation</span></div>
<div class="pl-6 text-blue-300">agent: <span class="text-green-300">agent</span></div>
<div class="pl-6 text-blue-300">prompt: <span class="text-green-300">Start implementation</span></div>
<div class="pl-4 text-blue-300">- label: <span class="text-green-300">Open in Editor</span></div>
<div class="pl-6 text-blue-300">agent: <span class="text-green-300">agent</span></div>
<div class="text-purple-300">---</div>
<div class="mt-2 text-gray-400"># Planning Mode</div>
<div class="text-gray-400">- Research only — never modify files</div>
<div class="text-gray-400">- Stop when the plan is complete and ready for review</div>
<div class="text-gray-400">- Use handoffs to pass context into the next role</div>
<div class="mt-2 text-cyan-300">// Key insight: tool list + stopping rule = role boundary</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">📁 examples/completed-config/.github/agents/default-plan.agent.md · Read-only tools + explicit handoffs define the workflow</div>
</div>

---

<!-- SLIDE: Single custom agents solve focused workflow proble -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30 flex-shrink-0">6.2</div>
<div>
<div class="text-emerald-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Explore Agent Teams with Squad</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-emerald-400 text-sm text-gray-300">
Single custom agents solve focused workflow problems, but it is still hard to picture what a persistent multi-agent team could look like in practice. <strong class="text-white">This exercise installs Squad, initializes it inside the repo, and uses it from VS Code as an “art of the possible” capstone for agent teams.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Install <code>@bradygaster/squad-cli</code> and run <code>squad init</code></span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Open Copilot Chat in VS Code and select the <code>Squad</code> agent</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Try one FanHub-style team request and compare it to a single custom agent flow</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Squad initializes successfully in the repo</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The team can explain the difference between a workflow preset and an agent team</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Module 6 ends with a concrete sense of where this could go next</div>
</div>
<div class="mt-4 p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/30 text-xs text-gray-300 italic">💭 <strong class="text-emerald-300">Marcus:</strong> "Wait — so you can chain these? Like, one agent hands off to the next? I’m already mapping this to our deploy pipeline — actually no, finish the demo first. I’m coming back to that though."</div>
<div class="text-xs text-gray-400">Workflow design scales when it's encoded, not remembered.</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: Squad agent team setup -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Squad agent team setup</span>
</div>
<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-gray-400"># Install Squad CLI</div>
<div class="text-green-300">npm install -g @bradygaster/squad-cli</div>
<div class="mt-2 text-gray-400"># Initialize Squad in the repo</div>
<div class="text-green-300">squad init</div>
<div class="mt-2 text-gray-400"># Open Copilot Chat in VS Code and type:</div>
<div class="text-cyan-300">@squad Analyze the FanHub character-detail feature and coordinate a review</div>
<div class="mt-2 text-gray-400">// Squad routes the task to its own agent team</div>
<div class="text-gray-400">// Multiple specialized agents collaborate in parallel</div>
<div class="text-gray-400">// Output is coordinated — not a single chat response</div>
<div class="mt-2 text-orange-300">// Compare: @implement → @character-review (your chain)</div>
<div class="text-gray-400">// vs. @squad (persistent multi-agent coordination)</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">📁 @bradygaster/squad-cli · Multi-agent team coordination — what workflows could become at scale</div>
</div>

---


<!-- SLIDE: Exercise 6.3 — Build the @content-author Agent (Capstone) -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/25 via-yellow-900/10 to-orange-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-500/30 flex-shrink-0">6.3</div>
<div>
<div class="flex items-center gap-2">
<div class="text-amber-300 text-xs font-semibold tracking-widest uppercase">Exercise · CAPSTONE</div>
<span class="px-2 py-0.5 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full text-amber-200 text-[10px] font-bold border border-amber-400/40">⭐ Five Modules, One Agent</span>
</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Build the @content-author Agent</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">All ⭐🤝</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 25 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-4 bg-gray-900/60 rounded-xl border-l-4 border-amber-400 text-sm text-gray-300">
Every prior module built a reusable piece. <strong class="text-white">This capstone wires them together: one agent, one instruction — "Add a Quotes entity to FanHub with 5 iconic lines" — and every module's investment pays off in a single session.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">📋 Steps</div>
<div class="space-y-1.5 text-xs">
<div class="flex items-start gap-3 p-2.5 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create <code>.github/agents/content-author.agent.md</code> with full editing tools, <code>agents: ['Explore']</code>, and the fanhub-db MCP server</span></div>
<div class="flex items-start gap-3 p-2.5 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Write instructions: check universe doc, query MCP, invoke <code>create-card-and-page skill</code>, run <code>data-accuracy-check</code> on every seeded record before migration</span></div>
<div class="flex items-start gap-3 p-2.5 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Run: <em>"Add a Quotes entity to FanHub — seed it with 5 iconic Breaking Bad lines"</em> and let the agent work</span></div>
<div class="flex items-start gap-3 p-2.5 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Debrief: for each thing the agent did, name the module that made it possible</span></div>
</div>
</div>
<div class="space-y-2">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✅ Success Criteria</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Quote entity scaffolded end-to-end (model → controller → Blazor page)</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The <code>data-accuracy-check</code> skill catches the planted misattribution before migration</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Every participant names the module behind each action the agent took</div>
</div>
<div class="mt-3 p-3 bg-amber-900/30 rounded-lg border border-amber-500/30 text-xs text-gray-300 italic">💭 <strong class="text-amber-300">Sarah:</strong> "One instruction. It checked the canon, checked the live data, scaffolded the whole stack, and caught an attribution error before it shipped. Five modules of work paid for itself in this session."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: content-author.agent.md — the capstone config -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: content-author.agent.md</span>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="bg-gray-950/80 rounded-xl border border-amber-500/30 font-mono text-xs p-4 text-gray-300 overflow-auto leading-relaxed">
<div class="text-purple-300">---</div>
<div class="text-blue-300">name: <span class="text-green-300">Content Author</span></div>
<div class="text-blue-300">description: <span class="text-green-300">"Add new FanHub entities end-to-end — scaffold, validate, implement"</span></div>
<div class="text-blue-300">tools: <span class="text-orange-300">['edit', 'create', 'search', 'read', 'fetch', 'usages', 'problems', 'agent']</span></div>
<div class="pl-8 text-orange-300">  <span class="text-gray-500"># + fanhub-db MCP tools from M5</span></div>
<div class="text-blue-300">agents: <span class="text-orange-300">['Explore']</span></div>
<div class="text-blue-300">handoffs:</div>
<div class="pl-4 text-blue-300">- label: <span class="text-green-300">Review Changes</span></div>
<div class="pl-6 text-blue-300">  agent: <span class="text-green-300">security-review</span></div>
<div class="pl-6 text-blue-300">  send: <span class="text-orange-300">false</span></div>
<div class="text-purple-300">---</div>
<div class="mt-2 text-gray-400"># Content Author Mode</div>
<div class="text-gray-400">When asked to add a new entity type to FanHub:</div>
<div class="mt-1 text-gray-400">1. Check <span class="text-cyan-300">docs/breaking-bad-universe.md</span> for canon facts</div>
<div class="text-gray-400">2. Query fanhub-db MCP for existing patterns</div>
<div class="text-gray-400">3. Use <span class="text-amber-300">create-card-and-page skill</span> to scaffold the full stack</div>
<div class="text-gray-400">4. Run <span class="text-amber-300">data-accuracy-check</span> on every seeded record</div>
<div class="text-gray-400">5. Follow <span class="text-cyan-300">.github/copilot-instructions.md</span> throughout</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">🔗 What this bundles</div>
<div class="space-y-2 text-xs">
<div class="p-2.5 bg-blue-900/20 rounded-lg border border-blue-500/20"><span class="text-blue-300 font-semibold">Module 1</span> <span class="text-gray-300">— universe context + coding standards from <code>copilot-instructions.md</code></span></div>
<div class="p-2.5 bg-orange-900/20 rounded-lg border border-orange-500/20"><span class="text-orange-300 font-semibold">Module 3/4</span> <span class="text-gray-300">— <code>data-accuracy-check</code> validates seed data before migration</span></div>
<div class="p-2.5 bg-purple-900/20 rounded-lg border border-purple-500/20"><span class="text-purple-300 font-semibold">Module 4</span> <span class="text-gray-300">— <code>create-card-and-page skill</code> scaffolds full stack: model → controller → Blazor page</span></div>
<div class="p-2.5 bg-cyan-900/20 rounded-lg border border-cyan-500/20"><span class="text-cyan-300 font-semibold">Module 5</span> <span class="text-gray-300">— live FanHub data via <code>fanhub-db</code> MCP server</span></div>
</div>
<div class="mt-3 p-3 bg-gray-900/50 rounded-lg border border-amber-500/20 text-xs text-gray-300">
<div class="text-amber-300 font-semibold mb-1">The planted error makes it concrete</div>
<div>One seeded quote has a wrong episode attribution. Without the agent, it ships. The <code>data-accuracy-check</code> skill catches it — before migration runs.</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">📁 .github/agents/content-author.agent.md · Five modules of investment. One instruction. One session.</div>
</div>

---
<!-- SLIDE: ✅ Module Checklist -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Module Checklist</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="mt-2 p-3 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-base text-white font-semibold mb-0.5">By the end of Module 6, the team understands how agents are designed — and has built one.</div>
<div class="text-xs text-gray-300">Three exercises. One arc: study the pattern → explore where it goes → build it yourself.</div>
</div>
<div class="grid grid-cols-3 gap-2 mt-3 text-left text-sm">
<div class="p-3 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sm">🧠</div>
<div>
<div class="text-blue-300 font-bold text-xs">Study the pattern</div>
<div class="text-xs text-gray-400 uppercase tracking-wider" style="font-size:0.6rem">Exercise 6.1</div>
</div>
</div>
<div class="space-y-1 text-gray-300 text-xs">
<div>• Explore subagent pattern — parallel research before planning</div>
<div>• Tool list as role boundary — what's absent is intentional</div>
<div>• Handoff chain: @plan → implementation</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30 shadow-lg shadow-emerald-900/20">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-sm">🚀</div>
<div>
<div class="text-emerald-300 font-bold text-xs">Explore Squad</div>
<div class="text-xs text-gray-400 uppercase tracking-wider" style="font-size:0.6rem">Exercise 6.2</div>
</div>
</div>
<div class="space-y-1 text-gray-300 text-xs">
<div>• The Explore pattern at team scale</div>
<div>• Persistent multi-agent coordination in VS Code</div>
<div>• Difference between a workflow preset and an agent team</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-amber-900/40 to-gray-900/50 border border-amber-500/40 shadow-lg shadow-amber-900/20">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-sm">⭐</div>
<div>
<div class="text-amber-300 font-bold text-xs">Build the capstone</div>
<div class="text-xs text-gray-400 uppercase tracking-wider" style="font-size:0.6rem">Exercise 6.3</div>
</div>
</div>
<div class="space-y-1 text-gray-300 text-xs">
<div>• @content-author wires M1–M5 in one agent</div>
<div>• Quotes entity scaffolded + validated in one instruction</div>
<div>• Every participant names the module behind each action</div>
</div>
</div>
</div>
<div class="mt-3 grid grid-cols-2 gap-3">
<div class="p-3 rounded-xl bg-gray-900/60 border border-white/10 text-left">
<div class="text-xs font-bold text-white mb-1">What good looks like</div>
<div class="text-xs text-gray-300">The team can read an agent config like architecture — and can write one that composes everything they've built since Module 1.</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-left">
<div class="text-xs font-bold text-white mb-1">Why this matters</div>
<div class="text-xs text-gray-300">Module 6 is where earlier investments — instructions, prompts, skills, MCP — stop feeling like separate tools and start working as a coordinated system.</div>
</div>
</div>
</div>

---
<!-- SLIDE: Module 6 Is Locked In -->
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
Module 6 Is Locked In
</h1>
<div class="relative z-10 mb-6">
<span class="px-5 py-2 bg-gradient-to-r from-purple-600/80 to-red-600/80 rounded-full text-white text-base font-medium shadow-lg shadow-purple-500/25">
🌐 Congratulations!
</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 max-w-5xl w-full px-6 mb-4">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/30 text-center">
<div class="text-xl mb-1">🧠</div>
<div class="text-blue-300 font-bold text-sm">You Studied the Pattern</div>
<div class="text-gray-400 text-xs mt-1">Explore subagents, tool boundaries, stopping rules, and handoff chains — read as architecture</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 rounded-xl border border-emerald-500/30 text-center">
<div class="text-xl mb-1">🚀</div>
<div class="text-emerald-300 font-bold text-sm">You Explored the Horizon</div>
<div class="text-gray-400 text-xs mt-1">Squad showed what agent workflows become when they're persistent, named, and coordinated</div>
</div>
<div class="p-3 bg-gradient-to-br from-amber-900/40 to-amber-800/20 rounded-xl border border-amber-500/40 text-center ring-1 ring-amber-400/30">
<div class="text-xl mb-1">⭐</div>
<div class="text-amber-300 font-bold text-sm">You Built the Capstone</div>
<div class="text-gray-400 text-xs mt-1">@content-author activated five modules of investment from a single instruction</div>
</div>
</div>
<div class="relative z-10 text-base text-gray-200 max-w-4xl px-10 mb-6 leading-snug text-center">
Module 6 is where the earlier customizations stop feeling like parts and start feeling like an operating model. <span class="text-white font-semibold">The team built something that compounds across every sprint from here.</span>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---
<!-- SLIDE: 💭 The Team, After Module 6 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💭 The Team, After Module 6</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-amber-400">
<div class="text-xs font-bold text-amber-300 mb-0.5">Jessica</div>
<div class="text-xs text-gray-500 italic mb-2">The Eager Junior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I built an agent today. A real one. It has a name, instructions, and it knows our show. I&#39;m going to show everyone."</div>
<div class="text-xs text-gray-500">Built something with her name on it.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-blue-400">
<div class="text-xs font-bold text-blue-300 mb-0.5">David</div>
<div class="text-xs text-gray-500 italic mb-2">The Seasoned Architect</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"A custom agent is a well-specified collaborator. Give it context, tools, and a clear mandate — and it operates consistently."</div>
<div class="text-xs text-gray-500">A collaborator, not a chatbot.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-green-400">
<div class="text-xs font-bold text-green-300 mb-0.5">Sarah</div>
<div class="text-xs text-gray-500 italic mb-2">The Skeptical Senior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"The content-author agent scaffolded the whole stack and caught an attribution error before migration. First pass. That&#39;s what five modules feels like when it&#39;s working."</div>
<div class="text-xs text-gray-500">Better first draft than three modules of iteration.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-purple-400">
<div class="text-xs font-bold text-purple-300 mb-0.5">Elena</div>
<div class="text-xs text-gray-500 italic mb-2">The Quality Champion</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"It has constraints, a persona, and escalation rules. It&#39;s the first AI tool I&#39;d actually trust in production."</div>
<div class="text-xs text-gray-500">The first AI tool she&#39;d sign off on for production.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-orange-400">
<div class="text-xs font-bold text-orange-300 mb-0.5">Marcus</div>
<div class="text-xs text-gray-500 italic mb-2">The DevOps Developer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I gave the agent a bad question on purpose. It said it didn&#39;t know and asked for clarification. That&#39;s the first time I&#39;ve trusted it."</div>
<div class="text-xs text-gray-500">Trusted it because it admitted uncertainty.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-cyan-400">
<div class="text-xs font-bold text-cyan-300 mb-0.5">Rafael</div>
<div class="text-xs text-gray-500 italic mb-2">The Product Visionary</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"One agent deployment covers every future content task for this feature. That&#39;s not velocity — that&#39;s leverage."</div>
<div class="text-xs text-gray-500">Leverage that compounds across every sprint.</div>
</div>
</div>
</div>
