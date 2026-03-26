# Exercise 3.3: Show-Accuracy Check Prompt

## 🔨 Exercise

### Exercise 3.3: Show-Accuracy Check Prompt — "Encode Your Domain Knowledge"

**Lead:** Elena ⭐ | **Support:** Sarah 🤝 | **Time:** 12 min

#### 📖 The Challenge

It's 10:20 AM. Elena is reviewing the character bios and episode descriptions that got added to FanHub during Module 2. Most look fine. Then she hits Jesse Pinkman's bio.

It says he was "Walter's former college student."

He wasn't. Jesse was Walter's former *high school* student. It's one of the foundational facts of the show — Walter was a chemistry teacher, not a professor. Someone copy-pasted from a draft, Copilot hallucinated during a content generation task, and the error made it into the database.

Elena keeps reading. A second bio misattributes a line of dialogue to the wrong character. A third gets a location name wrong — calling it "the lab" when the show consistently refers to it as "the Superlab" in the later seasons the FanHub content covers.

She catches all three. It takes her 8–10 minutes of careful reading per content review pass — holding the show's canon in her head, cross-referencing against what she knows, flagging contradictions by eye. There's no systematic check. It's entirely her memory and attention.

Elena knows this pattern: it's the same as any domain compliance review. A fintech QA engineer hand-checks whether generated content uses "APR" vs. "interest rate" correctly. A healthcare writer manually verifies clinical terminology. The problem isn't catching the error once — it's that the check has to happen every time, by memory, with no automation.

Then she realizes: *"I already wrote the accuracy rules. They're sitting in `docs/breaking-bad-universe.md` from Module 1. What if I built a prompt that applied those rules automatically — every time, to any content piece, without me holding the rulebook in my head?"*

The catch: Copilot can't know whether "former college student" is wrong on its own. Someone has to encode the truth. Elena did that work in Exercise 1.6. Now she transforms that knowledge into a systematic check that runs consistently, at scale.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Elena reads each content piece against her memory of the show. Accuracy depends entirely on her recall and attention in the moment. | Elena invokes `/breaking-bad-accuracy-check` on any content piece. The prompt applies the canon rules from `docs/breaking-bad-universe.md` and flags violations systematically. |
| **Review time:** 8–10 min/piece, entirely manual | **Review time:** ~2 min/piece — reads the prompt output, confirms or overrides |
| **Error catch rate:** Varies by Elena's fatigue and recall | **Error catch rate:** 100% for rules encoded in the universe file |
| **Scale:** Elena is the bottleneck — only one person knows the canon well enough to review | **Scale:** Any team member invokes the prompt; the domain knowledge is in the file |

**Time saved:** 7 min avg × 20 content reviews/sprint = **140 min/sprint** = **60 hours/year**. More importantly: accuracy review is no longer blocked on one person's availability — the knowledge lives in a file, not a person.

#### 🎯 Your Goal

Create `.github/prompts/[show]-accuracy-check.prompt.md` — a reusable prompt that validates any FanHub content against the canon rules in your universe file. The prompt should catch errors in character descriptions, episode summaries, and lore entries, pass cleanly on correct content, and work on any content type without being hardcoded to a specific character or field.

#### 📋 Steps

1. **Scaffold the prompt file in Agent mode**

   In GitHub Copilot Chat, switch to **Agent mode**. Paste the following to generate the initial prompt file:

   ```
   Create a new prompt file at `.github/prompts/breaking-bad-accuracy-check.prompt.md`.

   The prompt should:
   - Have frontmatter with name, description, and mode: ask
   - Reference docs/breaking-bad-universe.md as its accuracy source using a #file: reference
   - Instruct Copilot to check provided content against canon rules
   - Flag anything that contradicts show canon, misattributes dialogue or roles, or
     makes claims not established in the show
   - List specific rule violations if any are found
   - Pass cleanly (with a brief confirmation) when no violations are detected
   - Accept any content type: character bio, episode description, or lore entry
   - Use ${selection} so it operates on selected text, or instruct the user to paste content after invoking it
   ```

   **For other shows:** Replace `breaking-bad` and the reference to `docs/breaking-bad-universe.md` with your show's slug and universe file path (e.g., `docs/stranger-things-universe.md`).

2. **Review and refine the prompt body**

   Open the generated `.github/prompts/breaking-bad-accuracy-check.prompt.md`. It should look roughly like this — adjust yours if it doesn't:

   ```markdown
   ---
   name: breaking-bad-accuracy-check
   description: 'Validates FanHub content for accuracy against Breaking Bad canon rules'
   mode: ask
   ---

   You are a canon accuracy reviewer for a Breaking Bad fan site.

   Check the following content against the established canon in
   [docs/breaking-bad-universe.md](../docs/breaking-bad-universe.md).

   Content to review:
   ${selection}

   For each violation found:
   - Quote the problematic text
   - Explain what the canon rule says
   - Suggest a corrected version

   If no violations are found, confirm the content is accurate and briefly explain why it passes.

   Do not flag stylistic choices or tone — only factual contradictions with established canon.
   ```

   **Key design decisions to preserve:**
   - **`#file:` or markdown link to the universe file** — this is what makes the prompt accurate. Without it, the prompt is generic and Copilot will fall back on training data, which may contain the same errors you're trying to catch.
   - **`${selection}`** — lets you select text in the editor and invoke the prompt against it, rather than copy-pasting into chat manually.
   - **No hardcoded character names** — the prompt works on any content. Don't constrain it to "Jesse Pinkman bios."
   - **Separate factual from stylistic** — the last line is important. Without it, the prompt may flag valid creative choices as errors.

3. **Test against a known-bad input — find the seed data error**

   The FanHub seed data contains a deliberately wrong character description. Use this bio as your test input — either select it in the editor and invoke the prompt, or paste it directly in chat after invoking `/breaking-bad-accuracy-check`:

   ```
   Jesse Pinkman is Walter White's former college student and chemistry protégé.
   Now working as Walter's partner in methamphetamine production, Jesse handles
   street-level distribution through his connections in Albuquerque's drug scene.
   ```

   **Expected result:** The prompt should flag "former college student" as a canon violation. Jesse was Walter's former *high school* student — Walter was a high school chemistry teacher, not a college professor. The corrected version should read "former high school student."

   If the prompt doesn't catch this, check that your universe file (from Exercise 1.6) correctly states Jesse's role and that the prompt file actually references it. The prompt is only as accurate as the rules you encoded.

4. **Test against a correct input — confirm it passes cleanly**

   Now test a correctly described character to confirm the prompt doesn't generate false positives:

   ```
   Walter White is a former Albuquerque high school chemistry teacher diagnosed
   with inoperable lung cancer. Faced with mounting medical bills, he begins
   cooking methamphetamine with former student Jesse Pinkman, initially to
   secure his family's financial future.
   ```

   **Expected result:** The prompt should confirm this passes — the key facts (high school teacher, lung cancer diagnosis, Jesse as a former student) are consistent with established canon.

5. **Test on your own show's content (non-Breaking Bad participants)**

   If you're building a site for a different show, find or write one intentionally wrong content description and one accurate one from your show, then run both through your show's accuracy-check prompt.

   **Stranger Things example (wrong):**
   ```
   Eleven's psychokinetic powers were the result of her mother's exposure
   to LSD during CIA experiments conducted at Hawkins Lab.
   ```
   *(The show depicts MKUltra-style experiments, but the specific mechanism for Eleven's powers is tied to her mother Teresa's participation — test whether your prompt correctly handles this level of canon nuance.)*

   The goal is the same: one failure case, one passing case. The prompt should distinguish between them using only the rules in your universe file.

#### ✅ Success Criteria

- [ ] `.github/prompts/[show]-accuracy-check.prompt.md` exists with correct frontmatter (`name`, `description`, `mode: ask`)
- [ ] The prompt references `docs/[show]-universe.md` using a `#file:` reference or markdown link
- [ ] The prompt is invokable in Copilot Chat as `/[show]-accuracy-check`
- [ ] The prompt catches the "former college student" error (or equivalent error for your show)
- [ ] The prompt passes cleanly on the correctly-described Walter White bio (or equivalent for your show)
- [ ] The prompt works on any content type — not hardcoded to a specific character or field

#### 📚 Official Docs

- [Copilot prompt files](https://code.visualstudio.com/docs/copilot/customization/prompt-files) — Full reference for `.prompt.md` frontmatter, variables, and invocation patterns

---

## 🔗 What You Built

**In this exercise:**
- `.github/prompts/[show]-accuracy-check.prompt.md` — A reusable canon accuracy checker that applies the rules from your universe file to any content piece on demand

**How it compounds:**

| Previous Modules | This Exercise | Combined Power |
|------------------|---------------|----------------|
| Exercise 1.6: `docs/[show]-universe.md` with canon rules | Prompt that references and applies those rules | Domain knowledge encoded once → applied systematically at every content review |
| Exercise 3.1: Test-generation prompt | Accuracy-check prompt | Two audit layers: code correctness (tests) + content correctness (canon check) |
| Exercise 3.2: Context-aware prompt with linked docs | Universe file as the linked source of truth | The pattern generalizes: any structured knowledge file can become an accuracy prompt's reference |

**Why this matters:** Elena's insight — "I already wrote the rules; I just hadn't automated their application" — describes a real and recurring problem on AI-assisted teams. Domain experts encode knowledge in documents. That knowledge sits idle unless it's wired into the workflows that need it. Prompt files are the wire. The fan site makes this concrete: the same pattern applies to clinical terminology validation in healthcare, regulatory compliance checking in fintech, brand voice auditing in e-commerce. **You don't just write the rules once — you build the check that applies them every time.**

---

## ➡️ Next Module

**[Module 4: Agent Skills](../04-agent-skills/README.md)** — You've built prompts that apply domain knowledge on demand. Next: package that knowledge into agent skills that Copilot can call proactively, without being explicitly invoked — so the accuracy check happens as part of the workflow, not after it.

> *"The prompt catches errors when Elena remembers to run it. What I want is a skill that runs as part of content generation — so the check is baked in, not bolted on."*
> — David, about to build the lore validation skill

---
