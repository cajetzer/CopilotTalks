---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Agentic Workflows: Repository Automation with AI Agents
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Agentic Workflows - Repository Automation with AI Agents
module: tech-talks/agentic-workflows
mdc: true
section: Agentic Engineering
status: active
updated: 2026-03-05
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
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="GitHub Agentic Workflows"
subtitle="Repository Automation with AI Agents"
tagline="Write repository automation in natural language, execute with security-first AI agents"
meta="Tech Talk · 45-60 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How can I automate repository tasks that require judgment and context?"
subtext="Triage, code review, progress reports — tasks needing judgment, not just triggers."
highlight="Agentic workflows replace brittle YAML with AI that adapts to context."
:cards='[
  { icon: "🔧", title: "DevOps Engineers Automating Repo Tasks", description: "GitHub Actions triggering AI agents on push, PR, and issue events" },
  { icon: "📝", title: "Team Leads Eliminating Manual Reviews", description: "Auto-triage issues, synthesize progress reports, and review PRs without blocking" },
  { icon: "⚡", title: "Platform Engineers Building Safe Agents", description: "Markdown intent compiled to secure, sandboxed, validated YAML workflows" },
  { title: "Beyond YAML", description: "No brittle conditionals — AI adapts to repository state and context dynamically" },
  { title: "Context-Aware", description: "Agents understand issues, code history, and project state — not just event payloads" },
  { title: "Secure by Design", description: "Managed permissions and validated write operations keep agent actions safe" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🎯", title: "The Opportunity", subtitle: "Intent-driven automation with AI agents", blurb: "Write what you want to happen, AI figures out how", slide: 4 },
    { icon: "🏗️", title: "Core Architecture", subtitle: "Markdown → Secure YAML compilation", blurb: "Sandboxed agents, validated write operations", slide: 7 },
    { icon: "🔒", title: "Safe Outputs", subtitle: "Security-first write operations", blurb: "AI decides, sanitized handlers execute", slide: 11 },
    { icon: "🏭", title: "Agent Factory Patterns", subtitle: "100+ proven workflow patterns", blurb: "Specialization reveals possibilities", slide: 13 },
  ]'
/>

---

<!-- SLIDE: Part 1 — The Opportunity -->

<SectionOpenerSlide
  :partNumber="1"
  title="The Opportunity"
  subtitle="Intent-driven automation with AI agents"
  :cards='[
    { icon: "📝", title: "Markdown Workflows", blurb: "Natural language instructions, not YAML" },
    { icon: "🔐", title: "Security-First", blurb: "Read-only AI + validated write operations" },
    { icon: "🎯", title: "Context-Aware", blurb: "AI adapts decisions to repository state" },
  ]'
  :terminal='{ context: "From scripting \"how\" to declaring \"what\"", detail: "AI navigates the path" }'
/>

---

<!-- SLIDE: Intent-Driven Automation -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Opportunity"
  title="What's Now Possible"
  :cards='[
    { icon: "📝", title: "Intent-Driven Automation", description: "Describe desired outcomes in Markdown, not implementation steps" },
    { icon: "🔐", title: "Security-First Design", description: "Sandboxed agents with read-only access by default — write requires explicit declaration" },
    { icon: "🎯", title: "Adaptive Intelligence", description: "Make decisions based on repository state: code structure, issue context, PR relationships" },
    { icon: "🔄", title: "Continuous Improvement", description: "Daily automated enhancements that compound over time — code simplifications, docs updates" }
  ]'
  :insight='{ icon: "🎯", text: "Agentic workflows let you describe what you want, not how to do it — AI handles the implementation within safe, sandboxed boundaries." }'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The Shift -->
<BeforeAfterPanelsSlide
  :partNumber="1"
  pillIcon="🔄"
  pillLabel="The Shift"
  title="From Prescriptive to Intent-Driven Automation"
  :before='{
    header: "Prescriptive Automation",
    items: [
      "Write exact steps in YAML",
      "Account for every branch and edge case",
      "Update workflow when requirements change",
      "Deterministic: same input, same output",
      "Cannot adapt to context or make judgments"
    ]
  }'
  :after='{
    header: "Intent-Driven Automation",
    items: [
      "Describe desired outcome in natural language",
      "AI adapts to repository context",
      "Workflow learns from repository state",
      "Context-sensitive: AI decides best path",
      "Judgment calls based on code, issues, PRs"
    ]
  }'
  :insight='{ icon: "💡", text: "Write what, not how — AI figures out the path within safe, sandboxed boundaries." }'
  :progressDots='{ current: 2, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — Core Architecture -->

<SectionOpenerSlide
  :partNumber="2"
  title="Core Architecture"
  subtitle="Markdown → Secure YAML compilation"
  :cards='[
    { icon: "📝", title: "Author in Markdown", blurb: "Natural language workflow definitions" },
    { icon: "🔒", title: "Compile to YAML", blurb: "Secure lock files with isolation" },
    { icon: "⚡", title: "Execute Safely", blurb: "Read-only AI + validated handlers" },
  ]'
  :terminal='{ context: "Three-phase workflow execution", detail: "authoring → compilation → execution" }'
/>

---

<!-- SLIDE: Three-Phase Architecture -->
<ThreeColumnCardSlide
  :partNumber="2"
  pillIcon="🏗️"
  pillLabel="Core Architecture"
  title="How Agentic Workflows Execute"
  :columns='[
    { icon: "1️⃣", title: "Authoring", description: "Define workflows in Markdown with frontmatter triggers and safe-output declarations", items: ["Triggers: schedule, events", "Read-only permissions", "Safe-output declarations", "Natural language instructions"] },
    { icon: "2️⃣", title: "Compilation", description: "gh aw compile parses the Markdown and generates a secure YAML lock file", items: ["Parse frontmatter & body", "Generate secure YAML", "Agent job (read-only)", "Handler jobs (minimal write)"] },
    { icon: "3️⃣", title: "Execution", description: "Agent explores repo context, outputs JSON, handlers validate and execute", items: ["Agent explores repo", "Produces JSON output", "Handlers validate & sanitize", "Execute approved ops"] }
  ]'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Markdown to YAML Example -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="🏗️"
  pillLabel="Core Architecture"
  title="Workflow Example: Simple Issue Triage in Markdown"
  codePosition="top"
  :code='{
    language: "yaml",
    filename: ".github/workflows/triage.md",
    content: "---\non:\n  issues:\n    types: [opened]\npermissions:\n  contents: read\n  issues: write\nsafe-outputs:\n  add-labels:\n    allowed: [bug, feature, docs]\n    max: 3\n---\n\n## Issue Triage Workflow\nAnalyze new issues and apply appropriate labels.\n\n### Instructions\n1. Read the issue title and body\n2. Identify the issue type\n3. Apply 1-3 relevant labels\n4. If unclear, ask for clarification"
  }'
  :features='[
    { icon: "⚡", title: "Trigger", description: "Fires on issues: [opened] — new issues only" },
    { icon: "🔒", title: "Security", description: "Read-only access by default, add-labels safe output with max 3 limit" },
    { icon: "📝", title: "Intent", description: "Natural language instructions: read issue, identify type, apply labels" }
  ]'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Execution Flow -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Execution Flow"
  title="Secure Execution Model: AI Decides, Handlers Execute"
  :left='{
    header: "Agent Job (Read-Only)",
    icon: "🤖",
    items: [
      { title: "1. Spin up isolated container", detail: "Sandboxed environment, no write access" },
      { title: "2. Load AI agent", detail: "Copilot, Claude, or compatible model" },
      { title: "3. Provide read-only tools", detail: "Repository exploration only" },
      { title: "4. Agent explores repo context", detail: "Code, issues, PRs, history" },
      { title: "5. Produces structured JSON output", detail: "Decision handed to handlers" }
    ]
  }'
  :right='{
    header: "Safe-Output Handlers",
    icon: "✅",
    items: [
      { title: "1. Receive agent JSON output", detail: "Structured decision from read-only agent" },
      { title: "2. Validate schema & permissions", detail: "Schema check before any action" },
      { title: "3. Sanitize inputs", detail: "Escape XML, validate URLs, check domains" },
      { title: "4. Enforce limits", detail: "Max operations, expiration, rate limits" },
      { title: "5. Execute approved operations", detail: "Log every action with audit markers" }
    ]
  }'
  :insight='{ icon: "🔒", text: "Zero write access for the agent — only validated handlers touch the repository." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Part 3 — Safe Outputs -->

<SectionOpenerSlide
  :partNumber="3"
  title="Safe Outputs"
  subtitle="Security-first write operations"
  :cards='[
    { icon: "🔒", title: "Declared Operations", blurb: "Pre-approved write operations" },
    { icon: "🛡️", title: "Validation Pipeline", blurb: "Sanitize, rate-limit, domain-check" },
    { icon: "📝", title: "Audit Trail", blurb: "Every action logged with markers" },
  ]'
  :terminal='{ context: "AI decides, validated handlers execute", detail: "security through separation of concerns" }'
/>

---

<!-- SLIDE: Safe Output Types -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Safe Outputs</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 1</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Available Operations</div>
<div class="text-xs text-white/50">Pre-approved write operations with configurable guardrails</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-base font-bold text-indigo-300 mb-1">Issues</div>
<div class="text-xs text-gray-300">Create, update, close, link sub-issues</div>
<div class="mt-1 text-xs font-mono text-indigo-400">Auto-expiration, grouping, cross-repo</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30">
<div class="text-base font-bold text-purple-300 mb-1">Pull Requests</div>
<div class="text-xs text-gray-300">Create, update, push commits, request reviews</div>
<div class="mt-1 text-xs font-mono text-purple-400">Draft mode, base branch, CI triggering</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-rose-900/40 rounded-lg border border-pink-500/30">
<div class="text-base font-bold text-pink-300 mb-1">Comments</div>
<div class="text-xs text-gray-300">Add comments, hide spam</div>
<div class="mt-1 text-xs font-mono text-pink-400">Max limits, workflow markers</div>
</div>
<div class="p-3 bg-gradient-to-br from-rose-900/40 to-red-900/40 rounded-lg border border-rose-500/30">
<div class="text-base font-bold text-rose-300 mb-1">Labels & Assignments</div>
<div class="text-xs text-gray-300">Add/remove labels, assign reviewers, milestones</div>
<div class="mt-1 text-xs font-mono text-rose-400">Allowed lists, max operations</div>
</div>
</div>
<div class="space-y-2">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-lg border border-blue-500/30">
<div class="text-base font-bold text-blue-300 mb-1">Code Review</div>
<div class="text-xs text-gray-300">Add review comments, submit reviews, resolve threads</div>
<div class="mt-1 text-xs font-mono text-blue-400">APPROVE, REQUEST_CHANGES, COMMENT</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-base font-bold text-indigo-300 mb-1">Projects</div>
<div class="text-xs text-gray-300">Create projects, update items, post status updates</div>
<div class="mt-1 text-xs font-mono text-indigo-400">Requires PAT token, v2 projects only</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30">
<div class="text-base font-bold text-purple-300 mb-1">Workflow Orchestration</div>
<div class="text-xs text-gray-300">Dispatch other workflows</div>
<div class="mt-1 text-xs font-mono text-purple-400">Orchestrator-worker pattern, no loops</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-fuchsia-900/40 rounded-lg border border-pink-500/30">
<div class="text-base font-bold text-pink-300 mb-1">Noop (Critical!)</div>
<div class="text-xs text-gray-300">Signal "no action needed"</div>
<div class="mt-1 text-xs font-mono text-pink-400">#1 failure mode: always include noop</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Agent Factory Patterns -->

<SectionOpenerSlide
  :partNumber="4"
  title="Agent Factory Patterns"
  subtitle="100+ proven workflow patterns"
  :cards='[
    { icon: "🏭", title: "Peli’s Factory", blurb: "100+ specialized workflows tested continuously" },
    { icon: "🎯", title: "Specialization Wins", blurb: "Many focused agents > one monolithic agent" },
    { icon: "🔄", title: "Continuous Patterns", blurb: "Daily improvements that compound over time" },
  ]'
  :terminal='{ context: "Repository-level AI automation is transformative", detail: "embedded agents have outsized impact" }'
/>

---

<!-- SLIDE: Proven Patterns -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏭 Agent Factory Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2 text-xs">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-4">
<div class="text-lg font-bold text-white mb-0.5">Proven Patterns from the Factory</div>
<div class="text-xs text-white/50">Real patterns tested continuously in github/gh-aw repository</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30">
<div class="text-base font-bold text-purple-300 mb-2">🔄 Continuous Simplicity</div>
<div class="text-xs text-gray-300 mb-2">Daily scan for code simplification opportunities</div>
<div class="text-xs text-purple-400/70">→ Create PR with suggestions</div>
<div class="text-xs text-purple-400/70">→ Small daily improvements compound</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-rose-900/40 rounded-lg border border-pink-500/30">
<div class="text-base font-bold text-pink-300 mb-2">📚 Continuous Documentation</div>
<div class="text-xs text-gray-300 mb-2">Detect outdated docs when code changes</div>
<div class="text-xs text-pink-400/70">→ PR updating docs to match code</div>
<div class="text-xs text-pink-400/70">→ Maintains code-docs consistency</div>
</div>
<div class="p-3 bg-gradient-to-br from-rose-900/40 to-red-900/40 rounded-lg border border-rose-500/30">
<div class="text-base font-bold text-rose-300 mb-2">🎯 Issue Group Management</div>
<div class="text-xs text-gray-300 mb-2">Parent issue with linked sub-issue tasks</div>
<div class="text-xs text-rose-400/70">→ Track sub-issue completion</div>
<div class="text-xs text-rose-400/70">→ Auto-close parent when all resolved</div>
</div>
</div>
<div class="space-y-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-base font-bold text-indigo-300 mb-2">🔀 Orchestrator-Worker</div>
<div class="text-xs text-gray-300 mb-2">Coordinator dispatches specialized workers</div>
<div class="text-xs text-indigo-400/70">→ Workers run tasks in parallel</div>
<div class="text-xs text-indigo-400/70">→ Orchestrator synthesizes results</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 rounded-lg border border-purple-500/30">
<div class="text-base font-bold text-purple-300 mb-2">🔍 Meta-Workflows</div>
<div class="text-xs text-gray-300 mb-2">Workflows that monitor other workflows</div>
<div class="text-xs text-purple-400/70">→ Analyze logs, performance, failures</div>
<div class="text-xs text-purple-400/70">→ Self-optimizing automation system</div>
</div>
<div class="p-3 bg-gradient-to-br from-fuchsia-900/40 to-pink-900/40 rounded-lg border border-fuchsia-500/30">
<div class="text-base font-bold text-fuchsia-300 mb-2">📊 Analytics & Reports</div>
<div class="text-xs text-gray-300 mb-2">Read-only monitoring and insights</div>
<div class="text-xs text-fuchsia-400/70">→ Daily/weekly repository reports</div>
<div class="text-xs text-fuchsia-400/70">→ Trend analysis, contributor stats</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Use Case — Issue Triage -->
<FourCardGridSlide
  :partNumber="4"
  pillIcon="💡"
  pillLabel="Real-World Use Case"
  title="Issue Triage Automation"
  :cards='[
    { icon: "❌", title: "The Problem", description: "Dozens of new issues weekly, manual labeling is tedious, inconsistent categorization wastes maintainer time" },
    { icon: "📝", title: "The Workflow", description: "Trigger: issues opened. Safe-outputs: add-labels (max 3). Natural language instructions to read issue and apply labels" },
    { icon: "✅", title: "The Value", description: "Instant triage on every issue, consistent labeling patterns, maintainers focus on substance not admin" },
    { icon: "🔍", title: "Example Decisions", description: "App crashes on startup → bug. Add dark mode → feature. How do I configure X? → question, docs" }
  ]'
  :insight='{ icon: "🎯", text: "Agentic workflows turn tedious admin into instant, consistent automation — maintainers focus on substance while AI handles categorization." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Mental Model Shift -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🧠"
  pillLabel="Mental Model Shift"
  title="Core Insight: Express Intent, Let AI Adapt"
  :columns='[
    { icon: "✅", title: "Move Toward", items: ["Natural language instructions", "Context-aware decisions", "Read-only by default", "Safe-output validation", "Human-in-the-loop (draft PRs)", "Specialized workflows", "Continuous improvement", "Meta-workflows"] },
    { icon: "⚠️", title: "Move Away From", items: ["Complex YAML workflows", "Deterministic-only logic", "Manual triage & coordination", "One-size-fits-all agents", "Unlimited agent permissions", "Set-and-forget automation"] },
    { icon: "🛑", title: "Stop Doing", items: ["AI direct write access", "Ignoring noop pattern", "Skipping lock file compilation", "Manually editing lock files", "Triggering on every commit"] }
  ]'
  :insight='{ icon: "💡", text: "Express intent without implementation details — AI adapts to repository context." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="From YAML to Intent-Driven Automation"
:leftItems='["Manual YAML authoring", "Complexity: 50%+", "Deployment: hours", "Audit trail: incomplete"]'
:rightItems='["Natural language intent", "Complexity: 50% reduction", "Deployment: minutes", "Audit trail: comprehensive"]'
:metrics='[
  { value: "50%+", detail: "Complexity reduction" },
  { value: "hours → min", detail: "Deployment acceleration" },
  { value: "Full coverage", detail: "Audit trail" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Install gh-aw CLI extension", "Create your first workflow", "Add instructions and safe-outputs", "Compile and deploy"]'
  :thisWeek='["Explore Peli&#39;s Agent Factory", "Study Safe Outputs reference", "Review example workflows", "Understand the security model"]'
  :thisMonth='["Create 3-5 specialized workflows", "Implement orchestrator pattern", "Build continuous improvement loop", "Try AgentCouncil for multi-agent decisions"]'
  footer="From installation to first workflow in 15 minutes — master Safe Outputs and the Noop pattern first, then build specialized agents and orchestrators for production-ready automation."
/>


---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Official Documentation", color: "cyan", items: [
        { href: "https://github.github.com/gh-aw/introduction/overview/", label: "Introduction & Overview", description: "Overview of GitHub Agentic Workflows" },
        { href: "https://github.github.com/gh-aw/introduction/architecture/", label: "Security Architecture", description: "Sandboxed agents, validated write operations" },
        { href: "https://github.github.io/gh-aw/reference/safe-outputs/", label: "Safe Outputs Reference", description: "Pre-approved write operations and guardrails" },
        { href: "https://github.github.com/gh-aw/setup/quick-start/", label: "Quick Start Guide", description: "From installation to first workflow" }
    ] },
    { title: "Key Resources", color: "purple", items: [
        { href: "https://github.github.com/gh-aw/blog/2026-01-12-agent-factory/", label: "Peli&#39;s Agent Factory Blog", description: "100+ proven workflow patterns tested continuously" },
        { href: "https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows/", label: "Meet the Workflows", description: "Walkthrough of real production patterns" },
        { href: "https://github.blog/ai-and-ml/automate-repository-tasks-with-agentic-workflows/", label: "GitHub Blog Announcement", description: "Official announcement and overview" },
        { href: "https://josh-ops.com/posts/github-agentic-workflows/", label: "Community Examples", description: "Community-contributed workflow examples" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="GitHub Agentic Workflows: Repository Automation with AI Agents"
:cards="[
  { icon: '📝', value: 'Intent-Driven', detail: 'Markdown → Automation', subdetail: 'Natural language workflow definition' },
  { icon: '🔒', value: 'Security-First', detail: 'Sandboxed + Validated', subdetail: 'Hook system enforces guardrails' },
  { icon: '🏭', value: '100+ Patterns', detail: 'Proven at Scale', subdetail: 'Production-ready templates' },
]"
prompt="Questions? Let's discuss how to bring agent capabilities to your workflows"
codeLabel="Start with"
codeSnippet="gh extension install github/gh-aw"
/>
