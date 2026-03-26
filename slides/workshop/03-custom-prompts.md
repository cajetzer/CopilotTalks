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
The standards are set. The plan mode works. Now let's make the workflows that keep working — without rebuilding them from memory each time.
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
<div class="text-2xl font-bold text-white mb-1">Three prompt files. One reusable habit. Zero repeated setup.</div>
<div class="text-sm text-orange-100">A docs-refresh prompt, a context-aware review prompt, and a canon-accuracy checker built on your universe file</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-4 text-sm text-left">
<div class="p-4 rounded-lg border-l-4 border-blue-500 bg-gray-900/60">
<div class="font-bold text-blue-300 mb-1">3.1 — Refresh the source of truth</div>
<div class="text-gray-400 font-mono text-xs mb-2">refresh-docs.prompt.md</div>
<div class="text-gray-300">A reusable prompt that keeps <code>ARCHITECTURE.md</code> and team instructions aligned with the repo after code changes.</div>
</div>
<div class="p-4 rounded-lg border-l-4 border-purple-500 bg-gray-900/60">
<div class="font-bold text-purple-300 mb-1">3.2 — Save a reusable feature brief</div>
<div class="text-gray-400 font-mono text-xs mb-2">feature-kickoff.prompt.md</div>
<div class="text-gray-300">A prompt that takes a feature name as input and returns a structured brief — files, patterns, sequencing, and first PR scope — grounded in current docs.</div>
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
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Why Prompt Files Matter Here</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-3 gap-5 mt-4 text-left">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Less retyping</div>
    <div class="text-sm text-gray-300">The team stops rebuilding the same careful prompt every time a familiar task appears.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Less standards drift</div>
    <div class="text-sm text-gray-300">Prompts can point to current architecture and instruction files instead of embedding stale copies.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">More reusable expertise</div>
    <div class="text-sm text-gray-300">A strong review prompt or debugging prompt becomes something the entire team can benefit from immediately.</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl font-bold text-white">Prompt files make standards easier to invoke than to forget.</div>
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

<!-- SLIDE: Before and After -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/15 via-transparent to-green-900/15"></div>
<div class="relative z-10 grid grid-cols-2 gap-8">
<div class="pr-4 border-r border-white/10">
<div class="mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-red-700/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">❌ Before</span>
</div>
<div class="space-y-4 text-left">
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">High-value prompts are trapped in notes</div>
  <div class="text-sm text-gray-300">The team retypes or copy-pastes prompts instead of treating them like reusable assets.</div>
</div>
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Manual setup adds friction</div>
  <div class="text-sm text-gray-300">Every review, test, or debugging prompt requires recreating context by hand.</div>
</div>
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Standards are easy to miss</div>
  <div class="text-sm text-gray-300">A forgotten checklist item or stale copied guidance leads to inconsistent outcomes.</div>
</div>
</div>
</div>
<div class="pl-4">
<div class="mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-700/80 to-green-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ After</span>
</div>
<div class="space-y-4 text-left">
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">Invocation is instant</div>
  <div class="text-sm text-gray-300">The team can run strong prompts in seconds instead of rebuilding them from memory.</div>
</div>
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">Context is captured more reliably</div>
  <div class="text-sm text-gray-300">Variables and linked docs keep the prompt grounded in the current file, current selection, and current standards.</div>
</div>
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">Team reuse becomes real</div>
  <div class="text-sm text-gray-300">A good prompt stops being personal know-how and starts becoming shared workflow.</div>
</div>
</div>
</div>
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

<!-- SLIDE: Exercise Roadmap -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercise Roadmap</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="mt-4 p-5 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-2">This module is one clean progression.</div>
<div class="text-sm text-gray-300">Refresh the docs first. Then save one stronger review prompt with living-doc links and variables. Then encode domain knowledge as a systematic accuracy check.</div>
</div>

<div class="mt-6 overflow-hidden rounded-2xl border border-white/10">
<table class="w-full text-left text-sm">
<thead class="bg-gray-900/80 text-gray-300 uppercase tracking-wider text-xs">
<tr>
<th class="p-3">#</th>
<th class="p-3">Exercise</th>
<th class="p-3">Focus</th>
<th class="p-3">Lead</th>
<th class="p-3">Time</th>
</tr>
</thead>
<tbody class="bg-gray-950/60 text-gray-300">
<tr class="border-t border-white/5">
<td class="p-3 font-semibold text-blue-300">3.1</td>
<td class="p-3">Creating a Docs Refresh Prompt</td>
<td class="p-3">Keep foundational docs evergreen</td>
<td class="p-3">Sarah ⭐</td>
<td class="p-3">6 min</td>
</tr>
<tr class="border-t border-white/5 bg-gray-900/40">
<td class="p-3 font-semibold text-cyan-300">3.2</td>
<td class="p-3">Creating a Context-Aware Prompt File</td>
<td class="p-3">Save one reusable prompt with docs, roadmap, and variables</td>
<td class="p-3">Marcus ⭐</td>
<td class="p-3">12 min</td>
</tr>
<tr class="border-t border-white/5">
<td class="p-3 font-semibold text-emerald-300">3.3</td>
<td class="p-3">Show-Accuracy Check Prompt</td>
<td class="p-3">Encode domain knowledge as a reusable accuracy check</td>
<td class="p-3">Marcus ⭐</td>
<td class="p-3">12 min</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
<div class="text-white font-semibold">Three steps, one compounding pattern.</div>
<div class="text-sm text-gray-300">Refresh the docs first. Then standardize review work with a living-docs prompt. Then wire your domain knowledge into an accuracy check anyone can invoke.</div>
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
<div class="text-lg font-bold text-white">3 exercises · ~30 minutes · shared leadership</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-blue-300 font-bold text-base">3.1</div>
<span class="text-xs text-gray-500">Sarah ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Refresh the docs</div>
<div class="text-gray-400 text-xs leading-snug">Update stale ARCHITECTURE.md and instructions with a reusable prompt file</div>
</div>
<div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-cyan-300 font-bold text-base">3.2</div>
<span class="text-xs text-gray-500">Marcus ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Save one stronger prompt</div>
<div class="text-gray-400 text-xs leading-snug">Turn a winning one-off prompt into a reusable .prompt.md for the whole team</div>
</div>
<div class="p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-emerald-300 font-bold text-base">3.3</div>
<span class="text-xs text-gray-500">Marcus ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Encode domain knowledge</div>
<div class="text-gray-400 text-xs leading-snug">Build a prompt that pulls show universe context into every accuracy check</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-900/40 rounded-lg border border-white/10 text-center text-xs text-gray-400">
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
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 6 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-cyan-400 text-sm text-gray-300">
After every meaningful code change, the team needs to refresh <span class="font-mono text-blue-200">ARCHITECTURE.md</span> and <span class="font-mono text-blue-200">.github/copilot-instructions.md</span>. <strong class="text-white">That is exactly the kind of repeated, high-value work a reusable prompt should handle first.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create a workspace prompt like <span class="font-mono text-blue-300">refresh-docs.prompt.md</span> that updates foundational docs after code changes</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Tell the prompt to review the current workspace and update <span class="font-mono text-blue-300">ARCHITECTURE.md</span> and <span class="font-mono text-blue-300">copilot-instructions.md</span> only when the codebase has changed</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Invoke it after a change and confirm it keeps the docs aligned with current reality instead of stale memory</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The prompt is reusable after any meaningful code change</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> It updates the two source-of-truth docs without turning into a generic repo rewrite</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The team sees evergreen docs as leverage, not cleanup</div>
</div>
<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-xs text-gray-300 italic">💭 <strong class="text-blue-300">Sarah:</strong> "If we do this after every code change, the rest of our prompts get smarter without extra effort."</div>
</div>
</div>
</div>

---

<!-- SLIDE: Example refresh-docs.prompt.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: refresh-docs.prompt.md</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-blue-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-gray-500 mb-2">---</div>
<div class="text-blue-300">name: Refresh Docs</div>
<div class="text-blue-300">description: Update ARCHITECTURE.md and copilot-instructions.md after code changes</div>
<div class="text-blue-300">mode: agent</div>
<div class="text-gray-500 mb-2">---</div>
<div class="text-gray-400 mb-3">Review the current workspace and update the two foundational docs if the codebase has changed since they were last written.</div>
<div class="text-purple-300 mb-1">## What to update</div>
<div class="text-gray-400">- <span class="text-blue-100">ARCHITECTURE.md</span>: Any new modules, file relationships, or workflow boundaries</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">.github/copilot-instructions.md</span>: Team expectations, review patterns, naming conventions</div>
<div class="text-purple-300 mb-1">## Rules</div>
<div class="text-gray-400">- Only update sections that have actually changed</div>
<div class="text-gray-400">- Do not rewrite sections that are still accurate</div>
<div class="text-gray-400">- Keep both files concise and actionable</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Invoke with:</strong> <span class="font-mono text-blue-300">/Refresh-Docs</span> &nbsp; <strong class="text-gray-300">After:</strong> any meaningful code change &nbsp; <strong class="text-gray-300">Result:</strong> evergreen source-of-truth
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
<h2 class="!text-2xl !font-bold text-white !m-0">Feature Kickoff Brief</h2>
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

<!-- SLIDE: Exercise 3.3 Data-Accuracy Check Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30 flex-shrink-0">3.3</div>
<div>
<div class="text-emerald-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Data-Accuracy Check Prompt</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah 🤝</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 12 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-3 bg-gray-900/60 rounded-xl border-l-4 border-emerald-400 text-sm text-gray-300">
Marcus shipped Copilot-generated bios in a PR. Sarah reviewed it and found three canon errors. She's not doing that every time — and neither is Marcus. The canon rules are in <span class="font-mono text-emerald-200">docs/[show]-universe.md</span>. <strong class="text-white">Marcus needs a prompt that applies them automatically, before anything hits review.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0">1</span><span class="text-gray-300">In Agent mode, ask Copilot to scaffold <span class="font-mono text-emerald-300">data-accuracy-check.prompt.md</span> referencing <span class="font-mono text-emerald-300">docs/[show]-universe.md</span></span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0">2</span><span class="text-gray-300">Review: <span class="font-mono text-cyan-300">#file:</span> present, <span class="font-mono text-cyan-300">${selection}</span> used, no hardcoded names, factual-only</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0">3</span><span class="text-gray-300">Test: select the known-bad Jesse bio → prompt must flag <span class="text-red-300">"college student"</span></span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0">4</span><span class="text-gray-300">Test: select the correct Walter White bio → prompt must pass with no violations</span></div>
</div>
</div>
<div class="space-y-2">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Prompt scaffolded in Agent (or Plan) mode</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> <span class="font-mono">${selection}</span> used — no hardcoded character names</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Flags "former college student" as a violation</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Walter White bio passes with no false positives</div>
</div>
<div class="mt-3 p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/30 text-xs text-gray-300 italic">💭 <strong class="text-cyan-300">Marcus:</strong> "Wait — if the rules are already in the file, I just... point the prompt at it? I don't have to hold the whole show in my head every time?"</div>
</div>
</div>
</div>

---

<!-- SLIDE: 💬 Example: Step 1 — Scaffold the Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: Step 1 — Scaffold the Prompt</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 mb-3 text-xs text-gray-400">In Agent mode, ask Copilot to create the file — describe what you want, let it do the scaffolding:</div>
<div class="relative z-10 font-mono text-sm bg-gray-900/80 rounded-xl border border-orange-500/30 p-5 text-gray-200 leading-relaxed mb-4">
Create <span class="text-emerald-300">.github/prompts/data-accuracy-check.prompt.md</span><br><br>
It should check content against show's canon rules in <span class="text-cyan-300">#file:docs/[show]-universe.md</span>.<br>
Use <span class="text-orange-300 font-bold">${selection}</span> for the content to check.<br>
Only flag factual violations — not stylistic choices.
</div>
<div class="relative z-10 grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20">
<div class="text-orange-300 font-bold mb-1">🔑 Why Agent mode</div>
<div class="text-gray-300">Agent mode can create the file in <span class="font-mono">.github/prompts/</span> directly — no copy-paste required</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20">
<div class="text-orange-300 font-bold mb-1">👀 What to watch for</div>
<div class="text-gray-300">Copilot may generate plausible-looking structure but miss the <span class="font-mono">#file:</span> reference — that's what Step 2 catches</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: Step 2 — The Generated Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Step 2 — The Generated Prompt</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="font-mono text-xs bg-gray-900/80 rounded-lg border border-emerald-500/30 p-4 text-gray-300 leading-relaxed">
<div class="text-gray-500">---</div>
<div class="text-emerald-300">name: data-accuracy-check</div>
<div class="text-emerald-300">description: 'Validates content against show canon'</div>
<div class="text-emerald-300">mode: ask</div>
<div class="text-gray-500 mb-2">---</div>
<div class="text-gray-400 mb-2">Check the following content against established canon in<br><span class="text-blue-300">[docs/[show]-universe.md](../docs/[show]-universe.md)</span>.</div>
<div class="text-gray-400 mb-2">Content to review:<br><span class="text-cyan-200">${selection}</span></div>
<div class="text-gray-400 mb-1">For each violation found:</div>
<div class="text-gray-400">- Quote the problematic text</div>
<div class="text-gray-400">- Explain the canon rule</div>
<div class="text-gray-400 mb-2">- Suggest a correction</div>
<div class="text-gray-500 text-[10px] italic">Only flag factual contradictions — not stylistic choices.</div>
</div>
<div class="flex flex-col gap-3 text-xs">
<div class="p-3 bg-emerald-900/20 rounded-lg border border-emerald-500/30">
<div class="text-emerald-300 font-bold mb-1">✅ Check for these</div>
<div class="text-gray-300 space-y-1">
<div>☐ <span class="font-mono text-cyan-300">#file:</span> or markdown link to <span class="font-mono">universe.md</span></div>
<div>☐ <span class="font-mono text-cyan-300">${selection}</span> as the input variable</div>
<div>☐ No hardcoded character names in the prompt body</div>
<div>☐ "Factual only" instruction present</div>
</div>
</div>
<div class="p-3 bg-red-900/20 rounded-lg border border-red-500/30">
<div class="text-red-300 font-bold mb-1">❌ Common Copilot mistakes</div>
<div class="text-gray-300 space-y-1">
<div>Missing <span class="font-mono">#file:</span> — falls back to training data</div>
<div>Hardcoded "Jesse Pinkman" — not reusable</div>
<div>Stylistic flags — noisy, not useful</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 💬 Example: Step 3 — Test the Bad Bio -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: Step 3 — Test the Bad Bio</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 mb-3 text-xs text-gray-400">Select this text in your editor, then run the prompt:</div>
<div class="relative z-10 font-mono text-sm bg-red-900/20 rounded-xl border border-red-500/30 p-4 text-gray-200 leading-relaxed mb-4">
<div class="text-orange-400 font-bold mb-3">/data-accuracy-check</div>
<div>Jesse Pinkman is Walter White's former <span class="text-red-400 font-bold">college student</span> and chemistry protégé. Now working as Walter's partner in methamphetamine production, Jesse handles street-level distribution through his connections in Albuquerque's drug scene.</div>
</div>
<div class="relative z-10 p-3 bg-orange-900/20 rounded-xl border border-orange-400/40 text-xs text-gray-300">
<span class="text-orange-300 font-bold">Expected:</span> The prompt should flag <span class="text-red-300 font-mono">"college student"</span> — Walter White was a high school chemistry teacher, not a college professor
</div>
</div>

---

<!-- SLIDE: 📋 Example: Step 3 — Output (Violation Found) -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Step 3 — Output (Violation Found)</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 font-mono text-sm bg-gray-900/80 rounded-xl border border-red-500/30 p-5 text-gray-200 leading-relaxed">
<div class="text-red-400 font-bold mb-3">❌ ACCURACY VIOLATION FOUND</div>
<div class="mb-3"><span class="text-gray-500">Problematic text:</span> <span class="text-red-300">"Walter White's former college student"</span></div>
<div class="mb-3"><span class="text-gray-500">Canon rule:</span> <span class="text-gray-300">Walter White was a chemistry teacher at J.P. Wynne <span class="text-orange-300 font-bold">High School</span>, not a college or university. Jesse Pinkman was his former <span class="text-green-300 font-bold">high school</span> student.</span></div>
<div class="mb-3"><span class="text-gray-500">Source:</span> <span class="text-blue-300">docs/breaking-bad-universe.md — Character Facts</span></div>
<div><span class="text-gray-500">Suggested correction:</span> <span class="text-green-300">"Walter White's former high school student"</span></div>
</div>
<div class="relative z-10 mt-4 p-3 bg-green-900/20 rounded-xl border border-green-500/30 text-xs text-gray-300">
<span class="text-green-300 font-bold">✅ This is the right result</span> — the prompt caught an error that Copilot introduced, using the canon rules Elena encoded in Module 1
</div>
</div>

---

<!-- SLIDE: 💬 Example: Step 4 — Test the Good Bio -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: Step 4 — Test the Good Bio</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 mb-3 text-xs text-gray-400">Select this text in your editor, then run the prompt again:</div>
<div class="relative z-10 font-mono text-sm bg-green-900/20 rounded-xl border border-green-500/30 p-4 text-gray-200 leading-relaxed mb-4">
<div class="text-orange-400 font-bold mb-3">/data-accuracy-check</div>
<div>Walter White is a former Albuquerque <span class="text-green-300 font-bold">high school chemistry teacher</span> diagnosed with inoperable lung cancer. Faced with mounting medical bills, he begins cooking methamphetamine with former student Jesse Pinkman.</div>
</div>
<div class="relative z-10 p-3 bg-orange-900/20 rounded-xl border border-orange-400/40 text-xs text-gray-300">
<span class="text-orange-300 font-bold">Expected:</span> Clean pass — no violations. This confirms the prompt isn't over-flagging accurate content.
</div>
</div>

---

<!-- SLIDE: 📋 Example: Step 4 — Output (Clean Pass) -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Step 4 — Output (Clean Pass)</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 font-mono text-sm bg-gray-900/80 rounded-xl border border-green-500/30 p-5 text-gray-200 leading-relaxed mb-4">
<div class="text-green-400 font-bold mb-3">✅ ACCURACY CHECK PASSED</div>
<div class="mb-3 text-gray-300">All facts in this content are consistent with <span class="text-blue-300">docs/breaking-bad-universe.md</span>.</div>
<div class="text-gray-500">No violations found.</div>
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
<div class="relative z-10 text-base text-gray-200 max-w-3xl px-10 mb-6 leading-snug">
Prompt files make repeated work reusable. <span class="text-white font-semibold">Agent skills make deeper workflow knowledge reusable for the whole team.</span>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
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
---

<!-- SLIDE: Reusable prompts turn one good request into a team habit -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-8 py-4">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-orange-900/20"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/12 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/12 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 text-center mb-3">
<div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Module 3 impact</div>
<h1 class="!text-2xl !font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent !mb-2">
Reusable prompts turn one good request into a team habit
</h1>
<div class="text-sm text-gray-300 max-w-4xl mx-auto">
The team stops rewriting good asks from memory and starts reusing proven entry points.
</div>
</div>

<div class="relative z-10 grid grid-cols-5 gap-3">
<div class="p-3 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30">
<div class="text-blue-300 font-bold text-sm mb-2">Sarah</div>
<div class="text-xs text-white leading-snug mb-2">"I&#39;ve been skeptical about every shortcut for 15 years. This one actually reduces the &#39;what did you mean?&#39; review comments."</div>
<div class="text-xs text-gray-400">15 years of skepticism, finally paid off.</div>
</div>

<div class="p-3 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30">
<div class="text-emerald-300 font-bold text-sm mb-2">Marcus</div>
<div class="text-xs text-white leading-snug mb-2">"Sorry — was half-reading something. But this is like bookmarking the exact tab you need instead of googling it every time."</div>
<div class="text-xs text-gray-400">He snapped back in at exactly the right moment.</div>
</div>

<div class="p-3 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30">
<div class="text-orange-300 font-bold text-sm mb-2">David</div>
<div class="text-xs text-white leading-snug mb-2">"Technically it&#39;s not that the prompt gets smarter — the context stays stable. But yes, that&#39;s precisely why the output quality improves."</div>
<div class="text-xs text-gray-400">Correct framing, correct conclusion.</div>
</div>

<div class="p-3 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-gray-900/50 border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-sm mb-2">Elena</div>
<div class="text-xs text-white leading-snug mb-2">"I kept waiting for it to drift. It didn&#39;t. The prompt stays honest because the docs it references stay honest. That&#39;s actually a sound design."</div>
<div class="text-xs text-gray-400">Suspicious until proven otherwise. This passed.</div>
</div>

<div class="p-3 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
<div class="text-purple-300 font-bold text-sm mb-2">Rafael</div>
<div class="text-xs text-white leading-snug mb-2">"Already mapped this to Q3. Every prompt file we ship is a reduction in onboarding friction. That&#39;s an OKR."</div>
<div class="text-xs text-gray-400">He was already on the next one.</div>
</div>
</div>

<div class="relative z-10 mt-3 p-2 rounded-xl bg-gradient-to-r from-purple-900/25 via-blue-900/20 to-orange-900/20 border border-white/10 text-center">
<div class="text-white font-semibold">This is what the module changes in day-to-day work.</div>
<div class="text-xs text-gray-300 mt-1">The payoff shows up in how the team thinks, coordinates, and ships.</div>
</div>
</div>