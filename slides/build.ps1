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
#     .\build.ps1                       # build all categories
#     .\build.ps1 Tech-talks            # build only tech-talks
#     .\build.ps1 workshop              # build only workshop
#     .\build.ps1 exec-talks            # build only exec-talks
#     .\build.ps1 Tech-talks -Verbose   # build with verbose output
#
#   From any directory:
#     C:\...\CopilotTraining\slides\build.ps1
#     & "C:\...\CopilotTraining\slides\build.ps1" Tech-talks
#
# PARAMETERS:
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
