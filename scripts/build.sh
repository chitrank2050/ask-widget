#!/bin/bash
set -e

# Source the logger utility
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/utils/logger.sh"

log_header "🏗️  ask-widget Build Process"

TOTAL_STEPS=3

# Step 1: Pre-flight check
log_step 1 $TOTAL_STEPS "Preparing environment..."
rm -rf dist
log_success "Environment ready."

# Step 2: Run the build
log_step 2 $TOTAL_STEPS "Running Vite build..."
pnpm run build
log_success "Vite build successful."

# Step 3: Finalize
log_step 3 $TOTAL_STEPS "Build complete!"
log_info "Output directory: dist/"
log_success "Project is ready for deployment."

log_header "✅ Build Successful"