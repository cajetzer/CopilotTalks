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
updated: 2026-03-25
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
</div>

---

# 📖 Story So Far

<div class="grid grid-cols-6 gap-3 mt-8 text-left">

  <div class="p-4 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-xl mb-2">📚</div>
    <div class="font-bold text-blue-300 mb-2">1</div>
    <div class="text-sm text-gray-300">Repo and path-based instructions defined expected behavior.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-xl mb-2">🧩</div>
    <div class="font-bold text-purple-300 mb-2">2</div>
    <div class="text-sm text-gray-300">Plan mode taught the team to research before implementing.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-xl mb-2">🔁</div>
    <div class="font-bold text-orange-300 mb-2">3</div>
    <div class="text-sm text-gray-300">Prompt files turned repeated requests into reusable commands.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-xl mb-2">🎓</div>
    <div class="font-bold text-purple-300 mb-2">4</div>
    <div class="text-sm text-gray-300">Skills packaged domain workflows with examples and resources.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-xl mb-2">🔌</div>
    <div class="font-bold text-orange-300 mb-2">5</div>
    <div class="text-sm text-gray-300">MCP servers brought live databases, APIs, and services into the workflow.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-xl mb-2">🤖</div>
    <div class="font-bold text-purple-300 mb-2">6</div>
    <div class="text-sm text-gray-300">Now the team needs switchable role presets instead of manual setup every time.</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl text-white font-semibold mb-2">The problem is no longer missing capability. It is workflow friction.</div>
  <div class="text-sm text-gray-300">Custom agents bundle the right tools, instructions, skills, and handoffs for a specific job so the team can switch modes instantly.</div>
</div>

---

# 🎯 What You'll Build

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-2xl mb-3">🧪</div>
    <div class="text-lg font-bold text-blue-300 mb-2">A character-review agent</div>
    <div class="text-sm text-gray-300">Read-only tools plus the prompt, skill, and MCP-aware workflow the team already built for character-detail review.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-2xl mb-3">🛠️</div>
    <div class="text-lg font-bold text-purple-300 mb-2">An implementation agent</div>
    <div class="text-sm text-gray-300">Full editing tools and systematic ADR-driven execution for getting work done thoroughly.</div>
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

# 📚 What Custom Agents Actually Are

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

# 🔄 Agents vs Instructions vs Skills vs MCP

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

# ⚙️ Core Agent Design Patterns

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
layout: two-cols
---

# ❌ Before

<div class="space-y-4 mt-6 text-left">

<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Every workflow starts with reconfiguration</div>
  <div class="text-sm text-gray-300">The user re-explains whether this is planning, implementation, review, or analysis work.</div>
</div>

<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Boundaries are easy to blur</div>
  <div class="text-sm text-gray-300">A planning conversation can drift into editing or a review session can accidentally make changes.</div>
</div>

<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Workflow transitions stay manual</div>
  <div class="text-sm text-gray-300">Even when the next step is obvious, the handoff from plan to implement or implement to review is not encoded.</div>
</div>

</div>

::right::

# ✨ After

<div class="space-y-4 mt-6 text-left">

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

---

# 📊 What to Validate in the Workshop

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

# 🔨 Exercise Roadmap

<div class="mt-5 p-4 bg-gradient-to-r from-blue-900/25 via-purple-900/20 to-orange-900/15 rounded-xl border border-white/10 text-center">
  <div class="text-base text-white font-semibold mb-1">Turn earlier customizations into reusable teammates.</div>
  <div class="text-xs text-gray-300">Pattern first, then review, delivery, and agent teams.</div>
</div>

<div class="mt-5 grid grid-cols-4 gap-4 text-left">

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
    <div class="text-xs text-gray-300 mb-3 leading-snug">Give ADR execution its own editing role, then hand off to review.</div>
    <div class="text-xs text-gray-400">Lead: Sarah ⭐</div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-emerald-900/30 to-blue-900/20 border border-emerald-500/30">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold border border-emerald-400/30">6.4</span>
      <span class="text-xs text-gray-400">15 min</span>
    </div>
    <div class="text-base font-bold text-emerald-300 mb-2 leading-tight">Explore Agent Teams with Squad</div>
    <div class="text-xs text-gray-300 mb-3 leading-snug">End with a VS Code-first look at persistent multi-agent collaboration.</div>
    <div class="text-xs text-gray-400">Lead: Marcus ⭐</div>
  </div>

</div>

<div class="mt-4 p-3 bg-gray-900/60 rounded-xl border border-white/10 text-center">
  <div class="text-sm text-white font-semibold">One clean arc: pattern → review → implementation → agent team.</div>
</div>

---

# 🔗 Compounding Value

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">What Module 6 adds</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Role-based presets instead of repetitive setup</li>
      <li>Explicit workflow boundaries between review and implementation</li>
      <li>Handoffs that connect ADR execution to character review</li>
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

# 🔨 Exercise Section

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 text-8xl mb-6">🔨</div>
<h1 class="!text-5xl !font-bold bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent relative z-10 !mb-4">
Exercises
</h1>
<div class="relative z-10 mb-8">
<span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-lg font-medium shadow-lg">
4 exercises · ~60 minutes · shared leadership
</span>
</div>
<div class="relative z-10 grid grid-cols-4 gap-5 max-w-6xl w-full px-10">
<div class="p-4 bg-blue-900/30 rounded-xl border border-blue-500/40 text-center text-sm min-h-[88px] flex flex-col items-center justify-center">
<div class="text-blue-300 font-bold">6.1</div>
<div class="text-gray-400 text-xs mt-1">Study the pattern</div>
</div>
<div class="p-4 bg-purple-900/30 rounded-xl border border-purple-500/40 text-center text-sm min-h-[88px] flex flex-col items-center justify-center">
<div class="text-purple-300 font-bold">6.2</div>
<div class="text-gray-400 text-xs mt-1">Package review</div>
</div>
<div class="p-4 bg-orange-900/30 rounded-xl border border-orange-500/40 text-center text-sm min-h-[88px] flex flex-col items-center justify-center">
<div class="text-orange-300 font-bold">6.3</div>
<div class="text-gray-400 text-xs mt-1">Connect delivery</div>
</div>
<div class="p-4 bg-emerald-900/30 rounded-xl border border-emerald-500/40 text-center text-sm min-h-[88px] flex flex-col items-center justify-center">
<div class="text-emerald-300 font-bold">6.4</div>
<div class="text-gray-400 text-xs mt-1">See the horizon</div>
</div>
</div>
<div class="relative z-10 mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
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
<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-xs text-gray-300 italic">💭 <strong class="text-blue-300">Team reaction:</strong> "If we understand the default agent first, our custom ones won’t feel like guesswork."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
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
<div class="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-xs text-gray-300 italic">💭 <strong class="text-purple-300">Elena:</strong> "Now the full character-review workflow feels like one teammate instead of three separate setup steps."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">6.3</div>
<div>
<div class="text-orange-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Create Implementation Agent for ADR Execution</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
Even with a strong specification, implementation can become ad hoc, incomplete, or out of order if the workflow is not packaged well. <strong class="text-white">This exercise creates an implementation agent that reads ADRs, executes in a sensible order, and hands off directly into character review when done.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Define editing tools, implementation instructions, and the handoff boundary</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Test the agent against a feature ADR that changes the character experience</span></div>
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
<div class="mt-4 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30 text-xs text-gray-300 italic">💭 <strong class="text-orange-300">Sarah:</strong> "The real win is not just faster implementation — it’s making review the natural next step instead of an afterthought."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30 flex-shrink-0">6.4</div>
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
<div class="mt-4 p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/30 text-xs text-gray-300 italic">💭 <strong class="text-emerald-300">Marcus:</strong> "This is the first time I can really picture agent workflows scaling beyond one specialized role at a time."</div>
</div>
</div>
</div>

---
layout: center
---

# ✅ Module Checklist

<div class="mt-6 p-4 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-1">By the end of Module 6, the team should have a real character-agent workflow.</div>
<div class="text-sm text-gray-300">Not just agent files. A review role, an implementation role, a handoff between them, and a clear sense of what comes next.</div>
</div>

<div class="grid grid-cols-4 gap-4 mt-6 text-left text-sm">
<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">🧠</div>
<div>
<div class="text-blue-300 font-bold">Study the pattern</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 6.1</div>
</div>
</div>
<div class="space-y-2 text-gray-300">
<div>• Learn how a production agent stays in role</div>
<div>• Borrow the strongest frontmatter and workflow ideas</div>
</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🧪</div>
<div>
<div class="text-purple-300 font-bold">Package review</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 6.2</div>
</div>
</div>
<div class="space-y-2 text-gray-300">
<div>• Turn prompt + skill + MCP into one review role</div>
<div>• Make character-detail review instant and repeatable</div>
</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30 shadow-lg shadow-orange-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-lg">🛠️</div>
<div>
<div class="text-orange-300 font-bold">Connect delivery</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 6.3</div>
</div>
</div>
<div class="space-y-2 text-gray-300">
<div>• Build from the ADR with full editing tools</div>
<div>• Hand off directly into review when implementation ends</div>
</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30 shadow-lg shadow-emerald-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-lg">🚀</div>
<div>
<div class="text-emerald-300 font-bold">See the horizon</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 6.4</div>
</div>
</div>
<div class="space-y-2 text-gray-300">
<div>• Install Squad and initialize a persistent team</div>
<div>• See what multi-agent collaboration could become</div>
</div>
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-4 rounded-xl bg-gray-900/60 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">What good looks like</div>
<div class="text-sm text-gray-300">One trustworthy review agent, one implementation agent, a handoff between them, and one capstone that expands the team's imagination without distracting from the core workflow.</div>
</div>
<div class="p-4 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">Why this matters</div>
<div class="text-sm text-gray-300">Module 6 is where the earlier customizations stop feeling like parts and start feeling like an operating model the team can actually use.</div>
</div>
</div>


---

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
<div class="relative z-10 grid grid-cols-4 gap-3 max-w-5xl w-full px-6 mb-6">
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
<div class="p-3 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 rounded-xl border border-emerald-500/30 text-center">
<div class="text-xl mb-1">🚀</div>
<div class="text-emerald-300 font-bold text-sm">You Saw the Horizon</div>
<div class="text-gray-400 text-xs mt-1">Squad showed what agent workflows might become at a team scale</div>
</div>
</div>
<div class="relative z-10 text-base text-gray-200 max-w-4xl px-10 mb-6 leading-snug text-center">
Module 6 is where the earlier customizations stop feeling like parts and start feeling like an operating model. <span class="text-white font-semibold">From here, the team is ready to explore how those workflows extend beyond the core editor experience.</span>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

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
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
<div class="text-purple-300 font-bold text-sm mb-2">Elena</div>
<div class="text-sm text-white leading-snug mb-3">“Now the full character-review workflow feels like one teammate instead of three separate setup steps.”</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-gray-900/50 border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-sm mb-2">Rafael</div>
<div class="text-sm text-white leading-snug mb-3">“This is the first module where I can see requirements, implementation, and review connecting as one delivery story.”</div>
</div>
</div>

<div class="relative z-10 mt-6 p-3 rounded-xl bg-gradient-to-r from-purple-900/25 via-blue-900/20 to-orange-900/20 border border-white/10 text-center">
<div class="text-white font-semibold">Agents turn customization into collaboration.</div>
<div class="text-xs text-gray-300 mt-1">That shift is what the whole team actually feels in day-to-day work.</div>
</div>
</div>
