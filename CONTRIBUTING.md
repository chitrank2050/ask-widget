# Contributing

Thanks for your interest in contributing to ask-widget.

---

## Getting Started

```bash
git clone https://github.com/chitrank2050/ask-widget.git
cd ask-widget
pnpm install
pnpm dev
```

---

## Workflow

1. [Open an issue](https://github.com/chitrank2050/ask-widget/issues/new/choose) before starting work
2. Fork the repo and create a branch: `git checkout -b 42-fix-sse-reconnect`
3. Make your changes
4. Run `pnpm build` — must pass before opening a PR
5. Open a pull request against `main`

---

## Commit Messages

Follow conventional commits:

```
feat: add configurable position prop
fix: resolve SSE reconnect on mobile
chore: update dependencies
docs: add usage examples to README
```

---

## Code Style

- TypeScript strict mode — no `any`
- CSS Modules for all styles — no inline styles
- Google-style JSDoc on all exported functions and components

```bash
pnpm lint
pnpm format
```

---

## Reporting Security Issues

Do NOT open a public issue. See [SECURITY.md](SECURITY.md).
