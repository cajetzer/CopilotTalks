---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## MCP Apps: Rich Interactive UI in Chat
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: MCP Apps - Rich Interactive UI in Chat
module: tech-talks/mcp-apps
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
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="MCP Apps"
subtitle="Rich Interactive UI in Chat"
tagline="Transform chat from text stream to visual workspace with inline charts, tables, and forms"
meta="Tech Talk · 40 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I create interactive visualizations within chat instead of exporting to external tools?"
subtext="Charts, data explorers, and UI components that live inside the conversation —"
highlight="MCP Apps turn static responses into interactive experiences."
:cards='[
  { icon: "📊", title: "Data Teams Sharing Insights in Chat", description: "Interactive charts and pivot tables without Jupyter or external tool exports" },
  { icon: "🔧", title: "DevOps Engineers Visualizing Metrics", description: "Drill-down dashboards built on live Prometheus, Grafana, or TSDB data sources" },
  { icon: "🏗️", title: "Developers Building Internal Tooling", description: "Form-based agents and guided workflows rendered directly inside VS Code chat" },
  { title: "Beyond Text", description: "Real interactive charts and tables — not ASCII art or plain markdown tables" },
  { title: "No Context Switch", description: "Explore data in-place inside chat — no Jupyter or Tableau tab-switching required" },
  { title: "Interactive", description: "Click, filter, and drill down through data within the conversation window" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🧩", title: "Component Types", subtitle: "Charts, tables, forms, trees, cards", blurb: "Five built-in components for most visualization needs", slide: 4 },
    { icon: "🏗️", title: "Building MCP Apps", subtitle: "MCP server implementation", blurb: "Complete server structure returning component specs", slide: 10 },
    { icon: "💡", title: "Real-World Patterns", subtitle: "Practical use cases", blurb: "Dashboards, drill-down, forms, navigation", slide: 13 },
    { icon: "🔧", title: "Real-World Impact", subtitle: "Three proven use cases", blurb: "Metrics dashboards, database queries, scaffolding forms", slide: 17 },
  ]'
/>
---

<!-- SLIDE: Part 1 — Component Types -->

<SectionOpenerSlide
  :partNumber="1"
  title="Component Types"
  subtitle="Five built-in components for most visualization needs"
  :cards='[
    { icon: "📊", title: "Charts & Tables", blurb: "Interactive data visualization with hover, zoom, sort, filter" },
    { icon: "📝", title: "Forms & Trees", blurb: "Structured input and hierarchical navigation" },
    { icon: "🎨", title: "Cards & Custom", blurb: "Rich visual blocks and specialized components" },
  ]'
  :terminal='{ context: "MCP tools return component specs", detail: "VS Code renders them inline in chat" }'
/>
---

<!-- SLIDE: Charts Component -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Component Types</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 5</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Charts: Interactive Data Visualization</div>
<div class="text-xs text-white/50">Bar, line, pie, scatter, area charts with hover, zoom, and drill-down</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex gap-3 flex-1 min-h-0">
<div class="flex-1 p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 flex flex-col">
<div class="text-sm font-semibold text-cyan-300 mb-1">Capabilities</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Hover details with exact values</div>
<div>• Multiple chart types (bar, line, pie, scatter, area)</div>
<div>• Custom color palettes</div>
<div>• Responsive sizing with chat panel</div>
</div>
</div>
<div class="flex-1 flex flex-col overflow-hidden">
<div class="text-xs font-semibold text-gray-400 mb-1">Component Spec (TypeScript)</div>
<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50">
<div class="text-xs p-2 leading-relaxed font-mono">
<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;content: [&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"component"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"chart"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chartType: <span class="text-amber-300">"bar"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="text-amber-300">"Monthly Revenue"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; label: <span class="text-amber-300">"Jan"</span>, value: <span class="text-cyan-300">45000</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; label: <span class="text-amber-300">"Feb"</span>, value: <span class="text-cyan-300">52000</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; label: <span class="text-amber-300">"Mar"</span>, value: <span class="text-cyan-300">61000</span> &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options: &#123; interactive: <span class="text-purple-400">true</span>, colors: [<span class="text-amber-300">"#4CAF50"</span>] &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&#125;]<br/>
&#125;;
</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-xs text-gray-300">
<strong class="text-green-300">Use when:</strong> Presenting time-series data, comparisons, distributions, trends
</div>
</div>
</div>

---

<!-- SLIDE: Tables Component -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Component Types</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 5</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Tables: Interactive Data Grids</div>
<div class="text-xs text-white/50">Sortable, filterable tables with pagination, search, and CSV export</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex gap-3 flex-1 min-h-0">
<div class="flex-1 p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30 flex flex-col">
<div class="text-sm font-semibold text-blue-300 mb-1">Capabilities</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Click column headers to sort ascending/descending</div>
<div>• Dropdown filters for filterable columns</div>
<div>• Full-text search across all columns</div>
<div>• Pagination (10/25/50/100 per page), CSV export</div>
</div>
</div>
<div class="flex-1 flex flex-col overflow-hidden">
<div class="text-xs font-semibold text-gray-400 mb-1">Component Spec (TypeScript)</div>
<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50">
<div class="text-xs p-2 leading-relaxed font-mono">
<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;content: [&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"component"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"table"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="text-amber-300">"Active Users"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;columns: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; key: <span class="text-amber-300">"name"</span>, label: <span class="text-amber-300">"Name"</span>, sortable: <span class="text-purple-400">true</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; key: <span class="text-amber-300">"role"</span>, label: <span class="text-amber-300">"Role"</span>, filterable: <span class="text-purple-400">true</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; key: <span class="text-amber-300">"lastActive"</span>, label: <span class="text-amber-300">"Last Active"</span>, sortable: <span class="text-purple-400">true</span> &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: [&#123; name: <span class="text-amber-300">"Alice"</span>, role: <span class="text-amber-300">"Admin"</span> &#125;, ...],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options: &#123; pagination: <span class="text-purple-400">true</span>, searchable: <span class="text-purple-400">true</span> &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&#125;]<br/>
&#125;;
</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-xs text-gray-300">
<strong class="text-green-300">Use when:</strong> Displaying >20 rows where users need to find, sort, or filter records
</div>
</div>
</div>

---

<!-- SLIDE: Forms Component -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Component Types</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">3 of 5</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Forms: Structured Input Collection</div>
<div class="text-xs text-white/50">Type-aware fields with validation, dropdowns, checkboxes, and submit callbacks</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex gap-3">
<div class="flex-1 p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-1">Capabilities</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Validation: required fields, pattern matching, type validation</div>
<div>• Field types: text, email, number, select, checkbox, radio, textarea</div>
<div>• Submit callback sends data to specified MCP tool</div>
</div>
</div>
<div class="flex-1 p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-1">Trees & Cards</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• <strong>Trees:</strong> Expandable hierarchical views (file systems, org charts)</div>
<div>• <strong>Cards:</strong> Grid/list/carousel layouts with images and actions</div>
</div>
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
<span class="text-green-400">// Form example</span><br/>
&#123; type: <span class="text-amber-300">"form"</span>, title: <span class="text-amber-300">"Create User"</span>,<br/>
&nbsp;&nbsp;fields: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"username"</span>, type: <span class="text-amber-300">"text"</span>, required: <span class="text-purple-400">true</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"role"</span>, type: <span class="text-amber-300">"select"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options: [<span class="text-amber-300">"Admin"</span>, <span class="text-amber-300">"Editor"</span>, <span class="text-amber-300">"Viewer"</span>] &#125;<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;onSubmit: <span class="text-amber-300">"process-user-creation"</span> <span class="text-green-400">// Callback tool</span><br/>
&#125;<br/>
<br/>
<span class="text-green-400">// Tree example</span><br/>
&#123; type: <span class="text-amber-300">"tree"</span>, title: <span class="text-amber-300">"Project Files"</span>,<br/>
&nbsp;&nbsp;data: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123; label: <span class="text-amber-300">"src/"</span>, icon: <span class="text-amber-300">"folder"</span>, expandable: <span class="text-purple-400">true</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;children: [&#123; label: <span class="text-amber-300">"index.ts"</span> &#125;] &#125;<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;options: &#123; selectable: <span class="text-purple-400">true</span>, onSelect: <span class="text-amber-300">"open-file"</span> &#125;<br/>
&#125;
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-xs text-gray-300">
<strong class="text-green-300">Use when:</strong> Forms—collecting multi-field input with validation; Trees—navigating hierarchies; Cards—presenting options or galleries
</div>
</div>
</div>

---

<!-- SLIDE: Custom Components -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Component Types</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">4 of 5</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Custom Components: Maximum Flexibility</div>
<div class="text-xs text-white/50">Sandboxed HTML/CSS/JavaScript for specialized visualizations</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex gap-3">
<div class="flex-1 p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-1">Security Constraints</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Sandboxed iframe execution</div>
<div>• No access to VS Code APIs</div>
<div>• CSP restrictions apply</div>
<div>• Use VS Code CSS variables for theme consistency</div>
</div>
</div>
<div class="flex-1 p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-xl border border-pink-500/30">
<div class="text-sm font-semibold text-pink-300 mb-1">When to Use</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Built-in components don't meet specialized needs</div>
<div>• Flame graphs, network diagrams, custom D3 visualizations</div>
<div>• Require canvas rendering or advanced interactions</div>
</div>
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;content: [&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"component"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"custom"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;html: <span class="text-amber-300">`&lt;div class="flame-graph"&gt;...&lt;/div&gt;`</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;css: <span class="text-amber-300">`.flame-graph &#123; padding: 16px; &#125;`</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;script: <span class="text-amber-300">`drawFlameGraph(ctx, data);`</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sandbox: <span class="text-purple-400">true</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&#125;]<br/>
&#125;;
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Component Decision Tree -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧩 Component Types</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<span class="text-white/40 text-xs ml-1">5 of 5</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">When to Use Each Component Type</div>
<div class="text-xs text-white/50">Quick decision guide for choosing the right component</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30">
<div class="text-sm font-semibold text-cyan-300 mb-1">📊 Charts</div>
<div class="text-xs text-gray-300">Visual/quantitative data: metrics, trends, comparisons, distributions</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-1">📋 Tables</div>
<div class="text-xs text-gray-300">Tabular data with >20 rows where sorting/filtering adds value</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-1">📝 Forms</div>
<div class="text-xs text-gray-300">Structured input collection with validation (multi-field data entry)</div>
</div>
<div class="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-1">🌳 Trees</div>
<div class="text-xs text-gray-300">Hierarchical navigation: file systems, org charts, nested data</div>
</div>
</div>

<div class="p-3 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-xl border border-gray-500/30">
<div class="text-sm font-semibold text-gray-300 mb-1">⚠️ Don't Use MCP Apps When</div>
<div class="text-xs text-gray-400 space-y-1">
<div>• Output is &lt;100 lines of text/code → Standard markdown is clearer</div>
<div>• No interactive benefit → Visual complexity without user value</div>
<div>• Mobile/accessibility primary concern → Component complexity may hinder screen readers</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-xs">
<strong class="text-green-300">Mental Model Shift:</strong> From "chat yields text that I visualize elsewhere" to "chat yields interactive visualizations I explore inline"
</div>
</div>
</div>

---

<!-- SLIDE: Part 2 — Building MCP Apps -->

<SectionOpenerSlide
  :partNumber="2"
  title="Building MCP Apps"
  subtitle="Complete MCP server implementation returning components"
  :cards='[
    { icon: "🏗️", title: "Server Structure", blurb: "MCP SDK, tools list, component response" },
    { icon: "🔄", title: "Callback Handling", blurb: "Forms and trees trigger tool calls on interaction" },
    { icon: "⚙️", title: "Configuration", blurb: "Add to .vscode/mcp.json and test in chat" },
  ]'
  :terminal='{ context: "Return type: \"component\" in content array", detail: "VS Code detects and renders accordingly" }'
/>
---

<!-- SLIDE: MCP Server Structure -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Building MCP Apps</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Basic MCP Server Structure</div>
<div class="text-xs text-white/50">MCP server with tools that return component specifications</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex gap-3">
<div class="flex-1 p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-sm font-semibold text-blue-300 mb-1">Key Points</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Return <code>type: "component"</code> in content array</div>
<div>• Component spec includes type, title, data, options</div>
<div>• VS Code detects component type and renders accordingly</div>
</div>
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
<span class="text-green-400">// src/index.ts</span><br/>
<span class="text-purple-400">import</span> &#123; Server &#125; <span class="text-purple-400">from</span> <span class="text-amber-300">"@modelcontextprotocol/sdk/server/index.js"</span>;<br/>
<span class="text-purple-400">import</span> &#123; StdioServerTransport &#125; <span class="text-purple-400">from</span> <span class="text-amber-300">"@modelcontextprotocol/sdk/server/stdio.js"</span>;<br/>
<br/>
<span class="text-purple-400">const</span> server = <span class="text-purple-400">new</span> <span class="text-cyan-400">Server</span>(&#123;<br/>
&nbsp;&nbsp;name: <span class="text-amber-300">"my-mcp-app"</span>,<br/>
&nbsp;&nbsp;version: <span class="text-amber-300">"1.0.0"</span><br/>
&#125;, &#123; capabilities: &#123; tools: &#123;&#125; &#125; &#125;);<br/>
<br/>
<span class="text-green-400">// Define tools</span><br/>
server.<span class="text-cyan-400">setRequestHandler</span>(<span class="text-amber-300">"tools/list"</span>, <span class="text-purple-400">async</span> () => (&#123;<br/>
&nbsp;&nbsp;tools: [&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;name: <span class="text-amber-300">"show-metrics"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;description: <span class="text-amber-300">"Display project metrics as interactive charts"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;inputSchema: &#123; type: <span class="text-amber-300">"object"</span>, properties: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeRange: &#123; type: <span class="text-amber-300">"string"</span>, enum: [<span class="text-amber-300">"day"</span>, <span class="text-amber-300">"week"</span>, <span class="text-amber-300">"month"</span>] &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125; &#125;<br/>
&nbsp;&nbsp;&#125;]<br/>
&#125;));<br/>
<br/>
<span class="text-green-400">// Handle tool calls - return component</span><br/>
server.<span class="text-cyan-400">setRequestHandler</span>(<span class="text-amber-300">"tools/call"</span>, <span class="text-purple-400">async</span> (request) => &#123;<br/>
&nbsp;&nbsp;<span class="text-purple-400">const</span> data = <span class="text-purple-400">await</span> <span class="text-cyan-400">fetchMetrics</span>(request.params.arguments.timeRange);<br/>
&nbsp;&nbsp;<span class="text-purple-400">return</span> &#123; content: [&#123; type: <span class="text-amber-300">"component"</span>, component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"chart"</span>, chartType: <span class="text-amber-300">"line"</span>, data, options: &#123; interactive: <span class="text-purple-400">true</span> &#125;<br/>
&nbsp;&nbsp;&#125; &#125;] &#125;;<br/>
&#125;);<br/>
<br/>
<span class="text-purple-400">await</span> server.<span class="text-cyan-400">connect</span>(<span class="text-purple-400">new</span> <span class="text-cyan-400">StdioServerTransport</span>());
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Callback Handling -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Building MCP Apps</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Callback Handling for Interactive Elements</div>
<div class="text-xs text-white/50">Forms and trees trigger MCP tool calls on user interaction</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-1">Callback Workflow</div>
<div class="text-xs text-gray-300">
Tool returns form component with <code>onSubmit</code> callback → User fills form and clicks submit → VS Code calls specified MCP tool with form data → Tool processes and returns confirmation
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
<span class="text-green-400">// Form tool response</span><br/>
<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;content: [&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"component"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"form"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="text-amber-300">"Create New User"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fields: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"username"</span>, type: <span class="text-amber-300">"text"</span>, required: <span class="text-purple-400">true</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"email"</span>, type: <span class="text-amber-300">"email"</span>, required: <span class="text-purple-400">true</span> &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;submitLabel: <span class="text-amber-300">"Create"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onSubmit: <span class="text-amber-300">"process-user-creation"</span>  <span class="text-green-400">// Callback tool</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&#125;]<br/>
&#125;;<br/>
<br/>
<span class="text-green-400">// Callback handler (different tool)</span><br/>
server.<span class="text-cyan-400">setRequestHandler</span>(<span class="text-amber-300">"tools/call"</span>, <span class="text-purple-400">async</span> (request) => &#123;<br/>
&nbsp;&nbsp;<span class="text-purple-400">if</span> (request.params.name === <span class="text-amber-300">"process-user-creation"</span>) &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">const</span> &#123; username, email &#125; = request.params.arguments;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">await</span> <span class="text-cyan-400">createUser</span>(username, email);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> &#123; content: [&#123; type: <span class="text-amber-300">"text"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: <span class="text-amber-300">`✅ User $&#123;username&#125; created!`</span> &#125;] &#125;;<br/>
&nbsp;&nbsp;&#125;<br/>
&#125;);
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-xs">
<strong class="text-green-300">Pattern:</strong> Separate tools for initial display and callback processing—keeps logic modular and testable
</div>
</div>
</div>

---

<!-- SLIDE: Configuration and Testing -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🏗️ Building MCP Apps</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Configuration in VS Code</div>
<div class="text-xs text-white/50">Add MCP App server to .vscode/mcp.json and test in chat</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex gap-3">
<div class="flex-1 p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-1">Testing Steps</div>
<div class="text-xs text-gray-300 space-y-1">
<div>1. Build MCP server: <code>npm run build</code></div>
<div>2. Restart VS Code or run <code>MCP: Restart Server</code></div>
<div>3. In chat: <code>#my-app show-metrics --timeRange month</code></div>
<div>4. Component renders inline</div>
</div>
</div>
<div class="flex-1 flex flex-col overflow-hidden">
<div class="text-xs font-semibold text-gray-400 mb-1">mcp.json Configuration</div>
<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50">
<div class="text-xs p-2 leading-relaxed font-mono">
&#123;<br/>
&nbsp;&nbsp;<span class="text-cyan-400">"servers"</span>: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-cyan-400">"my-metrics-app"</span>: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-cyan-400">"type"</span>: <span class="text-amber-300">"stdio"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-cyan-400">"command"</span>: <span class="text-amber-300">"node"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-cyan-400">"args"</span>: [<span class="text-amber-300">"$&#123;workspaceFolder&#125;/mcp-apps/dist/index.js"</span>]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&#125;<br/>
&#125;
</div>
</div>
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-lg border border-amber-500/30 text-xs">
<strong class="text-amber-300">Best Practices:</strong> Paginate large datasets, lazy load images, cache queries, use <code>sandbox: true</code> for custom HTML, validate form inputs
</div>
</div>
</div>

---

<!-- SLIDE: Part 3 — Real-World Patterns -->

<SectionOpenerSlide
  :partNumber="3"
  title="Real-World Patterns"
  subtitle="Practical use cases demonstrating MCP Apps value"
  :cards='[
    { icon: "📊", title: "Multi-Component Dashboards", blurb: "Single query returns comprehensive view" },
    { icon: "🔍", title: "Progressive Drill-Down", blurb: "Chart callbacks show detailed tables" },
    { icon: "📝", title: "Form-Driven Workflows", blurb: "Multi-step guided processes" },
  ]'
  :terminal='{ context: "Summary → Details without new prompts", detail: "preserves context, faster iteration" }'
/>
---

<!-- SLIDE: Dashboard Pattern -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💡 Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 4</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Data Exploration Dashboard</div>
<div class="text-xs text-white/50">Single query returns multi-component comprehensive view</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex gap-3">
<div class="flex-1 p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="text-sm font-semibold text-indigo-300 mb-1">Pattern</div>
<div class="text-xs text-gray-300">Return multiple components in single response—chart + table + summary card—eliminating context-switch</div>
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
<span class="text-green-400">// Tool returns multiple components</span><br/>
<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;content: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"component"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"chart"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chartType: <span class="text-amber-300">"bar"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="text-amber-300">"Commits by Author"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: authorStats<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"component"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"table"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="text-amber-300">"Recent Pull Requests"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;columns: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; key: <span class="text-amber-300">"title"</span>, label: <span class="text-amber-300">"Title"</span>, sortable: <span class="text-purple-400">true</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; key: <span class="text-amber-300">"status"</span>, label: <span class="text-amber-300">"Status"</span>, filterable: <span class="text-purple-400">true</span> &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: recentPRs,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options: &#123; pagination: <span class="text-purple-400">true</span>, pageSize: <span class="text-cyan-300">10</span> &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;]<br/>
&#125;;
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-xs">
<strong class="text-green-300">Benefit:</strong> Comprehensive view in single response, no context-switch
</div>
</div>
</div>

---

<!-- SLIDE: Progressive Drill-Down Pattern -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💡 Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 4</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Progressive Drill-Down</div>
<div class="text-xs text-white/50">Chart with callback to show detailed table on interaction</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex gap-3">
<div class="flex-1 p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="text-sm font-semibold text-purple-300 mb-1">Pattern</div>
<div class="text-xs text-gray-300">Initial chart with <code>onClick</code> callback—clicking bar/region triggers MCP tool that returns detailed table</div>
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
<span class="text-green-400">// Initial chart with callback</span><br/>
&#123;<br/>
&nbsp;&nbsp;type: <span class="text-amber-300">"chart"</span>,<br/>
&nbsp;&nbsp;chartType: <span class="text-amber-300">"bar"</span>,<br/>
&nbsp;&nbsp;title: <span class="text-amber-300">"Sales by Region"</span>,<br/>
&nbsp;&nbsp;data: regionSales,<br/>
&nbsp;&nbsp;options: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;interactive: <span class="text-purple-400">true</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;onClick: <span class="text-amber-300">"show-region-details"</span>  <span class="text-green-400">// Callback tool</span><br/>
&nbsp;&nbsp;&#125;<br/>
&#125;<br/>
<br/>
<span class="text-green-400">// Callback returns detailed table</span><br/>
<span class="text-purple-400">if</span> (request.params.name === <span class="text-amber-300">"show-region-details"</span>) &#123;<br/>
&nbsp;&nbsp;<span class="text-purple-400">const</span> &#123; region &#125; = request.params.arguments;<br/>
&nbsp;&nbsp;<span class="text-purple-400">const</span> details = <span class="text-purple-400">await</span> <span class="text-cyan-400">fetchRegionDetails</span>(region);<br/>
<br/>
&nbsp;&nbsp;<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;content: [&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"component"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"table"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="text-amber-300">`$&#123;region&#125; Sales Details`</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;columns: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; key: <span class="text-amber-300">"product"</span>, label: <span class="text-amber-300">"Product"</span>, sortable: <span class="text-purple-400">true</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; key: <span class="text-amber-300">"revenue"</span>, label: <span class="text-amber-300">"Revenue"</span>, type: <span class="text-amber-300">"currency"</span> &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: details,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options: &#123; sortable: <span class="text-purple-400">true</span>, exportable: <span class="text-purple-400">true</span> &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;]<br/>
&nbsp;&nbsp;&#125;;<br/>
&#125;
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-xs">
<strong class="text-green-300">Benefit:</strong> Summary → Details without new prompt, preserves context
</div>
</div>
</div>

---

<!-- SLIDE: Form-Driven Workflow Pattern -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💡 Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">3 of 4</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Form-Driven Workflows</div>
<div class="text-xs text-white/50">Multi-step guided processes with structured input collection</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex gap-3">
<div class="flex-1 p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-xl border border-pink-500/30">
<div class="text-sm font-semibold text-pink-300 mb-1">Pattern</div>
<div class="text-xs text-gray-300">Form collects configuration → Submit callback generates code/scaffold → Response shows result or next form</div>
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
<span class="text-green-400">// Step 1: Collect configuration</span><br/>
&#123;<br/>
&nbsp;&nbsp;type: <span class="text-amber-300">"form"</span>,<br/>
&nbsp;&nbsp;title: <span class="text-amber-300">"Configure New API Endpoint"</span>,<br/>
&nbsp;&nbsp;fields: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"path"</span>, type: <span class="text-amber-300">"text"</span>, required: <span class="text-purple-400">true</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"method"</span>, type: <span class="text-amber-300">"select"</span>, options: [<span class="text-amber-300">"GET"</span>, <span class="text-amber-300">"POST"</span>, <span class="text-amber-300">"PUT"</span>] &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"auth"</span>, type: <span class="text-amber-300">"checkbox"</span>, label: <span class="text-amber-300">"Require authentication"</span> &#125;<br/>
&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;onSubmit: <span class="text-amber-300">"generate-endpoint-code"</span><br/>
&#125;<br/>
<br/>
<span class="text-green-400">// Step 2: Generate and show code</span><br/>
<span class="text-purple-400">if</span> (request.params.name === <span class="text-amber-300">"generate-endpoint-code"</span>) &#123;<br/>
&nbsp;&nbsp;<span class="text-purple-400">const</span> &#123; path, method, auth &#125; = request.params.arguments;<br/>
&nbsp;&nbsp;<span class="text-purple-400">const</span> code = <span class="text-cyan-400">generateEndpointCode</span>(path, method, auth);<br/>
<br/>
&nbsp;&nbsp;<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;content: [&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"text"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: <span class="text-amber-300">`\`\`\`typescript\n$&#123;code&#125;\n\`\`\``</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;]<br/>
&nbsp;&nbsp;&#125;;<br/>
&#125;
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-xs">
<strong class="text-green-300">Benefit:</strong> Structured input collection, guided workflows, validation—100% configuration accuracy
</div>
</div>
</div>

---

<!-- SLIDE: Hierarchical Navigation Pattern -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">💡 Real-World Patterns</span>
<div class="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"></div>
<span class="text-white/40 text-xs ml-1">4 of 4</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Hierarchical Navigation</div>
<div class="text-xs text-white/50">Tree for file/data navigation with selection actions</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="flex gap-3">
<div class="flex-1 p-3 bg-gradient-to-br from-rose-900/30 to-pink-900/30 rounded-xl border border-rose-500/30">
<div class="text-sm font-semibold text-rose-300 mb-1">Pattern</div>
<div class="text-xs text-gray-300">Tree component for file/org structure → Node selection triggers callback → Returns file metadata or preview</div>
</div>
<div class="flex-1 p-3 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-xl border border-pink-500/30">
<div class="text-sm font-semibold text-pink-300 mb-1">Integration Patterns</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• <strong>Custom Agents:</strong> Use MCP Apps for visualization in agent workflows</div>
<div>• <strong>Agent Skills:</strong> Include MCP Apps tools in skill definitions</div>
<div>• <strong>Memory:</strong> Store dashboard preferences for future queries</div>
</div>
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
&#123;<br/>
&nbsp;&nbsp;type: <span class="text-amber-300">"tree"</span>,<br/>
&nbsp;&nbsp;title: <span class="text-amber-300">"Project Files"</span>,<br/>
&nbsp;&nbsp;data: <span class="text-cyan-400">buildFileTree</span>(workspace),<br/>
&nbsp;&nbsp;options: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;expandable: <span class="text-purple-400">true</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;selectable: <span class="text-purple-400">true</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;onSelect: <span class="text-amber-300">"open-file-details"</span><br/>
&nbsp;&nbsp;&#125;<br/>
&#125;<br/>
<br/>
<span class="text-green-400">// Callback shows file metadata</span><br/>
<span class="text-purple-400">if</span> (request.params.name === <span class="text-amber-300">"open-file-details"</span>) &#123;<br/>
&nbsp;&nbsp;<span class="text-purple-400">const</span> &#123; path &#125; = request.params.arguments;<br/>
&nbsp;&nbsp;<span class="text-purple-400">const</span> stats = <span class="text-purple-400">await</span> fs.<span class="text-cyan-400">stat</span>(path);<br/>
&nbsp;&nbsp;<span class="text-purple-400">const</span> preview = <span class="text-purple-400">await</span> fs.<span class="text-cyan-400">readFile</span>(path, <span class="text-amber-300">'utf8'</span>);<br/>
<br/>
&nbsp;&nbsp;<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;content: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; type: <span class="text-amber-300">"text"</span>, text: <span class="text-amber-300">`**File:** $&#123;path&#125;\n**Size:** $&#123;stats.size&#125; bytes`</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; type: <span class="text-amber-300">"text"</span>, text: <span class="text-amber-300">`\`\`\`\n$&#123;preview.slice(0, 500)&#125;\n\`\`\``</span> &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;]<br/>
&nbsp;&nbsp;&#125;;<br/>
&#125;
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-xs">
<strong class="text-green-300">Benefit:</strong> Natural file system navigation, inline previews—no external file manager needed
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Real-World Impact -->

<SectionOpenerSlide
  :partNumber="4"
  title="Real-World Impact"
  subtitle="Three proven use cases with measurable time savings"
  :cards='[
    { icon: "📊", title: "Metrics Dashboards", blurb: "15-20 min → 90 sec (8× more frequent analysis)" },
    { icon: "🔍", title: "Database Queries", blurb: "10 min → 2 min per query (240 min/day saved)" },
    { icon: "🏗️", title: "Scaffolding Forms", blurb: "20 min Slack thread → 3 min form (100% accuracy)" },
  ]'
  :terminal='{ context: "Eliminate export/import cycles", detail: "explore data inline in chat" }'
/>
---

<!-- SLIDE: Use Case 1 System Metrics Dashboard -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Real-World Impact</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Use Case 1: System Metrics Dashboard</div>
<div class="text-xs text-white/50">DevOps team analyzing system metrics across 12 microservices</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30">
<div class="text-sm font-semibold text-red-300 mb-1">❌ Before</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Query Prometheus → Export CSV</div>
<div>• Import to Grafana → Customize charts</div>
<div>• Share screenshot</div>
<div>• <strong>15-20 minutes per analysis</strong></div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="text-sm font-semibold text-green-300 mb-1">✅ After</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• MCP App queries Prometheus</div>
<div>• Returns interactive dashboard inline</div>
<div>• CPU/memory charts + error logs table</div>
<div>• <strong>90 seconds per analysis</strong></div>
</div>
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
<span class="text-green-400">// Multi-component dashboard</span><br/>
<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;content: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123; type: <span class="text-amber-300">"component"</span>, component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"chart"</span>, chartType: <span class="text-amber-300">"line"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="text-amber-300">"CPU Usage"</span>, data: cpuData<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123; type: <span class="text-amber-300">"component"</span>, component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"chart"</span>, chartType: <span class="text-amber-300">"area"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="text-amber-300">"Memory Usage"</span>, data: memData<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123; type: <span class="text-amber-300">"component"</span>, component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"table"</span>, title: <span class="text-amber-300">"Error Logs"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;columns: [...], data: errors<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;&#125;<br/>
&nbsp;&nbsp;]<br/>
&#125;;
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 text-xs">
<strong class="text-blue-300">Outcome:</strong> 15-20 min → 90 sec. Team analyzes metrics 8x more frequently, catches issues 40% faster
</div>
</div>
</div>

---

<!-- SLIDE: Use Case 2 Database Query Results -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Real-World Impact</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">2 of 3</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Use Case 2: Database Query Results</div>
<div class="text-xs text-white/50">Data analysts querying production database with 500-row result sets</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30">
<div class="text-sm font-semibold text-red-300 mb-1">❌ Before</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Query database → 500-row text result</div>
<div>• Copy to Excel for sorting/filtering</div>
<div>• <strong>10 minutes per query</strong></div>
<div>• 30+ queries per day</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="text-sm font-semibold text-green-300 mb-1">✅ After</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• MCP App executes SQL query</div>
<div>• Returns sortable, filterable, exportable table</div>
<div>• <strong>2 minutes per query</strong></div>
<div>• Explore data inline, export only final results</div>
</div>
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
<span class="text-green-400">// Interactive table with all features</span><br/>
<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;content: [&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"component"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"table"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="text-amber-300">"Query Results"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;columns: resultColumns,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: resultRows,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sortable: <span class="text-purple-400">true</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;searchable: <span class="text-purple-400">true</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exportable: <span class="text-purple-400">true</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pagination: <span class="text-purple-400">true</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pageSize: <span class="text-cyan-300">50</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&#125;]<br/>
&#125;;
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 text-xs">
<strong class="text-blue-300">Outcome:</strong> 10 min → 2 min per query. 240 minutes saved per day across 3-person team
</div>
</div>
</div>

---

<!-- SLIDE: Use Case 3 Project Scaffolding Forms -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔧 Real-World Impact</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<span class="text-white/40 text-xs ml-1">3 of 3</span>
</div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-0.5">Use Case 3: Project Scaffolding Forms</div>
<div class="text-xs text-white/50">Developers creating new microservices with configuration questions</div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30">
<div class="text-sm font-semibold text-red-300 mb-1">❌ Before</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• 20-minute Slack thread with infra team</div>
<div>• Manual setup → Review config</div>
<div>• Configuration typos common</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
<div class="text-sm font-semibold text-green-300 mb-1">✅ After</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Form collects structured input with validation</div>
<div>• Callback generates scaffold automatically</div>
<div>• <strong>3-minute form submission</strong></div>
<div>• 100% configuration accuracy</div>
</div>
</div>
</div>

<div class="flex-1 min-h-0 overflow-y-auto max-h-48 bg-gray-950/80 rounded-lg border border-gray-700/50 p-2 text-xs">
<div class="font-mono leading-relaxed">
<span class="text-green-400">// Scaffolding form</span><br/>
<span class="text-purple-400">return</span> &#123;<br/>
&nbsp;&nbsp;content: [&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"component"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;component: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <span class="text-amber-300">"form"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: <span class="text-amber-300">"New Microservice Configuration"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fields: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"serviceName"</span>, type: <span class="text-amber-300">"text"</span>, required: <span class="text-purple-400">true</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pattern: <span class="text-amber-300">"^[a-z-]+$"</span> &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"language"</span>, type: <span class="text-amber-300">"select"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options: [<span class="text-amber-300">"TypeScript"</span>, <span class="text-amber-300">"Python"</span>, <span class="text-amber-300">"Go"</span>] &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"database"</span>, type: <span class="text-amber-300">"select"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options: [<span class="text-amber-300">"PostgreSQL"</span>, <span class="text-amber-300">"MongoDB"</span>, <span class="text-amber-300">"None"</span>] &#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; name: <span class="text-amber-300">"auth"</span>, type: <span class="text-amber-300">"checkbox"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: <span class="text-amber-300">"Requires authentication"</span> &#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onSubmit: <span class="text-amber-300">"generate-scaffold"</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&#125;]<br/>
&#125;;<br/>
<br/>
<span class="text-green-400">// Callback generates repo</span><br/>
<span class="text-purple-400">if</span> (request.params.name === <span class="text-amber-300">"generate-scaffold"</span>) &#123;<br/>
&nbsp;&nbsp;<span class="text-purple-400">const</span> config = request.params.arguments;<br/>
&nbsp;&nbsp;<span class="text-purple-400">await</span> <span class="text-cyan-400">generateScaffold</span>(config);<br/>
&nbsp;&nbsp;<span class="text-purple-400">return</span> &#123; content: [&#123; type: <span class="text-amber-300">"text"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;text: <span class="text-amber-300">`✅ Service $&#123;config.serviceName&#125; created!`</span> &#125;] &#125;;<br/>
&#125;
</div>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 text-xs">
<strong class="text-blue-300">Outcome:</strong> 20-min Slack thread → 3-min form. 100% accuracy. Developers self-serve without infra bottleneck
</div>
</div>
</div>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="ASCII Tables to Interactive Dashboards"
leftLabel="Before"
rightLabel="After"
:leftItems='["Analysis: 15–20 min to read tables", "Queries: 10 min per manual drill-down", "Issue detection: manual scanning", "Dashboard: ASCII static view"]'
:rightItems='["Analysis: 90 sec with visuals", "Queries: 2 min with interactive drill", "Issue detection: 40% faster", "Dashboard: interactive components"]'
:metrics='[
  { value: "15–20 min → 90 sec", detail: "Analysis time" },
  { value: "10 min → 2 min", detail: "Query time" },
  { value: "40%", detail: "Faster detection" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Install MCP Apps Playground", "Add to .vscode/mcp.json", "Test: @mcp-apps-playground show chart demo"]'
  :thisWeek='["Identify one export-to-CSV workflow to replace", "Build MCP server returning table and chart", "Test with 2-3 colleagues and measure time savings"]'
  :thisMonth='["Build a multi-step form workflow", "Implement callback tools for drill-down", "Integrate with a custom agent"]'
  footer="MCP Apps transform chat from text stream to visual workspace. Start with one high-value use case (metrics dashboard, query results, scaffolding forms), measure time savings, and expand from there."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Primary Documentation", color: "cyan", items: [
        { href: "https://code.visualstudio.com/blogs/2026/01/26/mcp-apps-support", label: "MCP Apps Blog Post", description: "Introduction and capabilities" },
        { href: "https://code.visualstudio.com/docs/copilot/customization/mcp-servers", label: "VS Code MCP Servers Docs", description: "Integration guide" },
        { href: "https://modelcontextprotocol.io/", label: "Model Context Protocol Spec", description: "Core protocol details" },
        { href: "https://github.com/modelcontextprotocol/servers", label: "MCP Apps Playground", description: "Working examples" },
        { href: "https://github.com/modelcontextprotocol/typescript-sdk", label: "MCP TypeScript SDK", description: "SDK for building servers" },
        { href: "https://code.visualstudio.com/updates/v1_109#_support-for-mcp-apps", label: "VS Code 1.109 Release Notes", description: "MCP Apps announcement" }
    ] },
    { title: "Related Content", color: "purple", items: [
        { label: "MCP Servers Workshop", description: "MCP fundamentals, tool development, configuration" },
        { label: "Custom Agents", description: "Building agents that leverage MCP Apps for visualization" },
        { label: "Agent Skills", description: "Packaging MCP Apps workflows as reusable skills" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="Rich Interactive UI in Chat"
:cards="[
  { icon: '🎨', value: '5 Components', detail: 'Charts, tables, forms, trees, cards', subdetail: 'For inline visualization and interaction' },
  { icon: '⏱️', value: '10-20 min → 2-3 min', detail: 'Time savings per query', subdetail: 'Eliminating export/import cycles' },
  { icon: '✅', value: '100% Accuracy', detail: 'Validation in forms', subdetail: 'Eliminates configuration errors' },
]"
prompt="Questions? Let's discuss how MCP Apps can streamline your data exploration workflows."
/>
