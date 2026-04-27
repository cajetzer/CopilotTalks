---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## What's New in Copilot for VS Code: v1.108 – v1.117
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: What's New in Copilot for VS Code - v1.108 to v1.117
mdc: true
section: Copilot Tools
status: active
updated: 2026-04-22
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
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import { isDark } from './components/useTheme'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="What's New in Copilot for VS Code"
subtitle="v1.108 – v1.117: Nine Releases of AI Innovation"
tagline="From assistant to autonomous agent team"
meta="Tech Talk · 45-60 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="Which new VS Code Copilot features matter most — and how do I start using them today?"
subtext="Eight releases in four months brought sweeping changes to Copilot in VS Code."
highlight="Autopilot, subagents, and a companion app — from one assistant to a team you orchestrate."
:cards='[
  { icon: "🔧", title: "VS Code Power Users Tracking Updates", description: "Know which releases matter and how to enable new features immediately" },
  { icon: "👥", title: "Team Leads Enabling Agent Workflows", description: "Background agents, subagents, and worktrees for parallel autonomous work" },
  { icon: "🎓", title: "Developers New to Copilot Agent Mode", description: "Jump from inline completions to full agentic orchestration in minutes" },
  { title: "Weekly Releases", description: "Starting v1.111, weekly stable updates — features ship faster than ever" },
  { title: "4 Agent Types", description: "Local, Background, Cloud, and Claude — each optimized for different tasks" },
  { title: "BYOK (v1.117)", description: "Enterprise teams now connect own model API keys — admin-controlled, any provider" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🤖", title: "Agent Sessions & Orchestration", subtitle: "Multi-session workflows and specialized agents", blurb: "4 agent types, subagents, worktree isolation", slide: 4 },
    { icon: "🧩", title: "Agent Customization", subtitle: "Skills, Plugins, and org-level control", blurb: "GA Agent Skills, /create-* commands, /init", slide: 9 },
    { icon: "🧠", title: "Claude Integration", subtitle: "Thinking tokens and Anthropic SDK", blurb: "Visible reasoning, steering, context editing", slide: 14 },
    { icon: "🔒", title: "Security & UX", subtitle: "Sandboxing, automation, and browser tools", blurb: "Terminal sandboxing, YOLO mode, agentic browser", slide: 17 },
  ]'
/>
---

<!-- SLIDE: Part 1 — Agent Sessions & Orchestration -->

<SectionOpenerSlide
  :partNumber="1"
  title="Agent Sessions & Orchestration"
  subtitle="From single-chat to multi-agent workflows"
  :cards='[
    { icon: "🔄", title: "4 Agent Types", blurb: "Local, Background, Cloud, Claude" },
    { icon: "🌳", title: "Worktree Isolation", blurb: "Background agents in dedicated Git worktrees" },
    { icon: "🤝", title: "Subagents", blurb: "Parallel delegation with Explore agent" },
  ]'
  :terminal='{ context: "Plan locally → implement in background → merge selectively", detail: "multi-session workflow pattern" }'
/>
---

<!-- SLIDE: Four Agent Types -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="🤖"
  pillLabel="Agent Sessions & Orchestration"
  title="Four Agent Types"
  :cards='[
    { icon: "💬", title: "Local", description: "Real-time in Chat view. Interactive planning, quick explorations, fastest feedback loop." },
    { icon: "🌳", title: "Background", description: "Isolated Git worktree. Multi-file autonomous tasks, no workspace conflicts, review via diff before merge." },
    { icon: "☁️", title: "Cloud", description: "GitHub-hosted infrastructure. Cross-repo operations, scale beyond local resources, org-level indexing." },
    { icon: "🧠", title: "Claude", description: "Anthropic SDK with thinking tokens. Complex reasoning tasks, architectural decisions, visible hypothesis formation." }
  ]'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Background Agents & Git Worktrees -->
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🌳"
  pillLabel="Agent Sessions & Orchestration"
  title="Background Agents with Git Worktree Isolation"
  :left='{
    header: "How It Works",
    icon: "✅",
    items: [
      "Agent creates new worktree automatically",
      "Changes committed per turn in worktree",
      "Your main workspace stays untouched",
      "Multiple agents run in parallel"
    ],
    code: { language: "json", content: "{\n  \"git.worktreeIncludeFiles\": [\n    \"config/local.json\",\n    \".env.local\"\n  ]\n}" }
  }'
  :right='{
    header: "Review & Merge",
    icon: "🔍",
    items: [
      "Diff view when agent completes",
      "Apply all changes at once",
      "Cherry-pick specific files",
      "Discard if not satisfactory"
    ]
  }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Subagents & Explore -->
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🤝"
  pillLabel="Agent Sessions & Orchestration"
  title="Parallel Subagents & Explore"
  :left='{
    header: "Subagents",
    icon: "🤝",
    items: [
      "Run in their own context windows",
      "Operate in parallel for speed",
      "Split independent tasks efficiently",
      "Return results to parent agent"
    ]
  }'
  :right='{
    header: "Explore Subagent (v1.110)",
    icon: "🔍",
    items: [
      "Dedicated codebase research agent",
      "Read-only: search + file read tools only",
      "Fast models (Claude Haiku, Gemini Flash)",
      "Offloads all Plan agent research"
    ],
    code: { language: "json", content: "{\n  \"chat.exploreAgent.defaultModel\": \"claude-haiku-4-5\"\n}" }
  }'
  :insight='{ icon: "⚡", text: "Before: Research → Plan → Implement (serial). After: Explore runs in parallel → Plan + Implement simultaneously." }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Session Management -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Agent Sessions & Orchestration</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-xs ml-1" :class="isDark ? 'text-white/40' : 'text-gray-400'">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold mb-0.5" :class="isDark ? 'text-white' : 'text-gray-900'">Session Management & Context Control</div>
<div class="text-xs" :class="isDark ? 'text-white/50' : 'text-gray-500'">Fork, compact, and organize your agent conversations</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-lg">🔀</div>
<div class="font-bold text-sm" :class="isDark ? 'text-cyan-300' : 'text-cyan-700'">/fork</div>
</div>
<div class="text-xs space-y-1" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
<div>Branch conversations</div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-cyan-900/30' : 'bg-cyan-100/60'">Explore alternatives without losing context</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-lg">🗜️</div>
<div class="font-bold text-sm" :class="isDark ? 'text-blue-300' : 'text-blue-700'">/compact</div>
</div>
<div class="text-xs space-y-1" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
<div>Summarize history</div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-blue-900/30' : 'bg-blue-100/60'">Free space when approaching context limits</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-lg">📊</div>
<div class="font-bold text-sm" :class="isDark ? 'text-indigo-300' : 'text-indigo-700'">Context Window</div>
</div>
<div class="text-xs space-y-1" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
<div>Token usage indicator</div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-indigo-900/30' : 'bg-indigo-100/60'">Hover for breakdown by category</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="font-bold mb-2 text-sm" :class="isDark ? 'text-purple-300' : 'text-purple-700'">Agent Sessions Welcome Page (v1.109)</div>
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 rounded" :class="isDark ? 'bg-purple-900/30 text-gray-300' : 'bg-purple-100/60 text-gray-700'">Sessions front and center at startup</div>
<div class="p-2 rounded" :class="isDark ? 'bg-purple-900/30 text-gray-300' : 'bg-purple-100/60 text-gray-700'">Search and filter across sessions</div>
<div class="p-2 rounded" :class="isDark ? 'bg-purple-900/30 text-gray-300' : 'bg-purple-100/60 text-gray-700'">Status: in-progress, unread, needs attention</div>
<div class="p-2 rounded" :class="isDark ? 'bg-purple-900/30 text-gray-300' : 'bg-purple-100/60 text-gray-700'">Visible in command center</div>
</div>
</div>

<div class="mt-2 p-2 rounded-lg border" :class="isDark ? 'bg-gray-900/50 border-gray-700/50' : 'bg-gray-100 border-gray-300'">
<div class="text-xs font-mono mb-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">workbench.startupEditor</div>
<pre class="overflow-y-auto max-h-24 text-xs p-2 rounded border" :class="isDark ? 'bg-gray-950/80 border-gray-700/30 text-gray-200' : 'bg-white border-gray-300 text-gray-800'"><code class="language-json">{
  "workbench.startupEditor": "agentSessionsWelcomePage"
}</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Agent Customization -->

<SectionOpenerSlide
  :partNumber="2"
  title="Agent Customization"
  subtitle="Skills, Plugins, and org-level control"
  :cards='[
    { icon: "🧩", title: "Agent Skills GA", blurb: "From experimental to enabled by default" },
    { icon: "📦", title: "Agent Plugins", blurb: "Prepackaged bundles from Extensions view" },
    { icon: "🏢", title: "Org-Level Control", blurb: "Enforce consistency across teams" },
  ]'
  :terminal='{ context: "Package domain expertise once", detail: "agents apply it automatically" }'
/>
---

<!-- SLIDE: Agent Skills — Now GA -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🧩"
  pillLabel="Agent Customization"
  title="Agent Skills \u2014 From Experimental to GA"
  :left='{
    header: "Structure",
    icon: "📁",
    items: [
      ".github/skills/api-design/SKILL.md",
      ".github/skills/security-review/SKILL.md",
      "Extensions can package skills",
      "On-demand loading per task"
    ]
  }'
  :right='{
    header: "Settings",
    icon: "⚙️",
    items: [
      "Enabled by default in v1.109+",
      "Add custom skill locations",
      "Extensions can package skills",
      "On-demand loading per task"
    ],
    code: { language: "json", content: "{\n  \"chat.useAgentSkills\": true,\n  \"chat.agentSkillsLocations\": {\n    \"~/.copilot/skills\": true,\n    \"shared/team-skills\": true\n  }\n}" }
  }'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Agent Plugins -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🧩"
  pillLabel="Agent Customization"
  title="Agent Plugins (Experimental, v1.110)"
  :left='{
    header: "What&#39;s in a Plugin",
    icon: "📦",
    items: [
      "Skills (domain expertise)",
      "Custom agents (.agent.md)",
      "Slash commands + MCP servers",
      "Lifecycle hooks"
    ]
  }'
  :right='{
    header: "How to Install",
    icon: "🔌",
    items: [
      "Search @agentPlugins in Extensions view",
      "Or use Chat: Plugins command",
      "Add custom plugin marketplaces",
      "Register local plugin directories"
    ],
    code: { language: "json", content: "{\n  \"chat.plugins.enabled\": true,\n  \"chat.plugins.marketplaces\": [\"copilot-plugins\", \"awesome-copilot\"],\n  \"chat.plugins.paths\": {\n    \"/path/to/local/plugin\": true\n  }\n}" }
  }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: /create-* Commands & /init -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Agent Customization</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
</div>
<span class="text-xs ml-1" :class="isDark ? 'text-white/40' : 'text-gray-400'">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold mb-0.5" :class="isDark ? 'text-white' : 'text-gray-900'">/create-* Commands & /init</div>
<div class="text-xs" :class="isDark ? 'text-white/50' : 'text-gray-500'">Generate customization files directly from conversations</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 rounded-xl border" :class="isDark ? 'bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border-cyan-500/30' : 'bg-cyan-50 border-cyan-300'">
<div class="font-bold mb-2 text-sm" :class="isDark ? 'text-cyan-300' : 'text-cyan-700'">/create-* Family (v1.110)</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 rounded" :class="isDark ? 'bg-cyan-900/30' : 'bg-white/70'"><span class="font-mono" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">/create-prompt</span> <span :class="isDark ? 'text-gray-300' : 'text-gray-700'">— Reusable prompt file</span></div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-cyan-900/30' : 'bg-white/70'"><span class="font-mono" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">/create-instruction</span> <span :class="isDark ? 'text-gray-300' : 'text-gray-700'">— Project conventions</span></div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-cyan-900/30' : 'bg-white/70'"><span class="font-mono" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">/create-skill</span> <span :class="isDark ? 'text-gray-300' : 'text-gray-700'">— Multi-step workflow package</span></div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-cyan-900/30' : 'bg-white/70'"><span class="font-mono" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">/create-agent</span> <span :class="isDark ? 'text-gray-300' : 'text-gray-700'">— Specialized custom agent</span></div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-cyan-900/30' : 'bg-white/70'"><span class="font-mono" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">/create-hook</span> <span :class="isDark ? 'text-gray-300' : 'text-gray-700'">— Lifecycle automation</span></div>
</div>
</div>
<div class="p-3 rounded-xl border" :class="isDark ? 'bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-500/30' : 'bg-blue-50 border-blue-300'">
<div class="font-bold mb-2 text-sm" :class="isDark ? 'text-blue-300' : 'text-blue-700'">/init — Bootstrap Your Workspace (v1.109)</div>
<div class="space-y-2 text-xs">
<div class="p-2 rounded" :class="isDark ? 'bg-blue-900/30 text-gray-300' : 'bg-white/70 text-gray-700'">Analyzes your project structure</div>
<div class="p-2 rounded" :class="isDark ? 'bg-blue-900/30 text-gray-300' : 'bg-white/70 text-gray-700'">Generates tailored copilot-instructions.md or AGENTS.md</div>
<div class="p-2 rounded" :class="isDark ? 'bg-blue-900/30 text-gray-300' : 'bg-white/70 text-gray-700'">Run once per project to establish baseline</div>
</div>
</div>
</div>

<div class="mt-3 p-3 rounded-xl border" :class="isDark ? 'bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-500/30' : 'bg-green-50 border-green-300'">
<div class="font-bold mb-2 text-sm" :class="isDark ? 'text-green-300' : 'text-green-700'">💡 Workflow Pattern</div>
<div class="grid grid-cols-3 gap-2 text-xs">
<div class="p-2 rounded text-center" :class="isDark ? 'bg-green-900/30' : 'bg-white/70'">
<div class="font-bold mb-1" :class="isDark ? 'text-green-400' : 'text-green-700'">1. Debug Issue</div>
<div :class="isDark ? 'text-gray-300' : 'text-gray-700'">Solve problem in chat</div>
</div>
<div class="p-2 rounded text-center" :class="isDark ? 'bg-green-900/30' : 'bg-white/70'">
<div class="font-bold mb-1" :class="isDark ? 'text-green-400' : 'text-green-700'">2. /create-skill</div>
<div :class="isDark ? 'text-gray-300' : 'text-gray-700'">Capture procedure</div>
</div>
<div class="p-2 rounded text-center" :class="isDark ? 'bg-green-900/30' : 'bg-white/70'">
<div class="font-bold mb-1" :class="isDark ? 'text-green-400' : 'text-green-700'">3. Reuse</div>
<div :class="isDark ? 'text-gray-300' : 'text-gray-700'">Agents apply it next time</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-center">
<span class="text-white font-bold text-xs">Natural language works too: "save this workflow as a skill"</span>
</div>
</div>
</div>

---

<!-- SLIDE: Org-Level Instructions & Custom Agent Controls -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Agent Customization</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-xs ml-1" :class="isDark ? 'text-white/40' : 'text-gray-400'">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold mb-0.5" :class="isDark ? 'text-white' : 'text-gray-900'">Org-Level Instructions & Custom Agent Controls</div>
<div class="text-xs" :class="isDark ? 'text-white/50' : 'text-gray-500'">Enforce consistency across teams</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="text-center mb-2">
<div class="text-xl">🏢</div>
<div class="font-bold text-sm" :class="isDark ? 'text-indigo-300' : 'text-indigo-700'">Org-Level (v1.108 → v1.109)</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 rounded" :class="isDark ? 'bg-indigo-900/30 text-gray-300' : 'bg-indigo-100/60 text-gray-700'">Org-level custom agents</div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-indigo-900/30 text-gray-300' : 'bg-indigo-100/60 text-gray-700'">Org-level custom instructions</div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-indigo-900/30 text-gray-300' : 'bg-indigo-100/60 text-gray-700'">Enforce consistent AI guidance</div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-indigo-900/30 text-gray-300' : 'bg-indigo-100/60 text-gray-700'">Enabled by default in v1.109+</div>
</div>
<div class="mt-2 p-2 rounded text-xs font-mono" :class="isDark ? 'bg-gray-900/50 text-gray-300' : 'bg-gray-100 text-gray-700'">
github.copilot.chat.organizationInstructions.enabled: true
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="text-center mb-2">
<div class="text-xl">⚙️</div>
<div class="font-bold text-sm" :class="isDark ? 'text-purple-300' : 'text-purple-700'">Custom Agent Controls (v1.109)</div>
</div>
<div class="space-y-1 text-xs">
<div class="p-1.5 rounded" :class="isDark ? 'bg-purple-900/30 text-gray-300' : 'bg-purple-100/60 text-gray-700'"><span class="font-mono text-purple-400">user-invokable: false</span> — Subagent-only</div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-purple-900/30 text-gray-300' : 'bg-purple-100/60 text-gray-700'"><span class="font-mono text-purple-400">disable-model-invocation</span> — Block auto-invoke</div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-purple-900/30 text-gray-300' : 'bg-purple-100/60 text-gray-700'"><span class="font-mono text-purple-400">agents: [...]</span> — Restrict subagent access</div>
<div class="p-1.5 rounded" :class="isDark ? 'bg-purple-900/30 text-gray-300' : 'bg-purple-100/60 text-gray-700'">Multiple model support with fallbacks</div>
</div>
</div>
</div>

<div class="mt-3 p-2 rounded-lg border" :class="isDark ? 'bg-gray-900/50 border-gray-700/50' : 'bg-gray-100 border-gray-300'">
<div class="text-xs font-mono mb-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Custom agent .agent.md frontmatter example</div>
<pre class="overflow-y-auto max-h-32 text-xs p-2 rounded border" :class="isDark ? 'bg-gray-950/80 border-gray-700/30 text-gray-200' : 'bg-white border-gray-300 text-gray-800'"><code class="language-yaml">&#45;&#45;&#45;
name: architect
model: ['Claude Sonnet 4.5 (copilot)', 'GPT-5 (copilot)']
tools: ['readFiles', 'codeSearch', 'agent']
agents: ['Modify', 'Search']
user-invokable: true
&#45;&#45;&#45;</code></pre>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold text-xs">💡 Agent Debug Panel: View exactly which customizations load for each session</span>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Claude & Anthropic Integration -->

<SectionOpenerSlide
  :partNumber="3"
  title="Claude & Anthropic Integration"
  subtitle="Thinking tokens and visible reasoning"
  :cards='[
    { icon: "🧠", title: "Claude Agent SDK", blurb: "Anthropic harness in VS Code" },
    { icon: "💭", title: "Thinking Tokens", blurb: "Visible hypothesis formation" },
    { icon: "🔧", title: "Tool Search Tool", blurb: "Discover relevant tools from large pools" },
  ]'
  :terminal='{ context: "See how Claude reasons through complex problems", detail: "visible thinking tokens show hypothesis formation" }'
/>
---

<!-- SLIDE: Thinking Tokens -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🧠"
  pillLabel="Claude & Anthropic Integration"
  title="Thinking Tokens"
  :left='{
    header: "Visible Reasoning",
    icon: "💭",
    items: [
      "Hypothesis formation in real-time",
      "Tool selection reasoning",
      "Error recovery strategies",
      "Interleaved thinking between tool calls"
    ]
  }'
  :right='{
    header: "Configuration",
    icon: "⚙️",
    items: [
      "Default: 4000 tokens budget",
      "Set 0 to disable thinking",
      "Detailed or compact style",
      "Collapse noisy tool sections"
    ],
    code: { language: "json", content: "{\n  \"github.copilot.chat.anthropic.thinking.budgetTokens\": 10000,\n  \"chat.thinking.style\": \"detailed\",\n  \"chat.agent.thinking.collapsedTools\": [\"terminal\", \"search\"],\n  \"chat.tools.autoExpandFailures\": true\n}" }
  }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Claude Agent SDK -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🧠"
  pillLabel="Claude & Anthropic Integration"
  title="Claude Agent SDK"
  :left='{
    header: "Available (v1.109 \u2192 v1.110)",
    items: [
      "Appears as session type in picker",
      "Uses Copilot subscription models",
      "Steering and queuing (v1.110)",
      "Session renaming",
      "Context window with compaction"
    ]
  }'
  :right='{
    header: "Additional Features (v1.110)",
    items: [
      "/compact, /agents, /hooks slash commands",
      "getDiagnostics tool access",
      "Custom thinking phrases",
      "Tool search tool for large pools",
      "Performance improvements"
    ],
    code: { language: "json", content: "{\n  \"chat.agent.thinking.phrases\": {\n    \"mode\": \"replace\",\n    \"phrases\": [\n      \"Analyzing architecture...\",\n      \"Evaluating patterns...\"\n    ]\n  }\n}" }
  }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Copilot Memory -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🧠"
  pillLabel="Claude & Anthropic Integration"
  title="Copilot Memory (Preview, v1.109)"
  :left='{
    header: "What It Stores",
    icon: "🧠",
    items: [
      "Preferences and conventions",
      "Project context",
      "Important decisions",
      "Available across sessions"
    ]
  }'
  :right='{
    header: "v1.110 Enhancement",
    icon: "📝",
    items: [
      "Plans from Plan agent persist to session memory",
      "Survive context compaction",
      "Remain available across turns"
    ],
    code: { language: "json", content: "{\n  \"github.copilot.chat.copilotMemory.enabled\": true\n}" }
  }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — Security & UX -->

<SectionOpenerSlide
  :partNumber="4"
  title="Security & UX"
  subtitle="Sandboxed autonomy, enterprise model control, and agentic browser tools"
  :cards='[
    { icon: "🖒", title: "Terminal Sandboxing", blurb: "OS-level restriction on agent commands" },
    { icon: "🔑", title: "BYOK (v1.117)", blurb: "Enterprise teams bring their own model API keys" },
    { icon: "🌐", title: "Agentic Browser", blurb: "Agents interact with web apps autonomously" },
  ]'
  :terminal='{ context: "Auto-approve safe commands while sandboxing blocks system access", detail: "sandboxed autonomy pattern" }'
/>
---

<!-- SLIDE: Terminal Sandboxing & Auto-Approval -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="🔒"
  pillLabel="Security & UX"
  title="Terminal Sandboxing & Auto-Approval"
  :left='{
    header: "Terminal Sandboxing (v1.109+)",
    icon: "🔒",
    items: [
      "File system: workspace directory only",
      "Network: blocked by default",
      "Allowlist specific domains",
      "macOS (sandbox-exec) & Linux (Landlock)"
    ]
  }'
  :right='{
    header: "YOLO Mode (v1.110)",
    icon: "⚡",
    items: [
      "/yolo or /autoApprove to enable",
      "/disableYolo to turn off",
      "Global auto-approve toggle",
      "Workspace npm scripts auto-approved"
    ],
    code: { language: "json", content: "{\n  \"chat.tools.terminal.sandbox.enabled\": true,\n  \"chat.tools.terminal.sandbox.network\": [\"github.com\", \"npmjs.com\"],\n  \"chat.tools.terminal.enableAutoApprove\": true,\n  \"chat.tools.terminal.autoApproveWorkspaceNpmScripts\": true\n}" }
  }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Agentic Browser Tools -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🌐"
  pillLabel="Security & UX"
  title="Agentic Browser Tools (Experimental, v1.110)"
  :columns='[
    { icon: "🗺️", title: "Page Navigation", items: ["openBrowserPage", "navigatePage"] },
    { icon: "📄", title: "Page Content", items: ["readPage", "screenshotPage"] },
    { icon: "👆", title: "User Interaction", items: ["clickElement", "typeInPage", "handleDialog"] }
  ]'
  :insight='{ icon: "🎯", text: "Build + Validate in One Loop: Agent writes component → opens browser → tests interaction → fixes → re-tests autonomously." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Chat UX Improvements -->
<FourCardGridSlide
  :partNumber="4"
  pillIcon="🔒"
  pillLabel="Security & UX"
  title="Chat UX & Productivity Improvements"
  :cards='[
    { icon: "🔍", title: "Model Picker Redesign", description: "Organized sections (Auto, Featured, Recent, Other), search box for large lists, rich hover with model capabilities (v1.110)" },
    { icon: "⚡", title: "Incremental Rendering", description: "Responses stream block-by-block with configurable animation (fade/rise/blur). Enabled by default in v1.117. Settings: chat.experimental.incrementalRendering.*" },
    { icon: "🌐", title: "Integrated Browser", description: "Replaces limited Simple Browser. Sign into websites, use DevTools, send elements to chat for AI assistance (v1.109)" },
    { icon: "🔎", title: "External Indexing", description: "Non-GitHub workspaces can be remotely indexed. Fast semantic search via #codebase, same experience as GitHub repos (v1.109)" }
  ]'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: BYOK — Bring Your Own Key -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="🔑"
  pillLabel="Security & UX"
  title="BYOK: Bring Your Own Key (v1.117, Enterprise)"
  :left='{
    header: "What It Unlocks",
    icon: "🔑",
    items: [
      { title: "Any model provider", detail: "OpenAI, Anthropic, Google, Azure, OpenRouter, Ollama, and custom endpoints" },
      { title: "Admin-controlled", detail: "Org admin enables via GitHub.com Copilot policy — developers then add their keys" },
      { title: "Extension ecosystem", detail: "Model providers contribute models via Language Model Chat Provider API" }
    ]
  }'
  :right='{
    header: "How to Use",
    icon: "⚙️",
    items: [
      { title: "Chat model picker → Manage Models…", detail: "Add a provider and paste your API key — models appear immediately" },
      { title: "Own billing + rate limits", detail: "Usage goes to your provider account, not Copilot quotas" },
      { title: "Copilot Business or Enterprise only", detail: "Not available on Copilot Individual" }
    ]
  }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="Single Assistant to Multi-Agent Platform"
leftLabel="Before"
rightLabel="After"
:leftItems='["Capability: single-agent chat", "Releases: quarterly", "Parallelism: sequential research", "Bottleneck: human context switching"]'
:rightItems='["Capability: 4 specialized agents + Autopilot", "Releases: v1.108–v1.117 (weekly)", "Parallelism: parallel research teams", "Bottleneck: eliminated"]'
:metrics='[
  { value: "4 types", detail: "Specialized agents" },
  { value: "v1.108–v1.117", detail: "Weekly releases" },
  { value: "BYOK", detail: "Enterprise model freedom" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Update VS Code to v1.117+", "If on Copilot Enterprise, ask admin to enable BYOK policy", "Try /init to bootstrap workspace instructions", "Enable thinking tokens (budgetTokens: 4000)", "Try /fork to branch a conversation"]'
  :thisWeek='["If BYOK enabled: add a provider via model picker → Manage Models… and compare responses", "Enable terminal sandboxing (sandbox.enabled: true)", "Create first Agent Skill in .github/skills/", "Install an Agent Plugin via @agentPlugins", "Use /compact to manually compact conversation"]'
  :thisMonth='["Define custom agent with subagent invocation", "Enable Copilot Memory (copilotMemory.enabled)", "Try agentic browser tools (enableChatTools: true)", "Use /create-skill to extract a debugging workflow"]'
  footer="VS Code has evolved from a single-chat assistant to a multi-agent orchestration platform. Plan locally → implement in background → validate in browser → merge selectively. The workflow pattern is the real unlock."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📦 Release Notes (v1.108–v1.117)", color: "cyan", items: [
        { href: "https://code.visualstudio.com/updates/v1_117", label: "v1.117 (Apr 22)", description: "BYOK for Enterprise, incremental rendering, session sorting" },
        { href: "https://code.visualstudio.com/updates/v1_115", label: "v1.115 (Apr 8)", description: "VS Code Agents app, terminal tools" },
        { href: "https://code.visualstudio.com/updates/v1_114", label: "v1.114 (Apr 1)", description: "Video in chat, simplified #codebase" },
        { href: "https://code.visualstudio.com/updates/v1_113", label: "v1.113 (Mar 25)", description: "Customizations editor, nested subagents" },
        { href: "https://code.visualstudio.com/updates/v1_112", label: "v1.112 (Mar 18)", description: "Browser debugging, MCP sandboxing" },
        { href: "https://code.visualstudio.com/updates/v1_111", label: "v1.111 (Mar 9)", description: "Autopilot mode, weekly releases begin" },
        { href: "https://code.visualstudio.com/updates/v1_110", label: "v1.110 (Feb)", description: "Agent Plugins, browser tools, /create-*" },
        { href: "https://code.visualstudio.com/updates/v1_109", label: "v1.109 (Jan)", description: "Skills GA, Claude Agent, Memory" },
        { href: "https://code.visualstudio.com/updates/v1_108", label: "v1.108 (Dec)", description: "Skills experimental, Agent Sessions" }
    ] },
    { title: "📘 Documentation", color: "purple", items: [
        { href: "https://code.visualstudio.com/docs/copilot/overview", label: "GitHub Copilot in VS Code", description: "Features, agents, customization" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/agent-plugins", label: "Agent Plugins", description: "Installing and creating bundles" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/agent-skills", label: "Agent Skills", description: "Creating SKILL.md files" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom Agents", description: ".agent.md definitions" },
        { href: "https://code.visualstudio.com/docs/copilot/agents/background-agents", label: "Background Agents", description: "Git worktree isolation" },
        { href: "https://code.visualstudio.com/docs/copilot/chat/mcp-servers", label: "MCP Servers", description: "Model Context Protocol setup" },
        { href: "https://code.visualstudio.com/docs/copilot/chat/copilot-memory", label: "Copilot Memory", description: "Persistent context across sessions" },
        { href: "https://code.visualstudio.com/docs/copilot/chat/chat-customizations", label: "Chat Customizations", description: "Unified customization editor" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="What's New in Copilot for VS Code: v1.108 – v1.117"
:cards="[
  { icon: '📅', value: '9 Releases', detail: 'Weekly cadence from v1.111', subdetail: 'Rapid innovation and iteration' },
  { icon: '🤖', value: 'Autopilot', detail: 'Full agent autonomy (v1.111)', subdetail: 'Hands-free multi-file editing' },
  { icon: '🔑', value: 'BYOK', detail: 'Enterprise model freedom (v1.117)', subdetail: 'Any provider, admin-controlled' },
  { icon: '⚙️', value: 'Customizations', detail: 'Unified editor (v1.113)', subdetail: 'One place for all configuration' },
]"
prompt="Questions? Let's discuss which features to adopt first for your workflow"
/>
