# QA And Release Prompts

## Purpose

Provide prompts for QA, release readiness, GitHub operations, deployment, and package publishing.

## Use When

- Verifying a change.
- Preparing a release.
- Auditing CI/CD readiness.
- Creating release notes or rollback plans.
- Publishing to npm or another registry.

## Prompt: QA Review

```text
Sagaz: review this change as QA.

Check:
- expected behavior
- regressions
- tests
- build
- accessibility or visual QA if relevant
- residual risk

Do not commit, push, deploy, tag, release, or publish.
```

## Prompt: Release Readiness

```text
Sagaz: prepare release readiness for this project.

Include:
- version recommendation
- changelog or release notes
- verification evidence
- rollback plan
- GitHub operations needed
- deployment or publish operations needed

Do not execute remote operations until I approve.
```

## Prompt: GitHub Release

```text
Sagaz: prepare a GitHub release proposal.

Include:
- commit summary
- tag name
- release title
- release notes
- checks required
- rollback plan

Ask before staging, committing, pushing, tagging, or creating the release.
```

## Verification

A good QA/release response should clearly distinguish local verification from remote release, deployment, or package publishing.
