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
updated: 2026-03-25
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
The standards are documented, and we've proved they work by planning features. I want to capture our best prompts so that they don't only live in people’s heads, sticky notes, or old chat history. Great prompts can be a <span class="text-orange-300 font-semibold">reusable team asset.</span>
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

<div class="relative z-10 flex items-stretch gap-1 text-[10px] mt-4 px-4">
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
    <div class="font-bold text-gray-400 text-xs">M1</div>
    <div class="text-gray-500 mt-0.5">Instructions</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
    <div class="font-bold text-gray-400 text-xs">M2</div>
    <div class="text-gray-500 mt-0.5">Plan Mode</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gradient-to-b from-orange-600/80 to-orange-800/60 rounded-lg border border-orange-400/50 text-center shadow-lg shadow-orange-900/30">
    <div class="font-bold text-white text-xs">M3</div>
    <div class="text-orange-200 mt-0.5">Prompts</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M4</div>
    <div class="text-gray-500 mt-0.5">Skills</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M5</div>
    <div class="text-gray-500 mt-0.5">MCP</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M6</div>
    <div class="text-gray-500 mt-0.5">Agents</div>
  </div>
</div>
</div>

---

<!-- SLIDE: What You'll Build -->
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 What You'll Build</span>
</div>

<div class="max-w-5xl mx-auto mt-4">

<div class="p-6 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg shadow-blue-500/20 text-center mb-8">
<div class="text-3xl font-bold text-white mb-2">
Two prompt files. One reusable habit. Zero repeated setup.
</div>
<div class="text-blue-100 text-lg">
A docs-refresh prompt and a review prompt that stays grounded in living documentation
</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm text-left">
<div class="p-4 rounded-lg border-l-4 border-blue-500 bg-gray-800">
<div class="font-bold text-blue-300 mb-1">3.1 — Refresh the source of truth</div>
<div class="text-gray-400 font-mono text-xs mb-2">refresh-docs.prompt.md</div>
<div class="text-gray-300">A reusable prompt that keeps <code>ARCHITECTURE.md</code> and team instructions aligned with the repo after code changes.</div>
</div>
<div class="p-4 rounded-lg border-l-4 border-purple-500 bg-gray-800">
<div class="font-bold text-purple-300 mb-1">3.2 — Save one strong team prompt</div>
<div class="text-gray-400 font-mono text-xs mb-2">character-review.prompt.md</div>
<div class="text-gray-300">A review prompt that links to living docs and uses variables so the team's best review expertise is always one command away.</div>
</div>
</div>

<div class="mt-6 p-3 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg border border-blue-500/30 text-center text-sm text-gray-300">
💡 <strong class="text-blue-300">Your best prompts stop being personal notes</strong> and start becoming shared team functions.
</div>
</div>

---

<!-- SLIDE: What Prompt Files Actually Are -->
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 What Prompt Files Actually Are</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-4 text-left">

<div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30 shadow-lg shadow-orange-500/10">
<div class="text-orange-300 font-bold mb-3">Think of them like functions</div>
<ul class="list-none pl-0 m-0 text-sm text-gray-300 space-y-2">
<li>Invoked on demand</li>
<li>Named and discoverable</li>
<li>Parameterized with variables</li>
<li>Designed for specific repeatable tasks</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30 shadow-lg shadow-purple-500/10">
<div class="text-purple-300 font-bold mb-3">Each file has two layers</div>
<ul class="list-none pl-0 m-0 text-sm text-gray-300 space-y-2">
<li>YAML frontmatter for name, agent, model, tools</li>
<li>A body that explains the task and expected output</li>
<li>Optional links to docs and standards</li>
<li>Optional built-in or input variables</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30 shadow-lg shadow-blue-500/10">
<div class="text-blue-300 font-bold mb-3">Workspace prompts</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>Live in <code>.github/prompts/</code></li>
<li>Are version-controlled and team-visible</li>
<li>Work best for project-specific workflows</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-red-900/30 to-gray-900/40 border border-red-500/30 shadow-lg shadow-red-500/10">
<div class="text-red-300 font-bold mb-3">User prompts</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>Live in your VS Code profile</li>
<li>Follow you across projects</li>
<li>Work best for personal, reusable habits</li>
</ul>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-red-900/20 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold">Prompt files are not just shortcuts. They are reusable context orchestrators.</div>
</div>

---

<!-- SLIDE: Why Prompt Files Matter Here -->
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Why Prompt Files Matter Here</span>
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
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔎 What a Strong Prompt File Includes</span>
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

<!-- SLIDE: How Prompt Files Build on the Foundation -->
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 How Prompt Files Build on the Foundation</span>
</div>

<div class="flex flex-col items-center gap-4 mt-4 text-center">

  <div class="w-full max-w-4xl p-5 rounded-xl bg-gradient-to-r from-blue-900/40 to-gray-900/40 border border-blue-500/30 text-left">
    <div class="text-blue-300 font-semibold mb-1">Module 1</div>
    <div class="text-white font-bold text-lg">Architecture and instructions became the source of truth</div>
  </div>

  <div class="text-2xl text-gray-500">↓</div>

  <div class="w-full max-w-4xl p-5 rounded-xl bg-gradient-to-r from-purple-900/40 to-gray-900/40 border border-purple-500/30 text-left">
    <div class="text-purple-300 font-semibold mb-1">Module 3</div>
    <div class="text-white font-bold text-lg">Prompt files link to those sources instead of copying them</div>
  </div>

  <div class="text-2xl text-gray-500">↓</div>

  <div class="w-full max-w-4xl p-5 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10">
    <div class="text-white font-bold text-xl">Result: when the docs evolve, the prompt behavior stays aligned automatically</div>
  </div>

</div>

---

<!-- SLIDE: Before and After -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
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
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 What to Validate in the Workshop</span>
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
  <div class="text-xl font-bold text-white">Make the value visible.</div>
  <div class="text-sm text-gray-300 mt-2">This module lands best when participants can feel both the time savings and the consistency gain.</div>
</div>

---

<!-- SLIDE: Exercise Roadmap -->
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercise Roadmap</span>
</div>

<div class="mt-4 p-5 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-2">This module is one clean progression.</div>
<div class="text-sm text-gray-300">First create a reusable docs-refresh prompt. Then save one stronger character prompt that references living docs and uses variables.</div>
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
<td class="p-3">Elena ⭐</td>
<td class="p-3">12 min</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
<div class="text-white font-semibold">The progression is still simple.</div>
<div class="text-sm text-gray-300">Refresh the docs first. Then standardize repeated character-detail work with one stronger prompt that stays anchored to current guidance and context.</div>
</div>

---

<!-- SLIDE: Exercise Section -->
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
2 exercises · ~18 minutes · shared leadership
</span>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4 max-w-3xl w-full px-8">
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40 text-center text-sm">
<div class="text-blue-300 font-bold">3.1</div>
<div class="text-gray-400 text-xs mt-1">Refresh the docs</div>
</div>
<div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/40 text-center text-sm">
<div class="text-cyan-300 font-bold">3.2</div>
<div class="text-gray-400 text-xs mt-1">Save one stronger prompt</div>
</div>
</div>
<div class="relative z-10 mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<!-- SLIDE: Exercise 3.1 Creating a Docs Refresh Prompt -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
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
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: refresh-docs.prompt.md</span>
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
<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/30 flex-shrink-0">3.2</div>
<div>
<div class="text-cyan-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Creating a Context-Aware Prompt File</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Elena ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 12 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-blue-400 text-sm text-gray-300">
Elena is tired of retyping the same character-detail request, and Sarah is tired of pasting the same standards and roadmap context into every review. <strong class="text-white">The stronger move is one reusable prompt file that links to living docs and pulls in the right context with variables.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-cyan-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Add <span class="font-mono text-cyan-300">character-review.prompt.md</span> with frontmatter and a body that references architecture guidance, team instructions, and the Module 2 roadmap</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-cyan-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Use prompt variables for things like the current file, workspace, selection, or enhancement name so the prompt starts with real context</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-cyan-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300"><code>/Character-Detail-Review "Jesse Pinkman"</code></span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The prompt is discoverable and invokable like a shared team function</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> It references source-of-truth docs and roadmap files instead of copied guidance</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Variables remove setup friction while keeping the results grounded in current context</div>
</div>
<div class="mt-4 p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30 text-xs text-gray-300 italic">💭 <strong class="text-cyan-300">Elena:</strong> "This stopped being a saved snippet and started becoming a real team function — current guidance, current file, current context."</div>
</div>
</div>
</div>

---

<!-- SLIDE: Example character-review.prompt.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: character-review.prompt.md</span>
</div>
<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-cyan-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-gray-500 mb-2">---</div>
<div class="text-cyan-300">name: Character Detail Review</div>
<div class="text-cyan-300">description: Review a character detail enhancement against FanHub standards</div>
<div class="text-cyan-300">mode: agent</div>
<div class="text-gray-500 mb-2">---</div>
<div class="text-gray-400 mb-2">Review the character detail enhancement for <span class="text-cyan-200">${input:characterName}</span> in <span class="text-blue-200">${file}</span>.</div>
<div class="text-purple-300 mb-1">## Check against</div>
<div class="text-gray-400">- <span class="text-blue-100">[Architecture guide](./ARCHITECTURE.md)</span>: file structure, module boundaries</div>
<div class="text-gray-400">- <span class="text-blue-100">[Team instructions](./.github/copilot-instructions.md)</span>: naming, patterns, review habits</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">[Enhancement roadmap](./plans/roadmap.md)</span>: sequencing and dependencies</div>
<div class="text-purple-300 mb-1">## Output</div>
<div class="text-gray-400">1. What looks good</div>
<div class="text-gray-400">2. What needs adjustment before merging</div>
<div class="text-gray-400">3. Open questions to resolve</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Invoke with:</strong> <span class="font-mono text-cyan-300">/Character-Detail-Review "Jesse Pinkman"</span> &nbsp; <strong class="text-gray-300">Variables:</strong> <span class="font-mono">$&#123;file&#125;</span>, <span class="font-mono">$&#123;input:characterName&#125;</span>
</div>
</div>

---

<!-- SLIDE: Compounding Value -->
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Compounding Value</span>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-1">Module 3 doesn’t just save time in chat.</div>
<div class="text-sm text-gray-300">It turns repeated work into reusable prompt assets that later modules can build on.</div>
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
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Module Checklist</span>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-1">By the end of Module 3, the team should have reusable prompt habits.</div>
<div class="text-sm text-gray-300">Not just a clever chat. Shared prompt files that stay grounded in current docs and current context.</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-left text-sm">
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
</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-4 rounded-xl bg-gray-900/60 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">What good looks like</div>
<div class="text-sm text-gray-300">Two prompt files the team would actually reuse: one that keeps the docs current and one that captures character-review expertise.</div>
</div>
<div class="p-4 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">Why this matters</div>
<div class="text-sm text-gray-300">Later modules get better when the team already knows how to package repeatable work into invokable, trustworthy prompt assets.</div>
</div>
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
⏰ Save the prompt, avoid the typing
</span>
</div>

<div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
"When a prompt has good reuse value, let's treat it as a function."
</div>

<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
</div>

---

<!-- SLIDE: Reusable prompts turn one good request into a team habit -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-8 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-orange-900/20"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/12 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/12 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 text-center mb-6">
<div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Module 3 impact</div>
<h1 class="!text-3xl !font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent !mb-2">
Reusable prompts turn one good request into a team habit
</h1>
<div class="text-sm text-gray-300 max-w-4xl mx-auto">
The team stops rewriting good asks from memory and starts reusing proven entry points.
</div>
</div>

<div class="relative z-10 grid grid-cols-5 gap-3">
<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30">
<div class="text-blue-300 font-bold text-sm mb-2">Sarah</div>
<div class="text-sm text-white leading-snug mb-3">“If we do this after every code change, the rest of our prompts get smarter without extra effort.”</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30">
<div class="text-emerald-300 font-bold text-sm mb-2">Marcus</div>
<div class="text-sm text-white leading-snug mb-3">“The real value is not typing less — it’s starting from the right workflow every time.”</div>
<div class="text-xs text-gray-400">Reusable prompts encode process, not just shortcuts.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30">
<div class="text-orange-300 font-bold text-sm mb-2">David</div>
<div class="text-sm text-white leading-snug mb-3">“A prompt earns its place when it captures judgement, not syntax.”</div>
<div class="text-xs text-gray-400">Expertise gets shared when it's encoded, not just demonstrated.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-gray-900/50 border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-sm mb-2">Elena</div>
<div class="text-sm text-white leading-snug mb-3">“This moved from snippet to a real team function — current guidance, current file, current context.”</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
<div class="text-purple-300 font-bold text-sm mb-2">Rafael</div>
<div class="text-sm text-white leading-snug mb-3">“A strong prompt is how product intent survives the trip into implementation.”</div>
<div class="text-xs text-gray-400">Clear prompts close the gap between intent and outcome.</div>
</div>
</div>

<div class="relative z-10 mt-6 p-3 rounded-xl bg-gradient-to-r from-purple-900/25 via-blue-900/20 to-orange-900/20 border border-white/10 text-center">
<div class="text-white font-semibold">This is what the module changes in day-to-day work.</div>
<div class="text-xs text-gray-300 mt-1">The payoff shows up in how the team thinks, coordinates, and ships.</div>
</div>
</div>
