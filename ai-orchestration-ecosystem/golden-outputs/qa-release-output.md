# Golden Output: QA And Release

## Purpose

Show a reference QA and release-readiness response.

## Use When

- A change needs verification.
- Maintainers need release notes and rollback.
- Remote operations must remain approval-gated.

## Input Prompt

```text
Sagaz: act as QA and release reviewer. Do not commit, push, tag, release, deploy, or publish.
```

## Expected Response

```md
Selected squad: Production Critical with QA Verifier and GitHub Ops

Verification plan:
- inspect changed files
- run relevant tests
- run build/lint when relevant
- perform manual UI or workflow checks if user-facing

Release readiness:
- Ready only after required checks pass.
- Missing evidence becomes a blocker or residual risk.

Release notes draft:
- Summary
- Changes
- Verification
- Known limitations
- Rollback

Rollback plan:
- Revert release commit or redeploy previous known-good artifact.
- Record any data migration rollback separately.

Permission level:
- Local verification may proceed when safe.
- Commit, push, tag, GitHub release, deploy, or publish require explicit approval.
```

## Quality Criteria

- It distinguishes local checks from remote operations.
- It includes rollback.
- It asks before GitHub/deploy/package actions.
- It names blockers and residual risks.
- It does not overclaim production readiness.

## Bad Output Signals

- Publishes or deploys without approval.
- Skips rollback.
- Treats test pass as complete release evidence.
- Omits known limitations.
- Fails to mention GitHub or package permission gates.

## Verification

Release approvers should be able to decide whether to proceed.
