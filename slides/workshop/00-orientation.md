---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module 0: The Challenge
  Building FanHub in 8 Hours
drawings:
  persist: false
transition: slide-left
title: Module 0 - The Challenge
module: workshop/00-orientation
mdc: true
status: active
updated: 2026-03-24
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <!-- Animated gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-purple-900/20"></div>

  <!-- Glowing orb behind logo -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

  <!-- Logo with glow effect -->
  <div class="relative z-10">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-72" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-72 relative" alt="SDP Logo" />
  </div>

  <!-- Title with gradient text -->
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent relative z-10">
    Module 0: The Challenge
  </h1>

  <!-- Subtitle with accent -->
  <div class="mt-4 relative z-10">
    <span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">
      ⏰ Building FanHub in 8 Hours
    </span>
  </div>

  <!-- Quote -->
  <div class="mt-8 text-lg opacity-60 max-w-xl italic relative z-10">
    "Prove that AI-assisted development is worth the hype by building something real. Fast."
  </div>

  <!-- Decorative line -->
  <div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-16 py-6">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
  <!-- Ambient glow -->
  <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
  <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>

  <!-- Section label -->
  <div class="relative z-10 mb-4">
    <span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-sm font-semibold tracking-wide shadow-lg">
      📖 The Story
    </span>
  </div>

  <!-- Time marker -->
  <div class="relative z-10 flex items-center gap-3 mb-4">
    <span class="text-xl">⏰</span>
    <span class="text-orange-300 font-bold text-lg tracking-wide">Monday Morning, 9:00 AM</span>
    <div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
  </div>

  <!-- Scene setter -->
  <div class="relative z-10 mb-4 flex items-center gap-3">
    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-base font-bold text-white shadow-lg shadow-orange-500/30 flex-shrink-0">S</div>
    <div class="text-gray-300 text-sm">
      <span class="text-white font-semibold">Sarah</span> walks into standup and drops a challenge:
    </div>
  </div>

  <!-- Quote callout -->
  <div class="relative z-10 mb-4 p-5 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 shadow-xl backdrop-blur-sm">
    <div class="text-orange-300/60 text-4xl leading-none font-serif mb-1">"</div>
    <p class="text-gray-200 text-sm leading-relaxed -mt-3">
      A contractor bailed halfway through building a generic fan site. The code works, barely, but it's a mess — no documentation, inconsistent patterns, completely generic. Pick your favorite show and turn this into a <span class="text-orange-300 font-semibold">production-ready fan hub</span>. Authentication, search, admin tools, deployment pipeline, the works.
    </p>
    <div class="text-orange-300/60 text-4xl leading-none font-serif text-right">"</div>
  </div>

  <!-- Bomb drop statement -->
  <div class="relative z-10 flex items-center gap-3 p-4 bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-xl border border-red-500/40 shadow-lg">
    <span class="text-xl flex-shrink-0">⚡</span>
    <p class="text-white font-bold text-base">
      You have until end of day. Oh, and you're all using <span class="text-orange-300">GitHub Copilot.</span>
    </p>
  </div>
</div>

---
layout: center
---

# 🎯 The Mission

<div class="max-w-4xl mx-auto mt-8">

<div class="p-6 bg-gradient-to-r from-orange-600 to-red-700 rounded-xl shadow-lg shadow-orange-500/20 text-center mb-8">
  <div class="text-3xl font-bold text-white mb-2">
    Transform a generic mess into a production-ready fan hub
  </div>
  <div class="text-orange-100 text-lg">
    In 8 hours, using GitHub Copilot
  </div>
</div>

<div class="grid grid-cols-2 gap-4 text-sm">
  <div class="p-4 bg-gray-800 rounded-lg border-l-4 border-green-500">
    <div class="font-bold text-green-400 mb-2">✅ By End of Day</div>
    <ul class="text-gray-300 space-y-1">
      <li>✓ Authentication & authorization</li>
      <li>✓ Advanced search</li>
      <li>✓ Admin dashboard</li>
      <li>✓ Comprehensive tests</li>
      <li>✓ Deployment pipeline</li>
      <li>✓ Show-specific branding</li>
    </ul>
  </div>
  <div class="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-500">
    <div class="font-bold text-blue-400 mb-2">🎨 Your Choice</div>
    <div class="text-gray-300 space-y-1">
      <div>Pick your favorite show:</div>
      <div class="text-xs mt-2">
        📺 The Office • 🔦 Stranger Things<br/>
        🧪 Breaking Bad • 🛡️ The Mandalorian<br/>
        🐉 Game of Thrones • 🚀 The Expanse
      </div>
    </div>
  </div>
</div>

</div>

---

# The Evolution

<div class="grid grid-cols-3 gap-5 mt-5">

  <!-- Era 1 -->
  <div class="flex flex-col rounded-xl overflow-hidden border border-purple-500/40 bg-purple-900/20">
    <div class="flex items-center justify-center bg-purple-900/40 py-4">
      <img src="./00-orientation/images/wizard.png" class="h-28 object-contain" alt="Syntax Wizard" />
    </div>
    <div class="p-4 flex flex-col flex-1">
      <div class="text-purple-300 font-bold text-sm mb-1">1990–2015</div>
      <div class="text-white font-bold text-base mb-3">Syntax Wizards</div>
      <ul class="text-xs text-gray-400 space-y-1.5 flex-1">
        <li>Memorize language quirks</li>
        <li>Clever, unreadable code</li>
        <li>Knowledge hoarding</li>
        <li>Fast typing above all</li>
      </ul>
      <div class="mt-3 p-2 bg-purple-950/50 rounded text-[10px] text-purple-300">
        ✗ Onboarding took months
      </div>
    </div>
  </div>

  <!-- Era 2 -->
  <div class="flex flex-col rounded-xl overflow-hidden border border-yellow-500/40 bg-yellow-900/20">
    <div class="flex items-center justify-center bg-yellow-900/40 py-4">
      <img src="./00-orientation/images/cowboy.png" class="h-28 object-contain" alt="YAML Cowboy" />
    </div>
    <div class="p-4 flex flex-col flex-1">
      <div class="text-yellow-300 font-bold text-sm mb-1">2015–2020</div>
      <div class="text-white font-bold text-base mb-3">YAML Cowboys</div>
      <ul class="text-xs text-gray-400 space-y-1.5 flex-1">
        <li>Configuration as code</li>
        <li>Infrastructure everywhere</li>
        <li>Copy-paste engineering</li>
        <li>Tool proliferation</li>
      </ul>
      <div class="mt-3 p-2 bg-yellow-950/50 rounded text-[10px] text-yellow-300">
        ✗ YAML bugs broke deploys
      </div>
    </div>
  </div>

  <!-- Era 3 -->
  <div class="flex flex-col rounded-xl overflow-hidden border border-orange-500/60 bg-gradient-to-b from-orange-900/40 to-red-900/30 shadow-lg shadow-orange-500/10">
    <div class="flex items-center justify-center bg-orange-900/30 py-4">
      <img src="./00-orientation/images/monk.png" class="h-28 object-contain" alt="Markdown Whisperer" />
    </div>
    <div class="p-4 flex flex-col flex-1">
      <div class="text-orange-300 font-bold text-sm mb-1">2020–Present</div>
      <div class="text-white font-bold text-base mb-3">Markdown Whisperers</div>
      <ul class="text-xs text-gray-300 space-y-1.5 flex-1">
        <li>✓ <strong>Clear intent</strong> over syntax</li>
        <li>✓ <strong>Understandable code</strong> over clever</li>
        <li>✓ <strong>Scaled knowledge</strong> via docs</li>
        <li>✓ <strong>Fast thinking</strong> over fast typing</li>
      </ul>
      <div class="mt-3 p-2 bg-orange-950/50 rounded text-[10px] text-orange-200 font-semibold">
        ✓ AI handles syntax — you handle judgment
      </div>
    </div>
  </div>

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-orange-900/40 to-purple-900/40 rounded-lg border border-orange-500/30 text-center text-xs text-gray-300">
  💡 <strong class="text-orange-300">Markdown is the medium</strong> — the best teams will be those with the best prose, not the most elegant syntax
</div>

---
layout: center
---

# 🧠 The Mindset Shift

<div class="max-w-5xl mx-auto mt-6">

<div class="grid grid-cols-2 gap-6">

<div class="p-5 bg-red-900/30 rounded-lg border-2 border-red-500">
  <div class="text-center text-3xl mb-3">❌</div>
  <div class="font-bold text-red-400 text-center mb-4">The Old Way</div>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>Syntax mastery</li>
    <li>Clever solutions</li>
    <li>Knowledge hoarding</li>
    <li>Fast typing</li>
  </ul>
  <div class="mt-4 p-3 bg-red-950/50 rounded text-xs text-red-300">
    Result: Onboarding takes months, fragile teams, hidden debt
  </div>
</div>

<div class="p-5 bg-green-900/30 rounded-lg border-2 border-green-500">
  <div class="text-center text-3xl mb-3">✅</div>
  <div class="font-bold text-green-400 text-center mb-4">The New Way</div>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>Clear intent</li>
    <li>Understandable code</li>
    <li>Scaled knowledge</li>
    <li>Fast thinking</li>
  </ul>
  <div class="mt-4 p-3 bg-green-950/50 rounded text-xs text-green-300">
    Result: AI handles boilerplate, expertise matters more
  </div>
</div>

</div>

<div class="mt-8 p-5 bg-gradient-to-r from-orange-700 to-purple-700 rounded-xl text-center">
  <div class="text-xl font-bold text-white">
    Experience doesn't become obsolete—it becomes the quality filter
  </div>
  <div class="text-sm text-orange-100 mt-2 italic">
    💡 Markdown is the medium — the best teams will be those with the best prose, not the most elegant syntax
  </div>
</div>

</div>

---

# The 5 Principles

<div class="grid grid-cols-1 gap-3 mt-6 text-sm">

<div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400 flex items-start gap-3">
  <div class="text-3xl">🔍</div>
  <div>
    <div class="font-bold text-blue-300 text-base">1. Clarity Over Cleverness</div>
    <div class="text-gray-400 mt-1">Clear thinking enables effective AI collaboration. If you can't explain it to a human, you can't explain it to AI.</div>
  </div>
</div>

<div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-400 flex items-start gap-3">
  <div class="text-3xl">🎯</div>
  <div>
    <div class="font-bold text-green-300 text-base">2. Intent Over Implementation</div>
    <div class="text-gray-400 mt-1">Describe WHAT you want (outcomes, constraints), not HOW to build it. Your expertise is knowing what to build.</div>
  </div>
</div>

<div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400 flex items-start gap-3">
  <div class="text-3xl">📚</div>
  <div>
    <div class="font-bold text-purple-300 text-base">3. Documentation as Leverage</div>
    <div class="text-gray-400 mt-1">Write once, benefit infinitely. Documentation helps humans AND AI. Every piece pays dividends forever.</div>
  </div>
</div>

<div class="p-4 bg-orange-900/40 rounded-lg border-l-4 border-orange-400 flex items-start gap-3">
  <div class="text-3xl">🧩</div>
  <div>
    <div class="font-bold text-orange-300 text-base">4. Context is Everything</div>
    <div class="text-gray-400 mt-1">Quality of suggestions matches quality of context provided. AI reads context, not minds.</div>
  </div>
</div>

<div class="p-4 bg-red-900/40 rounded-lg border-l-4 border-red-400 flex items-start gap-3">
  <div class="text-3xl">⚖️</div>
  <div>
    <div class="font-bold text-red-300 text-base">5. Validate, Don't Automate</div>
    <div class="text-gray-400 mt-1">AI proposes; you decide. Your expertise catches what AI misses. Always review critically.</div>
  </div>
</div>

</div>

---

# 🗺️ The Customization Map

<div class="mt-6">

<div class="text-center mb-6 text-gray-400 text-sm italic">
  Five ways to customize GitHub Copilot—learn when to use what
</div>

<div class="grid grid-cols-5 gap-2 text-xs">

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
  <div class="text-2xl mb-2">📚</div>
  <div class="font-bold text-blue-300">Repo Instructions</div>
  <div class="text-gray-400 mt-2">Project README for AI</div>
  <div class="text-blue-200 mt-2 font-mono text-[10px]">copilot-instructions.md</div>
  <div class="mt-2 text-gray-500">Always on</div>
</div>

<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400 text-center">
  <div class="text-2xl mb-2">📋</div>
  <div class="font-bold text-green-300">Custom Instructions</div>
  <div class="text-gray-400 mt-2">File-specific rules</div>
  <div class="text-green-200 mt-2 font-mono text-[10px]">*.instructions.md</div>
  <div class="mt-2 text-gray-500">By file pattern</div>
</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400 text-center">
  <div class="text-2xl mb-2">⚡</div>
  <div class="font-bold text-purple-300">Prompts</div>
  <div class="text-gray-400 mt-2">Task template</div>
  <div class="text-purple-200 mt-2 font-mono text-[10px]">*.prompt.md</div>
  <div class="mt-2 text-gray-500">When invoked</div>
</div>

<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400 text-center">
  <div class="text-2xl mb-2">🤖</div>
  <div class="font-bold text-orange-300">Agents</div>
  <div class="text-gray-400 mt-2">Specialist persona</div>
  <div class="text-orange-200 mt-2 font-mono text-[10px]">*.agent.md</div>
  <div class="mt-2 text-gray-500">@ mentioned</div>
</div>

<div class="p-3 bg-pink-900/60 rounded-lg border-2 border-pink-400 text-center">
  <div class="text-2xl mb-2">🎓</div>
  <div class="font-bold text-pink-300">Skills</div>
  <div class="text-gray-400 mt-2">Domain expert</div>
  <div class="text-pink-200 mt-2 font-mono text-[10px]">SKILL.md</div>
  <div class="mt-2 text-gray-500">Auto-loaded</div>
</div>

</div>

<div class="mt-6 p-4 bg-gray-800 rounded-lg">
  <div class="font-bold text-white mb-2 text-sm">Quick Decision</div>
  <div class="text-gray-400 text-xs space-y-1">
    <div>• <strong class="text-blue-300">Project-wide context?</strong> → Repo Instructions</div>
    <div>• <strong class="text-green-300">Specific file types?</strong> → Custom Instructions</div>
    <div>• <strong class="text-purple-300">Reusable task?</strong> → Prompts</div>
    <div>• <strong class="text-orange-300">Specialist role?</strong> → Agents</div>
    <div>• <strong class="text-pink-300">Domain knowledge?</strong> → Skills</div>
  </div>
</div>

</div>

---

# 👥 Meet The Team

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-4 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-2 text-center">👨‍💼</div>
  <div class="font-bold text-blue-300 text-center text-base">Sarah</div>
  <div class="text-gray-400 text-center mb-3">Senior Dev · 15 years</div>
  <div class="text-gray-300 italic text-center">
    "I've seen hype cycles. Prove this is different."
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-green-900/60 to-green-800/40 rounded-lg border-2 border-green-400">
  <div class="text-3xl mb-2 text-center">🔧</div>
  <div class="font-bold text-green-300 text-center text-base">Marcus</div>
  <div class="text-gray-400 text-center mb-3">DevOps Dev · 5 years</div>
  <div class="text-gray-300 italic text-center">
    "Can this help me build apps, not just infrastructure?"
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-lg border-2 border-purple-400">
  <div class="text-3xl mb-2 text-center">👨‍💻</div>
  <div class="font-bold text-purple-300 text-center text-base">David</div>
  <div class="text-gray-400 text-center mb-3">Staff Engineer · 20 years</div>
  <div class="text-gray-300 italic text-center">
    "Will AI make my 20 years of expertise obsolete?"
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-orange-900/60 to-orange-800/40 rounded-lg border-2 border-orange-400">
  <div class="text-3xl mb-2 text-center">🧪</div>
  <div class="font-bold text-orange-300 text-center text-base">Elena</div>
  <div class="text-gray-400 text-center mb-3">QA Engineer · 8 years</div>
  <div class="text-gray-300 italic text-center">
    "Will AI tests miss critical edge cases?"
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-pink-900/60 to-pink-800/40 rounded-lg border-2 border-pink-400">
  <div class="text-3xl mb-2 text-center">📱</div>
  <div class="font-bold text-pink-300 text-center text-base">Rafael</div>
  <div class="text-gray-400 text-center mb-3">Product Manager · 10 years</div>
  <div class="text-gray-300 italic text-center">
    "Can this bridge business and technical faster?"
  </div>
</div>

<div class="p-4 bg-gradient-to-br from-yellow-900/60 to-yellow-800/40 rounded-lg border-2 border-yellow-400">
  <div class="text-3xl mb-2 text-center">👩‍💻</div>
  <div class="font-bold text-yellow-300 text-center text-base">Priya</div>
  <div class="text-gray-400 text-center mb-3">Junior Dev · 1 year</div>
  <div class="text-gray-300 italic text-center">
    "How do I avoid asking 'dumb' questions?"
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm text-gray-400">
  Each persona has a transformation arc throughout this 8-hour journey
</div>

---

# 🔨 Exercises

<div class="mt-6">

<table class="text-xs w-full">
  <thead>
    <tr class="bg-gray-800">
      <th class="p-2 text-left">#</th>
      <th class="p-2 text-left">Exercise</th>
      <th class="p-2 text-left">Lead</th>
      <th class="p-2 text-center">Time</th>
      <th class="p-2 text-left">What You'll Do</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-900/50">
      <td class="p-2 font-bold text-orange-400">0.1</td>
      <td class="p-2">Clone FanHub &amp; Pick Your Stack</td>
      <td class="p-2">All ⭐</td>
      <td class="p-2 text-center">10 min</td>
      <td class="p-2 text-gray-400">Clone <span class="font-mono text-orange-300">MSBart2/FanHub</span>, pick your language flavor, get the app running locally</td>
    </tr>
    <tr class="bg-gray-900/30">
      <td class="p-2 font-bold text-orange-400">0.2</td>
      <td class="p-2">Experience "The Struggle"</td>
      <td class="p-2">All ⭐</td>
      <td class="p-2 text-center">15 min</td>
      <td class="p-2 text-gray-400">Build with unconfigured Copilot—feel the pain</td>
    </tr>
    <tr class="bg-gray-900/50">
      <td class="p-2 font-bold text-orange-400">0.3</td>
      <td class="p-2">Master Context Variables</td>
      <td class="p-2">All ⭐</td>
      <td class="p-2 text-center">10 min</td>
      <td class="p-2 text-gray-400">Learn #file, @workspace, #codebase, #fetch, images</td>
    </tr>
  </tbody>
</table>

<div class="mt-6 p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
  <div class="font-bold text-yellow-400 mb-2">💡 Exercise 0.2 is Critical</div>
  <div class="text-gray-300 text-sm">
    You <strong>must</strong> experience frustration with generic Copilot suggestions before Module 1.
    This "before" state makes the transformation meaningful.
  </div>
</div>

</div>

---
layout: two-cols
---

# ❌ The "Before"

<div class="mt-6 space-y-3">

<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-red-400 mb-2">What You'll Experience</div>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>❌ Generic suggestions</li>
    <li>❌ Wrong architectural patterns</li>
    <li>❌ Show-generic content</li>
    <li>❌ Inconsistent styles</li>
    <li>❌ Multiple failed attempts</li>
  </ul>
</div>

<div class="p-4 bg-gray-800 rounded-lg">
  <div class="font-bold text-gray-400 mb-2 text-sm">💭 Team Reactions</div>
  <div class="text-xs text-gray-400 space-y-2">
    <div><strong>Marcus:</strong> "Fighting with autocomplete..."</div>
    <div><strong>Priya:</strong> "Am I using it wrong?"</div>
    <div><strong>Sarah:</strong> "Generic garbage."</div>
    <div><strong>David:</strong> "AI doesn't know our patterns."</div>
  </div>
</div>

</div>

::right::

# ✨ The Promise

<div class="ml-4 mt-6 space-y-3">

<div class="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
  <div class="font-bold text-green-400 mb-2">After Configuration</div>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>✅ Context-aware suggestions</li>
    <li>✅ Follows your architecture</li>
    <li>✅ Show-specific content</li>
    <li>✅ Consistent patterns</li>
    <li>✅ First-try success</li>
  </ul>
</div>

<div class="p-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
  <div class="font-bold text-white text-base mb-2">The Transformation</div>
  <div class="text-blue-100 text-sm">
    From frustration to flow.<br/>
    From generic to domain-specific.<br/>
    From guessing to understanding.
  </div>
</div>

</div>

---
layout: center
---

# 📊 Success Metrics

<div class="max-w-4xl mx-auto mt-6">

<div class="text-center mb-6 text-gray-400">
  By the end of Module 0, you'll have...
</div>

<div class="grid grid-cols-2 gap-6">

<div class="space-y-3">
  <div class="p-4 bg-blue-900/40 rounded-lg border-l-4 border-blue-400">
    <div class="flex items-center gap-3">
      <div class="text-2xl">🎯</div>
      <div>
        <div class="font-bold text-blue-300">Environment Ready</div>
        <div class="text-xs text-gray-400 mt-1">FanHub running locally</div>
      </div>
    </div>
  </div>

  <div class="p-4 bg-green-900/40 rounded-lg border-l-4 border-green-400">
    <div class="flex items-center gap-3">
      <div class="text-2xl">📺</div>
      <div>
        <div class="font-bold text-green-300">Show Selected</div>
        <div class="text-xs text-gray-400 mt-1">Your fan site theme chosen</div>
      </div>
    </div>
  </div>
</div>

<div class="space-y-3">
  <div class="p-4 bg-purple-900/40 rounded-lg border-l-4 border-purple-400">
    <div class="flex items-center gap-3">
      <div class="text-2xl">😤</div>
      <div>
        <div class="font-bold text-purple-300">Frustration Felt</div>
        <div class="text-xs text-gray-400 mt-1">Experienced generic AI struggles</div>
      </div>
    </div>
  </div>

  <div class="p-4 bg-orange-900/40 rounded-lg border-l-4 border-orange-400">
    <div class="flex items-center gap-3">
      <div class="text-2xl">🧠</div>
      <div>
        <div class="font-bold text-orange-300">Mindset Shifted</div>
        <div class="text-xs text-gray-400 mt-1">5 principles internalized</div>
      </div>
    </div>
  </div>
</div>

</div>

<div class="mt-8 p-4 bg-gray-800 rounded-lg text-center">
  <div class="text-sm text-gray-300">
    Ready to see everything change in <strong class="text-blue-400">Module 1</strong>
  </div>
</div>

</div>

---
layout: center
---

# 🔗 The Compounding Effect

<div class="max-w-3xl mx-auto mt-8">

<div class="p-6 bg-gradient-to-r from-orange-900/50 to-purple-900/50 rounded-lg border-2 border-orange-500/60">
  <div class="text-center mb-4 text-xl font-bold text-white">
    Each module builds on the previous
  </div>
  <div class="text-sm text-gray-300 space-y-2">
    <div>📚 <strong>Module 1:</strong> Repository Instructions → Project-wide context</div>
    <div>📋 <strong>Module 2:</strong> Custom Instructions → File-specific rules</div>
    <div>⚡ <strong>Module 3:</strong> Prompts → Reusable task templates</div>
    <div>🤖 <strong>Module 4:</strong> Agents → Specialist personas</div>
    <div>🎓 <strong>Module 5:</strong> Skills → Domain expertise</div>
  </div>
</div>

<div class="mt-8 text-center text-gray-400 text-sm italic">
  By Module 9, all five customizations work together—that's when the magic happens
</div>

</div>

---
layout: center
---

# ➡️ Next Steps

<div class="max-w-3xl mx-auto mt-8 space-y-6">

<div class="p-6 bg-gradient-to-r from-orange-600 to-red-700 rounded-xl shadow-lg shadow-orange-500/20 text-center">
  <div class="text-2xl font-bold text-white mb-2">
    Module 1: Repository Instructions
  </div>
  <div class="text-orange-100">
    Watch Marcus show how configuration changes everything
  </div>
</div>

<div class="grid grid-cols-3 gap-4 text-sm">
  <div class="p-4 bg-gray-800 rounded-lg text-center">
    <div class="text-2xl mb-2">⏰</div>
    <div class="font-bold text-gray-300">10:00 AM</div>
    <div class="text-xs text-gray-500 mt-1">Monday continues</div>
  </div>
  <div class="p-4 bg-gray-800 rounded-lg text-center">
    <div class="text-2xl mb-2">📚</div>
    <div class="font-bold text-gray-300">First Configuration</div>
    <div class="text-xs text-gray-500 mt-1">copilot-instructions.md</div>
  </div>
  <div class="p-4 bg-gray-800 rounded-lg text-center">
    <div class="text-2xl mb-2">✨</div>
    <div class="font-bold text-gray-300">Everything Changes</div>
    <div class="text-xs text-gray-500 mt-1">Same code, better AI</div>
  </div>
</div>

<div class="mt-6 p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500 text-center">
  <div class="text-yellow-400 font-bold mb-2">⚠️ Don't Skip Exercise 0.2</div>
  <div class="text-gray-300 text-sm">
    The transformation only matters if you experience the problem first
  </div>
</div>

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
      4 exercises · ~40 minutes · Everyone leads
    </span>
  </div>
  <div class="relative z-10 grid grid-cols-4 gap-3 max-w-3xl w-full px-8">
    <div class="p-3 bg-orange-900/30 rounded-lg border border-orange-500/40 text-center text-sm">
      <div class="text-orange-300 font-bold">0.1</div>
      <div class="text-gray-400 text-xs mt-1">Clone FanHub</div>
    </div>
    <div class="p-3 bg-red-900/30 rounded-lg border border-red-500/40 text-center text-sm">
      <div class="text-red-300 font-bold">0.2</div>
      <div class="text-gray-400 text-xs mt-1">The Struggle</div>
    </div>
    <div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/40 text-center text-sm">
      <div class="text-purple-300 font-bold">0.3</div>
      <div class="text-gray-400 text-xs mt-1">Context Fundamentals</div>
    </div>
    <div class="p-3 bg-yellow-900/30 rounded-lg border border-yellow-500/40 text-center text-sm">
      <div class="text-yellow-300 font-bold">0.4</div>
      <div class="text-gray-400 text-xs mt-1">Success Metrics</div>
    </div>
  </div>
  <div class="relative z-10 mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
  <div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>

  <!-- Header -->
  <div class="relative z-10 flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">0.1</div>
    <div>
      <div class="text-orange-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
      <h2 class="!text-2xl !font-bold text-white !m-0">Clone FanHub & Pick Your Stack</h2>
    </div>
    <div class="ml-auto flex gap-3 text-xs text-gray-400">
      <span class="px-3 py-1 bg-gray-800 rounded-full">Everyone ⭐</span>
      <span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
    </div>
  </div>

  <!-- Story -->
  <div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
    Sarah drops the challenge. Before Copilot can help, it needs a codebase. <strong class="text-white">First things first: get the repo.</strong>
  </div>

  <!-- Steps + Success in two columns -->
  <div class="relative z-10 grid grid-cols-2 gap-4">
    <div class="space-y-2">
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
      <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
        <span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
        <div class="text-xs text-gray-300"><span class="font-mono text-orange-300">git clone https://github.com/MSBart2/FanHub.git</span></div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
        <span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
        <div class="text-xs text-gray-300">Browse stack folders, pick the one that matches your background</div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
        <span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
        <div class="text-xs text-gray-300">Pick your show — 📺 The Office · 🔦 Stranger Things · 🧪 Breaking Bad · 🛡️ Mandalorian</div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
        <span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
        <div class="text-xs text-gray-300">Install deps, start the dev server, confirm the starter UI loads</div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
        <span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
        <div class="text-xs text-gray-300">Open in VS Code — confirm GitHub Copilot is active in the status bar</div>
      </div>
    </div>
    <div class="space-y-3">
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
      <div class="space-y-2 text-xs text-gray-300">
        <div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Repo cloned successfully</div>
        <div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Language flavor chosen</div>
        <div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> App running locally</div>
        <div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> VS Code + Copilot active</div>
      </div>
      <div class="mt-4 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30 text-xs text-gray-300 italic">
        💭 <strong class="text-orange-300">Priya:</strong> "I don't need to know the whole codebase — just enough to start asking good questions."
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>

  <!-- Header -->
  <div class="relative z-10 flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 flex-shrink-0">0.2</div>
    <div>
      <div class="text-purple-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
      <h2 class="!text-2xl !font-bold text-white !m-0">Experience "The Struggle"</h2>
    </div>
    <div class="ml-auto flex gap-3 text-xs text-gray-400">
      <span class="px-3 py-1 bg-gray-800 rounded-full">Everyone ⭐</span>
      <span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 15 min</span>
    </div>
  </div>

  <!-- Warning banner -->
  <div class="relative z-10 mb-5 p-4 bg-red-950/60 rounded-xl border border-red-500/40 text-sm text-red-200">
    ⚠️ <strong>This exercise is intentionally frustrating.</strong> You need to feel the "before" state to appreciate the transformation. Do not skip it.
  </div>

  <div class="relative z-10 grid grid-cols-2 gap-4">
    <div>
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
      <div class="space-y-2 text-xs">
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
          <span class="text-gray-300">Browse the FanHub code — schema, routes, components. Find the docs folder. It's empty.</span>
        </div>
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
          <span class="text-gray-300">Ask Copilot to add a character detail page — with <strong>no</strong> instructions or context files</span>
        </div>
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
          <span class="text-gray-300">Note every frustration: wrong patterns, generic names, inconsistent style, multiple failed attempts</span>
        </div>
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
          <span class="text-gray-300">Document 3 specific frustrations in <span class="font-mono text-purple-300">docs/struggle.md</span></span>
        </div>
      </div>
    </div>
    <div class="space-y-3">
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">❌ You'll Experience</div>
      <div class="space-y-2 text-xs text-gray-300">
        <div class="p-2 bg-red-900/20 rounded-lg border border-red-700/30">Generic suggestions that don't match your architecture</div>
        <div class="p-2 bg-red-900/20 rounded-lg border border-red-700/30">Show-generic content ("John Doe" not your character)</div>
        <div class="p-2 bg-red-900/20 rounded-lg border border-red-700/30">Inconsistent code styles (because the codebase is inconsistent)</div>
        <div class="p-2 bg-red-900/20 rounded-lg border border-red-700/30">Multiple failed attempts to get what you actually want</div>
      </div>
      <div class="mt-3 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-xs text-gray-300 italic">
        💭 <strong class="text-purple-300">Sarah:</strong> "Generic garbage. This is exactly what I expected."
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
  <div class="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent"></div>

  <!-- Header -->
  <div class="relative z-10 flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/30 flex-shrink-0">0.3</div>
    <div>
      <div class="text-red-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
      <h2 class="!text-2xl !font-bold text-white !m-0">Context Fundamentals</h2>
    </div>
    <div class="ml-auto flex gap-3 text-xs text-gray-400">
      <span class="px-3 py-1 bg-gray-800 rounded-full">Everyone ⭐</span>
      <span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
    </div>
  </div>

  <!-- Story -->
  <div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-red-400 text-sm text-gray-300">
    Marcus asks Copilot a basic question. It responds with a generic answer because it cannot see the project file he actually means. <strong class="text-white">Context is everything.</strong>
  </div>

  <!-- 5 mechanisms + success -->
  <div class="relative z-10 grid grid-cols-2 gap-4">
    <div>
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Try Each Mechanism</div>
      <div class="space-y-2 text-xs">
        <div class="p-2.5 bg-gray-900/40 rounded-lg flex items-start gap-2">
          <span class="font-mono text-red-300 flex-shrink-0">#file</span>
          <span class="text-gray-400">Known files — <span class="font-mono text-gray-500">Explain how this project is structured. #file:README.md</span></span>
        </div>
        <div class="p-2.5 bg-gray-900/40 rounded-lg flex items-start gap-2">
          <span class="font-mono text-red-300 flex-shrink-0">@workspace</span>
          <span class="text-gray-400">Project overview — <span class="font-mono text-gray-500">How is this application organized?</span></span>
        </div>
        <div class="p-2.5 bg-gray-900/40 rounded-lg flex items-start gap-2">
          <span class="font-mono text-red-300 flex-shrink-0">#codebase</span>
          <span class="text-gray-400">Semantic search — <span class="font-mono text-gray-500">Where does this project handle authentication?</span></span>
        </div>
        <div class="p-2.5 bg-gray-900/40 rounded-lg flex items-start gap-2">
          <span class="font-mono text-red-300 flex-shrink-0">#fetch</span>
          <span class="text-gray-400">Live external docs — pull in URLs on demand</span>
        </div>
        <div class="p-2.5 bg-gray-900/40 rounded-lg flex items-start gap-2">
          <span class="text-red-300 flex-shrink-0">🖼️ Image</span>
          <span class="text-gray-400">Drag screenshot or mockup into chat</span>
        </div>
      </div>
    </div>
    <div class="space-y-3">
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">✅ Success Criteria</div>
      <div class="space-y-2 text-xs text-gray-300">
        <div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Tried at least 3 of the 5 mechanisms</div>
        <div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Noticed difference in response quality</div>
        <div class="flex items-center gap-2 p-2 bg-green-900/20 rounded-lg border border-green-700/30"><span class="text-green-400">☐</span> Ready to use context throughout the workshop</div>
      </div>
      <div class="mt-4 p-3 bg-red-900/30 rounded-lg border border-red-500/30 text-xs text-gray-300 italic">
        💭 <strong class="text-red-300">Marcus:</strong> "This is like giving directions. 'Go there' is useless. 'Go to 123 Main St' gets results."
      </div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-6">
  <div class="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-transparent"></div>

  <!-- Header -->
  <div class="relative z-10 flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-yellow-500/30 flex-shrink-0">0.4</div>
    <div>
      <div class="text-yellow-300 text-xs font-semibold tracking-widest uppercase">Exercise</div>
      <h2 class="!text-2xl !font-bold text-white !m-0">Set Your Success Metrics</h2>
    </div>
    <div class="ml-auto flex gap-3 text-xs text-gray-400">
      <span class="px-3 py-1 bg-gray-800 rounded-full">Everyone ⭐</span>
      <span class="px-3 py-1 bg-gray-800 rounded-full">⏱ 10 min</span>
    </div>
  </div>

  <!-- Story -->
  <div class="relative z-10 mb-5 p-4 bg-gray-900/60 rounded-xl border-l-4 border-yellow-400 text-sm text-gray-300">
    David wonders: "If AI writes code, what makes me valuable?" Then he realizes — juniors with AI write syntax. <strong class="text-white">He writes solutions.</strong>
  </div>

  <div class="relative z-10 grid grid-cols-2 gap-4">
    <div>
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
      <div class="space-y-2 text-xs">
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-yellow-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
          <span class="text-gray-300">Identify which persona you resonate with — Sarah, Marcus, David, Elena, or Rafael</span>
        </div>
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-yellow-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
          <span class="text-gray-300">Reflect on your old metrics vs. new metrics (typing speed → design thinking)</span>
        </div>
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-yellow-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
          <span class="text-gray-300">Create <span class="font-mono text-yellow-300">docs/my-success-metrics.md</span> with your personal goals</span>
        </div>
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-yellow-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
          <span class="text-gray-300">(Optional) Ask Copilot to suggest measurement strategies based on your goals</span>
        </div>
      </div>
    </div>
    <div class="space-y-3">
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📊 Old → New Metrics</div>
      <div class="space-y-1.5 text-xs">
        <div class="grid grid-cols-2 gap-2">
          <div class="p-2 bg-red-900/20 rounded text-red-300">Lines of code / day</div>
          <div class="p-2 bg-green-900/20 rounded text-green-300">Features shipped / week</div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="p-2 bg-red-900/20 rounded text-red-300">Memorized API signatures</div>
          <div class="p-2 bg-green-900/20 rounded text-green-300">Clarity of intent in prompts</div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="p-2 bg-red-900/20 rounded text-red-300">Being the only expert</div>
          <div class="p-2 bg-green-900/20 rounded text-green-300">Knowledge scaled to the team</div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="p-2 bg-red-900/20 rounded text-red-300">Fast typing</div>
          <div class="p-2 bg-green-900/20 rounded text-green-300">Fast design thinking</div>
        </div>
      </div>
      <div class="mt-2 p-3 bg-yellow-900/30 rounded-lg border border-yellow-500/30 text-xs text-gray-300 italic">
        💭 <strong class="text-yellow-300">David:</strong> "My 20 years of experience isn't obsolete — it's the quality filter."
      </div>
    </div>
  </div>
</div>

---
class: text-center
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>

  <!-- Radial glow -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/15 via-red-500/10 to-purple-500/15 rounded-full blur-3xl"></div>

  <!-- Logo -->
  <div class="relative z-10 mb-6">
    <div class="absolute inset-0 blur-2xl opacity-50">
      <img src="./sdp-logo.png" class="w-48 mx-auto" alt="" />
    </div>
    <img src="./sdp-logo.png" class="w-48 mx-auto relative" alt="SDP Logo" />
  </div>

  <!-- Headline -->
  <h1 class="!text-5xl !font-bold !mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent relative z-10">
    The 8-Hour Challenge Begins
  </h1>

  <!-- Pill subtitle -->
  <div class="relative z-10 mb-8">
    <span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-orange-500/25">
      🚀 Module 0: Orientation — Complete
    </span>
  </div>

  <!-- 3-column action cards -->
  <div class="relative z-10 grid grid-cols-3 gap-4 max-w-3xl w-full px-8 mb-8">
    <div class="p-4 bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30 text-center">
      <div class="text-2xl mb-2">📺</div>
      <div class="text-orange-300 font-bold text-sm">Pick Your Show</div>
      <div class="text-gray-400 text-xs mt-1">Choose your fan hub theme</div>
    </div>
    <div class="p-4 bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30 text-center">
      <div class="text-2xl mb-2">😤</div>
      <div class="text-red-300 font-bold text-sm">Feel the Struggle</div>
      <div class="text-gray-400 text-xs mt-1">Exercise 0.2 — don't skip it</div>
    </div>
    <div class="p-4 bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30 text-center">
      <div class="text-2xl mb-2">✨</div>
      <div class="text-purple-300 font-bold text-sm">Then Transform</div>
      <div class="text-gray-400 text-xs mt-1">Module 1 changes everything</div>
    </div>
  </div>

  <!-- Decorative line -->
  <div class="relative z-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
</div>
