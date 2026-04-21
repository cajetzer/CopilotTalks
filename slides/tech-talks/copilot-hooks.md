---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot Hooks
  Programmable governance and lifecycle control for AI agent workflows
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot Hooks - Governance & Compliance
module: tech-talks/copilot-hooks
mdc: true
section: Customization & Context
status: active
updated: 2026-02-11
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
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="GitHub Copilot Hooks"
subtitle="Programmable Governance for Agent Workflows"
tagline="Real-time control and compliance at every lifecycle moment"
meta="Tech Talk · 45 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I govern AI agent workflows without blocking their velocity?"
subtext="Security needs prevention. Compliance needs audit trails. Quality needs enforcement."
highlight="Hooks intercept agent actions in real-time without adding manual gates."
:cards='[
  { icon: "🔐", title: "Security Engineers Enforcing Policy", description: "Block credential leaks, restrict production access, and deny risky operations" },
  { icon: "🏢", title: "Compliance Teams at Regulated Orgs", description: "SOC 2, HIPAA, and PCI-DSS audit trails without slowing agent velocity at all" },
  { icon: "⚡", title: "Platform Teams Enabling Safe Autonomy", description: "Give agents broad permissions guarded by hooks that enforce your boundaries" },
  { title: "Autonomous Ops", description: "Agents touch files, run commands, call APIs — hooks intercept each action" },
  { title: "Compliance Needs", description: "SOC 2, HIPAA, PCI-DSS require evidence for every operation — hooks provide it" },
  { title: "Real-Time Enforcement", description: "Prevent violations before execution — never rely on detecting them after the fact" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🔄", title: "Lifecycle Control", subtitle: "8 hook events for governance", blurb: "SessionStart, PreToolUse, PostToolUse, SubagentStart, Stop", slide: 4 },
    { icon: "🛡️", title: "Preventive Enforcement", subtitle: "PreToolUse power", blurb: "Deny operations before execution, modify inputs, require approval", slide: 8 },
    { icon: "📋", title: "Observability & Audit", subtitle: "Complete lifecycle logging", blurb: "JSON Lines format, structured queries, compliance evidence", slide: 12 },
    { icon: "🏢", title: "Real-World Patterns", subtitle: "HIPAA, SOC 2, quality gates", blurb: "Multi-layer security, context injection, compliance trails", slide: 16 },
  ]'
/>

---

<!-- SLIDE: Part 1 — Lifecycle Control -->

<SectionOpenerSlide
  :partNumber="1"
  title="Lifecycle Control"
  subtitle="8 hook events for governance"
  :cards='[
    { icon: "🔄", title: "8 Events", blurb: "SessionStart to Stop — complete lifecycle coverage" },
    { icon: "🛡️", title: "Preventive Control", blurb: "Gate dangerous operations before execution" },
    { icon: "📋", title: "Observability", blurb: "Complete lifecycle logging and audit" },
  ]'
  :terminal='{ context: "Governance without velocity loss", detail: "8 hooks cover the complete agent lifecycle" }'
/>

---

<!-- SLIDE: The 8 Lifecycle Events -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Lifecycle Control</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">8 Hook Events — When Each Fires</div>
<div class="text-xs text-white/50">Hooks execute at specific moments in the agent lifecycle</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">SessionStart</div>
<div class="opacity-80">First prompt of new session — initialize resources, inject context</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">UserPromptSubmit</div>
<div class="opacity-80">User submits prompt — audit requests, track patterns</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">PreToolUse ⚡</div>
<div class="opacity-80">Before tool execution — deny, modify, or approve operations</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">PostToolUse</div>
<div class="opacity-80">After tool completes — log results, run formatters, inject context</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">PreCompact</div>
<div class="opacity-80">Before context compaction — export important state before truncation</div>
</div>
<div class="p-2 bg-gradient-to-br from-rose-900/30 to-rose-800/20 rounded-lg border border-rose-500/30">
<div class="font-semibold text-rose-300 mb-1">SubagentStart</div>
<div class="opacity-80">Subagent spawns — track nested usage, inject guidelines</div>
</div>
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">SubagentStop</div>
<div class="opacity-80">Subagent completes — aggregate results, cleanup resources</div>
</div>
<div class="p-2 bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-lg border border-orange-500/30">
<div class="font-semibold text-orange-300 mb-1">Stop</div>
<div class="opacity-80">Session ends — generate reports, enforce completion requirements</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30 text-xs">
<span class="text-cyan-300 font-semibold">Key insight:</span> PreToolUse is the only hook that can deny operations. Others observe, log, or inject context.
</div>
</div>
</div>

---

<!-- SLIDE: Hook Configuration Format -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="🔄"
  pillLabel="Lifecycle Control"
  title="Hook Configuration"
  codePosition="top"
  :code='{ language: "json", filename: ".github/hooks/hooks.json", content: "{\n  \"hooks\": {\n    \"PreToolUse\": [\n      {\n        \"type\": \"command\",\n        \"command\": \"./scripts/validate-tool.sh\",\n        \"timeout\": 15\n      }\n    ],\n    \"PostToolUse\": [\n      {\n        \"type\": \"command\",\n        \"command\": \"npx prettier --write $FILE_PATH\"\n      }\n    ]\n  }\n}" }'
  :features='[
    { icon: "📁", title: "Configuration Locations", description: "Project: .github/hooks/*.json · Personal: ~/.claude/settings.json" },
    { icon: "⚙️", title: "Platform Overrides", description: "windows → PowerShell scripts · linux / osx → Bash scripts" }
  ]'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Execution Flow -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Lifecycle Control</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Hook Execution Flow</div>
<div class="text-xs text-white/50">Synchronous, JSON-based control loop</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="flex items-center justify-center gap-2 flex-wrap">
<div class="p-2 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">🎯</div>
<div class="text-xs font-semibold text-cyan-300">Event Fires</div>
<div class="text-xs opacity-70">Tool request</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-2 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">🔍</div>
<div class="text-xs font-semibold text-blue-300">Discover</div>
<div class="text-xs opacity-70">Read configs</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">📤</div>
<div class="text-xs font-semibold text-indigo-300">Invoke</div>
<div class="text-xs opacity-70">Spawn shell</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-2 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">📥</div>
<div class="text-xs font-semibold text-purple-300">Context</div>
<div class="text-xs opacity-70">Write JSON</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-2 bg-gradient-to-br from-pink-900/40 to-pink-800/40 rounded-lg border border-pink-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">⏳</div>
<div class="text-xs font-semibold text-pink-300">Wait</div>
<div class="text-xs opacity-70">Up to timeout</div>
</div>
<div class="text-xl text-gray-500">→</div>
<div class="p-2 bg-gradient-to-br from-rose-900/40 to-rose-800/40 rounded-lg border border-rose-500/30 text-center min-w-[100px]">
<div class="text-xl mb-1">✅</div>
<div class="text-xs font-semibold text-rose-300">Decision</div>
<div class="text-xs opacity-70">Parse output</div>
</div>
</div>

<div class="mt-3 grid grid-cols-3 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="font-semibold text-emerald-300 mb-1">Exit 0</div>
<div class="opacity-80">Success — parse stdout as JSON</div>
</div>
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">Exit 2</div>
<div class="opacity-80">Blocking error — stop processing</div>
</div>
<div class="p-2 bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-lg border border-yellow-500/30">
<div class="font-semibold text-yellow-300 mb-1">Other</div>
<div class="opacity-80">Warning — show to user, continue</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Performance & Timing -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔄 Lifecycle Control</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Performance Considerations</div>
<div class="text-xs text-white/50">Hooks run synchronously — keep them fast to avoid degrading responsiveness</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="font-semibold text-cyan-300 mb-1">Target Execution Times</div>
<div class="space-y-1 opacity-80">
<div>• Security checks / logging: <span class="text-cyan-400">&lt;2s</span></div>
<div>• Linting / validation: <span class="text-cyan-400">&lt;5s</span></div>
<div>• External API calls: <span class="text-cyan-400">&lt;30s</span> (use timeout override)</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">Performance Patterns</div>
<div class="space-y-1 opacity-80">
<div>• Cache expensive computations (regex, policy lookups)</div>
<div>• Use asynchronous logging (append to file)</div>
<div>• Offload slow work to background jobs</div>
</div>
</div>
</div>

<div class="p-2 bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-lg border border-amber-500/30 text-xs">
<div class="font-semibold text-amber-300 mb-1">⚡ Why Speed Matters</div>
<div class="opacity-80">Agent waits for hook completion. A 10-second hook on every tool use = 50 seconds of waiting across 5 tools. Keep it under 2 seconds per hook for seamless experience.</div>
</div>
<div class="grid grid-cols-2 gap-2 text-xs mt-2">
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="font-semibold text-red-300 mb-1">❌ Common Pitfalls</div>
<div class="space-y-1 opacity-80">
<div>• Network calls without timeout (blocks indefinitely)</div>
<div>• Unoptimized regexes on large files</div>
<div>• Synchronous file I/O without batching</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-lg border border-green-500/30">
<div class="font-semibold text-green-300 mb-1">✅ Quick Wins</div>
<div class="space-y-1 opacity-80">
<div>• Add hook execution timing logs</div>
<div>• Use hook <span class="text-green-400 font-mono">timeout</span> field (default 30s)</div>
<div>• Profile with <span class="text-green-400 font-mono">--debug-hooks</span> flag</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Preventive Enforcement -->

<SectionOpenerSlide
  :partNumber="2"
  title="Preventive Enforcement"
  subtitle="PreToolUse is the only hook that can deny operations"
  :cards='[
    { icon: "🛡️", title: "Block Before Execution", blurb: "Deny dangerous operations outright" },
    { icon: "✏️", title: "Modify Inputs", blurb: "Sanitize or transform parameters" },
    { icon: "🤝", title: "Require Approval", blurb: "Gate on human authorization" },
  ]'
  :terminal='{ context: "Other hooks observe — PreToolUse controls", detail: "single control point for gating" }'
/>

---

<!-- SLIDE: Security Check Implementation -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Preventive Enforcement</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Security Check Script</div>
<div class="text-xs text-white/50">Block dangerous operations before execution</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div v-pre class="overflow-y-auto max-h-48 text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg p-2 font-mono">
<span class="text-blue-300">#!/bin/bash</span><br />
<span class="text-gray-400">INPUT=$(cat)</span><br />
<span class="text-gray-400">TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')</span><br />
<span class="text-gray-400">COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')</span><br />
<br />
<span class="text-gray-600"># Block dangerous delete operations</span><br />
<span class="text-gray-400">if echo "$COMMAND" | grep -qE 'rm -rf /|del /s /q|format'; then</span><br />
<span class="text-yellow-400">  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Destructive operation blocked"}}'</span><br />
<span class="text-gray-400">  exit 0</span><br />
<span class="text-gray-400">fi</span><br />
<br />
<span class="text-gray-600"># Block privilege escalation</span><br />
<span class="text-gray-400">if echo "$COMMAND" | grep -qE '^sudo |^runas '; then</span><br />
<span class="text-yellow-400">  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Privilege escalation not allowed"}}'</span><br />
<span class="text-gray-400">  exit 0</span><br />
<span class="text-gray-400">fi</span><br />
<br />
<span class="text-yellow-400">echo '{"continue":true}'</span><br />
<span class="text-gray-400">exit 0</span>
</div>

<div class="p-2 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-lg border border-blue-500/30 text-xs">
<span class="text-blue-300 font-semibold">Key principle:</span> Deny by default. Hooks should block operations unless explicitly approved. This reduces attack surface for policy bypass.
</div>
</div>
</div>

---

<!-- SLIDE: Permission Decisions -->
<ThreeColumnCardSlide
  :partNumber="2"
  pillIcon="🛡️"
  pillLabel="Preventive Enforcement"
  title="Permission Decisions"
  :columns='[
    { icon: "✅", title: "allow", description: "Auto-approve execution. Use updatedInput to modify parameters before the tool runs, e.g. add --dry-run flag." },
    { icon: "🤔", title: "ask", description: "Require user confirmation before execution — safer for sensitive or irreversible operations." },
    { icon: "🛑", title: "deny", description: "Block execution immediately — operation is rejected with a permissionDecisionReason returned to the agent." }
  ]'
  :insight='{ icon: "🎯", text: "Priority: deny (most restrictive) overrides ask, ask overrides allow. Use additionalContext to inject guidance messages into the conversation." }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: File Path & Environment Restrictions -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🛡️"
  pillLabel="Preventive Enforcement"
  title="Path & Environment Policies"
  :left='{
    header: "File Path Restrictions",
    items: [
      { title: "Allowlist pattern", detail: "Only permit writes to src/, test/, docs/ — deny everything else" }
    ],
    code: { language: "bash", content: "if [[ ! \"$PATH_ARG\" =~ ^(src/|test/|docs/) ]]; then\n  deny \"Only edit src/, test/, docs/\"\nfi" }
  }'
  :right='{
    header: "Environment-Aware Policies",
    items: [
      { title: "Production", detail: "Block all writes — require manual deployment process" },
      { title: "Staging", detail: "Ask for approval on destructive operations" },
      { title: "Development", detail: "Permissive — allow all operations" }
    ],
    code: { language: "bash", content: "if [[ \"$CWD\" =~ /production/ ]]; then\n  deny \"Production requires deployment\"\nfi" }
  }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Context Injection -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🛡️ Preventive Enforcement</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Context Injection</div>
<div class="text-xs text-white/50">SessionStart and SubagentStart can inject project-specific information</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div v-pre class="overflow-y-auto max-h-48 text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg p-2 font-mono">
<span class="text-blue-300">#!/bin/bash</span><br />
<span class="text-gray-600"># .github/hooks/scripts/inject-context.sh</span><br />
<br />
<span class="text-gray-400">PROJECT=$(cat package.json 2>/dev/null | jq -r '.name + " v" + .version')</span><br />
<span class="text-gray-400">BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")</span><br />
<br />
<span class="text-gray-400">cat &lt;&lt;EOF</span><br />
<span class="text-yellow-400">&#123;</span><br />
<span class="text-yellow-400">  "hookSpecificOutput": &#123;</span><br />
<span class="text-yellow-400">    "hookEventName": "SessionStart",</span><br />
<span class="text-yellow-400">    "additionalContext": "Project: $PROJECT | Branch: $BRANCH | Node: $(node -v)"</span><br />
<span class="text-yellow-400">  &#125;</span><br />
<span class="text-yellow-400">&#125;</span><br />
<span class="text-gray-400">EOF</span>
</div>

<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">Use Cases</div>
<div class="space-y-1 opacity-80">
<div>• Project version & branch information</div>
<div>• Environment variables & API keys</div>
<div>• Team-specific guidelines</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">Hooks That Support It</div>
<div class="space-y-1 opacity-80">
<div>• <span class="text-cyan-300">SessionStart</span> — Session initialization</div>
<div>• <span class="text-blue-300">SubagentStart</span> — Subagent guidelines</div>
<div>• <span class="text-indigo-300">PreToolUse</span> — Tool context</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Observability & Audit -->

<SectionOpenerSlide
  :partNumber="3"
  title="Observability & Audit"
  subtitle="Complete lifecycle logging for compliance and debugging"
  :cards='[
    { icon: "📋", title: "JSON Lines", blurb: "Structured event logging format" },
    { icon: "🔍", title: "Complete Trails", blurb: "Full audit path with context" },
    { icon: "📊", title: "SQL-Like Queries", blurb: "Searchable event database" },
  ]'
  :terminal='{ context: "2-3 hours per audit request", detail: "→ 5 minutes with structured logs" }'
/>

---

<!-- SLIDE: JSON Lines Logging -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Observability & Audit</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Structured Logging with JSON Lines</div>
<div class="text-xs text-white/50">One JSON object per line — append-safe, query-friendly format</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div v-pre class="overflow-y-auto max-h-48 text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg p-2 font-mono">
<span class="text-blue-300">#!/bin/bash</span><br />
<span class="text-gray-600"># Log tool usage</span><br />
<span class="text-gray-400">INPUT=$(cat)</span><br />
<span class="text-gray-400">LOG_FILE="logs/audit.jsonl"</span><br />
<span class="text-gray-400">mkdir -p logs</span><br />
<br />
<span class="text-yellow-400">echo "$INPUT" | jq -c '. + &#123;event: "PostToolUse", loggedAt: (now | todate)&#125;' >> "$LOG_FILE"</span>
</div>

<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">Why JSON Lines?</div>
<div class="space-y-1 opacity-80">
<div>• <span class="text-cyan-300">Direct querying:</span> Use jq for SQL-like filtering</div>
<div>• <span class="text-blue-300">Append safety:</span> Concurrent writes don't corrupt</div>
<div>• <span class="text-indigo-300">Tool compatibility:</span> Import to Elasticsearch, Datadog, SQLite</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">Example Queries</div>
<div class="space-y-1 opacity-80 font-mono">
<div>jq -r '.tool_name' audit.jsonl | sort | uniq -c</div>
<div>jq 'select(.permissionDecision == "deny")' audit.jsonl</div>
<div>jq -r '[.timestamp, .tool_name] | @csv' audit.jsonl</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Complete Audit Configuration -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="📋"
  pillLabel="Observability & Audit"
  title="Complete Audit Trail"
  codePosition="top"
  :code='{ language: "json", filename: ".github/hooks/hooks.json", content: "{\n  \"hooks\": {\n    \"SessionStart\": [{\"type\": \"command\", \"command\": \"./scripts/log-session-start.sh\"}],\n    \"UserPromptSubmit\": [{\"type\": \"command\", \"command\": \"./scripts/log-prompt.sh\"}],\n    \"PreToolUse\": [{\"type\": \"command\", \"command\": \"./scripts/log-tool-pre.sh\"}],\n    \"PostToolUse\": [{\"type\": \"command\", \"command\": \"./scripts/log-tool-post.sh\"}],\n    \"PreCompact\": [{\"type\": \"command\", \"command\": \"./scripts/log-pre-compact.sh\"}],\n    \"SubagentStart\": [{\"type\": \"command\", \"command\": \"./scripts/log-subagent-start.sh\"}],\n    \"SubagentStop\": [{\"type\": \"command\", \"command\": \"./scripts/log-subagent-stop.sh\"}],\n    \"Stop\": [{\"type\": \"command\", \"command\": \"./scripts/log-session-end.sh\"}]\n  }\n}" }'
  :features='[
    { icon: "🔗", title: "All 8 Events Covered", description: "SessionStart through Stop — complete lifecycle observability with no gaps" },
    { icon: "📊", title: "Zero Infrastructure", description: "JSON Lines format runs anywhere jq is installed. Import to Elasticsearch, Datadog, or SQLite." }
  ]'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Querying Audit Logs -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Observability & Audit</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Querying Audit Logs</div>
<div class="text-xs text-white/50">SQL-like filtering with jq — no database required, 100% queryable</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">📊 Count tool usage</div>
<pre class="text-xs opacity-80 mt-1 overflow-x-auto"><code>cat logs/audit.jsonl | jq -r '.tool_name // empty' | sort | uniq -c | sort -rn</code></pre>
<div class="text-xs opacity-60 mt-1">Top tools per session/user/time period</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">🚫 All denied operations</div>
<pre class="text-xs opacity-80 mt-1 overflow-x-auto"><code>cat logs/audit.jsonl | jq 'select(.permissionDecision == "deny")' | jq -r '.reason'</code></pre>
<div class="text-xs opacity-60 mt-1">Why operations were blocked; investigate patterns</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">📈 Export for reports</div>
<pre class="text-xs opacity-80 mt-1 overflow-x-auto"><code>cat logs/audit.jsonl | jq -r '[.timestamp, .tool_name, .response] | @csv' > report.csv</code></pre>
<div class="text-xs opacity-60 mt-1">Compliance reports, dashboards, trend analysis</div>
</div>
<div class="p-2 bg-gradient-to-br from-rose-900/30 to-rose-800/20 rounded-lg border border-rose-500/30">
<div class="font-semibold text-rose-300 mb-1">🤖 Subagent lifecycle</div>
<pre class="text-xs opacity-80 mt-1 overflow-x-auto"><code>jq 'select(.event | IN("SubagentStart","SubagentStop"))' audit.jsonl</code></pre>
<div class="text-xs opacity-60 mt-1">Subagent execution time, spawn count, tool usage per agent</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30 text-xs">
<span class="text-indigo-300 font-semibold">Zero Infrastructure:</span> jq runs on your laptop. No log aggregation service, no vendor lock-in. Grep that file from 2022 and answer compliance questions.
</div>
</div>
</div>

---

<!-- SLIDE: Integration Patterns -->
<FourCardGridSlide
  :partNumber="3"
  pillIcon="📋"
  pillLabel="Observability & Audit"
  title="External System Integration"
  :cards='[
    { icon: "💬", title: "Slack Notifications", description: "Send alerts on security violations with violation details and session context" },
    { icon: "📟", title: "PagerDuty Alerts", description: "Trigger on-call alerts for production security violations in real time" },
    { icon: "📊", title: "Datadog / New Relic", description: "Send performance metrics via StatsD protocol for real-time dashboards" },
    { icon: "🎫", title: "Jira / ServiceNow", description: "Create incidents for blocked dangerous operations via REST API" }
  ]'
  :insight='{ icon: "⚡", text: "Hooks execute curl commands with JSON payloads. Keep them under 5s by offloading slow API calls to background jobs." }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — Real-World Patterns -->

<SectionOpenerSlide
  :partNumber="4"
  title="Real-World Patterns"
  subtitle="Proven implementations for security, compliance, and quality"
  :cards='[
    { icon: "🏥", title: "HIPAA", blurb: "Healthcare compliance automation" },
    { icon: "🛡️", title: "SOC2", blurb: "Security compliance enforcement" },
    { icon: "✅", title: "Quality Gates", blurb: "Automated standards enforcement" },
  ]'
  :terminal='{ context: "Governance that scales", detail: "across teams and regulatory frameworks" }'
/>

---

<!-- SLIDE: HIPAA Compliance Audit Trail -->
<BeforeAfterMetricsSlide
  :partNumber="4"
  pillIcon="🔒"
  pillLabel="Real-World Patterns"
  title="Use Case: HIPAA Compliance Audit Trail"
  :before='{
    header: "❌ Before Hooks",
    items: [
      { title: "Audit time: 2-3 hours manual", detail: "Engineer manually greps git history and CI logs to reconstruct what changed" },
      { title: "Coverage: 60-70% of changes", detail: "Off-tool agent actions and prompt-driven edits often missed" },
      { title: "Manual S3 archival", detail: "Quarterly export script run by hand; gaps when forgotten" },
      { title: "Auditor Q: Who, what, when?", detail: "Each question triggers a multi-hour manual investigation" }
    ]
  }'
  :after='{
    header: "✅ With Hooks",
    items: [
      { title: "Audit time: 5 minutes automated", detail: "All 8 lifecycle events append structured JSON to logs/audit.jsonl" },
      { title: "Coverage: 100% of agent actions", detail: "SessionStart logs user+branch; Stop hook ships to S3 automatically" },
      { title: "SQL-like jq filtering", detail: "Single jq pipeline answers any compliance question instantly" },
      { title: "7-year retention guaranteed", detail: "S3 lifecycle policy + immutable bucket = compliance by construction" }
    ]
  }'
  :metrics='[
    { value: "24×", label: "Faster audits" },
    { value: "100%", label: "Event coverage" },
    { value: "7yr", label: "Retention enforced" }
  ]'
  :insight='{ icon: "📋", text: "Sample query: jq -r [.timestamp, .user, .event] | @csv audit.jsonl | sort > audit-report.csv" }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: SOC 2 Security Enforcement -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔒 Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Use Case: SOC 2 Security Enforcement</div>
<div class="text-xs text-white/50">SaaS company — prevent dangerous operations before agent can execute them</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-center mb-1">
<div class="text-xl">❌</div>
<div class="font-bold text-red-300">Before Hooks</div>
</div>
<div class="space-y-1 opacity-80">
<div>🔍 <strong>Detection:</strong> Post-incident review</div>
<div>📋 <strong>Evidence:</strong> Manual log piecing</div>
<div>💼 <strong>Audit cost:</strong> 40 hours/year</div>
<div>🚨 <strong>Incidents:</strong> 3/year (rm -rf, DROP)</div>
<div>⏱️ <strong>Remediation:</strong> Days after discovery</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="text-center mb-1">
<div class="text-xl">✅</div>
<div class="font-bold text-emerald-300">With Hooks</div>
</div>
<div class="space-y-1 opacity-80">
<div>⚡ <strong>Detection:</strong> Real-time prevention</div>
<div>📋 <strong>Evidence:</strong> Automated denial log</div>
<div>💼 <strong>Audit cost:</strong> 5 hours (report only)</div>
<div>🚨 <strong>Incidents:</strong> 0 (blocked at gate)</div>
<div>✓ <strong>Remediation:</strong> Instant feedback to agent</div>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-2 mt-2 text-xs">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">🚫 Blocked Operations</div>
<div class="opacity-80">PreToolUse regex: <code>rm -rf / | DROP | TRUNCATE | sudo | curl.*admin</code>. Violations to <code>violations.jsonl</code> with reason.</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">🔔 Alert Integration</div>
<div class="opacity-80">PostToolUse hook sends denial events to Slack + PagerDuty. Immediate ops visibility.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Multi-Tenant Quality Gates -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✨ Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
</div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Use Case: Multi-Tenant SaaS Quality Gates</div>
<div class="text-xs text-white/50">Agent-generated code must pass lint/format/type checks before file write</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border border-red-500/30">
<div class="text-center mb-1">
<div class="text-xl">❌</div>
<div class="font-bold text-red-300">Without Shift-Left</div>
</div>
<div class="space-y-1 opacity-80">
<div>🔴 <strong>Violations/PR:</strong> 15 average</div>
<div>⏱️ <strong>Rework time:</strong> 7.5 hrs/sprint</div>
<div>🔄 <strong>Rework loops:</strong> 3/PR typical</div>
<div>🚫 <strong>CI failures:</strong> 15+/sprint</div>
<div>💸 <strong>Wasted:</strong> 120 hrs/quarter</div>
</div>
</div>
<div class="p-2 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-lg border border-emerald-500/30">
<div class="text-center mb-1">
<div class="text-xl">✅</div>
<div class="font-bold text-emerald-300">With Hooks</div>
</div>
<div class="space-y-1 opacity-80">
<div>✓ <strong>Violations:</strong> 0 (blocked)</div>
<div>⚡ <strong>Rework time:</strong> 0</div>
<div>🎯 <strong>Rework loops:</strong> 1 (immediate)</div>
<div>✓ <strong>CI failures:</strong> 0</div>
<div>💰 <strong>Saved:</strong> 120 hrs/quarter</div>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-2 mt-2 text-xs">
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/30">
<div class="font-semibold text-purple-300 mb-1">🔍 PreToolUse Validation</div>
<div class="opacity-80">ESLint + Prettier + TypeScript on proposed changes. Non-compliant code denied before write, agent gets error feedback immediately.</div>
</div>
<div class="p-2 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/30">
<div class="font-semibold text-pink-300 mb-1">📊 Quality Metrics</div>
<div class="opacity-80">PostToolUse logs rule violations. Dashboard shows which standards agents violate most → training signal.</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="Manual Compliance to Real-Time Governance"
:leftItems='["Audit: 2–3 hrs per cycle", "Prevention: manual checks", "Coverage: isolated hooks", "Compliance: reactive"]'
:rightItems='["Audit: 5 min automated", "Prevention: real-time governance", "Coverage: 8 lifecycle events", "Compliance: proactive"]'
:metrics='[
  { value: "2–3 hrs → 5 min", detail: "Audit acceleration" },
  { value: "Real-time", detail: "Prevention mode" },
  { value: "8 hooks", detail: "Lifecycle coverage" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Read hooks documentation", "Create .github/hooks/ directory", "Test /hooks slash command", "Understand the 8 lifecycle events"]'
  :thisWeek='["Copy security-check.sh template", "Deploy PreToolUse hook to test repo", "Implement all 8 hooks (audit trail)", "Add PostToolUse logging to JSON", "Integrate Slack alert on denials"]'
  :thisMonth='["Generalize hook library for your team", "Deploy org-wide compliance policies", "Connect hooks to compliance system", "Monitor via compliance dashboard"]'
  footer="Start with one PreToolUse security check today, build the full 8-hook audit trail in an afternoon, and deploy org-wide compliance policies within a week."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Docs", color: "cyan", items: [
        { href: "https://code.visualstudio.com/docs/copilot/customization/hooks", label: "Agent Hooks in VS Code", description: "Configuration reference and examples" },
        { href: "https://docs.github.com/en/copilot/concepts/agents", label: "Copilot Agents Concepts", description: "Agent types, capabilities, and security model" },
        { href: "https://docs.github.com/en/copilot/reference/hooks-configuration", label: "Hooks Config Reference", description: "Full schema, trigger types, and output handling" },
        { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents", label: "Hooks How-Tos", description: "Step-by-step guides for common hook patterns" }
    ] },
    { title: "🔗 Related Topics", color: "purple", items: [
        { label: "Terminal Sandboxing", description: "OS-level controls that complement hooks" },
        { label: "Custom Instructions", description: "Shaping agent behavior proactively" },
        { label: "Enterprise Patterns", description: "Org-wide governance with hooks" },
        { label: "Custom Agents", description: "Building agents with built-in hook compliance" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="GitHub Copilot Hooks: Programmable Governance"
:cards="[
  { icon: '🔄', value: '8 Lifecycle Events', detail: 'Complete control at every moment', subdetail: 'Session, tool, subagent, and stop hooks' },
  { icon: '🛡️', value: 'PreToolUse Power', detail: 'Deny operations before execution', subdetail: 'The only hook that can prevent actions' },
  { icon: '📊', value: '100% Audit Trails', detail: 'JSON Lines logging', subdetail: '2-3 hours → 5 minutes per compliance report' },
]"
prompt="Questions? Let's discuss governance patterns for your environment"
/>
