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
updated: 2026-03-25
---

<!-- SLIDE: Title -->
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

<!-- SLIDE: 🛠️ Before We Start -->
<div class="h-full flex flex-col justify-start px-10 pt-6 pb-2 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-gray-900/40 to-blue-900/20"></div>
<div class="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛠️ Before We Start</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-orange-300 uppercase tracking-wider mb-2 text-xs">What you'll need</div>
<div class="space-y-1">
<div class="flex items-start gap-2.5 p-2 rounded-lg bg-gray-900/50 border border-orange-500/20">
<span class="text-base mt-0.5">🐙</span>
<div>
<div class="text-xs font-semibold text-white">GitHub account with Copilot access</div>
<div class="text-xs text-gray-400">Individual, Business, or Enterprise — any tier works</div>
</div>
</div>
<div class="flex items-start gap-2.5 p-2 rounded-lg bg-gray-900/50 border border-blue-500/20">
<span class="text-base mt-0.5">💻</span>
<div>
<div class="text-xs font-semibold text-white">VS Code + GitHub Copilot extension</div>
<div class="text-xs text-gray-400">Enable agent mode in settings if not already on</div>
</div>
</div>
<div class="flex items-start gap-2.5 p-2 rounded-lg bg-gray-900/50 border border-green-500/20">
<span class="text-base mt-0.5">📦</span>
<div>
<div class="text-xs font-semibold text-white">Git + local stack (node/dotnet/java/go)</div>
<div class="text-xs text-gray-400">For running the FanHub starter app locally</div>
</div>
</div>
<div class="flex items-start gap-2.5 p-2 rounded-lg bg-gray-900/50 border border-purple-500/20">
<span class="text-base mt-0.5">🔗</span>
<div>
<div class="text-xs font-semibold text-white">FanHub starter repo cloned</div>
<div class="text-xs text-gray-400">Link in the Reference Material slide at the end</div>
</div>
</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-blue-300 uppercase tracking-wider mb-2 text-xs">What we'll cover</div>
<div class="space-y-1">
<div class="flex items-center gap-2.5 p-2 rounded-lg bg-gray-900/40 border border-white/10">
<span class="text-xs font-mono text-orange-400 w-5 shrink-0">00</span>
<span class="text-xs text-gray-300">Orientation — the challenge, the team, the mindset shift</span>
</div>
<div class="flex items-center gap-2.5 p-2 rounded-lg bg-gray-900/40 border border-white/10">
<span class="text-xs font-mono text-orange-400 w-5 shrink-0">01</span>
<span class="text-xs text-gray-300">Instructions — teaching Copilot your repo's conventions</span>
</div>
<div class="flex items-center gap-2.5 p-2 rounded-lg bg-gray-900/40 border border-white/10">
<span class="text-xs font-mono text-orange-400 w-5 shrink-0">02</span>
<span class="text-xs text-gray-300">Agent Plan Mode — structured thinking before doing</span>
</div>
<div class="flex items-center gap-2.5 p-2 rounded-lg bg-gray-900/40 border border-white/10">
<span class="text-xs font-mono text-orange-400 w-5 shrink-0">03</span>
<span class="text-xs text-gray-300">Custom Prompts — turning repeatable work into reusable assets</span>
</div>
<div class="flex items-center gap-2.5 p-2 rounded-lg bg-gray-900/40 border border-white/10">
<span class="text-xs font-mono text-orange-400 w-5 shrink-0">04</span>
<span class="text-xs text-gray-300">Agent Skills — encoding domain knowledge Copilot can load</span>
</div>
<div class="flex items-center gap-2.5 p-2 rounded-lg bg-gray-900/40 border border-white/10">
<span class="text-xs font-mono text-orange-400 w-5 shrink-0">05</span>
<span class="text-xs text-gray-300">MCP Servers — connecting agents to real tools and data</span>
</div>
<div class="flex items-center gap-2.5 p-2 rounded-lg bg-gray-900/40 border border-white/10">
<span class="text-xs font-mono text-orange-400 w-5 shrink-0">06</span>
<span class="text-xs text-gray-300">Custom Agents — pulling it all together autonomously</span>
</div>
</div>
</div>
</div>
<div class="relative z-10 mt-2 grid grid-cols-4 gap-3">
<div class="p-1.5 rounded-lg bg-gray-900/50 border border-white/10 text-center">
<div class="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Difficulty</div>
<div class="text-lg">⭐⭐⭐</div>
<div class="text-xs text-gray-500">Moderate</div>
</div>
<div class="p-1.5 rounded-lg bg-gray-900/50 border border-white/10 text-center">
<div class="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Hands-on</div>
<div class="text-lg">⭐⭐⭐⭐</div>
<div class="text-xs text-gray-500">Build as you learn</div>
</div>
<div class="p-1.5 rounded-lg bg-gray-900/50 border border-white/10 text-center">
<div class="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Payoff</div>
<div class="text-lg">⭐⭐⭐⭐⭐</div>
<div class="text-xs text-gray-500">Worth every hour</div>
</div>
<div class="p-1.5 rounded-lg bg-gray-900/50 border border-orange-500/30 text-center">
<div class="text-[10px] text-orange-300 mb-0.5 uppercase tracking-wider">Relevance</div>
<div class="text-lg">⭐⭐⭐⭐⭐</div>
<div class="text-xs text-orange-400/70">If you use Copilot today</div>
</div>
</div>
</div>


---

<!-- SLIDE: Meet The Team -->
<div class="h-full flex flex-col justify-start px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">👥 Meet The Team</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10">
<div class="grid grid-cols-3 gap-3 mt-2 text-xs">
<div class="p-3 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-lg border-2 border-blue-400">
  <div class="text-3xl mb-1 text-center">👩‍🦰</div>
  <div class="font-bold text-blue-300 text-center text-base">Sarah</div>
  <div class="text-gray-400 text-center text-[10px] mb-1">Senior Dev · 15 years</div>
  <div class="text-blue-400/70 text-center text-[10px] italic mb-2">— drily skeptical —</div>
  <div class="text-gray-300 italic text-center">"I've outlasted three 'revolutionary' tools this decade. I'll believe it when my PR review time drops."</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/60 to-green-800/40 rounded-lg border-2 border-green-400">
  <div class="text-3xl mb-1 text-center">🔧</div>
  <div class="font-bold text-green-300 text-center text-base">Marcus</div>
  <div class="text-gray-400 text-center text-[10px] mb-1">DevOps Dev · 5 years</div>
  <div class="text-green-400/70 text-center text-[10px] italic mb-2">— chronically distracted —</div>
  <div class="text-gray-300 italic text-center">"Sorry — I was half-reading a Hacker News thread about this. What were you saying?"</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-lg border-2 border-purple-400">
  <div class="text-3xl mb-1 text-center">👨‍💻</div>
  <div class="font-bold text-purple-300 text-center text-base">David</div>
  <div class="text-gray-400 text-center text-[10px] mb-1">Staff Engineer · 20 years</div>
  <div class="text-purple-400/70 text-center text-[10px] italic mb-2">— pleasantly pedantic —</div>
  <div class="text-gray-300 italic text-center">"I'm not afraid of being replaced. I'm afraid of being the last person in the room who can tell good code from code that merely passes the tests."</div>
</div>
<div class="p-3 bg-gradient-to-br from-orange-900/60 to-orange-800/40 rounded-lg border-2 border-orange-400">
  <div class="text-3xl mb-1 text-center">🧪</div>
  <div class="font-bold text-orange-300 text-center text-base">Elena</div>
  <div class="text-gray-400 text-center text-[10px] mb-1">QA Engineer · 8 years</div>
  <div class="text-orange-400/70 text-center text-[10px] italic mb-2">— professionally suspicious —</div>
  <div class="text-gray-300 italic text-center">"My job is finding what breaks. I'm going to need edge cases. Lots of them."</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/60 to-pink-800/40 rounded-lg border-2 border-pink-400">
  <div class="text-3xl mb-1 text-center">📱</div>
  <div class="font-bold text-pink-300 text-center text-base">Rafael</div>
  <div class="text-gray-400 text-center text-[10px] mb-1">Product Manager · 10 years</div>
  <div class="text-pink-400/70 text-center text-[10px] italic mb-2">— smoothly disengaged —</div>
  <div class="text-gray-300 italic text-center">"I'm already mapping this to an OKR. Can we circle back to the 'how' after?"</div>
</div>
<div class="p-3 bg-gradient-to-br from-yellow-900/60 to-yellow-800/40 rounded-lg border-2 border-yellow-400">
  <div class="text-3xl mb-1 text-center">🎓</div>
  <div class="font-bold text-yellow-300 text-center text-base">Jessica</div>
  <div class="text-gray-400 text-center text-[10px] mb-1">Junior Dev · 1 year</div>
  <div class="text-yellow-400/70 text-center text-[10px] italic mb-2">— quietly terrified —</div>
  <div class="text-gray-300 italic text-center">"I'm nodding along but internally I'm Googling half the words. Is that normal? Please say yes."</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Story -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-10 py-3">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="text-orange-300 font-bold text-lg tracking-wide">⏰ : Monday, 9:00 AM</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 mb-3 p-3 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 shadow-xl backdrop-blur-sm text-left">
<div class="text-orange-300/60 text-2xl leading-none font-serif mb-1">"</div>
<p class="text-gray-200 text-[15px] leading-snug -mt-1">
A contractor bailed halfway through a generic fan site. Pick your favorite show and turn this into your fan hub — you have until end of day, and you're all using GitHub Copilot.
</p>
<div class="text-orange-300/60 text-2xl leading-none font-serif text-right">"</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3 text-left">
<div class="p-3 rounded-xl bg-gray-900/60 border border-orange-500/30 shadow-lg">
<div class="text-xl mb-1">👩‍💼</div>
<div class="text-[15px] font-bold text-orange-300 mb-1">Sarah needs proof</div>
<div class="text-[15px] text-gray-300 leading-snug">
Fifteen years of hype cycles. She'll commit when the output speaks for itself — not before.
</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-green-500/30 shadow-lg">
<div class="text-xl mb-1">🔧</div>
<div class="text-[15px] font-bold text-green-300 mb-1">Marcus wants to ship</div>
<div class="text-[15px] text-gray-300 leading-snug">
He builds infrastructure, not apps. Today he'll use Copilot to go further than he normally could alone.
</div>
</div>
<div class="p-3 rounded-xl bg-gray-900/60 border border-blue-500/30 shadow-lg">
<div class="text-xl mb-1">👨‍💻</div>
<div class="text-[15px] font-bold text-blue-300 mb-1">David fears generic output</div>
<div class="text-[15px] text-gray-300 leading-snug">
Senior engineer, high standards. His concern: AI that doesn't know their patterns will make things worse.
</div>
</div>
</div>
<div class="relative z-10 mt-3 p-2 bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-xl border border-red-500/30 text-center">
<div class="text-white font-bold text-[15px] mb-1">The answer to all three concerns is the same: configuration.</div>
<div class="text-[13px] text-gray-300 leading-snug">Modules 1–6 show exactly how to teach Copilot your team, your codebase, and your standards.</div>
</div>
</div>

---

<!-- SLIDE: The Mission -->
<div class="h-full flex flex-col justify-start px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-purple-900/15 to-blue-900/10"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 The Mission</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10">
<div class="max-w-4xl mx-auto mt-2">
<div class="p-4 bg-gradient-to-r from-gray-800 to-slate-700 rounded-xl shadow-lg shadow-black/30 border border-white/10 text-center mb-4">
  <div class="text-xl font-bold text-white mb-1">
    Build every layer of a Copilot-native workflow — on a real, running app
  </div>
  <div class="text-gray-300 text-sm">
    Eight hours. Six modules. Skills you'll use tomorrow.
  </div>
</div>
<div class="grid grid-cols-2 gap-4 text-sm">
  <div class="p-4 bg-gray-800 rounded-lg border-l-4 border-green-500">
    <div class="font-bold text-green-400 mb-2">✅ By End of Day</div>
    <ul class="text-gray-300 space-y-1 text-xs">
      <li>✓ Copilot fully briefed on your codebase</li>
      <li>✓ App converted to your team's chosen show</li>
      <li>✓ Reusable prompt files for common tasks</li>
      <li>✓ Agent skills that validate data &amp; build features</li>
      <li>✓ Live context piped in via MCP servers</li>
      <li>✓ Custom agents that plan and execute independently</li>
    </ul>
  </div>
  <div class="p-4 bg-gray-800 rounded-lg border-l-4 border-blue-500">
    <div class="font-bold text-blue-400 mb-2">🎨 Your Choice</div>
    <div class="text-gray-300 space-y-1 text-xs">
      <div>Pick your favorite show:</div>
      <div class="mt-2">
        • 📎 The Office <br/>• 🔦 Stranger Things<br/>
        • 🧪 Breaking Bad <br/>• 🛡️ The Mandalorian<br/>
        • 🐉 Game of Thrones <br/>• 🚀 The Expanse
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 px-4 py-2 bg-orange-900/20 border border-orange-500/30 rounded-lg flex flex-col gap-1">
<span class="text-orange-300 text-sm italic">&ldquo;Wait &mdash; eight hours? I thought this was a lunch thing.&rdquo;</span>
<span class="text-orange-500 text-xs text-right">&mdash; Marcus</span>
</div>
</div>
---

<!-- SLIDE: Before We Build -->
<div class="h-full flex flex-col justify-center relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-gray-950 to-orange-950/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-orange-500/8 rounded-full blur-3xl"></div>
<div class="relative z-10 text-center mb-8">
<div class="text-xs font-semibold text-orange-400/70 uppercase tracking-widest mb-3">Before We Build Anything</div>
<h1 class="text-4xl font-bold text-white mb-3">Three ideas worth carrying<br/>into everything else today</h1>
<p class="text-gray-400 text-base max-w-xl mx-auto">The workshop will teach you <em>how</em> to use GitHub Copilot. These slides are about <em>why it works the way it does</em> &mdash; and who you&rsquo;re becoming in the process.</p>
</div>
<div class="relative z-10 grid grid-cols-3 gap-5 max-w-4xl mx-auto w-full">
<div class="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/50 border border-purple-500/25 flex flex-col gap-2">
<div class="text-2xl mb-1">🌍</div>
<div class="text-purple-300 font-bold text-sm">The Evolution Arc</div>
<div class="text-gray-400 text-xs leading-relaxed">Where developers have been, where they&rsquo;re going, and where today fits in that arc.</div>
</div>
<div class="p-5 rounded-2xl bg-gradient-to-br from-orange-900/40 to-gray-900/50 border border-orange-500/25 flex flex-col gap-2">
<div class="text-2xl mb-1">🧠</div>
<div class="text-orange-300 font-bold text-sm">The Mindset Shift</div>
<div class="text-gray-400 text-xs leading-relaxed">The single biggest change in how you think about your work &mdash; and why it unlocks everything else.</div>
</div>
<div class="p-5 rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/50 border border-blue-500/25 flex flex-col gap-2">
<div class="text-2xl mb-1">🔑</div>
<div class="text-blue-300 font-bold text-sm">The 5 Principles</div>
<div class="text-gray-400 text-xs leading-relaxed">Five patterns that show up in every module. Learn them once &mdash; they compound all day.</div>
</div>
</div>
<div class="relative z-10 mt-8 w-32 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent mx-auto"></div>
</div>
---

<!-- SLIDE: Our Evolution -->
<div class="h-full flex flex-col justify-center px-14 py-2 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-gray-950 to-orange-950/30"></div>
<div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-500/8 to-transparent rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🌍 Our Evolution</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/30 to-transparent"></div>
</div>

<div class="relative z-10 grid grid-cols-3 gap-4">

  <div class="flex flex-col rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-b from-purple-900/30 via-gray-900/50 to-gray-950/80 shadow-2xl">
    <div class="relative flex items-center justify-center py-3 bg-gradient-to-b from-purple-900/40 to-purple-900/10">
      <div class="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
      <img src="./00-orientation/images/wizard.png" class="h-20 object-contain relative z-10" alt="Syntax Wizard" style="filter: drop-shadow(0 0 12px rgba(168,85,247,0.4))" />
    </div>
    <div class="p-3 flex flex-col flex-1">
      <div class="flex items-center gap-2 mb-1.5">
        <div class="h-px flex-1 bg-purple-500/30"></div>
        <span class="text-purple-400 font-mono text-[10px] tracking-widest">1990 – 2015</span>
        <div class="h-px flex-1 bg-purple-500/30"></div>
      </div>
      <div class="text-white font-bold text-sm mb-2 text-center">Syntax Wizards</div>
      <ul class="text-xs text-gray-400 space-y-1 flex-1">
        <li class="flex items-center gap-1.5"><span class="text-purple-400">▸</span> Memorize language quirks</li>
        <li class="flex items-center gap-1.5"><span class="text-purple-400">▸</span> Clever, unreadable code</li>
        <li class="flex items-center gap-1.5"><span class="text-purple-400">▸</span> Knowledge hoarding</li>
        <li class="flex items-center gap-1.5"><span class="text-purple-400">▸</span> Fast typing above all</li>
      </ul>
      <div class="mt-2 px-3 py-1.5 bg-purple-950/80 rounded-lg text-[10px] text-purple-300/80 border border-purple-800/40 text-center">
        ✗ Onboarding took months
      </div>
    </div>
  </div>

  <div class="flex flex-col rounded-2xl overflow-hidden border border-yellow-500/20 bg-gradient-to-b from-yellow-900/25 via-gray-900/50 to-gray-950/80 shadow-2xl">
    <div class="relative flex items-center justify-center py-3 bg-gradient-to-b from-yellow-900/30 to-yellow-900/10">
      <div class="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-transparent"></div>
      <img src="./00-orientation/images/cowboy.png" class="h-20 object-contain relative z-10" alt="YAML Cowboy" style="filter: drop-shadow(0 0 12px rgba(234,179,8,0.3))" />
    </div>
    <div class="p-3 flex flex-col flex-1">
      <div class="flex items-center gap-2 mb-1.5">
        <div class="h-px flex-1 bg-yellow-500/30"></div>
        <span class="text-yellow-400 font-mono text-[10px] tracking-widest">2015 – 2020</span>
        <div class="h-px flex-1 bg-yellow-500/30"></div>
      </div>
      <div class="text-white font-bold text-sm mb-2 text-center">YAML Cowboys</div>
      <ul class="text-xs text-gray-400 space-y-1 flex-1">
        <li class="flex items-center gap-1.5"><span class="text-yellow-400">▸</span> Configuration as code</li>
        <li class="flex items-center gap-1.5"><span class="text-yellow-400">▸</span> Infrastructure everywhere</li>
        <li class="flex items-center gap-1.5"><span class="text-yellow-400">▸</span> Copy-paste engineering</li>
        <li class="flex items-center gap-1.5"><span class="text-yellow-400">▸</span> Tool proliferation</li>
      </ul>
      <div class="mt-2 px-3 py-1.5 bg-yellow-950/80 rounded-lg text-[10px] text-yellow-300/80 border border-yellow-800/40 text-center">
        ✗ YAML bugs broke deploys
      </div>
    </div>
  </div>

  <div class="flex flex-col rounded-2xl overflow-hidden border border-orange-400/40 bg-gradient-to-b from-orange-900/35 via-gray-900/50 to-gray-950/80 shadow-2xl" style="box-shadow: 0 0 30px rgba(251,146,60,0.15), 0 25px 50px -12px rgba(0,0,0,0.5)">
    <div class="relative flex items-center justify-center py-3 bg-gradient-to-b from-orange-900/40 to-orange-900/10">
      <div class="absolute inset-0 bg-gradient-to-b from-orange-500/15 to-transparent"></div>
      <img src="./00-orientation/images/monk.png" class="h-20 object-contain relative z-10" alt="Markdown Whisperer" style="filter: drop-shadow(0 0 16px rgba(251,146,60,0.5))" />
    </div>
    <div class="p-3 flex flex-col flex-1">
      <div class="flex items-center gap-2 mb-1.5">
        <div class="h-px flex-1 bg-orange-400/40"></div>
        <span class="text-orange-300 font-mono text-[10px] tracking-widest">2020 – Present</span>
        <div class="h-px flex-1 bg-orange-400/40"></div>
      </div>
      <div class="text-white font-bold text-sm mb-2 text-center">Markdown Whisperers</div>
      <ul class="text-xs text-gray-300 space-y-1 flex-1">
        <li class="flex items-center gap-1.5"><span class="text-green-400">✓</span> <strong class="text-white">Clear intent</strong> over syntax</li>
        <li class="flex items-center gap-1.5"><span class="text-green-400">✓</span> <strong class="text-white">Understandable</strong> over clever</li>
        <li class="flex items-center gap-1.5"><span class="text-green-400">✓</span> <strong class="text-white">Scaled knowledge</strong> via docs</li>
        <li class="flex items-center gap-1.5"><span class="text-green-400">✓</span> <strong class="text-white">Fast thinking</strong> over fast typing</li>
      </ul>
      <div class="mt-2 px-3 py-1.5 bg-gradient-to-r from-orange-950/80 to-green-950/60 rounded-lg text-[10px] text-orange-200 font-semibold border border-orange-600/30 text-center">
        ✓ Copilot handles syntax — you handle judgment
      </div>
    </div>
  </div>

</div>

<div class="relative z-10 mt-3 p-2 bg-gradient-to-r from-orange-900/25 via-purple-900/20 to-orange-900/25 rounded-xl border border-orange-500/15 text-center text-xs text-gray-300">
  💡 <strong class="text-orange-300">Markdown is the medium</strong> — the best teams will be those with the best prose, not the most elegant syntax
</div>
</div>

---

<!-- SLIDE: Mindset Shift -->
<div class="h-full flex flex-col justify-start px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-red-950/30 via-gray-950 to-green-950/30"></div>
<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-b from-purple-500/8 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 The Mindset Shift</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/30 to-transparent"></div>
</div>
<div class="relative z-10 py-3 px-5 bg-gradient-to-r from-gray-900/80 to-orange-900/20 rounded-xl border border-orange-500/20 text-center mb-5">
<span class="text-white font-bold text-lg">Three ways yesterday's work means something different now.</span><br/>
<span class="text-gray-300 text-sm">None of them require starting over.</span>
</div>
<div class="relative z-10 grid grid-cols-3 gap-4 flex-1">
<div class="flex flex-col gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-gray-900/50 border border-purple-500/20">
<div class="text-purple-300 font-bold text-sm">Memory &rarr; Judgment</div>
<div class="text-xs text-gray-400 leading-relaxed">Knowing the right API used to be your edge.</div>
<div class="text-xs text-gray-200 leading-relaxed border-t border-purple-500/20 pt-2">Knowing when Copilot&rsquo;s answer is <em>wrong</em> is your edge now. That takes everything you&rsquo;ve built.</div>
</div>
<div class="flex flex-col gap-3 p-4 rounded-xl bg-gradient-to-br from-orange-900/30 to-gray-900/50 border border-orange-500/20">
<div class="text-orange-300 font-bold text-sm">Typing Speed &rarr; Thinking Speed</div>
<div class="text-xs text-gray-400 leading-relaxed">The bottleneck used to be your hands.</div>
<div class="text-xs text-gray-200 leading-relaxed border-t border-orange-500/20 pt-2">The bottleneck moved upstream. The constraint now is how fast you can think clearly &mdash; and how precisely you can say what you mean.</div>
</div>
<div class="flex flex-col gap-3 p-4 rounded-xl bg-gradient-to-br from-green-900/30 to-gray-900/50 border border-green-500/20">
<div class="text-green-300 font-bold text-sm">Knowledge Hoarding &rarr; Knowledge Scaling</div>
<div class="text-xs text-gray-400 leading-relaxed">Your expertise used to live in your head.</div>
<div class="text-xs text-gray-200 leading-relaxed border-t border-green-500/20 pt-2">Now it lives in your docs &mdash; and Copilot runs on it. Writing things down stopped being overhead. It became leverage.</div>
</div>
</div>
<div class="relative z-10 mt-4 px-4 py-2 bg-amber-900/20 border border-amber-500/30 rounded-lg flex flex-col gap-1">
<span class="text-amber-300 text-sm italic">&ldquo;I thought being junior meant I had to prove I knew as much as David. Apparently I just have to think clearly and write things down. I can do that.&rdquo;</span>
<span class="text-amber-500 text-xs text-right">&mdash; Jessica</span>
</div>
</div>
---

<!-- SLIDE: Principle 1 — Clarity Over Cleverness -->
<div class="h-full flex flex-col justify-center px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔑 The 5 Principles</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span></div>
<span class="text-white/40 text-xs ml-1">1 of 5</span>
</div>
<div class="relative z-10 mb-4">
<div class="text-xl font-bold text-white mb-1">🔍 Clarity Over Cleverness</div>
</div>
<div class="relative z-10 mb-4 p-3 bg-gray-900/50 rounded-xl border border-white/10 text-sm text-gray-300">
Clear thinking enables effective Copilot collaboration. If I  can't explain it plainly to a human, I can't prompt it effectively to AI. The quality of the output starts with the quality of my thinking.
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-gradient-to-br from-red-950/60 to-gray-900/80 border border-red-500/20">
<div class="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">↩ Move Away From</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• "Elegant" complexity for its own sake</div>
<div>• Obscure variable names and patterns</div>
<div>• Code written to impress, not communicate</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-950/60 to-gray-900/80 border border-green-500/20">
<div class="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">→ Move Toward</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Simple, named, readable prompts and code</div>
<div>• Explaining your intent before the solution</div>
<div>• Asking "can I explain this plainly?"</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-amber-950/60 to-gray-900/80 border border-amber-500/20">
<div class="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">⚡ Move Against</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• The instinct to show technical depth</div>
<div>• One-liners that "work" but can't be read</div>
<div>• Complexity as a proxy for competence</div>
</div>
</div>
</div>
<div class="relative z-10 mt-4 px-4 py-2 bg-amber-900/20 border border-amber-500/30 rounded-lg flex flex-col gap-1">
<span class="text-amber-300 text-sm italic">&ldquo;I thought being junior meant I had to prove I knew as much as David. Apparently I just have to think clearly and write things down. I can do that.&rdquo;</span>
<span class="text-amber-500 text-xs text-right">&mdash; Jessica</span>
</div>
</div>
---

<!-- SLIDE: Principle 2 — Intent Over Implementation -->
<div class="h-full flex flex-col justify-center px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔑 The 5 Principles</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span></div>
<span class="text-white/40 text-xs ml-1">2 of 5</span>
</div>
<div class="relative z-10 mb-4">
<div class="text-xl font-bold text-white mb-1">🎯 Intent Over Implementation</div>
</div>
<div class="relative z-10 mb-4 p-3 bg-gray-900/50 rounded-xl border border-white/10 text-sm text-gray-300">
Describe WHAT outcome I need, not HOW to build it. My expertise is knowing what to build and what constraints matter — not prescribing the architecture without understand the problem.
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-gradient-to-br from-red-950/60 to-gray-900/80 border border-red-500/20">
<div class="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">↩ Move Away From</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Describing implementation steps in prompts</div>
<div>• Prescribing the solution before the goal</div>
<div>• Micromanaging the AI's approach</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-950/60 to-gray-900/80 border border-green-500/20">
<div class="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">→ Move Toward</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Goals, constraints, and success criteria</div>
<div>• "Here's what done looks like" framing</div>
<div>• Letting Copilot choose the path to your goal</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-amber-950/60 to-gray-900/80 border border-amber-500/20">
<div class="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">⚡ Move Against</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Prescribing architecture before the problem</div>
<div>• Over-specifying when the goal is clear</div>
<div>• Treating Copilot like a compiler, not a collaborator</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 px-4 py-2 bg-cyan-900/20 border border-cyan-500/30 rounded-lg flex flex-col gap-1">
<span class="text-cyan-300 text-sm italic">&ldquo;I&rsquo;ve been asking engineers to lead with outcomes for a decade. They kept giving me architecture diagrams. Now there&rsquo;s a principle about it. I feel vindicated and also tired.&rdquo;</span>
<span class="text-cyan-500 text-xs text-right">&mdash; Rafael</span>
</div>
</div>
---

<!-- SLIDE: Principle 3 — Documentation as Leverage -->
<div class="h-full flex flex-col justify-center px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔑 The 5 Principles</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span></div>
<span class="text-white/40 text-xs ml-1">3 of 5</span>
</div>
<div class="relative z-10 mb-4">
<div class="text-xl font-bold text-white mb-1">📚 Documentation as Leverage</div>
</div>
<div class="relative z-10 mb-4 p-3 bg-gray-900/50 rounded-xl border border-white/10 text-sm text-gray-300">
Write once, benefit infinitely. Good documentation sharpens Copilot's output and scales my team's knowledge simultaneously. Every doc I write is a force multiplier — for humans and for Copilot.
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-gradient-to-br from-red-950/60 to-gray-900/80 border border-red-500/20">
<div class="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">↩ Move Away From</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• "I'll document it later"</div>
<div>• Tribal knowledge that lives in Slack</div>
<div>• Docs that are out of date by default</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-950/60 to-gray-900/80 border border-green-500/20">
<div class="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">→ Move Toward</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Docs as a first-class workflow artifact</div>
<div>• Architecture, decisions, and patterns in files</div>
<div>• Writing for Copilot as well as teammates</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-amber-950/60 to-gray-900/80 border border-amber-500/20">
<div class="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">⚡ Move Against</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Knowledge that only lives in someone's head</div>
<div>• Teams that can't onboard without the expert</div>
<div>• Context that disappears when people leave</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 px-4 py-2 bg-orange-900/20 border border-orange-500/30 rounded-lg flex flex-col gap-1">
<span class="text-orange-300 text-sm italic">&ldquo;Every doc I don&rsquo;t write becomes a Slack thread I answer seventeen times. I just never did the math on that before.&rdquo;</span>
<span class="text-orange-500 text-xs text-right">&mdash; Marcus</span>
</div>
</div>
---

<!-- SLIDE: Principle 4 — Dialogue, Not Delegation -->
<div class="h-full flex flex-col justify-center px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔑 The 5 Principles</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span></div>
<span class="text-white/40 text-xs ml-1">4 of 5</span>
</div>
<div class="relative z-10 mb-4">
<div class="text-xl font-bold text-white mb-1">🔄 Dialogue, Not Delegation</div>
</div>
<div class="relative z-10 mb-4 p-3 bg-gray-900/50 rounded-xl border border-white/10 text-sm text-gray-300">
Copilot works best as a conversation partner, not a one-shot task runner. Start rough, iterate, refine. The instinct to write one perfect prompt is understandable — but good results come from dialogue, not dictation.
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-gradient-to-br from-red-950/60 to-gray-900/80 border border-red-500/20">
<div class="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">↩ Move Away From</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Writing one massive prompt and waiting</div>
<div>• Giving up when the first result is rough</div>
<div>• Treating every session as a fresh start</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-950/60 to-gray-900/80 border border-green-500/20">
<div class="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">→ Move Toward</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Start rough, refine in conversation</div>
<div>• Build shared context across a session</div>
<div>• Talk to Copilot as a coworker, not a tool</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-amber-950/60 to-gray-900/80 border border-amber-500/20">
<div class="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">⚡ Move Against</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Treating Copilot as a one-shot task executor</div>
<div>• Blaming the model when iteration would fix it</div>
<div>• Expecting perfection without conversation</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 px-4 py-2 bg-amber-900/20 border border-amber-500/30 rounded-lg flex flex-col gap-1">
<span class="text-amber-300 text-sm italic">&ldquo;I kept rewriting the prompt from scratch every time it was wrong. I thought asking again meant I didn&rsquo;t know what I was doing. Turns out that&rsquo;s just the method.&rdquo;</span>
<span class="text-amber-500 text-xs text-right">&mdash; Jessica</span>
</div>
</div>
---

<!-- SLIDE: Principle 5 — Validate, Don't Automate -->
<div class="h-full flex flex-col justify-center px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔑 The 5 Principles</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
<div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-white/20"></span><span class="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></span></div>
<span class="text-white/40 text-xs ml-1">5 of 5</span>
</div>
<div class="relative z-10 mb-4">
<div class="text-xl font-bold text-white mb-1">⚖️ Validate, Don't Automate</div>
</div>
<div class="relative z-10 mb-4 p-3 bg-gray-900/50 rounded-xl border border-white/10 text-sm text-gray-300">
Copilot proposes; I decide. My expertise catches what Copilot misses. The goal is amplification, not replacement — every output is a proposal that earns its place by surviving my judgement.
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-3 rounded-xl bg-gradient-to-br from-red-950/60 to-gray-900/80 border border-red-500/20">
<div class="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">↩ Move Away From</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Accepting output without critical review</div>
<div>• Shipping Copilot-generated code unread</div>
<div>• Assuming confidence = correctness</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-green-950/60 to-gray-900/80 border border-green-500/20">
<div class="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">→ Move Toward</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Every suggestion earns its place</div>
<div>• Your domain expertise as the quality filter</div>
<div>• Review as a skill, not a bottleneck</div>
</div>
</div>
<div class="p-3 rounded-xl bg-gradient-to-br from-amber-950/60 to-gray-900/80 border border-amber-500/20">
<div class="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">⚡ Move Against</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Automation that removes human judgment</div>
<div>• Speed as a reason to skip review</div>
<div>• Delegating architectural decisions to AI</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-lg flex flex-col gap-1">
<span class="text-purple-300 text-sm italic">&ldquo;I don&rsquo;t accept output I haven&rsquo;t validated. I never have &mdash; for developers, for pipelines, or for AI. This isn&rsquo;t a special rule I invented for Copilot. It&rsquo;s just the rule.&rdquo;</span>
<span class="text-purple-500 text-xs text-right">&mdash; Elena</span>
</div>
</div>
---

<!-- SLIDE: Customization Map -->
<div class="h-full flex flex-col justify-start px-14 py-3 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🗺️ The Customization Map</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10">

<div class="mt-6">

<div class="text-center mb-6 text-gray-400 text-sm italic">
  Five ways to customize GitHub Copilot—learn when to use what
</div>

<div class="grid grid-cols-5 gap-2 text-xs">

<div class="p-3 bg-blue-900/60 rounded-lg border-2 border-blue-400 text-center">
  <div class="text-xl mb-1">📚</div>
  <div class="font-bold text-blue-300">Repo Instructions</div>
  <div class="text-gray-400 mt-2">Project README for AI</div>
  <div class="text-blue-200 mt-2 font-mono text-[10px]">copilot-instructions.md</div>
  <div class="mt-2 text-gray-500">Always on</div>
</div>

<div class="p-3 bg-green-900/60 rounded-lg border-2 border-green-400 text-center">
  <div class="text-xl mb-1">📋</div>
  <div class="font-bold text-green-300">Custom Instructions</div>
  <div class="text-gray-400 mt-2">File-specific rules</div>
  <div class="text-green-200 mt-2 font-mono text-[10px]">*.instructions.md</div>
  <div class="mt-2 text-gray-500">By file pattern</div>
</div>

<div class="p-3 bg-purple-900/60 rounded-lg border-2 border-purple-400 text-center">
  <div class="text-xl mb-1">⚡</div>
  <div class="font-bold text-purple-300">Prompts</div>
  <div class="text-gray-400 mt-2">Task template</div>
  <div class="text-purple-200 mt-2 font-mono text-[10px]">*.prompt.md</div>
  <div class="mt-2 text-gray-500">When invoked</div>
</div>

<div class="p-3 bg-orange-900/60 rounded-lg border-2 border-orange-400 text-center">
  <div class="text-xl mb-1">🤖</div>
  <div class="font-bold text-orange-300">Agents</div>
  <div class="text-gray-400 mt-2">Specialist persona</div>
  <div class="text-orange-200 mt-2 font-mono text-[10px]">*.agent.md</div>
  <div class="mt-2 text-gray-500">@ mentioned</div>
</div>

<div class="p-3 bg-pink-900/60 rounded-lg border-2 border-pink-400 text-center">
  <div class="text-xl mb-1">🎓</div>
  <div class="font-bold text-pink-300">Skills</div>
  <div class="text-gray-400 mt-2">Domain expert</div>
  <div class="text-pink-200 mt-2 font-mono text-[10px]">SKILL.md</div>
  <div class="mt-2 text-gray-500">Auto-loaded</div>
</div>

</div>

<div class="mt-3 grid grid-cols-2 gap-2 text-xs">
  <div class="flex items-center gap-2 p-2 bg-gray-800/60 rounded-lg border border-gray-700/40">
    <span class="text-gray-400 italic flex-1">"I need Copilot to understand our conventions and constraints..."</span>
    <span class="px-2 py-0.5 bg-blue-700/60 text-blue-200 rounded-full font-semibold whitespace-nowrap">📚 Repo Instructions</span>
  </div>
  <div class="flex items-center gap-2 p-2 bg-gray-800/60 rounded-lg border border-gray-700/40">
    <span class="text-gray-400 italic flex-1">"My test files need different rules than my source..."</span>
    <span class="px-2 py-0.5 bg-green-700/60 text-green-200 rounded-full font-semibold whitespace-nowrap">📋 Custom Instructions</span>
  </div>
  <div class="flex items-center gap-2 p-2 bg-gray-800/60 rounded-lg border border-gray-700/40">
    <span class="text-gray-400 italic flex-1">"We do this same task every sprint..."</span>
    <span class="px-2 py-0.5 bg-purple-700/60 text-purple-200 rounded-full font-semibold whitespace-nowrap">⚡ Prompts</span>
  </div>
  <div class="flex items-center gap-2 p-2 bg-gray-800/60 rounded-lg border border-gray-700/40">
    <span class="text-gray-400 italic flex-1">"I want a reviewer that only knows our patterns..."</span>
    <span class="px-2 py-0.5 bg-orange-700/60 text-orange-200 rounded-full font-semibold whitespace-nowrap">🤖 Agents</span>
  </div>
  <div class="flex items-center gap-2 p-2 bg-gray-800/60 rounded-lg border border-gray-700/40 col-span-2">
    <span class="text-gray-400 italic flex-1">"Copilot keeps guessing at our domain model..."</span>
    <span class="px-2 py-0.5 bg-pink-700/60 text-pink-200 rounded-full font-semibold whitespace-nowrap">🎓 Skills</span>
  </div>
</div>

</div>
</div>
</div>

---

<!-- SLIDE: Exercise Roadmap -->
<div class="h-full flex flex-col justify-start px-14 py-6 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercise Roadmap</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10">

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
    Copilot without any customizations <strong>will be frustrating</strong>, no matter the model we choose. Here's our chance to feel the pain of someone who just <em>types a prompt and hopes for the best</em>. Suffering or laughing here will make the rest of the workshop make an impact.
  </div>
</div>

</div>
</div>
</div>

---

<!-- SLIDE: Before & After -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-3">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/15 via-transparent to-green-900/15"></div>
<div class="relative z-10 grid grid-cols-2 gap-8">
<div class="pr-4 border-r border-white/10">
<div class="mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-red-700/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">❌ The "Before"</span>
</div>
<div class="space-y-4 text-left">
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-400 mb-2">What You'll Experience</div>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>❌ Generic suggestions</li>
    <li>❌ Wrong architectural patterns</li>
    <li>❌ Show-generic content</li>
    <li>❌ Inconsistent styles</li>
    <li>❌ Multiple failed attempts</li>
  </ul>
</div>
<div class="p-4 bg-red-900/25 rounded-lg border border-red-500/20">
  <div class="font-bold text-red-400 mb-2">💭 Team Reactions</div>
  <div class="text-xs text-gray-400 space-y-2">
    <div><strong>Marcus:</strong> "Fighting with autocomplete..."</div>
    <div><strong>Jessica:</strong> "Am I using it wrong?"</div>
    <div><strong>Sarah:</strong> "Generic garbage."</div>
    <div><strong>David:</strong> "Copilot doesn't know our patterns."</div>
  </div>
</div>
</div>
</div>
<div class="pl-4">
<div class="mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-green-700/80 to-green-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ The Promise</span>
</div>
<div class="space-y-4 text-left">
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-green-400 mb-2">After Configuration</div>
  <ul class="text-sm text-gray-300 space-y-2">
    <li>✅ Context-aware suggestions</li>
    <li>✅ Follows your architecture</li>
    <li>✅ Show-specific content</li>
    <li>✅ Consistent patterns</li>
    <li>✅ First-try success</li>
  </ul>
</div>
<div class="p-4 bg-green-900/25 rounded-lg border border-green-500/20">
  <div class="font-bold text-white text-base mb-2">The Transformation</div>
  <div class="text-blue-100 text-sm">
    From frustration to flow.<br/>
    From generic to domain-specific.<br/>
    From guessing to understanding.
  </div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Success Metrics -->
<div class="h-full flex flex-col justify-start px-14 py-6 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/25"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Success Metrics</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10">

<div class="max-w-4xl mx-auto mt-6">

<div class="text-center mb-6 text-gray-400">
  By the end of Module 0, we'll have...
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
</div>
</div>

---

<!-- SLIDE: The Compounding Effect -->
<div class="h-full flex flex-col justify-start px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-orange-950/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔗 The Compounding Effect</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 flex flex-col justify-center">
<div class="text-center text-sm text-gray-400 italic mb-4">Each layer unlocks the next — and makes every previous layer smarter</div>
<div class="space-y-2">
  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-900/50 to-blue-900/20 rounded-lg border-l-4 border-blue-400 group">
    <span class="text-lg">📚</span>
    <div class="flex-1">
      <span class="font-bold text-blue-300 text-sm">Module 1: Instructions</span>
      <span class="text-gray-500 text-xs mx-2">→</span>
      <span class="text-gray-400 text-xs">Project-wide context &amp; standards</span>
    </div>
    <span class="text-blue-500/50 text-xs font-mono">foundation</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-900/50 to-purple-900/20 rounded-lg border-l-4 border-purple-400 ml-4">
    <span class="text-lg">🧠</span>
    <div class="flex-1">
      <span class="font-bold text-purple-300 text-sm">Module 2: Agent Plan Mode</span>
      <span class="text-gray-500 text-xs mx-2">→</span>
      <span class="text-gray-400 text-xs">Structured thinking before coding</span>
    </div>
    <span class="text-purple-500/50 text-xs font-mono">+reasoning</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-900/50 to-cyan-900/20 rounded-lg border-l-4 border-cyan-400 ml-8">
    <span class="text-lg">⚡</span>
    <div class="flex-1">
      <span class="font-bold text-cyan-300 text-sm">Module 3: Custom Prompts</span>
      <span class="text-gray-500 text-xs mx-2">→</span>
      <span class="text-gray-400 text-xs">Reusable, context-aware templates</span>
    </div>
    <span class="text-cyan-500/50 text-xs font-mono">+recall</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-green-900/50 to-green-900/20 rounded-lg border-l-4 border-green-400 ml-12">
    <span class="text-lg">🛠️</span>
    <div class="flex-1">
      <span class="font-bold text-green-300 text-sm">Module 4: Agent Skills</span>
      <span class="text-gray-500 text-xs mx-2">→</span>
      <span class="text-gray-400 text-xs">Domain-specific capabilities</span>
    </div>
    <span class="text-green-500/50 text-xs font-mono">+expertise</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-900/50 to-amber-900/20 rounded-lg border-l-4 border-amber-400 ml-16">
    <span class="text-lg">🔌</span>
    <div class="flex-1">
      <span class="font-bold text-amber-300 text-sm">Module 5: MCP Servers</span>
      <span class="text-gray-500 text-xs mx-2">→</span>
      <span class="text-gray-400 text-xs">Live data &amp; external context</span>
    </div>
    <span class="text-amber-500/50 text-xs font-mono">+livedata</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-900/60 to-red-900/40 rounded-lg border-l-4 border-orange-400 ml-20 shadow-lg shadow-orange-900/30">
    <span class="text-lg">🤖</span>
    <div class="flex-1">
      <span class="font-bold text-orange-300 text-sm">Module 6: Custom Agents</span>
      <span class="text-gray-500 text-xs mx-2">→</span>
      <span class="text-gray-400 text-xs">Specialist AI teammates</span>
    </div>
    <span class="text-orange-400/80 text-xs font-mono font-bold">✨ full power</span>
  </div>
</div>
</div>
</div>
---

<!-- SLIDE: Exercises Hero -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔨 Exercises &mdash; Orientation</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-orange-900/50 to-red-900/40 rounded-xl border border-orange-500/30 text-center mb-3 shadow-lg shadow-orange-900/20">
<div class="text-lg font-bold text-white">4 exercises &middot; ~40 minutes &middot; everyone leads</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-3 flex-1">
<div class="p-4 bg-blue-900/30 rounded-lg border border-blue-500/40 flex flex-col gap-1">
<div class="flex items-center justify-between mb-1">
<div class="text-blue-300 font-bold text-base">0.1 &mdash; Clone FanHub</div>
<span class="text-xs text-blue-400/70">Sarah ⭐</span>
</div>
<div class="text-gray-300 text-xs leading-snug">Get the app running locally. Explore the codebase before Copilot knows anything about it.</div>
<div class="mt-auto pt-2 text-xs text-gray-500 border-t border-blue-500/20">Establish your baseline &rarr; know what you&rsquo;re working with</div>
</div>
<div class="p-4 bg-amber-900/30 rounded-lg border border-amber-500/40 flex flex-col gap-1">
<div class="flex items-center justify-between mb-1">
<div class="text-amber-300 font-bold text-base">0.2 &mdash; The Struggle</div>
<span class="text-xs text-amber-400/70">Jessica ⭐</span>
</div>
<div class="text-gray-300 text-xs leading-snug">Use Copilot cold — no instructions, no context setup. Notice what it gets wrong and why.</div>
<div class="mt-auto pt-2 text-xs text-gray-500 border-t border-amber-500/20">Feel the problem before you solve it</div>
</div>
<div class="p-4 bg-purple-900/30 rounded-lg border border-purple-500/40 flex flex-col gap-1">
<div class="flex items-center justify-between mb-1">
<div class="text-purple-300 font-bold text-base">0.3 &mdash; Context Fundamentals</div>
<span class="text-xs text-purple-400/70">Elena ⭐</span>
</div>
<div class="text-gray-300 text-xs leading-snug">Explore what Copilot actually sees. Learn the difference between what you think it knows and what it knows.</div>
<div class="mt-auto pt-2 text-xs text-gray-500 border-t border-purple-500/20">Context isn&rsquo;t assumed &mdash; it&rsquo;s constructed</div>
</div>
<div class="p-4 bg-cyan-900/30 rounded-lg border border-cyan-500/40 flex flex-col gap-1">
<div class="flex items-center justify-between mb-1">
<div class="text-cyan-300 font-bold text-base">0.4 &mdash; Success Metrics</div>
<span class="text-xs text-cyan-400/70">Rafael ⭐</span>
</div>
<div class="text-gray-300 text-xs leading-snug">Define what &ldquo;better&rdquo; looks like for your team. Set a baseline you can measure against at the end of the day.</div>
<div class="mt-auto pt-2 text-xs text-cyan-500/20 border-t border-cyan-500/20">If you can&rsquo;t measure it, you can&rsquo;t know it worked</div>
</div>
</div>
<div class="relative z-10 mt-3 px-4 py-2 bg-amber-900/20 border border-amber-500/30 rounded-lg flex flex-col gap-1">
<span class="text-amber-300 text-sm italic">&ldquo;I asked Copilot to explain the codebase. It gave me a confident answer about files that didn&rsquo;t exist. That was exercise 0.2. It was extremely educational.&rdquo;</span>
<span class="text-amber-500 text-xs text-right">&mdash; Jessica</span>
</div>
</div>
---

<!-- SLIDE: Exercise 0.1 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-3">
  <div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent"></div>

  <!-- Header -->
  <div class="relative z-10 flex items-center gap-4 mb-3">
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
  <div class="relative z-10 mb-3 p-3 bg-gray-900/60 rounded-xl border-l-4 border-orange-400 text-sm text-gray-300">
    Sarah drops the challenge. Before Copilot can help, it needs a codebase. <strong class="text-white">First things first: get the repo.</strong>
  </div>

  <!-- Steps + Success in two columns -->
  <div class="relative z-10 grid grid-cols-2 gap-4">
    <div class="space-y-2">
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
      <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
        <span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
        <div class="text-xs text-gray-300"><span class="font-mono text-orange-300 select-all cursor-text">git clone https://github.com/MSBart2/FanHub.git</span></div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
        <span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
        <div class="text-xs text-gray-300">Browse language folders, pick the one that matches your background</div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
        <span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
        <div class="text-xs text-gray-300">Pick your show — 📺 The Office · 🔦 Stranger Things · 🧪 Breaking Bad · 🛡️ Mandalorian</div>
      </div>
      <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
        <span class="w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
        <div class="text-xs text-gray-300">Install deps, start frontend/backend (2 terminals), confirm the starter UI loads</div>
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
        💭 <strong class="text-orange-300">Jessica:</strong> "I don't need to know the whole codebase — just enough to start asking good questions."
      </div>
    </div>
  </div>
</div>

---

<!-- SLIDE: Exercise 0.2 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-3">
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>

  <!-- Header -->
  <div class="relative z-10 flex items-center gap-4 mb-3">
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
    ⚠️ <strong>This exercise is intentionally frustrating.</strong> It helps to feel the "before" state to appreciate the transformation. Do not skip it.
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
        <div class="text-xs text-gray-300"><span class="font-mono text-orange-300 select-all cursor-text">Copilot, add a character detail page to FanHub</span></div>
        </div>
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-purple-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
          <span class="text-gray-300">Note every frustration: wrong language, patterns, generic names, inconsistent style, multiple failed attempts</span>
        </div>
      </div>
    </div>
    <div class="space-y-3">
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">❌ You'll Experience</div>
      <div class="space-y-2 text-xs text-gray-300">
        <div class="p-2 bg-red-900/20 rounded-lg border border-red-700/30">Generic suggestions that don't match your architecture</div>
        <div class="p-2 bg-red-900/20 rounded-lg border border-red-700/30">Confidently incorrect patterns/syntax </div>
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

<!-- SLIDE: Exercise 0.3 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-3">
  <div class="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent"></div>

  <!-- Header -->
  <div class="relative z-10 flex items-center gap-4 mb-3">
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
        <div class="p-2.5 bg-gray-900/40 rounded-lg flex flex-col gap-1">
          <span class="text-gray-400 text-[10px] uppercase tracking-wider">Known file context</span>
          <span class="font-mono text-red-300 select-all cursor-text">Explain how this project is structured. #file:README.md</span>
        </div>
        <div class="p-2.5 bg-gray-900/40 rounded-lg flex flex-col gap-1">
          <span class="text-gray-400 text-[10px] uppercase tracking-wider">Project overview</span>
          <span class="font-mono text-red-300 select-all cursor-text">@workspace how is this application organized?</span>
        </div>
        <div class="p-2.5 bg-gray-900/40 rounded-lg flex flex-col gap-1">
          <span class="text-gray-400 text-[10px] uppercase tracking-wider">Semantic search</span>
          <span class="font-mono text-red-300 select-all cursor-text">#codebase where does this project handle routing?</span>
        </div>
        <div class="p-2.5 bg-gray-900/40 rounded-lg flex flex-col gap-1">
          <span class="text-gray-400 text-[10px] uppercase tracking-wider">Visual context</span>
          <span class="text-gray-400 italic">Copy/Paste/Drag a screenshot or mockup directly into chat</span>
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
        💭 <strong class="text-red-300">Marcus:</strong> "I asked without context, it answered without context, and I was annoyed. Then I added <span class="font-mono">@workspace</span>. Completely different answer. I was the problem. This time."
      </div>
    </div>
  </div>
</div>

---

<!-- SLIDE: Exercise 0.4 -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14 py-3">
  <div class="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-transparent"></div>

  <!-- Header -->
  <div class="relative z-10 flex items-center gap-4 mb-3">
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
    David stops mid-conversation. <em>&ldquo;Hold on &mdash; we haven&rsquo;t defined what success looks like. I&rsquo;m not spending eight hours without a measurable outcome.&rdquo;</em> <strong class="text-white">He&rsquo;s not wrong.</strong>
  </div>

  <div class="relative z-10 grid grid-cols-2 gap-4">
    <div>
      <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📋 Steps</div>
      <div class="space-y-2 text-xs">
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-yellow-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
          <span class="text-gray-300">Scan the Old &rarr; New metrics. Pick 2&ndash;3 that feel true about how you measure yourself today.</span>
        </div>
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-yellow-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
          <span class="text-gray-300">For each one, ask honestly: <em>&ldquo;Is this still the right thing to measure?&rdquo;</em></span>
        </div>
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-yellow-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
          <span class="text-gray-300">Pick one you want to be different by the end of module 6.</span>
        </div>
        <div class="flex items-start gap-3 p-3 bg-gray-900/40 rounded-lg">
          <span class="w-5 h-5 rounded-full bg-yellow-700 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
          <span class="text-gray-300">Hold it in mind &mdash; no need to write it down. You&rsquo;ll know if it shifted.</span>
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

<!-- SLIDE: 💭 The Team, After Orientation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💭 The Team, After Orientation</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-3">
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-amber-400">
<div class="text-xs font-bold text-amber-300 mb-0.5">Jessica</div>
<div class="text-xs text-gray-500 italic mb-2">The Eager Junior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">&ldquo;I thought this was going to be different. It answered questions about a completely different codebase. I&rsquo;m nodding along but I&rsquo;m genuinely confused about what just happened.&rdquo;</div>
<div class="text-xs text-gray-500">Still nodding. Not sure why.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-blue-400">
<div class="text-xs font-bold text-blue-300 mb-0.5">David</div>
<div class="text-xs text-gray-500 italic mb-2">The Seasoned Architect</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">&ldquo;It produced three incorrect file paths with complete confidence. I have significant questions about the epistemology of this system.&rdquo;</div>
<div class="text-xs text-gray-500">The questions are not rhetorical.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-green-400">
<div class="text-xs font-bold text-green-300 mb-0.5">Sarah</div>
<div class="text-xs text-gray-500 italic mb-2">The Skeptical Senior</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">&ldquo;I&rsquo;ve seen tools that don&rsquo;t work. This is a tool that doesn&rsquo;t work yet. I&rsquo;m not sure that&rsquo;s a better problem.&rdquo;</div>
<div class="text-xs text-gray-500">Holding judgment. Barely.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-purple-400">
<div class="text-xs font-bold text-purple-300 mb-0.5">Elena</div>
<div class="text-xs text-gray-500 italic mb-2">The Quality Champion</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">&ldquo;It invented an API endpoint. Confidently. Without hesitation. I&rsquo;m going to need a minute before I continue.&rdquo;</div>
<div class="text-xs text-gray-500">The minute is not going well.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-orange-400">
<div class="text-xs font-bold text-orange-300 mb-0.5">Marcus</div>
<div class="text-xs text-gray-500 italic mb-2">The DevOps Developer</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">&ldquo;It gave me completely wrong information and seemed fine about it. I don&rsquo;t know if that&rsquo;s a me problem or an it problem. I&rsquo;m not happy either way.&rdquo;</div>
<div class="text-xs text-gray-500">Back to Slack. Temporarily.</div>
</div>
<div class="p-4 rounded-xl bg-gray-900/50 border-l-4 border-cyan-400">
<div class="text-xs font-bold text-cyan-300 mb-0.5">Rafael</div>
<div class="text-xs text-gray-500 italic mb-2">The Product Visionary</div>
<div class="text-xs text-gray-200 italic leading-snug mb-2">&ldquo;I asked a simple question. I got a confident answer about a product that doesn&rsquo;t exist. Someone is going to need to explain the ROI on &lsquo;confident but wrong.&rsquo;&rdquo;</div>
<div class="text-xs text-gray-500">ROI calculation: pending.</div>
</div>
</div>
</div>
---

<!-- SLIDE: Next Up -->
<div class="h-full flex flex-col justify-start px-14 py-4 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-950/30 to-purple-950/20"></div>
<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-orange-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">➡️ Next Up</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
</div>
<div class="relative z-10 mb-4">
<div class="p-5 bg-gradient-to-r from-orange-600/90 to-red-700/90 rounded-xl border border-orange-400/30 shadow-xl shadow-orange-900/40 text-center">
  <div class="text-xs font-semibold text-orange-200 tracking-widest uppercase mb-1">Coming Up Next</div>
  <div class="text-3xl font-bold text-white mb-1">Module 1: Instructions</div>
  <div class="text-orange-100 text-sm">Sarah and David establish the foundation that makes everything else possible</div>
  <div class="flex justify-center gap-6 mt-3 text-xs text-orange-200">
    <span>⏰ 10:00 AM</span>
    <span class="text-orange-400">·</span>
    <span>📚 copilot-instructions.md</span>
    <span class="text-orange-400">·</span>
    <span>✨ Same code, better AI</span>
  </div>
</div>
</div>
<div class="relative z-10 mb-4">
<div class="flex items-stretch gap-1 text-[10px]">
  <div class="flex-1 p-2 bg-gradient-to-b from-orange-600/80 to-orange-800/60 rounded-lg border border-orange-400/50 text-center shadow-lg shadow-orange-900/30">
    <div class="font-bold text-white text-xs">M1</div>
    <div class="text-orange-200 mt-0.5">Instructions</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M2</div>
    <div class="text-gray-500 mt-0.5">Plan Mode</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M3</div>
    <div class="text-gray-500 mt-0.5">Prompts</div>
  </div>
  <div class="flex items-center text-gray-600 px-0.5">›</div>
  <div class="flex-1 p-2 bg-gray-800/50 rounded-lg border border-gray-700/40 text-center">
    <div class="font-bold text-gray-400 text-xs">M4</div>
    <div class="text-gray-500 mt-0.5">Skills</div>
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
<div class="relative z-10 p-3 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
<div class="flex items-start gap-3">
  <span class="text-yellow-400 text-lg leading-none mt-0.5">⚠️</span>
  <div>
    <div class="text-yellow-400 font-bold text-sm mb-1">Don't Skip Exercise 0.2</div>
    <div class="text-gray-300 text-xs">The transformation only matters if you experience the problem first</div>
  </div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-3 mb-3">
  <div class="p-3 bg-gray-800/50 rounded-lg border border-gray-700/40">
    <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">📦 You'll build</div>
    <div class="space-y-1 text-xs text-gray-300">
      <div class="flex items-center gap-2"><span class="text-blue-400">→</span> ARCHITECTURE.md — project context for AI</div>
      <div class="flex items-center gap-2"><span class="text-blue-400">→</span> .github/copilot-instructions.md</div>
      <div class="flex items-center gap-2"><span class="text-blue-400">→</span> Path-scoped .instructions.md files</div>
    </div>
  </div>
  <div class="p-3 bg-gray-800/50 rounded-lg border border-gray-700/40">
    <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✨ You'll see</div>
    <div class="space-y-1 text-xs text-gray-300">
      <div class="flex items-center gap-2"><span class="text-orange-400">→</span> Copilot go from generic to project-aware</div>
      <div class="flex items-center gap-2"><span class="text-orange-400">→</span> PR corrections start to disappear</div>
      <div class="flex items-center gap-2"><span class="text-orange-400">→</span> The baseline that makes every later module smarter</div>
    </div>
  </div>
</div>
</div>
</div>


---

<!-- SLIDE: Thank You -->
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
