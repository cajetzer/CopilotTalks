#!/usr/bin/env node
/**
 * capture-twocol-slides.js
 * Identifies and screenshots all TwoColComparisonSlide instances across tech-talk decks.
 *
 * Detection: A slide is TwoColComparison if its HTML contains grid-cols-2 AND
 * both columns have list-like content (items/cards), excluding:
 *   - CodeExplainerSlide: one column is primarily a code block (font-mono pre/code, language tag)
 *   - CardGridSlide: has a nested grid (grid-cols-2 inside grid-cols-2 = 2×2)
 *   - BeforeAfterMetricsSlide: has explicit metric value cards with arrows/percentages
 *   - Terminal slides: contain TerminalFrame component
 *
 * Output: captures/twocol/<deck>-<slideNum>-<slug>.png
 *
 * Usage:
 *   node scripts/capture-twocol-slides.js            # all decks
 *   node scripts/capture-twocol-slides.js copilot-cli # one deck
 */

const { chromium } = require("playwright");
const { spawn, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const net = require("net");

const SLIDES_DIR = path.resolve(__dirname, "..");
const DECKS_DIR = path.join(SLIDES_DIR, "tech-talks");
const OUTPUT_DIR = path.resolve(SLIDES_DIR, "..", "captures", "twocol");
const PORT = 3030;
const READY_WAIT_MS = 30000;
const VIEWPORT = { width: 1920, height: 1080 };

const ACTIVE_DECKS = [
  "agent-teams",
  "agentic-journey",
  "agentic-sdlc",
  "agentic-workflows",
  "copilot-acp",
  "copilot-azure-mcp",
  "copilot-chat-internals",
  "copilot-cli",
  "copilot-code-review",
  "copilot-hooks",
  "copilot-memory",
  "copilot-primitives",
  "copilot-sdk",
  "copilot-web",
  "enterprise-patterns",
  "mcp-apps",
  "vscode-latest",
];

const filter = process.argv[2] || null;
const decks = filter ? ACTIVE_DECKS.filter(d => d === filter) : ACTIVE_DECKS;

/**
 * Parse a deck file and return slides that match TwoColComparison pattern.
 * Returns: [{ slideNum, name, reason }]
 */
function findTwoColSlides(slug) {
  const deckPath = path.join(DECKS_DIR, `${slug}.md`);
  if (!fs.existsSync(deckPath)) return [];
  const content = fs.readFileSync(deckPath, "utf8");

  // Split into slides by --- separator
  // First, find all slide boundaries
  const lines = content.split("\n");
  const slides = [];
  let slideNum = 0;
  let currentSlideLines = [];
  let inFrontmatter = false;
  let frontmatterDone = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^---\s*$/.test(line)) {
      if (i === 0) {
        inFrontmatter = true;
        continue;
      }
      if (inFrontmatter && !frontmatterDone) {
        inFrontmatter = false;
        frontmatterDone = true;
        slideNum = 1;
        currentSlideLines = [];
        continue;
      }
      // End of current slide, start of next
      if (slideNum > 0) {
        slides.push({ num: slideNum, content: currentSlideLines.join("\n") });
      }
      slideNum++;
      currentSlideLines = [];
      continue;
    }
    if (frontmatterDone) {
      currentSlideLines.push(line);
    }
  }
  // Last slide
  if (slideNum > 0 && currentSlideLines.length > 0) {
    slides.push({ num: slideNum, content: currentSlideLines.join("\n") });
  }

  const results = [];
  for (const slide of slides) {
    const html = slide.content;

    // Extract slide name from <!-- SLIDE: Name --> comment
    const nameMatch = html.match(/<!--\s*SLIDE:\s*(.+?)\s*-->/);
    const name = nameMatch ? nameMatch[1].trim() : `slide-${slide.num}`;

    // Skip structural slides (Title, TOC, Section Opener, Core Question, References, Thank You, Before/After, WYCDT)
    if (/TitleSlide|TocSlide|SectionOpenerSlide|CoreQuestionSlide|ReferencesSlide|ThankYouSlide|BeforeAfterSlide|WhatYouCanDoTodaySlide/.test(html)) {
      continue;
    }

    // Must have grid-cols-2 — the primary signal for a 2-column layout
    if (!/grid-cols-2/.test(html)) continue;

    // EXCLUDE: TerminalFrame component
    if (/TerminalFrame/.test(html)) continue;

    // EXCLUDE: Nested grid-cols-2 inside grid-cols-2 → likely a CardGridSlide (2×2)
    // Count occurrences of grid-cols-2
    const gridMatches = html.match(/grid-cols-2/g) || [];
    if (gridMatches.length >= 2) continue;

    // EXCLUDE: CodeExplainerSlide — one column dominated by actual code
    // Real code signals: <pre>, <code>, syntax highlighting classes, triple backticks
    // Note: font-mono with bg-gray is used for styled content divs (NOT code) — don't exclude those
    const hasRealCode = /<pre[\s>]|<code[\s>]|language-\w+|```/.test(html);
    if (hasRealCode) continue;

    // EXCLUDE: Slides with large font-mono blocks that contain code-like content
    // (config files, YAML, JSON displayed in styled divs)
    // Heuristic: if font-mono appears with keywords like "const", "import", "function", "npm", etc.
    const hasMonoCodeBlock = /font-mono/.test(html) && /\b(?:const |let |var |import |function |npm |pip |def |class )\b/.test(html);
    if (hasMonoCodeBlock) continue;

    // INCLUDE: what's left should be TwoColComparison
    results.push({
      slideNum: slide.num,
      name,
      reason: "grid-cols-2 with dual content columns",
    });
  }

  return results;
}

function killPort(port) {
  try {
    const result = execSync(`netstat -ano | findstr ":${port} "`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });
    const pids = new Set();
    for (const line of result.split("\n")) {
      const m = line.trim().match(/\s+(\d+)$/);
      if (m && m[1] !== "0") pids.add(m[1]);
    }
    for (const pid of pids) {
      try { execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" }); } catch {}
    }
  } catch {}
}

function waitForPort(port, timeoutMs) {
  return new Promise((resolve) => {
    const deadline = Date.now() + timeoutMs;
    function attempt() {
      const s = new net.Socket();
      s.setTimeout(1000);
      s.connect(port, "127.0.0.1", () => { s.destroy(); resolve(true); });
      s.on("error", () => { s.destroy(); if (Date.now() < deadline) setTimeout(attempt, 1000); else resolve(false); });
      s.on("timeout", () => { s.destroy(); if (Date.now() < deadline) setTimeout(attempt, 1000); else resolve(false); });
    }
    attempt();
  });
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").substring(0, 60);
}

async function captureDeckSlides(slug) {
  const slides = findTwoColSlides(slug);
  if (slides.length === 0) {
    console.log(`  ${slug}: 0 TwoCol slides — skipping`);
    return [];
  }

  console.log(`\n=== ${slug} === (${slides.length} TwoCol slides)`);
  slides.forEach((s, i) => console.log(`  [${i + 1}] Slide ${s.slideNum}: ${s.name}`));

  killPort(PORT);
  await new Promise(r => setTimeout(r, 1000));

  const deckFile = `tech-talks/${slug}.md`;
  const child = spawn("cmd", ["/c", `npm run dev -- ${deckFile} --port ${PORT}`], {
    cwd: SLIDES_DIR,
    detached: true,
    stdio: "ignore",
  });
  child.unref();

  console.log(`  Waiting for server...`);
  const ready = await waitForPort(PORT, READY_WAIT_MS);
  if (!ready) {
    console.log(`  TIMEOUT — skipping`);
    killPort(PORT);
    return slides.map(s => ({ ...s, slug, ok: false }));
  }
  await new Promise(r => setTimeout(r, 4000));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT, colorScheme: "dark" });

  const results = [];
  for (const slide of slides) {
    const page = await context.newPage();
    await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
    let ok = false;
    try {
      await page.goto(`http://localhost:${PORT}/${slide.slideNum}`, {
        waitUntil: "networkidle",
        timeout: 15000,
      });
      await page.waitForTimeout(2000);
      // Hide Slidev UI chrome
      await page.evaluate(() => {
        for (const sel of [".slidev-nav", ".slidev-progress", "[class*='slidev-controls']", ".nav-return"]) {
          document.querySelectorAll(sel).forEach(el => el.style.display = "none");
        }
      });
      const filename = `${slug}-s${String(slide.slideNum).padStart(2, "0")}-${slugify(slide.name)}.png`;
      const outPath = path.join(OUTPUT_DIR, filename);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  ✓ ${filename}`);
      ok = true;
    } catch (e) {
      console.log(`  ✗ Slide ${slide.slideNum} (${slide.name}): ${e.message}`);
    }
    await page.close();
    results.push({ ...slide, slug, ok });
  }

  await browser.close();
  killPort(PORT);
  await new Promise(r => setTimeout(r, 500));
  return results;
}

async function main() {
  // Clean and recreate output dir
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
    console.log("Cleaned captures/twocol/");
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // First pass: scan all decks and show what we found
  console.log("=== SCAN PHASE ===\n");
  const scanResults = {};
  let totalSlides = 0;
  for (const slug of decks) {
    const slides = findTwoColSlides(slug);
    scanResults[slug] = slides;
    totalSlides += slides.length;
    if (slides.length > 0) {
      console.log(`  ${slug}: ${slides.length} slides`);
      slides.forEach(s => console.log(`    - Slide ${s.slideNum}: ${s.name}`));
    }
  }
  console.log(`\nTotal TwoColComparison candidates: ${totalSlides} across ${Object.values(scanResults).filter(s => s.length > 0).length} decks\n`);

  // Second pass: capture screenshots
  console.log("=== CAPTURE PHASE ===");
  const allResults = [];
  for (const slug of decks) {
    if (scanResults[slug].length === 0) continue;
    const results = await captureDeckSlides(slug);
    allResults.push(...results);
  }

  const captured = allResults.filter(r => r.ok).length;
  const failed = allResults.filter(r => !r.ok);
  console.log(`\n${"=".repeat(50)}`);
  console.log(`Done. ${captured}/${allResults.length} slides captured.`);
  if (failed.length > 0) {
    console.log(`Failed: ${failed.map(r => `${r.slug}:${r.slideNum}`).join(", ")}`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
