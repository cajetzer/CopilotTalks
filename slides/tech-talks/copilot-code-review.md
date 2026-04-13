---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot Code Review
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot Code Review - From Bottleneck to Accelerator
module: tech-talks/copilot-code-review
mdc: true
status: active
updated: 2025-04-10
---

<!-- SLIDE: Title -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">GitHub Copilot Code Review</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">From Bottleneck to Accelerator</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Reduce PR review time while maintaining code quality and compliance</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 35-40 minutes</span>
</div>

---

<!-- SLIDE: The Core Question -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤔 The Core Question</span>
<div class="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-8 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl border-2 border-amber-500/40 text-center">
<div class="text-3xl font-semibold mb-4">"How can GitHub Copilot Code Review reduce PR review time while maintaining (or improving) code quality and compliance?"</div>
<div class="text-xl opacity-90 mt-6">Every team struggles with the same tradeoff — faster reviews or better quality. <span class="text-amber-300 font-semibold">AI-assisted review breaks this constraint by handling the systematic checks humans often miss.</span></div>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm">
<div class="p-3 bg-gradient-to-br from-amber-900/20 to-amber-800/10 rounded-lg border border-amber-500/20 text-center">
<div class="text-amber-300 font-bold">Review Bottleneck</div>
<div class="opacity-70 mt-1">3-4 day wait times</div>
</div>
<div class="p-3 bg-gradient-to-br from-orange-900/20 to-orange-800/10 rounded-lg border border-orange-500/20 text-center">
<div class="text-orange-300 font-bold">Quality Gaps</div>
<div class="opacity-70 mt-1">40-60% miss rate</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-lg border border-red-500/20 text-center">
<div class="text-red-300 font-bold">Compliance Risk</div>
<div class="opacity-70 mt-1">Standards hard to enforce</div>
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
<div class="grid grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">⚙️</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Setup & Configuration</div>
<div class="text-sm text-gray-300 mt-1">GitHub Rulesets UI + instruction files</div>
<div class="text-xs text-cyan-400/70 mt-2">5-10 minutes to first automated review</div>
</div>
</div>
<div @click="$nav.go(8)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">🔍</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Understanding Review Feedback</div>
<div class="text-sm text-gray-300 mt-1">6 capability categories with examples</div>
<div class="text-xs text-blue-400/70 mt-2">Security, quality, performance, compliance</div>
</div>
</div>
<div @click="$nav.go(12)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">💰</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Measuring ROI</div>
<div class="text-sm text-gray-300 mt-1">Calculator + optional automation</div>
<div class="text-xs text-indigo-400/70 mt-2">40-60% cycle time reduction, 90%+ security improvement</div>
</div>
</div>
<div @click="$nav.go(15)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🛡️</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Enterprise Compliance</div>
<div class="text-sm text-gray-300 mt-1">HIPAA, PCI-DSS, SOC2 patterns</div>
<div class="text-xs text-purple-400/70 mt-2">Custom instruction files for regulatory requirements</div>
</div>
</div>
</div>

<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Setup & Configuration -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Setup & Configuration</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">From zero to automated review in 5-10 minutes</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">⚙️</div>
<div class="text-cyan-300 font-semibold">GitHub Rulesets UI</div>
<div class="text-xs opacity-70 mt-1">Enable automatic reviews — no YAML config needed</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">📝</div>
<div class="text-blue-300 font-semibold">Custom Instructions</div>
<div class="text-xs opacity-70 mt-1">Tailor review behavior to team standards</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-indigo-300 font-semibold">Language-Specific</div>
<div class="text-xs opacity-70 mt-1">Python, TypeScript, compliance patterns</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Basic Setup (5 minutes) -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Setup & Configuration</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Basic Setup via GitHub Rulesets (5 minutes)</div>
<div class="text-xs text-white/50">Enable automatic code review through the UI — no config files required</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 text-sm">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-semibold mb-1.5">📍 Steps</div>
<div class="space-y-1.5 text-xs">
<div class="flex items-start gap-2">
<div class="text-cyan-400 font-mono">1.</div>
<div>Settings → Rules → Rulesets</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 font-mono">2.</div>
<div>New ruleset, set status to "Active"</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 font-mono">3.</div>
<div>Target branches: main (or your default)</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 font-mono">4.</div>
<div>Enable: "Automatically request Copilot code review"</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 font-mono">5.</div>
<div>Optional: Review new pushes + draft PRs</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400 font-mono">6.</div>
<div>Click Create → Done!</div>
</div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1.5">✅ What Happens Next</div>
<div class="space-y-1.5 text-xs">
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div>Copilot automatically reviews all PRs targeting selected branches</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div>Feedback appears as inline comments within 1-2 minutes</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div>No YAML files, no webhooks to configure</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1.5">🎯 Manual Requests</div>
<div class="text-xs opacity-80">
Developers can request focused review at any time:
<code class="block mt-1.5 p-2 bg-gray-950/60 rounded text-indigo-300 text-xs">@github-copilot review for security and performance</code>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Custom Guidance with Instructions -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Setup & Configuration</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Custom Guidance with .github/copilot-instructions.md</div>
<div class="text-xs text-white/50">Tailor review behavior to your team's standards — Markdown format, not YAML</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-2.5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-semibold mb-1">🛡️ Security Standards</div>
<div class="opacity-80">Flag hardcoded secrets, require parameterized queries, validate input handling</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1">✨ Code Quality</div>
<div class="opacity-80">Suggest refactoring for functions > 50 lines, check error handling</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1">⚡ Performance</div>
<div class="opacity-80">Identify N+1 queries, flag inefficient algorithms, suggest caching</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1">🧪 Testing</div>
<div class="opacity-80">Note missing tests, suggest edge cases, flag weak assertions</div>
</div>
</div>

<div class="p-3 bg-gray-950/60 rounded-lg border border-gray-700/50">
<div class="text-xs text-gray-400 mb-1.5 font-semibold">Example: .github/copilot-instructions.md</div>
<div class="font-mono text-xs opacity-90 space-y-1">
<div class="text-cyan-300">## Security Standards</div>
<div class="text-gray-300">- Flag hardcoded secrets, API keys, or credentials</div>
<div class="text-gray-300">- Require parameterized queries (no string concatenation)</div>
<div class="text-gray-300">- Check input validation on user-facing code</div>
<div class="text-cyan-300 mt-2">## Code Quality</div>
<div class="text-gray-300">- Suggest refactoring for functions > 50 lines</div>
<div class="text-gray-300">- Flag unclear variable names</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Language-Specific Instructions -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Setup & Configuration</span>
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
<div class="text-lg font-bold text-white mb-0.5">Language-Specific Guidance</div>
<div class="text-xs text-white/50">Create .github/instructions/{language}.instructions.md with YAML frontmatter</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-2.5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-semibold mb-1.5">🐍 Python Standards</div>
<div class="font-mono text-xs opacity-90 space-y-1">
<div class="text-gray-400">---</div>
<div class="text-blue-300">applyTo: "**/*.py"</div>
<div class="text-gray-400">---</div>
<div class="mt-1.5 text-gray-300">• Enforce PEP 8 conventions</div>
<div class="text-gray-300">• Require type hints</div>
<div class="text-gray-300">• Flag bare except: clauses</div>
<div class="text-gray-300">• Validate async/await patterns</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1.5">📘 TypeScript Standards</div>
<div class="font-mono text-xs opacity-90 space-y-1">
<div class="text-gray-400">---</div>
<div class="text-blue-300">applyTo: "**/*.ts, **/*.tsx"</div>
<div class="text-gray-400">---</div>
<div class="mt-1.5 text-gray-300">• Require return type annotations</div>
<div class="text-gray-300">• Flag 'any' type usage</div>
<div class="text-gray-300">• Check async error handling</div>
<div class="text-gray-300">• Require structured logging</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1.5 text-sm">💡 Best Practice: Keep Instructions Focused</div>
<div class="grid grid-cols-3 gap-2 text-xs">
<div class="opacity-80">
<span class="text-indigo-400 font-semibold">Limit:</span> ~4000 chars max
</div>
<div class="opacity-80">
<span class="text-indigo-400 font-semibold">Prioritize:</span> Critical rules first
</div>
<div class="opacity-80">
<span class="text-indigo-400 font-semibold">Be Actionable:</span> Explain why it matters
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Integrating with Branch Protection -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Setup & Configuration</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Integrating with Branch Protection Rules</div>
<div class="text-xs text-white/50">Make Copilot Code Review a gating mechanism for critical issues</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-4">
<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-semibold mb-2 text-sm">🔒 Block Merges on Critical Issues</div>
<div class="text-xs space-y-1.5 opacity-90">
<div class="flex items-start gap-2">
<div class="text-cyan-400">1.</div>
<div>Settings → Branches → Edit protection rule</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400">2.</div>
<div>Enable "Require status checks to pass"</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400">3.</div>
<div>Select "Copilot Code Review" in required checks</div>
</div>
<div class="flex items-start gap-2">
<div class="text-cyan-400">4.</div>
<div>Developers must address critical findings before merge</div>
</div>
</div>
</div>

<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1.5 text-sm">📋 Repository vs. Organization</div>
<div class="text-xs space-y-1 opacity-90">
<div><span class="text-blue-400 font-semibold">Pilot:</span> 1-2 repos, 5-10 min setup</div>
<div><span class="text-blue-400 font-semibold">Org-wide:</span> 30-60 min, shared templates</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1.5 text-sm">🎯 Recommended Path</div>
<div class="text-xs opacity-90">Start with pilot → Gather feedback → Refine instructions → Roll out org-wide</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-r from-emerald-900/30 to-green-900/30 rounded-xl border border-emerald-500/30">
<div class="flex items-center gap-3 text-sm">
<div class="text-2xl">✨</div>
<div class="flex-1">
<div class="text-emerald-300 font-bold">Result: Automated Quality Gate</div>
<div class="text-xs opacity-80 mt-1">Copilot becomes a gating mechanism — critical issues must be resolved before merge, without relying on human vigilance alone</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Understanding Review Feedback -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Understanding Review Feedback</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">6 capability categories with contextual, educational feedback</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🛡️</div>
<div class="text-blue-300 font-semibold">Security Detection</div>
<div class="text-xs opacity-70 mt-1">SQL injection, XSS, secrets, auth flaws</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">✨</div>
<div class="text-indigo-300 font-semibold">Code Quality</div>
<div class="text-xs opacity-70 mt-1">Complexity, duplication, maintainability</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-purple-300 font-semibold">Performance</div>
<div class="text-xs opacity-70 mt-1">N+1 queries, memory leaks, algorithms</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Security & Compliance Detection -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Understanding Review Feedback</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Security & Compliance Detection</div>
<div class="text-xs text-white/50">Identifies vulnerabilities with remediation code and explanations</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="space-y-2">
<div class="p-2.5 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-red-300 font-semibold mb-1">🚨 SQL Injection</div>
<div class="opacity-80">Detects string concatenation in queries, suggests parameterized queries</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-lg border border-orange-500/30">
<div class="text-orange-300 font-semibold mb-1">🔐 Hardcoded Secrets</div>
<div class="opacity-80">Flags API keys, credentials, tokens in code — requires env variables</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-amber-900/30 to-amber-800/20 rounded-lg border border-amber-500/30">
<div class="text-amber-300 font-semibold mb-1">🛡️ XSS Prevention</div>
<div class="opacity-80">Identifies unescaped user input, suggests sanitization libraries</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2.5 bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-lg border border-yellow-500/30">
<div class="text-yellow-300 font-semibold mb-1">🔑 Authentication Flaws</div>
<div class="opacity-80">Checks for missing auth on sensitive endpoints, weak session handling</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1">📦 Insecure Dependencies</div>
<div class="opacity-80">Flags known vulnerable packages, suggests version updates</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1">📝 Audit Logging</div>
<div class="opacity-80">Validates logging for sensitive operations (compliance requirement)</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-emerald-900/30 to-green-900/30 rounded-xl border border-emerald-500/30">
<div class="flex items-center gap-3 text-sm">
<div class="text-2xl">📊</div>
<div class="flex-1">
<div class="text-emerald-300 font-bold">Impact: 90%+ Reduction in Security Violations Reaching Production</div>
<div class="text-xs opacity-80 mt-1">Hybrid static analysis + LLM semantic understanding = 84% improvement in vulnerability detection coverage with 73% fewer false positives</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Code Quality & Test Coverage -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Understanding Review Feedback</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Code Quality & Test Coverage Assessment</div>
<div class="text-xs text-white/50">Flags complexity, duplication, and testing gaps with refactoring suggestions</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="space-y-2">
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1">📊 Complexity Analysis</div>
<div class="opacity-80">Flags functions > 50 lines, deep nesting, high cyclomatic complexity</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1">🔄 Duplication Detection</div>
<div class="opacity-80">Identifies repeated code blocks, suggests extraction to shared functions</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1">📛 Naming Issues</div>
<div class="opacity-80">Unclear variable names, inconsistent conventions, misleading function names</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2.5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-semibold mb-1">🧪 Missing Tests</div>
<div class="opacity-80">Detects new functions without unit tests, suggests edge cases to cover</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1">✅ Weak Assertions</div>
<div class="opacity-80">Identifies tests that don't validate logic, suggests better assertions</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1">⚠️ Error Handling</div>
<div class="opacity-80">Flags missing try/catch in critical paths, checks for proper logging</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-3 text-sm">
<div class="text-2xl">💡</div>
<div class="flex-1">
<div class="text-blue-300 font-bold">Educational Feedback: Teach Patterns, Not Just Fix Current Code</div>
<div class="text-xs opacity-80 mt-1">Each finding explains WHY it matters, links to best practices, provides refactoring examples — accelerates learning curve (30-50% faster onboarding)</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Performance & Architecture -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Understanding Review Feedback</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Performance Optimization & Architecture Consistency</div>
<div class="text-xs text-white/50">Spots inefficiencies and ensures new code aligns with existing patterns</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="space-y-2">
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1">⚡ N+1 Query Detection</div>
<div class="opacity-80">Identifies database queries in loops, suggests eager loading or batch fetching</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1">🧠 Memory Leaks</div>
<div class="opacity-80">Flags unclosed resources, circular references, excessive object retention</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="text-pink-300 font-semibold mb-1">🔍 Inefficient Algorithms</div>
<div class="opacity-80">Suggests O(n²) → O(n log n) optimizations, better data structures</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1">🏗️ Pattern Alignment</div>
<div class="opacity-80">Ensures new services follow established architectural patterns</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-semibold mb-1">🔗 API Consistency</div>
<div class="opacity-80">Validates REST conventions, error response formats, versioning patterns</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1">📦 Caching Opportunities</div>
<div class="opacity-80">Identifies repeated computations, suggests memoization or Redis caching</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="flex items-center gap-3 text-sm">
<div class="text-2xl">🎯</div>
<div class="flex-1">
<div class="text-purple-300 font-bold">Full Repository Context: Understands How Changes Fit the Broader Architecture</div>
<div class="text-xs opacity-80 mt-1">Copilot has access to commit history, file relationships, test suites — prevents fragmentation and technical debt accumulation across 50+ microservices</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Hybrid Analysis Approach -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Understanding Review Feedback</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Hybrid Analysis: Static + Semantic Understanding</div>
<div class="text-xs text-white/50">Best of both worlds — deterministic accuracy plus contextual intelligence</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-4">
<div class="grid grid-cols-3 gap-3 text-xs">
<div class="p-2.5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-semibold mb-1.5">⚡ Static Analysis</div>
<div class="opacity-80">Fast mechanical checks: linting, pattern matching, syntax validation</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1.5">🌳 AST Parsing</div>
<div class="opacity-80">Structural analysis: control flow, dependency graphs, complexity metrics</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1.5">🤖 LLM Semantic</div>
<div class="opacity-80">Contextual understanding: business logic correctness, architectural fit</div>
</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-center mb-2">
<div class="text-2xl">⚠️</div>
<div class="font-bold text-red-300 text-sm">Traditional Static Analysis Alone</div>
</div>
<div class="space-y-1.5 text-xs opacity-90">
<div class="flex items-center gap-2">
<div class="text-red-400">→</div>
<div>High false positive rate (noise)</div>
</div>
<div class="flex items-center gap-2">
<div class="text-red-400">→</div>
<div>No semantic understanding</div>
</div>
<div class="flex items-center gap-2">
<div class="text-red-400">→</div>
<div>Alert fatigue, developers ignore</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-lg border border-emerald-500/30">
<div class="text-center mb-2">
<div class="text-2xl">✨</div>
<div class="font-bold text-emerald-300 text-sm">Copilot Hybrid Approach</div>
</div>
<div class="space-y-1.5 text-xs opacity-90">
<div class="flex items-center gap-2">
<div class="text-emerald-400">→</div>
<div>73% fewer false positives</div>
</div>
<div class="flex items-center gap-2">
<div class="text-emerald-400">→</div>
<div>84% better vulnerability coverage</div>
</div>
<div class="flex items-center gap-2">
<div class="text-emerald-400">→</div>
<div>Contextual, educational feedback</div>
</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-3">
<div class="text-2xl">🎯</div>
<div class="flex-1 text-xs">
<div class="text-blue-300 font-bold mb-1">Results Posted as Standard GitHub Review Comments</div>
<div class="opacity-80">Categorized by severity (critical, high, medium, low) — integrates seamlessly with existing workflows, no new tools to learn</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Measuring ROI -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">Measuring ROI</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Interactive calculator + optional automation for tracking value</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📊</div>
<div class="text-indigo-300 font-semibold">Time Savings</div>
<div class="text-xs opacity-70 mt-1">40-60% reduction in PR cycle time</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🛡️</div>
<div class="text-purple-300 font-semibold">Quality Metrics</div>
<div class="text-xs opacity-70 mt-1">90%+ security violation reduction</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">💰</div>
<div class="text-pink-300 font-semibold">Cost Savings</div>
<div class="text-xs opacity-70 mt-1">$150/hr saved vs $39/mo license</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Interactive ROI Calculator -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💰 Measuring ROI</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Interactive Time-Savings Calculator</div>
<div class="text-xs text-white/50">Turns PR analytics into executive-ready ROI summary — guided customer conversation</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1.5">📥 Input: Customer PR Data</div>
<div class="space-y-1 opacity-90">
<div>• Month/year + PR cycle time (with/without CCR)</div>
<div>• PR counts (with/without CCR adoption)</div>
<div>• Source: Operational PR analytics</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1.5">⚙️ Define: Model Parameters</div>
<div class="space-y-1 opacity-90">
<div>• Baseline review minutes per PR</div>
<div>• Review minutes with Copilot</div>
<div>• Annual developer cost, work hours/year</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="text-pink-300 font-semibold mb-1.5">📊 Output: Executive Summary (March 2026 Example)</div>
<div class="grid grid-cols-2 gap-2 text-xs opacity-90">
<div><span class="text-pink-400 font-semibold">Cycle time:</span> 19.0 days → 4.0 days (78.9% faster)</div>
<div><span class="text-pink-400 font-semibold">Adoption:</span> 15.3% of 32,196 PRs</div>
<div><span class="text-pink-400 font-semibold">Current savings:</span> 1,229 hours = $88,594</div>
<div><span class="text-pink-400 font-semibold">Upside if 100%:</span> 6,821 hours = $491,863</div>
</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-2.5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-semibold mb-1 text-sm">💡 Key Distinction</div>
<div class="text-xs opacity-80">Separates <span class="text-cyan-400">PR cycle time</span> (days open) from <span class="text-cyan-400">review effort</span> (human minutes) — labor savings based on effort, not duration</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1 text-sm">🎯 Use Case</div>
<div class="text-xs opacity-80">Best for live value conversations with stakeholders — copy summary for follow-up presentations</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Quality & Adoption Metrics -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💰 Measuring ROI</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Quality Metrics Beyond Time Savings</div>
<div class="text-xs text-white/50">Measurable improvements in production incidents, revert rate, security, and onboarding</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="space-y-2">
<div class="p-2.5 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/30">
<div class="text-red-300 font-semibold mb-1">🚨 Production Incidents</div>
<div class="opacity-80 space-y-0.5">
<div><span class="text-red-400">Baseline:</span> 12 incidents/month</div>
<div><span class="text-emerald-400">With Copilot:</span> 2 incidents/month (83% ↓)</div>
<div><span class="text-amber-400">Cost avoidance:</span> $12,000/month</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-orange-900/30 to-amber-900/30 rounded-lg border border-orange-500/30">
<div class="text-orange-300 font-semibold mb-1">🔄 Revert Rate</div>
<div class="opacity-80 space-y-0.5">
<div><span class="text-orange-400">Baseline:</span> 8% of PRs reverted</div>
<div><span class="text-emerald-400">With Copilot:</span> 3% of PRs (62% ↓)</div>
<div><span class="text-amber-400">Avoided rework:</span> $2,250/month</div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1">🛡️ Security Vulnerabilities</div>
<div class="opacity-80 space-y-0.5">
<div><span class="text-purple-400">Baseline:</span> 8 vulnerabilities/quarter</div>
<div><span class="text-emerald-400">With Copilot:</span> < 1/quarter (90%+ ↓)</div>
<div><span class="text-amber-400">Risk avoidance:</span> Data breach prevention</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1">🚀 Onboarding Speed</div>
<div class="opacity-80 space-y-0.5">
<div><span class="text-blue-400">Baseline:</span> 6-8 weeks to productivity</div>
<div><span class="text-emerald-400">With Copilot:</span> 3-4 weeks (50% faster)</div>
<div><span class="text-amber-400">Savings:</span> $16,000 per new hire</div>
</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-emerald-900/30 to-green-900/30 rounded-xl border border-emerald-500/30">
<div class="flex items-center gap-3">
<div class="text-2xl">📈</div>
<div class="flex-1 text-sm">
<div class="text-emerald-300 font-bold">Combined ROI: Typical 5-10x Return on Investment</div>
<div class="text-xs opacity-80 mt-1">Time savings + quality improvements + risk reduction = $150/hr developer time saved vs $39/month license cost</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Optional Reporting Automation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💰 Measuring ROI</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Optional: Automated Tracking with GitHub Actions</div>
<div class="text-xs text-white/50">For teams needing persistent internal reporting or warehouse validation</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1.5">🔄 When to Use Automation</div>
<div class="space-y-1 opacity-90">
<div>• Monthly internal dashboards for platform teams</div>
<div>• Warehouse validation (finance wants reproducible numbers)</div>
<div>• Trend reporting: adoption, revert rate, findings volume</div>
<div>• Persistent tracking month-over-month</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1.5">📊 What to Track</div>
<div class="space-y-1 opacity-90">
<div>• PR cycle time trend (weekly/monthly)</div>
<div>• Cumulative hours saved and cost savings</div>
<div>• Quality outcomes: incidents, reverts, security</div>
<div>• Adoption rate across repositories</div>
</div>
</div>
</div>

<div class="p-3 bg-gray-950/60 rounded-lg border border-gray-700/50">
<div class="text-xs text-gray-400 mb-1.5 font-semibold">GitHub Actions Workflow: copilot-review-metrics.yml</div>
<div class="font-mono text-xs opacity-90 space-y-0.5">
<div class="text-cyan-300">on: pull_request: [opened, synchronize, closed]</div>
<div class="text-blue-300">jobs:</div>
<div class="text-indigo-300">  track-review-metrics:</div>
<div class="text-gray-300">    - Extract Copilot review comments from PR</div>
<div class="text-gray-300">    - Categorize by severity (critical, high, medium, low)</div>
<div class="text-gray-300">    - Block merge if critical findings > 0</div>
<div class="text-gray-300">    - Export to BI dashboard or data warehouse</div>
</div>
</div>

<div class="p-3 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-3">
<div class="text-xl">💡</div>
<div class="flex-1 text-xs">
<div class="text-blue-300 font-semibold mb-1">ROI Path Shift: Calculator First, Automation Optional</div>
<div class="opacity-80">Interactive calculator is best for stakeholder conversations — automation is for recurring internal reporting at scale</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Enterprise Compliance -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Enterprise Compliance</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">HIPAA, PCI-DSS, SOC2 patterns with custom instruction files</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🏥</div>
<div class="text-purple-300 font-semibold">HIPAA</div>
<div class="text-xs opacity-70 mt-1">PHI encryption, audit logging, access controls</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">💳</div>
<div class="text-pink-300 font-semibold">PCI-DSS</div>
<div class="text-xs opacity-70 mt-1">Card data handling, tokenization, secure APIs</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🔐</div>
<div class="text-rose-300 font-semibold">SOC2</div>
<div class="text-xs opacity-70 mt-1">Data protection, error handling, observability</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Compliance Instruction Files -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Enterprise Compliance</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Compliance Instruction Files: Encode Policy as Code Review Guidance</div>
<div class="text-xs text-white/50">HIPAA, PCI-DSS, SOC2 patterns enforced consistently across all code changes</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-3 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1">🏥 HIPAA</div>
<div class="opacity-80 space-y-0.5">
<div>• PHI encryption at rest (AES-256)</div>
<div>• Audit logging for access</div>
<div>• TLS 1.2+ for transmission</div>
<div>• No PHI in logs/errors</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="text-pink-300 font-semibold mb-1">💳 PCI-DSS</div>
<div class="opacity-80 space-y-0.5">
<div>• Never store card PAN/CVV</div>
<div>• Require tokenization</div>
<div>• No card data in logs</div>
<div>• Role-based access control</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-rose-900/30 to-red-900/30 rounded-lg border border-rose-500/30">
<div class="text-rose-300 font-semibold mb-1">🔐 SOC2</div>
<div class="opacity-80 space-y-0.5">
<div>• Encrypt PII at rest</div>
<div>• Structured logging (no console)</div>
<div>• Error handling without leaks</div>
<div>• Data retention policies</div>
</div>
</div>
</div>

<div class="p-3 bg-gray-950/60 rounded-lg border border-gray-700/50 flex-1 min-h-0 overflow-y-auto">
<div class="text-xs text-gray-400 mb-1.5 font-semibold">.github/instructions/hipaa.instructions.md</div>
<div class="font-mono text-xs opacity-90 space-y-0.5">
<div class="text-gray-400">---</div>
<div class="text-purple-300">applyTo: "**/*.{js,ts,py,java}"</div>
<div class="text-gray-400">---</div>
<div class="text-cyan-300 mt-1">## HIPAA Requirements</div>
<div class="text-gray-300">- All PHI must be encrypted at rest (AES-256)</div>
<div class="text-gray-300">- Require audit logging for PHI access (who, when)</div>
<div class="text-gray-300">- Flag PHI in logs, error messages, or UI</div>
<div class="text-gray-300">- Require TLS 1.2+ for all network communication</div>
<div class="text-gray-300">- Access controls limit data to authorized roles only</div>
</div>
</div>

<div class="p-2.5 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30">
<div class="flex items-center gap-2 text-xs">
<div class="text-xl">⚠️</div>
<div class="flex-1">
<div class="text-amber-300 font-semibold">Important: Assistive Tool, Not Complete Compliance Solution</div>
<div class="opacity-80 mt-0.5">Copilot enforces patterns consistently — compliance always requires human oversight, policy, and organizational discipline</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Real-World Use Cases -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Enterprise Compliance</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Real-World Compliance Use Cases</div>
<div class="text-xs text-white/50">Measurable outcomes from e-commerce, healthcare, and enterprise deployments</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="space-y-2">
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1">💳 E-Commerce: PCI-DSS at Scale</div>
<div class="opacity-80 space-y-0.5">
<div><span class="text-purple-400">Challenge:</span> 80-100 PRs/week, only 30% reviewed</div>
<div><span class="text-emerald-400">Result:</span> 100% coverage, 0 critical vulnerabilities</div>
<div><span class="text-amber-400">Impact:</span> 100% reduction in production security issues</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="text-pink-300 font-semibold mb-1">🏥 Healthcare: HIPAA Automation</div>
<div class="opacity-80 space-y-0.5">
<div><span class="text-pink-400">Challenge:</span> 25 violations/quarter, manual audits</div>
<div><span class="text-emerald-400">Result:</span> 1 violation/quarter (96% reduction)</div>
<div><span class="text-amber-400">Impact:</span> $160K annual audit savings, 90% risk reduction</div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1">🏢 Enterprise: SOC2 Consistency</div>
<div class="opacity-80 space-y-0.5">
<div><span class="text-indigo-400">Challenge:</span> 50+ services, 45 inconsistencies/week</div>
<div><span class="text-emerald-400">Result:</span> 3 inconsistencies/week (93% reduction)</div>
<div><span class="text-amber-400">Impact:</span> $51K monthly savings in debugging costs</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1">🚀 FinTech: Accelerated Onboarding</div>
<div class="opacity-80 space-y-0.5">
<div><span class="text-blue-400">Challenge:</span> 6-8 weeks to productivity, 15% revert rate</div>
<div><span class="text-emerald-400">Result:</span> 3-4 weeks, 4% revert rate (50% faster)</div>
<div><span class="text-amber-400">Impact:</span> $12K saved per hire in mentorship time</div>
</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-emerald-900/30 to-green-900/30 rounded-xl border border-emerald-500/30">
<div class="flex items-center gap-3">
<div class="text-2xl">✨</div>
<div class="flex-1 text-sm">
<div class="text-emerald-300 font-bold">Common Pattern: Proactive Prevention > Reactive Fixing</div>
<div class="text-xs opacity-80 mt-1">Copilot catches compliance violations before merge — reduces audit prep from weeks to days, prevents costly production incidents</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Best Practices & Team Adoption -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Enterprise Compliance</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Best Practices & Phased Rollout Strategy</div>
<div class="text-xs text-white/50">Pilot → Tune → Expand → Standardize (12-week path to org-wide adoption)</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-4 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-semibold mb-1">Phase 1: Pilot</div>
<div class="opacity-80 space-y-0.5">
<div>Week 1-2</div>
<div>• 1-2 low-risk repos</div>
<div>• Informational only</div>
<div>• Gather feedback</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-semibold mb-1">Phase 2: Tune</div>
<div class="opacity-80 space-y-0.5">
<div>Week 3-4</div>
<div>• Add custom instructions</div>
<div>• Language-specific rules</div>
<div>• Measure baseline ROI</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-semibold mb-1">Phase 3: Expand</div>
<div class="opacity-80 space-y-0.5">
<div>Week 5-8</div>
<div>• Roll out to 50% repos</div>
<div>• Required status check</div>
<div>• Lunch & Learn session</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1">Phase 4: Standardize</div>
<div class="opacity-80 space-y-0.5">
<div>Week 9-12</div>
<div>• Org-wide deployment</div>
<div>• Quarterly reviews</div>
<div>• Celebrate wins</div>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-purple-300 font-semibold mb-1.5">🤝 Balancing AI + Human Review</div>
<div class="opacity-90 space-y-1 text-xs">
<div><span class="text-emerald-400">✅ Copilot:</span> Security, quality, compliance, tests</div>
<div><span class="text-blue-400">👤 Human:</span> Business logic, architecture, UX, strategy</div>
<div><span class="text-purple-400">Result:</span> 60% less time on mechanical checks</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="text-pink-300 font-semibold mb-1.5">⚠️ Avoiding Alert Fatigue</div>
<div class="opacity-90 space-y-1 text-xs">
<div>• Start with medium severity threshold</div>
<div>• Exclude tests, generated code, vendor deps</div>
<div>• Disable low-value rules creating noise</div>
<div>• Quarterly review: which rules find real issues?</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-3">
<div class="text-xl">🎯</div>
<div class="flex-1 text-xs">
<div class="text-blue-300 font-semibold mb-1">Continuous Improvement: Quarterly Review Cycle</div>
<div class="opacity-80">Track ROI ratio (target >3x), adjust severity thresholds, add rules from incident post-mortems, celebrate wins — Copilot stays valuable as codebase evolves</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-cyan-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-emerald-600/80 to-cyan-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-emerald-400/60 to-transparent"></div>
</div>
<div class="relative z-10 grid grid-cols-3 gap-4 mb-4">
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2 text-sm">⚡ Immediate (15 min)</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-start gap-2">
<span class="text-emerald-400 flex-shrink-0">☐</span>
<span>Enable automatic review</span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400 flex-shrink-0">☐</span>
<span>Submit test PR</span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400 flex-shrink-0">☐</span>
<span>Review <a href="https://docs.github.com/en/copilot/concepts/agents/code-review" class="text-cyan-400 underline">docs</a></span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2 text-sm">🛠️ Short-Term (1 hr)</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-start gap-2">
<span class="text-cyan-400 flex-shrink-0">☐</span>
<span>Create instructions.md</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 flex-shrink-0">☐</span>
<span>Set up status check</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 flex-shrink-0">☐</span>
<span>Train @github-copilot</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 flex-shrink-0">☐</span>
<span>Baseline metrics</span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2 text-sm">🚀 Advanced (½ day)</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex items-start gap-2">
<span class="text-blue-400 flex-shrink-0">☐</span>
<span>Compliance files</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 flex-shrink-0">☐</span>
<span>Metrics workflow</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 flex-shrink-0">☐</span>
<span>ROI workshop</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 flex-shrink-0">☐</span>
<span>Org-wide deploy</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 flex-shrink-0">☐</span>
<span>Present ROI</span>
</div>
</div>
</div>
</div>
<div class="relative z-10 p-3.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 text-sm">📈 Next Steps</div>
<div class="grid grid-cols-4 gap-3 text-xs text-gray-300">
<div class="p-2 bg-indigo-900/20 rounded-lg">
<span class="font-bold text-indigo-400">1.</span> Complete immediate + short-term
</div>
<div class="p-2 bg-indigo-900/20 rounded-lg">
<span class="font-bold text-indigo-400">2.</span> Monitor 30 days (ROI baseline)
</div>
<div class="p-2 bg-indigo-900/20 rounded-lg">
<span class="font-bold text-indigo-400">3.</span> Share learnings, iterate
</div>
<div class="p-2 bg-indigo-900/20 rounded-lg">
<span class="font-bold text-indigo-400">4.</span> Expand repos
</div>
</div>
</div>
</div>


---

<!-- SLIDE: References -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 References</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 text-xs">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30">
<div class="text-cyan-300 font-bold mb-2">📖 Official Documentation</div>
<div class="space-y-1.5 opacity-90">
<div><a href="https://docs.github.com/en/copilot/concepts/agents/code-review" class="text-cyan-400 hover:underline">GitHub Copilot Code Review - Concepts</a></div>
<div><a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review" class="text-cyan-400 hover:underline">Configure Automatic Code Review</a></div>
<div><a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review" class="text-cyan-400 hover:underline">Using Copilot Code Review</a></div>
<div><a href="https://docs.github.com/en/enterprise-cloud@latest/copilot/copilot-business-only/copilot-business-code-review" class="text-cyan-400 hover:underline">GitHub Copilot Enterprise Deployment</a></div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-blue-300 font-bold mb-2">📰 Blog Posts & Announcements</div>
<div class="space-y-1.5 opacity-90">
<div><a href="https://github.blog/2024-02-14-github-copilot-code-review-now-generally-available/" class="text-blue-400 hover:underline">Copilot Code Review Launch (43% time reduction)</a></div>
<div><a href="https://devblogs.microsoft.com/engineering/ai-powered-code-review/" class="text-blue-400 hover:underline">Microsoft: AI Code Review Best Practices</a></div>
<div><a href="https://github.blog/engineering/code-review-agent-architecture/" class="text-blue-400 hover:underline">Building the Code Review Agent</a></div>
</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-indigo-300 font-bold mb-2">📊 Industry Research</div>
<div class="space-y-1.5 opacity-90">
<div><a href="https://survey.stackoverflow.co/2024/code-review-tools" class="text-indigo-400 hover:underline">Stack Overflow 2024: 68% cite code review bottleneck</a></div>
<div><a href="https://www.infoq.com/articles/measuring-developer-productivity-2024/" class="text-indigo-400 hover:underline">InfoQ: Measuring Developer Productivity</a></div>
<div><a href="https://www.gartner.com/en/documents/ai-augmented-software-engineering-2024" class="text-indigo-400 hover:underline">Gartner: AI-Augmented Software Engineering</a></div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-purple-300 font-bold mb-2">🔐 Security & Compliance</div>
<div class="space-y-1.5 opacity-90">
<div><a href="https://owasp.org/www-project-top-ten/" class="text-purple-400 hover:underline">OWASP Top 10 2024 (vulnerability categories)</a></div>
<div><a href="https://securitylab.github.com/research/ai-application-security/" class="text-purple-400 hover:underline">GitHub Security Lab: AI in AppSec (73% fewer false positives)</a></div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Thank You -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>

<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-48" alt="" /></div>
<img src="./sdp-logo.png" class="w-48 relative" alt="SDP Logo" />
</div>

<h1 class="!text-5xl !font-bold !mt-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Thank You!</h1>

<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">GitHub Copilot Code Review: From Bottleneck to Accelerator</span>
</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-lg">5-10 minutes</div>
<div class="text-gray-300 mt-2 text-xs">From zero to automated review</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-bold text-lg">40-60% faster</div>
<div class="text-gray-300 mt-2 text-xs">PR review cycle time reduction</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-bold text-lg">5-10x ROI</div>
<div class="text-gray-300 mt-2 text-xs">Time + quality + risk reduction</div>
</div>
</div>

<div class="mt-6 text-sm opacity-60 relative z-10">Questions? Let's discuss how to implement this for your team.</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
