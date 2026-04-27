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
updated: 2026-04-27
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

<!-- SLIDE: Frame Section Opener -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-red-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/10 via-red-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-orange-600/40 to-red-600/40 rounded-full border border-orange-400/30 text-orange-300 text-sm font-medium tracking-widest uppercase">Section 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-orange-400 via-red-300 to-purple-400 bg-clip-text text-transparent leading-tight">The World & The One Rule</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">What you're working with — and how you'll work</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-6"></div>
<div class="grid grid-cols-2 gap-4 text-sm max-w-2xl">
<div class="px-4 py-3 bg-orange-900/30 rounded-xl border border-orange-500/30">
<div class="text-2xl mb-1">📦</div>
<div class="text-orange-300 font-semibold">Meet FanHub</div>
<div class="text-xs opacity-70 mt-1">Deliberately broken — that's the point</div>
</div>
<div class="px-4 py-3 bg-red-900/30 rounded-xl border border-red-500/30">
<div class="text-2xl mb-1">🎬</div>
<div class="text-red-300 font-semibold">The One Rule</div>
<div class="text-xs opacity-70 mt-1">Director, not Implementer</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What is FanHub? -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📦 The World & The One Rule</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
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
<div class="text-xs text-gray-400">Express + React + PostgreSQL</div>
</div>
<div class="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-bold text-purple-400 mb-1">.NET</div>
<div class="text-xs text-gray-400">ASP.NET Core + Blazor + PostgreSQL</div>
</div>
<div class="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-bold text-orange-400 mb-1">Java</div>
<div class="text-xs text-gray-400">Spring Boot + React + PostgreSQL</div>
</div>
<div class="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50">
<div class="text-xs font-bold text-cyan-400 mb-1">Go</div>
<div class="text-xs text-gray-400">Gin + React + PostgreSQL</div>
</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-red-300 mb-3">Intentional Problems — Identical Across All Tracks</div>
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
<div class="mt-3 p-3 bg-gray-950/60 rounded-xl border border-gray-700/50 text-xs italic text-gray-300">
"Four languages, same bugs. That's actually kind of beautiful in a terrible way." <span class="text-gray-500">— Marcus</span>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Director Not Implementer -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-6">
<span class="px-4 py-1 bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎬 The World & The One Rule</span>
<div class="flex-1 h-px bg-gradient-to-r from-orange-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></div>
</div>
</div>
<div class="relative z-10 mb-5">
<div class="text-2xl font-bold text-white mb-1">The One Rule</div>
<div class="text-sm text-gray-400">The single behavioral shift that governs everything that follows</div>
</div>
<div class="relative z-10 p-6 bg-gradient-to-br from-orange-950/60 to-red-900/40 rounded-2xl border border-orange-500/40 mb-5">
<div class="text-3xl font-bold text-center mb-3">
<span class="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">You are the Director.</span><br/>
<span class="text-gray-400 text-2xl font-normal">The agent is the Implementer.</span>
</div>
<div class="text-sm text-gray-300 text-center italic mt-3 leading-relaxed">
"You fully give in to the vibes, embrace exponentials, and forget that the code even exists."<br/>
<span class="text-gray-500 text-xs not-italic">— Andrej Karpathy, Collins Dictionary Word of the Year 2025</span>
</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div class="p-4 bg-red-950/40 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-2">❌ If you're doing this...</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div>• Reading source files line by line</div>
<div>• Manually editing the agent's code</div>
<div>• Debugging implementation details yourself</div>
</div>
<div class="text-xs text-red-400 mt-2 font-semibold">You've left director mode.</div>
</div>
<div class="p-4 bg-green-950/40 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-2">✅ Your actual job is...</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div>• Hold the vision — know what done looks like</div>
<div>• Communicate clearly — describe, don't implement</div>
<div>• Redirect when needed — steer with words</div>
</div>
<div class="text-xs text-green-400 mt-2 font-semibold">The agent is faster at code than you are.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Onramp Section Opener -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/25 via-purple-900/15 to-blue-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-red-600/40 to-purple-600/40 rounded-full border border-red-400/30 text-red-300 text-sm font-medium tracking-widest uppercase">Section 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-red-400 via-purple-300 to-blue-400 bg-clip-text text-transparent leading-tight">Onramp: Pick, Init, Run</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Get every participant to the same starting line (0:00 – 0:20)</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-red-900/30 rounded-xl border border-red-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-red-300 font-semibold">Pick Your Stack</div>
<div class="text-xs opacity-70 mt-1">Track + surface in 3 minutes</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🧭</div>
<div class="text-purple-300 font-semibold">/init and Orient</div>
<div class="text-xs opacity-70 mt-1">Let the agent read the codebase</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">▶️</div>
<div class="text-blue-300 font-semibold">Build and Run</div>
<div class="text-xs opacity-70 mt-1">App running in the browser</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Pick Your Stack and Surface -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-red-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Onramp</span>
<div class="flex-1 h-px bg-gradient-to-r from-red-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-red-400 shadow-lg shadow-red-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Pick Your Stack (0:00 – 0:03)</div>
<div class="text-xs text-gray-400">Two decisions — track and surface. Both happen right now.</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-red-300 mb-2">Choose Your Language Track</div>
<div class="space-y-2">
<div class="p-3 bg-blue-950/40 rounded-lg border border-blue-500/30 flex items-center gap-2">
<span class="text-blue-400 font-bold text-xs w-16 shrink-0">Node.js</span>
<span class="text-xs text-gray-400">Express + React + PostgreSQL</span>
</div>
<div class="p-3 bg-purple-950/40 rounded-lg border border-purple-500/30 flex items-center gap-2">
<span class="text-purple-400 font-bold text-xs w-16 shrink-0">.NET</span>
<span class="text-xs text-gray-400">ASP.NET Core + Blazor + PostgreSQL</span>
</div>
<div class="p-3 bg-orange-950/40 rounded-lg border border-orange-500/30 flex items-center gap-2">
<span class="text-orange-400 font-bold text-xs w-16 shrink-0">Java</span>
<span class="text-xs text-gray-400">Spring Boot + React + PostgreSQL</span>
</div>
<div class="p-3 bg-cyan-950/40 rounded-lg border border-cyan-500/30 flex items-center gap-2">
<span class="text-cyan-400 font-bold text-xs w-16 shrink-0">Go</span>
<span class="text-xs text-gray-400">Gin + React + PostgreSQL</span>
</div>
</div>
<div class="text-xs text-gray-500 mt-2 italic">Bugs are identical — pick the language you know best.</div>
</div>
<div>
<div class="text-sm font-bold text-purple-300 mb-2">Choose Your Surface</div>
<div class="space-y-3">
<div class="p-3 bg-purple-950/40 rounded-xl border border-purple-500/30">
<div class="text-xs font-bold text-purple-300 mb-1">VS Code — Copilot Chat (Agent Mode)</div>
<div class="text-xs text-gray-400">Open Copilot Chat → switch mode to <span class="font-mono text-purple-300">Agent</span> → full tool access: reads files, writes files, runs terminals</div>
</div>
<div class="p-3 bg-blue-950/40 rounded-xl border border-blue-500/30">
<div class="text-xs font-bold text-blue-300 mb-1">Copilot CLI — Terminal Native</div>
<div class="text-xs text-gray-400">In any terminal: <span class="font-mono text-blue-300">copilot</span> → same agent loop. Use <span class="font-mono text-blue-200">Shift+Tab</span> for Plan Mode.</div>
</div>
</div>
<div class="mt-3 p-3 bg-gray-950/50 rounded-xl border border-gray-700/50 text-xs text-gray-300">
Both surfaces: same model, same tools, same interaction model. Pick what feels natural.
</div>
</div>
</div>
</div>

---

<!-- SLIDE: /init and Orient -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-red-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧭 Onramp</span>
<div class="flex-1 h-px bg-gradient-to-r from-red-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-red-400 shadow-lg shadow-red-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">/init and Orient (0:03 – 0:10)</div>
<div class="text-xs text-gray-400">Before the agent does anything useful, it needs to understand the codebase — and your track</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-red-300 mb-3">Run /init with Your Track</div>
<div class="p-4 bg-gray-950/80 rounded-xl border border-gray-700/50 font-mono text-xs space-y-3">
<div>
<div class="text-gray-500 mb-1"># Node.js:</div>
<div class="text-green-400 select-all cursor-copy">/init I'm working in the node/ track</div>
</div>
<div>
<div class="text-gray-500 mb-1"># .NET:</div>
<div class="text-purple-400 select-all cursor-copy">/init I'm working in the dotnet/ track</div>
</div>
<div>
<div class="text-gray-500 mb-1"># Java:</div>
<div class="text-orange-400 select-all cursor-copy">/init I'm working in the java/ track</div>
</div>
<div>
<div class="text-gray-500 mb-1"># Go:</div>
<div class="text-cyan-400 select-all cursor-copy">/init I'm working in the go/ track</div>
</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-purple-300 mb-2">Then Ask for Priorities</div>
<div class="p-4 bg-gray-950/80 rounded-xl border border-gray-700/50 mb-3 select-all cursor-copy">
<div class="text-xs italic text-gray-300">"What are the three most impactful things I could fix or build in the next 45 minutes?"</div>
</div>
<div class="text-sm font-bold text-blue-300 mb-2">Why This Matters</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="flex gap-2"><span class="text-green-400 shrink-0">✅</span> With track hint: agent scopes to your working tree</div>
<div class="flex gap-2"><span class="text-red-400 shrink-0">❌</span> Without it: reads all four implementations and produces broad, unfocused orientation</div>
</div>
<div class="mt-3 p-3 bg-orange-950/30 rounded-xl border border-orange-500/30 text-xs text-orange-200 font-semibold">
/init is not optional. It's the foundation of every useful agent session.
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Build and Run -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-red-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">▶️ Onramp</span>
<div class="flex-1 h-px bg-gradient-to-r from-red-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-red-400 shadow-lg shadow-red-500/50"></div>
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

<!-- SLIDE: Is Everyone Running? -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-red-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Onramp</span>
<div class="flex-1 h-px bg-gradient-to-r from-red-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-red-400 shadow-lg shadow-red-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-5">
<div class="text-2xl font-bold text-white mb-1">🙋 Is everyone running?</div>
<div class="text-sm text-gray-400">Facilitator: circulate the room now. This slide stays up until everyone answers yes.</div>
</div>
<div class="relative z-10 space-y-3 max-w-2xl">
<div class="flex items-center gap-3 p-3 bg-red-950/30 rounded-xl border border-red-500/30">
<div class="text-2xl shrink-0">☐</div>
<div>
<div class="text-sm font-bold text-red-300">Codespace open at github.com/MSBart2/FanHub</div>
<div class="text-xs text-gray-400 mt-0.5">Dev container for your track is running</div>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-purple-950/30 rounded-xl border border-purple-500/30">
<div class="text-2xl shrink-0">☐</div>
<div>
<div class="text-sm font-bold text-purple-300">/init run and scoped to your track</div>
<div class="font-mono text-xs text-gray-400 mt-0.5 select-all cursor-copy">/init I'm working in the node/ track</div>
<div class="text-xs text-gray-500 mt-0.5">Replace node/ with dotnet/, java/, or go/ as needed</div>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-blue-950/30 rounded-xl border border-blue-500/30">
<div class="text-2xl shrink-0">☐</div>
<div>
<div class="text-sm font-bold text-blue-300">App is running in the browser</div>
<div class="text-xs text-gray-400 mt-0.5">Characters, episodes, and at least two Jesse Pinkmans. You're ready.</div>
</div>
</div>
</div>
<div class="relative z-10 mt-5 p-3 bg-gray-900/50 rounded-xl border border-gray-700/50">
<div class="text-xs text-gray-300">Not running yet? Use the agent: <span class="font-mono text-orange-300 select-all cursor-copy">"Walk me through getting this running from the beginning."</span></div>
</div>
</div>

---

<!-- SLIDE: Sprint Section Opener -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Section 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Sprint: Choose Your Adventure</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">28 minutes of agent-directed flow (0:20 – 0:48)</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-2 gap-4 text-sm max-w-2xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-lg mb-1">🐛</div>
<div class="text-purple-300 font-semibold">Bug Blitz</div>
<div class="text-xs opacity-70 mt-1">Fix clusters from BUGS.md</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-lg mb-1">🎨</div>
<div class="text-blue-300 font-semibold">Full Rebrand</div>
<div class="text-xs opacity-70 mt-1">Pick a show, transform the UI</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-lg mb-1">✨</div>
<div class="text-indigo-300 font-semibold">Build Something New</div>
<div class="text-xs opacity-70 mt-1">End-to-end feature from scratch</div>
</div>
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-lg mb-1">💅</div>
<div class="text-cyan-300 font-semibold">Delight Mode</div>
<div class="text-xs opacity-70 mt-1">Trivia games, matchups, personality</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Four Paths -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🗺️ Sprint</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Pick a Path (0:20 – 0:25)</div>
<div class="text-xs text-gray-400">Five minutes. Give the agent a clear mandate that lets it run for 20+ minutes with minimal interruption.</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-red-950/50 to-red-900/30 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-1">🐛 Bug Blitz</div>
<div class="text-xs text-gray-400 mb-2">Batch a cluster from BUGS.md — not one at a time</div>
<div class="p-2 bg-gray-950/60 rounded text-xs font-mono text-gray-300 select-all cursor-copy leading-relaxed">"Fix the three highest-severity bugs in BUGS.md. For each one, explain the root cause before writing the fix."</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-950/50 to-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-bold text-purple-300 mb-1">🎨 Full Rebrand</div>
<div class="text-xs text-gray-400 mb-2">Pick any show — colors, copy, cards, tagline — everything in one shot</div>
<div class="p-2 bg-gray-950/60 rounded text-xs font-mono text-gray-300 select-all cursor-copy leading-relaxed">"Rebrand this as a [YOUR SHOW] fan site. Matching palette, flavor text, on-brand cards, iconic tagline — one pass."</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-950/50 to-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-sm font-bold text-blue-300 mb-1">✨ Build Something New</div>
<div class="text-xs text-gray-400 mb-2">End-to-end spec: route, API, and frontend — all in one prompt</div>
<div class="p-2 bg-gray-950/60 rounded text-xs font-mono text-gray-300 select-all cursor-copy leading-relaxed">"Add full-text search across characters and episodes. Search box in nav, dropdown results as you type, API ?q= param. Build both layers end-to-end."</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-sm font-bold text-cyan-300 mb-1">💅 Delight Mode</div>
<div class="text-xs text-gray-400 mb-2">Pick what sounds fun — then give the agent a complete spec</div>
<div class="p-2 bg-gray-950/60 rounded text-xs font-mono text-gray-300 select-all cursor-copy leading-relaxed">"Build a 'Who Said It?' trivia game at /trivia. Random quote, 4 character options, score tracking."</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Build Sprint -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚡ Sprint</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">The Build Sprint (0:25 – 0:48)</div>
<div class="text-xs text-gray-400">23 minutes of agent output. Your job is to direct — not implement.</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4">
<div>
<div class="text-sm font-bold text-green-300 mb-2">✅ Director Mode</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="p-2 bg-green-950/30 rounded border border-green-500/20">Describe the goal clearly upfront — give the agent a complete spec</div>
<div class="p-2 bg-green-950/30 rounded border border-green-500/20">Let it run for 5+ minutes without interrupting</div>
<div class="p-2 bg-green-950/30 rounded border border-green-500/20">When it pauses: answer with specifics, not vague redirects</div>
<div class="p-2 bg-green-950/30 rounded border border-green-500/20">When it goes wrong: describe the problem, let the agent fix itself</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-red-300 mb-2">❌ Implementer Mode (avoid)</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="p-2 bg-red-950/30 rounded border border-red-500/20">Reading generated code line by line before it finishes</div>
<div class="p-2 bg-red-950/30 rounded border border-red-500/20">Manually editing files the agent is mid-way through</div>
<div class="p-2 bg-red-950/30 rounded border border-red-500/20">Pre-analyzing errors before pasting them in</div>
</div>
<div class="mt-3 p-3 bg-orange-950/30 rounded-xl border border-orange-500/30">
<div class="text-xs font-bold text-orange-300 mb-1">The Error-Paste Pattern</div>
<div class="text-xs text-gray-300">Get an error? Paste it into chat with zero explanation. The agent has the context — it will almost always fix it.</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gray-950/60 rounded-xl border border-gray-700/50 text-xs italic text-gray-300">
"If you're stuck more than 2 minutes, it's a prompt problem — not a Copilot problem." <span class="text-gray-500">Restate the goal, add constraints, show the agent the error.</span>
</div>
</div>

---

<!-- SLIDE: Ship and Zoom Out Section Opener -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-violet-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Section 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent leading-tight">Ship & Zoom Out</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Polish, demo, and the honest reckoning (0:48 – 1:00)</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">✨</div>
<div class="text-blue-300 font-semibold">Polish</div>
<div class="text-xs opacity-70 mt-1">README and final review</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🎬</div>
<div class="text-indigo-300 font-semibold">Show and Tell</div>
<div class="text-xs opacity-70 mt-1">Director's Commentary</div>
</div>
<div class="px-4 py-3 bg-violet-900/30 rounded-xl border border-violet-500/30">
<div class="text-2xl mb-1">⚖️</div>
<div class="text-violet-300 font-semibold">Zoom Out</div>
<div class="text-xs opacity-70 mt-1">What the data actually says</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Polish and Show and Tell -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ Ship & Zoom Out</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Polish & Show and Tell (0:48 – 1:00)</div>
<div class="text-xs text-gray-400">Finish what you started, document what you built, then show it off</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4 mb-3">
<div>
<div class="text-sm font-bold text-blue-300 mb-2">README Update</div>
<div class="p-3 bg-gray-950/80 rounded-xl border border-gray-700/50 mb-2 select-all cursor-copy">
<div class="text-xs italic text-gray-300">"Write a README section documenting what we built — what the feature/fix is, how to use it, any technical details."</div>
</div>
<div class="text-sm font-bold text-indigo-300 mb-2">Final Review</div>
<div class="p-3 bg-gray-950/80 rounded-xl border border-gray-700/50 select-all cursor-copy">
<div class="text-xs italic text-gray-300">"Review what we built. What's the most brittle or incomplete part? Fix it."</div>
</div>
</div>
<div>
<div class="text-sm font-bold text-violet-300 mb-2">🎬 Show and Tell (0:57 – 1:00)</div>
<div class="p-4 bg-gradient-to-br from-indigo-950/50 to-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm text-indigo-200 mb-2 font-semibold">Everyone demos one thing. Most creative use of the agent wins.</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>🗣 Show the prompt that generated the most code</div>
<div>🐛 A bug where the agent found the root cause faster than you would have</div>
<div>🎨 Before/after that makes the old version look embarrassing</div>
<div>💅 The most unhinged thing you shipped</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Honest Tradeoffs -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚖️ Ship & Zoom Out</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
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
<div class="text-sm font-semibold text-blue-200">FanHub is the right context for vibe coding. The goal is to build the skill of directing agents — including knowing when to slow down.</div>
</div>
</div>

---

<!-- SLIDE: What Would You Use This For Tomorrow? -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Ship & Zoom Out</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-4">
<div class="text-2xl font-bold text-white mb-2">What would you actually use this for tomorrow?</div>
<div class="text-sm text-gray-400">The habits transfer immediately. The question is where you point them.</div>
</div>
<div class="relative z-10 grid grid-cols-2 gap-4 mb-4">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-blue-950/50 to-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-xs font-bold text-blue-300 mb-1">Use /init before every agent session</div>
<div class="text-xs text-gray-400">On any unfamiliar codebase — let the agent orient itself first</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-950/50 to-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-xs font-bold text-indigo-300 mb-1">Write complete prompts</div>
<div class="text-xs text-gray-400">Goal + constraints + success criteria in one message</div>
</div>
</div>
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-violet-950/50 to-violet-900/30 rounded-xl border border-violet-500/30">
<div class="text-xs font-bold text-violet-300 mb-1">Batch your requests</div>
<div class="text-xs text-gray-400">Thematic clusters beat single-item back-and-forth</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-950/50 to-green-900/30 rounded-xl border border-green-500/30">
<div class="text-xs font-bold text-green-300 mb-1">Direct, don't implement</div>
<div class="text-xs text-gray-400">If you're editing code manually, the agent could be doing it</div>
</div>
</div>
</div>
<div class="relative z-10 p-4 bg-gradient-to-r from-amber-900/30 via-yellow-900/20 to-amber-900/30 rounded-xl border border-amber-500/40">
<div class="flex items-start gap-3">
<div class="text-2xl shrink-0">✨</div>
<div>
<div class="text-sm font-bold text-amber-300 mb-1">You did this with minimal Copilot configuration.</div>
<div class="text-xs text-gray-300">/init gave the agent basic orientation — no custom instructions, no skills, no architecture files. <span class="text-amber-200 font-semibold">Imagine what a properly configured workspace looks like.</span></div>
<div class="text-xs text-blue-400/80 mt-2">→ <a href="https://msbart2.github.io/CopilotTraining/tech-talks/copilot-primitives/1" target="_blank" class="underline underline-offset-2 hover:text-blue-300">Copilot Primitives</a> — what configuration actually unlocks</div>
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
