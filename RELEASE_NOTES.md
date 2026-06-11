# Release Notes

## Release

Version: 0.3.2
Date: 2026-06-11
Release type: Patch
GitHub commit: pending
Git tag: pending
GitHub release: pending
npm package: pending

## Summary

Sagaz 0.3.2 adds operational memory: a safe, explicit, approval-based way to record recurring project and team preferences across Sagaz runs without storing secrets or bypassing current user instructions.

## Audience Impact

- New users: can understand how Sagaz handles recurring preferences before using it across multiple projects.
- Existing users: can sync the installed skill and use the new memory protocol/template in real projects.
- Teams: get a safer shared preference artifact for stack, design, verification, GitHub, deployment, and handoff expectations.
- Maintainers: package validation now protects the memory protocol and template from accidental drift.

## What Changed

- Replaced the generic `protocols/memory.md` with a concrete operational memory contract.
- Added `templates/operational-memory.md`.
- Registered the memory template in `manifest.json`.
- Linked operational memory from README, ecosystem README, and INDEX.
- Added verifier checks for memory levels, approval language, storage path, sensitive-data exclusions, and required template fields.

## Why It Matters

Sagaz can now carry stable preferences between projects in an auditable way while still respecting the current repository, current user request, and explicit permission gates. The memory system is intentionally file-based, reviewable, and scoped.

## Compatibility

- Windows: supported through Codex Desktop.
- macOS: supported through Codex Desktop.
- Node.js: `>=22.14` remains the package minimum; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: required.
- npm package: still an installer/distribution package, not a standalone Sagaz runtime.

## Migration Notes

Run:

```bash
npx sagaz-ai@0.3.2 sync
npx sagaz-ai doctor
```

Then open a new Codex Desktop thread so Sagaz is rediscovered.

## Verification

- `npm test`: passed locally on Windows.
- `npm run doctor`: passed locally on Windows with installed skill synchronization confirmed.
- `npm pack --dry-run`: passed locally on Windows after npm cache access was allowed outside the sandbox.
- Manual checks: memory protocol and template are registered in the manifest and linked from docs.

## Known Limitations

- Sagaz still intentionally skips a standalone CLI runtime; Codex Desktop remains the execution surface.
- Operational memory is advisory and must not override current user instructions or repository evidence.
- Connector behavior depends on each external MCP/app authorization and platform availability.

## Rollback Plan

- Revert the release commit if the GitHub repository update fails.
- If published to npm, publish a patch version that restores the previous known-good package contents.
- Users can reinstall a previous npm version with `npx sagaz-ai@<version> install --force` if needed.

## Release Decision

Approved by: Thiago Cabral
Approval date: 2026-06-11
Residual risk: GitHub Actions and npm publishing still need remote execution after push.
