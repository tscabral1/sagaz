# QA And Release Onboarding

## Purpose

Help QA, release reviewers, and maintainers use Sagaz for verification, release readiness, GitHub operations, and rollback planning.

## Use When

- Reviewing a completed implementation.
- Preparing a release.
- Checking CI/CD readiness.
- Creating release notes.
- Auditing risk before deploy or publish.

## Invocation

Ask Sagaz to verify evidence and identify gaps.

```text
Sagaz: act as QA and release reviewer for this change.

Review:
- behavior
- tests
- build
- accessibility or visual QA if relevant
- deployment readiness
- rollback plan

Do not push, tag, release, deploy, or publish without asking approval.
```

## Required Inputs

- Change summary.
- Expected behavior.
- Test commands.
- Deployment target.
- Release target.
- Known risks.
- Approval boundaries.

## Expected Output

- QA report.
- Verification evidence.
- Missing test or build gaps.
- Release readiness decision.
- Rollback plan.
- GitHub or deployment operation proposal.

## Handoff

QA/release handoff should include:

- What was verified.
- Commands and results.
- Manual checks.
- Risks accepted or unresolved.
- Release notes draft.
- Rollback steps.
- Approval needed before remote operations.

## Good Prompts

```text
Sagaz: review this branch for release readiness and list blockers before any GitHub operation.
```

```text
Sagaz: prepare release notes, rollback plan, and GitHub release proposal. Do not publish yet.
```

```text
Sagaz: inspect CI failures and tell me the smallest safe fix path.
```

## Common Mistakes

- Publishing before evidence is complete.
- Forgetting rollback.
- Skipping manual checks for UI changes.
- Treating unreviewed CI failures as acceptable.
- Mixing local success with production readiness.

## Verification

Before release approval, confirm:

- Required checks passed.
- Known risks are explicit.
- Rollback plan is usable.
- Changelog or release notes are ready.
- GitHub/deploy/package operations have explicit approval.
