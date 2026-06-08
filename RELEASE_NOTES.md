# Release Notes

## Release

Version: 0.2.0
Date: 2026-06-08
Release type: Minor
GitHub commit: pending
Git tag: pending
GitHub release: pending
npm package: pending

## Summary

Sagaz 0.2.0 strengthens the orchestration ecosystem around formal workflows, handoffs, task contracts, registry validation, release gates, GitHub Actions enforcement, evaluation coverage, and installed skill synchronization.

## Audience Impact

- New users: clearer README, requirements, installation guidance, and sync instructions.
- Existing users: should refresh the installed skill with `npx sagaz-ai sync`.
- Maintainers: stronger `npm test` coverage catches manifest, dependency graph, release, workflow, task, and evaluation drift.
- Design team: Figma MCP and app-like mockup guidance are now part of Sagaz operating rules.
- Engineering team: workflows now behave more like formal contracts with gates, state, handoffs, and evidence.

## What Changed

- Added `manifest.json` as an internal component registry.
- Added dependency graph validation.
- Added component governance.
- Added release/versioning gate.
- Added GitHub Actions package checks across Linux, Windows, and macOS.
- Added formal changelog and release notes templates.
- Added installed skill sync protocol and CLI command.
- Strengthened workflow, task, run-state, and evaluation contracts.

## Why It Matters

Sagaz is now harder to accidentally drift, release, or publish in an inconsistent state. The system can validate its own structure, release gates, installed skill sync, and GitHub automation before maintainers ship changes.

## Compatibility

- Windows: supported and locally verified.
- macOS: supported through Codex Desktop and GitHub Actions runner validation.
- Node.js: `>=22.14` remains the package minimum; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: required.
- GitHub Actions: package checks run on Ubuntu, Windows, and macOS.
- npm package: still an installer/distribution package, not a standalone Sagaz runtime.

## Migration Notes

Run:

```bash
npx sagaz-ai sync
npx sagaz-ai doctor
```

Then open a new Codex Desktop thread so Sagaz is rediscovered.

## Verification

- `npm test`: passed locally.
- `npm run doctor`: passed locally with installed skill synchronization confirmed.
- `npm pack --dry-run`: passed locally after npm cache access was allowed outside the sandbox.
- Evaluation scenarios: enforced by the strengthened Sagaz evaluation suite.
- Manual checks: Git status reviewed before release preparation.

## Known Limitations

- GitHub release and npm publishing remain manual approval steps.
- The package still installs Sagaz for Codex Desktop; it is not a standalone terminal orchestration runtime.

## Rollback Plan

- Revert the release commit if the GitHub repository update fails.
- If published to npm, publish a patch version that restores the previous known-good package contents.
- Users can reinstall a previous npm version with `npx sagaz-ai@<version> install --force` if needed.

## Release Decision

Approved by: Thiago Cabral
Approval date: 2026-06-08
Residual risk: GitHub Actions and npm publishing still need remote execution after push.

