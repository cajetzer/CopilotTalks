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
    Module 3: Custom Prompts
  </h1>

  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
      ⏰ Save the prompt, not the typing
    </span>
  </div>

  <div class="mt-8 text-lg opacity-70 max-w-2xl italic relative z-10">
    "If a prompt is good enough to reuse, it is good enough to turn into a function."
  </div>

  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
</div>

---

# 📖 Story So Far

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-3xl mb-3">📚</div>
    <div class="text-lg font-bold text-blue-300 mb-2">Module 1 gave the team a foundation</div>
    <div class="text-sm text-gray-300">Architecture docs and repository instructions turned implicit standards into explicit context.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-3xl mb-3">🧩</div>
    <div class="text-lg font-bold text-purple-300 mb-2">Module 2 gave the team a workflow</div>
    <div class="text-sm text-gray-300">Plan mode separated research from implementation so complex work could be reviewed before coding.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-3xl mb-3">🔁</div>
    <div class="text-lg font-bold text-orange-300 mb-2">Module 3 solves repetition</div>
    <div class="text-sm text-gray-300">Now the problem is repeating the same high-value prompts over and over instead of turning them into team assets.</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl text-white font-semibold mb-2">Custom prompts turn repeated expertise into invokable workflow.</div>
  <div class="text-sm text-gray-300">The goal is not only speed. The goal is consistency, reuse, and better results across the whole team.</div>
</div>

---

# 🎯 What You'll Build

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-2xl mb-3">🧪</div>
    <div class="text-lg font-bold text-blue-300 mb-2"><code>test-suite.prompt.md</code></div>
    <div class="text-sm text-gray-300">A reusable test-generation function that captures the team’s test expectations once.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-2xl mb-3">🔎</div>
    <div class="text-lg font-bold text-purple-300 mb-2"><code>react-review.prompt.md</code></div>
    <div class="text-sm text-gray-300">A review prompt that links to the current standards and architecture instead of copying them manually.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-2xl mb-3">🛠️</div>
    <div class="text-lg font-bold text-orange-300 mb-2"><code>debug-build.prompt.md</code></div>
    <div class="text-sm text-gray-300">A variable-driven debugging prompt that captures context without copy-paste.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30">
    <div class="text-2xl mb-3">📈</div>
    <div class="text-lg font-bold text-purple-300 mb-2">A standard team interface</div>
    <div class="text-sm text-gray-300">Reusable commands the whole team can invoke with the same inputs, references, and expectations.</div>
  </div>

</div>

<div class="mt-8 text-center text-lg text-gray-300">
  Your best prompts stop being personal notes and start becoming shared team functions.
</div>

---

# 📚 What Prompt Files Actually Are

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Think of them like functions</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Invoked on demand</li>
      <li>• Named and discoverable</li>
      <li>• Parameterized with variables</li>
      <li>• Designed for specific repeatable tasks</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Each file has two layers</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• YAML frontmatter for name, agent, model, tools</li>
      <li>• A body that explains the task and expected output</li>
      <li>• Optional links to docs and standards</li>
      <li>• Optional built-in or input variables</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Workspace prompts</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Live in <code>.github/prompts/</code></li>
      <li>• Are version-controlled and team-visible</li>
      <li>• Work best for project-specific workflows</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/30 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">User prompts</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Live in your VS Code profile</li>
      <li>• Follow you across projects</li>
      <li>• Work best for personal, reusable habits</li>
    </ul>
  </div>

</div>

---

# 🔗 Why Prompt Files Matter Here

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

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

# 🔎 What a Strong Prompt File Includes

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Frontmatter</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• A clear name and description</li>
      <li>• The right agent for the task</li>
      <li>• Tool access that matches the prompt’s job</li>
      <li>• Optional hints that improve invocation</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Body</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• The exact task to perform</li>
      <li>• Links to standards or examples when relevant</li>
      <li>• The outputs you expect back</li>
      <li>• Enough structure to keep results consistent</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Variables</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• <code>${file}</code> for current file context</li>
      <li>• <code>${selection}</code> for focused analysis</li>
      <li>• <code>${workspaceFolder}</code> for project-aware prompts</li>
      <li>• <code>${input:...}</code> for parameterized use</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Good design rule</div>
    <div class="text-sm text-gray-300">The best prompt file is specific enough to save time, but general enough that the team actually uses it more than once.</div>
  </div>

</div>

---

# 🔗 How Prompt Files Build on the Foundation

<div class="flex flex-col items-center gap-4 mt-8 text-center">

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
layout: two-cols
---

# ❌ Before

<div class="space-y-4 mt-6 text-left">

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

::right::

# ✨ After

<div class="space-y-4 mt-6 text-left">

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

---

# 📊 What to Validate in the Workshop

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

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

# 🔨 Exercise Roadmap

<div class="mt-6 text-left">

<div class="mb-5">
  <div class="text-blue-300 font-bold mb-2">Phase 1 — Create the first reusable function</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **3.1** | Creating Your First Prompt File | Elena ⭐ | 8 min |

</div>

<div class="mb-5">
  <div class="text-purple-300 font-bold mb-2">Phase 2 — Link prompts to standards</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **3.2** | Referencing Standards and Docs | Sarah ⭐ | 7 min |

</div>

<div>
  <div class="text-orange-300 font-bold mb-2">Phase 3 — Add context automatically</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **3.3** | Variable-Driven Prompts | Marcus ⭐ | 10 min |

</div>

</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
  <div class="text-white font-semibold">The progression is simple.</div>
  <div class="text-sm text-gray-300">First save the prompt. Then anchor it to the docs. Then make it context-aware.</div>
</div>

---

# 🔗 Compounding Value

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">What Module 3 adds</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Standardized, invokable prompt functions</li>
      <li>• Fewer repeated setup steps</li>
      <li>• Tighter links between docs and execution</li>
      <li>• A more reusable way to encode team expertise</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">How later modules benefit</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• <strong>Module 4:</strong> skills can capture broader, domain-specific workflow logic</li>
      <li>• <strong>Module 5:</strong> prompt conventions help when specialized integrations need repeatable entry points</li>
      <li>• <strong>Module 6:</strong> custom agents become more useful when the team already knows what reusable tasks look like</li>
    </ul>
  </div>

</div>

<div class="mt-8 text-center text-lg text-yellow-300">
  Reusable prompts compound because every future customization inherits a cleaner, faster starting point.
</div>

---

# ✅ Module Checklist

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Create</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Add prompt files in <code>.github/prompts/</code></li>
      <li>• Give each prompt a clear job and invocation path</li>
      <li>• Confirm the prompts are discoverable in chat</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Anchor</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Link prompts to the current docs and standards</li>
      <li>• Avoid duplicating source-of-truth content in the prompt body</li>
      <li>• Verify prompt behavior updates when docs change</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Automate context</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Use built-in variables where context is already known</li>
      <li>• Use input variables where user input is part of the task</li>
      <li>• Validate that invocation is faster and more consistent than manual prompting</li>
    </ul>
  </div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-lg text-white font-semibold">The finish line is not “we saved some typing.”</div>
  <div class="text-sm text-gray-300">The finish line is “the team can invoke its best expertise reliably, quickly, and repeatedly.”</div>
</div>

---
layout: center
---

# ➡️ Next Up: Module 4

<div class="p-8 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-xl shadow-lg max-w-3xl">
  <div class="text-5xl mb-4 text-center">🧠</div>
  <h2 class="text-3xl text-center text-white font-bold mb-4">
    Agent Skills
  </h2>
  <div class="text-lg text-center text-purple-200 mb-6">
    Move from reusable prompts to reusable domain expertise
  </div>
  <div class="text-base text-gray-300 text-center mb-4">
    Prompt files give the team reusable task entry points. The next step is packaging deeper workflow knowledge into reusable skills.
  </div>
  <blockquote class="text-lg text-center text-white italic">
    "The prompt is reusable. Can we make the expertise reusable too?"
  </blockquote>
  <div class="mt-4 text-center text-purple-300">
    Module 3 complete — ready to package domain knowledge.
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
    Save the prompt, connect it to the docs, then make it context-aware.
  </div>
</div>

---

# 🔨 Exercise 3.1 — Creating Your First Prompt File

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30">Lead: Elena ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 8 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">The team keeps retyping a high-value test generation prompt instead of turning it into a reusable command.</div>
    <div class="text-blue-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Create a first workspace prompt file that standardizes test generation and can be invoked instantly.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Create the <code>.github/prompts/</code> directory</li>
      <li>• Add <code>test-suite.prompt.md</code> with frontmatter and prompt body</li>
      <li>• Invoke the prompt against a real source file</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• The prompt appears in chat autocomplete</li>
      <li>• It generates comprehensive tests consistently</li>
      <li>• The team sees the difference between retyping and invoking</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 3.2 — Referencing Standards and Docs

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">Lead: Sarah ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 7 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Review prompts still duplicate standards manually, which creates drift whenever the source docs change.</div>
    <div class="text-purple-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Create prompts that link directly to the team’s current architecture and instruction files.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Create <code>react-review.prompt.md</code></li>
      <li>• Link the prompt to the current standards and docs</li>
      <li>• Confirm prompt output changes when the docs change</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• The prompt references source-of-truth files instead of copied text</li>
      <li>• Reviews become more structured and complete</li>
      <li>• Standards drift is reduced because the links stay current</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 3.3 — Variable-Driven Prompts

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-orange-900/50 text-orange-300 border border-orange-500/30">Lead: Marcus ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 10 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">Debugging and context-heavy prompts still waste time because developers manually copy files, selections, and error details into chat.</div>
    <div class="text-orange-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Use built-in and input variables so prompts capture context automatically and consistently.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Create a variable-driven debugging prompt</li>
      <li>• Use file, selection, workspace, and input variables where appropriate</li>
      <li>• Compare the invocation flow against manual context gathering</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Variables resolve to the current context correctly</li>
      <li>• Prompt invocation is faster than manual copy-paste</li>
      <li>• The prompt starts with better context and produces more consistent results</li>
    </ul>
  </div>
</div>
