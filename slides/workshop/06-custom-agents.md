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
    <div class="text-2xl mb-3">📝</div>
    <div class="text-lg font-bold text-blue-300 mb-2">A planning agent</div>
    <div class="text-sm text-gray-300">Read-only tools, planning rules, and structured output to keep research separate from implementation.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-2xl mb-3">🛠️</div>
    <div class="text-lg font-bold text-purple-300 mb-2">An implementation agent</div>
    <div class="text-sm text-gray-300">Full editing tools and systematic ADR-driven execution for getting work done thoroughly.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-2xl mb-3">🔒</div>
    <div class="text-lg font-bold text-orange-300 mb-2">A review agent</div>
    <div class="text-sm text-gray-300">Analysis-only workflow for finding issues without accidentally making changes during review.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30">
    <div class="text-2xl mb-3">🌐</div>
    <div class="text-lg font-bold text-purple-300 mb-2">A web-accessible pattern</div>
    <div class="text-sm text-gray-300">Understand when an agent should work in VS Code, on the web, or as part of a handoff chain.</div>
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
      <li>• YAML frontmatter defines tools, model, handoffs, and related controls</li>
      <li>• Markdown instructions define the workflow and constraints</li>
      <li>• The agent appears as a reusable preset for a specific kind of work</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">A way to encode workflow boundaries</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Planning agents can be read-only</li>
      <li>• Implementation agents can have edit tools</li>
      <li>• Review agents can stay analysis-only and hand issues back for fixes</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">A place where earlier customizations meet</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Repository instructions still guide behavior</li>
      <li>• Skills can provide domain workflow support</li>
      <li>• MCP access can add live context where the role needs it</li>
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
      <li>• Read-only tools enforce research or review boundaries</li>
      <li>• Editing tools should only appear where implementation is expected</li>
      <li>• The tool list shapes the behavior as much as the prompt does</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Instructions define the workflow</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Stopping rules prevent scope creep</li>
      <li>• Style guides make output more consistent</li>
      <li>• Ordered phases reduce improvisation</li>
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
    <div class="text-sm text-gray-300">Some agents are best for VS Code, others for analysis on the web or in meetings.</div>
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

<div class="mt-6 text-left">

<div class="mb-5">
  <div class="text-blue-300 font-bold mb-2">Phase 1 — Learn the pattern before customizing it</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **6.1** | Understand the Default Plan Agent | All ⭐ | 15 min |
| **6.2** | Create Feature Planning Agent | David ⭐ | 15 min |

</div>

<div class="mb-5">
  <div class="text-purple-300 font-bold mb-2">Phase 2 — Build the delivery workflow</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **6.3** | Create Implementation Agent for ADR Execution | Sarah ⭐ | 15 min |
| **6.4** | Design Security Review Agent | Elena ⭐ | 15 min |

</div>

<div>
  <div class="text-orange-300 font-bold mb-2">Phase 3 — Extend beyond the local IDE</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **6.5** | Access Custom Agents from the Web | Rafael ⭐ | 15 min |

</div>

</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
  <div class="text-white font-semibold">The sequence builds a real workflow chain.</div>
  <div class="text-sm text-gray-300">Understand a strong default, create the planning role, create the implementation role, add review, then extend access to the web.</div>
</div>

---

# 🔗 Compounding Value

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">What Module 6 adds</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Role-based presets instead of repetitive setup</li>
      <li>• Explicit workflow boundaries</li>
      <li>• Handoffs between planning, implementation, and review</li>
      <li>• A path to web-accessible analysis workflows</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Why it matters</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Instructions, prompts, skills, and MCP are more valuable when they are easy to invoke in the right context</li>
      <li>• Teams get more consistency because workflow design is encoded, not remembered</li>
      <li>• Agent chains make Copilot feel more like a system of teammates than a single chat box</li>
    </ul>
  </div>

</div>

<div class="mt-8 text-center text-lg text-yellow-300">
  Module 6 is the orchestration layer that turns separate customizations into repeatable delivery patterns.
</div>

---
layout: center
---

# ✅ Module Checklist

<div class="p-8 bg-gray-900/60 rounded-xl border border-white/10 max-w-4xl mx-auto text-left">
  <div class="grid grid-cols-3 gap-5 text-sm">
    <div class="p-4 rounded-xl bg-gray-800/80 border border-blue-500/30">
      <div class="text-blue-300 font-bold mb-3">Define</div>
      <ul class="space-y-2 text-gray-300">
        <li>• Pick the role the agent is meant to serve</li>
        <li>• Choose tools that reinforce that role</li>
        <li>• Write instructions that keep the workflow in scope</li>
      </ul>
    </div>

    <div class="p-4 rounded-xl bg-gray-800/80 border border-purple-500/30">
      <div class="text-purple-300 font-bold mb-3">Connect</div>
      <ul class="space-y-2 text-gray-300">
        <li>• Add handoffs where the next step is predictable</li>
        <li>• Bring in skills or MCP access only when the role needs them</li>
        <li>• Choose environment and invocation settings intentionally</li>
      </ul>
    </div>

    <div class="p-4 rounded-xl bg-gray-800/80 border border-orange-500/30">
      <div class="text-orange-300 font-bold mb-3">Validate</div>
      <ul class="space-y-2 text-gray-300">
        <li>• Test whether the agent stays in role</li>
        <li>• Confirm handoffs reduce setup work</li>
        <li>• Refine until the workflow feels trustworthy and reusable</li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
---

# ➡️ Workshop Complete

<div class="p-8 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-xl shadow-lg max-w-3xl">
  <div class="text-5xl mb-4 text-center">🚀</div>
  <h2 class="text-3xl text-center text-white font-bold mb-4">
    From customization pieces to workflow teammates
  </h2>
  <div class="text-lg text-center text-purple-200 mb-6">
    Instructions, prompts, skills, MCP servers, and agents now work as one system
  </div>
  <div class="text-base text-gray-300 text-center mb-4">
    The workshop arc is complete. The next step is practical adoption: choose the highest-friction team workflow, package it with the right boundaries and handoffs, and refine it through real usage.
  </div>
  <blockquote class="text-lg text-center text-white italic">
    "The goal was never just to customize Copilot. The goal was to make good engineering workflows easier to repeat."
  </blockquote>
  <div class="mt-4 text-center text-purple-300">
    Module 6 complete — ready for real team rollout.
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
    Focus on roles, constraints, and handoffs rather than trying to memorize every frontmatter field.
  </div>
</div>

---

# 🔨 Exercise 6.1 — Understand the Default Plan Agent

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30">Lead: All ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 15 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Before building custom agents, the team needs a mental model for how a well-designed agent uses tools, instructions, and handoffs.</div>
    <div class="text-blue-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Reverse-engineer the default plan agent so the team learns production-quality patterns before writing its own configurations.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Study frontmatter, stopping rules, workflow, and handoffs</li>
      <li>• Identify which tools are present and which are intentionally absent</li>
      <li>• Capture the patterns worth reusing in team agents</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• The team can explain how the default agent stays in role</li>
      <li>• Key configuration concepts are clear before customization starts</li>
      <li>• Everyone has a reference pattern to borrow from</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 6.2 — Create Feature Planning Agent

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">Lead: David ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 15 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Planning still takes repeated setup and can drift into accidental edits if the workflow boundaries are not enforced.</div>
    <div class="text-purple-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Create a planning agent with read-only tools, explicit stopping rules, and a structured planning workflow.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Create the planning agent frontmatter and instructions</li>
      <li>• Test it against a real feature spec</li>
      <li>• Confirm it refuses implementation work and stays in planning mode</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Planning setup overhead drops sharply</li>
      <li>• Accidental edits disappear during research</li>
      <li>• Output stays structured and actionable</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 6.3 — Create Implementation Agent for ADR Execution

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-orange-900/50 text-orange-300 border border-orange-500/30">Lead: Sarah ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 15 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Even with a strong specification, implementation can become ad hoc, incomplete, or out of order if the workflow is not packaged well.</div>
    <div class="text-orange-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Create an implementation agent that reads ADRs, executes in a sensible order, and hands off to review when done.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Define editing tools and implementation instructions</li>
      <li>• Test the agent against a feature ADR</li>
      <li>• Confirm the implementation workflow is complete and systematic</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Completeness improves versus manual implementation</li>
      <li>• Execution order becomes more reliable</li>
      <li>• Review handoff is part of the default path</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 6.4 — Design Security Review Agent

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30">Lead: Elena ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 15 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Review work needs strong analysis and standards coverage, but it should not accidentally start fixing code during the review step.</div>
    <div class="text-blue-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Create a read-only security review agent that finds issues, reports them clearly, and hands off fixes when needed.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Define analysis-only tools and review instructions</li>
      <li>• Test the agent on intentionally flawed code</li>
      <li>• Verify the handoff back to implementation preserves review context</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Review setup time is reduced</li>
      <li>• Accidental modifications during review go away</li>
      <li>• Review coverage becomes more systematic and easier to act on</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 6.5 — Access Custom Agents from the Web

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">Lead: Rafael ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 15 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Some planning and analysis work happens away from the IDE, especially during meetings or quick stakeholder conversations.</div>
    <div class="text-purple-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Understand how custom agents can also support web-based workflows and when that tradeoff makes sense.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Explore which agents can work effectively on the web</li>
      <li>• Compare web and VS Code usage patterns</li>
      <li>• Decide where web-based access reduces friction for the team</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• The team can explain when web access is helpful</li>
      <li>• Tradeoffs between local and web contexts are clearer</li>
      <li>• Rafael can use agent workflows during live discussion without opening the IDE first</li>
    </ul>
  </div>
</div>
