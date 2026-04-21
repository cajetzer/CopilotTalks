---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Component Test Deck
  Visual validation for all 13 content components
drawings:
  persist: false
transition: slide-left
title: Component Test Deck
module: tech-talks/component-test
section: Agentic Engineering
status: active
updated: 2026-04-21
mdc: true
---

<script setup>
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import TitleSlide from './components/structure/TitleSlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import ProblemSolutionOutcomeSlide from './components/ProblemSolutionOutcomeSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import CodeWithFeaturesSlide from './components/CodeWithFeaturesSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
import WorkflowShowdownStepsSlide from './components/WorkflowShowdownStepsSlide.vue'
import MaturityJourneyRoadmapSlide from './components/MaturityJourneyRoadmapSlide.vue'
import AITerminalTranscriptSlide from './components/AITerminalTranscriptSlide.vue'
import MaturityLevelDrilldownSlide from './components/MaturityLevelDrilldownSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="Component Test Deck"
  subtitle="Visual validation for all 13 content components"
  tagline="BeforeAfterMetrics · BeforeAfterPanels · ProblemSolutionOutcome · TwoColPaired · ThreeColumnCard · FourCardGrid · CodeWithFeatures · HeroStat · WorkflowShowdown · MaturityJourneyRoadmap · AITerminalTranscript · MaturityLevelDrilldown · FrameworkMappingRows"
  meta="Internal · Component Library · 2026-04-21"
/>

---

<!-- SLIDE: BeforeAfterMetrics Opener -->
<SectionOpenerSlide
  :partNumber="1"
  title="BeforeAfterMetricsSlide"
  subtitle="Two-column before/after with a row of 2–4 quantified metric tiles below"
  :cards='[
    { icon: "🔴", title: "Before (red)", blurb: "Hardcoded semantic pain color" },
    { icon: "🟢", title: "After (green)", blurb: "Hardcoded semantic outcome color" },
    { icon: "📊", title: "Metric tiles", blurb: "2–4 tiles using section card palette" }
  ]'
  :terminal='{ context: "Without MCP: context passed manually every session", detail: "With MCP: context fetched automatically from live sources" }'
/>

---

<!-- SLIDE: BeforeAfterMetricsSlide -->
<BeforeAfterMetricsSlide
  :partNumber="1"
  pillIcon="⚡"
  pillLabel="MCP Tools · Impact"
  title="What Changes When You Add MCP Tools"
  :before='{ header: "Without MCP Tools", items: ["Context must be passed manually in every prompt", "Agents restart from scratch with no persistent memory", "Tool configuration repeated every session"] }'
  :after='{ header: "With MCP Tools", items: ["Context fetched automatically from live sources", "Persistent memory survives across agent sessions", "One-time tool configuration, reused everywhere"] }'
  :metrics='[
    { value: "4×", label: "Fewer manual context handoffs" },
    { value: "73%", label: "Reduction in repeated setup time" },
    { value: "3.1×", label: "Faster to a useful first response" }
  ]'
  :insight='{ icon: "💡", text: "MCP turns agents from request-response tools into persistent collaborators." }'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: BeforeAfterPanels Opener -->
<SectionOpenerSlide
  :partNumber="2"
  title="BeforeAfterPanelsSlide"
  subtitle="Two-column before/after without metric tiles — pure panel opposition"
  :cards='[
    { icon: "🔴", title: "Before (red)", blurb: "Same semantic color as MetricsSlide" },
    { icon: "🟢", title: "After (green)", blurb: "Same semantic outcome color" },
    { icon: "📝", title: "No metrics row", blurb: "Use when numbers are not the story" }
  ]'
  :terminal='{ context: "Manual review: rebuild context from scratch each time", detail: "Copilot review: AI pre-scans and summarizes changes upfront" }'
/>

---

<!-- SLIDE: BeforeAfterPanelsSlide -->
<BeforeAfterPanelsSlide
  :partNumber="2"
  pillIcon="🔍"
  pillLabel="Code Review · Process"
  title="Code Review Without and With Copilot"
  :before='{ header: "Manual Review", items: [
    { title: "Reviewer reads entire diff cold", detail: "Context must be rebuilt from scratch every time" },
    { title: "Style and logic comments mixed", detail: "Hard to know what blocks merge vs. what is optional" },
    { title: "Back-and-forth threads on suggestions", detail: "Authors and reviewers lose track across dozens of comments" }
  ]}'
  :after='{ header: "Copilot Code Review", items: [
    { title: "AI pre-scans and summarizes changes", detail: "Reviewer arrives knowing what to focus on" },
    { title: "Critical bugs separated from style nits", detail: "Blocking vs. informational clearly distinguished" },
    { title: "One-click accept or dismiss with explanation", detail: "Author sees the why, not just the what" }
  ]}'
  :insight='{ icon: "💡", text: "AI code review compresses the feedback loop from hours to minutes." }'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: ProblemSolutionOutcome Opener -->
<SectionOpenerSlide
  :partNumber="3"
  title="ProblemSolutionOutcomeSlide"
  subtitle="3-column narrative: hardcoded red → blue → green (never section-colored)"
  :cards='[
    { icon: "🔴", title: "Problem (red)", blurb: "Pain state — always red regardless of section" },
    { icon: "🔵", title: "Solution (blue)", blurb: "The mechanism — always blue" },
    { icon: "🟢", title: "Outcome (green)", blurb: "Result — always green. Optional metrics row." }
  ]'
  :terminal='{ context: "Semantic colors are hardcoded — not section-themed", detail: "red = problem, blue = solution, green = outcome — always" }'
/>

---

<!-- SLIDE: ProblemSolutionOutcomeSlide -->
<ProblemSolutionOutcomeSlide
  :partNumber="3"
  pillIcon="🧠"
  pillLabel="Memory · Architecture"
  title="Context Loss Is a Solved Problem"
  :problem='{ header: "Context Disappears", items: [
    "Sessions end and all working knowledge is lost",
    "New agent has no memory of prior decisions",
    "Documentation is always an afterthought"
  ]}'
  :solution='{ header: "CLAUDE.md Auto-Compact", items: [
    "CLAUDE.md persists decisions across sessions",
    "Copilot reads prior context on start automatically",
    "Key choices captured during the work, not after"
  ]}'
  :outcome='{ header: "Continuity", items: [
    "Work picks up exactly where it left off",
    "No manual summary or handoff required",
    "Agent quality compounds each session"
  ], metrics: [{ value: "87%", label: "Decisions auto-persisted without extra effort" }]}'
  :insight='{ icon: "💡", text: "The session is the unit of work — not the tab, not the prompt." }'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: TwoColPairedConcepts Opener -->
<SectionOpenerSlide
  :partNumber="4"
  title="TwoColPairedConceptsSlide"
  subtitle="Two non-opposed concepts in section cool palette — no red/green semantics"
  :cards='[
    { icon: "🎨", title: "Section palette", blurb: "Left = card[0], right = card[1]" },
    { icon: "🤝", title: "Non-opposed", blurb: "Both concepts are complementary, not conflicting" },
    { icon: "💻", title: "Optional code", blurb: "Either column can embed a code block" }
  ]'
  :terminal='{ context: "Two complementary concepts — no opposition", detail: "Both columns take section card colors, not red/green" }'
/>

---

<!-- SLIDE: TwoColPairedConceptsSlide -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="🧠"
  pillLabel="Copilot Memory · Two Layers"
  title="What Copilot Remembers and How"
  :left='{ header: "Memory Store", icon: "🗄️", items: [
    { title: "Structured facts about the repo", detail: "Architecture decisions, naming conventions" },
    { title: "Prior solutions and patterns", detail: "What worked, what was tried and rejected" },
    { title: "Team preferences and constraints", detail: "Style choices codified once, applied always" }
  ]}'
  :right='{ header: "Work Instructions", icon: "📋", items: [
    { title: "How to run tests and builds", detail: "Exact commands with flags and env vars" },
    { title: "Deploy steps and rollback rules", detail: "Who approves, what gates must pass" },
    { title: "Code review guidelines", detail: "What reviewers always flag, what they never block on" }
  ]}'
  :insight='{ icon: "💡", text: "Memory store = what we know. Instructions = how we work. Both live in CLAUDE.md." }'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: ThreeColumnCard Opener -->
<SectionOpenerSlide
  :partNumber="1"
  title="ThreeColumnCardSlide"
  subtitle="Exactly 3 options, tiers, or capabilities using section card progression"
  :cards='[
    { icon: "1️⃣", title: "Card 1 (card[0])", blurb: "First section card style" },
    { icon: "2️⃣", title: "Card 2 (card[1])", blurb: "Second section card style" },
    { icon: "3️⃣", title: "Card 3 (card[2])", blurb: "Third section card style" }
  ]'
  :terminal='{ context: "columns prop: exactly 3 items required", detail: "Each card uses one of the three section card styles in order" }'
/>

---

<!-- SLIDE: ThreeColumnCardSlide -->
<ThreeColumnCardSlide
  :partNumber="1"
  pillIcon="🤖"
  pillLabel="Agent Roles · Taxonomy"
  title="Three Roles Every Agent Can Play"
  :columns='[
    { icon: "📝", title: "Author", description: "Writes code, tests, and documentation from a task description", items: ["Generates implementation from spec", "Adds tests alongside new code", "Updates docs to match changes"] },
    { icon: "🔍", title: "Reviewer", description: "Scans diffs for bugs, security gaps, and convention violations", items: ["Finds logic errors before merge", "Flags missing edge case coverage", "Enforces style automatically"] },
    { icon: "🚀", title: "Deployer", description: "Runs CI, monitors builds, and coordinates rollbacks", items: ["Triggers pipelines on green tests", "Reads logs and diagnoses failures", "Rolls back when error rate spikes"] }
  ]'
  :insight='{ icon: "💡", text: "The same agent can shift roles mid-task — author → reviewer → fixer in one session." }'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: FourCardGrid Opener -->
<SectionOpenerSlide
  :partNumber="2"
  title="FourCardGridSlide"
  subtitle="2×2 taxonomy grid using all 4 section card styles — perfect for capabilities"
  :cards='[
    { icon: "🟦", title: "2×2 grid layout", blurb: "cards prop: exactly 4 items required" },
    { icon: "🎨", title: "Full section palette", blurb: "All 4 section card styles rendered — one per card" },
    { icon: "💡", title: "Optional insight bar", blurb: "Single takeaway line across the bottom" }
  ]'
  :terminal='{ context: "cards prop: exactly 4 items required", detail: "All four section card styles rendered — one per card" }'
/>

---

<!-- SLIDE: FourCardGridSlide -->
<FourCardGridSlide
  :partNumber="2"
  pillIcon="⚙️"
  pillLabel="CI/CD Pipeline · Four Gates"
  title="Four Gates Every Copilot PR Must Pass"
  :cards='[
    { icon: "🔧", title: "Build", description: "Compile, lint, and type-check — automated on every push with zero tolerance for warnings" },
    { icon: "🧪", title: "Test", description: "Unit, integration, and e2e suites run in parallel — coverage gates enforced per PR" },
    { icon: "🔒", title: "Security", description: "Dependency audits and SAST scans on every PR — critical findings block merge" },
    { icon: "📦", title: "Deploy", description: "Staged rollout with automatic rollback triggered on error rate spike above threshold" }
  ]'
  :insight='{ icon: "💡", text: "These four gates are why L3 (Standardized) repos can safely enable autonomous agent PRs." }'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: CodeWithFeatures Opener -->
<SectionOpenerSlide
  :partNumber="3"
  title="CodeWithFeaturesSlide"
  subtitle="Code block paired with 2–4 feature cards — two layouts: left or top"
  :cards='[
    { icon: "⬅️", title: "codePosition: left", blurb: "Code ~60% left, cards stacked right" },
    { icon: "⬆️", title: "codePosition: top", blurb: "Code on top, cards in a row below" },
    { icon: "🎨", title: "Section palette", blurb: "Feature cards use section card colors" }
  ]'
  :terminal='{ context: "codePosition: left — code 60%, feature cards stacked right", detail: "codePosition: top — code on top, cards in a row below" }'
/>

---

<!-- SLIDE: CodeWithFeaturesSlide — left layout -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="⚙️"
  pillLabel="Setup Steps · Configuration"
  title="Copilot Agent Setup in 4 Lines"
  codePosition="left"
  :code='{ language: "yaml", filename: ".github/copilot-setup-steps.yml", content: "steps:\n  - uses: actions/checkout@v4\n  - uses: github/copilot-setup-steps@v1\n  - name: Install dependencies\n    run: npm ci\n  - name: Build project\n    run: npm run build\n  - name: Run test suite\n    run: npm test" }'
  :features='[
    { icon: "⚡", title: "Pre-installed tools", description: "npm, Go, Python ready on agent start — no setup delay" },
    { icon: "🔒", title: "Secrets scoped per run", description: "No credentials bleed between sessions or users" },
    { icon: "🔁", title: "Reproducible environment", description: "Same setup every time the agent runs — no surprises" }
  ]'
  :insight='{ icon: "💡", text: "Setup steps run once per agent session — front-load expensive installs here." }'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: CodeWithFeaturesSlide — top layout -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="🤖"
  pillLabel="MCP Config · copilot-mcp.json"
  title="Registering an MCP Server"
  codePosition="top"
  :code='{ language: "json", filename: ".copilot/mcp.json", content: "{\n  \"mcpServers\": {\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@modelcontextprotocol/server-github\"]\n    }\n  }\n}" }'
  :features='[
    { icon: "📂", title: "File system access", description: "Read and write repo files without shell escaping" },
    { icon: "🔍", title: "GitHub search", description: "Query issues, PRs, and code across repositories" },
    { icon: "📡", title: "Live API calls", description: "Hit external services without leaving the agent session" },
    { icon: "💾", title: "Persistent state", description: "MCP servers hold context across tool calls" }
  ]'
  :progressDots='{ current: 2, total: 2, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: HeroStat Opener -->
<SectionOpenerSlide
  :partNumber="4"
  title="HeroStatSlide"
  subtitle="One oversized statistic dominates the left — 2–4 context cards explain it on the right"
  :cards='[
    { icon: "🔢", title: "Hero value", blurb: "text-8xl gradient matched to section" },
    { icon: "📝", title: "Hero label", blurb: "One sentence explaining the number" },
    { icon: "🃏", title: "Supporting cards", blurb: "2–4 items from section card palette" }
  ]'
  :terminal='{ context: "hero prop: { value, label, source } — all three fields required", detail: "Hero gradient auto-matches section palette — no color prop needed" }'
/>

---

<!-- SLIDE: HeroStatSlide -->
<HeroStatSlide
  :partNumber="4"
  pillIcon="📊"
  pillLabel="Industry Adoption · 2024"
  title="AI Coding Tools Have Crossed the Chasm"
  subtitle="The majority of professional developers now use AI assistance weekly"
  :hero='{ value: "46%", label: "of developers use AI coding tools daily", source: "Source: Stack Overflow Developer Survey 2024" }'
  :supporting='[
    { icon: "⚡", title: "Code generation", description: "Most common use — write boilerplate and scaffolding fast" },
    { icon: "🔍", title: "Code explanation", description: "Second use — understand unfamiliar code without asking colleagues" },
    { icon: "🐛", title: "Debugging", description: "Third use — find the error before you reach for grep or logs" },
    { icon: "📝", title: "Documentation", description: "Fourth use — capture intent and context immediately after shipping" }
  ]'
  :insight='{ icon: "💡", text: "Adoption doubles every 18 months — teams not investing now face a compounding capability gap." }'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Section — WorkflowShowdownStepsSlide -->
<SectionOpenerSlide
  :partNumber="1"
  title="WorkflowShowdownStepsSlide"
  subtitle="Side-by-side numbered step comparison with semantic red/green coloring"
  :cards='[
    { icon: "❌", title: "Before", blurb: "Traditional workflow pain" },
    { icon: "✅", title: "After", blurb: "AI-assisted outcome" },
    { icon: "📊", title: "Summary metric", blurb: "Optional bottom bar" }
  ]'
  :terminal='{ context: "steps prop: 2–5 items, each with left and right side", detail: "Red = before pain, green = after outcome — always hardcoded" }'
/>

---

<!-- SLIDE: WorkflowShowdownStepsSlide — Part 1 -->
<WorkflowShowdownStepsSlide
  :partNumber="1"
  pillIcon="🎯"
  pillLabel="WorkflowShowdownStepsSlide"
  title="Traditional Workflow vs. Plan Mode"
  subtitle="From trial-and-error to collaborative strategy"
  leftLabel="Traditional Workflow"
  rightLabel="With Plan Mode"
  :steps='[
    {
      left:  { label: "Make request", note: "Describe what you need" },
      right: { label: "Make request", note: "Describe what you need" }
    },
    {
      left:  { label: "AI generates solution", note: "Assumes intent, picks one interpretation" },
      right: { label: "AI asks questions", note: "Clarifies intent before acting" }
    },
    {
      left:  { label: "You review and fix", note: "Discover wrong assumptions" },
      right: { label: "Collaborate on plan", note: "Review strategy before any code" }
    },
    {
      left:  { label: "Repeat until it works", note: "Average: 8 attempts" },
      right: { label: "Execute with confidence", note: "Ambiguity resolved upfront" }
    }
  ]'
  :outcomeLeft='{ icon: "🔄", label: "Repeat ×8 — average attempts before success" }'
  :outcomeRight='{ icon: "✓", label: "Done in ~2 attempts" }'
  summaryMetric="8 debugging attempts → 2 with Plan Mode"
  :progressDots='{ current: 1, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: WorkflowShowdownStepsSlide — Part 2 (section 2 colors) -->
<WorkflowShowdownStepsSlide
  :partNumber="2"
  pillIcon="🔍"
  pillLabel="WorkflowShowdownStepsSlide · Part 2 palette"
  title="Manual Review vs. AI Code Review"
  subtitle="How AI changes the review cycle"
  leftLabel="Manual Review Process"
  rightLabel="Copilot Code Review"
  :steps='[
    {
      left:  { label: "Reviewer reads entire diff", note: "Context must be rebuilt from scratch" },
      right: { label: "AI scans diff instantly", note: "Full context loaded automatically" }
    },
    {
      left:  { label: "Add inline comments", note: "Style, logic, and bugs mixed together" },
      right: { label: "Prioritized findings", note: "Critical bugs separated from style nits" }
    },
    {
      left:  { label: "Author addresses manually", note: "Back-and-forth comment threads" },
      right: { label: "Author accepts/dismisses", note: "One-click resolution with explanation" }
    }
  ]'
  :outcomeLeft='{ icon: "⏱️", label: "45 min average review cycle" }'
  :outcomeRight='{ icon: "⚡", label: "12 min average — 73% faster" }'
  :progressDots='{ current: 2, total: 2, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Section — MaturityJourneyRoadmapSlide -->
<SectionOpenerSlide
  :partNumber="2"
  title="MaturityJourneyRoadmapSlide"
  subtitle="Horizontal stage progression with optional TARGET badge"
  :cards='[
    { icon: "🗺️", title: "Journey framing", blurb: "Audience locates themselves" },
    { icon: "🎯", title: "TARGET badge", blurb: "Highlights the aspiration stage" },
    { icon: "➡️", title: "2–5 stages", blurb: "Palette auto-distributed" }
  ]'
  :terminal='{ context: "stages prop: 2–5 items — palette distributes automatically", detail: "Set isTarget: true on one stage to show the TARGET badge" }'
/>

---

<!-- SLIDE: MaturityJourneyRoadmapSlide — 5 stages -->
<MaturityJourneyRoadmapSlide
  :partNumber="2"
  pillIcon="📐"
  pillLabel="AgentRC Maturity Model"
  title="5 Levels of Repository Readiness"
  subtitle="Each level unlocks a new class of agent capability — they compound"
  :stages='[
    { label: "L1", name: "Functional",    description: "Reliable scripts and baseline CI signals",           icon: "🔧", isTarget: false },
    { label: "L2", name: "Documented",    description: "Explicit conventions agents can follow",              icon: "📖", isTarget: false },
    { label: "L3", name: "Standardized",  description: "CI/CD policies and auditable review paths",          icon: "⚙️", isTarget: false },
    { label: "L4", name: "Optimized",     description: "MCP tools and multi-step agent workflows",           icon: "🤖", isTarget: false },
    { label: "L5", name: "Autonomous",    description: "Agents as primary producers, machine-paced",         icon: "🚀", isTarget: true  }
  ]'
  caption="L1–L4 are prerequisites, not stepping stones — each level must stay healthy as you reach for L5"
  :progressDots='{ current: 1, total: 1, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: MaturityJourneyRoadmapSlide — 3 stages (palette distribution) -->
<MaturityJourneyRoadmapSlide
  :partNumber="3"
  pillIcon="🚀"
  pillLabel="Adoption Curve"
  title="Three Phases of Copilot Adoption"
  subtitle="Each phase changes how your team works, not just what tools they use"
  :stages='[
    { label: "Phase 1", name: "Assist",     description: "AI completes code and answers questions inline",                       icon: "💬", isTarget: false },
    { label: "Phase 2", name: "Delegate",   description: "AI takes full tasks with human review at checkpoints",                 icon: "🤝", isTarget: false },
    { label: "Phase 3", name: "Orchestrate",description: "AI coordinates agents across complex, multi-repo work autonomously",   icon: "🧠", isTarget: true  }
  ]'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Section — AITerminalTranscriptSlide -->
<SectionOpenerSlide
  :partNumber="3"
  title="AITerminalTranscriptSlide"
  subtitle="Cinematic terminal conversation: prompt · thinking · response · outcome"
  :cards='[
    { icon: "💻", title: "Terminal grammar", blurb: "Fixed semantic colors always look right" },
    { icon: "🤔", title: "Thinking beat", blurb: "Creates suspense before the answer" },
    { icon: "✅", title: "Outcome lines", blurb: "Green checkmarks deliver payoff" }
  ]'
  :terminal='{ context: "transcript types: prompt, user, thinking, response, divider, outcome", detail: "Terminal colors are always hardcoded — not section-themed" }'
/>

---

<!-- SLIDE: AITerminalTranscriptSlide -->
<AITerminalTranscriptSlide
  :partNumber="3"
  pillIcon="🎯"
  pillLabel="The Terminal Sees Reality"
  title="Plan Mode in Action: Docker Debugging"
  subtitle="Root cause in 8 minutes instead of 45"
  :transcript='[
    { type: "prompt",   text: "copilot" },
    { type: "user",     text: "Debug why the backend container will not start" },
    { type: "thinking", label: "🤔 Copilot (Plan Mode):" },
    { type: "response", lines: ["Before I start, a few questions:", "1. Check docker-compose config, logs, or both?", "2. Include environment variable analysis?", "3. Any recent changes to services or network?"] },
    { type: "user",     text: "Start with logs, then check config if needed" },
    { type: "thinking", label: "🤔 Copilot:" },
    { type: "response", lines: ["Here is my plan:", "1. Retrieve container logs for backend service", "2. Analyze error patterns and stack traces", "3. Inspect docker-compose.yml if logs suggest config issue", "4. Check environment variables if auth errors found"] },
    { type: "divider" },
    { type: "outcome",  text: "Found: Port 5000 mapped to 5001 in docker-compose.yml" },
    { type: "outcome",  text: "Fix applied. Container starts successfully." }
  ]'
  footerMetric="8 min → 45 min reduction"
  :progressDots='{ current: 1, total: 2, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: AITerminalTranscriptSlide — second instance (section 4 colors) -->
<AITerminalTranscriptSlide
  :partNumber="4"
  pillIcon="⚡"
  pillLabel="Scaling the Reach"
  title="Fleet Fan-Out: Parallel Agent Execution"
  subtitle="One task becomes many — run simultaneously"
  :transcript='[
    { type: "prompt",   text: "copilot /fleet" },
    { type: "user",     text: "Audit the authentication module across all three services" },
    { type: "thinking", label: "🤔 Copilot:" },
    { type: "response", lines: ["Spawning 3 parallel subagents:", "  Agent A → auth-service (security audit)", "  Agent B → user-service (token validation)", "  Agent C → api-gateway (session handling)"] },
    { type: "divider" },
    { type: "outcome",  text: "Agent A: JWT expiry not enforced in auth-service — CRITICAL" },
    { type: "outcome",  text: "Agent B: Refresh token rotation missing — HIGH" },
    { type: "outcome",  text: "Agent C: Session timeout not propagated — MEDIUM" },
    { type: "divider" },
    { type: "outcome",  text: "3 services audited in parallel. 8 min vs 27 min serial." }
  ]'
  footerMetric="2.75x faster with parallel subagents"
  :progressDots='{ current: 2, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Section — MaturityLevelDrilldownSlide -->
<SectionOpenerSlide
  :partNumber="4"
  title="MaturityLevelDrilldownSlide"
  subtitle="Deep-dive into one level: blockquote + 3-column diagnostic grid"
  :cards='[
    { icon: "🔴", title: "Where Time Is Lost", blurb: "Hardcoded red — semantic pain color" },
    { icon: "🟢", title: "What Changes", blurb: "Hardcoded green — semantic outcome color" },
    { icon: "🔵", title: "Key Checks", blurb: "Uses chrome.accent — section-harmonized" }
  ]'
  :terminal='{ context: "quote + 3 columns: lossItems, changeItems, checkItems", detail: "Red (losses) and green (changes) hardcoded; checks use chrome.accent" }'
/>

---

<!-- SLIDE: MaturityLevelDrilldownSlide — L1 -->
<MaturityLevelDrilldownSlide
  :partNumber="1"
  pillIcon="📐"
  pillLabel="AgentRC Maturity Model"
  title="🔧 Functional"
  subtitle="Safe for AI-assisted development with close human review"
  quote="A repo at Level 1 is safe for AI-assisted development — a human can clone, build, and test it with confidence. Agents can produce output, but need close human review because there are no enforced conventions or CI gates to catch mistakes automatically."
  :lossItems='["PRs fail due to fragile build paths", "CI babysitting and setup and debug time", "Agent PRs arrive without context, require back-and-forth"]'
  :changeItems='["Build and test paths become explicit and measurable", "CI setup and debug time are reduced", "Linting removes style review churn"]'
  :checkItems='["Linting configured", "Build and test scripts documented", "README present", "Lockfile committed", "copilot-instructions.md in place"]'
  :progressDots='{ current: 1, total: 5, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: MaturityLevelDrilldownSlide — L2 (different section color) -->
<MaturityLevelDrilldownSlide
  :partNumber="2"
  pillIcon="📐"
  pillLabel="AgentRC Maturity Model"
  title="📖 Documented"
  subtitle="Meaningful AI autonomy with convention awareness"
  quote="A repo at Level 2 is safe for AI-assisted development with meaningful autonomy. Agents understand conventions, have a CI gate to catch regressions, and can be connected to live tools via MCP. Human review is still essential, but the volume of rework comments drops significantly."
  :lossItems='["AI output violates repo conventions", "Author rework and reviewers re-explaining norms", "Agents act on underspecified issues, miss requirements"]'
  :changeItems='["Repo-specific AI instructions in place", "Instruction consistency enforced", "Author rewrites and review cycles reduced"]'
  :checkItems='["CI workflow configured", "CODEOWNERS present", "PR template present", "Issue templates defined", "MCP config present"]'
  :progressDots='{ current: 2, total: 5, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Section — FrameworkMappingRowsSlide -->
<SectionOpenerSlide
  :partNumber="1"
  title="FrameworkMappingRowsSlide"
  subtitle="Labeled row taxonomy using section card palette — the slide audiences photograph"
  :cards='[
    { icon: "🏷️", title: "Label (left)", blurb: "Fixed-width concept anchor" },
    { icon: "📝", title: "Description (center)", blurb: "The explanation" },
    { icon: "🏷️", title: "Tag (right)", blurb: "Monospace feature label" }
  ]'
  :terminal='{ context: "rows prop: 2–6 items — { label, description, tag }", detail: "Row colors cycle through section card palette automatically" }'
/>

---

<!-- SLIDE: FrameworkMappingRowsSlide — 5 rows -->
<FrameworkMappingRowsSlide
  :partNumber="1"
  pillIcon="🧠"
  pillLabel="The Distance Model"
  title="Five Distances Copilot CLI Removes"
  subtitle="Each section of this talk removes a different kind of distance between you and the work"
  :rows='[
    { label: "Intent",     description: "AI stops guessing and starts asking — Plan Mode clarifies before acting",   tag: "Plan Mode"          },
    { label: "Complexity", description: "One task becomes many, run in parallel across independent workstreams",      tag: "/fleet fan-out"     },
    { label: "Context",    description: "Session survives compaction and remembers decisions across sessions",        tag: "Auto-compact"       },
    { label: "Time",       description: "Work outlives your attention — background delegation frees your terminal",   tag: "& delegation"       },
    { label: "Geography",  description: "AI meets the problem where it lives — remote sessions cross any distance",  tag: "--remote"           }
  ]'
  footnote="The session is the unit of work, not the shell"
  :progressDots='{ current: 1, total: 1, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: FrameworkMappingRowsSlide — section 3 colors -->
<FrameworkMappingRowsSlide
  :partNumber="3"
  pillIcon="🔑"
  pillLabel="MCP Tool Categories"
  title="Four Classes of MCP Tools"
  subtitle="Each category gives agents a different kind of reach into your environment"
  :rows='[
    { label: "Read",      description: "Fetch resources: files, database records, API responses, search results",   tag: "get / query"     },
    { label: "Write",     description: "Mutate state: create files, insert rows, post messages, trigger webhooks",  tag: "create / update" },
    { label: "Execute",   description: "Run processes: shell commands, test runners, build pipelines, scripts",     tag: "run / exec"      },
    { label: "Observe",   description: "Stream events: logs, metrics, notifications, real-time system state",       tag: "subscribe / tail" }
  ]'
  :progressDots='{ current: 1, total: 1, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="Thank You"
  subtitle="Component Test Deck — All 13 Content Components"
  :cards='[
    { icon: "🧱", value: "13", detail: "Content components", subdetail: "All validated with visual error guards" },
    { icon: "🎨", value: "4", detail: "Section palettes", subdetail: "Chrome auto-matched via partNumber 1–4" },
    { icon: "⛔", value: "100%", detail: "Prop validation coverage", subdetail: "Bad props show a visible red error overlay" }
  ]'
  prompt="Use this deck as a reference when authoring new slides — every component pattern is shown in context."
/>
