# Task: Stack Recommendation

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

- Intake brief or product requirements.
- Current project architecture and dependencies when available.
- Deployment target, platform constraints, data needs, team constraints, and maintenance expectations.
- Relevant stack presets.

## Produces

- `template:stack-recommendation`.
- Architecture and deployment tradeoffs.
- Recommended stack or confirmation of existing stack.
- Cost, speed, scale, maintainability, maturity, security, deployment, and future-change rationale.

## Evidence Required

- Recommendation references project constraints.
- Tradeoffs and lock-in risks are documented.
- Existing project conventions are respected.
- Any dependency, account, cloud, or external-tool change requires explicit permission.

## Handoff

Active owner squad -> design, implementation, audit, or production squad based on the active workflow.

## Acceptance Criteria

- Output is specific and testable.
- Assumptions are recorded.
- Verification method is stated.
- Next step is clear.

## Verification

Check against `protocol:stack-selection`, `tools:tool-registry`, and relevant stack presets.

## Stop Condition

Stop and ask the user before installing dependencies, adopting costly services, changing platform direction, or introducing vendor lock-in.
