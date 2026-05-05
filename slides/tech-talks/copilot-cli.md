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
title: "GitHub Copilot CLI: AI at the Point of Work"
mdc: true
section: Developers
status: active
updated: 2026-05-05
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
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="GitHub Copilot CLI"
  subtitle="AI at the Point of Work"
  tagline="Think anywhere. Steer anywhere. Learn always."
  meta="45 min · Developers & DevOps Engineers"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="How do I bring AI to where the work actually is — and keep steering it from wherever I am?"
  subtext="The terminal sees everything VS Code can&#39;t —"
  highlight="what unlocks when AI can follow you into the ~70% of your day that happens outside the editor?"
  :cards='[
    {"icon": "👩‍💻", "title": "Developer", "description": "Your AI assistant can&#39;t see the container logs, the CI failure, or the env var mismatch — it only sees source files."},
    {"icon": "🛠️", "title": "DevOps Engineer", "description": "Incidents happen on servers you can&#39;t always reach. Log forensics, CI triage, and container debugging need AI where data lives."},
    {"icon": "⚡", "title": "CLI Power User", "description": "You already live in the terminal. The question is whether AI can meet you there without slowing you down."},
    {"icon": "⏱️", "title": "~70% of dev time", "description": "spent outside the editor on debugging, deployments, log analysis, CI triage — Atlassian DevEx 2025"},
    {"icon": "🔄", "title": "8→2 debug attempts", "description": "Plan Mode catches misunderstandings before implementation — collaborative planning replaces trial-and-error"},
    {"icon": "⚡", "title": "25→5 min CI/CD", "description": "Programmatic mode drops build failure investigation from 25 minutes to 5 with zero human intervention"}
  ]'
/>

---

<!-- SLIDE: TOC -->
<TocSlide
  title="GitHub Copilot CLI"
  subtitle="Think Before You Build → Work From Anywhere → Sessions That Learn → Scale Beyond Yourself"
  :sections='[
    {"icon": "🧠", "title": "Think Before You Build", "blurb": "Close the intent gap — Plan Mode asks before it acts, aligns before it generates", "slide": 4},
    {"icon": "📱", "title": "Work From Anywhere", "blurb": "Close the geography gap — modes, remote sessions, CI/CD automation", "slide": 7},
    {"icon": "♾️", "title": "Sessions That Learn", "blurb": "Close the memory gap — /chronicle standup, tips, instruction proposals", "slide": 12},
    {"icon": "⚡", "title": "Scale Beyond Yourself", "blurb": "Close the reach gap — agents, /fleet fan-out, custom agents and plugins", "slide": 17}
  ]'
/>

---

<!-- SLIDE: Part 1 Opener -->
<SectionOpenerSlide
  :partNumber="1"
  pillIcon="🧠"
  pillLabel="Think Before You Build"
  title="Think Before You Build"
  subtitle="Close the intent gap — most AI failures start with misunderstood intent, not bad code."
  :cards='[
    {"icon": "🎯", "title": "Ask Before Acting", "blurb": "Plan Mode asks clarifying questions — like a senior engineer would."},
    {"icon": "🔄", "title": "8 Attempts → 2", "blurb": "Aligned intent eliminates the guess-and-check cycle."},
    {"icon": "⚡", "title": "45 min → 8 min", "blurb": "Docker root cause found on the second targeted check."}  ]'
  :terminal='{"context": "$ copilot (Shift+Tab)", "detail": "Plan Mode — collaborative planning replaces trial-and-error"}'
/>

---

<!-- SLIDE: Plan Mode Workflow -->
<WorkflowShowdownStepsSlide
  :partNumber="1"
  pillIcon="🧠"
  pillLabel="Think Before You Build"
  title="Plan Mode: Align First, Implement Second"
  :progressDots='{"current": 1, "total": 2, "activeColor": "bg-cyan-400 shadow-lg shadow-cyan-500/50"}'
  leftLabel="Without Plan Mode"
  rightLabel="With Plan Mode (Shift+Tab)"
  :steps='[
    {"left": {"label": "Describe the feature or bug"}, "right": {"label": "Describe the feature or bug"}},
    {"left": {"label": "AI guesses at intent, generates code"}, "right": {"label": "AI asks 2–3 clarifying questions"}},
    {"left": {"label": "Review, find wrong assumptions, iterate"}, "right": {"label": "You answer — AI proposes a plan"}},
    {"left": {"label": "Repeat 6–8 more times to converge"}, "right": {"label": "Approve the plan — AI implements"}}
  ]'
  :outcomeLeft='{"label": "45 min, 8 failed attempts"}'
  :outcomeRight='{"label": "8 min, root cause found"}'
/>

---

<!-- SLIDE: Docker Debug Demo -->
<AITerminalTranscriptSlide
  :partNumber="1"
  pillIcon="🐳"
  pillLabel="Think Before You Build"
  title="Plan Mode in Action — Docker Debugging"
  :progressDots='{"current": 2, "total": 2, "activeColor": "bg-cyan-400 shadow-lg shadow-cyan-500/50"}'
  :transcript='[
    {"type": "prompt", "text": "Debug why the backend container won&#39;t start"},
    {"type": "thinking"},
    {"type": "response", "lines": ["Should I check docker-compose config, container logs, or both?", "Do you want environment variable analysis included?", "Start with network config or service dependencies?"]},
    {"type": "user", "text": "Start with logs, then check config if needed"},
    {"type": "response", "lines": ["Plan: (1) Retrieve container logs", "(2) Analyze error patterns and stack traces", "(3) Inspect docker-compose.yml if logs suggest config issue", "Proceed? (y/n)"]},
    {"type": "user", "text": "y"},
    {"type": "outcome", "text": "Found: Port 5000 mapped to 5001. Fix: change ports from 5001:5000 to 5000:5000"}
  ]'
  footerMetric="Two targeted checks, one root cause — questions first eliminated 6 wasted attempts"
/>

---

<!-- SLIDE: Part 2 Opener -->
<SectionOpenerSlide
  :partNumber="2"
  pillIcon="📱"
  pillLabel="Work From Anywhere"
  title="Work From Anywhere"
  subtitle="Close the geography gap — the session follows you across machines, devices, and disconnects."
  :cards='[
    {"icon": "📱", "title": "Sessions, Not Terminals", "blurb": "Terminals are viewports. Sessions are the work unit."},
    {"icon": "🌐", "title": "--remote Flag", "blurb": "Steer from GitHub.com or Mobile via URL/QR code."},
    {"icon": "⚡", "title": "25 min → 5 min", "blurb": "CI/CD triage with zero human intervention."}
  ]'
  :terminal='{"context": "$ copilot --remote", "detail": "60-second demo — steer from your phone before explaining how"}'
/>

---

<!-- SLIDE: Remote Cold Open -->
<HeroStatSlide
  :partNumber="2"
  pillIcon="📱"
  pillLabel="Work From Anywhere"
  title="A Phone. A Production Server. One Session."
  subtitle="Start on any machine. Steer from any device."
  :hero='{"value": "--remote", "label": "one flag that closes the geography gap"}'
  :supporting='[
    {"icon": "📱", "title": "Any device", "description": "GitHub.com, GitHub Mobile, or any browser — full live session control from anywhere"},
    {"icon": "🔒", "title": "Logs stay on-machine", "description": "12GB of auth logs analyzed where they live — no scp, no data transfer, no compliance risk"},
    {"icon": "🔗", "title": "Session continuity", "description": "Phone connects to the same session — context, history, and running commands all intact"}
  ]'
  :insight='{"icon": "💡", "text": "SSH moves your keystrokes. --remote moves a reasoning session."}'
  :progressDots='{"current": 1, "total": 4, "activeColor": "bg-blue-400 shadow-lg shadow-blue-500/50"}'
/>

---

<!-- SLIDE: Operating Modes -->
<ThreeColumnCardSlide
  :partNumber="2"
  pillIcon="⚙️"
  pillLabel="Work From Anywhere"
  title="Four Ways to Engage a Session"
  :progressDots='{"current": 2, "total": 4, "activeColor": "bg-blue-400 shadow-lg shadow-blue-500/50"}'
  :columns='[
    {"icon": "💻", "title": "Interactive", "items": ["Conversational, persistent context", "Plan Mode + real-time steering", "Best for: debugging, exploration, unknown root causes", "Use /ide to open files in VS Code mid-session"]},
    {"icon": "⚙️", "title": "Programmatic", "items": ["Headless, stateless single-command", "Structured output for pipelines", "Best for: CI/CD, build failure analysis", "25 min → 5 min automated triage"]},
    {"icon": "☁️", "title": "Cloud Delegation", "items": ["Background execution in GitHub&#39;s cloud", "IDE and terminal stay completely free", "Best for: security audits, large refactors", "PR created when agent finishes"]}
  ]'
/>

---

<!-- SLIDE: CI/CD Automation -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="🔁"
  pillLabel="Work From Anywhere"
  title="CI/CD Build Failure — Zero Human Intervention"
  :progressDots='{"current": 3, "total": 4, "activeColor": "bg-blue-400 shadow-lg shadow-blue-500/50"}'
  :code='{"language": "yaml", "content": "- name: Analyze with Copilot CLI\n  if: failure()\n  run: |\n    copilot -p Analyze build failure and suggest fixes\n      --allow-tool shell(gh)\n      --allow-tool shell(git)\n      > failure-analysis.txt", "filename": ".github/workflows/build.yml"}'
  codePosition="left"
  :features='[
    {"icon": "⚡", "title": "25 min → 5 min", "description": "Build failure investigation time with automated pattern recognition across historical failures"},
    {"icon": "🤖", "title": "Zero human intervention", "description": "Runs only on failure, posts analysis as a PR comment — no developer action required"},
    {"icon": "🔒", "title": "--allow-tool scoping", "description": "Explicit permission grants per tool — never blanket access in production pipelines"}
  ]'
/>

---

<!-- SLIDE: Log Forensics -->
<BeforeAfterPanelsSlide
  :partNumber="2"
  pillIcon="🔍"
  pillLabel="Work From Anywhere"
  title="Log Forensics Without Data Transfer"
  :progressDots='{"current": 4, "total": 4, "activeColor": "bg-blue-400 shadow-lg shadow-blue-500/50"}'
  :before='{"header": "Old Approach", "items": ["scp a subset of logs to your laptop", "grep locally — lose context on the full picture", "Sensitive data leaves the production boundary", "12GB logs too large to download at all"]}'
  :after='{"header": "With --remote", "items": ["copilot --remote on the log server — AI lives where the logs live", "Analyze 24 hours of auth logs, find credential-stuffing patterns, recommend WAF rules", "Logs never leave the machine — PII stays within the production boundary", "Local analysis is orders of magnitude faster than transfer"]}'
/>

---

<!-- SLIDE: Part 3 Opener -->
<SectionOpenerSlide
  :partNumber="3"
  pillIcon="♾️"
  pillLabel="Sessions That Learn"
  title="Sessions That Learn"
  subtitle="Close the memory gap — sessions that accumulate value across compaction, resume, and time."
  :cards='[
    {"icon": "♾️", "title": "Infinite Sessions", "blurb": "Auto-compaction at 95% — sessions never hit a wall."},
    {"icon": "📋", "title": "/chronicle", "blurb": "Standup, tips, instruction proposals from history."},
    {"icon": "✨", "title": "AI That Gets Better", "blurb": "Proposes its own instruction improvements. Pause here."}
  ]'
  :terminal='{"context": "$ copilot > /chronicle standup", "detail": "Yesterday&#39;s work summarized in seconds from session history"}'
/>

---

<!-- SLIDE: Session Continuity Foundation -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="♾️"
  pillLabel="Sessions That Learn"
  title="Sessions That Survive Everything"
  :progressDots='{"current": 1, "total": 4, "activeColor": "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
  :left='{"header": "Auto-Compaction", "items": ["Triggers automatically at 95% token limit — no interruptions", "Important context kept: decisions made, approaches tried, facts learned", "Manual control: /compact anytime, Esc to cancel", "Monitor: /context shows token breakdown, /usage shows session stats"]}'
  :right='{"header": "Session Resume", "items": ["copilot --continue — resume the most recent session", "copilot --resume — pick from recent sessions interactively", "/rename NEW_NAME — label sessions for easy retrieval", "~/.copilot/session-state/ — local, private to your account"]}'
/>

---

<!-- SLIDE: /chronicle standup + tips -->
<BeforeAfterMetricsSlide
  :partNumber="3"
  pillIcon="📋"
  pillLabel="Sessions That Learn"
  title="/chronicle — From Session History to Intelligence"
  :progressDots='{"current": 2, "total": 4, "activeColor": "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
  :before='{"header": "Before /chronicle", "items": ["Reconstruct what you did from memory or git log", "Write your own standup from scratch every morning", "Miss patterns — same mistakes repeated across sessions", "Guess what to add to .github/copilot-instructions.md"]}'
  :after='{"header": "With /chronicle", "items": ["/chronicle standup — session history → standup in 30 seconds", "/chronicle tips — AI surfaces your usage patterns and suggests improvements", "/chronicle instructions — proposes specific additions to copilot-instructions.md", "Ask: What did I work on yesterday? — answered from session history"]}'
  :metrics='[
    {"value": "~10 min → 30 sec", "label": "standup prep time"},
    {"value": "guesswork → evidence", "label": "instruction improvements"},
    {"value": "0 → ongoing", "label": "personalized tips per session"}
  ]'
/>

---

<!-- SLIDE: /chronicle instructions — the emotional peak -->
<HeroStatSlide
  :partNumber="3"
  pillIcon="✨"
  pillLabel="Sessions That Learn"
  title="AI That Proposes to Improve Its Own Instructions"
  subtitle="Copilot reviews your sessions and proposes improvements to its own instructions"
  :hero='{"value": "/chronicle", "label": "observation → advice → automation"}'
  :supporting='[
    {"icon": "📋", "title": "/chronicle standup", "description": "Yesterday&#39;s work summarized from session history — no reconstruction needed"},
    {"icon": "💡", "title": "/chronicle tips", "description": "AI surfaces patterns in how you work and suggests personalized improvements"},
    {"icon": "✨", "title": "/chronicle instructions", "description": "AI proposes specific additions to .github/copilot-instructions.md — then asks to apply"}
  ]'
  :insight='{"icon": "⏸️", "text": "Pause here. The only feature where Copilot improves how it works with you — by watching you work."}'
  :progressDots='{"current": 3, "total": 4, "activeColor": "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
/>

---

<!-- SLIDE: Repository Memory -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🧠"
  pillLabel="Sessions That Learn"
  title="Repository Memory: Cross-Session Knowledge"
  :progressDots='{"current": 4, "total": 4, "activeColor": "bg-indigo-400 shadow-lg shadow-indigo-500/50"}'
  :left='{"header": "The Problem", "items": ["Spending 10 min re-explaining your codebase at session start", "Docker-compose networking, deployment targets, team conventions — every time", "Time spent explaining = time not spent building"]}'
  :right='{"header": "Repository Memory", "items": ["Learned facts about your codebase persist across sessions automatically", "Custom instructions at user, repo, and org level — all combine additively", "Combined with /chronicle instructions: conventions become permanent", "One-time investment — inherit the context automatically forever"]}'
/>

---

<!-- SLIDE: Part 4 Opener -->
<SectionOpenerSlide
  :partNumber="4"
  pillIcon="⚡"
  pillLabel="Scale Beyond Yourself"
  title="Scale Beyond Yourself"
  subtitle="Close the reach gap — agents carry your chronicle&#39;s learned preferences forward."
  :cards='[
    {"icon": "🤖", "title": "Built-in Agents", "blurb": "Explore, Task, Plan, Code-review — auto-routed."},
    {"icon": "⚡", "title": "/fleet Fan-Out", "blurb": "Parallel subagents, separate context windows, merged."},
    {"icon": "🔌", "title": "Ecosystem", "blurb": "Custom agents + plugins carry chronicle&#39;s preferences."}
  ]'
  :terminal='{"context": "$ copilot > /fleet implement all phases", "detail": "One prompt → parallel subagents → merged results"}'
/>

---

<!-- SLIDE: Built-in Agents -->
<FourCardGridSlide
  :partNumber="4"
  pillIcon="🤖"
  pillLabel="Scale Beyond Yourself"
  title="Built-in Agents — Auto-Routed by Intent"
  :progressDots='{"current": 1, "total": 3, "activeColor": "bg-purple-400 shadow-lg shadow-purple-500/50"}'
  :cards='[
    {"icon": "🔍", "title": "Explore", "description": "Fast codebase analysis — focused answers under 300 words, safe to run in parallel"},
    {"icon": "⚙️", "title": "Task", "description": "Execute commands with smart output filtering — brief summary on success, full output on failure"},
    {"icon": "📋", "title": "Plan", "description": "Analyze dependencies and create multi-step strategies you review before execution"},
    {"icon": "👁️", "title": "Code-Review", "description": "High signal-to-noise review — only bugs, security issues, and logic errors. Invoke with /review"}
  ]'
  :insight='{"icon": "🤖", "text": "You don&#39;t invoke agents explicitly — Copilot routes based on what you&#39;re asking for."}'
/>

---

<!-- SLIDE: /fleet fan-out -->
<ProblemSolutionOutcomeSlide
  :partNumber="4"
  pillIcon="⚡"
  pillLabel="Scale Beyond Yourself"
  title="/fleet — Explicit Parallel Execution"
  :progressDots='{"current": 2, "total": 3, "activeColor": "bg-purple-400 shadow-lg shadow-purple-500/50"}'
  :problem='{"header": "Sequential Tasks Are Slow", "items": ["Large tasks run one step at a time — total time is the sum of every subtask", "Refactor N files, create N tests, analyze N services: each step waits for the previous", "One long context window accumulates noise across unrelated subtasks"]}'
  :solution='{"header": "/fleet Orchestrates Parallel Execution", "items": ["/fleet decomposes the plan into subtasks and assesses dependencies automatically", "Assigns each subtask to a subagent in its own context window — no cross-contamination", "Parallel subtasks run simultaneously; sequential ones run in the right order"]}'
  :outcome='{"header": "Time Is the Longest Subtask, Not the Sum", "items": ["Results merged automatically by the orchestrator — one coherent output", "Pair with Shift+Tab autopilot: plan → Accept and build on autopilot + /fleet", "Custom agents in .github/agents/ are picked up automatically for matching subtasks"]}'
/>

---

<!-- SLIDE: Ecosystem close -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="🔌"
  pillLabel="Scale Beyond Yourself"
  title="Extend the Fleet — Custom Agents &amp; Plugins"
  :progressDots='{"current": 3, "total": 3, "activeColor": "bg-purple-400 shadow-lg shadow-purple-500/50"}'
  :left='{"header": "Custom Agents", "items": ["Create specialized agents for your team&#39;s workflows", "~/.copilot/agents/ — user-level, all projects", ".github/agents/ — repo-level, current project", ".github-private/agents/ — org-level, all org projects"]}'
  :right='{"header": "Plugins", "items": ["Install community plugins from marketplaces", "copilot plugin marketplace browse awesome-copilot", "copilot plugin install database-data-management@awesome-copilot", "Domain expertise from the community — extend without building from scratch"]}'
/>

---

<!-- SLIDE: Before After -->
<BeforeAfterSlide
  header="From Guessing and Iterating to Steering and Learning"
  :leftItems='["AI guesses at intent — you iterate 8+ times to converge", "SSH into server, manually copy-paste logs into chat window", "Session ends — all context lost, re-explain from scratch next time", "Long tasks tie up your IDE and terminal until the agent finishes"]'
  :rightItems='["Plan Mode asks first — 2 targeted attempts after you approve the plan", "--remote puts AI on the server, steer from your phone, logs never leave", "/chronicle standup, tips, and instruction proposals — sessions accumulate value", "Cloud delegation with & prefix — both tools stay completely free, PR arrives when done"]'
  :metrics='[{"value": "8→2", "detail": "debug attempts with Plan Mode"}, {"value": "45→8 min", "detail": "Docker debugging time"}, {"value": "25→5 min", "detail": "CI/CD failure triage"}]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Install Copilot CLI: gh copilot or npm install -g @github/copilot — ready in 2 minutes", "Try Plan Mode: press Shift+Tab, describe a feature or bug — watch it ask before it acts", "Run /chronicle standup after any session — see what Copilot learned about your day"]'
  :thisWeek='["Try --remote on staging: SSH in, run copilot --remote, scan the QR code on your phone", "Add a CI/CD failure step: drop copilot -p into a GitHub Actions workflow for zero-human triage", "Run /chronicle instructions — get Copilot&#39;s read on what to add to your copilot-instructions.md"]'
  :thisMonth='["Delegate a long task with & prefix — security audit or large refactor, IDE stays completely free", "Set up /fleet autopilot: Shift+Tab → plan → Accept plan and build on autopilot + /fleet", "Create a custom agent in .github/agents/ — fleet picks it up automatically for matching subtasks"]'
  footer="Review Copilot CLI Best Practices · Explore Copilot Hooks for governance · See the command reference appendix"
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    {"title": "📖 Official Documentation", "color": "cyan", "items": [
      {"label": "About GitHub Copilot CLI", "href": "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli", "description": "Core concepts, capabilities, and operating modes"},
      {"label": "Using GitHub Copilot CLI", "href": "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli", "description": "Command syntax, options, and slash commands"},
      {"label": "Steering a session remotely", "href": "https://docs.github.com/en/copilot/how-tos/copilot-cli/steer-remotely", "description": "Using --remote to monitor and steer sessions from web and mobile"},
      {"label": "Using Copilot CLI session data", "href": "https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle", "description": "/chronicle: standup reports, tips, and instruction proposals"},
      {"label": "Running tasks in parallel with /fleet", "href": "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet", "description": "Explicit fan-out: orchestrator, subagents, and result merging"}
    ]},
    {"title": "🛠️ Additional Resources", "color": "purple", "items": [
      {"label": "Installing GitHub Copilot CLI", "href": "https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli", "description": "Setup for npm, Homebrew, WinGet"},
      {"label": "Copilot CLI Best Practices", "href": "https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices", "description": "Optimization patterns and anti-patterns"},
      {"label": "Finding and installing plugins", "href": "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing", "description": "Plugin discovery, installation, and marketplace management"}
    ]},
    {"title": "📊 Research Cited", "color": "indigo", "items": [
      {"label": "Atlassian State of Developer Experience 2025", "href": "https://www.atlassian.com/software/developer-experience", "description": "Developers spend ~30% of time writing code; ~70% on non-coding work (debugging, CI, deployments)"}
    ]}
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="AI at the Point of Work"
  subtitle="Think anywhere. Steer anywhere. Learn always."
  :cards='[
    {"icon": "🧠", "value": "Close the Intent Gap", "detail": "Plan Mode: 8 attempts → 2, 45 min → 8 min — ask before building"},
    {"icon": "📱", "value": "Close the Geography Gap", "detail": "--remote: AI lives where the problem is, steer from any device"},
    {"icon": "✨", "value": "Close the Memory Gap", "detail": "/chronicle turns sessions into standup reports, tips, and instruction proposals"}
  ]'
  prompt="What&#39;s the first gap you want to close?"
/>

---
src: ./copilot-cli-reference.md
---