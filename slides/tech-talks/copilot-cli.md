---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot CLI
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot CLI
mdc: true
section: Copilot Tools
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
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
import WorkflowShowdownStepsSlide from './components/WorkflowShowdownStepsSlide.vue'
import AITerminalTranscriptSlide from './components/AITerminalTranscriptSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="GitHub Copilot CLI"
  subtitle="AI at the Point of Work"
  tagline="Start Anywhere. Steer Anywhere. Resume Anywhere."
  meta="GitHub Copilot · AI at the Point of Work · CopilotTraining"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="How do I bring AI to where the work actually is?"
  subtext="Most AI tools optimize the 16% of your day spent writing code. The terminal owns"
  highlight="the other 84% — and Copilot CLI lives there."
  :cards='[
    { icon: "👩‍💻", title: "Developers", description: "Debug, scaffold, and explore codebases without leaving the terminal" },
    { icon: "⚙️", title: "DevOps Engineers", description: "Debug live systems, automate CI triage, patrol infra from any device" },
    { icon: "🏗️", title: "CLI Power Users", description: "Steer AI across machines, environments, and sessions from anywhere" },
    { title: "84% of dev time", description: "Deployments, debugging, log analysis, CI triage — all in the terminal, not the editor" },
    { title: "8 attempts → 2", description: "Plan Mode asks clarifying questions before implementation, cutting iteration cycles" },
    { title: "--remote: April 2026", description: "Start a session on a production server, steer it from your phone via QR code" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🖥️", title: "The Terminal Sees Reality", subtitle: "Intent + Complexity distances", blurb: "Plan Mode, the 84% problem, and four operating modes", slide: 4 },
    { icon: "🌐", title: "Range and Delegation", subtitle: "Context + Time distances", blurb: "/fleet fan-out, cloud delegation, and infinite sessions", slide: 10 },
    { icon: "📡", title: "Work Where the Problem Is", subtitle: "Geography + Compliance", blurb: "--remote: AI runs on the machine, you steer from anywhere", slide: 15 },
    { icon: "🎯", title: "Patterns That Actually Stick", subtitle: "All five distances together", blurb: "Four scenarios — four failure modes prevented", slide: 20 },
  ]'
/>

---

<!-- SLIDE: Part 1 — The Terminal Sees Reality -->
<SectionOpenerSlide
  :partNumber="1"
  title="The Terminal Sees Reality"
  subtitle="Closes Intent and Complexity — AI stops guessing and starts asking where the work actually lives"
  :cards='[
    { icon: "🖥️", title: "84% of Your Day", blurb: "Debugging, deployments, logs — all in the terminal, not the editor" },
    { icon: "🤔", title: "Plan Mode", blurb: "Clarifying questions before implementation — 8 attempts to 2" },
    { icon: "⚙️", title: "Four Modes", blurb: "Interactive, Programmatic, Cloud, Remote — one tool for all of it" },
  ]'
  :terminal='{ context: "GitHub Copilot CLI — where the work actually is", detail: "45 min → 8 min · 8 attempts → 2" }'
/>

---

<!-- SLIDE: AI Tools Optimize 16% of Your Workday -->
<HeroStatSlide
  :partNumber="1"
  pillIcon="📊"
  pillLabel="Terminal Reality · The Problem"
  title="AI Tools Optimize 16% of Your Workday"
  subtitle="The terminal owns the other 84%"
  :hero='{ value: "84%", label: "of developer time happens outside the code editor", source: "Bicameral AI: Developer Activity Research — deployments, debugging, log analysis, CI triage" }'
  :supporting='[
    { icon: "🐳", title: "Container debugging", description: "Logs, process state, and network connectivity live in the runtime" },
    { icon: "📊", title: "Log analysis and CI triage", description: "Build failures, production incidents, and performance investigations" },
    { icon: "🚀", title: "Deployments and infra", description: "Staging, production, and environment setup all require the terminal" },
    { icon: "❓", title: "Requirements and context", description: "Architectural decisions and library choices happen in conversation" }
  ]'
  :insight='{ icon: "💡", text: "AI that lives in the terminal has access to all of it. AI in the editor is context-blind to most of what is actually wrong." }'
  :progressDots='{ current: 1, total: 5, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Five Distances Between You and the Work -->
<FrameworkMappingRowsSlide
  :partNumber="1"
  pillIcon="📐"
  pillLabel="Terminal Reality · The Distance Model"
  title="Five Distances Between You and the Work"
  subtitle="Each capability in this talk removes a different kind of gap between you and working software"
  :rows='[
    { label: "Intent", description: "AI stops guessing and starts asking — Plan Mode clarifies first", tag: "Plan Mode" },
    { label: "Complexity", description: "One task becomes many, run in parallel across independent subagents", tag: "/fleet" },
    { label: "Context", description: "Session survives compaction and remembers decisions across sessions", tag: "Auto-compact" },
    { label: "Time", description: "Work outlives your attention — delegation frees the terminal", tag: "& delegation" },
    { label: "Geography", description: "AI meets the problem where it lives — remote crosses any gap", tag: "--remote" }
  ]'
  footnote="The session is the unit of work, not the shell"
  :progressDots='{ current: 2, total: 5, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Plan Mode in Action — Docker Container Debug -->
<AITerminalTranscriptSlide
  :partNumber="1"
  pillIcon="🤔"
  pillLabel="Terminal Reality · Plan Mode Demo"
  title="Plan Mode in Action: Docker Container Debug"
  subtitle="Root cause in 8 minutes — AI asks questions before running a single command"
  :transcript='[
    { type: "prompt", text: "copilot" },
    { type: "user", text: "Debug why the backend container will not start" },
    { type: "thinking", label: "🤔 Copilot (Plan Mode):" },
    { type: "response", lines: ["Before I start, a few questions:", "1. Check docker-compose config, container logs, or both?", "2. Include environment variable analysis?", "3. Any recent changes to network or service config?"] },
    { type: "user", text: "Start with logs, then config if needed" },
    { type: "thinking", label: "🤔 Executing plan:" },
    { type: "response", lines: ["docker logs backend --tail 50", "docker exec backend env | grep -E DB|PORT"] },
    { type: "divider" },
    { type: "outcome", text: "Found: port 5000 mapped to 5001 in docker-compose.yml" },
    { type: "outcome", text: "Fix applied — container starts successfully" }
  ]'
  footerMetric="45 min → 8 min · 8 attempts → 2"
  :progressDots='{ current: 3, total: 5, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: What Structured Planning Actually Changes -->
<BeforeAfterMetricsSlide
  :partNumber="1"
  pillIcon="📈"
  pillLabel="Terminal Reality · Plan Mode Impact"
  title="What Structured Planning Actually Changes"
  :before='{
    header: "Without Plan Mode",
    items: [
      "AI picks one interpretation and generates code",
      { title: "8 average attempts", detail: "Until the debugging loop terminates" },
      "Wrong assumptions surface in code review or testing",
      "Context lost between failed attempts"
    ]
  }'
  :after='{
    header: "With Plan Mode (Shift+Tab)",
    items: [
      "AI asks clarifying questions before writing any code",
      { title: "2 average attempts", detail: "Ambiguity resolved before the first line" },
      "Edge cases resolved before implementation begins",
      "Shared understanding of approach built upfront"
    ]
  }'
  :metrics='[
    { value: "8 → 2", label: "average attempts to solution" },
    { value: "45 → 8 min", label: "Docker debug time" },
    { value: "75 min", label: "saved per session on average" }
  ]'
  :insight='{ icon: "⚠️", text: "Plan Mode is most valuable when you are rushing. Sessions that spiral into 8 failed attempts almost always started with skipping it." }'
  :progressDots='{ current: 4, total: 5, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Four Modes — One Tool -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="⚙️"
  pillLabel="Terminal Reality · Operating Modes"
  title="Four Modes — One Tool"
  :cards='[
    { icon: "💬", title: "Interactive", description: "Conversational sessions with persistent context — collaborative debugging and exploration" },
    { icon: "🤖", title: "Programmatic (-p)", description: "Single-command headless execution for CI/CD pipelines and automated scripts" },
    { icon: "☁️", title: "Cloud Delegation (&)", description: "Background execution in GitHub cloud — IDE and terminal stay completely free" },
    { icon: "📡", title: "Remote (--remote)", description: "Start on any machine, steer from phone or browser — session lives where the problem is" }
  ]'
  :insight='{ icon: "💡", text: "The session is the durable entity. Terminals are viewports that connect and disconnect from it." }'
  :progressDots='{ current: 5, total: 5, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — Range and Delegation -->
<SectionOpenerSlide
  :partNumber="2"
  title="Range and Delegation"
  subtitle="Closes Context and Time — /fleet fans work across subagents, & hands off long tasks to the cloud"
  :cards='[
    { icon: "🌐", title: "/fleet Fan-Out", blurb: "Parallel subtasks — each subagent in its own context window" },
    { icon: "☁️", title: "Cloud Delegation", blurb: "& prefix: 20+ minute tasks run in GitHub cloud, PR arrives when done" },
    { icon: "♾️", title: "Infinite Sessions", blurb: "Auto-compaction + repo memory — sessions worth reconnecting to" },
  ]'
  :terminal='{ context: "Range: how far the agent reaches. Delegation: what it does while you sleep.", detail: "Context + Time distances closed" }'
/>

---

<!-- SLIDE: /fleet — One Prompt, Parallel Execution -->
<AITerminalTranscriptSlide
  :partNumber="2"
  pillIcon="🌐"
  pillLabel="Range and Delegation · /fleet"
  title="/fleet: One Prompt, Parallel Execution"
  subtitle="Orchestrator decomposes work across subagents — each in its own context window"
  :transcript='[
    { type: "prompt", text: "copilot" },
    { type: "user", text: "/fleet create a complete test suite: unit tests for auth, integration tests for API, e2e for login" },
    { type: "thinking", label: "🤔 Orchestrator:" },
    { type: "response", lines: ["3 independent workstreams identified — running in parallel:", "  → Subagent 1: unit tests for auth module", "  → Subagent 2: integration tests for API endpoints", "  → Subagent 3: e2e tests for login flow"] },
    { type: "divider" },
    { type: "outcome", text: "All 3 workstreams complete — results merged" },
    { type: "outcome", text: "158 tests generated in parallel in one session" }
  ]'
  footerMetric="3 tasks × parallel = time of the longest, not the sum"
  :progressDots='{ current: 1, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Sequential Tasks vs /fleet Fan-Out -->
<BeforeAfterMetricsSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Range and Delegation · /fleet Impact"
  title="Sequential Tasks vs /fleet Fan-Out"
  :before='{
    header: "Sequential Execution",
    items: [
      "Task 1 completes before Task 2 begins",
      "Context from Task 1 bleeds into Task 2",
      "Total time: sum of all task durations",
      "One context window carries all the noise"
    ]
  }'
  :after='{
    header: "With /fleet",
    items: [
      "All tasks start simultaneously",
      { title: "Context isolation", detail: "Each subagent has its own window" },
      "Total time: only the longest single task",
      "Orchestrator merges results — you review the outcome"
    ]
  }'
  :metrics='[
    { value: "3×", label: "tasks in the same time" },
    { value: "Zero", label: "context pollution between subagents" },
    { value: "Auto", label: "model selection per subtask" }
  ]'
  :insight='{ icon: "💡", text: "Pair with Plan Mode: Shift+Tab to build a plan, then accept with /fleet to execute all phases in parallel." }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Cloud Delegation — Work That Outlives Your Attention -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="☁️"
  pillLabel="Range and Delegation · Cloud Delegation"
  title="Cloud Delegation: Work That Outlives Your Attention"
  :left='{
    header: "Blocking Work",
    icon: "⏳",
    items: [
      { title: "IDE occupied", detail: "Full task duration consumed by the agent" },
      { title: "Terminal blocked", detail: "Cannot run other commands while agent works" },
      "20+ minute tasks halt your flow entirely",
      "You wait — agent works; you cannot do both"
    ]
  }'
  :right='{
    header: "Delegated with & Prefix",
    icon: "☁️",
    items: [
      { title: "& delegates to GitHub cloud", detail: "Agent runs independently of your machine" },
      { title: "IDE and terminal both free", detail: "Completely unblocked the moment you delegate" },
      "PR created automatically when the agent finishes",
      "You work — agent works — both in parallel"
    ]
  }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Virtually Infinite Sessions -->
<FourCardGridSlide
  :partNumber="2"
  pillIcon="♾️"
  pillLabel="Range and Delegation · Session Continuity"
  title="Virtually Infinite Sessions"
  :cards='[
    { icon: "♾️", title: "Auto-Compaction", description: "At 95% token limit, Copilot compresses history — key decisions and context preserved automatically" },
    { icon: "🧠", title: "Repository Memory", description: "Team conventions, patterns, and preferences remembered and applied in future sessions" },
    { icon: "📏", title: "/compact + /usage", description: "Manual control: compress anytime, monitor tokens with /context and /usage" },
    { icon: "🔀", title: "Additive Instructions", description: "User + repo + org instructions all combine — no priority fallback, all applied together" }
  ]'
  :insight='{ icon: "💡", text: "Think of a session like a tmux session — persistent state you connect to, not ephemeral chat you restart." }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Part 3 — Work Where the Problem Is -->
<SectionOpenerSlide
  :partNumber="3"
  title="Work Where the Problem Is"
  subtitle="Closes Geography and Compliance — AI runs on the machine, you steer from phone or browser"
  :cards='[
    { icon: "📡", title: "--remote", blurb: "One flag: URL + QR code, steer from any device (public preview 2026-04-13)" },
    { icon: "🔒", title: "Compliance by Design", blurb: "Data never leaves the host — AI reasons where the data lives" },
    { icon: "▶️", title: "Session Portability", blurb: "SSH moves keystrokes. --remote moves a reasoning session." },
  ]'
  :terminal='{ context: "copilot --remote — on the server where the problem lives", detail: "Geography and Compliance distances closed simultaneously" }'
/>

---

<!-- SLIDE: The Last Distance Falls — Geography -->
<HeroStatSlide
  :partNumber="3"
  pillIcon="📡"
  pillLabel="Work Where the Problem Is · --remote"
  title="The Last Distance Falls: Geography"
  subtitle="The session lives on the machine. You steer from wherever you are."
  :hero='{ value: "--remote", label: "Start on any server. Steer from browser or phone. Public preview: April 13, 2026.", source: "github.com/changelog — Remote control CLI sessions on web and mobile (2026-04-13)" }'
  :supporting='[
    { icon: "🔗", title: "QR Code Access", description: "One flag generates a URL and QR code — scan from any device to connect" },
    { icon: "📱", title: "GitHub Mobile", description: "Steer, approve tool permissions, and inject prompts from your phone" },
    { icon: "🔒", title: "Compliance by Architecture", description: "Logs and sensitive data never leave the host — AI reasons where the data lives" },
    { icon: "▶️", title: "/resume Anywhere", description: "Reconnect to the same live session from a completely different machine" }
  ]'
  :insight='{ icon: "🌍", text: "SSH moves your keystrokes. --remote moves a reasoning session." }'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: The Walking-to-Meeting Debug -->
<AITerminalTranscriptSlide
  :partNumber="3"
  pillIcon="🚶"
  pillLabel="Work Where the Problem Is · --remote Demo"
  title="The Walking-to-Meeting Debug"
  subtitle="Alert fires 3 minutes before standup — resolved before the meeting ends"
  :transcript='[
    { type: "prompt", text: "ssh ops@staging-auth-01" },
    { type: "prompt", text: "copilot --remote" },
    { type: "response", lines: ["Remote session started. Steer from:", "  https://github.com/copilot/sessions/abc123  [QR CODE]"] },
    { type: "user", text: "The auth service is returning 503. Debug it." },
    { type: "thinking", label: "🤔 Copilot — running on the staging server:" },
    { type: "response", lines: ["docker logs auth-service --tail 50", "docker exec auth-service env | grep -E REDIS|JWT"] },
    { type: "divider" },
    { type: "outcome", text: "JWT_SECRET missing from staging container env" },
    { type: "outcome", text: "Fix approved from phone — auth service restored" }
  ]'
  footerMetric="Incident resolved before standup ended"
  :progressDots='{ current: 2, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Two Distances Close Together -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🔒"
  pillLabel="Work Where the Problem Is · Two Distances"
  title="Two Distances Close Simultaneously"
  :left='{
    header: "Geography Closed",
    icon: "🌍",
    items: [
      { title: "Start on any server via SSH", detail: "Session lives where the problem lives" },
      { title: "Steer from any device", detail: "Phone, browser, or any laptop" },
      "/resume reconnects to the same session anywhere",
      "No context restart — session is the durable entity"
    ]
  }'
  :right='{
    header: "Compliance by Architecture",
    icon: "🔒",
    items: [
      { title: "Logs never leave the host", detail: "No scp, no upload, no third-party tools" },
      { title: "AI reasons where data lives", detail: "12GB of logs analyzed without downloading" },
      "PII stays on the host — policy enforced by design",
      "Not a compliance workaround — the architecture is the control"
    ]
  }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Combinations That Unlock New Capabilities -->
<FrameworkMappingRowsSlide
  :partNumber="3"
  pillIcon="🔗"
  pillLabel="Work Where the Problem Is · Combinations"
  title="Combinations That Unlock New Capabilities"
  subtitle="--remote composes with every other capability in this talk"
  :rows='[
    { label: "Plan + Remote", description: "AI asks questions before touching production — safer live-system ops", tag: "Safer ops" },
    { label: "Fleet+Remote", description: "One prompt runs parallel investigation across multiple machines", tag: "Multi-server" },
    { label: "Cloud+Remote", description: "Persistent infra patrol — agent watches and reports to your phone", tag: "AI patrol" },
    { label: "Memory+Remote", description: "When you /resume from a new device, repo context travels with it", tag: "Zero re-setup" }
  ]'
  footnote="--remote is a multiplier, not just a feature"
  :progressDots='{ current: 4, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — Patterns That Actually Stick -->
<SectionOpenerSlide
  :partNumber="4"
  title="Patterns That Actually Stick"
  subtitle="All five distances working together — four scenarios, four failure modes prevented"
  :cards='[
    { icon: "🔬", title: "Log Forensics", blurb: "Compliance violation prevented — AI reasons where the data lives" },
    { icon: "🗺️", title: "Infra Patrol", blurb: "Blind spots eliminated — distributed state monitored by AI" },
    { icon: "💻", title: "GitHub Integration", blurb: "Context loss prevented — issues and PRs from the terminal" },
  ]'
  :terminal='{ context: "Each scenario names the failure mode it prevents", detail: "Feature catalog → practitioner guidance" }'
/>

---

<!-- SLIDE: Failure Prevented — Compliance Violation from Data Transfer -->
<BeforeAfterPanelsSlide
  :partNumber="4"
  pillIcon="🔬"
  pillLabel="Patterns · Log Forensics"
  title="Failure Prevented: Compliance Violation from Data Transfer"
  :before='{
    header: "Traditional Log Analysis",
    items: [
      "scp 12GB log file to local machine",
      "Sensitive data crosses the production boundary",
      "Grep a subset, lose context, repeat the cycle",
      "Compliance review required for every analysis session"
    ]
  }'
  :after='{
    header: "copilot --remote on the Log Server",
    items: [
      "AI analyzes logs where they live — data never moves",
      "No scp, no upload, no third-party analysis tools",
      "12GB can be analyzed without downloading a single byte",
      "Compliance by architecture — PII stays on the host"
    ]
  }'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Failure Prevented — Blind Spots in Distributed State -->
<WorkflowShowdownStepsSlide
  :partNumber="4"
  pillIcon="🗺️"
  pillLabel="Patterns · Infra Patrol"
  title="Failure Prevented: Blind Spots in Distributed State"
  subtitle="Traditional monitoring says what happened. AI patrol says why and proposes the fix."
  leftLabel="Traditional Monitoring"
  rightLabel="AI Infrastructure Patrol"
  :steps='[
    { left: { label: "Alert fires", note: "CPU at 92% on auth-7b" }, right: { label: "Alert fires", note: "CPU at 92% on auth-7b" } },
    { left: { label: "SSH in manually", note: "One server at a time" }, right: { label: "copilot --remote on cluster", note: "AI has access to all nodes" } },
    { left: { label: "Raw kubectl output", note: "Data without analysis" }, right: { label: "Root cause traced", note: "Crash loop from memory limit change in last deploy" } },
    { left: { label: "Search runbook", note: "15–30 min to understand" }, right: { label: "Propose rollback", note: "Approve from phone in one tap" } }
  ]'
  :outcomeLeft='{ icon: "⏱️", label: "15–30 min to diagnose — then manually fix" }'
  :outcomeRight='{ icon: "✓", label: "Root cause found automatically — you approve from any device" }'
  summaryMetric="Monitoring tells you what. AI patrol tells you why."
  :progressDots='{ current: 2, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Failure Prevented — Context Loss Between Terminal and Browser -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="💻"
  pillLabel="Patterns · GitHub Integration"
  title="Failure Prevented: Context Loss Switching to the Browser"
  :left='{
    header: "Context-Switching Loop",
    icon: "🔄",
    items: [
      "Open browser to check an issue",
      "Re-explain context to Copilot in chat",
      "Copy PR URL back to the terminal",
      "Repeat every time you switch tools"
    ]
  }'
  :right='{
    header: "GitHub.com in the Terminal",
    icon: "💻",
    items: [
      { title: "List and triage open issues", detail: "No browser required — full GitHub context in CLI" },
      { title: "Start work on an issue", detail: "Branch created automatically" },
      "Create workflows and review PRs in one session",
      "Zero re-explanation — one session spans both"
    ]
  }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Failure Prevented — Manual CI Intervention -->
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="🤖"
  pillLabel="Patterns · CI/CD Headless"
  title="Failure Prevented: Manual CI Intervention at 2 AM"
  codePosition="left"
  :code='{ language: "yaml", filename: ".github/workflows/build.yml", content: "- name: Analyze build failure\n  if: failure()\n  run: |\n    copilot -p \"Analyze the build failure.\n    Check recent commits and error patterns.\n    Suggest specific fixes.\"\n    --allow-tool shell(gh) > analysis.txt\n\n- name: Post analysis as PR comment\n  if: failure()\n  run: gh pr comment --body-file analysis.txt" }'
  :features='[
    { icon: "⚙️", title: "Programmatic mode (-p)", description: "Single-command headless execution — zero human intervention in the loop" },
    { icon: "🔍", title: "Pattern recognition", description: "Analyzes recent commits, deps, and error patterns across historical failures" },
    { icon: "💬", title: "PR comment output", description: "Team wakes to a diagnosis and fix suggestion — not raw log output" }
  ]'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before After -->
<BeforeAfterSlide
  header="From Terminal Friction to AI at the Point of Work"
  :leftItems='["AI tools target 16% of your day — code editing only", "Debugging requires 8 trial-and-error attempts on average", "Log forensics means moving sensitive data off the server", "Production incidents wait until you are at your desk"]'
  :rightItems='["Copilot CLI covers the full 84% — terminal-native AI", "Plan Mode cuts iteration from 8 attempts to 2 with upfront questions", "copilot --remote brings AI to the log server — data never moves", "--remote lets you steer from phone or browser, wherever you are"]'
  :metrics='[
    { value: "8 → 2", detail: "debugging attempts with Plan Mode" },
    { value: "45 → 8 min", detail: "Docker debug time with clarifying questions" },
    { value: "84%", detail: "of dev time now covered — not just the 16% IDE slice" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Install Copilot CLI and run your first interactive session", "Toggle Plan Mode (Shift+Tab) on your next debugging task", "Try copilot --remote on a staging server and scan the QR code"]'
  :thisWeek='["Replace one manual CI failure investigation with copilot -p", "Use /fleet to decompose a large task into parallel subtasks", "Set up repository memory with .github/copilot-instructions.md"]'
  :thisMonth='["Automate build failure analysis with copilot -p in GitHub Actions", "Run a persistent infra patrol session with --remote and cloud delegation", "Teach your team the Distance Model as a shared vocabulary for AI workflows"]'
  footer="The terminal is where the work actually is — and now AI lives there too."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli", label: "About GitHub Copilot CLI", description: "Core concepts, capabilities, and architecture overview" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli", label: "Use Copilot CLI", description: "Command syntax, Plan Mode, operating modes, and workflows" },
        { href: "https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli", label: "Install Copilot CLI", description: "Setup instructions for all platforms" },
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet", label: "Running tasks in parallel with /fleet", description: "Fan-out orchestration and subagent model selection" },
        { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/steer-remotely", label: "Steering a CLI session from another device", description: "Remote session setup, QR codes, and /resume" }
    ] },
    { title: "📣 What&#39;s New", color: "indigo", items: [
        { href: "https://github.blog/changelog/2026-04-13-remote-control-cli-sessions-on-web-and-mobile-in-public-preview/", label: "Remote control CLI sessions (public preview)", description: "April 13, 2026 — steer from web and mobile" }
    ] },
    { title: "🛠️ Related Content", color: "purple", items: [
        { label: "Copilot Memory", description: "Repository memory and cross-session context in depth" },
        { label: "MCP Apps", description: "Extending Copilot CLI with MCP server integrations" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="GitHub Copilot CLI"
  subtitle="AI at the Point of Work"
  :cards="[
    { value: 'Plan Mode', detail: '8 attempts → 2 · 45 min → 8 min — questions before commands' },
    { value: '/fleet', detail: 'N tasks in the time of 1 — parallel subagents, merged results' },
    { value: '--remote', detail: 'Geography closed — steer from phone, data never leaves the host' },
  ]"
  prompt="What&#39;s the biggest gap between where you work and where your AI tools live?"
/>


---
src: ./copilot-cli-reference.md
---