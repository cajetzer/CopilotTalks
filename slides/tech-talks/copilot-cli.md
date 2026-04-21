---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot CLI: AI at the Point of Work
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot CLI - AI at the Point of Work
module: tech-talks/copilot-cli
mdc: true
section: Copilot Tools
status: active
updated: 2026-04-21
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
import HeroStatSlide from './components/HeroStatSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
import AITerminalTranscriptSlide from './components/AITerminalTranscriptSlide.vue'
import WorkflowShowdownStepsSlide from './components/WorkflowShowdownStepsSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
</script>



<!-- SLIDE: Title -->
<TitleSlide
  title="GitHub Copilot CLI"
  subtitle="AI at the Point of Work"
  tagline="Start Anywhere. Steer Anywhere. Resume Anywhere."
  meta="Tech Talk · 45 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="How do I bring AI to where the work actually is — and keep steering it from wherever I am?"
  subtext="Developers spend 68% of their time outside the IDE — deployments, debugging, log analysis, CI triage."
  highlight="Most AI tools optimize the 16% you spend writing code and leave the rest untouched."
  :cards='[
    { icon: "💻", title: "CLI Power Users", description: "Developers who live in terminals for Docker, git, infrastructure, and scripting" },
    { icon: "🔧", title: "DevOps Engineers", description: "Engineers debugging production systems, analyzing logs, and managing infrastructure" },
    { icon: "🚀", title: "Platform Teams", description: "Teams building CI/CD automation, deployment pipelines, and infrastructure as code" },
    { title: "68% outside the IDE", description: "Most developer time is spent in terminals, not editors (Stripe Developer Coefficient)" },
    { title: "8 debugging attempts avg", description: "Traditional workflow: request → generate → review → fix → repeat until it works" },
    { title: "84% of work untouched", description: "Most AI tools target the 16% spent writing code — leave debugging, ops, CI untouched" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "👁️", title: "The Terminal Sees Reality",        subtitle: "Context lives where the problem lives", blurb: "The IDE sees code. The terminal sees everything else: logs, containers, processes, networks.", slide: 4  },
    { icon: "⚡", title: "Range and Delegation",              subtitle: "Multiply what one session can reach",  blurb: "Plan Mode, /fleet fan-out, cloud delegation — from single tasks to orchestrated workflows.", slide: 11 },
    { icon: "🌍", title: "Work Where the Problem Is",        subtitle: "Geography is no longer a constraint",  blurb: "Remote sessions put AI on the machine — steer from phone, browser, any device.", slide: 18 },
    { icon: "🎯", title: "Patterns That Actually Stick",     subtitle: "Real-world production workflows",      blurb: "Log forensics, multi-machine patrol, GitHub integration, CI automation.", slide: 23 },
  ]'
/>

---

<!-- SLIDE: Part 1 — The Terminal Sees Reality -->
<SectionOpenerSlide
  :partNumber="1"
  title="The Terminal Sees Reality"
  subtitle="Context lives where the problem is"
  :cards='[
    { icon: "📊", title: "68% Outside the IDE", blurb: "Most developer work happens in terminals, not editors" },
    { icon: "🐳", title: "Docker & Infrastructure", blurb: "Container logs, env vars, process state — invisible to IDEs" },
    { icon: "🔍", title: "Live System Context", blurb: "Runtime failures need runtime evidence, not source files" },
  ]'
  :terminal='{ context: "The IDE only sees code", detail: "The terminal sees everything" }'
/>

---

<!-- SLIDE: Why the Terminal Matters -->
<HeroStatSlide
  :partNumber="1"
  pillIcon="📊"
  pillLabel="The Terminal Sees Reality · Context Gap"
  title="The IDE Only Sees Code"
  subtitle="The terminal sees everything else"
  :hero='{ value: "68%", label: "of developer time is spent outside the IDE", source: "Source: Stripe, The Developer Coefficient (2018)" }'
  :supporting='[
    { icon: "🐳", title: "Container logs & process state", description: "Runtime diagnostics live in the terminal — not in source files" },
    { icon: "🌐", title: "Network traffic & environment", description: "Connectivity checks, env vars, deployment artifacts" },
    { icon: "📁", title: "File system & disk state", description: "Storage, permissions, actual running configuration" },
    { icon: "⚙️", title: "CI/CD pipelines & deploys", description: "Build failures, test results, deployment validation" }
  ]'
  :insight='{ icon: "💡", text: "When debugging a failure, the information that matters is not in your source files — it is in what is running." }'
  :progressDots='{ current: 1, total: 7, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Traditional Workflow vs Plan Mode -->
<WorkflowShowdownStepsSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Terminal Sees Reality · Plan Mode"
  title="Traditional Workflow vs. Plan Mode"
  subtitle="From trial-and-error to collaborative strategy"
  leftLabel="Traditional Workflow"
  rightLabel="With Plan Mode"
  :steps='[
    { left: { label: "Make request", note: "Describe what you need" }, right: { label: "Make request", note: "Describe what you need" } },
    { left: { label: "AI generates solution", note: "Assumes intent, picks one interpretation" }, right: { label: "AI asks questions", note: "Clarifies intent before acting" } },
    { left: { label: "You review and fix", note: "Discover wrong assumptions" }, right: { label: "Collaborate on plan", note: "Review strategy before any code" } },
    { left: { label: "Repeat until it works", note: "Average: 8 attempts" }, right: { label: "Execute with confidence", note: "Ambiguity resolved upfront" } }
  ]'
  :outcomeLeft='{ icon: "🔄", label: "Repeat ×8 — average attempts before success" }'
  :outcomeRight='{ icon: "✓", label: "Done in ~2 attempts" }'
  summaryMetric="8 debugging attempts → 2 with Plan Mode"
  :progressDots='{ current: 2, total: 7, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Docker Debugging Demo -->
<AITerminalTranscriptSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Terminal Sees Reality"
  title="Plan Mode in Action: Docker Debugging"
  subtitle="Root cause in 8 minutes instead of 45"
  :transcript='[
    { "type": "prompt", "text": "copilot" },
    { "type": "user", "text": "Debug why the backend container won&#39;t start" },
    { "type": "thinking", "label": "🤔 Copilot (Plan Mode):" },
    { "type": "response", "lines": ["Before I start, a few questions:", "1. Check docker-compose config, logs, or both?", "2. Include environment variable analysis?", "3. Any recent changes to services or network?"] },
    { "type": "user", "text": "Start with logs, then check config if needed" },
    { "type": "thinking" },
    { "type": "response", "lines": ["Here&#39;s my plan:", "1. Retrieve container logs for backend service", "2. Analyze error patterns and stack traces", "3. Inspect docker-compose.yml if logs suggest config issue", "4. Check environment variables if auth errors found"] },
    { "type": "divider" },
    { "type": "outcome", "text": "Found: Port 5000 mapped to 5001 in docker-compose.yml" },
    { "type": "outcome", "text": "Fix applied. Container starts successfully." }
  ]'
  footerMetric="45 min → 8 min · 8 attempts → 2"
  :progressDots='{ current: 2, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Real-Time Steering -->
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Terminal Sees Reality"
  title="Steer While the Agent Thinks"
  :left='{ header: "Enqueue & Redirect", items: ["📨 Enqueue Messages — send follow-ups while Copilot is still working on a task", "🚫 Reject, Then Redirect — deny a tool call then steer with a follow-up message"] }'
  :right='{ header: "Direction & Permissions", items: ["🔄 Change Direction — course-correct without starting over mid-task", "🎮 Permission Controls — pre-approve tools, paths, and URLs with --allow-tool"] }'
  :progressDots='{ current: 3, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
  insight="Enqueue messages, reject with explanation, change direction mid-flight — without restarting"
/>

---

<!-- SLIDE: Reasoning Models -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Terminal Sees Reality"
  title="Configurable Reasoning Depth"
  :cards='[
    { icon: "⚡", title: "Low", description: "Fast queries and simple lookups — minimal compute, instant responses" },
    { icon: "⚖️", title: "Medium", description: "Default level — balanced speed and depth for everyday problem-solving" },
    { icon: "🧠", title: "High", description: "Complex problems and multi-service debugging — deeper analysis for hard tasks" },
    { icon: "🔥", title: "Extra High", description: "Architecture and security decisions — maximum reasoning for critical choices" }
  ]'
  insight="Ctrl+T reveals the model&#39;s thinking step-by-step · /model shows cost multipliers — pick the right tradeoff"
  :progressDots='{ current: 4, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Operating Modes -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Terminal Sees Reality"
  title="Four Operating Modes"
  :cards='[
    { icon: "💬", title: "Interactive", description: "Conversational sessions for collaborative debugging and exploration — context maintained across commands" },
    { icon: "⚙️", title: "Programmatic", description: "Single-command execution for scripts and CI/CD — structured output, no conversation history" },
    { icon: "☁️", title: "Cloud Delegation", description: "Background execution frees terminal and IDE — PR created when agent finishes; best for 20+ min tasks" },
    { icon: "🌐", title: "Remote", description: "Start on any machine, steer from GitHub.com or Mobile via URL/QR code — session lives where the problem is" }
  ]'
  :progressDots='{ current: 5, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: CI/CD Automation -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="The Terminal Sees Reality"
  title="Programmatic Mode in CI/CD"
  codePosition="left"
  :code='{ language: "yaml", content: "# .github/workflows/build.yml\n- name: Analyze build failure\n  if: failure()\n  run: |\n    copilot -p \"Analyze build failure.\n      Check recent commits,\n      deps, and patterns.\n      Suggest a fix.\"\n    --allow-tool shell(gh)\n    > failure-analysis.txt\n- name: Post PR comment\n  if: failure()\n  run: |\n    gh pr comment\n    --body-file failure-analysis.txt" }'
  :features='[
    { icon: "⚡", title: "Auto-Triggered", description: "Fires on any CI/CD pipeline failure — no manual intervention required" },
    { icon: "🔍", title: "Pattern Recognition", description: "Analyzes recent commits, dependency changes, and historical failure patterns across the project" },
    { icon: "💬", title: "Instant PR Feedback", description: "Analysis posted as PR comment — root cause visible to all reviewers without digging through logs" }
  ]'
  :progressDots='{ current: 6, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 &#8212; Range and Delegation -->

<SectionOpenerSlide
  :partNumber="2"
  title="Range and Delegation"
  subtitle="Built-in agents, /fleet fan-out, cloud delegation, and infinite context"
  :cards='[
    { icon: "&#x1F916;", title: "Built-in Agents", blurb: "Explore, Task, Plan, Code-review" },
    { icon: "&#x1F680;", title: "/fleet Fan-Out", blurb: "Parallel decomposition at scale" },
    { icon: "&#x267E;&#xFE0F;", title: "Infinite Sessions", blurb: "Auto-compaction + repo memory" }
  ]'
  :terminal='{ context: "Removing complexity, context, and time distance", detail: "One task becomes many &#8212; work outlives your attention" }'
/>

---

<!-- SLIDE: Built-in Agents -->
<FourCardGridSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Range and Delegation"
  title="Four Specialized Agents"
  :cards='[
    { icon: "🔍", title: "Explore Agent", description: "Fast codebase analysis without cluttering main context — returns focused answers under 300 words" },
    { icon: "⚙️", title: "Task Agent", description: "Execute commands with smart output filtering — brief summary on success, full output on failure" },
    { icon: "📋", title: "Plan Agent", description: "Analyze dependencies and create multi-step strategies you review before execution" },
    { icon: "🔎", title: "Code-Review Agent", description: "High signal-to-noise review — only surfaces bugs, security issues, and logic errors; never style" }
  ]'
  :progressDots='{ current: 1, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
  insight="Multiple agents can work simultaneously — three operations in the time of one"
/>

---

<!-- SLIDE: /fleet Fan-Out -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Range and Delegation"
  title="/fleet: Explicit Parallel Orchestration"
  codePosition="left"
  :code='{ language: "bash", content: "$ copilot\n> /fleet implement all phases of\n  this auth refactor plan\n─────────────────────\n🤖 Orchestrator: 4 subtasks\n  → Subagent 1: Update user model\n  → Subagent 2: Migrate auth routes\n  → Subagent 3: Update test suite\n  → Subagent 4: Update docs\n✅ All subtasks complete." }'
  :features='[
    { icon: "⚡", title: "Speed", description: "Parallel subtasks complete in the time of the longest, not the sum" },
    { icon: "🔒", title: "Context Isolation", description: "Each subagent gets its own context window — no pollution between tasks" },
    { icon: "🎯", title: "Specialization", description: "Custom agents matched to subtasks — @test-writer, @security-reviewer" },
    { icon: "💰", title: "Model Selection", description: "Subagents default to low-cost models; override per-subtask for critical work" }
  ]'
  :progressDots='{ current: 2, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
  insight="Plan with Shift+Tab, then /fleet to execute — decompose, delegate, merge"
/>

---

<!-- SLIDE: Cloud Delegation -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Range and Delegation"
  title="Cloud Delegation: Work Outlives Your Attention"
  codePosition="left"
  :code='{ language: "bash", content: "$ copilot\n> &\"Analyze entire codebase for\n  security vulnerabilities\"\n─────────────────────\n✅ Task delegated to cloud agent.\nCommits unstaged changes,\ncreates branch.\nPR arrives when complete.\n\n[Terminal is free for other work]" }'
  :features='[
    { icon: "⏱️", title: "Best for 20+ minute tasks", description: "Security audits, large refactors, test scaffolding, doc generation" },
    { icon: "🚀", title: "Fully independent execution", description: "Runs on GitHub infrastructure — both IDE and terminal stay free; PR created when done" },
    { icon: "⏳", title: "Removes the time distance", description: "Work continues while you sleep, eat, or meet — the session outlives your attention" }
  ]'
  :progressDots='{ current: 3, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Context Management -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Range and Delegation"
  title="Infinite Sessions & Repository Memory"
  :left='{ header: "Context Control", items: ["♾️ Auto-Compaction at 95% — history compressed at token limit; key decisions persist, verbose output pruned", "🧠 Repository Memory — Copilot learns conventions and patterns; applied automatically next session", "📊 /context for token breakdown · /usage for stats · /compact for manual compression"] }'
  :right='{ header: "Session Durability", items: ["🔗 Sessions Are Durable — persistent state you connect to, not ephemeral chat you restart", "📱 copilot --resume — reconnect from any device; context and memory travel with the session", "⏳ Think tmux or Jupyter — work outlives the shell; start on workstation, steer from phone"] }'
  insight="The session is a durable artifact — start anywhere, steer anywhere, resume anywhere"
  :progressDots='{ current: 4, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Extensibility -->
<ThreeColumnCardSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Range and Delegation"
  title="Custom Agents, Plugins & /ide Bridge"
  :columns='[
    { icon: "🤖", title: "Custom Agents", description: "Specialized agents for your team workflows", items: ["~/.copilot/agents/", ".github/agents/", ".github-private/agents/"] },
    { icon: "🧩", title: "Plugins", description: "Community and team-created extensions from marketplaces", items: ["copilot plugin install", "copilot plugin marketplace"] },
    { icon: "💻", title: "/ide Bridge", description: "Connect to a running IDE — edits open as diffs, IDE shares diagnostics and selection", items: ["> /ide  # connect", "# auto-connects by default", "# diffs open in IDE for approval"] }
  ]'
  :progressDots='{ current: 5, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Mental Model Shift -->
<BeforeAfterPanelsSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="Range and Delegation"
  title="Mental Model Shift"
  :before='{ header: "🛑 Move Against", items: ["Pasting secrets into prompts — use env vars; credentials are prompt content", "--yolo outside sandboxed environments — blanket permissions = prod access if authenticated", "Skipping Plan Mode when rushing — most valuable precisely when in a hurry", "--remote + --yolo on production — always scope permissions; use Copilot Hooks"] }'
  :after='{ header: "✅ Move Toward", items: ["AI as thought partner for greenfield — 90 min library research → 15 min with scaffold", "Plan before you build (Shift+Tab) — 8 attempts → 2; catch ambiguity early", "Delegate with & — IDE and terminal stay completely free", "Sessions as durable work — start on workstation, steer from phone, review from laptop"] }'
  :progressDots='{ current: 6, total: 6, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
  insight="The session is the unit of work, not the shell — start anywhere, steer anywhere, resume anywhere"
/>

---

<!-- SLIDE: Part 3 &#8212; Work Where the Problem Is -->

<SectionOpenerSlide
  :partNumber="3"
  title="Work Where the Problem Is"
  subtitle="Remote sessions &#8212; the last distance falls"
  :cards='[
    { icon: "&#x1F310;", title: "&#45;&#45;remote Flag", blurb: "Start on any machine, steer from any device" },
    { icon: "&#x1F4F1;", title: "Mobile Steering", blurb: "URL/QR code to GitHub.com or Mobile" },
    { icon: "&#x1F517;", title: "Session Portability", blurb: "Devices are viewports, not anchors" }
  ]'
  :terminal='{ context: "SSH moves your keystrokes", detail: "&#45;&#45;remote moves a reasoning session" }'
/>

---

<!-- SLIDE: How --remote Works -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="🌐"
  pillLabel="Work Where the Problem Is"
  title="Remote Sessions: The Last Distance Falls"
  codePosition="left"
  :code='{ language: "bash", content: "# SSH into production\n$ ssh ops@prod-server-3\n$ copilot --remote\n─────────────────────\n🔗 Remote session started.\nMonitor and steer from:\n  github.com/copilot/sessions/abc123\n  [QR CODE]\n─────────────────────\n# Or start mid-session:\n> /remote" }'
  :features='[
    { icon: "👀", title: "See what Copilot is doing", description: "Real-time visibility from phone, tablet, or any browser" },
    { icon: "🎮", title: "Approve and steer", description: "Approve permissions, send steering messages, inject new prompts from any device" },
    { icon: "🔄", title: "Resume anywhere", description: "copilot --resume from a completely different machine — context travels with the session" }
  ]'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Why --remote Matters -->
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="🌐"
  pillLabel="Work Where the Problem Is"
  title="The Session Becomes Portable, Not the Machine"
  :columns='[
    { icon: "💾", title: "Work stays where it lives", description: "Logs never leave the production boundary. No scp, no rsync, no uploading to third-party tools. Compliance-friendly by default." },
    { icon: "🏃", title: "Momentum survives context changes", description: "Walking to a meeting, switching devices, paged at 2 AM — the session is continuous. You do not restart; you reconnect." },
    { icon: "📱", title: "Devices are interchangeable viewports", description: "Your laptop, phone, and tablet all connect to the same durable AI work session. The session is the entity; devices just display it." }
  ]'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
  insight="SSH moves your keystrokes. --remote moves a reasoning session."
/>

---

<!-- SLIDE: Combination Patterns -->
<FrameworkMappingRowsSlide
  :partNumber="3"
  pillIcon="🌐"
  pillLabel="Work Where the Problem Is"
  title="--remote Composes with Everything"
  subtitle="The flag that multiplies every other capability"
  :rows='[
    { "label": "Plan + --remote", "description": "Safer live-system ops — AI asks before touching production. Critical when approving from a phone.", "tag": "safer ops" },
    { "label": "/fleet + --remote", "description": "Coordinate across multiple environments simultaneously. One prompt, five servers, parallel execution.", "tag": "parallel" },
    { "label": "Cloud + --remote", "description": "Persistent infra patrol — agent watches, investigates anomalies, reports findings. Review from any device.", "tag": "24/7 watch" },
    { "label": "Memory + --remote", "description": "When you /resume from a new device, repo memory and context travel with it — no re-explaining.", "tag": "/resume" },
    { "label": "tmux + --remote", "description": "Sessions survive SSH disconnects. Combine with tmux or screen for true persistence.", "tag": "persistent" }
  ]'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Walking-to-Meeting Demo -->
<AITerminalTranscriptSlide
  :partNumber="3"
  pillIcon="🌐"
  pillLabel="Work Where the Problem Is"
  title="The Walking-to-Meeting Debug"
  subtitle="Alert fires 3 min before standup. You start and finish without stopping."
  :transcript='[
    { "type": "thinking", "label": "# 9:02 AM — Alert fires. SSH into staging." },
    { "type": "prompt", "text": "ssh ops@staging-auth-01" },
    { "type": "prompt", "text": "copilot --remote" },
    { "type": "user", "text": "The auth service is returning 503. Debug it." },
    { "type": "divider" },
    { "type": "thinking", "label": "# 9:05 AM — Scan QR code. Grab your bag." },
    { "type": "thinking", "label": "# 9:07 AM — Walking to standup. Phone shows:" },
    { "type": "outcome", "text": "Found: JWT_SECRET missing from staging env." },
    { "type": "divider" },
    { "type": "thinking", "label": "# From phone:" },
    { "type": "user", "text": "Check if other services depend on that secret" },
    { "type": "outcome", "text": "Copilot: 2 more services affected. Proposing fix." },
    { "type": "divider" },
    { "type": "thinking", "label": "# 9:12 AM — Walk into standup:" },
    { "type": "response", "lines": ["Staging auth is fixed. 3 services were affected."] }
  ]'
  footerMetric="No restart · No sacrifice · Alert to resolution: 10 minutes"
  :progressDots='{ current: 4, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 &#8212; Patterns That Actually Stick -->

<SectionOpenerSlide
  :partNumber="4"
  title="Patterns That Actually Stick"
  subtitle="Use cases that survive contact with reality"
  :cards='[
    { icon: "&#x1F50D;", title: "Log Forensics", blurb: "12GB of logs, zero data transfer" },
    { icon: "&#x1F6E1;&#xFE0F;", title: "Infra Patrol", blurb: "Persistent monitoring with reasoning" },
    { icon: "&#x1F310;", title: "GitHub Integration", blurb: "Issues, PRs, workflows from terminal" }
  ]'
  :terminal='{ context: "Bring reasoning to the data", detail: "instead of moving the data to the reasoning" }'
/>

---

<!-- SLIDE: Log Forensics -->
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="🚀"
  pillLabel="Patterns That Actually Stick"
  title="Log Forensics Without Data Transfer"
  codePosition="left"
  :code='{ language: "bash", content: "# On the server where logs live\n$ ssh analytics@log-server\n$ copilot --remote\n─────────────────────\n> \"Analyze access logs from the\n  last 24 hours. Find top IPs\n  with 401s on /api/auth.\n  Check for credential stuffing.\"\n─────────────────────\n[runs: grep, awk, sort, uniq]\nFound: 3 IPs with >10K attempts.\nPattern: sequential usernames.\nFix: Block at WAF." }'
  :features='[
    { icon: "🔒", title: "Logs never leave the machine", description: "No scp, no rsync, no uploading to third-party tools — PII stays in the production boundary" },
    { icon: "⚡", title: "Speed at scale", description: "Analyzing locally is orders of magnitude faster than transferring 12GB — some logs are too big to download" },
    { icon: "🧠", title: "AI reasons, not just greps", description: "Detects patterns like credential stuffing and sequential usernames that grep alone would miss" }
  ]'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Infra Patrol & Multi-Machine -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="🚀"
  pillLabel="Patterns That Actually Stick"
  title="Infrastructure Patrol & Multi-Machine Orchestration"
  :left='{ header: "🛡️ Persistent Infra Patrol", items: ["Start with: tmux new -s copilot-patrol && copilot --remote --allow-tool shell(kubectl)", "Prompt: Monitor K8s cluster, check pod health every 5 min, alert if abnormal", "Monitoring says CPU at 92% — AI patrol says why and proposes a fix"] }'
  :right='{ header: "🌐 Multi-Machine Orchestration", items: ["Open copilot --remote on prod-db-1, prod-api-3, and prod-worker-7 simultaneously", "Single prompt: check disk, validate SSL, compare deployed versions", "Results merged into one report — your browser becomes a console for distributed AI ops"] }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
  insight="Persistent monitoring that reasons — not just checks health, but investigates anomalies"
/>

---

<!-- SLIDE: GitHub.com Integration -->
<FourCardGridSlide
  :partNumber="4"
  pillIcon="🚀"
  pillLabel="Patterns That Actually Stick"
  title="GitHub.com from Your Terminal"
  :cards='[
    { icon: "📋", title: "Issues", description: "List open issues assigned to you, start working on one, or raise an issue — all from the terminal" },
    { icon: "🔄", title: "Pull Requests", description: "List open PRs, check changes in a PR, merge all open PRs — without context-switching to the browser" },
    { icon: "⚙️", title: "Actions Workflows", description: "Create a workflow that runs eslint on PRs, push and open a PR — described in English, executed by Copilot" },
    { icon: "💡", title: "Key Insight", description: "GitHub.com becomes an extension of your terminal — describe a change in English, end up with a PR on GitHub.com" }
  ]'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
  insight="The gap between terminal work and GitHub workflows disappears — describe once, ship everywhere"
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="From Manual Commands to AI at the Point of Work"
  :leftItems='["SSH in, run commands, copy-paste output into chat", "8 trial-and-error debugging attempts", "Download logs, analyze locally, lose compliance", "Wait until you are at your desk to respond"]'
  :rightItems='["AI runs where the problem is, steers from anywhere", "2 attempts with Plan Mode clarifying intent", "Log forensics on-server, zero data transfer", "Steer from phone, resolve during the walk"]'
  :metrics='[
    { value: "84% &#8594; covered", detail: "Terminal-native AI for the non-coding majority" },
    { value: "8 &#8594; 2 attempts", detail: "Plan Mode catches ambiguity before code" },
    { value: "0 bytes transferred", detail: "Log forensics stays on the server" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Install CLI and run your first plan mode task", "Try /ide to open a file in VS Code mid-session", "Run &#45;&#45;remote on a staging server and scan the QR code", "Explore built-in agents: ask a debug question"]'
  :thisWeek='["Write .github/copilot-instructions.md for your repo", "Add copilot -p to one CI/CD pipeline for failure analysis", "Run a /fleet task across parallel workstreams", "Delegate a long task with &amp; and verify IDE stays free"]'
  :thisMonth='["Automate a repetitive GitHub workflow end-to-end", "Build a multi-step fleet pipeline for your project", "Try log forensics on a server with &#45;&#45;remote", "Create team-wide custom instructions and share them"]'
  footer="Run plan mode on a task you do daily &#8212; it shows exactly what the agent will do before acting."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Official Documentation", color: "cyan", items: [
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli", label: "About GitHub Copilot CLI", description: "Core concepts and capabilities" },
        { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/steer-remotely", label: "Remote Control Sessions", description: "Monitor and steer sessions from web and mobile" },
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-remote-access", label: "Remote Access Administration", description: "Administering remote access for Copilot Business/Enterprise" },
        { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet", label: "Running tasks in parallel with /fleet", description: "Parallel orchestration documentation" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli", label: "Use Copilot CLI", description: "Command syntax and workflows" },
        { href: "https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli", label: "Install Copilot CLI", description: "Setup for all platforms" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-instructions", label: "Custom instructions", description: "Repository-specific behavior configuration" }
    ] },
    { title: "Latest Features &amp; Community", color: "purple", items: [
        { href: "https://github.blog/changelog/2026-04-13-remote-control-cli-sessions-on-web-and-mobile-in-public-preview/", label: "Remote control CLI on web &amp; mobile", description: "April 2026 announcement &#8212; public preview" },
        { href: "https://github.blog/changelog/2026-01-21-github-copilot-cli-plan-before-you-build-steer-as-you-go/", label: "Plan Mode announcement", description: "Plan before you build &#8212; steer as you go" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server", label: "Add an MCP server", description: "Extending with external tools" },
        { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing", label: "Finding and installing plugins", description: "Plugin ecosystem and marketplaces" },
        { href: "https://github.com/github/copilot-cli", label: "Public repository", description: "Issue tracking and community discussions" },
        { href: "https://github.com/orgs/community/discussions/191814", label: "Community discussion", description: "Share your favorite use cases and locations" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="Thank You"
  subtitle="GitHub Copilot CLI: AI at the Point of Work"
  :cards="[
    { icon: '&#x1F3AF;', value: 'Plan First', detail: 'Shift+Tab before building', subdetail: '8 attempts &#8594; 2 with upfront planning' },
    { icon: '&#x1F310;', value: 'Start Anywhere', detail: '&#45;&#45;remote puts AI where the problem is', subdetail: 'Steer from phone, laptop, or browser' },
    { icon: '&#x1F680;', value: 'Resume Anywhere', detail: 'Sessions are durable work, not ephemeral chat', subdetail: 'The terminal was never the destination' },
  ]"
  prompt="Start anywhere. Steer anywhere. Resume anywhere."
/>

---
src: ./copilot-cli-reference.md
---
