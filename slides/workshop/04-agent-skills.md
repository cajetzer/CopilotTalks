---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 4: Agent Skills
  Teach Copilot new capabilities, not just new rules
drawings:
  persist: false
transition: slide-left
title: Module 4 - Agent Skills
module: workshop/04-agent-skills
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
    Module 4: Agent Skills
  </h1>

  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
      ⏰ Teach capabilities, not just behavior
    </span>
  </div>

  <div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
    "Instructions tell Copilot how to behave. Skills teach it how to do work it could not do well before."
  </div>

  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
</div>

---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-16 py-8">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="text-orange-300 font-bold text-lg tracking-wide">⏰ : Monday, 1:30 PM</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>

<div class="relative z-10 mb-2 flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-base font-bold text-white shadow-lg shadow-blue-500/30 flex-shrink-0">D</div>
<div class="text-gray-300 text-sm">
<span class="text-white font-semibold">David</span> looks at the skills folder and thinks about what it means to package expertise the whole team can use.
</div>
</div>

<div class="relative z-10 mb-3 py-2 px-3 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 shadow-xl backdrop-blur-sm">
<p class="text-gray-200 text-xs leading-relaxed">
<span class="text-orange-300/60 font-serif text-base">"</span>
Good documentation and reusable prompts are a start. But some work requires the team to teach Copilot a complete <span class="text-orange-300 font-semibold">repeatable capability</span>, not just remind it of the rules.
<span class="text-orange-300/60 font-serif text-base">"</span>
</p>
</div>

<div class="relative z-10 grid grid-cols-4 gap-3 mb-3 text-left">
<div class="p-3 rounded-xl bg-gray-900/60 border border-blue-500/30">
<div class="text-blue-300 font-bold text-xs mb-1">Module 1</div>
<div class="text-white font-semibold text-sm mb-1">Document the standards</div>
<div class="text-xs text-gray-400 leading-tight">Architecture docs and instructions created a reliable baseline.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold text-xs mb-1">Module 2</div>
<div class="text-white font-semibold text-sm mb-1">Plan the work</div>
<div class="text-xs text-gray-400 leading-tight">Plan mode made complex work reviewable before code started landing.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-orange-500/30">
<div class="text-orange-300 font-bold text-xs mb-1">Module 3</div>
<div class="text-white font-semibold text-sm mb-1">Save the best prompts</div>
<div class="text-xs text-gray-400 leading-tight">Repeated prompts became reusable team entry points.</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-purple-500/30">
<div class="text-purple-300 font-bold text-xs mb-1">Module 4</div>
<div class="text-white font-semibold text-sm mb-1">Package the expertise</div>
<div class="text-xs text-gray-400 leading-tight">Now the goal is teaching Copilot specialized domain workflows.</div>
</div>
</div>

<div class="relative z-10 flex items-center gap-3 p-3 bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-xl border border-red-500/40 shadow-lg">
<span class="text-xl flex-shrink-0">⚡</span>
<p class="text-white font-bold text-sm">
Skills turn <span class="text-orange-300">repeated specialized work</span> into teachable capabilities the whole team can invoke.
</p>
</div>
</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 What You'll Build</span>
</div>

<div class="max-w-5xl mx-auto mt-6">

<div class="p-4 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 rounded-xl shadow-lg shadow-blue-500/20 text-center mb-6">
<div class="text-2xl font-bold text-white mb-1">
From repeated work to reusable capabilities
</div>
<div class="text-blue-100 text-base">
One starter template, two real skills, and much less blank-page setup
</div>
</div>

<div class="grid grid-cols-2 gap-3 text-sm text-left">
<div class="p-3 rounded-lg border-l-4 border-blue-500 bg-gray-800">
<div class="font-bold text-blue-300 mb-2"><code>make-skill-template</code></div>
<div class="text-xs text-gray-300 leading-snug">Bootstraps later skills from a proven scaffold so the team stops inventing folder structure and frontmatter from scratch.</div>
</div>
<div class="p-3 rounded-lg border-l-4 border-purple-500 bg-gray-800">
<div class="font-bold text-purple-300 mb-2"><code>character-change-test-workflow</code></div>
<div class="text-xs text-gray-300 leading-snug">Packages a reusable workflow for deciding what tests should change after any character-detail update.</div>
</div>
<div class="p-3 rounded-lg border-l-4 border-orange-500 bg-gray-800">
<div class="font-bold text-orange-300 mb-2"><code>character-detail-readiness-checker</code></div>
<div class="text-xs text-gray-300 leading-snug">Packages pre-PR review with checklist guidance, script support, and a clear readiness summary.</div>
</div>
<div class="p-3 rounded-lg border-l-4 border-green-500 bg-gray-800">
<div class="font-bold text-green-300 mb-2">A reusable team capability layer</div>
<div class="text-xs text-gray-300 leading-snug">The team’s character-detail workflow stops living only in memory and starts becoming a reusable capability creation pattern.</div>
</div>
</div>

<div class="mt-4 p-2.5 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg border border-blue-500/30 text-center text-sm text-gray-300">
💡 <strong class="text-blue-300">Your best workflow knowledge stops being tribal memory</strong> and starts with a reusable scaffold the team can adapt.
</div>
</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 What Agent Skills Actually Are</span>
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-left">

  <div class="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-2">A skill is a capability package</div>
    <div class="text-xs text-gray-300 space-y-1.5 leading-snug">
      <div>• <code>SKILL.md</code> explains the workflow.</div>
      <div>• Resources can include scripts, examples, schemas, and templates.</div>
      <div>• The goal is a complete task capability, not just a reminder.</div>
    </div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-2">Progressive loading keeps context efficient</div>
    <div class="text-xs text-gray-300 space-y-1.5 leading-snug">
      <div>• Discovery: metadata is known up front.</div>
      <div>• Instructions: the body loads when relevant.</div>
      <div>• Resources: scripts and examples load only when needed.</div>
    </div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-2">Project and personal scopes</div>
    <div class="text-xs text-gray-300 space-y-1.5 leading-snug">
      <div>• Project skills live in <code>.github/skills/</code>.</div>
      <div>• Personal skills can live in your home skill directory.</div>
      <div>• Shared workflow belongs with the repo.</div>
    </div>
  </div>

  <div class="p-4 rounded-xl bg-gradient-to-br from-orange-900/30 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-2">The differentiator</div>
    <div class="text-xs text-gray-300 leading-snug">Skills go beyond “say this” and into “use these resources, run this script, follow this workflow.”</div>
  </div>

</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔎 Skill Structure and Loading</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Typical structure</div>
    <div class="text-sm text-gray-300 space-y-2">
      <div><code>.github/skills/build-pipeline-analyzer/</code></div>
      <div class="pl-4">• <code>SKILL.md</code></div>
      <div class="pl-4">• <code>scripts/</code></div>
      <div class="pl-4">• <code>examples/</code></div>
      <div class="pl-4">• <code>templates/</code> or schemas</div>
    </div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Loading model</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>Copilot sees the skill name and description first</li>
      <li>The body loads when the task matches</li>
      <li>Referenced resources load only on demand</li>
      <li>More skills can exist without bloating every session</li>
    </ul>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl font-bold text-white">Progressive loading is what makes many skills practical instead of expensive.</div>
</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚡ Why Scripts Matter</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Without scripts</div>
    <div class="text-sm text-gray-300">A skill can explain a troubleshooting process, but it still depends on the user or agent to manually execute each diagnostic step.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">With scripts</div>
    <div class="text-sm text-gray-300">A skill can bundle an executable helper that parses logs, validates schemas, or generates artifacts in a repeatable way.</div>
  </div>

</div>

<div class="mt-8 grid grid-cols-3 gap-5 text-left">
  <div class="p-4 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-2">API skill</div>
    <div class="text-sm text-gray-300">Examples and schemas teach exact endpoint shape.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-2">Testing skill</div>
    <div class="text-sm text-gray-300">Templates and examples teach consistent reproduction tests.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-2">Build skill</div>
    <div class="text-sm text-gray-300">A diagnostic script can turn a long log into a fast root-cause hypothesis.</div>
  </div>
</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Skills vs Instructions vs Prompts</span>
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Instructions</div>
    <div class="text-sm text-gray-300 space-y-2">
      <div>• Best for behavior and standards</div>
      <div>• Often always-on or path-scoped</div>
      <div>• Tell Copilot how to work</div>
    </div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Prompts</div>
    <div class="text-sm text-gray-300 space-y-2">
      <div>• Best for repeated invocations</div>
      <div>• Save and reuse strong request wording</div>
      <div>• Turn common tasks into commands</div>
    </div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Skills</div>
    <div class="text-sm text-gray-300 space-y-2">
      <div>• Best for specialized capabilities</div>
      <div>• Combine instructions with resources and scripts</div>
      <div>• Teach complete workflows Copilot can apply</div>
    </div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-lg text-white font-semibold">Instructions guide behavior. Prompts package requests. Skills package capability.</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/15 via-transparent to-green-900/15"></div>
<div class="relative z-10 grid grid-cols-2 gap-8">
<div class="pr-4 border-r border-white/10">
<div class="mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-red-700/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">❌ Before</span>
</div>
<div class="space-y-4 text-left">
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Specialized work stays tribal</div>
  <div class="text-sm text-gray-300">Schema checks, test patterns, and debugging approaches live in senior engineers' heads or scattered files.</div>
</div>
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Repetition is still expensive</div>
  <div class="text-sm text-gray-300">The team repeatedly explains the same specialized workflow to Copilot or to each other.</div>
</div>
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Diagnostic tasks start from scratch</div>
  <div class="text-sm text-gray-300">Troubleshooting or generation work can be accurate, but it is not yet packaged for repeatable use.</div>
</div>
</div>
</div>
<div class="pl-4">
<div class="mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-700/80 to-green-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ After</span>
</div>
<div class="space-y-4 text-left">
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">Specialized expertise becomes accessible</div>
  <div class="text-sm text-gray-300">The team can encode schemas, templates, examples, and scripts in a reusable capability package.</div>
</div>
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">Workflow quality gets more consistent</div>
  <div class="text-sm text-gray-300">API generation, bug test writing, and build debugging start from better workflow defaults.</div>
</div>
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-300 mb-2">Resource-backed tasks get faster</div>
  <div class="text-sm text-gray-300">The combination of instructions plus executable or reference assets reduces repeated setup and guesswork.</div>
</div>
</div>
</div>
</div>
</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 What to Validate in the Workshop</span>
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-2">Capability fit</div>
    <div class="text-sm text-gray-300">Check whether the skill actually teaches the workflow, not just the language around it.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-2">Resource usefulness</div>
    <div class="text-sm text-gray-300">Validate that examples, templates, schemas, or scripts materially improve the output.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-2">Time and rework saved</div>
    <div class="text-sm text-gray-300">Compare specialized tasks with and without the skill package in place.</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl font-bold text-white">A real skill changes the quality of work, not just the wording of the prompt.</div>
</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercise Roadmap</span>
</div>

<div class="mt-6 p-5 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-2">This module turns the story arc into reusable capabilities.</div>
<div class="text-sm text-gray-300">First install a proven skill template. Then package the testing workflow. Finally, package the pre-PR readiness check.</div>
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
<td class="p-3 font-semibold text-blue-300">4.1</td>
<td class="p-3">Install <code>make-skill-template</code></td>
<td class="p-3">Bootstrap future skills from a proven scaffold</td>
<td class="p-3">Sarah ⭐</td>
<td class="p-3">10 min</td>
</tr>
<tr class="border-t border-white/5 bg-gray-900/40">
<td class="p-3 font-semibold text-purple-300">4.2</td>
<td class="p-3">Character Change Test Workflow</td>
<td class="p-3">Package repeatable test-impact review for any character-detail change</td>
<td class="p-3">Elena ⭐</td>
<td class="p-3">10 min</td>
</tr>
<tr class="border-t border-white/5">
<td class="p-3 font-semibold text-orange-300">4.3</td>
<td class="p-3">Character Detail Readiness Checker</td>
<td class="p-3">Package pre-PR review with checklist and script support</td>
<td class="p-3">Marcus ⭐</td>
<td class="p-3">10 min</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
<div class="text-white font-semibold">The progression is capability-first.</div>
<div class="text-sm text-gray-300">Start from a better skill scaffold, then teach Copilot the test-review workflow and the final readiness review.</div>
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
3 exercises · ~30 minutes · shared leadership
</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-4 max-w-4xl w-full px-8">
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40 text-center text-sm">
<div class="text-blue-300 font-bold">4.1</div>
<div class="text-gray-400 text-xs mt-1">Install the template</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40 text-center text-sm">
<div class="text-purple-300 font-bold">4.2</div>
<div class="text-gray-400 text-xs mt-1">Package the tests</div>
</div>
<div class="p-3 bg-orange-900/30 rounded-lg border border-orange-500/40 text-center text-sm">
<div class="text-orange-300 font-bold">4.3</div>
<div class="text-gray-400 text-xs mt-1">Package readiness</div>
</div>
</div>
<div class="relative z-10 mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">4.1</div>
<div>
<div class="text-blue-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
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
<div class="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 text-xs text-gray-300 italic">💭 <strong class="text-blue-300">Sarah:</strong> "Before we build specialized skills, let's stop reinventing the starter every time."</div>
</div>
</div>
</div>


---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: make-skill-template SKILL.md</span>
</div>

<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-purple-300">---</div>
<div class="text-blue-300">name<span class="text-white">:</span> <span class="text-green-300">your-skill-name</span></div>
<div class="text-blue-300">description<span class="text-white">:</span> <span class="text-green-300">One sentence: what this skill enables Copilot to do.</span></div>
<div class="text-blue-300">tags<span class="text-white">:</span> <span class="text-green-300">[your-domain, workflow-type]</span></div>
<div class="text-purple-300">---</div>
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

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">4.2</div>
<div>
<div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Character Change Test Workflow</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Elena ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-purple-400 text-sm text-gray-300">
After each character-detail change, the team still has to decide which tests should change and which edge cases matter. <strong class="text-white">This skill should package a reusable review workflow so Copilot can quickly point the team at the right test updates before a PR.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Use <span class="font-mono text-purple-300">make-skill-template</span> to create a reusable character-change test skill and tune it for discovery</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Add a review template, edge-case checklist, and example patterns for common character changes</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300"><code>/Character-Detail-Review "Jesse Pinkman"</code></span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The skill gives Copilot a repeatable workflow for deciding the right test updates and edge cases</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Character-detail keywords make the skill easier for Copilot to discover automatically</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Test updates are easier to prioritize and less likely to miss regressions</div>
</div>
<div class="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-xs text-gray-300 italic">💭 <strong class="text-purple-300">Elena:</strong> "I don’t need magic test generation. I need a reliable way to see what coverage should change before I open the PR."</div>
</div>
</div>
</div>


---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: character-change-test-workflow SKILL.md</span>
</div>

<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-purple-300">---</div>
<div class="text-blue-300">name: <span class="text-green-300">character-change-test-workflow</span></div>
<div class="text-blue-300">description: <span class="text-green-300">Review which tests should change after a character-detail update and identify edge cases before a PR.</span></div>
<div class="text-blue-300">tags: <span class="text-green-300">[character-detail, testing, test-impact, pre-pr]</span></div>
<div class="text-purple-300">---</div>
<div class="mt-2 text-gray-400"># Skill: character-change-test-workflow</div>
<div class="mt-2 text-gray-300">## Purpose</div>
<div class="text-gray-400">Teach Copilot a repeatable workflow for deciding which tests need updating after any character-detail change.</div>
<div class="mt-2 text-gray-300">## When to use this skill</div>
<div class="text-gray-400">- After modifying character-detail fields, display logic, or API contracts</div>
<div class="text-gray-400">- When deciding what regression coverage a change requires</div>
<div class="mt-2 text-gray-300">## Workflow</div>
<div class="text-gray-400">1. Review changed files for character-detail surface area</div>
<div class="text-gray-400">2. Identify existing tests that cover the changed logic</div>
<div class="text-gray-400">3. Flag edge cases using examples/edge-case-checklist.md</div>
<div class="text-gray-400">4. Summarize: what to update, what to add, what to verify manually</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">📁 .github/skills/character-change-test-workflow/SKILL.md · Invoked with: /Character-Detail-Review "Jesse Pinkman"</div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">4.3</div>
<div>
<div class="text-orange-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Character Detail Readiness Checker</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">Marcus ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
</div>
</div>
<div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
The code and tests may be done, but the team still does one last manual sweep before opening a PR: roadmap, docs, UI, API, and test coverage all need to line up. <strong class="text-white">This skill should package that readiness review with a checklist, a lightweight script, and a clear final summary.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Duplicate <span class="font-mono text-orange-300">make-skill-template</span> into <span class="font-mono text-orange-300">character-detail-readiness-checker</span> and adapt the scaffold</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300">Add a readiness checklist, a lightweight verification script, and an example report for character-detail work</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-orange-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Use the skill before a PR and confirm the handoff review becomes faster and more consistent</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The skill captures the team’s real definition of “ready” for character-detail work</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> The checklist and script help review changed files, docs, tests, and touched surfaces together</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Pre-PR review feels more like a repeatable capability and less like last-minute improvisation</div>
</div>
<div class="mt-4 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30 text-xs text-gray-300 italic">💭 <strong class="text-orange-300">Marcus:</strong> "If we already know what a ready character-detail change looks like, the skill should help us verify it before the PR instead of doing one more uneven sweep."</div>
</div>
</div>
</div>


---

<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>

<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: character-detail-readiness-checker SKILL.md</span>
</div>

<div class="relative z-10 text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto max-h-96 text-gray-300 leading-relaxed">
<div class="text-purple-300">---</div>
<div class="text-blue-300">name: <span class="text-green-300">character-detail-readiness-checker</span></div>
<div class="text-blue-300">description: <span class="text-green-300">Run a pre-PR readiness review for character-detail changes covering docs, tests, API, UI, and roadmap.</span></div>
<div class="text-blue-300">tags: <span class="text-green-300">[character-detail, pre-pr, readiness, checklist]</span></div>
<div class="text-purple-300">---</div>
<div class="mt-2 text-gray-400"># Skill: character-detail-readiness-checker</div>
<div class="mt-2 text-gray-300">## Purpose</div>
<div class="text-gray-400">Package the team's real definition of "ready" for character-detail work into a repeatable pre-PR review.</div>
<div class="mt-2 text-gray-300">## When to use this skill</div>
<div class="text-gray-400">- Before opening a PR for any character-detail feature</div>
<div class="text-gray-400">- When doing a final sweep of docs, tests, UI, API, and roadmap alignment</div>
<div class="mt-2 text-gray-300">## Workflow</div>
<div class="text-gray-400">1. Run scripts/check-readiness.sh to surface changed files and test coverage</div>
<div class="text-gray-400">2. Work through templates/readiness-checklist.md for each touched surface</div>
<div class="text-gray-400">3. Produce a readiness summary: green items, open gaps, suggested next steps</div>
<div class="text-gray-400">4. Flag any blockers before the PR is opened</div>
</div>

<div class="relative z-10 mt-3 text-xs text-gray-400">📁 .github/skills/character-detail-readiness-checker/SKILL.md · Run before every character-detail PR</div>
</div>
---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 Compounding Value</span>
</div>

<div class="mt-5 p-3 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-1">Module 4 turns repeated character-detail work into teachable capabilities.</div>
<div class="text-sm text-gray-300">The team stops relying on memory alone and starts packaging its workflow knowledge for reuse.</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-left">
<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">📈</div>
<div>
<div class="text-blue-300 font-bold">What Module 4 adds</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Immediate value</div>
</div>
</div>
<div class="space-y-2 text-xs text-gray-300 leading-snug">
<div class="p-2.5 bg-gray-900/40 rounded-lg">Start skills from a reusable scaffold instead of blank-page setup.</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg">Combine instructions with templates, examples, checklists, and scripts.</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg">Reduce setup time, manual test planning, and pre-PR scanning.</div>
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
<div class="p-2.5 bg-gray-900/40 rounded-lg"><strong>Module 5:</strong> MCP servers can extend these workflows with live external context.</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg"><strong>Module 6:</strong> custom agents become more trustworthy when the domain workflow is already packaged well.</div>
<div class="p-2.5 bg-gray-900/40 rounded-lg"><strong>The whole workshop:</strong> the same story arc now moves from plan → prompt → skill.</div>
</div>
</div>
</div>

<div class="mt-5 p-3 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-center">
<div class="text-base text-yellow-300 font-semibold">Skills compound because later integrations and agents can inherit a better workflow foundation.</div>
<div class="text-sm text-gray-300 mt-1">Module 4 is where repeated character-detail work stops being remembered and starts being taught.</div>
</div>

---

<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Module Checklist</span>
</div>

<div class="mt-6 p-4 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-2xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-1">By the end of Module 4, the team should have reusable skill habits.</div>
<div class="text-sm text-gray-300">Not just folders with names. Skills that actually teach character-detail workflows with the right resources attached.</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">
<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">🧩</div>
<div>
<div class="text-blue-300 font-bold">Install the template</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 4.1</div>
</div>
</div>
<div class="space-y-2 text-gray-300">
<div>• Bring <code>make-skill-template</code> into the repo</div>
<div>• Start future skills from a proven scaffold</div>
</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🧪</div>
<div>
<div class="text-purple-300 font-bold">Package the tests</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 4.2</div>
</div>
</div>
<div class="space-y-2 text-gray-300">
<div>• Turn repeated edge cases into reusable testing guidance</div>
<div>• Attach templates, examples, and fallback checks</div>
</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30 shadow-lg shadow-orange-900/20">
<div class="flex items-center gap-3 mb-3">
<div class="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-lg">✅</div>
<div>
<div class="text-orange-300 font-bold">Package readiness</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">Exercise 4.3</div>
</div>
</div>
<div class="space-y-2 text-gray-300">
<div>• Turn final handoff checks into a repeatable skill</div>
<div>• Attach a checklist, script, and clear readiness summary</div>
</div>
</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4">
<div class="p-4 rounded-xl bg-gray-900/60 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">What good looks like</div>
<div class="text-sm text-gray-300">One reusable starter plus two focused skills the team would actually reuse for the same character-detail storyline: tests and readiness.</div>
</div>
<div class="p-4 rounded-xl bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 border border-white/10 text-left">
<div class="text-sm font-bold text-white mb-2">Why this matters</div>
<div class="text-sm text-gray-300">Later modules work better when the team already knows how to package domain knowledge into invokable, trustworthy workflow assets.</div>
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
Module 4 Is Locked In
</h1>
<div class="relative z-10 mb-6">
<span class="px-5 py-2 bg-gradient-to-r from-purple-600/80 to-red-600/80 rounded-full text-white text-base font-medium shadow-lg shadow-purple-500/25">
🔌 Next Up: Module 5 — MCP Servers
</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 max-w-3xl w-full px-6 mb-6">
<div class="p-3 bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30 text-center">
<div class="text-xl mb-1">🧩</div>
<div class="text-orange-300 font-bold text-sm">You Installed the Scaffold</div>
<div class="text-gray-400 text-xs mt-1">Skill creation now starts from a proven template instead of a blank folder</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30 text-center">
<div class="text-xl mb-1">🧪</div>
<div class="text-red-300 font-bold text-sm">You Packaged the Quality Bar</div>
<div class="text-gray-400 text-xs mt-1">Tests and readiness checks now follow the same repeatable character-detail workflow</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xl mb-1">🔌</div>
<div class="text-purple-300 font-bold text-sm">Now Connect Live Systems</div>
<div class="text-gray-400 text-xs mt-1">Module 5 moves from packaged local workflows into runtime integrations and external context</div>
</div>
</div>
<div class="relative z-10 text-base text-gray-200 max-w-3xl px-10 mb-6 leading-snug">
Skills taught Copilot your local workflow. <span class="text-white font-semibold">MCP servers will let it bring live systems and external tools into that same workflow.</span>
</div>
<div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-8 py-6">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-orange-900/20"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/12 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/12 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 text-center mb-6">
<div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Module 4 impact</div>
<h1 class="!text-3xl !font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent !mb-2">
Skills turn repeated work into teachable capability
</h1>
<div class="text-sm text-gray-300 max-w-4xl mx-auto">
The team starts packaging domain know-how instead of re-explaining it every time.
</div>
</div>

<div class="relative z-10 grid grid-cols-5 gap-3">
<div class="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30">
<div class="text-blue-300 font-bold text-sm mb-2">Sarah</div>
<div class="text-sm text-white leading-snug mb-3">"Use a skill to make skills. Neat."</div>
<div class="text-xs text-gray-400">A good scaffold makes skill creation easy.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/30">
<div class="text-orange-300 font-bold text-sm mb-2">Marcus</div>
<div class="text-sm text-white leading-snug mb-3">“The character-detail skill validates implementation before the PR.”</div>
<div class="text-xs text-gray-400">Readiness becomes a repeatable check, not a subjective pass.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-gray-900/50 border border-emerald-500/30">
<div class="text-emerald-300 font-bold text-sm mb-2">David</div>
<div class="text-sm text-white leading-snug mb-3">“Skills scale expertise — not by replacing judgment, but by packaging it.”</div>
<div class="text-xs text-gray-400">Specialized knowledge becomes easier for the team to reuse.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30">
<div class="text-purple-300 font-bold text-sm mb-2">Elena</div>
<div class="text-sm text-white leading-snug mb-3">“Skills provide a reliable way to see what coverage should change before I open the PR.”</div>
<div class="text-xs text-gray-400">The skill makes quality review sharper and more consistent.</div>
</div>

<div class="p-4 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-gray-900/50 border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-sm mb-2">Rafael</div>
<div class="text-sm text-white leading-snug mb-3">“Once the skill is packaged, it’s easy to prove what ‘good’ looks like across roles.”</div>
<div class="text-xs text-gray-400">Skills help translate standards into execution.</div>
</div>
</div>

<div class="relative z-10 mt-6 p-3 rounded-xl bg-gradient-to-r from-purple-900/25 via-blue-900/20 to-orange-900/20 border border-white/10 text-center">
<div class="text-white font-semibold">This is what the module changes in day-to-day work.</div>
<div class="text-xs text-gray-300 mt-1">The payoff shows up in how the team thinks, coordinates, and ships.</div>
</div>
</div>
