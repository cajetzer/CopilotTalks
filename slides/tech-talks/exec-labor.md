---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## The Labor Multiplier: What Agents Actually Do
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: "The Labor Multiplier: What Agents Actually Do"
mdc: true
section: Executive Talks
status: active
updated: 2026-04-24
---
<script setup>
import TitleSlide from './components/structure/TitleSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="The Labor Multiplier: What Agents Actually Do"
  subtitle="An executive briefing on the economics of agentic software delivery"
  tagline="AI tools addressed 33% of the labor problem. Here's how to capture the other 67%."
  meta="Executive Talk · CopilotTraining"
/>

---
src: ./exec-spine.md
---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="Where does the other 67% of software delivery labor go — and what changes when agents handle it?"
  subtext="AI coding tools accelerated code writing — roughly 33% of what engineering teams actually do. Discovery, planning, governance, knowledge transfer, and validation account for the rest."
  highlight="67% of delivery labor. Five addressable categories. A clear ROI case for each."
  :cards='[
    { icon: "💰", title: "CFOs / Finance Leaders", description: "What is the ROI timeline for automating discovery, governance, and validation work?" },
    { icon: "🏢", title: "CEOs / Executive Sponsors", description: "What does it take to build a delivery cost advantage in the 67% beyond code writing?" },
    { icon: "🔧", title: "CTOs / VP Engineering", description: "Which 40–50% of engineering labor is in the Automate quadrant — and what does it take?" },
    { title: "67% of delivery labor", description: "The categories beyond code writing — five addressable areas with clear ROI" },
    { title: "$4.88M avg breach cost", description: "IBM 2024 — automated compliance review addresses the root cause" },
    { title: "208× DORA gap", description: "Elite teams deploy 208x more frequently (DORA 2023)" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "📊", title: "The Hidden Labor Bill", subtitle: "The 67% Gap", blurb: "The labor AI tools have not yet touched — and the opportunity it represents", slide: 9 },
    { icon: "📋", title: "The Exposure Ledger", subtitle: "Five Business Cases, Quantified", blurb: "Five labor categories where automation delivers the clearest return", slide: 13 },
    { icon: "⚡", title: "The Multiplier Model", subtitle: "Automate, Augment, Human", blurb: "The operating model and the handoff pattern that compresses 8–12 hrs to 20 min", slide: 17 },
    { icon: "🎯", title: "The Decision Window", subtitle: "Three Named Asks", blurb: "Three discrete authorizations, defined scope, this quarter", slide: 21 },
  ]'
/>

---

<!-- SLIDE: Part 1 — The Hidden Labor Bill -->
<SectionOpenerSlide
  :partNumber="1"
  title="The Hidden Labor Bill"
  subtitle="AI tools accelerated code writing — about 33% of what engineering teams do. Here is what else is on the table."
  :cards='[
    { icon: "📊", title: "The 67% Gap", blurb: "AI tools optimized code writing. Five more categories are ready to go." },
    { icon: "🗺️", title: "The Labor Map", blurb: "Five categories. Each with strong agent leverage and a clear ROI case." },
    { icon: "⏳", title: "The Investment Timing", blurb: "Organizations building this now have an 18–24 month head start." },
  ]'
  :terminal='{ context: "labor allocation", detail: "33% of delivery labor optimized. Five more categories ready to go." }'
/>

---

<!-- SLIDE: The 33% Problem Reframe -->
<HeroStatSlide
  :partNumber="1"
  pillIcon="📊"
  pillLabel="The Hidden Labor Bill"
  title="AI Tools Addressed 33% of the Work"
  subtitle="The other 67% — discovery, governance, knowledge, validation — runs on different economics."
  :hero='{ value: "67%", label: "of software delivery labor beyond code writing — five categories with strong agent leverage", source: "McKinsey Global Institute 2023: developers spend 30–33% of time writing code" }'
  :supporting='[
    { icon: "💻", title: "What AI optimized", description: "Code writing: 30–33% of developer time. The acceleration is real — 55% faster (GitHub 2023)." },
    { icon: "🔍", title: "What comes next", description: "Discovery, planning, governance, knowledge, validation — each with strong agent leverage." },
    { icon: "⏳", title: "The head start", description: "Organizations that have started here have built an 18–24 month advantage in delivery economics." }
  ]'
  :insight='{ icon: "💡", text: "The organizations moving fastest have reclaimed the 67% — and the economics are straightforward once you know where to start." }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The SDLC Labor Map -->
<FrameworkMappingRowsSlide
  :partNumber="1"
  pillIcon="🗺️"
  pillLabel="The Hidden Labor Bill"
  title="The SDLC Labor Map"
  subtitle="Nine categories of software delivery — five with strong agent leverage beyond code writing"
  :rows='[
    { label: "Discovery", description: "Issue triage, impact analysis, duplicate detection — at scale", tag: "Very high" },
    { label: "Planning", description: "Execution plans, dependency mapping, estimate breakdown", tag: "High" },
    { label: "Governance", description: "Compliance checks, policy enforcement, audit trail generation", tag: "Very high" },
    { label: "Knowledge", description: "Documentation sync, onboarding materials, decision records", tag: "High" },
    { label: "Validation", description: "Risk-weighted test coverage, failure-mode analysis, security scan", tag: "High" }
  ]'
  footnote="Code generation — the 33% AI tools already address — is the starting point. These five categories are where the next opportunity is."
  :progressDots='{ current: 2, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The Compounding Cost -->
<ThreeColumnCardSlide
  :partNumber="1"
  pillIcon="⏳"
  pillLabel="The Hidden Labor Bill"
  title="Why This Quarter"
  :columns='[
    { icon: "📊", title: "Delivery Economics", description: "Code completion is where teams started. The 67% is where delivery economics differentiate further." },
    { icon: "⚡", title: "DORA 208× Gap", description: "Elite teams deploy 208x more frequently. Agent infrastructure is how the gap closes." },
    { icon: "👥", title: "Talent Signal", description: "62% of engineers say tooling influences job choice — modern infrastructure is a retention lever." }
  ]'
  :insight='{ icon: "🕒", text: "Building agent-amplified delivery takes 12–18 months. Starting now means the infrastructure is ready when the opportunity is clearest." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — The Exposure Ledger -->
<SectionOpenerSlide
  :partNumber="2"
  title="The Exposure Ledger"
  subtitle="Five labor categories. Five quantified business cases. One table executives can act on."
  :cards='[
    { icon: "💰", title: "The Business Case Table", blurb: "Five categories, quantified in dollars. No implementation detail required." },
    { icon: "⚖️", title: "Governance: Clearest ROI", blurb: "$4.88M avg breach cost. GDPR 4% of revenue. Automation changes the math." },
    { icon: "📈", title: "The ROI Evidence", blurb: "Before/target/dollar impact — a concrete case for each category." },
  ]'
  :terminal='{ context: "business case", detail: "Five categories. Each with a clear dollar case." }'
/>

---

<!-- SLIDE: The Financial Exposure Table -->
<FrameworkMappingRowsSlide
  :partNumber="2"
  pillIcon="💰"
  pillLabel="The Exposure Ledger"
  title="Five Labor Categories, Five Business Cases"
  subtitle="Five categories where automation delivers a quantified, recurring return"
  :rows='[
    { label: "Discovery", description: "Wrong routing, missed duplicates — 20–30% of project budget in rework", tag: "$2–4M/yr" },
    { label: "Planning", description: "Unclear requirements → $150K per rework incident. Estimates vary ±50%", tag: "$520K/yr" },
    { label: "Governance", description: "$4.88M breach avg. GDPR fines to 4% of revenue. Automation scales.", tag: "$4.88M" },
    { label: "Knowledge", description: "50–200% salary to replace one engineer. 280+ hrs recovered per hire.", tag: "$350K+ exit" },
    { label: "Validation", description: "$11K/min outage cost. Risk-weighted coverage finds line test gaps.", tag: "$11K/min" }
  ]'
  footnote="These are structural labor costs — recurring, predictable, and addressable with agent automation."
  :progressDots='{ current: 1, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Governance: The Highest Exposure -->
<HeroStatSlide
  :partNumber="2"
  pillIcon="⚖️"
  pillLabel="The Exposure Ledger"
  title="Governance: The Clearest ROI Case"
  subtitle="Compliance automation has the strongest return profile of any labor category"
  :hero='{ value: "$4.88M", label: "average data breach cost (IBM 2024) — automated compliance review addresses the root cause", source: "IBM Security: Cost of a Data Breach Report 2024" }'
  :supporting='[
    { icon: "📋", title: "GDPR", description: "Up to 4% of global annual revenue per violation. Automated review scales with delivery cadence." },
    { icon: "🔍", title: "SOC 2 audit cost", description: "$30K–$100K in fees + 160–300 engineer-hours annually. Agent-generated evidence changes the model." },
    { icon: "⏱️", title: "Review overhead today", description: "4 hours per PR in high-stakes contexts. Agent-based review runs in under 10 minutes." }
  ]'
  :insight='{ icon: "💡", text: "A DevSecOps investment returns $6 per $1 spent (IBM/Ponemon). Governance automation is the highest-return category in this table." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: The ROI Evidence -->
<BeforeAfterMetricsSlide
  :partNumber="2"
  pillIcon="📈"
  pillLabel="The Exposure Ledger"
  title="The ROI Evidence"
  :before='{
    header: "Current State (Manual)",
    items: [
      { title: "Issue triage", detail: "30 min/issue — $1.04M/yr for 20 issues/week at $100/hr" },
      { title: "Compliance review", detail: "4 hrs/PR — 160–300 engineer-hours/yr on SOC 2 alone" },
      { title: "Onboarding", detail: "3–6 weeks when docs are outdated — 7–8 engineers/yr affected" },
      { title: "Production issues", detail: "5/quarter — each a potential $4.88M exposure event" }
    ]
  }'
  :after='{
    header: "Target State (Agent-Augmented)",
    items: [
      { title: "Issue triage", detail: "<5 min/issue — 83% time reduction. $1.04M/yr reclaimed." },
      { title: "Compliance review", detail: "<10 min automated — 160–300 engineer-hours freed for delivery" },
      { title: "Onboarding", detail: "1–2 weeks with auto-synced docs — 4 weeks saved per hire" },
      { title: "Production issues", detail: "Target 0 — violations surface before merge, not after audit" }
    ]
  }'
  :metrics='[
    { value: "~$1M", label: "annual triage savings for a 50-person team" },
    { value: "6×", label: "DevSecOps ROI — $1 invested returns $6 (IBM/Ponemon)" },
    { value: "280 hrs", label: "recovered per year from improved onboarding alone" }
  ]'
  :insight='{ icon: "💡", text: "These are what organizations with instrumented discovery and governance are already measuring." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Part 3 — The Multiplier Model -->
<SectionOpenerSlide
  :partNumber="3"
  title="The Multiplier Model"
  subtitle="8–12 hours of preparation compressed to ~20 minutes. 40–50% of engineering labor ready to move."
  :cards='[
    { icon: "🔀", title: "The Taxonomy", blurb: "Automate, Augment, Human — 40–50% of labor in the Automate quadrant." },
    { icon: "⚡", title: "The Handoff Pattern", blurb: "Prep → Decision → Execute. 8–12 hrs to 20 min." },
    { icon: "📈", title: "The Investment Timing", blurb: "DORA 208x gap. The infrastructure that closes it takes 12–18 months." },
  ]'
  :terminal='{ context: "multiplier model", detail: "40–50% of engineering labor ready to move into the Automate quadrant." }'
/>

---

<!-- SLIDE: Three Categories of Work -->
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="🔀"
  pillLabel="The Multiplier Model"
  title="Automate, Augment, Human"
  :columns='[
    { icon: "🤖", title: "Automate", description: "Rule-based, repetitive, low-risk. Issue triage, compliance checks, doc sync. 40–50% of labor." },
    { icon: "🤝", title: "Augment", description: "Agent prepares, human decides. Impact analysis, execution planning, code review." },
    { icon: "🧠", title: "Human", description: "Strategy, architecture, stakeholder management. Judgment that cannot be structured." }
  ]'
  :insight='{ icon: "🎯", text: "40–50% of current engineering labor falls in the Automate quadrant — capturable today without displacing any human judgment." }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: The Handoff Pattern -->
<TwoColPairedConceptsSlide
  :partNumber="3"
  pillIcon="⚡"
  pillLabel="The Multiplier Model"
  title="The Handoff Pattern"
  :left='{
    header: "Without Agents",
    icon: "👷",
    items: [
      { text: "Preparation: 2–4 hrs", detail: "Developer investigates, traces root cause, maps dependencies" },
      { text: "Decision: 10–15 min", detail: "Makes call with partial context — what they could gather" },
      { text: "Execution: 4–8 hrs", detail: "Sequential and developer-paced. Blocked until available." },
      { text: "Total human time: 8–12 hrs", detail: "Expertise spent on research, not judgment" }
    ]
  }'
  :right='{
    header: "With Agent Handoff",
    icon: "⚡",
    items: [
      { text: "Preparation: 5 min (agent)", detail: "Scans full codebase, traces dependencies, proposes plan" },
      { text: "Decision: 2–3 min (human)", detail: "Reviews comprehensive briefing — better-informed, faster" },
      { text: "Execution: 30–90 min (agent)", detail: "Parallel, agent-paced. Runs while human takes next task." },
      { text: "Total human time: ~20 min", detail: "Expertise concentrated on the judgment only they provide" }
    ]
  }'
  :insight='{ icon: "⏱️", text: "8–12 hours of human effort compressed to ~20 minutes. The human remains in the loop — at the decision point only." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: The Cost of Delay -->
<HeroStatSlide
  :partNumber="3"
  pillIcon="📉"
  pillLabel="The Multiplier Model"
  title="The Value of Starting Now"
  subtitle="The DORA gap is established. Agent infrastructure is how high-performing teams got there."
  :hero='{ value: "208×", label: "faster deployment frequency — elite teams vs. average (DORA 2023)", source: "Elite teams also recover from failures 2600x faster. These are the current operating baselines for high-performing engineering organizations." }'
  :supporting='[
    { icon: "📅", title: "The onboarding curve", description: "Organizations starting this quarter can plan for a 12–18 month infrastructure timeline." },
    { icon: "💰", title: "Compounding returns", description: "Delivery economics improve as agent infrastructure matures. Early quarters fund later ones." },
    { icon: "🏗️", title: "Infrastructure timeline", description: "Building agent-amplified delivery takes 12–18 months. The three asks are calibrated to that curve." }
  ]'
  :insight='{ icon: "🎯", text: "The three asks in the next section are sized to show results in quarter one — while building the infrastructure that compounds over 12–18 months." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — The Decision Window -->
<SectionOpenerSlide
  :partNumber="4"
  title="The Decision Window"
  subtitle="Three discrete authorizations. Defined scope. Built to show results this quarter."
  :cards='[
    { icon: "🔍", title: "Labor Audit", blurb: "4-week assessment. Identify your Automate quadrant." },
    { icon: "🚀", title: "90-Day Pilot", blurb: "One team, three capabilities, baseline metrics pre-set." },
    { icon: "📋", title: "Governance Policy", blurb: "Define access scope, ownership, and legal review now." },
  ]'
  :terminal='{ context: "authorization", detail: "Three asks. This quarter. Defined scope." }'
/>

---

<!-- SLIDE: Three Named Asks -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🎯"
  pillLabel="The Decision Window"
  title="Three Asks. This Quarter."
  :columns='[
    { icon: "🔍", title: "Labor Allocation Audit", description: "4 weeks. Map where engineering time actually goes — calendar and commits, not the roadmap." },
    { icon: "🚀", title: "90-Day Pilot", description: "One team, three capabilities, baseline metrics set before launch. Success criteria in advance." },
    { icon: "📋", title: "Governance Policy", description: "Define agent access scope, production ownership, and legal/security review scope." }
  ]'
  :insight='{ icon: "✈️", text: "Each of these requires executive authorization — the scope and ownership decisions sit above the engineering layer." }'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: What Each Quarter Costs -->
<FrameworkMappingRowsSlide
  :partNumber="4"
  pillIcon="🏁"
  pillLabel="The Decision Window"
  title="Three Compounding Factors"
  subtitle="Three areas where earlier investment compounds into a larger return"
  :rows='[
    { label: "Governance", description: "Automated compliance runs every commit. Findings surface before merge.", tag: "$6 per $1" },
    { label: "Delivery", description: "DORA 208x gap. Agent infrastructure is how elite teams closed it.", tag: "208× gap" },
    { label: "Talent", description: "62% cite tooling in job decisions. Modern infra retains talent.", tag: "62% signal" },
    { label: "Efficiency", description: "40–50% of labor shifts to the Automate quadrant — measurable results.", tag: "67% ready" }
  ]'
  footnote="The three asks require 4 weeks, 90 days, and one policy session — scoped to show results before the next planning cycle."
  :progressDots='{ current: 2, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before and After -->
<BeforeAfterSlide
  header="The Labor Multiplier Changes the Cost Structure"
  :leftItems='["AI tools optimized 33% of labor — code writing only", "Discovery, planning, governance, knowledge: unaddressed", "Senior engineers spend 67% of time on non-coding tasks", "Compliance and triage: fully manual at full engineering cost"]'
  :rightItems='["Agent labor captures the 67% — the untouched majority", "Preparation → Decision → Execution: 8–12 hrs to ~20 min", "40–50% of engineering labor shifts to the Automate quadrant", "Governance and validation: defensible at $2–5/hr agent cost"]'
  :metrics='[
    { value: "67%", detail: "of delivery labor addressed by the multiplier model" },
    { value: "~20 min", detail: "from 8–12 hours via the agent handoff pattern" },
    { value: "208×", detail: "DORA deployment gap between elite and average teams" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Map one week of engineering time across Discovery, Planning, Governance, Knowledge, and Validation", "Identify tasks requiring no human judgment — your Automate quadrant candidates"]'
  :thisWeek='["Draft governance policy scope — what agents can access without approval and who owns agent behavior", "Define 90-day pilot success criteria before launch — baseline metrics agreed in advance, not after"]'
  :thisMonth='["Launch a single-team pilot with 3 agent capabilities: issue triage, PR descriptions, compliance checking", "Commission an infrastructure assessment — measure iteration count and verification overhead, not API cost"]'
  footer="The 67% is ready now. The three asks in the previous section are the authorization to start."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "Research & Market Data", color: "text-cyan-400", items: [
      { label: "McKinsey Digital (2023)", description: "Developers spend 30–33% of time writing code — the foundation for the 67% opportunity", href: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai" },
      { label: "IBM Cost of a Data Breach 2024", description: "$4.88M average breach cost — the governance automation ROI benchmark", href: "https://www.ibm.com/reports/data-breach" },
      { label: "DORA State of DevOps 2023", description: "Elite teams deploy 208x more frequently — the delivery performance benchmark", href: "https://dora.dev/research/2023/dora-report/" },
      { label: "GitHub Octoverse 2023", description: "55% faster code completion with Copilot — on the 33% of coding tasks", href: "https://github.blog/news-insights/research/octoverse-2023/" }
    ]},
    { title: "Compliance & Risk", color: "text-blue-400", items: [
      { label: "GDPR Article 83", description: "Fines up to 4% of global annual revenue for governance failures", href: "https://gdpr.eu/article-83-conditions-for-imposing-administrative-fines/" },
      { label: "Stack Overflow Dev Survey 2023", description: "62% of engineers say modern tooling influences job choice", href: "https://survey.stackoverflow.co/2023/" }
    ]}
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="The Labor Multiplier"
  subtitle="AI tools addressed 33% of the problem. Here is how to capture the other 67%."
  :cards="[{ icon: '📊', value: '67%', detail: 'of delivery labor', subdetail: 'Five categories beyond code writing. Each with a clear ROI case.' }, { icon: '⏱️', value: '~20 min', detail: 'from 8–12 hours', subdetail: 'Preparation → Decision → Execution handoff pattern.' }, { icon: '📈', value: '208×', detail: 'DORA deployment gap', subdetail: 'The current benchmark for elite engineering teams.' }]"
  prompt="What share of your engineering labor is in the Automate quadrant?"
/>
