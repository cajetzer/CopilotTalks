---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## The Agentic Journey: Incremental Path from Issue to PR Automation
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: The Agentic Journey - Incremental Path from Issue to PR Automation
module: tech-talks/agentic-journey
mdc: true
section: Agentic Engineering
status: active
updated: 2026-02-01
---

<script setup>
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import TitleSlide from './components/structure/TitleSlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="The Agentic Journey"
subtitle="Incremental Path from Issue to PR Automation"
tagline="4-Workflow Issue Lifecycle with Historical Context Planning"
meta="Tech Talk · 45 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I start getting value from GitHub Copilot agents without rewiring my entire SDLC?"
subtext="The gap between amazing demos and agents that work for you is usually process friction."
highlight="Start low-risk to build trust before tackling complex agent workflows."
:cards='[
  { icon: "🚀", title: "Engineering Leaders Adopting AI Agents", description: "Building confidence and team trust in agentic automation incrementally" },
  { icon: "📋", title: "Product Managers Draining Backlogs", description: "Offloading well-understood tasks to agents without rewiring your SDLC" },
  { icon: "🔄", title: "DevOps Teams Automating SDLC Phases", description: "Phase-by-phase journey from issue triage automation to autonomous delivery" },
  { title: "Triage Overhead", description: "20-30 min per issue today — agents bring this down to 3 minutes" },
  { title: "Planning Gaps", description: "No historical context slows planning — agents research and synthesize fast" },
  { title: "Review Bottleneck", description: "10-15x more output than reviewers can handle — automation is the only path" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "📥", title: "Phase 1: Agentic Intake", subtitle: "Automatic triage & duplicate detection", blurb: "20-30 min → 3 min per issue", slide: 4 },
    { icon: "📋", title: "Phase 2: Agentic Planning", subtitle: "Historical context research & execution plans", blurb: "2-4 hours → 15 min planning time", slide: 7 },
    { icon: "💻", title: "Phase 3: Agentic Coding", subtitle: "Implementation from approved plans", blurb: "8-12 hours → 1-2 hours to PR", slide: 10 },
    { icon: "🔍", title: "Phase 4: Code Review", subtitle: "Security & outcome validation", blurb: "2-4 hours → 20 min review time", slide: 12 },
  ]'
/>

---

<!-- SLIDE: Part 1 — Agentic Intake -->

<SectionOpenerSlide
  :partNumber="1"
  title="Agentic Intake"
  subtitle="Automatic triage, duplicate detection, and routing"
  :cards='[
    { icon: "🔍", title: "Context Gathering", blurb: "Issue analysis + related file detection" },
    { icon: "🔄", title: "Duplicate Detection", blurb: "Search 6 months history, 88% accuracy" },
    { icon: "🎯", title: "Smart Routing", blurb: "Classification, priority, team assignment" },
  ]'
  :terminal='{ context: "Every new issue triggers automated analysis", detail: "20-30 min → 3 min per issue" }'
/>

---

<!-- SLIDE: Triage Workflow & Metrics -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📥 Agentic Intake</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-xs text-white/50">Triggered automatically on every new issue — 4 steps in ~3 minutes</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">1</div>
<div class="font-bold text-cyan-300 text-sm">Context Gathering</div>
</div>
<div class="text-xs text-gray-300">Read issue title, description, related files, recent similar issues</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">2</div>
<div class="font-bold text-blue-300 text-sm">Duplicate Detection</div>
</div>
<div class="text-xs text-gray-300">Search open and closed issues from last 6 months, calculate similarity</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs">3</div>
<div class="font-bold text-indigo-300 text-sm">Routing & Labeling</div>
</div>
<div class="text-xs text-gray-300">Classify type, priority, affected component, suggest assignee</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">4</div>
<div class="font-bold text-purple-300 text-sm">Context Summary</div>
</div>
<div class="text-xs text-gray-300">Generate analysis with affected files, root cause, suggested approach</div>
</div>
</div>
<div>
<div class="p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 mb-3">
<div class="font-bold text-white text-sm mb-3">Success Metrics (50 issues/month)</div>
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-red-900/30 rounded">
<div class="text-red-400 font-mono">30 min</div>
<div class="text-gray-400 mt-0.5">Before: Time to triage</div>
</div>
<div class="p-2 bg-green-900/30 rounded">
<div class="text-green-400 font-mono">&lt;5 min</div>
<div class="text-gray-400 mt-0.5">After: Time to triage</div>
</div>
<div class="p-2 bg-red-900/30 rounded">
<div class="text-red-400 font-mono">60%</div>
<div class="text-gray-400 mt-0.5">Before: Duplicate detection</div>
</div>
<div class="p-2 bg-green-900/30 rounded">
<div class="text-green-400 font-mono">&gt;90%</div>
<div class="text-gray-400 mt-0.5">After: Duplicate detection</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 text-center">
<div class="text-sm font-semibold text-cyan-300">ROI: $2,000/month savings · 2-3 hours setup</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case — Duplicate Elimination -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📥 Agentic Intake</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-xs text-white/50">Real-world team: 50 issues/month with 15% duplicate rate</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-3">❌ The Problem</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="p-2 bg-red-900/30 rounded">Developers spend <span class="text-red-400 font-mono">45 minutes</span> per duplicate researching before realizing already fixed</div>
<div class="p-2 bg-red-900/30 rounded">Context-switch cost pulls developers away from feature work</div>
<div class="p-2 bg-red-900/30 rounded">Manual duplicate search only catches <span class="text-red-400 font-mono">60%</span> — others discovered mid-implementation</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-3">✅ The Solution</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="p-2 bg-green-900/30 rounded">Phase 1 agent searches open + closed issues, calculates similarity</div>
<div class="p-2 bg-green-900/30 rounded">Auto-labels duplicates with references to original fix</div>
<div class="p-2 bg-green-900/30 rounded">Detection rate: <span class="text-green-400 font-mono">&gt;90%</span> — catches duplicates in <span class="text-green-400 font-mono">3 minutes</span></div>
</div>
</div>
</div>

<div class="mt-2 p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/30">
<div class="text-sm font-bold text-cyan-300 mb-2">Outcome</div>
<div class="text-xs text-gray-300">
Duplicate rate dropped from <span class="text-red-400">15%</span> to <span class="text-green-400">&lt;3%</span>. Saved <span class="text-cyan-400 font-mono">7 × 40 minutes = 4.7 hours/month</span> on duplicates alone.
</div>
</div>

<div class="mt-2 p-2 bg-gray-900/50 rounded-lg border border-gray-700/50 text-xs text-gray-300">
<span class="font-bold text-gray-400 uppercase tracking-wider text-[10px]">Example: </span>Issue #4821 matched #4203 at 88% similarity — auto-labeled in 3 min, saving 45 min of duplicate work.
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Agentic Planning -->

<SectionOpenerSlide
  :partNumber="2"
  title="Agentic Planning"
  subtitle="Historical context research & execution plan generation"
  :cards='[
    { icon: "🔍", title: "Historical Context", blurb: "Understand related issues and patterns" },
    { icon: "📋", title: "Execution Plan", blurb: "Step-by-step implementation roadmap" },
    { icon: "✋", title: "Human Approval", blurb: "Review before implementation starts" },
  ]'
  :terminal='{ context: "Estimate accuracy with historical context", detail: "±20% estimate vs ±50% without" }'
/>

---

<!-- SLIDE: Historical Context Innovation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Agentic Planning</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">The Key Innovation: Learning From History</div>
<div class="text-xs text-white/50">Don't plan from scratch — research similar past implementations first</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30 mb-2">
<div class="text-sm font-bold text-blue-300 mb-2">Example: Adding Microsoft OAuth Support</div>
<div class="text-xs text-gray-300">
<div class="p-3 bg-blue-900/30 rounded-lg mb-2">
<div class="font-mono text-blue-400 mb-1">Agent searches for similar past issues and PRs:</div>
<div class="ml-3 space-y-1.5">
<div>• <strong>"Add Google OAuth"</strong> (#2847) → PR #2851: 6 hours, 8 files</div>
<div class="ml-3 text-cyan-400">Lesson: Token refresh edge case required extra test</div>
<div>• <strong>"Add GitHub OAuth"</strong> (#3104) → PR #3109: 5 hours, 7 files</div>
<div class="ml-3 text-cyan-400">Lesson: Multi-tenant config needed for enterprise users</div>
</div>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-2">❌ Without Historical Context</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Plan from scratch every time</div>
<div>• Miss edge cases from previous work</div>
<div>• <span class="text-red-400 font-mono">±50%</span> estimate accuracy</div>
<div>• Mid-implementation surprises</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-lg border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-2">✅ With Historical Context</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Learn patterns from similar issues</div>
<div>• Surface edge cases before coding</div>
<div>• <span class="text-green-400 font-mono">±20%</span> estimate accuracy</div>
<div>• <span class="text-green-400">60% fewer</span> mid-implementation surprises</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-500/30 text-center">
<div class="text-xs font-semibold text-blue-300">Result: Planning time 4 hours → 15 minutes — and more accurate plans · ROI: $7,000/month</div>
</div>
</div>
</div>

---

<!-- SLIDE: Planning Metrics & Example -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Agentic Planning</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Human Approval Gate & Metrics</div>
<div class="text-xs text-white/50">Plan posts as issue comment and waits for `/approve-plan` command</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-1">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-2">Before Agents</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="flex justify-between p-1 bg-red-900/20 rounded">
<span>Time to plan</span>
<span class="text-red-400 font-mono">4 hours</span>
</div>
<div class="flex justify-between p-1 bg-red-900/20 rounded">
<span>Estimate accuracy</span>
<span class="text-red-400 font-mono">±50%</span>
</div>
<div class="flex justify-between p-1 bg-red-900/20 rounded">
<span>Missing requirements</span>
<span class="text-red-400 font-mono">25%</span>
</div>
<div class="flex justify-between p-1 bg-red-900/20 rounded">
<span>Historical context</span>
<span class="text-red-400 font-mono">0%</span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-2">After Automation</div>
<div class="space-y-1 text-xs text-gray-300">
<div class="flex justify-between p-1 bg-green-900/20 rounded">
<span>Time to plan</span>
<span class="text-green-400 font-mono">&lt;30 min</span>
</div>
<div class="flex justify-between p-1 bg-green-900/20 rounded">
<span>Estimate accuracy</span>
<span class="text-green-400 font-mono">±20%</span>
</div>
<div class="flex justify-between p-1 bg-green-900/20 rounded">
<span>Missing requirements</span>
<span class="text-green-400 font-mono">&lt;10%</span>
</div>
<div class="flex justify-between p-1 bg-green-900/20 rounded">
<span>Historical context</span>
<span class="text-green-400 font-mono">&gt;80%</span>
</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-1">Example Plan Output</div>
<div class="text-xs font-mono text-gray-300 space-y-1">
<div class="text-indigo-400">📋 EXECUTION PLAN: Add Microsoft OAuth Support</div>
<div class="ml-3 space-y-0.5">
<div class="text-cyan-400">Historical Context:</div>
<div class="ml-3 opacity-80">Based on Issue #2847 "Add Google OAuth" and #3104 "Add GitHub OAuth"</div>
<div class="ml-3">✓ Token refresh edge cases require explicit testing</div>
<div class="ml-3">✓ Multi-tenant configuration needed for enterprise</div>
<div class="text-cyan-400 mt-1">Affected Files:</div>
<div class="ml-3">1. src/auth/providers/microsoft-oauth.ts (new)</div>
<div class="ml-3">2. src/auth/oauth-handler.ts (modify)</div>
<div class="text-cyan-400">Estimated Effort: 6-8 hours (historical average)</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Agentic Coding -->

<SectionOpenerSlide
  :partNumber="3"
  title="Agentic Coding"
  subtitle="Implementation from approved plans"
  :cards='[
    { icon: "✅", title: "Plan-Driven", blurb: "Follow the established execution plan" },
    { icon: "🔄", title: "Auto-PR Creation", blurb: "Autonomous PR with passing tests" },
    { icon: "💻", title: "Copilot Agent", blurb: "Background execution from approved plan" },
  ]'
  :terminal='{ context: "Connecting Phase 2 plan to GitHub Copilot agent", detail: "8-12 hours → 1-2 hours to PR" }'
/>

---

<!-- SLIDE: The Copilot Coding Agent -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💻 Agentic Coding</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">The Copilot Coding Agent: You Already Have This</div>
<div class="text-xs text-white/50">Phase 3 connects your approved plan directly to GitHub Copilot's SWE agent</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30 mb-3">
<div class="text-sm font-bold text-indigo-300 mb-3">What the Copilot Coding Agent Does</div>
<div class="grid grid-cols-3 gap-3 text-xs text-gray-300">
<div class="p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/20">
<div class="text-indigo-300 font-semibold mb-1">📋 Reads the Plan</div>
<div class="opacity-80">Takes the approved execution plan from Phase 2 as its implementation spec</div>
</div>
<div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/20">
<div class="text-purple-300 font-semibold mb-1">⚡ Writes the Code</div>
<div class="opacity-80">Implements across multiple files, follows existing patterns, writes tests</div>
</div>
<div class="p-3 bg-pink-900/30 rounded-lg border border-pink-500/20">
<div class="text-pink-300 font-semibold mb-1">🔄 Opens a PR</div>
<div class="opacity-80">Commits, pushes, creates PR with evidence bundle — ready for review</div>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-2">✅ The Good News</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• <strong>Already available</strong> in your GitHub org</div>
<div>• No new model to train or configure</div>
<div>• Works on any issue — just assign it</div>
<div>• Phase 3 adds the <em>structure</em> you're missing</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-2">🎯 What Phase 3 Adds</div>
<div class="text-xs text-gray-300 space-y-1.5">
<div>• Trigger only from <strong>approved plans</strong></div>
<div>• Injects plan context into the agent prompt</div>
<div>• Enforces quality guidelines automatically</div>
<div>• Labels PR for downstream review workflow</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Assigning the Copilot Agent -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💻 Agentic Coding</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Two Ways to Assign: Manual & Automated</div>
<div class="text-xs text-white/50">Start with manual to build confidence, then automate the trigger</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-3">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl border border-blue-500/30">
<div class="text-sm font-bold text-blue-300 mb-2">🖱️ Path 1: Manual Assignment</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="p-2 bg-blue-900/30 rounded-lg">
<div class="text-blue-400 font-semibold mb-1">On GitHub.com</div>
<div class="space-y-0.5 opacity-90">
<div>1. Open the issue</div>
<div>2. Assignees → <span class="font-mono text-blue-300">copilot</span></div>
<div>3. Agent starts immediately</div>
</div>
</div>
<div class="p-2 bg-blue-900/20 rounded text-blue-300/70 italic text-xs">
Best for: ad-hoc tasks, exploring capabilities, issues without formal plans
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-2">⚡ Path 2: Automated Trigger</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="p-2 bg-indigo-900/30 rounded-lg font-mono">
<div class="text-indigo-400 mb-1"># Comment on the issue:</div>
<div class="text-white">/approve-plan</div>
<div class="text-gray-400 text-xs mt-1">↳ workflow assigns copilot, injects plan</div>
</div>
<div class="p-2 bg-indigo-900/20 rounded text-indigo-300/70 italic text-xs">
Best for: structured workflow, plan-driven implementation, audit trail
</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-xl border border-gray-600/30">
<div class="text-sm font-bold text-gray-300 mb-2">📋 What the Agent Receives (Phase 3 workflow injects this)</div>
<div class="grid grid-cols-3 gap-2 text-xs text-gray-300">
<div class="p-2 bg-gray-800/40 rounded">
<div class="text-indigo-300 font-semibold mb-1">Issue Context</div>
<div class="opacity-80">Original requirements, labels, linked issues</div>
</div>
<div class="p-2 bg-gray-800/40 rounded">
<div class="text-purple-300 font-semibold mb-1">Approved Plan</div>
<div class="opacity-80">Files to change, estimate, historical lessons</div>
</div>
<div class="p-2 bg-gray-800/40 rounded">
<div class="text-pink-300 font-semibold mb-1">Quality Rules</div>
<div class="opacity-80">Code style, test requirements, commit format</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Coding Metrics -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💻 Agentic Coding</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Implementation Quality & Speed</div>
<div class="text-xs text-white/50">Phase 3 connects approved plans to GitHub Copilot SWE agent</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-2">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-1">Before Agents</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex justify-between p-1.5 bg-red-900/20 rounded">
<span>Implementation time</span>
<span class="text-red-400 font-mono">8-12 hours</span>
</div>
<div class="flex justify-between p-1.5 bg-red-900/20 rounded">
<span>Time to first PR</span>
<span class="text-red-400 font-mono">1-2 days</span>
</div>
<div class="flex justify-between p-1.5 bg-red-900/20 rounded">
<span>Initial test pass rate</span>
<span class="text-red-400 font-mono">70%</span>
</div>
<div class="flex justify-between p-1.5 bg-red-900/20 rounded">
<span>PRs requiring rework</span>
<span class="text-red-400 font-mono">30%</span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-1">After Automation</div>
<div class="space-y-1.5 text-xs text-gray-300">
<div class="flex justify-between p-1.5 bg-green-900/20 rounded">
<span>Implementation time</span>
<span class="text-green-400 font-mono">1-2 hours</span>
</div>
<div class="flex justify-between p-1.5 bg-green-900/20 rounded">
<span>Time to first PR</span>
<span class="text-green-400 font-mono">2-4 hours</span>
</div>
<div class="flex justify-between p-1.5 bg-green-900/20 rounded">
<span>Initial test pass rate</span>
<span class="text-green-400 font-mono">&gt;90%</span>
</div>
<div class="flex justify-between p-1.5 bg-green-900/20 rounded">
<span>PRs requiring rework</span>
<span class="text-green-400 font-mono">&lt;15%</span>
</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-2">Implementation Guidelines (from prompt template)</div>
<div class="text-xs text-gray-300 grid grid-cols-2 gap-2">
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Follow existing code style and patterns</div>
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Write tests for all new functionality</div>
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Make small, atomic commits</div>
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Keep functions focused and single-purpose</div>
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Ensure proper error handling</div>
<div class="p-1.5 bg-indigo-900/30 rounded">✓ Add descriptive commit messages</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xs font-semibold text-purple-300">Result: 6-10x faster implementation with higher quality · ROI: $17,000/month</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Code Review -->

<SectionOpenerSlide
  :partNumber="4"
  title="Code Review Agent"
  subtitle="Security, logic, performance, and test coverage validation"
  :cards='[
    { icon: "🔒", title: "Security Scan", blurb: "OWASP vulnerabilities, injection risks" },
    { icon: "⚡", title: "Performance Check", blurb: "N+1 queries, bottlenecks, optimization" },
    { icon: "🧪", title: "Test Coverage", blurb: "Coverage metrics and gap analysis" },
  ]'
  :terminal='{ context: "Code review accelerated by AI", detail: "2-4 hours → 20 min review time" }'
/>

---

<!-- SLIDE: Review Focus Areas -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Code Review</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">What the Agent Reviews: 4 Focus Areas</div>
<div class="text-xs text-white/50">Complete automated analysis in ~6 minutes — structured output for human validation</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-2">
<div class="p-2 bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-lg border border-red-500/30">
<div class="flex items-center justify-between mb-1">
<div class="font-bold text-red-300 text-sm">🔒 Security</div>
<div class="text-xs text-red-400 font-mono">~2 min</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• SQL injection patterns</div>
<div>• XSS vulnerabilities</div>
<div>• Auth bypass risks</div>
<div>• Hardcoded secrets</div>
<div>• Unsafe dependencies</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-orange-900/40 to-orange-800/40 rounded-lg border border-orange-500/30">
<div class="flex items-center justify-between mb-1">
<div class="font-bold text-orange-300 text-sm">⚙️ Logic</div>
<div class="text-xs text-orange-400 font-mono">~2 min</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Error handling completeness</div>
<div>• Edge case coverage</div>
<div>• Race conditions</div>
<div>• Resource leaks</div>
<div>• State management bugs</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30">
<div class="flex items-center justify-between mb-1">
<div class="font-bold text-purple-300 text-sm">⚡ Performance</div>
<div class="text-xs text-purple-400 font-mono">~1 min</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• O(n²) algorithms</div>
<div>• N+1 query patterns</div>
<div>• Blocking operations</div>
<div>• Caching opportunities</div>
<div>• Memory inefficiencies</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/40 to-pink-800/40 rounded-lg border border-pink-500/30">
<div class="flex items-center justify-between mb-1">
<div class="font-bold text-pink-300 text-sm">🧪 Tests</div>
<div class="text-xs text-pink-400 font-mono">~1 min</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Coverage on new code</div>
<div>• Edge case test presence</div>
<div>• Integration test quality</div>
<div>• Flaky test detection</div>
<div>• Test maintainability</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-1">The Paradigm Shift</div>
<div class="text-xs text-gray-300">
Human review shifts from <span class="text-red-400">"read every line"</span> to <span class="text-green-400">"validate outcomes against intent"</span> — does the implementation match the approved plan? Agent catches 95% of technical issues; humans validate strategic alignment.
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Review Metrics & Security Impact -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔍 Code Review</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Impact: Security Review at Scale</div>
<div class="text-xs text-white/50">Real-world example: 40 PRs/month team generating agent code</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mb-4">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-3">❌ The Problem</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="p-2 bg-red-900/30 rounded"><span class="text-red-400 font-mono">2-4 hours</span> per PR review</div>
<div class="p-2 bg-red-900/30 rounded">Race condition in token refresh logic slipped through manual review</div>
<div class="p-2 bg-red-900/30 rounded">Caused production incident — 45 min downtime</div>
<div class="p-2 bg-red-900/30 rounded">Review capacity bottleneck blocking velocity</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-3">✅ The Solution</div>
<div class="text-xs text-gray-300 space-y-2">
<div class="p-2 bg-green-900/30 rounded">Agent analyzes security, logic, performance in <span class="text-green-400 font-mono">6 minutes</span></div>
<div class="p-2 bg-green-900/30 rounded">Race condition pattern flagged automatically</div>
<div class="p-2 bg-green-900/30 rounded">Human reads agent analysis in <span class="text-green-400 font-mono">15 min</span> vs entire diff in 3 hours</div>
<div class="p-2 bg-green-900/30 rounded">Same pattern caught in next PR before merge</div>
</div>
</div>
</div>

<div class="grid grid-cols-4 gap-3 mb-3">
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30 text-center">
<div class="text-lg font-bold text-purple-300">3h → 20m</div>
<div class="text-xs opacity-70 mt-1">Review time per PR</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30 text-center">
<div class="text-lg font-bold text-pink-300">&gt;95%</div>
<div class="text-xs opacity-70 mt-1">Critical bugs caught</div>
</div>
<div class="p-3 bg-gradient-to-br from-rose-900/30 to-rose-800/20 rounded-lg border border-rose-500/30 text-center">
<div class="text-lg font-bold text-rose-300">0/quarter</div>
<div class="text-xs opacity-70 mt-1">Security incidents</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30 text-center">
<div class="text-lg font-bold text-purple-300">8-12x</div>
<div class="text-xs opacity-70 mt-1">Review capacity</div>
</div>
</div>

<div class="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 text-center">
<div class="text-xs font-semibold text-purple-300">Outcome: Review bottleneck eliminated · Security improved · ROI: $10,000/month</div>
</div>
</div>
</div>

---

<!-- SLIDE: When to Graduate to Full SDLC -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🚀 Graduation Path</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">The Inflection Point: When Quick Wins Hit Limits</div>
<div class="text-xs text-white/50">Watch for these signals that you've outgrown Phases 1-4</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-2">
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-xs font-bold text-red-300 mb-1 uppercase tracking-wider">⚠️ Signals You've Outgrown Phase 1-4</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• <strong>Repository Chaos:</strong> Agents touching 3-5 repos per feature</div>
<div>• <strong>CI Bottleneck:</strong> Queue time &gt;60 minutes</div>
<div>• <strong>Review Overwhelm:</strong> 50+ PRs open, 10+ days to review</div>
<div>• <strong>Test Flakiness:</strong> &gt;10% flaky test rate</div>
<div>• <strong>Manual Governance:</strong> Compliance requires human review</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-lg border border-green-500/30">
<div class="text-xs font-bold text-green-300 mb-1 uppercase tracking-wider">✅ Solutions: Full SDLC Transformation</div>
<div class="text-xs text-gray-300 space-y-1">
<div>→ <strong>Monorepo consolidation</strong> (eliminate coordination overhead)</div>
<div>→ <strong>Trust factory CI</strong> (&lt;10 min PR checks)</div>
<div>→ <strong>Outcome-based PRs</strong> (evidence bundles)</div>
<div>→ <strong>Hermetic builds</strong> (deterministic signal)</div>
<div>→ <strong>Automated attestations</strong> (compliance verification)</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="text-sm font-bold text-cyan-300 mb-1">The Upgrade Path</div>
<div class="text-xs font-mono text-gray-300">
<div class="grid grid-cols-2 gap-3">
<div>
<div class="text-cyan-400 mb-1">PHASE 1-4 (Quick Wins)</div>
<div class="space-y-0.5 ml-2">
<div>✓ Issue → PR automation</div>
<div>✓ Agent-generated code</div>
<div>✓ Code review assistance</div>
<div>~ Manual coordination</div>
<div>~ Traditional CI (slow)</div>
<div class="text-cyan-400 mt-2">THROUGHPUT: 5-10 features/week</div>
</div>
</div>
<div>
<div class="text-green-400 mb-1">PHASE 5 (Full SDLC)</div>
<div class="space-y-0.5 ml-2">
<div>✓ Monorepo with module boundaries</div>
<div>✓ Feature-scale PRs (500-2000 lines)</div>
<div>✓ Intent-based reviews</div>
<div>✓ Atomic merges</div>
<div>✓ CI as trust factory (&lt;10 min)</div>
<div class="text-green-400 mt-2">THROUGHPUT: 10-15 features/day</div>
</div>
</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-xl border border-pink-500/30 text-center">
<div class="text-xs font-semibold text-pink-300">Phases 1-4 build proof of value and executive support for the full transformation</div>
</div>
</div>
</div>

---

<!-- SLIDE: Expected ROI -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💰 ROI Analysis</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Expected ROI by Phase</div>
<div class="text-xs text-white/50">Based on $100/hour developer cost, 50 issues/month</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="space-y-1.5 mb-1">
<div class="grid grid-cols-4 gap-3">
<div class="p-2 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30 text-center">
<div class="text-xl font-bold text-cyan-300">Phase 1</div>
<div class="text-xs opacity-70">Intake</div>
</div>
<div class="p-2 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg border border-gray-700/30">
<div class="text-xs text-gray-400 mb-1">Setup</div>
<div class="text-sm text-white font-mono">2-3 hours</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
<div class="text-xs text-gray-400 mb-1">Monthly</div>
<div class="text-sm text-green-300 font-mono">$2,000</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 rounded-lg border border-emerald-500/30">
<div class="text-xs text-gray-400 mb-1">Annual</div>
<div class="text-sm text-emerald-300 font-mono">$24,000</div>
</div>
</div>
<div class="grid grid-cols-4 gap-3">
<div class="p-2 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30 text-center">
<div class="text-xl font-bold text-blue-300">Phase 2</div>
<div class="text-xs opacity-70">Planning</div>
</div>
<div class="p-2 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg border border-gray-700/30">
<div class="text-xs text-gray-400 mb-1">Setup</div>
<div class="text-sm text-white font-mono">2-3 hours</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
<div class="text-xs text-gray-400 mb-1">Monthly</div>
<div class="text-sm text-green-300 font-mono">$7,000</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 rounded-lg border border-emerald-500/30">
<div class="text-xs text-gray-400 mb-1">Annual</div>
<div class="text-sm text-emerald-300 font-mono">$84,000</div>
</div>
</div>
<div class="grid grid-cols-4 gap-3">
<div class="p-2 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30 text-center">
<div class="text-xl font-bold text-indigo-300">Phase 3</div>
<div class="text-xs opacity-70">Coding</div>
</div>
<div class="p-2 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg border border-gray-700/30">
<div class="text-xs text-gray-400 mb-1">Setup</div>
<div class="text-sm text-white font-mono">0 hours</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
<div class="text-xs text-gray-400 mb-1">Monthly</div>
<div class="text-sm text-green-300 font-mono">$17,000</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 rounded-lg border border-emerald-500/30">
<div class="text-xs text-gray-400 mb-1">Annual</div>
<div class="text-sm text-emerald-300 font-mono">$204,000</div>
</div>
</div>
<div class="grid grid-cols-4 gap-3">
<div class="p-2 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30 text-center">
<div class="text-xl font-bold text-purple-300">Phase 4</div>
<div class="text-xs opacity-70">Review</div>
</div>
<div class="p-2 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg border border-gray-700/30">
<div class="text-xs text-gray-400 mb-1">Setup</div>
<div class="text-sm text-white font-mono">1-2 hours</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
<div class="text-xs text-gray-400 mb-1">Monthly</div>
<div class="text-sm text-green-300 font-mono">$10,000</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 rounded-lg border border-emerald-500/30">
<div class="text-xs text-gray-400 mb-1">Annual</div>
<div class="text-sm text-emerald-300 font-mono">$120,000</div>
</div>
</div>
</div>

<div class="p-3 bg-gradient-to-r from-emerald-600/80 to-cyan-600/80 rounded-xl border-2 border-emerald-400 shadow-lg">
<div class="grid grid-cols-3 gap-4 text-center">
<div>
<div class="text-xs text-white/70 mb-1">Combined Setup</div>
<div class="text-xl font-bold text-white">~8 hours</div>
</div>
<div>
<div class="text-xs text-white/70 mb-1">Monthly Savings</div>
<div class="text-xl font-bold text-white">$36,000</div>
</div>
<div>
<div class="text-xs text-white/70 mb-1">Annual Savings</div>
<div class="text-xl font-bold text-white">$432,000</div>
</div>
</div>
</div>

<div class="mt-2 text-center text-xs text-gray-400 italic">Phase 5 (full SDLC) adds $1.8M/year but requires 3-6 month investment</div>
</div>
</div>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="From Manual Issue-to-PR to Agentic Automation"
:leftItems='["Triage: 20–30 min per issue", "Planning: 2–4 hrs", "Accuracy: varies by context", "Manual synthesis required"]'
:rightItems='["Triage: 3 min", "Planning: 15 min", "Accuracy: +60% improvement", "Automated historical context"]'
:metrics='[
  { value: "20–30 min → 3 min", detail: "Triage acceleration" },
  { value: "2–4 hrs → 15 min", detail: "Planning acceleration" },
  { value: "+60%", detail: "Accuracy improvement" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Review the 4 workflow files in the talk repository", "Identify your repo with highest issue volume", "Check prerequisites: Actions enabled, Copilot license active"]'
  :thisWeek='["Copy 1-issue-triage.yml to your repo", "Create prompt templates in .github/prompts/", "Configure COPILOT_GITHUB_TOKEN secret", "Create a test issue and verify the workflow"]'
  :thisMonth='["Add Phases 2-4 progressively (one per week)", "Customize prompts for team coding standards", "Track metrics: triage time, plan accuracy, review speed", "Monitor for Phase 5 graduation signals"]'
  footer="Deploy Phase 1 today and validate for 1-2 weeks, then add phases progressively, build ROI dashboards, and present results using the Agentic Delivery executive framing."
/>


---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
        { href: "https://docs.github.com/en/copilot", label: "GitHub Copilot Documentation", description: "Core concepts, getting started guide, and overview" },
        { href: "https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent", label: "Copilot Coding Agent for PRs", description: "Agent-assisted PR workflows and review" },
        { href: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line", label: "Using Copilot in the Command Line", description: "CLI installation and programmatic mode" },
        { href: "https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions", label: "GitHub Actions Workflow Syntax", description: "Triggers, jobs, steps, and permissions" }
    ] },
    { title: "🎓 Related Content", color: "purple", items: [
        { label: "Agentic SDLC", description: "Full Gen-4 transformation: repository topology, PR workflows, CI trust factory" },
        { label: "Agent Teams", description: "Specialized agent patterns for complex multi-agent coordination" },
        { label: "Copilot Hooks", description: "Governance and control mechanisms for agent behavior" },
        { label: "Enterprise Patterns", description: "Organization-wide adoption patterns and rollout strategies" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="The Agentic Journey: Incremental Path to Automation"
:cards='[
  { icon: "⚡", value: "20-30min → 3min", detail: "Issue triage time", subdetail: "Phase 1: Automated classification & prioritization" },
  { icon: "📊", value: "±20%", detail: "Plan accuracy improvement", subdetail: "Phase 2: Historical context reduces estimation variance" },
  { icon: "💰", value: "$432K/year", detail: "Combined ROI", subdetail: "50 issues/month across 4 phases" }
]'
prompt="Questions? Let's discuss your incremental adoption path — start with Phase 1 this week"
/>
