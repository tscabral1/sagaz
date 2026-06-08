# Workflow: Mobile App Production

## Use

Use this named workflow when the task matches Mobile App Production delivery.

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
| 1 | mobile-app-studio | task:intake-brief | Mobile objective, platforms, constraints, definition of done, and risks are recorded | mobile-app-studio -> mobile-app-studio |
| 2 | mobile-app-studio | task:product-requirements, template:product-spec | Mobile journeys, permissions, offline needs, and acceptance criteria are testable | mobile-app-studio -> mobile-app-studio |
| 3 | mobile-app-studio | task:stack-recommendation, protocol:stack-selection | Mobile stack, native constraints, build path, and deployment tradeoffs are explicit | mobile-app-studio -> design-studio |
| 4 | design-studio | task:design-system, protocol:design-quality, protocol:accessibility-compliance | Mobile UX/UI, components, responsive states, and accessibility expectations are defined | design-studio -> mobile-app-studio |
| 5 | mobile-app-studio | task:implementation-build, template:implementation-plan | Build increments are device-testable and tied to acceptance criteria | mobile-app-studio -> mobile-app-studio |
| 6 | mobile-app-studio | task:verification-qa, template:qa-report, protocol:testing-matrix, protocol:performance-budgets | Device, workflow, performance, accessibility, and security checks match release risk | mobile-app-studio -> production-critical |
| 7 | production-critical | task:production-readiness, protocol:production-readiness, protocol:secure-sdlc, protocol:release-strategy | Store readiness, environment, rollout, rollback, security, and residual risks are documented | production-critical -> github-ops |
| 8 | github-ops | task:github-release-ops, protocol:github-operations, template:mobile-release-checklist | Commit, push, PR, checks, or release actions are approved and evidenced | github-ops -> mobile-app-studio |
| 9 | mobile-app-studio | protocol:future-change-safety, template:future-change-guide | Future refactors and feature additions have mobile invariants and regression guidance | mobile-app-studio -> mobile-app-studio |
| 10 | mobile-app-studio | template:final-handoff, protocol:squad-pipeline-handoffs | Final evidence, changed files, risks, release status, and next actions are complete | complete |

## Workflow State

- Use `templates/run-state.md` for medium or large mobile work.
- Checkpoint after phases 1, 3, 4, 6, 7, 8, and 10.
- Record skipped phases with reason, risk, and user approval when the workflow is shortened.

## Handoff Contract

Every phase handoff must state current squad, completed work, evidence, risks, next squad, next action, why now, and whether permission is required.

## Advanced Protocols To Consider

- SRE readiness for backends and critical services.
- Secure SDLC.
- Dependency governance.
- Data privacy lifecycle.
- Performance budgets for cold start, memory, and battery/network impact.
- Accessibility compliance.
- Release strategy for phased rollout.
- AI application quality when AI features exist.

## Gates

- Use only necessary phases.
- Ask permission before each major handoff.
- Maintain run state for medium/large work.
- Do not declare done without verification evidence.

