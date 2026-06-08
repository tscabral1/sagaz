# Workflow: Brownfield Refactor Safe

## Use

Use this named workflow when the task matches Brownfield Refactor Safe delivery.

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
| 1 | refactor-lab | task:intake-brief | Refactor objective, protected behavior, constraints, definition of done, and risks are recorded | refactor-lab -> refactor-lab |
| 2 | refactor-lab | task:product-requirements, template:refactor-safety-contract | Preserved behavior, acceptance criteria, and non-goals are testable | refactor-lab -> refactor-lab |
| 3 | refactor-lab | task:stack-recommendation, protocol:architecture-fitness-functions | Architecture risks, fitness functions, and compatibility boundaries are explicit | refactor-lab -> design-studio |
| 4 | design-studio | task:design-system, protocol:design-quality, protocol:future-change-safety | UI/UX invariants and visual behavior preservation are defined when UI exists | design-studio -> refactor-lab |
| 5 | refactor-lab | task:implementation-build, template:implementation-plan | Refactor increments are behavior-preserving, reversible, and reviewable | refactor-lab -> code-audit |
| 6 | code-audit | task:verification-qa, template:qa-report, protocol:testing-matrix | Regression, contract, visual, and security checks match refactor risk | code-audit -> production-critical |
| 7 | production-critical | task:production-readiness, protocol:production-readiness, protocol:secure-sdlc | Deployment, rollback, security, and residual risks are documented | production-critical -> github-ops |
| 8 | github-ops | task:github-release-ops, protocol:github-operations | Commit, push, PR, checks, or release actions are approved and evidenced | github-ops -> refactor-lab |
| 9 | refactor-lab | protocol:future-change-safety, template:future-change-guide | Future refactors and feature additions have invariants and regression guidance | refactor-lab -> refactor-lab |
| 10 | refactor-lab | template:final-handoff, protocol:squad-pipeline-handoffs | Final evidence, changed files, risks, preserved behavior, and next actions are complete | complete |

## Workflow State

- Use `templates/run-state.md` for medium or large refactors.
- Checkpoint after phases 1, 2, 3, 5, 6, 8, and 10.
- Record skipped phases with reason, risk, and user approval when the workflow is shortened.

## Handoff Contract

Every phase handoff must state current squad, completed work, evidence, risks, next squad, next action, why now, and whether permission is required.

## Gates

- Use only necessary phases.
- Ask permission before each major handoff.
- Maintain run state for medium/large work.
- Do not declare done without verification evidence.

