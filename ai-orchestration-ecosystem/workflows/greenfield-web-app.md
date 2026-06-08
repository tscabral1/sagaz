# Workflow: Greenfield Web App

## Use

Use this named workflow when the task matches Greenfield Web App delivery.

## Sequence

1. Intake: objective, constraints, definition of done, risks.
2. Product: requirements, journeys, acceptance criteria.
3. Technology: stack recommendation, architecture, deployment tradeoffs.
4. Design: UX, UI, design system, accessibility, visual quality.
5. Implementation: build in small verifiable increments.
6. Verification: tests, QA, visual validation, security review.
7. Production: readiness, environment variables, deployment, rollback.
8. GitHub Ops: commit, push, PR, checks, release when approved.
9. Future-change safety: create or update future-change documentation, invariants, and regression guidance.
10. Delivery: final handoff with evidence and residual risks.

## Formal Workflow Contract

| Phase | Owner Squad | Resource | Required Gate | Handoff |
| --- | --- | --- | --- | --- |
| 1 | product-factory | task:intake-brief | Objective, constraints, definition of done, and risks are recorded | product-factory -> product-factory |
| 2 | product-factory | task:product-requirements, template:product-spec | Requirements, journeys, and acceptance criteria are testable | product-factory -> product-factory |
| 3 | product-factory | task:stack-recommendation, template:stack-recommendation, protocol:stack-selection | Stack decision explains cost, speed, scale, maintainability, and deployment | product-factory -> design-studio |
| 4 | design-studio | task:design-system, template:design-system-spec, protocol:design-quality | UX/UI, component rules, responsive behavior, and accessibility expectations are defined | design-studio -> product-factory |
| 5 | product-factory | task:implementation-build, template:implementation-plan | Build increments are small, reviewable, and tied to acceptance criteria | product-factory -> product-factory |
| 6 | product-factory | task:verification-qa, template:qa-report, protocol:testing-matrix | Tests and visual/security checks match the risk level | product-factory -> production-critical |
| 7 | production-critical | task:production-readiness, protocol:production-readiness, protocol:secure-sdlc | Environment, deployment, rollback, security, and residual risks are documented | production-critical -> github-ops |
| 8 | github-ops | task:github-release-ops, protocol:github-operations | Commit, push, PR, checks, or release actions are approved and evidenced | github-ops -> product-factory |
| 9 | product-factory | protocol:future-change-safety, template:future-change-guide | Future refactors and feature additions have invariants and regression guidance | product-factory -> product-factory |
| 10 | product-factory | template:final-handoff, protocol:squad-pipeline-handoffs | Final evidence, changed files, risks, and next actions are complete | complete |

## Workflow State

- Use `templates/run-state.md` for medium or large work.
- Checkpoint after phases 1, 3, 4, 6, 7, 8, and 10.
- Record skipped phases with reason, risk, and user approval when the workflow is shortened.

## Handoff Contract

Every phase handoff must state current squad, completed work, evidence, risks, next squad, next action, why now, and whether permission is required.

## Gates

- Use only necessary phases.
- Ask permission before each major handoff.
- Maintain run state for medium/large work.
- Do not declare done without verification evidence.

