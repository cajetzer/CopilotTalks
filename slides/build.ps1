# Slidev Build Wrapper Script
#
# This wrapper delegates to scripts/build-all.ps1 from the slides/ directory.
#
# RATIONALE:
#   The main build-all.ps1 script is located in scripts/ and is designed to be run
#   from that directory. This wrapper allows you to invoke the build system from the
#   slides/ directory root, which is more convenient and matches common project patterns.
#   It also enables agent/automation tools to call this script reliably from any context.
#
# USAGE:
#   From slides/ directory:
#     .\build.ps1                              # build all categories
#     .\build.ps1 -Folder Tech-talks           # build only tech-talks category
#     .\build.ps1 -Folder workshop             # build only workshop category
#     .\build.ps1 -Deck copilot-cli            # build only copilot-cli.md (auto-detects folder)
#     .\build.ps1 -Deck copilot-cli -Verbose   # build single deck with verbose output
#
#   From any directory:
#     C:\...\CopilotTraining\slides\build.ps1
#     & "C:\...\CopilotTraining\slides\build.ps1" -Folder Tech-talks
#
# PARAMETERS:
#   -Folder:  Category to build (workshop, tech-talks). Omit to build all.
#   -Deck:    Single deck name to build (e.g., copilot-cli). Auto-detects category.
#   -Verbose: Enable verbose output.
#   All parameters are passed directly to scripts/build-all.ps1

# Capture the current location and switch to scripts directory
$ScriptsDir = Join-Path $PSScriptRoot scripts
Push-Location $ScriptsDir

try {
    # Invoke the main build script with all arguments
    & .\build-all.ps1 @args
}
finally {
    # Always restore the original directory
    Pop-Location
}
