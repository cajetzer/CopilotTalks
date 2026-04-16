#!/bin/bash
# Slidev Build Wrapper Script (Linux/macOS)
#
# This wrapper delegates to scripts/build-all.sh from the slides/ directory.
#
# RATIONALE:
#   The main build-all.sh script is located in scripts/ and is designed to be run
#   from that directory. This wrapper allows you to invoke the build system from the
#   slides/ directory root, which is more convenient and matches common project patterns.
#   It also enables agent/automation tools to call this script reliably from any context.
#
# USAGE:
#   From slides/ directory:
#     ./build.sh                       # build all categories
#     ./build.sh tech-talks            # build only tech-talks
#     ./build.sh workshop              # build only workshop
#     ./build.sh exec-talks            # build only exec-talks
#
#   From any directory:
#     /path/to/slides/build.sh tech-talks
#
# PARAMETERS:
#   All parameters are passed directly to scripts/build-all.sh

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Change to scripts directory
cd "$SCRIPT_DIR/scripts" || exit 1

# Invoke the main build script with all arguments
bash ./build-all.sh "$@"
