# Release Notes

## Release

Version: 0.3.1
Date: 2026-06-11
Release type: Patch
GitHub commit: pending
Git tag: pending
GitHub release: pending
npm package: pending

## Summary

Sagaz 0.3.1 adds the official adoption guide for using Sagaz in another project after installation. It documents the first-use flow, team operating model, invocation prompts, Windows/macOS notes, permission expectations, and evidence artifacts.

## Audience Impact

- New users: clearer first real step after installing Sagaz.
- Existing users: can sync the installed skill and follow the adoption guide from a fresh Codex Desktop thread.
- Teams: get a practical onboarding path before applying Sagaz to production work.
- Maintainers: package validation now tracks the adoption guide in the ecosystem manifest.

## What Changed

- Added `ai-orchestration-ecosystem/ADOPTION.md`.
- Linked the adoption guide from the root README, ecosystem README, and ecosystem INDEX.
- Registered the adoption guide in `manifest.json`.
- Updated package verification so the docs group validates the new guide.

## Why It Matters

After `0.3.0`, Sagaz had strong governance but needed a direct bridge between installation and first use in a real project. This patch gives teams a safe starting prompt, explains what Sagaz should inspect first, and reinforces permission gates before risky actions.

## Compatibility

- Windows: supported through Codex Desktop.
- macOS: supported through Codex Desktop.
- Node.js: `>=22.14` remains the package minimum; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: required.
- npm package: still an installer/distribution package, not a standalone Sagaz runtime.

## Migration Notes

Run:

```bash
npx sagaz-ai@0.3.1 sync
npx sagaz-ai doctor
```

Then open a new Codex Desktop thread so Sagaz is rediscovered.

## Verification

- `npm test`: passed locally on Windows.
- `npm run doctor`: passed locally on Windows with installed skill synchronization confirmed.
- `npm pack --dry-run`: passed locally on Windows after npm cache access was allowed outside the sandbox.
- Manual checks: adoption guide linked from README, INDEX, and manifest.

## Known Limitations

- Sagaz still intentionally skips a standalone CLI runtime; Codex Desktop remains the execution surface.
- Connector behavior depends on each external MCP/app authorization and platform availability.

## Rollback Plan

- Revert the release commit if the GitHub repository update fails.
- If published to npm, publish a patch version that restores the previous known-good package contents.
- Users can reinstall a previous npm version with `npx sagaz-ai@<version> install --force` if needed.

## Release Decision

Approved by: Thiago Cabral
Approval date: 2026-06-11
Residual risk: GitHub Actions and npm publishing still need remote execution after push.
