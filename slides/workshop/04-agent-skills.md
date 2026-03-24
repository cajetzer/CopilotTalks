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

# 📖 Story So Far

<div class="grid grid-cols-4 gap-4 mt-8 text-left">

  <div class="p-4 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-2xl mb-2">📚</div>
    <div class="font-bold text-blue-300 mb-2">Module 1</div>
    <div class="text-sm text-gray-300">The team documented structure and standards.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-2xl mb-2">🧩</div>
    <div class="font-bold text-purple-300 mb-2">Module 2</div>
    <div class="text-sm text-gray-300">The team learned to research and validate a plan before coding.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-2xl mb-2">🔁</div>
    <div class="font-bold text-orange-300 mb-2">Module 3</div>
    <div class="text-sm text-gray-300">The team turned repeated prompts into reusable functions.</div>
  </div>

  <div class="p-4 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-2xl mb-2">🎓</div>
    <div class="font-bold text-purple-300 mb-2">Module 4</div>
    <div class="text-sm text-gray-300">Now the team needs to teach Copilot specialized domain workflows.</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl text-white font-semibold mb-2">Prompts reuse words. Skills reuse capability.</div>
  <div class="text-sm text-gray-300">This module is about packaging instructions, scripts, examples, and resources into something Copilot can actually work with.</div>
</div>

---

# 🎯 What You'll Build

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-2xl mb-3">🎨</div>
    <div class="text-lg font-bold text-blue-300 mb-2"><code>api-endpoint-design</code></div>
    <div class="text-sm text-gray-300">A skill that pairs endpoint guidance with schema files and example endpoints.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-2xl mb-3">🧪</div>
    <div class="text-lg font-bold text-purple-300 mb-2"><code>bug-reproduction-test-generator</code></div>
    <div class="text-sm text-gray-300">A skill that combines templates, mocking patterns, and edge-case examples.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-2xl mb-3">⚙️</div>
    <div class="text-lg font-bold text-orange-300 mb-2"><code>build-pipeline-analyzer</code></div>
    <div class="text-sm text-gray-300">A skill that combines instructions with diagnostic scripts and log-pattern references.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30">
    <div class="text-2xl mb-3">🌐</div>
    <div class="text-lg font-bold text-purple-300 mb-2">A portable pattern</div>
    <div class="text-sm text-gray-300">Skills work as an open capability format across VS Code, Copilot CLI, and coding agents.</div>
  </div>

</div>

<div class="mt-8 text-center text-lg text-gray-300">
  The output is not just a file. It is a teachable workflow Copilot can repeatedly perform.
</div>

---

# 📚 What Agent Skills Actually Are

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">A skill is a capability package</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• A <code>SKILL.md</code> file explains the workflow</li>
      <li>• Resources can include scripts, examples, schemas, and templates</li>
      <li>• The goal is a complete task capability, not just a reminder</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Progressive loading keeps context efficient</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Discovery: metadata is known up front</li>
      <li>• Instructions: the body loads when relevant</li>
      <li>• Resources: scripts and examples load only when needed</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Project and personal scopes</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Project skills live in <code>.github/skills/</code></li>
      <li>• Personal skills can live in your home skill directory</li>
      <li>• Team skills belong with the repo when they encode shared workflow</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/30 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">The differentiator</div>
    <div class="text-sm text-gray-300">Skills can go beyond “say this” and into “use these resources, run this script, follow this workflow.”</div>
  </div>

</div>

---

# 🔎 Skill Structure and Loading

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
      <li>• Copilot sees the skill name and description first</li>
      <li>• The body loads when the task matches</li>
      <li>• Referenced resources load only on demand</li>
      <li>• More skills can exist without bloating every session</li>
    </ul>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl font-bold text-white">Progressive loading is what makes many skills practical instead of expensive.</div>
</div>

---

# ⚡ Why Scripts Matter

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

# 🔄 Skills vs Instructions vs Prompts

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Instructions</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Best for behavior and standards</li>
      <li>• Often always-on or path-scoped</li>
      <li>• Tell Copilot how to work</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Prompts</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Best for repeated invocations</li>
      <li>• Save and reuse strong request wording</li>
      <li>• Turn common tasks into commands</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Skills</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Best for specialized capabilities</li>
      <li>• Combine instructions with resources and scripts</li>
      <li>• Teach complete workflows Copilot can apply</li>
    </ul>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-lg text-white font-semibold">Instructions guide behavior. Prompts package requests. Skills package capability.</div>
</div>

---
layout: two-cols
---

# ❌ Before

<div class="space-y-4 mt-6 text-left">

<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-300 mb-2">Specialized work stays tribal</div>
  <div class="text-sm text-gray-300">Schema checks, test patterns, and debugging approaches live in senior engineers’ heads or scattered files.</div>
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

::right::

# ✨ After

<div class="space-y-4 mt-6 text-left">

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

---

# 📊 What to Validate in the Workshop

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

# 🔨 Exercise Roadmap

<div class="mt-6 text-left">

<div class="mb-5">
  <div class="text-blue-300 font-bold mb-2">Phase 1 — Encode domain rules and examples</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **4.1** | API Endpoint Design Skill | Sarah ⭐ | 12 min |

</div>

<div class="mb-5">
  <div class="text-purple-300 font-bold mb-2">Phase 2 — Encode repeatable quality workflow</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **4.2** | Bug Reproduction Test Generator | Elena ⭐ | 10 min |

</div>

<div>
  <div class="text-orange-300 font-bold mb-2">Phase 3 — Encode operational diagnosis</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **4.3** | Build Pipeline Analyzer | Marcus ⭐ | 12 min |

</div>

</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
  <div class="text-white font-semibold">The progression is capability-first.</div>
  <div class="text-sm text-gray-300">Teach the schema workflow, then the testing workflow, then the debugging workflow.</div>
</div>

---

# 🔗 Compounding Value

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">What Module 4 adds</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Reusable capability packages</li>
      <li>• Better use of examples, schemas, and templates</li>
      <li>• The option to pair workflow instructions with scripts</li>
      <li>• More specialized help than prompts or instructions alone can offer</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">How later modules benefit</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• <strong>Module 5:</strong> MCP servers extend this from static resources to live integrations</li>
      <li>• <strong>Module 6:</strong> custom agents become more powerful when they can rely on packaged domain workflows</li>
    </ul>
  </div>

</div>

<div class="mt-8 text-center text-lg text-yellow-300">
  Skills compound because every future agent or integration can stand on a stronger, more specific workflow foundation.
</div>

---

# ✅ Module Checklist

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Define</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Create a skill folder with a clear name</li>
      <li>• Write a <code>SKILL.md</code> that explains when and how to use it</li>
      <li>• Make the description specific enough to match the right tasks</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Package</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Add the resources the workflow actually needs</li>
      <li>• Include examples, templates, schemas, or scripts where helpful</li>
      <li>• Keep the package focused on one teachable capability</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Validate</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Test whether the skill improves output quality and speed</li>
      <li>• Confirm the right resources are being used</li>
      <li>• Refine the skill until the workflow feels genuinely reusable</li>
    </ul>
  </div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-lg text-white font-semibold">The finish line is not “we wrote a skill folder.”</div>
  <div class="text-sm text-gray-300">The finish line is “Copilot can now perform a specialized workflow with better speed and reliability.”</div>
</div>

---
layout: center
---

# ➡️ Next Up: Module 5

<div class="p-8 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-xl shadow-lg max-w-3xl">
  <div class="text-5xl mb-4 text-center">🔌</div>
  <h2 class="text-3xl text-center text-white font-bold mb-4">
    MCP Servers
  </h2>
  <div class="text-lg text-center text-purple-200 mb-6">
    Move from static resources to live integrations
  </div>
  <div class="text-base text-gray-300 text-center mb-4">
    Skills are powerful, but their resources are still packaged with the repo. Next, the team connects Copilot to live systems and external tools.
  </div>
  <blockquote class="text-lg text-center text-white italic">
    "The skill knows the workflow. What if Copilot could also query the real system while it works?"
  </blockquote>
  <div class="mt-4 text-center text-purple-300">
    Module 4 complete — ready for runtime integrations.
  </div>
</div>

---
layout: center
---

# 🔨 Exercise Section

<div class="p-8 bg-gradient-to-br from-orange-900/40 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 max-w-4xl mx-auto">
  <div class="text-5xl mb-4">🧪</div>
  <div class="text-2xl text-white font-bold mb-3">One slide per exercise</div>
  <div class="text-base text-gray-300 mb-4">
    Use these as facilitation prompts during delivery. The detailed exercise markdown remains the source of truth.
  </div>
  <div class="text-sm text-gray-400">
    Package the workflow, attach the resources, then prove the capability is real.
  </div>
</div>

---

# 🔨 Exercise 4.1 — API Endpoint Design Skill

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30">Lead: Sarah ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 12 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">General REST knowledge is not enough to generate endpoints that match FanHub’s specific schema and validation expectations.</div>
    <div class="text-blue-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Create a skill that combines endpoint guidance, schema references, and example endpoints so Copilot can generate compliant APIs more reliably.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Create the skill folder and <code>SKILL.md</code></li>
      <li>• Add schema and endpoint example resources</li>
      <li>• Validate that generated endpoints follow the expected contract</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• The skill references the right schema and examples</li>
      <li>• Endpoint generation is faster and more consistent</li>
      <li>• Schema mismatches are reduced before review</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 4.2 — Bug Reproduction Test Generator

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">Lead: Elena ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 10 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Bug reproduction tests still start from scratch, which leads to inconsistent structure, missed edge cases, and repeated setup work.</div>
    <div class="text-purple-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Create a skill that packages templates, examples, and mocking patterns for reproducible, higher-quality bug tests.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Add a test template and edge-case examples</li>
      <li>• Use the skill to generate a reproduction test from a bug description</li>
      <li>• Compare the generated result to the previous manual workflow</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Test structure is more consistent</li>
      <li>• Edge-case coverage improves</li>
      <li>• Reproduction tests are faster to generate and easier to review</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 4.3 — Build Pipeline Analyzer

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-orange-900/50 text-orange-300 border border-orange-500/30">Lead: Marcus ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 12 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Build failures consume time because the team has to rediscover the same log patterns and troubleshooting flow every time.</div>
    <div class="text-orange-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Create a skill that combines diagnostic instructions, log-pattern examples, and a script to speed up root-cause analysis.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Add the analyzer script and failure-pattern resources</li>
      <li>• Use the skill against a representative build failure</li>
      <li>• Check whether the diagnosis is faster and more specific than the manual path</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• The script and examples support faster diagnosis</li>
      <li>• Root-cause identification is more reliable</li>
      <li>• Build troubleshooting becomes a repeatable workflow instead of improvisation</li>
    </ul>
  </div>
</div>
