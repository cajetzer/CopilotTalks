---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## From Issue to Pull Request
  GitHub Copilot's Coding Agent in Practice
drawings:
  persist: false
transition: slide-left
title: From Issue to Pull Request
module: tech-talks/copilot-web
status: active
updated: 2026-04-06
mdc: true
---

<script setup>
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="From Issue to Pull Request"
subtitle="GitHub Copilot's Coding Agent in Practice"
tagline="What if filing an issue was the same as fixing it?"
meta="Tech Talk · 40 minutes"
/>

---

<!-- SLIDE: The Core Question -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤔 The Core Question</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border-2 border-cyan-500/40 text-center">
<div class="text-3xl font-semibold mb-4">"What if filing an issue was the same as fixing it?"</div>
<div class="text-xl opacity-90 mt-6">Every team has a backlog of well-understood work that never gets prioritized — dependency upgrades, test scaffolding, documentation sync. <span class="text-cyan-300 font-semibold">The coding agent closes the gap between "we know what needs doing" and "it's done."</span></div>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 rounded-lg border border-cyan-500/20 text-center">
<div class="text-cyan-300 font-bold">Assign an Issue</div>
<div class="opacity-70 mt-1">From browser or mobile</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-lg border border-blue-500/20 text-center">
<div class="text-blue-300 font-bold">Agent Implements</div>
<div class="opacity-70 mt-1">Autonomous, sandboxed</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 rounded-lg border border-indigo-500/20 text-center">
<div class="text-indigo-300 font-bold">Review Draft PR</div>
<div class="opacity-70 mt-1">Evidence + tests included</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Table of Contents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-6">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Table of Contents</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">🔄</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Delegation Loop</div>
<div class="text-sm text-gray-300 mt-1">From assignment to draft PR</div>
<div class="text-xs text-cyan-400/70 mt-2">Asynchronous, evidence-driven</div>
</div>
</div>
<div @click="$nav.go(9)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">✍️</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Writing Issues</div>
<div class="text-sm text-gray-300 mt-1">Specs that produce quality PRs</div>
<div class="text-xs text-blue-400/70 mt-2">Template-driven, image-capable</div>
</div>
</div>
<div @click="$nav.go(13)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">🔒</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Trust &amp; Configuration</div>
<div class="text-sm text-gray-300 mt-1">Environment setup and firewall</div>
<div class="text-xs text-indigo-400/70 mt-2">Setup before enforcement</div>
</div>
</div>
<div @click="$nav.go(17)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">✅</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Review Workflow</div>
<div class="text-sm text-gray-300 mt-1">Mobile-ready, agents-first</div>
<div class="text-xs text-purple-400/70 mt-2">4hr → 30min turnaround</div>
</div>
</div>
</div>
<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — The Delegation Loop -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">The Delegation Loop</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">From Issue Assignment to Draft PR</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-cyan-300 font-semibold">Three Triggers</div>
<div class="text-xs opacity-70 mt-1">Browser, VS Code, or mobile — same async session</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🔬</div>
<div class="text-blue-300 font-semibold">Sandboxed Execution</div>
<div class="text-xs opacity-70 mt-1">Ephemeral Ubuntu runner, destroyed after use</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">⚖️</div>
<div class="text-indigo-300 font-semibold">Separation of Duties</div>
<div class="text-xs opacity-70 mt-1">Assigner cannot approve — enforced by GitHub</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Developer involvement begins at code review, not before</span><br />
<span class="text-cyan-300 mt-1 block">↳ a closed loop from issue to reviewable PR</span>
</div>
</div>
</div>

---

<!-- SLIDE: Triggering the Agent -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Delegation Loop</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Three Ways to Trigger</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-6 w-full max-w-5xl">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/40 flex flex-col items-center text-center">
<div class="text-4xl mb-3">🌐</div>
<div class="text-lg font-bold text-cyan-300 mb-2">GitHub.com</div>
<div class="text-sm opacity-80">Open issue → Assignees → select <span class="text-cyan-300 font-mono">Copilot</span></div>
<div class="text-xs mt-3 opacity-60">Or type <span class="font-mono">/assigntopilot</span> in a comment</div>
</div>
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/40 flex flex-col items-center text-center">
<div class="text-4xl mb-3">💻</div>
<div class="text-lg font-bold text-blue-300 mb-2">VS Code</div>
<div class="text-sm opacity-80">Copilot Chat → <span class="font-mono text-blue-300">@github Create a PR that fixes #427</span></div>
<div class="text-xs mt-3 opacity-60">Returns immediately — agent works async</div>
</div>
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/40 flex flex-col items-center text-center">
<div class="text-4xl mb-3">📱</div>
<div class="text-lg font-bold text-indigo-300 mb-2">GitHub Mobile</div>
<div class="text-sm opacity-80">Open issue → tap Assignees → select Copilot</div>
<div class="text-xs mt-3 opacity-60">Trigger from anywhere, review on the go</div>
</div>
</div>
<div class="mt-8 p-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/20 text-center max-w-3xl">
<div class="text-sm opacity-80">All three paths create the same asynchronous session — no need to stay connected while the agent works</div>
</div>
</div>
</div>

---

<!-- SLIDE: Inside the Sandbox -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Delegation Loop</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">What Happens Inside the Sandbox</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-r from-cyan-900/30 to-cyan-800/20 rounded-lg border-l-4 border-cyan-400 flex items-start gap-3">
<div class="text-cyan-400 font-bold text-sm w-5 shrink-0">1</div>
<div class="text-sm">Provision ephemeral <span class="text-cyan-300">Ubuntu runner</span> — fresh for every session</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-lg border-l-4 border-blue-400 flex items-start gap-3">
<div class="text-blue-400 font-bold text-sm w-5 shrink-0">2</div>
<div class="text-sm">Run <span class="text-blue-300 font-mono">copilot-setup-steps.yml</span> — installs deps, configures tooling</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-900/30 to-indigo-800/20 rounded-lg border-l-4 border-indigo-400 flex items-start gap-3">
<div class="text-indigo-400 font-bold text-sm w-5 shrink-0">3</div>
<div class="text-sm">Clone repo + read <span class="text-indigo-300">issue, comments, linked PRs, instructions</span></div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-900/30 to-purple-800/20 rounded-lg border-l-4 border-purple-400 flex items-start gap-3">
<div class="text-purple-400 font-bold text-sm w-5 shrink-0">4</div>
<div class="text-sm">Plan + implement across files — may iterate multiple rounds</div>
</div>
</div>
<div class="space-y-2">
<div class="p-3 bg-gradient-to-r from-violet-900/30 to-violet-800/20 rounded-lg border-l-4 border-violet-400 flex items-start gap-3">
<div class="text-violet-400 font-bold text-sm w-5 shrink-0">5</div>
<div class="text-sm">Run <span class="text-violet-300">build, tests, linters</span> — CI pipeline runs inside sandbox</div>
</div>
<div class="p-3 bg-gradient-to-r from-fuchsia-900/30 to-fuchsia-800/20 rounded-lg border-l-4 border-fuchsia-400 flex items-start gap-3">
<div class="text-fuchsia-400 font-bold text-sm w-5 shrink-0">6</div>
<div class="text-sm">Create branch <span class="text-fuchsia-300 font-mono">copilot/issue-NNN</span></div>
</div>
<div class="p-3 bg-gradient-to-r from-pink-900/30 to-pink-800/20 rounded-lg border-l-4 border-pink-400 flex items-start gap-3">
<div class="text-pink-400 font-bold text-sm w-5 shrink-0">7</div>
<div class="text-sm">Open <span class="text-pink-300">draft PR</span> with evidence bundle — never merges itself</div>
</div>
<div class="p-3 bg-gradient-to-r from-rose-900/30 to-rose-800/20 rounded-lg border-l-4 border-rose-400 flex items-start gap-3">
<div class="text-rose-400 font-bold text-sm w-5 shrink-0">8</div>
<div class="text-sm">Destroy runner — no persistent environment, no residual access</div>
</div>
</div>
</div>
<div class="mt-4 text-center text-xs opacity-50">Session log visible in the GitHub Agents tab throughout execution</div>
</div>
</div>

---

<!-- SLIDE: The Evidence Bundle -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Delegation Loop</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-base font-bold text-white mb-0.5">The Evidence Bundle</div>
<div class="text-xs text-gray-400">Included in every draft PR — read this before opening the diff</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 max-w-4xl w-full">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30">
<div class="text-xl mb-1">📝</div>
<div class="text-sm font-bold text-cyan-300 mb-1">Summary of Changes</div>
<div class="text-xs opacity-80">What was changed and why, in plain language — the agent's stated rationale for every decision</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-xl mb-1">✅</div>
<div class="text-sm font-bold text-blue-300 mb-1">Test Results</div>
<div class="text-xs opacity-80">Pass/fail status from the CI run inside the sandbox — know if the change works before reading the code</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-xl mb-1">📁</div>
<div class="text-sm font-bold text-indigo-300 mb-1">Files Modified</div>
<div class="text-xs opacity-80">List of changed files with the agent's rationale for each — scoped review before opening the full diff</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-xl mb-1">🔥</div>
<div class="text-sm font-bold text-purple-300 mb-1">Firewall Alerts</div>
<div class="text-xs opacity-80">Any blocked outbound connections — investigate before merging if unexpected calls appear</div>
</div>
</div>
<div class="mt-2 p-2 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/20 text-center max-w-3xl">
<div class="text-xs">Reading the evidence bundle takes <span class="text-cyan-300 font-semibold">2–3 minutes</span> and gives a complete picture of what the agent did — <span class="text-blue-300">before opening the diff</span></div>
</div>
</div>
</div>

---

<!-- SLIDE: Separation of Duties -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Delegation Loop</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Separation of Duties</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-4">
<div class="max-w-4xl w-full grid grid-cols-2 gap-4">
<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50">
<div class="text-2xl mb-2 text-center">⚖️</div>
<div class="text-base font-bold text-cyan-300 mb-2 text-center">The Constraint</div>
<div class="text-sm opacity-90 leading-relaxed">The developer who <span class="text-cyan-300 font-semibold">assigned</span> the issue <span class="text-red-400 font-semibold">cannot be the approver</span> of the resulting PR.</div>
<div class="mt-2 text-xs opacity-60">Enforced by GitHub — not configurable, and intentional</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50">
<div class="text-2xl mb-2 text-center">🛡️</div>
<div class="text-base font-bold text-blue-300 mb-2 text-center">Why It Matters</div>
<div class="text-sm opacity-90 leading-relaxed">Every agent-generated change gets a <span class="text-blue-300 font-semibold">second human review</span> before reaching the default branch — regardless of who assigned the task.</div>
<div class="mt-2 text-xs opacity-60">No direct-to-merge path exists, even for repository admins</div>
</div>
</div>
<div class="max-w-4xl w-full p-4 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl border border-indigo-500/20">
<div class="text-sm font-semibold text-center mb-3">Practical Implication for Teams</div>
<div class="grid grid-cols-3 gap-4 text-sm">
<div class="text-center">
<div class="text-xl mb-1">👤</div>
<div class="text-indigo-300 font-medium">Tech Lead</div>
<div class="opacity-70 text-xs">Assigns tasks to Copilot</div>
</div>
<div class="text-center">
<div class="text-xl mb-1">🤖</div>
<div class="text-blue-300 font-medium">Agent</div>
<div class="opacity-70 text-xs">Implements + opens draft PR</div>
</div>
<div class="text-center">
<div class="text-xl mb-1">👥</div>
<div class="text-cyan-300 font-medium">Second Reviewer</div>
<div class="opacity-70 text-xs">Reviews and approves</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Writing Issues That Work -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Writing Issues That Work</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Specs That Produce Quality PRs</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">✍️</div>
<div class="text-blue-300 font-semibold">Issue Anatomy</div>
<div class="text-xs opacity-70 mt-1">Criteria, scope, context, constraints</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📸</div>
<div class="text-indigo-300 font-semibold">Image-Based Creation</div>
<div class="text-xs opacity-70 mt-1">Screenshot → structured issue in 2 minutes</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-purple-300 font-semibold">85% Time Savings</div>
<div class="text-xs opacity-70 mt-1">14 min → 2 min per issue filed</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">The quality of the agent's PR is a direct reflection of the quality of the issue</span><br />
<span class="text-blue-300 mt-1 block">↳ write issues the way you'd write a spec for a junior developer</span>
</div>
</div>
</div>

---

<!-- SLIDE: Effective Issue Anatomy -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✍️ Writing Issues</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Weak vs. Effective Issues</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
<div class="p-5 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border-2 border-red-500/50">
<div class="text-red-400 font-bold text-base mb-3">❌ Weak — Inconsistent Results</div>
<div class="p-3 bg-black/30 rounded-lg font-mono text-sm">
<div class="text-gray-400">## Fix the authentication bug</div>
<div class="text-gray-400 mt-1">The auth is broken. Please fix it.</div>
</div>
<div class="mt-3 space-y-1 text-xs text-red-300/80">
<div>• No acceptance criteria — agent guesses "done"</div>
<div>• No scope — may change unintended files</div>
<div>• No context links — broad code search, missed files</div>
</div>
</div>
<div class="p-5 bg-gradient-to-br from-green-900/30 to-emerald-800/20 rounded-xl border-2 border-green-500/50">
<div class="text-green-400 font-bold text-base mb-3">✅ Effective — Consistent PRs</div>
<div class="p-3 bg-black/30 rounded-lg font-mono text-xs leading-relaxed">
<div class="text-blue-300">## Upgrade rate-limiting middleware v6 → v7</div>
<div class="mt-1 text-green-300">### Acceptance Criteria</div>
<div class="text-gray-300">- [ ] Updated to v7.x in package.json</div>
<div class="text-gray-300">- [ ] onLimitReached migrated to handler</div>
<div class="mt-1 text-yellow-300">### Scope</div>
<div class="text-gray-300">In: src/middleware/, tests/</div>
<div class="mt-1 text-purple-300">### Context</div>
<div class="text-gray-300">Migration guide: [link to changelog]</div>
</div>
</div>
</div>
<div class="mt-5 grid grid-cols-4 gap-3 max-w-5xl mx-auto">
<div class="p-3 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-lg border border-blue-500/20 text-center text-xs">
<div class="text-blue-300 font-bold mb-1">✓ Criteria</div>
<div class="opacity-70">Testable "done" conditions</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 rounded-lg border border-indigo-500/20 text-center text-xs">
<div class="text-indigo-300 font-bold mb-1">✓ Scope</div>
<div class="opacity-70">What's in and out</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/20 to-purple-800/10 rounded-lg border border-purple-500/20 text-center text-xs">
<div class="text-purple-300 font-bold mb-1">✓ Context</div>
<div class="opacity-70">Links + key files</div>
</div>
<div class="p-3 bg-gradient-to-br from-violet-900/20 to-violet-800/10 rounded-lg border border-violet-500/20 text-center text-xs">
<div class="text-violet-300 font-bold mb-1">✓ Constraints</div>
<div class="opacity-70">Patterns to follow</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Image-Based Issue Creation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✍️ Writing Issues</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Image-Based Issue Creation</div>
<div class="text-sm text-gray-400">Drag a screenshot into github.com/copilot — AI extracts the issue</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-5 max-w-5xl w-full items-start">
<div class="flex flex-col gap-3">
<div class="p-4 bg-gradient-to-br from-orange-900/30 to-red-900/20 rounded-xl border border-orange-500/30">
<div class="text-2xl mb-2">📸</div>
<div class="text-orange-300 font-bold text-sm mb-2">The Old Way</div>
<div class="text-xs opacity-80 leading-relaxed">Screenshot alert → manually read error → transcribe to GitHub → add labels → assign → <span class="text-red-300 font-bold">14 minutes</span> per alert</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-lg border border-red-500/20 text-center">
<div class="text-red-300 font-bold text-xs">~60% detail capture</div>
<div class="text-xs opacity-60">Manual transcription misses context</div>
</div>
</div>
<div class="flex flex-col items-center justify-center py-8 gap-2">
<div class="text-3xl">📷</div>
<div class="text-3xl text-cyan-400">→</div>
<div class="text-xl font-bold text-cyan-300">🤖</div>
<div class="text-xs text-center opacity-60 mt-2">Vision model reads full context</div>
</div>
<div class="flex flex-col gap-3">
<div class="p-4 bg-gradient-to-br from-cyan-900/30 to-green-900/20 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-2">🤖</div>
<div class="text-cyan-300 font-bold text-sm mb-2">With Web Copilot</div>
<div class="text-xs opacity-80 leading-relaxed">Drag screenshot → AI extracts errors, stack traces, timestamps, request IDs → structured issue in <span class="text-green-300 font-bold">2 minutes</span></div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-lg border border-green-500/20 text-center">
<div class="text-green-300 font-bold text-xs">~95% detail capture</div>
<div class="text-xs opacity-60">Vision model reads the full screenshot</div>
</div>
</div>
</div>
<div class="mt-5 flex gap-6 justify-center">
<div class="p-3 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/20 text-center">
<div class="text-cyan-300 font-bold text-lg">85%</div>
<div class="text-xs opacity-70">time reduction</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-500/20 text-center">
<div class="text-blue-300 font-bold text-lg">14 min → 2 min</div>
<div class="text-xs opacity-70">per issue filed</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/20 text-center">
<div class="text-indigo-300 font-bold text-lg">8 hrs/week</div>
<div class="text-xs opacity-70">saved at 40 alerts/week</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Trust & Configuration -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-violet-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-violet-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-violet-400 bg-clip-text text-transparent leading-tight">Trust &amp; Configuration</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Environment Setup and the Agent Firewall</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📄</div>
<div class="text-indigo-300 font-semibold">Setup Steps</div>
<div class="text-xs opacity-70 mt-1">copilot-setup-steps.yml controls the environment</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🛡️</div>
<div class="text-purple-300 font-semibold">Agent Firewall</div>
<div class="text-xs opacity-70 mt-1">Default allowlist + custom rules</div>
</div>
<div class="px-4 py-3 bg-violet-900/30 rounded-xl border border-violet-500/30">
<div class="text-2xl mb-1">🏢</div>
<div class="text-violet-300 font-semibold">Config Levels</div>
<div class="text-xs opacity-70 mt-1">Org and repo-level controls</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Setup before enforcement — get the environment right first</span><br />
<span class="text-indigo-300 mt-1 block">↳ firewall activates after setup steps complete</span>
</div>
</div>
</div>

---

<!-- SLIDE: copilot-setup-steps.yml -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Trust &amp; Configuration</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Configuring the Agent Environment</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
<div class="p-5 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl border border-indigo-500/30">
<div class="text-indigo-300 font-bold text-sm mb-3">📄 .github/workflows/copilot-setup-steps.yml</div>
<div class="p-3 bg-black/40 rounded-lg font-mono text-xs leading-relaxed">
<div class="text-yellow-300">name: "Copilot Setup Steps"</div>
<div class="mt-1 text-gray-400">on:</div>
<div class="text-gray-400">  workflow_dispatch:</div>
<div class="mt-1 text-gray-400">jobs:</div>
<div class="text-cyan-300">  copilot-setup-steps:</div>
<div class="text-gray-400">    runs-on: ubuntu-latest</div>
<div class="text-gray-400">    steps:</div>
<div class="text-gray-400">      - uses: actions/checkout@v4</div>
<div class="text-green-300">      - uses: actions/setup-node@v4</div>
<div class="text-gray-400">        with:</div>
<div class="text-gray-400">          node-version: '20'</div>
<div class="text-green-300">      - run: npm ci</div>
</div>
<div class="mt-2 text-xs text-red-300/80">⚠️ Job name must be exactly <span class="font-mono">copilot-setup-steps</span> — no other name works</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 rounded-lg border border-cyan-500/20 text-xs">
<div class="text-cyan-300 font-bold mb-1">🔑 Runs Before Firewall</div>
<div class="opacity-80">Private registry installs in setup steps succeed without needing allowlist entries — firewall activates after setup completes</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-lg border border-blue-500/20 text-xs">
<div class="text-blue-300 font-bold mb-1">🔧 Testable in CI</div>
<div class="opacity-80">Add <span class="font-mono text-blue-300">workflow_dispatch</span> + path triggers to validate setup before the agent runs it</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 rounded-lg border border-indigo-500/20 text-xs">
<div class="text-indigo-300 font-bold mb-1">�� Logs Visible</div>
<div class="opacity-80">Setup step logs appear in the Copilot session UI — environment debugging is straightforward</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/20 to-purple-800/10 rounded-lg border border-purple-500/20 text-xs">
<div class="text-purple-300 font-bold mb-1">⚡ Failure-Resilient</div>
<div class="opacity-80">If setup fails, agent continues and reports the failure in session log — setup errors don't silently block all work</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Agent Firewall -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Trust &amp; Configuration</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-1">The Agent Firewall</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
<div class="space-y-3">
<div class="p-4 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl border border-indigo-500/30">
<div class="text-indigo-300 font-bold mb-2">🛡️ Default Allowlist Includes</div>
<div class="space-y-1 text-sm">
<div class="flex items-center gap-2"><span class="text-green-400">✓</span><span>npm, PyPI, Maven, RubyGems, NuGet, Go modules</span></div>
<div class="flex items-center gap-2"><span class="text-green-400">✓</span><span>apt, yum, apk (OS package managers)</span></div>
<div class="flex items-center gap-2"><span class="text-green-400">✓</span><span>Docker Hub, ghcr.io, gcr.io (container registries)</span></div>
<div class="flex items-center gap-2"><span class="text-green-400">✓</span><span>GitHub APIs + raw.githubusercontent.com</span></div>
<div class="flex items-center gap-2"><span class="text-green-400">✓</span><span>SSL certificate authorities + Playwright browsers</span></div>
</div>
<div class="mt-2 text-xs text-cyan-300/80">Most repos work immediately — no custom allowlist config needed</div>
</div>
<div class="p-4 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-orange-500/30">
<div class="text-orange-300 font-bold mb-2">⚠️ Firewall Limitations</div>
<div class="space-y-1 text-xs opacity-80">
<div>• Only applies to bash processes started by the agent</div>
<div>• Does <span class="text-red-300 font-semibold">not</span> apply to MCP servers or setup steps</div>
<div>• Only within the GitHub Actions appliance</div>
<div>• Does not apply to self-hosted or Windows runners</div>
</div>
</div>
</div>
<div class="space-y-3">
<div class="p-4 bg-gradient-to-br from-purple-900/30 to-violet-900/20 rounded-xl border border-purple-500/30">
<div class="text-purple-300 font-bold mb-2">🚨 Blocked Connection Log (in PR)</div>
<div class="p-3 bg-black/40 rounded-lg font-mono text-xs leading-relaxed">
<div class="text-yellow-300">⚠️ Firewall blocked connection</div>
<div class="text-gray-400">Target: unauthorized-domain.com:443</div>
<div class="text-gray-400">Command: curl https://...</div>
<div class="text-gray-400">Time: 2026-04-06T14:32:17Z</div>
</div>
<div class="mt-2 text-xs opacity-70">Appears in the PR evidence bundle — always investigate before merging</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Firewall Configuration Levels -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Trust &amp; Configuration</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Firewall Configuration Levels</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 max-w-5xl w-full">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50">
<div class="text-blue-300 font-bold text-lg mb-4 text-center">🏢 Organization Level</div>
<div class="space-y-3 text-sm">
<div class="p-2 bg-blue-900/20 rounded-lg">
<div class="font-semibold text-blue-200">Enable/Disable Firewall</div>
<div class="text-xs opacity-70 mt-1">Enabled · Disabled · Let repositories decide (default)</div>
</div>
<div class="p-2 bg-blue-900/20 rounded-lg">
<div class="font-semibold text-blue-200">Recommended Allowlist</div>
<div class="text-xs opacity-70 mt-1">Toggle the default package registry list on/off</div>
</div>
<div class="p-2 bg-blue-900/20 rounded-lg">
<div class="font-semibold text-blue-200">Custom Allowlist</div>
<div class="text-xs opacity-70 mt-1">Add domains or URLs — applies to all repos in the org</div>
</div>
<div class="p-2 bg-blue-900/20 rounded-lg">
<div class="font-semibold text-blue-200">Repo Custom Rules</div>
<div class="text-xs opacity-70 mt-1">Allow or prevent repos from adding their own rules</div>
</div>
</div>
<div class="mt-3 text-xs opacity-50 text-center">Settings → Code, planning &amp; automation → Copilot → Cloud agent</div>
</div>
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50">
<div class="text-indigo-300 font-bold text-lg mb-4 text-center">📁 Repository Level</div>
<div class="space-y-3 text-sm">
<div class="p-2 bg-indigo-900/20 rounded-lg">
<div class="font-semibold text-indigo-200">Enable/Disable Firewall</div>
<div class="text-xs opacity-70 mt-1">Only if org is set to "Let repositories decide"</div>
</div>
<div class="p-2 bg-indigo-900/20 rounded-lg">
<div class="font-semibold text-indigo-200">Recommended Allowlist</div>
<div class="text-xs opacity-70 mt-1">Toggle on/off if org allows repository decisions</div>
</div>
<div class="p-2 bg-indigo-900/20 rounded-lg">
<div class="font-semibold text-indigo-200">Custom Allowlist</div>
<div class="text-xs opacity-70 mt-1">Add domains or URLs — combined with org-level rules</div>
</div>
</div>
<div class="mt-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/20 text-xs text-yellow-300/80">
💡 Org-level rules lock repo overrides when set to Enabled or Disabled
</div>
<div class="mt-2 text-xs opacity-50 text-center">Repository Settings → Code &amp; automation → Copilot → Cloud agent</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — The Review Workflow -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">The Review Workflow</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">From Draft PR to Merge</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">📋</div>
<div class="text-purple-300 font-semibold">Evidence-First</div>
<div class="text-xs opacity-70 mt-1">Read bundle before touching the diff</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">📱</div>
<div class="text-pink-300 font-semibold">Mobile Review</div>
<div class="text-xs opacity-70 mt-1">4 hr → 30 min turnaround</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🧠</div>
<div class="text-rose-300 font-semibold">What to Delegate</div>
<div class="text-xs opacity-70 mt-1">Design judgment stays human</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">The coding agent opens a draft PR — never merges</span><br />
<span class="text-purple-300 mt-1 block">↳ review is where teams maintain quality and build trust</span>
</div>
</div>
</div>

---

<!-- SLIDE: Evidence-First Review -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Review Workflow</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Evidence-First Review Process</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="max-w-5xl mx-auto">
<div class="grid grid-cols-3 gap-3 mb-3">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-violet-900/30 rounded-xl border border-purple-500/40">
<div class="text-xl mb-1">1️⃣</div>
<div class="text-purple-300 font-bold text-sm mb-1">Read Evidence Bundle</div>
<div class="text-xs opacity-80 leading-relaxed">Check summary, test results, firewall alerts — 2-3 minutes to understand what happened before touching the diff</div>
</div>
<div class="p-3 bg-gradient-to-br from-violet-900/40 to-fuchsia-900/30 rounded-xl border border-violet-500/40">
<div class="text-xl mb-1">2️⃣</div>
<div class="text-violet-300 font-bold text-sm mb-1">Review the Diff</div>
<div class="text-xs opacity-80 leading-relaxed">Focus on correctness, edge cases, security — apply the same criteria as for any contributor's PR</div>
</div>
<div class="p-3 bg-gradient-to-br from-fuchsia-900/40 to-pink-900/30 rounded-xl border border-fuchsia-500/40">
<div class="text-xl mb-1">3️⃣</div>
<div class="text-fuchsia-300 font-bold text-sm mb-1">Approve or Iterate</div>
<div class="text-xs opacity-80 leading-relaxed">Leave specific PR comments → agent reads, pushes commits, re-runs tests. Effective for 3–5 iterations.</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/20 to-emerald-900/10 rounded-xl border border-green-500/20 mb-2">
<div class="text-green-300 font-bold text-xs mb-1">✅ Comments That Work</div>
<div class="p-2 bg-black/30 rounded font-mono text-xs">The handler in src/middleware/rateLimiter.js uses res.status(429).send() but we always use our error response wrapper. See src/utils/errorResponse.js for the pattern.</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-xl border border-red-500/20">
<div class="text-red-300 font-bold text-xs mb-1">❌ Comments That Are Too Vague</div>
<div class="p-2 bg-black/30 rounded font-mono text-xs">This looks wrong. Fix it.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Mobile Review and Custom Agents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Review Workflow</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Mobile Review + Custom Agents</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
<div class="p-5 bg-gradient-to-br from-purple-900/30 to-violet-900/20 rounded-xl border border-purple-500/30">
<div class="text-purple-300 font-bold mb-3">📱 Mobile Review Workflow</div>
<div class="space-y-2 text-sm">
<div class="flex items-start gap-2">
<span class="text-purple-400 font-bold shrink-0">1.</span>
<span>Open draft PR notification in GitHub Mobile</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 font-bold shrink-0">2.</span>
<span>Read evidence bundle summary (2 min)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 font-bold shrink-0">3.</span>
<span>Invoke <span class="font-mono text-purple-300">@review-enforcer</span> custom agent</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 font-bold shrink-0">4.</span>
<span>Read analysis: security, logic, test coverage</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 font-bold shrink-0">5.</span>
<span>Approve or leave specific change requests</span>
</div>
</div>
<div class="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-500/20 text-center">
<div class="text-green-300 font-bold">4 hr → 30 min</div>
<div class="text-xs opacity-70">average PR wait time with mobile reviews</div>
</div>
</div>
<div class="p-5 bg-gradient-to-br from-violet-900/30 to-pink-900/20 rounded-xl border border-violet-500/30">
<div class="text-violet-300 font-bold mb-3">🤖 @review-enforcer Agent</div>
<div class="p-3 bg-black/40 rounded-lg font-mono text-xs leading-relaxed">
<div class="text-blue-300"># @review-enforcer</div>
<div class="mt-2 text-yellow-300">## Decision</div>
<div class="text-gray-300">APPROVE / REQUEST_CHANGES</div>
<div class="mt-2 text-yellow-300">## Findings</div>
<div class="text-red-300">🔴 Critical (blocks merge)</div>
<div class="text-yellow-300">🟡 Important (request changes)</div>
<div class="text-green-300">🟢 Acceptable</div>
<div class="mt-2 text-gray-400">Focus: security, correctness,</div>
<div class="text-gray-400">breaking changes, error handling.</div>
<div class="text-gray-400">Max 300 words. Mobile-optimized.</div>
</div>
<div class="mt-2 text-xs opacity-60">Place in .github/agents/review-enforcer.md</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What to Delegate -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Review Workflow</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">🧠 What to Delegate vs. Keep Human</div>
</div>
<div class="relative z-10 flex-1 min-h-0 overflow-hidden">
<div class="grid grid-cols-2 gap-4 max-w-5xl w-full">
<div class="p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl border-2 border-green-500/40">
<div class="text-green-400 font-bold text-base mb-3">✅ Delegate to Coding Agent</div>
<div class="space-y-2 text-sm">
<div class="flex items-start gap-2"><span class="text-green-400">→</span><span>Dependency upgrades with clear migration path</span></div>
<div class="flex items-start gap-2"><span class="text-green-400">→</span><span>CRUD endpoint scaffolding from established patterns</span></div>
<div class="flex items-start gap-2"><span class="text-green-400">→</span><span>Documentation sync after refactoring</span></div>
<div class="flex items-start gap-2"><span class="text-green-400">→</span><span>Test coverage for flagged gaps</span></div>
<div class="flex items-start gap-2"><span class="text-green-400">→</span><span>Lint and style cleanup across files</span></div>
</div>
<div class="mt-2 text-xs opacity-60">Pattern: well-understood scope, single repo, 30 min–4 hr task</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-xl border-2 border-blue-500/40">
<div class="text-blue-400 font-bold text-base mb-3">👤 Keep Human</div>
<div class="space-y-2 text-sm">
<div class="flex items-start gap-2"><span class="text-blue-400">→</span><span>Novel feature design requiring creative judgment</span></div>
<div class="flex items-start gap-2"><span class="text-blue-400">→</span><span>Complex debugging (local environment required)</span></div>
<div class="flex items-start gap-2"><span class="text-blue-400">→</span><span>Multi-repository coordination</span></div>
<div class="flex items-start gap-2"><span class="text-blue-400">→</span><span>Architecture decisions and design exploration</span></div>
<div class="flex items-start gap-2"><span class="text-blue-400">→</span><span>Windows-only tooling (agent runs Ubuntu)</span></div>
</div>
<div class="mt-2 text-xs opacity-60">Pattern: open-ended, exploration needed, spans multiple repos</div>
</div>
</div>
<div class="mt-3 p-3 bg-gradient-to-r from-cyan-900/20 to-indigo-900/20 rounded-xl border border-cyan-500/20 text-center max-w-4xl">
<div class="text-sm">💡 <span class="text-cyan-300 font-semibold">The core shift:</span> Developers handle work requiring design judgment. The coding agent handles work that is <span class="text-indigo-300 font-semibold">well-understood, bounded, and repeatable</span> — the backlog items everyone knows need doing and no one has time to prioritize.</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "VS Code Documentation", color: "cyan", items: [
        { href: "https://code.visualstudio.com/docs/copilot/copilot-coding-agent", label: "GitHub Copilot coding agent", description: "Core concepts and VS Code integration" },
        { href: "https://docs.github.com/en/copilot/concepts/coding-agent", label: "GitHub Docs — About the Coding Agent", description: "Architecture, security model, capabilities, and limitations" },
        { href: "https://docs.github.com/en/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent", label: "Customizing the Development Environment", description: "copilot-setup-steps.yml reference, runner config, and options" },
        { href: "https://docs.github.com/en/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent", label: "Customizing or Disabling the Agent Firewall", description: "Allowlist management, org/repo controls, and firewall limitations" }
    ] },
    { title: "GitHub Blog & Resources", color: "purple", items: [
        { href: "https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-now-available-for-copilot-enterprise-and-copilot-pro-users/", label: "GitHub Blog — Assigning Issues with Coding Agent", description: "Delegation workflow, evidence bundle, and PR lifecycle" },
        { href: "https://github.blog/ai-and-ml/github-copilot/onboarding-your-ai-peer-programmer/", label: "Onboarding Your AI Peer Programmer", description: "Issue quality, setup strategies, and team adoption patterns" },
        { href: "https://docs.github.com/en/copilot/reference/copilot-allowlist-reference", label: "Copilot Allowlist Reference", description: "Complete list of hosts in the recommended allowlist" },
        { href: "https://github.blog/changelog/2025-07-30-copilot-coding-agent-custom-setup-steps-are-now-more-reliable/", label: "Custom Setup Steps — More Reliable", description: "Failure resilience and setup log visibility improvements" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="GitHub Copilot's Coding Agent in Practice"
:cards="[
  { icon: '⚡', value: '85%', detail: 'Reduction in issue triage time', subdetail: 'Automated classification and context gathering' },
  { icon: '📱', value: '4hr → 30min', detail: 'PR review with mobile workflow', subdetail: 'Review agent output on phone, merge from anywhere' },
  { icon: '🛡️', value: '0 merges', detail: 'Agent never merges its own code', subdetail: 'Human approval required for all changes' },
]"
prompt="Questions? Let's discuss which tasks in your backlog are ready to delegate today."
/>