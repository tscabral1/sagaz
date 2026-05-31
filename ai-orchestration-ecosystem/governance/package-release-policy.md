# Package Release Policy

## Purpose

Keep GitHub, the npm package, the portable Codex skill, and the installed local skill synchronized whenever Sagaz changes.

## Required Update Targets

When Sagaz changes, update every relevant location:

- `ai-orchestration-ecosystem/`
- `codex-skill/sagaz/SKILL.md`
- installed local skill at `~/.codex/skills/sagaz` when working on this machine
- `README.md`
- `INSTALL.md`
- `package.json` version when publishing a package update
- GitHub repository
- npm package when the installer or distributed files change
- GitHub Actions workflows when package checks or publishing rules change

## Release Checklist

```md
Change summary:
Files updated:
Skill updated:
Installed local skill updated:
README updated:
Package version updated:
Package verified:
Git commit:
Git push:
npm publish:
Post-publish install test:
```

## GitHub Actions

The repository should include:

- package checks on push and pull request
- manual npm publishing workflow
- GitHub Actions configured with Node.js 24 unless a newer supported LTS baseline is intentionally adopted

The npm publishing workflow requires either trusted publishing or an `NPM_TOKEN` repository secret. Do not assume either is configured. If missing, guide the user through the safest available option and explain why it is needed.

Use Node.js 22.14+ as the minimum package baseline and Node.js 24 LTS for GitHub Actions unless a compatibility audit recommends a newer baseline.

## npm Publishing

Use npm only for installation packaging. Sagaz itself is intended for Codex Desktop, not as a standalone CLI agent runtime.

Before publishing:

```powershell
npm test
npm pack --dry-run
```

Publish:

```powershell
npm publish --access public
```
