---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Plugins & APM: Composable AI Extensions
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot Plugins & APM - Composable AI Extensions
module: tech-talks/copilot-plugins
mdc: true
section: Customization & Context
status: active
updated: 2026-04-17
---

<script setup>
import TitleSlide from './components/TitleSlide.vue'
import CoreQuestionSlide from './components/CoreQuestionSlide.vue'
import TocSlide from './components/TocSlide.vue'
import SectionOpenerSlide from './components/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/BeforeAfterSlide.vue'
import WhatYouCanDoTodaySlide from './components/WhatYouCanDoTodaySlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
import ThankYouSlide from './components/ThankYouSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="Copilot Plugins & APM"
  subtitle="Composable AI Extensions"
  tagline="Install once, configure everywhere"
  meta="Tech Talk · 25 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="How do I extend Copilot with custom capabilities — and how do I share that configuration across teams and repositories?"
  subtext="Plugins bring new agent capabilities into any editor or workflow with a single command."
  highlight="APM turns that configuration into team infrastructure — versioned, reproducible, and committed alongside your code."
  :cards='[
    { icon: "👨‍💻", title: "Developers Extending Copilot", description: "Install plugins for code review, testing, security scanning from the CLI" },
    { icon: "🏗️", title: "Platform Teams", description: "Standardize agent configuration across repositories with apm.yml manifests" },
    { icon: "🔧", title: "DevOps Engineers", description: "Treat AI configuration as infrastructure — version-controlled and CI-validated" },
    { title: "Manual Setup Docs", description: "Wiki pages explaining “how to configure Copilot“ become outdated quickly" },
    { title: "Configuration Drift", description: "Each developer installs different plugins — debugging AI behavior becomes impossible" },
    { title: "Onboarding Friction", description: "New contributors ask “what plugins do I need?“ instead of just running git clone" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "⚡", title: "CLI-First Plugin Management", subtitle: "Discover, install, and manage from the terminal", blurb: "Fast exploration without leaving the command line", slide: 4 },
    { icon: "📦", title: "Building an APM Manifest", subtitle: "Configuration as code for team-wide agent setup", blurb: "Version your entire Copilot stack in apm.yml", slide: 8 },
    { icon: "🔒", title: "The Lockfile Pattern", subtitle: "Reproducible installations across environments", blurb: "Eliminate &#39;works on my machine&#39; for AI config", slide: 12 },
    { icon: "🌐", title: "Discovery & Community Resources", subtitle: "Finding vetted plugins and integrations", blurb: "Marketplace, Awesome Copilot, and contribution paths", slide: 16 }
  ]'
/>

---

<!-- SLIDE: Part 1 — CLI-First Plugin Management -->
<SectionOpenerSlide
  :partNumber="1"
  title="CLI-First Plugin Management"
  subtitle="Discover, install, and manage plugins from the terminal"
  :cards='[
    { icon: "🔍", title: "Discovery", blurb: "Browse marketplace and search plugins without leaving CLI" },
    { icon: "⚡", title: "Instant Install", blurb: "Add capabilities with a single command — no restart" },
    { icon: "🔧", title: "Personal Toolbox", blurb: "Experiment with plugins before committing to team config" }
  ]'
  :terminal='{ context: "Perfect for exploration", detail: "copilot plugin commands manage your personal agent setup" }'
/>

---

<!-- SLIDE: Discovering Plugins from the CLI -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="🔍"
  pillLabel="CLI-First: Discovery"
  title="Browse the Marketplace Without Leaving the Terminal"
  codePosition="left"
  :code='{ language: "bash", filename: "terminal", content: "# List all available plugins\napm marketplace browse\n\n# Filter by category\napm marketplace browse --category code-review\napm marketplace browse --category testing\n\n# Search by keyword\napm marketplace browse --search security\n\n# See what you&#39;ve installed\ncopilot plugin list" }'
  :features='[
    { icon: "📋", title: "Direct Access", description: "Query the plugin registry from any terminal session" },
    { icon: "🏷️", title: "Category Filters", description: "Narrow results by code-review, testing, integrations" },
    { icon: "🔎", title: "Keyword Search", description: "Find plugins matching your workflow needs" },
    { icon: "✅", title: "Installation Status", description: "See active plugins and their versions instantly" }
  ]'
  :progressDots='{ current: 1, total: 4 }'
/>

---

<!-- SLIDE: Installing and Managing Plugins -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚡ CLI-First: Plugin Management</span>
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
<div class="text-lg font-bold text-white mb-1">Install, Update, Remove — All from the CLI</div>
<div class="text-sm text-gray-400">Individual plugin management for fast exploration</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-3 gap-3">
<div class="flex flex-col p-3 bg-gradient-to-br from-emerald-900/40 to-gray-900/60 rounded-xl border border-emerald-500/30">
<div class="text-emerald-400 text-xl mb-2">✓ Install</div>
<div class="text-sm font-mono text-emerald-300 mb-2 bg-black/30 px-2 py-1 rounded">copilot plugin install code-review-assistant</div>
<div class="text-xs text-gray-300 leading-relaxed flex-1">Plugin is immediately available in Copilot Chat, CLI, and any ACP-compatible client. No restart required.</div>
</div>
<div class="flex flex-col p-3 bg-gradient-to-br from-blue-900/40 to-gray-900/60 rounded-xl border border-blue-500/30">
<div class="text-blue-400 text-xl mb-2">↻ Update</div>
<div class="text-sm font-mono text-blue-300 mb-2 bg-black/30 px-2 py-1 rounded">copilot plugin update code-review-assistant</div>
<div class="text-xs text-gray-300 leading-relaxed flex-1">Fetch the latest version. Changes take effect immediately — existing chat sessions adapt.</div>
</div>
<div class="flex flex-col p-3 bg-gradient-to-br from-red-900/40 to-gray-900/60 rounded-xl border border-red-500/30">
<div class="text-red-400 text-xl mb-2">✗ Remove</div>
<div class="text-sm font-mono text-red-300 mb-2 bg-black/30 px-2 py-1 rounded">copilot plugin uninstall code-review-assistant</div>
<div class="text-xs text-gray-300 leading-relaxed flex-1">Clean removal. Plugin disappears from chat suggestions and CLI help output.</div>
</div>
</div>
<div class="relative z-10 mt-3 p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-xl border border-cyan-500/30">
<div class="text-sm text-cyan-200"><span class="font-bold text-cyan-300">🎯 Key Insight:</span> These commands manage your personal Copilot setup — perfect for trying new capabilities. When configuration becomes team infrastructure, use APM.</div>
</div>
</div>

---

<!-- SLIDE: copilot plugin vs apm — When to Use Each -->
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🎭"
  pillLabel="CLI-First: Two Paths"
  title="copilot plugin vs apm — When to Use Each"
  :left='{
    header: "copilot plugin",
    icon: "👤",
    items: [
      { title: "Personal exploration", detail: "Install, try, remove plugins ad-hoc" },
      { title: "Individual plugins", detail: "Manage one at a time" },
      { title: "Fast iteration", detail: "No manifest, no lockfile overhead" },
      { title: "Scoped to your user", detail: "Changes don&#39;t affect teammates" }
    ]
  }'
  :right='{
    header: "apm install",
    icon: "👥",
    items: [
      { title: "Team infrastructure", detail: "Standardize config across repositories" },
      { title: "Full agent stack", detail: "Plugins + instructions + skills + MCP" },
      { title: "Version-controlled", detail: "apm.yml and lockfile in git" },
      { title: "Reproducible setup", detail: "Every clone gets identical agent capabilities" }
    ]
  }'
  :insight='{ icon: "💡", text: "Start with copilot plugin for discovery. Graduate to apm.yml when configuration becomes critical to your workflow." }'
  :progressDots='{ current: 3, total: 4 }'
/>

---

<!-- SLIDE: CLI vs VS Code UI -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚡ CLI-First: UI Equivalent</span>
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
<div class="text-lg font-bold text-white mb-1">VS Code Extension Panel — Same Registry, Different Interface</div>
<div class="text-sm text-gray-400">CLI and UI share the same plugin backend</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3 flex-1">
<div class="flex flex-col p-3 bg-gradient-to-br from-cyan-900/40 to-gray-900/60 rounded-xl border border-cyan-500/30">
<div class="text-cyan-400 font-bold mb-2">CLI Workflow</div>
<div class="text-xs text-gray-300 space-y-2 flex-1">
<div>• <span class="font-mono text-cyan-300">apm marketplace browse</span> — list plugins</div>
<div>• <span class="font-mono text-cyan-300">copilot plugin install &lt;name&gt;</span> — add capability</div>
<div>• <span class="font-mono text-cyan-300">copilot plugin list</span> — see what&#39;s active</div>
<div>• Fastest for developers already in the terminal</div>
</div>
</div>
<div class="flex flex-col p-3 bg-gradient-to-br from-blue-900/40 to-gray-900/60 rounded-xl border border-blue-500/30">
<div class="text-blue-400 font-bold mb-2">VS Code UI Workflow</div>
<div class="text-xs text-gray-300 space-y-2 flex-1">
<div>• <span class="text-blue-300">Ctrl+Shift+P → Copilot: Focus on Copilot View</span></div>
<div>• Navigate to <span class="text-blue-300">Plugins</span> section</div>
<div>• Browse, install, remove via point-and-click</div>
<div>• Best for visual exploration and GUI preference</div>
</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-xl border border-cyan-500/30 text-center">
<div class="text-sm text-cyan-200"><span class="font-bold text-cyan-300">Same result:</span> Installing via CLI makes the plugin appear in VS Code UI instantly — they&#39;re synchronized.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Building an APM Manifest -->
<SectionOpenerSlide
  :partNumber="2"
  title="Building an APM Manifest"
  subtitle="Configuration as code for team-wide agent setup"
  :cards='[
    { icon: "📝", title: "Minimal Start", blurb: "Simple apm.yml with 1-2 plugins gets you started" },
    { icon: "📦", title: "Full Stack", blurb: "Plugins, instructions, skills, MCP servers — one manifest" },
    { icon: "🔁", title: "Reproducible", blurb: "Every apm install hydrates the same agent configuration" }
  ]'
  :terminal='{ context: "From wiki pages to executable manifests", detail: "git clone && apm install replaces manual setup docs" }'
/>

---

<!-- SLIDE: Minimal apm.yml -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="📝"
  pillLabel="APM Manifest: Minimal"
  title="Start Simple — Just Plugins and Versions"
  codePosition="left"
  :code='{ language: "yaml", filename: "apm.yml", content: "# apm.yml - Minimal team agent configuration\nversion: 1\n\nplugins:\n  - name: code-review-assistant\n    version: ^1.0.0\n  - name: test-generator\n    version: ^2.1.0" }'
  :features='[
    { icon: "🎯", title: "Single Source of Truth", description: "One file declares your team&#39;s Copilot capabilities" },
    { icon: "📌", title: "Version Pinning", description: "Semver ranges (^1.0.0) allow compatible updates" },
    { icon: "🔒", title: "Lockfile Generated", description: "apm install creates apm-lock.yml with exact versions" },
    { icon: "✅", title: "Instant Validation", description: "Team members run apm install to sync" }
  ]'
  :progressDots='{ current: 1, total: 4 }'
/>

---

<!-- SLIDE: Full Stack Manifest -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="📦"
  pillLabel="APM Manifest: Full Stack"
  title="Beyond Plugins — Instructions, Skills, and MCP Servers"
  codePosition="left"
  :code='{ language: "yaml", filename: "apm.yml", content: "# apm.yml - Full agent configuration\nversion: 1\n\nplugins:\n  - name: code-review-assistant\n    version: ^1.0.0\n\ninstructions:\n  - path: .github/copilot-instructions.md\n\nskills:\n  - path: .github/skills/testing/SKILL.md\n  - path: .github/skills/api-design/SKILL.md\n\nmcpServers:\n  - name: github-mcp\n    source: npm:@modelcontextprotocol/server-github\n    version: ^1.2.0" }'
  :features='[
    { icon: "📜", title: "Instructions", description: "Load repo-specific context files automatically" },
    { icon: "🎯", title: "Skills", description: "Reusable workflows for testing, API design, etc." },
    { icon: "🔌", title: "MCP Servers", description: "Live integrations (GitHub APIs, AWS docs, databases)" },
    { icon: "🌲", title: "One Command", description: "apm install orchestrates the entire stack" }
  ]'
  :progressDots='{ current: 2, total: 4 }'
/>

---

<!-- SLIDE: Configuration as Code Benefits -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📦 APM Manifest: Why It Matters</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">From Wiki Pages to Executable Manifests</div>
<div class="text-sm text-gray-400">Why teams are moving AI configuration into version control</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-red-900/40 to-gray-900/60 rounded-xl border border-red-500/30">
<div class="text-red-400 font-bold mb-1 text-sm">❌ Before: Manual Setup</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• "How to Configure Copilot" wiki page</div>
<div>• New developers ask on Slack</div>
<div>• Outdated docs, missing steps</div>
<div>• Each person has different plugins</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/40 to-gray-900/60 rounded-xl border border-emerald-500/30">
<div class="text-emerald-400 font-bold mb-1 text-sm">✓ After: apm.yml</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Configuration lives with code</div>
<div>• git clone → apm install → done</div>
<div>• Always current, executable</div>
<div>• Guaranteed consistency</div>
</div>
</div>
</div>
<div class="flex flex-col p-3 bg-gradient-to-br from-blue-900/40 to-gray-900/60 rounded-xl border border-blue-500/30">
<div class="text-blue-400 font-bold mb-2">Three Principles of Configuration as Code</div>
<div class="text-xs text-gray-300 space-y-3 flex-1">
<div>
<div class="text-blue-300 font-semibold mb-1">1. Version-Controlled</div>
<div>apm.yml and apm-lock.yml live in git — changes are auditable, reviewable in PRs</div>
</div>
<div>
<div class="text-blue-300 font-semibold mb-1">2. Executable</div>
<div>No interpretation needed — apm install is the single command that hydrates a fresh clone</div>
</div>
<div>
<div class="text-blue-300 font-semibold mb-1">3. Reproducible</div>
<div>Lockfile ensures every developer gets identical versions — no drift, no debugging "works on my machine"</div>
</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-xl border border-blue-500/30">
<div class="text-sm text-blue-200"><span class="font-bold text-blue-300">🎯 Key Insight:</span> Agent configuration is infrastructure — treat it like dependencies, not documentation.</div>
</div>
</div>

---

<!-- SLIDE: Per-Repository Configuration -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📦 APM Manifest: Scoped Configuration</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Different Projects, Different Agent Capabilities</div>
<div class="text-sm text-gray-400">Repository-scoped manifests adapt Copilot to project context</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-3 gap-3">
<div class="flex flex-col p-2.5 bg-gradient-to-br from-cyan-900/40 to-gray-900/60 rounded-xl border border-cyan-500/30">
<div class="text-cyan-400 font-bold mb-1.5 text-sm">🐍 data-pipeline/</div>
<div class="text-xs font-mono text-cyan-300 mb-2 bg-black/40 px-2 py-1 rounded leading-tight">plugins:<br/>  - pandas-assistant<br/>  - sql-query-optimizer</div>
<div class="text-xs text-gray-300 leading-snug flex-1">Python data engineering tools — DataFrame transformations, query optimization</div>
</div>
<div class="flex flex-col p-2.5 bg-gradient-to-br from-blue-900/40 to-gray-900/60 rounded-xl border border-blue-500/30">
<div class="text-blue-400 font-bold mb-1.5 text-sm">⚛️ web-app/</div>
<div class="text-xs font-mono text-blue-300 mb-2 bg-black/40 px-2 py-1 rounded leading-tight">plugins:<br/>  - react-component-generator<br/>  - accessibility-checker</div>
<div class="text-xs text-gray-300 leading-snug flex-1">Frontend tooling — UI patterns, ARIA compliance, responsive design</div>
</div>
<div class="flex flex-col p-2.5 bg-gradient-to-br from-indigo-900/40 to-gray-900/60 rounded-xl border border-indigo-500/30">
<div class="text-indigo-400 font-bold mb-1.5 text-sm">⚙️ microservice/</div>
<div class="text-xs font-mono text-indigo-300 mb-2 bg-black/40 px-2 py-1 rounded leading-tight">plugins:<br/>  - go-concurrency-analyzer<br/>  - performance-profiler</div>
<div class="text-xs text-gray-300 leading-snug flex-1">Backend performance tools — goroutine analysis, profiling, optimization</div>
</div>
</div>
<div class="relative z-10 mt-3 p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-xl border border-blue-500/30">
<div class="text-sm text-blue-200"><span class="font-bold text-blue-300">🎯 Key Insight:</span> No global plugin sprawl. Switch directories with <span class="font-mono text-blue-300">cd</span> and run <span class="font-mono text-blue-300">apm install</span> — Copilot adapts to project context automatically.</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — The Lockfile Pattern -->
<SectionOpenerSlide
  :partNumber="3"
  title="The Lockfile Pattern"
  subtitle="Reproducible installations across environments"
  :cards='[
    { icon: "📸", title: "Freeze Versions", blurb: "Capture exact plugin versions, not ranges" },
    { icon: "🔐", title: "Prevent Drift", blurb: "Every developer gets identical installations" },
    { icon: "📋", title: "Audit Trail", blurb: "Lockfile diffs show what changed in PRs" }
  ]'
  :terminal='{ context: "Eliminate &#39;works on my machine&#39; for AI configuration", detail: "Lockfiles are not optional — commit apm-lock.yml with apm.yml" }'
/>

---

<!-- SLIDE: What the Lockfile Captures -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🔒"
  pillLabel="Lockfile: Structure"
  title="apm.yml Declares Intent — apm-lock.yml Freezes Reality"
  :left='{
    header: "apm.yml (Manifest)",
    icon: "📝",
    items: [
      { title: "Version ranges", detail: "^1.0.0 allows 1.x.x updates" },
      { title: "Human-authored", detail: "Developers edit this file directly" },
      { title: "Minimal, declarative", detail: "Only what you need to specify" }
    ],
    code: { language: "yaml", content: "version: 1\nplugins:\n  - name: code-review-assistant\n    version: ^1.0.0" }
  }'
  :right='{
    header: "apm-lock.yml (Lockfile)",
    icon: "🔐",
    items: [
      { title: "Exact versions", detail: "1.2.3 — not a range" },
      { title: "Tool-generated", detail: "Never edit manually" },
      { title: "Full resolution", detail: "Download URLs, integrity hashes" }
    ],
    code: { language: "yaml", content: "plugins:\n  code-review-assistant:\n    version: 1.2.3\n    resolved: https://registry.apm.dev/...\n    integrity: sha512-abc123..." }
  }'
  :insight='{ icon: "💡", text: "The lockfile is the contract: apm install with a lockfile guarantees reproducibility." }'
  :progressDots='{ current: 1, total: 4 }'
/>

---

<!-- SLIDE: Why Lockfiles Matter -->
<BeforeAfterPanelsSlide
  :partNumber="3"
  pillIcon="⚠️"
  pillLabel="Lockfile: The Problem"
  title="Without a Lockfile — Configuration Drift Is Inevitable"
  :before='{
    header: "Without Lockfile",
    items: [
      { icon: "📅", title: "Monday install", detail: "Developer A gets plugin v1.2.3" },
      { icon: "🚀", title: "Wednesday release", detail: "Plugin v1.3.0 ships with breaking change" },
      { icon: "📅", title: "Friday install", detail: "Developer B gets v1.3.0 — different behavior" },
      { icon: "🐛", title: "Debugging nightmare", detail: "“Why does your Copilot behave differently?“" }
    ]
  }'
  :after='{
    header: "With Lockfile",
    items: [
      { icon: "📌", title: "Locked version", detail: "apm-lock.yml pins v1.2.3" },
      { icon: "🚀", title: "New release ignored", detail: "apm install still uses v1.2.3" },
      { icon: "✅", title: "Identical installs", detail: "All developers get the same version" },
      { icon: "🔄", title: "Explicit updates", detail: "Run apm update, review diff, merge PR" }
    ]
  }'
  :insight='{ icon: "🎯", text: "Treat lockfile changes like dependency updates — review them in PRs, validate in CI." }'
  :progressDots='{ current: 2, total: 4 }'
/>

---

<!-- SLIDE: Lockfile Workflow -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Lockfile: Workflow</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">The Lockfile Lifecycle — Four Phases</div>
<div class="text-sm text-gray-400">Initial setup → daily sync → explicit updates → CI validation</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-4 gap-3">
<div class="flex flex-col p-2.5 bg-gradient-to-br from-cyan-900/40 to-gray-900/60 rounded-xl border border-cyan-500/30">
<div class="text-2xl font-black text-cyan-400 leading-none mb-1">1</div>
<div class="text-sm font-bold text-cyan-300 mb-1.5">Initial Setup</div>
<div class="text-xs text-gray-300 space-y-1.5 flex-1">
<div>• Author <span class="font-mono text-cyan-300">apm.yml</span></div>
<div>• Run <span class="font-mono text-cyan-300">apm install</span></div>
<div>• Lockfile generated automatically</div>
<div>• Commit both files to git</div>
</div>
</div>
<div class="flex flex-col p-2.5 bg-gradient-to-br from-blue-900/40 to-gray-900/60 rounded-xl border border-blue-500/30">
<div class="text-2xl font-black text-blue-400 leading-none mb-1">2</div>
<div class="text-sm font-bold text-blue-300 mb-1.5">Daily Use</div>
<div class="text-xs text-gray-300 space-y-1.5 flex-1">
<div>• Developers pull latest code</div>
<div>• Run <span class="font-mono text-blue-300">apm install</span></div>
<div>• Lockfile ensures identical versions</div>
<div>• No manual intervention</div>
</div>
</div>
<div class="flex flex-col p-2.5 bg-gradient-to-br from-indigo-900/40 to-gray-900/60 rounded-xl border border-indigo-500/30">
<div class="text-2xl font-black text-indigo-400 leading-none mb-1">3</div>
<div class="text-sm font-bold text-indigo-300 mb-1.5">Updates</div>
<div class="text-xs text-gray-300 space-y-1.5 flex-1">
<div>• Run <span class="font-mono text-indigo-300">apm update</span></div>
<div>• Fetch new plugin versions</div>
<div>• Review lockfile diff</div>
<div>• Open PR for team approval</div>
</div>
</div>
<div class="flex flex-col p-2.5 bg-gradient-to-br from-purple-900/40 to-gray-900/60 rounded-xl border border-purple-500/30">
<div class="text-2xl font-black text-purple-400 leading-none mb-1">4</div>
<div class="text-sm font-bold text-purple-300 mb-1.5">CI Validation</div>
<div class="text-xs text-gray-300 space-y-1.5 flex-1">
<div>• CI runs <span class="font-mono text-purple-300">apm install --frozen-lockfile</span></div>
<div>• Fails if lockfile doesn&#39;t match manifest</div>
<div>• Prevents drift at merge time</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl border border-indigo-500/30">
<div class="text-sm text-indigo-200"><span class="font-bold text-indigo-300">🎯 Key Insight:</span> Always commit <span class="font-mono text-indigo-300">apm-lock.yml</span> alongside <span class="font-mono text-indigo-300">apm.yml</span> — they&#39;re a pair, not optional companions.</div>
</div>
</div>

---

<!-- SLIDE: CI Integration -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Lockfile: CI Enforcement</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Lockfile Validation in CI — Prevent Drift at Merge Time</div>
<div class="text-sm text-gray-400">Use --frozen-lockfile to enforce that apm.yml and apm-lock.yml stay synchronized</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="flex flex-col p-3 bg-gradient-to-br from-indigo-900/40 to-gray-900/60 rounded-xl border border-indigo-500/30">
<div class="text-indigo-400 font-bold mb-2">GitHub Actions Workflow</div>
<div class="text-xs font-mono text-indigo-300 bg-black/40 px-2 py-2 rounded mb-2 leading-relaxed overflow-auto flex-1">
name: Validate APM Lockfile<br/>
on: [pull_request]<br/>
<br/>
jobs:<br/>
&nbsp;&nbsp;validate:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest<br/>
&nbsp;&nbsp;&nbsp;&nbsp;steps:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/checkout@v3<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: npm install -g @microsoft/apm<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: apm install --frozen-lockfile
</div>
</div>
<div class="flex flex-col gap-2">
<div class="p-2.5 bg-gradient-to-br from-emerald-900/40 to-gray-900/60 rounded-xl border border-emerald-500/30">
<div class="text-emerald-400 font-bold mb-1 text-sm">✅ Success Case</div>
<div class="text-xs text-gray-300">Lockfile matches manifest — CI passes, PR can merge.</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-red-900/40 to-gray-900/60 rounded-xl border border-red-500/30">
<div class="text-red-400 font-bold mb-1 text-sm">❌ Failure Case</div>
<div class="text-xs text-gray-300">Developer updated apm.yml but didn&#39;t regenerate lockfile — CI fails, PR blocked.</div>
</div>
<div class="p-2.5 bg-gradient-to-br from-indigo-900/40 to-gray-900/60 rounded-xl border border-indigo-500/30">
<div class="text-indigo-400 font-bold mb-1 text-sm">🔄 Fix Pattern</div>
<div class="text-xs text-gray-300">Run <span class="font-mono text-indigo-300">apm install</span> locally, commit updated lockfile, push again.</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl border border-indigo-500/30">
<div class="text-sm text-indigo-200"><span class="font-bold text-indigo-300">🎯 Key Insight:</span> Configuration drift is caught in CI, not production — automatic enforcement of lockfile discipline.</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Discovery & Community Resources -->
<SectionOpenerSlide
  :partNumber="4"
  title="Discovery & Community Resources"
  subtitle="Finding vetted plugins and integrations"
  :cards='[
    { icon: "🏪", title: "Official Marketplace", blurb: "First-party plugins maintained by GitHub/Microsoft" },
    { icon: "🌟", title: "Awesome Copilot", blurb: "Community-curated list of plugins, skills, and tools" },
    { icon: "🛠️", title: "Contribution Path", blurb: "Build and publish your own plugins" }
  ]'
  :terminal='{ context: "Start with vetted plugins before building custom solutions", detail: "Leverage community expertise" }'
/>

---

<!-- SLIDE: Three Discovery Paths -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🔍"
  pillLabel="Discovery: Three Sources"
  title="Where to Find Copilot Plugins and Integrations"
  :columns='[
    { icon: "🏪", title: "Official Marketplace", description: "First-party plugins via apm marketplace browse — maintained by GitHub and Microsoft", items: ["Code review assistants", "Testing framework integrations", "Security scanning tools", "Installation commands included"] },
    { icon: "🌟", title: "Awesome Copilot", description: "Community-curated list at github.com/github/awesome-copilot", items: ["Third-party plugins not in marketplace", "Skills files and instruction templates", "MCP server integrations", "Tools and workflows using Copilot"] },
    { icon: "🛠️", title: "Official Plugins Repo", description: "github.com/github/copilot-plugins — source code and contribution guidelines", items: ["Plugin manifest schema", "First-party plugin source", "Contribution guidelines", "Issue tracker for feature requests"] }
  ]'
  :insight='{ icon: "💡", text: "Start with the marketplace for vetted first-party plugins. Check Awesome Copilot for community experiments. Consult the plugins repo when building your own." }'
  :progressDots='{ current: 1, total: 2 }'
/>

---

<!-- SLIDE: Use Case — Standardized Code Review -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🌐 Discovery: Real-World Use Case</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">Use Case: Standardized Code Review Agent Across Teams</div>
<div class="text-sm text-gray-400">Platform team deploys consistent code review agent to every repository</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3">
<div class="flex flex-col p-3 bg-gradient-to-br from-purple-900/40 to-gray-900/60 rounded-xl border border-purple-500/30">
<div class="text-purple-400 font-bold mb-2">The Scenario</div>
<div class="text-xs text-gray-300 space-y-1.5 flex-1">
<div>• Platform team wants every repo to use the same code review plugin</div>
<div>• Must include team-specific prompts and architecture guidelines</div>
<div>• New developers should get this automatically</div>
</div>
</div>
<div class="flex flex-col p-3 bg-gradient-to-br from-purple-900/40 to-gray-900/60 rounded-xl border border-purple-500/30">
<div class="text-purple-400 font-bold mb-2">Shared Template</div>
<div class="text-xs font-mono text-purple-300 bg-black/40 px-2 py-1.5 rounded leading-relaxed flex-1">
version: 1<br/>
plugins:<br/>
&nbsp;&nbsp;- name: code-review-assistant<br/>
&nbsp;&nbsp;&nbsp;&nbsp;version: ^1.0.0<br/>
instructions:<br/>
&nbsp;&nbsp;- path: .github/team-instructions.md
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-emerald-900/40 to-gray-900/60 rounded-xl border border-emerald-500/30">
<div class="text-emerald-400 font-bold mb-2">The Workflow</div>
<div class="text-xs text-gray-300 grid grid-cols-3 gap-3">
<div>
<div class="text-emerald-300 font-semibold mb-1">Step 1: Setup</div>
<div>Each repository copies the template apm.yml and commits it</div>
</div>
<div>
<div class="text-emerald-300 font-semibold mb-1">Step 2: Onboard</div>
<div>New developer runs: <span class="font-mono text-emerald-300">git clone && apm install</span></div>
</div>
<div>
<div class="text-emerald-300 font-semibold mb-1">Step 3: Result</div>
<div>Code review agent with team context — instantly, no Slack message needed</div>
</div>
</div>
</div>
</div>
<div class="relative z-10 mt-3 p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-xl border border-purple-500/30">
<div class="text-sm text-purple-200"><span class="font-bold text-purple-300">🎯 Key Insight:</span> Every contributor has the same code review experience. No wiki page, no setup docs, no “how do I configure this?“ questions.</div>
</div>
</div>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="From Manual Setup Docs to Executable Manifests"
  :leftItems='["Wiki pages explaining “how to configure Copilot“ become outdated quickly", "New developers ask on Slack: “What plugins do I need?“", "Each person installs different plugins — debugging AI behavior becomes impossible", "Configuration knowledge lives in people&#39;s heads, not in code"]'
  :rightItems='["Configuration lives in apm.yml alongside your code — always current", "git clone && apm install replaces manual onboarding docs", "Lockfile guarantees every developer gets identical versions — no drift", "Agent setup is infrastructure — versioned, auditable, reproducible"]'
  :metrics='[
    { value: "5 min", detail: "From clone to full agent setup (was 30+ min of wiki reading)" },
    { value: "Zero", detail: "Configuration drift incidents (was weekly debugging sessions)" },
    { value: "100%", detail: "Team members with consistent Copilot capabilities" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Run apm marketplace browse to discover available plugins", "Install your first plugin with copilot plugin install &lt;name&gt;", "Test the new capability in Copilot Chat or CLI"]'
  :thisWeek='["Create a minimal apm.yml in your repository with 1-2 plugins", "Run apm install to generate the lockfile", "Commit both files and have a teammate test the setup"]'
  :thisMonth='["Build a comprehensive team apm.yml with plugins, instructions, skills, and MCP servers", "Add CI validation with apm install --frozen-lockfile", "Document the workflow: “After git clone, run apm install“", "Treat lockfile changes like dependency updates — review them in PRs"]'
  footer="Start with discovery. Graduate to apm.yml when configuration becomes critical. Always commit the lockfile."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
        { href: "https://code.visualstudio.com/docs/copilot/customization/agent-plugins", label: "Agent Plugins for Copilot Customization", description: "VS Code plugin concepts, installation, and management" },
        { href: "https://microsoft.github.io/apm/introduction/what-is-apm/", label: "APM - Agent Package Manager", description: "Manifest schema, lockfile mechanics, and CLI reference" }
    ] },
    { title: "🌐 Community & Discovery", color: "purple", items: [
        { href: "https://github.com/github/awesome-copilot", label: "Awesome GitHub Copilot", description: "Community-curated list of plugins, skills, and integrations" },
        { href: "https://github.com/github/copilot-plugins", label: "Official Copilot Plugins Repository", description: "First-party plugin source code and contribution guidelines" }
    ] },
    { title: "🛠️ Related Content", color: "blue", items: [
        { label: "Copilot Primitives", description: "Understanding instructions, skills, and MCP servers that APM orchestrates" },
        { label: "Copilot CLI", description: "Using Copilot from the command line, where plugin management happens" },
        { label: "Copilot Memory", description: "How agent context persists across sessions and repositories" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="Copilot Plugins & APM"
  subtitle="Composable AI Extensions"
  :cards="[
    { value: 'copilot plugin', detail: 'Personal exploration and fast iteration' },
    { value: 'apm.yml', detail: 'Team infrastructure — versioned and reproducible' },
    { value: 'apm-lock.yml', detail: 'Always commit the lockfile with the manifest' }
  ]"
  prompt="What plugins or MCP servers would unlock the most value for your team — and how would you distribute that configuration across repositories?"
/>
