# Maintenance & Release Guide

This document describes the technical process for maintaining and releasing `@chitrank2050/ask-widget`.

## Release Workflow

We use **Changesets** to automate versioning and npm releases.

### 1. Development (The "Intent")
For every feature or fix on a branch, you should generate a changeset file:
```bash
pnpm changeset
```
This creates a small Markdown file in `.changeset/`. This intent must be committed and pushed as part of your PR.

### 2. The Versioning PR
When changes are merged into `main`, a GitHub Action (`release.yml`) checks for existance of changeset files. 

If they exist, it automatically creates (or updates) a PR titled `chore: version bump`. This PR:
1. Consumes the changeset files.
2. Updates `package.json` with the new version.
3. Generates/updates the `CHANGELOG.md`.

### 3. Publishing
To trigger a release:
1. **Merge the `chore: version bump` PR** into `main`.
2. The GitHub Action will detect that there are no change files but a version bump occurred.
3. It will run `pnpm release` which:
   - Builds the library.
   - Publishes to npm.
   - Creates a GitHub Tag.
   - Creates a GitHub Release with the changelog summary.
   - Redeploys the Documentation site.

---

## Manual Fallbacks (Emergency only)

The old manual scripts are still available in `/scripts/` but labeled as automated in the CLI:
```bash
pnpm menu git
```

### Scripts reference:
- `scripts/docs-deploy.sh`: Builds and pushes to `gh-pages`.
- `scripts/git-tag.sh`: Tags the current version in `package.json`.
- `scripts/git-release.sh`: Creates a GitHub release using `git-cliff`.

---

## Infrastructure

- **CI/CD:** `.github/workflows/release.yml`
- **Configuration:** `.changeset/config.json`
- **CLI Menu:** `scripts/menu.mjs`
