---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 2: Agent Plan Mode
  Research first, validate second, implement with confidence
drawings:
  persist: false
transition: slide-left
title: Module 2 - Agent Plan Mode
module: workshop/02-agent-plan-mode
mdc: true
status: active
updated: 2026-03-26
---

<!-- SLIDE: Module 2: Agent Plan Mode -->
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
Module 2: Agent Plan Mode
</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
⏰ Plan the work before the work begins
</span>
</div>
<div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
"We gave Copilot the context. Now let's see if it actually understands our codebase — by asking it to plan real work."
</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
<div class="relative z-10 flex items-stretch gap-1 text-[10px] mt-4 px-4">
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
    <div class="font-bold text-gray-400 text-xs">M1</div>
    <div class="text-gray-500 mt-0.5 whitespace-nowrap">Instructions</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gradient-to-b from-orange-600/80 to-orange-800/60 rounded-lg border border-orange-400/50 text-center shadow-lg shadow-orange-900/30">
    <div class="font-bold text-white text-xs">M2</div>
    <div class="text-orange-200 mt-0.5 whitespace-nowrap">Plan Mode</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M3</div>
    <div class="text-gray-500 mt-0.5 whitespace-nowrap">Prompts</div>
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

<!-- SLIDE: ⏰ The Plan Mode Story -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-16 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="text-orange-300 font-bold text-lg tracking-wide">⏰ : Monday, 11:30 AM</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-4 flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-red-500 flex items-center justify-center text-base font-bold text-white shadow-lg shadow-purple-500/30 flex-shrink-0">M</div>
<div class="text-gray-300 text-sm">
<span class="text-white font-semibold">Marcus</span> opens the next feature request and realizes the foundation is no longer the problem.
</div>
</div>

<div class="relative z-10 mb-3 p-2 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 shadow-xl backdrop-blur-sm">
<div class="text-orange-300/60 text-lg leading-none font-serif mb-0.5">"</div>
<p class="text-gray-200 text-sm leading-snug -mt-1">
Wait — it just referenced ARCHITECTURE.md without me asking. When did that start working? Okay... <span class="text-orange-300 font-semibold">so what happens when I actually plan something?</span>
</p>
<div class="text-orange-300/60 text-lg leading-none font-serif text-right">"</div>
</div>

<div class="relative z-10 grid grid-cols-3 gap-3 mb-3 text-left">
<div class="p-3 rounded-xl bg-gray-900/60 border border-orange-500/30">
<div class="text-orange-300 font-bold text-xs mb-1">Module 0</div>
<div class="text-white font-semibold text-sm mb-1">Feel the mess</div>
<div class="text-xs text-gray-400 leading-tight">The team experienced weak context and inconsistent defaults firsthand.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-blue-500/30">
<div class="text-blue-300 font-bold text-xs mb-1">Module 1</div>
<div class="text-white font-semibold text-sm mb-1">Build the foundation</div>
<div class="text-xs text-gray-400 leading-tight">Architecture docs and instructions created a better baseline for Copilot behavior.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold text-xs mb-1">Module 2</div>
<div class="text-white font-semibold text-sm mb-1">Plan the work</div>
<div class="text-xs text-gray-400 leading-tight">Now the question is what to change, in what order, and how to challenge the roadmap before coding.</div>
</div>
</div>

<div class="relative z-10 flex items-center gap-3 p-4 bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-xl border border-red-500/40 shadow-lg">
<span class="text-xl flex-shrink-0">⚡</span>
<p class="text-white font-bold text-sm">
Plan mode turns <span class="text-orange-300">“Where do I start?”</span> into a reviewable roadmap before code starts landing.
</p>
</div>
</div>

---

<!-- SLIDE: 🎯 What You'll Build -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 What You'll Build</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-3 shadow-lg shadow-orange-900/20">
<div class="text-xl font-bold text-white mb-1">From feature request to step-by-step execution roadmap.</div>
<div class="text-sm text-orange-100">One feature, five exercises, one calmer path to implementation</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-3 text-xs text-left">
<div class="p-3 rounded-lg border-l-4 border-orange-500 bg-gray-900/60">
<div class="font-bold text-orange-300 mb-0.5 text-sm">2.1 — Swap the show</div>
<div class="text-gray-400 font-mono text-xs mb-2">Agent mode + universe file</div>
<div class="text-gray-300">Replace the Breaking Bad seed data with your chosen show before any feature work begins.</div>
</div>
<div class="p-3 rounded-lg border-l-4 border-blue-500 bg-gray-900/60">
<div class="font-bold text-blue-300 mb-0.5 text-sm">2.2–2.3 — Research-backed plans</div>
<div class="text-gray-400 font-mono text-xs mb-2">/plan mode</div>
<div class="text-gray-300">Two first-pass roadmaps with likely files, dependencies, and open questions surfaced before coding.</div>
</div>
<div class="p-3 rounded-lg border-l-4 border-purple-500 bg-gray-900/60">
<div class="font-bold text-purple-300 mb-0.5 text-sm">2.4 — Merged delivery roadmap</div>
<div class="text-gray-400 font-mono text-xs mb-2">Plan consolidation</div>
<div class="text-gray-300">Combine and sequence two plans into one prioritized implementation order — before a line is written.</div>
</div>
<div class="p-3 rounded-lg border-l-4 border-green-500 bg-gray-900/60">
<div class="font-bold text-green-300 mb-0.5 text-sm">2.5 — Cleaner execution</div>
<div class="text-gray-400 font-mono text-xs mb-2">Agent mode handoff</div>
<div class="text-gray-300">Hand the validated roadmap to Agent mode — implementation with less guesswork and fewer conflicts.</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-blue-900/20 rounded-lg border border-blue-500/30 text-center text-sm text-gray-300">
💡 <strong class="text-blue-300">A good plan changes how you start</strong> — you know which files to touch, in what order, before the first change lands.
</div>
</div>
---

<!-- SLIDE: 📚 What Plan Mode Actually Does -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 What Plan Mode Actually Does</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-left">

<div class="p-3 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30 shadow-lg shadow-orange-500/10">
<div class="text-orange-300 font-bold mb-2 text-sm">Researches read-only first</div>
<ul class="text-xs text-gray-300 space-y-1">
<li>Reads the codebase, docs, and existing patterns</li>
<li>Maps dependencies and likely file touch points</li>
<li>Surfaces assumptions and open questions</li>
</ul>
</div>

<div class="p-3 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30 shadow-lg shadow-purple-500/10">
<div class="text-purple-300 font-bold mb-2 text-sm">Produces a reviewable draft</div>
<ul class="text-xs text-gray-300 space-y-1">
<li>Summary of the approach</li>
<li>Ordered implementation steps</li>
<li>Dependencies and unresolved questions</li>
</ul>
</div>

<div class="p-3 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30 shadow-lg shadow-blue-500/10">
<div class="text-blue-300 font-bold mb-2 text-sm">Builds on Module 1</div>
<ul class="text-xs text-gray-300 space-y-1">
<li>Uses your architecture context</li>
<li>Follows your documented conventions</li>
<li>Starts from a better baseline than generic code search</li>
</ul>
</div>

<div class="p-3 rounded-xl bg-gradient-to-br from-red-900/30 to-gray-900/40 border border-red-500/30 shadow-lg shadow-red-500/10">
<div class="text-red-300 font-bold mb-2 text-sm">Still needs human judgment</div>
<ul class="text-xs text-gray-300 space-y-1">
<li>Edge cases</li>
<li>Architecture tradeoffs</li>
<li>Testing completeness and rollout decisions</li>
</ul>
</div>

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-red-900/20 rounded-xl border border-white/10 text-center">
<div class="text-sm text-white font-semibold">Plan mode improves the first draft. It does not replace review.</div>
</div>

---

<!-- SLIDE: 🔗 The Plan-First Workflow -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 The Plan-First Workflow</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="flex flex-col items-center gap-4 mt-8 text-center">

<div class="grid grid-cols-4 gap-4 w-full max-w-5xl">
<div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30 shadow-lg shadow-orange-500/10">
<div class="text-3xl mb-2">🔍</div>
<div class="text-orange-300 font-bold mb-2">Research</div>
<div class="text-sm text-gray-300">Ask plan mode to map the work before touching code.</div>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-red-900/40 to-gray-900/40 border border-red-500/30 shadow-lg shadow-red-500/10">
<div class="text-3xl mb-2">👀</div>
<div class="text-red-300 font-bold mb-2">Review</div>
<div class="text-sm text-gray-300">Read the proposed steps like a design review, not a final answer.</div>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🔄</div>
<div class="text-purple-300 font-bold mb-2">Refine</div>
<div class="text-sm text-gray-300">Add missing requirements, edge cases, tests, and constraints.</div>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">✅</div>
<div class="text-blue-300 font-bold mb-2">Execute</div>
<div class="text-sm text-gray-300">Implement from a clearer roadmap with less thrash.</div>
</div>
</div>

<div class="mt-4 p-5 w-full max-w-4xl rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10">
<div class="text-xl font-bold text-white">Move your thinking earlier — where it changes the outcome instead of the cleanup.</div>
</div>

</div>

---

<!-- SLIDE: ❌ Before — Jumping Straight to Code -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/15 via-gray-900/10 to-green-900/15"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">❌ Before vs ✨ After</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="space-y-2">
<div class="p-3 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-1 text-sm">Manual analysis eats time</div>
<div class="text-sm text-gray-300">Developers spend 30+ minutes tracing files, imports, and dependencies before making the first change.</div>
</div>
<div class="p-3 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-1 text-sm">Missing dependencies surface late</div>
<div class="text-sm text-gray-300">Architecture gaps often show up during implementation or PR review instead of during planning.</div>
</div>
<div class="p-3 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-1 text-sm">Tests and edge cases get bolted on</div>
<div class="text-sm text-gray-300">The happy path gets planned first, while quality and failure modes show up as cleanup work later.</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-1 text-sm">Research starts faster</div>
<div class="text-sm text-gray-300">A complex feature can move from manual exploration toward a draft plan in minutes instead of half an hour.</div>
</div>
<div class="p-3 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-1 text-sm">Review happens before implementation</div>
<div class="text-sm text-gray-300">Architectural issues, missing tests, and unclear requirements get challenged while the work is still cheap to change.</div>
</div>
<div class="p-3 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-1 text-sm">Execution gets calmer</div>
<div class="text-sm text-gray-300">The team codes against a validated roadmap instead of rediscovering the plan in the middle of implementation.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: ✅ What Good Plan Output Looks Like -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What Good Plan Output Looks Like</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
<div class="text-blue-300 font-bold mb-3">A strong draft includes</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>A clear task summary</li>
<li>Ordered implementation steps</li>
<li>Specific file paths or system areas</li>
<li>Dependencies and open questions</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-3">A strong review checks</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>Error handling and edge cases</li>
<li>Architectural fit and existing patterns</li>
<li>Test coverage and affected test files</li>
<li>Scope assumptions that need clarification</li>
</ul>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold">Good plan mode output is specific enough to challenge and simple enough to refine.</div>
</div>

---

<!-- SLIDE: 📊 What to Validate in the Workshop -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 What to Validate in the Workshop</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
<div class="text-orange-300 font-bold mb-2">Planning time</div>
<div class="text-sm text-gray-300">Compare manual feature analysis with plan generation plus review.</div>
</div>

<div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
<div class="text-blue-300 font-bold mb-2">Plan completeness</div>
<div class="text-sm text-gray-300">Check whether file paths, dependencies, and open questions are visible before implementation starts.</div>
</div>

<div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-2">Rework avoided</div>
<div class="text-sm text-gray-300">Look for fewer missed dependencies, earlier test planning, and fewer review surprises.</div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
<div class="text-xl font-bold text-white">Make the improvement observable.</div>
<div class="text-sm text-gray-300 mt-2">The strongest version of this module shows how planning changes what gets built — and how confidently it gets shipped.</div>
</div>

---

<!-- SLIDE: 🔨 Exercise Roadmap -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercise Roadmap</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="mt-6 p-5 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-2">This module is one clean progression.</div>
<div class="text-sm text-gray-300">Plan the stat cards. Plan the add form. Merge both into one roadmap. Then hand it to agent mode and ship it.</div>
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
<td class="p-3 font-semibold text-amber-300">2.1</td>
<td class="p-3">Swap the Show</td>
<td class="p-3">Replace Breaking Bad seed data with your chosen show</td>
<td class="p-3">Rafael ⭐</td>
<td class="p-3">10 min</td>
</tr>
<tr class="border-t border-white/5 bg-gray-900/40">
<td class="p-3 font-semibold text-blue-300">2.2</td>
<td class="p-3">Plan the Universe Stat Cards</td>
<td class="p-3">Research-first plan — guess the file count first</td>
<td class="p-3">Marcus ⭐</td>
<td class="p-3">10 min</td>
</tr>
<tr class="border-t border-white/5 bg-gray-900/40">
<td class="p-3 font-semibold text-purple-300">2.3</td>
<td class="p-3">Plan the Quick-Add Form</td>
<td class="p-3">Second plan in same session — continuity check</td>
<td class="p-3">David ⭐</td>
<td class="p-3">10 min</td>
</tr>
<tr class="border-t border-white/5">
<td class="p-3 font-semibold text-orange-300">2.4</td>
<td class="p-3">Combine Plans into a Delivery Roadmap</td>
<td class="p-3">Merge two plans, resolve duplicates, sequence safely</td>
<td class="p-3">Marcus ⭐</td>
<td class="p-3">10 min</td>
</tr>
<tr class="border-t border-white/5 bg-gray-900/40">
<td class="p-3 font-semibold text-green-300">2.5</td>
<td class="p-3">Execute the Plan and Populate Your Universe</td>
<td class="p-3">Switch to agent mode, execute roadmap, add real data</td>
<td class="p-3">Sarah ⭐</td>
<td class="p-3">15 min</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
<div class="text-white font-semibold">The progression is intentional.</div>
<div class="text-sm text-gray-300">Align the foundation first. Then plan, validate continuity, merge, and execute — on data that actually reflects your product.</div>
</div>

---

<!-- SLIDE: 🔨 Exercise Section Header -->
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercise Section</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<!-- SLIDE: 🔨 Exercises -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">�� Exercises</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-4 shadow-lg shadow-orange-900/20">
<div class="text-lg font-bold text-white">5 exercises · ~55 minutes · shared leadership</div>
</div>
<div class="relative z-10 grid grid-cols-5 gap-3">
<div class="p-3 bg-amber-900/30 rounded-lg border border-amber-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-amber-300 font-bold text-base">2.1</div>
<span class="text-xs text-gray-500">Rafael ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Swap the show</div>
<div class="text-gray-400 text-xs leading-snug">Replace Breaking Bad seed data with your team's chosen show in Agent mode</div>
</div>
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-blue-300 font-bold text-base">2.2</div>
<span class="text-xs text-gray-500">Marcus ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Plan stat cards</div>
<div class="text-gray-400 text-xs leading-snug">Generate a complete implementation roadmap before a single line is written</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-purple-300 font-bold text-base">2.3</div>
<span class="text-xs text-gray-500">David ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Plan add form</div>
<div class="text-gray-400 text-xs leading-snug">Produce a second roadmap for the add-episode feature in the same session</div>
</div>
<div class="p-3 bg-orange-900/30 rounded-lg border border-orange-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-orange-300 font-bold text-base">2.4</div>
<span class="text-xs text-gray-500">Marcus ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Merge both plans</div>
<div class="text-gray-400 text-xs leading-snug">Consolidate two roadmaps into one sequenced, conflict-free delivery plan</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg border border-green-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-green-300 font-bold text-base">2.5</div>
<span class="text-xs text-gray-500">Sarah ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Execute + populate</div>
<div class="text-gray-400 text-xs leading-snug">Hand the validated plan to Agent mode and implement without rediscovery</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-900/40 rounded-lg border border-white/10 text-center text-xs text-gray-400">
Each exercise rotates the lead persona — everyone contributes, everyone follows.
</div>
</div>

---

<!-- SLIDE: 🔨 Exercise 2.1: Swap the Show -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-500/30 flex-shrink-0">2.1</div>
<div>
<div class="text-amber-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Swap the Show</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Rafael ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah 🤝</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-3 bg-gray-900/60 rounded-xl border-l-4 border-amber-400 text-sm text-gray-300">
The repo still has Breaking Bad placeholder data. The team's chosen show is in <span class="font-mono text-amber-200">docs/[show]-universe.md</span>. The product they're about to build features on? Still Walter White. <strong class="text-white">Before anyone opens a feature branch, the foundation needs to match what we're actually shipping.</strong>
<div class="mt-2 text-xs italic text-amber-200">💭 Rafael: "The architecture is fine. The data is wrong. This is a 10-minute alignment — not a feature."</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0">1</span><span class="text-gray-300">In Agent mode, ask Copilot to audit all files containing Breaking Bad-specific seed content</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0">2</span><span class="text-gray-300">Ask Copilot to generate replacement content for your show using <span class="font-mono text-amber-300">docs/[show]-universe.md</span> as the source</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0">3</span><span class="text-gray-300">Apply the changes — verify at least 3 characters from your show appear, no Walter White remains</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Agent mode used (not manual find/replace)</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> <span class="font-mono">[show]-universe.md</span> used as content source</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Characters, episodes, or locations reflect your show</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> No Breaking Bad names in seed data files</div>
</div>
<div class="mt-2 p-3 bg-amber-900/20 rounded-lg border border-amber-500/30 text-xs text-gray-300 italic">💭 <strong class="text-amber-300">Sarah:</strong> "This should have been the first thing we did." &nbsp; <strong class="text-amber-300">Rafael:</strong> "It is. I'm already on the next OKR."</div>
</div>
</div>
</div>

---

<!-- SLIDE: 💬 Example: The Show Swap Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: The Show Swap Prompt</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="flex flex-col gap-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Step 1 — Audit</div>
<div class="font-mono text-xs bg-gray-900/80 rounded-lg border border-amber-500/30 p-3 text-gray-200 leading-relaxed">
<span class="text-amber-300">@workspace</span> Audit the FanHub seed data and list every file that contains Breaking Bad-specific content. Don't make any changes yet — just list the files and summarize what each one contains.
</div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 mb-1">Step 2 — Swap</div>
<div class="font-mono text-xs bg-gray-900/80 rounded-lg border border-amber-500/30 p-3 text-gray-200 leading-relaxed">
Using <span class="text-amber-300">#file:docs/[show]-universe.md</span> as the source of truth, generate replacement seed data for <span class="text-amber-300">[Your Show]</span>. Match the existing data structure exactly — same field names, same format. Apply the changes.
</div>
</div>
<div class="flex flex-col gap-3 text-xs">
<div class="p-3 bg-amber-900/20 rounded-lg border border-amber-500/30">
<div class="text-amber-300 font-bold mb-1">🔑 Why Agent mode</div>
<div class="text-gray-300">Agent mode can read the existing seed files, understand their structure, and write replacements that match exactly — without you listing every field manually</div>
</div>
<div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-bold mb-1">🔗 Universe file as source</div>
<div class="text-gray-300">The <span class="font-mono text-amber-300">[show]-universe.md</span> you built in M1 is now doing its first real job — seeding the database with accurate, canon-correct data</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-lg border border-gray-700/40">
<div class="text-gray-300 font-bold mb-1">📊 Expected outcome</div>
<div class="text-gray-400">Copilot enumerates 3–6 files, generates character/episode/location entries for your show, replaces the Breaking Bad content in one pass</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 🔨 Exercise 2.2: Plan the Universe Stat Cards -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-3">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">2.2</div>
<div>
<div class="text-blue-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Plan the Universe Stat Cards</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-3 p-3 bg-gray-900/60 rounded-xl border-l-4 border-blue-400 text-sm text-gray-300">
Marcus needs three animated stat cards — Characters, Locations, Canon Facts — on the FanHub homepage. <strong class="text-white">Before writing a line of code, he switches to plan mode and asks Copilot to map every file that needs to change.</strong>
<div class="mt-1 text-xs italic text-blue-200">💭 "I keep figuring out the real scope halfway through. I need to see the whole map before I take the first step." — Marcus</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Switch to <strong>Plan</strong> mode — then write down your guess: how many files will this touch?</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Enter the stat-cards prompt and watch plan mode read the codebase (60–120 s)</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Count files, compare to your guess, annotate ≥ 1 refinement</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Save the plan to <code class="text-xs">docs/universe-dashboard-plan.md</code> — you'll merge it with the 2.2 plan in Exercise 2.3</span></div>
</div>
</div>
<div class="space-y-2">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Plan mode runs without modifying any file</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Plan identifies DB migration, 3 API routes, &lt;UniverseStats&gt; component, homepage wiring</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> File-count guess recorded and compared (most guess 2–3, plan shows 5–7)</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Refinement annotated; plan saved to docs/universe-dashboard-plan.md</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 💬 Example: The Stat Cards Plan Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: The Stat Cards Plan Prompt</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-3 text-xs text-gray-400">Use <span class="text-orange-300 font-mono font-semibold">/plan</span> at the start of your prompt — this switches to plan mode automatically if you forgot to change the mode selector:</div>

<div class="relative z-10 font-mono text-sm bg-gray-900/80 rounded-xl border border-orange-500/30 p-5 text-gray-200 leading-relaxed mb-4">
<span class="text-orange-400 font-bold">/plan</span> Add a "Universe at a Glance" section to the FanHub homepage with three stat cards showing live counts: Characters, Locations, and Canon Facts. Each card should fetch its count from the API and animate the number on load.
</div>

<div class="relative z-10 grid grid-cols-2 gap-3 text-xs mb-3">
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20">
<div class="text-orange-300 font-bold mb-1">⚡ Why /plan</div>
<div class="text-gray-300">Works even if mode selector is still on Ask or Agent — no mode-switching required</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20">
<div class="text-orange-300 font-bold mb-1">⏱ What to expect</div>
<div class="text-gray-300">60–120 seconds of research — without touching any file</div>
</div>
</div>

<div class="relative z-10 p-3 bg-orange-900/20 rounded-xl border border-orange-400/40 text-xs text-gray-300">
👀 <strong class="text-orange-300">Watch the chat window while it runs.</strong> You'll see Copilot reading <span class="font-mono text-orange-200">ARCHITECTURE.md</span>, your DB schema, existing API routes, and the homepage component — each one listed as a tool call. Every file it reads is a file it understands before proposing a single change.
</div>
</div>

---

<!-- SLIDE: 📋 Example: First Plan Output -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: First Plan Output (Stat Cards)</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-blue-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-blue-300 mb-2">## Add "Universe at a Glance" Stat Cards</div>
<div class="text-gray-400 mb-3"><span class="text-blue-100">**Scope:**</span> New homepage section with 3 animated counters fetched from the API</div>
<div class="text-blue-300 mb-1">### Step 1: Database</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">migrations/add_lore_entries.sql</span> → New <code>lore_entries</code> table with <code>type</code> column (location | canon_fact)</div>
<div class="text-blue-300 mb-1">### Step 2: API Routes (3 new endpoints)</div>
<div class="text-gray-400">- <span class="text-blue-100">routes/stats.ts</span> → GET /api/stats/characters</div>
<div class="text-gray-400">- <span class="text-blue-100">routes/stats.ts</span> → GET /api/stats/locations</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">routes/stats.ts</span> → GET /api/stats/canon-facts</div>
<div class="text-blue-300 mb-1">### Step 3: React Component</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">components/UniverseStats.tsx</span> → fetch all 3 counts, animate number on mount</div>
<div class="text-blue-300 mb-1">### Step 4: Homepage Wiring</div>
<div class="text-gray-400 mb-2">- <span class="text-blue-100">pages/index.tsx</span> → import &lt;UniverseStats /&gt; and render in hero section</div>
<div class="text-blue-300 mb-1">### Open Questions</div>
<div class="text-gray-400">- Animation style: count-up on mount (1 s) or just fade-in?</div>
<div class="text-gray-400">- Table naming: <code>lore_entries</code> (proposed) vs <code>universe_facts</code>?</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Files touched:</strong> ~6 &nbsp; <strong class="text-gray-300">Most guessed:</strong> 2–3 &nbsp; <strong class="text-gray-300">Gap:</strong> this is the lesson
</div>
</div>

---

<!-- SLIDE: 🔨 Exercise 2.3: Plan the Quick-Add Form -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-3">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">2.3</div>
<div>
<div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Plan the Quick-Add Form</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">David ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-3 p-3 bg-gray-900/60 rounded-xl border-l-4 border-purple-400 text-sm text-gray-300">
Marcus shares his plan output with the group. David reads it and immediately notices something missing: <em>the stat cards show live counts, but there's no way to actually add data without a database client.</em> <strong class="text-white">David runs a second plan — for an "Add to Universe" form — and checks whether it picks up the table name Marcus's plan already decided on.</strong>
<div class="mt-1 text-xs italic text-purple-200">💭 "The continuity check is the whole point. Does the second plan know what the first plan decided?" — David</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">📋 Steps</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300"><strong>Stay in the same chat session</strong> from Exercise 2.1 — context is session-scoped</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Enter the "Add to Universe" form plan prompt</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Run the continuity check: does the plan reference <code>lore_entries</code> — the same table Marcus's plan named?</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Find the open question the plan surfaces that requires your judgment; write your answer</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">5</span><span class="text-gray-300">Save the plan to <code class="text-xs">docs/universe-quickadd-plan.md</code> — both plans go into Exercise 2.3</span></div>
</div>
</div>
<div class="space-y-2">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✅ Success Criteria</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Second plan generated in the same chat session as Exercise 2.1</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Plan references <code>lore_entries</code> as the shared table (continuity confirmed)</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> POST /api/characters and POST /api/lore-entries endpoints identified</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> At least one open question answered with your own judgment</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 💬 Example: The Quick-Add Form Plan Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: The Quick-Add Form Plan Prompt</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-3 text-xs text-gray-400">David enters this in the <strong class="text-white">same chat session</strong> as Exercise 2.1 — no new window, no lost context:</div>

<div class="relative z-10 font-mono text-sm bg-gray-900/80 rounded-xl border border-orange-500/30 p-5 text-gray-200 leading-relaxed mb-4">
<span class="text-orange-400 font-bold">/plan</span> Add a collapsible "Add to Universe" form panel next to the stat cards. The form should let me add a Character, Location, or Canon Fact by selecting a type and filling in a name and description. On submit, the matching stat card should refresh with the new count.
</div>

<div class="relative z-10 p-3 bg-orange-900/20 rounded-xl border border-orange-400/40 text-xs text-gray-300">
🔍 <strong class="text-orange-300">The continuity check:</strong> Once the plan output arrives, search it for <span class="font-mono text-orange-200">lore_entries</span>. If it references the same table name Marcus's plan decided on, context carried across. If it proposes something different — <span class="font-mono text-orange-200">universe_entries</span>, <span class="font-mono text-orange-200">facts</span>, anything else — you've found a drift problem to resolve before writing a single line of code.
</div>
</div>

---

<!-- SLIDE: 📋 Example: Second Plan Output -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
📋 Example: Second Plan Output (Quick-Add Form)
</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-purple-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-purple-300 mb-2">## Add "Add to Universe" Form Panel</div>
<div class="text-gray-400 mb-3"><span class="text-blue-100">**Scope:**</span> Collapsible form next to stat cards; type selector + name + description; counter refresh on submit</div>

<div class="text-purple-300 mb-1">### Step 1: API Endpoints (2 new)</div>
<div class="text-gray-400">- <span class="text-blue-100">routes/characters.ts</span> → POST /api/characters</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">routes/lore-entries.ts</span> → POST /api/lore-entries (inserts into <span class="text-green-300">lore_entries</span> ✓ same table)</div>

<div class="text-purple-300 mb-1">### Step 2: React Component</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">components/AddToUniverse.tsx</span> → form state, type selector, submit handler, counter-refresh callback</div>

<div class="text-purple-300 mb-1">### Step 3: Homepage Wiring</div>
<div class="text-gray-400 mb-2">- <span class="text-blue-100">pages/index.tsx</span> → render &lt;AddToUniverse /&gt; alongside &lt;UniverseStats /&gt;</div>

<div class="text-purple-300 mb-1">### Open Questions (requires your judgment)</div>
<div class="text-gray-400">- Optimistic counter refresh (instant UI) or wait for POST 200?</div>
<div class="text-gray-400">- Form collapse after successful submission: auto or manual?</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Continuity check:</strong> references <code>lore_entries</code> ✓ &nbsp; <strong class="text-gray-300">Drift risk:</strong> zero (same session)
</div>
</div>

---

<!-- SLIDE: 🔨 Exercise 2.4: Combining Plans into a Delivery Roadmap -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">2.4</div>
<div>
<div class="text-orange-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Combining Plans into a Delivery Roadmap</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
Marcus now has two plans: stat cards from 2.1 and the form from 2.2. Both mention <code>lore_entries</code> and the homepage. <strong class="text-white">2 parallel implementations would collide on the DB migration and homepage wiring.</strong>
<div class="mt-2 text-xs italic text-orange-200">💭 "Two plans, shared tables, overlapping homepage changes. Merge before we build." — Marcus</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0">1</span><span class="text-gray-300">Share both plans with Copilot using <code>#file:</code></span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Enter the merge prompt: &quot;Combine into one roadmap. Identify shared steps, resolve duplicates, sequence safely.&quot;</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Spot-check: DB migration listed once? Homepage wiring listed once? Sequence: DB → API → Component → Wiring?</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Save merged roadmap to <code>docs/universe-dashboard-plan.md</code> (overwrite 2.1 draft)</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Combined roadmap has no duplicate steps (DB migration appears once, homepage wiring appears once)</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Shared artifacts (lore_entries table, homepage) correctly merged into single steps</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Sequence is dependency-safe: DB → API → Components → Homepage wiring</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Roadmap saved as docs/universe-dashboard-plan.md (ready for Exercise 2.4)</div>
</div>
</div>
</div>
</div>


---

<!-- SLIDE: 💬 Example: The Merge Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: The Merge Prompt</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-3 text-xs text-gray-400">Still in the same chat session — attach both plan files with <span class="font-mono text-orange-300">#file:</span> so plan mode has both in context:</div>

<div class="relative z-10 font-mono text-sm bg-gray-900/80 rounded-xl border border-orange-500/30 p-5 text-gray-200 leading-relaxed mb-4">
<span class="text-orange-400 font-bold">/plan</span> <span class="text-cyan-300">#file:docs/universe-dashboard-plan.md</span> <span class="text-cyan-300">#file:docs/universe-quickadd-plan.md</span><br><br>
Combine these two plans into a single delivery roadmap. Identify any shared steps (like DB schema), resolve duplicates, and sequence everything so there are no dependency conflicts.
</div>

<div class="relative z-10 grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20">
<div class="text-orange-300 font-bold mb-1">🔗 Why #file:</div>
<div class="text-gray-300">Explicitly attaches both saved plans to the prompt — plan mode won't guess at filenames or rely on session memory alone</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20">
<div class="text-orange-300 font-bold mb-1">✅ What to check in the output</div>
<div class="text-gray-300">One DB migration (not two), sequenced as: DB → API → Components → Homepage wiring</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: Merged Roadmap -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
📋 Example: Merged Delivery Roadmap
</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-orange-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-orange-300 mb-2">## Delivery Roadmap: Stat Cards + Quick-Add Form</div>
<div class="text-gray-400 mb-3"><span class="text-orange-100">**Sequence:**</span> DB → API → Components → Homepage wiring</div>

<div class="text-orange-300 mb-1">### Phase 1: Database (once, shared)</div>
<div class="text-gray-400 mb-3">1. <span class="text-blue-100">migrations/add_lore_entries.sql</span> → <code>lore_entries</code> table with <code>type</code> column — built once, used by both features</div>

<div class="text-orange-300 mb-1">### Phase 2: API Routes</div>
<div class="text-gray-400">2. GET /api/stats/characters, /locations, /canon-facts</div>
<div class="text-gray-400 mb-3">3. POST /api/characters, POST /api/lore-entries</div>

<div class="text-orange-300 mb-1">### Phase 3: React Components</div>
<div class="text-gray-400">4. <span class="text-blue-100">UniverseStats.tsx</span> — fetch + animate counters</div>
<div class="text-gray-400 mb-3">5. <span class="text-blue-100">AddToUniverse.tsx</span> — form + submit + counter-refresh callback</div>

<div class="text-orange-300 mb-1">### Phase 4: Homepage Wiring (once, shared)</div>
<div class="text-gray-400 mb-2">6. <span class="text-blue-100">pages/index.tsx</span> → import both components in the correct order — one PR</div>

<div class="text-orange-300 mb-1">### Duplicates Resolved</div>
<div class="text-gray-400">- DB migration: 1 (not 2) &nbsp; Homepage update: 1 (not 2) &nbsp; Counter-refresh: shared pattern</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Result:</strong> 6 ordered steps · zero duplicate migrations · safe for hand-off to agent mode
</div>
</div>

---

<!-- SLIDE: 🔨 Exercise 2.5: Execute the Plan -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-500/30 flex-shrink-0">2.5</div>
<div>
<div class="text-green-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Execute the Plan and Populate Your Universe</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-3 bg-gray-900/60 rounded-xl border-l-4 border-green-400 text-sm text-gray-300">
Sarah is looking at <code>docs/universe-dashboard-plan.md</code> — the most thorough roadmap the team has ever produced. <strong class="text-white">Now she hands it to agent mode as explicit execution instructions and watches every file change. </strong>
<div class="mt-2 text-xs italic text-green-200">💭 "Plans don't ship product. But a plan this specific makes execution calmer." — Sarah</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Switch Copilot Chat from <strong>Plan</strong> to <strong>Agent</strong> mode — execution begins</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Monitor for deviations — if agent drifts from the plan, flag it and redirect</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Verify: homepage shows all 3 stat cards, form submits, counter refreshes, Network tab confirms POST</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Add ≥ 6 entries from your show (3 characters, 2 locations, 1 canon fact) — watch the counters change from 0</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Agent mode used (not plan mode) for all code execution</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Homepage renders all 3 stat cards with live counts fetched from the API</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> "Add to Universe" form posts to DB and refreshes the correct counter</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> ≥ 6 entries added from your show; counters show real numbers</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> You can name one decision you accepted and one you overrode (or why none were needed)</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: Execution Handoff -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
📋 Example: Executing the Roadmap
</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="text-sm font-mono bg-gray-900/80 rounded-lg border border-green-500/30 p-4 text-gray-300">
<div class="text-green-300 mb-2">The execution prompt</div>
<div class="text-gray-400 mb-3 text-xs italic">[Switch mode selector to <span class="text-green-200">Agent</span>]</div>
<div class="text-gray-300 text-xs">"Execute this plan. Start with the database schema, then the API endpoints, then the React component, then wire it into the homepage."</div>
<div class="text-gray-400 mt-3 mb-2 text-xs border-t border-green-500/20 pt-2">What to watch for:</div>
<div class="text-gray-400 text-xs">- Agent creates table named differently → flag it</div>
<div class="text-gray-400 text-xs">- Agent adds pagination (not in plan) → decide: accept or revert</div>
<div class="text-gray-400 text-xs">- Agent skips a step → point it back to the roadmap</div>
</div>
<div class="text-sm font-mono bg-gray-900/80 rounded-lg border border-blue-500/30 p-4 text-gray-300">
<div class="text-blue-300 mb-2">The payoff — your show, your data</div>
<div class="text-gray-400 text-xs mb-1">Breaking Bad example entries:</div>
<div class="text-gray-400 text-xs">Character: Walter White — "Chemistry teacher..."</div>
<div class="text-gray-400 text-xs">Character: Jesse Pinkman — "Walt's former student..."</div>
<div class="text-gray-400 text-xs">Location: Albuquerque — "Where almost every scene..."</div>
<div class="text-gray-400 text-xs">Location: The Superlab — "Industrial-scale meth lab..."</div>
<div class="text-gray-400 text-xs mb-3">Canon Fact: "Walt's chemistry knowledge predates his cancer diagnosis"</div>
<div class="text-green-300 text-xs font-bold">Counters: 0 · 0 · 0 → 3 · 2 · 1</div>
<div class="text-gray-400 text-xs mt-2 italic">Use details only a fan would know — they become the target data for Module 3.</div>
</div>
</div>

<div class="relative z-10 mt-4 p-3 bg-gradient-to-r from-green-900/30 to-blue-900/20 rounded-xl border border-green-500/30 text-center text-xs text-gray-300">
<strong class="text-green-300">The plan → execute arc closes here.</strong> Plan mode made the implementation safe. Your show data makes it yours.
</div>
</div>

---

<!-- SLIDE: 🔗 Compounding Value -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Compounding Value</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">
<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
<div class="text-blue-300 font-bold mb-3">What Module 2 adds</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>Research-first feature planning</li>
<li>A repeatable review loop before coding</li>
<li>Better sequencing across files and layers</li>
<li>Clearer handoff from planning to implementation</li>
</ul>
</div>
<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-3">How later modules benefit</div>
<ul class="text-sm text-gray-300 space-y-2">
<li><strong>Module 3:</strong> the prompts you craft during planning become reusable <code>.prompt.md</code> files for the whole team</li>
<li><strong>Module 4:</strong> skills can encode repeatable review and execution workflows</li>
<li><strong>Module 5:</strong> MCP servers give Copilot live access to the databases and APIs your plans reference</li>
<li><strong>Module 6:</strong> custom agents become more useful when the team already plans well</li>
</ul>
</div>
</div>

<div class="mt-8 flex justify-center">
<div class="px-6 py-3 bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/40 rounded-full text-center text-sm text-yellow-300 font-semibold shadow-lg shadow-yellow-900/20">
Better planning compounds — every later customization has a cleaner workflow to build on.
</div>
</div>

---

<!-- SLIDE: ✅ Module Checklist -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Module Checklist</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-1">By the end of Module 2, the team should have a planning rhythm.</div>
<div class="text-sm text-gray-300">Not one plan. A repeatable cycle: plan → validate continuity → merge → execute with real data.</div>
</div>

<div class="grid grid-cols-4 gap-3 mt-6 text-left text-sm">
<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">📝</div>
<div>
<div class="text-blue-300 font-bold text-xs">Plan the stat cards</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.1</div>
</div>
</div>
<ul class="space-y-2 text-xs text-gray-300">
<li>Research-first plan before any code</li>
<li>Guess file count → compare to plan's actual count</li>
<li>Annotate ≥ 1 refinement; save plan</li>
</ul>
</div>
<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🔁</div>
<div>
<div class="text-purple-300 font-bold text-xs">Plan the form</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.2</div>
</div>
</div>
<ul class="space-y-2 text-xs text-gray-300">
<li>Same session as 2.1</li>
<li>Continuity check: does plan reference lore_entries?</li>
<li>Answer one open question with your judgment</li>
</ul>
</div>
<div class="p-4 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30 shadow-lg shadow-orange-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-lg">🗺️</div>
<div>
<div class="text-orange-300 font-bold text-xs">Merge the plans</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.3</div>
</div>
</div>
<ul class="space-y-2 text-xs text-gray-300">
<li>One DB migration, one homepage update</li>
<li>Sequence: DB → API → Components → Wiring</li>
<li>Save final roadmap</li>
</ul>
</div>
<div class="p-4 rounded-2xl bg-gradient-to-br from-green-900/40 to-gray-900/50 border border-green-500/30 shadow-lg shadow-green-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-green-500/20 border border-green-400/30 flex items-center justify-center text-lg">🚀</div>
<div>
<div class="text-green-300 font-bold text-xs">Execute + populate</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.4</div>
</div>
</div>
<ul class="space-y-2 text-xs text-gray-300">
<li>Switch to agent mode, hand it the roadmap</li>
<li>Verify running feature end-to-end</li>
<li>Add ≥ 6 real show entries; counters go live</li>
</ul>
</div>
</div>

<div class="mt-4 grid grid-cols-2 gap-4">
<div class="p-4 rounded-xl bg-gray-900/60 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">What good looks like</div>
<div class="text-sm text-gray-300">Four exercises, one clean arc: plan → validate → merge → execute. The feature is live. The counters show real data from your show.</div>
</div>
<div class="p-4 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">Why this matters</div>
<div class="text-sm text-gray-300">The data you entered in 2.4 becomes the target for Elena's accuracy-check prompt in Module 3 — Module 2 output feeds Module 3 input.</div>
</div>
</div>

---

<!-- SLIDE: 📚 Keep the Foundation Evergreen -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 Keep the Foundation Evergreen</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="mt-6 p-5 bg-gradient-to-r from-blue-900/25 via-purple-900/25 to-orange-900/20 rounded-2xl border border-white/10 text-center">
<div class="text-lg font-bold text-white">Before Module 3, refresh the source of truth.</div>
<div class="text-sm text-gray-300 mt-2">Update <span class="font-mono text-blue-200">ARCHITECTURE.md</span> and <span class="font-mono text-purple-200">.github/copilot-instructions.md</span> so the prompts you build next are grounded in current reality.</div>
</div>

<div class="grid grid-cols-2 gap-5 mt-6 text-left">
<div class="p-5 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">🏗️</div>
<div>
<div class="text-blue-300 font-bold">Refresh architecture context</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">ARCHITECTURE.md</div>
</div>
</div>
<div class="text-sm text-gray-300 space-y-2">
<div>Capture any new structure, file relationships, or workflow boundaries you uncovered while planning.</div>
<div class="text-blue-200">Keep future planning grounded in reality instead of memory.</div>
</div>
</div>
<div class="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🧭</div>
<div>
<div class="text-purple-300 font-bold">Refresh team guidance</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">copilot-instructions.md</div>
</div>
</div>
<div class="text-sm text-gray-300 space-y-2">
<div>Update expectations, patterns, and review habits so prompts, skills, and agents inherit current team practice.</div>
<div class="text-purple-200">Evergreen guidance makes every later customization smarter.</div>
</div>
</div>
</div>

<div class="mt-6 p-4 rounded-xl bg-gray-900/60 border border-white/10 text-center">
<div class="text-sm text-yellow-300 font-semibold">Evergreen docs are not cleanup work — they are leverage for every later module.</div>
</div>

---

<!-- SLIDE: 🎉 Module 2 Is Locked In -->
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
Module 2 Is Locked In
</h1>
<div class="relative z-10 mb-6">
<span class="px-5 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-base font-medium shadow-lg shadow-orange-500/25">
📝 Next Up: Module 3 — Custom Prompts
</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 max-w-3xl w-full px-6 mb-6">
<div class="p-3 bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30 text-center">
<div class="text-xl mb-1">🗺️</div>
<div class="text-orange-300 font-bold text-sm">You Mapped the Work</div>
<div class="text-gray-400 text-xs mt-1">Planning now happens before code instead of during implementation thrash</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30 text-center">
<div class="text-xl mb-1">🧠</div>
<div class="text-red-300 font-bold text-sm">You Added Judgment</div>
<div class="text-gray-400 text-xs mt-1">Architecture, tests, and edge cases are challenged before execution starts</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xl mb-1">📝</div>
<div class="text-purple-300 font-bold text-sm">Now Capture the Pattern</div>
<div class="text-gray-400 text-xs mt-1">Module 3 turns repeatable planning requests into reusable custom prompts</div>
</div>
</div>
<div class="relative z-10 text-base text-gray-200 max-w-3xl px-10 mb-6 leading-snug">
Better planning makes execution calmer. <span class="text-white font-semibold">Custom prompts make that better workflow repeatable for the whole team.</span>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<!-- SLIDE: 💭 The Team, After Module 2 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💭 The Team, After Module 2</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-amber-400">
<div class="text-xs font-bold text-amber-300 mb-0.5">Jessica</div>
<div class="text-xs text-gray-500 italic mb-2">The Eager Junior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Marcus said 'use plan mode.' I didn&#39;t know that was a thing. Now I have a whole roadmap before I&#39;ve touched a single file."</div>
<div class="text-xs text-gray-500">Found a workflow nobody put in the onboarding docs.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-blue-400">
<div class="text-xs font-bold text-blue-300 mb-0.5">David</div>
<div class="text-xs text-gray-500 italic mb-2">The Thoughtful Architect</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"The plan surfaces assumptions before they become implementation constraints. That is not a shortcut — that is just better engineering."</div>
<div class="text-xs text-gray-500">Externalizes the unknowns before they become blockers.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-green-400">
<div class="text-xs font-bold text-green-300 mb-0.5">Sarah</div>
<div class="text-xs text-gray-500 italic mb-2">The Skeptical Senior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"It flagged a dependency conflict and identified the right files before we wrote a line. I ran the numbers. Yes."</div>
<div class="text-xs text-gray-500">Measured it. Liked what she found.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-purple-400">
<div class="text-xs font-bold text-purple-300 mb-0.5">Elena</div>
<div class="text-xs text-gray-500 italic mb-2">The Pragmatic Engineer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"The plan output has open questions in it. Which means it doesn&#39;t pretend to know things it doesn&#39;t. That I can work with."</div>
<div class="text-xs text-gray-500">Trusts the tool that shows its work.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-orange-400">
<div class="text-xs font-bold text-orange-300 mb-0.5">Marcus</div>
<div class="text-xs text-gray-500 italic mb-2">The Curious Tinkerer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Wait — it planned the whole feature? The files, the order, the dependencies? I just asked? That&#39;s it?"</div>
<div class="text-xs text-gray-500">Immediately wanted to try it on something bigger.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-cyan-400">
<div class="text-xs font-bold text-cyan-300 mb-0.5">Rafael</div>
<div class="text-xs text-gray-500 italic mb-2">The Pragmatic Lead</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Execution without a plan is expensive guessing. This turns 'let&#39;s see what happens' into a sequenced delivery roadmap."</div>
<div class="text-xs text-gray-500">Already mapped it to Q3 velocity targets.</div>
</div>
</div>
</div>
