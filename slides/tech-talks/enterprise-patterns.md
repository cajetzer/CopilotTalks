---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Scaling GitHub Copilot Across Organizations
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: Scaling GitHub Copilot Across Organizations - Enterprise Patterns for AI Adoption
module: tech-talks/enterprise-patterns
mdc: true
section: Copilot Tools
status: active
updated: 2026-06-24
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
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
</script>

<!-- SLIDE: Title Slide -->
<TitleSlide
title="Scaling GitHub Copilot"
subtitle="Enterprise Patterns for AI Adoption"
tagline="Transform individual team success into organizational capability"
meta="Tech Talk · 60 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="How do I scale GitHub Copilot from pilot teams to organization-wide adoption?"
subtext="Consistent standards, governance, and measurable ROI."
highlight="The transition from pilot success to organizational capability requires deliberate infrastructure."
:cards='[
  { icon: "🏢", title: "Engineering Leaders Scaling AI Adoption", description: "Move from successful pilot to measurable, org-wide Copilot capability" },
  { icon: "⚙️", title: "Platform Teams Standardizing AI Patterns", description: "Shared instructions, skills, and agent patterns deployed across all teams" },
  { icon: "📈", title: "CTO Offices Proving ROI with Data", description: "Replace anecdotes and surveys with data-driven measurement and benchmarks" },
  { icon: "🔄", title: "Repeated Reinvention", description: "50 teams rebuilding the same patterns — shared infrastructure eliminates this waste" },
  { icon: "🧱", title: "Knowledge Silos", description: "Success in one team does not compound — shared primitives change everything" },
  { icon: "📊", title: "ROI Measurement", description: "Anecdotes vs. data — dashboards and metrics make impact quantifiable at scale" }
]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🏢", title: "Organization-Wide Standards", subtitle: "Custom instructions at scale", blurb: "One config, hundreds of developers aligned automatically", slide: 4 },
    { icon: "🧠", title: "Skills & Knowledge Bases", subtitle: "Institutional knowledge that scales", blurb: "Domain expertise that loads on demand", slide: 8 },
    { icon: "🔐", title: "Governance & Licensing", subtitle: "Control, compliance, and cost optimization", blurb: "Seat management, policy controls, audit trails", slide: 11 },
    { icon: "📊", title: "Scaling & Measurement", subtitle: "Adoption, ROI, and federated governance", blurb: "Self-service onboarding, metrics, 16× knowledge ROI", slide: 15 },
  ]'
/>
---

<!-- SLIDE: Part 1 — Organization-Wide Standards -->

<SectionOpenerSlide
  :partNumber="1"
  title="Organization-Wide Standards"
  subtitle="Custom instructions at scale"
  :cards='[
    { icon: "🏢", title: "Org Instructions", blurb: "Define once, apply everywhere" },
    { icon: "🔁", title: "16× ROI", blurb: "Knowledge multiplication across teams" },
    { icon: "⚡", title: "Instant Updates", blurb: "One change propagates to all repos" },
  ]'
  :terminal='{ context: "Senior architect knowledge reaches 500 developers", detail: "instantly — baseline consistency without per-repo config" }'
/>
---

<!-- SLIDE: The Traditional Problem -->
<BeforeAfterMetricsSlide
  :partNumber="1"
  pillIcon="🏢"
  pillLabel="Organization-Wide Standards"
  title="The Traditional Polyrepo Chaos"
  :before='{ header: "😩 Before: Fragmented Standards", items: [
    { title: "repo-1: Team A\u2019s security patterns", detail: "Each team interprets standards independently" },
    { title: "repo-2: Team B\u2019s different approach", detail: "No shared baseline, no consistency" },
    { title: "repo-3: Team C\u2019s interpretation", detail: "50 repos × 40 hours wasted = 2,000 hrs" }
  ] }'
  :after='{ header: "🚀 After: Organization-Level", items: [
    { title: "Security baseline defined once at org level", detail: "One change propagates everywhere" },
    { title: "Auto-applied to all 500+ developers", detail: "Zero per-repo configuration needed" },
    { title: "Repos add domain-specific overrides only", detail: "180 hrs invested \u2192 2,900+ hrs saved" }
  ] }'
  :metrics='[
    { value: "2,000 hrs", label: "Wasted on fragmented per-repo standards" },
    { value: "16\u00d7", label: "ROI on org-level investment" },
    { value: "500+", label: "Developers aligned automatically" }
  ]'
  :insight='{ icon: "💡", text: "Define security, frameworks, and quality requirements once at org level \u2192 every team inherits automatically" }'
/>

---

<!-- SLIDE: What to Standardize -->
<FourCardGridSlide
  :partNumber="1"
  pillIcon="🏢"
  pillLabel="Organization-Wide Standards"
  title="Organization Custom Instructions Template"
  :cards='[
    { icon: "🔒", title: "Security & Compliance", description: "OAuth 2.0 with PKCE, AES-256 for PII at rest, Azure Key Vault for secrets, parameterized queries exclusively" },
    { icon: "⚙️", title: "Framework Preferences", description: "React 18+ with TypeScript, Node.js 20 LTS, Jest + Playwright (80% coverage), Prettier + ESLint org config" },
    { icon: "♿", title: "Quality Standards", description: "WCAG 2.1 AA compliance, keyboard navigation, screen reader support across all UI" },
    { icon: "⚡", title: "Performance Budgets", description: "Under 2s load on 3G, Lighthouse score above 90, 200KB gzipped bundle budget" }
  ]'
  :insight='{ icon: "💡", text: "These four domains cover 90%+ of what teams reinvent independently. Define once in org instructions \u2192 every repo inherits automatically." }'
/>

---

<!-- SLIDE: Monorepo Nested Playbooks -->
<CodeWithFeaturesSlide
  :partNumber="1"
  pillIcon="🏢"
  pillLabel="Organization-Wide Standards"
  title="Monorepo Pattern: Nested AGENTS.md Playbooks"
  :code='{ language: "text", filename: "repo/", content: "repo/\n\u251c\u2500\u2500 .github/\n\u2502   \u251c\u2500\u2500 copilot-instructions.md   \u2190 Repo constitution\n\u2502   \u2514\u2500\u2500 instructions/\n\u2502       \u251c\u2500\u2500 api.instructions.md   \u2190 Additive, glob-based\n\u2502       \u2514\u2500\u2500 infra.instructions.md\n\u251c\u2500\u2500 AGENTS.md                      \u2190 Global guardrails\n\u251c\u2500\u2500 frontend/\n\u2502   \u2514\u2500\u2500 AGENTS.md                  \u2190 Frontend playbook\n\u251c\u2500\u2500 backend/\n\u2502   \u2514\u2500\u2500 AGENTS.md                  \u2190 Backend playbook\n\u2514\u2500\u2500 infra/\n    \u2514\u2500\u2500 AGENTS.md                  \u2190 Infra playbook" }'
  codePosition="left"
  :features='[
    { icon: "🏛️", title: "Repository Selector", description: "Org/repo instructions apply globally — standards that every developer in the repo inherits" },
    { icon: "📄", title: "File Pattern Selector", description: ".instructions.md files activate by glob pattern — only when editing matching file types" },
    { icon: "📁", title: "Directory Selector", description: "Nearest AGENTS.md applies to that subdirectory — frontend/backend/infra each have their own playbook" }
  ]'
  :insight='{ icon: "💡", text: "Rule of thumb: Copilot-specific standards in .github/ hierarchy, portable agent playbooks in AGENTS.md files" }'
/>

---

<!-- SLIDE: Part 2 — Skills & Knowledge Bases -->

<SectionOpenerSlide
  :partNumber="2"
  title="Skills & Knowledge Bases"
  subtitle="Institutional knowledge that scales"
  :cards='[
    { icon: "🧠", title: "Org Skills (GA)", blurb: "Encode domain expertise once" },
    { icon: "📚", title: "Knowledge Bases", blurb: "Multi-repo context (Enterprise)" },
    { icon: "🔄", title: "Central Updates", blurb: "Change once, propagate everywhere" },
  ]'
  :terminal='{ context: "From documentation (often outdated) to executable systems", detail: "senior architect knowledge reaches 500 developers instantly" }'
/>
---

<!-- SLIDE: Organizational Agent Skills -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-2">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🧠 Skills & Knowledge Bases</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<span class="text-white/40 text-xs ml-1">1 of 2</span>
</div>
</div>
<div class="relative z-10 mb-2">
<div class="text-lg font-bold text-white mb-0.5">Organizational Agent Skills (Now GA)</div>
<div class="text-xs text-white/50">Centrally versioned domain expertise available across all repos</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-3">
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">🏛️</span>
<div class="text-sm font-semibold text-blue-300">Domain-Specific Expertise</div>
</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-blue-950/60 border border-blue-500/30 rounded text-blue-300">payment-processing</code> PCI compliance validation</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-blue-950/60 border border-blue-500/30 rounded text-blue-300">healthcare-data</code> HIPAA data handling rules</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-blue-950/60 border border-blue-500/30 rounded text-blue-300">architecture-review</code> System design standards</span>
</div>
<div class="flex items-start gap-2">
<span class="text-blue-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-blue-950/60 border border-blue-500/30 rounded text-blue-300">performance-budgets</code> Load time & resource limits</span>
</div>
</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
<div class="flex items-center gap-2 mb-2">
<span class="text-xl">⚗️</span>
<div class="text-sm font-semibold text-indigo-300">Cross-Cutting Concerns</div>
</div>
<div class="space-y-1 text-xs">
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-indigo-950/60 border border-indigo-500/30 rounded text-indigo-300">security-scanner</code> Vulnerability pattern detection</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-indigo-950/60 border border-indigo-500/30 rounded text-indigo-300">accessibility-check</code> WCAG compliance validation</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-indigo-950/60 border border-indigo-500/30 rounded text-indigo-300">cost-estimator</code> Cloud resource cost prediction</span>
</div>
<div class="flex items-start gap-2">
<span class="text-indigo-400 mt-0.5">•</span>
<span class="opacity-80"><code class="px-1.5 py-0.5 bg-indigo-950/60 border border-indigo-500/30 rounded text-indigo-300">tech-debt-analyzer</code> Maintainability scoring</span>
</div>
</div>
</div>
</div>

<div class="mt-3 space-y-2">
<div class="grid grid-cols-3 gap-2">
<div class="p-2 bg-blue-900/20 rounded-lg border border-blue-500/20 text-center">
<div class="text-lg mb-0.5">📝</div>
<div class="text-xs font-semibold text-blue-300">1. Author</div>
<div class="text-xs text-white/50 mt-0.5">Define in <code class="bg-blue-950/60 px-1 rounded text-blue-400">.github/skills/</code></div>
</div>
<div class="p-2 bg-indigo-900/20 rounded-lg border border-indigo-500/20 text-center">
<div class="text-lg mb-0.5">🏢</div>
<div class="text-xs font-semibold text-indigo-300">2. Publish</div>
<div class="text-xs text-white/50 mt-0.5">Push to org — versioned & reviewed</div>
</div>
<div class="p-2 bg-purple-900/20 rounded-lg border border-purple-500/20 text-center">
<div class="text-lg mb-0.5">⚡</div>
<div class="text-xs font-semibold text-purple-300">3. Propagate</div>
<div class="text-xs text-white/50 mt-0.5">Instant in all repos — zero config</div>
</div>
</div>
<div class="p-2 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-500/20">
<div class="text-xs text-blue-300/90"><strong>The Multiplication Effect:</strong> Update once → propagates to all <strong class="text-blue-200">500+</strong> developers immediately → expertise compounds at org scale</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Copilot Knowledge Bases -->
<BeforeAfterMetricsSlide
  :partNumber="2"
  pillIcon="🧠"
  pillLabel="Skills & Knowledge Bases"
  title="Knowledge Bases: Multi-Repo Context (Enterprise)"
  :before='{ header: "🔍 The Problem", items: [
    { title: "Microservices split across 10\u201350 repos", detail: "Copilot in a single repo lacks cross-service context" },
    { title: "Manual reference of 5\u201310 dependency repos", detail: "Developers context-switch constantly for answers" },
    { title: "Documentation scattered across locations", detail: "Architecture knowledge is inaccessible during coding" }
  ] }'
  :after='{ header: "📚 Knowledge Base Solution", items: [
    { title: "Payment Platform KB spans 5 repos", detail: "payment-api, payment-processor, fraud-detection, compliance-rules, platform-docs" },
    { title: "Query across all repos simultaneously", detail: "\u201cHow does fraud detection integrate with payment flow?\u201d \u2014 answered with full cross-repo context" },
    { title: "Invoke from any repo with @kb", detail: "Zero per-repo configuration, automatic cross-reference" }
  ] }'
  :metrics='[
    { value: "50 repos", label: "Max per knowledge base" },
    { value: "Enterprise", label: "Tier required" },
    { value: "@kb", label: "Invoke from anywhere" }
  ]'
  :insight='{ icon: "💬", text: "Sample queries: \u201cWhere is auth handled across our microservices?\u201d \u201cWhat compliance rules apply to user data?\u201d \u201cWhich services depend on the pricing engine?\u201d" }'
/>

---

<!-- SLIDE: Part 3 — Governance & Licensing -->

<SectionOpenerSlide
  :partNumber="3"
  title="Governance & Licensing"
  subtitle="Control, compliance, and cost optimization"
  :cards='[
    { icon: "🔐", title: "Model Governance", blurb: "Control which AI models teams access" },
    { icon: "💰", title: "Flexible Licensing", blurb: "30-40% cost reduction via smart deployment" },
    { icon: "✅", title: "Compliance Auto", blurb: "Encode regulatory requirements" },
  ]'
  :terminal='{ context: "Balance AI capability with enterprise requirements", detail: "cost optimization + risk reduction + audit readiness" }'
/>
---

<!-- SLIDE: Model Governance & Auto Selection -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="🔐"
  pillLabel="Governance & Licensing"
  title="Model Governance & Auto Selection"
  :left='{ header: "🔒 Policy Framework", items: [
    { title: "Restrict high-cost models to approved use cases", detail: "Leadership retains budget control" },
    { title: "Enforce compliance — data residency, audit trails", detail: "Regulatory requirements automatically met" },
    { title: "Set budget controls on premium model requests", detail: "Cost predictability across the org" },
    { title: "Track model usage org-wide for cost analysis", detail: "Full visibility into AI spend" }
  ] }'
  :right='{ header: "💰 Cost Optimization", items: [
    { title: "Routine completion \u2192 Fast, cost-effective models", detail: "Auto-routed to smallest capable model" },
    { title: "Documentation \u2192 Balanced models (Sonnet)", detail: "Quality without premium cost" },
    { title: "Architecture analysis \u2192 Premium (Opus) with budget", detail: "Reserved for high-value tasks" },
    { title: "Code review \u2192 Task-appropriate auto-selection", detail: "Right model, right task, every time" }
  ] }'
  :insight='{ icon: "⚖️", text: "Teams access appropriate AI power without manual model selection \u2014 leadership retains budget control and compliance visibility. 4 model tiers, 30% cost reduction." }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Flexible Licensing Strategies -->
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="🔐"
  pillLabel="Governance & Licensing"
  title="Flexible Licensing: 30-40% Cost Reduction"
  :columns='[
    { icon: "👩‍💻", title: "Full Seats", items: [
      { title: "Core engineering teams", detail: "Heavy daily coding users" },
      { title: "Platform engineers", detail: "Daily AI-assisted work" },
      { title: "Architects", detail: "Constant code generation" }
    ] },
    { icon: "⚡", title: "Usage-Based", items: [
      { title: "Contractors", detail: "Temporary projects, pay per use" },
      { title: "Security reviewers", detail: "Occasional deep analysis" },
      { title: "Technical writers", detail: "Periodic documentation work" }
    ] },
    { icon: "👁️", title: "Review-Only", items: [
      { title: "Product managers", detail: "Read access, no generation" },
      { title: "Design team", detail: "Context review only" },
      { title: "QA engineers", detail: "Test review, no authoring" }
    ] }
  ]'
  :insight='{ icon: "💰", text: "200-person org example: 80 full + 40 usage-based + 80 review-only = 30\u201340% cost savings vs. all-full seats, without restricting any team\u2019s access" }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Compliance Automation -->
<CodeWithFeaturesSlide
  :partNumber="3"
  pillIcon="🔐"
  pillLabel="Governance & Licensing"
  title="Compliance Automation"
  :code='{ language: "text", filename: "@security-validator + hipaa-compliance-check", content: "Custom Agent: @security-validator\n\u2022 OWASP Top 10 vulnerabilities\n\u2022 Hardcoded secrets/credentials\n\u2022 Unapproved dependencies\n\u2022 Data exposure risks\n\nAgent Skill: hipaa-compliance-check\n\u2022 PHI encryption (AES-256)\n\u2022 Audit logging completeness\n\u2022 Access control enforcement\n\u2022 Data retention policies" }'
  codePosition="left"
  :features='[
    { icon: "🛡️", title: "Access Governance", description: "Org policies, model access restrictions, and full audit logs baked into every workflow" },
    { icon: "🚫", title: "Content Filtering", description: "Block vulnerable patterns and copyrighted code before they reach pull requests" },
    { icon: "📋", title: "Data Governance", description: "Training opt-out, data residency controls, and retention policies enforced automatically" }
  ]'
  :insight='{ icon: "⚠️", text: "For regulated industries: Healthcare, finance, government \u2014 governance frameworks are prerequisites for AI adoption, not optional afterthoughts. HIPAA \u00b7 SOC 2 \u00b7 FedRAMP" }'
/>

---

<!-- SLIDE: Part 4 — Scaling & Measurement -->

<SectionOpenerSlide
  :partNumber="4"
  title="Scaling & Measurement"
  subtitle="Adoption, ROI, and federated governance"
  :cards='[
    { icon: "📊", title: "Metrics Framework", blurb: "Leading, intermediate, lagging indicators" },
    { icon: "🎓", title: "Self-Service Kit", blurb: "30-minute quick start" },
    { icon: "💰", title: "ROI Reporting", blurb: "Data-driven CFO narrative" },
  ]'
  :terminal='{ context: "Enable 50+ teams simultaneously", detail: "self-service onboarding + quantifiable metrics = scalable adoption" }'
/>
---

<!-- SLIDE: Metrics Framework -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="📊"
  pillLabel="Scaling & Measurement"
  title="Adoption Metrics & ROI Measurement"
  :columns='[
    { icon: "📊", title: "Leading (Adoption Health)", items: [
      { title: "Acceptance rate", detail: "55\u201365% target" },
      { title: "Active users", detail: "80%+ utilization" },
      { title: "AI code lines", detail: "% of total output" },
      { title: "Feature adoption", detail: "Chat, Skills, Agents" }
    ] },
    { icon: "⚡", title: "Intermediate (Efficiency)", items: [
      { title: "PR velocity", detail: "PRs per week trend" },
      { title: "Review time", detail: "PR open to merge duration" },
      { title: "Bug fix time", detail: "Issue to resolution" },
      { title: "Documentation", detail: "Coverage improvement" }
    ] },
    { icon: "🏆", title: "Lagging (Business Impact)", items: [
      { title: "Time to market", detail: "Feature delivery speed" },
      { title: "Dev satisfaction", detail: "7.8 \u2192 8.4 average" },
      { title: "Onboarding time", detail: "45 days \u2192 28 days" },
      { title: "Cost per feature", detail: "\u221231% reduction" }
    ] }
  ]'
  :insight='{ icon: "💡", text: "Track acceptance rate first (predicts everything else) \u2192 act on it \u2192 watch intermediate & lagging metrics improve. Target: 55\u201365% acceptance, \u221231% cost per feature." }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Self-Service Onboarding -->
<CodeWithFeaturesSlide
  :partNumber="4"
  pillIcon="📊"
  pillLabel="Scaling & Measurement"
  title="Self-Service Onboarding Kit"
  :code='{ language: "text", filename: "team-onboarding/", content: "team-onboarding/\n\u251c\u2500\u2500 README.md              \u2190 30-min quick start\n\u251c\u2500\u2500 repository-setup.md    \u2190 Config guide\n\u251c\u2500\u2500 custom-instructions.md \u2190 Org standards\n\u251c\u2500\u2500 skills-catalog.md      \u2190 Available skills\n\u251c\u2500\u2500 review-checklist.md    \u2190 AI code review\n\u2514\u2500\u2500 examples/\n    \u251c\u2500\u2500 good-prompts.md\n    \u251c\u2500\u2500 custom-agent-template/\n    \u2514\u2500\u2500 sample-repository/" }'
  codePosition="left"
  :features='[
    { icon: "📖", title: "Read Quick Start (10 min)", description: "Org standards overview — what\u2019s enabled, what\u2019s available, what\u2019s expected" },
    { icon: "⚙️", title: "Configure Repo (10 min)", description: "Copy/paste templates from the kit — instructions, skills, AGENTS.md" },
    { icon: "✅", title: "Complete Exercise (10 min)", description: "Validate setup with a real task using the sample repository and good-prompts guide" }
  ]'
  :insight='{ icon: "🎯", text: "Success metrics: 30 min to productive, under 2 support tickets per team, 90%+ satisfaction. Enables 50 teams to onboard simultaneously." }'
/>

---

<!-- SLIDE: Federated Governance Model & ROI -->
<TwoColPairedConceptsSlide
  :partNumber="4"
  pillIcon="📊"
  pillLabel="Scaling & Measurement"
  title="Federated Model & Knowledge Multiplication"
  :left='{ header: "🏗️ Platform Team Owns", items: [
    { title: "Org-wide standards", detail: "40 hrs — security, frameworks, quality baselines" },
    { title: "Shared skill library", detail: "60 hrs — domain expertise encoded once" },
    { title: "Onboarding kit", detail: "80 hrs — self-service for all 50+ teams" },
    { title: "Metrics & ROI tracking", detail: "Data-driven governance dashboard" }
  ], code: { language: "text", content: "Investment: 180 hours total" } }'
  :right='{ header: "🌿 Teams Own", items: [
    { title: "Domain-specific customization", detail: "Team agents, local AGENTS.md overrides" },
    { title: "Team-specific agent skills", detail: "Contribute back to shared library" },
    { title: "Contribute winning patterns back", detail: "Knowledge compounds across the org" },
    { title: "Share learnings in community", detail: "Accelerates every other team" }
  ], code: { language: "text", content: "Returns: 2,900+ hours saved" } }'
  :insight='{ icon: "📈", text: "The Compounding Effect: 180 hrs invested \u2192 2,900+ dev hours saved \u2192 16\u00d7 ROI. One-to-many deployment + automatic inheritance = knowledge stops fragmenting, starts compounding." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
header="50 Teams to Organization-Level Scaling"
leftLabel="Before"
rightLabel="After"
:leftItems='["Teams: 50 isolated silos", "Cost: per-team overhead", "Onboarding: 45 days", "Knowledge: siloed practices"]'
:rightItems='["Teams: unified organization", "Cost: 30–40% reduction", "Onboarding: 28 days", "Knowledge: shared patterns"]'
:metrics='[
  { value: "16x", detail: "ROI" },
  { value: "30–40%", detail: "Cost reduction" },
  { value: "45 → 28 days", detail: "Onboarding" }
]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Audit current adoption: teams, acceptance rates, standards?", "Identify 2-3 successful pilot teams for patterns", "Review org custom instructions documentation"]'
  :thisWeek='["Create initial org-wide custom instructions", "Deploy to pilots, gather feedback, iterate", "Build metrics baseline using Copilot Metrics API", "Start onboarding kit with copy/paste templates"]'
  :thisMonth='["Develop shared Agent Skill library", "Establish Community of Practice: monthly sessions", "Configure Knowledge Bases (Enterprise tier)", "Build quarterly ROI dashboard for leadership"]'
  footer="Target 80%+ utilization through progressive rollout — pilot with 2-3 high-adoption teams, build metrics baselines, then scale to 200+ developers with a standardized onboarding kit and shared skill library."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "🤖 GitHub Copilot Enterprise", color: "cyan", items: [
        { href: "https://docs.github.com/en/copilot/managing-copilot/managing-copilot-for-your-enterprise", label: "Managing Copilot for Your Enterprise", description: "Org policies, model access controls, seat management, and audit logs" },
        { href: "https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-organization-instructions", label: "Organization-Wide Custom Instructions", description: "Org-level and repo-level instructions, AGENTS.md, .github/copilot-instructions.md" },
        { href: "https://docs.github.com/en/copilot/concepts/agents/about-agent-skills", label: "Organizational Agent Skills (GA)", description: "Centrally versioned domain skills deployed across all org repositories" },
        { href: "https://docs.github.com/en/copilot/how-tos/provide-context/use-copilot-spaces", label: "Copilot Spaces (Knowledge Bases)", description: "Multi-repo context — organize repos into spaces for cross-codebase queries" }
    ] },
    { title: "📊 Metrics, Licensing & Standards", color: "purple", items: [
        { href: "https://docs.github.com/en/rest/copilot/copilot-metrics", label: "Copilot Usage Metrics API", description: "Acceptance rates, active users, feature adoption — org and team breakdowns" },
        { href: "https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access", label: "Flexible Licensing Strategies", description: "Full seats, usage-based, and review-only tiers for cost optimization" },
        { href: "https://agents.md/", label: "AGENTS.md Open Format", description: "Cross-vendor standard for agent instruction files and repo conventions" },
        { label: "Related Tech Talks", description: "Agentic Journey · Agentic SDLC · Agent Teams · Agentic Workflows" }
    ] }
  ]'
/>
---

<!-- SLIDE: Thank You -->
<ThankYouSlide
title="Thank You"
subtitle="Enterprise Patterns for AI Adoption"
:cards="[
  { icon: '💡', value: '16x', detail: 'ROI from knowledge multiplication', subdetail: 'One instruction benefits entire organization' },
  { icon: '💰', value: '30-40%', detail: 'Cost reduction via flexible licensing', subdetail: 'Right-size seats based on usage patterns' },
  { icon: '👥', value: '500+', detail: 'Developers benefit from one instruction', subdetail: 'Organization-wide knowledge at scale' },
]"
prompt="Questions? Let's discuss which enterprise patterns apply to your organization first"
/>
