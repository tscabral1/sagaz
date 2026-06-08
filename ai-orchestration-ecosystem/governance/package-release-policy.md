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
Installed local skill sync verified:
README updated:
Manifest updated:
Dependency graph validated:
Evaluation scenarios run:
Package version updated:
Package verified:
Version decision:
Changelog or release notes updated:
Migration notes reviewed:
Compatibility notes reviewed:
Rollback plan documented:
Git commit:
Git push:
Git tag:
GitHub release:
npm publish:
Post-publish install test:
```

## Release Gate

Apply `protocols/release-versioning-gate.md` before changing the package version, creating a Git tag, creating a GitHub release, or publishing to npm.

A package release is blocked unless `npm test`, `node ./bin/sagaz.js doctor`, manifest validation, dependency graph validation, release notes or changelog review, and relevant evaluation scenarios have passed.

Do not include unrelated local changes in a release commit unless the user explicitly approves that scope.

Use `templates/changelog.md` for release history and `templates/release-notes.md` for GitHub release or npm publication notes. Release notes must include audience impact, compatibility, migration notes, verification, known limitations, rollback plan, and release decision.

Apply `protocols/installed-skill-sync.md` after changing `codex-skill/sagaz/SKILL.md` or release/invocation rules. Local release evidence must state whether the installed skill was synchronized, stale, or intentionally not updated.

## GitHub Actions

The repository should include:

- package checks on push and pull request
- package checks on Linux, Windows, and macOS GitHub runners
- `npm test`, `npm run doctor`, and `npm pack --dry-run` in package checks
- manual npm publishing workflow with explicit version input
- manual npm publishing workflow with a publish confirmation input
- GitHub Actions configured with Node.js 24 unless a newer supported LTS baseline is intentionally adopted

The npm publishing workflow requires either trusted publishing or an `NPM_TOKEN` repository secret. Do not assume either is configured. If missing, guide the user through the safest available option and explain why it is needed.

Use Node.js 22.14+ as the minimum package baseline and Node.js 24 LTS for GitHub Actions unless a compatibility audit recommends a newer baseline.

## npm Publishing

Use npm only for installation packaging. Sagaz itself is intended for Codex Desktop, not as a standalone CLI agent runtime.

Before publishing:

```powershell
npm test
node ./bin/sagaz.js doctor
npm pack --dry-run
```

Publish:

```powershell
npm publish --access public
```
