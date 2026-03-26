---
applyTo: "slides/**/*.md"
description: "Use when editing Slidev deck markdown files, section opener slides, or raw HTML in slides. Covers balanced HTML, wrapper structure, and required deck build validation."
---

# Slidev Deck Editing

## Slide Separator Rules (CRITICAL)

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
