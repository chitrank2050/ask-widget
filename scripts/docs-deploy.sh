#!/bin/bash
set -e

echo "🏗️  Building documentation..."
pnpm run docs:build

echo "🚀 Deploying to GitHub Pages..."
# Use npx to run gh-pages without needing to install it as a devDependency permanently if not wanted,
# though it's faster if added as a devDep.
npx gh-pages -d docs/.vitepress/dist -m "docs: deploy v$(node -p "require('./package.json').version")"

echo "✅ Documentation deployed!"
