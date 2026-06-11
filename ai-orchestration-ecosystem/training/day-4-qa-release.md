# Day 4: QA And Release Readiness

## Purpose

Practice using Sagaz to verify work and prepare release readiness without prematurely publishing or deploying.

## Use When

- Implementation is complete or nearly complete.
- QA needs evidence and risk review.
- Maintainers need release notes, rollback, and approval gates.

## Estimated Time

30 to 60 minutes.

## Prerequisites

- A completed or simulated change.
- Known test or build commands if available.
- No approval for GitHub, deploy, tag, release, or publish operations during training.

## Invocation

```text
Sagaz: act as QA and release reviewer for this change.

Review:
- behavior
- tests
- build
- accessibility or visual QA if relevant
- release notes
- rollback plan

Do not commit, push, tag, release, deploy, or publish. Tell me what approval would be needed for each remote operation.
```

## What To Observe

- Sagaz should distinguish local checks from remote operations.
- Sagaz should identify missing evidence.
- Sagaz should propose release notes and rollback.
- Sagaz should avoid committing, tagging, releasing, deploying, or publishing without approval.

## Handoff

Expected handoff:

- Verification summary.
- Commands run or recommended.
- Evidence and gaps.
- Release readiness decision.
- Rollback plan.
- Approval needed before GitHub/deploy/package operations.

## Verification

Success criteria:

- No remote operations occurred.
- Release blockers are clear.
- Rollback is understandable.
- The team can decide whether to approve release operations.

## Common Mistakes

- Treating local build success as full release readiness.
- Skipping manual checks for UI changes.
- Forgetting rollback.
- Publishing or deploying before explicit approval.
