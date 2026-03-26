---
applyTo: "slides/**/*.md"
description: "Use when editing Slidev deck markdown files, section opener slides, or raw HTML in slides. Covers balanced HTML, wrapper structure, and required deck build validation."
---

# Slidev Deck Editing

## Finding and Identifying Slides

**Never split a Slidev file on `---` to count or index slides.** The `---` separator also appears inside slide content (code examples, markdown tables, horizontal rules), which makes counting unreliable.

Instead, every content slide must begin with a named HTML comment:

```html
<!-- SLIDE: Slide Name Here -->
```

### Counting and finding slides

**The Nth `<!-- SLIDE: -->` comment = Slidev slide N** (1-indexed). This is the canonical mapping between slide numbers and file content — no counting of `---` needed.

**To find slide N by number:**
```powershell
$comments = [regex]::Matches($content, '<!-- SLIDE:.*?-->')
$name = $comments[$N - 1].Value  # e.g. N=5 → index 4
```

**To find a slide by name:**
```powershell
[regex]::Match($content, '(?s)<!-- SLIDE: Mindset Shift -->.*?(?=\n---\n)').Value
```

**When creating a new slide**, always add the `<!-- SLIDE: Name -->` comment as the first line of the slide's content block. Use the slide's pill label or heading as the name.

**When editing a slide**, refer to it by name ("the Mindset Shift slide"), not by position number.

## HTML Safety

- Treat Slidev markdown as Vue template code whenever a slide includes raw HTML. Every opened tag must have a matching closing tag before the next `---` slide separator.
- Prefer one obvious outer wrapper for custom section-opener slides. Avoid deeply nested wrapper stacks unless they are necessary for layout.
- When inserting or rearranging blocks, account for wrapper balance explicitly instead of relying on visual scanning.
- After every edit to a Slidev deck, run the build for that specific deck before concluding the task. Editor diagnostics are not sufficient to catch all Vue or Slidev parse errors.
- If a build fails with `Element is missing end tag` or `Invalid end tag`, inspect the most recently edited slide first and verify wrapper balance from outermost container to innermost content.
