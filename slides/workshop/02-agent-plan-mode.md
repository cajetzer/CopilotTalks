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
<div class="text-sm text-orange-100">One feature, four exercises, one calmer path to implementation</div>
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
<div class="p-3 rounded-lg border-l-4 border-green-500 bg-gray-900/60">
<div class="font-bold text-green-300 mb-0.5 text-sm">2.4 — Cleaner execution</div>
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
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 What Plan Mode Actually Does</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-3 flex-1">
<div class="p-3 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
<div class="text-orange-300 font-bold mb-1 text-sm">Researches read-only first</div>
<div class="text-xs text-gray-400 mb-2">Reads and maps before touching code — never modifies your files.</div>
<ul class="text-xs text-gray-300 space-y-1">
<li>Reads the codebase, docs, and existing patterns</li>
<li>Maps dependencies and likely file touch points</li>
<li>Surfaces assumptions and open questions</li>
</ul>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-1 text-sm">Produces a reviewable draft</div>
<div class="text-xs text-gray-400 mb-2">A structured plan to read, challenge, and refine before implementation starts.</div>
<ul class="text-xs text-gray-300 space-y-1">
<li>Summary of the approach and scope</li>
<li>Ordered implementation steps</li>
<li>Dependencies and unresolved questions</li>
</ul>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
<div class="text-blue-300 font-bold mb-1 text-sm">Builds on Module 1</div>
<div class="text-xs text-gray-400 mb-2">Your context files become the planning foundation, not just completion hints.</div>
<ul class="text-xs text-gray-300 space-y-1">
<li>Uses your architecture context automatically</li>
<li>Follows your documented conventions</li>
<li>Understands your show's domain from the universe file</li>
</ul>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-red-900/30 to-gray-900/40 border border-red-500/30">
<div class="text-red-300 font-bold mb-1 text-sm">Still needs human judgment</div>
<div class="text-xs text-gray-400 mb-2">Reduces discovery work — doesn't replace architectural thinking or team decisions.</div>
<ul class="text-xs text-gray-300 space-y-1">
<li>Edge cases and failure modes</li>
<li>Architecture tradeoffs and tech debt</li>
<li>Testing completeness and rollout decisions</li>
</ul>
</div>
</div>
<div class="relative z-10 mt-4 p-3 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-red-900/20 rounded-xl border border-white/10 text-center">
<div class="text-sm text-white font-semibold">Plan mode improves the first draft. It does not replace review.</div>
</div>
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

<!-- SLIDE: 🔨 Exercises -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F528; Exercises &mdash; Plan Mode</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-4 shadow-lg shadow-orange-900/20">
<div class="text-lg font-bold text-white">4 exercises · ~45 minutes · shared leadership</div>
</div>
<div class="relative z-10 grid grid-cols-4 gap-3">
<div class="p-3 bg-amber-900/30 rounded-lg border border-amber-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-amber-300 font-bold text-base">2.1</div>
<span class="text-xs text-gray-500">Rafael ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Swap the show</div>
<div class="text-gray-400 text-xs leading-snug">Replace Breaking Bad seed data with your team's chosen show in Agent mode</div>
</div>
<div class="p-3 bg-amber-900/30 rounded-lg border border-amber-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-amber-300 font-bold text-base">2.2</div>
<span class="text-xs text-gray-500">Jessica ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Plan Lore card</div>
<div class="text-gray-400 text-xs leading-snug">Add a Lore card to the homepage and a new Lore page before writing a line of code</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-purple-300 font-bold text-base">2.3</div>
<span class="text-xs text-gray-500">David ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Plan add form</div>
<div class="text-gray-400 text-xs leading-snug">Produce a second roadmap for the add-episode feature in the same session</div>
</div>
<div class="p-3 bg-green-900/30 rounded-lg border border-green-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-green-300 font-bold text-base">2.4</div>
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
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: The Show Swap Prompt</span><div class="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="flex flex-col gap-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Step 1 — Audit</div>
<div class="font-mono text-xs bg-gray-900/80 rounded-lg border border-amber-500/30 p-3 text-gray-200 leading-relaxed select-all cursor-text">
<span class="text-amber-300">@workspace</span> Audit the FanHub seed data and list every file that contains Breaking Bad-specific content. Don't make any changes yet — just list the files and summarize what each one contains.
</div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 mb-1">Step 2 — Swap</div>
<div class="font-mono text-xs bg-gray-900/80 rounded-lg border border-amber-500/30 p-3 text-gray-200 leading-relaxed select-all cursor-text">
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

<!-- SLIDE: 🔨 Exercise 2.2: Plan the Lore Card & Page -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-3">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-500/30 flex-shrink-0">2.2</div>
<div>
<div class="text-amber-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Plan the Lore Card & Page</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Jessica ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-3 p-3 bg-gray-900/60 rounded-xl border-l-4 border-amber-400 text-sm text-gray-300">
The homepage already has cards for Characters, Episodes, Seasons, and Network. Jessica is adding the missing one: a <strong class="text-white">Lore card</strong> that shows the count of lore facts and navigates to a new Lore page listing them in a card layout. She loves it — visible, interactive, exactly what users notice. <strong class="text-white">She runs plan mode to map the work before touching code, completely focused on making the display right.</strong>
<div class="mt-1 text-xs italic text-amber-200">💭 "A new page, new route, DB migration — I thought I was just dropping in another card." — Jessica</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Switch to <strong>Plan</strong> mode — then write down your guess: how many files will this touch?</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Enter the Lore card prompt and watch plan mode read the codebase (60–120 s)</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Count files in the plan, compare to your guess, annotate ≥ 1 refinement you'd make</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Click <strong>Open in Editor</strong>, then <strong>Save As Prompt File</strong> (lower-right) — David will spot what's missing in 2.3</span></div>
</div>
</div>
<div class="space-y-2">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Plan runs without modifying any file</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Plan identifies DB migration, <span class="font-mono text-xs">GET /api/lore-entries</span>, Lore page component, homepage card update</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> File-count guess recorded and compared (most guess 2–3, plan shows 4–6)</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Plan saved as <code class="text-xs">.prompt.md</code> via Save As Prompt File</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 💬 Example: The Lore Card Plan Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: The Lore Card Plan Prompt</span><div class="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-3 text-xs text-gray-400">Use <span class="text-orange-300 font-mono font-semibold">/plan</span> at the start of your prompt — this switches to plan mode automatically if you forgot to change the mode selector:</div>

<div class="relative z-10 font-mono text-sm bg-gray-900/80 rounded-xl border border-amber-500/30 p-5 text-gray-200 leading-relaxed mb-4 select-all cursor-text">
<span class="text-orange-400 font-bold">/plan</span> Add a Lore card to the FanHub homepage that shows the count of lore facts for the show. Clicking the card should navigate to a new /lore page that lists all lore facts in a card layout.
</div>

<div class="relative z-10 grid grid-cols-2 gap-3 text-xs mb-3">
<div class="p-3 bg-gray-900/60 rounded-xl border border-amber-500/20">
<div class="text-amber-300 font-bold mb-1">👀 Check the bottom of the plan</div>
<div class="text-gray-300">Plan mode often auto-seeds lore data from the universe file you created in Exercise 2.1 — scroll down before moving on</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-xl border border-orange-500/20">
<div class="text-orange-300 font-bold mb-1">⏱ What to expect</div>
<div class="text-gray-300">60–120 seconds of research — without touching any file</div>
</div>
</div>

<div class="relative z-10 p-3 bg-orange-900/20 rounded-xl border border-orange-400/40 text-xs text-gray-300">
👀 <strong class="text-orange-300">Watch the chat window while it runs.</strong> You'll see Copilot reading <span class="font-mono text-orange-200">ARCHITECTURE.md</span>, the existing card components, routing config, and DB schema — each listed as a tool call. It's learning the pattern of the existing cards before proposing how to add a new one.
</div>
<div class="relative z-10 mt-3 p-3 bg-blue-900/20 rounded-xl border border-blue-400/40 text-xs text-gray-300">
💾 <strong class="text-blue-300">Save the plan:</strong> Click <span class="font-mono text-blue-200">Open in Editor</span> when the plan finishes. A <span class="font-mono text-blue-200">Save As Prompt File</span> button will appear in the lower-right — click it to save as a <span class="font-mono text-blue-200">.prompt.md</span> file for Exercise 2.3.
</div>
</div>

---

<!-- SLIDE: 📋 Example: First Plan Output -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: First Plan Output (Lore Card & Page)</span><div class="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent"></div>
</div>
<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-amber-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-blue-300 mb-2">## Add Lore Card to Homepage + /lore Page</div>
<div class="text-gray-400 mb-3"><span class="text-blue-100">**Scope:**</span> New Lore card on homepage showing lore count; new /lore route listing entries in card layout</div>
<div class="text-blue-300 mb-1">### Step 1: Database</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">migrations/add_lore_entries.sql</span> → New <code>lore_entries</code> table (id, title, description, created_at)</div>
<div class="text-blue-300 mb-1">### Step 2: API Route</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">routes/lore.ts</span> → GET /api/lore-entries (returns all entries + count)</div>
<div class="text-blue-300 mb-1">### Step 3: Lore Page Component</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">pages/lore.tsx</span> → fetches lore entries, renders each as a card (title + description)</div>
<div class="text-blue-300 mb-1">### Step 4: Homepage Card Update</div>
<div class="text-gray-400 mb-2">- <span class="text-blue-100">pages/index.tsx</span> → add Lore card to existing grid, link to /lore, show count from API</div>
<div class="text-blue-300 mb-1">### Step 5: Routing</div>
<div class="text-gray-400 mb-2">- <span class="text-blue-100">router/index.ts</span> → register /lore route pointing to lore.tsx</div>
<div class="text-blue-300 mb-1">### Open Questions</div>
<div class="text-gray-400">- Card style: match existing card pattern exactly, or differentiate Lore visually?</div>
<div class="text-gray-400">- Empty state: what should /lore show when no entries exist yet?</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Files touched:</strong> ~5 &nbsp; <strong class="text-gray-300">Most guessed:</strong> 2–3 &nbsp; <strong class="text-gray-300">Gap:</strong> this is the lesson
</div>
</div>

---

<!-- SLIDE: 🔨 Exercise 2.3: Plan the Lore Entry Form -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-3">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">2.3</div>
<div>
<div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Plan the Lore Entry Form</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">David ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-3 p-3 bg-gray-900/60 rounded-xl border-l-4 border-purple-400 text-sm text-gray-300">
Jessica shares her plan output with the group. David reads it line by line — all the way through. The Lore card, the `/lore` page, the migration, the API route. <em>He notices the plan has no step for adding entries. The table gets created, the page reads from it — but nothing writes to it.</em>
<strong class="text-white">David opens Jessica's saved plan file in VS Code, then runs a second plan for a Show Lore entry form — VS Code detects the open plan and offers to combine them.</strong>
<div class="mt-1 text-xs italic text-purple-200">💭 "The plan creates the table and reads from it. Nothing writes to it. How do entries ever get in there?" — David</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">📋 Steps</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300"><strong>Open Jessica's plan file</strong> in VS Code — having it open is how Copilot detects the existing plan context</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Run the Show Lore form plan prompt — VS Code will ask to <strong>combine</strong> or keep plans separate — choose <strong>Combine</strong></span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Find the open question the plan surfaces that requires your judgment; write your answer</span></div>
<div class="flex items-start gap-3 p-2 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Click <strong>Open in Editor</strong>, then <strong>Save As Prompt File</strong> (lower-right) — combined plan ready for execution</span></div>
</div>
</div>
<div class="space-y-2">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✅ Success Criteria</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Jessica's plan file open in VS Code before running the second plan</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Combined plan references existing table — no new table invented</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> <span class="font-mono">POST /api/lore-entries</span> endpoint identified in the plan</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> At least one open question answered with your own judgment</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 💬 Example: The Lore Form Plan Prompt -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/10 to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-violet-700/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Example: The Lore Entry Form Plan Prompt</span><div class="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-3 text-xs text-gray-400">David enters this with Jessica's plan file open in VS Code:</div>

<div class="relative z-10 font-mono text-sm bg-gray-900/80 rounded-xl border border-purple-500/30 p-5 text-gray-200 leading-relaxed mb-4 select-all cursor-text">
<span class="text-orange-400 font-bold">/plan</span> Add a form to the /lore page that lets me add a new lore entry. The form should have a title and description field. On submit, save the new entry and refresh the list so the new card appears immediately. The Lore count on the homepage card should also update.
</div>

<div class="relative z-10 p-3 bg-orange-900/20 rounded-xl border border-orange-400/40 text-xs text-gray-300">
🔍 <strong class="text-orange-300">The continuity check:</strong> Once the new plan arrives, scan it against Jessica's plan for three things — <strong class="text-orange-200">table names</strong> (not a new name), <strong class="text-orange-200">naming conventions</strong> (consistent, same route pattern as <span class="font-mono text-orange-200">/api/characters</span>), and <strong class="text-orange-200">data types</strong> (the <span class="font-mono text-orange-200">type</span> column uses the same enum values). Any drift here means the two plans will conflict the moment they're executed together.
</div>
</div>

---

<!-- SLIDE: 📋 Example: Second Plan Output -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-violet-700/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: Second Plan Output (Lore Entry Form)</span><div class="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
</div>
<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-purple-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-purple-300 mb-2">## Add Entry Form to /lore Page</div>
<div class="text-gray-400 mb-3"><span class="text-blue-100">**Scope:**</span> Form on /lore page with title + description fields; on submit, entry saved and card list refreshes; homepage Lore count updates</div>
<div class="text-purple-300 mb-1">### Step 1: API Endpoint</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">routes/lore.ts</span> → POST /api/lore-entries (inserts into <span class="text-green-300">lore_entries</span> ✓ same table as Jessica's plan)</div>
<div class="text-purple-300 mb-1">### Step 2: Form Component</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">pages/lore.tsx</span> → add form above card list; title + description inputs; submit handler calls POST, then re-fetches list</div>
<div class="text-purple-300 mb-1">### Step 3: Homepage Count Sync</div>
<div class="text-gray-400 mb-2">- <span class="text-blue-100">pages/index.tsx</span> → Lore card count re-fetches from GET /api/lore-entries on navigation back to homepage</div>
<div class="text-purple-300 mb-1">### Open Questions (requires your judgment)</div>
<div class="text-gray-400">- Should the form appear above or below the existing lore cards?</div>
<div class="text-gray-400">- New entry: append to bottom of list, or sort newest-first?</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Continuity check:</strong> references <code>lore_entries</code> ✓ &nbsp; <strong class="text-gray-300">Route pattern:</strong> matches <code>/api/lore-entries</code> from plan 1 ✓
</div>
</div>

---

<!-- SLIDE: 🔨 Exercise 2.4: Execute the Plan -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-green-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-500/30 flex-shrink-0">2.4</div>
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
Sarah reviews <code>{plan}.prompt.md</code> — two plans merged: Jessica's Lore card and page, David's Show Lore entry form. <strong class="text-white">She simply runs the prompt file and watches every file change.</strong>
<div class="mt-2 text-xs italic text-green-200">💭 "After execution, the homepage will have five cards. And the Lore count won't stay at zero." — Sarah</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Run <strong>/{plan}.prompt.md</strong>  — execution begins</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Monitor for deviations — if agent drifts from the plan, flag it and redirect</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Verify: Show Lore form submits, Show Lore counter increments, Network tab confirms POST to <span class="font-mono text-green-300">/api/lore-entries</span></span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Add ≥ 3 Show Lore entries from your show — watch the counter climb from 0</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Homepage renders all 5 stat cards</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Lore form posts correctly and refreshes the Show Lore counter</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> ≥ 3 Show Lore entries added; Show Lore counter goes from 0 to real numbers</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> You can name one decision you accepted and one you overrode (or why none were needed)</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📋 Example: Execution Handoff -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-green-900/10 to-transparent"></div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-emerald-600/80 to-green-700/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
📋 Example: Executing the Roadmap
</span><div class="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
</div>

<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="text-sm font-mono bg-gray-900/80 rounded-lg border border-emerald-500/30 p-4 text-gray-300 select-text cursor-text">
<div class="text-green-300 mb-2">The execution prompt</div>
<div class="text-gray-400 mb-3 text-xs italic">[Switch mode selector to <span class="text-green-200">Agent</span>]</div>
<div class="text-white text-sm font-bold mb-3">/plan-loreCardAndLorePageForm.prompt</div>
<div class="text-gray-400 mt-3 mb-2 text-xs border-t border-green-500/20 pt-2">What to watch for:</div>
<div class="text-gray-400 text-xs">- Agent creates table named differently → flag it</div>
<div class="text-gray-400 text-xs">- Agent adds pagination (not in plan) → decide: accept or revert</div>
<div class="text-gray-400 text-xs">- Agent skips a step → point it back to the roadmap</div>
</div>
<div class="text-sm font-mono bg-gray-900/80 rounded-lg border border-emerald-500/30 p-4 text-gray-300">
<div class="text-blue-300 mb-2">The payoff — Lore card complete</div>
<div class="text-gray-400 text-xs mb-2">Homepage before execution:</div>
<div class="text-gray-400 text-xs">Characters ✓ · Episodes ✓ · Seasons ✓ · Network ✓</div>
<div class="text-red-400 text-xs mb-3">Lore: missing</div>
<div class="text-gray-400 text-xs mb-2">After execution + adding entries:</div>
<div class="text-gray-400 text-xs">Characters ✓ · Episodes ✓ · Seasons ✓ · Network ✓</div>
<div class="text-green-300 text-xs font-bold">Lore: 3 ✓ → /lore page lists them all</div>
<div class="text-gray-400 text-xs mt-2 italic">The plan described exactly what got built — no surprises.</div>
</div>
</div>

<div class="relative z-10 mt-4 p-3 bg-gradient-to-r from-green-900/30 to-blue-900/20 rounded-xl border border-green-500/30 text-center text-xs text-gray-300">
<strong class="text-green-300">The plan → execute arc closes here.</strong> Plan mode made the implementation safe. Your show data makes it yours.
</div>
</div>

---

<!-- SLIDE: ✅ Module Checklist -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Module Checklist</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-xl border border-white/10 text-center mb-3">
<div class="text-base text-white font-semibold mb-0.5">By the end of Module 2, the team has a planning rhythm.</div>
<div class="text-xs text-gray-300">Read the plan before touching code. Improve and Iterate. Execute with confidence.</div>
</div>
<div class="relative z-10 grid grid-cols-4 gap-3 text-left text-sm">
<div class="p-3 rounded-xl bg-gradient-to-br from-amber-900/40 to-gray-900/50 border border-amber-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-base">🔄</div>
<div>
<div class="text-amber-300 font-bold text-xs">Swap the show</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.1</div>
</div>
</div>
<ul class="space-y-1 text-xs text-gray-300">
<li>Agent mode swaps seed data</li>
<li>Universe file drives the change</li>
<li>No manual edits needed</li>
</ul>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-base">📝</div>
<div>
<div class="text-blue-300 font-bold text-xs">Plan Lore card & page</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.2</div>
</div>
</div>
<ul class="space-y-1 text-xs text-gray-300">
<li>Research-first before any code</li>
<li>Guess file count → compare</li>
<li>Save plan as .prompt.md</li>
</ul>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-base">🔍</div>
<div>
<div class="text-purple-300 font-bold text-xs">Plan the Lore form</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.3</div>
</div>
</div>
<ul class="space-y-1 text-xs text-gray-300">
<li>Read the plan — spot the write gap</li>
<li>Combine with Jessica's plan</li>
<li>Continuity check: lore_entries ✓</li>
</ul>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-900/40 to-gray-900/50 border border-green-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-8 h-8 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center text-base">🚀</div>
<div>
<div class="text-green-300 font-bold text-xs">Execute + populate</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.4</div>
</div>
</div>
<ul class="space-y-1 text-xs text-gray-300">
<li>Run /{plan}.prompt.md in agent mode</li>
<li>Verify Lore card, page, and form</li>
<li>Add ≥ 3 lore entries; count goes live</li>
</ul>
</div>
</div>
<div class="relative z-10 mt-3 grid grid-cols-2 gap-3">
<div class="p-3 rounded-xl bg-gray-900/60 border border-white/10 text-left">
<div class="text-xs font-bold text-white mb-1">What good looks like</div>
<div class="text-xs text-gray-300">Four exercises, one arc: swap → plan → gap-check → execute. The Lore card is live. Real entries from your show are in the database.</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-left">
<div class="text-xs font-bold text-white mb-1">Why this matters</div>
<div class="text-xs text-gray-300">The lore entries you added in 2.4 become the target for Elena's accuracy-check prompt in Module 3 — Module 2 output feeds Module 3 input.</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📚 Keep the Foundation Evergreen -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 Keep the Foundation Evergreen</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-4 bg-gradient-to-r from-blue-900/25 via-purple-900/25 to-orange-900/20 rounded-xl border border-white/10 text-center mb-5">
<div class="text-lg font-bold text-white">You just added new files, routes, and a page.</div>
<div class="text-sm text-gray-300 mt-1">The codebase changed. The source of truth hasn't caught up yet.</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-5 text-left">
<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">🏗️</div>
<div>
<div class="text-blue-300 font-bold text-sm">ARCHITECTURE.md</div>
<div class="text-xs text-gray-400">Needs updating</div>
</div>
</div>
<div class="text-sm text-gray-300">The Lore card, <span class="font-mono text-blue-200">/lore</span> page, and <span class="font-mono text-blue-200">lore_entries</span> table are new. Future planning prompts won't know about them unless the architecture doc reflects them.</div>
</div>
<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🧭</div>
<div>
<div class="text-purple-300 font-bold text-sm">copilot-instructions.md</div>
<div class="text-xs text-gray-400">Needs updating</div>
</div>
</div>
<div class="text-sm text-gray-300">Any new naming conventions or patterns from this module should be captured — so every future prompt, skill, and agent inherits current practice.</div>
</div>
</div>
<div class="relative z-10 mt-5 p-4 bg-gradient-to-r from-orange-900/30 via-purple-900/20 to-blue-900/20 rounded-xl border border-orange-500/30 text-center">
<div class="text-sm text-white font-semibold">In Module 3, Exercise 3.1 — you'll build <span class="font-mono text-orange-300">refresh-docs.prompt.md</span></div>
<div class="text-xs text-gray-400 mt-1">One reusable prompt that keeps both files current after any meaningful code change. For now, update them <strong class="text-white">using Copilot Chat</strong>.</div>
</div>
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
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/30 via-red-900/20 to-purple-900/30 rounded-xl border border-orange-500/30 max-w-3xl w-full px-8 mb-6 text-center shadow-lg shadow-orange-900/20">
Better planning makes execution calmer. <span class="text-white font-semibold">Custom prompts make that better workflow repeatable for the whole team.</span>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>
---

<!-- SLIDE: 💬 Reflect & Discuss -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-gray-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-5">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-violet-700/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">&#x1F4AC; Reflect &amp; Discuss</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-8 flex-1">
<div class="flex flex-col gap-3">
<div class="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">&#x1F4D6; Story Moments</div>
<div class="p-4 bg-gray-900/50 rounded-xl border-l-2 border-indigo-400/50">
<div class="text-sm text-gray-200 leading-relaxed">The plan listed 14 files &mdash; nobody expected that many. The number made the scope real before a single line was written</div>
</div>
<div class="p-4 bg-gray-900/50 rounded-xl border-l-2 border-indigo-400/50">
<div class="text-sm text-gray-200 leading-relaxed">The gap-finding moment: plan mode surfaced missing pieces the team hadn&rsquo;t discussed &mdash; caught before the keyboard, not after</div>
</div>
<div class="p-4 bg-gray-900/50 rounded-xl border-l-2 border-indigo-400/50">
<div class="text-sm text-gray-200 leading-relaxed">The handoff payoff: a structured plan handed to the implementation agent felt different from winging a prompt &mdash; the output reflected it</div>
</div>
</div>
<div class="flex flex-col justify-center">
<div class="p-6 bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-transparent rounded-2xl border border-amber-500/30 shadow-lg">
<div class="text-xs text-amber-400/80 uppercase tracking-widest font-semibold mb-4">&#x1F4A1; One Big Question</div>
<div class="text-xl font-semibold text-white leading-relaxed">When you get back to your desk, what&rsquo;s the first thing you&rsquo;d use plan mode on &mdash; and what&rsquo;s your guess for how many files it will touch?</div>
</div>
</div>
</div>
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
