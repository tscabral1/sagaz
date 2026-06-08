# Task: GitHub Release Ops

## Owner

GitHub Ops.

## Allowed Owner Squads

- github-ops

## Used By Workflows

- greenfield-web-app
- web-production-release
- mobile-app-production
- brownfield-refactor-safe
- bugfix-to-release

## Required Inputs

- Verified changes or approved release candidate.
- Current Git status, branch, remote, and CI/check status.
- Release notes, changelog, or final handoff when applicable.
- User approval for commits, pushes, pull requests, releases, or external GitHub actions.

## Produces

- Commit, push, pull request, issue, release, or documented recommendation.
- `template:release-notes` when a release is prepared.
- `template:changelog` when user-facing changes need history.
- GitHub evidence such as commit SHA, branch, PR URL, check status, or release tag.

## Evidence Required

- Repository status is checked before Git operations.
- Commands and results are summarized.
- Remote actions are approved.
- CI/check results or residual risks are recorded.

## Handoff

github-ops -> active workflow owner squad or complete.

## Acceptance Criteria

- Output is specific and testable.
- Assumptions are recorded.
- Verification method is stated.
- Next step is clear.

## Verification

Check against `protocol:github-operations`, `protocol:ci-cd-readiness`, and the active workflow contract.

## Stop Condition

Stop and ask the user before committing, pushing, opening pull requests, publishing releases, changing repository settings, or accepting failed checks.
