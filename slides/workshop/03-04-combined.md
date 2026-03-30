---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 3+4: From Prompts to Skills
  Build reusable prompts then graduate them to agent skills
drawings:
  persist: false
transition: slide-left
title: From Prompts to Skills
module: workshop/03-custom-prompts
mdc: true
status: active
updated: 2026-03-27
---

<!-- SLIDE: From Prompts to Skills -->
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
From Prompts to Skills
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
&#x23F0; Build it once. Invoke it anywhere. Graduate it to a skill.
</span>
</div>
<div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
Part 1: save your best prompts as reusable team functions. Part 2: embed them into the workflow as agent skills.
</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
<div class="relative z-10 flex items-stretch gap-1 text-[10px] mt-4 px-4">
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
    <div class="font-bold text-gray-400 text-xs">M1</div>
    <div class="text-gray-500 mt-0.5 whitespace-nowrap">Instructions</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">&#x203A;</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
    <div class="font-bold text-gray-400 text-xs">M2</div>
    <div class="text-gray-500 mt-0.5 whitespace-nowrap">Plan Mode</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">&#x203A;</div>
  <div class="flex-1 p-2 bg-gradient-to-b from-orange-600/80 to-orange-800/60 rounded-lg border border-orange-400/50 text-center shadow-lg shadow-orange-900/30">
    <div class="font-bold text-white text-xs">M3</div>
    <div class="text-orange-200 mt-0.5 whitespace-nowrap">Prompts</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">&#x203A;</div>
  <div class="flex-1 p-2 bg-gradient-to-b from-orange-600/80 to-orange-800/60 rounded-lg border border-orange-400/50 text-center shadow-lg shadow-orange-900/30">
    <div class="font-bold text-white text-xs">M4</div>
    <div class="text-orange-200 mt-0.5 whitespace-nowrap">Skills</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">&#x203A;</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M5</div>
    <div class="text-gray-500 mt-0.5 whitespace-nowrap">MCP</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">&#x203A;</div>
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
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F3AF; What You'll Build</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-3 shadow-lg shadow-orange-900/20">
<div class="text-lg font-bold text-white mb-0.5">Six exercises. Two modules. One complete workflow layer.</div>
<div class="text-xs text-orange-100">Prompts capture repeatable tasks &mdash; skills embed them into the workflow</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">&#x1F4DD; Part 1 &mdash; Prompt Files</div>
<div class="grid grid-cols-3 gap-3 text-xs text-left">
<div class="p-3 rounded-lg border-l-4 border-blue-500 bg-gray-900/60">
<div class="font-bold text-blue-300 mb-0.5">E1 &mdash; Refresh the source of truth</div>
<div class="text-gray-400 font-mono text-xs mb-1">refresh-docs.prompt.md</div>
<div class="text-gray-300 text-xs">A reusable prompt that keeps <code>ARCHITECTURE.md</code> and team instructions aligned after code changes.</div>
</div>
<div class="p-3 rounded-lg border-l-4 border-purple-500 bg-gray-900/60">
<div class="font-bold text-purple-300 mb-0.5">E2 &mdash; Save one strong prompt</div>
<div class="text-gray-400 font-mono text-xs mb-1">good-idea-fairy / risk-prioritizer / commit-helper</div>
<div class="text-gray-300 text-xs">Pick one: generate feature ideas, prioritize risks, or automate branch + PR creation.</div>
</div>
<div class="p-3 rounded-lg border-l-4 border-emerald-500 bg-gray-900/60">
<div class="font-bold text-emerald-300 mb-0.5">E3 &mdash; Encode domain knowledge</div>
<div class="text-gray-400 font-mono text-xs mb-1">lore-accuracy-check.prompt.md</div>
<div class="text-gray-300 text-xs">A canon-accuracy checker that applies universe file rules to any content piece &mdash; systematically, every time.</div>
</div>
</div>
</div>
<div class="relative z-10 border-t border-orange-500/20 pt-2 mt-1">
<div class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">&#x26A1; Part 2 &mdash; Agent Skills</div>
<div class="grid grid-cols-3 gap-3 text-xs text-left">
<div class="p-3 rounded-lg border-l-4 border-blue-400 bg-gray-900/60">
<div class="font-bold text-blue-300 mb-0.5">E4 &mdash; Install template</div>
<div class="text-gray-400 font-mono text-xs mb-1">make-skill-template</div>
<div class="text-gray-300 text-xs">Bootstrap future skills from a proven scaffold instead of a blank folder.</div>
</div>
<div class="p-3 rounded-lg border-l-4 border-emerald-400 bg-gray-900/60">
<div class="font-bold text-emerald-300 mb-0.5">E5 &mdash; Lore accuracy skill</div>
<div class="text-gray-400 font-mono text-xs mb-1">lore-accuracy-check/</div>
<div class="text-gray-300 text-xs">Graduate the E3 prompt to an embedded skill Copilot reaches for automatically.</div>
</div>
<div class="p-3 rounded-lg border-l-4 border-purple-400 bg-gray-900/60">
<div class="font-bold text-purple-300 mb-0.5">E6 &mdash; Card &amp; page skill</div>
<div class="text-gray-400 font-mono text-xs mb-1">create-card-and-page/</div>
<div class="text-gray-300 text-xs">Graduate the M2 plan into a parameterized skill for any FanHub entity type.</div>
</div>
</div>
</div>
<div class="relative z-10 mt-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 via-red-900/20 to-orange-900/30 rounded-xl border border-orange-400/40 flex items-center gap-3">
<div class="text-orange-400 text-lg">&#x26A1;</div>
<div class="text-xs text-gray-200 leading-relaxed"><strong class="text-orange-300">Prompts capture your intent.</strong> Skills make that intent <em class="text-white">available to Copilot</em> &mdash; so it can reach for the right behavior automatically, not just when you remember to ask.</div>
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
<div class="h-full flex flex-col">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F528; Exercises &mdash; Prompts</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-3 shadow-lg shadow-orange-900/20">
<div class="text-lg font-bold text-white">3 exercises &middot; ~28 minutes &middot; shared leadership</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 flex-1 min-h-0">
<div class="flex flex-col bg-blue-900/30 rounded-xl border border-blue-500/40 overflow-hidden">
<div class="p-4 flex-1">
<div class="flex items-center justify-between mb-3"><div class="text-blue-300 font-bold text-lg">E1</div><span class="text-xs text-gray-500">Rafael &#x2B50;</span></div>
<div class="text-white text-sm font-semibold mb-2">Refresh the docs</div>
<div class="text-gray-400 text-xs leading-relaxed">Build a prompt that reviews the workspace and updates only what changed after any meaningful code push. Run it after every sprint &mdash; docs stay current without anyone tracking it manually.</div>
</div>
<div class="px-4 pb-4 pt-3 border-t border-blue-500/20"><p class="text-blue-200 text-xs italic">"Docs drift is a sprint velocity OKR. I&apos;m logging it."</p></div>
</div>
<div class="flex flex-col bg-purple-900/30 rounded-xl border border-purple-500/40 overflow-hidden">
<div class="p-4 flex-1">
<div class="flex items-center justify-between mb-3"><div class="text-purple-300 font-bold text-lg">E2</div><span class="text-xs text-gray-500">Jessica &#x2B50;</span></div>
<div class="text-white text-sm font-semibold mb-2">Save one strong prompt</div>
<div class="text-gray-400 text-xs leading-relaxed mb-3">Pick one type, write it, save it &mdash; validate it solves something real.</div>
<div class="flex flex-col gap-1.5">
<div class="flex items-center gap-2 px-2.5 py-1.5 bg-purple-900/50 rounded-lg border border-purple-500/30"><span class="text-purple-300 text-xs">&#x1F9DA;</span><span class="text-purple-200 text-xs font-medium">Good Idea Fairy</span><span class="text-gray-500 text-xs ml-1">&mdash; creative feature ideas</span></div>
<div class="flex items-center gap-2 px-2.5 py-1.5 bg-red-900/40 rounded-lg border border-red-500/30"><span class="text-red-300 text-xs">&#x26A0;&#xFE0F;</span><span class="text-red-200 text-xs font-medium">Risk Prioritizer</span><span class="text-gray-500 text-xs ml-1">&mdash; ranked fixes by risk</span></div>
<div class="flex items-center gap-2 px-2.5 py-1.5 bg-cyan-900/40 rounded-lg border border-cyan-500/30"><span class="text-cyan-300 text-xs">&#x1F500;</span><span class="text-cyan-200 text-xs font-medium">Commit Helper</span><span class="text-gray-500 text-xs ml-1">&mdash; branch, commit, PR</span></div>
</div>
</div>
<div class="px-4 pb-4 pt-3 border-t border-purple-500/20"><p class="text-purple-200 text-xs italic">"Wait, I can just&hellip; pick the one I need? Even me?"</p></div>
</div>
<div class="flex flex-col bg-emerald-900/30 rounded-xl border border-emerald-500/40 overflow-hidden">
<div class="p-4 flex-1">
<div class="flex items-center justify-between mb-3"><div class="text-emerald-300 font-bold text-lg">E3</div><span class="text-xs text-gray-500">Marcus &#x2B50;</span></div>
<div class="text-white text-sm font-semibold mb-2">Encode domain knowledge</div>
<div class="text-gray-400 text-xs leading-relaxed">Build a lore-accuracy-check prompt that applies universe rules before anything hits review. Marcus already learned this the hard way &mdash; three canon errors in one PR.</div>
</div>
<div class="px-4 pb-4 pt-3 border-t border-emerald-500/20"><p class="text-emerald-200 text-xs italic">"I had a tab open. Wait. I spent an hour checking that PR manually?"</p></div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-900/40 rounded-lg border border-white/10 text-center text-xs text-gray-400">Each exercise rotates the lead persona &mdash; everyone contributes, everyone follows.</div>
</div>

---

<!-- SLIDE: Exercise 3.1 Creating a Docs Refresh Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">E1</div>
<div>
<div class="text-blue-300 text-xs font-semibold tracking-widest uppercase">Exercise 1</div>
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

<!-- SLIDE: Exercise 2 — Save One Strong Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-5">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">E2</div>
<div><div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise 2</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Save One Strong Prompt</h2></div>
<div class="ml-auto flex gap-3 text-xs text-gray-400"><span class="px-3 py-1 bg-gray-800 rounded-full">Jessica &#x2B50;</span><span class="px-3 py-1 bg-gray-800 rounded-full">&#x23F1; 10 min</span></div>
</div>
<div class="relative z-10 mb-4 p-4 bg-gray-900/60 rounded-xl border-l-4 border-purple-400 text-sm text-gray-300">
Jessica has been quietly watching Rafael and Marcus work. She&rsquo;s convinced everyone else is naturally good at this. Then she sees the option list. <em>Any of these could be hers.</em> <strong class="text-white">Pick one prompt type, write it, save it to <code class="text-purple-300">.github/prompts/</code>, and validate it actually solves something real.</strong>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 mb-4">
<div class="p-3 bg-purple-900/30 rounded-xl border border-purple-500/30"><div class="text-purple-300 font-bold text-xs mb-1">&#x1F9DA; Good Idea Fairy</div><div class="text-gray-400 text-xs leading-snug">Generate bold, creative feature ideas for the FanHub site &mdash; the kind no one&rsquo;s thought to ask for yet</div></div>
<div class="p-3 bg-red-900/30 rounded-xl border border-red-500/30"><div class="text-red-300 font-bold text-xs mb-1">&#x26A0;&#xFE0F; Risk Prioritizer</div><div class="text-gray-400 text-xs leading-snug">Review code, data, and architecture to produce a prioritized list of fixes ranked by actual risk</div></div>
<div class="p-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30"><div class="text-cyan-300 font-bold text-xs mb-1">&#x1F500; Commit Helper</div><div class="text-gray-400 text-xs leading-snug">Create a branch if needed, commit the changeset, and open a well-formed PR &mdash; all in one go</div></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div><div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">&#x1F4CB; Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Pick one of the three prompt types above</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Write a <code class="text-purple-300">.prompt.md</code> with a clear description and focused instructions</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Save to <code class="text-purple-300">.github/prompts/</code> and invoke it &mdash; does it do what you needed?</span></div>
</div></div>
<div><div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">&#x2705; Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> Prompt is saved and invokable by name</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> Output is useful &mdash; not just plausible-sounding</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> You&rsquo;d actually use this again</div>
</div>
<div class="mt-3 p-3 bg-purple-900/20 rounded-lg border border-purple-500/30 text-xs text-gray-300 italic">&#x1F4AD; <strong class="text-purple-300">Jessica:</strong> "Wait, I can just&hellip; pick the one I need? Even me?"</div>
</div></div>
</div>

---

<!-- SLIDE: 🧚 Example: Good Idea Fairy Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F9DA; Example: Good Idea Fairy</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-5">
<div><div class="text-xs text-gray-400 mb-2">Save to <span class="font-mono text-orange-300">.github/prompts/good-idea-fairy.prompt.md</span>:</div>
<div class="font-mono text-xs bg-gray-900/80 rounded-xl border border-orange-500/30 p-4 text-gray-200 leading-relaxed overflow-y-auto max-h-72 select-all cursor-text">
<div class="text-gray-500 text-xs mb-1">&#45;&#45;&#45;</div>
<div class="text-blue-300 text-xs mb-1">description: Generate bold creative feature ideas for the FanHub site</div>
<div class="text-gray-500 text-xs mb-3">&#45;&#45;&#45;</div>
<div>You are a creative product strategist for FanHub &mdash; a fan-community platform for an original sci-fi series. Review ARCHITECTURE.md and copilot-instructions.md to understand what the platform does today.</div>
<div class="mt-2">Generate 5 bold, specific feature ideas that would delight the fan community. For each idea:</div>
<div class="ml-3 text-gray-400">&#x2022; Give it a punchy name</div>
<div class="ml-3 text-gray-400">&#x2022; Describe what it does in one sentence</div>
<div class="ml-3 text-gray-400">&#x2022; Explain why fans would love it</div>
<div class="ml-3 text-gray-400">&#x2022; Note any technical considerations</div>
<div class="mt-2">Think big. These are ideas, not specs.</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20 text-xs"><div class="text-orange-300 font-bold mb-2">How it works</div>
<div class="flex items-start gap-2 text-gray-300 mb-1"><span class="text-orange-400 mt-0.5">1</span><span>Save to <span class="font-mono text-orange-200">.github/prompts/</span></span></div>
<div class="flex items-start gap-2 text-gray-300 mb-1"><span class="text-orange-400 mt-0.5">2</span><span>Run <span class="font-mono text-orange-200">/good-idea-fairy</span> in Copilot Chat</span></div>
<div class="flex items-start gap-2 text-gray-300"><span class="text-orange-400 mt-0.5">3</span><span>Copilot reads your architecture first &mdash; ideas are creative <em>and</em> grounded</span></div>
</div>
<div class="p-3 bg-purple-900/20 rounded-xl border border-purple-500/30 text-xs text-gray-300"><div class="text-purple-300 font-bold mb-1">Why this matters</div>Grounding ideation in <span class="font-mono text-purple-200">ARCHITECTURE.md</span> means suggestions fit your actual stack &mdash; not generic advice for a generic app.</div>
<div class="p-3 bg-purple-900/20 rounded-xl border border-purple-500/30 text-xs text-gray-300 italic">&#x1F4AD; <strong class="text-purple-300">Jessica:</strong> "It knew we didn&rsquo;t have a notification system yet. I didn&rsquo;t tell it that. It just&hellip; read the file."</div>
</div></div>
</div>

---

<!-- SLIDE: ⚠️ Example: Risk Prioritizer Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x26A0;&#xFE0F; Example: Risk Prioritizer</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-5">
<div><div class="text-xs text-gray-400 mb-2">Save to <span class="font-mono text-orange-300">.github/prompts/risk-prioritizer.prompt.md</span>:</div>
<div class="font-mono text-xs bg-gray-900/80 rounded-xl border border-orange-500/30 p-4 text-gray-200 leading-relaxed overflow-y-auto max-h-72 select-all cursor-text">
<div class="text-gray-500 text-xs mb-1">&#45;&#45;&#45;</div>
<div class="text-blue-300 text-xs mb-1">description: Review code and architecture to produce a prioritized risk fix list</div>
<div class="text-gray-500 text-xs mb-3">&#45;&#45;&#45;</div>
<div>Review the current codebase, ARCHITECTURE.md, and any data models visible in the workspace.</div>
<div class="mt-2">Identify the top risks across these categories:</div>
<div class="ml-3 text-gray-400">&#x2022; Security vulnerabilities</div>
<div class="ml-3 text-gray-400">&#x2022; Data integrity issues</div>
<div class="ml-3 text-gray-400">&#x2022; Scalability bottlenecks</div>
<div class="ml-3 text-gray-400">&#x2022; Unhandled failure modes</div>
<div class="mt-2">For each risk, provide: a short name, severity (Critical / High / Medium), what could go wrong, and a recommended fix.</div>
<div class="mt-2">Sort by severity. Be specific &mdash; no generic advice.</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20 text-xs"><div class="text-orange-300 font-bold mb-2">How it works</div>
<div class="flex items-start gap-2 text-gray-300 mb-1"><span class="text-orange-400 mt-0.5">1</span><span>Save to <span class="font-mono text-orange-200">.github/prompts/</span></span></div>
<div class="flex items-start gap-2 text-gray-300 mb-1"><span class="text-orange-400 mt-0.5">2</span><span>Run <span class="font-mono text-orange-200">/risk-prioritizer</span> in Copilot Chat</span></div>
<div class="flex items-start gap-2 text-gray-300"><span class="text-orange-400 mt-0.5">3</span><span>Returns a ranked, actionable list &mdash; not a generic checklist</span></div>
</div>
<div class="p-3 bg-red-900/20 rounded-xl border border-red-500/30 text-xs text-gray-300"><div class="text-red-300 font-bold mb-1">Why this matters</div>"Review for risks" without structure returns noise. Categories and severity rubric force Copilot to reason, not just list.</div>
<div class="p-3 bg-purple-900/20 rounded-xl border border-purple-500/30 text-xs text-gray-300 italic">&#x1F4AD; <strong class="text-purple-300">Jessica:</strong> "It found the unhandled auth timeout I&rsquo;d been meaning to check for three sprints. Just&hellip; there it was. Top of the list."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 🔀 Example: Commit Helper Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F500; Example: Commit Helper</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-5">
<div><div class="text-xs text-gray-400 mb-2">Save to <span class="font-mono text-orange-300">.github/prompts/commit-helper.prompt.md</span>:</div>
<div class="font-mono text-xs bg-gray-900/80 rounded-xl border border-orange-500/30 p-4 text-gray-200 leading-relaxed overflow-y-auto max-h-72 select-all cursor-text">
<div class="text-gray-500 text-xs mb-1">&#45;&#45;&#45;</div>
<div class="text-blue-300 text-xs mb-1">description: Branch, commit, and open a well-formed PR for the current changeset</div>
<div class="text-blue-300 text-xs mb-1">mode: agent</div>
<div class="text-gray-500 text-xs mb-3">&#45;&#45;&#45;</div>
<div>Look at the current git status and staged/unstaged changes.</div>
<div class="mt-2 text-gray-400">Step 1: If not on a feature branch, create one with a descriptive name.</div>
<div class="text-gray-400">Step 2: Stage all relevant changes.</div>
<div class="text-gray-400">Step 3: Write a conventional commit message (type(scope): description).</div>
<div class="text-gray-400">Step 4: Commit and push the branch.</div>
<div class="text-gray-400">Step 5: Open a PR with a clear title, a description of what changed and why, and follow-up items as checkboxes.</div>
<div class="mt-2">Ask me to confirm before creating the PR.</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20 text-xs"><div class="text-orange-300 font-bold mb-2">How it works</div>
<div class="flex items-start gap-2 text-gray-300 mb-1"><span class="text-orange-400 mt-0.5">1</span><span>Save to <span class="font-mono text-orange-200">.github/prompts/</span></span></div>
<div class="flex items-start gap-2 text-gray-300 mb-1"><span class="text-orange-400 mt-0.5">2</span><span>Run <span class="font-mono text-orange-200">/commit-helper</span> in agent mode</span></div>
<div class="flex items-start gap-2 text-gray-300"><span class="text-orange-400 mt-0.5">3</span><span>Copilot handles branch &rarr; commit &rarr; PR and asks for confirmation before submitting</span></div>
</div>
<div class="p-3 bg-cyan-900/20 rounded-xl border border-cyan-500/30 text-xs text-gray-300"><div class="text-cyan-300 font-bold mb-1">Why this matters</div>The confirmation step keeps you in control. You get the automation without losing the review &mdash; Copilot prepares, you approve.</div>
<div class="p-3 bg-purple-900/20 rounded-xl border border-purple-500/30 text-xs text-gray-300 italic">&#x1F4AD; <strong class="text-purple-300">Jessica:</strong> "It wrote a better PR description than I would have. And it remembered to create the branch first. I always forget the branch."</div>
</div></div>
</div>

---

<!-- SLIDE: Exercise 3.3 Lore Entry Accuracy Check -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30 flex-shrink-0">E2</div>
<div>
<div class="text-emerald-300 text-xs font-semibold tracking-widest uppercase">Exercise 2</div>
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
<div><span class="text-gray-500">&#45;&#45;&#45;</span></div>
<div><span class="text-emerald-300">agent: ask</span></div>
<div><span class="text-emerald-300">description: Verify lore entry accuracy against the canonical Breaking Bad universe reference</span></div>
<div><span class="text-gray-500">&#45;&#45;&#45;</span></div>
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

<!-- SLIDE: &#x1F4AC; The Team, After the Prompt Exercises -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4AC; The Team, After the Prompt Exercises</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-amber-400">
<div class="text-xs font-bold text-amber-300 mb-0.5">Jessica</div>
<div class="text-xs text-gray-500 italic mb-2">The Eager Junior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Wait &mdash; I can just pick the one I need? The risk-prioritizer or the commit-helper? Even me? I don't have to write the whole thing from scratch every time?"</div>
<div class="text-xs text-gray-500">Realizing she can use the good version, not just her version.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-blue-400">
<div class="text-xs font-bold text-blue-300 mb-0.5">David</div>
<div class="text-xs text-gray-500 italic mb-2">The Seasoned Architect</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"To be precise: this isn't automation. It's codification. We're encoding the decision, not removing it. That distinction matters."</div>
<div class="text-xs text-gray-500">Correcting the framing before conceding the point.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-green-400">
<div class="text-xs font-bold text-green-300 mb-0.5">Sarah</div>
<div class="text-xs text-gray-500 italic mb-2">The Skeptical Senior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I checked. The lore prompt caught the same error three times in a row. Three for three. Consistent beats clever. I'll take it."</div>
<div class="text-xs text-gray-500">Running the numbers before endorsing anything.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-purple-400">
<div class="text-xs font-bold text-purple-300 mb-0.5">Elena</div>
<div class="text-xs text-gray-500 italic mb-2">The Quality Champion</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Okay but I need edge cases. What if the lore entry is partially correct? Does it flag the wrong part? Show me the failure mode first."</div>
<div class="text-xs text-gray-500">Not satisfied until she's seen what breaks.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-orange-400">
<div class="text-xs font-bold text-orange-300 mb-0.5">Marcus</div>
<div class="text-xs text-gray-500 italic mb-2">The DevOps Developer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Sorry &mdash; I was half-reading a thread about prompt files. Wait. We can check these in? They travel with the repo? That's actually&hellip; hold on."</div>
<div class="text-xs text-gray-500">Snapping into focus mid-sentence.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-cyan-400">
<div class="text-xs font-bold text-cyan-300 mb-0.5">Rafael</div>
<div class="text-xs text-gray-500 italic mb-2">The Product Visionary</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"The lore check is already an OKR input. If canon accuracy goes up, lore engagement goes up. I'm mapping this to Q3. Can we move on?"</div>
<div class="text-xs text-gray-500">Already three steps ahead, agenda in hand.</div>
</div>
</div>
</div>
---

<!-- SLIDE: The Check Works. It Just Doesn't Run Itself. -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F9E0; Mindful Moment</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex items-stretch gap-0 mb-3 rounded-xl overflow-hidden border border-white/10">
<div class="flex-1 flex items-center gap-3 px-4 py-2.5 bg-gray-800/60">
<span class="text-green-400 text-base">&#x2713;</span>
<div>
<div class="text-gray-500 text-xs font-semibold tracking-widest uppercase">Part 1</div>
<div class="text-gray-300 text-sm font-semibold">Custom Prompts</div>
</div>
</div>
<div class="flex items-center px-4 bg-gradient-to-r from-gray-800/60 to-orange-900/60">
<span class="text-orange-400 text-xl font-bold">&#x2192;</span>
</div>
<div class="flex-1 flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-orange-900/50 to-red-900/40 border-l border-orange-500/30">
<span class="text-orange-400 text-base">&#x25B6;</span>
<div>
<div class="text-orange-400 text-xs font-semibold tracking-widest uppercase">Part 2 — Starting Now</div>
<div class="text-white text-sm font-semibold">Agent Skills</div>
</div>
</div>
</div>
<h2 class="relative z-10 text-2xl font-bold text-white mb-1">Prompts Work. But They Don't Run Themselves.</h2>
<p class="relative z-10 text-gray-400 text-xs mb-3">Elena spent the morning running <code class="bg-gray-800 px-1 rounded text-orange-300">/lore-accuracy-check</code> before every PR. It worked perfectly &mdash; every time she remembered to invoke it.</p>
<div class="relative z-10 grid grid-cols-2 gap-4 mb-3">
<div class="bg-gray-900/40 rounded-xl p-4 border border-gray-700/30 flex flex-col gap-2 opacity-75">
<div class="text-gray-400 font-semibold text-xs tracking-wide uppercase">A prompt is invoked</div>
<ul class="text-gray-400 text-xs space-y-1.5">
<li>&#x2705; Accurate when you remember to run it</li>
<li>&#x2705; Fast to create and iterate</li>
<li>&#x2705; Great for on-demand tasks</li>
<li class="text-gray-500">&#x26A0;&#xFE0F; Depends on the human in the loop</li>
</ul>
</div>
<div class="bg-gray-900/60 rounded-xl p-4 border border-orange-500/40 flex flex-col gap-2 shadow-lg shadow-orange-900/20">
<div class="text-orange-400 font-semibold text-xs tracking-wide uppercase">A skill is embedded &#x2190; we&rsquo;re building this</div>
<ul class="text-gray-300 text-xs space-y-1.5">
<li>&#x2705; Available whenever Copilot works with lore content</li>
<li>&#x2705; Cites sources automatically</li>
<li>&#x2705; Runs as part of the workflow</li>
<li class="text-green-400">&#x2728; The domain knowledge is in the system</li>
</ul>
</div>
</div>
<div class="relative z-10 flex gap-3 items-start bg-gray-900/50 rounded-xl px-4 py-3 border border-white/10">
<div class="text-orange-500/60 text-5xl font-serif leading-none mt-[-4px] flex-shrink-0">&ldquo;</div>
<div>
<p class="text-gray-300 text-xs italic leading-relaxed">"There's a distinction worth making. A prompt is a <span class="text-orange-300 font-semibold not-italic">what</span> &mdash; you define the output shape and invoke it when you need it. A skill is a <span class="text-orange-300 font-semibold not-italic">when and a how</span> &mdash; Copilot knows to use it, and knows which resources to consult. Elena built the what. <span class="text-white not-italic font-medium">Now we build the when.</span>"</p>
<div class="flex items-center gap-2 mt-1.5">
<div class="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">D</div>
<span class="text-orange-400 text-xs">David, who would like the record to show he made this distinction before it became obvious</span>
</div>
</div>
</div>

---

<!-- SLIDE: 📚 What Agent Skills Actually Are -->
<div class="h-full flex flex-col">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4DA; What Agent Skills Actually Are</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<p class="relative z-10 text-gray-400 text-xs mb-3">A skill isn&rsquo;t a fancy prompt. It&rsquo;s a packaged capability &mdash; instructions, resources, and context Copilot reaches for automatically.</p>
<div class="relative z-10 grid grid-cols-2 gap-3 flex-1 min-h-0">
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-gray-900/50 border border-purple-500/30">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x1F4E6;</span><div class="text-purple-300 font-bold text-sm">A capability package</div></div>
<div class="text-xs text-gray-300 space-y-2 leading-snug flex-1">
<div class="flex gap-2"><span class="text-purple-400 mt-0.5">&#x2022;</span><span><code class="bg-purple-900/40 px-1 rounded text-purple-200">SKILL.md</code> explains the workflow and goals</span></div>
<div class="flex gap-2"><span class="text-purple-400 mt-0.5">&#x2022;</span><span>Resources can include scripts, examples, schemas, and templates</span></div>
<div class="flex gap-2"><span class="text-purple-400 mt-0.5">&#x2022;</span><span>The goal is a complete task capability, not just a reminder</span></div>
</div>
</div>
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-gray-900/50 border border-blue-500/30">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x26A1;</span><div class="text-blue-300 font-bold text-sm">Progressive loading</div></div>
<div class="text-xs text-gray-300 space-y-2 leading-snug flex-1">
<div class="flex gap-2"><span class="text-blue-400 mt-0.5">&#x2022;</span><span><span class="text-blue-200 font-medium">Discovery:</span> metadata is known up front</span></div>
<div class="flex gap-2"><span class="text-blue-400 mt-0.5">&#x2022;</span><span><span class="text-blue-200 font-medium">Instructions:</span> the body loads when relevant</span></div>
<div class="flex gap-2"><span class="text-blue-400 mt-0.5">&#x2022;</span><span><span class="text-blue-200 font-medium">Resources:</span> scripts and examples load only when needed</span></div>
</div>
<div class="mt-2 text-blue-400/70 text-xs italic">Context-efficient by design</div>
</div>
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-cyan-900/40 to-purple-900/30 border border-cyan-500/30">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x1F5C2;&#xFE0F;</span><div class="text-cyan-300 font-bold text-sm">Project &amp; personal scopes</div></div>
<div class="text-xs text-gray-300 space-y-2 leading-snug flex-1">
<div class="flex gap-2"><span class="text-cyan-400 mt-0.5">&#x2022;</span><span>Project skills live in <code class="bg-cyan-900/40 px-1 rounded text-cyan-200">.github/skills/</code></span></div>
<div class="flex gap-2"><span class="text-cyan-400 mt-0.5">&#x2022;</span><span>Personal skills live in your home skill directory</span></div>
<div class="flex gap-2"><span class="text-cyan-400 mt-0.5">&#x2022;</span><span>Shared workflow belongs with the repo &mdash; not in someone&rsquo;s head</span></div>
</div>
</div>
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-orange-900/50 to-red-900/30 border border-orange-500/40 shadow-lg shadow-orange-900/20">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x2728;</span><div class="text-orange-300 font-bold text-sm">The differentiator</div></div>
<div class="text-xs text-gray-200 leading-relaxed flex-1">Skills go beyond <span class="text-gray-400 italic">"say this"</span> and into <span class="text-orange-300 font-semibold">"use these resources, run this script, follow this workflow."</span></div>
<div class="mt-3 pt-2 border-t border-orange-500/20 text-xs text-orange-300/70 italic">Prompts you invoke. Skills Copilot reaches for.</div>
</div>
</div>
</div>

---

<!-- SLIDE: 🔎 Skill Structure and Loading -->
<div class="h-full flex flex-col">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F50E; Skill Structure and Loading</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<p class="relative z-10 text-gray-400 text-xs mb-3">Skills are folders, not files &mdash; a structured package Copilot loads progressively as the task demands it.</p>
<div class="relative z-10 grid grid-cols-2 gap-3 flex-1 min-h-0 mb-3">
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-gray-900/50 border border-blue-500/30">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x1F4C1;</span><div class="text-blue-300 font-bold text-sm">Typical structure</div></div>
<div class="font-mono text-xs text-gray-300 space-y-1 flex-1">
<div class="text-blue-300">.github/skills/lore-accuracy-check/</div>
<div class="pl-4 text-orange-300">&#x251C;&#x2500; SKILL.md</div>
<div class="pl-4 text-gray-400">&#x251C;&#x2500; scripts/</div>
<div class="pl-4 text-gray-400">&#x251C;&#x2500; examples/</div>
<div class="pl-4 text-gray-400">&#x2514;&#x2500; templates/</div>
</div>
<div class="mt-3 text-xs text-blue-400/70 italic">SKILL.md is the entry point &mdash; everything else loads on demand</div>
</div>
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-gray-900/50 border border-purple-500/30">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x26A1;</span><div class="text-purple-300 font-bold text-sm">Loading model</div></div>
<div class="space-y-2.5 flex-1">
<div class="flex items-start gap-3">
<span class="px-2 py-0.5 bg-purple-900/60 rounded text-purple-300 text-xs font-mono flex-shrink-0">1</span>
<span class="text-xs text-gray-300">Copilot sees the <span class="text-purple-200 font-medium">skill name and description</span> up front</span>
</div>
<div class="flex items-start gap-3">
<span class="px-2 py-0.5 bg-purple-900/60 rounded text-purple-300 text-xs font-mono flex-shrink-0">2</span>
<span class="text-xs text-gray-300">The <span class="text-purple-200 font-medium">body loads</span> when the task matches</span>
</div>
<div class="flex items-start gap-3">
<span class="px-2 py-0.5 bg-purple-900/60 rounded text-purple-300 text-xs font-mono flex-shrink-0">3</span>
<span class="text-xs text-gray-300"><span class="text-purple-200 font-medium">Referenced resources</span> load only on demand</span>
</div>
<div class="flex items-start gap-3">
<span class="px-2 py-0.5 bg-green-900/60 rounded text-green-300 text-xs font-mono flex-shrink-0">&#x2713;</span>
<span class="text-xs text-gray-300">Many skills can exist without bloating every session</span>
</div>
</div>
</div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/40 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
<div class="text-sm font-bold text-white">Progressive loading is what makes <span class="text-orange-300">many skills practical</span> instead of expensive.</div>
</div>
</div>

---

<!-- SLIDE: 🔄 Skills vs Instructions vs Prompts -->
<div class="h-full flex flex-col">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F504; Skills vs Instructions vs Prompts</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<p class="relative z-10 text-gray-400 text-xs mb-3">Three tools, three jobs. Each one belongs in a different place in your workflow.</p>
<div class="relative z-10 grid grid-cols-3 gap-3 flex-1 min-h-0 mb-3">
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-gray-900/50 border border-blue-500/30">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x1F4CB;</span><div class="text-blue-300 font-bold text-sm">Instructions</div></div>
<div class="text-xs text-gray-400 italic mb-3">Always-on context</div>
<div class="space-y-2 flex-1">
<div class="flex gap-2"><span class="text-blue-400">&#x2022;</span><span class="text-xs text-gray-300">Best for behavior and standards</span></div>
<div class="flex gap-2"><span class="text-blue-400">&#x2022;</span><span class="text-xs text-gray-300">Often always-on or path-scoped</span></div>
<div class="flex gap-2"><span class="text-blue-400">&#x2022;</span><span class="text-xs text-gray-300">Tell Copilot <span class="text-blue-200 font-medium">how to work</span></span></div>
</div>
<div class="mt-3 pt-2 border-t border-blue-500/20 text-xs text-blue-400/70 font-mono">.github/copilot-instructions.md</div>
</div>
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-orange-900/50 to-gray-900/50 border border-orange-500/30">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x1F4AC;</span><div class="text-orange-300 font-bold text-sm">Prompts</div></div>
<div class="text-xs text-gray-400 italic mb-3">On-demand commands</div>
<div class="space-y-2 flex-1">
<div class="flex gap-2"><span class="text-orange-400">&#x2022;</span><span class="text-xs text-gray-300">Best for repeated invocations</span></div>
<div class="flex gap-2"><span class="text-orange-400">&#x2022;</span><span class="text-xs text-gray-300">Save and reuse strong request wording</span></div>
<div class="flex gap-2"><span class="text-orange-400">&#x2022;</span><span class="text-xs text-gray-300">Turn common tasks into <span class="text-orange-200 font-medium">/commands</span></span></div>
</div>
<div class="mt-3 pt-2 border-t border-orange-500/20 text-xs text-orange-400/70 font-mono">.github/prompts/*.prompt.md</div>
</div>
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-gray-900/50 border border-purple-500/40 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x1F9E0;</span><div class="text-purple-300 font-bold text-sm">Skills</div></div>
<div class="text-xs text-gray-400 italic mb-3">Packaged capabilities</div>
<div class="space-y-2 flex-1">
<div class="flex gap-2"><span class="text-purple-400">&#x2022;</span><span class="text-xs text-gray-300">Best for specialized capabilities</span></div>
<div class="flex gap-2"><span class="text-purple-400">&#x2022;</span><span class="text-xs text-gray-300">Combine instructions with resources and scripts</span></div>
<div class="flex gap-2"><span class="text-purple-400">&#x2022;</span><span class="text-xs text-gray-300">Teach <span class="text-purple-200 font-medium">complete workflows</span> Copilot can apply</span></div>
</div>
<div class="mt-3 pt-2 border-t border-purple-500/20 text-xs text-purple-400/70 font-mono">.github/skills/*/SKILL.md</div>
</div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-blue-900/30 via-orange-900/30 to-purple-900/30 rounded-xl border border-white/10 text-center">
<div class="text-sm font-bold text-white">Instructions <span class="text-blue-300">guide behavior</span>. Prompts <span class="text-orange-300">package requests</span>. Skills <span class="text-purple-300">package capability</span>.</div>
</div>
</div>

---

<!-- SLIDE: 📊 What to Validate -->
<div class="h-full flex flex-col">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4CA; What to Validate in the Workshop</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<p class="relative z-10 text-gray-400 text-xs mb-3">A skill that sounds right but doesn&rsquo;t improve the work isn&rsquo;t a skill &mdash; it&rsquo;s documentation. Test for real impact.</p>
<div class="relative z-10 grid grid-cols-3 gap-3 flex-1 min-h-0 mb-3">
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-gray-900/50 border border-blue-500/30">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x1F3AF;</span><div class="text-blue-300 font-bold text-sm">Capability fit</div></div>
<div class="text-xs text-gray-300 leading-relaxed flex-1">Check whether the skill actually <span class="text-blue-200 font-medium">teaches the workflow</span>, not just describes it. Copilot should be able to complete the task with the skill alone.</div>
<div class="mt-3 p-2 bg-blue-900/30 rounded-lg border border-blue-500/20 text-xs text-blue-300/80 italic">Does it change what Copilot can do?</div>
</div>
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-gray-900/50 border border-purple-500/30">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x1F4DA;</span><div class="text-purple-300 font-bold text-sm">Resource usefulness</div></div>
<div class="text-xs text-gray-300 leading-relaxed flex-1">Validate that examples, templates, schemas, or scripts <span class="text-purple-200 font-medium">materially improve</span> the output &mdash; not just add bulk to the context.</div>
<div class="mt-3 p-2 bg-purple-900/30 rounded-lg border border-purple-500/20 text-xs text-purple-300/80 italic">Does each resource earn its place?</div>
</div>
<div class="flex flex-col p-4 rounded-xl bg-gradient-to-br from-orange-900/50 to-red-900/30 border border-orange-500/40 shadow-lg shadow-orange-900/20">
<div class="flex items-center gap-2 mb-3"><span class="text-2xl">&#x23F1;&#xFE0F;</span><div class="text-orange-300 font-bold text-sm">Time &amp; rework saved</div></div>
<div class="text-xs text-gray-300 leading-relaxed flex-1">Compare specialized tasks <span class="text-orange-200 font-medium">with and without</span> the skill in place. The delta is the proof.</div>
<div class="mt-3 p-2 bg-orange-900/30 rounded-lg border border-orange-500/20 text-xs text-orange-300/80 italic">Would you skip this skill next time?</div>
</div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/40 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
<div class="text-sm font-bold text-white">A real skill changes the <span class="text-orange-300">quality of work</span>, not just the wording of the prompt.</div>
</div>
</div>

---

<!-- SLIDE: &#x1F528; Exercises — Skills -->
<div class="h-full flex flex-col">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F528; Exercises &mdash; Skills</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-3 shadow-lg shadow-orange-900/20">
<div class="text-lg font-bold text-white">3 exercises &middot; ~40 minutes &middot; shared leadership</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 flex-1 min-h-0">
<div class="flex flex-col bg-blue-900/30 rounded-xl border border-blue-500/40 overflow-hidden">
<div class="p-4 flex-1">
<div class="flex items-center justify-between mb-3"><div class="text-blue-300 font-bold text-lg">E4</div><span class="text-xs text-gray-500">Sarah &#x2B50;</span></div>
<div class="text-white text-sm font-semibold mb-2">Install the skill template</div>
<div class="text-gray-400 text-xs leading-relaxed">Install make-skill-template from awesome-copilot, study its structure, and understand why the folder layout matters before building your own.</div>
</div>
<div class="px-4 pb-4 pt-3 border-t border-blue-500/20"><p class="text-blue-200 text-xs italic">"I&rsquo;m not inventing the folder structure from scratch. Someone on the internet already did that. We use it."</p></div>
</div>
<div class="flex flex-col bg-emerald-900/30 rounded-xl border border-emerald-500/40 overflow-hidden">
<div class="p-4 flex-1">
<div class="flex items-center justify-between mb-3"><div class="text-emerald-300 font-bold text-lg">E5</div><span class="text-xs text-gray-500">David &#x2B50;</span></div>
<div class="text-white text-sm font-semibold mb-2">Graduate lore-check to a skill</div>
<div class="text-gray-400 text-xs leading-relaxed">Take the lore-accuracy-check prompt from E3 and promote it to a skill &mdash; so Copilot reaches for it automatically when working with lore content, with auto-citation built in.</div>
</div>
<div class="px-4 pb-4 pt-3 border-t border-emerald-500/20"><p class="text-emerald-200 text-xs italic">"A prompt you invoke and a skill Copilot reaches for are not the same thing. The distinction is worth encoding correctly."</p></div>
</div>
<div class="flex flex-col bg-purple-900/30 rounded-xl border border-purple-500/40 overflow-hidden">
<div class="p-4 flex-1">
<div class="flex items-center justify-between mb-3"><div class="text-purple-300 font-bold text-lg">E6</div><span class="text-xs text-gray-500">Marcus &#x2B50;</span></div>
<div class="text-white text-sm font-semibold mb-2">Card creation as a repeatable skill</div>
<div class="text-gray-400 text-xs leading-relaxed">Take the M2 plan-mode output for creating lore cards and graduate it into a parameterized skill that generates a card + detail page for any FanHub entity type.</div>
</div>
<div class="px-4 pb-4 pt-3 border-t border-purple-500/20"><p class="text-purple-200 text-xs italic">"Wait &mdash; I wrote the same plan twice. That&rsquo;s a pattern. Patterns should be skills." <span class="text-gray-500 not-italic">[tab-switches, tab-switches back]</span> "Okay I&rsquo;m back. Let&rsquo;s build it."</p></div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-900/40 rounded-lg border border-white/10 text-center text-xs text-gray-400">Each exercise rotates the lead persona &mdash; everyone contributes, everyone follows.</div>
</div>

---

<!-- SLIDE: 🔧 Exercise 4 — Install make-skill-template -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">E4</div>
<div>
<div class="text-blue-300 text-xs font-semibold tracking-widest uppercase">Exercise 4</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Install <code>make-skill-template</code></h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-cyan-400 text-sm text-gray-300">
The team is ready to build real skills, but blank-page setup still slows them down. <strong class="text-white">This exercise installs a proven starter from <code>awesome-copilot</code> so the next two skills begin from a better scaffold instead of improvised structure.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Install or copy <span class="font-mono text-blue-300">make-skill-template</span> into <span class="font-mono text-blue-300">.github/skills/</span></span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Inspect the template’s frontmatter, body structure, and optional resource folders</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Practice duplicating the scaffold so the next skill starts from a proven structure</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The template is available locally under <span class="font-mono text-blue-300">.github/skills/</span></div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The team understands which parts of a skill the template standardizes</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The next exercises can start from a better scaffold instead of a blank folder</div>
</div>
<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-xs text-gray-300 italic">💭 <strong class="text-blue-300">Sarah:</strong> "I spent thirty seconds checking whether this already existed. It did. Time-to-first-skill just dropped by ten minutes. You're welcome."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 make-skill-template SKILL.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: make-skill-template SKILL.md</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-purple-300">&#45;&#45;&#45;</div>
<div class="text-blue-300">name<span class="text-white">:</span> <span class="text-green-300">your-skill-name</span></div>
<div class="text-blue-300">description<span class="text-white">:</span> <span class="text-green-300">One sentence: what this skill enables Copilot to do.</span></div>
<div class="text-blue-300">tags<span class="text-white">:</span> <span class="text-green-300">[your-domain, workflow-type]</span></div>
<div class="text-purple-300">&#45;&#45;&#45;</div>
<div class="mt-2 text-gray-400"># Skill: your-skill-name</div>
<div class="mt-2 text-gray-300">## Purpose</div>
<div class="text-gray-400">Explain what workflow this skill teaches. What can Copilot now do that it couldn't reliably do before?</div>
<div class="mt-2 text-gray-300">## When to use this skill</div>
<div class="text-gray-400">- Trigger 1: describe the situation or request that activates this skill</div>
<div class="text-gray-400">- Trigger 2: describe another trigger scenario</div>
<div class="mt-2 text-gray-300">## Workflow</div>
<div class="text-gray-400">Step-by-step instructions Copilot should follow when this skill is active.</div>
<div class="mt-2 text-gray-300">## Resources</div>
<div class="text-gray-400">- `scripts/` — optional runnable helpers</div>
<div class="text-gray-400">- `examples/` — sample inputs and expected outputs</div>
<div class="text-gray-400">- `templates/` — reusable output structures</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">📁 .github/skills/make-skill-template/SKILL.md · The scaffold every new skill starts from</div>
</div>

---

<!-- SLIDE: &#x1F4AC; make-skill-template in Action -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-3 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-sm font-medium tracking-wide shadow-lg">&#x1F4AC; make-skill-template in Action</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 flex-1">
<div class="flex flex-col gap-2">
<div class="text-xs font-bold text-gray-500 uppercase tracking-widest">&#x1F4C4; .github/prompts/graduate-to-skill.prompt.md</div>
<div class="bg-gray-950 rounded-xl border border-gray-700/50 p-4 font-mono text-xs flex-1 select-all">
<div class="mt-2 text-gray-300">Look at <span class="text-blue-300">.github/prompts/<span class="text-yellow-300 bg-yellow-900/30 px-0.5 rounded">&#36;{input:promptName}</span>.prompt.md</span>.</div>
<div class="mt-1 text-gray-300">Let's create a new skill at <span class="text-blue-300">.github/skills/<span class="text-yellow-300 bg-yellow-900/30 px-0.5 rounded">&#36;{input:promptName}</span>/SKILL.md</span>.</div>
<div class="mt-2 text-gray-300">The skill should:</div>
<div class="text-gray-400">1. Preserve all logic from the prompt file</div>
<div class="text-gray-400">2. Have a keyword-rich description so Copilot</div>
<div class="text-gray-400 ml-3">discovers it automatically</div>
<div class="text-gray-400">3. Include explicit trigger phrases matching</div>
<div class="text-gray-400 ml-3">how team members ask for this task</div>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="bg-gray-900/60 rounded-xl p-3 border border-gray-700/50 text-xs">
<div class="text-gray-500 uppercase tracking-widest text-xs mb-2">&#x25B6; Running /graduate-to-skill</div>
<div class="bg-gray-800/60 rounded-lg p-2 border border-gray-600/40 font-mono text-xs mb-2">
<div class="text-gray-500 text-xs mb-1">Which prompt to graduate?</div>
<div class="text-white bg-blue-600/30 border border-blue-400/50 rounded px-2 py-0.5">lore-accuracy-check</div>
</div>
<div class="text-gray-400 text-xs">&#x2192; Copilot reads <span class="font-mono text-green-300">lore-accuracy-check.prompt.md</span>, infers trigger phrases from its content, scaffolds <span class="font-mono text-green-300">SKILL.md</span></div>
</div>
<div class="bg-gray-950 rounded-xl border border-purple-700/50 p-4 font-mono text-xs flex-1 select-all">
<div class="text-gray-500 mb-1 not-italic">// Generated</div>
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div class="text-orange-300">name<span class="text-white">: </span><span class="text-green-300">lore-accuracy-check</span></div>
<div class="text-orange-300">description<span class="text-white">: &gt;</span></div>
<div class="text-green-300 ml-4">Use this skill when asked to verify,</div>
<div class="text-green-300 ml-4">validate, or fact-check lore entries.</div>
<div class="text-green-300 ml-4">Triggers on: check lore, verify lore,</div>
<div class="text-green-300 ml-4">fact-check, canon check, is this correct.</div>
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div class="text-gray-500 ml-3 mt-1">// body preserved from prompt...</div>
</div>
<div class="bg-blue-900/20 rounded-lg p-2.5 border border-blue-500/20 text-xs text-gray-300">
&#x1F4A1; <strong class="text-blue-300">One prompt, any graduation.</strong> Change <span class="font-mono text-yellow-300">&#36;{input:promptName}</span> to <span class="font-mono text-white">good-idea-fairy</span> and the same workflow graduates that skill instead.
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Exercise 5 — Lore Accuracy Check as a Skill -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-5">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30 flex-shrink-0">E5</div>
<div>
<div class="text-emerald-300 text-xs font-semibold tracking-widest uppercase">Exercise 5</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Graduate Lore-Check to a Skill</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">David &#x2B50;</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">Elena &#x1F91D;</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">&#x23F1; 12 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-4 bg-gray-900/60 rounded-xl border-l-4 border-emerald-400 text-sm text-gray-300">
Elena has been invoking <code class="bg-gray-800 px-1 rounded text-orange-300">/lore-accuracy-check</code> manually before every PR. David watches her do it for the third time before lunch. <em>The prompt is correct. The invocation is the problem.</em> <strong class="text-white">Embed it as a skill so Copilot reaches for it automatically &mdash; no reminder needed.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">&#x1F4CB; Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create <code class="text-emerald-300">.github/skills/lore-accuracy-check/</code> using the template from E4</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Write <code class="text-emerald-300">SKILL.md</code> &mdash; instruct Copilot when and how to apply the check</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Reference the universe file as the authority source for all lore claims</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Test: ask Copilot to generate a lore entry &mdash; does it cite the universe file automatically?</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">&#x2705; Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> <code class="text-emerald-300">.github/skills/lore-accuracy-check/SKILL.md</code> exists</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> SKILL.md references the universe file explicitly</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> Copilot cites the skill when asked to write a lore entry</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> Generated lore passes the E3 accuracy-check prompt</div>
</div>
<div class="mt-3 p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/30 text-xs text-gray-300 italic">&#x1F4AD; <strong class="text-emerald-300">David:</strong> "You just showed me what should be a skill. The prompt is correct. It&rsquo;s the invocation that&rsquo;s manual &mdash; and that&rsquo;s the part we&rsquo;re about to fix."</div>
</div>
</div>
</div>

---

<!-- SLIDE: &#x1F4CB; E5 &#x2014; Inside lore-accuracy-check -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-3 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-sm font-medium tracking-wide shadow-lg">&#x1F4CB; E5 &mdash; Inside lore-accuracy-check</span>
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
<div class="text-green-300 ml-4">seed data, or any Breaking Bad content.</div>
<div class="text-green-300 ml-4">Triggers on: check lore, verify lore,</div>
<div class="text-green-300 ml-4">fact-check, canon check, lore accuracy,</div>
<div class="text-green-300 ml-4">is this correct, seed data accuracy.</div>
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div class="mt-2 text-orange-400">## Verification process</div>
<div class="text-gray-400">1. Read the content to check carefully</div>
<div class="text-gray-400">2. Read relevant sections of breaking-bad-universe.md</div>
<div class="text-gray-400">3. For each claim, find the corresponding fact</div>
<div class="text-gray-400">4. Flag discrepancies with the exact correct info</div>
<div class="text-gray-400">5. Note Unverifiable claims (reference has nothing)</div>
<div class="text-gray-400">6. If all claims check out, confirm explicitly</div>
</div>
<div class="flex flex-col gap-3">
<div class="bg-gray-900/60 rounded-xl p-4 border border-gray-700/50 flex-1">
<div class="text-emerald-400 font-semibold text-sm mb-2">&#x1F4CB; Output Format</div>
<div class="font-mono text-xs space-y-1">
<div class="text-orange-300">**Status**: <span class="text-gray-400">Accurate / Inaccurate /</span></div>
<div class="text-gray-400 ml-3">Partially Accurate / Unverifiable</div>
<div class="mt-1 text-orange-300">**Issues** (if any):</div>
<div class="text-gray-400 ml-3">- problem &rarr; correct information</div>
<div class="mt-1 text-orange-300">**Verified claims**:</div>
<div class="text-gray-400 ml-3">- facts confirmed correct</div>
</div>
<div class="mt-3 pt-2 border-t border-gray-700/50">
<div class="text-xs text-gray-500 uppercase tracking-widest mb-1.5">Confidence levels</div>
<div class="text-xs text-gray-400">&#x2023; <span class="text-white">Confirmed</span> &mdash; reference states it explicitly</div>
<div class="text-xs text-gray-400">&#x2023; <span class="text-white">Consistent</span> &mdash; nothing contradicts it</div>
<div class="text-xs text-gray-400">&#x2023; <span class="text-white">Unverifiable</span> &mdash; reference has no info</div>
<div class="text-xs text-gray-400">&#x2023; <span class="text-white">Contradicted</span> &mdash; reference directly contradicts</div>
</div>
</div>
<div class="bg-gray-900/60 rounded-xl p-3 border border-gray-700/50 text-xs">
<div class="text-gray-400 italic">"A prompt is something you invoke. A skill is something Copilot already knows. That distinction is worth encoding correctly."</div>
<div class="text-emerald-400 text-xs mt-1">&mdash; David, correcting the framing before agreeing it was a good idea</div>
</div>
</div>
</div>
</div>
</div>
---

<!-- SLIDE: &#x26A0; Institutional Knowledge Baked In -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-3 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-sm font-medium tracking-wide shadow-lg">&#x26A0; Institutional Knowledge Baked In</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="text-xs text-gray-400">The SKILL.md includes a table of common errors Copilot watches for automatically &mdash; domain knowledge a new team member would take months to accumulate.</div>
<div class="bg-gray-950 rounded-xl border border-gray-700/50 p-4 flex-1">
<div class="grid grid-cols-2 gap-x-6 text-xs">
<div class="text-orange-400 font-bold uppercase tracking-wide pb-1 border-b border-gray-700/50 mb-2">&#x274C; Common mistake in seed data</div>
<div class="text-emerald-400 font-bold uppercase tracking-wide pb-1 border-b border-gray-700/50 mb-2">&#x2705; Correct per canon</div>
<div class="text-red-300 py-0.5">"university professor"</div>
<div class="text-gray-300 py-0.5">High school chemistry teacher</div>
<div class="text-red-300 py-0.5">Purity "over 99%" (vague)</div>
<div class="text-gray-300 py-0.5">Exactly 99.1% purity</div>
<div class="text-red-300 py-0.5">Blue color from the synthesis method</div>
<div class="text-gray-300 py-0.5">Cooking impurity in the P2P/methylamine method</div>
<div class="text-red-300 py-0.5">Jesse as Walt's "friend" early on</div>
<div class="text-gray-300 py-0.5">Former student, small-time dealer &mdash; not a friend</div>
<div class="text-red-300 py-0.5">Gus Fring killed by a gunshot</div>
<div class="text-gray-300 py-0.5">Pipe bomb in Hector Salamanca's wheelchair</div>
<div class="text-red-300 py-0.5">Hank killed by Walt</div>
<div class="text-gray-300 py-0.5">Executed by Jack Welker &mdash; Walt tried to stop it</div>
<div class="text-red-300 py-0.5">Jane died, Walt uninvolved</div>
<div class="text-gray-300 py-0.5">Walt watched Jane choke and did not intervene</div>
<div class="text-red-300 py-0.5">Mike as Gus's "bodyguard"</div>
<div class="text-gray-300 py-0.5">Fixer / cleaner / enforcer &mdash; not a bodyguard</div>
<div class="text-red-300 py-0.5">Saul's real name is Saul Goodman</div>
<div class="text-gray-300 py-0.5">Real name Jimmy McGill &mdash; Saul Goodman is a pseudonym</div>
</div>
</div>
<div class="bg-emerald-900/20 rounded-lg p-2.5 border border-emerald-500/20 text-xs text-gray-300">
&#x1F4A1; <strong class="text-emerald-300">This is what a skill does that a prompt cannot.</strong> These patterns are consulted every time, automatically &mdash; no one has to remember to include them in the request.
</div>
</div>
</div>

---

<!-- SLIDE: Exercise 6 — Create Card and Page Skill -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-5">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">E6</div>
<div>
<div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise 6</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Card Creation as a Repeatable Skill</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus &#x2B50;</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">Jessica &#x1F91D;</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">&#x23F1; 15 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-4 bg-gray-900/60 rounded-xl border-l-4 border-purple-400 text-sm text-gray-300">
In Module 2, plan mode produced the full roadmap for the Lore card and <code class="bg-gray-800 px-1 rounded text-purple-300">/lore</code> page. Marcus saved it. Now he needs a Ratings card. <em>The plan is almost identical.</em> <strong class="text-white">Generalize the M2 plan into a parameterized skill &mdash; one invocation creates the card + page plan for any FanHub entity.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">&#x1F4CB; Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create <code class="text-purple-300">.github/skills/create-card-and-page/</code> using the E4 template</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Use the M2 Lore plan as the base <code class="text-purple-300">SKILL.md</code> body</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Parameterize with <code class="text-purple-300">&#36;{input:entityName}</code> and <code class="text-purple-300">&#36;{input:entityType}</code></span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Add a <code class="text-purple-300">templates/</code> folder with starter scaffolds for each artifact type</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">5</span><span class="text-gray-300">Test: invoke for "Ratings" &mdash; plan should match the same 4&ndash;5 files as the Lore plan</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">&#x2705; Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> <code class="text-purple-300">create-card-and-page/</code> created with SKILL.md + templates/</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> Skill accepts entity name and generates a scoped plan</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> Plan identifies the same 4&ndash;5 files as the M2 Lore plan</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">&#x2610;</span> Templates folder has at least one starter scaffold file</div>
</div>
<div class="mt-3 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-xs text-gray-300 italic">&#x1F4AD; <strong class="text-purple-300">Marcus:</strong> "Wait &mdash; I wrote the same plan twice. That&rsquo;s a pattern." <span class="text-gray-500 not-italic">[tab-switches, tab-switches back]</span> "Okay I&rsquo;m back. Patterns should be skills. Let&rsquo;s build it."</div>
</div>
</div>
</div>

---

<!-- SLIDE: &#x1F3D7; E6 &#x2014; Inside new-card-skill -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-3 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-sm font-medium tracking-wide shadow-lg">&#x1F3D7; E6 &mdash; Inside new-card-skill</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 flex-1">
<div class="bg-gray-950 rounded-xl border border-gray-700/50 p-4 font-mono text-xs overflow-auto select-all">
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div class="text-orange-300">name<span class="text-white">: </span><span class="text-green-300">new-card-skill</span></div>
<div class="text-orange-300">description<span class="text-white">: &gt;</span></div>
<div class="text-green-300 ml-4">Use this skill when asked to add a new</div>
<div class="text-green-300 ml-4">entity type with a card grid page to FanHub.</div>
<div class="text-green-300 ml-4">It scaffolds the full stack: backend model,</div>
<div class="text-green-300 ml-4">DbContext, seed data, EF Core migration,</div>
<div class="text-green-300 ml-4">REST controller, frontend model, stat card,</div>
<div class="text-green-300 ml-4">nav-card, and a Blazor list page.</div>
<div class="text-gray-500">&#45;&#45;&#45;</div>
<div class="mt-2 text-orange-400">## What to ask before starting</div>
<div class="text-gray-400">1. Entity name &mdash; singular PascalCase</div>
<div class="text-gray-400">2. Properties beyond Id and ShowId</div>
<div class="text-gray-400">3. Form fields for the add form</div>
<div class="text-gray-400">4. Nav card label (plural display)</div>
<div class="text-gray-400">5. Nav card icon (emoji)</div>
<div class="text-gray-400">6. Seed source file</div>
</div>
<div class="flex flex-col gap-3">
<div class="bg-gray-900/60 rounded-xl p-4 border border-gray-700/50 flex-1">
<div class="text-purple-400 font-semibold text-sm mb-2">&#x1F4C1; Skill Directory</div>
<div class="font-mono text-xs text-gray-400 space-y-0.5">
<div>.github/skills/new-card-skill/</div>
<div class="ml-3">&#x251C;&#x2500;&#x2500; SKILL.md</div>
<div class="ml-3">&#x251C;&#x2500;&#x2500; templates/</div>
<div class="ml-6">&#x251C;&#x2500;&#x2500; BackendModel.cs</div>
<div class="ml-6">&#x251C;&#x2500;&#x2500; Controller.cs</div>
<div class="ml-6">&#x251C;&#x2500;&#x2500; FrontendModel.cs</div>
<div class="ml-6">&#x251C;&#x2500;&#x2500; SeedBlock.cs</div>
<div class="ml-6">&#x251C;&#x2500;&#x2500; HomeStatCard.razor.txt</div>
<div class="ml-6">&#x251C;&#x2500;&#x2500; HomeNavCard.razor.txt</div>
<div class="ml-6">&#x2514;&#x2500;&#x2500; ListPage.razor.txt</div>
<div class="ml-3">&#x2514;&#x2500;&#x2500; scripts/</div>
<div class="ml-6">&#x251C;&#x2500;&#x2500; check-scaffold.ps1</div>
<div class="ml-6">&#x251C;&#x2500;&#x2500; run-migration.ps1</div>
<div class="ml-6">&#x2514;&#x2500;&#x2500; verify-endpoints.ps1</div>
</div>
</div>
<div class="bg-purple-900/20 rounded-lg p-3 border border-purple-500/20 text-xs text-gray-300">
&#x1F4A1; <strong class="text-purple-300">Not just instructions.</strong> 7 templates Copilot fills in. 3 scripts that validate, migrate, and verify. This is a repeatable factory.
</div>
</div>
</div>
</div>
</div>
---

<!-- SLIDE: &#x1F9E9; Templates &#x2014; The Factory Floor -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-3 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-sm font-medium tracking-wide shadow-lg">&#x1F9E9; Templates &mdash; The Factory Floor</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 flex-1">
<div class="flex flex-col gap-2">
<div class="text-xs font-bold text-gray-500 uppercase tracking-widest">&#x1F4C4; templates/BackendModel.cs</div>
<div class="bg-gray-950 rounded-xl border border-gray-700/50 p-4 font-mono text-xs flex-1 select-all">
<div class="text-blue-400">namespace <span class="text-gray-300">Backend.Models;</span></div>
<div class="mt-2 text-blue-400">public class <span class="text-yellow-300 bg-yellow-900/30 px-1 rounded">{ EntityName }</span></div>
<div class="text-gray-300">{</div>
<div class="ml-4 text-gray-400">public int Id { get; set; }</div>
<div class="ml-4 text-gray-400">public int ShowId { get; set; }</div>
<div class="ml-4 text-gray-500 italic">// Add requested properties here</div>
<div class="ml-4 text-gray-500 italic">// No navigation props, no data annotations</div>
<div class="ml-4 text-gray-500 italic">// All strings non-nullable</div>
<div class="ml-4 text-gray-400">public string Title { get; set; }</div>
<div class="ml-4 text-gray-400">public string Description { get; set; }</div>
<div class="text-gray-300">}</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="text-xs font-bold text-gray-500 uppercase tracking-widest">&#x1F4AC; Copilot asks, then generates</div>
<div class="bg-gray-900/60 rounded-xl p-3 border border-gray-700/50 text-xs space-y-1">
<div class="text-gray-400">&#x2023; Entity: <span class="text-white font-mono">Lore</span></div>
<div class="text-gray-400">&#x2023; Properties: <span class="text-white font-mono">Name, Description</span></div>
<div class="text-gray-400">&#x2023; Nav label: <span class="text-white font-mono">"Lore"</span></div>
<div class="text-gray-400">&#x2023; Icon: <span class="text-white font-mono">&#x1F4CD;</span></div>
<div class="text-gray-400">&#x2023; Seed: <span class="text-white font-mono">breaking-bad-universe.md</span></div>
</div>
<div class="flex items-center gap-2">
<div class="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
<div class="text-purple-400 text-xs">&#x2193; generated</div>
<div class="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
</div>
<div class="bg-gray-950 rounded-xl border border-purple-700/50 p-4 font-mono text-xs flex-1 select-all">
<div class="text-blue-400">namespace <span class="text-gray-300">Backend.Models;</span></div>
<div class="mt-2 text-blue-400">public class <span class="text-green-300">Lore</span></div>
<div class="text-gray-300">{</div>
<div class="ml-4 text-gray-300">public int Id { get; set; }</div>
<div class="ml-4 text-gray-300">public int ShowId { get; set; }</div>
<div class="ml-4 text-gray-300">public string Name { get; set; }</div>
<div class="ml-4 text-gray-300">public string Description { get; set; }</div>
<div class="text-gray-300">}</div>
</div>
</div>
</div>
<div class="bg-purple-900/20 rounded-lg p-2.5 border border-purple-500/20 text-xs text-gray-300">
&#x1F4A1; <strong class="text-purple-300">7 templates, one parameter.</strong> Every file &mdash; backend, frontend, controller, seed, 3 Razor components &mdash; generated from the same 6 answers. Change <span class="font-mono text-white">Lore</span> to <span class="font-mono text-green-300">Ratings</span> and the whole stack regenerates.
</div>
</div>
</div>
---

<!-- SLIDE: &#x1F504; 9 Steps, 3 Scripts -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-3 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-sm font-medium tracking-wide shadow-lg">&#x1F504; 9 Steps, 3 Scripts</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col gap-3">
<div class="grid grid-cols-3 gap-3 flex-1">
<div class="flex flex-col gap-2">
<div class="text-center text-xs font-bold text-emerald-400 uppercase tracking-widest">&#x2699;&#xFE0F; Backend</div>
<div class="bg-gray-900/60 rounded-xl p-3 border border-emerald-700/40 flex-1 space-y-2">
<div class="flex items-start gap-2 text-xs">
<div class="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">1</div>
<div class="text-gray-300">Backend model <span class="font-mono text-emerald-300">{EntityName}.cs</span></div>
</div>
<div class="flex items-start gap-2 text-xs">
<div class="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">2</div>
<div class="text-gray-300">Register DbSet in FanHubContext</div>
</div>
<div class="flex items-start gap-2 text-xs">
<div class="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">3</div>
<div class="text-gray-300">Seed block from universe file (12&ndash;15 records)</div>
</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="text-center text-xs font-bold text-orange-400 uppercase tracking-widest">&#x1F9EF; Scripts</div>
<div class="flex flex-col gap-2 flex-1">
<div class="bg-orange-900/30 rounded-xl p-3 border border-orange-500/40 flex-1">
<div class="text-orange-300 font-mono text-xs font-bold mb-1">check-scaffold.ps1</div>
<div class="text-gray-400 text-xs">Verifies 6 files exist, DbSet registered, seed block present &mdash; before migration runs</div>
<div class="text-orange-400 text-xs mt-2 font-mono">&#x2193; step 3.5 gate</div>
</div>
<div class="bg-orange-900/30 rounded-xl p-3 border border-orange-500/40 flex-1">
<div class="text-orange-300 font-mono text-xs font-bold mb-1">run-migration.ps1</div>
<div class="text-gray-400 text-xs">Runs EF Core migration with clear error reporting. Stops the skill if it fails.</div>
<div class="text-orange-400 text-xs mt-2 font-mono">&#x2193; step 4</div>
</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="text-center text-xs font-bold text-blue-400 uppercase tracking-widest">&#x1F5A5; Frontend</div>
<div class="bg-gray-900/60 rounded-xl p-3 border border-blue-700/40 flex-1 space-y-2">
<div class="flex items-start gap-2 text-xs">
<div class="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">5</div>
<div class="text-gray-300">REST controller (GET + POST)</div>
</div>
<div class="flex items-start gap-2 text-xs">
<div class="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">6</div>
<div class="text-gray-300">Frontend model mirroring backend</div>
</div>
<div class="flex items-start gap-2 text-xs">
<div class="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">7</div>
<div class="text-gray-300">Stat card on Home.razor</div>
</div>
<div class="flex items-start gap-2 text-xs">
<div class="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">8</div>
<div class="text-gray-300">Nav card on Home.razor</div>
</div>
<div class="flex items-start gap-2 text-xs">
<div class="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">9</div>
<div class="text-gray-300">Blazor list page + inline add form</div>
</div>
</div>
</div>
</div>
<div class="bg-orange-900/20 rounded-lg p-2.5 border border-orange-500/20 flex items-center gap-3 text-xs">
<div class="text-orange-300 font-mono font-bold flex-shrink-0">verify-endpoints.ps1</div>
<div class="text-gray-500">&#x2014;</div>
<div class="text-gray-300">Confirms GET + POST work, homepage count shows, nav card links, and form submission adds a record. Run after the backend is up.</div>
</div>
</div>
</div>
---

<!-- SLIDE: Compounding Value -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-purple-900/10 to-blue-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F517; Compounding Value</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="p-3 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center mb-4">
<div class="text-lg text-white font-semibold mb-0.5">You've built two layers. They multiply each other.</div>
<div class="text-sm text-gray-300">Prompts capture intent. Skills make that intent available to Copilot. Together they become a workflow layer that grows with the team.</div>
</div>
<div class="grid grid-cols-3 gap-4 text-left">
<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">&#x1F4DD;</div>
<div>
<div class="text-blue-300 font-bold">Prompt files (M3)</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Captured &amp; repeatable</div>
</div>
</div>
<div class="space-y-2 text-xs text-gray-300 leading-snug">
<div class="p-2.5 bg-gray-900/40 rounded-lg">Best thinking preserved as team assets</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg">Consistent outputs across teammates</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg">Version-controlled &amp; discoverable</div>
</div>
</div>
<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">&#x26A1;</div>
<div>
<div class="text-purple-300 font-bold">Agent skills (M4)</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Embedded &amp; automatic</div>
</div>
</div>
<div class="space-y-2 text-xs text-gray-300 leading-snug">
<div class="p-2.5 bg-gray-900/40 rounded-lg">Copilot reaches for the right behavior</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg">Templates guarantee consistent output</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg">Scripts validate and verify each run</div>
</div>
</div>
<div class="p-4 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30 shadow-lg shadow-orange-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-lg">&#x1F680;</div>
<div>
<div class="text-orange-300 font-bold">Modules 5 &amp; 6</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Built on this foundation</div>
</div>
</div>
<div class="space-y-2 text-xs text-gray-300 leading-snug">
<div class="p-2.5 bg-gray-900/40 rounded-lg"><strong class="text-orange-200">Module 5:</strong> stable skills become integration entry points</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg"><strong class="text-orange-200">Module 6:</strong> skills + prompts power trustworthy custom agents</div>
</div>
</div>
</div>
<div class="mt-4 p-3 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-center">
<div class="text-base text-yellow-300 font-semibold">Every future feature starts with a prompt. The best ones become skills — and the whole team benefits automatically.</div>
</div>
---

<!-- SLIDE: &#x2705; Module Checklist -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x2705; Module Checklist</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="mb-3 p-3 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-base text-white font-semibold">Six exercises. Two layers. One complete workflow foundation.</div>
</div>
<div class="mb-1 text-xs font-bold text-orange-400 uppercase tracking-widest">&#x1F4DD; Part 1 &mdash; Prompt Files (E1&ndash;E3)</div>
<div class="grid grid-cols-3 gap-3 text-left text-xs mb-3">
<div class="p-3 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30">
<div class="flex items-center gap-2 mb-1">
<div class="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs font-bold text-blue-300">E1</div>
<div class="text-blue-300 font-bold">Refresh the source of truth</div>
</div>
<div class="space-y-1 text-gray-400">
<div>&#x2022; <code class="text-gray-300">refresh-docs.prompt.md</code> created</div>
<div>&#x2022; ARCHITECTURE.md stays aligned after changes</div>
</div>
</div>
<div class="p-3 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
<div class="flex items-center gap-2 mb-1">
<div class="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-xs font-bold text-purple-300">E2</div>
<div class="text-purple-300 font-bold">Save one strong prompt</div>
</div>
<div class="space-y-1 text-gray-400">
<div>&#x2022; One of: good-idea-fairy, risk-prioritizer,</div>
<div>&#x2022; or commit-helper &mdash; saved &amp; reusable</div>
</div>
</div>
<div class="p-3 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30">
<div class="flex items-center gap-2 mb-1">
<div class="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-xs font-bold text-emerald-300">E3</div>
<div class="text-emerald-300 font-bold">Encode domain knowledge</div>
</div>
<div class="space-y-1 text-gray-400">
<div>&#x2022; <code class="text-gray-300">lore-accuracy-check.prompt.md</code></div>
<div>&#x2022; Canon errors flagged, good entries pass</div>
</div>
</div>
</div>
<div class="mb-1 text-xs font-bold text-orange-400 uppercase tracking-widest">&#x26A1; Part 2 &mdash; Agent Skills (E4&ndash;E6)</div>
<div class="grid grid-cols-3 gap-3 text-left text-xs">
<div class="p-3 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30">
<div class="flex items-center gap-2 mb-1">
<div class="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs font-bold text-blue-300">E4</div>
<div class="text-blue-300 font-bold">Install skill template</div>
</div>
<div class="space-y-1 text-gray-400">
<div>&#x2022; <code class="text-gray-300">make-skill-template</code> installed</div>
<div>&#x2022; Future skills scaffold from proven template</div>
</div>
</div>
<div class="p-3 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30">
<div class="flex items-center gap-2 mb-1">
<div class="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-xs font-bold text-emerald-300">E5</div>
<div class="text-emerald-300 font-bold">Lore accuracy skill</div>
</div>
<div class="space-y-1 text-gray-400">
<div>&#x2022; E3 prompt graduated to <code class="text-gray-300">lore-accuracy-check/</code></div>
<div>&#x2022; Copilot consults universe file automatically</div>
</div>
</div>
<div class="p-3 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
<div class="flex items-center gap-2 mb-1">
<div class="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-xs font-bold text-purple-300">E6</div>
<div class="text-purple-300 font-bold">Card &amp; page skill</div>
</div>
<div class="space-y-1 text-gray-400">
<div>&#x2022; M2 plan graduated to <code class="text-gray-300">new-card-skill/</code></div>
<div>&#x2022; Any entity type scaffolded in 30 seconds</div>
</div>
</div>
</div>
<div class="mt-3 p-2.5 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-center text-xs text-gray-300">
Later modules get better because the team knows how to package repeatable work into invokable, trustworthy prompt and skill assets.
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

<!-- SLIDE: Module 3+4 Is Locked In -->
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
Module 3+4 Is Locked In
</h1>
<div class="relative z-10 mb-6">
<span class="px-5 py-2 bg-gradient-to-r from-purple-600/80 to-red-600/80 rounded-full text-white text-base font-medium shadow-lg shadow-purple-500/25">
&#x1F50C; Next Up: Module 5 &mdash; MCP Servers
</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 max-w-3xl w-full px-6 mb-6">
<div class="p-3 bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30 text-center">
<div class="text-xl mb-1">&#x1F4DD;</div>
<div class="text-orange-300 font-bold text-sm">You Captured Repetition</div>
<div class="text-gray-400 text-xs mt-1">High-value prompts are now saved as reusable team entry points</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30 text-center">
<div class="text-xl mb-1">&#x26A1;</div>
<div class="text-red-300 font-bold text-sm">You Packaged Expertise</div>
<div class="text-gray-400 text-xs mt-1">Skills embed domain knowledge and workflows the whole team can invoke</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xl mb-1">&#x1F50C;</div>
<div class="text-purple-300 font-bold text-sm">Now Connect Live Systems</div>
<div class="text-gray-400 text-xs mt-1">Module 5 moves from packaged local workflows into runtime integrations</div>
</div>
</div>
<div class="relative z-10 max-w-3xl w-full px-6">
<div class="p-4 bg-gradient-to-br from-orange-900/30 via-red-900/20 to-purple-900/30 rounded-2xl border border-orange-500/30 shadow-lg shadow-orange-900/20 text-center">
<p class="text-base text-gray-200 leading-snug !m-0">Prompt files make repeated work reusable. <span class="text-white font-semibold">Agent skills go further — Copilot itself can reach for them, without being asked.</span> MCP servers will let it bring live systems into that same workflow.</p>
</div>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full mt-4"></div>
</div>

---

<!-- SLIDE: &#x1F4AC; The Team, After Module 3+4 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4AC; The Team, After Module 3+4</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-amber-400">
<div class="text-xs font-bold text-amber-300 mb-0.5">Jessica</div>
<div class="text-xs text-gray-500 italic mb-2">The Eager Junior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I just said 'check lore' and it&hellip; did it. Automatically. With the canon citations. I didn't invoke anything. That's new."</div>
<div class="text-xs text-gray-500">Not quite believing it worked without her asking.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-blue-400">
<div class="text-xs font-bold text-blue-300 mb-0.5">David</div>
<div class="text-xs text-gray-500 italic mb-2">The Seasoned Architect</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"A skill is a capability contract. The description is the interface. Once you understand that, the rest follows naturally. I'll grant it's well-designed."</div>
<div class="text-xs text-gray-500">Conceding after verifying the abstraction holds.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-green-400">
<div class="text-xs font-bold text-green-300 mb-0.5">Sarah</div>
<div class="text-xs text-gray-500 italic mb-2">The Skeptical Senior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"New entity type, from zero to browsable page: twenty-three minutes. I timed it. That's down from a half-day. You're welcome."</div>
<div class="text-xs text-gray-500">Did the math. Filed the result. Moving on.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-purple-400">
<div class="text-xs font-bold text-purple-300 mb-0.5">Elena</div>
<div class="text-xs text-gray-500 italic mb-2">The Quality Champion</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"The verify-endpoints script failed on a missing migration. That's exactly what it should do. I'm adding edge cases to the skill. This is fine."</div>
<div class="text-xs text-gray-500">Found a failure mode. Considers it a success.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-orange-400">
<div class="text-xs font-bold text-orange-300 mb-0.5">Marcus</div>
<div class="text-xs text-gray-500 italic mb-2">The DevOps Developer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I ran new-card-skill for Ratings, then for Themes, then for Factions. Same output every time. I opened a Hacker News tab and closed it. That's how good this is."</div>
<div class="text-xs text-gray-500">The highest praise: he stayed focused.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-cyan-400">
<div class="text-xs font-bold text-cyan-300 mb-0.5">Rafael</div>
<div class="text-xs text-gray-500 italic mb-2">The Product Visionary</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Skills are institutional knowledge that scales. That's not a tech story &mdash; that's a resourcing story. I'm already mapping it to Module 6."</div>
<div class="text-xs text-gray-500">Already on the next module before this one closes.</div>
</div>
</div>
</div>
---

<!-- SLIDE: Reference Material -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-10 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/15 via-gray-900/40 to-red-900/15"></div>
<div class="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-red-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 text-center mb-4">
<div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Further Reading</div>
<h1 class="!text-3xl !font-bold bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent !mb-0">Reference Material</h1>
<div class="text-sm text-gray-400 mt-1">Official documentation for Module 3+4 &mdash; Prompts &amp; Skills</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<a href="https://code.visualstudio.com/docs/copilot/customization/prompt-files" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-orange-500/40 transition-colors no-underline">
<div class="font-semibold text-orange-300 text-sm mb-1">Prompt Files in VS Code</div>
<div class="text-xs text-gray-400">Complete guide to .prompt.md files, frontmatter, variables, and invocation</div>
</a>
<a href="https://code.visualstudio.com/docs/copilot/copilot-customization#agent-skills" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-purple-500/40 transition-colors no-underline">
<div class="font-semibold text-purple-300 text-sm mb-1">Agent Skills Reference</div>
<div class="text-xs text-gray-400">SKILL.md structure, frontmatter fields, script integration, and how VS Code discovers skills</div>
</a>
<a href="https://code.visualstudio.com/docs/copilot/copilot-customization" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-red-500/40 transition-colors no-underline">
<div class="font-semibold text-red-300 text-sm mb-1">Customize AI in VS Code</div>
<div class="text-xs text-gray-400">Overview of all Copilot customization primitives &mdash; instructions, prompt files, and agent skills</div>
</a>
<a href="https://code.visualstudio.com/api/references/workspace-context" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/40 transition-colors no-underline">
<div class="font-semibold text-cyan-300 text-sm mb-1">Workspace Context Reference</div>
<div class="text-xs text-gray-400">All variables in prompts and skills &mdash; &#36;{input:name}, &#36;{selection}, &#36;{file}, &#36;{workspaceFolder}</div>
</a>
<a href="https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-orange-500/40 transition-colors no-underline">
<div class="font-semibold text-orange-300 text-sm mb-1">Repository Custom Instructions</div>
<div class="text-xs text-gray-400">How copilot-instructions.md, prompt files, and skills layer together as a composable context stack</div>
</a>
<a href="https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-red-500/40 transition-colors no-underline">
<div class="font-semibold text-red-300 text-sm mb-1">Agent Mode in VS Code</div>
<div class="text-xs text-gray-400">How agent mode executes multi-step tasks autonomously, invokes skills, and handles tool calls</div>
</a>
<a href="https://github.com/stars/aaravnavani/lists/copilot-customization" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-purple-500/40 transition-colors no-underline">
<div class="font-semibold text-purple-300 text-sm mb-1">Awesome Copilot &mdash; Community Prompts</div>
<div class="text-xs text-gray-400">Community-contributed prompt and skill examples to inspire your own reusable workflows</div>
</a>
<a href="https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions" target="_blank" class="block p-3 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/40 transition-colors no-underline">
<div class="font-semibold text-cyan-300 text-sm mb-1">Building Copilot Extensions</div>
<div class="text-xs text-gray-400">Going beyond skills &mdash; packaging capabilities as shareable Copilot extensions for broader distribution</div>
</a>
</div>
</div>