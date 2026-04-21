---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot SDK: Build AI-Powered Tools for Your Workflows
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot SDK
module: tech-talks/copilot-sdk
mdc: true
section: Customization & Context
status: active
updated: 2026-04-14
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
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="GitHub Copilot SDK"
subtitle="Build AI-Powered Tools for Your Workflows"
tagline="Transform repetitive analysis into automated intelligence"
meta="Tech Talk · 45 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I embed Copilot's agentic capabilities directly into my own applications and workflows?"
subtext="When AI automation needs go beyond IDE and CLI — release notes, test analysis —"
highlight="the SDK provides production-tested agent runtime as a programmable library."
:cards='[
  { icon: "🔧", title: "Backend Engineers Building Automation", description: "Embed Copilot agent runtime directly in Node.js scripts and CI/CD pipelines" },
  { icon: "🚀", title: "DevOps Teams Owning CI/CD Pipelines", description: "Auto-generate release notes, analyze test failures, and triage flaky tests" },
  { icon: "🏗️", title: "Platform Teams Creating Internal Tools", description: "Jira, Slack, and GitHub integrations with AI decision-making built right in" },
  { title: "Automation Gap", description: "AI capabilities needed beyond IDE and CLI — SDK bridges this gap programmatically" },
  { title: "Production Runtime", description: "No DIY agent loops — SDK provides battle-tested Copilot runtime as a library" },
  { title: "Integrations Ready", description: "Connect Jira, Slack, and CI/CD with AI that understands your team context" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🏗️", title: "Architecture", subtitle: "How SDK wraps Copilot CLI", blurb: "Agent runtime as a library", slide: 4 },
    { icon: "🚀", title: "Getting Started", subtitle: "Install, configure, first SDK call", blurb: "pip install in 15 minutes", slide: 7 },
    { icon: "🌐", title: "Advanced Patterns", subtitle: "Web APIs and scheduled automation", blurb: "Embed agents in any application", slide: 10 },
    { icon: "📊", title: "Real-World Use Cases", subtitle: "Release notes, test analysis, more", blurb: "2 hours → 10 minutes automation wins", slide: 13 },
  ]'
/>
---

<!-- SLIDE: Part 1 — Architecture & Capabilities -->

<SectionOpenerSlide
  :partNumber="1"
  title="Architecture & Capabilities"
  subtitle="How SDK wraps the Copilot CLI agent runtime"
  :cards='[
    { icon: "🔌", title: "JSON-RPC Interface", blurb: "SDK spawns CLI in server mode via stdio" },
    { icon: "🌐", title: "Multi-Language SDKs", blurb: "Python, TypeScript, Go, .NET" },
    { icon: "⚡", title: "Production Features", blurb: "Streaming, memory, MCP, BYOK, permissions" },
  ]'
  :terminal='{ context: "CLI is the agent runtime", detail: "SDK is how you control it programmatically" }'
/>
---

<!-- SLIDE: How SDK Works -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Architecture</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Communication Flow</div>
<div class="text-xs text-white/50">SDK spawns CLI in server mode and communicates via JSON-RPC over stdio</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="flex items-center justify-center gap-2 flex-wrap mb-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30 text-center min-w-[140px]">
<div class="text-xl mb-1">💻</div>
<div class="text-sm font-semibold text-cyan-300">Your Application</div>
<div class="text-xs opacity-70">Defines prompts & logic</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30 text-center min-w-[140px]">
<div class="text-xl mb-1">📦</div>
<div class="text-sm font-semibold text-blue-300">SDK Client</div>
<div class="text-xs opacity-70">JSON-RPC over stdio</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30 text-center min-w-[140px]">
<div class="text-xl mb-1">🤖</div>
<div class="text-sm font-semibold text-indigo-300">Copilot CLI</div>
<div class="text-xs opacity-70">Agent runtime (server mode)</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30 text-center min-w-[140px]">
<div class="text-xl mb-1">☁️</div>
<div class="text-sm font-semibold text-purple-300">Copilot Service</div>
<div class="text-xs opacity-70">Model inference</div>
</div>
</div>

<div class="grid grid-cols-2 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">SDK Responsibilities</div>
<div class="space-y-1 text-xs">
<div>• Spawns/connects to CLI process</div>
<div>• Manages JSON-RPC communication</div>
<div>• Provides streaming APIs</div>
<div>• Handles lifecycle & errors</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">CLI Responsibilities</div>
<div class="space-y-1 text-xs">
<div>• Planning & tool orchestration</div>
<div>• Multi-turn execution loops</div>
<div>• Context & memory management</div>
<div>• GitHub authentication</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: SDK Capabilities -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="🏗️"
  pillLabel="Architecture"
  title="What You Get"
  :cards='[
    { icon: "🔌", title: "Core Agent Features", description: "Planning & multi-turn execution, tool invocation (files, shell, Git), multiple AI models (GPT-4, Claude), custom agents, skills, tools" },
    { icon: "⚡", title: "Advanced Features", description: "MCP server integration, persistent memory across sessions, real-time streaming responses, BYOK (Bring Your Own Key)" },
    { icon: "🎯", title: "SDK-Specific Advantages", description: "Embed in any application, programmatic prompt control, tool permission sandboxing, error handling & retries" },
    { icon: "🔒", title: "Security & Production", description: "Restricted tool permissions, working directory limits, rate limiting & quotas, production error handling" }
  ]'
  :insight='{ icon: "💡", text: "Same production-tested runtime as Copilot CLI — no rebuilding agent infrastructure." }'
/>

---

<!-- SLIDE: Part 2 — Getting Started -->

<SectionOpenerSlide
  :partNumber="2"
  title="Getting Started"
  subtitle="Install, configure, and make your first SDK call"
  :cards='[
    { icon: "📦", title: "Installation", blurb: "pip install in 15 minutes" },
    { icon: "⚙️", title: "CLI Tool Pattern", blurb: "Release notes generator example" },
    { icon: "🎯", title: "Streamable Results", blurb: "Real-time output handling" },
  ]'
  :terminal='{ context: "Install SDK in 15 minutes, embed agents", detail: "no months-long platform build" }'
/>
---

<!-- SLIDE: Getting Started -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="🚀"
  pillLabel="Getting Started"
  title="Installation & Basic Usage"
  codePosition="left"
  :code='{ language: "python", filename: "basic_chat.py", content: "from github_copilot_sdk import CopilotClient\n\n# Initialize client (spawns CLI in server mode)\nclient = CopilotClient()\n\n# Simple chat interaction\nresponse = client.chat(\"Explain OAuth vs JWT\")\nprint(response.text)\n\n# Streaming for better UX\nfor chunk in client.chat_stream(\"Analyze this repository\"):\n    print(chunk.text, end=\"\", flush=True)" }'
  :features='[
    { icon: "📦", title: "Install SDK", description: "Python: pip install github-copilot-sdk · TypeScript: npm install @github/copilot-sdk · Go: go get github.com/github/copilot-sdk/go" },
    { icon: "✅", title: "Prerequisites", description: "Copilot CLI installed & authenticated, GitHub Copilot subscription, Python 3.8+ / Node 18+ / Go 1.20+ / .NET 6+" },
    { icon: "⚡", title: "First Run", description: "Client spawns CLI in server mode automatically — no separate server process needed" }
  ]'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Pattern 1 - CLI Tool -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">� Getting Started</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Pattern 1: CLI Tool with SDK Backend</div>
<div class="text-xs text-white/50">Example: Release notes generator</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="p-3 bg-gray-950/60 rounded-lg border border-gray-700/50 flex-1 min-h-0 flex flex-col">
<div class="text-xs text-gray-400 mb-2">release-notes.py — Generate customer-facing notes from git commits</div>
<div class="overflow-y-auto flex-1 bg-gray-900/50 rounded p-3 font-mono text-xs text-gray-300 leading-relaxed">
<div class="text-gray-500">#!/usr/bin/env python3</div>
<div><span class="text-purple-400">import</span> argparse</div>
<div><span class="text-purple-400">from</span> github_copilot_sdk <span class="text-purple-400">import</span> CopilotClient</div>
<div class="mt-2"><span class="text-purple-400">def</span> <span class="text-cyan-400">main</span>():</div>
<div class="ml-4">parser = argparse.ArgumentParser(description=<span class="text-amber-300">'Release notes generator'</span>)</div>
<div class="ml-4">parser.add_argument(<span class="text-amber-300">'--from-tag'</span>, required=<span class="text-cyan-400">True</span>)</div>
<div class="ml-4">parser.add_argument(<span class="text-amber-300">'--to-tag'</span>, default=<span class="text-amber-300">'HEAD'</span>)</div>
<div class="ml-4">args = parser.parse_args()</div>
<div class="ml-4 mt-2">client = CopilotClient()</div>
<div class="ml-4">prompt = <span class="text-amber-300">f"""</span></div>
<div class="ml-4"><span class="text-amber-300">Generate release notes from &#123;args.from_tag&#125; to &#123;args.to_tag&#125;.</span></div>
<div class="ml-4"><span class="text-amber-300">Categorize as Features, Fixes, Breaking Changes, Security.</span></div>
<div class="ml-4"><span class="text-amber-300">Explain customer value, not technical implementation.</span></div>
<div class="ml-4"><span class="text-amber-300">"""</span></div>
<div class="ml-4 mt-2">response = client.chat(prompt)</div>
<div class="ml-4"><span class="text-cyan-400">print</span>(response.text)</div>
<div class="mt-2"><span class="text-purple-400">if</span> __name__ == <span class="text-amber-300">'__main__'</span>:</div>
<div class="ml-4">main()</div>
</div>
</div>
<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30 text-center text-xs">
<span class="text-green-200">Outcome: 2 hours → 10 minutes per release (92% time reduction)</span>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Advanced Patterns -->

<SectionOpenerSlide
  :partNumber="3"
  title="Advanced Patterns"
  subtitle="Web APIs and scheduled automation"
  :cards='[
    { icon: "🌐", title: "Web APIs", blurb: "REST endpoints exposing SDK capabilities" },
    { icon: "⏰", title: "Scheduled Tasks", blurb: "Automated analysis on cron schedules" },
    { icon: "🔗", title: "Integration", blurb: "Jira, Slack, CI/CD webhooks" },
  ]'
  :terminal='{ context: "From simple scripts to production services", detail: "embed agents in any application" }'
/>
---

<!-- SLIDE: Pattern 2 - Web API -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="🌐"
  pillLabel="Advanced Patterns"
  title="Pattern 2: Web API with SDK"
  codePosition="left"
  :code='{ language: "python", filename: "app.py", content: "from flask import Flask, request, jsonify\nfrom github_copilot_sdk import CopilotClient\n\napp = Flask(__name__)\nclient = CopilotClient(\n    allowed_tools=[\"file_read\"],\n    working_directory=\"/tmp/pr-diffs\"\n)\n\n@app.route(\"/api/analyze-pr\", methods=[\"POST\"])\ndef analyze_pr():\n    pr_diff = request.json.get(\"diff\")\n    if not pr_diff:\n        return jsonify({\"error\": \"Missing diff\"}), 400\n    prompt = f\"Review this PR for security and logic errors:\"\n    response = client.chat(prompt)\n    return jsonify({\"analysis\": response.text})" }'
  :features='[
    { icon: "🔒", title: "Security", description: "Restricted to read-only tools, sandboxed to /tmp/pr-diffs working directory — no write access" },
    { icon: "🔗", title: "Integration", description: "Expose via webhooks, plug into CI/CD pipelines, or connect to internal dashboards" }
  ]'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Pattern 3 - Scheduled Automation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🌐 Advanced Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Pattern 3: Scheduled Automation</div>
<div class="text-xs text-white/50">Run SDK-powered analysis on a schedule</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="p-3 bg-gray-950/60 rounded-lg border border-gray-700/50 flex-1 min-h-0 flex flex-col">
<div class="text-xs text-gray-400 mb-2">Daily test failure analysis — identifies root causes, flaky tests, suggested fixes</div>
<div class="overflow-y-auto flex-1 bg-gray-900/50 rounded p-3 font-mono text-xs text-gray-300 leading-relaxed">
<div><span class="text-purple-400">import</span> schedule, time, json</div>
<div><span class="text-purple-400">from</span> github_copilot_sdk <span class="text-purple-400">import</span> CopilotClient</div>
<div class="mt-2"><span class="text-purple-400">def</span> <span class="text-cyan-400">analyze_test_failures</span>():</div>
<div class="ml-4"><span class="text-green-400">"""Runs every morning to analyze overnight test failures"""</span></div>
<div class="ml-4">client = CopilotClient()</div>
<div class="ml-4">report = fetch_latest_test_report()  <span class="text-green-400"># External function</span></div>
<div class="ml-4 mt-2">prompt = <span class="text-amber-300">f"""</span></div>
<div class="ml-4"><span class="text-amber-300">Analyze test failures from last 24 hours:</span></div>
<div class="ml-4"><span class="text-amber-300">1. Root causes with confidence scores (high/medium/low)</span></div>
<div class="ml-4"><span class="text-amber-300">2. Flaky tests based on failure patterns</span></div>
<div class="ml-4"><span class="text-amber-300">3. Specific code locations to investigate</span></div>
<div class="ml-4"><span class="text-amber-300">4. Suggested fixes for each failure</span></div>
<div class="ml-4 mt-1"><span class="text-amber-300">Test Report (JSON):</span></div>
<div class="ml-4"><span class="text-amber-300">&#123;json.dumps(report, indent=2)&#125;</span></div>
<div class="ml-4"><span class="text-amber-300">"""</span></div>
<div class="ml-4 mt-2">analysis = client.chat(prompt)</div>
<div class="ml-4">notify_team(analysis.text)  <span class="text-green-400"># Slack, Jira, email</span></div>
<div class="ml-4">create_jira_tickets(parse_issues(analysis.text))</div>
<div class="mt-2"><span class="text-green-400"># Schedule daily at 9:00 AM</span></div>
<div>schedule.every().day.at(<span class="text-amber-300">"09:00"</span>).do(analyze_test_failures)</div>
</div>
</div>
<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30 text-center text-xs">
<span class="text-green-200">45 min → 5 min per failed build | Flaky tests caught on first failure</span>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Real-World Use Cases -->

<SectionOpenerSlide
  :partNumber="4"
  title="Real-World Use Cases"
  subtitle="Production deployments with measurable outcomes"
  :cards='[
    { icon: "📝", title: "Release Notes", blurb: "2 hours → 10 minutes (92% reduction)" },
    { icon: "🧪", title: "Test Analysis", blurb: "45 min → 5 min per failure" },
    { icon: "🚨", title: "Incident Response", blurb: "40% faster MTTR" },
  ]'
  :terminal='{ context: "From manual analysis to automated intelligence", detail: "real time savings at production scale" }'
/>
---

<!-- SLIDE: Use Case 1 - Release Engineering -->
<BeforeAfterMetricsSlide
  :partNumber="4"
  pillIcon="📝"
  pillLabel="Real-World Use Cases"
  title="Release Engineering Automation"
  :before='{ header: "Before SDK", items: ["100-200 commits manual review", "2+ hours per release", "Quality varies by author", "Release managers do git archaeology"] }'
  :after='{ header: "After SDK", items: ["SDK analyzes git history automatically", "10 minutes per release", "Consistent quality every time", "Categorizes Features, Fixes, Breaking Changes, Security"] }'
  :metrics='[
    { value: "2+ hrs", label: "Before" },
    { value: "10 min", label: "After" },
    { value: "92%", label: "Time reduction" }
  ]'
  :insight='{ icon: "✓", text: "Outputs markdown ready for GitHub releases — explains customer value, not technical implementation." }'
/>

---

<!-- SLIDE: Use Case 2 - Test Infrastructure -->
<BeforeAfterMetricsSlide
  :partNumber="4"
  pillIcon="🧪"
  pillLabel="Real-World Use Cases"
  title="Intelligent Test Infrastructure Monitoring"
  :before='{ header: "Before SDK", items: ["Manual log analysis per failure", "45 min average per failed build", "Flaky tests undetected until 3rd failure", "PRs blocked by CI issues"] }'
  :after='{ header: "After SDK", items: ["SDK analyzes test reports automatically", "5 min per failed build", "Flaky tests caught on first failure", "Root causes with confidence scores (high/medium/low)"] }'
  :metrics='[
    { value: "45 min", label: "Before" },
    { value: "5 min", label: "After" },
    { value: "60%", label: "CI blockage reduction" }
  ]'
  :insight='{ icon: "✓", text: "Specific file paths and line numbers for investigation, concrete suggested fixes prioritized by quick wins." }'
/>

---

<!-- SLIDE: Use Case 3 - Code Review Bots -->
<BeforeAfterMetricsSlide
  :partNumber="4"
  pillIcon="🚨"
  pillLabel="Real-World Use Cases"
  title="Code Quality Enforcement Bots"
  :before='{ header: "Before SDK", items: ["Senior engineers check basic standards", "2-3 day wait for feedback", "Review bottleneck on architecture team", "Junior devs stuck on preventable issues"] }'
  :after='{ header: "After SDK Bot", items: ["SDK bot checks standards automatically", "Instant inline feedback on PR", "Seniors focus on architecture & design", "PR throughput doubled"] }'
  :metrics='[
    { value: "50%", label: "Faster reviews" },
    { value: "2x", label: "PR throughput" },
    { value: "Instant", label: "Feedback" }
  ]'
  :insight='{ icon: "✓", text: "Reviews security, performance, error handling, and testing — actionable feedback with line numbers." }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="Manual Analysis to Automated Intelligence"
:leftItems='["Release notes: manual analysis", "Release: 2 hrs per cycle", "CI: bottleneck 60% of time", "Insight: late in process"]'
:rightItems='["Release notes: AI-automated", "Release: 10 min per cycle", "CI: 60% blockage reduction", "Insight: real-time"]'
:metrics='[
  { value: "2 hrs → 10 min", detail: "Release time" },
  { value: "60%", detail: "CI blockage reduction" },
  { value: "15 min", detail: "Install time" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Install Copilot CLI and authenticate", "pip install github-copilot-sdk", "Run the basic example"]'
  :thisWeek='["Identify a repetitive analysis task", "Build a basic CLI tool (Pattern 1)", "Test with real data"]'
  :thisMonth='["Add error handling and retries", "MCP server integration", "Deploy as webhook or cron job"]'
  footer="Start with release notes or test analysis — highest immediate ROI. Then add error handling, MCP integration, and deploy as a webhook or scheduled job to automate repetitive analysis at scale."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Primary Documentation", color: "cyan", items: [
        { href: "https://github.com/github/copilot-sdk", label: "GitHub Copilot SDK Repository", description: "Installation, API reference, language-specific examples" },
        { href: "https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/", label: "SDK Blog Announcement", description: "Technical preview announcement and architecture overview" },
        { href: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line", label: "Copilot CLI Documentation", description: "Understanding the agent runtime SDK wraps" }
    ] },
    { title: "Additional Resources", color: "purple", items: [
        { href: "https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md", label: "Python SDK Cookbook", description: "Python-specific patterns and recipes" },
        { href: "https://docs.github.com/en/copilot/concepts/billing/copilot-requests", label: "Copilot Requests & Billing", description: "Understanding quotas and usage tracking" },
        { href: "https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md", label: "BYOK Documentation", description: "Bring Your Own Key for custom model providers" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="GitHub Copilot SDK: Build AI-Powered Tools"
:cards="[
  { icon: '📝', value: '92%', detail: 'Time reduction on release notes', subdetail: '2 hours → 10 min with automated generation' },
  { icon: '🧪', value: '60%', detail: 'Less CI blockage time', subdetail: 'Automated test analysis and recommendations' },
  { icon: '🚀', value: '2×', detail: 'PR throughput increase', subdetail: 'Code quality enforcement bots' },
]"
prompt="Questions? Let's discuss your automation use cases"
/>
