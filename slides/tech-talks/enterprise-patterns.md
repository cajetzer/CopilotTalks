---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Scaling GitHub Copilot Across Organizations
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Scaling GitHub Copilot Across Organizations - Enterprise Patterns for AI Adoption
module: tech-talks/enterprise-patterns
mdc: true
status: active
updated: 2026-03-23
---

<!-- SLIDE: Title Slide -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Scaling GitHub Copilot</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">Enterprise Patterns for AI Adoption</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Transform individual team success into organizational capability</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 60 minutes</span>
</div>

---

<!-- SLIDE: The Core Question -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔓 The Core Question</span>
<div class="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-3 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl border border-amber-500/30 max-w-4xl mx-auto">
<div class="text-xl font-bold text-amber-300 mb-2">
"How do I scale GitHub Copilot from pilot teams to organization-wide adoption with consistent standards, governance, and measurable ROI?"
</div>
</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30">
<div class="text-xl mb-1">🔄</div>
<div class="font-semibold text-amber-300">Repeated Reinvention</div>
<div class="text-xs opacity-80 mt-1">50 teams × 40 hours each building same patterns independently</div>
</div>
<div class="p-3 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
<div class="text-xl mb-1">🏢</div>
<div class="font-semibold text-orange-300">Knowledge Silos</div>
<div class="text-xs opacity-80 mt-1">Individual team success doesn't compound into organizational capability</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/30 to-purple-900/30 rounded-lg border border-red-500/30">
<div class="text-xl mb-1">📊</div>
<div class="font-semibold text-red-300">ROI Measurement Gap</div>
<div class="text-xs opacity-80 mt-1">Leadership asks for metrics but receives anecdotes instead of data</div>
</div>
</div>

<div class="mt-4 p-2 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-lg border border-amber-500/20">
<div class="text-xs text-amber-300/90">
<strong>The Transition Point:</strong> Copilot adoption succeeds in pilot teams but scaling to 50+ teams reveals fundamental infrastructure gaps
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Table of Contents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Table of Contents</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mt-2 max-w-4xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-2xl mb-1">🏢</div>
<div class="text-base font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Organization-Wide Standards</div>
<div class="text-xs text-gray-300 mt-1">Custom instructions at scale</div>
</div>
</div>
<div @click="$nav.go(8)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-2xl mb-1">🧠</div>
<div class="text-base font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Skills & Knowledge Bases</div>
<div class="text-xs text-gray-300 mt-1">Institutional knowledge that scales</div>
</div>
</div>
<div @click="$nav.go(11)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-2xl mb-1">🔐</div>
<div class="text-base font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Governance & Licensing</div>
<div class="text-xs text-gray-300 mt-1">Control, compliance, and cost optimization</div>
</div>
</div>
<div @click="$nav.go(15)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-2xl mb-1">📊</div>
<div class="text-base font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Adoption & Enablement</div>
<div class="text-xs text-gray-300 mt-1">Scaling without bottlenecks</div>
</div>
</div>
<div @click="$nav.go(18)" class="cursor-pointer group">
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-rose-900/40 rounded-xl border border-pink-500/50 hover:border-pink-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/10">
<div class="text-2xl mb-1">🤝</div>
<div class="text-base font-bold bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent">Multi-Team Coordination</div>
<div class="text-xs text-gray-300 mt-1">Federated governance</div>
</div>
</div>
</div>

<div class="mt-2 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Organization-Wide Standards -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-3 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-2 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Organization-Wide Standards</h1>
<h2 class="!text-xl !font-normal !m-0 opacity-70 mb-4">Custom instructions at scale</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-4"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-3 py-2 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-xl mb-1">🏢</div>
<div class="text-cyan-300 font-semibold text-sm">Org Instructions</div>
<div class="text-xs opacity-70 mt-1">Define once, apply everywhere</div>
</div>
<div class="px-3 py-2 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-xl mb-1">🔁</div>
<div class="text-blue-300 font-semibold text-sm">16x ROI</div>
<div class="text-xs opacity-70 mt-1">Knowledge multiplication across teams</div>
</div>
<div class="px-3 py-2 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-xl mb-1">⚡</div>
<div class="text-indigo-300 font-semibold text-sm">Instant Updates</div>
<div class="text-xs opacity-70 mt-1">One change propagates to all repos</div>
</div>
</div>
<div class="mt-3 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-4 py-2 text-left max-w-xl">
<span class="text-gray-400">Baseline consistency without manual per-repo configuration</span><br />
<span class="text-cyan-300 mt-1 block">↳ senior architect knowledge reaches 500 developers instantly</span>
</div>
</div>
</div>

---

<!-- SLIDE: The Traditional Problem -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏢 Organization-Wide Standards</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">The Traditional Polyrepo Chaos</div>
<div class="text-xs text-white/50">50 teams independently configuring same standards</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/30">
<div class="text-sm font-semibold text-red-300 mb-2">Before: Fragmented Standards</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">❌</span>
<span class="opacity-80">repo-1: Team A's security patterns</span>
</div>
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">❌</span>
<span class="opacity-80">repo-2: Team B's different approach</span>
</div>
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">❌</span>
<span class="opacity-80">repo-3: Team C's interpretation</span>
</div>
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">❌</span>
<span class="opacity-80">50 repos × 40 hours = 2,000 hours wasted</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-2">After: Organization-Level</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">✓</span>
<span class="opacity-80">Org settings: Security baseline defined once</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">✓</span>
<span class="opacity-80">Auto-applied to all 500+ developers</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">✓</span>
<span class="opacity-80">Repos add domain-specific overrides only</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">✓</span>
<span class="opacity-80">180 hours saves 2,900+ hours (16x ROI)</span>
</div>
</div>
</div>
</div>

<div class="mt-3 p-2 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/20">
<div class="text-xs text-cyan-300/90">
<strong>The Insight:</strong> Define security, frameworks, and quality requirements once at org level → every team inherits automatically
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What to Standardize -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏢 Organization-Wide Standards</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Organization Custom Instructions Template</div>
<div class="text-xs text-white/50">Security, frameworks, quality, and compliance baselines</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-2">Security & Compliance</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">OAuth 2.0 with PKCE for all web apps</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">AES-256 encryption for all PII at rest</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">Azure Key Vault for secrets, never hardcode</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">Parameterized queries exclusively</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-2">Framework Preferences</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80">React 18+ with TypeScript, functional components</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80">Node.js 20 LTS, Express.js for REST APIs</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80">Jest + Playwright, minimum 80% coverage</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80">Prettier + ESLint with org config</span>
</div>
</div>
</div>
</div>

<div class="mt-3 grid grid-cols-2 gap-3">
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-xs font-semibold text-indigo-300 mb-1">Quality Standards</div>
<div class="text-xs opacity-80">WCAG 2.1 AA, keyboard nav, screen reader support</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-xs font-semibold text-purple-300 mb-1">Performance Budgets</div>
<div class="text-xs opacity-80">&lt;2s load on 3G, Lighthouse &gt;90, 200KB gzipped</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Monorepo Nested Playbooks -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏢 Organization-Wide Standards</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Monorepo Pattern: Nested AGENTS.md Playbooks</div>
<div class="text-xs text-white/50">Shared repo standards + directory-local agent commands</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-2">Repository Structure</div>
<pre class="text-xs bg-gray-950/50 p-2 rounded border border-cyan-500/20 overflow-y-auto max-h-48"><code>repo/
├── .github/
│   ├── copilot-instructions.md   ← Repo constitution
│   └── instructions/
│       ├── api.instructions.md   ← Additive, glob-based
│       └── infra.instructions.md
├── AGENTS.md                      ← Global guardrails
├── frontend/
│   └── AGENTS.md                  ← Frontend playbook
├── backend/
│   └── AGENTS.md                  ← Backend playbook
└── infra/
    └── AGENTS.md                  ← Infra playbook</code></pre>
</div>

<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-2">Decision Matrix</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><strong>Repository selector:</strong> Org/repo instructions</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><strong>File pattern selector:</strong> .instructions.md</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><strong>Directory selector:</strong> Nearest AGENTS.md</span>
</div>
</div>
<div class="mt-2 p-2 bg-indigo-900/30 rounded border border-indigo-500/30">
<div class="text-xs text-indigo-300"><strong>Result:</strong> Shared standards centralized, subproject commands stay local</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/20">
<div class="text-xs text-cyan-300/90">
<strong>Rule of thumb:</strong> Copilot-specific standards in .github/ hierarchy, portable agent playbooks in AGENTS.md files
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Skills & Knowledge Bases -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-3 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-2 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Skills & Knowledge Bases</h1>
<h2 class="!text-xl !font-normal !m-0 opacity-70 mb-4">Institutional knowledge that scales</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-4"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-3 py-2 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-xl mb-1">🧠</div>
<div class="text-blue-300 font-semibold text-sm">Org Skills (GA)</div>
<div class="text-xs opacity-70 mt-1">Encode domain expertise once</div>
</div>
<div class="px-3 py-2 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-xl mb-1">📚</div>
<div class="text-indigo-300 font-semibold text-sm">Knowledge Bases</div>
<div class="text-xs opacity-70 mt-1">Multi-repo context (Enterprise)</div>
</div>
<div class="px-3 py-2 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-xl mb-1">🔄</div>
<div class="text-purple-300 font-semibold text-sm">Central Updates</div>
<div class="text-xs opacity-70 mt-1">Change once, propagate everywhere</div>
</div>
</div>
<div class="mt-3 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-4 py-2 text-left max-w-xl">
<span class="text-gray-400">From documentation (often outdated) to executable systems</span><br />
<span class="text-blue-300 mt-1 block">↳ senior architect knowledge reaches 500 developers instantly</span>
</div>
</div>
</div>

---

<!-- SLIDE: Organizational Agent Skills -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 Skills & Knowledge Bases</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Organizational Agent Skills (Now GA)</div>
<div class="text-xs text-white/50">Centrally versioned domain expertise available across all repos</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-2">Domain-Specific Expertise</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><strong>payment-processing:</strong> PCI compliance validation</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><strong>healthcare-data:</strong> HIPAA data handling rules</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><strong>architecture-review:</strong> System design standards</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><strong>performance-budgets:</strong> Load time & resource limits</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-2">Cross-Cutting Concerns</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><strong>security-scanner:</strong> Vulnerability pattern detection</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><strong>accessibility-check:</strong> WCAG compliance validation</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><strong>cost-estimator:</strong> Cloud resource cost prediction</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><strong>tech-debt-analyzer:</strong> Maintainability scoring</span>
</div>
</div>
</div>
</div>

<div class="mt-3 p-2 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-500/20">
<div class="text-xs text-blue-300/90">
<strong>The Multiplication Effect:</strong> Update skill once → propagates to all 500+ developers using it → knowledge compounds systematically
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Copilot Knowledge Bases -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 Skills & Knowledge Bases</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Knowledge Bases: Multi-Repo Context (Enterprise)</div>
<div class="text-xs text-white/50">Query across 10-50 repositories for microservices architectures</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/30">
<div class="text-sm font-semibold text-red-300 mb-2">The Problem</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">❌</span>
<span class="opacity-80">Microservices split across 10-50 repos</span>
</div>
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">❌</span>
<span class="opacity-80">Copilot in single repo lacks system context</span>
</div>
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">❌</span>
<span class="opacity-80">Manual reference of 5-10 dependency repos</span>
</div>
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">❌</span>
<span class="opacity-80">Documentation scattered across locations</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-2">Knowledge Base Solution</div>
<pre class="text-xs bg-gray-950/50 p-2 rounded border border-blue-500/20 mt-2 overflow-y-auto max-h-32"><code>Knowledge Base: "Payment Platform"
├── payment-api (REST contracts)
├── payment-processor (business logic)
├── fraud-detection (ML models)
├── compliance-rules (regulatory logic)
└── platform-docs (architecture guides)

Developer: "How does fraud detection
integrate with payment flow?"

Copilot answers with context
from all 5 repositories</code></pre>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-500/20">
<div class="text-xs text-blue-300/90">
<strong>Usage:</strong> @kb payment-platform → AI retrieves relevant context from entire system, not single repo → massive productivity gains
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Governance & Licensing -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-3 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-2 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">Governance & Licensing</h1>
<h2 class="!text-xl !font-normal !m-0 opacity-70 mb-4">Control, compliance, and cost optimization</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-4"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-3 py-2 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-xl mb-1">🔐</div>
<div class="text-indigo-300 font-semibold text-sm">Model Governance</div>
<div class="text-xs opacity-70 mt-1">Control which AI models teams access</div>
</div>
<div class="px-3 py-2 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-xl mb-1">💰</div>
<div class="text-purple-300 font-semibold text-sm">Flexible Licensing</div>
<div class="text-xs opacity-70 mt-1">30-40% cost reduction via smart deployment</div>
</div>
<div class="px-3 py-2 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-xl mb-1">✅</div>
<div class="text-pink-300 font-semibold text-sm">Compliance Auto</div>
<div class="text-xs opacity-70 mt-1">Encode regulatory requirements</div>
</div>
</div>
<div class="mt-3 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-4 py-2 text-left max-w-xl">
<span class="text-gray-400">Balance AI capability with enterprise requirements</span><br />
<span class="text-indigo-300 mt-1 block">↳ cost optimization + risk reduction + audit readiness</span>
</div>
</div>
</div>

---

<!-- SLIDE: Model Governance & Auto Selection -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔐 Governance & Licensing</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Model Governance & Auto Selection</div>
<div class="text-xs text-white/50">Control AI models, optimize cost vs. capability automatically</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-2">Policy Framework</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">Restrict high-cost models to approved use cases</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">Enforce compliance (data residency, audit trails)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">Set budget controls on premium model requests</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">Track model usage org-wide for cost analysis</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-2">Cost Optimization</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">✓</span>
<span class="opacity-80"><strong>Routine completion:</strong> Fast, cost-effective models</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">✓</span>
<span class="opacity-80"><strong>Documentation:</strong> Balanced models (Sonnet)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">✓</span>
<span class="opacity-80"><strong>Architecture analysis:</strong> Premium (Opus) w/ budget</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">✓</span>
<span class="opacity-80"><strong>Code review:</strong> Task-appropriate auto-selection</span>
</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/20">
<div class="text-xs text-indigo-300/90">
<strong>The Balance:</strong> Teams access appropriate AI power without manual selection, leadership maintains budget control and compliance visibility
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Flexible Licensing Strategies -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔐 Governance & Licensing</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Flexible Licensing: 30-40% Cost Reduction</div>
<div class="text-xs text-white/50">Match licensing to actual usage patterns</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-2">Full Seats</div>
<div class="text-xs opacity-80 mb-2">Heavy users with daily coding</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">Core engineering teams</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">Platform engineers</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">Architects</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-2">Usage-Based</div>
<div class="text-xs opacity-80 mb-2">Occasional users, pay per use</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">Contractors (temp projects)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">Security reviewers</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">Technical writers</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-2">Review-Only</div>
<div class="text-xs opacity-80 mb-2">Unlicensed, read-only access</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">•</span>
<span class="opacity-80">Product managers</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">•</span>
<span class="opacity-80">Design team</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">•</span>
<span class="opacity-80">QA engineers</span>
</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/20">
<div class="text-xs text-indigo-300/90">
<strong>Example Deployment:</strong> 200-person org → 80 full seats + 40 usage-based + 80 review-only = 30-40% cost savings vs. all full seats
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Compliance Automation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔐 Governance & Licensing</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Compliance Automation</div>
<div class="text-xs text-white/50">From manual checklist to automated enforcement</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-2">Enterprise Control Points</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><strong>Access governance:</strong> Org policies, model access, audit logs</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><strong>Content filtering:</strong> Block vulnerable patterns, copyrighted code</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><strong>Data governance:</strong> Training opt-out, residency, retention</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-2">Automated Validation</div>
<pre class="text-xs bg-gray-950/50 p-2 rounded border border-purple-500/20 mt-2 overflow-y-auto max-h-32"><code>Custom Agent: @security-validator
• OWASP Top 10 vulnerabilities
• Hardcoded secrets/credentials
• Unapproved dependencies
• Data exposure risks

Agent Skill: hipaa-compliance-check
• PHI encryption (AES-256)
• Audit logging completeness
• Access control enforcement
• Data retention policies</code></pre>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/20">
<div class="text-xs text-indigo-300/90">
<strong>For regulated industries:</strong> Healthcare, finance, government → governance frameworks are prerequisites for AI adoption, not optional
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Adoption & Enablement -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-3 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-2 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Adoption & Enablement</h1>
<h2 class="!text-xl !font-normal !m-0 opacity-70 mb-4">Scaling without bottlenecks</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-4"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-3 py-2 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-xl mb-1">📊</div>
<div class="text-purple-300 font-semibold text-sm">Metrics Framework</div>
<div class="text-xs opacity-70 mt-1">Leading, intermediate, lagging indicators</div>
</div>
<div class="px-3 py-2 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-xl mb-1">🎓</div>
<div class="text-pink-300 font-semibold text-sm">Self-Service Kit</div>
<div class="text-xs opacity-70 mt-1">30-minute quick start, copy/paste ready</div>
</div>
<div class="px-3 py-2 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-xl mb-1">💰</div>
<div class="text-rose-300 font-semibold text-sm">ROI Reporting</div>
<div class="text-xs opacity-70 mt-1">Data-driven narrative for CFO</div>
</div>
</div>
<div class="mt-3 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-4 py-2 text-left max-w-xl">
<span class="text-gray-400">Enable 50+ teams simultaneously without overwhelming platform team</span><br />
<span class="text-purple-300 mt-1 block">↳ self-service onboarding + quantifiable metrics = scalable adoption</span>
</div>
</div>
</div>

---

<!-- SLIDE: Metrics Framework -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Adoption & Enablement</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Adoption Metrics & ROI Measurement</div>
<div class="text-xs text-white/50">Leading, intermediate, and lagging indicators for data-driven justification</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-2">Leading (Adoption Health)</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">Acceptance rate: 55-65% target</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">Active users: 80%+ utilization</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">Code lines (AI): % of total</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">•</span>
<span class="opacity-80">Feature adoption: Chat, Skills, Agents</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-2">Intermediate (Efficiency)</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">PR velocity: PRs/week</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">Review time: PR open to merge</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">Bug fix time: issue to resolution</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80">Documentation coverage</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-2">Lagging (Business Impact)</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">•</span>
<span class="opacity-80">Time to market: feature delivery</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">•</span>
<span class="opacity-80">Developer satisfaction: 7.8 → 8.4</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">•</span>
<span class="opacity-80">Onboarding time: 45d → 28d</span>
</div>
<div class="flex items-start gap-2">
<span class="text-purple-400 mt-0.5">•</span>
<span class="opacity-80">Cost per feature: -31%</span>
</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
<div class="text-xs text-purple-300/90">
<strong>Key:</strong> Track acceptance rate first (predicts everything else) → act on it → watch intermediate & lagging metrics improve
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Self-Service Onboarding -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Adoption & Enablement</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Self-Service Onboarding Kit</div>
<div class="text-xs text-white/50">30-minute quick start enables teams without platform bottleneck</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-2">Kit Components</div>
<pre class="text-xs bg-gray-950/50 p-2 rounded border border-purple-500/20 overflow-y-auto max-h-32"><code>team-onboarding/
├── README.md              ← 30-min quick start
├── repository-setup.md    ← Config guide
├── custom-instructions.md ← Org standards
├── skills-catalog.md      ← Available skills
├── review-checklist.md    ← AI code review
└── examples/
    ├── good-prompts.md
    ├── custom-agent-template/
    └── sample-repository/</code></pre>
</div>

<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="text-sm font-semibold text-pink-300 mb-2">30-Minute Onboarding Flow</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-pink-400 mt-0.5">1.</span>
<span class="opacity-80"><strong>Read quick start (10 min):</strong> Org standards overview</span>
</div>
<div class="flex items-start gap-2">
<span class="text-pink-400 mt-0.5">2.</span>
<span class="opacity-80"><strong>Configure repo (10 min):</strong> Copy/paste templates</span>
</div>
<div class="flex items-start gap-2">
<span class="text-pink-400 mt-0.5">3.</span>
<span class="opacity-80"><strong>Complete exercise (10 min):</strong> Validate with real task</span>
</div>
<div class="flex items-start gap-2">
<span class="text-pink-400 mt-0.5">4.</span>
<span class="opacity-80"><strong>Reference materials:</strong> Ongoing learning available</span>
</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
<div class="text-xs text-purple-300/90">
<strong>Success metrics:</strong> Teams productive in 30 min, &lt;2 support tickets/team, 90%+ satisfaction → 50 teams onboard simultaneously
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 5 — Multi-Team Coordination -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-pink-900/25 via-rose-900/15 to-orange-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-3 px-4 py-1.5 bg-gradient-to-r from-pink-600/40 to-rose-600/40 rounded-full border border-pink-400/30 text-pink-300 text-sm font-medium tracking-widest uppercase">Part 5</div>
<h1 class="!text-5xl !font-bold !mb-2 bg-gradient-to-r from-pink-400 via-rose-300 to-orange-400 bg-clip-text text-transparent leading-tight">Multi-Team Coordination</h1>
<h2 class="!text-xl !font-normal !m-0 opacity-70 mb-4">Federated governance that scales</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mb-4"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-3 py-2 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-xl mb-1">🤝</div>
<div class="text-pink-300 font-semibold text-sm">Federated Model</div>
<div class="text-xs opacity-70 mt-1">Platform provides, teams customize</div>
</div>
<div class="px-3 py-2 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-xl mb-1">💡</div>
<div class="text-rose-300 font-semibold text-sm">Community Practice</div>
<div class="text-xs opacity-70 mt-1">Share learnings, prevent silos</div>
</div>
<div class="px-3 py-2 bg-orange-900/30 rounded-xl border border-orange-500/30">
<div class="text-xl mb-1">🔁</div>
<div class="text-orange-300 font-semibold text-sm">16x ROI</div>
<div class="text-xs opacity-70 mt-1">Knowledge multiplication effect</div>
</div>
</div>
<div class="mt-3 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-4 py-2 text-left max-w-xl">
<span class="text-gray-400">Balance central control with team autonomy</span><br />
<span class="text-pink-300 mt-1 block">↳ consistency + velocity through federated governance</span>
</div>
</div>
</div>

---

<!-- SLIDE: Federated Governance Model & ROI -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-rose-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-pink-600/80 to-rose-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤝 Multi-Team Coordination</span>
<div class="flex-1 h-px bg-gradient-to-r from-pink-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-pink-400 shadow-lg shadow-pink-500/50"></div>
<span class="text-white/40 text-xs ml-1">1 of 1</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Federated Model & Knowledge Multiplication</div>
<div class="text-xs text-white/50">180-hour platform investment delivers 2,900+ hours saved (16x ROI)</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="text-sm font-semibold text-pink-300 mb-2">Platform Team Owns</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-pink-400 mt-0.5">•</span>
<span class="opacity-80">Org-wide standards (40 hrs)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-pink-400 mt-0.5">•</span>
<span class="opacity-80">Shared skill library (60 hrs)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-pink-400 mt-0.5">•</span>
<span class="opacity-80">Onboarding kit (80 hrs)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-pink-400 mt-0.5">•</span>
<span class="opacity-80">Metrics & ROI tracking</span>
</div>
</div>
<div class="mt-2 p-2 bg-rose-900/30 rounded border border-rose-500/30">
<div class="text-xs font-semibold text-rose-300">Investment: 180 hours total</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-rose-900/30 to-orange-900/30 rounded-lg border border-rose-500/30">
<div class="text-sm font-semibold text-rose-300 mb-2">Teams Own</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-rose-400 mt-0.5">•</span>
<span class="opacity-80">Domain-specific customization</span>
</div>
<div class="flex items-start gap-2">
<span class="text-rose-400 mt-0.5">•</span>
<span class="opacity-80">Team-specific agent skills</span>
</div>
<div class="flex items-start gap-2">
<span class="text-rose-400 mt-0.5">•</span>
<span class="opacity-80">Contribute winning patterns back</span>
</div>
<div class="flex items-start gap-2">
<span class="text-rose-400 mt-0.5">•</span>
<span class="opacity-80">Share learnings in community</span>
</div>
</div>
<div class="mt-2 p-2 bg-orange-900/30 rounded border border-orange-500/30">
<div class="text-xs font-semibold text-orange-300">Returns: 2,900+ hours saved</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-pink-900/20 to-rose-900/20 rounded-lg border border-pink-500/20">
<div class="text-xs text-pink-300/90">
<strong>The Compounding Effect:</strong> One-to-many deployment + automatic inheritance + centralized updates = knowledge stops fragmenting, starts compounding
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-emerald-600/80 to-teal-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-emerald-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-lg border border-emerald-500/30">
<div class="text-sm font-semibold text-emerald-300 mb-2">Immediate (15 min)</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-emerald-400 mt-0.5">□</span>
<span class="opacity-80">Audit current adoption: teams, acceptance rates, standards?</span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400 mt-0.5">□</span>
<span class="opacity-80">Identify 2-3 successful pilot teams for patterns</span>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400 mt-0.5">□</span>
<span class="opacity-80">Review org custom instructions docs</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-lg border border-teal-500/30">
<div class="text-sm font-semibold text-teal-300 mb-2">Short-Term (2-4 weeks)</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-teal-400 mt-0.5">□</span>
<span class="opacity-80">Create initial org-wide custom instructions</span>
</div>
<div class="flex items-start gap-2">
<span class="text-teal-400 mt-0.5">□</span>
<span class="opacity-80">Deploy to pilots, gather feedback, iterate</span>
</div>
<div class="flex items-start gap-2">
<span class="text-teal-400 mt-0.5">□</span>
<span class="opacity-80">Build metrics baseline using Copilot Metrics API</span>
</div>
<div class="flex items-start gap-2">
<span class="text-teal-400 mt-0.5">□</span>
<span class="opacity-80">Start onboarding kit with copy/paste templates</span>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-2">Advanced (1-3 months)</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">□</span>
<span class="opacity-80">Develop shared Agent Skill library</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">□</span>
<span class="opacity-80">Establish Community of Practice: monthly sessions</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">□</span>
<span class="opacity-80">Configure Knowledge Bases (Enterprise tier)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">□</span>
<span class="opacity-80">Build quarterly ROI dashboard for leadership</span>
</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-lg border border-emerald-500/20">
<div class="text-xs text-emerald-300/90">
<strong>Next Steps:</strong> Achieve 80%+ utilization → Present ROI metrics to leadership → Scale from 50 to 200+ developers
</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-gray-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-slate-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-slate-600/80 to-gray-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 References</span>
<div class="flex-1 h-px bg-gradient-to-r from-slate-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-gradient-to-br from-slate-900/30 to-gray-900/30 rounded-lg border border-slate-500/30">
<div class="text-sm font-semibold text-slate-300 mb-2">Primary Documentation</div>
<div class="space-y-2 text-xs">
<div>
<div class="text-slate-400 font-mono">Managing Copilot in Organizations</div>
<div class="text-slate-500 text-xs">docs.github.com/en/copilot/managing-copilot</div>
</div>
<div>
<div class="text-slate-400 font-mono">Organization-Wide Custom Instructions</div>
<div class="text-slate-500 text-xs">docs.github.com/en/copilot/customizing-copilot</div>
</div>
<div>
<div class="text-slate-400 font-mono">Copilot Metrics API</div>
<div class="text-slate-500 text-xs">docs.github.com/en/rest/copilot/copilot-metrics</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-gray-900/30 to-zinc-900/30 rounded-lg border border-gray-500/30">
<div class="text-sm font-semibold text-gray-300 mb-2">Additional Resources</div>
<div class="space-y-2 text-xs">
<div>
<div class="text-gray-400 font-mono">AGENTS.md Open Format</div>
<div class="text-gray-500 text-xs">agents.md/</div>
</div>
<div>
<div class="text-gray-400 font-mono">Related Talks</div>
<div class="text-gray-500 text-xs">Agentic Journey, Agentic SDLC, Agent Teams</div>
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
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 mb-4">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-48" alt="" /></div>
<img src="./sdp-logo.png" class="w-48 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Thank You</h1>
<div class="mt-4 relative z-10 grid grid-cols-3 gap-4 max-w-3xl">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30 text-center">
<div class="text-2xl font-bold text-cyan-300">16x</div>
<div class="text-xs text-gray-300 mt-1">ROI from knowledge multiplication</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30 text-center">
<div class="text-2xl font-bold text-blue-300">30-40%</div>
<div class="text-xs text-gray-300 mt-1">Cost reduction via flexible licensing</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30 text-center">
<div class="text-2xl font-bold text-indigo-300">500+</div>
<div class="text-xs text-gray-300 mt-1">Developers benefit from one org instruction</div>
</div>
</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
