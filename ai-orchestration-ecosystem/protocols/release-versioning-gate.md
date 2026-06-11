# Protocol: Release Versioning Gate

## Objective

Prevent Sagaz releases, package publishes, GitHub releases, and version bumps unless the ecosystem is internally consistent, validated, and documented.

Use this protocol before changing `package.json` version, creating a GitHub release, publishing to npm, tagging a release, or telling the user that a Sagaz version is ready.

## Required Practice

Treat release readiness as a gate, not a suggestion. A release candidate must have:

- Clear release scope and user impact.
- Version bump decision using semantic versioning.
- Updated release notes or changelog entry using `templates/release-notes.md` or `templates/changelog.md` when user-visible behavior, installation, package contents, protocols, workflows, tasks, governance, GitHub Actions, evaluation coverage, or runtime requirements changed.
- Passing `npm test`.
- Passing `node ./bin/sagaz.js doctor`.
- Valid `manifest.json` coverage for all ecosystem components.
- Valid dependency graph with no dangling or unregistered critical components.
- Passing evaluation suite evidence for the changed area, using `evals/sagaz-evaluation-suite.md`.
- Windows and macOS considerations reviewed for commands, paths, install steps, and Codex Desktop behavior.
- Git state reviewed so unrelated user changes are not accidentally included.
- Permission level classified with `protocols/permission-contract.md`.
- Explicit user approval before commit, tag, push, GitHub release, npm publish, or installed skill update.

## Version Decision

Use this rule for Sagaz itself:

- Patch: documentation fixes, wording improvements, small validation fixes, or backward-compatible protocol/task clarifications.
- Minor: new workflows, protocols, stack presets, tasks, evaluation scenarios, registry capabilities, or installer behavior that remains backward compatible.
- Major: breaking changes to invocation, file layout, manifest schema, installer expectations, workflow contracts, task contracts, or supported runtime baseline.

Do not bump the package version merely because local documentation changed unless the distributed package, installer, skill, or GitHub release is being prepared.

## Release Evidence

Before release, produce this evidence:

```md
Release candidate:
Version decision:
Scope:
User-visible changes:
Changed components:
Manifest checked:
Dependency graph checked:
Evaluation scenarios run:
Windows/macOS impact:
Commands run:
Changelog or release notes:
Migration notes:
Compatibility notes:
Rollback plan:
Git status summary:
Permission classification:
Approval needed:
```

## Blocking Conditions

Block release when any of these are true:

- `npm test` fails.
- `node ./bin/sagaz.js doctor` fails.
- `manifest.json` is missing a changed component.
- Dependency graph validation reports an unregistered or dangling component.
- Required evaluation scenarios are missing or below their minimum score.
- Version bump does not match the change impact.
- Changelog or release notes omit a user-visible change.
- Changelog or release notes omit compatibility, migration, verification, or rollback details required by the release scope.
- Git status includes unrelated changes that the user has not approved for inclusion.
- npm, GitHub release, tag, or push would happen without explicit user approval.

## Output

```md
Release gate:
Version:
Decision:
Passed checks:
Failed checks:
Evidence:
Blocked by:
Next action:
Permission required:
```
