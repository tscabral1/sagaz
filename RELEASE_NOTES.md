# Release Notes

## Release

Version: 0.4.0
Date: 2026-06-11
Release type: Minor
GitHub commit: pending
Git tag: pending
GitHub release: pending
npm package: not published in this GitHub-only release step

## Summary

Sagaz 0.4.0 consolidates team adoption: onboarding guides, copy-ready prompts, guided training, golden outputs, and golden output evaluations. The release turns Sagaz from a governed orchestration system into something a team can learn, practice, review, and evaluate consistently.

## Audience Impact

- New users: get role-specific onboarding and practical prompts.
- Teams: can train PMs, designers, engineers, QA, and release reviewers with guided exercises.
- Maintainers: can compare real Sagaz responses against golden outputs.
- Evaluators: get a formal golden output evaluation path tied into the main evaluation suite.

## What Changed

- Added `onboarding/` for product, design, engineering, QA/release, and handoff examples.
- Added `prompts/` for project start, design/Figma, implementation, QA/release, and memory scenarios.
- Added `training/` with five guided practice exercises.
- Added `golden-outputs/` with reference Sagaz responses.
- Added `evals/golden-output-evaluation.md`.
- Registered all new groups in `manifest.json`, `INDEX.md`, README files, and `scripts/verify-package.js`.
- Added `EVAL-GOLDEN-OUTPUTS` to `evals/sagaz-evaluation-suite.md`.

## Why It Matters

Sagaz now has a complete adoption ladder: read the guide, copy a prompt, practice with training, compare the response to a golden output, then score it with an eval. That makes team usage more repeatable and gives maintainers a clearer path to quality control.

## Compatibility

- Windows: supported through Codex Desktop.
- macOS: supported through Codex Desktop.
- Node.js: `>=22.14` remains the package minimum; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: required.
- npm package: still an installer/distribution package, not a standalone Sagaz runtime.

## Migration Notes

After npm publication, run:

```bash
npx sagaz-ai@0.4.0 sync
npx sagaz-ai doctor
```

Then open a new Codex Desktop thread so Sagaz is rediscovered.

## Verification

- `npm test`: passed locally on Windows.
- `npm run doctor`: passed locally on Windows with installed skill synchronization confirmed.
- `npm pack --dry-run`: passed locally on Windows after npm cache access was allowed outside the sandbox.
- Manual checks: onboarding, prompts, training, golden outputs, and golden output evals are registered in the manifest and linked from docs.

## Known Limitations

- Sagaz still intentionally skips a standalone CLI runtime; Codex Desktop remains the execution surface.
- Golden output evaluation is currently a structured human-review method, not a fully automated semantic evaluator.
- Connector behavior depends on each external MCP/app authorization and platform availability.

## Rollback Plan

- Revert the release commit if the GitHub repository update fails.
- If later published to npm and a regression appears, publish a patch version that restores the previous known-good package contents.
- Users can reinstall a previous npm version with `npx sagaz-ai@<version> install --force` if needed.

## Release Decision

Approved by: Thiago Cabral
Approval date: 2026-06-11
Residual risk: npm publishing is intentionally deferred in this GitHub-only step.
