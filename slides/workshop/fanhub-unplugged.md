---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## FanHub Unplugged: Fix It, Ship It, Vibe It
  CopilotTraining Workshop
drawings:
  persist: false
transition: slide-left
title: FanHub Unplugged - Fix It, Ship It, Vibe It
module: workshop/fanhub-unplugged
mdc: true
section: Workshop
status: active
updated: 2026-04-16
---

<!-- SLIDE: Title -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-purple-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-72" alt="" /></div>
<img src="./sdp-logo.png" class="w-72 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent relative z-10">FanHub Unplugged</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-orange-500/25">Fix It, Ship It, Vibe It</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">60 minutes of agent-directed development — you hold the vision, the agent implements</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full relative z-10"></div>
</div>
<div class="abs-br m-6 flex gap-2"><span class="text-sm opacity-50">Workshop · 60 minutes</span></div>

---

<!-- SLIDE: The Question -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 The Core Question</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-6">
<div class="text-3xl font-bold text-white mb-3 leading-tight">"How much can you actually ship in 60 minutes when an AI agent is doing the coding and you're doing the directing?"</div>
<div class="text-sm text-gray-400">— and what does it feel like to fully give in to the vibes?</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="p-4 bg-gradient-to-br from-orange-900/40 to-red-900/30 rounded-xl border border-orange-500/30">
<div class="text-sm font-bold text-orange-300 mb-2">What You'll Build</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Fix multiple production bugs in a batch</div>
<div>• Complete a full rebrand in under 30 min</div>
<div>• Ship end-to-end features from scratch</div>
<div>• Or build something delightfully unexpected</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-red-900/40 to-purple-900/30 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-2">What You'll Learn</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Write complete prompts that produce complete features</div>
<div>• Direct agents through multi-file changes</div>
<div>• Use MCP to let agents verify their own work</div>
<div>• Resist the urge to implement manually</div>
</div>
</div>
</div>
<div class="relative z-10 mt-4 p-4 bg-gray-950/60 rounded-xl border border-gray-700/50">
<div class="text-sm italic text-gray-300">"This is exactly the kind of codebase I'd spend three days onboarding a new hire to. Let's see if the agent does it in three minutes."</div>
<div class="text-xs text-gray-500 mt-2">— Sarah, seeing the zero-documentation starter for the first time</div>
</div>
</div>

---

<!-- SLIDE: What is FanHub? -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📦 The Setup</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">What is FanHub?</div>
<div class="text-sm text-gray-400">A deliberately broken, underdocumented, multi-language fan site starter — not a toy</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-orange-300 mb-3">Four Complete Implementations</div>
<div class="space-y-2">
<div class="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-bold text-blue-400 mb-1">Node.js</div>
<div class="text-xs text-gray-400">Express + React + SQLite</div>
</div>
<div class="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-bold text-purple-400 mb-1">.NET</div>
<div class="text-xs text-gray-400">ASP.NET Core + Blazor + SQLite</div>
</div>
<div class="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-bold text-orange-400 mb-1">Java</div>
<div class="text-xs text-gray-400">Spring Boot + React + SQLite</div>
</div>
<div class="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-bold text-cyan-400 mb-1">Go</div>
<div class="text-xs text-gray-400">Gin + React + SQLite</div>
</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-red-300 mb-3">Intentional Problems (Identical Across All Tracks)</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="p-2 bg-red-950/30 rounded border border-red-500/20">
<span class="font-bold text-red-400">No documentation</span> — agents can't orient without context
</div>
<div class="p-2 bg-yellow-950/30 rounded border border-yellow-500/20">
<span class="font-bold text-yellow-400">Known bugs</span> — duplicate characters, broken filters, inconsistent APIs
</div>
<div class="p-2 bg-blue-950/30 rounded border border-blue-500/20">
<span class="font-bold text-blue-400">Generic UI</span> — unstyled, unthemed, crying out for personality
</div>
<div class="p-2 bg-purple-950/30 rounded border border-purple-500/20">
<span class="font-bold text-purple-400">Incomplete features</span> — scaffolding everywhere, implementations nowhere
</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-950/60 rounded-xl border border-gray-700/50 text-xs italic text-gray-300">
"Four languages, same bugs. That's actually kind of beautiful in a terrible way." <span class="text-gray-500">— Marcus</span>
</div>
</div>

---

<!-- SLIDE: Vibe-Coding Ground Rules -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Ground Rules</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Vibe-Coding Ground Rules</div>
<div class="text-sm text-gray-400">The non-negotiables for this sprint</div>
</div>
<div class="relative z-10 space-y-3">
<div class="p-4 bg-gradient-to-br from-orange-950/50 to-orange-900/30 rounded-xl border border-orange-500/30">
<div class="flex items-start gap-3">
<div class="text-2xl">1️⃣</div>
<div>
<div class="text-sm font-bold text-orange-300 mb-1">Phase 1 is non-negotiable</div>
<div class="text-xs text-gray-300">Nothing ships until the app builds. Getting it running is the first deliverable.</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-red-950/50 to-red-900/30 rounded-xl border border-red-500/30">
<div class="flex items-start gap-3">
<div class="text-2xl">2️⃣</div>
<div>
<div class="text-sm font-bold text-red-300 mb-1">Phase 2 is yours</div>
<div class="text-xs text-gray-300">No wrong choices. The only failure is shipping nothing.</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-950/50 to-purple-900/30 rounded-xl border border-purple-500/30">
<div class="flex items-start gap-3">
<div class="text-2xl">3️⃣</div>
<div>
<div class="text-sm font-bold text-purple-300 mb-1">If you're stuck > 2 minutes, it's a prompt problem</div>
<div class="text-xs text-gray-300">Restate the goal, add constraints, show the agent the error. Don't Google.</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-950/50 to-blue-900/30 rounded-xl border border-blue-500/30">
<div class="flex items-start gap-3">
<div class="text-2xl">4️⃣</div>
<div>
<div class="text-sm font-bold text-blue-300 mb-1">Don't read the code</div>
<div class="text-xs text-gray-300">If you're reading source files to understand what the agent wrote, you're in the wrong mode. Ask the agent to explain it in chat — then move on.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Get Running -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/10 via-red-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-orange-600/40 to-red-600/40 rounded-full border border-orange-400/30 text-orange-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-orange-400 via-red-300 to-purple-400 bg-clip-text text-transparent leading-tight">Get Running</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Pick, Orient, and Run (0:00 – 0:20)</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-orange-900/30 rounded-xl border border-orange-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-orange-300 font-semibold">Pick Your Stack</div>
<div class="text-xs opacity-70 mt-1">3 minutes to decide — don't overthink it</div>
</div>
<div class="px-4 py-3 bg-red-900/30 rounded-xl border border-red-500/30">
<div class="text-2xl mb-1">🧭</div>
<div class="text-red-300 font-semibold">/init and Orient</div>
<div class="text-xs opacity-70 mt-1">Let the agent read the codebase</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">▶️</div>
<div class="text-purple-300 font-semibold">Build and Run</div>
<div class="text-xs opacity-70 mt-1">Get it working — agent fixes setup errors</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Phase 1 is non-negotiable.</span><br />
<span class="text-orange-300 mt-1 block">↳ Nothing ships until the app builds.</span>
</div>
<div class="mt-3 select-all cursor-copy font-mono text-sm bg-orange-950/40 border border-orange-500/30 rounded-lg px-5 py-2 text-orange-300">github.com/MSBart2/FanHub</div>
</div>
</div>

---

<!-- SLIDE: Pick Your Stack -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Get Running</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Pick Your Stack (0:00 – 0:03)</div>
<div class="text-xs text-white/50">Three minutes. One decision. Don't overthink it.</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-3">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-blue-950/50 to-blue-900/30 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">🟦</div>
<div class="text-sm font-bold text-blue-300">Node.js Track</div>
</div>
<div class="text-xs text-gray-300">Express + React + SQLite</div>
<div class="text-xs text-gray-500 mt-1 italic">Codespace: "FanHub – Node.js"</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-950/50 to-purple-900/30 rounded-xl border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">🟪</div>
<div class="text-sm font-bold text-purple-300">.NET Track</div>
</div>
<div class="text-xs text-gray-300">ASP.NET Core + Blazor + SQLite</div>
<div class="text-xs text-gray-500 mt-1 italic">Codespace: "FanHub – .NET"</div>
</div>
</div>
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-orange-950/50 to-orange-900/30 rounded-xl border border-orange-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">🟧</div>
<div class="text-sm font-bold text-orange-300">Java Track</div>
</div>
<div class="text-xs text-gray-300">Spring Boot + React + SQLite</div>
<div class="text-xs text-gray-500 mt-1 italic">Codespace: "FanHub – Java"</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">🔷</div>
<div class="text-sm font-bold text-cyan-300">Go Track</div>
</div>
<div class="text-xs text-gray-300">Gin + React + SQLite</div>
<div class="text-xs text-gray-500 mt-1 italic">Codespace: "FanHub – Go"</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-xl border border-orange-500/30 text-center">
<div class="text-sm font-semibold text-orange-200">The bugs are identical across all tracks — pick the language you're most comfortable with</div>
</div>
</div>

---

<!-- SLIDE: /init and Orient -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Get Running</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">/init and Orient (0:03 – 0:10)</div>
<div class="text-xs text-white/50">Before the agent does anything useful, it needs to understand the codebase</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-orange-300 mb-3">Run /init with Your Track</div>
<div class="p-4 bg-gray-950/80 rounded-xl border border-gray-700/50 font-mono text-xs space-y-3">
<div>
<div class="text-gray-500 mb-1"># Node.js:</div>
<div class="text-green-400">/init I'm working in the node/ track</div>
</div>
<div>
<div class="text-gray-500 mb-1"># .NET:</div>
<div class="text-purple-400">/init I'm working in the dotnet/ track</div>
</div>
<div>
<div class="text-gray-500 mb-1"># Java:</div>
<div class="text-orange-400">/init I'm working in the java/ track</div>
</div>
<div>
<div class="text-gray-500 mb-1"># Go:</div>
<div class="text-cyan-400">/init I'm working in the go/ track</div>
</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-red-300 mb-3">Then Ask for Direction</div>
<div class="p-4 bg-gray-950/80 rounded-xl border border-gray-700/50 mb-3 select-all cursor-copy">
<div class="text-xs italic text-gray-300">"What are the three most impactful things I could fix or build in the next 45 minutes?"</div>
</div>
<div class="text-sm font-bold text-purple-300 mb-2">The Unlock</div>
<div class="text-xs text-gray-300 space-y-2">
<div>✅ An oriented agent produces dramatically better code than one guessing from zero context</div>
<div>✅ /init is not optional — it's the foundation of every useful agent session</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-950/60 rounded-xl border border-gray-700/50 text-xs italic text-gray-300">
Without the language hint, the agent reads the entire multi-language repo. With it, it focuses on your working tree.
</div>
</div>

---

<!-- SLIDE: Build and Run -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Get Running</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Build and Run (0:10 – 0:20)</div>
<div class="text-xs text-white/50">Get the app running — use the agent to fix setup errors</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-orange-300 mb-3">Simple Ask</div>
<div class="p-4 bg-gray-950/80 rounded-xl border border-gray-700/50 mb-3 select-all cursor-copy">
<div class="text-xs italic text-gray-300">"Walk me through getting this running from the beginning."</div>
</div>
<div class="text-sm font-bold text-red-300 mb-2">Common Setup Gotchas</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="p-2 bg-blue-950/30 rounded border border-blue-500/20">
<span class="font-bold text-blue-400">Node:</span> npm run install:all at root
</div>
<div class="p-2 bg-purple-950/30 rounded border border-purple-500/20">
<span class="font-bold text-purple-400">.NET:</span> docker-compose up -d db first
</div>
<div class="p-2 bg-orange-950/30 rounded border border-orange-500/20">
<span class="font-bold text-orange-400">Java:</span> Frontend/backend on different ports
</div>
<div class="p-2 bg-cyan-950/30 rounded border border-cyan-500/20">
<span class="font-bold text-cyan-400">Go:</span> docker-compose up --build
</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-purple-300 mb-3">This Is Not a Detour</div>
<div class="text-xs text-gray-300 space-y-2 mb-4">
<div>✅ Using the agent to fix setup errors is the <span class="text-orange-300 font-semibold">first real demonstration of the loop</span></div>
<div>✅ The agent reads the error, identifies the cause, and fixes it — without you touching a file</div>
</div>
<div class="text-sm font-bold text-blue-300 mb-2">Explore the Bugs Briefly</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Two Jesse Pinkmans in the character list</div>
<div>• A season filter that doesn't filter</div>
<div>• Generic UI crying out for personality</div>
</div>
<div class="text-xs text-gray-400 mt-2 italic">Not to fix them yet — just to give the agent context</div>
</div>
</div>
</div>

---

<!-- SLIDE: Phase 1 Checklist -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-20">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Get Running</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-4">
<div class="text-xl font-bold text-white mb-0.5">Phase 1 Checklist</div>
<div class="text-xs text-gray-400">Leave this up while everyone gets running (0:00 – 0:20)</div>
</div>
<div class="relative z-10 space-y-2 max-w-2xl">
<div class="flex items-center gap-3 p-3 bg-orange-950/30 rounded-xl border border-orange-500/30">
<div class="text-xl shrink-0">☐</div>
<div>
<div class="text-sm font-bold text-orange-300">1. Open your Codespace</div>
<div class="text-xs text-gray-400 mt-0.5 select-all cursor-copy font-mono">github.com/MSBart2/FanHub</div>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-red-950/30 rounded-xl border border-red-500/30">
<div class="text-xl shrink-0 mt-0.5">☐</div>
<div>
<div class="text-sm font-bold text-red-300">2. Run /init scoped to your track</div>
<div class="text-xs text-gray-400 mt-0.5 font-mono select-all cursor-copy">/init I'm working in the node/ track</div>
<div class="text-xs text-gray-500 mt-0.5">Replace node/ with dotnet/, java/, or go/ as needed</div>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-purple-950/30 rounded-xl border border-purple-500/30">
<div class="text-xl shrink-0">☐</div>
<div>
<div class="text-sm font-bold text-purple-300">3. Ask the agent to get it running</div>
<div class="text-xs text-gray-400 mt-0.5 font-mono select-all cursor-copy">"Walk me through getting this running from the beginning."</div>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-blue-950/30 rounded-xl border border-blue-500/30">
<div class="text-xl shrink-0">☐</div>
<div>
<div class="text-sm font-bold text-blue-300">4. App is running in the browser</div>
<div class="text-xs text-gray-400 mt-0.5">Characters, episodes, and at least two Jesse Pinkmans. You're ready.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Choose Your Adventure -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/25 via-purple-900/15 to-blue-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-red-600/40 to-purple-600/40 rounded-full border border-red-400/30 text-red-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-red-400 via-purple-300 to-blue-400 bg-clip-text text-transparent leading-tight">Choose Your Adventure</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Pick a Path and Build (0:20 – 0:48)</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent mb-6"></div>
<div class="grid grid-cols-2 gap-4 text-sm max-w-2xl">
<div class="px-6 py-4 bg-red-900/30 rounded-xl border border-red-500/30">
<div class="text-2xl mb-1">🐛</div>
<div class="text-red-300 font-semibold text-base">Path A</div>
<div class="text-xs opacity-70 mt-1">Fix the bugs in BUGS.md</div>
</div>
<div class="px-6 py-4 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">💡</div>
<div class="text-purple-300 font-semibold text-base">Path B</div>
<div class="text-xs opacity-70 mt-1">Pick an idea from good-ideas.md</div>
</div>
</div>
<div class="mt-4 text-xs text-gray-500">or ignore both and do whatever you want — the only rule is ship something</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Pick a direction, then hand it to the agent.</span><br />
<span class="text-red-300 mt-1 block">↳ Specific prompts with clear success criteria produce shippable output.</span>
</div>
</div>
</div>

---

<!-- SLIDE: Path A - Bug Blitz -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-red-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Choose Your Adventure</span>
<div class="flex-1 h-px bg-gradient-to-r from-red-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-red-400 shadow-lg shadow-red-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">🐛 Path A: Bug Blitz</div>
<div class="text-xs text-white/50">Give the agent a batch — not one at a time</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-red-300 mb-2">The Prompt Pattern</div>
<div class="p-4 bg-gray-950/80 rounded-xl border border-gray-700/50 mb-3 select-all cursor-copy">
<div class="text-xs italic text-gray-300">"Fix the three highest-severity bugs in BUGS.md. For each one, explain the root cause before writing the fix."</div>
</div>
<div class="text-sm font-bold text-orange-300 mb-2">Why Batching Works</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>✅ Single-bug prompts waste context on back-and-forth</div>
<div>✅ Thematic clusters let the agent run</div>
<div>✅ The agent can see patterns across related bugs</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-purple-300 mb-2">Satisfying Clusters from BUGS.md</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="p-2 bg-red-950/30 rounded border border-red-500/20">
<span class="font-bold text-red-400">The Jesse Problem:</span> Duplicate character + broken season filter
</div>
<div class="p-2 bg-yellow-950/30 rounded border border-yellow-500/20">
<span class="font-bold text-yellow-400">API Consistency:</span> Mixed URL prefixes, wrong status codes, inconsistent shapes
</div>
<div class="p-2 bg-blue-950/30 rounded border border-blue-500/20">
<span class="font-bold text-blue-400">Auth Scaffolding:</span> Middleware defined but never wired up
</div>
<div class="p-2 bg-purple-950/30 rounded border border-purple-500/20">
<span class="font-bold text-purple-400">Security Sweep:</span> Weak passwords, exposed errors, no input validation, CORS wide open
</div>
</div>
</div>
</div>
<div class="relative z-10 mt-2 p-3 bg-gray-950/60 rounded-xl border border-gray-700/50 text-xs italic text-gray-300">
"I just pasted a stack trace into the chat with zero explanation and it fixed it. I've been a developer for fifteen years and that felt wrong and correct at the same time." <span class="text-gray-500">— Sarah</span>
</div>
</div>

---

<!-- SLIDE: Path B - Good Ideas -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-red-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Choose Your Adventure</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">💡 Path B: Good Ideas</div>
<div class="text-xs text-white/50">Open <span class="font-mono text-purple-300">good-ideas.md</span> in the repo root — pick anything that looks fun and hand it to the agent</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-purple-300 mb-2">A few to get you started</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="p-2 bg-purple-950/30 rounded border border-purple-500/20 select-all cursor-copy font-mono">"Build a 'Who Said It?' trivia game at /trivia. Show a random quote, 4 character options, track score."</div>
<div class="p-2 bg-indigo-950/30 rounded border border-indigo-500/20 select-all cursor-copy font-mono">"Add a 'who would win in a fight' matchup generator — two random characters, a coin flip, a one-line justification."</div>
<div class="p-2 bg-blue-950/30 rounded border border-blue-500/20 select-all cursor-copy font-mono">"Rebrand the entire app as a [YOUR SHOW] fan site. Color palette, copy, cards, header tagline — everything in one pass."</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-orange-300 mb-2">⚗️ Heisenberg Mode (Earned Unlock)</div>
<div class="p-3 bg-orange-950/30 rounded-xl border border-orange-500/30 mb-3">
<div class="text-xs text-gray-300">Ship one working thing from good-ideas.md first, <span class="font-bold text-orange-300">then</span> come back and go unhinged:</div>
<div class="space-y-1 mt-2 text-xs text-gray-400">
<div>• Rebuild CSS around the aesthetic of the RV from season 1</div>
<div>• Rewrite every character bio from Walter's point of view</div>
<div>• Replace all API error messages with in-character quotes</div>
</div>
</div>
<div class="text-xs text-gray-500 italic">"I want to do Heisenberg Mode first. I understand the rule. I still want to do it first." — Rafael</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 Cheatsheet -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-red-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Choose Your Adventure</span>
<div class="flex-1 h-px bg-gradient-to-r from-red-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-red-400 shadow-lg shadow-red-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-4">
<div class="text-xl font-bold text-white mb-0.5">Your Two Docs</div>
<div class="text-xs text-gray-400">Leave this up during the sprint (0:20 – 0:48)</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4 mb-5">
<div class="p-4 bg-red-950/30 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-1">🐛 BUGS.md</div>
<div class="text-xs text-gray-400 mb-3">46 documented bugs across all four tracks, grouped by severity and theme</div>
<div class="text-xs font-bold text-orange-300 mb-1">Starter prompt:</div>
<div class="p-2 bg-gray-950/60 rounded text-xs font-mono text-gray-300 select-all cursor-copy">"Fix the three highest-severity bugs in BUGS.md. For each one, explain the root cause before writing the fix."</div>
</div>
<div class="p-4 bg-purple-950/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-bold text-purple-300 mb-1">💡 good-ideas.md</div>
<div class="text-xs text-gray-400 mb-3">Curated feature ideas and fun extensions — trivia games, rebrands, matchup generators, and more</div>
<div class="text-xs font-bold text-indigo-300 mb-1">Starter prompt:</div>
<div class="p-2 bg-gray-950/60 rounded text-xs font-mono text-gray-300 select-all cursor-copy">"Read good-ideas.md and tell me which three ideas you could build in 20 minutes. I'll pick one."</div>
</div>
</div>
<div class="relative z-10 p-3 bg-gray-900/50 rounded-xl border border-gray-700/50 text-center">
<div class="text-sm text-gray-300">Or ignore both and build whatever you want.</div>
<div class="text-xs text-gray-500 mt-1">The only rule: ship something you're excited to demo.</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — MCP Power Move -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Polish & Ship</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Document, Review, and Demo (0:48 – 1:00)</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-2 gap-3 text-sm max-w-2xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">✨</div>
<div class="text-blue-300 font-semibold">Polish</div>
<div class="text-xs opacity-70 mt-1">README update and final review</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🎬</div>
<div class="text-indigo-300 font-semibold">Show and Tell</div>
<div class="text-xs opacity-70 mt-1">Director's Commentary</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">You directed. The agent implemented.</span><br />
<span class="text-purple-300 mt-1 block">↳ Now document what you built and show it off.</span>
</div>
</div>
</div>

---

<!-- SLIDE: Polish and Show-and-Tell -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ Polish & Ship</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Polish (0:53 – 0:57)</div>
<div class="text-xs text-white/50">Let the agent document its own work and find rough edges</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4 mb-3">
<div>
<div class="text-sm font-bold text-purple-300 mb-2">README Update</div>
<div class="p-4 bg-gray-950/80 rounded-xl border border-gray-700/50 mb-2 select-all cursor-copy">
<div class="text-xs italic text-gray-300">"Write a README section documenting what we built in this session — what the feature/fix is, how to use it, and any relevant technical details."</div>
</div>
<div class="text-xs text-gray-400">The agent knows what changed because it changed it — no instructions needed</div>
</div>
<div>
<div class="text-sm font-bold text-blue-300 mb-2">Final Review</div>
<div class="p-4 bg-gray-950/80 rounded-xl border border-gray-700/50 mb-2 select-all cursor-copy">
<div class="text-xs italic text-gray-300">"Review what we built. What's the most brittle or incomplete part? Fix it."</div>
</div>
<div class="text-xs text-gray-400">The agent surfaces gaps you might have missed</div>
</div>
</div>
<div class="relative z-10">
<div class="text-sm font-bold text-indigo-300 mb-2">Show and Tell (0:57 – 1:00)</div>
<div class="p-4 bg-gradient-to-br from-indigo-950/50 to-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm text-indigo-300 mb-3 font-semibold">Everyone demos one thing. Most creative use of the agent wins bragging rights.</div>
<div class="text-xs text-gray-300 space-y-2">
<div>✨ Show the prompt that generated the most code — one sentence, dozens of files changed</div>
<div>🐛 A bug fix where the agent found the root cause faster than you would have</div>
<div>🎨 Before/after that makes the old version look embarrassing</div>
<div>💅 The most unhinged thing you shipped (Heisenberg Mode counts)</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Mental Model - Director Not Implementer -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ Polish & Ship</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Mental Model: Director, Not Implementer</div>
<div class="text-xs text-white/50">The sprint teaches one mental shift that transfers to every future AI-assisted project</div>
</div>
<div class="relative z-10">
<div class="p-4 bg-gradient-to-br from-purple-950/50 to-blue-900/30 rounded-xl border border-purple-500/30 mb-3">
<div class="text-base font-bold text-purple-300 mb-3 text-center">Your job is to hold the vision and communicate it clearly.<br />The agent's job is to implement it.</div>
<div class="text-xs text-gray-300 italic leading-relaxed">
"You fully give in to the vibes, embrace exponentials, and forget that the code even exists. I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works."
</div>
<div class="text-xs text-gray-500 mt-2">— Andrej Karpathy, describing vibe coding (Collins Dictionary Word of the Year 2025)</div>
</div>
<div class="grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-red-300 mb-2">❌ The Failure Mode</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div>• Reading generated code line by line</div>
<div>• Making manual edits to agent output</div>
<div>• Debugging implementation details</div>
<div>• Getting pulled back into the code</div>
</div>
<div class="text-xs text-gray-400 mt-2 italic">Every minute in the code is a minute not directing the agent</div>
</div>
<div>
<div class="text-sm font-bold text-green-300 mb-2">✅ Your Advantage</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div>• Judgment: knowing what to build</div>
<div>• Vision: knowing what success looks like</div>
<div>• Context: knowing when to redirect</div>
<div>• Strategy: batching related changes</div>
</div>
<div class="text-xs text-green-400 mt-2 font-semibold">The agent is faster at implementation. You're better at direction.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Honest Tradeoffs -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚖️ The Reality Check</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">The Honest Tradeoffs</div>
<div class="text-xs text-white/50">Vibe coding is genuinely useful for prototyping and sprints — it is not a free lunch in production</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4 mb-3">
<div>
<div class="text-sm font-bold text-yellow-300 mb-2">📊 The Research</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="p-2 bg-yellow-950/30 rounded border border-yellow-500/20">
<span class="font-bold text-yellow-400">METR 2025:</span> Experienced devs were 19% <span class="font-bold">slower</span> with AI on complex OSS tasks — despite predicting 24% faster
</div>
<div class="p-2 bg-red-950/30 rounded border border-red-500/20">
<span class="font-bold text-red-400">CodeRabbit 2025:</span> AI co-authored code had 1.7x more major issues, 2.74x more security vulnerabilities
</div>
<div class="p-2 bg-blue-950/30 rounded border border-blue-500/20">
<span class="font-bold text-blue-400">Simon Willison:</span> "Vibe coding your way to a production codebase is clearly risky."
</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-purple-300 mb-2">💬 The Voices</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-gray-950/60 rounded-lg border border-gray-700/50">
<div class="text-gray-300 italic leading-relaxed">"The METR study is doing a lot of work here. 'Experienced developers on complex OSS tasks' ≠ 'me telling an agent to finish a trivia game in 20 minutes.'"</div>
<div class="text-gray-500 mt-1">— Rafael</div>
</div>
<div class="p-2 bg-gray-950/60 rounded-lg border border-gray-700/50">
<div class="text-gray-300 italic leading-relaxed">"I accept the tradeoffs for a sprint. I would not accept them for the auth layer in a production system."</div>
<div class="text-gray-500 mt-1">— David</div>
</div>
<div class="p-2 bg-gray-950/60 rounded-lg border border-gray-700/50">
<div class="text-gray-300 italic leading-relaxed">"I verified every fix against BUGS.md. 3 out of 4 were correct and one needed a follow-up. That's not magic but it's not nothing."</div>
<div class="text-gray-500 mt-1">— Elena</div>
</div>
</div>
</div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-xl border border-purple-500/30 text-center">
<div class="text-sm font-semibold text-purple-200">FanHub is the right context for vibe coding. The goal is to build the skill of directing agents — including knowing when to slow down.</div>
</div>
</div>

---

<!-- SLIDE: The Practical Discipline -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Key Takeaways</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">The Practical Discipline</div>
<div class="text-sm text-gray-400">Habits from this sprint that transfer immediately</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-blue-950/50 to-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-sm font-bold text-blue-300 mb-2">1. Use /init before every session</div>
<div class="text-xs text-gray-300">On any unfamiliar codebase — let the agent orient itself</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-950/50 to-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-2">2. Write complete prompts</div>
<div class="text-xs text-gray-300">Goal + constraints + success criteria in one message</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-purple-950/50 to-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-bold text-purple-300 mb-2">3. Batch your requests</div>
<div class="text-xs text-gray-300">Clusters of related changes beat single-item back-and-forth</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-950/50 to-green-900/30 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-2">4. Direct, don't implement</div>
<div class="text-xs text-gray-300">If you're editing code manually, the agent could be doing it</div>
</div>
</div>
</div>
<div class="relative z-10 mt-4 p-4 bg-gradient-to-r from-amber-900/30 via-yellow-900/20 to-amber-900/30 rounded-xl border border-amber-500/40">
<div class="flex items-start gap-3">
<div class="text-2xl mt-0.5">✨</div>
<div>
<div class="text-sm font-bold text-amber-300 mb-1">You did all of this with minimal Copilot configuration.</div>
<div class="text-xs text-gray-300 leading-relaxed">/init gave the agent basic orientation — but no custom instructions, no skills, no agents, no architecture files. The agent was working with the bare minimum. <span class="text-amber-200 font-semibold">Imagine what a properly configured workspace looks like.</span></div>
<div class="text-xs text-blue-400/80 mt-2">→ <a href="https://msbart2.github.io/CopilotTraining/tech-talks/copilot-primitives/1" target="_blank" class="underline underline-offset-2 hover:text-blue-300">Copilot Primitives</a> — Tech-Talk</div>
<div class="text-xs text-amber-300 mt-1">→ <span class="font-semibold">Full 8-hour workshop:</span> <a href="https://msbart2.github.io/CopilotTraining" target="_blank" class="hover:text-amber-200">msbart2.github.io/CopilotTraining</a></div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Thank You -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-purple-900/10 to-blue-900/20"></div>
<div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 text-center mb-8">
<h1 class="!text-5xl !font-bold bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">You shipped it.</h1>
<div class="mt-4 text-lg opacity-70">An hour ago this was someone else's codebase. Now it's yours.</div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-4 max-w-4xl mb-8">
<div class="p-4 bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/40 text-center">
<div class="text-2xl mb-2">🎤</div>
<div class="text-sm font-bold text-orange-300 mb-1">Show and Tell</div>
<div class="text-xs text-gray-400">Demo one thing — most creative use wins bragging rights</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/40 text-center">
<div class="text-2xl mb-2">🧠</div>
<div class="text-sm font-bold text-purple-300 mb-1">The Skill You Built</div>
<div class="text-xs text-gray-400">Directing an agent — that transfers to every project from here</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/40 text-center">
<div class="text-2xl mb-2">🚀</div>
<div class="text-sm font-bold text-blue-300 mb-1">Keep Going</div>
<div class="text-xs text-gray-400">github.com/MSBart2/FanHub — the repo is yours</div>
</div>
</div>
<div class="relative z-10 p-4 bg-gray-950/80 rounded-xl border border-gray-700/50 max-w-2xl">
<div class="text-sm font-bold text-purple-300 mb-2">The Only Metric That Matters</div>
<div class="text-xs text-gray-300 italic leading-relaxed">
"Did you ship something you're excited to demo? If yes, you won. If no, you still learned how to direct an agent through 23 minutes of uninterrupted work — and that's the transferable skill."
</div>
</div>
</div>
