# Workflow: Bugfix To Release

## Use

Use this named workflow when the task matches Bugfix To Release delivery.

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
| 1 | code-audit | task:intake-brief | Bug report, reproduction target, constraints, definition of done, and risks are recorded | code-audit -> code-audit |
| 2 | code-audit | task:product-requirements, template:task-brief | Expected behavior, affected users, acceptance criteria, and non-goals are testable | code-audit -> code-audit |
| 3 | code-audit | task:stack-recommendation, protocol:architecture-fitness-functions | Root-cause area, architecture boundary, and regression risk are explicit | code-audit -> design-studio |
| 4 | design-studio | task:design-system, protocol:design-quality | UI/UX impact and visual behavior preservation are defined when UI exists | design-studio -> code-audit |
| 5 | code-audit | task:implementation-build, template:implementation-plan | Fix is minimal, reviewable, and tied to the reproduced failure | code-audit -> code-audit |
| 6 | code-audit | task:verification-qa, template:qa-report, protocol:testing-matrix | Regression test proves the bug and fix; related checks match risk | code-audit -> production-critical |
| 7 | production-critical | task:production-readiness, protocol:production-readiness, protocol:secure-sdlc | Release, rollback, security, and residual risks are documented | production-critical -> github-ops |
| 8 | github-ops | task:github-release-ops, protocol:github-operations | Commit, push, PR, checks, or release actions are approved and evidenced | github-ops -> code-audit |
| 9 | code-audit | protocol:future-change-safety, template:future-change-guide | Future regressions have prevention notes and verification guidance | code-audit -> code-audit |
| 10 | code-audit | template:final-handoff, protocol:squad-pipeline-handoffs | Final evidence, changed files, risks, fix status, and next actions are complete | complete |

## Workflow State

- Use `templates/run-state.md` when the bugfix spans multiple phases or has production risk.
- Checkpoint after phases 1, 5, 6, 7, 8, and 10.
- Record skipped phases with reason, risk, and user approval when the workflow is shortened.

## Handoff Contract

Every phase handoff must state current squad, completed work, evidence, risks, next squad, next action, why now, and whether permission is required.

## Gates

- Use only necessary phases.
- Ask permission before each major handoff.
- Maintain run state for medium/large work.
- Do not declare done without verification evidence.

