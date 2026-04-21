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
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import TitleSlide from './components/structure/TitleSlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
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
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🧠"
  pillLabel="How Memory Works"
  title="Store and Retrieve Operations"
  :left='{ header: "💾 Store Operation", items: [], code: { language: "text", content: "User: \u201cFrom now on, always ask\nclarifying questions when\nrequirements seem ambiguous.\u201d\nAgent: \u201cI\u2019ll remember this.\u201d\n[Memory Tool: Save]\nContent: \u201cAsk clarifying questions\nwhen requirements seem ambiguous\ninstead of making assumptions\u201d\nScope: All future sessions" } }'
  :right='{ header: "🔍 Retrieve Operation", items: [], code: { language: "text", content: "[New chat session starts]\nUser: \u201cHelp me implement\nuser authentication\u201d\n[Memory Tool: Retrieve]\nFound: \u201cAlways include rollback strategy\u201d\nFound: \u201cPrefer TypeScript strict mode\u201d\nFound: \u201cFormat: bullet points + code examples\u201d\nAgent: [Applies automatically]" } }'
/>


---

<!-- SLIDE: Storage Decision Logic -->
<BeforeAfterPanelsSlide
  :partNumber="1"
  pillIcon="🧠"
  pillLabel="How Memory Works"
  title="What the Agent Stores vs. Ignores"
  :before='{ header: "❌ Don\u2019t Store — Ephemeral or sensitive", items: [
    { title: "\u201cFix bug on line 47\u201d", detail: "Session-specific, not future-relevant" },
    { title: "\u201cAPI key: abc123\u201d", detail: "Security risk — use secret management" },
    { title: "\u201cTry approach A first\u201d", detail: "Ephemeral experiment" }
  ] }'
  :after='{ header: "✅ Store — Future-relevant preferences", items: [
    { title: "\u201cAlways use X pattern\u201d", detail: "Explicit future-tense instruction" },
    { title: "\u201cI prefer Y format\u201d", detail: "Personal style preference" },
    { title: "\u201cWe chose Z because...\u201d", detail: "Historical decision context" }
  ] }'
  :insight='{ icon: "💡", text: "Agent asks permission when ambiguous: \u2018Should I remember this for future sessions?\u2019" }'
/>

---

<!-- SLIDE: Semantic Retrieval & Sync -->
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🧠"
  pillLabel="How Memory Works"
  title="Contextual Retrieval and Environment Sync"
  :left='{ header: "🎯 Semantic Retrieval", items: [
    { title: "Working on auth", detail: "→ Security memories + OAuth decisions surface automatically" },
    { title: "Writing validation", detail: "→ Coding style preference (early returns) applies" },
    { title: "Explaining concepts", detail: "→ Communication format preference retrieved" },
    { title: "Example", detail: "Stored \u201cprefer functional components\u201d applies to React discussions without the word \u2018functional\u2019" }
  ] }'
  :right='{ header: "🔄 Cross-Environment Sync", items: [], code: { language: "text", content: "Store in VS Code Chat\n  \u2193\n[GitHub Account Storage]\n  \u2193\nAvailable in:\n  \u2022 VS Code (all machines)\n  \u2022 GitHub.com Copilot Chat\n  \u2022 GitHub CLI (gh copilot)\nEncrypted at rest & in transit\nAuto-sync (no manual action)" } }'
/>

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
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="⚙️"
  pillLabel="Enabling & Managing"
  title="Enable Memory in 5 Minutes"
  :code='{ language: "json", filename: "settings.json", content: "{\n  \u201cgithub.copilot.chat.copilotMemory.enabled\u201d: true\n}" }'
  codePosition="top"
  :features='[
    { icon: "🔮", title: "What Happens When Enabled", description: "Agent gains memory tool access, can store persistent context, and auto-retrieves in future sessions" },
    { icon: "🌐", title: "Multi-Environment", description: "VS Code: settings.json · GitHub.com: Settings page · CLI: Inherits from account" },
    { icon: "⚙️", title: "Zero Configuration After", description: "Memory syncs automatically, no per-project setup, works across all repositories" }
  ]'
/>

---

<!-- SLIDE: Viewing and Managing Memories -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="⚙️"
  pillLabel="Enabling & Managing"
  title="Full Visibility and Control"
  :left='{ header: "👀 Viewing Stored Memories", items: [{ title: "Navigate to github.com/settings/copilot", detail: "Shows each memory with date stored and source environment" }], code: { language: "text", content: "Memory: \u201cPrefer early returns\nover nested conditionals.\nCheck failure cases first.\u201d\nStored: 2026-01-15 · VS Code Chat\n---\nMemory: \u201cTechnical explanations\nformat: summary, why, code\nexample, gotchas.\u201d\nStored: 2026-01-20 · GitHub.com" } }'
  :right='{ header: "🗑️ Managing Memories", items: [
    { title: "Delete Individual", detail: "Click trash icon next to any memory" },
    { title: "Bulk Delete", detail: "Select multiple, then click Delete Selected" },
    { title: "Clear All", detail: "Reset completely for a fresh start" },
    { title: "Export", detail: "Download JSON for backup or audit" }
  ] }'
  :insight='{ icon: "⏱️", text: "28-Day Auto-Expiration: Memories expire automatically to prevent stale preferences. Review monthly, delete obsolete, refresh important ones." }'
/>

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
<FourCardGridSlide
  :partNumber="3"
  pillIcon="💾"
  pillLabel="What to Store"
  title="Persistence-Worthy Preferences"
  :cards='[
    { icon: "🎨", title: "Coding Style", description: "TypeScript strict mode, functional components, functions under 20 lines, JSDoc for public APIs" },
    { icon: "🔄", title: "Workflow Preferences", description: "Ask clarifying questions first, show plan before changes, always include rollback strategy, estimate time per step" },
    { icon: "💬", title: "Communication Style", description: "Concise bullet points over paragraphs, code examples in explanations, always mention tradeoffs" },
    { icon: "🏗️", title: "Architectural Decisions", description: "Result type error handling, repository pattern for DB queries, Redis for pub/sub (ADR-047)" }
  ]'
  :insight='{ icon: "🎯", text: "The best memory candidates are preferences you repeat every session — coding style, communication habits, and architectural decisions that compound over time" }'
/>

---

<!-- SLIDE: What Should NOT Be Stored -->
<FourCardGridSlide
  :partNumber="3"
  pillIcon="💾"
  pillLabel="What to Store"
  title="What Should NOT Be Stored"
  :cards='[
    { icon: "❌", title: "Session-Specific Context", description: "Fix bugs on specific lines, current file contents, references to earlier discussion — ephemeral, relevant only now" },
    { icon: "⚠️", title: "Temporary Debugging", description: "Skip tests for now, ignore linting errors, use console.log — bad habits that should not persist long-term" },
    { icon: "🔒", title: "Sensitive Information", description: "Passwords, API keys, tokens, PII, connection strings with credentials — use secret management instead" },
    { icon: "👥", title: "Team Standards", description: "Team-wide coding standards, mandatory architecture patterns, compliance requirements — use custom instructions instead" }
  ]'
  :insight='{ icon: "🎯", text: "Memory is personal and persistent — team standards belong in custom instructions, secrets in vaults, and ephemeral context stays in the session" }'
/>

---

<!-- SLIDE: Memory vs Custom Instructions -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="💾"
  pillLabel="What to Store"
  title="Memory vs. Custom Instructions"
  :left='{ header: "💾 Use Memory When", items: [
    "Personal preferences across all projects",
    "Communication format (how AI talks to you)",
    "Individual workflow (planning style)",
    "Preferences that don\u2019t apply to teammates"
  ], code: { language: "text", content: "\u201cPrefer early returns\u201d\n\u201cExplain with bullet points\u201d" } }'
  :right='{ header: "📄 Use Instructions When", items: [
    "Apply to entire team",
    "Project architecture patterns",
    "Security requirements",
    "Version controlled and reviewed"
  ], code: { language: "text", content: "\u201cUse TypeScript strict mode\u201d\n\u201cFollow Airbnb style guide\u201d" } }'
  :insight='{ icon: "🎯", text: "Layered Customization: [Custom Instructions] Team standards → [Memory] Personal preferences → [Result] Team consistency + individual customization" }'
/>

---

<!-- SLIDE: The Persistence Test -->
<FourCardGridSlide
  :partNumber="3"
  pillIcon="💾"
  pillLabel="What to Store"
  title="The Persistence Test"
  :cards='[
    { icon: "❓", title: "Question 1", description: "Will this apply to multiple future sessions? If not, don\u2019t store — use ephemeral chat context instead" },
    { icon: "❓", title: "Question 2", description: "Is this a personal preference or team requirement? Personal \u2192 Memory. Team \u2192 Custom Instructions" },
    { icon: "❓", title: "Question 3", description: "Would I explain this to a new teammate? If no, probably not memory-worthy — too granular or ephemeral" },
    { icon: "❓", title: "Question 4", description: "Is this sensitive or security-related? If yes, NEVER store in memory — use secret management systems" }
  ]'
  :insight='{ icon: "💡", text: "Start conservative — it\u2019s easier to add memories later than fix conflicting or stale ones. Curate to 10\u201320 most impactful preferences." }'
/>

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
<BeforeAfterPanelsSlide
  :partNumber="4"
  pillIcon="🔐"
  pillLabel="Privacy & Best Practices"
  title="Privacy-First Architecture"
  :before='{ header: "🚫 What NEVER Gets Stored", items: [
    "File contents or code snippets",
    "Secrets, API keys, credentials, tokens",
    "PII beyond GitHub account",
    "Current workspace state or file paths"
  ] }'
  :after='{ header: "✅ What Gets Stored", items: [
    { title: "Text summaries of preferences", detail: "e.g., \u201cPrefer early returns\u201d" },
    { title: "Linked to your GitHub account identity", detail: "Encrypted at rest and in transit" },
    { title: "Same protection as other GitHub data", detail: "Individual-private, not in audit logs" },
    { title: "Data portability", detail: "Export memories anytime as JSON" }
  ] }'
  :insight='{ icon: "🏢", text: "Enterprise Governance: Org policy can disable memory for all users. Individuals can delete individual memories or clear all with one click." }'
/>

---

<!-- SLIDE: Memory Hygiene & Best Practices -->
<BeforeAfterPanelsSlide
  :partNumber="4"
  pillIcon="🔐"
  pillLabel="Privacy & Best Practices"
  title="Effective Memory Usage"
  :before='{ header: "❌ Vague — Too Generic to Apply", items: [
    { title: "\u201cI like clean code\u201d", detail: "What does \u2018clean\u2019 mean? Not actionable" },
    { title: "\u201cBe helpful\u201d", detail: "Too generic — already the default behavior" },
    { title: "\u201cUse best practices\u201d", detail: "No specificity — which practices?" }
  ] }'
  :after='{ header: "✅ Good — Explicit and Specific", items: [
    { title: "\u201cRemember for future sessions: I prefer concise bullet-point explanations\u201d", detail: "Explicit and future-scoped" },
    { title: "\u201cFrom now on, always ask clarifying questions before implementing\u201d", detail: "Future-tense instruction" },
    { title: "Functions under 20 lines with single responsibility", detail: "Specific and measurable" }
  ] }'
  :insight='{ icon: "🧹", text: "Monthly Memory Hygiene: (1) Audit stored memories, (2) Delete obsolete preferences, (3) Update evolved conventions, (4) Reconfirm critical ones" }'
/>


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
<BeforeAfterMetricsSlide
  :partNumber="4"
  pillIcon="📊"
  pillLabel="Real-World Impact"
  title="Quantified Time Savings"
  :before='{ header: "⏱️ Before Memory", items: [
    { title: "Style Re-Explanation", detail: "10 min/session × 3/day × 5 days = 150 min/week re-explaining preferences" },
    { title: "Architectural Decisions", detail: "15 min monthly to correct wrong suggestions (Redis vs Memcached)" },
    { title: "Communication Format", detail: "40\u201360 responses/week need manual \u201cmake this shorter\u201d adjustment" }
  ] }'
  :after='{ header: "✅ After Memory", items: [
    { title: "Style Preferences", detail: "5 min one-time storage \u2192 145 min/week saved automatically" },
    { title: "Architectural Decisions", detail: "AI references Redis automatically with rationale \u2014 zero corrections needed" },
    { title: "Communication Format", detail: "Zero follow-ups \u2014 responses arrive in preferred format every time" }
  ] }'
  :metrics='[
    { value: "99x", label: "ROI on preferences (2 min \u2192 198 min saved)" },
    { value: "145 min", label: "Saved per week on re-explanation" },
    { value: "0", label: "Manual follow-ups per week" }
  ]'
  :insight='{ icon: "💡", text: "Store once, agent applies automatically. 40 sessions over 2 months: 2 minutes invested \u2192 198 minutes saved." }'
/>


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
