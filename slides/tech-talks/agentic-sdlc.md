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
mdc: true
section: Agentic Engineering
status: active
updated: 2026-07-17
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
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="Agentic SDLC"
  subtitle="Two Frameworks, One Journey to Autonomous Delivery"
  tagline="AgentRC readiness + WGLL adoption — the infrastructure and the habits that scale together"
  meta="CopilotTraining Tech Talk"
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "📐", title: "Unified Maturity Model", subtitle: "AgentRC levels + WGLL rings", blurb: "Two frameworks that only work when they advance together", slide: 3 },
    { icon: "🗂️", title: "Repository Topology",   subtitle: "Coordination tax eliminated", blurb: "3 days → 45 min — same agent work, different wall time", slide: 7 },
    { icon: "🔀", title: "PR Workflows",           subtitle: "Governance pyramid inverted", blurb: "22 manual gates → 4 human checkpoints + 90% automated", slide: 12 },
    { icon: "🏭", title: "Trust Manufacturing",    subtitle: "CI as trust factory", blurb: "10-min threshold: agents idle 80% at 60 min, productive 95% at 8 min", slide: 17 },
    { icon: "🗺️", title: "Implementation Roadmap", subtitle: "Three phased actions", blurb: "Infrastructure + habits advancing together at each level", slide: 20 }
  ]'
/>

---

<!-- SLIDE: Part 1 — Unified Maturity Model -->
<SectionOpenerSlide
  :partNumber="1"
  title="Unified Maturity Model"
  subtitle="Two frameworks orient the room — infrastructure readiness and developer adoption must advance together."
  :cards='[
    { icon: "📊", title: "AgentRC Levels", blurb: "L1 Functional → L5 Autonomous — the infrastructure rails agents run on" },
    { icon: "🔄", title: "WGLL Rings", blurb: "Ring 1 platform → Ring 5 measurement — the habits that use those rails" },
    { icon: "⚠️", title: "Mismatch Trap", blurb: "L5 infra + Ring 1 habits still underperforms L3 + Ring 3" }
  ]'
  :terminal='{ context: "Assess → Restructure → Govern → Trust → Scale", detail: "Constraint-ladder: each section solves the bottleneck the previous one exposed" }'
/>

---

<!-- SLIDE: L1–L5 ↔ Ring Mapping Table -->
<FrameworkMappingRowsSlide
  :partNumber="1"
  pillIcon="📐"
  pillLabel="Unified Maturity · Mapping"
  title="L1–L5 ↔ WGLL Ring Mapping"
  subtitle="Rate where your team sits across both dimensions before choosing investments"
  :rows='[
    { label: "L1 Functional",    description: "Copilot licensed, basic IDE setup, reliable CI floor",                                                  tag: "Pre-Ring" },
    { label: "L2 Documented",    description: "copilot-instructions.md exists, Chat in daily use, conventions explicit",                                tag: "Ring 1 entering" },
    { label: "L3 Standardized",  description: "MCP ≥1 system, CCR default, GHAS enabled, CCA delegated work, CI flake <2%",                           tag: "Ring 1–3" },
    { label: "L4 Optimized",     description: "MCP ≥2 enterprise, coding agents in PR flow, org governance deliberate",                                tag: "Ring 2–4" },
    { label: "L5 Autonomous",    description: "Agents own features end-to-end, Metrics API + DORA correlated, ROI narrative produced",                  tag: "Ring 4–5" }
  ]'
  footnote="L5 infrastructure + Ring 1 habits still underperforms L3 infrastructure + Ring 3 habits — maturity must advance on both axes"
  :progressDots='{ current: 1, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The L5 Breakpoint -->
<HeroStatSlide
  :partNumber="1"
  pillIcon="⚡"
  pillLabel="Unified Maturity · Breakpoint"
  title="The Volume Flip: Where Review Habits Collapse"
  subtitle="Scarcity shifts from writing code to trusting it at velocity"
  :hero='{ value: "50×", label: "more code to review per day — habits designed for 300 lines/day collapse at 15,000", source: "" }'
  :supporting='[
    { icon: "✍️", title: "L3 assumption", description: "Humans produce 300 lines/day — line-by-line review is feasible" },
    { icon: "🤖", title: "L5 reality", description: "Agents produce 15,000 lines/day per reviewer — detail review is impossible" },
    { icon: "🔀", title: "What must change", description: "Repo topology, PR governance, and CI speed all need L5-native redesign" },
    { icon: "💡", title: "The architectural insight", description: "The bottleneck is not writing code — it is manufacturing trust at agent velocity" }
  ]'
  :insight='{ icon: "🎯", text: "At L5, scarcity moves from code production to trust production. Every section that follows addresses one layer of that shift." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Instruction Hierarchy -->
<MaturityJourneyRoadmapSlide
  :partNumber="1"
  pillIcon="📜"
  pillLabel="Unified Maturity · Instructions"
  title="The Instruction Hierarchy: Highest-Leverage Cross-Cutting Investment"
  subtitle="One investment that compounds at every maturity level — treat config as first-class code"
  :stages='[
    { label: "Org",   name: "Organization Instructions", description: "GitHub Settings → Copilot → Custom Instructions — applies to Chat, CCR, CCA",  icon: "🏢", isTarget: false },
    { label: "Repo",  name: "copilot-instructions.md",   description: ".github/copilot-instructions.md — coding standards, architecture, patterns",    icon: "📁", isTarget: false },
    { label: "Agent", name: "AGENTS.md",                  description: "Build commands, test patterns, PR conventions — CCA operates like a team member", icon: "🤖", isTarget: false },
    { label: "Task",  name: "Prompt Files",               description: ".github/prompts/*.prompt.md — team&#39;s top repeatable workflows",              icon: "📄", isTarget: false },
    { label: "Code",  name: "Coding Guidelines",          description: "GitHub repo settings → Copilot → Code Review — CCR enforces team standards",     icon: "✅", isTarget: true  }
  ]'
  caption="Version in GitHub repos, review in PRs, evolve alongside the codebase — this is what separates good from excellent"
  :progressDots='{ current: 3, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — Repository Topology -->
<SectionOpenerSlide
  :partNumber="2"
  title="Repository Topology"
  subtitle="You&#39;ve assessed where you are — now the first wall is coordination tax."
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
  pillLabel="Repo Topology · The Tax"
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

<!-- SLIDE: Monorepo vs Multi-Repo -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🗂️"
  pillLabel="Repo Topology · Decision"
  title="Agent-Native Monorepo vs. Multi-Repo: When to Use Each"
  :left='{
    header: "Monorepo (default 80%)",
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
  pillLabel="Repo Topology · Boundaries"
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
  pillLabel="Repo Topology · CI Speed"
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
  subtitle="Coordination is solved — now review capacity is the bottleneck."
  :cards='[
    { icon: "🔺", title: "Governance Pyramid", blurb: "22 manual approval gates → 4 human checkpoints after inversion" },
    { icon: "🤖", title: "90% Automated", blurb: "Security, compliance, quality — enforced by policy, not by reading" },
    { icon: "👁️", title: "Human Judgment", blurb: "Architects review what only humans can judge: architecture and intent" }
  ]'
  :terminal='{ context: "Review capacity per engineer after governance automation", detail: "300 lines/day → 15,000 lines/day" }'
/>

---

<!-- SLIDE: Unified Maturity Context for PR Governance -->
<FrameworkMappingRowsSlide
  :partNumber="3"
  pillIcon="🔀"
  pillLabel="PR Workflows · Maturity Context"
  title="How Review Mode Shifts at Each Level"
  subtitle="PR governance model evolves as both infrastructure and habits advance"
  :rows='[
    { label: "L1 Functional",   description: "Manual verification — humans working against basic tooling, no Copilot habits yet",                                          tag: "Manual" },
    { label: "L2 Documented",   description: "Human review with better context via Copilot Chat — completions + chat habitual",                                             tag: "Assisted" },
    { label: "L3 Standardized", description: "Repeatable gates: CCR automatic on all PRs, branch rulesets, CCA delegated ≥3-5 issues/sprint",                              tag: "Gated" },
    { label: "L4 Optimized",    description: "Context-aware automation + human exception handling — MCP ≥2, org governance deliberate",                                     tag: "Automated" },
    { label: "L5 Autonomous",   description: "Outcome validation: 4 human checkpoints, 90% automated — Metrics API + DORA, ROI narrative, champions active",               tag: "Outcome" }
  ]'
  footnote="Most PR systems feel fine through L1–L4 then break when teams try L5 volume with L3 review habits"
  :progressDots='{ current: 1, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: L3 vs L5 Review Habits -->
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
  :insight='{ icon: "💡", text: "CODEOWNERS + required reviewers + automated status checks — humans judge architecture, intent, and strategic risk." }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Context-Aware Compliance -->
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
  subtitle="Review scales — now you need CI to manufacture trust at velocity."
  :cards='[
    { icon: "⏱️", title: "10-Minute Threshold", blurb: "Agents idle 80% at 60-min CI, productive 95% at 8-min CI" },
    { icon: "🚫", title: "Zero-Flake Tolerance", blurb: "Quarantine on first flake, fix in 2 days — green = trustworthy" },
    { icon: "📜", title: "Attestations", blurb: "SLSA evidence trails for regulated environments and audit" }
  ]'
  :terminal='{ context: "Features per day: 60-min CI vs. 8-min CI with agents running continuously", detail: "3 features/day → 15 features/day" }'
/>

---

<!-- SLIDE: CI Manufacturing Principles -->
<FrameworkMappingRowsSlide
  :partNumber="4"
  pillIcon="🏭"
  pillLabel="Trust Manufacturing · Principles"
  title="Manufacturing Principles Applied to CI"
  subtitle="From quality gate to trust evidence production at agent velocity"
  :rows='[
    { label: "Repeatable",  description: "Same checks, same order, every time — reliable trust signals",              tag: "Deterministic" },
    { label: "Automated",   description: "327 tests in 8 min, 10,000 security patterns in 45 sec",                   tag: "At Scale" },
    { label: "Evidence",    description: "Every check produces auditable, tamper-evident attestations",               tag: "SLSA" },
    { label: "Fast",        description: "Agents idle 80% at 60-min CI, productive 95% at 8-min CI",                 tag: "<10 min" },
    { label: "Zero Flake",  description: "Quarantine on first flake, fix in 2 days — green = trustworthy",           tag: "100% Signal" }
  ]'
  footnote="The goal: trust that scales linearly with agent output, not quadratically with human review time"
  :progressDots='{ current: 1, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: The 10-Minute Threshold -->
<HeroStatSlide
  :partNumber="4"
  pillIcon="⏱️"
  pillLabel="Trust Manufacturing · Threshold"
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
  :progressDots='{ current: 2, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Part 5 — Implementation Roadmap -->
<SectionOpenerSlide
  :partNumber="5"
  title="Implementation Roadmap"
  subtitle="Trust is automated — now you need a phased plan to scale both axes."
  :cards='[
    { icon: "⚙️", title: "Phase 1: Standardized", blurb: "L3 + Rings 1–3 — the launchpad where repeatability first compounds" },
    { icon: "🤖", title: "Phase 2: Optimized", blurb: "L4 + Rings 2–4 — enterprise governance and advanced agent capabilities" },
    { icon: "🚀", title: "Phase 3: Autonomous", blurb: "L5 + Rings 4–5 — agents own features, measurement drives improvement" }
  ]'
  :terminal='{ context: "Both dimensions must advance together", detail: "L3 is the launchpad — skip it and L5 collapses under its own weight" }'
/>

---

<!-- SLIDE: Phase 1 — Standardized Foundation -->
<TwoColPairedConceptsSlide
  :partNumber="5"
  pillIcon="⚙️"
  pillLabel="Roadmap · Phase 1"
  title="Phase 1: Standardized Foundation (L3 + Rings 1–3)"
  :left='{
    header: "Infrastructure (AgentRC L3)",
    icon: "🏗️",
    items: [
      { title: "MCP ≥1 enterprise system", detail: "Internal docs, database schema, or CI feedback connected" },
      { title: "CCR as default reviewer", detail: "Automatic on all PRs in target repositories" },
      { title: "GHAS enabled", detail: "CodeQL, secret scanning, Dependabot on every PR" },
      "Monorepo migration if >30% cross-repo features"
    ]
  }'
  :right='{
    header: "Habits (WGLL Rings 1–3)",
    icon: "🧑‍💻",
    items: [
      { title: "copilot-instructions.md versioned", detail: "Reviewed in PRs like any code change" },
      { title: "Copilot MAU ≥60%", detail: "Chat + completions + CLI habitual, not experimental" },
      { title: "CCA delegated ≥3-5 issues/sprint", detail: "Issue templates structured for agent success" },
      "≥5 custom coding guidelines co-authored with tech lead"
    ]
  }'
  :insight='{ icon: "📜", text: "Instruction Hierarchy: establish org instructions + repo copilot-instructions.md + AGENTS.md — the foundation everything builds on." }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-emerald-400 shadow-lg shadow-emerald-500/50" }'
/>

---

<!-- SLIDE: Phase 2 — Optimized Governance -->
<TwoColPairedConceptsSlide
  :partNumber="5"
  pillIcon="🤖"
  pillLabel="Roadmap · Phase 2"
  title="Phase 2: Optimized Governance (L4 + Rings 2–4)"
  :left='{
    header: "Infrastructure (AgentRC L4)",
    icon: "🏗️",
    items: [
      { title: "MCP ≥2 enterprise systems", detail: "Multi-step orchestration: CCA + MCP + custom instructions" },
      { title: "Coding agents in PR flow", detail: "CCA PR merge rate ≥60%, time to merge trending down" },
      { title: "Org-level governance", detail: "Enterprise Copilot settings deliberate, not defaults" },
      "Policy-gated PR automation deployed"
    ]
  }'
  :right='{
    header: "Habits (WGLL Rings 2–4)",
    icon: "🧑‍💻",
    items: [
      { title: "CCR tuned, false positives <20%", detail: "Custom coding guidelines ≥10, iterated from feedback" },
      { title: "Seat utilization ≥80%", detail: "Inactive seats reallocated; PRU governance in place" },
      { title: "Copilot Memory enabled", detail: "Monthly curation cadence established" },
      "PR review turnaround reduced ≥30% vs. pre-CCR baseline"
    ]
  }'
  :insight='{ icon: "📜", text: "Instruction Hierarchy matures: AGENTS.md + prompt files covering top workflows, coding guidelines tuned from CCR patterns." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-emerald-400 shadow-lg shadow-emerald-500/50" }'
/>

---

<!-- SLIDE: Phase 3 — Autonomous Scale -->
<TwoColPairedConceptsSlide
  :partNumber="5"
  pillIcon="🚀"
  pillLabel="Roadmap · Phase 3"
  title="Phase 3: Autonomous Scale (L5 + Rings 4–5)"
  :left='{
    header: "Infrastructure (AgentRC L5)",
    icon: "🏗️",
    items: [
      { title: "Agents own features end-to-end", detail: "Intent spec → implementation → CI trust → human validation → merge" },
      { title: "Metrics API integrated", detail: "Copilot usage correlated with DORA metrics on team dashboards" },
      { title: "ROI narrative produced", detail: "X% reduction in PR cycle time, Y% increase in deploy frequency" },
      "SLSA attestations generated per release"
    ]
  }'
  :right='{
    header: "Habits (WGLL Rings 4–5)",
    icon: "🧑‍💻",
    items: [
      { title: "Enterprise platform operational", detail: "Admin dashboard, Copilot Spaces with deliberate architecture" },
      { title: "Champions program active", detail: "≥2 power users per team coaching peers and contributing instructions" },
      { title: "Quarterly capability assessments", detail: "Clear next-level targets with self-sufficiency score ≥4/5" },
      "≥4 Copilot modalities in active use across the org"
    ]
  }'
  :insight='{ icon: "🎯", text: "L3 is the launchpad — where repeatability, habits, and quality infrastructure first compound. Skip it and L5 collapses under its own weight." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-emerald-400 shadow-lg shadow-emerald-500/50" }'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Run self-assessment: rate your team on both AgentRC levels and WGLL rings", "Audit CI pipeline runtime — is it under 10 minutes?", "Check Copilot MAU: are ≥60% of licensed seats active?"]'
  :thisWeek='["Version copilot-instructions.md in primary repos; review it in a PR", "Write AGENTS.md and copilot-setup-steps.yml for CCA-enabled repos", "Enable CCR as automatic reviewer on your most active repository"]'
  :thisMonth='["Connect ≥1 MCP server to a valuable enterprise system", "Implement flake quarantine policy and target <2% CI flake rate", "Assign 3-5 well-decomposed issues to CCA and review results as a team"]'
  footer="Infrastructure and habits advance together — L3 is the launchpad, not the destination."
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="Is your SDLC ready for the throughput your agents can deliver?"
  subtext="Two frameworks, one journey — infrastructure readiness and developer adoption must advance together."
  highlight="L5 infrastructure with Ring 1 habits wastes the investment. L3 with Ring 3 outperforms it."
  :cards='[
    { icon: "🏗️", title: "Architect", description: "Design repo topology and CI pipelines that scale agent throughput 100x" },
    { icon: "🛡️", title: "Platform Engineer", description: "Automate governance gates so 22 manual approvals become 4 human checkpoints" },
    { icon: "📈", title: "Engineering Leader", description: "Advance both axes: infrastructure readiness and developer habits in lockstep" },
    { title: "300 → 15,000 lines/day", description: "Review capacity shift when governance automation replaces manual gates" },
    { title: "3 days → 45 min", description: "Time to production when 3 separate repos collapse into a monorepo" },
    { title: "150 → 3,600 features/year", description: "100x throughput from topology + governance + CI trust combined" }
  ]'
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
      { href: "https://github.com/microsoft/agentrc", label: "Microsoft AgentRC repository", description: "Maturity model, readiness assessment tooling, and the measure/generate/maintain loop" },
      { href: "https://github.com/microsoft/agentrc/blob/main/docs/concepts.md", label: "AgentRC concepts and maturity model", description: "Level definitions, readiness pillars, and how autonomy is staged" },
      { href: "https://docs.github.com/en/rest/copilot/copilot-metrics", label: "GitHub Copilot Metrics API", description: "Adoption metrics by modality, language, and team for ROI measurement" },
      { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent", label: "Copilot Coding Agent (CCA)", description: "Setup, copilot-setup-steps.yml, and agent firewall configuration" },
      { href: "https://docs.github.com/en/actions", label: "GitHub Actions documentation", description: "CI/CD workflow automation for PR checks, deploy pipelines, and policy gates" },
      { href: "https://nx.dev/", label: "Nx monorepo tools", description: "Build orchestration, module boundary enforcement, and affected analysis" },
      { href: "https://slsa.dev/", label: "SLSA supply chain security framework", description: "Attestation standards and supply chain trust levels" }
    ] },
    { title: "🛠️ Related Talks", color: "purple", items: [
      { label: "What Good Looks Like (WGLL)", description: "AI-native SDLC on GitHub — five rings of platform adoption and assessment criteria" },
      { label: "Agentic Journey", description: "Incremental 4-workflow path from issue triage to PR automation — start here before full SDLC" },
      { label: "Enterprise Patterns", description: "Organization-wide scaling of agentic delivery infrastructure" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="Agentic SDLC"
  subtitle="Two Frameworks, One Journey to Autonomous Delivery"
  :cards="[
    { value: '15,000', detail: 'Lines reviewable per day per engineer — 50× the human baseline' },
    { value: '45 min', detail: 'Time to production from 3 days — monorepo eliminates the coordination tax' },
    { value: 'L3', detail: 'The launchpad — where repeatability, habits, and quality infrastructure first compound' },
  ]"
  prompt="Which dimension needs more attention in your org — the infrastructure rails or the developer habits riding them?"
/>
