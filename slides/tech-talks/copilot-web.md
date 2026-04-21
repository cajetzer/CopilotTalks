---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## From Issue to Pull Request
  GitHub Copilot's Coding Agent in Practice
drawings:
  persist: false
transition: slide-left
title: From Issue to Pull Request
module: tech-talks/copilot-web
section: Copilot Tools
status: active
updated: 2026-04-06
mdc: true
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
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import ProblemSolutionOutcomeSlide from './components/ProblemSolutionOutcomeSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="From Issue to Pull Request"
subtitle="GitHub Copilot's Coding Agent in Practice"
tagline="What if filing an issue was the same as fixing it?"
meta="Tech Talk · 40 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="What if filing an issue was the same as fixing it?"
subtext="Dependency upgrades, test scaffolding, doc sync — well-understood work stuck in the backlog."
highlight="The coding agent closes the gap between knowing and getting it done."
:cards='[
  { icon: "📱", title: "Developers on Browser or Mobile", description: "Trigger autonomous agent work from GitHub.com — no IDE or local checkout required" },
  { icon: "👔", title: "Engineering Managers Draining Backlogs", description: "Assign well-understood issues to run autonomously while your team stays focused" },
  { icon: "🤝", title: "Teams with Non-Coding Contributors", description: "PMs and designers can delegate implementation directly from a GitHub issue" },
  { title: "Assign an Issue", description: "From browser or mobile — the agent picks it up and starts working immediately" },
  { title: "Agent Implements", description: "Autonomous, sandboxed execution from the issue spec your team already wrote" },
  { title: "Review Draft PR", description: "Evidence-backed implementation with passing tests — ready for your approval" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🔄", title: "Delegation Loop", subtitle: "From assignment to draft PR", blurb: "Asynchronous, evidence-driven", slide: 4 },
    { icon: "✍️", title: "Writing Issues", subtitle: "Specs that produce quality PRs", blurb: "Template-driven, image-capable", slide: 9 },
    { icon: "🔒", title: "Trust & Configuration", subtitle: "Environment setup and firewall", blurb: "Setup before enforcement", slide: 13 },
    { icon: "✅", title: "Review Workflow", subtitle: "Mobile-ready, agents-first", blurb: "4hr → 30min turnaround", slide: 17 },
  ]'
/>
---

<!-- SLIDE: Part 1 — The Delegation Loop -->

<SectionOpenerSlide
  :partNumber="1"
  title="The Delegation Loop"
  subtitle="From Issue Assignment to Draft PR"
  :cards='[
    { icon: "🔄", title: "Three Triggers", blurb: "Browser, VS Code, or mobile — same async session" },
    { icon: "🔬", title: "Sandboxed Execution", blurb: "Ephemeral Ubuntu runner, destroyed after use" },
    { icon: "⚖️", title: "Separation of Duties", blurb: "Assigner cannot approve — enforced by GitHub" },
  ]'
  :terminal='{ context: "Developer involvement begins at code review", detail: "closed loop from issue to reviewable PR" }'
/>
---

<!-- SLIDE: Triggering the Agent -->
<ThreeColumnCardSlide
  :partNumber="1"
  pillIcon="🔄"
  pillLabel="Delegation Loop"
  title="Three Ways to Trigger"
  :columns='[
    { icon: "🌐", title: "GitHub.com", items: ["Open issue → Assignees → select Copilot", "Or type /assigntopilot in a comment"] },
    { icon: "💻", title: "VS Code", items: ["Copilot Chat → @github Create a PR that fixes #427", "Returns immediately — agent works async"] },
    { icon: "📱", title: "GitHub Mobile", items: ["Open issue → tap Assignees → select Copilot", "Trigger from anywhere, review on the go"] }
  ]'
  :insight='{ icon: "💡", text: "All three paths create the same asynchronous session — no need to stay connected while the agent works." }'
/>

---

<!-- SLIDE: Inside the Sandbox -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Delegation Loop</span>
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
<div class="text-lg font-bold text-white mb-1">What Happens Inside the Sandbox</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
<div class="space-y-2">
<div class="p-3 bg-gradient-to-r from-cyan-900/30 to-cyan-800/20 rounded-lg border-l-4 border-cyan-400 flex items-start gap-3">
<div class="text-cyan-400 font-bold text-sm w-5 shrink-0">1</div>
<div class="text-sm">Provision ephemeral <span class="text-cyan-300">Ubuntu runner</span> — fresh for every session</div>
</div>
<div class="p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-lg border-l-4 border-blue-400 flex items-start gap-3">
<div class="text-blue-400 font-bold text-sm w-5 shrink-0">2</div>
<div class="text-sm">Run <span class="text-blue-300 font-mono">copilot-setup-steps.yml</span> — installs deps, configures tooling</div>
</div>
<div class="p-3 bg-gradient-to-r from-indigo-900/30 to-indigo-800/20 rounded-lg border-l-4 border-indigo-400 flex items-start gap-3">
<div class="text-indigo-400 font-bold text-sm w-5 shrink-0">3</div>
<div class="text-sm">Clone repo + read <span class="text-indigo-300">issue, comments, linked PRs, instructions</span></div>
</div>
<div class="p-3 bg-gradient-to-r from-purple-900/30 to-purple-800/20 rounded-lg border-l-4 border-purple-400 flex items-start gap-3">
<div class="text-purple-400 font-bold text-sm w-5 shrink-0">4</div>
<div class="text-sm">Plan + implement across files — may iterate multiple rounds</div>
</div>
</div>
<div class="space-y-2">
<div class="p-3 bg-gradient-to-r from-violet-900/30 to-violet-800/20 rounded-lg border-l-4 border-violet-400 flex items-start gap-3">
<div class="text-violet-400 font-bold text-sm w-5 shrink-0">5</div>
<div class="text-sm">Run <span class="text-violet-300">build, tests, linters</span> — CI pipeline runs inside sandbox</div>
</div>
<div class="p-3 bg-gradient-to-r from-fuchsia-900/30 to-fuchsia-800/20 rounded-lg border-l-4 border-fuchsia-400 flex items-start gap-3">
<div class="text-fuchsia-400 font-bold text-sm w-5 shrink-0">6</div>
<div class="text-sm">Create branch <span class="text-fuchsia-300 font-mono">copilot/issue-NNN</span></div>
</div>
<div class="p-3 bg-gradient-to-r from-pink-900/30 to-pink-800/20 rounded-lg border-l-4 border-pink-400 flex items-start gap-3">
<div class="text-pink-400 font-bold text-sm w-5 shrink-0">7</div>
<div class="text-sm">Open <span class="text-pink-300">draft PR</span> with evidence bundle — never merges itself</div>
</div>
<div class="p-3 bg-gradient-to-r from-rose-900/30 to-rose-800/20 rounded-lg border-l-4 border-rose-400 flex items-start gap-3">
<div class="text-rose-400 font-bold text-sm w-5 shrink-0">8</div>
<div class="text-sm">Destroy runner — no persistent environment, no residual access</div>
</div>
</div>
</div>
<div class="mt-4 text-center text-xs opacity-50">Session log visible in the GitHub Agents tab throughout execution</div>
</div>
</div>

---

<!-- SLIDE: The Evidence Bundle -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="🔄"
  pillLabel="Delegation Loop"
  title="The Evidence Bundle"
  :cards='[
    { icon: "📝", title: "Summary of Changes", description: "What was changed and why, in plain language — rationale for every decision stated before you open the diff" },
    { icon: "✅", title: "Test Results", description: "Pass/fail status from the CI run inside the sandbox — know if the change works before reading the code" },
    { icon: "📁", title: "Files Modified", description: "List of changed files with rationale for each — scoped review before opening the full diff" },
    { icon: "🔥", title: "Firewall Alerts", description: "Any blocked outbound connections — investigate before merging if unexpected calls appear" }
  ]'
  :insight='{ icon: "💡", text: "Reading the evidence bundle takes 2-3 minutes and gives a complete picture of what the agent did — before opening the diff." }'
/>

---

<!-- SLIDE: Separation of Duties -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Delegation Loop</span>
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
<div class="text-lg font-bold text-white mb-1">Separation of Duties</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-4">
<div class="max-w-4xl w-full grid grid-cols-2 gap-4">
<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50">
<div class="text-2xl mb-2 text-center">⚖️</div>
<div class="text-base font-bold text-cyan-300 mb-2 text-center">The Constraint</div>
<div class="text-sm opacity-90 leading-relaxed">The developer who <span class="text-cyan-300 font-semibold">assigned</span> the issue <span class="text-red-400 font-semibold">cannot be the approver</span> of the resulting PR.</div>
<div class="mt-2 text-xs opacity-60">Enforced by GitHub — not configurable, and intentional</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50">
<div class="text-2xl mb-2 text-center">🛡️</div>
<div class="text-base font-bold text-blue-300 mb-2 text-center">Why It Matters</div>
<div class="text-sm opacity-90 leading-relaxed">Every agent-generated change gets a <span class="text-blue-300 font-semibold">second human review</span> before reaching the default branch — regardless of who assigned the task.</div>
<div class="mt-2 text-xs opacity-60">No direct-to-merge path exists, even for repository admins</div>
</div>
</div>
<div class="max-w-4xl w-full p-4 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl border border-indigo-500/20">
<div class="text-sm font-semibold text-center mb-3">Practical Implication for Teams</div>
<div class="grid grid-cols-3 gap-4 text-sm">
<div class="text-center">
<div class="text-xl mb-1">👤</div>
<div class="text-indigo-300 font-medium">Tech Lead</div>
<div class="opacity-70 text-xs">Assigns tasks to Copilot</div>
</div>
<div class="text-center">
<div class="text-xl mb-1">🤖</div>
<div class="text-blue-300 font-medium">Agent</div>
<div class="opacity-70 text-xs">Implements + opens draft PR</div>
</div>
<div class="text-center">
<div class="text-xl mb-1">👥</div>
<div class="text-cyan-300 font-medium">Second Reviewer</div>
<div class="opacity-70 text-xs">Reviews and approves</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Writing Issues That Work -->

<SectionOpenerSlide
  :partNumber="2"
  title="Writing Issues That Work"
  subtitle="Specs That Produce Quality PRs"
  :cards='[
    { icon: "✍️", title: "Issue Anatomy", blurb: "Criteria, scope, context, constraints" },
    { icon: "📸", title: "Image-Based Creation", blurb: "Screenshot → structured issue in 2 minutes" },
    { icon: "⚡", title: "85% Time Savings", blurb: "14 min → 2 min per issue filed" },
  ]'
  :terminal='{ context: "The quality of the agent’s PR is a direct reflection", detail: "of the quality of the issue" }'
/>
---

<!-- SLIDE: Effective Issue Anatomy -->
<BeforeAfterPanelsSlide
  :partNumber="2"
  pillIcon="✍️"
  pillLabel="Writing Issues"
  title="Weak vs. Effective Issues"
  :before='{ header: "Weak — Inconsistent Results", items: ["No acceptance criteria — agent guesses done", "No scope — may change unintended files", "No context links — broad code search, missed files"] }'
  :after='{ header: "Effective — Consistent PRs", items: ["Testable acceptance criteria — pass/fail checkboxes", "Explicit scope sections: In and Out", "Context links + key files referenced", "Constraints naming patterns to follow"] }'
  :insight='{ icon: "💡", text: "4 elements of an effective issue: Criteria, Scope, Context, Constraints — each shapes the quality of the agent PR." }'
/>

---

<!-- SLIDE: Image-Based Issue Creation -->
<ProblemSolutionOutcomeSlide
  :partNumber="2"
  pillIcon="✍️"
  pillLabel="Writing Issues"
  title="Image-Based Issue Creation"
  :problem='{ header: "The Old Way", items: ["Screenshot alert → manually read error", "Transcribe to GitHub → add labels → assign", "~14 minutes per alert", "~60% detail capture — manual transcription misses context"] }'
  :solution='{ header: "With Web Copilot", items: ["Drag screenshot into github.com/copilot", "AI extracts errors, stack traces, timestamps, request IDs", "Structured issue in ~2 minutes", "~95% detail capture via vision model"] }'
  :outcome='{ header: "Time Savings", items: ["8 hrs/week saved at 40 alerts per week"], metrics: [{ value: "85%", label: "Time reduction" }, { value: "14 → 2 min", label: "Per issue filed" }] }'
/>

---

<!-- SLIDE: Part 3 — Trust & Configuration -->

<SectionOpenerSlide
  :partNumber="3"
  title="Trust & Configuration"
  subtitle="Environment Setup and the Agent Firewall"
  :cards='[
    { icon: "📄", title: "Setup Steps", blurb: "copilot-setup-steps.yml controls the environment" },
    { icon: "🛡️", title: "Agent Firewall", blurb: "Default allowlist + custom rules" },
    { icon: "🏢", title: "Config Levels", blurb: "Org and repo-level controls" },
  ]'
  :terminal='{ context: "Setup before enforcement — get the environment right first", detail: "firewall activates after setup steps complete" }'
/>
---

<!-- SLIDE: copilot-setup-steps.yml -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="🔒"
  pillLabel="Trust & Configuration"
  title="Configuring the Agent Environment"
  codePosition="left"
  :code='{ language: "yaml", filename: ".github/workflows/copilot-setup-steps.yml", content: "name: \"Copilot Setup Steps\"\non:\n  workflow_dispatch:\njobs:\n  copilot-setup-steps:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n\n# Job name must be exactly copilot-setup-steps" }'
  :features='[
    { icon: "🔑", title: "Runs Before Firewall", description: "Private registry installs in setup steps succeed without needing allowlist entries — firewall activates after setup completes" },
    { icon: "🔧", title: "Testable in CI", description: "Add workflow_dispatch and path triggers to validate setup before the agent runs it" },
    { icon: "📋", title: "Logs Visible", description: "Setup step logs appear in the Copilot session UI — environment debugging is straightforward" },
    { icon: "⚡", title: "Failure-Resilient", description: "If setup fails, agent continues and reports the failure in session log — setup errors do not silently block all work" }
  ]'
/>

---

<!-- SLIDE: The Agent Firewall -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🔒"
  pillLabel="Trust & Configuration"
  title="The Agent Firewall"
  :left='{ header: "Default Allowlist", icon: "🛡️", items: ["npm, PyPI, Maven, RubyGems, NuGet, Go modules", "apt, yum, apk (OS package managers)", "Docker Hub, ghcr.io, gcr.io (container registries)", "GitHub APIs + raw.githubusercontent.com", "SSL certificate authorities + Playwright browsers", "Most repos work immediately — no custom config needed"] }'
  :right='{ header: "Blocked Connection Log", icon: "🚨", code: { language: "text", content: "⚠️ Firewall blocked connection\nTarget: unauthorized-domain.com:443\nCommand: curl https://...\nTime: 2026-04-06T14:32:17Z\n\nAppears in the PR evidence bundle —\nalways investigate before merging." } }'
  :insight='{ icon: "⚠️", text: "Firewall only applies to agent bash processes — not MCP servers, setup steps, or self-hosted runners." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Firewall Configuration Levels -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🔒"
  pillLabel="Trust & Configuration"
  title="Firewall Configuration Levels"
  :left='{ header: "Organization Level", icon: "🏢", items: [{ title: "Enable/Disable Firewall", detail: "Enabled · Disabled · Let repositories decide (default)" }, { title: "Recommended Allowlist", detail: "Toggle the default package registry list on/off" }, { title: "Custom Allowlist", detail: "Add domains or URLs — applies to all repos in the org" }, { title: "Repo Custom Rules", detail: "Allow or prevent repos from adding their own rules" }] }'
  :right='{ header: "Repository Level", icon: "📁", items: [{ title: "Enable/Disable Firewall", detail: "Only if org is set to Let repositories decide" }, { title: "Recommended Allowlist", detail: "Toggle on/off if org allows repository decisions" }, { title: "Custom Allowlist", detail: "Add domains or URLs — combined with org-level rules" }, { title: "Note", detail: "Org-level rules lock repo overrides when set to Enabled or Disabled" }] }'
  :insight='{ icon: "💡", text: "Org settings: Settings → Code, planning & automation → Copilot → Cloud agent. Repo settings: Repository Settings → Code & automation → Copilot → Cloud agent." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — The Review Workflow -->

<SectionOpenerSlide
  :partNumber="4"
  title="The Review Workflow"
  subtitle="From Draft PR to Merge"
  :cards='[
    { icon: "📋", title: "Evidence-First", blurb: "Read bundle before touching the diff" },
    { icon: "📱", title: "Mobile Review", blurb: "4 hr → 30 min turnaround" },
    { icon: "🧠", title: "What to Delegate", blurb: "Design judgment stays human" },
  ]'
  :terminal='{ context: "The coding agent opens a draft PR — never merges", detail: "review is where teams maintain quality and build trust" }'
/>
---

<!-- SLIDE: Evidence-First Review -->
<ProblemSolutionOutcomeSlide
  :partNumber="4"
  pillIcon="✅"
  pillLabel="Review Workflow"
  title="Evidence-First Review Process"
  :problem='{ header: "1 — Read Evidence Bundle", items: ["Check summary, test results, and firewall alerts", "2-3 minutes before touching the diff", "Know what the agent did before reading the code"] }'
  :solution='{ header: "2 — Review the Diff", items: ["Focus on correctness, edge cases, security", "Apply the same criteria as for any contributor PR", "Leave specific comments with file path and code pattern to follow"] }'
  :outcome='{ header: "3 — Approve or Iterate", items: ["Leave specific PR comments → agent reads, pushes commits, re-runs tests", "Effective for 3-5 iterations"], metrics: [{ value: "✅", label: "Specific: file path + pattern to follow" }, { value: "❌", label: "Too vague: This looks wrong. Fix it." }] }'
/>

---

<!-- SLIDE: Mobile Review and Custom Agents -->
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="✅"
  pillLabel="Review Workflow"
  title="Mobile Review + Custom Agents"
  codePosition="left"
  :code='{ language: "markdown", filename: ".github/agents/review-enforcer.md", content: "# @review-enforcer\n\n## Decision\nAPPROVE / REQUEST_CHANGES\n\n## Findings\n\ud83d\udd34 Critical (blocks merge)\n\ud83d\udfe1 Important (request changes)\n\ud83d\udfe2 Acceptable\n\nFocus: security, correctness,\nbreaking changes, error handling.\nMax 300 words. Mobile-optimized." }'
  :features='[
    { icon: "📱", title: "Review on Mobile", description: "Open draft PR → read evidence bundle → invoke @review-enforcer for color-coded analysis" },
    { icon: "🤖", title: "Custom Review Agent", description: "Place in .github/agents/review-enforcer.md — returns mobile-optimized findings in under 300 words" },
    { icon: "⚡", title: "4 hr → 30 min", description: "Average PR wait time with mobile-enabled async reviews — no laptop required" }
  ]'
/>

---

<!-- SLIDE: What to Delegate -->
<BeforeAfterPanelsSlide
  :partNumber="4"
  pillIcon="🧠"
  pillLabel="Review Workflow"
  title="What to Delegate vs. Keep Human"
  :before='{ header: "Keep Human", items: ["Novel feature design requiring creative judgment", "Complex debugging (local environment required)", "Multi-repository coordination", "Architecture decisions and design exploration", "Windows-only tooling (agent runs Ubuntu)"] }'
  :after='{ header: "Delegate to Coding Agent", items: ["Dependency upgrades with clear migration path", "CRUD endpoint scaffolding from established patterns", "Documentation sync after refactoring", "Test coverage for flagged gaps", "Lint and style cleanup across files"] }'
  :insight='{ icon: "💡", text: "The core shift: developers handle work requiring design judgment; the agent handles well-understood, bounded, repeatable backlog tasks." }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="Manual Triage to Automated Issue-to-PR"
leftLabel="Before"
rightLabel="After"
:leftItems='["Triage: 14 min per issue", "Turnaround: 4 hrs per issue", "Understanding PR: 2–3 minutes", "Delegation: manual handoff"]'
:rightItems='["Triage: 2 min", "Turnaround: 30 min", "Understanding PR: 2–3 minutes", "Delegation: evidence-first"]'
:metrics='[
  { value: "14 min → 2 min", detail: "Triage acceleration" },
  { value: "4 hrs → 30 min", detail: "Turnaround time" },
  { value: "2–3 min", detail: "Understanding PR" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Assign one small, well-scoped issue to the coding agent", "Add copilot-setup-steps.yml to your repo", "Review the evidence bundle in the resulting PR", "Check the agent session log to see how it reasoned"]'
  :thisWeek='["Write an effective issue template for your repo", "Configure the agent firewall allowlist for your stack", "Practice evidence-first PR review on 3-5 agent PRs", "Identify issue patterns the agent handles reliably"]'
  :thisMonth='["Build a delegation checklist for your team", "Establish PR review norms for agent-generated code", "Integrate agent assignments into your sprint workflow", "Track delegation success rate and refine issue quality"]'
  footer="Assign one well-scoped issue today — the delegation loop becomes fluent once you've seen the full evidence bundle and reviewed your first agent PR."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "VS Code Documentation", color: "cyan", items: [
        { href: "https://code.visualstudio.com/docs/copilot/copilot-coding-agent", label: "GitHub Copilot coding agent", description: "Core concepts and VS Code integration" },
        { href: "https://docs.github.com/en/copilot/concepts/coding-agent", label: "GitHub Docs — About the Coding Agent", description: "Architecture, security model, capabilities, and limitations" },
        { href: "https://docs.github.com/en/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent", label: "Customizing the Development Environment", description: "copilot-setup-steps.yml reference, runner config, and options" },
        { href: "https://docs.github.com/en/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent", label: "Customizing or Disabling the Agent Firewall", description: "Allowlist management, org/repo controls, and firewall limitations" }
    ] },
    { title: "GitHub Blog & Resources", color: "purple", items: [
        { href: "https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-now-available-for-copilot-enterprise-and-copilot-pro-users/", label: "GitHub Blog — Assigning Issues with Coding Agent", description: "Delegation workflow, evidence bundle, and PR lifecycle" },
        { href: "https://github.blog/ai-and-ml/github-copilot/onboarding-your-ai-peer-programmer/", label: "Onboarding Your AI Peer Programmer", description: "Issue quality, setup strategies, and team adoption patterns" },
        { href: "https://docs.github.com/en/copilot/reference/copilot-allowlist-reference", label: "Copilot Allowlist Reference", description: "Complete list of hosts in the recommended allowlist" },
        { href: "https://github.blog/changelog/2025-07-30-copilot-coding-agent-custom-setup-steps-are-now-more-reliable/", label: "Custom Setup Steps — More Reliable", description: "Failure resilience and setup log visibility improvements" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="GitHub Copilot's Coding Agent in Practice"
:cards="[
  { icon: '⚡', value: '85%', detail: 'Reduction in issue triage time', subdetail: 'Automated classification and context gathering' },
  { icon: '📱', value: '4hr → 30min', detail: 'PR review with mobile workflow', subdetail: 'Review agent output on phone, merge from anywhere' },
  { icon: '🛡️', value: '0 merges', detail: 'Agent never merges its own code', subdetail: 'Human approval required for all changes' },
]"
prompt="Questions? Let's discuss which tasks in your backlog are ready to delegate today."
/>