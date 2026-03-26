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
updated: 2026-03-26
---

<!-- SLIDE: Module 4: Agent Skills -->
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
⏰ Build capabilities, not just context
</span>
</div>
<div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
"Instructions tell Copilot how to behave — but they don't teach it how to do things it doesn't know how to do."
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
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
    <div class="font-bold text-gray-400 text-xs">M3</div>
    <div class="text-gray-500 mt-0.5 whitespace-nowrap">Prompts</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gradient-to-b from-orange-600/80 to-orange-800/60 rounded-lg border border-orange-400/50 text-center shadow-lg shadow-orange-900/30">
    <div class="font-bold text-white text-xs">M4</div>
    <div class="text-orange-200 mt-0.5 whitespace-nowrap">Skills</div>
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
<!-- SLIDE: ⏰ The Story — Monday 1:30 PM -->
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
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center opacity-60">
    <div class="font-bold text-gray-400 text-xs">M3</div>
    <div class="text-gray-500 mt-0.5">Prompts</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gradient-to-b from-orange-600/80 to-orange-800/60 rounded-lg border border-orange-400/50 text-center shadow-lg shadow-orange-900/30">
    <div class="font-bold text-white text-xs">M4</div>
    <div class="text-orange-200 mt-0.5">Skills</div>
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

<!-- SLIDE: 🎯 What You'll Build -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
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

<!-- SLIDE: 📚 What Agent Skills Actually Are -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
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

<!-- SLIDE: 🔎 Skill Structure and Loading -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
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

<!-- SLIDE: ⚡ Why Scripts Matter -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
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

<!-- SLIDE: 🔄 Skills vs Instructions vs Prompts -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
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

<!-- SLIDE: 💭 The Team, After Module 4 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💭 The Team, After Module 4</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-amber-400">
<div class="text-xs font-bold text-amber-300 mb-0.5">Jessica</div>
<div class="text-xs text-gray-500 italic mb-2">The Eager Junior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I packaged the test runner as a skill. Elena showed me how. Twenty minutes. Now anyone on the team can run it."</div>
<div class="text-xs text-gray-500">Packaged something real, not just copied a tutorial.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-blue-400">
<div class="text-xs font-bold text-blue-300 mb-0.5">David</div>
<div class="text-xs text-gray-500 italic mb-2">The Thoughtful Architect</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"The skill pattern is a formalized capability contract. It gives Copilot something to reason against instead of improvising."</div>
<div class="text-xs text-gray-500">Formalizes the contract so Copilot doesn&#39;t have to guess.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-green-400">
<div class="text-xs font-bold text-green-300 mb-0.5">Sarah</div>
<div class="text-xs text-gray-500 italic mb-2">The Skeptical Senior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Our test coverage check runs in Agent mode now. I used to explain that workflow to every new hire. It&#39;s in a file now."</div>
<div class="text-xs text-gray-500">Onboarding just got one step shorter.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-purple-400">
<div class="text-xs font-bold text-purple-300 mb-0.5">Elena</div>
<div class="text-xs text-gray-500 italic mb-2">The Pragmatic Engineer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"The skill has the schema, the examples, and the edge cases. Everything a junior needs to not break the build."</div>
<div class="text-xs text-gray-500">Every edge case she knows, now encoded for the team.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-orange-400">
<div class="text-xs font-bold text-orange-300 mb-0.5">Marcus</div>
<div class="text-xs text-gray-500 italic mb-2">The Curious Tinkerer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I packaged the debugging workflow I always do in my head. Now I can just invoke it. Past me would be furious."</div>
<div class="text-xs text-gray-500">Externalizing his own brain, one skill at a time.</div>
</div><div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-cyan-400">
<div class="text-xs font-bold text-cyan-300 mb-0.5">Rafael</div>
<div class="text-xs text-gray-500 italic mb-2">The Pragmatic Lead</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Skills turn individual expertise into team capability. That&#39;s institutional knowledge that actually scales."</div>
<div class="text-xs text-gray-500">Expertise that scales without requiring its source.</div>
</div>
</div>
</div>

---

<!-- SLIDE: 📊 What to Validate -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
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

<!-- SLIDE: 🔨 Exercise Roadmap -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercise Roadmap</span>
</div>

<div class="mt-6 p-5 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-blue-900/15 rounded-xl border border-white/10 text-center">
<div class="text-lg text-white font-semibold mb-2">This module turns the story arc into reusable capabilities.</div>
<div class="text-sm text-gray-300">Install a proven skill template. Package the test-review workflow. Package the pre-PR readiness check. Then encode your own domain knowledge as lore resources Copilot can cite.</div>
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
<tr class="border-t border-white/5 bg-gray-900/40">
<td class="p-3 font-semibold text-green-300">4.4</td>
<td class="p-3">Show-Lore Skill</td>
<td class="p-3">Encode your domain knowledge as structured resources Copilot can cite</td>
<td class="p-3">David ⭐</td>
<td class="p-3">15 min</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
<div class="text-white font-semibold">The progression is capability-first — then knowledge-first.</div>
<div class="text-sm text-gray-300">Start from a better scaffold. Package the test-review and readiness workflows. Then go deeper: put your own domain knowledge in the system so Copilot generates correctly the first time.</div>
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
<div class="text-lg font-bold text-white">4 exercises · ~45 minutes · shared leadership</div>
</div>
<div class="relative z-10 grid grid-cols-4 gap-3">
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-blue-300 font-bold text-base">4.1</div>
<span class="text-xs text-gray-500">Sarah ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Install the template</div>
<div class="text-gray-400 text-xs leading-snug">Install make-skill-template from awesome-copilot and study how it works</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-purple-300 font-bold text-base">4.2</div>
<span class="text-xs text-gray-500">Elena ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Package the tests</div>
<div class="text-gray-400 text-xs leading-snug">Package the character-change test runner as a reusable agent skill</div>
</div>
<div class="p-3 bg-orange-900/30 rounded-lg border border-orange-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-orange-300 font-bold text-base">4.3</div>
<span class="text-xs text-gray-500">Marcus ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Package readiness</div>
<div class="text-gray-400 text-xs leading-snug">Build a deployment readiness checker skill for character-detail endpoints</div>
</div>
<div class="p-3 bg-teal-900/30 rounded-lg border border-teal-500/40">
<div class="flex items-center justify-between mb-1">
<div class="text-teal-300 font-bold text-base">4.4</div>
<span class="text-xs text-gray-500">David ⭐</span>
</div>
<div class="text-white text-xs font-semibold mb-1">Build a lore skill</div>
<div class="text-gray-400 text-xs leading-snug">Create a show-lore skill that gives Copilot structured universe access</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-900/40 rounded-lg border border-white/10 text-center text-xs text-gray-400">
Each exercise rotates the lead persona — everyone contributes, everyone follows.
</div>
</div>

---

<!-- SLIDE: 🔧 Exercise 1 — Install make-skill-template -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
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

<!-- SLIDE: 📋 make-skill-template SKILL.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
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

<!-- SLIDE: 🧪 Exercise 2 — Character Change Test Workflow -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
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

<!-- SLIDE: 📋 character-change-test-workflow SKILL.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
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

<!-- SLIDE: ✅ Exercise 3 — Character Detail Readiness Checker -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
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

<!-- SLIDE: 📋 character-detail-readiness-checker SKILL.md -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
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

<!-- SLIDE: 🌐 Exercise 4 — Show-Lore Skill -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 flex items-center gap-4 mb-5">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-500/30 flex-shrink-0">4.4</div>
<div>
<div class="text-green-300 text-xs font-semibold tracking-widest uppercase">Exercise — Capstone</div>
<h2 class="!text-2xl !font-bold text-white !m-0">Show-Lore Skill</h2>
</div>
<div class="ml-auto flex gap-3 text-xs text-gray-400">
<span class="px-3 py-1 bg-gray-800 rounded-full">David ⭐</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">Rafael 🤝</span>
<span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
</div>
</div>
<div class="relative z-10 mb-4 p-4 bg-gray-900/60 rounded-xl border-l-4 border-green-400 text-sm text-gray-300">
David asks Copilot for a Gustavo Fring bio — and gets something plausible, confident, and mostly wrong. <strong class="text-white">This is the first exercise where YOU are the source of truth. Build a lore skill that gives Copilot access to your domain knowledge, not its training data.</strong>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span><span class="text-gray-300">Scaffold <span class="font-mono text-green-300">.github/skills/[show]-lore/</span> with <span class="font-mono text-green-300">SKILL.md</span> and a <span class="font-mono text-green-300">resources/</span> folder</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span><span class="text-gray-300"><strong class="text-white">Write <span class="font-mono text-green-300">characters.md</span> yourself</strong> — Copilot cannot fill this in correctly. At least 5 characters with role, arc, and key facts</span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span><span class="text-gray-300">Add <span class="font-mono text-green-300">canon-facts.md</span> (≥5 truths + ≥3 misconceptions), <span class="font-mono text-green-300">quotes.md</span>, and <span class="font-mono text-green-300">seasons.md</span></span></div>
<div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg"><span class="w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span><span class="text-gray-300">Ask Copilot to write a key character bio using the skill — verify it cites the resource and gets the facts right, then cross-test with the accuracy-check prompt from 3.3</span></div>
</div>
</div>
<div class="space-y-3">
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> <span class="font-mono text-green-300">characters.md</span> has ≥5 entries written by the participant, not generated</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> <span class="font-mono text-green-300">canon-facts.md</span> captures ≥5 truths and ≥3 common misconceptions</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Copilot cites the resource files when answering lore questions</div>
<div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Accuracy-check prompt from 3.3 passes cleanly on Copilot-generated content</div>
</div>
<div class="mt-3 p-3 bg-green-900/30 rounded-lg border border-green-500/30 text-xs text-gray-300 italic">💭 <strong class="text-green-300">David:</strong> "The accuracy-check prompt taught Copilot to catch what I know is wrong. This teaches it what's actually right — before it has a chance to get it wrong."</div>
</div>
</div>
</div>
---
<!-- SLIDE: 📋 Show-Lore Skill — characters.md format -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-transparent"></div>
<div class="relative z-10 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Example: [show]-lore/resources/characters.md</span>
</div>
<div class="relative z-10 grid grid-cols-2 gap-5">
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Write each entry yourself</div>
<div class="text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 overflow-auto text-gray-300 leading-relaxed">
<div class="text-yellow-300">## Gustavo Fring</div>
<div class="text-gray-400">- <span class="text-blue-300">**Role:**</span> Fast food entrepreneur</div>
<div class="text-gray-400">&nbsp;&nbsp;and meth distributor; major antagonist</div>
<div class="text-gray-400">- <span class="text-blue-300">**Appears:**</span> <span class="text-green-300">Seasons 2–4</span></div>
<div class="text-gray-400">- <span class="text-blue-300">**Arc:**</span> Chilean-born; Pollos Hermanos</div>
<div class="text-gray-400">&nbsp;&nbsp;operation predates meeting Walter;</div>
<div class="text-gray-400">&nbsp;&nbsp;killed by Hector's bell bomb S4 finale</div>
<div class="text-gray-400">- <span class="text-blue-300">**Key fact:**</span> Infrastructure was in place</div>
<div class="text-gray-400">&nbsp;&nbsp;<span class="text-red-300">before</span> Walt — not built with him</div>
<div class="mt-2 text-gray-400">- <span class="text-blue-300">**Relationships:**</span> Mike (enforcer),</div>
<div class="text-gray-400">&nbsp;&nbsp;Walt (cook/rival), Hector (nemesis)</div>
</div>
<div class="mt-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30 text-xs text-gray-300">
⚠️ <strong class="text-yellow-300">This step is intentionally manual.</strong> Copilot cannot fill in character arcs correctly — that's the whole point. Your knowledge is the input.
</div>
</div>
<div>
<div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Test prompt</div>
<div class="text-xs font-mono bg-gray-900/80 rounded-lg border border-white/10 p-4 text-gray-300 leading-relaxed">
<div class="text-gray-400">Use the breaking-bad-lore skill to</div>
<div class="text-gray-400">write a 3-sentence bio for Gustavo</div>
<div class="text-gray-400">Fring for the FanHub character</div>
<div class="text-gray-400">detail page.</div>
</div>
<div class="mt-3 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">What to verify</div>
<div class="space-y-2 text-xs">
<div class="flex items-start gap-2 p-2 bg-gray-900/40 rounded-lg"><span class="text-green-400">✓</span><span class="text-gray-300">Cites <span class="font-mono text-green-300">characters.md</span> or <span class="font-mono text-green-300">canon-facts.md</span></span></div>
<div class="flex items-start gap-2 p-2 bg-gray-900/40 rounded-lg"><span class="text-green-400">✓</span><span class="text-gray-300">Places Gus's operation <em>before</em> his meeting with Walt</span></div>
<div class="flex items-start gap-2 p-2 bg-gray-900/40 rounded-lg"><span class="text-green-400">✓</span><span class="text-gray-300">Mentions his Chilean origin</span></div>
<div class="flex items-start gap-2 p-2 bg-gray-900/40 rounded-lg"><span class="text-green-400">✓</span><span class="text-gray-300">Accuracy-check from 3.3 passes cleanly — no factual flags</span></div>
</div>
<div class="mt-3 p-3 bg-green-900/30 rounded-lg border border-green-500/30 text-xs text-gray-300">
🔗 <strong class="text-green-300">Defense-in-depth:</strong> Lore skill prevents errors at generation. Accuracy-check prompt catches anything that slips through.
</div>
</div>
</div>
<div class="relative z-10 mt-3 text-xs text-gray-400">📁 .github/skills/[show]-lore/resources/characters.md · Human knowledge as primary input — the first exercise where you are the source of truth</div>
</div>
---<!-- SLIDE: 🔗 Compounding Value -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
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

<!-- SLIDE: ✅ Module Checklist -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
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

---

<!-- SLIDE: 📚 Keep the Foundation Evergreen -->
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 Keep the Foundation Evergreen</span><div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div><div class="mt-4 p-5 bg-gradient-to-r from-blue-900/25 via-purple-900/25 to-orange-900/20 rounded-2xl border border-white/10 text-center">
<div class="text-lg font-bold text-white">Before Module 5, document the skills you just built.</div>
<div class="text-sm text-gray-300 mt-2">Update <span class="font-mono text-blue-200">ARCHITECTURE.md</span> and <span class="font-mono text-purple-200">.github/copilot-instructions.md</span> so MCP servers and agents can build on these skills intelligently.</div>
</div><div class="grid grid-cols-2 gap-5 mt-4 text-left">
<div class="p-5 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/30 shadow-lg shadow-blue-900/20">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg">🏗️</div>
<div>
<div class="text-blue-300 font-bold">Document the skills directory</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">ARCHITECTURE.md</div>
</div>
</div>
<div class="text-sm text-gray-300 space-y-2">
<div>Add a <code>.github/skills/</code> section listing each skill, what it teaches Copilot, and which workflows it supports.</div>
<div class="text-blue-200">The lore skill in particular changes what Copilot "knows" — it needs to be explicitly documented.</div>
</div>
</div>
<div class="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-900/20">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-lg">🧭</div>
<div>
<div class="text-purple-300 font-bold">Register skill-aware expectations</div>
<div class="text-xs text-gray-400 uppercase tracking-wider">copilot-instructions.md</div>
</div>
</div>
<div class="text-sm text-gray-300 space-y-2">
<div>Tell Copilot which skills exist and when to apply them — test workflow, readiness checks, show lore lookups.</div>
<div class="text-purple-200">Skills are only useful if Copilot knows to reach for them.</div>
</div>
</div>
</div><div class="mt-4 p-4 rounded-xl bg-gray-900/60 border border-white/10 text-center">
<div class="text-sm text-yellow-300 font-semibold">Evergreen docs are not cleanup work — they are leverage for every later module.</div>
</div>
<!-- SLIDE: ➡️ Next Up — Module 5 MCP Servers -->
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

<!-- SLIDE: 🚀 Module 4: Agent Skills -->
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

<!-- SLIDE: 💭 The Team, After Module 4 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💭 The Team, After Module 4</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-amber-400">
<div class="text-xs font-bold text-amber-300 mb-0.5">Jessica</div>
<div class="text-xs text-gray-500 italic mb-2">The Eager Junior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I packaged the test runner as a skill. Elena showed me how. Twenty minutes. Now anyone on the team can run it."</div>
<div class="text-xs text-gray-500">Packaged something real, not just copied a tutorial.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-blue-400">
<div class="text-xs font-bold text-blue-300 mb-0.5">David</div>
<div class="text-xs text-gray-500 italic mb-2">The Thoughtful Architect</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"The skill pattern is a formalized capability contract. It gives Copilot something to reason against instead of improvising."</div>
<div class="text-xs text-gray-500">Formalizes the contract so Copilot doesn&#39;t have to guess.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-green-400">
<div class="text-xs font-bold text-green-300 mb-0.5">Sarah</div>
<div class="text-xs text-gray-500 italic mb-2">The Skeptical Senior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Our test coverage check runs in Agent mode now. I used to explain that workflow to every new hire. It&#39;s in a file now."</div>
<div class="text-xs text-gray-500">Onboarding just got one step shorter.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-purple-400">
<div class="text-xs font-bold text-purple-300 mb-0.5">Elena</div>
<div class="text-xs text-gray-500 italic mb-2">The Pragmatic Engineer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"The skill has the schema, the examples, and the edge cases. Everything a junior needs to not break the build."</div>
<div class="text-xs text-gray-500">Every edge case she knows, now encoded for the team.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-orange-400">
<div class="text-xs font-bold text-orange-300 mb-0.5">Marcus</div>
<div class="text-xs text-gray-500 italic mb-2">The Curious Tinkerer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"I packaged the debugging workflow I always do in my head. Now I can just invoke it. Past me would be furious."</div>
<div class="text-xs text-gray-500">Externalizing his own brain, one skill at a time.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-cyan-400">
<div class="text-xs font-bold text-cyan-300 mb-0.5">Rafael</div>
<div class="text-xs text-gray-500 italic mb-2">The Pragmatic Lead</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">"Skills turn individual expertise into team capability. That&#39;s institutional knowledge that actually scales."</div>
<div class="text-xs text-gray-500">Expertise that scales without requiring its source.</div>
</div>
</div>
</div>
