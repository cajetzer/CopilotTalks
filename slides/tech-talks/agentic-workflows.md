---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Agentic Workflows
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Agentic Workflows
module: tech-talks/agentic-workflows
mdc: true
section: Agentic Engineering
status: active
updated: 2026-04-22
---

<script setup>
import TitleSlide from './components/structure/TitleSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import ProblemSolutionOutcomeSlide from './components/ProblemSolutionOutcomeSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
import WorkflowShowdownStepsSlide from './components/WorkflowShowdownStepsSlide.vue'
import AITerminalTranscriptSlide from './components/AITerminalTranscriptSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="GitHub Agentic Workflows"
  subtitle="Repository Automation with AI Agents"
  tagline="Write repository automation in natural language, execute with security-first AI agents."
  meta="CopilotTraining Tech Talk"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="What if repository automation could adapt to context instead of breaking on it?"
  subtext="YAML workflows are deterministic and brittle — they execute steps, not intent."
  highlight="Agentic Workflows compile natural-language Markdown into security-enforced GitHub Actions."
  :cards='[
    { icon: "🔧", title: "Platform Engineer", description: "Ship workflow automation without hardcoding every edge case in YAML" },
    { icon: "🛡️", title: "Security Lead", description: "Every agentic action runs in a read-only sandbox with compiler-enforced permissions" },
    { icon: "👥", title: "Engineering Manager", description: "100+ production-validated workflow patterns available on day one" },
    { title: "30 lines → 8 lines", description: "YAML workflow reduced to natural-language Markdown intent — compile gets you the rest" },
    { title: "Zero direct writes", description: "AI runs read-only; all mutations flow through validated safe-output handlers" },
    { title: "100+ patterns in production", description: "Peli de Halleux&#39;s Agent Factory: validated reality, not demo-ware" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🎯", title: "The Opportunity",   subtitle: "Intent-driven vs. stepwise automation", blurb: "30-line YAML reduced to 8-line Markdown intent", slide: 4 },
    { icon: "⚙️", title: "Core Architecture", subtitle: "Markdown → compile → lock.yml pipeline", blurb: "The lock file is generated — you never touch it", slide: 7 },
    { icon: "🛡️", title: "Safe Outputs",      subtitle: "Compiler-enforced security, not author discipline", blurb: "Seven output types, read-only AI sandbox, validation pipeline", slide: 12 },
    { icon: "🏭", title: "Agent Factory",      subtitle: "100+ patterns running in production", blurb: "Issue triage, CI diagnostics, daily status, AgentCouncil", slide: 16 }
  ]'
/>

---

<!-- SLIDE: Part 1 — The Opportunity -->
<SectionOpenerSlide
  :partNumber="1"
  title="The Opportunity"
  subtitle="YAML workflows execute steps. Agentic Workflows execute intent — and adapt when context demands it."
  :cards='[
    { icon: "🔗", title: "YAML Brittle Points", blurb: "Edge cases require new conditionals, not judgment" },
    { icon: "✍️", title: "Write Intent, Not Steps", blurb: "Natural-language Markdown replaces imperative YAML" },
    { icon: "⚡", title: "30 → 8 Lines",           blurb: "Same automation, fraction of the code" }
  ]'
  :terminal='{ context: "Setup time: install extension, write first workflow, push to Actions", detail: "gh extension install github/gh-aw — minutes to first run" }'
/>

---

<!-- SLIDE: YAML vs Markdown Intent -->
<WorkflowShowdownStepsSlide
  :partNumber="1"
  pillIcon="🔄"
  pillLabel="The Opportunity · The Shift"
  title="YAML Automation vs. Intent-Driven Agentic Workflows"
  subtitle="Same outcome, fundamentally different authoring model"
  leftLabel="Traditional YAML Workflow"
  rightLabel="Agentic Workflow"
  :steps='[
    { left: { label: "Define every step explicitly", note: "if/else for each edge case the author anticipated" }, right: { label: "Write what success looks like", note: "AI agent interprets context and decides the path" } },
    { left: { label: "Code conditionals for context", note: "Bug? Feature? Docs? Needs a conditional per type" }, right: { label: "Agent reads the issue", note: "Classifies, labels, responds — no explicit branching" } },
    { left: { label: "30 lines of YAML", note: "Plus secrets, permissions, conditionals, error handling" }, right: { label: "8 lines of Markdown", note: "Frontmatter + natural-language instructions" } },
    { left: { label: "Breaks on unhandled cases", note: "Anything outside the script fails silently or errors" }, right: { label: "Adapts to repository context", note: "AI makes judgment calls — novel cases handled gracefully" } }
  ]'
  :outcomeLeft='{ icon: "🔄", label: "Maintenance burden grows with every new edge case" }'
  :outcomeRight='{ icon: "✓", label: "Same 8-line workflow handles new cases automatically" }'
  summaryMetric="Write intent, not steps — 30-line YAML → 8-line Markdown"
  :progressDots='{ current: 1, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: When to Use Agentic vs Traditional -->
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Opportunity · Decision"
  title="Agentic vs. Traditional Workflows: The Right Tool"
  :left='{
    header: "Use Agentic Workflows",
    icon: "✅",
    items: [
      { title: "Requires judgment or context", detail: "Issue triage, code quality review, progress synthesis" },
      { title: "Adaptive decision-making", detail: "Recommendations that vary based on what the agent finds" },
      { title: "Natural language input/output", detail: "Converting issue comments to labels, generating reports" },
      "Complements traditional CI/CD — not a replacement"
    ]
  }'
  :right='{
    header: "Use Traditional Actions",
    icon: "⚙️",
    items: [
      { title: "Deterministic, repeatable steps", detail: "Build, test, deploy, static analysis" },
      { title: "No context-awareness needed", detail: "Run test suite — same steps every time" },
      { title: "High-volume, low-cost operations", detail: "Lint checks, format verification, compilation" },
      "Use both: CI/CD in Actions, &#39;Continuous AI&#39; in agentic workflows"
    ]
  }'
  :progressDots='{ current: 2, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — Core Architecture -->
<SectionOpenerSlide
  :partNumber="2"
  title="Core Architecture"
  subtitle="Three phases: author Markdown, compile to lock.yml, execute in sandboxed runner."
  :cards='[
    { icon: "✍️", title: "Author", blurb: "Markdown with frontmatter: triggers, permissions, tools, safe-outputs" },
    { icon: "🔨", title: "Compile", blurb: "gh aw compile transforms Markdown into a security-enforced lock.yml" },
    { icon: "🚀", title: "Execute", blurb: "Read-only AI sandbox → structured JSON → validation → safe-output handlers" }
  ]'
  :terminal='{ context: "The lock file is a generated artifact — the compiler enforces security", detail: "gh aw compile my-workflow.md → .github/workflows/my-workflow.lock.yml" }'
/>

---

<!-- SLIDE: The Three-Phase Pipeline -->
<ThreeColumnCardSlide
  :partNumber="2"
  pillIcon="🔄"
  pillLabel="Core Architecture · Pipeline"
  title="Three-Phase Pipeline: Author → Compile → Execute"
  :columns='[
    { icon: "✍️", title: "Author", description: "Write a Markdown file with YAML frontmatter for triggers, permissions, tools, and safe-outputs declarations", items: ["Triggers: issues, schedule, manual", "Minimal permissions declared", "Natural-language instructions in body"] },
    { icon: "🔨", title: "Compile", description: "gh aw compile transforms your Markdown into a security-enforced .lock.yml — a generated artifact you never edit", items: ["Agent job: read-only sandbox", "Handler jobs: minimal write permissions", "Audit trail markers injected"] },
    { icon: "🚀", title: "Execute", description: "AI runs in isolated container, produces structured JSON, validation pipeline fires, safe-output handlers execute", items: ["AI has zero write access", "Every output validated before execution", "workflow-id markers on all outputs"] }
  ]'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Workflow Authoring in Markdown -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="✍️"
  pillLabel="Core Architecture · Authoring"
  title="A Workflow Definition: Frontmatter + Natural Language"
  codePosition="left"
  :code='{ language: "markdown", filename: ".github/workflows/issue-triage.md", content: "---\non:\n  issues:\n    types: [opened]\npermissions:\n  contents: read\n  issues: write\ntools:\n  github:\n    toolsets: [issues, labels]\nsafe-outputs:\n  add-labels:\n    allowed: [bug, feature, docs]\n    max: 3\n  add-comment:\n    max: 1\n---\n\nAnalyze new issues and apply labels.\nIf no action needed, call noop." }'
  :features='[
    { icon: "📥", title: "Event triggers", description: "issues, schedule, workflow_dispatch, or any GitHub event" },
    { icon: "🔒", title: "Minimal permissions", description: "Declare only what handlers need — AI gets read-only regardless" },
    { icon: "✅", title: "Safe-outputs declared", description: "Only declared output types can be called — compiler enforces at compile time" }
  ]'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: The Lock File Reveal -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🔐"
  pillLabel="Core Architecture · The Lock File"
  title="The Lock File: Security Enforced by the Compiler"
  :left='{
    header: "Your Markdown Source",
    icon: "✍️",
    items: [
      "8 lines of intent",
      "Triggers, permissions, safe-outputs",
      "Natural-language instructions",
      { title: "You edit this", detail: "Human-readable, version-controlled" }
    ]
  }'
  :right='{
    header: "Generated Lock File",
    icon: "🔨",
    items: [
      "Full GitHub Actions YAML",
      "Agent job: read-only sandbox container",
      "Handler jobs: scoped write permissions per safe-output",
      { title: "Never edit this", detail: "Generated artifact — linguist-generated=true, merge=ours" }
    ],
    code: { language: "bash", content: "gh aw compile issue-triage" }
  }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Execution & Audit Trail -->
<FourCardGridSlide
  :partNumber="2"
  pillIcon="🚀"
  pillLabel="Core Architecture · Execution"
  title="Execution Guarantees: Sandbox, Validate, Execute, Audit"
  :cards='[
    { icon: "📦", title: "Isolated Sandbox",     description: "AI runs in Ubuntu slim container with read-only GitHub API access — zero write capability" },
    { icon: "✅", title: "Validation Pipeline",   description: "Schema check → sanitize inputs → permission check → rate limit → execute — every output inspected" },
    { icon: "📝", title: "Minimal Handler Scope", description: "Each safe-output handler has only the permission it needs — create-issue gets issues:write, nothing else" },
    { icon: "🔍", title: "Audit Trail",           description: "Hidden workflow-id markers in every output — searchable across issues, PRs, comments" }
  ]'
  :insight='{ icon: "💡", text: "Security is enforced by the compiler — not by the author&#39;s discipline or code review." }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>
---

<SectionOpenerSlide
  :partNumber="3"
  title="Safe Outputs"
  subtitle="Security enforced by the compiler, not author discipline — the enterprise trust unlock."
  :cards='[
    { icon: "🔒", title: "Read-Only Sandbox",   blurb: "AI agent has zero write permissions — structured JSON only" },
    { icon: "✅", title: "Validation Pipeline", blurb: "Schema check → sanitization → rate limiting → permission check" },
    { icon: "📋", title: "Seven Output Types",  blurb: "Issues, PRs, Comments, Labels, Projects, Code Review, Security Advisories" }
  ]'
  :terminal='{ context: "Every agentic action is auditable — workflow-id markers on all outputs", detail: "Zero direct writes from AI \u2014 every mutation is validated and scoped" }'
/>

---

<!-- SLIDE: The Safe Output Lifecycle -->
<ProblemSolutionOutcomeSlide
  :partNumber="3"
  pillIcon="🔄"
  pillLabel="Safe Outputs · How It Works"
  title="The Safe Output Lifecycle: Declare, Request, Validate, Execute"
  :problem='{
    header: "The Tension",
    items: [
      "AI agents need to act on repository state",
      { title: "But AI can be manipulated", detail: "Prompt injection, scope creep, unintended mutations" },
      "Unconstrained write access means unconstrained risk"
    ]
  }'
  :solution='{
    header: "Separation of Concerns",
    items: [
      "AI runs read-only — produces structured JSON requests only",
      "Validation pipeline: schema → sanitize → permission check → rate limit",
      { title: "Handler executes with minimal scope", detail: "create-issue handler has issues:write only, nothing else" }
    ]
  }'
  :outcome='{
    header: "Compiler-Enforced Security",
    items: [
      "Only declared safe-output types can be called at runtime",
      "All inputs XML-escaped, URLs domain-filtered, title-prefix enforced",
      "Audit trail on every output — zero untracked mutations"
    ],
    metrics: [{ value: "0", label: "direct AI writes to repository" }]
  }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Seven Safe Output Types -->
<FrameworkMappingRowsSlide
  :partNumber="3"
  pillIcon="📊"
  pillLabel="Safe Outputs · Type Matrix"
  title="Safe Output Types: Full GitHub Surface, Zero Unscoped Writes"
  subtitle="Six rows covering all seven output types — each with max, expiry, and guardrail options"
  :rows='[
    { label: "Issues",               description: "Create/update/close — title-prefix, labels, expiry, cross-repo",  tag: "issues: write" },
    { label: "Pull Requests",        description: "Create, push commits — draft mode, base-branch, auto-expiry",      tag: "pull-requests: write" },
    { label: "Comments",             description: "Add or hide — rate-limited, sanitized, workflow-id stamped",        tag: "issues: write" },
    { label: "Labels & Assign",      description: "Add/remove labels, assign reviewers — allowed list enforced",       tag: "issues: write" },
    { label: "Projects",             description: "Create Projects v2, update items, post status updates",             tag: "projects: write" },
    { label: "Code Review",          description: "Submit reviews + create/autofix code scanning alerts",              tag: "security-events: write" }
  ]'
  footnote="noop is always available: call it when no action is needed — the #1 fix for silent workflow failures"
  :progressDots='{ current: 2, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: The Noop Pattern -->
<ProblemSolutionOutcomeSlide
  :partNumber="3"
  pillIcon="🚫"
  pillLabel="Safe Outputs · Noop Pattern"
  title="The Noop Pattern: The #1 Runtime Failure Mode and Its Fix"
  :problem='{
    header: "Silent Failure",
    items: [
      { title: "Agent finishes analysis", detail: "No issues found — no action warranted" },
      "Agent doesn&#39;t call any safe-output — workflow job has no output",
      { title: "Workflow fails silently", detail: "No error, no log entry, no indication of what happened" }
    ]
  }'
  :solution='{
    header: "Always Call Noop",
    items: [
      "noop is auto-enabled — always available without declaration",
      { title: "Instruct the agent explicitly", detail: "\"If no action is needed, call noop with an explanation\"" },
      "Agent produces: { \"noop\": { \"message\": \"No issues found: analysis complete\" } }"
    ]
  }'
  :outcome='{
    header: "Full Observability",
    items: [
      "Every run produces an output — no silent completions",
      "noop message captured in workflow logs",
      "Monitoring and alerting can distinguish noop from failure"
    ],
    metrics: [{ value: "100%", label: "of runs produce observable output" }]
  }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — Agent Factory -->
<SectionOpenerSlide
  :partNumber="4"
  title="Agent Factory"
  subtitle="100+ workflow patterns running continuously in production — validated reality, not demo-ware."
  :cards='[
    { icon: "🏭", title: "Peli&#39;s Factory",       blurb: "100+ workflows on github/gh-aw — reactive, scheduled, orchestrator" },
    { icon: "🎬", title: "Three Vignettes",     blurb: "Issue triage, CI diagnostic, daily status — one per persona" },
    { icon: "🏛️", title: "AgentCouncil",        blurb: "Consensus mechanism for high-stakes multi-AI decisions" }
  ]'
  :terminal='{ context: "Pattern types: reactive → scheduled → orchestrator", detail: "Every pattern type has 10+ production examples in github/gh-aw" }'
/>

---

<!-- SLIDE: The Agent Factory Origin -->
<HeroStatSlide
  :partNumber="4"
  pillIcon="🏭"
  pillLabel="Agent Factory · Origin"
  title="Peli&#39;s Agent Factory: Validated Reality, Not Demo-Ware"
  subtitle="100+ specialized workflows running continuously in github/gh-aw production"
  :hero='{ value: "100+", label: "workflows running continuously in production — Peli de Halleux&#39;s Agent Factory on github/gh-aw", source: "" }'
  :supporting='[
    { icon: "⚛️", title: "Reactive workflows", description: "Issue triage, PR review, label application — triggered by repository events" },
    { icon: "🕒", title: "Scheduled workflows", description: "Daily status reports, dependency updates, code simplification runs" },
    { icon: "🎼", title: "Orchestrator workflows", description: "Multi-agent dispatch, CI diagnostic synthesis, cross-repo coordination" },
    { icon: "🤖", title: "Meta-workflows", description: "Agents monitoring other agents — workflow health, performance, self-optimization loops" }
  ]'
  :insight='{ icon: "💡", text: "Key insight: many focused workflows beat one monolithic agent — each excels at a specific task." }'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Issue Triage Vignette -->
<AITerminalTranscriptSlide
  :partNumber="4"
  pillIcon="🎫"
  pillLabel="Agent Factory · Vignette 1"
  title="Issue Triage: Reactive Workflow in Action"
  subtitle="New issue opened — agent classifies, labels, and responds in under 2 minutes"
  :transcript='[
    { type: "prompt",   text: "github-actions[bot] (issue-triage.lock.yml)" },
    { type: "user",     text: "New issue #847: Login button unresponsive on Safari 17" },
    { type: "thinking", label: "🤔 Agent (read-only sandbox):" },
    { type: "response", lines: ["Reading issue body and repository labels...", "Checking for similar open issues...", "Classifying: browser-specific UI bug, priority: medium"] },
    { type: "divider" },
    { type: "response", lines: ["Safe-output request: add-labels [\"bug\", \"safari\", \"ui\"]", "Safe-output request: add-comment with triage summary"] },
    { type: "divider" },
    { type: "outcome",  text: "Labels applied: bug, safari, ui" },
    { type: "outcome",  text: "Comment posted: triage summary with reproduction steps requested" }
  ]'
  footerMetric="Event triggered → classified → labeled → commented: 8-line Markdown workflow"
  :progressDots='{ current: 2, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: CI Diagnostic + Daily Status Vignettes -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🎬"
  pillLabel="Agent Factory · Vignettes 2 + 3"
  title="Two More Patterns: CI Diagnostic and Daily Status Report"
  :columns='[
    { icon: "🔧", title: "CI Failure Diagnostic", description: "Triggered on failed CI run — agent reads logs, synthesizes root cause, creates structured issue", items: ["Reads workflow run logs", "Identifies failure pattern", "Creates labeled issue with analysis", "Links to failing run for human follow-up"] },
    { icon: "📅", title: "Daily Status Report", description: "Scheduled daily — agent synthesizes recent activity into an upbeat team-facing GitHub Issue", items: ["Reads issues, PRs, discussions", "Highlights progress and blockers", "Creates dated status issue", "Auto-expires after 7 days"] },
    { icon: "🏛️", title: "AgentCouncil Integration", description: "High-stakes decisions dispatched to multiple AI agents — consensus required before action is taken", items: ["Orchestrator dispatches workers", "Each agent reasons independently", "Results synthesized to consensus", "Used for security or architectural calls"] }
  ]'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Mental Model Shift -->
<BeforeAfterMetricsSlide
  :partNumber="4"
  pillIcon="🧠"
  pillLabel="Agent Factory · Mental Model"
  title="Describe Outcomes, Not Steps"
  :before='{
    header: "Stepwise Thinking",
    items: [
      { title: "What steps should the workflow run?", detail: "if/else branches, explicit API calls, error handling" },
      "Maintenance: add a new step for every new case",
      "Breaks on edge cases the author did not anticipate",
      { title: "Scales with author discipline", detail: "Quality bounded by who wrote the YAML" }
    ]
  }'
  :after='{
    header: "Outcome Thinking",
    items: [
      { title: "What should success look like?", detail: "Triage this issue and apply appropriate labels" },
      "Maintenance: refine the intent description if results drift",
      "Adapts to novel cases with AI judgment",
      { title: "Scales with the model", detail: "Quality improves as underlying AI improves" }
    ]
  }'
  :metrics='[
    { value: "8 lines", label: "Markdown intent vs. 30-line YAML" },
    { value: "0", label: "conditionals authored for edge cases" },
    { value: "100+", label: "patterns proven in production" }
  ]'
  :insight='{ icon: "🎯", text: "The shift: from how do I script this? to what outcome do I want?" }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="From Brittle YAML Automation to Intent-Driven Agent Workflows"
  :leftItems='["30-line YAML with hardcoded conditionals for every edge case", "Workflow breaks when repository context shifts unexpectedly", "Manual write permissions scattered across workflow steps", "No audit trail linking actions to the AI reasoning that caused them"]'
  :rightItems='["8-line Markdown expressing intent — compiler generates the secure YAML", "AI agent adapts to context at runtime, handles edge cases with judgment", "Compiler-enforced permissions: AI read-only, handlers minimal-scoped", "Every output stamped with workflow-id — full audit trail included"]'
  :metrics='[
    { value: "75%", detail: "less workflow code to author and maintain" },
    { value: "0", detail: "direct AI writes — all actions validated before execution" },
    { value: "100+", detail: "production-validated patterns available on day one" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Run: gh extension install github/gh-aw", "Browse the 100+ pattern catalog at github/gh-aw", "Pick one reactive workflow that matches a current manual task"]'
  :thisWeek='["Write your first workflow in Markdown, compile with gh aw compile", "Test locally with gh aw run before pushing to Actions", "Ship one automated triage or status workflow to production"]'
  :thisMonth='["Build a scheduled workflow for daily repo health reporting", "Add a CI diagnostic workflow that creates structured issues on failure", "Evaluate AgentCouncil patterns for high-stakes decisions in your repo"]'
  footer="Start with gh extension install github/gh-aw — your first agentic workflow runs in minutes, not days."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Resources", color: "cyan", items: [
      { href: "https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/", label: "GitHub Blog: Agentic Workflows announcement", description: "Official introduction to the agentic workflows system and design principles" },
      { href: "https://github.com/github/gh-aw", label: "github/gh-aw — extension and pattern catalog", description: "Install the extension and browse 100+ production workflow patterns" }
    ] },
    { title: "🛠️ Related Talks", color: "purple", items: [
      { label: "Agentic Journey", description: "4-workflow issue-to-PR pipeline using label-driven GitHub Actions" },
      { label: "Agentic SDLC", description: "Level 5 infrastructure: repo topology, PR governance, CI trust manufacturing" },
      { label: "Agent Teams", description: "Multi-agent orchestration with AgentCouncil deliberation patterns" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="GitHub Agentic Workflows"
  subtitle="Repository Automation with AI Agents"
  :cards="[
    { value: '8 lines', detail: 'Write intent in Markdown \u2014 the compiler generates the 30-line secure YAML' },
    { value: '0 writes', detail: 'AI runs read-only \u2014 compiler enforces security, not author discipline' },
    { value: '100+', detail: 'Production-validated patterns in github/gh-aw \u2014 start today' },
  ]"
  prompt="Which repeated manual task in your repository would you automate first with an agentic workflow?"
/>
