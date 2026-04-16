# Build script for all Slidev presentations
# This script builds each .md file in the slides subdirectories
# Usage: build-all.ps1 [-Verbose] [-Folder <name>] [-Deck <name>]
#   -Folder: optional category to build (workshop, tech-talks, exec-talks)
#   -Deck:   optional specific deck to build (e.g., copilot-cli); auto-detects category
#   Examples:
#     build-all.ps1                              # build all categories
#     build-all.ps1 -Folder exec-talks           # build only exec-talks
#     build-all.ps1 -Deck copilot-cli            # build only copilot-cli (auto-detect folder)
#     build-all.ps1 -Deck copilot-cli -Verbose  # build with verbose output
#     build-all.ps1 -Verbose -Folder tech-talks  # build only tech-talks (verbose)

param(
    [switch]$Verbose,
    [ValidateSet('workshop', 'tech-talks', 'exec-talks')]
    [string]$Folder,
    [string]$Deck
)

$ErrorActionPreference = "Stop"

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

# Helper function to build a slide
function Build-Slide {
    param(
        [string]$Category,
        [string]$BaseName
    )

    $SlideStartTime = Get-Date
    Push-Location $SlidesDir
    try {
        if ($Verbose) {
            Write-Host "   [HAMMER] $Category/$BaseName..." -ForegroundColor Yellow
            npx slidev build "$Category/$BaseName.md" `
                --base "/CopilotTraining/$Category/$BaseName/" `
                --out "$OutputDir/$Category/$BaseName" 2>&1 | Out-Host
            $ElapsedSeconds = [math]::Round(((Get-Date) - $SlideStartTime).TotalSeconds, 1)
            # Check if dist folder was created (indicates successful build despite warnings)
            if (Test-Path "$OutputDir/$Category/$BaseName") {
                Write-Host "   [OK] $Category/$BaseName built (${ElapsedSeconds}s)" -ForegroundColor Green
            } else {
                Write-Host "   [FAILED] $Category/$BaseName (${ElapsedSeconds}s)" -ForegroundColor Red
            }
        }
        else {
            Write-Host "   [HAMMER] $Category/$BaseName... " -NoNewline -ForegroundColor Yellow
            $null = npx slidev build "$Category/$BaseName.md" `
                --base "/CopilotTraining/$Category/$BaseName/" `
                --out "$OutputDir/$Category/$BaseName" 2>&1 | Out-Null
            $ElapsedSeconds = [math]::Round(((Get-Date) - $SlideStartTime).TotalSeconds, 1)
            # Check if dist folder was created (indicates successful build despite warnings)
            if (Test-Path "$OutputDir/$Category/$BaseName") {
                Write-Host "[OK] ${ElapsedSeconds}s" -ForegroundColor Green
            }
            else {
                Write-Host "[FAILED]" -ForegroundColor Red
            }
        }
    }
    finally {
        Pop-Location
    }
}

# Build workshop slides
if (-not $Folder -or $Folder -eq 'workshop') {
    if ($Deck) {
        # Single deck build
        $SlideFile = Get-ChildItem -Path "$SlidesDir/workshop" -Filter "$Deck.md" -File
        if (-not $SlideFile) {
            Write-Host "[ERROR] Deck not found: workshop/$Deck.md" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "[BOOKS] Building workshop slides..." -ForegroundColor Cyan
    }

    $WorkshopSlides = if ($Deck) {
        @(Get-ChildItem -Path "$SlidesDir/workshop" -Filter "$Deck.md" -File)
    } else {
        @(Get-ChildItem -Path "$SlidesDir/workshop" -Filter "*.md" -File)
    }

    foreach ($SlideFile in $WorkshopSlides) {
        $BaseName = $SlideFile.BaseName
        if ($BaseName -eq 'template') {
            continue
        }
        if (Test-Archived $SlideFile.FullName) {
            Write-Host "   [SKIP] Skipping archived: workshop/$BaseName" -ForegroundColor DarkGray
            $TotalSkipped++
            continue
        }
        Build-Slide -Category "workshop" -BaseName $BaseName
        $TotalBuilt++
    }
    Write-Host ""
}

# Build tech-talks slides
if (-not $Folder -or $Folder -eq 'tech-talks') {
    if ($Deck) {
        # Single deck build
        $SlideFile = Get-ChildItem -Path "$SlidesDir/tech-talks" -Filter "$Deck.md" -File -ErrorAction SilentlyContinue
        if (-not $SlideFile) {
            Write-Host "[ERROR] Deck not found: tech-talks/$Deck.md" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "[SCIENCE] Building tech-talks slides..." -ForegroundColor Cyan
    }

    $TechTalksSlides = if ($Deck) {
        @(Get-ChildItem -Path "$SlidesDir/tech-talks" -Filter "$Deck.md" -File -ErrorAction SilentlyContinue)
    } else {
        @(Get-ChildItem -Path "$SlidesDir/tech-talks" -Filter "*.md" -File)
    }

    foreach ($SlideFile in $TechTalksSlides) {
        $BaseName = $SlideFile.BaseName
        if ($BaseName -eq 'template') {
            continue
        }
        if (Test-Archived $SlideFile.FullName) {
            Write-Host "   [SKIP] Skipping archived: tech-talks/$BaseName" -ForegroundColor DarkGray
            $TotalSkipped++
            continue
        }
        Build-Slide -Category "tech-talks" -BaseName $BaseName
        $TotalBuilt++
    }
    Write-Host ""
}

# Build exec-talks slides
if (-not $Folder -or $Folder -eq 'exec-talks') {
    if ($Deck) {
        # Single deck build
        $SlideFile = Get-ChildItem -Path "$SlidesDir/exec-talks" -Filter "$Deck.md" -File -ErrorAction SilentlyContinue
        if (-not $SlideFile) {
            Write-Host "[ERROR] Deck not found: exec-talks/$Deck.md" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "[BRIEFCASE] Building exec-talks slides..." -ForegroundColor Cyan
    }

    $ExecTalksSlides = if ($Deck) {
        @(Get-ChildItem -Path "$SlidesDir/exec-talks" -Filter "$Deck.md" -File -ErrorAction SilentlyContinue)
    } else {
        @(Get-ChildItem -Path "$SlidesDir/exec-talks" -Filter "*.md" -File)
    }

    foreach ($SlideFile in $ExecTalksSlides) {
        $BaseName = $SlideFile.BaseName
        if ($BaseName -eq 'template') {
            continue
        }
        if (Test-Archived $SlideFile.FullName) {
            Write-Host "   [SKIP] Skipping archived: exec-talks/$BaseName" -ForegroundColor DarkGray
            $TotalSkipped++
            continue
        }
        Build-Slide -Category "exec-talks" -BaseName $BaseName
        $TotalBuilt++
    }
    Write-Host ""
}

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
