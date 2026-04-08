#!/usr/bin/env node
/**
 * inspect-slide.js — Slide inspection harness for Copilot
 *
 * Usage:
 *   node scripts/inspect-slide.js <deck-slug> <slide-number> [--port 3030]
 *   node scripts/inspect-slide.js start <deck-slug> [--port 3030]   # start slidev dev once
 *   npm run inspect -- agent-teams 5
 *   npm run inspect -- start agent-teams
 *
 * Slidev dev lifecycle:
 *   - The script NEVER stops slidev dev. It starts it once if the port is dead,
 *     then leaves it running for the entire editing session.
 *   - Subsequent inspect calls reuse the already-running server — no restart cost.
 *   - To start the server explicitly before your first inspection:
 *       node scripts/inspect-slide.js start <deck-slug>
 *
 * What it does per inspection:
 *   1. Finds the deck .md file by slug
 *   2. Starts slidev dev ONLY if port is not responding (leaves it running after)
 *   3. Takes a Playwright screenshot of the slide
 *   4. Detects overflow via DOM inspection
 *   5. Detects missing progress dots via MD source analysis
 *   6. Detects section color inconsistency via MD source analysis
 *   7. Prints a JSON report to stdout
 *   8. Saves screenshot to .harness/<deck>-<N>.png
 */

const { chromium } = require('playwright');
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

// ── Config ────────────────────────────────────────────────────────────────────

const SLIDES_DIR = path.resolve(__dirname, '..');
const HARNESS_DIR = path.join(SLIDES_DIR, '.harness');
const SLIDEV_READY_TIMEOUT_MS = 60_000;
const SLIDEV_POLL_INTERVAL_MS = 500;
const VIEWPORT = { width: 1920, height: 1080 };

// ── Arg parsing ───────────────────────────────────────────────────────────────

const args = process.argv.slice(2);

if (args.length < 1 || args[0] === '--help') {
  console.log('Usage:');
  console.log('  node scripts/inspect-slide.js start <deck-slug> [--port 3030]');
  console.log('  node scripts/inspect-slide.js <deck-slug> <slide-number> [--port 3030]');
  console.log('Examples:');
  console.log('  node scripts/inspect-slide.js start agent-teams');
  console.log('  node scripts/inspect-slide.js agent-teams 5');
  console.log('  node scripts/inspect-slide.js agentic-sdlc 12 --port 3031');
  process.exit(0);
}

const isStartCmd = args[0] === 'start';
const deckSlug = isStartCmd ? args[1] : args[0];
const isScanCmd = !isStartCmd && args[1] === 'scan';
const slideNum = (isStartCmd || isScanCmd) ? null : parseInt(args[1], 10);
const portIdx = args.indexOf('--port');
const port = portIdx !== -1 ? parseInt(args[portIdx + 1], 10) : 3030;

if (!deckSlug) {
  console.error('Error: deck-slug is required');
  process.exit(1);
}

if (!isStartCmd && !isScanCmd && (isNaN(slideNum) || slideNum < 1)) {
  console.error('Error: slide-number must be a positive integer');
  process.exit(1);
}

// ── Find deck file ────────────────────────────────────────────────────────────

function findDeckFile(slug) {
  const searchDirs = ['tech-talks', 'exec-talks', 'workshop'];
  for (const dir of searchDirs) {
    const candidate = path.join(SLIDES_DIR, dir, `${slug}.md`);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

const deckFile = findDeckFile(deckSlug);
if (!deckFile) {
  console.error(`Error: could not find deck file for slug "${deckSlug}"`);
  console.error('Searched: tech-talks/, exec-talks/, workshop/');
  process.exit(1);
}

// ── Port check ────────────────────────────────────────────────────────────────

function isPortResponding(p) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${p}/`, (res) => {
      res.resume();
      resolve(true);
    });
    req.setTimeout(1000);
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
  });
}

async function waitForPort(p, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isPortResponding(p)) return true;
    await new Promise(r => setTimeout(r, SLIDEV_POLL_INTERVAL_MS));
  }
  return false;
}

// ── Slidev dev start ──────────────────────────────────────────────────────────

function startSlidevDev(file, p) {
  const relFile = path.relative(SLIDES_DIR, file).replace(/\\/g, '/');
  console.error(`[harness] Starting slidev dev: ${relFile} on port ${p}`);

  // On Windows, shell:true is required for npx to resolve correctly
  const child = spawn(
    'npx',
    ['slidev', relFile, '--port', String(p)],
    {
      cwd: SLIDES_DIR,
      detached: true,
      stdio: 'ignore',
      shell: true,
    }
  );
  child.unref();
  console.error(`[harness] Slidev dev PID: ${child.pid}`);
  return child;
}

// ── MD analysis ───────────────────────────────────────────────────────────────

/**
 * Split the deck MD into slide blocks by \n---\n separators.
 * Returns array of { index (1-based), name, content } objects.
 */
function parseSlideDeck(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, ''); // strip BOM
  // Normalize line endings before splitting so \r\n files work on Windows
  const normalized = raw.replace(/\r\n/g, '\n');
  // Skip the frontmatter block (content before the second --- line)
  const afterFrontmatter = normalized.replace(/^---\n[\s\S]*?\n---\n/, '');
  const blocks = afterFrontmatter.split(/\n---\n/);
  return blocks.map((content, i) => {
    const nameMatch = content.match(/<!--\s*SLIDE:\s*(.+?)\s*-->/);
    return {
      index: i + 1,
      name: nameMatch ? nameMatch[1].trim() : `Slide ${i + 1}`,
      content,
    };
  });
}

/**
 * Determine the Part (1-4) a slide belongs to by scanning backwards through
 * the slide list for the most recent section opener.
 */
function getSlideSection(slides, slideIndex) {
  const sectionPattern = /Part\s+(\d+)/i;
  for (let i = slideIndex - 1; i >= 0; i--) {
    const m = slides[i].name.match(sectionPattern) || slides[i].content.match(/Part\s+(\d+)/i);
    if (m) return parseInt(m[1], 10);
  }
  return null;
}

/**
 * Check if a slide is a section opener (exempt from progress dot requirement).
 */
function isSectionOpener(slide) {
  return /Part\s+\d+/.test(slide.name) || /^Part \d+ —/.test(slide.name);
}

/**
 * Check if a slide has progress dots (the w-2 h-2 rounded-full dot pattern).
 */
function hasProgressDots(slide) {
  // Match both w-2 h-2 (div style) and w-2.5 h-2.5 (span style) dot patterns
  return /w-2\.?5?\s+h-2\.?5?\s+rounded-full/.test(slide.content);
}

/**
 * Extract the primary Tailwind color family from a slide's pill breadcrumb.
 * Looks for the first `from-{color}-` class in the slide content.
 * Returns e.g. "blue", "indigo", "purple", "cyan", "pink", or null.
 */
function extractPillColor(slide) {
  const m = slide.content.match(/from-([a-z]+)-\d{3}\/\d+\s+to-([a-z]+)-/);
  return m ? m[1] : null;
}

/**
 * Check color consistency for slide N within its section.
 * Returns { inconsistent: bool, expected: string|null, actual: string|null, reason: string }
 */
function analyzeColorConsistency(slides, n) {
  const slide = slides[n - 1];
  if (!slide) return { inconsistent: false, expected: null, actual: null, reason: 'slide not found' };

  // Title, ToC, and section openers are exempt
  if (n === 1 || isSectionOpener(slide)) {
    return { inconsistent: false, expected: null, actual: null, reason: 'exempt (title or section opener)' };
  }

  const part = getSlideSection(slides, n);
  if (!part) return { inconsistent: false, expected: null, actual: null, reason: 'no section detected' };

  // Find the section opener index (1-based)
  let sectionStartIdx = null;
  for (let i = n - 2; i >= 0; i--) {
    if (isSectionOpener(slides[i]) || /Part\s+\d+/.test(slides[i].content)) {
      sectionStartIdx = i + 1; // 1-based
      break;
    }
  }
  if (!sectionStartIdx) return { inconsistent: false, expected: null, actual: null, reason: 'section start not found' };

  // Find the first content slide in the section (skip the opener itself)
  let referenceColor = null;
  let referenceSlide = null;
  for (let i = sectionStartIdx; i < slides.length; i++) {
    const s = slides[i];
    if (i + 1 === n) break; // stop before the current slide
    if (!isSectionOpener(s)) {
      const c = extractPillColor(s);
      if (c) { referenceColor = c; referenceSlide = i + 1; break; }
    }
  }

  const actualColor = extractPillColor(slide);

  if (!actualColor) return { inconsistent: false, expected: referenceColor, actual: null, reason: 'no pill color detected on this slide' };
  if (!referenceColor) return { inconsistent: false, expected: null, actual: actualColor, reason: 'no reference slide found in section yet' };

  if (actualColor !== referenceColor) {
    return {
      inconsistent: true,
      expected: referenceColor,
      actual: actualColor,
      reason: `s${n} uses "${actualColor}" but Part ${part} reference slide s${referenceSlide} uses "${referenceColor}"`,
    };
  }

  return { inconsistent: false, expected: referenceColor, actual: actualColor, reason: 'color matches section' };
}


function analyzeSlideForDots(slides, n) {
  const slide = slides[n - 1];
  if (!slide) return { missingDots: false, sectionPart: null, exempt: true, reason: 'slide not found' };

  // Title slide, ToC, section openers are exempt
  if (n === 1) return { missingDots: false, sectionPart: null, exempt: true, reason: 'title slide' };
  if (isSectionOpener(slide)) return { missingDots: false, sectionPart: null, exempt: true, reason: 'section opener' };

  const part = getSlideSection(slides, n);

  // Only Part 2+ require dots (Part 1 has fewer, and some don't use the full pattern)
  if (!part || part < 2) return { missingDots: false, sectionPart: part, exempt: true, reason: 'Part 1 or no section' };

  const dots = hasProgressDots(slide);
  return {
    missingDots: !dots,
    sectionPart: part,
    exempt: false,
    reason: dots ? 'dots present' : 'dots missing — slide is in Part ' + part,
  };
}

// ── Playwright screenshot + overflow detection ────────────────────────────────

async function inspectSlide(slideNumber, p) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();

  const url = `http://localhost:${p}/${slideNumber}`;
  console.error(`[harness] Navigating to ${url}`);

  await page.goto(url, { waitUntil: 'networkidle', timeout: 15_000 });

  // Extra wait for Slidev transitions/animations
  await page.waitForTimeout(800);

  // Overflow detection via DOM
  const overflow = await page.evaluate(() => {
    // Try .slidev-layout first, fall back to .slide-content or body
    const layout =
      document.querySelector('.slidev-layout') ||
      document.querySelector('[class*="slide-content"]') ||
      document.querySelector('.slidev-slide');

    if (!layout) return { detected: false, reason: 'no layout element found' };

    const scrollOverflow = layout.scrollHeight > layout.clientHeight + 6;
    if (scrollOverflow) {
      return {
        detected: true,
        reason: `scrollHeight ${layout.scrollHeight} > clientHeight ${layout.clientHeight}`,
      };
    }

    // Check if any visible child element bleeds below the viewport
    const vh = window.innerHeight;
    const bleedingEl = [...layout.querySelectorAll('*')].find(el => {
      if (el.children.length > 0) return false; // only leaf nodes
      const r = el.getBoundingClientRect();
      return r.bottom > vh + 6 && r.width > 0 && r.height > 0;
    });

    if (bleedingEl) {
      const r = bleedingEl.getBoundingClientRect();
      return {
        detected: true,
        reason: `element bleeds to y=${Math.round(r.bottom)} (viewport bottom=${vh}): ${bleedingEl.className.slice(0, 60)}`,
      };
    }

    return { detected: false, reason: 'no overflow detected' };
  });

  // Slide count shown in Slidev footer (e.g. "5 / 25") — lets us detect wrong-deck
  const renderedTotal = await page.evaluate(() => {
    const footer = document.querySelector('.slidev-page-footer, [class*="slidev-"][class*="footer"]');
    if (!footer) {
      // Try to find any element containing "/ <number>"
      const all = [...document.querySelectorAll('*')];
      const el = all.find(e => e.children.length === 0 && /\/\s*\d+/.test(e.textContent));
      return el ? el.textContent.trim() : null;
    }
    return footer.textContent.trim();
  });

  // Screenshot
  fs.mkdirSync(HARNESS_DIR, { recursive: true });
  const screenshotPath = path.join(HARNESS_DIR, `${deckSlug}-${slideNumber}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.error(`[harness] Screenshot saved: ${screenshotPath}`);

  await browser.close();
  return { overflow, screenshotPath, renderedTotal };
}

// ── Main ──────────────────────────────────────────────────────────────────────

(async () => {
  // 1. Check if slidev dev is already running; start it if not
  let alreadyRunning = await isPortResponding(port);

  if (!alreadyRunning) {
    startSlidevDev(deckFile, port);
    console.error(`[harness] Waiting for slidev dev on port ${port}...`);
    const ready = await waitForPort(port, SLIDEV_READY_TIMEOUT_MS);
    if (!ready) {
      console.error(`[harness] ❌ Slidev dev did not respond within ${SLIDEV_READY_TIMEOUT_MS / 1000}s`);
      process.exit(1);
    }
    await new Promise(r => setTimeout(r, 1500)); // settle
    console.error(`[harness] ✅ Slidev dev ready`);
  } else {
    console.error(`[harness] Slidev dev on port ${port} ✓`);
  }

  // ── `start` subcommand: ensure server is up, then exit ──────────────────────
  if (isStartCmd) {
    const status = alreadyRunning ? 'already_running' : 'started';
    console.log(JSON.stringify({ status, port, deck: deckSlug }));
    console.error(`[harness] ✅ Slidev dev ready on port ${port}`);
    return;
  }

  // ── `scan` subcommand: inspect all slides with one browser session ────────────
  if (isScanCmd) {
    const slides = parseSlideDeck(deckFile);
    const totalSlides = slides.length;
    console.error(`[harness] Scanning ${totalSlides} slides in "${deckSlug}"...`);

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ viewport: VIEWPORT });
    const page = await context.newPage();
    fs.mkdirSync(HARNESS_DIR, { recursive: true });

    const results = [];
    for (let n = 1; n <= totalSlides; n++) {
      const slideInfo = slides[n - 1];
      const dotAnalysis = analyzeSlideForDots(slides, n);
      const colorAnalysis = analyzeColorConsistency(slides, n);

      const url = `http://localhost:${port}/${n}`;
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15_000 });
      await page.waitForTimeout(600);

      const overflow = await page.evaluate(() => {
        const layout = document.querySelector('.slidev-layout') ||
          document.querySelector('[class*="slide-content"]') ||
          document.querySelector('.slidev-slide');
        if (!layout) return { detected: false, reason: 'no layout element found' };
        if (layout.scrollHeight > layout.clientHeight + 6)
          return { detected: true, reason: `scrollHeight ${layout.scrollHeight} > clientHeight ${layout.clientHeight}` };
        const vh = window.innerHeight;
        const el = [...layout.querySelectorAll('*')].find(e => {
          if (e.children.length > 0) return false;
          const r = e.getBoundingClientRect();
          return r.bottom > vh + 6 && r.width > 0 && r.height > 0;
        });
        if (el) { const r = el.getBoundingClientRect(); return { detected: true, reason: `element bleeds to y=${Math.round(r.bottom)}` }; }
        return { detected: false, reason: 'ok' };
      });

      const screenshotPath = path.join(HARNESS_DIR, `${deckSlug}-${n}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: false });

      const hasIssues = overflow.detected || dotAnalysis.missingDots || colorAnalysis.inconsistent;
      const flags = [
        overflow.detected ? '⚠️ overflow' : '',
        dotAnalysis.missingDots ? '⚠️ missing-dots' : '',
        colorAnalysis.inconsistent ? `⚠️ color(got=${colorAnalysis.actual} want=${colorAnalysis.expected})` : '',
      ].filter(Boolean).join('  ');

      const label = hasIssues ? `🔴 s${n}` : `✅ s${n}`;
      console.error(`  ${label.padEnd(6)} ${slideInfo.name.padEnd(45)} ${flags || '—'}`);

      results.push({
        slide: n, name: slideInfo.name,
        overflow: overflow.detected, overflowReason: overflow.reason,
        missingDots: dotAnalysis.missingDots, dotsExempt: dotAnalysis.exempt, sectionPart: dotAnalysis.sectionPart,
        colorInconsistent: colorAnalysis.inconsistent, colorExpected: colorAnalysis.expected, colorActual: colorAnalysis.actual,
        screenshot: screenshotPath,
      });
    }

    await browser.close();

    const issueSlides = results.filter(r => r.overflow || r.missingDots || r.colorInconsistent);
    console.error(`\n[harness] Scan complete: ${issueSlides.length} slide(s) with issues out of ${totalSlides}`);
    console.log(JSON.stringify(results, null, 2));
    return;
  }


  const slides = parseSlideDeck(deckFile);
  const totalSlides = slides.length;

  if (slideNum > totalSlides) {
    console.error(`Error: slide ${slideNum} does not exist — deck has ${totalSlides} slides`);
    process.exit(1);
  }

  const slideInfo = slides[slideNum - 1];
  const dotAnalysis = analyzeSlideForDots(slides, slideNum);
  const colorAnalysis = analyzeColorConsistency(slides, slideNum);

  // 3. Screenshot + overflow detection
  const { overflow, screenshotPath, renderedTotal } = await inspectSlide(slideNum, port);

  // Detect wrong-deck: if the server is serving a different file, the total slide
  // count in the footer won't match the parsed MD total.
  let wrongDeck = false;
  let wrongDeckWarning = null;
  if (renderedTotal) {
    const footerMatch = renderedTotal.match(/(\d+)\s*\/\s*(\d+)/);
    if (footerMatch) {
      const renderedSlideTotal = parseInt(footerMatch[2], 10);
      if (renderedSlideTotal !== totalSlides) {
        wrongDeck = true;
        wrongDeckWarning = `Slidev dev is serving a deck with ${renderedSlideTotal} slides, but "${deckSlug}" has ${totalSlides} slides. The screenshot is from the WRONG DECK. Start slidev dev with: npm exec slidev -- dev ${path.relative(SLIDES_DIR, deckFile)} --port ${port}`;
      }
    }
  }

  // 4. Report
  const report = {
    deck: deckSlug,
    slide: slideNum,
    totalSlides,
    name: slideInfo.name,
    wrongDeck,
    wrongDeckWarning,
    overflow: wrongDeck ? null : overflow.detected,
    overflowReason: wrongDeck ? null : overflow.reason,
    missingDots: wrongDeck ? null : dotAnalysis.missingDots,
    dotsExempt: dotAnalysis.exempt,
    sectionPart: dotAnalysis.sectionPart,
    dotsReason: dotAnalysis.reason,
    colorInconsistent: wrongDeck ? null : colorAnalysis.inconsistent,
    colorExpected: colorAnalysis.expected,
    colorActual: colorAnalysis.actual,
    colorReason: colorAnalysis.reason,
    screenshot: screenshotPath,
    url: `http://localhost:${port}/${slideNum}`,
  };

  // Print JSON report to stdout (stderr used for progress messages)
  console.log(JSON.stringify(report, null, 2));

  // Human-readable summary to stderr
  if (wrongDeck) {
    console.error(`\n🚨 WRONG DECK: ${wrongDeckWarning}`);
  } else {
    const issues = [];
    if (report.overflow) issues.push(`⚠️  OVERFLOW: ${report.overflowReason}`);
    if (report.missingDots) issues.push(`⚠️  MISSING DOTS: ${report.dotsReason}`);
    if (report.colorInconsistent) issues.push(`⚠️  COLOR MISMATCH: ${report.colorReason}`);

    if (issues.length === 0) {
      console.error(`\n✅ s${slideNum} "${slideInfo.name}" — no issues detected`);
    } else {
      console.error(`\n🔴 s${slideNum} "${slideInfo.name}" — ${issues.length} issue(s):`);
      issues.forEach(i => console.error('   ' + i));
    }
  }
  console.error(`\n📸 Screenshot: ${screenshotPath}`);
})();
