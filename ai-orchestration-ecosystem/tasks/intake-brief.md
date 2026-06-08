# Task: Intake Brief

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

- User goal.
- Current project or repository state.
- Constraints, target platform, deadline, budget, risk tolerance, and definition of done.
- Existing run state when resuming.

## Produces

- Clear objective.
- Constraints and assumptions.
- Definition of done.
- Initial risk list.
- Recommended workflow, mode, and first squad.
- Run state checkpoint when the work is medium, large, risky, or multi-phase.

## Evidence Required

- Objective and definition of done are stated.
- Key assumptions are recorded.
- Workflow selection is justified.
- Open questions are limited to decisions that affect scope, cost, risk, architecture, or definition of done.

## Handoff

Active owner squad -> next workflow squad.

## Acceptance Criteria

- Output is specific and testable.
- Assumptions are recorded.
- Verification method is stated.
- Next step is clear.

## Verification

Check against the active workflow, `protocol:guided-proactivity`, and `protocol:quality-gates`.

## Stop Condition

Stop and ask the user when scope, cost, architecture, production risk, or external state would change.
