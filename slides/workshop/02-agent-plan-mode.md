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

# 📖 Story So Far

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-3xl mb-3">🧱</div>
    <div class="text-lg font-bold text-orange-300 mb-2">Module 0 exposed the mess</div>
    <div class="text-sm text-gray-300">The team felt what it is like to work with weak context and inconsistent defaults.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-3xl mb-3">📚</div>
    <div class="text-lg font-bold text-blue-300 mb-2">Module 1 created the foundation</div>
    <div class="text-sm text-gray-300">Architecture docs and repository instructions gave Copilot better structural and behavioral context.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-3xl mb-3">🧩</div>
    <div class="text-lg font-bold text-purple-300 mb-2">Module 2 tackles complexity</div>
    <div class="text-sm text-gray-300">Now the challenge is planning a feature that spans frontend, backend, database, tests, and review concerns.</div>
  </div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-xl text-white font-semibold mb-2">Plan mode turns “Where do I start?” into a reviewable roadmap.</div>
  <div class="text-sm text-gray-300">It separates research from implementation so the team can validate the approach before code starts landing.</div>
</div>

---

# 🎯 What You'll Build

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-2xl mb-3">📄</div>
    <div class="text-lg font-bold text-orange-300 mb-2">A feature plan</div>
    <div class="text-sm text-gray-300">A research-backed implementation roadmap for the character detail experience.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-2xl mb-3">🔍</div>
    <div class="text-lg font-bold text-blue-300 mb-2">A validation loop</div>
    <div class="text-sm text-gray-300">Architectural, testing, and standards review before implementation begins.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-2xl mb-3">🔄</div>
    <div class="text-lg font-bold text-purple-300 mb-2">A refined plan</div>
    <div class="text-sm text-gray-300">A second pass that closes gaps, adds edge cases, and makes the roadmap safer to execute.</div>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30">
    <div class="text-2xl mb-3">🚀</div>
    <div class="text-lg font-bold text-purple-300 mb-2">A cleaner execution path</div>
    <div class="text-sm text-gray-300">Implementation with less guesswork, clearer sequencing, and fewer avoidable conflicts.</div>
  </div>

</div>

<div class="mt-8 text-center text-lg text-gray-300">
  The real output is not “a plan document.” The real output is better implementation judgment under pressure.
</div>

---

# 📚 What Plan Mode Actually Does

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Researches read-only first</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Reads the codebase, docs, and existing patterns</li>
      <li>• Maps dependencies and likely file touch points</li>
      <li>• Surfaces assumptions and open questions</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Produces a reviewable draft</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Summary of the approach</li>
      <li>• Ordered implementation steps</li>
      <li>• Dependencies and unresolved questions</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Builds on Module 1</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Uses your architecture context</li>
      <li>• Follows your documented conventions</li>
      <li>• Starts from a better baseline than generic code search</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/30 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Still needs human judgment</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Edge cases</li>
      <li>• Architecture tradeoffs</li>
      <li>• Testing completeness and rollout decisions</li>
    </ul>
  </div>

</div>

---

# 🔗 The Plan-First Workflow

<div class="flex flex-col items-center gap-4 mt-8 text-center">

  <div class="grid grid-cols-4 gap-4 w-full max-w-5xl">
    <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
      <div class="text-3xl mb-2">🔍</div>
      <div class="text-blue-300 font-bold mb-2">Research</div>
      <div class="text-sm text-gray-300">Ask plan mode to map the work before touching code.</div>
    </div>

    <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
      <div class="text-3xl mb-2">👀</div>
      <div class="text-purple-300 font-bold mb-2">Review</div>
      <div class="text-sm text-gray-300">Read the proposed steps like a design review, not a final answer.</div>
    </div>

    <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
      <div class="text-3xl mb-2">🔄</div>
      <div class="text-orange-300 font-bold mb-2">Refine</div>
      <div class="text-sm text-gray-300">Add missing requirements, edge cases, tests, and constraints.</div>
    </div>

    <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30">
      <div class="text-3xl mb-2">✅</div>
      <div class="text-purple-300 font-bold mb-2">Execute</div>
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

<div class="mt-6 text-left">

<div class="mb-5">
  <div class="text-blue-300 font-bold mb-2">Phase 1 — Generate the roadmap</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **2.1** | Invoking Plan Mode | Marcus ⭐ | 8 min |

</div>

<div class="mb-5">
  <div class="text-purple-300 font-bold mb-2">Phase 2 — Review and improve the roadmap</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **2.2** | Validating and Refining Plans | David ⭐ | 10 min |

</div>

<div>
  <div class="text-orange-300 font-bold mb-2">Phase 3 — Execute with confidence</div>

| # | Exercise | Lead | Time |
|---|---|---|---|
| **2.3** | Executing Plans | Marcus ⭐ | 7 min |

</div>

</div>

<div class="mt-6 p-4 bg-gray-900/60 rounded-xl border border-white/10 text-center">
  <div class="text-white font-semibold">The sequence matters here too.</div>
  <div class="text-sm text-gray-300">Generate first. Challenge the plan second. Execute only after the roadmap deserves your trust.</div>
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
      <li>• <strong>Module 3:</strong> repeated planning requests become prompt templates</li>
      <li>• <strong>Module 4:</strong> skills can encode repeatable review and execution patterns</li>
      <li>• <strong>Module 5:</strong> server-backed workflows benefit from clearer task decomposition</li>
      <li>• <strong>Module 6:</strong> custom agents become more useful when the team already plans well</li>
    </ul>
  </div>

</div>

<div class="mt-8 text-center text-lg text-yellow-300">
  Better planning compounds because every later customization has a cleaner workflow to build on.
</div>

---

# ✅ Module Checklist

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">

  <div class="p-5 rounded-xl bg-gray-900/60 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Generate</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Ask plan mode to research the task</li>
      <li>• Save or capture the draft plan</li>
      <li>• Confirm steps and dependencies are visible</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Validate</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Review architecture and edge cases</li>
      <li>• Add missing tests and non-happy-path behavior</li>
      <li>• Mark the plan ready for execution</li>
    </ul>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Execute</div>
    <ul class="space-y-2 text-gray-300">
      <li>• Implement from the approved roadmap</li>
      <li>• Verify the feature end-to-end</li>
      <li>• Compare execution quality against the unplanned baseline</li>
    </ul>
  </div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-orange-900/30 via-purple-900/30 to-blue-900/20 rounded-xl border border-white/10 text-center">
  <div class="text-lg text-white font-semibold">The finish line is not “AI wrote a plan.”</div>
  <div class="text-sm text-gray-300">The finish line is “the team saw better execution because the plan was reviewed before the code.”</div>
</div>

---
layout: center
---

# ➡️ Next Up: Module 3

<div class="p-8 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-xl shadow-lg max-w-3xl">
  <div class="text-5xl mb-4 text-center">📝</div>
  <h2 class="text-3xl text-center text-white font-bold mb-4">
    Custom Prompts
  </h2>
  <div class="text-lg text-center text-purple-200 mb-6">
    Turn repeated planning workflows into reusable prompt templates
  </div>
  <div class="text-base text-gray-300 text-center mb-4">
    Once the team sees the same planning pattern work repeatedly, the next move is packaging that behavior into reusable prompts.
  </div>
  <blockquote class="text-lg text-center text-white italic">
    "We just used the same planning workflow again. That should become a prompt."
  </blockquote>
  <div class="mt-4 text-center text-purple-300">
    Module 2 complete — ready to template the workflow.
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
    Use these as facilitation prompts during delivery. The full exercise markdown remains the detailed source of truth.
  </div>
  <div class="text-sm text-gray-400">
    Generate the plan, review the plan, then execute the plan.
  </div>
</div>

---

# 🔨 Exercise 2.1 — Invoking Plan Mode

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30">Lead: Marcus ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 8 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 border border-blue-500/30">
    <div class="text-blue-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">A multi-file character detail feature spans frontend, backend, and database changes, and Marcus needs a reliable way to map the work before coding.</div>
    <div class="text-blue-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Use plan mode to generate a first-pass implementation roadmap with steps, dependencies, and open questions.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Open Copilot Chat in plan mode</li>
      <li>• Request a plan for the character detail feature</li>
      <li>• Review the generated steps and save the plan for discussion</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• The plan includes summary, steps, dependencies, and questions</li>
      <li>• File paths align with the actual FanHub structure</li>
      <li>• Planning is visibly faster than manual exploration</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 2.2 — Validating and Refining Plans

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">Lead: David ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 10 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 border border-purple-500/30">
    <div class="text-purple-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">AI gets a plausible draft quickly, but production readiness still depends on architecture review, testing expectations, and edge-case thinking.</div>
    <div class="text-purple-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Review the draft plan, identify gaps, and refine it before any implementation begins.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Review the plan through architecture, quality, and standards lenses</li>
      <li>• Add missing error handling, tests, and edge cases</li>
      <li>• Iterate with the agent until the roadmap is approved</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• At least a few meaningful gaps were identified and fixed</li>
      <li>• Test files and failure modes are explicit in the plan</li>
      <li>• The plan is marked ready for implementation</li>
    </ul>
  </div>
</div>

---

# 🔨 Exercise 2.3 — Executing Plans

<div class="flex items-center justify-center gap-3 mt-4 text-sm">
  <span class="px-3 py-1 rounded-full bg-orange-900/50 text-orange-300 border border-orange-500/30">Lead: Marcus ⭐</span>
  <span class="px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-white/10">Time: 7 min</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
  <div class="p-5 rounded-xl bg-gradient-to-br from-orange-900/40 to-gray-900/40 border border-orange-500/30">
    <div class="text-orange-300 font-bold mb-3">Challenge</div>
    <div class="text-sm text-gray-300">The plan is approved, but the team still needs to prove that execution is smoother, more complete, and less error-prone than the old approach.</div>
    <div class="text-orange-300 font-bold mt-5 mb-3">Goal</div>
    <div class="text-sm text-gray-300">Execute the validated roadmap and verify backend, frontend, tests, and end-to-end behavior.</div>
  </div>

  <div class="p-5 rounded-xl bg-gray-900/60 border border-white/10">
    <div class="text-white font-bold mb-3">What to do</div>
    <ul class="text-sm text-gray-300 space-y-2 mb-5">
      <li>• Execute the plan in stages</li>
      <li>• Review implementation against the validated roadmap</li>
      <li>• Verify the feature and tests end to end</li>
    </ul>
    <div class="text-white font-bold mb-3">Success criteria</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>• Backend, frontend, and tests are implemented per plan</li>
      <li>• Error handling and edge cases work as expected</li>
      <li>• Integration debugging is minimal because the sequencing was clear upfront</li>
    </ul>
  </div>
</div>
