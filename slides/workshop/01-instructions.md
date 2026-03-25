---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 1: Instructions
  Layered guidance that makes Copilot more relevant, consistent, and actionable
drawings:
  persist: false
transition: slide-left
title: Module 1 - Instructions
module: workshop/01-instructions
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
Module 1: Instructions
</h1>

<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
⏰ Put the right guidance in the right place
</span>
</div>

<div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
"Copilot is inconsistent when the project context is inconsistent. This module fixes that."
</div>

<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-10 py-3">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
📖 The Opportunity
</span>
</div>

<div class="relative z-10 mb-3 p-3 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 shadow-xl backdrop-blur-sm text-left">
<div class="text-orange-300/60 text-2xl leading-none font-serif mb-1">"</div>
<p class="text-gray-200 text-[15px] leading-snug -mt-1">
Module 1 is where the team stops hoping Copilot will infer the right behavior and starts giving it a reliable operating model.
</p>
<div class="text-orange-300/60 text-2xl leading-none font-serif text-right">"</div>
</div>

<div class="relative z-10 grid grid-cols-3 gap-3 text-left">
<div class="p-3 rounded-xl bg-gray-900/60 border border-orange-500/30 shadow-lg">
<div class="text-xl mb-1">👨‍💼</div>
<div class="text-[15px] font-bold text-orange-300 mb-1">David sees missing structure</div>
<div class="text-[15px] text-gray-300 leading-snug">
Every structural question forces Copilot to rediscover the codebase because there is no concise architecture guide.
</div>
</div>

<div class="p-3 rounded-xl bg-gray-900/60 border border-purple-500/30 shadow-lg">
<div class="text-xl mb-1">👩‍💻</div>
<div class="text-[15px] font-bold text-purple-300 mb-1">Sarah sees repeated review comments</div>
<div class="text-[15px] text-gray-300 leading-snug">
The same standards get re-explained in every PR because the repository has no reliable default guidance.
</div>
</div>

<div class="p-3 rounded-xl bg-gray-900/60 border border-blue-500/30 shadow-lg">
<div class="text-xl mb-1">👩‍🔬</div>
<div class="text-[15px] font-bold text-blue-300 mb-1">Elena needs context-specific rules</div>
<div class="text-[15px] text-gray-300 leading-snug">
Frontend, backend, tests, docs, and Python utilities should not all receive the same instructions.
</div>
</div>
</div>

<div class="relative z-10 mt-3 p-2 bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-xl border border-red-500/30 text-center">
<div class="text-white font-bold text-[15px] mb-1">Implicit team knowledge becomes explicit working context.</div>
<div class="text-[13px] text-gray-300 leading-snug">The goal is not more documentation. The goal is better defaults, better prompts, and fewer avoidable corrections.</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-10 py-4">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-purple-900/20"></div>
<div class="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
🎯 What You'll Build
</span>
</div>

<div class="relative z-10 mb-4 p-3 bg-gradient-to-r from-orange-600/30 to-purple-600/30 rounded-xl border border-orange-500/30 text-center">
<div class="text-lg text-white">Start broad. Then get specific. Then validate that the behavior actually improved.</div>
</div>

<div class="relative z-10 grid grid-cols-2 gap-4 text-left">
<div class="p-4 rounded-xl bg-gradient-to-br from-orange-900/40 to-orange-800/20 border border-orange-500/30 shadow-lg">
<div class="text-xl mb-2">🚀</div>
<div class="text-base font-bold text-orange-300 mb-1">A fast baseline with <code>/init</code></div>
<div class="text-sm text-gray-300 leading-snug">Start with AI-assisted discovery instead of writing every instruction from scratch.</div>
</div>

<div class="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/30 shadow-lg">
<div class="text-xl mb-2">🏗️</div>
<div class="text-base font-bold text-blue-300 mb-1"><code>ARCHITECTURE.md</code></div>
<div class="text-sm text-gray-300 leading-snug">Document the system shape so structural questions get faster, clearer answers.</div>
</div>

<div class="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 shadow-lg">
<div class="text-xl mb-2">🪄</div>
<div class="text-base font-bold text-purple-300 mb-1"><code>.github/copilot-instructions.md</code></div>
<div class="text-sm text-gray-300 leading-snug">Create the repository-wide baseline that nudges every Copilot interaction toward team standards.</div>
</div>

<div class="p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30 shadow-lg">
<div class="text-xl mb-2">📂</div>
<div class="text-base font-bold text-purple-300 mb-1"><code>.github/instructions/*.instructions.md</code></div>
<div class="text-sm text-gray-300 leading-snug">Add precision so tests, frontend, backend, docs, and languages get the right guidance at the right time.</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-4">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-purple-900/20"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
📚 The Layered Model
</span>
</div>

<div class="relative z-10 flex flex-col gap-3 text-left">
<div class="p-3 rounded-xl bg-gray-900/60 border border-orange-500/30">
<div class="text-sm text-orange-300 font-semibold mb-1">Optional enterprise baseline</div>
<div class="text-base text-white font-bold">Organization instructions</div>
<div class="text-sm text-gray-300 leading-snug">Useful when many repositories should inherit the same guardrails.</div>
</div>

<div class="p-4 rounded-xl bg-gradient-to-r from-orange-900/40 to-gray-900/40 border border-orange-500/30">
<div class="text-sm text-orange-300 font-semibold mb-1">Quick start</div>
<div class="text-base text-white font-bold"><code>/init</code> bootstraps a first draft</div>
<div class="text-sm text-gray-300 leading-snug">Let the tool discover patterns first, then refine what it generates.</div>
</div>

<div class="grid grid-cols-3 gap-3">
<div class="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
<div class="text-sm text-blue-300 font-semibold mb-1">Context</div>
<div class="text-base text-white font-bold"><code>ARCHITECTURE.md</code></div>
<div class="text-sm text-gray-300 leading-snug">What the system is and where things live.</div>
</div>

<div class="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
<div class="text-sm text-purple-300 font-semibold mb-1">Baseline rules</div>
<div class="text-base text-white font-bold"><code>copilot-instructions.md</code></div>
<div class="text-sm text-gray-300 leading-snug">How this repository expects code and content to look.</div>
</div>

<div class="p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30">
<div class="text-sm text-purple-300 font-semibold mb-1">Precision</div>
<div class="text-base text-white font-bold">Path-based instruction files</div>
<div class="text-sm text-gray-300 leading-snug">Extra rules only when a file pattern actually matches.</div>
</div>
</div>

<div class="pt-1 text-center text-sm text-gray-400">
This module stops at repository and file-pattern guidance. We keep custom agents for a later module.
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-4">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-purple-900/20"></div>
<div class="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/15 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
🔄 How It Works
</span>
</div>

<div class="relative z-10 flex flex-col gap-4 text-left">
<div>
<div class="text-xl font-bold text-white mb-2">The Full Orchestration Sequence</div>
<div class="text-sm text-gray-300 leading-relaxed">
When Copilot evaluates your code, it loads all four sources in parallel, applies a priority hierarchy to resolve conflicts, and generates guidance that's uniquely tailored to your project.
</div>
</div>

<div class="p-3 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-semibold text-sm mb-2">📊 The sequence diagram in detail</div>
<div class="text-gray-300 text-sm leading-snug mb-2">
We'll walk through the complete orchestration flow showing how all context sources are queried, merged, and prioritized. See the full diagram in the module documentation:
</div>
<a href="https://github.com/MSBart2/CopilotTraining/blob/main/workshop/01-instructions/README.md#how-custom-agents-orchestrate-these-layers" target="_blank" class="text-blue-400 hover:text-blue-300 text-sm underline">View the orchestration sequence diagram →</a>
</div>

<div class="grid grid-cols-2 gap-3 text-left text-xs">
<div class="p-2.5 rounded-lg bg-orange-900/40 border border-orange-500/30">
<div class="font-bold text-orange-300 mb-1">What gets loaded</div>
<div class="text-gray-300">Project context, standards, patterns, and guidance</div>
</div>

<div class="p-2.5 rounded-lg bg-purple-900/40 border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1">The priority order</div>
<div class="text-gray-300">Most specific source wins on conflicts</div>
</div>

<div class="p-2.5 rounded-lg bg-blue-900/40 border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1">The outcome</div>
<div class="text-gray-300">Consistent, team-aligned code suggestions</div>
</div>

<div class="p-2.5 rounded-lg bg-cyan-900/40 border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1">The benefit</div>
<div class="text-gray-300">Fewer review comments, faster merges</div>
</div>
</div>
</div>
</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔎 Which File Does What?</span>
</div>

<div class="mt-2 mb-2 p-2 rounded-xl bg-gradient-to-r from-orange-900/30 via-red-900/20 to-purple-900/30 border border-orange-500/20 text-center">
<div class="text-sm text-white font-semibold">Use the lightest layer that solves the problem.</div>
</div>

<div class="flex flex-col gap-2 mt-2 text-left">
<div class="p-2.5 rounded-xl bg-gradient-to-r from-orange-900/35 to-gray-900/50 border border-orange-500/30">
<div class="flex items-baseline gap-2">
<div class="text-lg">🚀</div>
<div class="text-base font-bold text-orange-300 shrink-0"><code>/init</code></div>
<div class="text-[13px] text-gray-300 leading-snug"><span class="text-orange-200 font-semibold">When:</span> repo start. <span class="text-blue-200 font-semibold">Best:</span> baseline draft. <span class="text-red-200 font-semibold">Avoid:</span> treating it as final.</div>
</div>
</div>

<div class="p-2.5 rounded-xl bg-gradient-to-r from-purple-900/35 to-gray-900/50 border border-purple-500/30">
<div class="flex items-baseline gap-2">
<div class="text-lg">🪄</div>
<div class="text-sm font-bold text-purple-300 shrink-0"><code>copilot-instructions.md</code></div>
<div class="text-[13px] text-gray-300 leading-snug"><span class="text-orange-200 font-semibold">When:</span> every interaction. <span class="text-blue-200 font-semibold">Best:</span> conventions, testing, defaults. <span class="text-red-200 font-semibold">Avoid:</span> file-specific rules.</div>
</div>
</div>

<div class="p-2.5 rounded-xl bg-gradient-to-r from-purple-900/35 to-blue-900/30 border border-purple-500/30">
<div class="flex items-baseline gap-2">
<div class="text-lg">📂</div>
<div class="text-sm font-bold text-purple-300 shrink-0"><code>*.instructions.md</code></div>
<div class="text-[13px] text-gray-300 leading-snug"><span class="text-orange-200 font-semibold">When:</span> certain files differ. <span class="text-blue-200 font-semibold">Best:</span> language or area-specific rules. <span class="text-red-200 font-semibold">Avoid:</span> generic repo rules.</div>
</div>
</div>

<div class="p-2.5 rounded-xl bg-gradient-to-r from-blue-900/35 to-gray-900/50 border border-blue-500/30">
<div class="flex items-baseline gap-2">
<div class="text-lg">🏗️</div>
<div class="text-sm font-bold text-blue-300 shrink-0"><code>ARCHITECTURE.md</code></div>
<div class="text-[13px] text-gray-300 leading-snug"><span class="text-orange-200 font-semibold">When:</span> structural questions. <span class="text-blue-200 font-semibold">Best:</span> stack, structure, flows, patterns. <span class="text-red-200 font-semibold">Avoid:</span> low-level detail.</div>
</div>
</div>

<div class="p-2.5 rounded-xl bg-gradient-to-r from-gray-900/65 to-gray-800/50 border border-white/10">
<div class="flex items-baseline gap-2">
<div class="text-lg">🏢</div>
<div class="text-sm font-bold text-white shrink-0">Organization instructions</div>
<div class="text-[13px] text-gray-300 leading-snug"><span class="text-orange-200 font-semibold">When:</span> many repos share a baseline. <span class="text-blue-200 font-semibold">Best:</span> security, compliance, guardrails. <span class="text-red-200 font-semibold">Avoid:</span> repo-specific quirks.</div>
</div>
</div>
</div>

<div class="mt-2 p-2.5 rounded-xl bg-gray-900/60 border border-white/10 text-center">
<div class="text-white font-semibold mb-1">Simple rule</div>
<div class="text-sm text-gray-300">Start broad. Specialize only when certain files or many repos need something different.</div>
</div>

---

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 How the Layers Work Together</span>
</div>

<div class="flex flex-col items-center gap-2 mt-3 text-center">

<div class="w-full max-w-4xl p-3 rounded-xl bg-gradient-to-r from-orange-900/40 to-gray-900/40 border border-orange-500/30">
<div class="text-orange-300 font-semibold mb-1">Step 1</div>
<div class="text-white font-bold text-sm"><code>/init</code> discovers existing patterns</div>
</div>

<div class="text-sm text-gray-500 uppercase tracking-wide">then establish the shared baseline</div>

<div class="grid grid-cols-2 gap-3 w-full max-w-4xl">
<div class="p-3 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30 text-left">
<div class="text-blue-300 font-semibold mb-1">Step 2A</div>
<div class="text-white font-bold text-sm"><code>ARCHITECTURE.md</code></div>
<div class="text-sm text-gray-300 mt-1 leading-snug">Explains system shape, boundaries, and flows.</div>
</div>

<div class="p-3 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30 text-left">
<div class="text-purple-300 font-semibold mb-1">Step 2B</div>
<div class="text-white font-bold text-sm"><code>copilot-instructions.md</code></div>
<div class="text-sm text-gray-300 mt-1 leading-snug">Defines the repo's default rules.</div>
</div>
</div>

<div class="w-full max-w-4xl p-3 rounded-xl bg-gradient-to-r from-purple-900/30 via-blue-900/20 to-orange-900/20 border border-purple-500/30 text-left">
<div class="text-purple-300 font-semibold mb-1">Step 3</div>
<div class="text-white font-bold text-sm">Add path-based instruction files only where the work changes</div>
<div class="text-sm text-gray-300 mt-1 leading-snug">Frontend gets frontend guidance. Tests get testing guidance. Generic repo rules do not repeat.</div>
<div class="mt-2 pt-2 border-t border-white/10 text-sm text-white font-semibold">Result: more relevant suggestions, faster setup, fewer avoidable corrections</div>
</div>

</div>

---
layout: two-cols
---

<div class="relative z-10 mb-3 mr-4">
<span class="px-4 py-1 bg-gradient-to-r from-red-700/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">❌ Before</span>
</div>

<div class="space-y-4 mt-6 text-left mr-4">

<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-2">Manual instruction writing</div>
<div class="text-sm text-gray-300">Teams spend 60-90 minutes drafting a baseline and still miss conventions hidden across the repo.</div>
</div>

<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-2">Structural questions are slow</div>
<div class="text-sm text-gray-300">Simple prompts force Copilot to inspect the codebase again because nothing explains the system shape clearly.</div>
</div>

<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
<div class="font-bold text-red-300 mb-2">Generic guidance leaks everywhere</div>
<div class="text-sm text-gray-300">Frontend, backend, tests, docs, and Python utilities all inherit the same vague rules.</div>
</div>

</div>

::right::

<div class="relative z-10 mb-3 ml-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-700/80 to-green-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ After</span>
</div>

<div class="space-y-4 mt-6 text-left ml-4">

<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-2"><code>/init</code> gives you a head start</div>
<div class="text-sm text-gray-300">You start with a generated draft, then spend your time refining what matters.</div>
</div>

<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-2">Architecture docs speed up context</div>
<div class="text-sm text-gray-300">Structural questions can move from repo rediscovery toward document-guided answers.</div>
</div>

<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
<div class="font-bold text-green-300 mb-2">Path-based rules reduce context pollution</div>
<div class="text-sm text-gray-300">The right files receive the right guidance instead of one overloaded rule set trying to do everything.</div>
</div>

</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercise Roadmap</span>
</div>

<div class="mt-2 mb-2 p-2 rounded-xl bg-gradient-to-r from-orange-900/30 via-blue-900/20 to-purple-900/30 border border-white/10 text-center">
<div class="text-sm text-white font-semibold">One continuous flow: bootstrap, document the baseline, then add precision where it matters.</div>
</div>

<div class="mt-2 text-left">
<table class="w-full text-sm border-separate border-spacing-y-1">
<thead>
<tr class="bg-gray-900/80">
<th class="p-3 rounded-l-lg text-orange-300 text-left">#</th>
<th class="p-3 text-left text-white">Exercise</th>
<th class="p-3 text-left text-white">Focus</th>
<th class="p-3 text-left text-white">Lead</th>
<th class="p-3 rounded-r-lg text-left text-white">Time</th>
</tr>
</thead>
<tbody class="text-gray-300">
<tr class="bg-gray-900/50">
<td class="p-3 rounded-l-lg font-semibold text-orange-300">1.0</td>
<td class="p-3">Bootstrap with <code>/init</code></td>
<td class="p-3">Starting point</td>
<td class="p-2">David ⭐</td>
<td class="p-3 rounded-r-lg">8 min</td>
</tr>
<tr class="bg-gray-900/50">
<td class="p-3 rounded-l-lg font-semibold text-blue-300">1.1</td>
<td class="p-3">Create <code>ARCHITECTURE.md</code></td>
<td class="p-3">System context</td>
<td class="p-2">David ⭐</td>
<td class="p-3 rounded-r-lg">10 min</td>
</tr>
<tr class="bg-gray-900/50">
<td class="p-3 rounded-l-lg font-semibold text-blue-300">1.2</td>
<td class="p-3">Create <code>copilot-instructions.md</code></td>
<td class="p-3">Repo defaults</td>
<td class="p-2">Sarah ⭐</td>
<td class="p-3 rounded-r-lg">10 min</td>
</tr>
<tr class="bg-gray-900/50">
<td class="p-3 rounded-l-lg font-semibold text-purple-300">1.3</td>
<td class="p-3">Path-specific instructions</td>
<td class="p-3">Context precision</td>
<td class="p-2">Sarah ⭐</td>
<td class="p-3 rounded-r-lg">10 min</td>
</tr>
<tr class="bg-gray-900/50">
<td class="p-3 rounded-l-lg font-semibold text-purple-300">1.4</td>
<td class="p-3">Language-specific standards</td>
<td class="p-3">Language rules</td>
<td class="p-2">Elena ⭐</td>
<td class="p-3 rounded-r-lg">8 min</td>
</tr>
<tr class="bg-gray-900/50">
<td class="p-3 rounded-l-lg font-semibold text-purple-300">1.5</td>
<td class="p-3">File-type specialized guidance</td>
<td class="p-3">Final polish</td>
<td class="p-2">Marcus ⭐</td>
<td class="p-3 rounded-r-lg">12 min</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-2 p-3 bg-gray-900/60 rounded-xl border border-white/10 text-center">
<div class="text-white font-semibold">The sequence matters.</div>
<div class="text-sm text-gray-300">First establish a baseline. Then document structure. Then add precision where the defaults are too broad.</div>
</div>

---

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What Good Looks Like</span>
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
<div class="text-blue-300 font-bold mb-3">Architecture guidance</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>Tech stack and major folders</li>
<li>Data and request flow</li>
<li>Key boundaries and ownership</li>
<li>No giant file inventory</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-3">Repo-wide instructions</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>Stable conventions and defaults</li>
<li>Error handling expectations</li>
<li>Testing and review preferences</li>
<li>No file-specific branching logic</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-3">Path-based instructions</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>Frontend vs backend guidance</li>
<li>Python vs TypeScript standards</li>
<li>Tests, docs, Docker specialization</li>
<li>Small, targeted, and matchable</li>
</ul>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold">The deck should teach an operating model, not just list files.</div>
</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 What to Validate in the Workshop</span>
</div>

<div class="grid grid-cols-3 gap-5 mt-4 text-left">

<div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
<div class="text-orange-300 font-bold mb-2">Faster setup</div>
<div class="text-sm text-gray-300">Compare drafting from scratch versus starting with <code>/init</code> and refining the result.</div>
</div>

<div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
<div class="text-blue-300 font-bold mb-2">Clearer structural answers</div>
<div class="text-sm text-gray-300">Ask a structural question before and after <code>ARCHITECTURE.md</code> exists, then compare specificity.</div>
</div>

<div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-2">Fewer style corrections</div>
<div class="text-sm text-gray-300">Check whether generated code and tests align more closely with team expectations after the repo and path-based rules are in place.</div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
<div class="text-xl font-bold text-white">Measure outcomes you can observe.</div>
<div class="text-sm text-gray-300 mt-2">This module is stronger when participants can see improved relevance, not just hear abstract promises.</div>
</div>

---

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
6 exercises · ~58 minutes · shared leadership
</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 max-w-4xl w-full px-8">
<div class="p-3 bg-orange-900/30 rounded-lg border border-orange-500/40 text-center text-sm">
<div class="text-orange-300 font-bold">1.0</div>
<div class="text-gray-400 text-xs mt-1">/init baseline</div>
</div>
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40 text-center text-sm">
<div class="text-blue-300 font-bold">1.1</div>
<div class="text-gray-400 text-xs mt-1">Architecture context</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40 text-center text-sm">
<div class="text-purple-300 font-bold">1.2</div>
<div class="text-gray-400 text-xs mt-1">Repo defaults</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40 text-center text-sm">
<div class="text-purple-300 font-bold">1.3</div>
<div class="text-gray-400 text-xs mt-1">Layer precision</div>
</div>
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40 text-center text-sm">
<div class="text-blue-300 font-bold">1.4</div>
<div class="text-gray-400 text-xs mt-1">Language rules</div>
</div>
<div class="p-3 bg-orange-900/30 rounded-lg border border-orange-500/40 text-center text-sm">
<div class="text-orange-300 font-bold">1.5</div>
<div class="text-gray-400 text-xs mt-1">File-type guidance</div>
</div>
</div>
<div class="relative z-10 mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">1.0</div>
<div>
<div class="text-orange-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Bootstrap with <code>/init</code></h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">David ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 8 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
David wants a fast starting point, not a blank page. <strong class="text-white">Let Copilot discover the repo first, then refine what it generates.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Run <span class="font-mono text-orange-300">/init</span> in Copilot Chat</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Review the generated baseline for patterns, gaps, and mismatches</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Write down 2-3 refinements the AI could not infer on its own</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> A baseline file was generated</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Core stack patterns were discovered correctly</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The team can explain what still needs human refinement</div>
</div>
<div class="mt-4 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30 text-xs text-gray-300 italic">💭 <strong class="text-orange-300">David:</strong> "A good draft beats a blank page every time."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">1.1</div>
<div>
<div class="text-blue-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Create <code>ARCHITECTURE.md</code></h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">David ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-blue-400 text-sm text-gray-300">
Copilot keeps rediscovering the same structure because nothing explains the system clearly. <strong class="text-white">Capture the shape of the project once so structural questions get faster and sharper.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Document the tech stack, major folders, flows, and key boundaries</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Keep it concise - system shape, not every implementation detail</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Ask a structural question before and after the file exists, then compare the answer</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> <code>ARCHITECTURE.md</code> is concise and accurate</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> It includes stack, folders, flow, and patterns</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Structural answers become easier to trust</div>
</div>
<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-xs text-gray-300 italic">💭 <strong class="text-blue-300">David:</strong> "This reads like onboarding notes for a strong engineer, not like a file dump."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
📐 Example: ARCHITECTURE.md
</span>
</div>

<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-blue-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-blue-300 mb-2"># FanHub Architecture</div>

<div class="text-blue-300 mb-2">## Tech Stack</div>
<div class="text-gray-400">- <span class="text-blue-100">Frontend:</span> React 18, Tailwind CSS</div>
<div class="text-gray-400">- <span class="text-blue-100">Backend:</span> Express.js, Node.js</div>
<div class="text-gray-400">- <span class="text-blue-100">Database:</span> SQLite3</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">Deployment:</span> Docker containers</div>

<div class="text-blue-300 mb-2">## Folder Structure</div>
<div class="text-gray-400">```</div>
<div class="text-gray-400"><span class="text-cyan-300">fanhub/</span></div>
<div class="text-gray-400">├── <span class="text-cyan-300">frontend/</span> → React components, pages, hooks</div>
<div class="text-gray-400">├── <span class="text-cyan-300">backend/</span>  → Express routes, middleware, database</div>
<div class="text-gray-400">├── <span class="text-cyan-300">docs/</span>     → ARCHITECTURE.md, guides</div>
<div class="text-gray-400">└── <span class="text-cyan-300">infra/</span>    → Docker, compose files</div>
<div class="text-gray-400">```</div>
<div class="text-gray-400 mb-3"></div>

<div class="text-blue-300 mb-2">## Key Flows</div>
<div class="text-gray-400">- <span class="text-blue-100">User requests</span> → Frontend → API calls → Backend routes → Database queries</div>
<div class="text-gray-400 mb-3">- <span class="text-blue-100">Error handling:</span> Backend returns error codes → Frontend displays messages</div>

<div class="text-blue-300 mb-2">## Key Boundaries</div>
<div class="text-gray-400">- Backend owns all data access (no frontend queries to DB)</div>
<div class="text-gray-400">- Frontend owns all UI state (no business logic)</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Length:</strong> ~15 lines  <strong class="text-gray-300">Purpose:</strong> Fast structural context
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">1.2</div>
<div>
<div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Adjust <code>copilot-instructions.md</code></h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-purple-400 text-sm text-gray-300">
The same defaults keep getting re-explained in code review. <strong class="text-white">Turn repeated feedback into repository-wide guidance that Copilot sees every time.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">List the conventions that cause the most review comments</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Turn them into direct, actionable repo-wide instructions</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Test prompts and check whether the output follows the defaults</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The file stays focused and specific</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Core conventions are visible and easy to follow</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Generated code needs fewer style corrections</div>
</div>
<div class="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-xs text-gray-300 italic">💭 <strong class="text-purple-300">Sarah:</strong> "If we say it in every PR, it belongs in the baseline file."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
🪄 Example: copilot-instructions.md
</span>
</div>

<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-purple-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-purple-300 mb-2"># FanHub Coding Standards</div>

<div class="text-purple-300 mb-2">## Async Patterns</div>
<div class="text-gray-400 mb-3">Always use async/await. Never mix promises and await. Wrap async calls in try/catch for error handling.</div>

<div class="text-purple-300 mb-2">## React Components</div>
<div class="text-gray-400 mb-3">Use functional components only. Use React hooks for state (useState, useEffect). Avoid class components and legacy patterns.</div>

<div class="text-purple-300 mb-2">## Error Handling</div>
<div class="text-gray-400 mb-3">Always catch errors. Log them with context. Return meaningful error messages to the client, not stack traces.</div>

<div class="text-purple-300 mb-2">## Testing</div>
<div class="text-gray-400 mb-3">Test the happy path and error cases. Mock external API calls. Use Jest and React Testing Library.</div>

<div class="text-purple-300 mb-2">## Imports</div>
<div class="text-gray-400">Use named imports for utilities. Use default imports only for React and third-party libraries.</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Length:</strong> ~20 lines  <strong class="text-gray-300">Scope:</strong> All files, all interactions
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/25 via-orange-900/15 to-transparent"></div>
<div class="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/15 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 mb-6">
<span class="px-4 py-1 bg-gradient-to-r from-red-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
⚠️ Critical Scope Boundary
</span>
</div>

<div class="relative z-10">
<div class="text-xl font-bold text-white mb-6">copilot-instructions.md is for <span class="text-red-300">Conventions & Constraints</span>, NOT Details</div>

<div class="grid grid-cols-2 gap-4 mb-6">
<div class="p-4 rounded-xl bg-green-900/30 border border-green-600/40">
<div class="text-green-300 font-bold text-sm mb-3">✅ Put Here</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>• How we write code (async/await, not promises)</li>
<li>• What we avoid (no class components)</li>
<li>• Team standards (Jest for testing, Tailwind for CSS)</li>
<li>• Error handling expectations (always catch errors)</li>
</ul>
</div>

<div class="p-4 rounded-xl bg-red-900/30 border border-red-600/40">
<div class="text-red-300 font-bold text-sm mb-3">❌ Put Elsewhere</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>• Architecture diagrams (belongs in ARCHITECTURE.md)</li>
<li>• API documentation (use docs/ or separate files)</li>
<li>• Detailed how-to guides (path-based files)</li>
<li>• Full system context (too much for a baseline)</li>
</ul>
</div>
</div>

<div class="p-4 rounded-xl bg-orange-900/40 border-l-4 border-orange-400">
<div class="text-orange-300 font-bold mb-2">💡 The Rule of Thumb</div>
<div class="text-gray-300 text-sm">If it's something Copilot needs to remember <strong>on every single prompt</strong>, it belongs in copilot-instructions.md. If it's something developers need to read once, it belongs elsewhere.</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">1.3</div>
<div>
<div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Path-Specific Instructions</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Sarah ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-purple-400 text-sm text-gray-300">
Frontend and backend keep borrowing the wrong patterns from each other. <strong class="text-white">Use path-specific instruction files so each area gets the guidance it actually needs.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create <span class="font-mono text-purple-300">.github/instructions/</span></span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Add focused frontend and backend instruction files</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Verify each file activates only where it should</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Matching files receive the right layer guidance</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Cross-layer suggestion noise decreases</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Repo-wide defaults are not duplicated everywhere</div>
</div>
<div class="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-xs text-gray-300 italic">💭 <strong class="text-purple-300">Sarah:</strong> "Precision beats volume. The right rule in the right place wins."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
📂 Example: frontend.instructions.md
</span>
</div>

<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-purple-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-purple-300 mb-2">---</div>
<div class="text-purple-300 mb-2">applyTo: "frontend/**"</div>
<div class="text-purple-300 mb-2">---</div>

<div class="text-purple-300 mb-2"># Frontend Patterns</div>

<div class="text-purple-300 mb-2">## Components</div>
<div class="text-gray-400 mb-3">Small, focused components. Extract logic into hooks. Use props for input, context for shared state.</div>

<div class="text-purple-300 mb-2">## Performance</div>
<div class="text-gray-400 mb-3">Memoize expensive components. Avoid inline functions. Use useCallback for stable references.</div>

<div class="text-purple-300 mb-2">## Styling</div>
<div class="text-gray-400">Tailwind classes only. No inline styles. Mobile-first responsive design.</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Applies to:</strong> Only <code>frontend/**</code>  <strong class="text-gray-300">Purpose:</strong> React-specific guidance
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">1.4</div>
<div>
<div class="text-blue-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Language-Specific Standards</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Elena ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 8 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-blue-400 text-sm text-gray-300">
Python, JavaScript, and TypeScript each have different expectations. <strong class="text-white">Use file-extension patterns so each language gets guidance that feels native.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Create separate files for Python, JavaScript, and TypeScript</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Encode the language rules that matter most for your team</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Confirm each pattern activates on the right extensions</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Language-specific files are targeted correctly</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Cross-language contamination drops</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Suggestions look native to the language in front of you</div>
</div>
<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-xs text-gray-300 italic">💭 <strong class="text-blue-300">Elena:</strong> "Good guidance should make the language feel obvious, not negotiated."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
🐍 Example: python.instructions.md
</span>
</div>

<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-blue-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-blue-300 mb-2">---</div>
<div class="text-blue-300 mb-2">applyTo: "**/*.py"</div>
<div class="text-blue-300 mb-2">---</div>

<div class="text-blue-300 mb-2"># Python Standards (PEP 8)</div>

<div class="text-blue-300 mb-2">## Type Hints</div>
<div class="text-gray-400 mb-3">Always include type hints on function parameters and returns. Use typing module for complex types.</div>

<div class="text-blue-300 mb-2">## Naming</div>
<div class="text-gray-400 mb-3">snake_case for functions, CapitalCase for classes. Private methods start with _.</div>

<div class="text-blue-300 mb-2">## Docstrings</div>
<div class="text-gray-400">Use triple-quoted docstrings. Document parameters, return values, and side effects.</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Applies to:</strong> Only <code>**/*.py</code>  <strong class="text-gray-300">Purpose:</strong> Python-native conventions
</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-purple-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">1.5</div>
<div>
<div class="text-orange-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">File-Type Specialized Guidance</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 12 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
Tests, Docker files, and docs serve different purposes than production app code. <strong class="text-white">Create file-type rules that optimize for clarity, safety, and audience.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Add targeted files for tests, Docker, and documentation</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Use precise <span class="font-mono text-orange-300">applyTo</span> patterns for each purpose</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Check that production-code advice no longer leaks into those files</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Test files optimize for clarity and edge cases</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Docker files emphasize secure practices</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Docs receive guidance suited to audience and purpose</div>
</div>
<div class="mt-4 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30 text-xs text-gray-300 italic">💭 <strong class="text-orange-300">Marcus:</strong> "The best instruction file shows up exactly when it should - and stays silent everywhere else."</div>
</div>
</div>
</div>

---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">
🧪 Example: tests.instructions.md
</span>
</div>

<div class="relative z-10 text-sm font-mono bg-gray-900/80 rounded-lg border border-orange-500/30 p-4 overflow-auto max-h-96 text-gray-300">
<div class="text-orange-300 mb-2">---</div>
<div class="text-orange-300 mb-2">applyTo: "**/__tests__/**,**/*.test.{ts,tsx,js}"</div>
<div class="text-orange-300 mb-2">---</div>

<div class="text-orange-300 mb-2"># Test Suite Patterns</div>

<div class="text-orange-300 mb-2">## Test Structure</div>
<div class="text-gray-400 mb-3">Write for clarity first. Test both happy path and error cases. Use descriptive test names that read like documentation.</div>

<div class="text-orange-300 mb-2">## Mocking</div>
<div class="text-gray-400 mb-3">Mock external API calls. Mock database queries. Avoid testing integration dependencies within unit tests.</div>

<div class="text-orange-300 mb-2">## Assertions</div>
<div class="text-gray-400">Test behavior, not implementation. Use meaningful assertions. Avoid testing unrelated concerns.</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">
<strong class="text-gray-300">Applies to:</strong> Test files only  <strong class="text-gray-300">Purpose:</strong> Test-specific patterns distinct from production
</div>
</div>

---

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Compounding Value</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">
<div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
<div class="text-blue-300 font-bold mb-3">What this module leaves behind</div>
<ul class="text-sm text-gray-300 space-y-2">
<li>A generated starting point from <code>/init</code></li>
<li>A concise <code>ARCHITECTURE.md</code></li>
<li>A repository baseline in <code>copilot-instructions.md</code></li>
<li>Path-based files for targeted guidance</li>
</ul>
</div>
<div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-3">How later modules benefit</div>
<ul class="text-sm text-gray-300 space-y-2">
<li><strong>Module 2:</strong> planning starts from better project context</li>
<li><strong>Module 3:</strong> prompts can reference shared standards</li>
<li><strong>Module 4:</strong> skills reinforce repeated patterns</li>
<li><strong>Module 5:</strong> specialized workflows inherit clearer defaults</li>
<li><strong>Module 6:</strong> custom agents benefit from the established baseline</li>
</ul>
</div>
</div>
<div class="mt-8 text-center text-lg text-yellow-300">
Every minute invested here pays off in later modules because the context keeps getting reused.
</div>

---

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Module Checklist</span>
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">
<div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
<div class="text-orange-300 font-bold mb-3">Quick Start</div>
<ul class="space-y-2 text-gray-300">
<li>Run <code>/init</code></li>
<li>Review what it generated</li>
<li>Note what needs refinement</li>
</ul>
</div>
<div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
<div class="text-blue-300 font-bold mb-3">Foundation</div>
<ul class="space-y-2 text-gray-300">
<li>Create <code>docs/ARCHITECTURE.md</code></li>
<li>Create <code>.github/copilot-instructions.md</code></li>
<li>Confirm both describe reality clearly</li>
</ul>
</div>
<div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold mb-3">Precision</div>
<ul class="space-y-2 text-gray-300">
<li>Add matching instruction files</li>
<li>Verify file patterns behave as intended</li>
<li>Avoid duplicating baseline repo rules</li>
</ul>
</div>
</div>
<div class="mt-8 p-4 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold">The finish line is not “we wrote docs.”</div>
<div class="text-sm text-gray-300">The finish line is “Copilot behavior is now easier to steer and easier to trust.”</div>
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
Module 1 Is Locked In
</h1>
<div class="relative z-10 mb-6">
<span class="px-5 py-2 bg-gradient-to-r from-purple-600/80 to-red-600/80 rounded-full text-white text-base font-medium shadow-lg shadow-purple-500/25">
🧠 Next Up: Module 2 — Agent Plan Mode
</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 max-w-3xl w-full px-6 mb-6">
<div class="p-3 bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30 text-center">
<div class="text-xl mb-1">🏗️</div>
<div class="text-orange-300 font-bold text-sm">You Built the Baseline</div>
<div class="text-gray-400 text-xs mt-1"><code>/init</code>, architecture context, and repo defaults are in place</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30 text-center">
<div class="text-xl mb-1">🎯</div>
<div class="text-red-300 font-bold text-sm">You Added Precision</div>
<div class="text-gray-400 text-xs mt-1">Path-, language-, and file-specific guidance shapes behavior where it matters</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xl mb-1">🗺️</div>
<div class="text-purple-300 font-bold text-sm">Now Plan Before Coding</div>
<div class="text-gray-400 text-xs mt-1">Module 2 teaches Copilot to think through the work before it starts typing</div>
</div>
</div>
<div class="relative z-10 text-base text-gray-200 max-w-3xl px-10 mb-6 leading-snug">
Better instructions create better starting conditions. <span class="text-white font-semibold">Module 2 turns that strong context into better decisions.</span>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-8 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-orange-900/20"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/12 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/12 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 text-center mb-6">
<div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Module 1 impact</div>
<h1 class="!text-3xl !font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent !mb-2">
The baseline changes how the whole team works
</h1>
<div class="text-sm text-gray-300 max-w-4xl mx-auto">
Clearer defaults, sharper guidance, and fewer avoidable corrections before work even starts.
</div>
</div>

<div class="relative z-10 grid grid-cols-5 gap-3">
<div class="p-4 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30">
<div class="text-orange-300 font-bold text-sm mb-2">Sarah</div>
<div class="text-sm text-white leading-snug mb-3">“If we say it in every PR, it belongs in the baseline file.”</div>
<div class="text-xs text-gray-400">Standards move from repetition into system behavior.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30">
<div class="text-emerald-300 font-bold text-sm mb-2">Marcus</div>
<div class="text-sm text-white leading-snug mb-3">“The best instruction file shows up exactly when it should — and stays silent everywhere else.”</div>
<div class="text-xs text-gray-400">Good guidance reduces friction without becoming noise.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30">
<div class="text-blue-300 font-bold text-sm mb-2">David</div>
<div class="text-sm text-white leading-snug mb-3">“This reads like onboarding notes for a strong engineer, not like a file dump.”</div>
<div class="text-xs text-gray-400">Strong context respects expertise instead of overwhelming it.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
<div class="text-purple-300 font-bold text-sm mb-2">Elena</div>
<div class="text-sm text-white leading-snug mb-3">“Good guidance makes the language feel obvious, not negotiated.”</div>
<div class="text-xs text-gray-400">Quality gets easier when conventions are already encoded.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-gray-900/50 border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-sm mb-2">Rafael</div>
<div class="text-sm text-white leading-snug mb-3">“This is the kind of baseline that helps start from shared understanding instead of translation work.”</div>
<div class="text-xs text-gray-400">Teams move faster when intent is clear at the start.</div>
</div>
</div>

<div class="relative z-10 mt-6 p-3 rounded-xl bg-gradient-to-r from-purple-900/25 via-blue-900/20 to-orange-900/20 border border-white/10 text-center">
<div class="text-white font-semibold">This is what the module changes in day-to-day work.</div>
<div class="text-xs text-gray-300 mt-1">The payoff shows up in how the team thinks, coordinates, and ships.</div>
</div>
</div>
