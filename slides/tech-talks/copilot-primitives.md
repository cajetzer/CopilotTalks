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
mdc: true
section: Customization & Context
status: active
updated: 2026-03-23
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
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="Copilot Configuration Primitives"
subtitle="Making AI Understand Your Codebase"
tagline="Four building blocks that transform Copilot from generic assistant to team-aware partner"
meta="Tech Talk · 30 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How can I make GitHub Copilot understand my codebase better?"
subtext="This isn't a limitation of the AI model — it's a context problem."
highlight="Copilot's response quality is directly proportional to how much it knows about your codebase."
:cards='[
  { icon: "📁", title: "Developers Personalizing Copilot", description: "Instructions, skills, and custom prompts that encode your patterns and standards" },
  { icon: "🏢", title: "Team Leads Standardizing AI Use", description: "Custom instructions enforce org conventions for every developer automatically" },
  { icon: "🚀", title: "Power Users Maximizing Agent Output", description: "Combine instructions, skills, and prompts for domain-expert level responses" },
  { title: "Repeated Context", description: "Same codebase explanations every session — instructions fix this permanently" },
  { title: "Generic Responses", description: "Textbook answers instead of your patterns — primitives make Copilot specific" },
  { title: "Inconsistent Quality", description: "Varies by developer context — shared instructions level the playing field" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "📖", title: "Instructions", subtitle: "The foundation — always-on context", blurb: "Transform Copilot in 5 minutes", slide: 4 },
    { icon: "🔧", title: "Skills", subtitle: "On-demand expertise packs", blurb: "Progressive loading keeps context efficient", slide: 9 },
    { icon: "📋", title: "Custom Prompts", subtitle: "Reusable workflow templates", blurb: "Standardized team tasks via /command", slide: 11 },
    { icon: "🤖", title: "Custom Agents", subtitle: "Specialized AI personas", blurb: "Constrained tools + guided handoffs", slide: 13 },
  ]'
/>
---

<!-- SLIDE: Part 1 — Instructions -->

<SectionOpenerSlide
  :partNumber="1"
  title="Instructions"
  subtitle="The foundation — always-on context"
  :cards='[
    { icon: "📖", title: "Always Active", blurb: "Injected into every request automatically" },
    { icon: "🎯", title: "Three Selectors", blurb: "Repo-wide, path-specific, directory-local" },
    { icon: "⚡", title: "5-Minute Setup", blurb: "Immediate project-aware responses" },
  ]'
  :terminal='{ context: "One file = team-aware Copilot", detail: "encode conventions once, apply everywhere" }'
/>
---

<!-- SLIDE: Instructions — Three Selectors -->
<ThreeColumnCardSlide
  :partNumber="1"
  pillIcon="📖"
  pillLabel="Instructions"
  title="Three Ways to Scope Instructions"
  :columns='[
    { icon: "📦", title: "Repository Selector", description: "Applies to every request in the repo. Best for tech stack, build commands, and coding standards. File: .github/copilot-instructions.md" },
    { icon: "🎯", title: "File-Pattern Selector", description: "Applies when applyTo glob matches. Best for path-specific conventions. File: .github/instructions/models.instructions.md" },
    { icon: "📂", title: "Directory Selector", description: "Nearest file in tree wins (the agent playbook). Best for local commands, tests, and subproject rules. File: frontend/AGENTS.md" }
  ]'
  :insight='{ icon: "💡", text: "Key Principle: All matching instructions combine. Repo-wide + path-specific + directory-local all apply when relevant." }'
/>

---

<!-- SLIDE: Instructions — Repository-Wide Pattern -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="📖"
  pillLabel="Instructions"
  title="Repository-Wide Instructions Example"
  codePosition="top"
  :code='{
    language: "markdown",
    filename: ".github/copilot-instructions.md",
    content: "# Repository Instructions\n\nThis repository uses TypeScript with strict type checking enabled.\n\n## Build and Test\n- Build: `npm run build`\n- Tests: `npm test` (Jest, co-located in __tests__/)\n\n## Coding Standards\n- Prefer functional programming patterns\n- Use explicit return types for all functions\n- Add JSDoc comments for exported functions\n- Use named exports (avoid default exports)\n\n## Error Handling\n- Use custom error classes extending Error\n- Log with structured logging (logger.error())\n- Never swallow errors silently"
  }'
  :features='[
    { icon: "✅", title: "Before vs After", description: "Generic Express boilerplate becomes a TypeScript endpoint with Prisma, custom errors, JSDoc, and co-located tests — all from one file." },
    { icon: "📊", title: "Real Impact", description: "40% reduction in style review comments. 5 minutes to implement. Zero training required — instant team-wide effect." }
  ]'
/>

---

<!-- SLIDE: Instructions — Path-Specific Targeting -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="📖"
  pillLabel="Instructions"
  title="Path-Specific Instructions"
  codePosition="top"
  :code='{
    language: "markdown",
    filename: ".github/instructions/models.instructions.md",
    content: "---\napplyTo: \"src/models/**/*.ts\"\n---\n\n# Database Model Instructions\n\nWhen working with database models:\n- Use Prisma schema definitions\n- Include JSDoc comments with field descriptions\n- Define relationships explicitly with @relation\n- Add indexes for foreign keys\n- Use snake_case for DB columns, camelCase in TypeScript\n- Always include audit fields: createdAt, updatedAt"
  }'
  :features='[
    { icon: "🎯", title: "Precision", description: "Only loads for matching files — keeps the context budget clean and focused." },
    { icon: "🔄", title: "Combines", description: "Merges with repo-wide instructions when both match the file path." },
    { icon: "🗂️", title: "Examples", description: "src/web/** for React, src/api/** for Express, tests/** for test rules." }
  ]'
/>

---

<!-- SLIDE: Instructions — AGENTS.md Playbook -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="📖"
  pillLabel="Instructions"
  title="AGENTS.md: The Open Agent Playbook"
  codePosition="top"
  :code='{
    language: "markdown",
    filename: "frontend/AGENTS.md",
    content: "# AGENTS.md\n\n## Dev environment tips\n- Install dependencies: `pnpm install`\n- Start frontend: `pnpm --filter web dev`\n\n## Testing instructions\n- Run tests: `pnpm --filter web test`\n- Lint before PR: `pnpm --filter web lint`\n\n## PR instructions\n- Title format: `[web] &lt;Title&gt;`"
  }'
  :features='[
    { icon: "🗺️", title: "Nearest File Wins", description: "Directory tree traversal finds the most specific playbook for the working file." },
    { icon: "🔁", title: "Monorepo-Friendly", description: "frontend/, infra/, api/ each get their own rules without collision." },
    { icon: "🤝", title: "Open Format", description: "Works across GitHub Copilot, Claude, and other coding agents that read AGENTS.md." }
  ]'
/>

---

<!-- SLIDE: Skills — Scripts -->
<TwoColPairedConceptsSlide
  :partNumber="2"
  pillIcon="🔧"
  pillLabel="Skills"
  title="Skills Bundle Verified Scripts With Documentation"
  :left='{
    header: "What Are Scripts?",
    icon: "📜",
    items: [
      { title: "Shell, Python, or any executable", detail: "Anything Copilot can read, understand, and run as part of a skill" },
      { title: "scripts/run-tests.sh", detail: "Project-specific entry points your team has already validated" },
      { title: "scripts/validate-schema.py", detail: "Reusable verification logic agents call instead of guessing" },
      { title: "scripts/deploy-preview.sh", detail: "Deterministic workflows packaged alongside SKILL.md instructions" }
    ]
  }'
  :right='{
    header: "Why Scripts Matter",
    icon: "✨",
    items: [
      { title: "Verified", detail: "No guessing at CLI flags — the script encodes the right invocation" },
      { title: "Team-approved", detail: "Your exact workflows, reviewed and merged like any other code" },
      { title: "Self-documenting", detail: "Copilot reads the script to understand inputs, outputs, side effects" },
      { title: "Composable", detail: "Chain scripts together for complex multi-step operations" }
    ]
  }'
  :insight='{ icon: "🧩", text: "SKILL.md tells Copilot: Run scripts/run-tests.sh to execute · Run scripts/coverage-report.sh for coverage." }'
/>

---

<!-- SLIDE: Skills — Templates -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Skills</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Templates: Starter Patterns</div>
<div class="text-xs text-white/50">Enforce team patterns — components include tests, routes include error handling</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">📋</div>
<div class="font-bold text-purple-300">What Are Templates?</div>
</div>
<div class="text-xs opacity-80 mb-2">Starter files with placeholders that Copilot fills in, ensuring consistency.</div>
<div class="bg-gray-950/50 rounded p-2 font-mono text-xs border border-purple-500/20 space-y-0.5">
<div class="text-purple-300">templates/component.tsx</div>
<div class="text-purple-300">templates/test-case.spec.ts</div>
<div class="text-purple-300">templates/api-route.ts</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-xl border border-pink-500/30">
<div class="flex items-center gap-2 mb-2">
<div class="text-xl">✨</div>
<div class="font-bold text-pink-300">Why Templates Matter</div>
</div>
<div class="space-y-1">
<div class="flex items-start gap-2">
<div class="text-pink-400">→</div>
<div class="text-xs"><strong class="text-pink-300">Consistency:</strong> Same structure every time</div>
</div>
<div class="flex items-start gap-2">
<div class="text-pink-400">→</div>
<div class="text-xs"><strong class="text-pink-300">Completeness:</strong> Tests, types, docs by default</div>
</div>
<div class="flex items-start gap-2">
<div class="text-pink-400">→</div>
<div class="text-xs"><strong class="text-pink-300">Best practices:</strong> Error handling baked in</div>
</div>
<div class="flex items-start gap-2">
<div class="text-pink-400">→</div>
<div class="text-xs"><strong class="text-pink-300">Reduced review:</strong> Already meets standards</div>
</div>
</div>
</div>
</div>
<div class="bg-gray-950/80 rounded-xl border border-purple-500/30 p-3">
<div class="text-xs font-semibold text-white mb-2">Example: Component Template with Placeholders</div>
<div class="grid grid-cols-2 gap-4">
<div class="bg-gray-900/50 rounded p-2 font-mono text-xs text-purple-200 space-y-0.5 border border-purple-500/20">
<div class="text-purple-400">// templates/component.tsx</div>
<div>import &#123; FC &#125; from 'react';</div>
<div>interface &#123;&#123;name&#125;&#125;Props &#123; ... &#125;</div>
<div>export const &#123;&#123;name&#125;&#125;: FC = () =&gt; &#123;</div>
<div class="ml-2">return &lt;div&gt;...&lt;/div&gt;;</div>
<div>&#125;;</div>
</div>
<div class="text-xs space-y-1.5">
<div class="text-gray-400">Copilot replaces placeholders:</div>
<div class="bg-gray-900/50 rounded px-2 py-1 font-mono text-pink-300">&#123;&#123;name&#125;&#125; → UserProfile</div>
<div class="bg-gray-900/50 rounded px-2 py-1 font-mono text-pink-300">Props filled from requirements</div>
<div class="bg-gray-900/50 rounded px-2 py-1 font-mono text-pink-300">Test file auto-generated alongside</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Custom Prompts -->

<SectionOpenerSlide
  :partNumber="3"
  title="Custom Prompts"
  subtitle="Reusable workflow templates"
  :cards='[
    { icon: "⌨️", title: "User-Invoked", blurb: "Triggered via /command in chat" },
    { icon: "📋", title: "Variable Interpolation", blurb: "{{componentName}}, ${selection}, ${file}" },
    { icon: "🔄", title: "Reuses Instructions", blurb: "No duplication of conventions" },
  ]'
  :terminal='{ context: "Turn frequent tasks into /commands", detail: "standardize workflows across the team" }'
/>
---

<!-- SLIDE: Custom Prompts — Component Generator Example -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📋 Custom Prompts</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<span class="text-white/40 text-xs ml-1">1 of 1</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-xl font-bold text-white mb-1">Example: /component Generator</div>
<div class="text-sm text-white/60">Standardize React component scaffolding across the team</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="flex-1 min-h-0 bg-gray-950/80 rounded-xl border border-indigo-500/30 p-3 overflow-y-auto flex flex-col gap-2 max-h-52">
<div class="font-mono text-xs text-indigo-300">.github/prompts/component.prompt.md</div>
<div class="bg-gray-900/70 rounded p-2 font-mono text-xs space-y-0.5">
<div class="text-blue-400">---</div>
<div class="text-white">name: component</div>
<div class="text-white">description: Generate React component with TypeScript, tests, docs</div>
<div class="text-white">tools: ['editFiles', 'createFile']</div>
<div class="text-white">agent: agent</div>
<div class="text-blue-400">---</div>
</div>
<div class="text-xs text-gray-300 space-y-1">
<div class="font-semibold text-white"># Component Generator</div>
<div class="mt-1">Create a new React component following our team's standards.</div>
<div class="mt-1 font-semibold text-white">## Files to Create</div>
<div class="bg-gray-900/70 rounded p-2 font-mono text-xs space-y-0.5 text-indigo-200">
<div>src/components/&#123;&#123;componentName&#125;&#125;/</div>
<div class="ml-3">&#123;&#123;componentName&#125;&#125;.tsx</div>
<div class="ml-3">&#123;&#123;componentName&#125;&#125;.types.ts</div>
<div class="ml-3">&#123;&#123;componentName&#125;&#125;.module.css</div>
<div class="ml-3">__tests__/&#123;&#123;componentName&#125;&#125;.test.tsx</div>
</div>
<div class="mt-1 font-semibold text-white">## Requirements</div>
<div>• Use functional components with hooks</div>
<div>• Include TypeScript props interface with JSDoc</div>
<div>• Follow conventions in [coding standards](../../copilot-instructions.md)</div>
</div>
</div>

<div class="grid grid-cols-2 gap-2">
<div class="p-2 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-500/30">
<div class="text-xs font-semibold text-indigo-300 mb-1">💬 Usage</div>
<div class="text-xs opacity-80">Type <code class="bg-gray-900 px-1 rounded">/component MyButton</code> in chat</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30">
<div class="text-xs font-semibold text-purple-300 mb-1">🔁 Consistency</div>
<div class="text-xs opacity-80">Same structure every time, no manual repetition</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Custom Agents -->

<SectionOpenerSlide
  :partNumber="4"
  title="Custom Agents"
  subtitle="Specialized AI personas with constrained tools"
  :cards='[
    { icon: "🔒", title: "Tool Constraints", blurb: "Exactly which tools are available — and which aren’t" },
    { icon: "🤝", title: "Guided Handoffs", blurb: "Plan → Implement → Review with context preserved" },
    { icon: "🎭", title: "Session Persona", blurb: "Instructions, model, and temperature per role" },
  ]'
  :terminal='{ context: "Different tasks need different capabilities", detail: "constrain tools to prevent accidental edits" }'
/>
---

<!-- SLIDE: Custom Agents — Planner Example with Handoffs -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Custom Agents</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Example: Planning Agent with Handoffs</div>
<div class="text-xs text-white/50">Read-only planning → implementation → review workflow</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
<div class="grid grid-cols-2 gap-3">
<div class="flex flex-col bg-gray-950/80 rounded-xl border border-purple-500/30 p-3">
<div class="font-mono text-xs text-purple-300 mb-2">.github/agents/planner.agent.md</div>
<div class="bg-gray-900/70 rounded p-2 mb-2 font-mono text-xs space-y-0.5">
<div class="text-blue-400">---</div>
<div class="text-white">name: planner</div>
<div class="text-white">description: Generate plans. Read-only.</div>
<div class="text-white">tools: ['search', 'readFile', 'listFiles']</div>
<div class="text-white">handoffs:</div>
<div class="text-white ml-3">- label: Start Implementation</div>
<div class="text-white ml-5">agent: agent</div>
<div class="text-blue-400">---</div>
</div>
<div class="text-xs text-gray-300 flex-1 space-y-1">
<div class="font-semibold text-white"># Planning Agent</div>
<div>Senior architect role. Research codebase, generate plan.</div>
<div class="mt-1"><strong>Rule:</strong> NEVER modify files — read-only</div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="p-3 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="text-xs font-semibold text-purple-300 mb-1">🔒 Why Constrain Tools?</div>
<div class="text-xs opacity-80 space-y-0.5">
<div>• <strong>Planner:</strong> read-only prevents edits</div>
<div>• <strong>Security:</strong> search but no terminal</div>
<div>• <strong>DB admin:</strong> SQL but no frontend</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-pink-900/40 to-rose-900/40 rounded-xl border border-pink-500/30">
<div class="text-xs font-semibold text-pink-300 mb-1">🤝 Handoff Workflow</div>
<div class="text-xs opacity-80 space-y-0.5">
<div><strong>1:</strong> Planner creates plan</div>
<div><strong>2:</strong> "Start Implementation" button</div>
<div><strong>3:</strong> Switches to agent with context</div>
<div><strong>4:</strong> Optional security handoff</div>
</div>
</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 rounded-lg border border-emerald-500/30">
<div class="text-xs"><strong class="text-emerald-300">Real Impact:</strong> DB admin agent = zero production migration rollbacks in 6 months, 60% faster schema review.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Custom Agents — Advanced Patterns -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🤖 Custom Agents</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">2 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-xl font-bold text-white mb-1">Advanced Patterns: Squad &#38; AgentCouncil</div>
<div class="text-sm text-white/60">Open-source frameworks that take custom agents to the next level</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="flex items-center gap-2 mb-3">
<div class="text-2xl">👥</div>
<div class="font-bold text-blue-300 text-lg">Squad</div>
</div>
<div class="text-sm opacity-90 mb-3">Persistent AI development team with specialized roles, memory, and parallel execution.</div>
<div class="space-y-2 text-sm">
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div><strong class="text-blue-300">Named agents:</strong> Ripley (lead), Dallas (frontend), Kane (backend)</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div><strong class="text-blue-300">Memory:</strong> Scribe agent maintains context across sessions</div>
</div>
<div class="flex items-start gap-2">
<div class="text-blue-400">→</div>
<div><strong class="text-blue-300">Ralph:</strong> Autonomous backlog processing</div>
</div>
</div>
<div class="mt-3 font-mono text-xs bg-gray-950/60 rounded p-2 text-blue-200">npx github:bradygaster/squad</div>
</div>
<div class="p-4 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30">
<div class="flex items-center gap-2 mb-3">
<div class="text-2xl">🎭</div>
<div class="font-bold text-purple-300 text-lg">AgentCouncil</div>
</div>
<div class="text-sm opacity-90 mb-3">Multi-model deliberation — Claude, GPT, and Gemini debate your decisions.</div>
<div class="space-y-2 text-sm">
<div class="flex items-start gap-2">
<div class="text-purple-400">→</div>
<div><strong class="text-purple-300">Collaborative:</strong> Models build on each other's ideas</div>
</div>
<div class="flex items-start gap-2">
<div class="text-purple-400">→</div>
<div><strong class="text-purple-300">Adversarial:</strong> Models attack positions to stress-test</div>
</div>
<div class="flex items-start gap-2">
<div class="text-purple-400">→</div>
<div><strong class="text-purple-300">Synthesis:</strong> Final answer incorporates all perspectives</div>
</div>
</div>
<div class="mt-3 font-mono text-xs bg-gray-950/60 rounded p-2 text-purple-200">council: should we use microservices?</div>
</div>
</div>
<div class="p-3 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/30">
<div class="text-sm"><strong class="text-cyan-300">Deep Dive:</strong> See the <strong>Agent Teams</strong> tech talk for full coverage of Squad memory, ceremonies, and AgentCouncil modes.</div>
</div>
</div>
</div>

---

<!-- SLIDE: Choosing the Right Primitive -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🎯 Decision Guide</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="mb-3">
<div class="text-lg font-bold text-white mb-0.5">Start Simple, Add Complexity When Needed</div>
<div class="text-xs text-white/50">Progressive adoption path — most teams should follow this sequence</div>
</div>

<div class="grid grid-cols-2 gap-3 mb-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-2">✅ Adoption Sequence</div>
<div class="text-xs opacity-90 space-y-1">
<div><strong>Week 1:</strong> copilot-instructions.md (5 min → immediate value)</div>
<div><strong>Week 2:</strong> Path-specific .instructions.md (targeted rules)</div>
<div><strong>Week 3:</strong> First prompt for most common task</div>
<div><strong>Month 2:</strong> Skills for cross-project capabilities</div>
<div><strong>Month 3:</strong> Agents for complex orchestration</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-red-900/40 to-orange-900/40 rounded-xl border border-red-500/30">
<div class="text-sm font-semibold text-red-300 mb-2">❌ Common Mistakes</div>
<div class="text-xs opacity-90 space-y-1">
<div>• Start with agents → over-engineers simple problems</div>
<div>• 5-page instructions → consumes context budget</div>
<div>• Task-specific instructions → bloats every request</div>
<div>• Skipping configuration → leaves 80% value unused</div>
</div>
</div>
</div>

<div class="grid grid-cols-4 gap-2">
<div class="p-2 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="text-xs font-semibold text-cyan-300 mb-1">📖 Instructions</div>
<div class="text-xs opacity-80">Always know our conventions</div>
</div>
<div class="p-2 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="text-xs font-semibold text-blue-300 mb-1">🔧 Skills</div>
<div class="text-xs opacity-80">When this task appears</div>
</div>
<div class="p-2 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="text-xs font-semibold text-indigo-300 mb-1">📋 Prompts</div>
<div class="text-xs opacity-80">When I run /command</div>
</div>
<div class="p-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
<div class="text-xs font-semibold text-purple-300 mb-1">🤖 Agents</div>
<div class="text-xs opacity-80">When I want this persona</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="Repeated Context to Encoded Conventions"
:leftItems='["Context: repeated per conversation", "Implementation: manual per developer", "Effect: inconsistent across team", "ROI: hours per developer per month"]'
:rightItems='["Context: encoded in instructions", "Implementation: 5 minutes", "Effect: instant team-wide", "ROI: 40% code review reduction"]'
:metrics='[
  { value: "40%", detail: "Code review reduction" },
  { value: "5 min", detail: "Implementation time" },
  { value: "Instant", detail: "Team-wide effect" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Create .github/copilot-instructions.md", "Add tech stack, build commands, coding standards", "Try /init to auto-generate from workspace", "Check References section to verify they load"]'
  :thisWeek='["Add path-specific .instructions.md files", "Create first .prompt.md for common task", "Review Awesome Copilot for examples", "Share instructions via version control"]'
  :thisMonth='["Build a skill for a frequent capability", "Create a planning agent (read-only)", "Set up Plan → Implement → Review handoffs", "Explore agentskills.io standard"]'
  footer="One copilot-instructions.md file = 40% reduction in style review comments + project-aware responses from day one. This is the highest ROI customization available."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Overview & Getting Started", color: "cyan", items: [
        { href: "https://code.visualstudio.com/docs/copilot/copilot-customization", label: "Customize AI in Visual Studio Code", description: "Comprehensive customization overview" },
        { href: "https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot", label: "Adding repository custom instructions", description: "Repo-scoped instructions reference" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/custom-instructions", label: "Use custom instructions in VS Code", description: "VS Code instructions configuration" },
        { href: "https://docs.github.com/en/copilot/reference/custom-instructions-support", label: "Custom instructions support reference", description: "Surface support matrix and limits" }
    ] },
    { title: "🌐 Open Standards & Community", color: "purple", items: [
        { href: "https://code.visualstudio.com/docs/copilot/customization/agent-skills", label: "Use Agent Skills in VS Code", description: "Skill file format and invocation" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/prompt-files", label: "Use prompt files in VS Code", description: "Reusable prompt templates" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom agents in VS Code", description: ".agent.md definitions and configuration" },
        { href: "https://agents.md/", label: "AGENTS.md open format", description: "Cross-vendor agent instruction standard" },
        { href: "https://agentskills.io/", label: "Agent Skills open standard", description: "Community skill library and spec" },
        { href: "https://github.com/github/awesome-copilot", label: "Awesome Copilot repository", description: "Community prompts, skills, and agents" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="Making AI Understand Your Codebase"
:cards="[
  { icon: '🔧', value: '4', detail: 'Configuration Primitives', subdetail: 'Instructions, Skills, Prompts, Agents' },
  { icon: '⚡', value: '5 min', detail: 'To Transform Copilot', subdetail: 'From generic to team-aware assistant' },
  { icon: '📉', value: '40%', detail: 'Reduction in Review Comments', subdetail: 'When Copilot knows your style' },
]"
prompt="Questions? Start with copilot-instructions.md today — five minutes to transform Copilot"
/>
