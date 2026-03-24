---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Scaling GitHub Copilot Across Organizations
  Enterprise patterns for organization-wide AI adoption and governance
  60-minute technical presentation for architects and leadership
drawings:
  persist: false
transition: slide-left
title: Scaling GitHub Copilot Across Organizations
module: tech-talks/enterprise-patterns
mdc: true
status: active
updated: 2026-03-23
---

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
<div class="abs-br m-6 flex gap-2"><span class="text-sm opacity-50">Tech Talk · 60 minutes</span></div>

---
layout: center
name: core-question
---

# 🎯 The Core Question

<div class="p-8 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 max-w-4xl mx-auto">
<div class="text-2xl text-cyan-300 italic">
"How do I scale GitHub Copilot from pilot teams to organization-wide adoption with consistent standards, governance, and measurable ROI?"
</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-lg border border-red-500/30">
<div class="text-2xl mb-2">🔄</div>
<div class="font-semibold text-red-300 text-sm">Repeated Reinvention</div>
<div class="text-xs opacity-80 mt-1">50 teams = 50 custom configs</div>
</div>
<div class="p-4 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30">
<div class="text-2xl mb-2">❓</div>
<div class="font-semibold text-amber-300 text-sm">ROI Measurement Gap</div>
<div class="text-xs opacity-80 mt-1">Anecdotes, not data</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-2xl mb-2">📊</div>
<div class="font-semibold text-purple-300 text-sm">Inconsistent Standards</div>
<div class="text-xs opacity-80 mt-1">Quality varies across teams</div>
</div>
</div>

---
layout: center
---

# 📖 Table of Contents

<div class="grid grid-cols-2 gap-6 mt-6">
<div @click="$nav.go(5)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">🏢</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Organization-Wide Standards</div>
<div class="text-sm text-gray-300 mt-1">Define once, apply automatically</div>
<div class="text-xs text-cyan-400/70 mt-2">50x ROI in first year</div>
</div>
</div>
<div @click="$nav.go(9)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">📚</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Organizational Skills & Knowledge Bases</div>
<div class="text-sm text-gray-300 mt-1">Institutional knowledge that scales</div>
<div class="text-xs text-blue-400/70 mt-2">Encode expertise once</div>
</div>
</div>
<div @click="$nav.go(13)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">🔒</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Governance & Licensing</div>
<div class="text-sm text-gray-300 mt-1">Control, compliance, and cost optimization</div>
<div class="text-xs text-indigo-400/70 mt-2">30-40% cost reduction</div>
</div>
</div>
<div @click="$nav.go(17)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🚀</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Adoption & Multi-Team Coordination</div>
<div class="text-sm text-gray-300 mt-1">Scale without bottlenecks</div>
<div class="text-xs text-purple-400/70 mt-2">16x ROI knowledge multiplication</div>
</div>
</div>
</div>
<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>

---
layout: center
---

# 💡 The Core Insight

<div class="max-w-4xl mx-auto">
<div class="p-8 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl border-2 border-emerald-500/40 mb-6">
<div class="text-2xl text-center mb-4">
<span class="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent font-bold">From Individual Tools → Organizational Systems</span>
</div>
<div class="text-lg text-gray-300 text-center italic">
Organizational knowledge compounds systematically through shared standards and encoded expertise
</div>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
<div class="font-bold text-red-300 mb-2">❌ Before</div>
<div class="text-sm space-y-1 opacity-90">
<div>• 50 teams = 2,000 hours of config work</div>
<div>• Knowledge fragments across silos</div>
<div>• "Developers say it helps" (anecdotes)</div>
<div>• Teams reinvent same patterns</div>
</div>
</div>
<div class="p-4 bg-emerald-900/20 rounded-lg border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2">✅ After</div>
<div class="text-sm space-y-1 opacity-90">
<div>• 180 hours saves 2,900+ hours (16x ROI)</div>
<div>• Knowledge scales infinitely</div>
<div>• Data-driven ROI for CFO</div>
<div>• Architect updates once, 500 devs benefit</div>
</div>
</div>
</div>
</div>

---
layout: center
name: org-standards
---

<div class="text-center mb-6">
<div class="text-5xl mb-4">🏢</div>
<h1 class="!text-4xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Organization-Wide Standards</h1>
<p class="text-xl opacity-80 mt-2">Define baseline consistency without manual per-repo configuration</p>
</div>
<div class="p-5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30 mb-5 text-center max-w-3xl mx-auto">
<div class="text-lg">One organization change propagates to all repositories instantly</div>
</div>

---

# Traditional Polyrepo: Manual Configuration

<div class="grid grid-cols-2 gap-6">
<div>
<div class="text-sm font-mono mb-3 text-cyan-300">Before: Per-Repo Configuration</div>

```
repo-1/.github/copilot-instructions.md
  ← Team A's standards

repo-2/.github/copilot-instructions.md
  ← Team B's standards

repo-3/.github/copilot-instructions.md
  ← Team C's standards
```

<div class="mt-4 p-3 bg-red-900/30 rounded border border-red-500/30">
<div class="font-bold text-red-300 mb-2">❌ Problems:</div>
<div class="text-sm space-y-1">
<div>• 50 repos = 40 hours × 50 = 2,000 hours</div>
<div>• Standards drift over time</div>
<div>• Security updates require manual propagation</div>
</div>
</div>
</div>

<div>
<div class="text-sm font-mono mb-3 text-emerald-300">After: Organization-Level</div>

```
Organization Settings
  ↓
Custom Instructions (auto-applied)
  ├── Security requirements
  ├── Framework preferences
  ├── Coding standards
  └── Compliance rules

Repos (optional overrides only)
  ├── repo-1 (domain-specific)
  └── repo-2 (domain-specific)
```

<div class="mt-4 p-3 bg-emerald-900/30 rounded border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2">✅ Benefits:</div>
<div class="text-sm space-y-1">
<div>• 40 hours setup → all repos inherit</div>
<div>• Update once → propagates instantly</div>
<div>• 50x ROI in first year</div>
</div>
</div>
</div>
</div>

---

# What to Standardize at Org Level

<div class="grid grid-cols-3 gap-4 mt-4">
<div class="p-4 bg-gradient-to-br from-red-900/40 to-red-800/30 rounded-xl border border-red-500/40">
<div class="text-2xl mb-2">🔒</div>
<div class="font-bold text-red-300">Security & Compliance</div>
<div class="text-sm mt-2 space-y-1 opacity-90">
<div>• OAuth 2.0 with PKCE</div>
<div>• AES-256 encryption for PII</div>
<div>• Secrets in Azure Key Vault</div>
<div>• Parameterized queries only</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl border border-blue-500/40">
<div class="text-2xl mb-2">🛠️</div>
<div class="font-bold text-blue-300">Framework Preferences</div>
<div class="text-sm mt-2 space-y-1 opacity-90">
<div>• React 18+ with TypeScript</div>
<div>• Node.js 20 LTS + Express</div>
<div>• Jest + Playwright (80% coverage)</div>
<div>• Prettier + ESLint</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-green-900/40 to-green-800/30 rounded-xl border border-green-500/40">
<div class="text-2xl mb-2">✅</div>
<div class="font-bold text-green-300">Quality Baselines</div>
<div class="text-sm mt-2 space-y-1 opacity-90">
<div>• WCAG 2.1 AA accessibility</div>
<div>• Page load <2s on 3G</div>
<div>• Lighthouse score >90</div>
<div>• 200KB bundle budget</div>
</div>
</div>
</div>

<div class="mt-6 p-5 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-xl border-2 border-emerald-500/40">
<div class="text-lg font-bold text-emerald-300 mb-2">💰 The ROI Calculation</div>
<div class="text-sm text-gray-300">
<strong>50 teams</strong>: 2,000 hours initial + 6,000 hours/year saved<br/>
<strong>Investment</strong>: 40 hours to create org instructions<br/>
<strong>Result</strong>: <span class="text-emerald-200 font-bold">50x ROI in first year, compounding annually</span>
</div>
</div>

---

# Monorepo Pattern: Nested Playbooks

<div class="grid grid-cols-2 gap-6">
<div>

```
repo/
├── .github/
│   ├── copilot-instructions.md
│   └── instructions/
│       ├── api.instructions.md
│       └── infra.instructions.md
├── AGENTS.md  ← Global guardrails
├── frontend/
│   └── AGENTS.md  ← Frontend playbook
├── backend/
│   └── AGENTS.md  ← Backend playbook
└── infra/
    └── AGENTS.md  ← Infra playbook
```

</div>
<div class="flex flex-col justify-center">
<div class="p-4 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30 mb-3">
<div class="font-bold text-cyan-300 mb-2">🎯 Pattern Benefits</div>
<div class="text-sm space-y-2">
<div>• Shared repo standards centralized</div>
<div>• Local commands per domain</div>
<div>• Portable agent playbooks</div>
<div>• No monolithic config file</div>
</div>
</div>

<div class="p-4 bg-blue-900/20 rounded border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-1">Decision Matrix:</div>
<div class="text-xs space-y-1 opacity-90">
<div><strong>Repository selector?</strong> → Org instructions or copilot-instructions.md</div>
<div><strong>File pattern selector?</strong> → .instructions.md</div>
<div><strong>Directory selector?</strong> → Nearest AGENTS.md</div>
</div>
</div>
</div>
</div>

---
layout: center
name: knowledge-systems
---

<div class="text-center mb-6">
<div class="text-5xl mb-4">📚</div>
<h1 class="!text-4xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Organizational Skills & Knowledge Bases</h1>
<p class="text-xl opacity-80 mt-2">Institutional knowledge that scales infinitely</p>
</div>
<div class="p-5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-500/30 mb-5 text-center max-w-3xl mx-auto">
<div class="text-lg">Encode domain expertise once, apply everywhere — update centrally, propagate automatically</div>
</div>

---

# Organizational Agent Skills (Now GA)

<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="text-lg font-bold text-blue-300 mb-3">What Are Organizational Skills?</div>
<div class="space-y-4">
<div class="p-3 bg-blue-900/30 rounded">
<div class="text-sm font-semibold text-blue-200">✅ Centrally Versioned</div>
<div class="text-xs opacity-80">Agent Skills defined at org level in shared repos</div>
</div>
<div class="p-3 bg-indigo-900/30 rounded">
<div class="text-sm font-semibold text-indigo-200">✅ Automatically Available</div>
<div class="text-xs opacity-80">All organization repositories inherit skills instantly</div>
</div>
<div class="p-3 bg-purple-900/30 rounded">
<div class="text-sm font-semibold text-purple-200">✅ Version Control for Knowledge</div>
<div class="text-xs opacity-80">Update once → propagates to all repos</div>
</div>
</div>
</div>

<div>
<div class="text-lg font-bold text-indigo-300 mb-3">Enterprise Use Cases</div>

<div class="text-sm font-mono mb-2 text-indigo-200">Domain-Specific Expertise:</div>

```
org-skills/
├── payment-processing/  ← PCI compliance
├── healthcare-data/     ← HIPAA rules
├── architecture-review/ ← System design
└── performance-budgets/ ← Resource limits
```

<div class="text-sm font-mono mt-4 mb-2 text-purple-200">Cross-Cutting Concerns:</div>

```
org-skills/
├── security-scanner/    ← OWASP Top 10
├── accessibility-check/ ← WCAG validation
├── cost-estimator/      ← Cloud pricing
└── tech-debt-analyzer/  ← Maintainability
```
</div>
</div>

---

# Use Case: Financial Services PCI Compliance

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="p-4 bg-red-900/30 rounded-lg border-l-4 border-red-500">
<div class="font-bold text-red-300 mb-2">❌ The Problem</div>
<div class="text-sm space-y-2">
<div>• 180 developers across 40 microservices</div>
<div>• Each team interprets security differently</div>
<div>• <strong>12 compliance violations</strong> in 6 months</div>
<div>• Security review: <strong>45 min per PR</strong></div>
</div>
</div>

<div class="p-4 bg-emerald-900/30 rounded-lg border-l-4 border-emerald-500">
<div class="font-bold text-emerald-300 mb-2">✅ The Solution</div>
<div class="text-sm space-y-2">
<div>• Org-wide custom instructions (PCI)</div>
<div>• <code class="text-xs">@pci-validator</code> Agent Skill</div>
<div>• Automated compliance checking on every PR</div>
<div>• Validation before human review</div>
</div>
</div>
</div>

<div class="mt-4 p-5 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-xl border-2 border-emerald-500/40">
<div class="text-lg font-bold text-emerald-300 mb-3">📊 Outcome</div>
<div class="grid grid-cols-4 gap-3 text-sm">
<div class="p-3 bg-emerald-900/40 rounded text-center">
<div class="text-emerald-200 font-bold text-2xl">0</div>
<div class="text-xs opacity-80">Violations (was 12)</div>
</div>
<div class="p-3 bg-blue-900/40 rounded text-center">
<div class="text-blue-200 font-bold text-2xl">10 min</div>
<div class="text-xs opacity-80">Review time (was 45 min)</div>
</div>
<div class="p-3 bg-indigo-900/40 rounded text-center">
<div class="text-indigo-200 font-bold text-2xl">8 hrs</div>
<div class="text-xs opacity-80">Audit prep (was 120 hrs)</div>
</div>
<div class="p-3 bg-purple-900/40 rounded text-center">
<div class="text-purple-200 font-bold text-2xl">$480K</div>
<div class="text-xs opacity-80">Annual savings</div>
</div>
</div>
</div>

---

# Copilot Knowledge Bases (Enterprise Tier)

<div class="grid grid-cols-2 gap-6">
<div>
<div class="text-lg font-bold text-indigo-300 mb-3">The Microservices Context Problem</div>
<div class="space-y-3 text-sm">
<div class="p-3 bg-red-900/30 rounded border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">❌ Before</div>
<div class="space-y-1 opacity-90">
<div>• Systems split across 10-50 repos</div>
<div>• Copilot in one repo lacks related context</div>
<div>• Manual cross-repo reference hunting</div>
<div>• Documentation scattered everywhere</div>
</div>
</div>

<div class="p-3 bg-emerald-900/30 rounded border border-emerald-500/30">
<div class="font-semibold text-emerald-300 mb-1">✅ After</div>
<div class="space-y-1 opacity-90">
<div>• Index multiple repos as unified KB</div>
<div>• Query with <code class="text-xs">@kb payment-platform</code></div>
<div>• AI answers using entire system context</div>
<div>• Works on GitHub.com Chat</div>
</div>
</div>
</div>
</div>

<div>
<div class="text-lg font-bold text-purple-300 mb-3">Knowledge Base Example</div>

```
Knowledge Base: "Payment Platform"
  ├── payment-api (REST contracts)
  ├── payment-processor (business logic)
  ├── fraud-detection (ML models)
  ├── compliance-rules (regulatory)
  └── platform-docs (architecture)

Developer asks:
"How does fraud detection integrate
with payment flow?"

Copilot answers with context from
all five repositories simultaneously
```

<div class="mt-3 p-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded border border-indigo-500/40">
<div class="text-sm font-semibold text-indigo-200">🎯 Best For:</div>
<div class="text-xs space-y-1 mt-1 opacity-90">
<div>• Microservices with interdependencies</div>
<div>• Shared libraries across org</div>
<div>• Multi-repo systems (FE + BE + Mobile + Infra)</div>
</div>
</div>
</div>
</div>

---
layout: center
name: governance
---

<div class="text-center mb-6">
<div class="text-5xl mb-4">🔒</div>
<h1 class="!text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Governance & Licensing</h1>
<p class="text-xl opacity-80 mt-2">Control, compliance, and cost optimization</p>
</div>
<div class="p-5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/30 mb-5 text-center max-w-3xl mx-auto">
<div class="text-lg">Balance AI capability with enterprise requirements — 30-40% cost reduction possible</div>
</div>

---

# Model Governance & Auto Selection

<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="text-lg font-bold text-indigo-300 mb-3">Policy Framework</div>
<div class="space-y-3">
<div class="p-3 bg-indigo-900/30 rounded">
<div class="text-sm font-semibold text-indigo-200">🎛️ Model Restriction Policies</div>
<div class="text-xs mt-1 space-y-1 opacity-90">
<div>• Control which models can be used org-wide</div>
<div>• Restrict high-cost models to approved cases</div>
<div>• Enforce compliance (data residency, audit)</div>
<div>• Set budget controls on premium requests</div>
</div>
</div>

<div class="p-3 bg-purple-900/30 rounded">
<div class="text-sm font-semibold text-purple-200">🤖 Auto Model Selection</div>
<div class="text-xs mt-1 space-y-1 opacity-90">
<div>• Route routine tasks to cost-effective models</div>
<div>• Reserve premium (Opus, GPT-4.1) for complex</div>
<div>• Respect org policies automatically</div>
<div>• Audit usage for cost tracking</div>
</div>
</div>
</div>
</div>

<div>
<div class="text-lg font-bold text-purple-300 mb-3">Cost Optimization Patterns</div>

```
Organization Settings → Copilot Policies
  ├── Allowed: GPT-4.1, Claude Sonnet 4
  ├── Restricted: Claude Opus 4 (approval)
  ├── Auto-selection: Enabled
  └── Audit logging: All usage tracked
```

<div class="mt-4 space-y-2 text-sm">
<div class="p-2 bg-green-900/30 rounded flex justify-between">
<span class="opacity-80">Routine code completion:</span>
<span class="text-green-300 font-semibold">Fast models</span>
</div>
<div class="p-2 bg-blue-900/30 rounded flex justify-between">
<span class="opacity-80">Documentation generation:</span>
<span class="text-blue-300 font-semibold">Balanced (Sonnet)</span>
</div>
<div class="p-2 bg-purple-900/30 rounded flex justify-between">
<span class="opacity-80">Architecture analysis:</span>
<span class="text-purple-300 font-semibold">Premium (Opus)</span>
</div>
</div>
</div>
</div>

---

# Flexible Licensing Strategies

<div class="grid grid-cols-3 gap-4 mt-4">
<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/30 rounded-xl border border-cyan-500/40">
<div class="text-2xl mb-2">💎</div>
<div class="font-bold text-cyan-300">Full Seat Licensing</div>
<div class="text-xs mt-2 space-y-2 opacity-90">
<div class="p-2 bg-cyan-900/40 rounded">
<div class="font-semibold text-cyan-200">Best For:</div>
<div>Core developers (daily coding)</div>
<div>Platform engineers</div>
<div>Architects</div>
</div>
<div class="text-cyan-200 font-semibold">Fixed monthly per seat</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/30 rounded-xl border border-blue-500/40">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold text-blue-300">Usage-Based Access</div>
<div class="text-xs mt-2 space-y-2 opacity-90">
<div class="p-2 bg-blue-900/40 rounded">
<div class="font-semibold text-blue-200">Best For:</div>
<div>Contractors (temporary)</div>
<div>Security team (periodic)</div>
<div>Technical writers</div>
</div>
<div class="text-blue-200 font-semibold">Pay only for actual usage</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/30 rounded-xl border border-indigo-500/40">
<div class="text-2xl mb-2">👁️</div>
<div class="font-bold text-indigo-300">Review-Only Access</div>
<div class="text-xs mt-2 space-y-2 opacity-90">
<div class="p-2 bg-indigo-900/40 rounded">
<div class="font-semibold text-indigo-200">Best For:</div>
<div>Product managers</div>
<div>Design team</div>
<div>QA engineers</div>
</div>
<div class="text-indigo-200 font-semibold">No cost for unlicensed</div>
</div>
</div>
</div>

<div class="mt-4 p-5 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-xl border-2 border-emerald-500/40">
<div class="text-lg font-bold text-emerald-300 mb-2">💰 Strategic Deployment Example (200-person org)</div>
<div class="text-sm text-gray-300">
<strong>80 full seats</strong> (core developers) + <strong>40 usage-based</strong> (contractors, specialists) + <strong>80 review-only</strong> (product, design, QA)<br/>
<strong>Result</strong>: <span class="text-emerald-200 font-bold">30-40% cost reduction vs. all full seats</span> while expanding AI to entire product org
</div>
</div>

---

# Compliance Automation Examples

<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="text-lg font-bold text-purple-300 mb-3">Security Compliance Agent</div>
<div v-pre class="font-mono text-xs bg-gray-900/80 p-3 rounded-lg border border-purple-700/30 text-gray-300 leading-relaxed">
Custom Agent: @security-validator<br><br>
Automatically reviews PRs for:<br>
&nbsp;&nbsp;- OWASP Top 10 vulnerabilities<br>
&nbsp;&nbsp;- Hardcoded secrets or credentials<br>
&nbsp;&nbsp;- Unapproved dependencies<br>
&nbsp;&nbsp;- Data exposure risks<br><br>
Runs on every PR before merge
</div>
<div class="mt-3 p-3 bg-purple-900/30 rounded border border-purple-500/30">
<div class="text-sm font-semibold text-purple-200">Enterprise Control Points:</div>
<div class="text-xs space-y-1 mt-1 opacity-90">
<div>• Access governance (repo/team/role policies)</div>
<div>• Content filtering (block vulnerable patterns)</div>
<div>• Data governance (residency, retention)</div>
</div>
</div>
</div>

<div>
<div class="text-lg font-bold text-pink-300 mb-3">HIPAA Compliance Skill</div>
<div v-pre class="font-mono text-xs bg-gray-900/80 p-3 rounded-lg border border-pink-700/30 text-gray-300 leading-relaxed">
Agent Skill: @hipaa-compliance-check<br><br>
Validates healthcare code for:<br>
&nbsp;&nbsp;- PHI encryption (AES-256 at rest)<br>
&nbsp;&nbsp;- Audit logging (who/what/when)<br>
&nbsp;&nbsp;- Access controls (RBAC, min necessary)<br>
&nbsp;&nbsp;- Data retention (auto-purge)<br>
&nbsp;&nbsp;- Breach notification readiness<br><br>
Auto-applied to /healthcare-data
</div>
<div class="mt-3 p-3 bg-pink-900/30 rounded border border-pink-500/30">
<div class="text-sm font-semibold text-pink-200">Healthcare SaaS Outcome:</div>
<div class="text-xs space-y-1 mt-1 opacity-90">
<div>• Review time: 3-5 days → 4 hours (94% faster)</div>
<div>• HIPAA violations: 8 → 0 (eliminated)</div>
<div>• Feature velocity: +55% (bottleneck removed)</div>
</div>
</div>
</div>
</div>

---
layout: center
name: adoption
---

<div class="text-center mb-6">
<div class="text-5xl mb-4">🚀</div>
<h1 class="!text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Adoption & Multi-Team Coordination</h1>
<p class="text-xl opacity-80 mt-2">Scale without bottlenecks — federated governance with 16x ROI</p>
</div>
<div class="p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30 mb-5 text-center max-w-3xl mx-auto">
<div class="text-lg">Self-service enablement + community knowledge sharing = systematic organizational learning</div>
</div>

---

# Adoption Metrics: Leading, Intermediate, Lagging

<div class="grid grid-cols-3 gap-4 mt-4">
<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/30 rounded-xl border border-cyan-500/40">
<div class="text-2xl mb-2">📊</div>
<div class="font-bold text-cyan-300 mb-2">Leading Indicators</div>
<div class="text-xs space-y-2">
<div class="p-2 bg-cyan-900/40 rounded">
<div class="text-cyan-200 font-semibold">Acceptance Rate</div>
<div class="opacity-80">Target: 55-65%</div>
</div>
<div class="p-2 bg-cyan-900/40 rounded">
<div class="text-cyan-200 font-semibold">Active Users</div>
<div class="opacity-80">Target: 80%+ utilization</div>
</div>
<div class="p-2 bg-cyan-900/40 rounded">
<div class="text-cyan-200 font-semibold">AI Contribution %</div>
<div class="opacity-80">Code lines generated</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/30 rounded-xl border border-indigo-500/40">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold text-indigo-300 mb-2">Intermediate Indicators</div>
<div class="text-xs space-y-2">
<div class="p-2 bg-indigo-900/40 rounded">
<div class="text-indigo-200 font-semibold">PR Velocity</div>
<div class="opacity-80">PRs created per week</div>
</div>
<div class="p-2 bg-indigo-900/40 rounded">
<div class="text-indigo-200 font-semibold">Review Time</div>
<div class="opacity-80">PR open → merge</div>
</div>
<div class="p-2 bg-indigo-900/40 rounded">
<div class="text-indigo-200 font-semibold">Bug Fix Time</div>
<div class="opacity-80">Issue → resolution</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-br from-purple-900/40 to-pink-900/30 rounded-xl border border-purple-500/40">
<div class="text-2xl mb-2">💼</div>
<div class="font-bold text-purple-300 mb-2">Lagging Indicators</div>
<div class="text-xs space-y-2">
<div class="p-2 bg-purple-900/40 rounded">
<div class="text-purple-200 font-semibold">Time to Market</div>
<div class="opacity-80">Feature delivery speed</div>
</div>
<div class="p-2 bg-purple-900/40 rounded">
<div class="text-purple-200 font-semibold">Developer Satisfaction</div>
<div class="opacity-80">7.8 → 8.4 / 10</div>
</div>
<div class="p-2 bg-purple-900/40 rounded">
<div class="text-purple-200 font-semibold">Cost per Feature</div>
<div class="opacity-80">-31% (normalized)</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-xl border-2 border-emerald-500/40">
<div class="font-bold text-emerald-300 mb-2">📈 Quarterly Business Case Example</div>
<div class="text-sm">"Copilot investment of $X delivered $Y in productivity gains, reducing cost per feature 31% while shipping 40% more features with same headcount"</div>
</div>

---

# Self-Service Onboarding Kit

<div class="grid grid-cols-2 gap-6">
<div>
<div class="text-lg font-bold text-purple-300 mb-3">Kit Components</div>

```
team-onboarding/
├── README.md              ← 30-min quick start
├── repository-setup.md    ← Config guide
├── custom-instructions.md ← Org standards
├── skills-catalog.md      ← Available skills
├── review-checklist.md    ← AI review guide
└── examples/
    ├── good-prompts.md
    ├── custom-agent-template/
    └── sample-repository/
```

<div class="mt-3 p-3 bg-purple-900/30 rounded border border-purple-500/30">
<div class="text-sm font-semibold text-purple-200">30-Minute Onboarding Flow:</div>
<div class="text-xs space-y-1 mt-1">
<div>1. Read quick start (10 min)</div>
<div>2. Configure repo using template (10 min)</div>
<div>3. Complete first exercise (10 min)</div>
<div>4. Reference materials for ongoing learning</div>
</div>
</div>
</div>

<div>
<div class="text-lg font-bold text-pink-300 mb-3">Enablement Strategy</div>
<div class="space-y-3 text-sm">
<div class="p-3 bg-pink-900/30 rounded">
<div class="font-semibold text-pink-200">📦 Package as Self-Service</div>
<div class="text-xs opacity-90">Working examples, not abstract theory</div>
</div>
<div class="p-3 bg-purple-900/30 rounded">
<div class="font-semibold text-purple-200">📋 Copy/Paste Ready</div>
<div class="text-xs opacity-90">Template common configs, no interpretation</div>
</div>
<div class="p-3 bg-indigo-900/30 rounded">
<div class="font-semibold text-indigo-200">🎥 Async Walkthroughs</div>
<div class="text-xs opacity-90">Video for visual learners</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded border border-emerald-500/40">
<div class="text-sm font-semibold text-emerald-200">Success Metrics:</div>
<div class="text-xs space-y-1 mt-1 opacity-90">
<div>• Productive within 30 minutes</div>
<div>• <2 support tickets per team</div>
<div>• 90%+ satisfaction with process</div>
<div>• 50 teams onboard without bottleneck</div>
</div>
</div>
</div>
</div>

---

# Federated Governance Model

<div class="grid grid-cols-2 gap-6 mt-4">
<div>
<div class="text-lg font-bold text-indigo-300 mb-3">Platform Team Responsibilities</div>
<div class="space-y-2 text-sm">
<div class="p-2 bg-indigo-900/30 rounded flex items-center gap-2">
<div class="text-indigo-300">🏢</div>
<div>Define org-wide standards</div>
</div>
<div class="p-2 bg-indigo-900/30 rounded flex items-center gap-2">
<div class="text-indigo-300">📚</div>
<div>Maintain shared skill libraries</div>
</div>
<div class="p-2 bg-indigo-900/30 rounded flex items-center gap-2">
<div class="text-indigo-300">📦</div>
<div>Provide onboarding kit & templates</div>
</div>
<div class="p-2 bg-indigo-900/30 rounded flex items-center gap-2">
<div class="text-indigo-300">📊</div>
<div>Track metrics & report ROI</div>
</div>
<div class="p-2 bg-indigo-900/30 rounded flex items-center gap-2">
<div class="text-indigo-300">🔒</div>
<div>Govern model access & compliance</div>
</div>
</div>
</div>

<div>
<div class="text-lg font-bold text-purple-300 mb-3">Team Responsibilities</div>
<div class="space-y-2 text-sm">
<div class="p-2 bg-purple-900/30 rounded flex items-center gap-2">
<div class="text-purple-300">🎨</div>
<div>Customize repo for domain needs</div>
</div>
<div class="p-2 bg-purple-900/30 rounded flex items-center gap-2">
<div class="text-purple-300">🛠️</div>
<div>Build team-specific skills</div>
</div>
<div class="p-2 bg-purple-900/30 rounded flex items-center gap-2">
<div class="text-purple-300">🔄</div>
<div>Contribute patterns back to platform</div>
</div>
<div class="p-2 bg-purple-900/30 rounded flex items-center gap-2">
<div class="text-purple-300">✅</div>
<div>Follow review & compliance standards</div>
</div>
<div class="p-2 bg-purple-900/30 rounded flex items-center gap-2">
<div class="text-purple-300">📈</div>
<div>Measure & report team-level metrics</div>
</div>
</div>
</div>
</div>

<div class="mt-4 p-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl border-2 border-cyan-500/40">
<div class="font-bold text-cyan-300 mb-2">🤝 Community of Practice</div>
<div class="text-sm text-gray-300">Monthly pattern-sharing sessions · Internal skill catalogs · Slack/Teams async collaboration · Quarterly metrics review · Recognition for contributions</div>
</div>

---

# The Knowledge Multiplication Effect (16x ROI)

<div class="grid grid-cols-2 gap-6 mt-4">
<div class="p-5 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl border-2 border-amber-500/40">
<div class="font-bold text-amber-300 text-lg mb-3">💰 Initial Investment (Platform Team)</div>
<div class="space-y-2 text-sm">
<div class="flex justify-between p-2 bg-amber-900/40 rounded">
<span class="opacity-90">Org instructions</span>
<span class="text-amber-200 font-semibold">40 hours</span>
</div>
<div class="flex justify-between p-2 bg-orange-900/40 rounded">
<span class="opacity-90">Shared skill library</span>
<span class="text-orange-200 font-semibold">60 hours</span>
</div>
<div class="flex justify-between p-2 bg-red-900/40 rounded">
<span class="opacity-90">Onboarding kit</span>
<span class="text-red-200 font-semibold">80 hours</span>
</div>
<div class="flex justify-between p-3 bg-red-800/50 rounded border-t-2 border-red-400 mt-2">
<span class="font-bold">Total Investment</span>
<span class="text-red-200 font-bold text-xl">180 hours</span>
</div>
</div>
</div>

<div class="p-5 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl border-2 border-emerald-500/40">
<div class="font-bold text-emerald-300 text-lg mb-3">📈 Returns at Scale (200 Developers)</div>
<div class="space-y-2 text-sm">
<div class="flex justify-between p-2 bg-emerald-900/40 rounded">
<span class="opacity-90">Org instructions (2 hrs each)</span>
<span class="text-emerald-200 font-semibold">400 hrs saved</span>
</div>
<div class="flex justify-between p-2 bg-green-900/40 rounded">
<span class="opacity-90">Shared skills (5 hrs each)</span>
<span class="text-green-200 font-semibold">1,000 hrs saved</span>
</div>
<div class="flex justify-between p-2 bg-teal-900/40 rounded">
<span class="opacity-90">Onboarding (8→0.5 hrs)</span>
<span class="text-teal-200 font-semibold">1,500 hrs saved</span>
</div>
<div class="flex justify-between p-3 bg-emerald-700/50 rounded border-t-2 border-emerald-300 mt-2">
<span class="font-bold">Total Saved (Year 1)</span>
<span class="text-emerald-100 font-bold text-xl">2,900 hours</span>
</div>
</div>
</div>
</div>

<div class="mt-4 p-5 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-xl border-4 border-cyan-400/60">
<div class="text-center">
<div class="text-5xl font-bold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent mb-2">16x ROI</div>
<div class="text-lg text-gray-200">Continuous compounding: every new developer benefits automatically · every skill update propagates to all users · knowledge multiplies rather than fragments</div>
</div>
</div>

---

# 📚 References & Further Reading

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="flex flex-col gap-3">
<div class="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">Official Documentation</div>
<a href="https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization" class="block p-3 bg-gray-800/60 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-colors no-underline">
<div class="text-sm font-semibold text-cyan-300">Managing Copilot in your organization</div>
<div class="text-xs text-gray-400 mt-1">docs.github.com/en/copilot/managing-copilot</div>
</a>
<a href="https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot#adding-organization-wide-custom-instructions" class="block p-3 bg-gray-800/60 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors no-underline">
<div class="text-sm font-semibold text-blue-300">Adding organization-wide custom instructions</div>
<div class="text-xs text-gray-400 mt-1">docs.github.com/en/copilot/customizing-copilot</div>
</a>
<a href="https://docs.github.com/en/rest/copilot/copilot-metrics" class="block p-3 bg-gray-800/60 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-colors no-underline">
<div class="text-sm font-semibold text-indigo-300">Copilot metrics REST API</div>
<div class="text-xs text-gray-400 mt-1">docs.github.com/en/rest/copilot/copilot-metrics</div>
</a>
</div>

<div class="flex flex-col gap-3">
<div class="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">Standards & Patterns</div>
<a href="https://agents.md/" class="block p-3 bg-gray-800/60 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors no-underline">
<div class="text-sm font-semibold text-purple-300">AGENTS.md open format</div>
<div class="text-xs text-gray-400 mt-1">agents.md — standardized agent configuration</div>
</a>
<div class="mt-3 p-4 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-xs font-bold text-indigo-300 uppercase tracking-wide mb-2">Related Tech Talks</div>
<div class="space-y-2">
<a href="../agentic-sdlc.md" class="block p-2 bg-gray-800/60 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-colors no-underline">
<div class="text-sm font-semibold text-indigo-300">Agentic SDLC</div>
<div class="text-xs text-gray-400 mt-0.5">Background agents & autonomous workflows</div>
</a>
<a href="../copilot-primitives.md" class="block p-2 bg-gray-800/60 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors no-underline">
<div class="text-sm font-semibold text-purple-300">Copilot Primitives</div>
<div class="text-xs text-gray-400 mt-0.5">Instructions, Skills & Agents</div>
</a>
<a href="../copilot-web.md" class="block p-2 bg-gray-800/60 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-colors no-underline">
<div class="text-sm font-semibold text-cyan-300">Copilot Web</div>
<div class="text-xs text-gray-400 mt-0.5">Multi-interface AI assistance</div>
</a>
</div>
</div>
</div>

</div>

---
class: text-center
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-48" alt="" /></div>
<img src="./sdp-logo.png" class="w-48 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Thank You!</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">Scaling GitHub Copilot Across Organizations</span>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-lg">16x ROI</div>
<div class="text-gray-300 mt-2 text-xs">Knowledge multiplication through systematic sharing</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-bold text-lg">30-40% Cost Savings</div>
<div class="text-gray-300 mt-2 text-xs">Strategic licensing with usage-based & review-only access</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-bold text-lg">Instant Propagation</div>
<div class="text-gray-300 mt-2 text-xs">One org change → all repos automatically</div>
</div>
</div>
<div class="mt-6 text-sm opacity-60 relative z-10">Ready to transform individual success into organizational capability?</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
