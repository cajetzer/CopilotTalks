---
applyTo: "slides/**/*.md"
description: "Use when editing Slidev deck markdown files, section opener slides, or raw HTML in slides. Covers balanced HTML, wrapper structure, and required deck build validation."
---

## ⛔ NEVER Restore from Git Without Asking First

**You must NEVER run `git checkout <file>` or any git command that discards local changes to a slide deck without first asking the user for explicit permission.** This is an absolute rule with no exceptions.

Restoring from git is destructive and irreversible — it will silently discard all in-session edits. Even if the file appears corrupted or broken, the correct action is to:

1. **Stop and tell the user** what you observed (file size, apparent corruption, etc.)
2. **Ask explicitly**: "The file appears corrupted. Can I restore it from git and reapply changes, or do you want to handle this differently?"
3. **Wait for confirmation** before touching the file

✅ Correct:
> "The file is only 3905 bytes and appears to contain only the insert snippet. It may have been overwritten accidentally. Should I restore from git and reapply all session changes?"

❌ Wrong — never do this without asking:
```
git checkout slides/workshop/06-custom-agents.md
```

This rule applies to `git checkout`, `git restore`, `git reset`, and any equivalent command that overwrites working tree files.

---

## File Encoding (CRITICAL)

Slide deck files **must be saved as UTF-8 without BOM**. A UTF-8 BOM (`EF BB BF`) at the start of the file prevents Slidev from parsing the frontmatter, causing it to render as a visible slide.

- When creating a new slide file, always write with `New-Object System.Text.UTF8Encoding $false` (no BOM) or equivalent
- Never use `[System.IO.File]::WriteAllText` without explicitly passing a no-BOM encoding
- If a deck renders its frontmatter as slide 1, strip the BOM: `$content = $content.TrimStart([char]0xFEFF)`

## Literal Dashes in Slide Content

**Never write literal `---` inside slide HTML content.** Slidev treats any `\n---\n` as a slide separator, so `---` appearing in a code block, frontmatter example, or any other content will split the slide.

Always use the HTML entity `&#45;&#45;&#45;` when you need to display `---` inside slide content.

✅ Correct (inside a code example):
```html
<div class="text-purple-300">&#45;&#45;&#45;</div>
```

❌ Wrong — splits the slide at that line:
```html
<div class="text-purple-300">---</div>
```



**`---` must always be on its own line, surrounded by newlines (`\n---\n`) — never on the same line as any other content.**

✅ Correct:
```
</div>

---

<!-- SLIDE: Next Slide -->
<div class="...">
```

❌ Wrong — breaks counting and causes parse errors:
```
</div>
---<!-- SLIDE: Next Slide -->
```

**Never use per-slide frontmatter blocks** between `---` separators. This means never writing:
```
---
layout: two-cols
---
```
or
```
---
class: text-center
---
```

These create double-separator patterns that make simple `\n---\n` counting impossible. Use CSS instead:
- Replace `layout: two-cols` with `<div class="grid grid-cols-2 gap-4">` inside the content wrapper
- Replace `class: text-center` with `class="... text-center ..."` on the outer content div

With this rule enforced, **every `\n---\n` = one slide boundary** — no special-case parsing needed.

## Finding and Identifying Slides

Every content slide must begin with a named HTML comment on its own line, after a blank line:

```
---

<!-- SLIDE: Slide Name Here -->
<div class="...">
```

Never write `---<!-- SLIDE: Name -->` on the same line — always a blank line between the separator and the comment.

### Counting and finding slides

**The Nth `<!-- SLIDE: -->` comment = Slidev slide N** (1-indexed). This is the canonical name-based mapping.

**To find slide N by number:**
```powershell
$comments = [regex]::Matches($content, '<!-- SLIDE:.*?-->')
$name = $comments[$N - 1].Value  # e.g. N=5 → index 4
```

**To find a slide by name:**
```powershell
[regex]::Match($content, '(?s)<!-- SLIDE: Mindset Shift -->.*?(?=\n---\n)').Value
```

**When editing a slide**, refer to it by name ("the Mindset Shift slide"), not by position number.

## HTML Safety

- Treat Slidev markdown as Vue template code whenever a slide includes raw HTML. Every opened tag must have a matching closing tag before the next `---` slide separator.
- Prefer one obvious outer wrapper for custom section-opener slides. Avoid deeply nested wrapper stacks unless they are necessary for layout.
- When inserting or rearranging blocks, account for wrapper balance explicitly instead of relying on visual scanning.
- After every edit to a Slidev deck, run the build for that specific deck before concluding the task. Editor diagnostics are not sufficient to catch all Vue or Slidev parse errors.
- If a build fails with `Element is missing end tag` or `Invalid end tag`, inspect the most recently edited slide first and verify wrapper balance from outermost container to innermost content.
