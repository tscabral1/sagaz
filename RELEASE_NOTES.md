# Release Notes

## Release

Version: 0.4.1
Date: 2026-06-14
Release type: Patch
GitHub commit: pending
Git tag: pending
GitHub release: pending
npm package: pending

## Summary

Sagaz 0.4.1 adds formal generated-code linting and strengthens stack planning for TypeScript strict mode and Supabase. Sagaz now has explicit rules for discovering existing project checks, reporting lint/typecheck evidence, and making TypeScript/Supabase decisions during stack recommendation.

## Audience Impact

- Builders: generated or modified code now has clearer lint/typecheck expectations.
- Tech leads: TypeScript strict and Supabase choices are explicit in stack planning.
- QA/release reviewers: linting evidence becomes part of handoff quality.
- Maintainers: package validation now protects these rules from drift.

## What Changed

- Added `protocols/generated-code-linting.md`.
- Rewrote `protocols/stack-selection.md` with TypeScript strict and Supabase policy.
- Updated stack presets and the Next.js/Vercel/Supabase playbook.
- Updated implementation/QA tasks, prompts, golden outputs, and evaluation scenarios.
- Expanded `scripts/verify-package.js` to validate generated-code linting and stack-selection requirements.

## Why It Matters

Sagaz should not merely generate code; it should respect the target project's quality checks. It should also make stack decisions deliberately, especially around strict TypeScript and managed backend choices like Supabase.

## Compatibility

- Windows: supported through Codex Desktop.
- macOS: supported through Codex Desktop.
- Node.js: `>=22.14` remains the package minimum; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: required.
- npm package: still an installer/distribution package, not a standalone Sagaz runtime.

## Migration Notes

After npm publication, run:

```bash
npx sagaz-ai@0.4.1 sync
npx sagaz-ai doctor
```

Then open a new Codex Desktop thread so Sagaz is rediscovered.

## Verification

- `npm test`: passed locally on Windows.
- `npm run doctor`: passed locally on Windows with installed skill synchronization confirmed.
- `npm pack --dry-run`: passed locally on Windows after npm cache access was allowed outside the sandbox.
- Manual checks: linting, TypeScript strict, and Supabase planning are registered in manifest-linked protocols and validation.

## Known Limitations

- Sagaz still intentionally skips a standalone CLI runtime; Codex Desktop remains the execution surface.
- Sagaz discovers and uses existing linting where available; it does not install or reconfigure lint tooling without approval.
- Supabase operations still depend on external account authorization and explicit permission.

## Rollback Plan

- Revert the release commit if the GitHub repository update fails.
- If published to npm and a regression appears, publish a patch version that restores the previous known-good package contents.
- Users can reinstall a previous npm version with `npx sagaz-ai@<version> install --force` if needed.

## Release Decision

Approved by: Thiago Cabral
Approval date: 2026-06-14
Residual risk: npm publishing may require interactive 2FA.
