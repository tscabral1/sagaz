# Example: Production Bugfix To Release

## User Prompt

```text
Sagaz: fix this production bug, test it, and prepare a GitHub release.

Bug:
Users cannot complete checkout when discount code is empty.
```

## Selected Workflow

`workflows/bugfix-to-release.md`

## Required Squads

- `squads/code-audit.md`
- `squads/production-critical.md`
- `squads/github-ops.md`

## First Actions

1. Inspect current git status.
2. Reproduce or characterize the bug.
3. Identify scope and likely affected files.
4. Create or update run state if the fix is multi-step or production critical.
5. Ask before changing code if the reproduction path is unclear.

## Stack Recommendation

Use the existing project stack. Do not introduce new dependencies unless the bug cannot be fixed safely without them.

## Handoff Sequence

| Phase | From | To | Evidence |
| --- | --- | --- | --- |
| Triage | code-audit | production-critical | reproduction, root cause, affected files |
| Fix | production-critical | production-critical | minimal patch, regression test |
| Verification | production-critical | github-ops | test output, risk notes, release recommendation |
| Release | github-ops | complete | commit, push, tag or release only after approval |

## Expected Artifacts

- Reproduction notes.
- Root cause summary.
- Minimal code diff.
- Regression test or manual verification evidence.
- `templates/qa-report.md`.
- `templates/release-notes.md` when a release is prepared.

## Verification Plan

- Test the failing path before and after the fix.
- Add regression coverage when feasible.
- Run the smallest relevant test suite first.
- Run broader checks when checkout, auth, payment, or data integrity may be affected.
- Smoke test release candidate.

## GitHub Actions To Suggest

- Commit after verification.
- Push after approval.
- Create a GitHub release only when the fix is ready for users.
- Include risk and rollback notes in release notes.

## Release Path

1. Confirm fix scope.
2. Run checks.
3. Prepare release notes.
4. Ask approval for commit and push.
5. Ask approval for tag or GitHub release.
6. Monitor post-release if production risk is meaningful.

## Final Handoff Shape

```md
Current team:
Bug:
Root cause:
Fix:
Evidence/artifacts:
Checks run:
Release status:
Rollback:
Residual risk:
Permission needed:
```

