# Changelog

## [0.2.0] - 2026-06-08

### Release Type

Minor

### Added

- Formal workflow contracts and handoff validation across Sagaz workflows.
- Stronger durable workflow state contract and run-state template.
- Task-first contracts for reusable Sagaz task definitions.
- Internal ecosystem manifest and dependency graph validation.
- Component governance protocol for creating, updating, renaming, deprecating, and removing ecosystem components.
- Stronger Sagaz evaluation suite with scenario IDs, required evidence, scoring, and release gates.
- Release/versioning gate for version bumps, tags, GitHub releases, and npm publishes.
- GitHub Actions enforcement across Linux, Windows, and macOS package checks.
- Formal changelog and release notes templates.
- Installed skill synchronization protocol and `npx sagaz-ai sync` command.

### Changed

- `npm test` now validates workflow contracts, task contracts, manifest coverage, dependency graph integrity, release gates, GitHub Actions enforcement, evaluation coverage, and release artifact templates.
- `npx sagaz-ai doctor` now checks whether the installed Codex Desktop skill is synchronized with the source skill.
- README and install documentation now include system requirements, Node.js guidance, platform notes, and skill sync instructions.
- Package release policy now requires manifest validation, dependency graph validation, evaluation evidence, changelog or release notes, and installed skill sync evidence.

### Fixed

- Corrected malformed Markdown code fences in several protocol files.
- Added missing references so critical protocols remain reachable from the dependency graph.

### Removed

- None.

### Security

- Release and GitHub operations now require clearer approval gates before publishing, tagging, pushing, or releasing.

### Compatibility

- Windows: supported through Codex Desktop and validated by GitHub Actions on `windows-latest`.
- macOS: supported through Codex Desktop and validated by GitHub Actions on `macos-latest`.
- Node.js: package baseline remains `>=22.14`; GitHub Actions use Node.js 24.
- Codex Desktop: Sagaz remains a Codex Desktop skill, not a standalone terminal agent runtime.

### Migration Notes

- Existing users should run `npx sagaz-ai sync` or `npx sagaz-ai install --force` to refresh the installed Codex Desktop skill.
- Open a new Codex Desktop thread after syncing so the updated skill can be discovered.

### Verification

- npm test: passed locally on Windows.
- npm run doctor: passed locally on Windows with `Synchronized with source: yes`.
- npm pack --dry-run: passed locally on Windows after allowing npm cache access outside the sandbox.
- Evaluation scenarios: covered by the strengthened `evals/sagaz-evaluation-suite.md` contract.

### Release Evidence

- Commit: pending.
- Tag: pending.
- GitHub release: pending.
- npm package: pending.

