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

param(
    [switch]$Verbose,
    [switch]$Parallel,
    [ValidateSet('workshop', 'tech-talks', 'exec-talks')]
    [string]$Folder,
    [string]$Deck
)

$ErrorActionPreference = "Stop"

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
$TotalSkipped = 0

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

if ($Parallel) {
    # Parallel build — start all jobs (throttled to 4), print each result as it finishes
    Write-Host "   Building in parallel (4 at a time)..." -ForegroundColor Magenta
    Write-Host ""

    $total = $AllDecks.Count
    $completed = 0

    # Start-ThreadJob with -ThrottleLimit queues jobs so at most 4 run at once
    $jobs = $AllDecks | ForEach-Object {
        $category = $_.Category
        $baseName = $_.BaseName
        Start-ThreadJob -ThrottleLimit 4 -ScriptBlock {
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
        } else {
            Write-Host "   [$completed/$total] [FAILED] $($r.Category)/$($r.BaseName) $($r.Elapsed)s" -ForegroundColor Red
            $r.Output | Where-Object {
                $_ -notmatch 'Ignored provided index\.html' -and $_ -notmatch '^\s*$'
            } | ForEach-Object { Write-Host "      $_" -ForegroundColor DarkRed }
        }
        $TotalBuilt++
    }
} else {
    # Sequential build
    foreach ($deck in $AllDecks) {
        $SlideStartTime = Get-Date
        Push-Location $SlidesDir
        try {
            if ($Verbose) {
                Write-Host "   [HAMMER] $($deck.Category)/$($deck.BaseName)..." -ForegroundColor Yellow
                npx slidev build "$($deck.Category)/$($deck.BaseName).md" `
                    --base "/CopilotTraining/$($deck.Category)/$($deck.BaseName)/" `
                    --out "$OutputDir/$($deck.Category)/$($deck.BaseName)" 2>&1 | Out-Host
                $ElapsedSeconds = [math]::Round(((Get-Date) - $SlideStartTime).TotalSeconds, 1)
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "   [OK] $($deck.Category)/$($deck.BaseName) built (${ElapsedSeconds}s)" -ForegroundColor Green
                } else {
                    Write-Host "   [FAILED] $($deck.Category)/$($deck.BaseName) (${ElapsedSeconds}s)" -ForegroundColor Red
                }
            } else {
                Write-Host "   [HAMMER] $($deck.Category)/$($deck.BaseName)... " -NoNewline -ForegroundColor Yellow
                $buildOutput = npx slidev build "$($deck.Category)/$($deck.BaseName).md" `
                    --base "/CopilotTraining/$($deck.Category)/$($deck.BaseName)/" `
                    --out "$OutputDir/$($deck.Category)/$($deck.BaseName)" 2>&1
                $buildExitCode = $LASTEXITCODE
                $ElapsedSeconds = [math]::Round(((Get-Date) - $SlideStartTime).TotalSeconds, 1)
                if ($buildExitCode -eq 0) {
                    Write-Host "[OK] ${ElapsedSeconds}s" -ForegroundColor Green
                } else {
                    Write-Host "[FAILED] ${ElapsedSeconds}s" -ForegroundColor Red
                    $buildOutput | Where-Object {
                        $_ -notmatch 'Ignored provided index\.html' -and $_ -notmatch '^\s*$'
                    } | ForEach-Object { Write-Host "      $_" -ForegroundColor DarkRed }
                }
            }
        } finally {
            Pop-Location
        }
        $TotalBuilt++
    }
}

Write-Host ""
# Copy index.html to dist root
Write-Host "[DOC] Copying index-custom.html to dist root..." -ForegroundColor Gray
Copy-Item "$SlidesDir/index-custom.html" "$OutputDir/index.html" -Force

$TotalElapsedSeconds = [math]::Round(((Get-Date) - $StartTime).TotalSeconds, 1)
$TotalMinutes = [math]::Floor($TotalElapsedSeconds / 60)
$RemainingSeconds = $TotalElapsedSeconds % 60

Write-Host ""
Write-Host "[DONE] $TotalBuilt presentations built, $TotalSkipped archived skipped." -ForegroundColor Green
if ($TotalMinutes -gt 0) {
    Write-Host "[CLOCK] Total time: ${TotalMinutes}m ${RemainingSeconds}s" -ForegroundColor Cyan
}
else {
    Write-Host "[CLOCK] Total time: ${TotalElapsedSeconds}s" -ForegroundColor Cyan
}
Write-Host "[BOX] Output location: $OutputDir" -ForegroundColor Gray
Write-Host ""
Write-Host "To preview locally, run: cd dist && python -m http.server 8080" -ForegroundColor Gray
