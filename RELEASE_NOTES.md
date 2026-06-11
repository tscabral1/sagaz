# Release Notes

## Release

Version: 0.3.0
Date: 2026-06-11
Release type: Minor
GitHub commit: pending
Git tag: pending
GitHub release: pending
npm package: pending

## Summary

Sagaz 0.3.0 completes the main non-CLI governance layer for Codex Desktop orchestration. It adds operational runbooks, complete scenario examples, a capabilities matrix, formal permission policy, stack playbooks, execution trace evidence, and MCP connector governance.

## Audience Impact

- New users: clearer operating model, examples, stack guidance, and permission expectations before using Sagaz.
- Existing users: should refresh the installed skill with `npx sagaz-ai sync`.
- Maintainers: stronger package checks now catch stack playbook, observability, permission, and connector-policy drift.
- Design team: Figma MCP usage is governed as a formal connector workflow for app-like mockups and design artifacts.
- Engineering team: workflow evidence now includes traceable commands, decisions, failures, permissions, and handoffs.

## What Changed

- Added an operations runbook for everyday Sagaz use.
- Added complete examples for common delivery scenarios.
- Added a capabilities matrix against other orchestration ecosystems.
- Added a formal permission contract for Windows and macOS Codex Desktop usage.
- Added stack-specific playbooks.
- Added an execution trace template and stronger observability protocol.
- Added MCP connector policy across design, deploy, package, data, browser, and AI providers.
- Expanded package verification to enforce the new governance files.

## Why It Matters

Sagaz now has clearer rules for how agents should choose tools, request permission, preserve workflow state, hand off work, verify stack-specific outcomes, and operate MCP connectors without drifting into ad hoc behavior.

## Compatibility

- Windows: supported and locally verified from a Codex Desktop workspace.
- macOS: supported through Codex Desktop and GitHub Actions runner validation.
- Node.js: `>=22.14` remains the package minimum; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: required.
- GitHub Actions: package checks run on Ubuntu, Windows, and macOS.
- npm package: still an installer/distribution package, not a standalone Sagaz runtime.

## Migration Notes

Run:

```bash
npx sagaz-ai@0.3.0 sync
npx sagaz-ai doctor
```

Then open a new Codex Desktop thread so Sagaz is rediscovered.

## Verification

- `npm test`: passed locally on Windows.
- `npm run doctor`: passed locally on Windows with installed skill synchronization confirmed.
- `npm pack --dry-run`: passed locally on Windows after npm cache access was allowed outside the sandbox.
- Manual checks: Git status reviewed before release preparation.

## Known Limitations

- Sagaz still intentionally skips a standalone CLI runtime; Codex Desktop remains the execution surface.
- GitHub release and npm publishing remain explicit approval steps.
- Connector behavior depends on each external MCP/app authorization and platform availability.

## Rollback Plan

- Revert the release commit if the GitHub repository update fails.
- If published to npm, publish a patch version that restores the previous known-good package contents.
- Users can reinstall a previous npm version with `npx sagaz-ai@<version> install --force` if needed.

## Release Decision

Approved by: Thiago Cabral
Approval date: 2026-06-11
Residual risk: GitHub Actions and npm publishing still need remote execution after push.
