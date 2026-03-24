---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Copilot Configuration Primitives
  Making AI Understand Your Codebase
drawings:
  persist: false
transition: slide-left
title: Copilot Configuration Primitives
module: tech-talks/copilot-primitives
status: active
updated: 2026-03-23
mdc: true
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>

<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>

<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Copilot Configuration Primitives</h1>

<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">Making AI Understand Your Codebase</span>
</div>

<div class="mt-8 text-lg opacity-70 relative z-10">Four building blocks that transform Copilot from generic assistant to team-aware partner</div>

<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>

</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 30 minutes</span>
</div>

---
layout: center
---

# 🔓 The Core Question

<div class="text-2xl font-semibold text-cyan-300 mb-6">"How can I make GitHub Copilot understand my codebase better?"</div>

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl border border-amber-500/30">
<div class="text-3xl mb-3">🎯</div>
<div class="font-bold text-amber-300 text-lg mb-2">Generic Responses</div>
<div class="text-sm opacity-90">Copilot suggests textbook patterns instead of code that matches your team's architecture and conventions</div>
</div>

<div class="p-5 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl border border-orange-500/30">
<div class="text-3xl mb-3">🔁</div>
<div class="font-bold text-orange-300 text-lg mb-2">Repeated Context</div>
<div class="text-sm opacity-90">Developers manually explain the same project details in every chat session</div>
</div>

<div class="p-5 bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl border border-red-500/30">
<div class="text-3xl mb-3">🎲</div>
<div class="font-bold text-red-300 text-lg mb-2">Inconsistent Results</div>
<div class="text-sm opacity-90">Each developer gets different quality responses depending on what context they provide</div>
</div>

<div class="p-5 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-xl border border-pink-500/30">
<div class="text-3xl mb-3">🏭</div>
<div class="font-bold text-pink-300 text-lg mb-2">One-Size-Fits-Nobody</div>
<div class="text-sm opacity-90">Default Copilot treats a React frontend and a Python data pipeline identically</div>
</div>

</div>

<div class="mt-8 italic text-sm opacity-70">This isn't a model limitation — it's a context problem</div>

---
layout: center
---

# 📖 Table of Contents

<div class="grid grid-cols-2 gap-6 mt-6">

<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">📝</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Instructions</div>
<div class="text-sm text-gray-300 mt-1">Always-on guardrails and conventions</div>
<div class="text-xs text-cyan-400/70 mt-2">Foundation layer</div>
</div>
</div>

<div @click="$nav.go(8)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">🎯</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Skills</div>
<div class="text-sm text-gray-300 mt-1">On-demand capability packs</div>
<div class="text-xs text-blue-400/70 mt-2">Progressive loading</div>
</div>
</div>

<div @click="$nav.go(11)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">⚡</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Prompts</div>
<div class="text-sm text-gray-300 mt-1">Reusable task templates</div>
<div class="text-xs text-indigo-400/70 mt-2">User-invoked workflows</div>
</div>
</div>

<div @click="$nav.go(13)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🤖</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Agents</div>
<div class="text-sm text-gray-300 mt-1">Specialized AI personas</div>
<div class="text-xs text-purple-400/70 mt-2">Orchestration layer</div>
</div>
</div>

</div>

<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>

---
layout: center
name: instructions
---

<div class="text-center mb-6">
<div class="text-5xl mb-4">📝</div>
<h1 class="!text-4xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Instructions</h1>
<p class="text-xl opacity-80 mt-2">The Foundation Layer</p>
</div>

<div class="p-5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30 mb-5 text-center max-w-3xl mx-auto">
<div class="text-lg">Persistent context automatically injected into every Copilot interaction</div>
</div>

---

# Instructions: Three Selectors

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-2">🗂️</div>
<div class="font-bold text-cyan-300 mb-2">Repository Selector</div>
<div class="text-sm opacity-90 mb-3">`.github/copilot-instructions.md`</div>
<div class="text-xs mt-2 p-2 bg-cyan-900/30 rounded font-mono">Applies across entire repo</div>
<div class="text-xs mt-3 opacity-70">Build commands, coding standards, repo structure</div>
</div>

<div class="p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-2">📂</div>
<div class="font-bold text-blue-300 mb-2">File-Pattern Selector</div>
<div class="text-sm opacity-90 mb-3">`.instructions.md` + `applyTo`</div>
<div class="text-xs mt-2 p-2 bg-blue-900/30 rounded font-mono">Only when pattern matches</div>
<div class="text-xs mt-3 opacity-70">Language-specific rules, test conventions</div>
</div>

<div class="p-4 bg-gradient-to-br from-indigo-900/40 to-indigo-800/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-2">📍</div>
<div class="font-bold text-indigo-300 mb-2">Directory Selector</div>
<div class="text-sm opacity-90 mb-3">`AGENTS.md` (nearest)</div>
<div class="text-xs mt-2 p-2 bg-indigo-900/30 rounded font-mono">Subproject or service scope</div>
<div class="text-xs mt-3 opacity-70">Commands, tests, local workflow rules</div>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
<div class="flex items-start gap-3">
<div class="text-2xl">✨</div>
<div>
<div class="font-bold text-green-300 mb-1">The Key Distinction</div>
<div class="text-sm opacity-90">If rule is "always in this repo" → copilot-instructions.md · If rule is "only for src/models/**/*.ts" → .instructions.md · If rule is "inside infra/, run Terraform plan first" → infra/AGENTS.md</div>
</div>
</div>
</div>

---

# Instructions: How It Works

<div class="flex items-center justify-center gap-6 mt-6 flex-wrap">

<div class="p-4 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30 text-center min-w-[180px] hover:scale-105 transition-transform">
<div class="text-3xl mb-2">📄</div>
<div class="text-sm font-semibold text-cyan-300">Create .md file</div>
<div class="text-xs opacity-70 mt-1">Plain Markdown in .github/</div>
</div>

<div class="text-3xl text-gray-500">→</div>

<div class="p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30 text-center min-w-[180px] hover:scale-105 transition-transform">
<div class="text-3xl mb-2">🚀</div>
<div class="text-sm font-semibold text-blue-300">Auto-loaded</div>
<div class="text-xs opacity-70 mt-1">No activation needed</div>
</div>

<div class="text-3xl text-gray-500">→</div>

<div class="p-4 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30 text-center min-w-[180px] hover:scale-105 transition-transform">
<div class="text-3xl mb-2">💬</div>
<div class="text-sm font-semibold text-indigo-300">Every request</div>
<div class="text-xs opacity-70 mt-1">Injected automatically</div>
</div>

<div class="text-3xl text-gray-500">→</div>

<div class="p-4 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30 text-center min-w-[180px] hover:scale-105 transition-transform">
<div class="text-3xl mb-2">✨</div>
<div class="text-sm font-semibold text-purple-300">Project-aware AI</div>
<div class="text-xs opacity-70 mt-1">Instant improvement</div>
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
<div class="text-sm font-bold text-red-300 mb-2">❌ Before</div>
<div class="text-xs opacity-80">"Add a database table" → generates raw SQL when your project uses Prisma</div>
</div>

<div class="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
<div class="text-sm font-bold text-green-300 mb-2">✅ After</div>
<div class="text-xs opacity-80">"Add a database table" → generates Prisma schema with JSDoc, indexes, and audit fields</div>
</div>

</div>

<div class="mt-6 text-center text-sm opacity-60">VS Code shows which instructions were applied in the References section of each response</div>

---

# Instructions: Example

```markdown
# Repository Instructions

This repository uses TypeScript with strict type checking enabled.

## Build and Test
- Always run `npm install` before building
- Build: `npm run build`
- Tests in `__tests__/` directories co-located with source
- Use Jest: `npm test`

## Coding Standards
- Prefer functional programming patterns
- Explicit return types for all functions
- JSDoc comments for exported functions
- Named exports (avoid default exports)

## File Structure
src/
  components/       # React components
  utils/            # Utility functions
  services/         # API clients
  __tests__/        # Co-located tests

## Error Handling
- Use custom error classes extending Error
- Structured logging: logger.error()
- Never swallow errors silently
```

<div class="mt-4 text-center text-sm opacity-70">5 minutes to create · Immediate value · Team-shared in version control</div>

---
layout: center
name: skills
---

<div class="text-center mb-6">
<div class="text-5xl mb-4">🎯</div>
<h1 class="!text-4xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Skills</h1>
<p class="text-xl opacity-80 mt-2">On-Demand Capability Packs</p>
</div>

<div class="p-5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-500/30 mb-5 text-center max-w-3xl mx-auto">
<div class="text-lg">Specialized knowledge loaded only when relevant — keeps context efficient</div>
</div>

---

# Skills: Progressive Loading Architecture

<div class="mt-6 space-y-4">

<div class="flex items-center gap-4">
<div class="p-3 bg-cyan-900/40 rounded-lg border border-cyan-500/30 min-w-[120px] text-center">
<div class="font-bold text-cyan-300 text-lg">Level 1</div>
<div class="text-xs opacity-70 mt-1">Discovery</div>
</div>
<div class="text-2xl text-gray-500">→</div>
<div class="flex-1 p-3 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
<div class="text-sm font-semibold text-cyan-300">Name + Description Only</div>
<div class="text-xs opacity-70 mt-1">Always loaded (lightweight metadata) · Dozens of skills cost almost nothing</div>
</div>
</div>

<div class="flex items-center gap-4">
<div class="p-3 bg-blue-900/40 rounded-lg border border-blue-500/30 min-w-[120px] text-center">
<div class="font-bold text-blue-300 text-lg">Level 2</div>
<div class="text-xs opacity-70 mt-1">Instructions</div>
</div>
<div class="text-2xl text-gray-500">→</div>
<div class="flex-1 p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
<div class="text-sm font-semibold text-blue-300">Full SKILL.md Body</div>
<div class="text-xs opacity-70 mt-1">When your prompt matches description · AI-driven relevance matching</div>
</div>
</div>

<div class="flex items-center gap-4">
<div class="p-3 bg-indigo-900/40 rounded-lg border border-indigo-500/30 min-w-[120px] text-center">
<div class="font-bold text-indigo-300 text-lg">Level 3</div>
<div class="text-xs opacity-70 mt-1">Resources</div>
</div>
<div class="text-2xl text-gray-500">→</div>
<div class="flex-1 p-3 bg-indigo-900/20 rounded-lg border border-indigo-500/20">
<div class="text-sm font-semibold text-indigo-300">Scripts, Examples, Templates</div>
<div class="text-xs opacity-70 mt-1">When Copilot references them during execution · On-demand only</div>
</div>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
<div class="flex items-start gap-3">
<div class="text-2xl">💡</div>
<div>
<div class="font-bold text-green-300 mb-1">Why This Matters</div>
<div class="text-sm opacity-90">You can have dozens of skills installed without consuming context — only relevant skills load their full content when needed</div>
</div>
</div>
</div>

---

# Skills: Structure & Portability

<div class="grid grid-cols-2 gap-6 mt-6">

<div>
<div class="text-sm font-bold text-blue-300 mb-3">Skill Directory Structure</div>
<div class="p-4 bg-blue-900/20 rounded-lg border border-blue-500/30 font-mono text-xs">
<div>.github/skills/</div>
<div class="ml-4">test-runner/</div>
<div class="ml-8 text-cyan-300">SKILL.md</div>
<div class="ml-8 opacity-60">test-template.ts</div>
<div class="ml-8">scripts/</div>
<div class="ml-12 opacity-60">run-tests.sh</div>
<div class="ml-8">examples/</div>
<div class="ml-12 opacity-60">api-test.ts</div>
</div>
<div class="text-xs opacity-70 mt-2">Instructions + scripts + templates + examples</div>
</div>

<div>
<div class="text-sm font-bold text-indigo-300 mb-3">Cross-Tool Portability</div>
<div class="space-y-2">
<div class="p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300">✅ VS Code</div>
<div class="text-xs opacity-70 mt-1">Full support, native</div>
</div>
<div class="p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300">✅ GitHub Copilot CLI</div>
<div class="text-xs opacity-70 mt-1">Terminal workflows</div>
</div>
<div class="p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300">✅ GitHub Coding Agent</div>
<div class="text-xs opacity-70 mt-1">Automated coding</div>
</div>
</div>
<div class="text-xs opacity-70 mt-3 text-center">Open standard: agentskills.io</div>
</div>

</div>

<div class="mt-6 text-center text-sm">
<span class="px-4 py-2 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white">Store project skills in .github/skills/ · Personal skills in ~/.copilot/skills/</span>
</div>

---
layout: center
name: prompts
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-pink-900/20"></div>
<div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl"></div>

<div class="relative z-10 text-center mb-6">
<div class="text-6xl mb-4">⚡</div>
<h1 class="!text-5xl !font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Custom Prompts</h1>
<p class="text-xl opacity-80 mt-3">Reusable Task Templates</p>
</div>

<div class="relative z-10 p-5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/30 mb-8 text-center max-w-2xl mx-auto">
<div class="text-lg">User-invoked workflows — type <span class="font-mono text-indigo-300">/command</span> and Copilot follows your team's playbook</div>
</div>

<div class="relative z-10 grid grid-cols-4 gap-3 max-w-3xl mx-auto">
<div class="p-3 bg-indigo-900/40 rounded-lg border border-indigo-500/40 text-center">
<div class="text-xl mb-1">⌨️</div>
<div class="text-xs font-semibold text-indigo-300">/commands</div>
<div class="text-xs opacity-60 mt-1">Slash-invoked</div>
</div>
<div class="p-3 bg-purple-900/40 rounded-lg border border-purple-500/40 text-center">
<div class="text-xl mb-1">🔤</div>
<div class="text-xs font-semibold text-purple-300">Variables</div>
<div class="text-xs opacity-60 mt-1">${selection}, ${input}</div>
</div>
<div class="p-3 bg-pink-900/40 rounded-lg border border-pink-500/40 text-center">
<div class="text-xl mb-1">🔧</div>
<div class="text-xs font-semibold text-pink-300">Tool Constraints</div>
<div class="text-xs opacity-60 mt-1">Scoped tool access</div>
</div>
<div class="p-3 bg-violet-900/40 rounded-lg border border-violet-500/40 text-center">
<div class="text-xl mb-1">🤝</div>
<div class="text-xs font-semibold text-violet-300">Agent References</div>
<div class="text-xs opacity-60 mt-1">Delegate to specialist</div>
</div>
</div>

</div>

---

# Prompts: How They Work

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="space-y-4">
<div class="p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-bold text-indigo-300 mb-2">1. Create .prompt.md File</div>
<div class="text-xs opacity-80 font-mono bg-indigo-900/40 p-2 rounded mt-2">.github/prompts/component.prompt.md</div>
<div class="text-xs opacity-70 mt-2">With frontmatter: name, description, tools, agent</div>
</div>

<div class="p-4 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-bold text-purple-300 mb-2">2. Type / in Chat</div>
<div class="text-xs opacity-80">Prompts appear in autocomplete list</div>
</div>

<div class="p-4 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-sm font-bold text-pink-300 mb-2">3. Invoke with Parameters</div>
<div class="text-xs opacity-80 font-mono bg-pink-900/40 p-2 rounded mt-2">/component MyButtonGroup</div>
<div class="text-xs opacity-70 mt-2">Variables are interpolated</div>
</div>
</div>

<div>
<div class="text-sm font-bold text-indigo-300 mb-3">Example: Component Generator</div>
<div v-pre class="text-xs font-mono bg-gray-900/60 p-4 rounded-lg border border-gray-700">
<div class="text-gray-500">---</div>
<div class="text-cyan-300">name: component</div>
<div class="text-cyan-300">description: Generate React component</div>
<div class="text-cyan-300">tools: ['editFiles', 'createFile']</div>
<div class="text-gray-500">---</div>
<div class="mt-2"># Component Generator</div>
<div class="mt-2">Create structure:</div>
<div class="mt-1 ml-2">src/components/{{componentName}}/</div>
<div class="ml-4">{{componentName}}.tsx</div>
<div class="ml-4">{{componentName}}.types.ts</div>
<div class="ml-4">{{componentName}}.module.css</div>
<div class="ml-4">__tests__/</div>
<div class="text-xs opacity-70 mt-3">Variables: ${selection}, ${file}, ${input:name}</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
<div class="flex items-start gap-3">
<div class="text-2xl">✨</div>
<div>
<div class="font-bold text-green-300 mb-1">Prompts Can Reference Instructions</div>
<div class="text-sm opacity-90">Use Markdown links to reuse conventions without duplication: [coding standards](../../copilot-instructions.md)</div>
</div>
</div>
</div>

---
layout: center
name: agents
---

<div class="text-center mb-6">
<div class="text-5xl mb-4">🤖</div>
<h1 class="!text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Custom Agents</h1>
<p class="text-xl opacity-80 mt-2">Specialized AI Personas</p>
</div>

<div class="p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30 mb-5 text-center max-w-3xl mx-auto">
<div class="text-lg">Constrained tool access, model preferences, and orchestration through handoffs</div>
</div>

---

#Agents: Why Constrain the AI?

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-2">📖</div>
<div class="font-bold text-purple-300 mb-2">Planning Agent</div>
<div class="text-xs opacity-80 mb-3">Read-only tools prevent accidental edits</div>
<div class="space-y-1 text-xs">
<div class="p-2 bg-green-900/30 rounded text-green-300">✅ search</div>
<div class="p-2 bg-green-900/30 rounded text-green-300">✅ readFile</div>
<div class="p-2 bg-green-900/30 rounded text-green-300">✅ listFiles</div>
<div class="p-2 bg-red-900/30 rounded text-red-300">❌ editFiles</div>
</div>
</div>

<div class="p-4 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-2">🔒</div>
<div class="font-bold text-pink-300 mb-2">Security Agent</div>
<div class="text-xs opacity-80 mb-3">Search but no terminal access</div>
<div class="space-y-1 text-xs">
<div class="p-2 bg-green-900/30 rounded text-green-300">✅ search</div>
<div class="p-2 bg-green-900/30 rounded text-green-300">✅ readFile</div>
<div class="p-2 bg-red-900/30 rounded text-red-300">❌ terminal</div>
<div class="p-2 bg-red-900/30 rounded text-red-300">❌ editFiles</div>
</div>
</div>

<div class="p-4 bg-red-900/30 rounded-xl border border-red-500/30">
<div class="text-2xl mb-2">🗄️</div>
<div class="font-bold text-red-300 mb-2">Database Agent</div>
<div class="text-xs opacity-80 mb-3">Terminal + SQL but no frontend code</div>
<div class="space-y-1 text-xs">
<div class="p-2 bg-green-900/30 rounded text-green-300">✅ terminal</div>
<div class="p-2 bg-green-900/30 rounded text-green-300">✅ code_editor</div>
<div class="p-2 bg-green-900/30 rounded text-green-300">✅ database_query</div>
<div class="p-2 bg-red-900/30 rounded text-red-300">❌ frontend tools</div>
</div>
</div>

</div>

<div class="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
<div class="flex items-start gap-3">
<div class="text-2xl">🎯</div>
<div>
<div class="font-bold text-blue-300 mb-1">Different Tasks Need Different Capabilities</div>
<div class="text-sm opacity-90">Planning needs read access · Implementation needs write access · Security review needs audit tools only</div>
</div>
</div>
</div>

---

# Agents: Handoffs Enable Multi-Agent Workflows

<div class="flex items-center justify-center gap-4 mt-6 flex-wrap">

<div class="p-4 bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-lg border border-purple-500/30 text-center min-w-[160px]">
<div class="text-3xl mb-2">📋</div>
<div class="text-sm font-semibold text-purple-300">Planning Agent</div>
<div class="text-xs opacity-70 mt-1">Read-only research</div>
<div class="text-xs mt-2 p-2 bg-purple-900/40 rounded">Generates plan</div>
</div>

<div class="text-3xl text-gray-500">→</div>

<div class="p-4 bg-gradient-to-br from-pink-900/40 to-pink-800/40 rounded-lg border border-pink-500/30 text-center min-w-[160px]">
<div class="text-3xl mb-2">⚙️</div>
<div class="text-sm font-semibold text-pink-300">Implementation Agent</div>
<div class="text-xs opacity-70 mt-1">Full edit access</div>
<div class="text-xs mt-2 p-2 bg-pink-900/40 rounded">Executes plan</div>
</div>

<div class="text-3xl text-gray-500">→</div>

<div class="p-4 bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-lg border border-red-500/30 text-center min-w-[160px]">
<div class="text-3xl mb-2">🔍</div>
<div class="text-sm font-semibold text-red-300">Security Agent</div>
<div class="text-xs opacity-70 mt-1">Audit tools only</div>
<div class="text-xs mt-2 p-2 bg-red-900/40 rounded">Reviews code</div>
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-4 bg-purple-900/20 rounded-xl border border-purple-500/30">
<div class="text-sm font-bold text-purple-300 mb-2">Handoff Configuration</div>
<div class="text-xs font-mono bg-purple-900/40 p-3 rounded">
<div class="text-gray-400">handoffs:</div>
<div class="ml-2">- label: Start Implementation</div>
<div class="ml-4">agent: agent</div>
<div class="ml-4">prompt: Implement plan</div>
<div class="ml-4">send: false</div>
<div class="ml-2">- label: Review Code</div>
<div class="ml-4">agent: security-reviewer</div>
</div>
</div>

<div class="p-4 bg-pink-900/20 rounded-xl border border-pink-500/30">
<div class="text-sm font-bold text-pink-300 mb-2">Button Appears After Completion</div>
<div class="text-xs opacity-80 mb-3">"Start Implementation" button switches to implementation agent with plan as context</div>
<div class="text-xs mt-4 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded border border-green-500/30">
<div class="font-bold text-green-300">Context flows between agents</div>
</div>
</div>

</div>

---

# The Layered Architecture

<div class="flex justify-center mt-8">
<div class="w-[600px]">

<div class="p-4 bg-gradient-to-r from-pink-900/40 to-pink-800/30 rounded-t-xl border border-pink-500/30 border-b-0">
<div class="flex items-center gap-3">
<div class="text-2xl">🤖</div>
<div class="flex-1">
<div class="font-bold text-pink-300">Agents (.agent.md)</div>
<div class="text-xs opacity-80 mt-1">Orchestration · Constrained personas · Tool restrictions · Handoffs</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-r from-purple-900/40 to-purple-800/30 border border-purple-500/30 border-b-0">
<div class="flex items-center gap-3">
<div class="text-2xl">⚡</div>
<div class="flex-1">
<div class="font-bold text-purple-300">Prompts (.prompt.md)</div>
<div class="text-xs opacity-80 mt-1">Task Templates · Reusable workflows · /commands</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-r from-indigo-900/40 to-indigo-800/30 border border-indigo-500/30 border-b-0">
<div class="flex items-center gap-3">
<div class="text-2xl">🎯</div>
<div class="flex-1">
<div class="font-bold text-indigo-300">Skills (SKILL.md + resources)</div>
<div class="text-xs opacity-80 mt-1">Capabilities · On-demand expertise · Scripts · Examples</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-r from-blue-900/40 to-blue-800/30 border border-blue-500/30 border-b-0">
<div class="flex items-center gap-3">
<div class="text-2xl">📍</div>
<div class="flex-1">
<div class="font-bold text-blue-300">AGENTS.md</div>
<div class="text-xs opacity-80 mt-1">Agent Playbook · Commands · Tests · Local workflow guidance</div>
</div>
</div>
</div>

<div class="p-4 bg-gradient-to-r from-cyan-900/40 to-blue-800/30 rounded-b-xl border border-cyan-500/30">
<div class="flex items-center gap-3">
<div class="text-2xl">📝</div>
<div class="flex-1">
<div class="font-bold text-cyan-300">Instructions (copilot-instructions.md + .instructions.md)</div>
<div class="text-xs opacity-80 mt-1">Foundation · Always-on · Coding standards · Build procedures</div>
</div>
</div>
</div>

</div>
</div>

<div class="mt-6 text-center text-sm opacity-70">Each primitive builds on the ones below it · Agent can reference instructions and invoke skills</div>

---

# Start Simple: Progressive Implementation

<div class="mt-4 space-y-2">

<div class="flex items-center gap-4 p-3 bg-gradient-to-r from-cyan-900/40 to-cyan-800/20 rounded-xl border border-cyan-500/30">
<div class="flex-1 text-sm">1. Add <code class="bg-cyan-900/40 px-1.5 py-0.5 rounded text-cyan-300">copilot-instructions.md</code> with your tech stack and standards</div>
<div class="text-sm text-cyan-300 font-medium min-w-[260px] text-right">⚡ Immediate: project-aware responses</div>
</div>

<div class="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/30">
<div class="flex-1 text-sm">2. Create first <code class="bg-blue-900/40 px-1.5 py-0.5 rounded text-blue-300">.prompt.md</code> for your most common task</div>
<div class="text-sm text-blue-300 font-medium min-w-[260px] text-right">🔄 Consistent: standardized workflows</div>
</div>

<div class="flex items-center gap-4 p-3 bg-gradient-to-r from-indigo-900/40 to-indigo-800/20 rounded-xl border border-indigo-500/30">
<div class="flex-1 text-sm">3. Add path-specific <code class="bg-indigo-900/40 px-1.5 py-0.5 rounded text-indigo-300">.instructions.md</code> for different areas</div>
<div class="text-sm text-indigo-300 font-medium min-w-[260px] text-right">🎯 Targeted: language-specific conventions</div>
</div>

<div class="flex items-center gap-4 p-3 bg-gradient-to-r from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30">
<div class="flex-1 text-sm">4. Add skills for capabilities that span projects</div>
<div class="text-sm text-purple-300 font-medium min-w-[260px] text-right">📦 Portable: shared expertise</div>
</div>

<div class="flex items-center gap-4 p-3 bg-gradient-to-r from-pink-900/40 to-pink-800/20 rounded-xl border border-pink-500/30">
<div class="flex-1 text-sm">5. Create agents for complex orchestration needs</div>
<div class="text-sm text-pink-300 font-medium min-w-[260px] text-right">🤖 Advanced: multi-step workflows</div>
</div>

</div>

<div class="mt-6 text-center text-sm opacity-60 italic">Start with the first row — see value before adding complexity</div>

---

# Do's and Don'ts

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 bg-red-900/20 rounded-xl border border-red-500/30">
<div class="text-lg font-bold text-red-300 mb-4">❌ Common Mistakes</div>
<div class="space-y-2 text-sm">
<div class="p-2.5 bg-red-900/30 rounded">Start with agents (over-engineering)</div>
<div class="p-2.5 bg-red-900/30 rounded">5-page instructions (context bloat)</div>
<div class="p-2.5 bg-red-900/30 rounded">Task-specific content in instructions</div>
<div class="p-2.5 bg-red-900/30 rounded">Skipping configuration entirely</div>
</div>
</div>

<div class="p-5 bg-green-900/20 rounded-xl border border-green-500/30">
<div class="text-lg font-bold text-green-300 mb-4">✅ Best Practices</div>
<div class="space-y-2 text-sm">
<div class="p-2.5 bg-green-900/30 rounded">Start with instructions (5 minutes)</div>
<div class="p-2.5 bg-green-900/30 rounded">Keep instructions under 2 pages</div>
<div class="p-2.5 bg-green-900/30 rounded">Use prompts for workflows</div>
<div class="p-2.5 bg-green-900/30 rounded">Add complexity only when needed</div>
</div>
</div>

</div>

---

# Aspirational Goals: Metrics That Matter

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-xl border-2 border-cyan-500/30">
<div class="text-3xl mb-2 text-center">40%</div>
<div class="font-bold text-cyan-300 text-center mb-2">Reduction in Code Review Comments</div>
<div class="text-xs opacity-80 text-center">Monorepo with path-specific instructions for React, Node.js, and React Native</div>
</div>

<div class="p-5 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-xl border-2 border-blue-500/30">
<div class="text-3xl mb-2 text-center">2 weeks → 3 days</div>
<div class="font-bold text-blue-300 text-center mb-2">Onboarding Time Reduced</div>
<div class="text-xs opacity-80 text-center">Instructions + /onboard prompt provide guided codebase tour from day one</div>
</div>

<div class="p-5 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl border-2 border-indigo-500/30">
<div class="text-3xl mb-2 text-center">25%</div>
<div class="font-bold text-indigo-300 text-center mb-2">Faster Test Failure Debugging</div>
<div class="text-xs opacity-80 text-center">Test-runner skill analyzes failures using project-specific patterns</div>
</div>

<div class="p-5 bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-xl border-2 border-purple-500/30">
<div class="text-3xl mb-2 text-center">Zero</div>
<div class="font-bold text-purple-300 text-center mb-2">Production Migration Rollbacks</div>
<div class="text-xs opacity-80 text-center">Database admin agent enforces safety in 6 months of schema changes</div>
</div>

</div>

<div class="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
<div class="text-center">
<div class="font-bold text-green-300 text-lg mb-2">5 minutes to create your first instructions file</div>
<div class="text-sm opacity-90">Every team using Copilot should start here</div>
</div>
</div>

---

# What You Can Do Today

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-2">⚡</div>
<div class="font-bold text-cyan-300 mb-2 text-sm">Immediate (5-15 min)</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-cyan-900/40 rounded">Create .github/copilot-instructions.md</div>
<div class="p-2 bg-cyan-900/40 rounded">Try /init command to auto-generate</div>
<div class="p-2 bg-cyan-900/40 rounded">Check References section in chat</div>
</div>
</div>

<div class="p-4 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-2">🎯</div>
<div class="font-bold text-blue-300 mb-2 text-sm">Short-Term (1 hour)</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-blue-900/40 rounded">Add path-specific .instructions.md</div>
<div class="p-2 bg-blue-900/40 rounded">Create first .prompt.md file</div>
<div class="p-2 bg-blue-900/40 rounded">Review Awesome Copilot examples</div>
</div>
</div>

<div class="p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-2">🚀</div>
<div class="font-bold text-indigo-300 mb-2 text-sm">Advanced (2-4 hours)</div>
<div class="space-y-2 text-xs">
<div class="p-2 bg-indigo-900/40 rounded">Build skill for common capability</div>
<div class="p-2 bg-indigo-900/40 rounded">Create planning agent (read-only)</div>
<div class="p-2 bg-indigo-900/40 rounded">Set up multi-agent workflow</div>
</div>
</div>

</div>

<div class="mt-8 text-center">
<div class="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold shadow-lg shadow-cyan-500/25">
All primitives are version-controlled, team-shared, and reviewable
</div>
</div>

---

# References

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">

<div class="space-y-2">
<div class="p-3 bg-gray-900/60 rounded-lg border border-gray-700">
<div class="font-bold text-cyan-300 mb-1">Customize AI in Visual Studio Code</div>
<div class="opacity-70">Overview of all customization options</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-lg border border-gray-700">
<div class="font-bold text-cyan-300 mb-1">Use custom instructions in VS Code</div>
<div class="opacity-70">Instructions files, path-specific patterns</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-lg border border-gray-700">
<div class="font-bold text-cyan-300 mb-1">Use prompt files in VS Code</div>
<div class="opacity-70">Prompt structure, variables, commands</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-lg border border-gray-700">
<div class="font-bold text-cyan-300 mb-1">Use Agent Skills in VS Code</div>
<div class="opacity-70">Skills standard, progressive loading</div>
</div>
</div>

<div class="space-y-2">
<div class="p-3 bg-gray-900/60 rounded-lg border border-gray-700">
<div class="font-bold text-cyan-300 mb-1">Custom agents in VS Code</div>
<div class="opacity-70">Agent definition, handoffs, tool constraints</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-lg border border-gray-700">
<div class="font-bold text-cyan-300 mb-1">GitHub Repository Instructions</div>
<div class="opacity-70">GitHub-side configuration reference</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-lg border border-gray-700">
<div class="font-bold text-cyan-300 mb-1">AGENTS.md Open Format</div>
<div class="opacity-70">Cross-agent playbook convention</div>
</div>
<div class="p-3 bg-gray-900/60 rounded-lg border border-gray-700">
<div class="font-bold text-cyan-300 mb-1">Awesome Copilot Repository</div>
<div class="opacity-70">Community examples and patterns</div>
</div>
</div>

</div>

<div class="mt-6 text-center opacity-60 text-xs">All links available in the talk README</div>

---
class: text-center
---

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>

<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-48" alt="" /></div>
<img src="./sdp-logo.png" class="w-48 relative" alt="SDP Logo" />
</div>

<h1 class="!text-5xl !font-bold !mt-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Thank You!</h1>

<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">Copilot Configuration Primitives</span>
</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-lg">5 Minutes</div>
<div class="text-gray-300 mt-2 text-xs">To transform Copilot with instructions alone</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-bold text-lg">Progressive</div>
<div class="text-gray-300 mt-2 text-xs">Start simple, add complexity when needed</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-bold text-lg">Team-Shared</div>
<div class="text-gray-300 mt-2 text-xs">Version-controlled knowledge, instantly onboarded</div>
</div>
</div>

<div class="mt-6 text-sm opacity-60 relative z-10">Start with .github/copilot-instructions.md today</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
