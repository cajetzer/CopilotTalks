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
status: active
updated: 2026-02-01
---

<!-- SLIDE: Title Slide -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">MCP Apps</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-cyan-500/25">Rich Interactive UI in Chat</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">Transform chat from text stream to visual workspace with inline charts, tables, and forms</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>

<div class="abs-br m-6 flex gap-2">
<span class="text-sm opacity-50">Tech Talk · 40 minutes</span>
</div>

---

<!-- SLIDE: The Core Question -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔓 The Core Question</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 max-w-4xl mx-auto">
<div class="text-2xl font-bold text-cyan-300 mb-4">
"How do I create interactive visualizations and UI components within chat instead of exporting data to external tools?"
</div>
</div>

<div class="mt-8 grid grid-cols-3 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30">
<div class="text-xl mb-1">📊</div>
<div class="font-semibold text-amber-300 mb-1">Data Visualization Trapped in Text</div>
<div class="text-xs opacity-80">Charts and tables as ASCII or markdown—hard to read, impossible to interact with</div>
</div>
<div class="p-3 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
<div class="text-xl mb-1">🔄</div>
<div class="font-semibold text-orange-300 mb-1">Context Switching for Visuals</div>
<div class="text-xs opacity-80">Copy to Excel, export to visualization tools, rebuild charts manually—5-10 min per query</div>
</div>
<div class="p-3 bg-gradient-to-br from-red-900/30 to-purple-900/30 rounded-lg border border-red-500/30">
<div class="text-xl mb-1">⏱️</div>
<div class="font-semibold text-red-300 mb-1">Static Responses</div>
<div class="text-xs opacity-80">Can't explore data differently without crafting new prompts and starting over</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Table of Contents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Table of Contents</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
<div @click="$nav.go(4)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">🧩</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Component Types</div>
<div class="text-sm text-gray-300 mt-1">Charts, tables, forms, trees, cards</div>
<div class="text-xs text-cyan-400/70 mt-2">Five built-in components for most visualization needs</div>
</div>
</div>
<div @click="$nav.go(10)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">🏗️</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Building MCP Apps</div>
<div class="text-sm text-gray-300 mt-1">MCP server implementation</div>
<div class="text-xs text-blue-400/70 mt-2">Complete server structure returning component specs</div>
</div>
</div>
<div @click="$nav.go(13)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">💡</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Real-World Patterns</div>
<div class="text-sm text-gray-300 mt-1">Practical use cases</div>
<div class="text-xs text-indigo-400/70 mt-2">Dashboards, drill-down, forms, navigation</div>
</div>
</div>
<div @click="$nav.go(17)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🔧</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Real-World Impact</div>
<div class="text-sm text-gray-300 mt-1">Three proven use cases</div>
<div class="text-xs text-purple-400/70 mt-2">Metrics dashboards, database queries, scaffolding forms</div>
</div>
</div>
</div>

<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>

---

<!-- SLIDE: Part 1 — Component Types -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-900/15 to-indigo-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-widest uppercase">Part 1</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Component Types</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Five built-in components for most visualization needs</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-cyan-900/30 rounded-xl border border-cyan-500/30">
<div class="text-2xl mb-1">📊</div>
<div class="text-cyan-300 font-semibold">Charts & Tables</div>
<div class="text-xs opacity-70 mt-1">Interactive data visualization with hover, zoom, sort, filter</div>
</div>
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">📝</div>
<div class="text-blue-300 font-semibold">Forms & Trees</div>
<div class="text-xs opacity-70 mt-1">Structured input collection and hierarchical navigation</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🎨</div>
<div class="text-indigo-300 font-semibold">Cards & Custom</div>
<div class="text-xs opacity-70 mt-1">Rich visual blocks and specialized components</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">MCP tools return component specs</span><br />
<span class="text-cyan-300 mt-1 block">↳ VS Code renders them inline</span>
</div>
</div>
</div>

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
<pre class="text-xs p-2 leading-relaxed"><code class="language-typescript">return {
  content: [{
    type: "component",
    component: {
      type: "chart",
      chartType: "bar",
      title: "Monthly Revenue",
      data: [
        { label: "Jan", value: 45000 },
        { label: "Feb", value: 52000 },
        { label: "Mar", value: 61000 }
      ],
      options: {
        interactive: true,
        colors: ["#4CAF50"],
        showLegend: true
      }
    }
  }]
};</code></pre>
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
<pre class="text-xs p-2 leading-relaxed"><code class="language-typescript">return {
  content: [{
    type: "component",
    component: {
      type: "table",
      title: "Active Users",
      columns: [
        { key: "name", label: "Name", sortable: true },
        { key: "role", label: "Role", filterable: true },
        { key: "lastActive", label: "Last Active", 
          sortable: true, type: "date" }
      ],
      data: [
        { name: "Alice", role: "Admin", lastActive: "..." },
        { name: "Bob", role: "User", lastActive: "..." }
      ],
      options: { pagination: true, searchable: true, 
        exportable: true }
    }
  }]
};</code></pre>
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
<pre><code class="language-typescript">// Form example
{ type: "form", title: "Create User",
  fields: [
    { name: "username", type: "text", required: true, 
      pattern: "^[a-zA-Z0-9_]{3,20}$" },
    { name: "role", type: "select", 
      options: ["Admin", "Editor", "Viewer"] }
  ],
  submitLabel: "Create",
  onSubmit: "process-user-creation" // Callback tool
}

// Tree example
{ type: "tree", title: "Project Files",
  data: [
    { label: "src/", icon: "folder", expandable: true,
      children: [
        { label: "index.ts", icon: "typescript", 
          data: { path: "src/index.ts" } }
      ]
    }
  ],
  options: { selectable: true, onSelect: "open-file" }
}</code></pre>
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
<pre><code class="language-typescript">return {
  content: [{
    type: "component",
    component: {
      type: "custom",
      html: `
        &lt;div class="flame-graph"&gt;
          &lt;h3&gt;Performance Flame Graph&lt;/h3&gt;
          &lt;canvas id="flame-canvas" width="800" height="400"&gt;&lt;/canvas&gt;
        &lt;/div&gt;
      `,
      css: `
        .flame-graph {
          padding: 16px;
          background: var(--vscode-editor-background);
        }
        .flame-graph h3 {
          color: var(--vscode-foreground);
        }
      `,
      script: `
        const canvas = document.getElementById('flame-canvas');
        const ctx = canvas.getContext('2d');
        drawFlameGraph(ctx, data);
      `,
      sandbox: true
    }
  }]
};</code></pre>
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

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-indigo-900/15 to-purple-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium tracking-widest uppercase">Part 2</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Building MCP Apps</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Complete MCP server implementation returning components</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
<div class="text-2xl mb-1">🏗️</div>
<div class="text-blue-300 font-semibold">Server Structure</div>
<div class="text-xs opacity-70 mt-1">MCP SDK, tools list, component response</div>
</div>
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">🔄</div>
<div class="text-indigo-300 font-semibold">Callback Handling</div>
<div class="text-xs opacity-70 mt-1">Forms and trees trigger MCP tool calls on interaction</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">⚙️</div>
<div class="text-purple-300 font-semibold">Configuration</div>
<div class="text-xs opacity-70 mt-1">Add to .vscode/mcp.json and test in chat</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Return type: "component" in content array</span><br />
<span class="text-blue-300 mt-1 block">↳ VS Code detects and renders accordingly</span>
</div>
</div>
</div>

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
<pre><code class="language-typescript">// src/index.ts
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server({
  name: "my-mcp-app",
  version: "1.0.0"
}, { capabilities: { tools: {} } });

// Define tools
server.setRequestHandler("tools/list", async () => ({
  tools: [{
    name: "show-metrics",
    description: "Display project metrics as interactive charts",
    inputSchema: {
      type: "object",
      properties: {
        timeRange: { type: "string", enum: ["day", "week", "month"] }
      }
    }
  }]
}));

// Handle tool calls
server.setRequestHandler("tools/call", async (request) => {
  if (request.params.name === "show-metrics") {
    const { timeRange } = request.params.arguments;
    const data = await fetchMetrics(timeRange);

    return {
      content: [{
        type: "component",  // Return component, not text
        component: {
          type: "chart",
          chartType: "line",
          title: `Metrics (${timeRange})`,
          data: data,
          options: { interactive: true }
        }
      }]
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);</code></pre>
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
<pre><code class="language-typescript">// Form tool response
return {
  content: [{
    type: "component",
    component: {
      type: "form",
      title: "Create New User",
      fields: [
        { name: "username", type: "text", required: true },
        { name: "email", type: "email", required: true }
      ],
      submitLabel: "Create",
      onSubmit: "process-user-creation"  // Callback tool name
    }
  }]
};

// Callback handler (different tool)
server.setRequestHandler("tools/call", async (request) => {
  if (request.params.name === "process-user-creation") {
    const { username, email } = request.params.arguments;
    await createUser(username, email);

    return {
      content: [{
        type: "text",
        text: `✅ User ${username} created successfully!`
      }]
    };
  }
});</code></pre>
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
<pre class="text-xs p-2 leading-relaxed"><code class="language-json">{
  "servers": {
    "my-metrics-app": {
      "type": "stdio",
      "command": "node",
      "args": [
        "${workspaceFolder}/mcp-apps/dist/index.js"
      ]
    }
  }
}</code></pre>
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

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-pink-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 rounded-full border border-indigo-400/30 text-indigo-300 text-sm font-medium tracking-widest uppercase">Part 3</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">Real-World Patterns</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Practical use cases demonstrating MCP Apps value</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
<div class="text-2xl mb-1">📊</div>
<div class="text-indigo-300 font-semibold">Multi-Component Dashboards</div>
<div class="text-xs opacity-70 mt-1">Single query returns comprehensive view</div>
</div>
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">🔍</div>
<div class="text-purple-300 font-semibold">Progressive Drill-Down</div>
<div class="text-xs opacity-70 mt-1">Chart callbacks show detailed tables</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">📝</div>
<div class="text-pink-300 font-semibold">Form-Driven Workflows</div>
<div class="text-xs opacity-70 mt-1">Multi-step guided processes</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Summary → Details without new prompts</span><br />
<span class="text-indigo-300 mt-1 block">↳ Preserves context, faster iteration</span>
</div>
</div>
</div>

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
<pre><code class="language-typescript">// Tool returns multiple components
return {
  content: [
    {
      type: "component",
      component: {
        type: "chart",
        chartType: "bar",
        title: "Commits by Author",
        data: authorStats
      }
    },
    {
      type: "component",
      component: {
        type: "table",
        title: "Recent Pull Requests",
        columns: [
          { key: "title", label: "Title", sortable: true },
          { key: "status", label: "Status", filterable: true }
        ],
        data: recentPRs,
        options: { pagination: true, pageSize: 10 }
      }
    }
  ]
};</code></pre>
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
<pre><code class="language-typescript">// Initial chart with callback
{
  type: "chart",
  chartType: "bar",
  title: "Sales by Region",
  data: regionSales,
  options: {
    interactive: true,
    onClick: "show-region-details"  // Callback tool
  }
}

// Callback returns detailed table
if (request.params.name === "show-region-details") {
  const { region } = request.params.arguments;
  const details = await fetchRegionDetails(region);

  return {
    content: [{
      type: "component",
      component: {
        type: "table",
        title: `${region} Sales Details`,
        columns: [
          { key: "product", label: "Product", sortable: true },
          { key: "revenue", label: "Revenue", sortable: true, type: "currency" }
        ],
        data: details,
        options: { sortable: true, exportable: true }
      }
    }]
  };
}</code></pre>
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
<pre><code class="language-typescript">// Step 1: Collect configuration
{
  type: "form",
  title: "Configure New API Endpoint",
  fields: [
    { name: "path", type: "text", required: true },
    { name: "method", type: "select", options: ["GET", "POST", "PUT"] },
    { name: "auth", type: "checkbox", label: "Require authentication" }
  ],
  onSubmit: "generate-endpoint-code"
}

// Step 2: Generate and show code
if (request.params.name === "generate-endpoint-code") {
  const { path, method, auth } = request.params.arguments;
  const code = generateEndpointCode(path, method, auth);

  return {
    content: [{
      type: "text",
      text: `\`\`\`typescript\n${code}\n\`\`\``
    }]
  };
}</code></pre>
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
<pre><code class="language-typescript">{
  type: "tree",
  title: "Project Files",
  data: buildFileTree(workspace),
  options: {
    expandable: true,
    selectable: true,
    onSelect: "open-file-details"
  }
}

// Callback shows file metadata
if (request.params.name === "open-file-details") {
  const { path } = request.params.arguments;
  const stats = await fs.stat(path);
  const preview = await fs.readFile(path, 'utf8');

  return {
    content: [
      { type: "text", text: `**File:** ${path}\n**Size:** ${stats.size} bytes` },
      { type: "text", text: `\`\`\`\n${preview.slice(0, 500)}\n\`\`\`` }
    ]
  };
}</code></pre>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-xs">
<strong class="text-green-300">Benefit:</strong> Natural file system navigation, inline previews—no external file manager needed
</div>
</div>
</div>

---

<!-- SLIDE: Part 4 — Real-World Impact -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-pink-900/15 to-rose-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full border border-purple-400/30 text-purple-300 text-sm font-medium tracking-widest uppercase">Part 4</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent leading-tight">Real-World Impact</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">Three proven use cases with measurable time savings</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
<div class="text-2xl mb-1">📊</div>
<div class="text-purple-300 font-semibold">Metrics Dashboards</div>
<div class="text-xs opacity-70 mt-1">15-20 min → 90 sec (8x more frequent analysis)</div>
</div>
<div class="px-4 py-3 bg-pink-900/30 rounded-xl border border-pink-500/30">
<div class="text-2xl mb-1">🔍</div>
<div class="text-pink-300 font-semibold">Database Queries</div>
<div class="text-xs opacity-70 mt-1">10 min → 2 min per query (240 min/day saved)</div>
</div>
<div class="px-4 py-3 bg-rose-900/30 rounded-xl border border-rose-500/30">
<div class="text-2xl mb-1">🏗️</div>
<div class="text-rose-300 font-semibold">Scaffolding Forms</div>
<div class="text-xs opacity-70 mt-1">20 min Slack thread → 3 min form (100% accuracy)</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">Eliminate export/import cycles</span><br />
<span class="text-purple-300 mt-1 block">↳ Explore data inline in chat</span>
</div>
</div>
</div>

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
<pre><code class="language-typescript">// Multi-component dashboard
return {
  content: [
    { type: "component", component: { 
      type: "chart", chartType: "line", 
      title: "CPU Usage", data: cpuData 
    }},
    { type: "component", component: { 
      type: "chart", chartType: "area", 
      title: "Memory Usage", data: memData 
    }},
    { type: "component", component: { 
      type: "table", title: "Error Logs", 
      columns: [...], data: errors 
    }}
  ]
};</code></pre>
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
<pre><code class="language-typescript">// Interactive table with all features
return {
  content: [{
    type: "component",
    component: {
      type: "table",
      title: "Query Results",
      columns: resultColumns,
      data: resultRows,
      options: {
        sortable: true,
        searchable: true,
        exportable: true,
        pagination: true,
        pageSize: 50
      }
    }
  }]
};</code></pre>
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
<pre><code class="language-typescript">// Scaffolding form
return {
  content: [{
    type: "component",
    component: {
      type: "form",
      title: "New Microservice Configuration",
      fields: [
        { name: "serviceName", type: "text", required: true, 
          pattern: "^[a-z-]+$" },
        { name: "language", type: "select", 
          options: ["TypeScript", "Python", "Go"] },
        { name: "database", type: "select", 
          options: ["PostgreSQL", "MongoDB", "None"] },
        { name: "auth", type: "checkbox", 
          label: "Requires authentication" }
      ],
      onSubmit: "generate-scaffold"
    }
  }]
};

// Callback generates repo
if (request.params.name === "generate-scaffold") {
  const config = request.params.arguments;
  await generateScaffold(config);
  return { content: [{ type: "text", 
    text: `✅ Service ${config.serviceName} created!` }] };
}</code></pre>
</div>

<div class="mt-2 p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 text-xs">
<strong class="text-blue-300">Outcome:</strong> 20-min Slack thread → 3-min form. 100% accuracy. Developers self-serve without infra bottleneck
</div>
</div>
</div>

---

<!-- SLIDE: What You Can Do Today -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-cyan-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-emerald-600/80 to-cyan-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r from-emerald-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 rounded-xl border border-emerald-500/30">
<div class="text-lg mb-1">⚡</div>
<div class="font-semibold text-emerald-300 mb-1">Immediate (15 min)</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Install MCP Apps Playground</div>
<div>• Add to .vscode/mcp.json</div>
<div>• Test: <code>@mcp-apps-playground show chart demo</code></div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30">
<div class="text-lg mb-1">🏗️</div>
<div class="font-semibold text-cyan-300 mb-1">Short-Term (1 hour)</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Identify one "export to CSV" workflow</div>
<div>• Build MCP server returning table/chart</div>
<div>• Test with 2-3 colleagues, measure savings</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="text-lg mb-1">🚀</div>
<div class="font-semibold text-blue-300 mb-1">Advanced (2-4 hours)</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• Build multi-step form workflow</div>
<div>• Implement callback tools for drill-down</div>
<div>• Integrate with custom agent</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl border border-blue-500/30">
<div class="font-semibold text-blue-300 text-sm mb-1">Key Takeaway</div>
<div class="text-xs text-gray-300">
MCP Apps transform chat from text stream to visual workspace. Start with one high-value use case (metrics dashboard, query results, scaffolding forms), measure time savings, and expand from there.
</div>
</div>
</div>
</div>

---

<!-- SLIDE: References -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 References</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3 text-sm">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
<div class="font-semibold text-blue-300 mb-1">Primary Documentation</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• <a href="https://code.visualstudio.com/blogs/2026/01/26/mcp-apps-support" target="_blank" class="text-cyan-400 hover:underline">MCP Apps Blog Post</a> — Introduction and capabilities</div>
<div>• <a href="https://code.visualstudio.com/docs/copilot/customization/mcp-servers" target="_blank" class="text-cyan-400 hover:underline">VS Code MCP Servers Docs</a> — Integration guide</div>
<div>• <a href="https://modelcontextprotocol.io/" target="_blank" class="text-cyan-400 hover:underline">Model Context Protocol Spec</a> — Core protocol details</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30">
<div class="font-semibold text-indigo-300 mb-1">Additional Resources</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• <a href="https://github.com/modelcontextprotocol/servers" target="_blank" class="text-cyan-400 hover:underline">MCP Apps Playground</a> — Working examples</div>
<div>• <a href="https://github.com/modelcontextprotocol/typescript-sdk" target="_blank" class="text-cyan-400 hover:underline">MCP TypeScript SDK</a> — SDK for building servers</div>
<div>• <a href="https://code.visualstudio.com/updates/v1_109#_support-for-mcp-apps" target="_blank" class="text-cyan-400 hover:underline">VS Code 1.109 Release Notes</a> — MCP Apps announcement</div>
</div>
</div>
</div>

<div class="mt-3 p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
<div class="font-semibold text-purple-300 text-sm mb-1">Related Content</div>
<div class="text-xs text-gray-300 space-y-1">
<div>• <strong>MCP Servers Workshop</strong> — MCP fundamentals, tool development, configuration</div>
<div>• <strong>Custom Agents</strong> — Building agents that leverage MCP Apps for visualization</div>
<div>• <strong>Agent Skills</strong> — Packaging MCP Apps workflows as reusable skills</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Thank You -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>

<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-48" alt="" /></div>
<img src="./sdp-logo.png" class="w-48 relative" alt="SDP Logo" />
</div>

<h1 class="!text-5xl !font-bold !mt-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Thank You!</h1>

<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">MCP Apps: Rich Interactive UI in Chat</span>
</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-lg">5 Components</div>
<div class="text-gray-300 mt-2 text-xs">Charts, tables, forms, trees, cards for inline visualization</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-bold text-lg">10-20 min → 2-3 min</div>
<div class="text-gray-300 mt-2 text-xs">Time savings per query eliminating export/import cycles</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-bold text-lg">100% Accuracy</div>
<div class="text-gray-300 mt-2 text-xs">Validation in forms eliminates configuration errors</div>
</div>
</div>

<div class="mt-8 text-center text-sm opacity-70 relative z-10">
Questions? Let's discuss how MCP Apps can streamline your data exploration workflows.
</div>

<div class="mt-6 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
