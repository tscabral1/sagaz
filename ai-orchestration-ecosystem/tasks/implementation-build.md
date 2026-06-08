# Task: Implementation Build

## Owner

Active workflow owner squad.

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

- Approved requirements or refactor safety contract.
- Stack recommendation or existing architecture constraints.
- Design system or UI preservation rules when UI exists.
- Current run state and workflow phase ledger.

## Produces

- `template:implementation-plan`.
- Code changes or implementation plan when execution is deferred.
- Updated documentation when behavior, architecture, design, or deployment expectations change.
- Verification notes for the QA phase.

## Evidence Required

- Changes are scoped to the active task.
- Implementation maps to acceptance criteria.
- Risky changes are isolated, reversible, or explicitly justified.
- Tests, build checks, or manual verification steps are identified.

## Handoff

Active owner squad -> verification or audit squad based on the active workflow.

## Acceptance Criteria

- Output is specific and testable.
- Assumptions are recorded.
- Verification method is stated.
- Next step is clear.

## Verification

Check against the implementation plan, active workflow contract, and relevant engineering protocols.

## Stop Condition

Stop and ask the user when implementation requires new dependencies, external services, destructive data changes, architecture changes, or scope expansion.
