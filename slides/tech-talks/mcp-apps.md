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
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
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
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="🧩"
  pillLabel="Component Types"
  title="Charts: Interactive Data Visualization"
  codePosition="left"
  :code='{ language: "typescript", filename: "chart-tool.ts", content: "return {\n  content: [{\n    type: \"component\",\n    component: {\n      type: \"chart\",\n      chartType: \"bar\",\n      title: \"Monthly Revenue\",\n      data: [\n        { label: \"Jan\", value: 45000 },\n        { label: \"Feb\", value: 52000 },\n        { label: \"Mar\", value: 61000 }\n      ],\n      options: { interactive: true, colors: [\"#4CAF50\"] }\n    }\n  }]\n};" }'
  :features='[
    { icon: "📊", title: "Chart Types", description: "Bar, line, pie, scatter, area — full range of chart types" },
    { icon: "🖱️", title: "Hover & Interactivity", description: "Hover details with exact values; zoom and drill-down support" },
    { icon: "🎨", title: "Custom Colors", description: "Custom color palettes per chart and series" },
    { icon: "📐", title: "Responsive Layout", description: "Responsive sizing adapts to chat panel width automatically" }
  ]'
  :insight='{ icon: "✅", text: "Use when: Presenting time-series data, comparisons, distributions, trends" }'
  :progressDots='{ current: 1, total: 5, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Tables Component -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="🧩"
  pillLabel="Component Types"
  title="Tables: Interactive Data Grids"
  codePosition="left"
  :code='{ language: "typescript", filename: "table-tool.ts", content: "return {\n  content: [{\n    type: \"component\",\n    component: {\n      type: \"table\",\n      title: \"Active Users\",\n      columns: [\n        { key: \"name\", label: \"Name\", sortable: true },\n        { key: \"role\", label: \"Role\", filterable: true },\n        { key: \"lastActive\", label: \"Last Active\", sortable: true }\n      ],\n      data: [{ name: \"Alice\", role: \"Admin\" }, ...],\n      options: { pagination: true, searchable: true }\n    }\n  }]\n};" }'
  :features='[
    { icon: "↕️", title: "Sort & Filter", description: "Click column headers to sort; dropdown filters for filterable columns" },
    { icon: "🔍", title: "Full-Text Search", description: "Search across all columns simultaneously" },
    { icon: "📄", title: "Pagination", description: "Configurable rows per page: 10, 25, 50, or 100" },
    { icon: "📤", title: "CSV Export", description: "One-click export of current view or full dataset" }
  ]'
  :insight='{ icon: "✅", text: "Use when: Displaying >20 rows where users need to find, sort, or filter records" }'
  :progressDots='{ current: 2, total: 5, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Forms Component -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="🧩"
  pillLabel="Component Types"
  title="Forms, Trees & Cards: Structured Input and Navigation"
  codePosition="left"
  :code='{ language: "typescript", content: "// Form example\n{ type: \"form\", title: \"Create User\",\n  fields: [\n    { name: \"username\", type: \"text\", required: true },\n    { name: \"role\", type: \"select\",\n      options: [\"Admin\", \"Editor\", \"Viewer\"] }\n  ],\n  onSubmit: \"process-user-creation\"\n}\n\n// Tree example\n{ type: \"tree\", title: \"Project Files\",\n  data: [\n    { label: \"src/\", icon: \"folder\", expandable: true,\n      children: [{ label: \"index.ts\" }] }\n  ],\n  options: { selectable: true, onSelect: \"open-file\" }\n}" }'
  :features='[
    { icon: "📝", title: "Forms: Structured Input", description: "Type-aware fields with validation. Types: text, email, number, select, checkbox, radio. Submit callback triggers MCP tool." },
    { icon: "🌳", title: "Trees & Cards", description: "Trees: expandable hierarchical views for file systems and org charts. Cards: grid, list, carousel layouts with images and actions." }
  ]'
  :insight='{ icon: "✅", text: "Forms — multi-field input with validation; Trees — navigating hierarchies; Cards — presenting options or galleries" }'
  :progressDots='{ current: 3, total: 5, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Custom Components -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="🧩"
  pillLabel="Component Types"
  title="Custom Components: Maximum Flexibility"
  codePosition="left"
  :code='{ language: "typescript", filename: "custom-tool.ts", content: "return {\n  content: [{\n    type: \"component\",\n    component: {\n      type: \"custom\",\n      html: \"<div class=flame-graph>...</div>\",\n      css: \".flame-graph { padding: 16px; }\",\n      script: \"drawFlameGraph(ctx, data);\",\n      sandbox: true\n    }\n  }]\n};" }'
  :features='[
    { icon: "🔒", title: "Security Constraints", description: "Sandboxed iframe execution. No VS Code API access. CSP restrictions apply. Use VS Code CSS variables for theme consistency." },
    { icon: "⚡", title: "When to Use", description: "Built-in components do not cover specialized needs: flame graphs, network diagrams, custom D3 visualizations, canvas rendering." }
  ]'
  :progressDots='{ current: 4, total: 5, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

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
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="🏗️"
  pillLabel="Building MCP Apps"
  title="Basic MCP Server Structure"
  codePosition="left"
  :code='{ language: "typescript", filename: "src/index.ts", content: "import { Server } from \"@modelcontextprotocol/sdk/server/index.js\";\nimport { StdioServerTransport } from \"@modelcontextprotocol/sdk/server/stdio.js\";\n\nconst server = new Server({\n  name: \"my-mcp-app\", version: \"1.0.0\"\n}, { capabilities: { tools: {} } });\n\n// Define tools\nserver.setRequestHandler(\"tools/list\", async () => ({\n  tools: [{\n    name: \"show-metrics\",\n    description: \"Display metrics as interactive charts\",\n    inputSchema: { type: \"object\", properties: {\n      timeRange: { type: \"string\", enum: [\"day\", \"week\", \"month\"] }\n    } }\n  }]\n}));\n\n// Return component\nserver.setRequestHandler(\"tools/call\", async (request) => {\n  const data = await fetchMetrics(request.params.arguments.timeRange);\n  return { content: [{ type: \"component\", component: {\n    type: \"chart\", chartType: \"line\", data,\n    options: { interactive: true }\n  } }] };\n});\n\nawait server.connect(new StdioServerTransport());" }'
  :features='[
    { icon: "📤", title: "Return Component Type", description: "Return type: component in content array to signal VS Code to render a widget" },
    { icon: "🔧", title: "Component Spec", description: "Each spec includes type, title, data, and options — VS Code detects component type and renders accordingly" },
    { icon: "🔌", title: "Standard MCP Pattern", description: "tools/list declares tools; tools/call handler returns component specs alongside regular text responses" }
  ]'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Callback Handling -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="🏗️"
  pillLabel="Building MCP Apps"
  title="Callback Handling for Interactive Elements"
  codePosition="left"
  :code='{ language: "typescript", content: "// Form tool response\nreturn {\n  content: [{\n    type: \"component\",\n    component: {\n      type: \"form\",\n      title: \"Create New User\",\n      fields: [\n        { name: \"username\", type: \"text\", required: true },\n        { name: \"email\", type: \"email\", required: true }\n      ],\n      submitLabel: \"Create\",\n      onSubmit: \"process-user-creation\"\n    }\n  }]\n};\n\n// Callback handler\nif (request.params.name === \"process-user-creation\") {\n  const { username, email } = request.params.arguments;\n  await createUser(username, email);\n  return { content: [{ type: \"text\",\n    text: \"User \" + username + \" created!\" }] };\n}" }'
  :features='[
    { icon: "🔄", title: "Callback Workflow", description: "Tool returns form with onSubmit callback. User fills and submits. VS Code calls the callback tool with form data. Tool processes and responds." },
    { icon: "🧩", title: "Modular Design", description: "Separate tools for initial display and callback processing — keeps logic modular and testable" }
  ]'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Configuration and Testing -->
<CodeWithFeaturesSlide
  :partNumber="2"
  pillIcon="🏗️"
  pillLabel="Building MCP Apps"
  title="Configuration in VS Code"
  codePosition="left"
  :code='{ language: "json", filename: ".vscode/mcp.json", content: "{\n  \"servers\": {\n    \"my-metrics-app\": {\n      \"type\": \"stdio\",\n      \"command\": \"node\",\n      \"args\": [\"${workspaceFolder}/mcp-apps/dist/index.js\"]\n    }\n  }\n}" }'
  :features='[
    { icon: "🔧", title: "Testing Steps", description: "1. Build: npm run build  2. Restart VS Code or run MCP: Restart Server  3. In chat: #my-app show-metrics  4. Component renders inline" },
    { icon: "⚡", title: "Best Practices", description: "Paginate large datasets, lazy-load images, cache queries, use sandbox: true for custom HTML, validate all form inputs" }
  ]'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

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
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="💡"
  pillLabel="Real-World Patterns"
  title="Data Exploration Dashboard"
  codePosition="left"
  :code='{ language: "typescript", content: "// Tool returns multiple components\nreturn {\n  content: [\n    {\n      type: \"component\",\n      component: {\n        type: \"chart\",\n        chartType: \"bar\",\n        title: \"Commits by Author\",\n        data: authorStats\n      }\n    },\n    {\n      type: \"component\",\n      component: {\n        type: \"table\",\n        title: \"Recent Pull Requests\",\n        columns: [\n          { key: \"title\", label: \"Title\", sortable: true },\n          { key: \"status\", label: \"Status\", filterable: true }\n        ],\n        data: recentPRs,\n        options: { pagination: true, pageSize: 10 }\n      }\n    }\n  ]\n};" }'
  :features='[
    { icon: "🗄️", title: "Multi-Component Response", description: "Return multiple components in a single tool response — chart + table + summary card" },
    { icon: "🚀", title: "No Context Switch", description: "Comprehensive view in a single response — no external dashboards or tab-switching required" }
  ]'
  :insight='{ icon: "💡", text: "Single query → comprehensive dashboard. No context-switch to external tools." }'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Progressive Drill-Down Pattern -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="💡"
  pillLabel="Real-World Patterns"
  title="Progressive Drill-Down"
  codePosition="left"
  :code='{ language: "typescript", content: "// Initial chart with callback\n{\n  type: \"chart\",\n  chartType: \"bar\",\n  title: \"Sales by Region\",\n  data: regionSales,\n  options: {\n    interactive: true,\n    onClick: \"show-region-details\"\n  }\n}\n\n// Callback returns detailed table\nif (request.params.name === \"show-region-details\") {\n  const { region } = request.params.arguments;\n  const details = await fetchRegionDetails(region);\n  return {\n    content: [{\n      type: \"component\",\n      component: {\n        type: \"table\",\n        title: region + \" Sales Details\",\n        columns: [\n          { key: \"product\", label: \"Product\", sortable: true },\n          { key: \"revenue\", label: \"Revenue\", type: \"currency\" }\n        ],\n        data: details,\n        options: { sortable: true, exportable: true }\n      }\n    }]\n  };\n}" }'
  :features='[
    { icon: "📊", title: "Interactive Callbacks", description: "Chart with onClick callback — clicking a bar or region triggers an MCP tool call" },
    { icon: "🔍", title: "Drill-Down Pattern", description: "Callback returns detailed table for the selected region — summary to details without a new prompt" }
  ]'
  :insight='{ icon: "💡", text: "Summary to details without a new prompt — preserves context and enables faster iteration" }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>
---

<!-- SLIDE: Form-Driven Workflow Pattern -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="💡"
  pillLabel="Real-World Patterns"
  title="Form-Driven Workflows"
  codePosition="left"
  :code='{ language: "typescript", content: "// Step 1: Collect configuration\n{\n  type: \"form\",\n  title: \"Configure New API Endpoint\",\n  fields: [\n    { name: \"path\", type: \"text\", required: true },\n    { name: \"method\", type: \"select\", options: [\"GET\", \"POST\", \"PUT\"] },\n    { name: \"auth\", type: \"checkbox\", label: \"Require authentication\" }\n  ],\n  onSubmit: \"generate-endpoint-code\"\n}\n\n// Step 2: Generate and show code\nif (request.params.name === \"generate-endpoint-code\") {\n  const { path, method, auth } = request.params.arguments;\n  const code = generateEndpointCode(path, method, auth);\n  return {\n    content: [{ type: \"text\",\n      text: \"Generated code returned as markdown\" }]\n  };\n}" }'
  :features='[
    { icon: "📝", title: "Multi-Step Form Flow", description: "Form collects configuration — submit callback generates code or scaffold — response shows result or next form" },
    { icon: "✅", title: "Structured Accuracy", description: "Validated input collection with 100% configuration accuracy — eliminates typos from free-text prompts" }
  ]'
  :insight='{ icon: "💡", text: "Structured input collection with validation — 100% configuration accuracy" }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Hierarchical Navigation Pattern -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="💡"
  pillLabel="Real-World Patterns"
  title="Hierarchical Navigation"
  codePosition="left"
  :code='{ language: "typescript", content: "{\n  type: \"tree\",\n  title: \"Project Files\",\n  data: buildFileTree(workspace),\n  options: {\n    expandable: true,\n    selectable: true,\n    onSelect: \"open-file-details\"\n  }\n}\n\n// Callback shows file metadata\nif (request.params.name === \"open-file-details\") {\n  const { path } = request.params.arguments;\n  const stats = await fs.stat(path);\n  const preview = await fs.readFile(path, \"utf8\");\n  return {\n    content: [\n      { type: \"text\", text: \"File: \" + path },\n      { type: \"text\", text: preview.slice(0, 500) }\n    ]\n  };\n}" }'
  :features='[
    { icon: "🌳", title: "Tree Navigation Pattern", description: "Tree component for file or org structure. Node selection triggers callback that returns file metadata or preview." },
    { icon: "🔗", title: "Integration Patterns", description: "Custom agents use MCP Apps for visualization; agent skills include MCP Apps tools; memory stores dashboard preferences." }
  ]'
  :insight='{ icon: "✅", text: "Natural file system navigation and inline previews — no external file manager needed" }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

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
<BeforeAfterMetricsSlide
  :partNumber="4"
  pillIcon="🔧"
  pillLabel="Real-World Impact"
  title="Use Case 1: System Metrics Dashboard"
  :before='{ header: "Before", items: ["Query Prometheus → Export CSV", "Import to Grafana → Customize charts", "Share screenshot link", "15-20 minutes per analysis"] }'
  :after='{ header: "After", items: ["MCP App queries Prometheus directly", "Returns interactive dashboard inline", "CPU/memory charts + error logs table", "90 seconds per analysis"] }'
  :metrics='[
    { value: "15-20 min → 90 sec", label: "Analysis time" },
    { value: "8×", label: "More frequent analysis" },
    { value: "40%", label: "Faster issue detection" }
  ]'
  :insight='{ icon: "💡", text: "DevOps team analyzing metrics across 12 microservices — catches issues faster without leaving VS Code" }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Use Case 2 Database Query Results -->
<BeforeAfterMetricsSlide
  :partNumber="4"
  pillIcon="🔧"
  pillLabel="Real-World Impact"
  title="Use Case 2: Database Query Results"
  :before='{ header: "Before", items: ["Query database → 500-row text result", "Copy to Excel for sorting and filtering", "10 minutes per query", "30+ queries per day"] }'
  :after='{ header: "After", items: ["MCP App executes SQL query directly", "Returns sortable, filterable, exportable table", "2 minutes per query", "Explore data inline, export only final results"] }'
  :metrics='[
    { value: "10 min → 2 min", label: "Per query" },
    { value: "240 min/day", label: "Saved across 3-person team" },
    { value: "30+ queries", label: "Per day explored inline" }
  ]'
  :insight='{ icon: "💡", text: "Data analysts querying production database with 500-row result sets — no more Excel copy-paste" }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Use Case 3 Project Scaffolding Forms -->
<BeforeAfterMetricsSlide
  :partNumber="4"
  pillIcon="🔧"
  pillLabel="Real-World Impact"
  title="Use Case 3: Project Scaffolding Forms"
  :before='{ header: "Before", items: ["20-minute Slack thread with infra team", "Manual setup → Review config", "Configuration typos common"] }'
  :after='{ header: "After", items: ["Form collects structured input with validation", "Callback generates scaffold automatically", "3-minute form submission", "100% configuration accuracy"] }'
  :metrics='[
    { value: "20 min → 3 min", label: "Setup time" },
    { value: "100%", label: "Configuration accuracy" },
    { value: "0", label: "Infra team bottlenecks" }
  ]'
  :insight='{ icon: "💡", text: "Developers self-serve without infra bottleneck — validated forms eliminate configuration errors" }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

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
