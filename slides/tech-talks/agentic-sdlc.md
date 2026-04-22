---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Agentic SDLC
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Agentic SDLC
module: tech-talks/agentic-sdlc
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
import HeroStatSlide from './components/HeroStatSlide.vue'
import WorkflowShowdownStepsSlide from './components/WorkflowShowdownStepsSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import ProblemSolutionOutcomeSlide from './components/ProblemSolutionOutcomeSlide.vue'
import MaturityJourneyRoadmapSlide from './components/MaturityJourneyRoadmapSlide.vue'
import MaturityLevelDrilldownSlide from './components/MaturityLevelDrilldownSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="Agentic SDLC"
  subtitle="Level 5 Infrastructure for AI Velocity"
  tagline="Autonomous delivery infrastructure that grows with agent throughput."
  meta="CopilotTraining Tech Talk"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="What does your repository infrastructure need to handle 15,000 lines/day from agents?"
  subtext="Your review habits, repo topology, and CI pipelines were designed for human throughput."
  highlight="At Level 5, the bottleneck is trust — not writing code."
  :cards='[
    { icon: "🏗️", title: "Architect", description: "Design repo topology and CI pipelines that scale agent throughput 100x" },
    { icon: "🛡️", title: "Platform Engineer", description: "Automate governance gates so 22 manual approvals become 4 human checkpoints" },
    { icon: "📈", title: "Engineering Manager", description: "Understand the 5-level maturity model and where your team sits today" },
    { title: "300 → 15,000 lines/day", description: "Review capacity shift when governance automation replaces manual gates" },
    { title: "3 days → 45 min", description: "Time to production when 3 separate repos collapse into a monorepo" },
    { title: "150 → 3,600 features/year", description: "100x throughput from repo topology + PR governance + CI trust combined" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "📐", title: "AgentRC Maturity Model", subtitle: "5 levels from functional to autonomous", blurb: "Where agent review habits collapse and why", slide: 4 },
    { icon: "🗂️", title: "Repository Topology",   subtitle: "Monorepo vs. polyrepo coordination tax", blurb: "The arithmetic that makes 3 days become 45 minutes", slide: 7 },
    { icon: "🔀", title: "PR Workflows",           subtitle: "Governance pyramid inversion", blurb: "22 manual gates → 4 human checkpoints + 90% automated", slide: 12 },
    { icon: "🏭", title: "Trust Manufacturing",    subtitle: "CI as an agent enablement system", blurb: "10-minute threshold and the L3→L5 implementation roadmap", slide: 17 }
  ]'
/>

---

<!-- SLIDE: Part 1 — AgentRC Maturity Model -->
<SectionOpenerSlide
  :partNumber="1"
  title="AgentRC Maturity Model"
  subtitle="Five levels of repository readiness — from functional scripts to autonomous delivery."
  :cards='[
    { icon: "📊", title: "5-Level Framework", blurb: "L1 functional through L5 autonomous — each unlocks a new capability class" },
    { icon: "⚡", title: "The L3→L5 Breakpoint", blurb: "Where review habits designed for 300 lines/day collapse at 15,000" },
    { icon: "🎯", title: "Your Current Level", blurb: "Concrete checks and changes for each maturity transition" }
  ]'
  :terminal='{ context: "Lines of agent-generated code reviewable per day per engineer at L5", detail: "15,000 lines/day — vs. 300 at L1" }'
/>

---

<!-- SLIDE: AgentRC 5-Level Maturity Model -->
<MaturityJourneyRoadmapSlide
  :partNumber="1"
  pillIcon="📐"
  pillLabel="AgentRC · Maturity Model"
  title="Five Levels of Repository AI Readiness"
  subtitle="Each level unlocks more automation, more speed, and more safety"
  :stages='[
    { label: "L1", name: "Functional",    description: "Reliable scripts and baseline CI — basic automation can run",               icon: "🔧", isTarget: false },
    { label: "L2", name: "Documented",    description: "Explicit conventions agents follow instead of guessing",                   icon: "📖", isTarget: false },
    { label: "L3", name: "Standardized", description: "CI/CD, CODEOWNERS, policy — automation becomes repeatable",                  icon: "⚙️", isTarget: false },
    { label: "L4", name: "Optimized",    description: "MCP tools, custom agents, and skills chain multi-step work",               icon: "🤖", isTarget: false },
    { label: "L5", name: "Autonomous",   description: "Agents as primary producers — end-to-end delivery, minimal oversight",    icon: "🚀", isTarget: true  }
  ]'
  caption="L5 is not a shortcut around L1–L4 — it is the compounding result of them"
  :progressDots='{ current: 1, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The L5 Breakpoint -->
<HeroStatSlide
  :partNumber="1"
  pillIcon="⚡"
  pillLabel="AgentRC · The Breakpoint"
  title="The L5 Breakpoint: Where L3 Review Habits Collapse"
  subtitle="Scarcity shifts from writing code to trusting it at velocity"
  :hero='{ value: "50×", label: "more code to review per day — review habits designed for 300 lines/day collapse at 15,000", source: "" }'
  :supporting='[
    { icon: "✍️", title: "L3 assumption", description: "Humans produce 300 lines/day — line-by-line review is feasible" },
    { icon: "🤖", title: "L5 reality", description: "Agents produce 15,000 lines/day per reviewer — detail review is impossible" },
    { icon: "🔀", title: "What must change", description: "Repo topology, PR governance, and CI speed all need L5-native redesign" },
    { icon: "💡", title: "The insight", description: "Bottleneck shifts from writing code to manufacturing trust at agent velocity" }
  ]'
  :insight='{ icon: "🎯", text: "The bottleneck at Level 5 is not writing code — it is trusting 15,000 lines per day." }'
  :progressDots='{ current: 2, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — Repository Topology -->
<SectionOpenerSlide
  :partNumber="2"
  title="Repository Topology"
  subtitle="The coordination tax is the single largest wall-time killer for multi-repo agent workflows."
  :cards='[
    { icon: "💸", title: "Coordination Tax", blurb: "3 repos × 45-min CI = 3 days to production instead of 45 min" },
    { icon: "🏢", title: "Monorepo Benefits", blurb: "Single atomic commit, shared context, one CI run for the whole change" },
    { icon: "🔀", title: "Migration Path", blurb: "How to restructure without halting delivery — incremental topology shifts" }
  ]'
  :terminal='{ context: "Time to production: 3-repo polyrepo vs. monorepo for one agent change", detail: "3 days → 45 min — same agent work, radically different wall time" }'
/>

---

<!-- SLIDE: The Coordination Tax -->
<BeforeAfterMetricsSlide
  :partNumber="2"
  pillIcon="💸"
  pillLabel="Repository Topology · The Tax"
  title="The Coordination Tax: Same Agent Work, Radically Different Wall Time"
  :before='{
    header: "3-Repo Polyrepo",
    items: [
      { title: "Day 1", detail: "PR in repo A — 45-min CI, 4-hr human review" },
      { title: "Day 2", detail: "PR in repo B — discover contract mismatch, return to A" },
      { title: "Day 3", detail: "Coordinate deploy order, staging fails, debug across repos" },
      { title: "Result", detail: "6 hrs agent work, 3 days coordination, 2 rollbacks" }
    ]
  }'
  :after='{
    header: "Monorepo",
    items: [
      { title: "One atomic PR", detail: "All 3 modules changed in a single commit" },
      { title: "8-min CI", detail: "Affected analysis tests only impacted code" },
      { title: "20-min review", detail: "Outcome validation on the full change at once" },
      { title: "Result", detail: "6 hrs agent work, 2 hrs human time, zero rollbacks" }
    ]
  }'
  :metrics='[
    { value: "96×", label: "faster to production" },
    { value: "0", label: "coordination rollbacks" },
    { value: "45 min", label: "total wall time" }
  ]'
  :insight='{ icon: "💡", text: "Decision rule: if agents touch >1 repo for >30% of features, consolidate into monorepo." }'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Monorepo Structure -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🗂️"
  pillLabel="Repository Topology · Structure"
  title="Agent-Native Monorepo vs. Multi-Repo: When to Use Each"
  :left='{
    header: "Monorepo",
    icon: "✅",
    items: [
      { title: "Atomic cross-module changes", detail: "API + 7 call sites in one PR, not 8 coordinated PRs" },
      { title: "Agent navigation via grep", detail: "One rg command instead of GitHub search across repos" },
      { title: "Unified CI pipeline", detail: "Consistent standards, shared cache, single build graph" },
      "Use when: agents touch 2+ modules for >30% of features"
    ]
  }'
  :right='{
    header: "Multi-Repo (when required)",
    icon: "⚠️",
    items: [
      { title: "Hard access boundaries", detail: "PCI payment processing physically separated from marketing" },
      { title: "Regulatory mandates", detail: "Auditor requires physical separation — not a preference" },
      { title: "Independent lifecycles", detail: "Mobile (6-month releases) + web (daily) truly share nothing" },
      "Not valid: &#39;we&#39;ve always done it this way&#39;"
    ]
  }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Enforced Module Boundaries -->
<ProblemSolutionOutcomeSlide
  :partNumber="2"
  pillIcon="🔒"
  pillLabel="Repository Topology · Boundaries"
  title="Enforced Boundaries: Agents Follow Rules, Not Comments"
  :problem='{
    header: "Suggested Boundaries",
    items: [
      { title: "Code comment conventions", detail: "// @internal - Don&#39;t import this!" },
      "Agents observe import patterns in the codebase — they follow what works, not what comments say",
      "Architectural decay is invisible until production incidents reveal it"
    ]
  }'
  :solution='{
    header: "Build-Time Enforcement",
    items: [
      "nx.json module boundary configuration blocks violations at lint time",
      "tsconfig path mappings enforce import rules before CI runs",
      { title: "CI fails loudly", detail: "&#39;A project tagged scope:data-access cannot depend on scope:payment&#39;" }
    ]
  }'
  :outcome='{
    header: "Architectural Integrity",
    items: [
      "Agents learn boundaries from build failures — clear error messages, not silent drift",
      "Circular dependencies impossible — graph enforced, not suggested",
      "Rules ARE the documentation — no separate architecture docs to go stale"
    ],
    metrics: [{ value: "100%", label: "boundary violations caught before merge" }]
  }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Affected Analysis -->
<BeforeAfterMetricsSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Repository Topology · CI Speed"
  title="Affected Analysis: Test What Changed, Cache the Rest"
  :before='{
    header: "Test Everything",
    items: [
      { title: "npm test", detail: "45 min — runs 1,247 tests" },
      { title: "npm run lint", detail: "12 min — checks 8,932 files" },
      { title: "npm run build", detail: "23 min — rebuilds 47 packages" },
      { title: "Total: 80 min", detail: "Agent productive only 50% of the time" }
    ]
  }'
  :after='{
    header: "Test What Changed",
    items: [
      { title: "nx affected:test", detail: "4 min — runs 89 affected tests" },
      { title: "nx affected:lint", detail: "1 min — checks 234 affected files" },
      { title: "nx affected:build", detail: "3 min — rebuilds 3 affected packages" },
      { title: "Total: 8 min", detail: "Agent productive 95% of the time" }
    ]
  }'
  :metrics='[
    { value: "10×", label: "faster CI" },
    { value: "95%", label: "agent productive time" },
    { value: "5×", label: "features/day per agent" }
  ]'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Part 3 — PR Workflows -->
<SectionOpenerSlide
  :partNumber="3"
  title="PR Workflows"
  subtitle="Governance that was designed for humans cannot scale to agent throughput without automation."
  :cards='[
    { icon: "🔺", title: "Governance Pyramid", blurb: "22 manual approval gates today → 4 human checkpoints after inversion" },
    { icon: "🤖", title: "90% Automated", blurb: "Security, compliance, quality — enforced by policy, not by reading" },
    { icon: "👁️", title: "Human Judgment", blurb: "Architects review what only humans can judge: architecture and intent" }
  ]'
  :terminal='{ context: "Review capacity per engineer after governance automation", detail: "300 lines/day → 15,000 lines/day" }'
/>

---

<!-- SLIDE: Why Traditional PRs Fail at L5 -->
<WorkflowShowdownStepsSlide
  :partNumber="3"
  pillIcon="🔀"
  pillLabel="PR Workflows · The Mismatch"
  title="L3 Review Habits vs. L5 Agent Volume"
  subtitle="Same governance model, 50× the volume — the math doesn&#39;t work"
  leftLabel="L3 PR Review"
  rightLabel="L5 PR Review"
  :steps='[
    { left: { label: "Read every line", note: "50-200 line change, 30-min review" }, right: { label: "Validate intent", note: "500-2000 lines — read requirements, not implementation" } },
    { left: { label: "Discussion threads", note: "&#39;Why did you use a Map on line 47?&#39;" }, right: { label: "Evidence bundle check", note: "Tests passed, security clean, coverage met" } },
    { left: { label: "Manual compliance", note: "Security team reviews every auth change" }, right: { label: "Automated gates", note: "90% of checks automated — humans review exceptions" } },
    { left: { label: "LGTM after 3 hrs", note: "300 lines/day/reviewer capacity" }, right: { label: "Approved after 20 min", note: "15,000 lines/day/reviewer capacity" } }
  ]'
  :outcomeLeft='{ icon: "🔄", label: "4-7 days from PR to merge at L5 volume" }'
  :outcomeRight='{ icon: "✓", label: "2-4 hours from PR to merge" }'
  summaryMetric="50× review capacity increase — same engineers, governance automation does the heavy lifting"
  :progressDots='{ current: 1, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Three PR Models That Scale -->
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="📋"
  pillLabel="PR Workflows · Three Models"
  title="Three PR Models Built for Agent Velocity"
  :columns='[
    { icon: "🎯", title: "Intent-Based PRs", description: "Spec lives in .intent/ folder — reviewers read requirements, agent generates the 1,500 lines", items: ["20 min review vs. 3 hrs", "Approve intent, not implementation", "Request intent clarification, not code changes"] },
    { icon: "📦", title: "Evidence-Bundle PRs", description: "PR contains tests passed, security scan clean, coverage met, staging deployed — reviewers trust the bundle", items: ["All evidence in one PR", "Human asks: is evidence sufficient?", "Not: why did you choose this pattern?"] },
    { icon: "🔒", title: "Policy-Gated PRs", description: "90% of governance automated — security, compliance, architecture, coverage all checked before human sees it", items: ["22 gates → 4 human checkpoints", "1 sign-off after all gates pass", "Auto-merge on low-risk changes"] }
  ]'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Governance Pyramid Inversion -->
<BeforeAfterMetricsSlide
  :partNumber="3"
  pillIcon="🔺"
  pillLabel="PR Workflows · Governance"
  title="Governance Pyramid Inversion: 22 Gates → 4 Human Checkpoints"
  :before='{
    header: "Traditional Governance",
    items: [
      { title: "22 manual approval gates", detail: "Security, compliance, architect, QA, lead — each per PR" },
      "Senior architect reviews every architecture decision",
      "Security team reviews every auth change manually",
      { title: "Result", detail: "4-7 days from PR to merge" }
    ]
  }'
  :after='{
    header: "L5 Governance",
    items: [
      { title: "4 human checkpoints", detail: "Intent validation, security risk, architectural fit, outcome" },
      "90% of checks automated — security, compliance, quality, architecture",
      "Architects review violations and exceptions, not every change",
      { title: "Result", detail: "2-4 hours from PR to merge" }
    ]
  }'
  :metrics='[
    { value: "90%", label: "automated enforcement" },
    { value: "50×", label: "review capacity per engineer" },
    { value: "4 hrs", label: "avg time to merge" }
  ]'
  :insight='{ icon: "💡", text: "Human judgment handles what only humans can judge: architecture, intent, and strategic risk." }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Context-Aware Compliance Validation -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🤖"
  pillLabel="PR Workflows · AI Review"
  title="Context-Aware Validation: Agents Apply Judgment, Not Just Patterns"
  :left='{
    header: "Rules-Based Scan",
    icon: "⚠️",
    items: [
      { title: "847 warnings generated", detail: "regex pattern \"email\" fires on every match" },
      "803 false positives — test fixtures, docs, examples",
      { title: "Developers ignore all warnings", detail: "The signal is lost in the noise" },
      "Actual PII violation ships to production"
    ]
  }'
  :right='{
    header: "Agent Validation",
    icon: "✅",
    items: [
      { title: "44 real warnings generated", detail: "Agent reads context: test fixture vs. production handler" },
      "2 false positives — 97% signal quality",
      { title: "Developers trust the signal", detail: "Every flag comes with reasoning" },
      "Actual violations caught before merge — always"
    ]
  }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — Trust Manufacturing -->
<SectionOpenerSlide
  :partNumber="4"
  title="Trust Manufacturing"
  subtitle="CI is not a quality gate — it is the agent enablement system. Speed and coverage both matter."
  :cards='[
    { icon: "⏱️", title: "10-Minute Threshold", blurb: "Agents idle 80% of the time at 60-min CI, productive 95% at 8-min CI" },
    { icon: "🔒", title: "Safe-Output Validation", blurb: "Every agent output sanitized before shell execution — no injection risk" },
    { icon: "🗺️", title: "L3→L5 Roadmap", blurb: "Three implementation phases architects take back to their teams" }
  ]'
  :terminal='{ context: "Features per day: 60-min CI vs. 8-min CI with agents running continuously", detail: "3 features/day → 15 features/day" }'
/>

---

<!-- SLIDE: CI as Trust Factory -->
<FrameworkMappingRowsSlide
  :partNumber="4"
  pillIcon="🏭"
  pillLabel="Trust Manufacturing · Principles"
  title="Manufacturing Principles Applied to CI"
  subtitle="From quality gate to trust evidence production at agent velocity"
  :rows='[
    { label: "Repeatable",   description: "Same checks, same order, every time — zero variation creates reliable trust signals",                         tag: "Deterministic" },
    { label: "Automated",    description: "327 tests in 8 minutes, 10,000 security patterns in 45 seconds — machines inspect, not humans",              tag: "At Scale" },
    { label: "Evidence",     description: "Every check produces attestations — auditable, reproducible, tamper-evident supply chain records",            tag: "SLSA" },
    { label: "Fast",         description: "<10 min PR checks: agents idle 80% at 60-min CI, productive 95% at 8-min CI — speed is throughput",          tag: "<10 min" },
    { label: "Zero Flake",   description: "Quarantine on first flake, fix within 2 days or disable — green builds must be trustworthy signals",         tag: "100% Signal" }
  ]'
  footnote="The goal: trust that scales linearly with agent output, not quadratically with human review time"
  :progressDots='{ current: 1, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: The 10-Minute Threshold -->
<HeroStatSlide
  :partNumber="4"
  pillIcon="⏱️"
  pillLabel="Trust Manufacturing · The Threshold"
  title="The 10-Minute Threshold: CI Speed = Agent Productivity"
  subtitle="Agents sit idle waiting for CI — the faster the feedback, the higher the throughput"
  :hero='{ value: "5×", label: "more features per day: 60-min CI delivers 3/day, 8-min CI delivers 15/day — same agents", source: "" }'
  :supporting='[
    { icon: "💤", title: "60-minute CI", description: "Agents idle 80% of the time — 4 iteration cycles = 4 hours of wall time" },
    { icon: "⚡", title: "8-minute CI", description: "Agents productive 95% of the time — 4 iteration cycles = 52 minutes" },
    { icon: "🔧", title: "How to get there", description: "Affected analysis + parallelization + caching — test only what changed" },
    { icon: "📈", title: "Cache economics", description: "15th feature costs 2 min CI (cache hit) — marginal trust cost approaches zero" }
  ]'
  :insight='{ icon: "🏭", text: "Target: <10 min for PR checks. Every minute over 10 is agent idle time compounded across 15 PRs/day." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: L3→L5 Implementation Roadmap -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🗺️"
  pillLabel="Trust Manufacturing · Roadmap"
  title="Three-Phase Implementation Roadmap: L3 to L5"
  :columns='[
    { icon: "⚙️", title: "Phase 1: Reach L3", description: "Standardize foundations so automation becomes repeatable and trustworthy", items: ["Add linting, build scripts, README, lockfile", "Set up CODEOWNERS and branch protection", "Achieve <2% CI flake rate", "Timeline: 4-6 weeks"] },
    { icon: "🤖", title: "Phase 2: Reach L4", description: "Add agent tooling and optimize the loops that are now reliable enough to accelerate", items: ["Install MCP servers for CI context", "Enable affected analysis — target <10 min CI", "Deploy policy-gated PR automation", "Timeline: 6-10 weeks"] },
    { icon: "🚀", title: "Phase 3: Operate at L5", description: "Agents become primary producers; humans govern outcomes and exceptions", items: ["Enable intent-based + evidence-bundle PRs", "Achieve 10-15 features/day throughput", "Generate SLSA attestations per release", "Timeline: 8-12 weeks"] }
  ]'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="From Human-Paced SDLC to Agent-Velocity Delivery"
  :leftItems='["Manual triage and review gates designed for 300 lines/day", "3 repos × 45-min CI = 3 days to production per feature", "22 manual approval gates per release", "60-min CI leaves agents idle 80% of the time"]'
  :rightItems='["Automated governance handles 15,000 lines/day per reviewer", "Monorepo: 45-min CI for the same cross-cutting change", "4 human checkpoints + 90% automated policy enforcement", "8-min CI keeps agents productive 95% of the time"]'
  :metrics='[
    { value: "100×", detail: "throughput — 150 features/year → 3,600" },
    { value: "96×", detail: "faster to production — 3 days → 45 min" },
    { value: "5×", detail: "more daily features with 8-min vs. 60-min CI" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Audit your CI pipeline runtime — is it under 10 minutes?", "Count your current manual approval gates per release", "Run AgentRC assessment: which of the 5 levels are you at?"]'
  :thisWeek='["Add safe-output validation to one agent workflow", "Identify the top 3 cross-repo dependencies that slow CI", "Draft your L3 checklist: linting, build scripts, README, lockfile"]'
  :thisMonth='["Reach L3 maturity across your primary repository", "Automate one governance gate that is currently manual", "Map your repo topology and model the coordination tax savings"]'
  footer="The infrastructure investment is front-loaded — the throughput dividend compounds every sprint after."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
      { href: "https://github.com/microsoft/agentrc", label: "Microsoft AgentRC repository", description: "Maturity model specification, readiness assessment tooling, and the measure/generate/maintain loop" },
      { href: "https://github.com/microsoft/agentrc/blob/main/docs/concepts.md", label: "AgentRC concepts and maturity model", description: "Level definitions, readiness pillars, and how autonomy is staged" },
      { href: "https://docs.github.com/en/actions", label: "GitHub Actions documentation", description: "CI/CD workflow automation for PR checks, deploy pipelines, and policy gates" },
      { href: "https://nx.dev/", label: "Nx monorepo tools", description: "Build orchestration, module boundary enforcement, and affected analysis" },
      { href: "https://slsa.dev/", label: "SLSA supply chain security framework", description: "Attestation standards and supply chain trust levels" }
    ] },
    { title: "🛠️ Related Talks", color: "purple", items: [
      { label: "Agentic Journey", description: "Incremental 4-workflow path from issue triage to PR automation — start here before the full SDLC" },
      { label: "Agentic Workflows", description: "GitHub Actions workflow authoring for AI agent pipelines" },
      { label: "Enterprise Patterns", description: "Organization-wide scaling of agentic delivery infrastructure" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="Agentic SDLC"
  subtitle="Level 5 Infrastructure for AI Velocity"
  :cards="[
    { value: '15,000', detail: 'Lines reviewable per day per engineer — 50× the human baseline' },
    { value: '45 min', detail: 'Time to production from 3 days — monorepo eliminates the coordination tax' },
    { value: '3,600', detail: 'Features per year at Level 5 — 100× from topology + governance + CI combined' },
  ]"
  prompt="Which of the three infrastructure pillars — repo topology, PR governance, or CI speed — is your team&#39;s biggest blocker today?"
/>
