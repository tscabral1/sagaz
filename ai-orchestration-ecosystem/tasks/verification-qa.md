# Task: Verification QA

## Owner

Active workflow owner squad or code-audit squad when independent review is needed.

## Allowed Owner Squads

- product-factory
- mobile-app-studio
- refactor-lab
- code-audit

## Used By Workflows

- greenfield-web-app
- web-production-release
- mobile-app-production
- brownfield-refactor-safe
- bugfix-to-release

## Required Inputs

- Implementation changes or proposed changes.
- Acceptance criteria.
- Known risks and preserved behavior requirements.
- Available test commands, build commands, visual checks, or manual QA paths.

## Produces

- `template:qa-report`.
- Test, build, lint, typecheck, visual, accessibility, security, or manual verification evidence.
- Generated code linting evidence from `protocols/generated-code-linting.md` when code changed.
- Defects found and recommended fixes.
- Go/no-go verdict with residual risks.

## Evidence Required

- Verification commands or inspection methods are named.
- Failures include observed output, likely cause, and recovery step.
- Risk level determines verification depth.
- Residual risk is explicit before handoff.

## Handoff

Active QA owner -> production-critical, github-ops, or implementation owner based on verdict.

## Acceptance Criteria

- Output is specific and testable.
- Assumptions are recorded.
- Verification method is stated.
- Next step is clear.

## Verification

Check against `protocol:testing-matrix`, `protocol:quality-gates`, and any applicable visual, accessibility, security, or performance protocols.

## Stop Condition

Stop and ask the user when a required check fails without explanation, evidence is insufficient, or a high-risk residual issue needs acceptance.
