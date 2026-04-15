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
section: Copilot Tools
status: active
updated: 2026-06-24
---

<script setup>
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
import CoreQuestionSlide from './components/CoreQuestionSlide.vue'
import TocSlide from './components/TocSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="Scaling GitHub Copilot"
subtitle="Enterprise Patterns for AI Adoption"
tagline="Transform individual team success into organizational capability"
meta="Tech Talk · 60 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I scale GitHub Copilot from pilot teams to organization-wide adoption?"
subtext="Consistent standards, governance, and measurable ROI."
highlight="The transition from pilot success to organizational capability requires deliberate infrastructure."
:cards='[
  { icon: "🏢", title: "Engineering Leaders Scaling AI Adoption", description: "Move from successful pilot to measurable, org-wide Copilot capability" },
  { icon: "⚙️", title: "Platform Teams Standardizing AI Patterns", description: "Shared instructions, skills, and agent patterns deployed across all teams" },
  { icon: "📈", title: "CTO Offices Proving ROI with Data", description: "Replace anecdotes and surveys with data-driven measurement and benchmarks" },
  { icon: "🔄", title: "Repeated Reinvention", description: "50 teams rebuilding the same patterns — shared infrastructure eliminates this waste" },
  { icon: "🧱", title: "Knowledge Silos", description: "Success in one team does not compound — shared primitives change everything" },
  { icon: "📊", title: "ROI Measurement", description: "Anecdotes vs. data — dashboards and metrics make impact quantifiable at scale" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🏢", title: "Organization-Wide Standards", subtitle: "Custom instructions at scale", blurb: "One config, hundreds of developers aligned automatically", slide: 4 },
    { icon: "🧠", title: "Skills & Knowledge Bases", subtitle: "Institutional knowledge that scales", blurb: "Domain expertise that loads on demand", slide: 8 },
    { icon: "🔐", title: "Governance & Licensing", subtitle: "Control, compliance, and cost optimization", blurb: "Seat management, policy controls, audit trails", slide: 11 },
    { icon: "📊", title: "Scaling & Measurement", subtitle: "Adoption, ROI, and federated governance", blurb: "Self-service onboarding, metrics, 16× knowledge ROI", slide: 15 },
  ]'
/>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">😩</span>
<div class="text-sm font-semibold text-red-300">Before: Fragmented Standards</div>
</div>
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
</div>
<div class="mt-2 p-2 bg-red-900/40 rounded border border-red-500/40 text-center">
<div class="text-xl font-bold text-red-300">2,000 hrs</div>
<div class="text-xs text-red-400/80">50 repos × 40 hours wasted</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🚀</span>
<div class="text-sm font-semibold text-cyan-300">After: Organization-Level</div>
</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">✓</span>
<span class="opacity-80">Security baseline defined once at org level</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">✓</span>
<span class="opacity-80">Auto-applied to all 500+ developers</span>
</div>
<div class="flex items-start gap-2">
<span class="text-cyan-400 mt-0.5">✓</span>
<span class="opacity-80">Repos add domain-specific overrides only</span>
</div>
</div>
<div class="mt-2 p-2 bg-cyan-900/40 rounded border border-cyan-500/40 text-center">
<div class="text-xl font-bold text-cyan-300">16x ROI</div>
<div class="text-xs text-cyan-400/80">180 hrs invested → 2,900+ hrs saved</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🔒</span>
<div class="text-sm font-semibold text-cyan-300">Security & Compliance</div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">⚙️</span>
<div class="text-sm font-semibold text-blue-300">Framework Preferences</div>
</div>
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
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="flex items-center gap-2 mb-1">
<span class="text-lg">♿</span>
<div class="text-xs font-semibold text-indigo-300">Quality Standards</div>
</div>
<div class="space-y-0.5 text-xs">
<div class="flex items-start gap-1.5"><span class="text-indigo-400">•</span><span class="opacity-80">WCAG 2.1 AA compliance</span></div>
<div class="flex items-start gap-1.5"><span class="text-indigo-400">•</span><span class="opacity-80">Keyboard nav + screen reader support</span></div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="flex items-center gap-2 mb-1">
<span class="text-lg">⚡</span>
<div class="text-xs font-semibold text-purple-300">Performance Budgets</div>
</div>
<div class="space-y-0.5 text-xs">
<div class="flex items-start gap-1.5"><span class="text-purple-400">•</span><span class="opacity-80">&lt;2s load on 3G, Lighthouse &gt;90</span></div>
<div class="flex items-start gap-1.5"><span class="text-purple-400">•</span><span class="opacity-80">200KB gzipped bundle budget</span></div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🏛️</span>
<div class="text-sm font-semibold text-blue-300">Domain-Specific Expertise</div>
</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-blue-950/60 border border-blue-500/30 rounded text-blue-300">payment-processing</code> PCI compliance validation</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-blue-950/60 border border-blue-500/30 rounded text-blue-300">healthcare-data</code> HIPAA data handling rules</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-blue-950/60 border border-blue-500/30 rounded text-blue-300">architecture-review</code> System design standards</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-blue-950/60 border border-blue-500/30 rounded text-blue-300">performance-budgets</code> Load time & resource limits</span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">⚗️</span>
<div class="text-sm font-semibold text-indigo-300">Cross-Cutting Concerns</div>
</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-indigo-950/60 border border-indigo-500/30 rounded text-indigo-300">security-scanner</code> Vulnerability pattern detection</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-indigo-950/60 border border-indigo-500/30 rounded text-indigo-300">accessibility-check</code> WCAG compliance validation</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-indigo-950/60 border border-indigo-500/30 rounded text-indigo-300">cost-estimator</code> Cloud resource cost prediction</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-indigo-950/60 border border-indigo-500/30 rounded text-indigo-300">tech-debt-analyzer</code> Maintainability scoring</span>
</div>
</div>
</div>
</div>

<div class="mt-3 space-y-2">
<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-blue-900/20 rounded-lg border border-blue-500/20 text-center">
<div class="text-lg mb-0.5">📝</div>
<div class="text-xs font-semibold text-blue-300">1. Author</div>
<div class="text-xs text-white/50 mt-0.5">Define in <code class="bg-blue-950/60 px-1 rounded text-blue-400">.github/skills/</code></div>
</div>
<div class="p-2 bg-indigo-900/20 rounded-lg border border-indigo-500/20 text-center">
<div class="text-lg mb-0.5">🏢</div>
<div class="text-xs font-semibold text-indigo-300">2. Publish</div>
<div class="text-xs text-white/50 mt-0.5">Push to org — versioned & reviewed</div>
</div>
<div class="p-2 bg-purple-900/20 rounded-lg border border-purple-500/20 text-center">
<div class="text-lg mb-0.5">⚡</div>
<div class="text-xs font-semibold text-purple-300">3. Propagate</div>
<div class="text-xs text-white/50 mt-0.5">Instant in all repos — zero config</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-500/20">
<div class="text-xs text-blue-300/90"><strong>The Multiplication Effect:</strong> Update once → propagates to all <strong class="text-blue-200">500+</strong> developers immediately → expertise compounds at org scale</div>
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
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/30">
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🔍</span>
<div class="text-sm font-semibold text-red-300">The Problem</div>
</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2"><span class="text-red-400 mt-0.5">❌</span><span class="opacity-80">Microservices split across 10-50 repos</span></div>
<div class="flex items-start gap-2"><span class="text-red-400 mt-0.5">❌</span><span class="opacity-80">Copilot in single repo lacks system context</span></div>
<div class="flex items-start gap-2"><span class="text-red-400 mt-0.5">❌</span><span class="opacity-80">Manual reference of 5-10 dependency repos</span></div>
<div class="flex items-start gap-2"><span class="text-red-400 mt-0.5">❌</span><span class="opacity-80">Documentation scattered across locations</span></div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">📚</span>
<div class="text-sm font-semibold text-blue-300">Knowledge Base Solution</div>
</div>
<div class="font-mono text-xs bg-gray-950/50 p-2 rounded border border-blue-500/20 overflow-y-auto max-h-32">
<div class="text-blue-300 font-semibold mb-1">Knowledge Base: "Payment Platform"</div>
<div>├── payment-api <span class="text-gray-500">(REST contracts)</span></div>
<div>├── payment-processor <span class="text-gray-500">(business logic)</span></div>
<div>├── fraud-detection <span class="text-gray-500">(ML models)</span></div>
<div>├── compliance-rules <span class="text-gray-500">(regulatory logic)</span></div>
<div class="mb-1">└── platform-docs <span class="text-gray-500">(architecture guides)</span></div>
<div class="border-t border-blue-500/20 my-1"></div>
<div class="text-amber-300">Developer: "How does fraud detection</div>
<div class="text-amber-300 mb-1">integrate with payment flow?"</div>
<div class="text-green-300">↳ Copilot answers with context from all 5 repos</div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-blue-900/20 rounded-lg border border-blue-500/20 text-center">
<div class="text-xl font-bold text-blue-300">50 repos</div>
<div class="text-xs text-blue-400/70">max per KB</div>
</div>
<div class="p-2 bg-indigo-900/20 rounded-lg border border-indigo-500/20 text-center">
<div class="text-xl font-bold text-indigo-300">Enterprise</div>
<div class="text-xs text-indigo-400/70">tier required</div>
</div>
<div class="p-2 bg-purple-900/20 rounded-lg border border-purple-500/20 text-center">
<div class="text-xl font-bold text-purple-300">@kb</div>
<div class="text-xs text-purple-400/70">invoke anywhere</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-500/20">
<div class="text-xs font-semibold text-blue-300 mb-1">💬 Sample cross-repo queries</div>
<div class="grid grid-cols-2 gap-1 text-xs text-white/60">
<div>→ "How does fraud detection integrate with payment flow?"</div>
<div>→ "Where is auth handled across our microservices?"</div>
<div>→ "What compliance rules apply to user data storage?"</div>
<div>→ "Which services depend on the pricing engine?"</div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🔒</span>
<div class="text-sm font-semibold text-indigo-300">Policy Framework</div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">💰</span>
<div class="text-sm font-semibold text-purple-300">Cost Optimization</div>
</div>
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
<div class="mt-3 space-y-2">
<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-indigo-900/20 rounded-lg border border-indigo-500/20 text-center">
<div class="text-xl font-bold text-indigo-300">4</div>
<div class="text-xs text-indigo-400/70">model tiers</div>
</div>
<div class="p-2 bg-purple-900/20 rounded-lg border border-purple-500/20 text-center">
<div class="text-xl font-bold text-purple-300">Auto</div>
<div class="text-xs text-purple-400/70">task routing</div>
</div>
<div class="p-2 bg-pink-900/20 rounded-lg border border-pink-500/20 text-center">
<div class="text-xl font-bold text-pink-300">30%</div>
<div class="text-xs text-pink-400/70">cost reduction</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/20">
<div class="text-xs text-indigo-300/90"><strong>The Balance:</strong> Teams access appropriate AI power without manual model selection — leadership retains budget control and full compliance visibility</div>
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
<div class="flex items-center gap-2 mb-1">
<span class="text-xl">👩‍💻</span>
<div class="text-sm font-semibold text-cyan-300">Full Seats</div>
</div>
<div class="text-xs opacity-60 mb-2">Heavy users with daily coding</div>
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
<div class="flex items-center gap-2 mb-1">
<span class="text-xl">⚡</span>
<div class="text-sm font-semibold text-indigo-300">Usage-Based</div>
</div>
<div class="text-xs opacity-60 mb-2">Occasional users, pay per use</div>
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
<div class="flex items-center gap-2 mb-1">
<span class="text-xl">👁️</span>
<div class="text-sm font-semibold text-purple-300">Review-Only</div>
</div>
<div class="text-xs opacity-60 mb-2">Unlicensed, read-only access</div>
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
<div class="mt-3 space-y-2">
<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-cyan-900/20 rounded-lg border border-cyan-500/20 text-center">
<div class="text-lg font-bold text-cyan-300">80 seats</div>
<div class="text-xs text-cyan-400/70">full — daily coders</div>
</div>
<div class="p-2 bg-indigo-900/20 rounded-lg border border-indigo-500/20 text-center">
<div class="text-lg font-bold text-indigo-300">40 seats</div>
<div class="text-xs text-indigo-400/70">usage-based — occasional</div>
</div>
<div class="p-2 bg-purple-900/20 rounded-lg border border-purple-500/20 text-center">
<div class="text-lg font-bold text-purple-300">80 seats</div>
<div class="text-xs text-purple-400/70">review-only — free</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/20">
<div class="text-xs text-indigo-300/90"><strong>200-person org example:</strong> This split delivers <strong class="text-indigo-200">30–40% cost savings</strong> vs. provisioning all-full seats — without restricting access for any team</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🛡️</span>
<div class="text-sm font-semibold text-indigo-300">Enterprise Control Points</div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🤖</span>
<div class="text-sm font-semibold text-purple-300">Automated Validation</div>
</div>
<div class="font-mono text-xs bg-gray-950/50 p-2 rounded border border-purple-500/20 mt-2 overflow-y-auto max-h-32">
<div class="text-purple-300 font-semibold mb-1">Custom Agent: <span class="text-cyan-300">@security-validator</span></div>
<div class="text-gray-300">• OWASP Top 10 vulnerabilities</div>
<div class="text-gray-300">• Hardcoded secrets/credentials</div>
<div class="text-gray-300">• Unapproved dependencies</div>
<div class="text-gray-300 mb-1">• Data exposure risks</div>
<div class="border-t border-purple-500/20 my-1"></div>
<div class="text-purple-300 font-semibold mb-1">Agent Skill: <span class="text-cyan-300">hipaa-compliance-check</span></div>
<div class="text-gray-300">• PHI encryption (AES-256)</div>
<div class="text-gray-300">• Audit logging completeness</div>
<div class="text-gray-300">• Access control enforcement</div>
<div class="text-gray-300">• Data retention policies</div>
</div>
</div>
</div>

<div class="mt-3 space-y-2">
<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-indigo-900/20 rounded-lg border border-indigo-500/20 text-center">
<div class="text-sm font-bold text-indigo-300">HIPAA</div>
<div class="text-xs text-indigo-400/70">Healthcare PHI</div>
</div>
<div class="p-2 bg-purple-900/20 rounded-lg border border-purple-500/20 text-center">
<div class="text-sm font-bold text-purple-300">SOC 2</div>
<div class="text-xs text-purple-400/70">Security controls</div>
</div>
<div class="p-2 bg-pink-900/20 rounded-lg border border-pink-500/20 text-center">
<div class="text-sm font-bold text-pink-300">FedRAMP</div>
<div class="text-xs text-pink-400/70">Gov't compliance</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/20">
<div class="text-xs text-indigo-300/90"><strong>For regulated industries:</strong> Healthcare, finance, government — governance frameworks are <em>prerequisites</em> for AI adoption, not optional afterthoughts</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Scaling & Measurement -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-3 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-2 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Scaling & Measurement</h1>
<h2 class="!text-xl !font-normal !m-0 opacity-70 mb-4">Adoption, ROI, and federated governance</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-4"></div>
<div class="grid grid-cols-4 gap-3 text-sm max-w-4xl">
<div class="px-3 py-2 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-xl mb-1">📊</div>
<div class="text-purple-300 font-semibold text-sm">Metrics Framework</div>
<div class="text-xs opacity-70 mt-1">Leading, intermediate, lagging</div>
</div>
<div class="px-3 py-2 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-xl mb-1">🎓</div>
<div class="text-pink-300 font-semibold text-sm">Self-Service Kit</div>
<div class="text-xs opacity-70 mt-1">30-minute quick start</div>
</div>
<div class="px-3 py-2 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-xl mb-1">💰</div>
<div class="text-rose-300 font-semibold text-sm">ROI Reporting</div>
<div class="text-xs opacity-70 mt-1">Data-driven CFO narrative</div>
</div>
<div class="px-3 py-2 bg-fuchsia-900/30 rounded-xl border border-fuchsia-500/30">
<div class="text-xl mb-1">🤝</div>
<div class="text-fuchsia-300 font-semibold text-sm">Federated Model</div>
<div class="text-xs opacity-70 mt-1">16x knowledge ROI</div>
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
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Scaling & Measurement</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Adoption Metrics & ROI Measurement</div>
<div class="text-xs text-white/50">Leading, intermediate, and lagging indicators for data-driven justification</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">📊</span>
<div class="text-sm font-semibold text-cyan-300">Leading (Adoption Health)</div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">⚡</span>
<div class="text-sm font-semibold text-indigo-300">Intermediate (Efficiency)</div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🏆</span>
<div class="text-sm font-semibold text-purple-300">Lagging (Business Impact)</div>
</div>
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
<div class="mt-3 space-y-2">
<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-cyan-900/20 rounded-lg border border-cyan-500/20 text-center">
<div class="text-xl font-bold text-cyan-300">55-65%</div>
<div class="text-xs text-cyan-400/70">acceptance rate target</div>
</div>
<div class="p-2 bg-indigo-900/20 rounded-lg border border-indigo-500/20 text-center">
<div class="text-xl font-bold text-indigo-300">7.8→8.4</div>
<div class="text-xs text-indigo-400/70">dev satisfaction</div>
</div>
<div class="p-2 bg-purple-900/20 rounded-lg border border-purple-500/20 text-center">
<div class="text-xl font-bold text-purple-300">-31%</div>
<div class="text-xs text-purple-400/70">cost per feature</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
<div class="text-xs text-purple-300/90"><strong>Key:</strong> Track acceptance rate first (predicts everything else) → act on it → watch intermediate & lagging metrics improve</div>
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
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Scaling & Measurement</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Self-Service Onboarding Kit</div>
<div class="text-xs text-white/50">30-minute quick start enables teams without platform bottleneck</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">📦</span>
<div class="text-sm font-semibold text-purple-300">Kit Components</div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">⏱️</span>
<div class="text-sm font-semibold text-pink-300">30-Minute Onboarding Flow</div>
</div>
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
<div class="mt-3 space-y-2">
<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-purple-900/20 rounded-lg border border-purple-500/20 text-center">
<div class="text-xl font-bold text-purple-300">30 min</div>
<div class="text-xs text-purple-400/70">to productive</div>
</div>
<div class="p-2 bg-pink-900/20 rounded-lg border border-pink-500/20 text-center">
<div class="text-xl font-bold text-pink-300">&lt;2</div>
<div class="text-xs text-pink-400/70">support tickets/team</div>
</div>
<div class="p-2 bg-rose-900/20 rounded-lg border border-rose-500/20 text-center">
<div class="text-xl font-bold text-rose-300">90%+</div>
<div class="text-xs text-rose-400/70">satisfaction rate</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
<div class="text-xs text-purple-300/90"><strong>Success metrics:</strong> Teams productive in 30 min, &lt;2 support tickets/team, 90%+ satisfaction → 50 teams onboard simultaneously</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Federated Governance Model & ROI -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-rose-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Scaling & Measurement</span>
<div class="flex-1 h-px bg-gradient-to-r from-pink-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Federated Model & Knowledge Multiplication</div>
<div class="text-xs text-white/50">180-hour platform investment delivers 2,900+ hours saved (16x ROI)</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🏗️</span>
<div class="text-sm font-semibold text-pink-300">Platform Team Owns</div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🌿</span>
<div class="text-sm font-semibold text-rose-300">Teams Own</div>
</div>
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
<div class="mt-3 space-y-2">
<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-pink-900/20 rounded-lg border border-pink-500/20 text-center">
<div class="text-xl font-bold text-pink-300">180 hrs</div>
<div class="text-xs text-pink-400/70">platform investment</div>
</div>
<div class="p-2 bg-rose-900/20 rounded-lg border border-rose-500/20 text-center">
<div class="text-xl font-bold text-rose-300">2,900+</div>
<div class="text-xs text-rose-400/70">dev hours saved</div>
</div>
<div class="p-2 bg-orange-900/20 rounded-lg border border-orange-500/20 text-center">
<div class="text-xl font-bold text-orange-300">16×</div>
<div class="text-xs text-orange-400/70">knowledge ROI</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-pink-900/20 to-rose-900/20 rounded-lg border border-pink-500/20">
<div class="text-xs text-pink-300/90"><strong>The Compounding Effect:</strong> One-to-many deployment + automatic inheritance + centralized updates = knowledge stops fragmenting, starts compounding at scale</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">⚡</span>
<div class="text-sm font-semibold text-emerald-300">Immediate (15 min)</div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🗓️</span>
<div class="text-sm font-semibold text-teal-300">Short-Term (2-4 weeks)</div>
</div>
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
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🚀</span>
<div class="text-sm font-semibold text-cyan-300">Advanced (1-3 months)</div>
</div>
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
<div class="mt-3 space-y-2">
<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-emerald-900/20 rounded-lg border border-emerald-500/20 text-center">
<div class="text-xl font-bold text-emerald-300">15 min</div>
<div class="text-xs text-emerald-400/70">to first action</div>
</div>
<div class="p-2 bg-teal-900/20 rounded-lg border border-teal-500/20 text-center">
<div class="text-xl font-bold text-teal-300">80%+</div>
<div class="text-xs text-teal-400/70">utilization target</div>
</div>
<div class="p-2 bg-cyan-900/20 rounded-lg border border-cyan-500/20 text-center">
<div class="text-xl font-bold text-cyan-300">200+</div>
<div class="text-xs text-cyan-400/70">devs at scale</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-lg border border-emerald-500/20">
<div class="text-xs text-emerald-300/90"><strong>Next Steps:</strong> Achieve 80%+ utilization → Present ROI metrics to leadership → Scale from 50 to 200+ developers</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "🤖 GitHub Copilot Enterprise", color: "cyan", items: [
        { href: "https://docs.github.com/en/copilot/managing-copilot/managing-copilot-for-your-enterprise", label: "Managing Copilot for Your Enterprise", description: "Org policies, model access controls, seat management, and audit logs" },
        { href: "https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-organization-instructions", label: "Organization-Wide Custom Instructions", description: "Org-level and repo-level instructions, AGENTS.md, .github/copilot-instructions.md" },
        { href: "https://docs.github.com/en/copilot/concepts/agents/about-agent-skills", label: "Organizational Agent Skills (GA)", description: "Centrally versioned domain skills deployed across all org repositories" },
        { href: "https://docs.github.com/en/copilot/how-tos/provide-context/use-copilot-spaces", label: "Copilot Spaces (Knowledge Bases)", description: "Multi-repo context — organize repos into spaces for cross-codebase queries" }
    ] },
    { title: "📊 Metrics, Licensing & Standards", color: "purple", items: [
        { href: "https://docs.github.com/en/rest/copilot/copilot-metrics", label: "Copilot Usage Metrics API", description: "Acceptance rates, active users, feature adoption — org and team breakdowns" },
        { href: "https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access", label: "Flexible Licensing Strategies", description: "Full seats, usage-based, and review-only tiers for cost optimization" },
        { href: "https://agents.md/", label: "AGENTS.md Open Format", description: "Cross-vendor standard for agent instruction files and repo conventions" },
        { label: "Related Tech Talks", description: "Agentic Journey · Agentic SDLC · Agent Teams · Agentic Workflows" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="Enterprise Patterns for AI Adoption"
:cards="[
  { icon: '💡', value: '16x', detail: 'ROI from knowledge multiplication', subdetail: 'One instruction benefits entire organization' },
  { icon: '💰', value: '30-40%', detail: 'Cost reduction via flexible licensing', subdetail: 'Right-size seats based on usage patterns' },
  { icon: '👥', value: '500+', detail: 'Developers benefit from one instruction', subdetail: 'Organization-wide knowledge at scale' },
]"
prompt="Questions? Let's discuss which enterprise patterns apply to your organization first"
/>
