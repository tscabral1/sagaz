# Changelog

## Purpose

Maintain a concise, release-by-release history of user-visible Sagaz changes.

Use this template whenever a Sagaz change affects installation, invocation, package contents, workflows, tasks, protocols, stack presets, governance, evaluation coverage, GitHub Actions, or runtime requirements.

## Format

Use reverse chronological order.

```md
## [Version] - YYYY-MM-DD

### Release Type

Patch | Minor | Major

### Added

### Changed

### Fixed

### Removed

### Security

### Compatibility

- Windows:
- macOS:
- Node.js:
- Codex Desktop:

### Migration Notes

### Verification

- npm test:
- npm run doctor:
- npm pack --dry-run:
- Evaluation scenarios:

### Release Evidence

- Commit:
- Tag:
- GitHub release:
- npm package:
```

## Rules

- Mention user-visible changes.
- Mention installation, package, or runtime requirement changes.
- Mention workflow, task, protocol, manifest, evaluation, and GitHub Actions changes when they alter Sagaz behavior.
- Mention breaking changes clearly under `Migration Notes`.
- Include Windows and macOS compatibility notes when commands, paths, install behavior, or Codex Desktop behavior changed.
- Include verification evidence before release.
- Keep implementation details concise.

