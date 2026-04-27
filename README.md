# ask-widget

> A lightweight chat widget for developer portfolios. Drop-in floating chat with SSE streaming, dark/light themes, and configurable positioning. Aligned with the neutral zinc palette.

[![npm](https://img.shields.io/npm/v/@chitrank2050/ask-widget)](https://www.npmjs.com/package/@chitrank2050/ask-widget)
[![Install Size](https://img.shields.io/bundlephobia/min/@chitrank2050/ask-widget)](https://bundlephobia.com/package/@chitrank2050/ask-widget)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
[![Gitleaks](https://img.shields.io/badge/secrets-protected-brightgreen?logo=gitleaks)](https://github.com/gitleaks/gitleaks)
[![Zizmor](https://img.shields.io/badge/actions-hardened-brightgreen?logo=github)](https://github.com/woodruffw/zizmor)
[![Scorecard](https://img.shields.io/badge/scorecard-passing-brightgreen)](https://scorecard.dev/)

---

## Links

| Source | URL |
| :--- | :--- |
| **NPM** | [npmjs.com/package/@chitrank2050/ask-widget](https://www.npmjs.com/package/@chitrank2050/ask-widget) |
| **GitHub** | [github.com/chitranklabs/ask-widget](https://github.com/chitranklabs/ask-widget) |
| **Demo** | [ask-widget.netlify.app](https://ask-widget.netlify.app/) |
| **Documentation** | [chitranklabs.github.io/ask-widget](https://chitranklabs.github.io/ask-widget/) |
| 👤 Portfolio | [About me](https://chitrankagnihotri.com) |

---

## 🛠️ Development Setup

This project uses **pnpm** and **Lefthook** for high-performance developer hygiene.

```bash
# Install dependencies
pnpm install

# Install Git hooks
pnpm exec lefthook install
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

## 📖 Quick Start

```tsx
import { ChatWidget } from '@chitrank2050/ask-widget'
import '@chitrank2050/ask-widget/styles.css'

export default function Portfolio() {
  return (
    <ChatWidget
      apiUrl="https://your-api.example.com"
      apiToken={import.meta.env.VITE_CHAT_API_TOKEN}
      title="Ask AI"
    />
  )
}
```

---

Developed by [Chitrank Agnihotri](https://www.chitrankagnihotri.com)