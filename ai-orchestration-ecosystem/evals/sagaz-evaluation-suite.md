# Sagaz Evaluation Suite

## Purpose

Evaluate whether Sagaz itself produces consistent, reliable, low-token, production-oriented results.

## Evaluation Cadence

Run these evaluations before major Sagaz releases and after changing core workflows, squads, protocols, or installation behavior.

## Core Evaluations

| Evaluation | Goal | Pass Criteria |
| --- | --- | --- |
| Invocation | Sagaz is easy to start by name | User can invoke Sagaz with one prompt |
| Language intake | User can write in any language | Sagaz understands the request and answers in American English |
| Workflow selection | Correct workflow is selected | Selected workflow matches project type and risk |
| Token discipline | Only needed files are loaded | No broad file loading without reason |
| Handoff quality | Teams transition clearly | Current work, evidence, next work, and permission are stated |
| Stack advisory | Stack is justified | Cost, speed, scale, maintainability, deployment, and future changes are covered |
| Design quality | UI work reaches high standards | Design system, responsiveness, accessibility, and visual QA are included |
| Verification depth | Tests match risk | Build, lint, unit, integration, e2e, accessibility, and manual checks are considered |
| GitHub guidance | User is guided proactively | Commits, pushes, PRs, releases, and issues are suggested at the right time |
| Production readiness | Launch risk is explicit | Security, env vars, rollback, monitoring, and residual risks are documented |

## Scenario Tests

Use these prompts as smoke tests:

```text
Sagaz: create a complete appointment scheduling SaaS with premium design and Vercel deployment.
```

```text
Sagaz: create an Android/iOS habit tracker and recommend the best stack.
```

```text
Sagaz: refactor this existing project safely without changing behavior.
```

```text
Sagaz: fix this production bug, test it, and prepare a GitHub release.
```

```text
Sagaz: I am a beginner. Guide me through everything and ask permission before major actions.
```

## Scoring

Score each scenario from 0 to 3:

- 0: failed or unsafe
- 1: partially usable
- 2: usable with gaps
- 3: production-grade for the scenario

Sagaz should not release a major workflow change with any core evaluation below 2.

## Regression Log

```md
Date:
Version:
Scenario:
Score:
Failure:
Fix:
Retest evidence:
```
