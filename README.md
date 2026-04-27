# ask-widget 🤖

> A state-of-the-art, lightweight chat widget for developer portfolios. Powered by **Vite 8** and the **Rolldown** engine for sub-5KB performance and perfect CSS isolation.

[![CI 🌊](https://github.com/chitranklabs/ask-widget/actions/workflows/ci.yml/badge.svg)](https://github.com/chitranklabs/ask-widget/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/chitranklabs/ask-widget/branch/main/graph/badge.svg)](https://codecov.io/gh/chitranklabs/ask-widget)
[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/1/badge)](https://bestpractices.coreinfrastructure.org/projects/1)
[![Scorecard Status](https://github.com/chitranklabs/ask-widget/actions/workflows/scorecard.yml/badge.svg)](https://github.com/chitranklabs/ask-widget/actions/workflows/scorecard.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/chitranklabs/ask-widget/badge)](https://scorecard.dev/viewer/?uri=github.com/chitranklabs/ask-widget)
[![Security: Gitleaks](https://img.shields.io/badge/Security-Gitleaks-brightgreen?logo=gitleaks)](https://github.com/gitleaks/gitleaks)
[![JSR](https://jsr.io/badges/@chitrank2050/ask-widget)](https://jsr.io/@chitrank2050/ask-widget)
[![npm](https://img.shields.io/npm/v/@chitrank2050/ask-widget)](https://www.npmjs.com/package/@chitrank2050/ask-widget)
[![SLSA Level 3](https://img.shields.io/badge/SLSA-Level_3-blue?logo=slsa)](https://github.com/chitranklabs/ask-widget/attestations)
[![License](https://img.shields.io/github/license/chitranklabs/ask-widget)](LICENSE)

<div>
 <a href="https://ko-fi.com/D1D71U581P" target="_blank">
      <img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Buy me a coffee at ko-fi.com">
    </a>
</div>

---

## 🚀 2027 Tech Stack

This project is built for the future of the web:

- **Engine**: [Vite 8](https://vite.dev) + [Rolldown](https://rolldown.rs) (Rust-powered performance)
- **Compiler**: SWC (Sub-millisecond React transformation)
- **CSS**: Cascade Layers (`@layer`) + HSL Tokens (Zero global collisions)
- **Runtime**: Dual ESM/CJS (Native support for Node, Bun, and Deno)
- **Security**: SLSA Level 3 Provenance + Gitleaks protection

---

## ✨ Features

- **SSE Streaming**: Built-in support for OpenAI-compatible streaming backends.
- **Themeable**: Zinc-based design system with easy HSL overrides.
- **Persistence**: Built-in session persistence across page reloads.

---

## 📖 Documentation & Demo

- **Live Demo**: [ask-widget.chitrankagnihotri.com](https://ask-widget.chitrankagnihotri.com)
- **API Reference**: [Automated Docs](https://chitranklabs.github.io/ask-widget/api)
- **Theming Guide**: [Customizing Zinc](https://chitranklabs.github.io/ask-widget/theming)

---

## 📦 Quick Start

```bash
pnpm add @chitrank2050/ask-widget
```

```tsx
import { ChatWidget } from '@chitrank2050/ask-widget';
import '@chitrank2050/ask-widget/style.css'; // Optimized CSS Layer styles

export default function App() {
  return (
    <ChatWidget
      apiUrl="https://your-api.example.com"
      apiToken={import.meta.env.VITE_CHAT_API_TOKEN}
      title="Ask AI"
    />
  );
}
```

---

## 🛠️ Development

We use **pnpm** and **Lefthook** for a high-performance developer workflow.

```bash
# Install and setup
pnpm install
pnpm exec lefthook install

# Run dev server
pnpm dev

# Run automated tests (Vitest + SWC)
pnpm run test:coverage
```

---

## 🚀 Release Process

We use a two-phase automated release pipeline powered by **[git-hygiene](https://github.com/chitranklabs/git-hygiene)**.

1. **Prepare**: Run the `Release 1 - Prepare PR` workflow. It bumps the version in `package.json`, updates `CHANGELOG.md`, and opens a PR.
2. **Finalize**: Merge the PR to `main`. The `Release 2 - Finalize Tag` workflow will automatically tag the release, create a GitHub Release, and publish to NPM.

---

## 🛡️ Security & Quality

- **Secret Scanning**: Gitleaks prevents credential leaks in every commit.
- **Workflow Auditing**: Zizmor ensures GitHub Actions follow security best practices.
- **Supply Chain**: All GitHub Actions are pinned to secure commit SHAs.
- **Provenace**: Automated build attestations for every release.

---

Developed with ❤️ by [Chitrank Agnihotri](https://www.chitrankagnihotri.com)

*If you use this in your project, a credit or star is appreciated.* ✨
