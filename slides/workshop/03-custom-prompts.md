---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 3: Custom Prompts
  Turn your best prompts into reusable team functions
drawings:
  persist: false
transition: slide-left
title: Module 3 - Custom Prompts
module: workshop/03-custom-prompts
mdc: true
status: active
updated: 2026-03-26
---

<!-- SLIDE: Module 3: Custom Prompts -->
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
Module 3: Custom Prompts
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
⏰ Your best prompts deserve a permanent home
</span>
</div>
<div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
Plan mode just produced a prompt file. Module 3 is about doing that deliberately — and building prompts the whole team can run.
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
  <div class="flex-1 p-2 bg-gradient-to-b from-orange-600/80 to-orange-800/60 rounded-lg border border-orange-400/50 text-center shadow-lg shadow-orange-900/30">
    <div class="font-bold text-white text-xs">M3</div>
    <div class="text-orange-200 mt-0.5 whitespace-nowrap">Prompts</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M4</div>
    <div class="text-gray-500 mt-0.5 whitespace-nowrap">Skills</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M5</div>
    <div class="text-gray-500 mt-0.5 whitespace-nowrap">MCP</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M6</div>
    <div class="text-gray-500 mt-0.5 whitespace-nowrap">Agents</div>
  </div>
</div>
</div>

---

<!-- SLIDE: Elena's Challenge -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-16 py-8">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="text-orange-300 font-bold text-lg tracking-wide">⏰ : Monday, 12:30 PM</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-2 flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-base font-bold text-white shadow-lg shadow-purple-500/30 flex-shrink-0">E</div>
<div class="text-gray-300 text-sm">
<span class="text-white font-semibold">Elena</span> wants to capture and maintain high-value prompts for reuse across the team.
</div>
</div>

<div class="relative z-10 mb-3 py-2 px-3 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 shadow-xl backdrop-blur-sm">
<p class="text-gray-200 text-xs leading-relaxed">
<span class="text-orange-300/60 font-serif text-base">"</span>
Every review I run from memory is a potential gap. When the prompt lives in my head, the checklist stops the moment I'm not in the room. If we codify these, the whole team runs the <span class="text-orange-300 font-semibold">same quality bar.</span>
 <span class="text-orange-300/60 font-serif text-base">"</span>
</p>
</div>

<div class="relative z-10 grid grid-cols-3 gap-3 mb-3 text-left">
<div class="p-4 rounded-xl bg-gray-900/60 border border-blue-500/30">
<div class="text-blue-300 font-bold text-sm mb-2">Module 1</div>
<div class="text-white font-semibold text-base mb-1">Document the standards</div>
<div class="text-xs text-gray-400">Architecture docs and repository instructions became the source of truth.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold text-sm mb-2">Module 2</div>
<div class="text-white font-semibold text-base mb-1">Improve the workflow</div>
<div class="text-xs text-gray-400">Plan mode made complex work reviewable before code started landing.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
<div class="text-orange-300 font-bold text-sm mb-2">Module 3</div>
<div class="text-white font-semibold text-base mb-1">Save the best prompts</div>
<div class="text-xs text-gray-400">Now the goal is turning repeated, high-value prompting into something the whole team can invoke.</div>
</div>
</div>

<div class="relative z-10 flex items-center gap-3 p-3 bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-xl border border-red-500/40 shadow-lg">
<span class="text-xl flex-shrink-0">⚡</span>
<p class="text-white font-bold text-sm">
Custom prompts turn <span class="text-orange-300">personal prompt craft</span> into invokable team workflow.
</p>
</div>
</div>

---

<!-- SLIDE: What You'll Build -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 What You'll Build</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-5 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-5 shadow-lg shadow-orange-900/20">
<div class="text-2xl font-bold text-white mb-1">Two prompt files. One reusable habit. Zero repeated setup.</div>
<div class="text-sm text-orange-100">A docs-refresh prompt and a canon-accuracy checker — plus a tip of the hat to what you already built in Module 2</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-4 text-sm text-left">
<div class="p-4 rounded-lg border-l-4 border-blue-500 bg-gray-900/60">
<div class="font-bold text-blue-300 mb-1">3.1 — Refresh the source of truth</div>
<div class="text-gray-400 font-mono text-xs mb-2">refresh-docs.prompt.md</div>
<div class="text-gray-300">A reusable prompt that keeps <code>ARCHITECTURE.md</code> and team instructions aligned with the repo after code changes.</div>
</div>
<div class="p-4 rounded-lg border-l-4 border-purple-500/40 bg-gray-900/40 opacity-60">
<div class="font-bold text-purple-300/70 mb-1 line-through">3.2 — Save a reusable feature brief</div>
<div class="text-gray-500 font-mono text-xs mb-2 line-through">feature-kickoff.prompt.md</div>
<div class="text-gray-500 line-through text-xs">A prompt that takes a feature name as input and returns a structured brief — files, patterns, sequencing, and first PR scope — grounded in current docs.</div>
<div class="mt-2 text-xs text-purple-300/80 not-italic">✓ Already done — Module 2 plan mode produced exactly this. Your <span class="font-mono">.prompt.md</span> file is the feature brief.</div>
</div>
<div class="p-4 rounded-lg border-l-4 border-emerald-500 bg-gray-900/60">
<div class="font-bold text-emerald-300 mb-1">3.3 — Encode domain knowledge</div>
<div class="text-gray-400 font-mono text-xs mb-2">[show]-accuracy-check.prompt.md</div>
<div class="text-gray-300">A canon-accuracy checker that applies your universe file rules to any content piece — systematically, every time.</div>
</div>
</div>
<div class="relative z-10 mt-5 p-3 bg-orange-900/20 rounded-lg border border-orange-500/30 text-center text-sm text-gray-300">
💡 <strong class="text-orange-300">Your best prompts stop being personal notes</strong> and start becoming shared team functions.
</div>
</div>

---

<!-- SLIDE: What Prompt Files Actually Are -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 What Prompt Files Actually Are</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-4 mt-2 text-left">

<div class="p-3 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30 shadow-lg shadow-orange-500/10">
<div class="text-orange-300 font-bold mb-2">Think of them like functions</div>
<ul class="list-none pl-0 m-0 text-sm text-gray-300 space-y-1">
<li>Invoked on demand</li>
<li>Named and discoverable</li>
<li>Parameterized with variables</li>
<li>Designed for specific repeatable tasks</li>
</ul>
</div>

<div class="p-3 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30 shadow-lg shadow-purple-500/10">
<div class="text-purple-300 font-bold mb-2">Each file has two layers</div>
<ul class="list-none pl-0 m-0 text-sm text-gray-300 space-y-1">
<li>YAML frontmatter for name, agent, model, tools</li>
<li>A body that explains the task and expected output</li>
<li>Optional links to docs and standards</li>
<li>Optional built-in or input variables</li>
</ul>
</div>

<div class="p-3 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30 shadow-lg shadow-blue-500/10">
<div class="text-blue-300 font-bold mb-2">Workspace prompts</div>
<ul class="text-sm text-gray-300 space-y-1">
<li>Live in <code>.github/prompts/</code></li>
<li>Are version-controlled and team-visible</li>
<li>Work best for project-specific workflows</li>
</ul>
</div>

<div class="p-3 rounded-xl bg-gradient-to-br from-red-900/30 to-gray-900/40 border border-red-500/30 shadow-lg shadow-red-500/10">
<div class="text-red-300 font-bold mb-2">User prompts</div>
<ul class="text-sm text-gray-300 space-y-1">
<li>Live in your VS Code profile</li>
<li>Follow you across projects</li>
<li>Work best for personal, reusable habits</li>
</ul>
</div>

</div>

<div class="mt-3 p-3 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-red-900/20 rounded-xl border border-white/10 text-center">
<div class="text-sm text-white font-semibold">Prompt files are not just shortcuts. They are reusable context orchestrators.</div>
</div>

---

<!-- SLIDE: Why Prompt Files Matter Here -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-5">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Why Prompt Files Matter Here</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-5 flex-1 text-left">
<div class="p-6 rounded-xl bg-gray-900/60 border border-orange-500/30 flex flex-col">
<div class="text-3xl mb-3">⏳</div>
<div class="text-orange-300 font-bold text-lg mb-3">Less retyping</div>
<div class="text-sm text-gray-300 leading-relaxed">The team stops rebuilding the same careful prompt every time a familiar task appears. Write it once, invoke it forever.</div>
</div>
<div class="p-6 rounded-xl bg-gray-900/60 border border-blue-500/30 flex flex-col">
<div class="text-3xl mb-3">📐</div>
<div class="text-blue-300 font-bold text-lg mb-3">Less standards drift</div>
<div class="text-sm text-gray-300 leading-relaxed">Prompts can reference current architecture and instruction files instead of embedding stale assumptions copied from memory.</div>
</div>
<div class="p-6 rounded-xl bg-gray-900/60 border border-purple-500/30 flex flex-col">
<div class="text-3xl mb-3">🤝</div>
<div class="text-purple-300 font-bold text-lg mb-3">More reusable expertise</div>
<div class="text-sm text-gray-300 leading-relaxed">A strong review or debugging prompt becomes something the entire team can benefit from — not just the person who wrote it.</div>
</div>
</div>
<div class="relative z-10 mt-5 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
<div class="text-xl font-bold text-white">Prompt files make standards easier to invoke than to forget.</div>
</div>
</div>

---

<!-- SLIDE: What a Strong Prompt File Includes -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔎 What a Strong Prompt File Includes</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-6 mt-4 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Frontmatter</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>A clear name and description</li>
      <li>The right agent for the task</li>
      <li>Tool access that matches the prompt’s job</li>
      <li>Optional hints that improve invocation</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Body</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>The exact task to perform</li>
      <li>Links to standards or examples when relevant</li>
      <li>The outputs you expect back</li>
      <li>Enough structure to keep results consistent</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Variables</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li><code>${file}</code> for current file context</li>
      <li><code>${selection}</code> for focused analysis</li>
      <li><code>${workspaceFolder}</code> for project-aware prompts</li>
      <li><code>${input:...}</code> for parameterized use</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Good design rule</div>
    <div class="text-sm text-gray-300">The best prompt file is specific enough to save time, but general enough that the team actually uses it more than once.</div>
  </div>

</div>

---

<!-- SLIDE: What to Validate in the Workshop -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 What to Validate in the Workshop</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-3 gap-5 mt-4 text-left">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-2">Invocation speed</div>
    <div class="text-sm text-gray-300">Compare writing a repeated prompt manually with invoking the saved version.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-2">Standards alignment</div>
    <div class="text-sm text-gray-300">Check whether linked instructions and architecture docs remove missed checks and stale wording.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-2">Context capture</div>
    <div class="text-sm text-gray-300">Use variables to reduce manual copying and improve prompt consistency during debugging or review.</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-sm text-white font-semibold">Prompt files pay off <span class="text-orange-300 font-bold">twice</span>: once in the time you save, and again every time a teammate runs the <span class="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-bold">same quality bar</span> without asking you how.</div>
</div>

---

<!-- SLIDE: 🔨 Exercises -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 &#x1F528; Exercises &mdash; Prompts</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-4 shadow-lg shadow-orange-900/20">
<div class="text-lg font-bold text-white">2 exercises · ~18 minutes · one already done</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-4 flex-1">
<div class="p-4 bg-blue-900/30 rounded-xl border border-blue-500/40 flex flex-col">
<div class="flex items-center justify-between mb-2">
<div class="text-blue-300 font-bold text-lg">3.1</div>
<span class="text-xs text-gray-500">Rafael ⭐</span>
</div>
<div class="text-white text-sm font-semibold mb-2">Refresh the docs</div>
<div class="text-gray-400 text-xs leading-snug mb-3">Every code change makes the source of truth a little stale. Rafael builds a prompt that reviews the workspace and updates only what changed — so the whole team's context stays current without anyone manually tracking it.</div>
<div class="mt-auto text-xs text-blue-300/70 italic">💭 "One prompt. Run it after every meaningful change. Done."</div>
</div>
<div class="p-4 bg-gray-800/30 rounded-xl border border-gray-600/30 flex flex-col opacity-50">
<div class="flex items-center justify-between mb-2">
<div class="text-gray-500 font-bold text-lg line-through">3.2</div>
<span class="text-xs text-gray-600 line-through">Marcus ⭐</span>
</div>
<div class="text-gray-500 text-sm font-semibold mb-2 line-through">Save one stronger prompt</div>
<div class="text-gray-600 text-xs leading-snug mb-3 line-through">Turn a winning one-off prompt into a reusable .prompt.md for the whole team</div>
<div class="mt-auto text-xs text-green-400/80 not-italic">✓ Already done — your plan mode output from Module 2 <em>is</em> the prompt file.</div>
</div>
<div class="p-4 bg-emerald-900/30 rounded-xl border border-emerald-500/40 flex flex-col">
<div class="flex items-center justify-between mb-2">
<div class="text-emerald-300 font-bold text-lg">3.3</div>
<span class="text-xs text-gray-500">Marcus ⭐</span>
</div>
<div class="text-white text-sm font-semibold mb-2">Encode domain knowledge</div>
<div class="text-gray-400 text-xs leading-snug mb-3">Marcus shipped Copilot-generated content in a PR. Three canon errors. Sarah caught them. The rules are already in the universe file — Marcus just needs a prompt that applies them automatically before anything hits review.</div>
<div class="mt-auto text-xs text-emerald-300/70 italic">💭 "If the universe file has the rules, the prompt should use them."</div>
</div>
</div>
<div class="relative z-10 mt-4 p-3 bg-gray-900/40 rounded-lg border border-white/10 text-center text-xs text-gray-400">
Each exercise rotates the lead persona — everyone contributes, everyone follows.
</div>
</div>

---

<!-- SLIDE: Exercise 3.1 Creating a Docs Refresh Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">3.1</div>
<div>
<div class="text-blue-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Creating a Docs Refresh Prompt</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Rafael ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 6 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-cyan-400 text-sm text-gray-300">
Rafael's already thinking about the next sprint. He's noticed that every time the team plans a feature, Copilot's suggestions drift slightly from what the codebase actually is — because nobody updated the docs after Module 2. <em>That drift compounds.</em> <strong class="text-white">He wants one prompt he can hand to the team: run it after any meaningful change, docs stay current, problem never comes back.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create a workspace prompt named <span class="font-mono text-blue-300">refresh-docs.prompt.md</span> that updates foundational docs after code changes</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Use <code>/plan </code> and ask for a review the current workspace and update <span class="font-mono text-blue-300">ARCHITECTURE.md</span> and <span class="font-mono text-blue-300">copilot-instructions.md</span> only when the codebase has changed</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Save it, and invoke it after each change to keep the docs aligned with current reality instead of stale memory</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The prompt is reusable after any meaningful code change</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> It updates the two source-of-truth docs without turning into a generic repo rewrite</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The team sees evergreen docs as leverage, not cleanup</div>
</div>
<div class="mt-4 p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30 text-xs text-gray-300 italic">💭 <strong class="text-cyan-300">Rafael:</strong> "The docs drift is a compounding risk. One prompt, maintained. I'm already thinking about what we build next."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 💬 Example: The refresh-docs Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: The refresh-docs Prompt</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-5">
<div>
<div class="text-xs text-gray-400 mb-2">Save this to <span class="font-mono text-orange-300">.github/prompts/refresh-docs.prompt.md</span>:</div>
<div class="font-mono text-sm bg-gray-900/80 rounded-xl border border-orange-500/30 p-4 text-gray-200 leading-relaxed select-text cursor-text">
<div class="text-gray-500 text-xs mb-2">---</div>
<div class="text-blue-300 text-xs mb-1">description: Refresh architecture and team instructions after code changes</div>
<div class="text-gray-500 text-xs mb-3">---</div>
<span class="text-orange-400 font-bold">/plan</span> Review the current workspace and identify what has changed since ARCHITECTURE.md and .github/copilot-instructions.md were last updated. Propose specific updates to each file — only the sections that are now inaccurate or missing. Don't rewrite what's still correct.
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20 text-xs">
<div class="text-orange-300 font-bold mb-2">How it works</div>
<div class="flex items-start gap-2 text-gray-300 mb-1"><span class="text-orange-400 mt-0.5">1</span><span>Save the file to <span class="font-mono text-orange-200">.github/prompts/</span></span></div>
<div class="flex items-start gap-2 text-gray-300 mb-1"><span class="text-orange-400 mt-0.5">2</span><span>Run <span class="font-mono text-orange-200">/refresh-docs</span> in Copilot Chat</span></div>
<div class="flex items-start gap-2 text-gray-300 mb-1"><span class="text-orange-400 mt-0.5">3</span><span>The <span class="font-mono text-orange-200">/plan</span> inside the prompt runs automatically — producing a reviewable plan before anything changes</span></div>
<div class="flex items-start gap-2 text-gray-300"><span class="text-orange-400 mt-0.5">4</span><span>Review the plan, approve, execute</span></div>
</div>
<div class="p-3 bg-blue-900/20 rounded-xl border border-blue-500/30 text-xs text-gray-300">
<div class="text-blue-300 font-bold mb-1">Why this matters</div>
The <span class="font-mono text-blue-200">/plan</span> inside the prompt is what makes it safe — it never blindly rewrites docs. You always see what it wants to change before a single file is touched.
</div>
<div class="p-3 bg-orange-900/20 rounded-xl border border-orange-500/30 text-xs text-gray-300 italic">
💭 <strong class="text-orange-300">Marcus:</strong> "Wait, the prompt runs /plan automatically? So I don't have to remember to do it? ...I could get used to this. Anyway — I was reading this Hacker News thread about—"
</div>
</div>
</div>
</div>


---

<!-- SLIDE: 📋 Example: Plan Output from /refresh-docs -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Plan Output from /refresh-docs</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4 flex-1">
<div class="font-mono text-xs bg-gray-900/80 rounded-xl border border-blue-500/30 p-4 text-gray-300 overflow-auto">
<div class="text-blue-300 font-bold mb-1">## Plan: Docs Gap Analysis</div>
<div class="text-gray-400 mb-2 not-italic text-xs"><strong class="text-gray-200">TL;DR:</strong> copilot-instructions.md has 3 gaps from LoreController. ARCHITECTURE.md also needs updates.</div>
<div class="text-blue-300 mb-1">### For copilot-instructions.md (3 edits)</div>
<div class="text-gray-300 text-xs mb-0.5">1. <strong class="text-white">API Routes table</strong> — Add missing /api/lore row (LoreController GET + POST undocumented)</div>
<div class="text-gray-300 text-xs mb-0.5">2. <strong class="text-white">Models Reference</strong> — Add Lore and CharacterRelationship models</div>
<div class="text-gray-300 text-xs mb-2">3. <strong class="text-white">Docs section</strong> — Remove or fix dead link to ARCHITECTURE.md</div>
<div class="text-blue-300 mb-1">### For ARCHITECTURE.md (does not exist)</div>
<div class="text-gray-300 text-xs mb-0.5"><strong class="text-white">Option A:</strong> Create it — layers, data flow, EF config, seeding behavior</div>
<div class="text-gray-300 text-xs mb-2"><strong class="text-white">Option B:</strong> Remove the dead link and skip creation</div>
<div class="text-blue-300 mb-1">### Open Questions</div>
<div class="text-gray-300 text-xs mb-0.5">→ Create ARCHITECTURE.md fresh or remove dead link? (Recommend A — spec and bug catalog both reference it)</div>
<div class="text-gray-300 text-xs">→ LoreController also has known issues (no PUT/DELETE, no validation) — add to High Priority bugs section?</div>
</div>
<div class="space-y-3 text-xs">
<div class="p-3 bg-green-900/20 rounded-xl border border-green-500/30">
<div class="text-green-300 font-bold mb-1">What makes this useful</div>
<div class="text-gray-300 leading-snug">It found a dead link that no one noticed. It scoped exactly 3 edits — not a full rewrite. It surfaced a judgment call (create vs. remove) before touching anything.</div>
</div>
<div class="p-3 bg-orange-900/20 rounded-xl border border-orange-500/30">
<div class="text-orange-300 font-bold mb-1">Your job at this stage</div>
<div class="text-gray-300 leading-snug">Read the TL;DR. Check the open questions. Answer the judgment calls. <strong class="text-white">Then</strong> execute — knowing exactly what will change and why.</div>
</div>
<div class="p-3 bg-blue-900/20 rounded-xl border border-blue-500/30">
<div class="text-blue-300 font-bold mb-1">The pattern in action</div>
<div class="text-gray-300 leading-snug">The <span class="font-mono text-blue-200">/plan</span> inside the prompt is what produces this. You reviewed it. Nothing has changed yet. That's the point.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Exercise 3.2 Creating a Context-Aware Prompt File -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-5">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/30 flex-shrink-0">3.2</div>
<div>
<div class="text-cyan-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0"><s>Feature Kickoff Brief</s></h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah 🤝</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 12 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-4 bg-gray-900/60 rounded-xl border-l-4 border-cyan-400 text-sm text-gray-300">
Marcus usually starts a feature without a kickoff brief. Halfway through he hits a dependency he didn't sequence, or Sarah flags a pattern he missed. <strong class="text-white">A prompt that forces the right questions upfront — just by asking for a feature name — is the only kickoff process Marcus will actually run.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-cyan-700 text-white text-xs flex items-center justify-center flex-shrink-0">1</span><span class="text-gray-300">Create <span class="font-mono text-cyan-300">feature-kickoff.prompt.md</span> with <span class="font-mono text-cyan-300">${input:featureName}</span> variable and markdown links to <span class="font-mono">ARCHITECTURE.md</span> and <span class="font-mono">copilot-instructions.md</span></span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-cyan-700 text-white text-xs flex items-center justify-center flex-shrink-0">2</span><span class="text-gray-300">Invoke with <span class="font-mono text-cyan-300">/Feature-Kickoff "Lore Quick-Add Form"</span> — check files, patterns, sequencing</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-cyan-700 text-white text-xs flex items-center justify-center flex-shrink-0">3</span><span class="text-gray-300">Run again with a different feature name — same structure, different content. That's the variable working.</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Prompt uses <span class="font-mono text-cyan-300">${input:featureName}</span> variable</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> References existing docs via markdown links</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Output includes files, patterns, sequencing, and first PR scope</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Same structure for any feature name — different content each time</div>
</div>
<div class="mt-3 p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30 text-xs text-gray-300 italic">💭 <strong class="text-cyan-300">Marcus:</strong> "Oh — this is like a function call for planning. Same prompt, any feature. Why did it take me this long to think of this?"</div>
</div>
</div>
</div>

---

<!-- SLIDE: Example feature-kickoff.prompt.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: feature-kickoff.prompt.md</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="font-mono text-xs bg-gray-900/80 rounded-lg border border-cyan-500/30 p-4 text-gray-300 leading-relaxed">
<div class="text-gray-500">---</div>
<div class="text-cyan-300">name: Feature Kickoff</div>
<div class="text-cyan-300">description: Structured brief for any named feature</div>
<div class="text-cyan-300">mode: ask</div>
<div class="text-gray-500 mb-2">---</div>
<div class="text-gray-400 mb-2">Brief for: <span class="text-orange-300 font-bold">${input:featureName}</span></div>
<div class="text-purple-300 mb-1">## Context sources</div>
<div class="text-gray-400">- <span class="text-blue-300">[Architecture](./ARCHITECTURE.md)</span></div>
<div class="text-gray-400 mb-2">- <span class="text-blue-300">[Team instructions](./.github/copilot-instructions.md)</span></div>
<div class="text-purple-300 mb-1">## Output</div>
<div class="text-gray-400">**Files you'll touch** (create/extend/modify)</div>
<div class="text-gray-400">**Patterns to follow**</div>
<div class="text-gray-400">**Dependencies to sequence first**</div>
<div class="text-gray-400">**Open questions before you start**</div>
<div class="text-gray-400">**Suggested first PR scope**</div>
</div>
<div class="flex flex-col gap-3 text-xs">
<div class="p-3 bg-orange-900/20 rounded-lg border border-orange-500/30">
<div class="text-orange-300 font-bold mb-1">🔑 The variable</div>
<div class="text-gray-300"><span class="font-mono text-orange-300">${input:featureName}</span> is prompted at invocation — same prompt, completely different brief for every feature sprint</div>
</div>
<div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-bold mb-1">🔗 Living doc links</div>
<div class="text-gray-300">When architecture or standards evolve, every future kickoff reflects the change — without touching the prompt file</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-lg border border-gray-700/40">
<div class="text-gray-300 font-bold mb-1">💬 Invoke with</div>
<div class="font-mono text-cyan-300">/Feature-Kickoff "Lore Quick-Add Form"</div>
<div class="text-gray-400 mt-1">VS Code prompts for the feature name, passes it + linked docs to Copilot</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Exercise 3.3 Lore Entry Accuracy Check -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30 flex-shrink-0">3.3</div>
<div>
<div class="text-emerald-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Lore Entry Accuracy Check</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah 🤝</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 12 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-3 bg-gray-900/60 rounded-xl border-l-4 border-emerald-400 text-sm text-gray-300">
Marcus shipped the <span class="font-mono text-emerald-200">/lore</span> page last sprint. Now he's batch-generating entries with Copilot — ten show facts in fifteen minutes. The PR looks fine. Sarah reviews it and finds errors. One entry has Walter meeting Jesse "at a university." She flags it. She is not doing this every sprint. The canon lore is already in <span class="font-mono text-emerald-200">docs/[show]-universe.md</span>. <strong class="text-white">Marcus needs a prompt that validates lore entries before they go into the database.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0">1</span><span class="text-gray-300">Create <span class="font-mono text-emerald-300">check-lore-accuracy.prompt.md</span> that references <span class="font-mono text-emerald-300">docs/[show]-universe.md</span></span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0">2</span><span class="text-gray-300">Review: <span class="font-mono text-cyan-300">#file:</span> present, <span class="font-mono text-cyan-300">${selection}</span> used, no hardcoded entry titles, factual-only</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0">3</span><span class="text-gray-300">Test: ask a known-bad lore question → prompt must flag the canon error</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0">4</span><span class="text-gray-300">Test: ask a correct lore question → prompt must pass with no violations</span></div>
</div>
</div>
<div class="space-y-2">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Prompt saved under <code>.github\prompts</code></div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> <span class="font-mono">${selection}</span> used — no hardcoded entry titles</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Flags the university/college error as a canon violation</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Correct lore entry passes with no false positives</div>
</div>
<div class="mt-3 p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/30 text-xs text-gray-300 italic">💭 <strong class="text-cyan-300">Marcus:</strong> "Wait — if the canon rules are in the universe file, I just... point the prompt at each entry? Before it goes into the database?"</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: lore-accuracy-check.prompt.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: lore-accuracy-check.prompt.md</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex gap-4 flex-1 min-h-0">
<div class="select-all font-mono text-[10.5px] bg-gray-900/80 rounded-xl border border-emerald-500/30 p-4 text-gray-300 leading-relaxed flex-1 overflow-auto whitespace-pre-wrap">
<div><span class="text-gray-500">---</span></div>
<div><span class="text-emerald-300">agent: ask</span></div>
<div><span class="text-emerald-300">description: Verify lore entry accuracy against the canonical Breaking Bad universe reference</span></div>
<div><span class="text-gray-500">---</span></div>
<div> </div>
<div>You are a Breaking Bad canon expert. Check the following lore entry for factual accuracy against the canonical reference in <span class="text-blue-300">docs/breaking-bad-universe.md</span>.</div>
<div> </div>
<div><span class="text-purple-300">## Lore entry to check</span></div>
<div> </div>
<div><span class="text-cyan-300">${selection}</span></div>
<div> </div>
<div><span class="text-purple-300">## Instructions</span></div>
<div> </div>
<div>1. Identify every factual claim in the entry (character names, statuses, relationships, locations, episode references, dates, quotes, plot events).</div>
<div>2. For each claim, verify it against breaking-bad-universe.md.</div>
<div>3. Flag any inaccuracies, inconsistencies, or missing context — be specific about what is wrong and what the correct information is.</div>
<div>4. Note any claims that cannot be verified from the reference document.</div>
<div>5. If the entry is fully accurate, confirm that explicitly.</div>
<div> </div>
<div>Respond with:</div>
<div> </div>
<div>- <strong class="text-white">Status</strong>: Accurate / Inaccurate / Partially Accurate / Unverifiable</div>
<div>- <strong class="text-white">Issues</strong> (if any): bulleted list of specific problems with corrections</div>
<div>- <strong class="text-white">Verified claims</strong>: brief list of facts that are confirmed correct</div>
</div>
<div class="flex flex-col gap-2 text-xs w-44 flex-shrink-0">
<div class="p-2 bg-emerald-900/20 rounded-lg border border-emerald-500/30">
<div class="text-emerald-300 font-bold mb-1">🔗 Linked doc</div>
<div class="text-gray-300">Markdown link to universe file — accuracy is only as good as the reference</div>
</div>
<div class="p-2 bg-cyan-900/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-bold mb-1">✂️ ${selection}</div>
<div class="text-gray-300">Select any lore entry in the editor, invoke — no copy-paste needed</div>
</div>
<div class="p-2 bg-purple-900/20 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-bold mb-1">📊 Structured output</div>
<div class="text-gray-300">Status + Issues + Verified — consistent format, easy to act on</div>
</div>
<div class="p-2 bg-gray-900/60 rounded-lg border border-gray-700/40">
<div class="text-gray-400 font-bold mb-1">💡 Click to select all</div>
<div class="text-gray-400">Click inside the code block to select the full prompt for copying</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 💬 Example: Step 3 — Test the Bad Lore Entry -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: Step 3 — Test the Bad Lore Entry</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 mb-3 text-xs text-gray-400">Select this lore entry in your editor, then run the prompt:</div>
<div class="relative z-10 font-mono text-base bg-red-900/20 rounded-xl border border-red-500/30 p-6 text-gray-200 leading-relaxed mb-5 select-all flex-1">
<div class="text-orange-400 font-bold mb-4 text-lg">/check-lore-accuracy</div>
<div class="text-gray-500 text-sm mb-3">Title: "Walter &amp; Jesse — Origin"</div>
<div class="text-base leading-loose">Walter White recruited Jesse Pinkman as his partner after reconnecting with him on the street. Jesse had been Walter's former student at the <span class="text-red-400 font-bold">University of New Mexico</span>, where Walter taught a chemistry course.</div>
</div>
<div class="relative z-10 p-4 bg-gray-900/60 rounded-xl border border-gray-600/40 text-sm text-gray-300 italic">
💭 <strong class="text-cyan-300">David:</strong> "I'm going to stop you right there. Walter White has a <em>Master's degree</em>. From the show. That he teaches at a high school is, frankly, the entire dramatic irony of the series. This is not a subtle error."
</div>
</div>

---

<!-- SLIDE: 📋 Example: Step 3 — Output (Violation Found) -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Step 3 — Output (Violation Found)</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 font-mono text-xs bg-gray-900/80 rounded-xl border border-red-500/30 p-4 text-gray-200 leading-relaxed">
<div class="text-red-400 font-bold mb-3 text-sm">Status: <span class="text-red-300">Inaccurate</span></div>
<div class="text-gray-400 font-semibold mb-2">Issues:</div>
<div class="space-y-2 mb-3 pl-3 border-l-2 border-red-500/40">
<div class="text-gray-300">Walter White taught at J.P. Wynne <span class="text-orange-300 font-bold">High School</span> — not the University of New Mexico. He was a high school chemistry teacher, not a university lecturer.</div>
<div class="text-gray-300">Jesse Pinkman is described as Walt's former student, which is correct, but the institution is wrong. The connection is from <span class="text-orange-300 font-bold">high school</span>, not a university.</div>
</div>
<div class="text-gray-400 font-semibold mb-2">Verified claims:</div>
<div class="space-y-1 pl-3 border-l-2 border-green-500/40">
<div class="text-green-300">✓ Walter White and Jesse Pinkman are partners</div>
<div class="text-green-300">✓ Jesse was Walter's former student</div>
<div class="text-green-300">✓ Jesse was a small-time meth cook prior to their partnership</div>
</div>
</div>
<div class="relative z-10 mt-4 p-3 bg-gray-900/60 rounded-xl border border-gray-600/40 text-xs text-gray-300 italic">
💭 <strong class="text-cyan-300">Sarah:</strong> "Yes, Marcus. Walter White was a <em>high school</em> teacher. This is literally the premise of the show. The prompt caught it. You're welcome."
</div>
</div>

---

<!-- SLIDE: 💬 Example: Step 4 — Test the Good Lore Entry -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: Step 4 — Test the Good Lore Entry</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 mb-3 text-xs text-gray-400">Select this lore entry in your editor, then run the prompt again:</div>
<div class="relative z-10 font-mono text-base bg-green-900/20 rounded-xl border border-green-500/30 p-6 text-gray-200 leading-relaxed mb-5 select-all flex-1">
<div class="text-orange-400 font-bold mb-4 text-lg">/lore-accuracy-check</div>
<div class="text-gray-500 text-sm mb-3">Title: "The Blue Sky Formula"</div>
<div class="text-base leading-loose">Walter White's methamphetamine, known on the street as "Blue Sky," achieved a purity level exceeding <span class="text-green-300 font-bold">99%</span> — far beyond any competitor. Its distinctive blue tint came from the synthesis method Walter developed at the Superlab.</div>
</div>
<div class="relative z-10 p-4 bg-gray-900/60 rounded-xl border border-gray-600/40 text-sm text-gray-300 italic">
💭 <strong class="text-cyan-300">Jessica:</strong> "Wait, so if it passes that means it's... good? Like, Copilot checked it and it was right? That's so cool. I feel like we just gave the app a immune system."
</div>
</div>

---

<!-- SLIDE: 📋 Example: Step 4 — Output (Partially Accurate) -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Step 4 — Output (Partially Accurate)</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 font-mono text-[10.5px] bg-gray-900/80 rounded-xl border border-yellow-500/30 p-4 text-gray-200 leading-relaxed mb-3 flex-1">
<div class="text-yellow-400 font-bold mb-2 text-xs">Status: <span class="text-yellow-300">Partially Accurate / Partially Unverifiable</span></div>
<div class="text-gray-400 font-semibold mb-1">Issues:</div>
<div class="space-y-1 mb-3 pl-3 border-l-2 border-yellow-500/40">
<div class="text-gray-300">The exact purity figure in the reference is <span class="text-orange-300 font-bold">99.1%</span>, not just "exceeding 99%" — minor but worth being precise in a lore entry.</div>
<div class="text-gray-300">The claim that the blue tint came from "the synthesis method Walter developed" is <span class="text-yellow-300">not verifiable</span> from breaking-bad-universe.md — the reference does not explain the chemical reason for the color.</div>
</div>
<div class="text-gray-400 font-semibold mb-1">Verified claims:</div>
<div class="space-y-1 pl-3 border-l-2 border-green-500/40">
<div class="text-green-300">✓ The product is known as "Blue Sky" (implied by the blue color reference)</div>
<div class="text-green-300">✓ Purity exceeds 99% — confirmed at 99.1% in the reference</div>
<div class="text-green-300">✓ The product has a distinctive blue color — confirmed</div>
<div class="text-green-300">✓ It was cooked in the Superlab — confirmed</div>
<div class="text-green-300">✓ It became known worldwide — confirmed explicitly in the reference</div>
</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-green-900/20 rounded-xl border border-green-500/30">
<div class="text-green-300 font-bold mb-1">Why this matters</div>
<div class="text-gray-300">A prompt that only flags violations is fragile — you need to confirm it doesn't false-positive on accurate content before trusting it</div>
</div>
<div class="p-3 bg-orange-900/20 rounded-xl border border-orange-500/30">
<div class="text-orange-300 font-bold mb-1">Now try it on your show</div>
<div class="text-gray-300">The same prompt works on any content piece — it reads the rules from your universe file, not from hardcoded character names</div>
</div>
</div>
</div>

---

<!-- SLIDE: Compounding Value -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Compounding Value</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-1">Every prompt file built here is a reusable team asset.</div>
<div class="text-sm text-gray-300">The work done in Module 3 becomes the stable foundation that Modules 4, 5, and 6 build on top of.</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-left">
<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">📈</div>
<div>
<div class="text-blue-300 font-bold">What Module 3 adds</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Immediate value</div>
</div>
</div>
<div class="space-y-2 text-xs text-gray-300 leading-snug">
<div class="p-2.5 bg-gray-900/40 rounded-lg">Turn good prompts into shared team assets.</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg">Get more consistent outputs from the same guidance.</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg">Reduce setup and mental load during repeated work.</div>
</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🚀</div>
<div>
<div class="text-purple-300 font-bold">How later modules benefit</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Compounding payoff</div>
</div>
</div>
<div class="space-y-2 text-xs text-gray-300 leading-snug">
<div class="p-2.5 bg-gray-900/40 rounded-lg"><strong>Module 4:</strong> clearer task shapes for skills.</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg"><strong>Module 5:</strong> stable entry points for integrations.</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg"><strong>Module 6:</strong> more trustworthy custom agents.</div>
</div>
</div>
</div>

<div class="mt-5 p-3 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-center">
<div class="text-base text-yellow-300 font-semibold">Reusable prompts compound because every future customization starts cleaner.</div>
<div class="text-sm text-gray-300 mt-1">Stable entry points now mean richer workflow packaging later.</div>
</div>

---

<!-- SLIDE: Module Checklist -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Module Checklist</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-1">By the end of Module 3, the team should have reusable prompt habits.</div>
<div class="text-sm text-gray-300">Not just a clever chat. Shared prompt files that stay grounded in current docs and current context.</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">
<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">📚</div>
<div>
<div class="text-blue-300 font-bold">Refresh the source of truth</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 3.1</div>
</div>
</div>
<div class="space-y-2 text-gray-300">
<div>• Create a reusable docs-refresh prompt for post-change cleanup</div>
<div>• Keep <code>ARCHITECTURE.md</code> and team instructions aligned with the repo</div>
</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🧠</div>
<div>
<div class="text-purple-300 font-bold">Save one strong team prompt</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 3.2</div>
</div>
</div>
<div class="space-y-2 text-gray-300">
<div>• Create a reusable prompt file with one clear review job</div>
<div>• Point it at living docs and use variables when context is already known</div>
</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30 shadow-lg shadow-emerald-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-lg">🎯</div>
<div>
<div class="text-emerald-300 font-bold">Encode domain knowledge</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 3.3</div>
</div>
</div>
<div class="space-y-2 text-gray-300">
<div>• Build an accuracy-check prompt referencing your universe file</div>
<div>• Validate canon rules catch errors and pass clean content</div>
</div>
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-4 rounded-xl bg-gray-900/60 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">What good looks like</div>
<div class="text-sm text-gray-300">Three prompt files the team would actually reuse: one that keeps the docs current, one that captures character-review expertise, and one that applies canon accuracy rules on demand.</div>
</div>
<div class="p-4 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">Why this matters</div>
<div class="text-sm text-gray-300">Later modules get better when the team already knows how to package repeatable work into invokable, trustworthy prompt assets.</div>
</div>
</div>

---

<!-- SLIDE: 📚 Keep the Foundation Evergreen -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 Keep the Foundation Evergreen</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div><div class="mt-4 p-5 bg-gradient-to-r from-blue-900/25 via-purple-900/25 to-orange-900/20 rounded-2xl border border-white/10 text-center">
<div class="text-lg font-bold text-white">Before Module 4, document your new prompt toolkit.</div>
<div class="text-sm text-gray-300 mt-2">Update <span class="font-mono text-blue-200">ARCHITECTURE.md</span> and <span class="font-mono text-purple-200">.github/copilot-instructions.md</span> so the skills you build next know the prompts already exist.</div>
</div><div class="mt-4 font-mono text-sm bg-gray-900/80 rounded-xl border border-blue-500/30 p-5 text-gray-200">
<div class="text-xs text-gray-500 mb-3">You already built the tool. Run it.</div>
<div class="text-orange-400 font-bold">/refresh-docs</div>
<div class="text-gray-400 mt-3 text-xs font-sans">The <span class="font-mono text-blue-300">refresh-docs.prompt.md</span> you built in Exercise 3.1 updates <span class="font-mono text-blue-200">ARCHITECTURE.md</span> and <span class="font-mono text-purple-200">copilot-instructions.md</span> with the new prompt files — so Modules 4, 5, and 6 know they exist.</div>
</div><div class="mt-4 p-4 rounded-xl bg-gradient-to-r from-orange-900/30 via-yellow-900/20 to-orange-900/30 border border-orange-500/30 text-center">
<div class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">🔁 Build the habit</div>
<div class="text-sm text-white font-semibold">Run <span class="font-mono text-orange-300">/refresh-docs</span> after every meaningful change.</div>
<div class="text-xs text-gray-400 mt-1">Each PR that updates docs keeps the foundation relevant — so Copilot always has accurate context to work from.</div>
</div>

---

<!-- SLIDE: Module 3 Is Locked In -->
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
Module 3 Is Locked In
</h1>
<div class="relative z-10 mb-6">
<span class="px-5 py-2 bg-gradient-to-r from-purple-600/80 to-red-600/80 rounded-full text-white text-base font-medium shadow-lg shadow-purple-500/25">
🧠 Next Up: Module 4 — Agent Skills
</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 max-w-3xl w-full px-6 mb-6">
<div class="p-3 bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30 text-center">
<div class="text-xl mb-1">🔁</div>
<div class="text-orange-300 font-bold text-sm">You Captured Repetition</div>
<div class="text-gray-400 text-xs mt-1">High-value prompts are now saved as reusable team entry points</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30 text-center">
<div class="text-xl mb-1">🔗</div>
<div class="text-red-300 font-bold text-sm">You Linked the Truth</div>
<div class="text-gray-400 text-xs mt-1">Prompts stay aligned by pointing to current docs instead of stale copied text</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xl mb-1">⚙️</div>
<div class="text-purple-300 font-bold text-sm">Now Package Expertise</div>
<div class="text-gray-400 text-xs mt-1">Module 4 moves from reusable prompts into reusable domain-specific skills</div>
</div>
</div>
<div class="relative z-10 max-w-3xl w-full px-6">
<div class="p-4 bg-gradient-to-br from-orange-900/30 via-red-900/20 to-purple-900/30 rounded-2xl border border-orange-500/30 shadow-lg shadow-orange-900/20 text-center">
<p class="text-base text-gray-200 leading-snug !m-0">Prompt files make repeated work reusable. <span class="text-white font-semibold">Agent skills make deeper workflow knowledge reusable for the whole team.</span></p>
</div>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<!-- SLIDE: 💭 The Team, After Module 3 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💭 The Team, After Module 3</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-amber-400">
<div class="text-xs font-bold text-amber-300 mb-0.5">Jessica</div>
<div class="text-xs text-gray-500 italic mb-2">The Eager Junior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I saved my first prompt file today. Now the whole team can run it. That&#39;s... that&#39;s just software, but for prompts."</div>
<div class="text-xs text-gray-500">First contribution the whole team will actually use.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-blue-400">
<div class="text-xs font-bold text-blue-300 mb-0.5">David</div>
<div class="text-xs text-gray-500 italic mb-2">The Thoughtful Architect</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"A prompt file is just an interface contract for a repeatable workflow. We have been doing this with scripts for decades."</div>
<div class="text-xs text-gray-500">Thirty years of patterns, now expressible in markdown.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-green-400">
<div class="text-xs font-bold text-green-300 mb-0.5">Sarah</div>
<div class="text-xs text-gray-500 italic mb-2">The Skeptical Senior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I ran the doc refresh prompt on three files. Same quality, zero context-setting. This is what reuse should feel like."</div>
<div class="text-xs text-gray-500">Quality consistent enough to stop explaining it.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-purple-400">
<div class="text-xs font-bold text-purple-300 mb-0.5">Elena</div>
<div class="text-xs text-gray-500 italic mb-2">The Pragmatic Engineer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Does the prompt file version? Can I see diffs? ...Yes? Then this is just code review for prompts."</div>
<div class="text-xs text-gray-500">Version control solved every objection she had.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-orange-400">
<div class="text-xs font-bold text-orange-300 mb-0.5">Marcus</div>
<div class="text-xs text-gray-500 italic mb-2">The Curious Tinkerer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Saving prompts as files is like... remembering things permanently. For the whole team. That&#39;s kind of amazing, actually."</div>
<div class="text-xs text-gray-500">Immediately saved four more.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-cyan-400">
<div class="text-xs font-bold text-cyan-300 mb-0.5">Rafael</div>
<div class="text-xs text-gray-500 italic mb-2">The Pragmatic Lead</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Prompt files encode what 'done' looks like. Nobody debates it because it&#39;s in the file."</div>
<div class="text-xs text-gray-500">Definition of done, shipped in a .prompt.md.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Reference Material -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-10 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/15 via-gray-900/40 to-red-900/15"></div>
<div class="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-red-500/10 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 text-center mb-5">
<div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Further Reading</div>
<h1 class="!text-3xl !font-bold bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent !mb-0">Reference Material</h1>
<div class="text-sm text-gray-400 mt-1">Official documentation for Module 3 — Custom Prompts</div>
</div>

<div class="relative z-10 grid grid-cols-2 gap-3">
<a href="https://code.visualstudio.com/docs/copilot/customization/prompt-files" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-orange-500/40 transition-colors no-underline">
<div class="font-semibold text-orange-300 text-sm mb-1">Prompt Files in VS Code</div>
<div class="text-xs text-gray-400">Complete guide to creating and using .prompt.md files, frontmatter, variables, and invocation</div>
</a>
<a href="https://code.visualstudio.com/api/references/workspace-context" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-red-500/40 transition-colors no-underline">
<div class="font-semibold text-red-300 text-sm mb-1">Workspace Context Reference</div>
<div class="text-xs text-gray-400">All variables available in prompt files — ${input:name}, ${selection}, ${file}, ${workspaceFolder}</div>
</a>
<a href="https://github.com/stars/aaravnavani/lists/copilot-customization" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-purple-500/40 transition-colors no-underline">
<div class="font-semibold text-purple-300 text-sm mb-1">Awesome Copilot — Community Prompts</div>
<div class="text-xs text-gray-400">Community-contributed prompt examples to inspire your own reusable workflows</div>
</a>
<a href="https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/40 transition-colors no-underline">
<div class="font-semibold text-cyan-300 text-sm mb-1">Repository Custom Instructions</div>
<div class="text-xs text-gray-400">How .github/copilot-instructions.md and prompt files layer together as a context stack</div>
</a>
<a href="https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-orange-500/40 transition-colors no-underline">
<div class="font-semibold text-orange-300 text-sm mb-1">Agent Mode in VS Code</div>
<div class="text-xs text-gray-400">Using agent mode to scaffold prompt files and execute multi-step tasks autonomously</div>
</a>
<a href="https://code.visualstudio.com/docs/copilot/copilot-customization" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-red-500/40 transition-colors no-underline">
<div class="font-semibold text-red-300 text-sm mb-1">Customize AI in VS Code</div>
<div class="text-xs text-gray-400">Overview of all Copilot customization primitives — instructions, prompt files, and how they compose</div>
</a>
</div>
</div>