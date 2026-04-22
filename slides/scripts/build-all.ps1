# Build script for all Slidev presentations
# This script builds each .md file in the slides subdirectories
# Usage: build-all.ps1 [-Verbose] [-Parallel] [-Folder <name>] [-Deck <name>]
#   -Folder:        optional category to build (workshop, tech-talks, exec-talks)
#   -Deck:          optional specific deck to build (e.g., copilot-cli); auto-detects category
#   -Parallel:      run builds concurrently (requires PowerShell 7+, limit: 4)
#   Examples:
#     build-all.ps1                                        # build all categories (sequential)
#     build-all.ps1 -Parallel                             # build all categories in parallel (4 at once)
#     build-all.ps1 -Folder exec-talks                    # build only exec-talks
#     build-all.ps1 -Deck copilot-cli                     # build only copilot-cli (auto-detect folder)
#     build-all.ps1 -Deck copilot-cli -Verbose            # build with verbose output
#     build-all.ps1 -Verbose -Folder tech-talks           # build only tech-talks (verbose)
#
# Prop linting (Invoke-PropLint):
#   Runs after each successful build. Parses .md source statically for known
#   component prop limit violations. Slidev build is a pure Vite bundle (no
#   component execution), so component console.warn() never fires at build time.
#   Violations emit yellow [WARN] line N: messages — non-blocking, build stays [OK].
#   Limits enforced (from slides/tech-talks/template.md):
#     FrameworkMappingRowsSlide  label ≤13, description ≤70
#     SectionOpenerSlide         cards.blurb ≤75, cards.title ≤30
#     CoreQuestionSlide          cards.description ≤90, cards.title ≤40
#     TocSlide                   sections.blurb ≤100, sections.title ≤49
#     All Tier-1 body slides     title ≤80

param(
    [switch]$Verbose,
    [switch]$Parallel,
    [ValidateSet('workshop', 'tech-talks', 'exec-talks')]
    [string]$Folder,
    [string]$Deck
)

# ── Static prop validation ────────────────────────────────────────────────────
# Parses .md source for known component prop limit violations and emits yellow
# [WARN] line N: messages after each successful build. Non-blocking — Slidev
# build still reports [OK]. Limits sourced from slides/tech-talks/template.md.
# NOTE: regex uses (?s)<Component\b.*?/> (non-greedy) to avoid stopping at
# '/' chars inside prop values like "pull-requests: write".

function Invoke-PropLint {
    param([string]$FilePath, [string]$Category, [string]$BaseName)

    $lintWarnings = 0
    $content = Get-Content $FilePath -Raw

    # Pre-compute line-start offsets for O(1) char→line lookup
    $lineStarts = [System.Collections.Generic.List[int]]::new()
    $lineStarts.Add(0)
    for ($i = 0; $i -lt $content.Length; $i++) {
        if ($content[$i] -eq "`n") { $lineStarts.Add($i + 1) }
    }
    $getLine = {
        param([int]$pos)
        $lo = 0; $hi = $lineStarts.Count - 1
        while ($lo -lt $hi) {
            $mid = [int](($lo + $hi + 1) / 2)
            if ($lineStarts[$mid] -le $pos) { $lo = $mid } else { $hi = $mid - 1 }
        }
        return $lo + 1
    }

    # Helper: emit a warning with line number
    $warn = {
        param([int]$offset, [string]$msg)
        $line = & $getLine $offset
        Write-Host "      [WARN] line $line`: $msg" -ForegroundColor Yellow
        $script:lintWarnings++
    }

    # Helper: check a string value against a max length
    $checkLen = {
        param([string]$component, [string]$slideTitle, [string]$prop, [string]$value, [int]$max, [int]$offset)
        if ($value.Length -gt $max) {
            $preview = $value.Substring(0, [Math]::Min(50, $value.Length))
            & $warn $offset "$component '$slideTitle': $prop too long ($($value.Length) chars, max $max): `"$preview`""
        }
    }

    # ── FrameworkMappingRowsSlide: label ≤13, description ≤70 ───────────────
    foreach ($m in [regex]::Matches($content, '(?s)<FrameworkMappingRowsSlide\b.*?/>')) {
        $block = $m.Value; $off = $m.Index
        $title = if ($m.Value -match 'title="([^"]+)"') { $matches[1] } else { '(unknown)' }
        foreach ($r in [regex]::Matches($block, '\{\s*label:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"')) {
            & $checkLen 'FrameworkMappingRowsSlide' $title 'label'       $r.Groups[1].Value 13 ($off + $r.Index)
            & $checkLen 'FrameworkMappingRowsSlide' $title 'description' $r.Groups[2].Value 70 ($off + $r.Index)
        }
    }

    # ── SectionOpenerSlide: cards.title ≤30, cards.blurb ≤60 ────────────────
    foreach ($m in [regex]::Matches($content, '(?s)<SectionOpenerSlide\b.*?/>')) {
        $block = $m.Value; $off = $m.Index
        $title = if ($m.Value -match 'title="([^"]+)"') { $matches[1] } else { '(unknown)' }
        foreach ($r in [regex]::Matches($block, '\{[^}]*title:\s*"([^"]+)"[^}]*blurb:\s*"([^"]+)"')) {
            & $checkLen 'SectionOpenerSlide' $title 'card.title' $r.Groups[1].Value 30 ($off + $r.Index)
            & $checkLen 'SectionOpenerSlide' $title 'card.blurb' $r.Groups[2].Value 75 ($off + $r.Index)
        }
    }

    # ── CoreQuestionSlide: cards.title ≤40, cards.description ≤90 ──────────
    foreach ($m in [regex]::Matches($content, '(?s)<CoreQuestionSlide\b.*?/>')) {
        $block = $m.Value; $off = $m.Index
        foreach ($r in [regex]::Matches($block, '\{[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"')) {
            & $checkLen 'CoreQuestionSlide' 'Core Question' 'card.title'       $r.Groups[1].Value 40 ($off + $r.Index)
            & $checkLen 'CoreQuestionSlide' 'Core Question' 'card.description' $r.Groups[2].Value 90 ($off + $r.Index)
        }
    }

    # ── TocSlide: sections.title ≤40, sections.blurb ≤100 ─────────────────
    foreach ($m in [regex]::Matches($content, '(?s)<TocSlide\b.*?/>')) {
        $block = $m.Value; $off = $m.Index
        foreach ($r in [regex]::Matches($block, '\{[^}]*title:\s*"([^"]+)"[^}]*blurb:\s*"([^"]+)"')) {
            & $checkLen 'TocSlide' 'Table of Contents' 'section.title' $r.Groups[1].Value  49 ($off + $r.Index)
            & $checkLen 'TocSlide' 'Table of Contents' 'section.blurb' $r.Groups[2].Value 100 ($off + $r.Index)
        }
    }

    # ── All Tier-1 body components: title ≤80 ────────────────────────────────
    $bodyComponents = @(
        'BeforeAfterMetricsSlide', 'BeforeAfterPanelsSlide', 'ProblemSolutionOutcomeSlide',
        'TwoColPairedConceptsSlide', 'ThreeColumnCardSlide', 'FourCardGridSlide',
        'CodeWithFeaturesSlide', 'HeroStatSlide', 'WorkflowShowdownStepsSlide',
        'MaturityJourneyRoadmapSlide', 'AITerminalTranscriptSlide',
        'MaturityLevelDrilldownSlide', 'FrameworkMappingRowsSlide'
    )
    foreach ($comp in $bodyComponents) {
        foreach ($m in [regex]::Matches($content, "(?s)<$comp\\b.*?/>")) {
            $off = $m.Index
            if ($m.Value -match 'title="([^"]+)"') {
                & $checkLen $comp $matches[1] 'title' $matches[1] 80 $off
            }
        }
    }

    return $lintWarnings
}

# expressions ($deck.Category) to avoid npx.ps1 shim parsing issues.
# Using "Continue" to allow build to proceed despite shim warnings.
$ErrorActionPreference = "Continue"

# -Parallel requires PowerShell 7+
if ($Parallel -and $PSVersionTable.PSVersion.Major -lt 7) {
    Write-Host "[WARN] -Parallel requires PowerShell 7+. Falling back to sequential." -ForegroundColor Yellow
    $Parallel = $false
}

$StartTime = Get-Date
$SlidesDir = Split-Path -Parent $PSScriptRoot
$OutputDir = Join-Path $SlidesDir "dist"

# If -Deck is specified, auto-detect its category
if ($Deck) {
    $DeckSearched = $false
    $Categories = @('workshop', 'tech-talks', 'exec-talks')

    foreach ($Cat in $Categories) {
        $DeckPath = Join-Path $SlidesDir $Cat "$Deck.md"
        if (Test-Path $DeckPath) {
            $Folder = $Cat
            $DeckSearched = $true
            break
        }
    }

    if (-not $DeckSearched) {
        Write-Host "[ERROR] Deck not found: $Deck (searched in workshop, tech-talks, exec-talks)" -ForegroundColor Red
        exit 1
    }
}

if ($Deck) {
    Write-Host "[ROCKET] Building single deck: $Deck..." -ForegroundColor Cyan
} elseif ($Folder) {
    Write-Host "[ROCKET] Building $Folder Slidev presentations..." -ForegroundColor Cyan
} else {
    Write-Host "[ROCKET] Building all Slidev presentations..." -ForegroundColor Cyan
}
Write-Host "[FOLDER] Slides directory: $SlidesDir" -ForegroundColor Gray
Write-Host "[BOX] Output directory: $OutputDir" -ForegroundColor Gray
if ($Verbose) {
    Write-Host "[SPEAKER] Verbose mode enabled" -ForegroundColor Yellow
}
if ($Parallel) {
    Write-Host "[PARALLEL] Parallel mode enabled (4 concurrent builds)" -ForegroundColor Magenta
}
if ($Folder) {
    Write-Host "[OPEN_FOLDER] Folder filter: $Folder" -ForegroundColor Yellow
}
Write-Host ""

# Create output directory structure
New-Item -ItemType Directory -Force -Path "$OutputDir/workshop" | Out-Null
New-Item -ItemType Directory -Force -Path "$OutputDir/tech-talks" | Out-Null
New-Item -ItemType Directory -Force -Path "$OutputDir/exec-talks" | Out-Null

$TotalBuilt = 0
$TotalFailed = 0
$TotalSkipped = 0
$TotalLintWarnings = 0

# Helper function to check if a slide is archived
function Test-Archived {
    param([string]$FilePath)
    $head = Get-Content $FilePath -TotalCount 20
    return ($head -contains 'status: archived')
}

# Collect all decks to build across all categories
$AllDecks = [System.Collections.Generic.List[hashtable]]::new()

$CategoryConfig = @(
    @{ Name = 'workshop';   Icon = '[BOOKS]';     Enabled = (-not $Folder -or $Folder -eq 'workshop') }
    @{ Name = 'tech-talks'; Icon = '[SCIENCE]';   Enabled = (-not $Folder -or $Folder -eq 'tech-talks') }
    @{ Name = 'exec-talks'; Icon = '[BRIEFCASE]'; Enabled = (-not $Folder -or $Folder -eq 'exec-talks') }
)

foreach ($Cat in $CategoryConfig) {
    if (-not $Cat.Enabled) { continue }

    $Filter = if ($Deck) { "$Deck.md" } else { "*.md" }
    $SlideFiles = @(Get-ChildItem -Path "$SlidesDir/$($Cat.Name)" -Filter $Filter -File -ErrorAction SilentlyContinue)

    if ($Deck -and $SlideFiles.Count -eq 0) { continue }  # may be in another category

    foreach ($SlideFile in $SlideFiles) {
        $BaseName = $SlideFile.BaseName
        if ($BaseName -eq 'template') { continue }
        if (Test-Archived $SlideFile.FullName) {
            Write-Host "   [SKIP] Skipping archived: $($Cat.Name)/$BaseName" -ForegroundColor DarkGray
            $TotalSkipped++
            continue
        }
        $AllDecks.Add(@{ Category = $Cat.Name; BaseName = $BaseName })
    }
}

if ($AllDecks.Count -eq 0) {
    if ($Deck) {
        Write-Host "[ERROR] Deck not found: $Deck (searched in workshop, tech-talks, exec-talks)" -ForegroundColor Red
    } else {
        Write-Host "[ERROR] No decks found to build." -ForegroundColor Red
    }
    exit 1
}

Write-Host "   $($AllDecks.Count) deck(s) to build" -ForegroundColor Gray
Write-Host ""

# Always use job-based builds — jobs run in isolated runspaces which avoids
# npx.ps1 shim's $MyInvocation.Statement parsing issues with PS variables.
# ThrottleLimit controls concurrency: 4 for -Parallel, 1 for sequential.
$throttle = if ($Parallel) { 4 } else { 1 }
if ($Parallel) {
    Write-Host "   Building in parallel ($throttle at a time)..." -ForegroundColor Magenta
    Write-Host ""
}

$total = $AllDecks.Count
$completed = 0

$jobs = $AllDecks | ForEach-Object {
    $category = $_.Category
    $baseName = $_.BaseName
    Start-ThreadJob -ThrottleLimit $throttle -ScriptBlock {
        $category  = $using:category
        $baseName  = $using:baseName
        $SlidesDir = $using:SlidesDir
        $OutputDir = $using:OutputDir

        $start = Get-Date
        Push-Location $SlidesDir
        try {
            $output = npx slidev build "$category/$baseName.md" `
                --base "/CopilotTraining/$category/$baseName/" `
                --out "$OutputDir/$category/$baseName" 2>&1
            $exitCode = $LASTEXITCODE
        } finally {
            Pop-Location
        }

        $elapsed = [math]::Round(((Get-Date) - $start).TotalSeconds, 1)
        [pscustomobject]@{
            Category = $category
            BaseName = $baseName
            Success  = ($exitCode -eq 0)
            Elapsed  = $elapsed
            Output   = $output
        }
    }
}

# Drain jobs one-at-a-time as they complete — gives live progress
$remaining = [System.Collections.Generic.List[object]]$jobs
while ($remaining.Count -gt 0) {
    $done = Wait-Job -Job $remaining -Any
    $r = Receive-Job $done
    Remove-Job $done
    $null = $remaining.Remove($done)
    $completed++

    if ($r.Success) {
        Write-Host "   [$completed/$total] [OK] $($r.Category)/$($r.BaseName) $($r.Elapsed)s" -ForegroundColor Green
        # Surface any component validation warnings even on successful builds
        $r.Output | Where-Object { $_ -match '\[.*Slide\]' } | ForEach-Object {
            Write-Host "      [WARN] $_" -ForegroundColor Yellow
        }        # Static prop lint
        $deckFile = Join-Path $SlidesDir $r.Category "$($r.BaseName).md"
        $lintCount = Invoke-PropLint -FilePath $deckFile -Category $r.Category -BaseName $r.BaseName
        $TotalLintWarnings += $lintCount    } else {
        Write-Host "   [$completed/$total] [FAILED] $($r.Category)/$($r.BaseName) $($r.Elapsed)s" -ForegroundColor Red
        $r.Output | Where-Object {
            $_ -notmatch 'Ignored provided index\.html' -and $_ -notmatch '^\s*$'
        } | ForEach-Object { Write-Host "      $_" -ForegroundColor DarkRed }
        $TotalFailed++
    }
    $TotalBuilt++
}

Write-Host ""
# Copy index.html to dist root
Write-Host "[DOC] Copying index-custom.html to dist root..." -ForegroundColor Gray
Copy-Item "$SlidesDir/index-custom.html" "$OutputDir/index.html" -Force

$TotalElapsedSeconds = [math]::Round(((Get-Date) - $StartTime).TotalSeconds, 1)
$TotalMinutes = [math]::Floor($TotalElapsedSeconds / 60)
$RemainingSeconds = $TotalElapsedSeconds % 60

Write-Host ""
$successCount = $TotalBuilt - $TotalFailed
if ($TotalFailed -gt 0) {
    Write-Host "[DONE] $successCount/$TotalBuilt presentations built, $TotalFailed FAILED, $TotalSkipped archived skipped." -ForegroundColor Red
} else {
    Write-Host "[DONE] $TotalBuilt presentations built, $TotalSkipped archived skipped." -ForegroundColor Green
}
if ($TotalLintWarnings -gt 0) {
    Write-Host "[WARN] $TotalLintWarnings prop violation(s) found — see [WARN] lines above." -ForegroundColor Yellow
}
if ($TotalMinutes -gt 0) {
    Write-Host "[CLOCK] Total time: ${TotalMinutes}m ${RemainingSeconds}s" -ForegroundColor Cyan
}
else {
    Write-Host "[CLOCK] Total time: ${TotalElapsedSeconds}s" -ForegroundColor Cyan
}
Write-Host "[BOX] Output location: $OutputDir" -ForegroundColor Gray
Write-Host ""
Write-Host "To preview locally, run: cd dist && python -m http.server 8080" -ForegroundColor Gray

if ($TotalFailed -gt 0) { exit 1 }
