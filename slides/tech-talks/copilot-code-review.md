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
title: Copilot Code Review
module: tech-talks/copilot-code-review
mdc: true
status: active
updated: 2026-03-19
---

<!-- SLIDE: Title Slide -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Copilot Code Review</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">Accelerating PR Velocity &amp; Maximizing ROI</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Turn PR analytics and review-time assumptions into an executive-ready savings story</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 30-40 minutes</span>
</div>

---

<!-- SLIDE: The Core Question -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔓 The Core Question</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 max-w-4xl mx-auto">
<div class="text-2xl font-bold text-cyan-300 mb-4">
"How can GitHub Copilot Code Review reduce PR review time by 40-60% and increase acceptance rates while delivering measurable ROI?"
</div>
</div>

<div class="mt-8 grid grid-cols-3 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30">
<div class="text-xl mb-2">🚧</div>
<div class="font-semibold text-amber-300">Review Capacity Bottleneck</div>
<div class="text-xs opacity-80 mt-1">50-100+ PRs/week with 2-3 senior reviewers. Average wait: 3-4 days</div>
</div>
<div class="p-3 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
<div class="text-xl mb-2">⚠️</div>
<div class="font-semibold text-orange-300">Inconsistent Review Quality</div>
<div class="text-xs opacity-80 mt-1">Security vulnerabilities missed 40-60% of the time under deadline pressure</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/30 to-purple-900/30 rounded-lg border border-red-500/30">
<div class="text-xl mb-2">⏱️</div>
<div class="font-semibold text-red-300">Context Switching Cost</div>
<div class="text-xs opacity-80 mt-1">15-20 minutes lost per PR switch. 10+ reviews daily = 2+ hours consumed</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Table of Contents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Table of Contents</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">⚙️</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Setup &amp; Configuration</div>
<div class="text-sm text-gray-300 mt-1">5-minute basic setup to first review</div>
<div class="text-xs text-cyan-400/70 mt-2">Repository-level config, branch protection integration</div>
</div>
</div>
<div @click="$nav.go(9)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">🔒</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Compliance &amp; Security</div>
<div class="text-sm text-gray-300 mt-1">Custom rulesets for regulatory requirements</div>
<div class="text-xs text-blue-400/70 mt-2">HIPAA, PCI-DSS, SOC2 compliance automation</div>
</div>
</div>
<div @click="$nav.go(13)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">💰</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">ROI Metrics</div>
<div class="text-sm text-gray-300 mt-1">Interactive calculator turns analytics into savings</div>
<div class="text-xs text-indigo-400/70 mt-2">15 days faster, 78.9% improvement, visible upside</div>
</div>
</div>
<div @click="$nav.go(19)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🚀</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Team Adoption</div>
<div class="text-sm text-gray-300 mt-1">Phased rollout and change management</div>
<div class="text-xs text-purple-400/70 mt-2">Pilot, tune, expand, standardize pattern</div>
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
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Setup &amp; Configuration</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">5-minute basic setup to first review</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">📝</div>
<div class="text-cyan-300 font-semibold">Basic Config</div>
<div class="text-xs opacity-70 mt-1">Simple YAML, triggers, focus areas</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🛡️</div>
<div class="text-blue-300 font-semibold">Branch Protection</div>
<div class="text-xs opacity-70 mt-1">Enforce review as required status check</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">💬</div>
<div class="text-indigo-300 font-semibold">Manual Requests</div>
<div class="text-xs opacity-70 mt-1">@github-copilot conversational review</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">15 minutes from enablement to first automated review</span><br />
<span class="text-cyan-300 mt-1 block">↳ automatic triggers + manual @-mentions</span>
</div>
</div>
</div>

---

<!-- SLIDE: Basic Configuration -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Setup &amp; Configuration</span>
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
<div class="text-lg font-bold text-white mb-0.5">📝 Basic Configuration — .github/copilot-review.yml</div>
<div class="text-xs text-white/50">Control triggers, focus areas, and reporting thresholds</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<pre class="overflow-y-auto max-h-80 text-xs bg-gray-900/90 border border-cyan-500/30 rounded-lg p-3 font-mono flex-1 min-h-0"><code class="language-yaml">version: 1

review:
  # Trigger automatic review on these events
  triggers:
    - pull_request_opened      # When PR is first created
    - pull_request_synchronize # When new commits are pushed
    - pull_request_reopened    # When closed PR is reopened

  # Minimum severity level to report
  severity_threshold: medium

  # File patterns to include
  include_patterns:
    - "src/**/*.{js,ts,jsx,tsx}"
    - "lib/**/*.py"
    - "**/*.java"

  # File patterns to exclude
  exclude_patterns:
    - "**/*.test.js"
    - "dist/**"
    - "*.md"

  # Focus areas for review
  focus:
    - security          # Security vulnerabilities
    - performance       # Performance issues
    - maintainability   # Code quality
    - testing           # Test coverage
    - best_practices    # Language-specific patterns

  # Integration with required status checks
  status_check:
    enabled: true
    required: true     # Block merge if critical issues found
    context: "Copilot Code Review"</code></pre>
</div>
</div>

---

<!-- SLIDE: Configuration Decisions -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Setup &amp; Configuration</span>
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
<div class="text-lg font-bold text-white mb-0.5">🎯 Key Configuration Decisions</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">1. Triggers</div>
<div class="text-gray-300 space-y-1">
<div>✅ Start with all three events</div>
<div>✅ Get feedback on every change</div>
<div>⚡ Narrow later if volume is too high</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2">2. Severity Threshold</div>
<div class="text-gray-300 space-y-1">
<div>✅ Medium for important issues without noise</div>
<div>✅ Lower to 'low' during onboarding</div>
<div>⚡ Avoid alert fatigue from minor style suggestions</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2">3. File Patterns</div>
<div class="text-gray-300 space-y-1">
<div>✅ Focus on production code first</div>
<div>✅ Exclude tests, docs, build artifacts</div>
<div>⚡ Keep reviews focused on what matters</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2">4. Focus Areas</div>
<div class="text-gray-300 space-y-1">
<div>✅ Enable all five categories initially</div>
<div>✅ Disable categories with low value after 30 days</div>
<div>⚡ Data-driven iteration based on findings</div>
</div>
</div>
</div>
<div class="mt-3 p-3 bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 rounded-lg border border-emerald-500/30 text-center">
<div class="text-sm font-semibold text-emerald-300">Pro Tip: Start with repository-level pilot, refine based on feedback, then expand org-wide</div>
</div>
</div>
</div>

---

<!-- SLIDE: Branch Protection Integration -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Setup &amp; Configuration</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">🛡️ Branch Protection Integration</div>
<div class="text-xs text-white/50">Enforce review as a required status check before merge</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg border border-gray-500/30">
<div class="font-bold text-gray-300 mb-2 text-sm">Setup Steps</div>
<div class="text-xs space-y-1 text-gray-300">
<div class="p-1.5 bg-cyan-900/20 rounded">1. Navigate to Settings → Branches</div>
<div class="p-1.5 bg-cyan-900/20 rounded">2. Edit branch protection rule (main/develop)</div>
<div class="p-1.5 bg-cyan-900/20 rounded">3. Enable "Require status checks to pass"</div>
<div class="p-1.5 bg-cyan-900/20 rounded">4. Select "Copilot Code Review" check</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2 text-sm">✅ Result</div>
<div class="text-xs space-y-1 text-gray-300">
<div class="p-1.5 bg-emerald-900/20 rounded">✓ GitHub blocks PR merge if critical issues found</div>
<div class="p-1.5 bg-emerald-900/20 rounded">✓ Automated enforcement without human vigilance</div>
<div class="p-1.5 bg-emerald-900/20 rounded">✓ Compliance-ready audit trail in PR timeline</div>
</div>
</div>
</div>

<div class="mt-3 grid grid-cols-2 gap-3 text-xs">
<div class="p-2 bg-gradient-to-br from-amber-900/30 to-amber-800/20 rounded-lg border border-amber-500/30">
<div class="font-semibold text-amber-300 mb-1">⚠️ Fast-Moving Teams</div>
<div class="text-gray-300">Start with informational (not blocking). Convert to required after 30 days of data.</div>
</div>
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">🎯 Enterprise Teams</div>
<div class="text-gray-300">Make required immediately. Use data to build team buy-in for automated enforcement.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Manual Review Requests -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Setup &amp; Configuration</span>
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
<div class="text-lg font-bold text-white mb-0.5">💬 Manual Review Requests</div>
<div class="text-xs text-white/50">Conversational interface for targeted analysis beyond automatic triggers</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-3 bg-gray-900/90 border border-cyan-500/30 rounded-lg mb-3">
<div class="font-mono text-xs text-cyan-300 mb-1">@github-copilot</div>
<div class="text-sm text-gray-300">please review this PR for security vulnerabilities and performance issues</div>
</div>

<div class="grid grid-cols-2 gap-3 text-xs">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1">Request Targeted Analysis</div>
<div class="text-gray-300">Focus on specific concerns — security, performance, test coverage</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1">Ask Follow-Up Questions</div>
<div class="text-gray-300">"Why is this more performant?" — educational explanations</div>
</div>
</div>
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1">Get Suggested Fixes</div>
<div class="text-gray-300">Receive code examples showing compliant implementation</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1">Learn Patterns Iteratively</div>
<div class="text-gray-300">Use findings as learning opportunities, share patterns in team chat</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 rounded-lg border border-emerald-500/30 text-center">
<div class="text-xs font-semibold text-emerald-300">Pro Tip: Request review early (draft PR stage) to catch issues before investing time in implementation</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Compliance & Security -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Compliance &amp; Security</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Custom rulesets for regulatory requirements</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-blue-300 font-semibold">PII Encryption</div>
<div class="text-xs opacity-70 mt-1">GDPR, HIPAA data protection rules</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📋</div>
<div class="text-indigo-300 font-semibold">Audit Trails</div>
<div class="text-xs opacity-70 mt-1">SOC2 compliance documentation</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🛡️</div>
<div class="text-purple-300 font-semibold">Automated Enforcement</div>
<div class="text-xs opacity-70 mt-1">100% PR coverage, zero manual vigilance</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Transform abstract policy documents into executable review logic</span><br />
<span class="text-blue-300 mt-1 block">↳ pattern matching + severity levels + suggested fixes</span>
</div>
</div>
</div>

---

<!-- SLIDE: Custom Compliance Rules Structure -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Compliance &amp; Security</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">🔒 Custom Ruleset Structure</div>
<div class="text-xs text-white/50">Each rule specifies patterns, context, severity, and suggested fixes</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="grid grid-cols-2 gap-3 text-xs mb-2">
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1">Pattern Matching</div>
<div class="text-gray-300">Regex or language-specific AST queries</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1">Context Requirements</div>
<div class="text-gray-300">Keywords that must be present nearby</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1">Severity Level</div>
<div class="text-gray-300">Critical, high, medium, low, or info</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-bold text-pink-300 mb-1">Compliance References</div>
<div class="text-gray-300">Links to policy sections, regulatory requirements</div>
</div>
</div>
<pre class="overflow-y-auto max-h-48 text-xs bg-gray-900/90 border border-blue-500/30 rounded-lg p-3 font-mono flex-1 min-h-0"><code class="language-yaml">rules:
  - id: "pii-encryption"
    name: "PII Data Encryption"
    severity: critical
    description: "All PII fields must be encrypted at rest and in transit"
    pattern:
      language: "javascript,typescript,python"
      match: "(email|ssn|phone|address|dob)\\s*[:=]"
      require_context: ["encrypt", "cipher", "crypto"]
    message: |
      Personal Identifiable Information (PII) detected without encryption.
      
      Required actions:
      1. Use approved encryption library (AES-256 or RSA-2048)
      2. Add audit log entry for PII access
      3. Document encryption key management
      
      Reference: Security Policy Section 4.2
      Compliance: GDPR Article 32, SOC2 CC6.1
    
    suggested_fix: |
      const crypto = require('crypto');
      const encryptedEmail = crypto.encrypt(email, process.env.ENCRYPTION_KEY);</code></pre>
</div>
</div>

---

<!-- SLIDE: Healthcare SaaS — HIPAA Compliance Example -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Compliance &amp; Security</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">🏥 Use Case: Healthcare SaaS — HIPAA Compliance Automation</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="font-bold text-red-300 mb-2 text-sm">❌ Before</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="p-1.5 bg-red-900/20 rounded">20-30 compliance violations per quarter</div>
<div class="p-1.5 bg-red-900/20 rounded">$150K annual compliance audit costs</div>
<div class="p-1.5 bg-red-900/20 rounded">40% developer HIPAA awareness</div>
<div class="p-1.5 bg-red-900/20 rounded">$500K+ potential fines exposure</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2 text-sm">✅ After</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="p-1.5 bg-emerald-900/20 rounded">1 violation per quarter (96% reduction)</div>
<div class="p-1.5 bg-emerald-900/20 rounded">40 hours audit prep (80% reduction)</div>
<div class="p-1.5 bg-emerald-900/20 rounded">95% developer HIPAA awareness</div>
<div class="p-1.5 bg-emerald-900/20 rounded">90% compliance risk reduction</div>
</div>
</div>
</div>

<div class="grid grid-cols-3 gap-2 text-center text-xs">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-400 font-bold text-base">96%</div>
<div class="text-white/50 mt-0.5">HIPAA violations reduction</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-400 font-bold text-base">$160K</div>
<div class="text-white/50 mt-0.5">Annual savings in audit costs</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-400 font-bold text-base">100%</div>
<div class="text-white/50 mt-0.5">PR coverage, zero manual vigilance</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 rounded-lg border border-emerald-500/30">
<div class="text-xs font-semibold text-emerald-300">Prevented potential regulatory fines + automated audit trail generation + developer HIPAA awareness training through feedback</div>
</div>
</div>
</div>

---

<!-- SLIDE: Building Org-Wide Rulesets -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Compliance &amp; Security</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">🏗️ Building Organization-Wide Rulesets</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-5 gap-2 text-xs">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30">
<div class="text-xl mb-1">📋</div>
<div class="font-bold text-cyan-300 mb-1">Step 1: Identify</div>
<div class="text-gray-300 space-y-1">
<div>• Audit regulatory obligations</div>
<div>• Review security policies</div>
<div>• Document violation patterns</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30">
<div class="text-xl mb-1">🔄</div>
<div class="font-bold text-blue-300 mb-1">Step 2: Translate</div>
<div class="text-gray-300 space-y-1">
<div>• Policies → code patterns</div>
<div>• Requirements → AST queries</div>
<div>• Standards → regex matches</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30">
<div class="text-xl mb-1">⚖️</div>
<div class="font-bold text-indigo-300 mb-1">Step 3: Severity</div>
<div class="text-gray-300 space-y-1">
<div>• Critical → block merge</div>
<div>• High → acknowledge</div>
<div>• Medium → informational</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="text-xl mb-1">📚</div>
<div class="font-bold text-purple-300 mb-1">Step 4: Educate</div>
<div class="text-gray-300 space-y-1">
<div>• Explain why it matters</div>
<div>• Link to policy sections</div>
<div>• Provide code examples</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-pink-800/40 rounded-lg border border-pink-500/30">
<div class="text-xl mb-1">🔄</div>
<div class="font-bold text-pink-300 mb-1">Step 5: Iterate</div>
<div class="text-gray-300 space-y-1">
<div>• Start with medium severity</div>
<div>• Gather feedback</div>
<div>• Add rules quarterly</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 rounded-lg border border-emerald-500/30 text-center">
<div class="text-sm font-semibold text-emerald-300">Permanent audit trail in PR timeline: finding detection → developer response → resolution → merge approval</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — ROI Metrics -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">ROI Metrics</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Interactive calculator turns analytics into savings</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📊</div>
<div class="text-indigo-300 font-semibold">Interactive Calculator</div>
<div class="text-xs opacity-70 mt-1">PR analytics → executive summary</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">⚡</div>
<div class="text-purple-300 font-semibold">Live Example</div>
<div class="text-xs opacity-70 mt-1">15.0 days faster, 78.9% improvement</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">📈</div>
<div class="text-pink-300 font-semibold">Incremental Upside</div>
<div class="text-xs opacity-70 mt-1">Visible even at low adoption rates</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Guided customer conversation, not spreadsheet exercise</span><br />
<span class="text-indigo-300 mt-1 block">↳ real data in → assumptions in → executive summary out</span>
</div>
</div>
</div>

---

<!-- SLIDE: Interactive Calculator Workflow -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💰 ROI Metrics</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 5</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">📊 Interactive Time-Savings Calculator Workflow</div>
<div class="text-xs text-white/50">Guided app experience turns PR data into executive-ready summary</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-4 gap-2 text-xs mb-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30">
<div class="text-2xl mb-1">1️⃣</div>
<div class="font-bold text-cyan-300 mb-1">Input PR Data</div>
<div class="text-gray-300">From operational PR analytics source for specific month/quarter</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30">
<div class="text-2xl mb-1">2️⃣</div>
<div class="font-bold text-blue-300 mb-1">Define Parameters</div>
<div class="text-gray-300">Baseline review minutes, developer cost, work hours</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30">
<div class="text-2xl mb-1">3️⃣</div>
<div class="font-bold text-indigo-300 mb-1">Review Results</div>
<div class="text-gray-300">Cycle-time improvement, hours saved, cost savings</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="text-2xl mb-1">4️⃣</div>
<div class="font-bold text-purple-300 mb-1">Copy Summary</div>
<div class="text-gray-300">Reuse analysis in stakeholder follow-up</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30 mb-2">
<div class="font-bold text-indigo-300 mb-2">🔑 Key Distinction</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• <span class="text-cyan-400 font-semibold">PR cycle time:</span> days a PR stays open (valuable but not the labor cost)</div>
<div>• <span class="text-blue-400 font-semibold">Review effort:</span> minutes humans spend reviewing each PR (the actual labor savings)</div>
<div class="mt-1 text-indigo-300">→ Labor-savings model based on review effort makes claims more defensible to finance</div>
</div>
</div>

<div class="text-center text-xs text-gray-400 italic">
🔗 copilot-code-review--clee1211.github.app
</div>
</div>
</div>

---

<!-- SLIDE: Live Example — March 2026 Results -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💰 ROI Metrics</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 5</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">⚡ Live Example — March 2026 Calculator Results</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-2">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="font-bold text-red-300 mb-2 text-sm">⏱️ PR Cycle Time</div>
<div class="text-center">
<div class="text-3xl font-bold text-red-400">19.0 days</div>
<div class="text-xs text-gray-300 mt-1">without Copilot Code Review</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2 text-sm">⚡ PR Cycle Time</div>
<div class="text-center">
<div class="text-3xl font-bold text-emerald-400">4.0 days</div>
<div class="text-xs text-gray-300 mt-1">with Copilot Code Review</div>
</div>
</div>
</div>

<div class="grid grid-cols-3 gap-2 text-center text-xs mb-2">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-400 font-bold text-lg">15.0 days</div>
<div class="text-white/50 mt-0.5">Faster PR cycle</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-400 font-bold text-lg">78.9%</div>
<div class="text-white/50 mt-0.5">Improvement</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-400 font-bold text-lg">32,196</div>
<div class="text-white/50 mt-0.5">Total PRs</div>
</div>
</div>

<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1">Current Realized</div>
<div class="text-gray-300 space-y-1">
<div>15.3% CCR adoption</div>
<div>1,229 hours saved</div>
<div class="text-emerald-400 font-bold">$88,594 monthly savings</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-bold text-pink-300 mb-1">Incremental Upside</div>
<div class="text-gray-300 space-y-1">
<div>If expanded to all PRs</div>
<div>6,821 additional hours</div>
<div class="text-cyan-400 font-bold">$491,863 potential monthly</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What Changes with the Calculator -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💰 ROI Metrics</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 5</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">🔄 What Changes When You Use the Calculator</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="font-bold text-red-300 mb-2 text-sm">❌ Old ROI Path</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="p-1.5 bg-red-900/20 rounded">Manual spreadsheet ROI math</div>
<div class="p-1.5 bg-red-900/20 rounded">Walk audience through formulas and SQL</div>
<div class="p-1.5 bg-red-900/20 rounded">Hand-built executive summary</div>
<div class="p-1.5 bg-red-900/20 rounded">Time-consuming, error-prone</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2 text-sm">✅ New Calculator-Led Path</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="p-1.5 bg-emerald-900/20 rounded">Real PR analytics go in</div>
<div class="p-1.5 bg-emerald-900/20 rounded">Customer-specific assumptions go in</div>
<div class="p-1.5 bg-emerald-900/20 rounded">Cycle-time &amp; labor-savings come out</div>
<div class="p-1.5 bg-emerald-900/20 rounded">Executive summary auto-generated</div>
</div>
</div>
</div>

<div class="space-y-2 text-xs">
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">YAML Files (copilot-review.yml, compliance rules)</div>
<div class="text-gray-300">Configure review behavior and encode policy — not the ROI mechanism</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">SQL &amp; GitHub Actions (optional)</div>
<div class="text-gray-300">Advanced: recurring internal reporting, warehouse validation, or persistent dashboards</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Quality Metrics Beyond Time Savings -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💰 ROI Metrics</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 5</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">📈 Quality Metrics Beyond Time Savings</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-2xl mb-1">🐛</div>
<div class="font-bold text-cyan-300 mb-1">Production Incidents</div>
<div class="text-gray-300 space-y-1">
<div>Baseline: 12 incidents/month</div>
<div>With Copilot: 2 incidents/month</div>
<div class="text-emerald-400 font-semibold">83% reduction</div>
<div class="text-xs text-cyan-400 mt-1">$12,000/month cost avoidance</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-2xl mb-1">↩️</div>
<div class="font-bold text-blue-300 mb-1">Revert Rate</div>
<div class="text-gray-300 space-y-1">
<div>Baseline: 8% of PRs reverted</div>
<div>With Copilot: 3% of PRs reverted</div>
<div class="text-emerald-400 font-semibold">62% improvement</div>
<div class="text-xs text-blue-400 mt-1">$2,250/month avoided rework</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="font-bold text-indigo-300 mb-1">Security Vulnerabilities</div>
<div class="text-gray-300 space-y-1">
<div>Baseline: 8 vulnerabilities/quarter</div>
<div>With Copilot: &lt;1 vulnerability/quarter</div>
<div class="text-emerald-400 font-semibold">90%+ reduction</div>
<div class="text-xs text-indigo-400 mt-1">Prevented data breach, fines, brand damage</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="text-2xl mb-1">🚀</div>
<div class="font-bold text-purple-300 mb-1">Faster Onboarding</div>
<div class="text-gray-300 space-y-1">
<div>Baseline: 6-8 weeks to productivity</div>
<div>With Copilot: 3-4 weeks</div>
<div class="text-emerald-400 font-semibold">50% faster</div>
<div class="text-xs text-purple-400 mt-1">$16,000 savings per new hire</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Executive Summary Output Shape -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💰 ROI Metrics</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">5 of 5</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">📋 Executive Summary Output Shape</div>
<div class="text-xs text-white/50">Turns disconnected metrics into a reusable message for revenue, engineering leadership, and platform teams</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-3 text-sm">Executive Summary Template</div>
<div class="space-y-2 text-xs text-gray-300">
<div class="p-2 bg-indigo-900/30 rounded border-l-2 border-cyan-400">
<div class="font-semibold text-cyan-300">Cycle-Time Improvement</div>
<div>PRs using Copilot Code Review complete 15 days faster (78.9% improvement)</div>
</div>
<div class="p-2 bg-indigo-900/30 rounded border-l-2 border-blue-400">
<div class="font-semibold text-blue-300">Current Adoption Rate</div>
<div>15.3% of 32,196 total PRs using CCR — 4,925 PRs benefiting</div>
</div>
<div class="p-2 bg-indigo-900/30 rounded border-l-2 border-emerald-400">
<div class="font-semibold text-emerald-300">Current Realized Savings</div>
<div>1,229 hours saved this month = $88,594 at fully-loaded developer cost</div>
</div>
<div class="p-2 bg-indigo-900/30 rounded border-l-2 border-purple-400">
<div class="font-semibold text-purple-300">Remaining Upside</div>
<div>If adoption expands to all PRs: +6,821 hours = $491,863 incremental monthly opportunity</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-emerald-500/15 to-indigo-500/15 rounded-lg border border-emerald-500/30 text-center">
<div class="text-xs font-semibold text-emerald-300">Copy this structure even if you never use the app directly — it turns analytics into a message stakeholders can reuse</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Team Adoption -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Team Adoption</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Phased rollout and change management</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🧪</div>
<div class="text-purple-300 font-semibold">Pilot → Tune</div>
<div class="text-xs opacity-70 mt-1">1-2 repos, gather feedback, iterate</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">📈</div>
<div class="text-pink-300 font-semibold">Expand → Standardize</div>
<div class="text-xs opacity-70 mt-1">50% repos → org-wide with proven ROI</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-rose-300 font-semibold">Balance Automation</div>
<div class="text-xs opacity-70 mt-1">AI handles mechanical, humans handle strategic</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Technology doesn't create value — people using it well do</span><br />
<span class="text-purple-300 mt-1 block">↳ thoughtful change management = 60% less time on mechanical review</span>
</div>
</div>
</div>

---

<!-- SLIDE: Phased Rollout Strategy -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Team Adoption</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">🧪 Phased Rollout Strategy (12 weeks)</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-4 gap-2 text-xs">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">Phase 1: Pilot (Week 1-2)</div>
<div class="text-gray-300 space-y-1">
<div>• 1-2 low-risk repos</div>
<div>• Medium severity, not required</div>
<div>• Daily feedback via Slack</div>
<div>• Document surprises</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2">Phase 2: Tune (Week 3-4)</div>
<div class="text-gray-300 space-y-1">
<div>• Adjust file patterns</div>
<div>• Add 2-3 custom rules</div>
<div>• Train on @-mentions</div>
<div>• Measure baseline ROI</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2">Phase 3: Expand (Week 5-8)</div>
<div class="text-gray-300 space-y-1">
<div>• Roll out to 50% repos</div>
<div>• Convert to required check</div>
<div>• Create internal docs</div>
<div>• Host Lunch &amp; Learn</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2">Phase 4: Standardize (Week 9-12)</div>
<div class="text-gray-300 space-y-1">
<div>• Org-wide deployment</div>
<div>• Integrate into quarterly reviews</div>
<div>• Monthly effectiveness review</div>
<div>• Celebrate wins with data</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-emerald-500/15 to-purple-500/15 rounded-lg border border-emerald-500/30 text-center">
<div class="text-xs font-semibold text-emerald-300">Builds confidence, reduces resistance, allows iteration before locking in org-wide standards</div>
</div>
</div>
</div>

---

<!-- SLIDE: Balancing Automation and Human Review -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Team Adoption</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">⚖️ Balancing Automation and Human Review</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-2">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2 text-sm">✅ Copilot Handles</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="p-1 bg-cyan-900/20 rounded">Security vulnerability patterns (SQL injection, XSS)</div>
<div class="p-1 bg-cyan-900/20 rounded">Code quality standards (complexity, duplication)</div>
<div class="p-1 bg-cyan-900/20 rounded">Performance anti-patterns (N+1 queries)</div>
<div class="p-1 bg-cyan-900/20 rounded">Compliance rule enforcement</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-sm">👤 Humans Handle</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="p-1 bg-purple-900/20 rounded">Business logic correctness</div>
<div class="p-1 bg-purple-900/20 rounded">Architectural decisions</div>
<div class="p-1 bg-purple-900/20 rounded">Product tradeoffs</div>
<div class="p-1 bg-purple-900/20 rounded">Strategic technical direction</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 text-sm">🔄 Effective Workflow</div>
<div class="space-y-1 text-xs text-gray-300">
<div>1️⃣ Copilot reviews PR automatically within 2 minutes of creation</div>
<div>2️⃣ Developer addresses Copilot findings (critical and high severity)</div>
<div>3️⃣ Developer requests human review once Copilot shows ✅ no critical issues</div>
<div>4️⃣ Human reviewer focuses on business logic, architecture, UX</div>
<div>5️⃣ PR merges faster with higher quality than either approach alone</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-emerald-500/15 to-purple-500/15 rounded-lg border border-emerald-500/30 text-center">
<div class="text-xs font-semibold text-emerald-300">Division of labor = 60% less senior dev time on mechanical review → redirected to strategic leadership and feature development</div>
</div>
</div>
</div>

---

<!-- SLIDE: Managing Alert Fatigue -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Team Adoption</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-white/20"></div>
  <div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">🔕 Managing Alert Fatigue</div>
<div class="text-xs text-white/50">Common pitfall: developers ignore feedback if they see too many low-value findings</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-5 gap-2 text-xs">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30">
<div class="text-xl mb-1">1️⃣</div>
<div class="font-bold text-cyan-300 mb-1">Tune Severity</div>
<div class="text-gray-300">Start with 'medium' to avoid noise. Lower to 'low' only for learning.</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30">
<div class="text-xl mb-1">2️⃣</div>
<div class="font-bold text-blue-300 mb-1">Refine Patterns</div>
<div class="text-gray-300">Exclude tests, generated code, docs. Focus on production.</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30">
<div class="text-xl mb-1">3️⃣</div>
<div class="font-bold text-indigo-300 mb-1">Customize Rules</div>
<div class="text-gray-300">Disable generic rules. Add org-specific standards. Review quarterly.</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="text-xl mb-1">4️⃣</div>
<div class="font-bold text-purple-300 mb-1">Set Expectations</div>
<div class="text-gray-300">Critical = must fix. High = acknowledge. Medium/low = informational.</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-pink-800/40 rounded-lg border border-pink-500/30">
<div class="text-xl mb-1">5️⃣</div>
<div class="font-bold text-pink-300 mb-1">Celebrate Wins</div>
<div class="text-gray-300">Post when Copilot catches bugs. Share monthly metrics in team chat.</div>
</div>
</div>

<div class="mt-2 p-3 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-xl border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2 text-sm">🔄 Quarterly Continuous Improvement</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Q1: What's the ROI ratio? Which rules find critical issues? Which have high false positives?</div>
<div>• Q1 Actions: Disable low-value rules, add 2-3 new custom rules from incident post-mortems</div>
<div>• Q2: How has PR cycle time trended? Reduction in production incidents? Developer satisfaction?</div>
<div>• Q2 Actions: Expand to more repos if ROI is strong, present data to leadership for budget planning</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Mental Model Shift -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 Mental Model Shift</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-6 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30 max-w-4xl mx-auto mb-4">
<div class="text-2xl font-bold text-indigo-300 mb-2 text-center">The Core Insight</div>
<div class="text-lg text-gray-200 text-center italic">
From "code review as a manual quality gate that blocks velocity" to "code review as automated continuous feedback that accelerates quality and speed together"
</div>
</div>

<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2">✅ Move Toward</div>
<div class="text-gray-300 space-y-1">
<div>• Immediate feedback over delayed review (minutes not days)</div>
<div>• Consistent enforcement over variable quality (90%+ reduction)</div>
<div>• Educational review over gatekeeping (50% faster onboarding)</div>
<div>• Measurable ROI over qualitative value (5-10x typical ratio)</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="font-bold text-red-300 mb-2">⚠️ Move Away From</div>
<div class="text-gray-300 space-y-1">
<div>• Manual-only review for all code (30% time on reviews)</div>
<div>• Approval rush under deadline pressure (8 critical issues/quarter)</div>
<div>• Inconsistent standards across teams (45 inconsistencies/week)</div>
<div>• Learning through production incidents (45 min MTTR)</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3 text-xs">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2">⚡ Immediate (15 min)</div>
<div class="text-gray-300 space-y-1">
<div>• Enable Copilot Code Review on pilot repo</div>
<div>• Create basic .github/copilot-review.yml</div>
<div>• Submit test PR, observe automated review</div>
<div>• Review official documentation</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2">📋 Short-Term (1 hour)</div>
<div class="text-gray-300 space-y-1">
<div>• Configure file pattern filtering</div>
<div>• Set up required status check integration</div>
<div>• Train team on @github-copilot mentions</div>
<div>• Establish baseline metrics</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2">🚀 Advanced (Half day)</div>
<div class="text-gray-300 space-y-1">
<div>• Build custom compliance ruleset</div>
<div>• Implement GitHub Actions workflow</div>
<div>• Run ROI workshop with calculator</div>
<div>• Deploy org-wide configuration</div>
</div>
</div>
</div>

<div class="mt-2 p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-sm">📖 Next Steps After Completion</div>
<div class="text-xs text-gray-300 space-y-1">
<div>1. ✅ Complete immediate and short-term actions (get first review running today)</div>
<div>2. 📊 Monitor metrics for 30 days to establish ROI baseline</div>
<div>3. 📖 Review related talk: GitHub Copilot Workspace (end-to-end development workflow)</div>
<div>4. 💬 Share learnings in team retrospective, iterate on configuration</div>
<div>5. 🚀 Expand to additional repositories based on proven ROI (typical 5-10x)</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 References</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="space-y-2">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-1">Official Documentation</div>
<div class="text-gray-300 space-y-1">
<div>• GitHub Copilot Code Review - Concepts</div>
<div>• Configure Automatic Code Review</div>
<div>• Using Copilot Code Review</div>
<div>• GitHub Copilot Enterprise Documentation</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1">Blog Posts &amp; Announcements</div>
<div class="text-gray-300 space-y-1">
<div>• GitHub Blog: Copilot Code Review Launch (43% time reduction)</div>
<div>• Microsoft DevBlogs: AI-Powered Best Practices</div>
<div>• GitHub Engineering: Building the Agent (hybrid static+LLM)</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-1">Industry Research</div>
<div class="text-gray-300 space-y-1">
<div>• Stack Overflow Developer Survey 2024 (68% cite review bottleneck)</div>
<div>• InfoQ: Measuring Developer Productivity (DORA metrics)</div>
<div>• Gartner: AI-Augmented Software Engineering (75% by 2027)</div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1">Security &amp; Compliance</div>
<div class="text-gray-300 space-y-1">
<div>• OWASP Top 10 2024 (SQL injection, XSS detection)</div>
<div>• GitHub Security Lab: AI in Application Security</div>
<div>• 73% false positive reduction, 84% vulnerability detection improvement</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-bold text-pink-300 mb-1">Community Resources</div>
<div class="text-gray-300 space-y-1">
<div>• GitHub Community: Copilot Review Patterns</div>
<div>• GitHub Actions Marketplace: Copilot Extensions</div>
<div>• Martin Fowler: Continuous Code Review</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-rose-900/30 to-rose-800/20 rounded-lg border border-rose-500/30">
<div class="font-bold text-rose-300 mb-1">Interactive Tools</div>
<div class="text-gray-300">
<div>• GitHub Copilot Code Review Time Savings Calculator</div>
<div class="text-xs text-rose-400 mt-1">copilot-code-review--clee1211.github.app</div>
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
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">Copilot Code Review: Accelerating PR Velocity &amp; Maximizing ROI</span>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-400 font-bold text-lg">40-60%</div>
<div class="opacity-80 text-xs">PR review time reduction</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-400 font-bold text-lg">90%+</div>
<div class="opacity-80 text-xs">security violations prevented</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-400 font-bold text-lg">5-10x</div>
<div class="opacity-80 text-xs">typical ROI ratio</div>
</div>
</div>
<div class="mt-6 text-sm opacity-60 relative z-10">Questions? Let's discuss how to reduce your PR cycle time from days to hours</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
