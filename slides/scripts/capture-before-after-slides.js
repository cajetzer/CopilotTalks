#!/usr/bin/env node
/**
 * capture-before-after-slides.js
 * Screenshots every before/after comparison slide from tech-talk decks.
 *
 * Before/After slides are identified by:
 * - "Before ACP vs After ACP" (copilot-acp)
 * - "The Coordination Tax" (agentic-sdlc) - contains before/after
 * - Other decks with ❌/✅ two-column comparisons
 *
 * Output: captures/<deck>-before-after-N.png
 *
 * Usage:
 *   node scripts/capture-before-after-slides.js            # all decks
 *   node scripts/capture-before-after-slides.js copilot-acp # one deck
 */

const { chromium } = require("playwright");
const { spawn, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const net = require("net");

const SLIDES_DIR = path.resolve(__dirname, "..");
const DECKS_DIR = path.join(SLIDES_DIR, "tech-talks");
const OUTPUT_DIR = path.resolve(SLIDES_DIR, "..", "captures");
const PORT = 3030;
const READY_WAIT_MS = 25000;
const VIEWPORT = { width: 1920, height: 1080 };

// Decks known to have before/after comparison slides
const DECKS_WITH_BEFORE_AFTER = {
  "copilot-acp": ["Before ACP vs After ACP", "From Tool Silos to Universal Protocol"],
  "agentic-sdlc": ["The Coordination Tax", "From Manual Bottlenecks to Agentic Velocity"],
};

const filter = process.argv[2] || null;
const decks = filter
  ? Object.keys(DECKS_WITH_BEFORE_AFTER).filter((d) => d === filter)
  : Object.keys(DECKS_WITH_BEFORE_AFTER);

/**
 * Parse the deck .md file and return an array of before/after slides:
 * { slideNum: 5, label: "Before ACP vs After ACP" }
 * where slideNum is 1-indexed counting from the first --- separator.
 */
function findBeforeAfterSlides(slug) {
  const targetLabels = DECKS_WITH_BEFORE_AFTER[slug] || [];
  if (targetLabels.length === 0) {
    return [];
  }

  const deckPath = path.join(DECKS_DIR, `${slug}.md`);
  const content = fs.readFileSync(deckPath, "utf8");
  const lines = content.split("\n");

  const results = [];
  let slideNum = 0;
  let inFrontmatter = false;
  let frontmatterDone = false;
  const SLIDE_SEP = /^---\s*$/;
  const SLIDE_COMMENT = /<!--\s*SLIDE:\s*([^>]+?)(?:\s*-->|$)/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (SLIDE_SEP.test(line)) {
      if (i === 0) {
        inFrontmatter = true;
        continue;
      }
      if (inFrontmatter && !frontmatterDone) {
        inFrontmatter = false;
        frontmatterDone = true;
        slideNum = 1;
        continue;
      }
      slideNum++;
      continue;
    }

    const m = line.match(SLIDE_COMMENT);
    if (m) {
      const label = m[1].trim();
      // Check if this label matches any of our target labels
      if (targetLabels.some((target) => label.includes(target))) {
        results.push({ slideNum, label });
      }
    }
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
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
      } catch {}
    }
  } catch {}
}

function waitForPort(port, timeoutMs) {
  return new Promise((resolve) => {
    const deadline = Date.now() + timeoutMs;
    function attempt() {
      const s = new net.Socket();
      s.setTimeout(1000);
      s.connect(port, "127.0.0.1", () => {
        s.destroy();
        resolve(true);
      });
      s.on("error", () => {
        s.destroy();
        if (Date.now() < deadline) setTimeout(attempt, 1000);
        else resolve(false);
      });
      s.on("timeout", () => {
        s.destroy();
        if (Date.now() < deadline) setTimeout(attempt, 1000);
        else resolve(false);
      });
    }
    attempt();
  });
}

async function captureBeforeAfterSlides(slug) {
  const slides = findBeforeAfterSlides(slug);
  if (slides.length === 0) {
    console.log(
      `\n=== ${slug} === (no before/after slides found — skipping)`
    );
    return [];
  }

  console.log(`\n=== ${slug} === (${slides.length} before/after slides)`);
  slides.forEach((s, i) => console.log(`  [${i + 1}] Slide ${s.slideNum}: ${s.label}`));

  killPort(PORT);
  await new Promise((r) => setTimeout(r, 1000));

  const deckFile = `tech-talks/${slug}.md`;
  const child = spawn(
    "cmd",
    ["/c", `npm run dev -- ${deckFile} --port ${PORT}`],
    { cwd: SLIDES_DIR, detached: true, stdio: "ignore" }
  );
  child.unref();

  console.log(`  Waiting for server...`);
  const ready = await waitForPort(PORT, READY_WAIT_MS);
  if (!ready) {
    console.log(`  TIMEOUT — skipping all slides`);
    killPort(PORT);
    return slides.map((s) => ({ ...s, slug, ok: false }));
  }
  await new Promise((r) => setTimeout(r, 3000));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    colorScheme: "dark",
  });

  const results = [];
  for (const [idx, slide] of slides.entries()) {
    const page = await context.newPage();
    await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
    let ok = false;
    try {
      await page.goto(`http://localhost:${PORT}/${slide.slideNum}`, {
        waitUntil: "networkidle",
        timeout: 15000,
      });
      await page.waitForTimeout(1500);
      await page.evaluate(() => {
        for (const sel of [
          ".slidev-nav",
          ".slidev-progress",
          "[class*='slidev-controls']",
          ".nav-return",
        ]) {
          document.querySelectorAll(sel).forEach((el) => (el.style.display = "none"));
        }
      });
      const filename = `${slug}-before-after-${idx + 1}.png`;
      const outPath = path.join(OUTPUT_DIR, filename);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  Saved: ${filename}`);
      ok = true;
    } catch (e) {
      console.log(`  ERROR Slide ${idx + 1}: ${e.message}`);
    }
    await page.close();
    results.push({ ...slide, slug, ok });
  }

  await browser.close();
  killPort(PORT);
  await new Promise((r) => setTimeout(r, 500));
  return results;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const allResults = [];
  for (const slug of decks) {
    const results = await captureBeforeAfterSlides(slug);
    allResults.push(...results);
  }

  const failed = allResults.filter((r) => !r.ok);
  console.log(`\nDone.`);
  console.log(
    `  Total captured: ${allResults.filter((r) => r.ok).length}`
  );
  console.log(
    `  Failed: ${failed.length > 0 ? failed.map((r) => `${r.slug} slide ${r.slideNum}`).join(", ") : "none"}`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
