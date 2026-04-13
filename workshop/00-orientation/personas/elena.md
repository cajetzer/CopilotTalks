---
status: active
updated: 2026-04-08
name: Elena Rodriguez
archetype: Quality Champion
experience: 8 years
lens: Coverage, edge cases, rigor without shortcuts
voice: Methodical, professionally suspicious, lights up when AI catches what she would catch
quirk: "My job is finding what breaks. I'm going to need edge cases. Lots of them."
workshop-role: Testing, quality assurance
transformation: From AI-skeptical QA to AI-assisted QA
content-types: [workshop, tech-talk]
---

## Background

- Senior QA Engineer who transitioned from manual to automation testing
- Expert in testing frameworks (Jest, Pytest, Selenium, Playwright)
- Passionate about shift-left testing and test-driven development
- Bridges the gap between development and quality assurance teams

## Formative Experiences

**The Bug That Shipped on Her Watch (2020)**
Elena was the QA lead when a payment processing bug slipped through to production. The code had 94% test coverage. The bug lived in the 6%. Specifically, in a negative-amount edge case that wasn't in any spec, wasn't in any ticket, and wasn't in any of the 847 test cases she'd signed off on. It cost the company $40,000 in manual remediation and a client relationship. She wasn't fired. She wished she had been — it would have been cleaner than living with the postmortem. She rewrote her entire edge case checklist from scratch that month. The list now has 34 items. She reviews it before signing off on every release. Her colleagues think she's intense. She thinks coverage percentages are a confidence trick.

**The Testing Framework Migration (2022)**
Her team migrated from a legacy Selenium suite to Playwright. The migration took three months. The old suite had 1,200 tests. The new suite had 800. Elena deleted 400 tests — not because they were wrong, but because they were testing implementation details instead of behavior, and they were slowing down the pipeline and lying to the team about what was actually covered. Her manager was horrified. She made him watch her delete them one by one and explain each one. By test 50, he'd stopped arguing. She calls this *"the audit that taught me that more tests isn't the same as better testing."*

**The Colleague Who Wrote Perfect Unit Tests (2023)**
Elena worked alongside a backend developer named Tom who wrote impeccable unit tests — clean, readable, isolated, all green. Tom's integration tests were an afterthought. One day a data contract change upstream broke three of Tom's features simultaneously. His unit tests all passed. Elena's integration tests caught it in 40 seconds. Tom was embarrassed. Elena wasn't triumphant — she was worried, because she knew there were ten other places where the same thing could happen. She scheduled a team workshop on test strategy the following week. She now describes unit tests and integration tests as *"two different questions — you need both or you're only measuring half of what can go wrong."*

## Goals

- Create comprehensive test suites faster without sacrificing coverage
- Generate meaningful test cases that catch edge cases humans might miss
- Automate repetitive test creation so she can focus on test strategy
- Help developers write better tests from the start

## Fears

- AI-generated tests that look complete but miss critical scenarios
- Losing the thoughtful analysis that makes testing effective
- Tests that pass but don't actually validate business requirements
- Becoming a "test generator operator" instead of a quality strategist

## Voice in Exercises

Methodical and detail-oriented, always asking "but what about the edge case?" Professionally suspicious of anything that claims to be complete — her job is finding what breaks. Lights up when a tool actually catches something she would have caught herself.

## Arc Notes (by module)

| Module | State | Sample Voice |
|--------|-------|--------------|
| 00 — Orientation | Skeptical of AI-generated tests. Coverage theater is worse than no tests. | "I've seen 100% coverage on code with zero real assertions. I need to see what it actually generates." |
| 01 — Instructions | Sees instructions as test standard enforcement. | "If I can tell it what counts as a complete test, that's different." |
| 02 — Agent Plan Mode | Appreciates systematic approach before writing. | "It plans the test suite before writing individual cases. That's test strategy thinking." |
| 03 — Custom Prompts | Excited by edge-case-focused prompts. | "I can prompt it to think about boundary conditions. That's actually good." |
| 04 — Agent Skills | Skills for test patterns she writes repeatedly. Real time savings. | "I write the same mutation test setup every sprint. Not anymore." |
| 05 — MCP Servers | Can access real schemas and APIs for realistic test data. | "It's generating tests against the actual API contract. That's meaningful." |
| 06 — Custom Agents | Convinced. AI-assisted QA catches more, not less. | "It found an edge case I would have found on day three. On the first pass." |
