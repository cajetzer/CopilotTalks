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
Module 2: Agent Plan Mode
</h1>

<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
⏰ Research before code
</span>
</div>

<div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
"The problem is not writing the code. The problem is knowing what to change, in what order, and why."
</div>

<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-16 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-sm font-semibold tracking-wide shadow-lg">
📖 The Story
</span>
</div>

<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="text-xl">⏰</span>
<span class="text-orange-300 font-bold text-lg tracking-wide">Monday, 11:30 AM</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-4 flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-red-500 flex items-center justify-center text-base font-bold text-white shadow-lg shadow-purple-500/30 flex-shrink-0">M</div>
<div class="text-gray-300 text-sm">
<span class="text-white font-semibold">Marcus</span> opens the next feature request and realizes the foundation is no longer the problem.
</div>
</div>

<div class="relative z-10 mb-4 p-5 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 shadow-xl backdrop-blur-sm">
<div class="text-orange-300/60 text-4xl leading-none font-serif mb-1">"</div>
<p class="text-gray-200 text-sm leading-relaxed -mt-3">
The repo finally has context. Copilot understands the architecture, the team standards, and the shape of the project. But the next feature still spans <span class="text-orange-300 font-semibold">frontend, backend, database, tests, and review concerns.</span> We solved the context problem. Now we have to solve the planning problem.
</p>
<div class="text-orange-300/60 text-4xl leading-none font-serif text-right">"</div>
</div>

<div class="relative z-10 grid grid-cols-3 gap-4 mb-4 text-left">
<div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
<div class="text-orange-300 font-bold text-sm mb-2">Module 0</div>
<div class="text-white font-semibold text-base mb-1">Feel the mess</div>
<div class="text-xs text-gray-400">The team experienced weak context and inconsistent defaults firsthand.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/60 border border-blue-500/30">
<div class="text-blue-300 font-bold text-sm mb-2">Module 1</div>
<div class="text-white font-semibold text-base mb-1">Build the foundation</div>
<div class="text-xs text-gray-400">Architecture docs and instructions created a better baseline for Copilot behavior.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold text-sm mb-2">Module 2</div>
<div class="text-white font-semibold text-base mb-1">Plan the work</div>
<div class="text-xs text-gray-400">Now the question is what to change, in what order, and how to challenge the roadmap before coding.</div>
</div>
</div>

<div class="relative z-10 flex items-center gap-3 p-4 bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-xl border border-red-500/40 shadow-lg">
<span class="text-xl flex-shrink-0">⚡</span>
<p class="text-white font-bold text-base">
Plan mode turns <span class="text-orange-300">“Where do I start?”</span> into a reviewable roadmap before code starts landing.
</p>
</div>
</div>

---

# 🎯 What You'll Build

<div class="max-w-5xl mx-auto mt-8">

<div class="p-6 bg-gradient-to-r from-orange-600 to-red-700 rounded-xl shadow-lg shadow-orange-500/20 text-center mb-8">
<div class="text-3xl font-bold text-white mb-2">
From feature request to reviewed execution roadmap
</div>
<div class="text-orange-100 text-lg">
One feature, three exercises, one calmer path to implementation
</div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm text-left">
<div class="p-4 rounded-lg border-l-4 border-orange-500 bg-gray-800">
<div class="font-bold text-orange-300 mb-2">📄 Research-backed plan</div>
<div class="text-gray-300">A first-pass roadmap for the character detail feature, with likely files, dependencies, and open questions.</div>
</div>
<div class="p-4 rounded-lg border-l-4 border-blue-500 bg-gray-800">
<div class="font-bold text-blue-300 mb-2">🔍 Validation loop</div>
<div class="text-gray-300">Architectural review, test planning, and standards checks before implementation begins.</div>
</div>
<div class="p-4 rounded-lg border-l-4 border-purple-500 bg-gray-800">
<div class="font-bold text-purple-300 mb-2">🔄 Refined roadmap</div>
<div class="text-gray-300">A safer second pass that closes gaps, adds edge cases, and improves sequencing.</div>
</div>
<div class="p-4 rounded-lg border-l-4 border-green-500 bg-gray-800">
<div class="font-bold text-green-300 mb-2">🚀 Cleaner execution</div>
<div class="text-gray-300">Implementation with less guesswork, fewer avoidable conflicts, and a clearer end-to-end path.</div>
</div>
</div>

<div class="mt-6 p-3 bg-gradient-to-r from-orange-900/40 to-purple-900/40 rounded-lg border border-orange-500/30 text-center text-sm text-gray-300">
💡 <strong class="text-orange-300">The real output is not a plan document.</strong> The real output is better implementation judgment under pressure.
</div>
</div>

---

# 📚 What Plan Mode Actually Does

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

<div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30 shadow-lg shadow-orange-500/10">
<div class="text-orange-300 font-bold mb-3">Researches read-only first</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>• Reads the codebase, docs, and existing patterns</li>
<li>• Maps dependencies and likely file touch points</li>
<li>• Surfaces assumptions and open questions</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30 shadow-lg shadow-purple-500/10">
<div class="text-purple-300 font-bold mb-3">Produces a reviewable draft</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>• Summary of the approach</li>
<li>• Ordered implementation steps</li>
<li>• Dependencies and unresolved questions</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30 shadow-lg shadow-blue-500/10">
<div class="text-blue-300 font-bold mb-3">Builds on Module 1</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>• Uses your architecture context</li>
<li>• Follows your documented conventions</li>
<li>• Starts from a better baseline than generic code search</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-red-900/30 to-gray-900/40 border border-red-500/30 shadow-lg shadow-red-500/10">
<div class="text-red-300 font-bold mb-3">Still needs human judgment</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>• Edge cases</li>
<li>• Architecture tradeoffs</li>
<li>• Testing completeness and rollout decisions</li>
</ul>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-red-900/20 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold">Plan mode improves the first draft. It does not replace review.</div>
</div>

---

# 🔗 The Plan-First Workflow

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
<div class="text-xl font-bold text-white">The point is not to avoid thinking. The point is to move your thinking earlier.</div>
</div>

</div>

---
layout: two-cols
---

# ❌ Before

<div class="space-y-4 mt-6 text-left">

<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-2">Manual analysis eats time</div>
<div class="text-sm text-gray-300">Developers spend 30+ minutes tracing files, imports, and dependencies before making the first change.</div>
</div>

<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-2">Missing dependencies surface late</div>
<div class="text-sm text-gray-300">Architecture gaps often show up during implementation or PR review instead of during planning.</div>
</div>

<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-2">Tests and edge cases get bolted on</div>
<div class="text-sm text-gray-300">The happy path gets planned first, while quality and failure modes show up as cleanup work later.</div>
</div>

</div>

::right::

# ✨ After

<div class="space-y-4 mt-6 text-left">

<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-2">Research starts faster</div>
<div class="text-sm text-gray-300">A complex feature can move from manual exploration toward a draft plan in minutes instead of half an hour.</div>
</div>

<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-2">Review happens before implementation</div>
<div class="text-sm text-gray-300">Architectural issues, missing tests, and unclear requirements get challenged while the work is still cheap to change.</div>
</div>

<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-2">Execution gets calmer</div>
<div class="text-sm text-gray-300">The team codes against a validated roadmap instead of rediscovering the plan in the middle of implementation.</div>
</div>

</div>

---

# ✅ What Good Plan Output Looks Like

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
<div class="text-blue-300 font-bold mb-3">A strong draft includes</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>• A clear task summary</li>
<li>• Ordered implementation steps</li>
<li>• Specific file paths or system areas</li>
<li>• Dependencies and open questions</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-3">A strong review checks</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>• Error handling and edge cases</li>
<li>• Architectural fit and existing patterns</li>
<li>• Test coverage and affected test files</li>
<li>• Scope assumptions that need clarification</li>
</ul>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold">Good plan mode output is specific enough to challenge and simple enough to refine.</div>
</div>

---

# 📊 What to Validate in the Workshop

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
<div class="text-sm text-gray-300 mt-2">The strongest version of this module shows why planning changes the quality of execution, not just the speed of planning.</div>
</div>

---

# 🔨 Exercise Roadmap

<div class="mt-6 p-5 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-2">This module is one clean progression.</div>
<div class="text-sm text-gray-300">Plan one small enhancement. Plan the next one with the same workflow. Then merge both into a roadmap the team can actually ship.</div>
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
<td class="p-3 font-semibold text-blue-300">2.1</td>
<td class="p-3">Invoking Plan Mode</td>
<td class="p-3">Research-first roadmap</td>
<td class="p-3">Marcus ⭐</td>
<td class="p-3">8 min</td>
</tr>
<tr class="border-t border-white/5 bg-gray-900/40">
<td class="p-3 font-semibold text-purple-300">2.2</td>
<td class="p-3">Planning a Second Enhancement</td>
<td class="p-3">Repeat the workflow for status badges</td>
<td class="p-3">David ⭐</td>
<td class="p-3">8 min</td>
</tr>
<tr class="border-t border-white/5">
<td class="p-3 font-semibold text-orange-300">2.3</td>
<td class="p-3">Combining Plans into a Delivery Roadmap</td>
<td class="p-3">Merge two scoped plans into one sequence</td>
<td class="p-3">Marcus ⭐</td>
<td class="p-3">7 min</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
<div class="text-white font-semibold">The order is still the lesson.</div>
<div class="text-sm text-gray-300">This module works because the team learns to repeat planning on small enhancements, then sequence related work instead of improvising scope.</div>
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
3 exercises · ~25 minutes · shared leadership
</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 max-w-3xl w-full px-8">
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40 text-center text-sm">
<div class="text-blue-300 font-bold">2.1</div>
<div class="text-gray-400 text-xs mt-1">Plan the tagline</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40 text-center text-sm">
<div class="text-purple-300 font-bold">2.2</div>
<div class="text-gray-400 text-xs mt-1">Plan the badges</div>
</div>
<div class="p-3 bg-orange-900/30 rounded-lg border border-orange-500/40 text-center text-sm">
<div class="text-orange-300 font-bold">2.3</div>
<div class="text-gray-400 text-xs mt-1">Merge both plans</div>
</div>
</div>
<div class="relative z-10 mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">2.1</div>
<div>
<div class="text-blue-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Invoking Plan Mode</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 8 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-blue-400 text-sm text-gray-300">
Marcus is staring at a lightweight enhancement to the character detail page. <strong class="text-white">Before writing code, he needs a map for adding a character tagline or summary without guessing where the data and UI changes belong.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Open Copilot Chat in <strong>Plan</strong> mode instead of default execution mode</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Ask for a lightweight plan to add a character tagline or summary using existing FanHub patterns</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Review the generated summary, file paths, dependencies, and open questions, then save the tagline plan</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The plan includes summary, steps, dependencies, and open questions</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> File paths align with the actual FanHub structure</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The tagline enhancement feels small, clear, and faster to plan than manual exploration</div>
</div>
<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-xs text-gray-300 italic">💭 <strong class="text-blue-300">Marcus:</strong> "I don’t need a giant feature plan. I need a trustworthy map for one small enhancement."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">2.2</div>
<div>
<div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Planning a Second Enhancement</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">David ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 8 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-purple-400 text-sm text-gray-300">
The team has one clean plan already. <strong class="text-white">Now David wants to prove that the same workflow can plan a second small enhancement—status badges—without restarting discovery from scratch.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Stay in Plan mode and request a second scoped enhancement focused only on status badges</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Review whether the badge plan stays lightweight, covers edge cases, and matches existing FanHub UI patterns</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Refine if needed, then save the badge plan as a second artifact for later sequencing</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The badge plan stays scoped to one lightweight enhancement</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Data/API, frontend, and test steps are all visible in the plan</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The plan is saved as a second artifact for later sequencing</div>
</div>
<div class="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-xs text-gray-300 italic">💭 <strong class="text-purple-300">David:</strong> "Once we can plan one good enhancement, we should be able to plan the next one without losing discipline."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">2.3</div>
<div>
<div class="text-orange-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Combining Plans into a Delivery Roadmap</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 7 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
Marcus now has two solid plans. <strong class="text-white">Instead of treating them like separate mini-projects, the team needs one prioritized roadmap that removes duplicated work and clarifies sequencing.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Open the tagline and badge plans side by side and identify overlapping backend, frontend, and test work</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Ask the plan agent to merge both enhancements into one lightweight roadmap with clear priorities and dependencies</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Save the combined roadmap as the team’s practical execution sequence for both enhancements</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Both enhancement plans are represented in the final roadmap</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Shared steps are merged instead of repeated</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The combined roadmap is easier to execute than the two plans separately</div>
</div>
<div class="mt-4 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30 text-xs text-gray-300 italic">💭 <strong class="text-orange-300">Marcus:</strong> "This is the version I can actually hand to the team. Two good ideas, one clear sequence."</div>
</div>
</div>
</div>

---

# 🔗 Compounding Value

<div class="grid grid-cols-2 gap-6 mt-8 text-left">
<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
<div class="text-blue-300 font-bold mb-3">What Module 2 adds</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>• Research-first feature planning</li>
<li>• A repeatable review loop before coding</li>
<li>• Better sequencing across files and layers</li>
<li>• Clearer handoff from planning to implementation</li>
</ul>
</div>
<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-3">How later modules benefit</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>• <strong>Module 3:</strong> repeated planning requests become reusable prompt patterns</li>
<li>• <strong>Module 4:</strong> skills can encode repeatable review and execution workflows</li>
<li>• <strong>Module 5:</strong> agentic workflows benefit from clearer task decomposition</li>
<li>• <strong>Module 6:</strong> custom agents become more useful when the team already plans well</li>
</ul>
</div>
</div>

<div class="mt-8 text-center text-lg text-yellow-300">
Better planning compounds because every later customization has a cleaner workflow to build on.
</div>

---

# ✅ Module Checklist

<div class="mt-6 p-4 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-1">By the end of Module 2, the team should have a planning rhythm.</div>
<div class="text-sm text-gray-300">Not one plan. A repeatable way to plan small changes and merge them into one roadmap.</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">
<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">📝</div>
<div>
<div class="text-blue-300 font-bold">Plan the first change</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.1</div>
</div>
</div>
<ul class="space-y-2 text-gray-300">
<li>• Create one focused plan for a lightweight enhancement</li>
<li>• Capture files, order, dependencies, and open questions</li>
</ul>
</div>
<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🔁</div>
<div>
<div class="text-purple-300 font-bold">Repeat the workflow</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.2</div>
</div>
</div>
<ul class="space-y-2 text-gray-300">
<li>• Use the same plan-mode pattern for a second small enhancement</li>
<li>• Keep scope tight and save the second plan separately</li>
</ul>
</div>
<div class="p-4 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30 shadow-lg shadow-orange-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-lg">🗺️</div>
<div>
<div class="text-orange-300 font-bold">Merge into one roadmap</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 2.3</div>
</div>
</div>
<ul class="space-y-2 text-gray-300">
<li>• Compare both plans side by side and remove duplicated work</li>
<li>• Leave Module 2 with one practical roadmap the team can ship</li>
</ul>
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-4 rounded-xl bg-gray-900/60 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">What good looks like</div>
<div class="text-sm text-gray-300">Two small, believable plans and one combined roadmap that feels calmer, clearer, and easier to execute than improvising in chat.</div>
</div>
<div class="p-4 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">Why this matters</div>
<div class="text-sm text-gray-300">Later modules work better when the team already knows how to turn fuzzy requests into scoped, reusable planning patterns.</div>
</div>
</div>

---

# 📚 Keep the Foundation Evergreen

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
class: text-center
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
Module 2 Is Locked In
</h1>
<div class="relative z-10 mb-6">
<span class="px-5 py-2 bg-gradient-to-r from-purple-600/80 to-red-600/80 rounded-full text-white text-base font-medium shadow-lg shadow-purple-500/25">
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
