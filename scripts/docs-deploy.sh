#!/bin/bash
set -e

echo "🏗️  Building Documentation (VitePress)..."
pnpm run docs:build

echo "🎨 Building Storybook with base path..."
# Using --base to ensure assets load correctly in the /storybook/ subfolder
pnpm run build-storybook -- --base /ask-widget/storybook/

echo "📦 Merging builds into one bundle..."
# Create a storybook folder inside the vitepress dist
rm -rf docs/.vitepress/dist/storybook
mv storybook-static docs/.vitepress/dist/storybook

echo "🚀 Deploying unified site to GitHub Pages..."
npx gh-pages -d docs/.vitepress/dist -m "docs: deploy v$(node -p "require('./package.json').version") with storybook"

echo "✅ All-in-one site (Docs + Storybook) deployed!"
echo "   Main site:   https://chitrank2050.github.io/ask-widget/"
echo "   Playground:  https://chitrank2050.github.io/ask-widget/storybook/"
