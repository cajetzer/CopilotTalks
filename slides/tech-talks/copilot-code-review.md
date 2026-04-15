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
section: Copilot Tools
status: active
updated: 2026-04-10
---

<script setup>
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
import CoreQuestionSlide from './components/CoreQuestionSlide.vue'
import TocSlide from './components/TocSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="GitHub Copilot Code Review"
subtitle="From Bottleneck to Accelerator"
tagline="Reduce PR review time while maintaining code quality and compliance"
meta="Tech Talk · 35-40 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How can Copilot Code Review reduce PR review time while improving quality?"
subtext="Every team struggles with the same tradeoff — faster reviews or better quality."
highlight="AI review breaks this tradeoff — catching systematic issues humans often miss."
:cards='[
  { icon: "👥", title: "Teams with PR Review Backlogs", description: "Cut 3-4 day wait times with automated first-pass review on every pull request" },
  { icon: "🔐", title: "Security-Conscious Organizations", description: "Systematic vulnerability checks on every PR — OWASP-style, automatically" },
  { icon: "🎓", title: "Orgs Onboarding New Developers", description: "Standards enforcement that teaches conventions while reviewing code in context" },
  { title: "Capacity Bottleneck", description: "3-4 day wait times slow delivery — AI handles the first-pass review instantly" },
  { title: "Quality Gaps", description: "40-60% of issues missed in manual review — AI catches systematic defects" },
  { title: "Onboarding Friction", description: "6-8 weeks to learn standards — AI enforces them automatically from day one" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "⚙️", title: "Setup & Configuration", subtitle: "From enablement to first review in 15 minutes", blurb: "Rulesets UI + custom instruction files", slide: 4 },
    { icon: "💬", title: "Understanding Review Feedback", subtitle: "Six capability categories with examples", blurb: "Security, quality, tests, performance, compliance, architecture", slide: 9 },
    { icon: "📊", title: "Measuring ROI", subtitle: "Calculator + optional automation", blurb: "40-60% cycle time reduction, 90%+ security improvement", slide: 12 },
    { icon: "🏛️", title: "Enterprise Compliance", subtitle: "HIPAA, PCI-DSS, SOC2 guidance patterns", blurb: "Custom instruction files for regulatory standards", slide: 16 },
  ]'
/>
---

<!-- SLIDE: Part 1 — Setup & Configuration -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Setup & Configuration</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">From enablement to first review in 15 minutes</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">⚙️</div>
<div class="text-cyan-300 font-semibold">Rulesets UI</div>
<div class="text-xs opacity-70 mt-1">No YAML config files needed</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">📝</div>
<div class="text-blue-300 font-semibold">Custom Instructions</div>
<div class="text-xs opacity-70 mt-1">Markdown files with team standards</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🎯</div>
<div class="text-indigo-300 font-semibold">Language-Specific</div>
<div class="text-xs opacity-70 mt-1">Target rules by file pattern</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Basic Setup — 5 Minutes to First Review -->
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
<div class="text-lg font-bold text-white mb-0.5">Basic Setup — 5 Minutes to First Review</div>
<div class="text-xs text-white/50">Enable automatic reviews through GitHub Rulesets UI</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-3 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Step 1: Navigate to Rulesets</div>
<div class="text-xs opacity-80">Settings → Code and automation → Rules → Rulesets</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Step 2: Create New Ruleset</div>
<div class="text-xs opacity-80">Name it (e.g., "Copilot Code Review"), set status to "Active"</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Step 3: Target Branches</div>
<div class="text-xs opacity-80">Select branches where you want reviews (e.g., main)</div>
</div>
</div>

<div class="space-y-3 text-sm">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">Step 4: Enable Enforcement</div>
<div class="text-xs opacity-80 space-y-1">
<div>✅ Automatically request Copilot code review</div>
<div>✅ Review new pushes</div>
<div>✅ Review draft pull requests (optional)</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">Step 5: Create and Done!</div>
<div class="text-xs opacity-80">Copilot now reviews all PRs targeting selected branches automatically</div>
</div>
<div class="mt-3 p-2 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30">
<div class="text-xs text-green-300">⚡ That's it! No YAML config files, no complex setup</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Custom Guidance with Instruction Files -->
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
<div class="text-lg font-bold text-white mb-0.5">Custom Guidance with Instruction Files</div>
<div class="text-xs text-white/50">Tailor Copilot's review behavior to your team's standards</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="grid grid-cols-2 gap-4 mb-3 flex-1 min-h-0 max-h-[380px]">
<div class="flex flex-col">
<div class="font-mono text-xs bg-gray-950/80 border border-cyan-700/50 rounded-lg px-3 py-2 flex-1 min-h-0 overflow-y-auto">
<div class="text-cyan-400 mb-1"># .github/copilot-instructions.md</div>
<div class="text-gray-300 text-xs space-y-1">
<div>## Security Standards</div>
<div class="pl-2 opacity-80">- Flag hardcoded secrets, API keys</div>
<div class="pl-2 opacity-80">- Require parameterized queries</div>
<div class="pl-2 opacity-80">- Check input validation</div>
<div class="pl-2 opacity-80">- No sensitive data in error messages</div>
<div class="mt-2">## Code Quality</div>
<div class="pl-2 opacity-80">- Refactor functions > 50 lines</div>
<div class="pl-2 opacity-80">- Flag unclear variable names</div>
<div class="pl-2 opacity-80">- Require error handling</div>
<div class="mt-2">## Performance</div>
<div class="pl-2 opacity-80">- Identify N+1 query problems</div>
<div class="pl-2 opacity-80">- Suggest caching opportunities</div>
</div>
</div>
</div>
<div class="flex flex-col">
<div class="font-mono text-xs bg-gray-950/80 border border-blue-700/50 rounded-lg px-3 py-2 flex-1 min-h-0 overflow-y-auto">
<div class="text-blue-400 mb-1"># .github/instructions/python.instructions.md</div>
<div class="text-gray-300 text-xs space-y-1">
<div class="text-yellow-400">---</div>
<div>applyTo: "**/*.py"</div>
<div class="text-yellow-400">---</div>
<div class="mt-1">## Python-Specific Guidelines</div>
<div class="pl-2 opacity-80">- Enforce PEP 8 naming</div>
<div class="pl-2 opacity-80">- Require type hints</div>
<div class="pl-2 opacity-80">- Flag bare except: clauses</div>
<div class="pl-2 opacity-80">- Use logging module, not print()</div>
<div class="pl-2 opacity-80">- Validate async/await patterns</div>
</div>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300">Repository-level</div>
<div class="opacity-80">Start with 1-2 pilot repos, refine based on feedback</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300">Organization-level</div>
<div class="opacity-80">Standardize after pilot, each repo can add language-specific guidance</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Branch Protection Integration -->
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
<div class="text-lg font-bold text-white mb-0.5">Branch Protection Integration</div>
<div class="text-xs text-white/50">Make Copilot Review a required status check to block merges on critical issues</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-3 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-xs text-cyan-400 mb-1">STEP 1</div>
<div class="font-semibold text-white mb-1">Navigate to Branch Protection</div>
<div class="text-xs opacity-80">Settings → Branches → Edit your main branch protection rule</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-xs text-cyan-400 mb-1">STEP 2</div>
<div class="font-semibold text-white mb-1">Enable Status Checks</div>
<div class="text-xs opacity-80">Check "Require status checks to pass before merging"</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-xs text-cyan-400 mb-1">STEP 3</div>
<div class="font-semibold text-white mb-1">Add Copilot Check</div>
<div class="text-xs opacity-80">Search for and select "Copilot Code Review" in the required checks list</div>
</div>
</div>

<div class="space-y-3 text-sm">
<div class="p-4 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-2">Result: Enforcement Gate</div>
<div class="text-xs opacity-80 space-y-1.5">
<div>🔒 Developers must address critical findings before merging</div>
<div>✅ No human vigilance required—automated enforcement</div>
<div>📊 Audit trail automatically created in PR timeline</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">Manual Review Requests</div>
<div class="text-xs opacity-80 mb-2">Request focused analysis anytime:</div>
<div class="font-mono text-xs bg-gray-950/80 px-2 py-1 rounded">@github-copilot review for security vulnerabilities</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Deployment Patterns -->
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
<div class="text-lg font-bold text-white mb-0.5">Phased Rollout Strategy</div>
<div class="text-xs text-white/50">Build confidence through pilot → tune → expand → standardize</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-2.5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Phase 1: Pilot (Week 1-2)</div>
<div class="opacity-80 space-y-0.5">
<div>• Enable on 1-2 low-risk repositories</div>
<div>• Start informational (not blocking merges)</div>
<div>• Gather daily feedback via Slack/standup</div>
<div>• Document common questions</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Phase 2: Tune (Week 3-4)</div>
<div class="opacity-80 space-y-0.5">
<div>• Review feedback, adjust focus areas</div>
<div>• Create custom instruction files</div>
<div>• Train pilot team on @mentions</div>
<div>• Measure baseline ROI metrics</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">Phase 3: Expand (Week 5-8)</div>
<div class="opacity-80 space-y-0.5">
<div>• Roll out to 50% of repositories</div>
<div>• Convert to required status check</div>
<div>• Create internal documentation</div>
<div>• Host "Lunch & Learn" session</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">Phase 4: Standardize (Week 9-12)</div>
<div class="opacity-80 space-y-0.5">
<div>• Deploy organization-wide</div>
<div>• Integrate metrics into reviews</div>
<div>• Establish feedback loop (monthly)</div>
<div>• Celebrate wins, share data</div>
</div>
</div>
</div>
<div class="mt-3 p-2.5 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30">
<div class="text-xs text-green-300 font-semibold">✅ Best Practice: This phased approach builds confidence and allows iteration before locking in standards</div>
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
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Six capability categories with examples</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-blue-300 font-semibold">Security</div>
<div class="text-xs opacity-70 mt-1">Vulnerabilities & patterns</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">✨</div>
<div class="text-indigo-300 font-semibold">Quality & Performance</div>
<div class="text-xs opacity-70 mt-1">Complexity & optimization</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🧪</div>
<div class="text-purple-300 font-semibold">Tests & Architecture</div>
<div class="text-xs opacity-70 mt-1">Coverage & consistency</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Six Capability Categories -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Understanding Review Feedback</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">What Copilot Code Review Detects</div>
<div class="text-xs text-white/50">Six capability categories covering the full review spectrum</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">🔒 Security Detection</div>
<div class="opacity-80 space-y-0.5">
<div>• SQL injection & XSS vulnerabilities</div>
<div>• Hardcoded secrets & API keys</div>
<div>• Insecure dependencies & auth flaws</div>
<div>• Immediate remediation code provided</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">✨ Code Quality Analysis</div>
<div class="opacity-80 space-y-0.5">
<div>• Complexity issues & naming problems</div>
<div>• Code duplication detection</div>
<div>• Maintainability concerns</div>
<div>• Refactoring suggestions</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">🧪 Test Coverage Assessment</div>
<div class="opacity-80 space-y-0.5">
<div>• Missing tests for new functions</div>
<div>• Edge cases to test</div>
<div>• Weak assertions identified</div>
<div>• Improves code confidence</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">⚡ Performance Optimization</div>
<div class="opacity-80 space-y-0.5">
<div>• Inefficient algorithms spotted</div>
<div>• N+1 query problems</div>
<div>• Memory leaks & scalability issues</div>
<div>• Catch issues before production</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">🏛️ Compliance Enforcement</div>
<div class="opacity-80 space-y-0.5">
<div>• Custom organizational rulesets</div>
<div>• GDPR, HIPAA, SOC2 checks</div>
<div>• Automated audit trails</div>
<div>• Regulatory requirement alignment</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">🏗️ Architecture Consistency</div>
<div class="opacity-80 space-y-0.5">
<div>• Ensures code aligns with patterns</div>
<div>• Prevents fragmentation</div>
<div>• Reduces technical debt</div>
<div>• Cross-repository pattern analysis</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Hybrid Analysis Approach -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Understanding Review Feedback</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">The Hybrid Analysis Approach</div>
<div class="text-xs text-white/50">Combining static analysis + AST parsing + LLM contextual analysis</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="flex items-center gap-4 mb-3">
<div class="flex-1 p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-xs text-blue-400 mb-1">LAYER 1: &lt; 1 second</div>
<div class="font-semibold text-white mb-1.5 text-sm">Fast Static Analysis</div>
<div class="text-xs opacity-80 space-y-0.5">
<div>• Pattern matching & linting</div>
<div>• Catches 60% of issues deterministically</div>
<div>• No LLM cost</div>
<div>• Example: function complexity > 15</div>
</div>
</div>
<div class="text-2xl text-gray-500">→</div>
<div class="flex-1 p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-xs text-indigo-400 mb-1">LAYER 2: 1-5 seconds</div>
<div class="font-semibold text-white mb-1.5 text-sm">AST Semantic Parsing</div>
<div class="text-xs opacity-80 space-y-0.5">
<div>• Understands code structure</div>
<div>• Variable scope, call graphs, data flow</div>
<div>• Detects logical errors</div>
<div>• Example: unreachable code after return</div>
</div>
</div>
<div class="text-2xl text-gray-500">→</div>
<div class="flex-1 p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-xs text-purple-400 mb-1">LAYER 3: 10-30 seconds</div>
<div class="font-semibold text-white mb-1.5 text-sm">LLM Contextual Analysis</div>
<div class="text-xs opacity-80 space-y-0.5">
<div>• Full repository context</div>
<div>• Semantic correctness</div>
<div>• Architectural consistency</div>
<div>• Educational feedback with "why"</div>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-2.5 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30">
<div class="font-semibold text-green-300 mb-1">✅ Benefit: Best of Both Worlds</div>
<div class="opacity-80 space-y-0.5">
<div>• Deterministic accuracy for known patterns (zero false positives on syntax)</div>
<div>• Contextual understanding for semantic issues</div>
<div>• 73% reduction in false positives vs. traditional static analysis</div>
<div>• 84% improvement in vulnerability detection coverage</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">⚡ Speed & Efficiency</div>
<div class="opacity-80 space-y-0.5">
<div>• Most PRs reviewed in under 2 minutes</div>
<div>• Fast static layer handles simple issues without AI cost</div>
<div>• LLM only invoked for contextual analysis</div>
<div>• Developers get immediate feedback without waiting</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Balancing Automation and Human Review -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💬 Understanding Review Feedback</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Balancing Automation and Human Review</div>
<div class="text-xs text-white/50">Strategic division of labor between AI and human expertise</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-3">
<div class="space-y-2 text-xs">
<div class="font-semibold text-green-300 mb-1">✅ Copilot Handles:</div>
<div class="p-2 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30">
<div class="opacity-80 space-y-0.5">
<div>• Security vulnerability pattern matching</div>
<div>• Code quality standards enforcement</div>
<div>• Performance anti-patterns detection</div>
<div>• Compliance rule enforcement</div>
<div>• Test coverage gap identification</div>
<div>• Consistency with existing patterns</div>
</div>
</div>
</div>
<div class="space-y-2 text-xs">
<div class="font-semibold text-blue-300 mb-1">👤 Humans Handle:</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="opacity-80 space-y-0.5">
<div>• Business logic correctness</div>
<div>• Architectural decisions</div>
<div>• Product tradeoffs</div>
<div>• Domain-specific expertise</div>
<div>• UX implications</div>
<div>• Strategic technical direction</div>
</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1.5 text-sm">Effective Workflow</div>
<div class="text-xs opacity-80 space-y-1">
<div><span class="text-cyan-400">1.</span> Copilot reviews PR automatically within 2 minutes</div>
<div><span class="text-cyan-400">2.</span> Developer addresses Copilot findings (critical and high severity)</div>
<div><span class="text-cyan-400">3.</span> Developer requests human review once Copilot shows ✅ no critical issues</div>
<div><span class="text-cyan-400">4.</span> Human reviewer focuses on business logic, architecture, UX</div>
<div><span class="text-cyan-400">5.</span> PR merges faster with higher quality than either approach alone</div>
</div>
</div>
<div class="mt-2 p-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-xs text-purple-300">💡 Senior developers spend 60% less time on mechanical review, redirecting time to strategic leadership</div>
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
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Calculator + optional automation</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">⏱️</div>
<div class="text-indigo-300 font-semibold">Time Savings</div>
<div class="text-xs opacity-70 mt-1">40-60% cycle time reduction</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔒</div>
<div class="text-purple-300 font-semibold">Quality Improvement</div>
<div class="text-xs opacity-70 mt-1">90%+ security violations reduced</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">📊</div>
<div class="text-pink-300 font-semibold">Interactive Calculator</div>
<div class="text-xs opacity-70 mt-1">Executive-ready summaries</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Interactive Time-Savings Calculator -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Measuring ROI</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">The Interactive Time-Savings Calculator</div>
<div class="text-xs text-white/50">Turn PR analytics and customer assumptions into executive-ready savings summaries</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-3">
<div class="space-y-2 text-xs">
<div class="font-semibold text-indigo-300 mb-1">Workflow</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="opacity-80 space-y-1">
<div><span class="text-indigo-400">1.</span> Input customer PR data from operational analytics</div>
<div><span class="text-indigo-400">2.</span> Define model parameters (review minutes, developer cost)</div>
<div><span class="text-indigo-400">3.</span> Review generated results for cycle-time improvement</div>
<div><span class="text-indigo-400">4.</span> Copy executive summary for stakeholder follow-up</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">What It Captures</div>
<div class="opacity-80 space-y-0.5">
<div>• PR cycle time with/without Copilot</div>
<div>• Review effort (minutes per PR)</div>
<div>• Current adoption rate</div>
<div>• Hours saved & cost savings</div>
<div>• Incremental upside if adoption expands</div>
</div>
</div>
</div>
<div class="space-y-2 text-xs">
<div class="p-2.5 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-lg border border-emerald-500/30">
<div class="font-semibold text-emerald-300 mb-1">Example: March 2026 Results</div>
<div class="opacity-80 space-y-0.5">
<div>• <span class="text-emerald-400">19.0 days</span> without CCR → <span class="text-emerald-400">4.0 days</span> with CCR</div>
<div>• <span class="text-emerald-400">15.0 days faster</span>, <span class="text-emerald-400">78.9%</span> improvement</div>
<div>• <span class="text-emerald-400">32,196 total PRs</span> with <span class="text-emerald-400">15.3%</span> adoption</div>
<div>• <span class="text-emerald-400">1,229 current hours saved</span></div>
<div>• <span class="text-emerald-400">$88,594 current savings</span></div>
<div>• <span class="text-emerald-400">$491,863 incremental upside</span> at full adoption</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Key Distinction</div>
<div class="opacity-80">The calculator separates <span class="text-cyan-400">PR cycle time</span> (days PR stays open) from <span class="text-cyan-400">review effort</span> (minutes humans spend). Labor-savings model is based on review effort, not just open duration.</div>
</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-xs text-purple-300">🔗 Calculator: https://copilot-code-review--clee1211.github.app/</div>
</div>
</div>
</div>

---

<!-- SLIDE: Quality Metrics — Beyond Time Savings -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Measuring ROI</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Quality Metrics — Beyond Time Savings</div>
<div class="text-xs text-white/50">Measurable improvements in production incidents, revert rate, security, and onboarding</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-2.5 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">1. Production Incidents Reduction</div>
<div class="opacity-80 space-y-0.5">
<div>• Baseline: <span class="text-red-400">12 incidents/month</span> from code quality issues</div>
<div>• With Copilot: <span class="text-green-400">2 incidents/month</span> (83% reduction)</div>
<div>• Cost avoidance: <span class="text-green-400">$12,000/month</span></div>
<div class="text-gray-400 text-xs mt-1">(10 incidents × 8 hours × $150/hr)</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-orange-900/30 to-amber-900/30 rounded-lg border border-orange-500/30">
<div class="font-semibold text-orange-300 mb-1">2. Revert Rate Decrease</div>
<div class="opacity-80 space-y-0.5">
<div>• Baseline revert rate: <span class="text-orange-400">8%</span> of PRs</div>
<div>• With Copilot: <span class="text-green-400">3%</span> of PRs (62% improvement)</div>
<div>• Avoided rework: <span class="text-green-400">$2,250/month</span></div>
<div class="text-gray-400 text-xs mt-1">(5% × 100 PRs × 3 hours × $150/hr)</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">3. Security Vulnerability Reduction</div>
<div class="opacity-80 space-y-0.5">
<div>• Baseline: <span class="text-purple-400">8 vulnerabilities/quarter</span></div>
<div>• With Copilot: <span class="text-green-400">&lt;1 vulnerability/quarter</span> (90%+ reduction)</div>
<div>• Risk avoidance: Prevented data breach, compliance fines, brand damage</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">4. Faster Onboarding</div>
<div class="opacity-80 space-y-0.5">
<div>• Baseline: <span class="text-indigo-400">6-8 weeks</span> to first productive PR</div>
<div>• With Copilot: <span class="text-green-400">3-4 weeks</span> (50% faster)</div>
<div>• Savings per hire: <span class="text-green-400">$16,000</span></div>
<div class="text-gray-400 text-xs mt-1">(4 weeks × 40 hours × $100/hr)</div>
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
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Measuring ROI</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Optional Reporting Automation</div>
<div class="text-xs text-white/50">When you need recurring internal reporting beyond the live calculator</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="grid grid-cols-2 gap-3 text-xs mb-3 flex-1 min-h-0 max-h-[300px]">
<div class="flex flex-col">
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30 mb-2">
<div class="font-semibold text-indigo-300 mb-1">Use Cases for Automation</div>
<div class="opacity-80 space-y-0.5">
<div>• Monthly internal dashboards for platform teams</div>
<div>• Warehouse validation when finance wants independent verification</div>
<div>• Trend reporting for adoption, revert rate, findings volume</div>
<div>• Persistent tracking over time without opening the app</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Recommended Approach</div>
<div class="opacity-80">App is best for <span class="text-cyan-400">live value conversations</span>. SQL and workflow automation best for <span class="text-cyan-400">repeatable internal reporting</span>.</div>
</div>
</div>
<div class="flex flex-col">
<div class="font-mono text-xs bg-gray-950/80 border border-purple-700/50 rounded-lg px-3 py-2 flex-1 min-h-0 overflow-y-auto">
<div class="text-purple-400 mb-1"># GitHub Actions: Track Review Metrics</div>
<div class="text-gray-300 space-y-0.5">
<div class="text-yellow-400">on:</div>
<div class="pl-2">pull_request:</div>
<div class="pl-4">types: [opened, synchronize, closed]</div>
<div class="mt-1 text-yellow-400">jobs:</div>
<div class="pl-2">track-review-metrics:</div>
<div class="pl-4">runs-on: ubuntu-latest</div>
<div class="pl-4">steps:</div>
<div class="pl-6">- name: Extract Review Metrics</div>
<div class="pl-8">uses: actions/github-script@v7</div>
<div class="pl-8 text-gray-500"># Filter copilot comments</div>
<div class="pl-8 text-gray-500"># Categorize by severity</div>
<div class="pl-8 text-gray-500"># Set outputs</div>
<div class="pl-6 mt-1">- name: Block on Critical Issues</div>
<div class="pl-8">if: critical_findings > 0</div>
<div class="pl-8">exit 1</div>
</div>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-3 text-xs">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-0.5">Focus on Four Views</div>
<div class="opacity-80">PR cycle time trend, cumulative savings, quality outcomes, adoption rate</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-0.5">Use Existing BI Stack</div>
<div class="opacity-80">Integrate with your warehouse and BI tools for dashboards</div>
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
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">HIPAA, PCI-DSS, SOC2 guidance patterns</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🏥</div>
<div class="text-purple-300 font-semibold">HIPAA</div>
<div class="text-xs opacity-70 mt-1">Protected health information</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">💳</div>
<div class="text-pink-300 font-semibold">PCI-DSS</div>
<div class="text-xs opacity-70 mt-1">Payment card data security</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🛡️</div>
<div class="text-rose-300 font-semibold">SOC2</div>
<div class="text-xs opacity-70 mt-1">Service organization controls</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Compliance Through Instruction Files -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏛️ Enterprise Compliance</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Encoding Compliance in Instruction Files</div>
<div class="text-xs text-white/50">Turn regulatory requirements into automated code review guidance</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="p-3 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30 mb-3">
<div class="text-xs text-amber-300 font-semibold mb-1">⚠️ Important Caveat</div>
<div class="text-xs opacity-80">Copilot Code Review is an <span class="text-amber-400">assistive tool</span>, not a complete compliance solution. Compliance always requires human oversight, policy enforcement, and organizational discipline alongside tooling.</div>
</div>
<div class="grid grid-cols-2 gap-3 text-xs flex-1 min-h-0 max-h-[280px]">
<div class="flex flex-col">
<div class="font-mono text-xs bg-gray-950/80 border border-purple-700/50 rounded-lg px-3 py-2 flex-1 min-h-0 overflow-y-auto">
<div class="text-purple-400 mb-1"># .github/instructions/compliance.instructions.md</div>
<div class="text-gray-300 space-y-0.5">
<div class="text-yellow-400">---</div>
<div>applyTo: "**/*.{js,ts,py,java}"</div>
<div class="text-yellow-400">---</div>
<div class="mt-1">## Security Standards</div>
<div class="pl-2 opacity-80">- Flag hardcoded secrets, API keys</div>
<div class="pl-2 opacity-80">- Require parameterized queries</div>
<div class="pl-2 opacity-80">- Check input validation</div>
<div class="pl-2 opacity-80">- HTTPS for all external API calls</div>
<div class="mt-1">## Data Protection (GDPR, CCPA)</div>
<div class="pl-2 opacity-80">- Flag storage without encryption</div>
<div class="pl-2 opacity-80">- Check data retention policies</div>
<div class="pl-2 opacity-80">- Require audit logging for PII access</div>
</div>
</div>
</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">Benefits</div>
<div class="opacity-80 space-y-0.5">
<div>• Consistent enforcement across all PRs</div>
<div>• Automated audit trail generation</div>
<div>• Catch violations before production</div>
<div>• Reduce compliance risk exposure</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">Best Practices</div>
<div class="opacity-80 space-y-0.5">
<div>• Keep instructions concise (~4000 chars)</div>
<div>• Make rules actionable with examples</div>
<div>• Explain "why" each rule matters</div>
<div>• Link to internal policy docs</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: HIPAA Compliance Example -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏛️ Enterprise Compliance</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Healthcare (HIPAA) Compliance</div>
<div class="text-xs text-white/50">Protected Health Information (PHI) handling requirements</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="grid grid-cols-2 gap-3 text-xs mb-3 flex-1 min-h-0 max-h-[340px]">
<div class="flex flex-col">
<div class="font-mono text-xs bg-gray-950/80 border border-purple-700/50 rounded-lg px-3 py-2 flex-1 min-h-0 overflow-y-auto">
<div class="text-purple-400 mb-1"># .github/instructions/hipaa.instructions.md</div>
<div class="text-gray-300 space-y-0.5">
<div class="text-yellow-400">---</div>
<div>applyTo: "**/*.{js,ts,py,java}"</div>
<div>description: "HIPAA compliance for health data"</div>
<div class="text-yellow-400">---</div>
<div class="mt-1">## HIPAA Requirements</div>
<div class="pl-2 opacity-80">- All PHI must be encrypted at rest</div>
<div class="pl-2 opacity-80">- Require AES-256 encryption</div>
<div class="pl-2 opacity-80">- Flag any code exposing PHI in logs</div>
<div class="pl-2 opacity-80">- Ensure audit logging captures access</div>
<div class="pl-2 opacity-80">- Require role-based access controls</div>
<div class="mt-1">## Transmission Security</div>
<div class="pl-2 opacity-80">- Require TLS 1.2+ for PHI communication</div>
<div class="pl-2 opacity-80">- Flag hardcoded encryption keys</div>
<div class="pl-2 opacity-80">- Validate encrypted data in transit</div>
<div class="mt-1">## Audit Compliance</div>
<div class="pl-2 opacity-80">- Audit trail for all PHI read/write ops</div>
<div class="pl-2 opacity-80">- Require request ID tracking</div>
<div class="pl-2 opacity-80">- Validate 6-year audit log retention</div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-lg border border-emerald-500/30">
<div class="font-semibold text-emerald-300 mb-1">✅ Real-World Impact</div>
<div class="opacity-80 space-y-0.5">
<div>• Healthcare SaaS provider case study:</div>
<div class="pl-2 text-emerald-400">- 25 violations/quarter → 1/quarter (96% reduction)</div>
<div class="pl-2 text-emerald-400">- Audit prep: 200 hrs → 40 hrs (80% reduction)</div>
<div class="pl-2 text-emerald-400">- $500K potential fines → $50K (90% reduction)</div>
<div class="pl-2 text-emerald-400">- Developer awareness: 40% → 95%</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">Key Patterns</div>
<div class="opacity-80 space-y-0.5">
<div>• Automated detection of PHI exposure</div>
<div>• Consistent encryption enforcement</div>
<div>• Access control validation</div>
<div>• Audit trail generation for compliance reporting</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: PCI-DSS Payment Security -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏛️ Enterprise Compliance</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Payment Processing (PCI-DSS)</div>
<div class="text-xs text-white/50">E-commerce and payment platform security requirements</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="grid grid-cols-2 gap-3 text-xs mb-3 flex-1 min-h-0 max-h-[340px]">
<div class="flex flex-col">
<div class="font-mono text-xs bg-gray-950/80 border border-pink-700/50 rounded-lg px-3 py-2 flex-1 min-h-0 overflow-y-auto">
<div class="text-pink-400 mb-1"># .github/instructions/pci-dss.instructions.md</div>
<div class="text-gray-300 space-y-0.5">
<div class="text-yellow-400">---</div>
<div>applyTo: "**/*.{js,ts,py,java}"</div>
<div>description: "PCI-DSS compliance for payment data"</div>
<div class="text-yellow-400">---</div>
<div class="mt-1">## Card Data Handling</div>
<div class="pl-2 opacity-80">- Never store complete payment card data</div>
<div class="pl-2 opacity-80">- Flag any code storing card numbers, CVV</div>
<div class="pl-2 opacity-80">- Require tokenization via compliant gateway</div>
<div class="pl-2 opacity-80">- No card data in logs or error messages</div>
<div class="mt-1">## Access Control</div>
<div class="pl-2 opacity-80">- Require auth on all payment APIs</div>
<div class="pl-2 opacity-80">- Limit access to payment processors only</div>
<div class="pl-2 opacity-80">- Flag hardcoded payment credentials</div>
<div class="pl-2 opacity-80">- Require role-based access control</div>
<div class="mt-1">## Encryption and Security</div>
<div class="pl-2 opacity-80">- Require TLS 1.2+ for all payment comms</div>
<div class="pl-2 opacity-80">- Validate secure authentication methods</div>
<div class="pl-2 opacity-80">- Check webhook signature handling</div>
<div class="pl-2 opacity-80">- Ensure payment data encrypted in DB</div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-lg border border-emerald-500/30">
<div class="font-semibold text-emerald-300 mb-1">✅ E-Commerce Case Study</div>
<div class="opacity-80 space-y-0.5">
<div>• Mid-sized platform (10K+ daily transactions):</div>
<div class="pl-2 text-emerald-400">- Security review: 30% → 100% of PRs</div>
<div class="pl-2 text-emerald-400">- Critical vulnerabilities: 8/quarter → 0/quarter</div>
<div class="pl-2 text-emerald-400">- PR delays: 3 days → same-day feedback</div>
<div class="pl-2 text-emerald-400">- Security team time freed: 60 hrs/month</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">Key Enforcement</div>
<div class="opacity-80 space-y-0.5">
<div>• No storing raw payment card data</div>
<div>• Tokenization enforcement</div>
<div>• Audit logging for all payment operations</div>
<div>• Required status check blocks merge on violations</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Compliance Audit Trail -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏛️ Enterprise Compliance</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Compliance Audit Trail Generation</div>
<div class="text-xs text-white/50">Automatic evidence collection for regulatory audits</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2 text-xs">
<div class="p-2.5 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">Automatic Record Creation</div>
<div class="opacity-80 space-y-0.5">
<div>1. <span class="text-purple-400">Finding detection:</span> Timestamp and description of compliance violation</div>
<div>2. <span class="text-purple-400">Developer response:</span> Comment thread showing acknowledgment</div>
<div>3. <span class="text-purple-400">Resolution verification:</span> Final review confirming fix meets requirements</div>
<div>4. <span class="text-purple-400">Merge approval:</span> Audit trail showing no critical issues at merge</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">Export for Reporting</div>
<div class="opacity-80">Use GitHub API or third-party tools (Jira, ServiceNow, custom dashboards) to export compliance data for audit reports</div>
</div>
</div>

<div class="space-y-2 text-xs">
<div class="p-2.5 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-lg border border-emerald-500/30">
<div class="font-semibold text-emerald-300 mb-1">Weekly Compliance Summary Reports</div>
<div class="opacity-80 space-y-0.5">
<div>Configure Copilot to generate reports showing:</div>
<div class="pl-2">• Total PRs reviewed</div>
<div class="pl-2">• Compliance violations detected & resolved</div>
<div class="pl-2">• Mean time to remediation</div>
<div class="pl-2">• % of code changes meeting all compliance rules</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Pro Tip for HIPAA/SOC2 Auditors</div>
<div class="opacity-80">This data demonstrates proactive security controls and reduces audit preparation time from <span class="text-cyan-400">weeks to days</span></div>
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
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3 text-xs mb-4">
<div class="p-2.5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1.5">Immediate Actions (15 minutes)</div>
<div class="opacity-80 space-y-0.5">
<div>☐ Navigate to Settings → Rules → Rulesets</div>
<div>☐ Create ruleset targeting main branch</div>
<div>☐ Enable "Automatically request Copilot code review"</div>
<div>☐ Submit test PR and observe feedback quality</div>
<div>☐ Review official documentation</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1.5">Short-Term Implementation (1 hour)</div>
<div class="opacity-80 space-y-0.5">
<div>☐ Create .github/copilot-instructions.md</div>
<div>☐ Set up required status check integration</div>
<div>☐ Train team on @github-copilot mentions</div>
<div>☐ Establish baseline metrics (PR review time, revert rate)</div>
</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1.5">Advanced Exploration (Half day)</div>
<div class="opacity-80 space-y-0.5">
<div>☐ Build custom language-specific instruction files</div>
<div>☐ Implement GitHub Actions for ROI tracking</div>
<div>☐ Run ROI workshop with time-savings calculator</div>
<div>☐ Deploy organization-wide with standardized rules</div>
<div>☐ Calculate and present ROI to leadership</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="font-semibold text-green-300 mb-2 text-sm">Next Steps After Completion</div>
<div class="text-xs opacity-80 space-y-1">
<div>1. ✅ Complete immediate and short-term actions above (get first review running today)</div>
<div>2. 📊 Monitor metrics for 30 days to establish ROI baseline (track PR cycle time, finding categories, resolution rates)</div>
<div>3. 📖 Review related talk: <span class="text-green-400">GitHub Copilot Workspace</span> (for end-to-end development workflow)</div>
<div>4. 💬 Share learnings in team retrospective and iterate on configuration based on developer feedback</div>
<div>5. 🚀 Expand to additional repositories based on proven ROI (typical teams expand after seeing 5-10x ROI in pilot)</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Official Documentation", color: "cyan", items: [
        { label: "GitHub Copilot Code Review - Concepts", description: "Core review architecture and model behavior" },
        { label: "Configure Automatic Code Review", description: "Setting up auto-review triggers and scope" },
        { label: "Using Copilot Code Review", description: "Requesting reviews, interpreting suggestions" },
        { label: "Copilot Enterprise Documentation", description: "Enterprise deployment and governance options" }
    ] },
    { title: "Industry Research", color: "purple", items: [
        { label: "GitHub Blog: Copilot Code Review Launch", description: "Announcement and key metrics" },
        { label: "Microsoft DevBlogs: AI Code Review Best Practices", description: "Implementation guidance" },
        { label: "Stack Overflow Developer Survey 2024", description: "Code review bottleneck statistics" },
        { label: "OWASP Top 10 2024", description: "Vulnerability categories caught by AI review" },
        { label: "GitHub Security Lab: AI in Application Security", description: "73% fewer false positives" },
        { label: "Gartner: AI-Augmented Software Engineering", description: "Market analysis and adoption trends" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="GitHub Copilot Code Review: From Bottleneck to Accelerator"
:cards="[
  { icon: '⚡', value: '40-60% Faster', detail: 'PR review cycle time reduction', subdetail: 'Automated reviews catch issues instantly' },
  { icon: '🔒', value: '90%+ Reduction', detail: 'In security violations', subdetail: 'Catching issues before they reach production' },
  { icon: '⏱️', value: '15 Minutes', detail: 'From enablement to first review', subdetail: 'Enable workspace setting and open a PR' },
]"
prompt="Questions? Ready to reduce your PR bottleneck?"
/>
