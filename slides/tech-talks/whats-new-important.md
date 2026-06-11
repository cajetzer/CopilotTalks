---
theme: default
colorSchema: dark
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot: Latest Capabilities and Effective Patterns
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: "GitHub Copilot: Latest Capabilities and Effective Patterns"
mdc: true
section: Developers
status: active
updated: 2026-06-10
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
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="GitHub Copilot: Latest Capabilities and Effective Patterns"
  subtitle="Surface map, recent capabilities, and context optimization patterns"
  tagline="Surfaces. Features. Context."
  meta="GitHub Copilot · Developers · 30 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="What changed recently, and which patterns improve outcomes across Copilot surfaces?"
  subtext="The practical answer is"
  highlight="surface-aware execution with tight context management."
  :cards='[
    { icon: "🗺️", title: "Surface map", description: "Use the right surface for each task class, including the Copilot App preview" },
    { icon: "🧠", title: "Recent capabilities", description: "Fleet patterns, subagent delegation, rubber duck workflows, and skills" },
    { icon: "🧰", title: "Context discipline", description: "Progressive disclosure and scoped tools reduce context noise" },
    { title: "Technical focus", description: "Show functionality, constraints, and usage patterns instead of generic setup guidance" },
    { title: "Practical outcomes", description: "Faster delivery from cleaner execution and clearer handoffs" },
    { title: "Non-sales framing", description: "Technical, direct, and review-oriented" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🗺️", title: "Surface Map", subtitle: "Six surfaces, one foundation", blurb: "Where each surface fits and how they differ operationally", slide: 4 },
    { icon: "🆕", title: "Recent Capabilities", subtitle: "What matured in the last 4 months", blurb: "Fleet execution, subagents, rubber duck pattern, and skills", slide: 6 },
    { icon: "🧰", title: "Context Optimization", subtitle: "Progressive disclosure and scope control", blurb: "Execution patterns that improve consistency and reduce context noise", slide: 8 },
    { icon: "🎯", title: "Multi-Surface Patterns", subtitle: "How to orchestrate real work", blurb: "A practical flow across app, IDE, CLI, and GitHub.com", slide: 10 }
  ]'
/>

---

<!-- SLIDE: Part 1 — Surface Map -->
<SectionOpenerSlide
  :partNumber="1"
  title="Surface Map"
  subtitle="Six surfaces, one shared foundation."
  :cards='[
    { icon: "💬", title: "VS Code chat", blurb: "Interactive coding and quick exploration" },
    { icon: "🖥️", title: "CLI + GitHub.com", blurb: "Terminal-native automation plus async review and triage" },
    { icon: "📱", title: "GitHub Copilot App", blurb: "Agent-native desktop: terminal, browser, MCP, skills, and canvases" }
  ]'
  :terminal='{ context: "Surface-task alignment is now mandatory", detail: "Different surfaces expose different tool and execution models" }'
/>

---

<!-- SLIDE: Surface Fit -->
<ThreeColumnCardSlide
  :partNumber="1"
  pillIcon="🗺️"
  pillLabel="Surface Fit"
  title="Choose the Surface That Matches the Problem"
  :columns='[
    { icon: "🧑‍💻", title: "Editor work", description: "Use chat or Agent Mode when the task is a bounded code change you can review in the IDE", items: ["Refactors", "Tests", "Issue-to-PR workflows"] },
    { icon: "🖥️", title: "Terminal work", description: "Use CLI when the problem lives in containers, logs, CI, or remote environments", items: ["Debugging", "Automation", "Remote sessions"] },
    { icon: "✨", title: "Review and automation", description: "Use GitHub.com and CLI when the goal is validation, automation, and fast iteration on real project work", items: ["PR review", "CI tasks", "Terminal automation"] }
  ]'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — Recent Capabilities -->
<SectionOpenerSlide
  :partNumber="2"
  title="Recent Capabilities"
  subtitle="What changed recently and why it matters in practice."
  :cards='[
    { icon: "🧭", title: "Fleet patterns", blurb: "Parallel execution across independent tasks" },
    { icon: "🪜", title: "Subagent delegation", blurb: "Split work into bounded sub-problems" },
    { icon: "🦆", title: "Rubber duck + skills", blurb: "Reason first, then execute with scoped workflows" }
  ]'
  :terminal='{ context: "Feature maturity is operational", detail: "Focus on where and how to apply each capability" }'
/>

---

<!-- SLIDE: Why Agent Mode Wins -->
<HeroStatSlide
  :partNumber="2"
  pillIcon="🆕"
  pillLabel="Recent Capability Maturity"
  title="Apply Capabilities by Task Shape, Not by Preference"
  subtitle="Fleet, subagents, and skills are most effective when scope and boundaries are explicit."
  :hero='{ value: "Capability fit", label: "Choose execution model first, then choose surface and workflow", source: "Parallel work, delegated subtasks, and scoped validation loops" }'
  :supporting='[
    { icon: "🧩", title: "Explicit boundaries", description: "Subtasks stay reviewable when scope is small and concrete" },
    { icon: "🔁", title: "Parallel execution", description: "Independent workstreams can progress without serial blocking" },
    { icon: "🧠", title: "Review-centric loop", description: "Human effort shifts from typing to validation and steering" }
  ]'
  :insight='{ icon: "💡", text: "The core question is not \"Which feature is coolest?\" It is \"Which capability matches this task shape with the least context overhead?\"" }'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Part 3 — Context Optimization -->
<SectionOpenerSlide
  :partNumber="3"
  title="Context Optimization"
  subtitle="Progressive disclosure and scope control for better outcomes."
  :cards='[
    { icon: "🪜", title: "Progressive disclosure", blurb: "Load only the context needed for the current step" },
    { icon: "🧩", title: "Scope via skills", blurb: "Use predefined workflows to avoid repeated discovery" },
    { icon: "🔌", title: "Scoped MCP access", blurb: "Limit tool context to the relevant subsystem first" }
  ]'
  :terminal='{ context: "Tighter context, cleaner output", detail: "Reduce noise before asking the model to reason" }'
/>

---

<!-- SLIDE: The Multipliers -->
<FourCardGridSlide
  :partNumber="3"
  pillIcon="🧰"
  pillLabel="Context Patterns"
  title="Patterns That Improve Execution Quality"
  :cards='[
    { icon: "🪜", title: "Progressive disclosure", description: "Start with minimal context and expand only when the task requires it" },
    { icon: "🧩", title: "Scoped skills", description: "Constrain recurring workflows to known inputs, checks, and outputs" },
    { icon: "🔌", title: "Scoped MCP", description: "Expose only relevant folders, endpoints, or entities for the task" },
    { icon: "⚙️", title: "Validation loops", description: "Run lint/test/build checks in-loop to keep edits review-ready" }
  ]'
  :insight='{ icon: "🚀", text: "Context quality beats context quantity. Scope and sequencing determine output quality more than prompt length." }'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Part 4 — Multi-Surface Patterns -->
<SectionOpenerSlide
  :partNumber="4"
  title="Multi-Surface Patterns"
  subtitle="Orchestrate app, IDE, CLI, and GitHub.com in one workflow."
  :cards='[
    { icon: "📱", title: "Plan and steer in app", blurb: "Use Copilot App sessions, terminal/browser validation, and canvases" },
    { icon: "💻", title: "Implement in IDE/CLI", blurb: "Use Agent Mode and CLI for execution by task type" },
    { icon: "🔍", title: "Review on GitHub.com", blurb: "Validate output in diff-first workflows before merge" }
  ]'
  :terminal='{ context: "Plan → Execute → Review across surfaces", detail: "Treat surfaces as a coordinated system, not isolated tools" }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="From Single-Surface Habits to Multi-Surface Execution"
  :leftItems='["Route every task through one chat surface", "Overload prompts with broad context", "Run work serially even when tasks are independent", "Validate late at the end of implementation"]'
  :rightItems='["Choose surface by task shape and tool requirements", "Expand context in layers as needed", "Run independent workstreams in parallel", "Validate in-loop with scoped checks and review"]'
  :metrics='[
    { value: "Scope first", detail: "Set boundaries before delegation" },
    { value: "Surface fit", detail: "Execution model should match task shape" },
    { value: "Review-ready", detail: "Use iterative validation and diff-based review" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Map one current task to the best Copilot surface", "Use rubber duck workflow to de-risk one design decision", "Run one bounded implementation task with explicit acceptance criteria"]'
  :thisWeek='["Add one scoped skill for a recurring workflow", "Limit one MCP integration to the minimal required scope", "Adopt plan-execute-review flow across app, IDE, CLI, and GitHub.com"]'
  :thisMonth='["Document surface-selection rules for your team", "Standardize context management patterns for common task classes", "Treat review quality as a first-class output metric"]'
  footer="Better outcomes come from better scope and surface decisions, not longer prompts."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
      { href: "https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started", label: "Getting started with the GitHub Copilot app", description: "Session model, quick chats, and project setup" },
      { href: "https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app", label: "Customizing the GitHub Copilot app", description: "Global instructions, skills, and MCP server configuration" }
    ] },
    { title: "📰 Related Reading", color: "purple", items: [
      { href: "https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/", label: "Copilot app technical preview expansion", description: "Integrated terminal/browser, parallel sessions, canvases, and MCP-backed workflows" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="GitHub Copilot: Latest Capabilities and Effective Patterns"
  subtitle="Technical usage patterns for surface selection and context optimization"
  :cards='[
    { value: "Map", detail: "task shape to the right Copilot surface" },
    { value: "Scope", detail: "context and delegation boundaries explicitly" },
    { value: "Review", detail: "in-loop and in-diff for consistent outcomes" }
  ]'
  prompt="Which context optimization pattern will you adopt first?"
/>
