# Sagaz Training Track

## Purpose

Provide a guided practice path for teams learning Sagaz through short exercises.

Use this track after reading `ADOPTION.md`, `onboarding/README.md`, and `prompts/README.md`.

## Use When

- A team is adopting Sagaz for the first time.
- A new team member needs hands-on practice.
- A project lead wants to verify that PMs, designers, engineers, QA, and release reviewers understand Sagaz handoffs.
- The team wants to practice permission gates before using Sagaz on production work.

## Training Sequence

1. `day-1-first-project-audit.md`: inspect a project without changing files.
2. `day-2-product-to-design.md`: turn product intent into design-ready context.
3. `day-3-design-to-implementation.md`: move from design handoff to implementation plan.
4. `day-4-qa-release.md`: verify work and prepare release readiness.
5. `day-5-operational-memory.md`: propose durable project/team preferences safely.

## Prerequisites

- Codex Desktop installed.
- Sagaz installed and verified with `npx sagaz-ai doctor`.
- A low-risk repository for practice.
- Git available if the exercise includes repository status.
- Agreement that Sagaz should not push, deploy, publish, or perform destructive operations during training.

## Invocation

Start every exercise with `Sagaz:` and explicitly state whether file changes are allowed.

For the safest training mode, use:

```text
Sagaz: follow this training exercise. Do not change files, install dependencies, use external connectors, commit, push, deploy, or publish unless I explicitly approve.
```

## Handoff

Each exercise should end with:

- What Sagaz inspected.
- What Sagaz recommended.
- What evidence was produced.
- What risks or assumptions remain.
- What permission would be needed for the next step.
- Which training exercise should come next.

## Verification

Training is successful when:

- The team can invoke Sagaz without custom coaching.
- Sagaz identifies workflow, squad, risk, permission level, and handoff.
- The user understands when Sagaz may act and when it must ask.
- No remote operation happens during training unless explicitly approved.
- The final handoff is understandable to the next role.
