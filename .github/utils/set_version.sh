#!/bin/bash
# filepath: ./.github/utils/set_version.sh
# Sets the SemanticMatter landing page version.
# This script should only be run as part of a CI/CD workflow.

set -e

# Default values
VER=""
REMOTE_BRANCH="${REMOTE_BRANCH:-origin/main}"
EPOCH_VERSION="1"
DEBUG=false

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --ver)
            VER="$2"
            shift 2
            ;;
        --remote-branch)
            REMOTE_BRANCH="$2"
            shift 2
            ;;
        --epoch-version)
            EPOCH_VERSION="$2"
            shift 2
            ;;
        --debug)
            DEBUG=true
            shift
            ;;
        -h|--help)
            echo "Usage: $0 [--ver VERSION] [--remote-branch REMOTE/BRANCH] [--epoch-version VERSION] [--debug]"
            echo ""
            echo "Options:"
            echo "  --ver VERSION              Version to set (format: <Epoch>.<CalVer YYYY0M0D>.<Build>)"
            echo "  --remote-branch BRANCH     Remote branch to set version from (default: origin/main)"
            echo "  --epoch-version VERSION    Epoch version (default: 1)"
            echo "  --debug                    Enable debug mode"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

# Check if running in CI
if [ "${CI:-false}" != "true" ]; then
    echo "Error: This script should only be run as part of a CI/CD workflow."
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not available on the system. Exiting."
    exit 1
fi

# Determine version
if [ -n "$VER" ]; then
    # Validate version format
    if ! echo "$VER" | grep -qE '^v?[1-9][0-9]*\.20[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\.[0-9]+$'; then
        echo "Error: Please specify version as '<Epoch version>.<CalVer (YYYY0M0D)>.<Build number>' or 'v<Epoch version>.<CalVer (YYYY0M0D)>.<Build number>'."
        exit 1
    fi
    # Strip leading 'v' if present
    VER="${VER#v}"
else
    # Check if git is available
    if ! command -v git &> /dev/null; then
        echo "Error: Could not set version. No version is provided using the '--ver' option. Git is not available on the system."
        exit 1
    fi

    # Validate epoch version
    if ! [[ "$EPOCH_VERSION" =~ ^[0-9]+$ ]]; then
        echo "Error: The epoch version must be an integer."
        exit 1
    fi

    if [ "$EPOCH_VERSION" -lt 1 ]; then
        echo "Error: The epoch version must be greater than or equal to 1."
        exit 1
    fi

    # Check if this is a git repository and fetch remotes
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        echo "Error: Could not set version. No version is provided using the '--ver' option. This is not a git repository."
        exit 1
    fi

    # Handle custom remote URL if provided
    if [ -n "$REMOTE_URL" ]; then
        REMOTE_NAME="${REMOTE_BRANCH%/*}"
        git remote set-url "$REMOTE_NAME" "$REMOTE_URL"
        if [ "$DEBUG" = true ]; then
            echo "Debug: Set remote URL to REMOTE_URL value."
        fi
    fi

    # Fetch from all remotes
    git fetch --all
    if [ "$DEBUG" = true ]; then
        echo "Debug: Fetched from all remotes."
    fi

    # Get ref to sha mapping using git for-each-ref
    CHOSEN_REF="refs/remotes/${REMOTE_BRANCH}"

    if ! git for-each-ref --format='%(refname)' refs/remotes/ | grep -q "^${CHOSEN_REF}$"; then
        echo "Error: Could not find a valid ref in the git repo."
        echo "Error: Expected a valid ref in the git repo !"
        echo "Did this run via the set_version.sh script?"
        exit 1
    fi

    # Get the calendar version (YYYYMMDD) based on the latest commit date
    CALVER=$(git log -1 --format=%cd --date=short "$CHOSEN_REF" | tr -d '-')

    # Get the build number (commit count)
    BUILD_NUMBER=$(git rev-list --count "$CHOSEN_REF")

    VER="${EPOCH_VERSION}.${CALVER}.${BUILD_NUMBER}"

    if [ "$DEBUG" = true ]; then
        echo "Debug: Compiled version: $VER"
    fi
fi

# Update npm package version
npm --allow-same-version --no-commit-hooks --no-git-tag-version version "$VER"

echo "Bumped version to $VER."
