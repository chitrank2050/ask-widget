# Contributing

Thanks for your interest in contributing to ask-widget.

---

## Getting Started

```bash
git clone https://github.com/chitranklabs/ask-widget.git
cd ask-widget
pnpm install
pnpm dev
```

---

## Workflow

1. [Open an issue](https://github.com/chitranklabs/ask-widget/issues/new/choose) before starting work
2. Fork the repo and create a branch: `git checkout -b 42-fix-sse-reconnect`
3. Make your changes
4. Run `pnpm changeset` and follow the prompts to describe your changes
5. Run `pnpm build` - must pass before opening a PR
6. Open a pull request against `main`

---

## Versioning & Releases

We use [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.

### 1. Adding a Changeset
Every PR that introduces code changes **must** include a changeset file.
```bash
pnpm changeset
```
- Select the appropriate bump type (**patch**, **minor**, or **major**).
- Provide a clear, user-facing summary of what changed.
- Commit the generated `.changeset/*.md` file with your PR.

### 2. Automated Releases
Releases are automated via GitHub Actions:
- On merge to `main`, a "Version Bump" PR is automatically created/updated if changesets exist.
- When the **Version Bump PR** is merged, the package is automatically:
  - Published to npm
  - Tagged on GitHub
  - Released on GitHub (with changelog)
  - Documentation and Storybook are redeployed to GitHub Pages

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

- TypeScript strict mode - no `any`
- Scoped Vanilla CSS - no global style pollution
- Google-style JSDoc on all exported functions and components

### Storybook
Develop new components in isolation:
```bash
pnpm storybook
```


```bash
pnpm lint
pnpm format
```

---

## Reporting Security Issues

Do NOT open a public issue. See [SECURITY.md](SECURITY.md).
