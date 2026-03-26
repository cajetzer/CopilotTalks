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
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Built-In Agents You Already Have</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-4 text-left">

<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
<div class="flex items-center gap-3 mb-3">
<div class="text-2xl">⚡</div>
<div class="text-blue-300 font-bold text-lg">Copilot Coding Agent</div>
</div>
<div class="text-sm text-gray-300 mb-4">Assigns itself to a GitHub Issue, works autonomously in a sandboxed environment, and opens a pull request when done.</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">▸</span><span>Triggered from a GitHub Issue — assign Copilot as the owner</span></div>
<div class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">▸</span><span>Reads repo context, plans, implements, and runs tests in a secure cloud workspace</span></div>
<div class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">▸</span><span>Delivers a PR with a summary of decisions made</span></div>
</div>
<div class="mt-3 p-2 bg-blue-900/30 rounded-lg border border-blue-500/20 text-xs text-gray-300">
<span class="text-blue-300 font-semibold">Uses your workshop work:</span> respects repo instructions, invokes skills, and queries MCP servers — everything from Modules 1–5 shapes how it works.
</div>
<div class="mt-3 text-xs text-blue-300/70 italic">Best for: well-scoped tasks with a clear issue description</div>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
<div class="flex items-center gap-3 mb-3">
<div class="text-2xl">🔍</div>
<div class="text-purple-300 font-bold text-lg">Copilot Code Review</div>
</div>
<div class="text-sm text-gray-300 mb-4">Reviews pull requests automatically and leaves inline comments with actionable suggestions — no setup required.</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-start gap-2"><span class="text-purple-400 mt-0.5">▸</span><span>Request a review from <code>@github-copilot</code> on any PR</span></div>
<div class="flex items-start gap-2"><span class="text-purple-400 mt-0.5">▸</span><span>Surfaces logic issues, missing edge cases, and style inconsistencies</span></div>
<div class="flex items-start gap-2"><span class="text-purple-400 mt-0.5">▸</span><span>Can be configured with custom review instructions in repo settings</span></div>
</div>
<div class="mt-3 p-2 bg-purple-900/30 rounded-lg border border-purple-500/20 text-xs text-gray-300">
<span class="text-purple-300 font-semibold">Uses your workshop work:</span> respects repo instructions and invokes skills — your Module 1 and 4 work directly improves review quality.
</div>
<div class="mt-3 text-xs text-purple-300/70 italic">Best for: a fast first-pass review before human reviewers engage</div>
</div>

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-blue-900/25 via-purple-900/20 to-orange-900/15 rounded-xl border border-white/10 text-center">
<div class="text-sm text-white font-semibold">These are GitHub-hosted agents. Module 6 is about <span class="text-orange-300">your own</span> — purpose-built for the FanHub workflow.</div>
</div>
---

<!-- SLIDE: 🎯 What Youll Build -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 What You'll Build</span>
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
---

<!-- SLIDE: 📚 What Custom Agents Actually Are -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 What Custom Agents Actually Are</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">A role-specific operating mode</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>YAML frontmatter defines tools, model, handoffs, and related controls</li>
      <li>Markdown instructions define the workflow and constraints</li>
      <li>The agent appears as a reusable preset for a specific kind of work</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">A way to encode workflow boundaries</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Review agents can be read-only</li>
      <li>Implementation agents can have edit tools</li>
      <li>Handoffs connect roles without collapsing their boundaries</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">A place where earlier customizations meet</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Repository instructions still guide behavior</li>
      <li>Skills can provide domain workflow support</li>
      <li>MCP access can add live context where the role needs it</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/30 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">The real payoff</div>
    <div class="text-sm text-gray-300">You stop re-explaining the mode of work and start selecting the right teammate for the job.</div>
  </div>

</div>
---

<!-- SLIDE: 🔄 Agents vs Instructions vs Skills vs MCP -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Agents vs Instructions vs Skills vs MCP</span>
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
---

<!-- SLIDE: ⚙️ Core Agent Design Patterns -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Core Agent Design Patterns</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Tool selection is policy</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Read-only tools enforce research or review boundaries</li>
      <li>Editing tools should only appear where implementation is expected</li>
      <li>The tool list shapes the behavior as much as the prompt does</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Instructions define the workflow</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Stopping rules prevent scope creep</li>
      <li>Style guides make output more consistent</li>
      <li>Ordered phases reduce improvisation</li>
    </ul>
  </div>

</div>

<div class="mt-8 grid grid-cols-3 gap-5 text-left">
  <div class="p-4 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-2">Handoffs</div>
    <div class="text-sm text-gray-300">Turn isolated tasks into guided workflows from one role to the next.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-2">Model and scope controls</div>
    <div class="text-sm text-gray-300">Pick the environment and invocation pattern that fit the job.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-2">Workspace vs web</div>
    <div class="text-sm text-gray-300">Some workflows stay focused and local. Others hint at broader team orchestration.</div>
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
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 What to Validate in the Workshop</span>
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
---

<!-- SLIDE: 🔨 Exercise Roadmap -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercise Roadmap</span>
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
    <div class="text-base font-bold text-blue-300 mb-2 leading-tight">Understand the Default Plan Agent</div>
    <div class="text-xs text-gray-300 mb-3 leading-snug">Study a strong built-in pattern before creating your own.</div>
    <div class="text-xs text-gray-400">Lead: All ⭐</div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-xs font-bold border border-purple-400/30">6.2</span>
      <span class="text-xs text-gray-400">15 min</span>
    </div>
    <div class="text-base font-bold text-purple-300 mb-2 leading-tight">Create Character Review Agent</div>
    <div class="text-xs text-gray-300 mb-3 leading-snug">Package the prompt, skill, and MCP workflow into one review role.</div>
    <div class="text-xs text-gray-400">Lead: Elena ⭐</div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 rounded-full bg-orange-500/20 text-orange-200 text-xs font-bold border border-orange-400/30">6.3</span>
      <span class="text-xs text-gray-400">15 min</span>
    </div>
    <div class="text-base font-bold text-orange-300 mb-2 leading-tight">Create Implementation Agent</div>
    <div class="text-xs text-gray-300 mb-3 leading-snug">Give Feature Spec execution its own editing role, then hand off to review.</div>
    <div class="text-xs text-gray-400">Lead: Sarah ⭐</div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-indigo-900/40 to-gray-900/50 border border-indigo-500/30">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-bold border border-indigo-400/30">6.4</span>
      <span class="text-xs text-gray-400">15 min</span>
    </div>
    <div class="text-base font-bold text-indigo-300 mb-2 leading-tight">Sharpen the Feature Spec</div>
    <div class="text-xs text-gray-300 mb-3 leading-snug">Use plan mode to audit and improve the spec before the implementation agent reads it.</div>
    <div class="text-xs text-gray-400">Lead: David ⭐</div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-emerald-900/30 to-blue-900/20 border border-emerald-500/30">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold border border-emerald-400/30">6.5</span>
      <span class="text-xs text-gray-400">15 min</span>
    </div>
    <div class="text-base font-bold text-emerald-300 mb-2 leading-tight">Explore Agent Teams with Squad</div>
    <div class="text-xs text-gray-300 mb-3 leading-snug">End with a VS Code-first look at persistent multi-agent collaboration.</div>
    <div class="text-xs text-gray-400">Lead: Marcus ⭐</div>
  </div>

</div>

<div class="mt-3 p-4 rounded-xl bg-gradient-to-br from-amber-900/40 via-orange-900/30 to-amber-900/40 border border-amber-500/40 text-left">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-bold border border-amber-400/30">6.6</span>
      <span class="text-base font-bold text-amber-300">The Show-Expert Agent</span>
      <span class="px-2 py-0.5 bg-amber-500/20 rounded-full text-amber-200 text-[10px] border border-amber-400/30">⭐ CAPSTONE — Five Modules, One Agent, Zero Setup</span>
    </div>
    <div class="flex gap-3 text-xs text-gray-400">
      <span>Lead: All ⭐🤝</span>
      <span>20 min</span>
    </div>
  </div>
  <div class="mt-2 text-xs text-gray-300">Create <code>@[show]-expert</code> — bundles universe context (M1), accuracy-check standards (M3), lore skill (M4), and live MCP data (M5) into one zero-setup entry point that hands off to <code>@implement</code>.</div>
</div>

<div class="mt-4 p-3 bg-gray-900/60 rounded-xl border border-white/10 text-center">
  <div class="text-sm text-white font-semibold">One arc: pattern → review → spec → implementation → agent team → capstone.</div>
</div>
---

<!-- SLIDE: 🔗 Compounding Value -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Compounding Value</span>
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

<div class="mt-8 text-center text-lg text-yellow-300">
  Module 6 is the orchestration layer that turns separate customizations into repeatable delivery patterns.
</div>
---

<!-- SLIDE: 🔨 Exercises -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">�� Exercises</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-4 shadow-lg shadow-orange-900/20">
<div class="text-lg font-bold text-white">6 exercises · ~90 minutes · shared leadership</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-blue-300 font-bold text-base">6.1</div>
<span class="text-xs text-gray-500">All ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Study the pattern</div>
<div class="text-gray-400 text-xs leading-snug">Analyze existing agents to understand the agent.md structure and conventions</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-purple-300 font-bold text-base">6.2</div>
<span class="text-xs text-gray-500">Elena ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Package review</div>
<div class="text-gray-400 text-xs leading-snug">Build a code review agent from the template with domain-specific rules</div>
</div>
<div class="p-3 bg-orange-900/30 rounded-lg border border-orange-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-orange-300 font-bold text-base">6.3</div>
<span class="text-xs text-gray-500">Sarah ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Connect delivery</div>
<div class="text-gray-400 text-xs leading-snug">Wire a custom agent into the delivery pipeline as an automated check</div>
</div>
<div class="p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-indigo-300 font-bold text-base">6.4</div>
<span class="text-xs text-gray-500">David ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Sharpen the spec</div>
<div class="text-gray-400 text-xs leading-snug">Refine agent instructions until outputs are consistent and accurate</div>
</div>
<div class="p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-emerald-300 font-bold text-base">6.5</div>
<span class="text-xs text-gray-500">Marcus ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">See the horizon</div>
<div class="text-gray-400 text-xs leading-snug">Explore what fully customized agents unlock for your team's workflow</div>
</div>
<div class="p-3 bg-amber-900/30 rounded-lg border border-amber-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-amber-300 font-bold text-base">6.6</div>
<span class="text-xs text-gray-500">Sarah ⭐ capstone</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Build the capstone</div>
<div class="text-gray-400 text-xs leading-snug">Create a complete show-expert agent bundling every skill from the workshop</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-900/40 rounded-lg border border-white/10 text-center text-xs text-gray-400">
Each exercise rotates the lead persona — everyone contributes, everyone follows.
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
<h2 class="!text-2xl !font-bold text-white !m-0">Understand the Default Plan Agent</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">All ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-blue-400 text-sm text-gray-300">
Before building custom agents, the team needs a mental model for how a well-designed agent uses tools, instructions, and handoffs. <strong class="text-white">This exercise studies the default <code>@plan</code> agent so the team can borrow production-quality patterns before writing its own configurations.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Study frontmatter, stopping rules, workflow, and handoffs in the default plan agent</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Identify which tools are present and which are intentionally absent</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Capture the frontmatter and workflow patterns worth reusing in team agents</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The team can explain how the default agent stays in role</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Key configuration concepts are clear before customization starts</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Everyone leaves with a trustworthy reference pattern to borrow from</div>
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

<!-- SLIDE: Character-detail review still takes repeated setup -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">6.2</div>
<div>
<div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Create Character Review Agent</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Elena ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-purple-400 text-sm text-gray-300">
Character-detail review still takes repeated setup unless the prompt, skill, and MCP workflow are packaged into one reusable role. <strong class="text-white">This exercise creates a read-only <code>@character-review</code> agent that reuses the established review workflow and knows when live FanHub data matters.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create the review agent frontmatter and instructions</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Package the prompt, skill, and MCP escalation path into one reusable role</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Confirm it stays analysis-only and returns tests, edge cases, and follow-up work</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Review setup overhead drops sharply</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Prompt, skill, and MCP behavior become easier to trigger consistently</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Output stays focused on tests, risks, and follow-up work</div>
</div>
<div class="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-xs text-gray-300 italic">💭 <strong class="text-purple-300">Elena:</strong> "Okay, but what happens when one step fails mid-workflow? If this is supposed to feel like one teammate, I need to know exactly where it can drop the baton — because it will, and I want to be the one who finds it first."</div>
<div class="text-xs text-gray-400">One preset. Three modules of work. Zero repeated setup.</div>
</div>
</div>
</div>
---

<!-- SLIDE: 📋 Example: character-review.agent.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: character-review.agent.md</span>
</div>
<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-purple-300">---</div>
<div class="text-blue-300">name: <span class="text-green-300">Character Review</span></div>
<div class="text-blue-300">description: <span class="text-green-300">Review character-detail changes with prompt + skill + MCP workflow</span></div>
<div class="text-blue-300">tools: <span class="text-orange-300">['search', 'fetch', 'usages', 'problems']</span></div>
<div class="text-blue-300">model: <span class="text-green-300">Claude Sonnet 4</span></div>
<div class="text-blue-300">handoffs:</div>
<div class="pl-4 text-blue-300">- label: <span class="text-green-300">Fix Character Issues</span></div>
<div class="pl-6 text-blue-300">agent: <span class="text-green-300">implement</span></div>
<div class="pl-6 text-blue-300">send: <span class="text-orange-300">false</span></div>
<div class="text-purple-300">---</div>
<div class="mt-2 text-gray-400"># Character Review Mode</div>
<div class="text-gray-400">Analysis only. Do not modify files.</div>
<div class="mt-2 text-gray-400">1. Apply the character-review-prompt workflow</div>
<div class="text-gray-400">2. Use character-change-test-workflow skill</div>
<div class="text-gray-400">3. Consult <span class="text-cyan-300">#mcp-fanhub-db</span> if duplicate records may affect behavior</div>
<div class="text-gray-400">4. Return tests, edge cases, cleanup, and guardrails</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">📁 .github/agents/character-review.agent.md · Prompt + skill + MCP in one read-only role</div>
</div>
---

<!-- SLIDE: Even with a strong specification, implementation c -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">6.3</div>
<div>
<div class="text-orange-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Create Implementation Agent for Feature Spec Execution</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
Even with a strong specification, implementation can become ad hoc, incomplete, or out of order if the workflow is not packaged well. <strong class="text-white">This exercise creates an implementation agent that reads Feature Specs, executes in a sensible order, and hands off directly into character review when done.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Define editing tools, implementation instructions, and the handoff boundary</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Test the agent against a feature Feature Spec that changes the character experience</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Confirm the implementation flow is systematic and ends in review by default</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Completeness improves versus manual implementation</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Execution order becomes more reliable</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Character-review handoff becomes part of the default path</div>
</div>
<div class="mt-4 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30 text-xs text-gray-300 italic">💭 <strong class="text-orange-300">Sarah:</strong> "Review as an afterthought has a cost. We just never measure it. If this makes it structural, show me the before/after on escape defects — that’s the number I actually care about."</div>
<div class="text-xs text-gray-400">Agents make review part of delivery, not an afterthought.</div>
</div>
</div>
</div>
---

<!-- SLIDE: 📋 Example: implement.agent.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: implement.agent.md</span>
</div>
<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-purple-300">---</div>
<div class="text-blue-300">name: <span class="text-green-300">Implement</span></div>
<div class="text-blue-300">description: <span class="text-green-300">Implement features from Feature Specs with full editing capabilities</span></div>
<div class="text-blue-300">tools: <span class="text-orange-300">['edit', 'create', 'delete', 'search', 'fetch', 'githubRepo', 'usages', 'problems']</span></div>
<div class="text-blue-300">model: <span class="text-green-300">Claude Sonnet 4</span></div>
<div class="text-blue-300">handoffs:</div>
<div class="pl-4 text-blue-300">- label: <span class="text-green-300">Review Character Change</span></div>
<div class="pl-6 text-blue-300">agent: <span class="text-green-300">character-review</span></div>
<div class="pl-6 text-blue-300">send: <span class="text-orange-300">false</span></div>
<div class="text-purple-300">---</div>
<div class="mt-2 text-gray-400"># Implementation Mode</div>
<div class="text-gray-400">Read the Feature Spec. Plan execution order.</div>
<div class="text-gray-400">Implement: database → backend → frontend → tests</div>
<div class="text-gray-400">Handoff to @character-review when complete.</div>
<div class="mt-2 text-cyan-300">// Feature Spec is the source of truth — implement everything it specifies</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">📁 .github/agents/implement.agent.md · Full editing tools + Feature Spec-driven workflow + handoff to review</div>
</div>
---

<!-- SLIDE: Exercise 6.4 — Sharpen the Feature Spec -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30 flex-shrink-0">6.4</div>
<div>
<div class="text-indigo-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Sharpen the Feature Spec for the Implementation Agent</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">David ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-indigo-400 text-sm text-gray-300">
<strong class="text-white">Great implementation needs a great spec.</strong> Use <code>@plan</code> to improve <code></code>, with real context to produce a spec the <code>@implement</code> agent can execute without guessing.
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-indigo-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300"><code>/plan Improve fanhub/docs/FEATURE-CHARACTER-DETAIL.md using mcp, skills and architecture.md.</code></span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-indigo-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Let plan mode research the codebase to resolve ambiguous sections and fill missing details</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-indigo-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Save the improved spec, then run <code>/implement</code> — compare results against using the original</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The spec has concrete API shapes, migration details, and test expectations</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Ambiguous sections are resolved with actual codebase evidence</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> <code>/implement</code> produces more complete, reliable results from the improved spec</div>
</div>
<div class="mt-4 p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/30 text-xs text-gray-300 italic">💭 <strong class="text-indigo-300">David:</strong> "Technically, ambiguity in the spec is just ambiguity in the output with extra latency. Plan mode doesn’t fix a bad spec — it surfaces the gaps before they become load-bearing implementation decisions. That distinction matters."</div>
</div>
</div>
</div>
---

<!-- SLIDE: 📋 Example: @plan improving FEATURE-CHARACTER-DETA -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: @plan improving FEATURE-CHARACTER-DETAIL.md</span>
</div>
<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-gray-400"># @plan — review FEATURE-CHARACTER-DETAIL.md for implementation readiness</div>
<div class="mt-2 text-orange-300">## Gaps identified:</div>
<div class="mt-1 text-gray-400">❌ API response shape not specified — searched routes/characters.js</div>
<div class="pl-4 text-green-300">✓ Added: GET /api/characters/:id returns { id, name, displayName, bio, imageUrl, status }</div>
<div class="mt-1 text-gray-400">❌ Database migration missing — inspected schema/characters.sql</div>
<div class="pl-4 text-green-300">✓ Added: ALTER TABLE characters ADD COLUMN status VARCHAR(20) DEFAULT 'active'</div>
<div class="mt-1 text-gray-400">❌ Test expectations vague — cross-referenced existing test patterns</div>
<div class="pl-4 text-green-300">✓ Added: unit test for null displayName fallback, integration test for 404 on unknown id</div>
<div class="mt-2 text-cyan-300">// Spec: 3 pages → 5 pages with concrete, verifiable requirements</div>
<div class="text-cyan-300">// @implement can now execute without interpretation gaps</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">📁 fanhub/docs/FEATURE-CHARACTER-DETAIL.md · Plan mode turns a design doc into an implementation contract</div>
</div>
---

<!-- SLIDE: Single custom agents solve focused workflow proble -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30 flex-shrink-0">6.5</div>
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


<!-- SLIDE: Exercise 6.6 — The Show-Expert Agent (Capstone) -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/25 via-yellow-900/10 to-orange-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-500/30 flex-shrink-0">6.6</div>
<div>
<div class="flex items-center gap-2">
<div class="text-amber-300 text-xs font-semibold tracking-widest uppercase">Exercise · CAPSTONE</div>
<span class="px-2 py-0.5 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full text-amber-200 text-[10px] font-bold border border-amber-400/40">⭐ Five Modules, One Agent</span>
</div>
<h2 class="!text-2xl !font-bold text-white !m-0">The Show-Expert Agent</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">All ⭐🤝</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 20 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-4 bg-gray-900/60 rounded-xl border-l-4 border-amber-400 text-sm text-gray-300">
Starting a session still means reconstructing context — universe file, lore skill, MCP, accuracy-check prompt — <em>every time</em>. <strong class="text-white">This capstone creates <code>@[show]-expert</code>: a single agent that bundles every show-specific capability from all five modules into one zero-setup entry point that hands off to <code>@implement</code>.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">📋 Steps</div>
<div class="space-y-1.5 text-xs">
<div class="flex items-start gap-3 p-2.5 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create <code>.github/agents/[show]-expert.agent.md</code> with <code>mode: ask</code>, lore skill reference, and MCP server</span></div>
<div class="flex items-start gap-3 p-2.5 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Add <code>handoffs</code> block passing to <code>@implement</code> when content changes are ready to apply</span></div>
<div class="flex items-start gap-3 p-2.5 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Run all 4 scenarios: lore query, accuracy error catch, MCP + canon cross-check, constrained generation</span></div>
<div class="flex items-start gap-3 p-2.5 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Debrief: map each scenario to the module that enabled it — every participant fills in the table</span></div>
</div>
</div>
<div class="space-y-2">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✅ Success Criteria</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Session setup time drops from 4+ min to ~0</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Agent catches the seeded bio error and cites the lore resource it drew from</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Agent queries MCP and evaluates against canon in a single turn</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Agent refuses code edits and redirects to <code>@implement</code></div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Every participant names the module behind each scenario</div>
</div>
<div class="mt-3 p-3 bg-amber-900/30 rounded-lg border border-amber-500/30 text-xs text-gray-300 italic">💭 <strong class="text-amber-300">Sarah:</strong> "This is what five modules of progressive customization feels like when it snaps together. Everything we built is in here — and it just knows."</div>
</div>
</div>
</div>
---

<!-- SLIDE: 📋 Example: [show]-expert.agent.md — the capstone config -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: [show]-expert.agent.md</span>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="bg-gray-950/80 rounded-xl border border-amber-500/30 font-mono text-xs p-4 text-gray-300 overflow-auto leading-relaxed">
<div class="text-purple-300">---</div>
<div class="text-blue-300">name: <span class="text-green-300">breaking-bad-expert</span></div>
<div class="text-blue-300">description: <span class="text-green-300">"Expert in Breaking Bad canon, FanHub accuracy, and content review"</span></div>
<div class="text-blue-300">tools:</div>
<div class="pl-4 text-blue-300">- type: <span class="text-orange-300">skill</span></div>
<div class="pl-6 text-blue-300">path: <span class="text-green-300">.github/skills/breaking-bad-lore</span></div>
<div class="pl-4 text-blue-300">- type: <span class="text-orange-300">mcp</span></div>
<div class="pl-6 text-blue-300">server: <span class="text-green-300">fanhub-db</span></div>
<div class="text-blue-300">mode: <span class="text-orange-300">ask</span></div>
<div class="text-blue-300">handoffs:</div>
<div class="pl-4 text-blue-300">- agent: <span class="text-green-300">implement</span></div>
<div class="pl-6 text-blue-300">label: <span class="text-green-300">"Apply this to FanHub"</span></div>
<div class="pl-6 text-blue-300">prompt: <span class="text-green-300">"Implement the recommended content changes."</span></div>
<div class="text-purple-300">---</div>
<div class="mt-2 text-gray-400"># No code edits. Redirects to @implement.</div>
<div class="mt-1 text-amber-300">// mode: ask = read-only, analysis only</div>
<div class="text-amber-300">// tools: skill + mcp = M4 lore + M5 live data</div>
<div class="text-amber-300">// handoff = M6 agent-to-agent transition</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">🔗 What this bundles</div>
<div class="space-y-2 text-xs">
<div class="p-2.5 bg-blue-900/20 rounded-lg border border-blue-500/20"><span class="text-blue-300 font-semibold">Module 1</span> <span class="text-gray-300">— universe context in <code>docs/[show]-universe.md</code></span></div>
<div class="p-2.5 bg-orange-900/20 rounded-lg border border-orange-500/20"><span class="text-orange-300 font-semibold">Module 3</span> <span class="text-gray-300">— accuracy-check standards from <code>prompts/</code></span></div>
<div class="p-2.5 bg-purple-900/20 rounded-lg border border-purple-500/20"><span class="text-purple-300 font-semibold">Module 4</span> <span class="text-gray-300">— lore skill: characters, seasons, canon-facts</span></div>
<div class="p-2.5 bg-cyan-900/20 rounded-lg border border-cyan-500/20"><span class="text-cyan-300 font-semibold">Module 5</span> <span class="text-gray-300">— live FanHub data via <code>fanhub-db</code> MCP server</span></div>
<div class="p-2.5 bg-amber-900/20 rounded-lg border border-amber-500/30"><span class="text-amber-300 font-semibold">Module 6</span> <span class="text-gray-300">— agent config, <code>mode: ask</code>, handoff to <code>@implement</code></span></div>
</div>
<div class="mt-3 p-3 bg-gray-900/50 rounded-lg border border-amber-500/20 text-xs text-gray-300">
<div class="text-amber-300 font-semibold mb-1">4 min setup → 0 min setup</div>
<div>4 min avg × 3 sessions/day × 20 days/sprint = <span class="text-white font-bold">240 min/sprint</span> in setup overhead eliminated.</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">📁 .github/agents/[show]-expert.agent.md · Five modules, one entry point, zero repeated setup</div>
</div>
---
<!-- SLIDE: ✅ Module Checklist -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Module Checklist</span>
</div>
<div class="mt-2 p-3 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-base text-white font-semibold mb-0.5">By the end of Module 6, the team has a real character-agent workflow.</div>
<div class="text-xs text-gray-300">Not just agent files. A review role, an implementation role, a handoff between them, and a clear sense of what comes next.</div>
</div>
<div class="grid grid-cols-3 gap-2 mt-3 text-left text-sm">
<div class="p-3 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sm">��</div>
<div>
<div class="text-blue-300 font-bold text-xs">Study the pattern</div>
<div class="text-xs text-gray-400 uppercase tracking-wider" style="font-size:0.6rem">Exercise 6.1</div>
</div>
</div>
<div class="space-y-1 text-gray-300 text-xs">
<div>• Learn how a production agent stays in role</div>
<div>• Borrow the strongest frontmatter ideas</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-sm">🧪</div>
<div>
<div class="text-purple-300 font-bold text-xs">Package review</div>
<div class="text-xs text-gray-400 uppercase tracking-wider" style="font-size:0.6rem">Exercise 6.2</div>
</div>
</div>
<div class="space-y-1 text-gray-300 text-xs">
<div>• Prompt + skill + MCP into one review role</div>
<div>• Make character review instant and repeatable</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30 shadow-lg shadow-orange-900/20">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-sm">🛠️</div>
<div>
<div class="text-orange-300 font-bold text-xs">Connect delivery</div>
<div class="text-xs text-gray-400 uppercase tracking-wider" style="font-size:0.6rem">Exercise 6.3</div>
</div>
</div>
<div class="space-y-1 text-gray-300 text-xs">
<div>• Build from the Feature Spec with full tools</div>
<div>• Hand off into review when implementation ends</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-indigo-900/40 to-gray-900/50 border border-indigo-500/30 shadow-lg shadow-indigo-900/20">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-sm">📋</div>
<div>
<div class="text-indigo-300 font-bold text-xs">Sharpen the spec</div>
<div class="text-xs text-gray-400 uppercase tracking-wider" style="font-size:0.6rem">Exercise 6.4</div>
</div>
</div>
<div class="space-y-1 text-gray-300 text-xs">
<div>• Use plan mode to audit the Feature Spec</div>
<div>• Fill gaps with real codebase context</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30 shadow-lg shadow-emerald-900/20">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-sm">🚀</div>
<div>
<div class="text-emerald-300 font-bold text-xs">See the horizon</div>
<div class="text-xs text-gray-400 uppercase tracking-wider" style="font-size:0.6rem">Exercise 6.5</div>
</div>
</div>
<div class="space-y-1 text-gray-300 text-xs">
<div>• Install Squad and initialize a persistent team</div>
<div>• See what multi-agent collaboration could become</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-amber-900/40 to-gray-900/50 border border-amber-500/40 shadow-lg shadow-amber-900/20">
<div class="flex items-center gap-2 mb-2">
<div class="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-sm">⭐</div>
<div>
<div class="text-amber-300 font-bold text-xs">Build the capstone</div>
<div class="text-xs text-gray-400 uppercase tracking-wider" style="font-size:0.6rem">Exercise 6.6</div>
</div>
</div>
<div class="space-y-1 text-gray-300 text-xs">
<div>• Bundle all 5 modules into one expert agent</div>
<div>• Zero-setup show knowledge, all modules compounding</div>
</div>
</div>
</div>
<div class="mt-3 grid grid-cols-2 gap-3">
<div class="p-3 rounded-xl bg-gray-900/60 border border-white/10 text-left">
<div class="text-xs font-bold text-white mb-1">What good looks like</div>
<div class="text-xs text-gray-300">Review, implementation, spec sharpening, Squad, and a capstone expert agent — six exercises that turn separate customizations into a complete operating model.</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-left">
<div class="text-xs font-bold text-white mb-1">Why this matters</div>
<div class="text-xs text-gray-300">Module 6 is where the earlier customizations stop feeling like parts and start feeling like an operating model the team can actually use.</div>
</div>
</div>
---

---

<!-- SLIDE: 📚 Keep the Foundation Evergreen -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 Keep the Foundation Evergreen</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div><div class="mt-4 p-5 bg-gradient-to-r from-blue-900/25 via-purple-900/25 to-orange-900/20 rounded-2xl border border-white/10 text-center">
<div class="text-lg font-bold text-white">The capstone: make the whole system discoverable.</div>
<div class="text-sm text-gray-300 mt-2">Update <span class="font-mono text-blue-200">ARCHITECTURE.md</span> and <span class="font-mono text-purple-200">.github/copilot-instructions.md</span> to document the full agent system — the team's guide to their own AI workflow.</div>
</div><div class="grid grid-cols-2 gap-5 mt-4 text-left">
<div class="p-5 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">🏗️</div>
<div>
<div class="text-blue-300 font-bold">Document the agent system</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">ARCHITECTURE.md</div>
</div>
</div>
<div class="text-sm text-gray-300 space-y-2">
<div>Add an agents section: each agent's role, tool access, handoff patterns, and how they compose with skills and MCP.</div>
<div class="text-blue-200">New team members should be able to read this and understand the full AI workflow at a glance.</div>
</div>
</div>
<div class="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🧭</div>
<div>
<div class="text-purple-300 font-bold">Make instructions a workflow guide</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">copilot-instructions.md</div>
</div>
</div>
<div class="text-sm text-gray-300 space-y-2">
<div>Map each common task to the right agent — which to use for review, implementation, planning, and show-expert queries.</div>
<div class="text-purple-200">Instructions that say "use @character-review for X" are 10× more useful than generic guidance.</div>
</div>
</div>
</div><div class="mt-4 p-4 rounded-xl bg-gray-900/60 border border-white/10 text-center">
<div class="text-sm text-yellow-300 font-semibold">Six modules of work only compounds if the team can find and use what they built.</div>
</div>
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
<div class="relative z-10 grid grid-cols-3 gap-3 max-w-6xl w-full px-6 mb-4">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/30 text-center">
<div class="text-xl mb-1">🧠</div>
<div class="text-blue-300 font-bold text-sm">You Studied the Pattern</div>
<div class="text-gray-400 text-xs mt-1">The default <code>@plan</code> agent gave you a production reference point</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xl mb-1">🧪</div>
<div class="text-purple-300 font-bold text-sm">You Packaged Review</div>
<div class="text-gray-400 text-xs mt-1">Character review now bundles the prompt, skill, and MCP-aware workflow</div>
</div>
<div class="p-3 bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30 text-center">
<div class="text-xl mb-1">🛠️</div>
<div class="text-orange-300 font-bold text-sm">You Connected Delivery</div>
<div class="text-gray-400 text-xs mt-1">Implementation and review now meet through a deliberate handoff</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 rounded-xl border border-indigo-500/30 text-center">
<div class="text-xl mb-1">📋</div>
<div class="text-indigo-300 font-bold text-sm">You Sharpened the Spec</div>
<div class="text-gray-400 text-xs mt-1">Plan mode turned a design doc into an implementation contract</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 rounded-xl border border-emerald-500/30 text-center">
<div class="text-xl mb-1">🚀</div>
<div class="text-emerald-300 font-bold text-sm">You Saw the Horizon</div>
<div class="text-gray-400 text-xs mt-1">Squad showed what agent workflows might become at a team scale</div>
</div>
<div class="p-3 bg-gradient-to-br from-amber-900/40 to-amber-800/20 rounded-xl border border-amber-500/40 text-center ring-1 ring-amber-400/30">
<div class="text-xl mb-1">⭐</div>
<div class="text-amber-300 font-bold text-sm">You Built the Capstone</div>
<div class="text-gray-400 text-xs mt-1">Five modules of expertise bundled into one zero-setup expert agent</div>
</div>
</div>
<div class="relative z-10 text-base text-gray-200 max-w-4xl px-10 mb-6 leading-snug text-center">
Module 6 is where the earlier customizations stop feeling like parts and start feeling like an operating model. <span class="text-white font-semibold">From here, the team is ready to explore how those workflows extend beyond the core editor experience.</span>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>
---

<!-- SLIDE: The workflow feels different now -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-8 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-orange-900/20"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/12 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/12 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 text-center mb-6">
<div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Module 6 impact</div>
<h1 class="!text-3xl !font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent !mb-2">
The workflow feels different now
</h1>
<div class="text-sm text-gray-300 max-w-4xl mx-auto">
Less setup, clearer handoffs, and a better sense of how Copilot fits into real team delivery.
</div>
</div>

<div class="relative z-10 grid grid-cols-5 gap-3">
<div class="p-4 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30">
<div class="text-orange-300 font-bold text-sm mb-2">Sarah</div>
<div class="text-sm text-white leading-snug mb-3">“The real win is not just faster implementation — it’s making review the natural next step instead of an afterthought.”</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30">
<div class="text-emerald-300 font-bold text-sm mb-2">Marcus</div>
<div class="text-sm text-white leading-snug mb-3">“This is the first time I can really picture agent workflows scaling beyond one specialized role at a time.”</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30">
<div class="text-blue-300 font-bold text-sm mb-2">David</div>
<div class="text-sm text-white leading-snug mb-3">“What I like here is that the agent doesn’t replace judgment — it gives the team a stronger operating model for using it.”</div>
<div class="text-xs text-gray-400">Good agents don't replace judgment — they give it structure.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
<div class="text-purple-300 font-bold text-sm mb-2">Elena</div>
<div class="text-sm text-white leading-snug mb-3">“Now the full character-review workflow feels like one teammate instead of three separate setup steps.”</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-gray-900/50 border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-sm mb-2">Rafael</div>
<div class="text-sm text-white leading-snug mb-3">“This is the first module where I can see requirements, implementation, and review connecting as one delivery story.”</div>
<div class="text-xs text-gray-400">When everything connects, the whole system feels intentional.</div>
</div>
</div>

<div class="relative z-10 mt-6 p-3 rounded-xl bg-gradient-to-r from-purple-900/25 via-blue-900/20 to-orange-900/20 border border-white/10 text-center">
<div class="text-white font-semibold">Agents turn customization into collaboration.</div>
<div class="text-xs text-gray-300 mt-1">That shift is what the whole team actually feels in day-to-day work.</div>
</div>
</div>

---

<!-- SLIDE: Reference Material -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-10 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/15 via-gray-900/40 to-cyan-900/15"></div>
<div class="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 text-center mb-5">
<div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Further Reading</div>
<h1 class="!text-3xl !font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent !mb-0">Reference Material</h1>
<div class="text-sm text-gray-400 mt-1">Official documentation for Module 6 — Custom Agents</div>
</div>

<div class="relative z-10 grid grid-cols-2 gap-3">
<a href="https://code.visualstudio.com/docs/copilot/customization/custom-agents" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-indigo-500/40 transition-colors no-underline">
<div class="font-semibold text-indigo-300 text-sm mb-1">Custom Agents in VS Code</div>
<div class="text-xs text-gray-400">Defining agent modes with .agent.md files, tool constraints, and handoffs</div>
</a>
<a href="https://code.visualstudio.com/docs/copilot/agents/subagents" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-blue-500/40 transition-colors no-underline">
<div class="font-semibold text-blue-300 text-sm mb-1">Subagents Documentation</div>
<div class="text-xs text-gray-400">Orchestrating work across multiple specialized agents</div>
</a>
<a href="https://code.visualstudio.com/docs/copilot/agents/overview" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/40 transition-colors no-underline">
<div class="font-semibold text-cyan-300 text-sm mb-1">Agents Overview in VS Code</div>
<div class="text-xs text-gray-400">Architecture of agent mode, modes, tool access, and skill integration</div>
</a>
<a href="https://agents.md/" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-indigo-500/40 transition-colors no-underline">
<div class="font-semibold text-indigo-300 text-sm mb-1">AGENTS.md Open Format</div>
<div class="text-xs text-gray-400">Cross-agent playbook convention for sharing agent instructions</div>
</a>
<a href="https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-blue-500/40 transition-colors no-underline">
<div class="font-semibold text-blue-300 text-sm mb-1">Managing Copilot in Your Organization</div>
<div class="text-xs text-gray-400">Governing agent configurations and policies at scale</div>
</a>
<a href="https://docs.github.com/en/rest/copilot/copilot-metrics" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/40 transition-colors no-underline">
<div class="font-semibold text-cyan-300 text-sm mb-1">Copilot Metrics REST API</div>
<div class="text-xs text-gray-400">Measuring agent adoption, acceptance rates, and impact across teams</div>
</a>
</div>
</div>
