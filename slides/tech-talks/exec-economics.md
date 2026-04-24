---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## The Agentic Economics
  Making the Business Case for AI Agent Adoption
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: The Agentic Economics - Making the Business Case
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
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
import BeforeAfterMetricsSlide from './components/BeforeAfterMetricsSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="The Agentic Economics"
  subtitle="Making the Business Case for AI Agent Adoption"
  tagline="Agent labor costs $2–5/hour. Capturing that arbitrage requires infrastructure — and honesty."
  meta="Executive Talk · 45 minutes"
/>

---
src: ./exec-spine.md
---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="What does it actually cost to run AI agents — and what does it cost when you get it wrong?"
  subtext="The agent API bill is not the investment. The infrastructure to verify what agents produce — that is the investment."
  highlight="85–95% cost reduction on routine work is real. Only 5% of AI pilots capture it."
  :cards='[
    { icon: "💼", title: "CFOs / Finance Leaders", description: "What is the real ROI timeline — including Year 1 net loss — and how does it scale?" },
    { icon: "👔", title: "CEOs / Executive Sponsors", description: "Why do 95% of AI pilots fail, and what separates the 5% that deliver?" },
    { icon: "🗼", title: "CTOs / VP Engineering", description: "What infrastructure must exist before agent economics become positive?" },
    { title: "$2–5/hour", description: "Fully-loaded agent execution cost vs. $70–150/hr human engineering labor" },
    { title: "Only 5% of pilots deliver", description: "Material bottom-line improvement from AI initiatives — McKinsey 2024" },
    { title: "3.6-day payback", description: "Issue lifecycle automation — $10,200 investment → $1,001,000 annual savings" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "💰", title: "The Arbitrage", subtitle: "The $2–5/Hour Reality", blurb: "Agent cost vs. human cost — and the three buckets of work worth shifting", slide: 9 },
    { icon: "⚠️", title: "The Catch", subtitle: "Why 95% Fail", blurb: "Five barriers, the verification loss case, and market failure data", slide: 12 },
    { icon: "📈", title: "The Returns", subtitle: "The Business Case Math", blurb: "Quick wins, tiered roadmap, 20% goal, and the honest J-curve", slide: 16 },
    { icon: "🎯", title: "The Decision", subtitle: "Three Named Asks", blurb: "Executive summary table and concrete asks with owners and timelines", slide: 21 },
  ]'
/>

---

<!-- SLIDE: Part 1 — The Arbitrage -->
<SectionOpenerSlide
  :partNumber="1"
  title="The Arbitrage"
  subtitle="Agent labor costs $2–5/hour. The question is what work can move there — and what it takes."
  :cards='[
    { icon: "💰", title: "The Cost Comparison", blurb: "Agent vs. human labor — a 14–75x price difference on the same tasks." },
    { icon: "🗂️", title: "Three Work Buckets", blurb: "High-value stays human. Routine and pure toil can move to $2/hr." },
    { icon: "⚡", title: "The Tension", blurb: "The arbitrage is real. The infrastructure to capture it is not." },
  ]'
  :terminal='{ context: "agentic economics", detail: "What work can we move to $2–5/hour?" }'
/>


---

<!-- SLIDE: The Cost Comparison -->
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="💰"
  pillLabel="The Arbitrage"
  title="The Cost Comparison"
  :left='{
    header: "Agent Labor (2026)",
    icon: "🤖",
    items: [
      { text: "$2–5/hour", detail: "Fully-loaded: API + infrastructure + integration" },
      { text: "GPT-4o / Claude Sonnet", detail: "$0.60–$1.20/hr pure API; $2–5/hr for real workflows" },
      { text: "Concurrent execution", detail: "One developer can supervise 3–4 agents simultaneously" },
      { text: "No benefits, no PTO", detail: "Scales instantly — no hiring lead time" }
    ]
  }'
  :right='{
    header: "Human Engineering Labor (2026)",
    icon: "👷",
    items: [
      { text: "$70–150/hour", detail: "Fully-loaded: salary + benefits + overhead" },
      { text: "Junior–Staff: $70–150/hr", detail: "14–75× more expensive than agent equivalent" },
      { text: "Offshore: $25–85/hr", detail: "Still 5–42× more expensive for routine tasks" },
      { text: "Contractor: $60–130/hr", detail: "Surge capacity at premium cost" }
    ]
  }'
  :insight='{ icon: "💡", text: "The question is not whether agents are cheaper. It is: what work can we move to $2–5/hour — and what does it take to capture that arbitrage?" }'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Three Work Buckets -->
<ThreeColumnCardSlide
  :partNumber="1"
  pillIcon="🗂️"
  pillLabel="The Arbitrage"
  title="Three Buckets of Work"
  :columns='[
    { icon: "💰", title: "High-Value: Stay Human", description: "Architecture, strategic planning, complex debugging. $150–250/hr. Judgment-intensive." },
    { icon: "⚙️", title: "Routine: Could Be $2/hr", description: "Code review, test writing, bug investigation. Pattern-based — prime agent territory." },
    { icon: "🔁", title: "Pure Toil: Best at $2/hr", description: "Issue triage, compliance checks, status reports. Rule-following — 85–95% reduction/hr." }
  ]'
  :insight='{ icon: "⚠️", text: "The arbitrage is real. The infrastructure to capture it is not. Most organizations are not ready — and that is what The Catch is about." }'
  :progressDots='{ current: 2, total: 2, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — The Catch -->
<SectionOpenerSlide
  :partNumber="2"
  title="The Catch"
  subtitle="Without automated verification, adding agents produces a net loss vs. human-only delivery"
  :cards='[
    { icon: "🚧", title: "Five Barriers", blurb: "Infrastructure debt that must be retired before savings materialize." },
    { icon: "🔴", title: "The Loss Case", blurb: "Agent ($3) + human review ($200) = $203. Human-only = $200. Net: -$3." },
    { icon: "📉", title: "Market Failure", blurb: "Only 5% of AI pilots deliver. 65% cite org complexity, not tech." },
  ]'
  :terminal='{ context: "the catch", detail: "These are not arguments against proceeding. They are the conditions under which proceeding works." }'
/>


---

<!-- SLIDE: Five Structural Barriers -->
<FourCardGridSlide
  :partNumber="2"
  pillIcon="🚧"
  pillLabel="The Catch"
  title="Five Structural Barriers"
  :cards='[
    { icon: "🚧", title: "No Instrumentation", description: "Without automated tests and quality gates, every agent output requires human review. No time saved." },
    { icon: "🧠", title: "Tribal Knowledge", description: "Critical context lives in people&#39;s heads. Agents can&#39;t access what isn&#39;t written." },
    { icon: "⏸️", title: "Approval Bottlenecks", description: "Agent finishes in 30 minutes, waits 2 days in review queue. Total time: unchanged." },
    { icon: "🔧", title: "Fragmented Tooling", description: "Context scattered across Jira, Slack, Confluence, GitHub. Agents get partial context." }
  ]'
  :insight='{ icon: "💡", text: "These are infrastructure gaps — not technology failures. Each one must be retired before savings materialize." }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: The Verification Loss Case -->
<BeforeAfterMetricsSlide
  :partNumber="2"
  pillIcon="🔴"
  pillLabel="The Catch"
  title="The Verification Loss Case"
  :before='{
    header: "Without Automated Verification",
    items: [
      { title: "Agent execution", detail: "$3 — 1 hour at $3/hr" },
      { title: "Human review", detail: "$200 — 2 hours at $100/hr, full manual check" },
      { title: "Total cost", detail: "$203 vs. $200 human-only for the same task" },
      { title: "Net result", detail: "-$3 — this is a loss, not savings" }
    ]
  }'
  :after='{
    header: "With Automated Verification",
    items: [
      { title: "Agent execution", detail: "$3 — same task, same quality output" },
      { title: "Automated checks", detail: "$0.10 — tests, security scan, lint in minutes" },
      { title: "Human spot-check", detail: "$25 — 15 min at $100/hr, confirmation only" },
      { title: "Total cost", detail: "$28.10 vs. $200 human-only — 86% reduction" }
    ]
  }'
  :metrics='[
    { value: "-$3", label: "net result without automation — a loss vs. human-only" },
    { value: "86%", label: "cost reduction with automated verification in the loop" },
    { value: "5×", label: "minimum automation investment to make agent economics positive" }
  ]'
  :insight='{ icon: "🔑", text: "Automated verification is the multiplier. Without it, organizations pay twice — once for the agent, once for the human reviewer." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Market Failure Data -->
<ThreeColumnCardSlide
  :partNumber="2"
  pillIcon="📉"
  pillLabel="The Catch"
  title="Why 95% of Pilots Fail"
  :columns='[
    { icon: "📉", title: "Only 5% deliver", description: "Material bottom-line improvement from AI initiatives. The gap is infrastructure — not tools." },
    { icon: "🏢", title: "65% cite org complexity", description: "Organizational complexity — not technology — is the top barrier. The tools work." },
    { icon: "⚠️", title: "25% AI code error rate", description: "Without automated verification. Agents without guardrails create rework at scale." }
  ]'
  :insight='{ icon: "💡", text: "These are not arguments against proceeding. They are the conditions under which proceeding works." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Part 3 — The Returns -->
<SectionOpenerSlide
  :partNumber="3"
  title="The Returns"
  subtitle="Quick wins first — then the tiered roadmap, the 20% goal, and the honest J-curve"
  :cards='[
    { icon: "⚡", title: "Quick Win Entry Point", blurb: "3.6-day payback. $1M savings from $10K investment. No CI/CD rewrite." },
    { icon: "📊", title: "Tiered Roadmap", blurb: "$1.49M/yr combined for 50 engineers across three tiers." },
    { icon: "📉", title: "The J-Curve", blurb: "Year 1: -$425K. Year 2: +$1.06M. Show the loss — it earns the trust." },
  ]'
  :terminal='{ context: "business case", detail: "The math works. It just doesn&#39;t work immediately." }'
/>


---

<!-- SLIDE: Quick Win Entry Point -->
<HeroStatSlide
  :partNumber="3"
  pillIcon="⚡"
  pillLabel="The Returns"
  title="The Quick Win Entry Point"
  subtitle="Start here. Prove the model. Then scale."
  :hero='{ value: "3.6 days", label: "payback period on issue lifecycle automation", source: "$10,200 investment → $1,001,000 annual savings" }'
  :supporting='[
    { icon: "🔍", title: "What it automates", description: "Full issue lifecycle: triage → planning → implementation → review. 20 issues/week." },
    { icon: "💰", title: "The economics", description: "Human-only: $1,040,000/year. With agents: $39,000/year. No CI/CD rewrite required." },
    { icon: "📈", title: "Natural expansion", description: "Start with 1–2 repos, prove ROI, then scale to all repos. The infrastructure serves every tier." }
  ]'
  :insight='{ icon: "🎯", text: "The quick win gives nervous executives permission to begin. Show the proof of concept before asking for the larger investment." }'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Tiered Roadmap -->
<FrameworkMappingRowsSlide
  :partNumber="3"
  pillIcon="📊"
  pillLabel="The Returns"
  title="Tiered Roadmap"
  subtitle="A capital allocation decision tree — not an implementation plan"
  :rows='[
    { label: "Tier 1", description: "Issue triage, PR descriptions, dependency updates — $110K investment", tag: "$167K/yr · 0–3 mo" },
    { label: "Tier 2", description: "Test generation, compliance checking, doc sync — $375K investment", tag: "$424K/yr · 3–6 mo" },
    { label: "Tier 3", description: "Code implementation, bug investigation, refactoring — $575K", tag: "$894K/yr · 6–12 mo" },
    { label: "Combined", description: "All three tiers for 50-person team — $1.06M total investment", tag: "$1.49M/yr" }
  ]'
  footnote="Only 13% of AI projects achieve sub-12-month payback. Success requires exceptional execution, organizational readiness, and automated verification."
  :progressDots='{ current: 2, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: The 20% Goal -->
<HeroStatSlide
  :partNumber="3"
  pillIcon="🎯"
  pillLabel="The Returns"
  title="The 20% Goal"
  subtitle="A concrete, achievable target — with honest constraints"
  :hero='{ value: "$1.94M", label: "annual savings for a 50-person team at 20% labor shift", source: "20,000 hours/year at $3/hr vs. $100/hr" }'
  :supporting='[
    { icon: "💰", title: "The math", description: "100K hours/yr × 20% = 20K agent hours × $3 = $60K cost vs. $2M human cost. Net: $1.94M/yr." },
    { icon: "🏗️", title: "Investment required", description: "$800K–$1.6M one-time infrastructure. Add 40–60% contingency for legacy systems." },
    { icon: "📈", title: "3-year ROI", description: "Disciplined execution: 240–350% over 3 years. Only with automated verification in place." }
  ]'
  :insight='{ icon: "⚠️", text: "Without proper infrastructure, actual savings may be 50–70% lower due to verification overhead and rework costs." }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: The J-Curve -->
<FrameworkMappingRowsSlide
  :partNumber="3"
  pillIcon="📉"
  pillLabel="The Returns"
  title="The J-Curve"
  subtitle="Show the loss. It earns the trust."
  :rows='[
    { label: "Year 1 net", description: "Investment: $1.06M | Savings realized: $635K | Net position: -$425K", tag: "Investment phase" },
    { label: "Year 2 net", description: "No new investment | Annual savings: $1.49M | Cumulative net: +$1.06M", tag: "Profit begins" },
    { label: "Year 3 net", description: "Cumulative savings: $3.6M | Total investment: $1.06M | Net: +$2.55M", tag: "240% ROI" },
    { label: "At scale", description: "Same $1M infrastructure for 500 engineers — 10× returns, same cost", tag: "Multiplier" }
  ]'
  footnote="CFO note: Hiding the Year 1 net loss destroys credibility. Show it explicitly — executives who have been burned by AI pilots will trust you more for it."
  :progressDots='{ current: 4, total: 4, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — The Decision -->
<SectionOpenerSlide
  :partNumber="4"
  title="The Decision"
  subtitle="The executive summary table and three concrete asks with named owners"
  :cards='[
    { icon: "📋", title: "The Summary Table", blurb: "Opportunity, investment, constraints, recommendation — one slide." },
    { icon: "🎯", title: "Three Named Asks", blurb: "Pilot authorization, infrastructure assessment, success metric reset." },
    { icon: "📏", title: "The Right Metric", blurb: "Iteration count and verification overhead — not agent API cost." },
  ]'
  :terminal='{ context: "authorization", detail: "Measure what makes agent economics work — not just what they cost." }'
/>


---

<!-- SLIDE: Executive Summary Table -->
<FrameworkMappingRowsSlide
  :partNumber="4"
  pillIcon="📋"
  pillLabel="The Decision"
  title="Executive Summary"
  subtitle="The leave-behind — every cell completable from memory after this talk"
  :rows='[
    { label: "Opportunity", description: "$1.49M/yr for 50 engineers — 85–95% cost reduction on routine work", tag: "Annual savings" },
    { label: "Investment", description: "$1.06M infrastructure over 12 months — tiers 1–3 fully deployed", tag: "One-time cost" },
    { label: "Constraints", description: "Automated verification mandatory — without it, economics are negative", tag: "Must-have" },
    { label: "Timeline", description: "Year 1: -$425K. Year 2: +$1.06M. Year 3: +$2.55M cumulative", tag: "J-curve" },
    { label: "Recommend", description: "Authorize quick-win pilot. Commission assessment. Reset metric.", tag: "Three asks" }
  ]'
  footnote="The ROI math works. The execution conditions are specific. Both must be on the table."
  :progressDots='{ current: 1, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Three Named Asks -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🎯"
  pillLabel="The Decision"
  title="Three Named Asks"
  :columns='[
    { icon: "⚡", title: "Authorize the Pilot", description: "$110K this quarter. Issue lifecycle automation. VP Engineering owns. 3.6-day payback." },
    { icon: "🔍", title: "Commission an Assessment", description: "60 days. Map infrastructure gaps. Measure iteration count and verification cost." },
    { icon: "📏", title: "Reset the Metric", description: "Iteration count and verification overhead — not agent API cost — are the ROI drivers." }
  ]'
  :insight='{ icon: "✈️", text: "Agent labor costs $2–5/hour. The infrastructure to verify it is the investment that makes that price real." }'
  :progressDots='{ current: 2, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before and After -->
<BeforeAfterSlide
  header="Automated Verification Is the Multiplier"
  :leftItems='["Agent execution: $3/hour API cost for routine task", "Human review: 2 hours at $100/hr = $200 verification cost", "Total: $203 — vs. $200 human-only. Net result: a loss.", "Speed without verification amplifies errors, not productivity"]'
  :rightItems='["Agent execution: $3 — same task, same quality output", "Automated checks: $0.10 — tests, security scan, lint in minutes", "Human spot-check: 15 min at $100/hr = $25 final review", "Total: $28.10 vs. $200 human-only. 86% cost reduction."]'
  :metrics='[
    { value: "86%", detail: "cost reduction with automated verification in the loop" },
    { value: "-$3", detail: "net result without automation — a loss vs. human-only" },
    { value: "3.6 days", detail: "payback period on the quick-win entry point pilot" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Authorize the quick-win pilot: $110K, issue lifecycle automation, VP Engineering owns", "Define your verification cost baseline — how long does human review take per agent task today?"]'
  :thisWeek='["Commission an infrastructure assessment: map gaps between current state and automation requirements", "Identify iteration count and verification overhead as your leading ROI indicators — not agent API cost"]'
  :thisMonth='["Set the 20% goal target with your engineering leadership — 50-person team benchmark: $1.94M annual savings", "Establish the J-curve as the board narrative: Year 1 investment phase, Year 2 profit, Year 3 240% ROI"]'
  footer="Agent labor costs $2–5/hour. The infrastructure to verify it is the investment that makes that price real."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📊 Research & Market Data", color: "cyan", items: [
      { label: "McKinsey Digital, 2024", description: "Only 5% of AI pilots deliver material bottom-line improvement" },
      { label: "McKinsey Digital, 2023", description: "The economic potential of generative AI — 20–45% enterprise uplift" },
      { label: "Gartner, 2024", description: "65% of leaders cite organizational complexity as top barrier to AI ROI" }
    ] },
    { title: "🛡️ Risk & Verification", color: "indigo", items: [
      { href: "https://www.ibm.com/reports/data-breach", label: "IBM Cost of a Data Breach Report, 2024", description: "$4.88M average breach cost — before fines and remediation" },
      { label: "IBM / Ponemon Institute", description: "$1 in delivery automation returns $6 in reduced incident costs" },
      { label: "Software engineering research, 2024", description: "25% AI code error rate without automated verification in pipeline" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="The Agentic Economics"
  subtitle="Making the Business Case for AI Agent Adoption"
  :cards="[{ icon: '💰', value: '$2–5/hr', detail: 'Agent Labor Cost', subdetail: 'vs. $70–150/hr human engineering — 14–75× price difference' }, { icon: '⚠️', value: '5%', detail: 'Pilots That Deliver', subdetail: 'Automated verification is what separates the 5% from the 95%' }, { icon: '📈', value: '3.6 days', detail: 'Quick-Win Payback', subdetail: '$10,200 investment → $1,001,000 annual savings — no CI/CD rewrite' }, { icon: '📉', value: '240%', detail: '3-Year ROI', subdetail: 'Year 1: -$425K. Year 2: +$1.06M. Year 3 cumulative: +$2.55M' }]"
  prompt="What is your current verification cost per agent task — and have you measured it?"
/>
