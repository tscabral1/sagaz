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

The npm publishing workflow requires an `NPM_TOKEN` repository secret. Do not assume it exists. If it is missing, guide the user through creating it and explain why it is needed.

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
