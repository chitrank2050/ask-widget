#!/bin/bash
set -e

# Hardened Owner Guard: Verifies active GitHub CLI session identity
GH_USER=$(gh api user --jq '.login' 2>/dev/null || echo "anonymous")
if [ "$GH_USER" != "chitrank2050" ]; then
  echo "❌ Error: Unauthorized. Active GitHub session must be 'chitrank2050'."
  exit 1
fi

# Source the logger utility
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/utils/logger.sh"

log_header "📖 ask-widget Docs Deployment"

TOTAL_STEPS=4

# Step 1: Build Docs
log_step 1 $TOTAL_STEPS "Building Documentation (VitePress)..."
pnpm run docs:build
log_success "Docs build complete."

# Step 2: Build Storybook
log_step 2 $TOTAL_STEPS "Building Storybook with base path..."
# Using --base to ensure assets load correctly in the /storybook/ subfolder
pnpm run build-storybook -- --base /ask-widget/storybook/
log_success "Storybook build complete."

# Step 3: Merge builds
log_step 3 $TOTAL_STEPS "Merging builds into one bundle..."
# Create a storybook folder inside the vitepress dist
rm -rf docs/.vitepress/dist/storybook
mv storybook-static docs/.vitepress/dist/storybook
log_success "Builds merged successfully."

# Step 4: Deploy
log_step 4 $TOTAL_STEPS "Deploying unified site to GitHub Pages..."
npx gh-pages -d docs/.vitepress/dist -m "docs: deploy v$(node -p "require('./package.json').version") with storybook"
log_success "Deployment complete."

log_header "✅ All-in-one site (Docs + Storybook) is now Live"
log_info "Main site:   https://chitranklabs.github.io/ask-widget/"
log_info "Playground:  https://chitranklabs.github.io/ask-widget/storybook/"
