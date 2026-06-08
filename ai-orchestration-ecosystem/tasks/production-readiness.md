# Task: Production Readiness

## Owner

Production Critical.

## Allowed Owner Squads

- production-critical
- mobile-app-studio
- product-factory

## Used By Workflows

- greenfield-web-app
- web-production-release
- mobile-app-production
- brownfield-refactor-safe
- bugfix-to-release

## Required Inputs

- Verified implementation or release candidate.
- Deployment target and environment strategy.
- Security, data, observability, rollback, and support requirements.
- Current run state and release risks.

## Produces

- Release readiness assessment.
- Environment variable and secret inventory without exposing secret values.
- Deployment, rollback, monitoring, and incident notes.
- Release checklist or mobile release checklist when applicable.

## Evidence Required

- Build and verification status is known.
- Security and production risks are documented.
- Rollback or recovery path is clear.
- External account, deployment, or production changes require explicit permission.

## Handoff

production-critical -> github-ops or active workflow owner squad.

## Acceptance Criteria

- Output is specific and testable.
- Assumptions are recorded.
- Verification method is stated.
- Next step is clear.

## Verification

Check against `protocol:production-readiness`, `protocol:secure-sdlc`, `protocol:release-strategy`, and relevant SRE or CI/CD protocols.

## Stop Condition

Stop and ask the user before deploying, modifying production data, exposing secrets, creating cloud resources, or accepting high production risk.
