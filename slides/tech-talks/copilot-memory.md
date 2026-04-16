---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Memory: Stateful AI That Remembers Your Preferences
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Copilot Memory - Stateful AI That Remembers Your Preferences
module: tech-talks/copilot-memory
mdc: true
section: Customization & Context
status: active
updated: 2026-02-01
---

<script setup>
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
import CoreQuestionSlide from './components/CoreQuestionSlide.vue'
import TocSlide from './components/TocSlide.vue'
import WhatYouCanDoTodaySlide from './components/WhatYouCanDoTodaySlide.vue'
import SectionOpenerSlide from './components/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/BeforeAfterSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="Copilot Memory"
subtitle="Stateful AI That Remembers Your Preferences"
tagline="Stop re-explaining your coding style every session"
meta="Tech Talk · 40 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I stop re-explaining my coding style, workflow preferences, and project context every session?"
subtext="The AI forgets everything between sessions — same explanations, same corrections, same context setup."
highlight="Memory breaks this cycle by making preferences persist."
:cards='[
  { icon: "💡", title: "Developers with Established Conventions", description: "Persist code style, testing preferences, and doc patterns across all sessions" },
  { icon: "🔁", title: "Power Users Who Train Copilot Daily", description: "Stop losing months of corrections when sessions end or devices change" },
  { icon: "👥", title: "Teams Sharing Agent Best Practices", description: "Repo-scoped memories preserve codebase conventions for every developer on the team" },
  { title: "Context Resets", description: "Every session starts fresh — memory makes preferences survive across all sessions" },
  { title: "Wasted Time", description: "Same instructions and corrections every session — memory eliminates this entirely" },
  { title: "Preferences Lost", description: "Months of training forgotten when conversations end — memory persists it all" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🧠", title: "How Memory Works", subtitle: "Agent-accessible memory tool and storage lifecycle", blurb: "Agent writes, reads, and manages files across sessions", slide: 4 },
    { icon: "⚙️", title: "Enabling & Managing", subtitle: "Configuration, visibility, and control", blurb: "Settings, visibility controls, and manual editing", slide: 8 },
    { icon: "💾", title: "What to Store", subtitle: "Persistence criteria and best practices", blurb: "What persists vs. what stays in conversation context", slide: 11 },
    { icon: "🔐", title: "Privacy & Best Practices", subtitle: "Security model and effective usage", blurb: "No sensitive data, curate actively, review regularly", slide: 15 },
  ]'
/>
---

<!-- SLIDE: Part 1 — How Memory Works -->

<SectionOpenerSlide
  :partNumber="1"
  title="How Memory Works"
  subtitle="Agent-accessible memory tool and storage lifecycle"
  :cards='[
    { icon: "💾", title: "Store Operation", blurb: "Agent writes memory to persistent store" },
    { icon: "🔍", title: "Retrieve Operation", blurb: "Agents access prior context automatically" },
    { icon: "🔄", title: "Cross-Environment", blurb: "Memory spans IDE, CLI, and web" },
  ]'
  :terminal='{ context: "Agent writes, reads, and manages files", detail: "across sessions automatically" }'
/>
---

<!-- SLIDE: Memory Tool Architecture -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 How Memory Works</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Store and Retrieve Operations</div>
<div class="text-xs text-white/50">Agent-accessible memory tool with automatic persistence</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2 text-sm flex items-center gap-2">
<span>💾</span> Store Operation
</div>
<pre class="text-xs bg-black/30 p-2 rounded overflow-y-auto max-h-48"><code>User: "From now on, always ask
clarifying questions when
requirements seem ambiguous."
Agent: "I'll remember this."
[Memory Tool: Save]
Content: "Ask clarifying
questions when requirements
seem ambiguous instead of
making assumptions"
Scope: All future sessions</code></pre>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2 text-sm flex items-center gap-2">
<span>🔍</span> Retrieve Operation
</div>
<pre class="text-xs bg-black/30 p-2 rounded overflow-y-auto max-h-48"><code>[New chat session starts]
User: "Help me implement
user authentication"
[Memory Tool: Retrieve]
Found: "Always include
rollback strategy"
Found: "Prefer TypeScript
strict mode"
Found: "Format: bullet
points + code examples"
Agent: [Applies automatically]</code></pre>
</div>
</div>
</div>


---

<!-- SLIDE: Storage Decision Logic -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 How Memory Works</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">What the Agent Stores vs. Ignores</div>
<div class="text-xs text-white/50">Intelligent filtering for persistence-worthy context</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2 text-sm">✅ Store — Future-relevant preferences</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-emerald-400 mt-0.5">•</span>
<div><span class="font-semibold">"Always use X pattern"</span> — Explicit future-tense instruction</div>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400 mt-0.5">•</span>
<div><span class="font-semibold">"I prefer Y format"</span> — Personal style preference</div>
</div>
<div class="flex items-start gap-2">
<span class="text-emerald-400 mt-0.5">•</span>
<div><span class="font-semibold">"We chose Z because..."</span> — Historical decision context</div>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/30 to-amber-900/30 rounded-xl border border-red-500/30">
<div class="font-bold text-red-300 mb-2 text-sm">❌ Don't Store — Ephemeral or sensitive</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">•</span>
<div><span class="font-semibold">"Fix bug on line 47"</span> — Session-specific</div>
</div>
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">•</span>
<div><span class="font-semibold">"API key: abc123"</span> — Security risk</div>
</div>
<div class="flex items-start gap-2">
<span class="text-red-400 mt-0.5">•</span>
<div><span class="font-semibold">"Try approach A first"</span> — Ephemeral experiment</div>
</div>
</div>
</div>
</div>
<div class="relative z-10 mt-2 p-2 bg-blue-900/20 rounded-lg border border-blue-500/20">
<div class="text-xs text-blue-300">💡 <span class="font-semibold">Agent asks permission when ambiguous:</span> "Should I remember this for future sessions?"</div>
</div>
</div>

---

<!-- SLIDE: Semantic Retrieval & Sync -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 How Memory Works</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Contextual Retrieval and Environment Sync</div>
<div class="text-xs text-white/50">Semantic matching and GitHub account-linked storage</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2 text-sm">🎯 Semantic Retrieval</div>
<div class="text-xs mb-2">Memories surface based on <span class="text-blue-300">meaning</span>, not keywords</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<div><span class="font-semibold">Working on auth</span> → Security memories + OAuth decisions</div>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<div><span class="font-semibold">Writing validation</span> → Coding style (early returns)</div>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<div><span class="font-semibold">Explaining concepts</span> → Communication format</div>
</div>
</div>
<div class="mt-2 p-2 bg-indigo-900/30 rounded text-xs">
<span class="text-indigo-300 font-semibold">Example:</span> Stored "prefer functional components" → applies when discussing React architecture without saying "functional"
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 text-sm">🔄 Cross-Environment Sync</div>
<div class="text-xs mb-2">Linked to GitHub account, available everywhere</div>
<pre class="text-xs bg-black/30 p-2 rounded overflow-y-auto max-h-48"><code>Store in VS Code Chat
  ↓
[GitHub Account Storage]
  ↓
Available in:
  • VS Code (all machines)
  • GitHub.com Copilot Chat
  • GitHub CLI (gh copilot)
Encrypted at rest & in transit
Auto-sync (no manual action)</code></pre>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Enabling & Managing -->

<SectionOpenerSlide
  :partNumber="2"
  title="Enabling & Managing"
  subtitle="Configuration, visibility, and control over stored memories"
  :cards='[
    { icon: "⚙️", title: "Single Setting", blurb: "One config line enables the memory tool" },
    { icon: "👀", title: "Full Transparency", blurb: "View all stored memory files" },
    { icon: "⏱️", title: "28-Day Expiration", blurb: "Automatic cleanup policy" },
  ]'
  :terminal='{ context: "One config line enables memory tool", detail: "default 28-day retention" }'
/>
---

<!-- SLIDE: Enabling Memory -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Enabling & Managing</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Enable Memory in 5 Minutes</div>
<div class="text-xs text-white/50">Single VS Code setting activates the memory tool</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30 mb-3">
<div class="font-bold text-blue-300 mb-2 text-sm">VS Code Configuration</div>
<pre class="text-xs bg-black/30 p-2 rounded overflow-y-auto max-h-48"><code>{
  "github.copilot.chat.copilotMemory.enabled": true
}</code></pre>
</div>
<div class="grid grid-cols-3 gap-3 text-xs">
<div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/20">
<div class="font-semibold text-cyan-300 mb-1">What Happens When Enabled</div>
<div class="space-y-1">
<div>• Agent gains memory tool access</div>
<div>• Can store persistent context</div>
<div>• Auto-retrieval in future sessions</div>
</div>
</div>
<div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/20">
<div class="font-semibold text-blue-300 mb-1">Multi-Environment</div>
<div class="space-y-1">
<div>• <span class="font-semibold">VS Code:</span> Setting above</div>
<div>• <span class="font-semibold">GitHub.com:</span> Settings page</div>
<div>• <span class="font-semibold">CLI:</span> Inherits from account</div>
</div>
</div>
<div class="p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/20">
<div class="font-semibold text-indigo-300 mb-1">Zero Configuration After</div>
<div class="space-y-1">
<div>• Memory syncs automatically</div>
<div>• No per-project setup</div>
<div>• Works across all repositories</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Viewing and Managing Memories -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⚙️ Enabling & Managing</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Full Visibility and Control</div>
<div class="text-xs text-white/50">GitHub Settings interface for memory management</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2 text-sm">👀 Viewing Stored Memories</div>
<div class="text-xs mb-2">Navigate to <span class="text-blue-300 font-mono">github.com/settings/copilot</span></div>
<pre class="text-xs bg-black/30 p-2 rounded overflow-y-auto max-h-48"><code>Memory: "Prefer early returns
over nested conditionals.
Check failure cases first."
Stored: 2026-01-15
Source: VS Code Chat
&#45;&#45;&#45;
Memory: "Technical explanations
format: summary, why, code
example, gotchas."
Stored: 2026-01-20
Source: GitHub.com Chat</code></pre>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 text-sm">🗑️ Managing Memories</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-purple-900/30 rounded">
<span class="font-semibold text-purple-300">Delete Individual:</span> Click trash icon next to any memory
</div>
<div class="p-2 bg-purple-900/30 rounded">
<span class="font-semibold text-purple-300">Bulk Delete:</span> Select multiple, "Delete Selected"
</div>
<div class="p-2 bg-purple-900/30 rounded">
<span class="font-semibold text-purple-300">Clear All:</span> Reset completely for fresh start
</div>
<div class="p-2 bg-purple-900/30 rounded">
<span class="font-semibold text-purple-300">Export:</span> Download JSON for backup/audit
</div>
</div>
</div>
</div>
<div class="relative z-10 mt-2 p-2 bg-indigo-900/20 rounded-lg border border-indigo-500/20">
<div class="text-xs text-indigo-300">⏱️ <span class="font-semibold">28-Day Auto-Expiration:</span> Memories expire automatically to prevent stale preferences. Review monthly, delete obsolete, refresh important ones.</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — What to Store -->

<SectionOpenerSlide
  :partNumber="3"
  title="What to Store"
  subtitle="Persistence criteria and best practices"
  :cards='[
    { icon: "💾", title: "Ideal Candidates", blurb: "Preferences, patterns, project context" },
    { icon: "🚫", title: "What NOT to Store", blurb: "Secrets, PII, or temporary state" },
    { icon: "✅", title: "Persistence Test", blurb: "Is it useful weeks from now?" },
  ]'
  :terminal='{ context: "What persists vs. what stays in conversation context", detail: "strategic memory architecture" }'
/>
---

<!-- SLIDE: Ideal Candidates for Memory -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💾 What to Store</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Persistence-Worthy Preferences</div>
<div class="text-xs text-white/50">Maximum value when stored long-term</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30 mb-2">
<div class="font-bold text-indigo-300 mb-1 text-sm">🎨 Coding Style</div>
<div class="space-y-1 text-xs">
<div>• "Always use TypeScript strict mode"</div>
<div>• "Prefer functional components"</div>
<div>• "Functions &lt;20 lines, single responsibility"</div>
<div>• "Include JSDoc for public APIs"</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-1 text-sm">🔄 Workflow Preferences</div>
<div class="space-y-1 text-xs">
<div>• "Ask clarifying questions first"</div>
<div>• "Show me a plan before changes"</div>
<div>• "Always include rollback strategy"</div>
<div>• "Estimate time for each step"</div>
</div>
</div>
</div>
<div>
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30 mb-2">
<div class="font-bold text-cyan-300 mb-1 text-sm">💬 Communication Style</div>
<div class="space-y-1 text-xs">
<div>• "Be concise — bullet points over paragraphs"</div>
<div>• "Include code examples in explanations"</div>
<div>• "Always mention tradeoffs"</div>
<div>• "One-sentence summary before details"</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1 text-sm">🏗️ Architectural Decisions</div>
<div class="space-y-1 text-xs">
<div>• "Error handling uses Result&lt;T, E&gt; type"</div>
<div>• "Database queries via repository pattern"</div>
<div>• "Use Redis — pub/sub needed (ADR-047)"</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: What Should NOT Be Stored -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💾 What to Store</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">What Should NOT Be Stored</div>
<div class="text-xs text-white/50">Ephemeral context, secrets, and team standards belong elsewhere</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div>
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30 mb-2">
<div class="font-bold text-red-300 mb-1 text-sm">❌ Session-Specific Context</div>
<div class="space-y-1 text-xs">
<div>• "Fix the bug on line 47"</div>
<div>• "Refactor function we discussed earlier"</div>
<div>• Current file contents/workspace state</div>
</div>
<div class="mt-2 text-xs italic opacity-70">Why: Ephemeral — relevant only to current task</div>
</div>
<div class="p-3 bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-xl border border-amber-500/30">
<div class="font-bold text-amber-300 mb-1 text-sm">❌ Temporary Debugging</div>
<div class="space-y-1 text-xs">
<div>• "Skip tests for now"</div>
<div>• "Ignore linting errors temporarily"</div>
<div>• "Use console.log for debugging"</div>
</div>
<div class="mt-2 text-xs italic opacity-70">Why: Bad habits shouldn't persist long-term</div>
</div>
</div>
<div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30 mb-2">
<div class="font-bold text-purple-300 mb-1 text-sm">🔒 Sensitive Information</div>
<div class="space-y-1 text-xs">
<div>• Passwords, API keys, tokens</div>
<div>• PII beyond GitHub identity</div>
<div>• Connection strings with credentials</div>
</div>
<div class="mt-2 text-xs italic opacity-70">Why: Security risk — use secret management</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-1 text-sm">👥 Team Standards</div>
<div class="space-y-1 text-xs">
<div>• Team-wide coding standards</div>
<div>• Mandatory architecture patterns</div>
<div>• Compliance requirements</div>
</div>
<div class="mt-2 text-xs italic opacity-70">Why: Memory is personal — use custom instructions</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Memory vs Custom Instructions -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💾 What to Store</span>
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
<div class="text-lg font-bold text-white mb-0.5">Memory vs. Custom Instructions</div>
<div class="text-xs text-white/50">Complementary features serving different persistence needs</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 mb-2">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-sm">💾 Use Memory When</div>
<div class="space-y-1 text-xs">
<div>✅ Personal preferences across all projects</div>
<div>✅ Communication format (how AI talks to you)</div>
<div>✅ Individual workflow (planning style)</div>
<div>✅ Don't apply to teammates</div>
</div>
<div class="mt-2 p-2 bg-pink-900/30 rounded text-xs font-mono">
"Prefer early returns"<br />
"Explain with bullet points"
</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="font-bold text-cyan-300 mb-2 text-sm">📄 Use Instructions When</div>
<div class="space-y-1 text-xs">
<div>✅ Apply to entire team</div>
<div>✅ Project architecture patterns</div>
<div>✅ Security requirements</div>
<div>✅ Version controlled and reviewed</div>
</div>
<div class="mt-2 p-2 bg-blue-900/30 rounded text-xs font-mono">
"Use TypeScript strict mode"<br />
"Follow Airbnb style guide"
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 text-sm">🎯 Layered Customization — They Work Together</div>
<div class="text-xs font-mono bg-black/30 p-2 rounded">
[Custom Instructions] Team: TypeScript strict mode, Airbnb style<br />
     ↓<br />
[Memory] Personal: Early returns, concise explanations<br />
     ↓<br />
[Result] Team consistency + individual customization
</div>
</div>
</div>
</div>

---

<!-- SLIDE: The Persistence Test -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💾 What to Store</span>
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
<div class="text-lg font-bold text-white mb-0.5">The Persistence Test</div>
<div class="text-xs text-white/50">4 questions to validate memory-worthiness</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-sm">❓ Question 1</div>
<div class="text-xs mb-1 font-semibold">"Will this apply to multiple future sessions?"</div>
<div class="text-xs opacity-70">If not, don't store — use ephemeral chat context instead</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-xl border border-pink-500/30">
<div class="font-bold text-pink-300 mb-2 text-sm">❓ Question 2</div>
<div class="text-xs mb-1 font-semibold">"Is this a personal preference or team requirement?"</div>
<div class="text-xs opacity-70">Personal → Memory | Team → Custom Instructions</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 text-sm">❓ Question 3</div>
<div class="text-xs mb-1 font-semibold">"Would I explain this to a new teammate?"</div>
<div class="text-xs opacity-70">If no, probably not memory-worthy — too granular or ephemeral</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="font-bold text-blue-300 mb-2 text-sm">❓ Question 4</div>
<div class="text-xs mb-1 font-semibold">"Is this sensitive or security-related?"</div>
<div class="text-xs opacity-70">If yes, NEVER store in memory — use secret management systems</div>
</div>
</div>
<div class="mt-3 p-2 bg-purple-900/20 rounded-lg border border-purple-500/20">
<div class="text-xs text-purple-300">💡 <span class="font-semibold">Best Practice:</span> Start conservative — it's easier to add memories later than fix conflicting/stale ones. Curate to 10-20 most impactful preferences.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Privacy & Best Practices -->

<SectionOpenerSlide
  :partNumber="4"
  title="Privacy & Best Practices"
  subtitle="Security model and effective usage"
  :cards='[
    { icon: "🔐", title: "Privacy-First", blurb: "No sensitive data in memory" },
    { icon: "🧹", title: "Memory Hygiene", blurb: "Curate actively, review regularly" },
    { icon: "📈", title: "Progressive Profiles", blurb: "Build understanding over time" },
  ]'
  :terminal='{ context: "No sensitive data, curate actively", detail: "review regularly" }'
/>
---

<!-- SLIDE: Privacy and Security Model -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔐 Privacy & Best Practices</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Privacy-First Architecture</div>
<div class="text-xs text-white/50">Individual privacy with enterprise governance options</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-sm">✅ What Gets Stored</div>
<div class="space-y-1 text-xs">
<div>• Text summaries of preferences (e.g., "Prefer early returns")</div>
<div>• Linked to your GitHub account identity</div>
<div>• Encrypted at rest and in transit</div>
<div>• Same protection as other GitHub data</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-rose-900/40 rounded-xl border border-pink-500/30">
<div class="font-bold text-pink-300 mb-2 text-sm">🚫 What NEVER Gets Stored</div>
<div class="space-y-1 text-xs">
<div>• File contents or code snippets</div>
<div>• Secrets, API keys, credentials, tokens</div>
<div>• PII beyond GitHub account</div>
<div>• Current workspace state or file paths</div>
</div>
</div>
</div>
<div class="relative z-10 mt-2 p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="font-bold text-indigo-300 mb-2 text-sm">🏢 Enterprise Governance</div>
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-purple-900/30 rounded">
<span class="font-semibold text-purple-300">Content Visibility:</span> Individual-private, NOT in audit logs
</div>
<div class="p-2 bg-purple-900/30 rounded">
<span class="font-semibold text-purple-300">Org Policy:</span> Can disable memory for all users (all-or-nothing)
</div>
<div class="p-2 bg-purple-900/30 rounded">
<span class="font-semibold text-purple-300">Data Portability:</span> Export memories anytime as JSON
</div>
<div class="p-2 bg-purple-900/30 rounded">
<span class="font-semibold text-purple-300">Right to Deletion:</span> Delete individual or clear all with one click
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Memory Hygiene & Best Practices -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔐 Privacy & Best Practices</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Effective Memory Usage</div>
<div class="text-xs text-white/50">Be explicit, specific, and actionable</div>
</div>
<div class="relative z-10 flex-1 min-h-0 grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2 text-sm">✅ Good — Explicit and Specific</div>
<div class="space-y-1 text-xs font-mono bg-black/30 p-2 rounded">
<div>"Remember for future sessions:<br />I prefer concise bullet-point<br />explanations"</div>
<div class="text-gray-500">---</div>
<div>"From now on, always ask<br />clarifying questions before<br />implementing"</div>
<div class="text-gray-500">---</div>
<div>"Functions under 20 lines with<br />single responsibility"</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/30 to-amber-900/30 rounded-xl border border-red-500/30">
<div class="font-bold text-red-300 mb-2 text-sm">❌ Vague — Too Generic to Apply</div>
<div class="space-y-1 text-xs font-mono bg-black/30 p-2 rounded">
<div>"I like clean code"<br /><span class="text-gray-500">(What does "clean" mean?)</span></div>
<div class="text-gray-500">---</div>
<div>"Be helpful"<br /><span class="text-gray-500">(Too generic to apply)</span></div>
<div class="text-gray-500">---</div>
<div>"Use best practices"<br /><span class="text-gray-500">(No specificity)</span></div>
</div>
</div>
</div>
<div class="relative z-10 mt-2 p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="font-bold text-purple-300 mb-2 text-sm">🧹 Monthly Memory Hygiene</div>
<div class="grid grid-cols-4 gap-2 text-xs">
<div class="p-2 bg-pink-900/30 rounded">1. <span class="font-semibold">Audit</span> stored memories</div>
<div class="p-2 bg-pink-900/30 rounded">2. <span class="font-semibold">Delete</span> obsolete preferences</div>
<div class="p-2 bg-pink-900/30 rounded">3. <span class="font-semibold">Update</span> evolved conventions</div>
<div class="p-2 bg-pink-900/30 rounded">4. <span class="font-semibold">Reconfirm</span> critical ones</div>
</div>
</div>
</div>


---

<!-- SLIDE: Progressive Memory Profiles -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔐 Privacy & Best Practices</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Build Your Memory Profile Over 4 Weeks</div>
<div class="text-xs text-white/50">Progressive approach to curated 10-15 memory collection</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-4 gap-3 text-xs">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">1️⃣</div>
<div class="font-bold text-cyan-300 mb-1">Week 1: Communication</div>
<div class="text-xs opacity-70 mb-2">Immediate impact, easy to validate</div>
<div class="space-y-1 text-xs">
<div>• Explanation format</div>
<div>• Verbosity level</div>
<div>• Example style</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">2️⃣</div>
<div class="font-bold text-blue-300 mb-1">Week 2: Coding Style</div>
<div class="text-xs opacity-70 mb-2">Personal patterns beyond team standards</div>
<div class="space-y-1 text-xs">
<div>• Function length</div>
<div>• Conditional structure</div>
<div>• Comment style</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">3️⃣</div>
<div class="font-bold text-indigo-300 mb-1">Week 3: Workflow</div>
<div class="text-xs opacity-70 mb-2">How you work, not what you build</div>
<div class="space-y-1 text-xs">
<div>• Planning style</div>
<div>• Review approach</div>
<div>• Debug methodology</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">4️⃣</div>
<div class="font-bold text-purple-300 mb-1">Week 4: Project Context</div>
<div class="text-xs opacity-70 mb-2">Architectural decisions and rationale</div>
<div class="space-y-1 text-xs">
<div>• Tech choices & why</div>
<div>• Historical context</div>
<div>• ADR references</div>
</div>
</div>
</div>
<div class="relative z-10 mt-2 p-2 bg-pink-900/20 rounded-lg border border-pink-500/20">
<div class="text-xs text-pink-300">🎯 <span class="font-semibold">Outcome:</span> After 4 weeks, a curated 10-15 memory collection provides consistent, personalized assistance without overwhelming retrieval.</div>
</div>
</div>
</div>


---

<!-- SLIDE: Real-World Impact -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📊 Real-World Impact</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Quantified Time Savings</div>
<div class="text-xs text-white/50">From repeated explanations to automatic application</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3 text-xs mb-2">
<div class="p-3 bg-gradient-to-br from-amber-900/40 to-orange-900/40 rounded-xl border border-amber-500/30">
<div class="text-xl mb-1">⏱️</div>
<div class="font-bold text-amber-300 mb-1">Style Re-Explanation</div>
<div class="mb-2 text-xs">Developer re-explains preferences every session</div>
<div class="p-2 bg-orange-900/30 rounded mb-1">
<span class="font-semibold text-orange-300">Before:</span> 10 min/session × 3/day × 5 days = <span class="text-amber-300 font-bold">150 min/week</span>
</div>
<div class="p-2 bg-emerald-900/30 rounded">
<span class="font-semibold text-emerald-300">After:</span> 5 min one-time storage = <span class="text-emerald-300 font-bold">145 min/week saved</span>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="text-xl mb-1">🏗️</div>
<div class="font-bold text-blue-300 mb-1">Architectural Decisions</div>
<div class="mb-2 text-xs">Redis vs Memcached correction cycle every month</div>
<div class="p-2 bg-indigo-900/30 rounded mb-1">
<span class="font-semibold text-indigo-300">Before:</span> AI suggests Memcached, 15 min to correct, monthly
</div>
<div class="p-2 bg-emerald-900/30 rounded">
<span class="font-semibold text-emerald-300">After:</span> AI references Redis automatically with rationale
</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="text-xl mb-1">💬</div>
<div class="font-bold text-purple-300 mb-1">Communication Format</div>
<div class="mb-2 text-xs">Manual "make this shorter" follow-ups</div>
<div class="p-2 bg-pink-900/30 rounded mb-1">
<span class="font-semibold text-pink-300">Before:</span> 40-60 responses/week need manual adjustment
</div>
<div class="p-2 bg-emerald-900/30 rounded">
<span class="font-semibold text-emerald-300">After:</span> Zero follow-ups — arrives in preferred format
</div>
</div>
</div>
<div class="relative z-10 p-3 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl border border-emerald-500/30">
<div class="font-bold text-emerald-300 mb-2 text-sm">💡 The Core Transformation</div>
<div class="text-xs">
<span class="font-semibold">Before:</span> "I prefer concise bullet-point explanations" repeated in 40 chat sessions over 2 months (200 minutes wasted)
<br />
<span class="font-semibold text-emerald-300">After:</span> Store once, agent applies automatically in all 40 sessions (2 minutes invested, 198 minutes saved — <span class="text-emerald-300 font-bold">99x ROI</span>)
</div>
</div>
</div>
</div>


---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="Context Reset to Persistent Preferences"
:leftItems='["Context: reset each session", "Setup: repeat preferences manually", "Timeline: forget what worked", "Personalization: none"]'
:rightItems='["Context: persistent across sessions", "Setup: 5 minutes", "Timeline: 40 sessions = 2 months", "Personalization: instant"]'
:metrics='[
  { value: "99x", detail: "ROI (2 min → 198 min saved)" },
  { value: "5 min", detail: "Setup time" },
  { value: "2 months", detail: "40 sessions" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Enable in VS Code settings", "Store a coding style preference in memory", "Verify in a new chat — observe preference applied automatically"]'
  :thisWeek='["Store 3-5 core preferences: coding, communication, workflow", "Review at github.com/settings/copilot", "Test application in actual work", "Delete/refine what didn&#39;t work"]'
  :thisMonth='["Build a 4-week progressive memory profile", "Distinguish memory vs custom instructions", "Set a monthly review reminder", "Share your memory strategy with team"]'
  footer="Validate your preferences over one week, review how memory layers with Custom Instructions, and share your memory profile strategy with teammates to multiply the personalization benefit."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Official Documentation", color: "cyan", items: [
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory", label: "GitHub Docs: Copilot Memory", description: "Core concepts, enabling memory, curation guide" },
        { href: "https://github.com/settings/copilot", label: "GitHub Settings: Manage Memory", description: "View, edit, and delete stored memories; privacy controls" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/custom-instructions", label: "Custom Instructions Guide", description: "Complementary feature for team standards (works with memory)" }
    ] },
    { title: "🎓 Related Content", color: "purple", items: [
        { label: "Copilot Primitives", description: "Instructions, prompts, skills, and agents — the full customization stack" },
        { label: "Enterprise Patterns", description: "Org-level memory governance and privacy controls" },
        { label: "Custom Instructions Workshop", description: "Pair memory with explicit instructions for maximum consistency" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="Stateful AI That Remembers Your Preferences"
:cards="[
  { icon: '💡', value: '99x', detail: 'ROI on time invested', subdetail: '2 min → 198 min saved across sessions' },
  { icon: '🔄', value: '28 days', detail: 'Auto-expiration cycle', subdetail: 'Keeps preferences fresh and relevant' },
  { icon: '🎯', value: '10-15', detail: 'Ideal memory count', subdetail: 'Curated for maximum impact' },
]"
prompt="Questions? Let's discuss how to bring persistent memory to your Copilot workflows"
/>
