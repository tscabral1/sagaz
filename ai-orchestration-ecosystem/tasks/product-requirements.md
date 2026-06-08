# Task: Product Requirements

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

- Intake brief.
- Current run state.
- User goals, constraints, users, journeys, and risks.
- Existing product behavior when working in a brownfield project.

## Produces

- `template:product-spec` for product or release work.
- `template:refactor-safety-contract` for behavior-preserving refactors.
- `template:task-brief` for narrow bugfix work.
- User journeys, acceptance criteria, non-goals, assumptions, and risks.

## Evidence Required

- Requirements are testable.
- Acceptance criteria map to user-visible behavior or preserved behavior.
- Non-goals and assumptions are explicit.
- Risky requirements have a verification path.

## Handoff

Active owner squad -> stack, design, implementation, or audit squad based on the active workflow.

## Acceptance Criteria

- Output is specific and testable.
- Assumptions are recorded.
- Verification method is stated.
- Next step is clear.

## Verification

Check against the active workflow, `protocol:quality-gates`, and any relevant product, security, or production protocols.

## Stop Condition

Stop and ask the user when requirements conflict, acceptance criteria cannot be tested, or scope changes materially.
