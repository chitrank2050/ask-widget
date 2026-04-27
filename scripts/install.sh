#!/bin/bash
set -e

# Source the logger utility
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/utils/logger.sh"

log_header "🚀 ask-widget Installation Process"

TOTAL_STEPS=3

# Step 1: Check for pnpm
log_step 1 $TOTAL_STEPS "Checking package manager..."
if ! command -v pnpm &> /dev/null; then
    log_error "pnpm is not installed. Please install it first."
    exit 1
fi
log_success "pnpm detected."

# Step 2: Install dependencies
log_step 2 $TOTAL_STEPS "Installing dependencies..."
if [ -f pnpm-lock.yaml ]; then
    log_info "Lockfile detected. Running frozen install..."
    pnpm install --frozen-lockfile
else
    log_warn "No lockfile found. Running standard install..."
    pnpm install
fi

# Step 3: Verify
log_step 3 $TOTAL_STEPS "Verifying installation..."
if [ -d "node_modules" ]; then
    log_success "Dependencies are ready."
else
    log_error "node_modules folder missing after install."
    exit 1
fi

log_header "✅ Installation Complete"