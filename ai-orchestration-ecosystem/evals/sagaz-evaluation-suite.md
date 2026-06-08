# Sagaz Evaluation Suite

## Purpose

Evaluate whether Sagaz produces consistent, reliable, low-token, production-oriented orchestration across Codex Desktop on Windows and macOS.

The suite exists to catch regressions in workflow selection, handoffs, state tracking, ecosystem governance, design collaboration, verification depth, and GitHub delivery behavior before a Sagaz release.

## Evaluation Cadence

Run this suite before every major Sagaz release, after changing any workflow, squad, task, protocol, stack preset, manifest entry, installation path, or Codex Desktop invocation guidance.

Run the relevant scenario subset after smaller changes. For example, a change to `protocols/durable-run-state.md` must rerun `EVAL-RUN-STATE-RESUME`, and a change to `manifest.json` must rerun `EVAL-MANIFEST-DRIFT` and `EVAL-DEPENDENCY-GRAPH-DRIFT`.

## Evaluation Inputs

- The current workspace tree.
- `ai-orchestration-ecosystem/manifest.json`.
- `codex-skill/sagaz/SKILL.md`.
- The active workflow, task, protocol, stack preset, and template files.
- Codex Desktop environment assumptions for Windows and macOS.
- The user prompt used by each scenario.
- Evidence from `npm test` and `node ./bin/sagaz.js doctor`.

## Core Evaluation Matrix

| Evaluation | Goal | Pass Criteria | Required Evidence |
| --- | --- | --- | --- |
| Invocation | Sagaz is easy to start by name | User can invoke Sagaz with one prompt in a new Codex Desktop project | The response points to the skill invocation and required project context |
| Cross-platform readiness | Windows and macOS are handled correctly | Commands, paths, and setup notes do not assume one OS unless stated | Windows and macOS considerations are explicit |
| Language intake | User can write in any language | Sagaz understands the request and follows the configured response language rule | The request is interpreted without losing intent |
| Workflow selection | Correct workflow is selected | Selected workflow matches project type, maturity, and risk | Workflow ID and reason are stated |
| Formal contract use | Workflows and handoffs are contract-driven | Phases, owner squads, resources, gates, and handoffs match the formal workflow contract | Phase ledger and handoff evidence are present |
| Workflow state | Long work can resume safely | Current phase, squad, task, blockers, skipped phases, and next action are recorded | `templates/run-state.md` fields are populated or updated |
| Token discipline | Only needed files are loaded | No broad file loading without a stated reason | Loaded context is scoped to the active phase |
| Task-first execution | Work maps to explicit tasks | Active work references a task contract and its evidence requirements | Task ID, outputs, and acceptance criteria are named |
| Ecosystem governance | Component changes preserve the registry | Manifest, index, skill references, and dependency graph stay aligned | `npm test` catches missing or dangling components |
| Stack advisory | Stack is justified | Cost, speed, scale, maintainability, deployment, and future changes are covered | Stack recommendation names tradeoffs and alternatives |
| Design quality | UI work reaches high standards | Design system, responsiveness, accessibility, and visual QA are included | Design QA evidence and Figma/MCP path are stated when relevant |
| Verification depth | Tests match risk | Build, lint, unit, integration, e2e, accessibility, and manual checks are considered | Test plan and executed checks are reported |
| GitHub guidance | User is guided proactively | Commits, pushes, PRs, releases, and issues are suggested or performed at the right time | GitHub operation evidence or permission request is present |
| Production readiness | Launch risk is explicit | Security, env vars, rollback, monitoring, and residual risks are documented | Production readiness checklist is complete |

## Scenario Contracts

| Scenario ID | Workflow Or Focus | Prompt | Expected Evidence | Minimum Score |
| --- | --- | --- | --- | --- |
| EVAL-WEB-GREENFIELD | `workflows/greenfield-web-app.md` | Create a complete appointment scheduling SaaS with premium design and Vercel deployment. | Workflow contract, stack recommendation, design system, implementation plan, verification plan, deployment notes | 3 |
| EVAL-WEB-PRODUCTION | `workflows/web-production-release.md` | Prepare this existing web app for production release on GitHub and Vercel. | Production readiness gate, CI/CD checks, env var audit, rollback plan, GitHub release path | 3 |
| EVAL-MOBILE-PRODUCTION | `workflows/mobile-app-production.md` | Create an Android/iOS habit tracker and recommend the best stack. | React Native or alternative stack rationale, store-readiness risks, mobile QA, release checklist | 3 |
| EVAL-BUGFIX-RELEASE | `workflows/bugfix-to-release.md` | Fix this production bug, test it, and prepare a GitHub release. | Reproduction, root cause, focused fix, regression test, release evidence, handoff | 3 |
| EVAL-BROWNFIELD-REFACTOR | `workflows/brownfield-refactor-safe.md` | Refactor this existing project safely without changing behavior. | Baseline behavior, scoped refactor plan, tests before and after, rollback notes | 3 |
| EVAL-DESIGN-FIGMA | Design MCP readiness | Prepare the design team to use the Figma MCP to create mockups that behave like real apps. | Figma MCP guidance, interactive mockup expectations, design handoff, implementation constraints | 3 |
| EVAL-GITHUB-OPS | `tasks/github-release-ops.md` | Update everything on GitHub after the approved changes. | Permission-aware git status, commit, push, optional PR/release guidance, no unrelated reverts | 3 |
| EVAL-RUN-STATE-RESUME | `templates/run-state.md` and `protocols/durable-run-state.md` | Resume a paused Sagaz run after context compaction. | Current phase, squad, task, completed work, blockers, skipped phases, next action | 3 |
| EVAL-MANIFEST-DRIFT | `manifest.json` governance | Add a new protocol and make sure the ecosystem registry stays correct. | Manifest update, INDEX/SKILL references, component governance checklist, validation result | 3 |
| EVAL-DEPENDENCY-GRAPH-DRIFT | `protocols/dependency-graph-validation.md` | Rename a task used by a workflow without breaking references. | Updated workflow contract, task contract, manifest path, dependency graph validation | 3 |
| EVAL-BEGINNER-GUIDANCE | Guided proactivity | I am a beginner. Guide me through everything and ask permission before major actions. | Plain-language guidance, permission gates, no hidden destructive steps, next action clarity | 2 |

## Scenario Prompts

### EVAL-WEB-GREENFIELD

```text
Sagaz: create a complete appointment scheduling SaaS with premium design and Vercel deployment.
```

Expected behavior:

- Select `workflows/greenfield-web-app.md`.
- Start from intake and product requirements before implementation.
- Recommend a stack with cost, scale, speed, deployment, and maintainability tradeoffs.
- Include shadcn/ui only when it fits the selected stack and project constraints.
- Define design system expectations, responsive QA, accessibility checks, and production readiness gates.

### EVAL-WEB-PRODUCTION

```text
Sagaz: prepare this existing web app for production release on GitHub and Vercel.
```

Expected behavior:

- Select `workflows/web-production-release.md`.
- Audit environment variables, build scripts, tests, monitoring, rollback, and CI/CD.
- Ask permission before committing, pushing, creating PRs, or changing release state.
- Report residual risk and release evidence.

### EVAL-MOBILE-PRODUCTION

```text
Sagaz: create an Android/iOS habit tracker and recommend the best stack.
```

Expected behavior:

- Select `workflows/mobile-app-production.md`.
- Compare mobile stack options and name the recommended path.
- Account for app store readiness, device QA, offline behavior, notifications, and analytics.
- Keep commands and setup guidance compatible with Windows and macOS where possible.

### EVAL-BUGFIX-RELEASE

```text
Sagaz: fix this production bug, test it, and prepare a GitHub release.
```

Expected behavior:

- Select `workflows/bugfix-to-release.md`.
- Reproduce or characterize the bug before changing code.
- Implement the smallest safe fix.
- Add or run regression checks.
- Prepare GitHub release operations only after evidence is available.

### EVAL-BROWNFIELD-REFACTOR

```text
Sagaz: refactor this existing project safely without changing behavior.
```

Expected behavior:

- Select `workflows/brownfield-refactor-safe.md`.
- Establish baseline behavior and test coverage.
- Keep refactor scope narrow.
- Preserve user changes and avoid unrelated churn.
- Document rollback and verification evidence.

### EVAL-DESIGN-FIGMA

```text
Sagaz: prepare the design team to use the Figma MCP to create mockups that function like real applications inside Figma.
```

Expected behavior:

- Route to design quality and Figma MCP guidance.
- Explain that Figma mockups should include realistic states, interactions, flows, content density, responsive behavior, and implementation constraints.
- Mention when to use Figma tools, design system tokens, Code Connect, and handoff evidence.
- Avoid promising unsupported runtime behavior inside Figma.

### EVAL-GITHUB-OPS

```text
Sagaz: update everything on GitHub after the approved changes.
```

Expected behavior:

- Inspect git status before staging.
- Preserve unrelated user changes unless explicitly asked to include them.
- Ask permission when sandbox or remote operations require approval.
- Report commit hash, branch, push status, and any PR/release follow-up.

### EVAL-RUN-STATE-RESUME

```text
Sagaz: continue from the last checkpoint after the context was compacted.
```

Expected behavior:

- Reconstruct current workflow state from available notes and files.
- Continue from the newest user-approved point.
- Update or reference the phase ledger, blockers, handoffs, and next action.
- Avoid restarting the whole run without evidence that restart is needed.

### EVAL-MANIFEST-DRIFT

```text
Sagaz: add a new protocol for deployment rollback and make sure the ecosystem registry remains correct.
```

Expected behavior:

- Add the protocol under `protocols/`.
- Register it in `manifest.json`.
- Add references in `INDEX.md`, `README.md`, or `SKILL.md` when user-facing discovery requires it.
- Run `npm test` and `node ./bin/sagaz.js doctor`.

### EVAL-DEPENDENCY-GRAPH-DRIFT

```text
Sagaz: rename the verification task and update every workflow that depends on it.
```

Expected behavior:

- Update the task file, manifest entry, workflow formal contracts, task references, and documentation references.
- Verify the dependency graph catches no dangling or unregistered references.
- Preserve task contract sections and workflow phase sequencing.

### EVAL-BEGINNER-GUIDANCE

```text
Sagaz: I am a beginner. Guide me through everything and ask permission before major actions.
```

Expected behavior:

- Use plain explanations and short steps.
- Ask before destructive, remote, installation, or account-changing operations.
- Keep the user oriented to what is happening and why.
- Still make progress where safe without forcing unnecessary choices.

## Scoring Rubric

Score each core evaluation and scenario from 0 to 3:

- 0: Failed, unsafe, or materially misleading.
- 1: Partially usable but missing important evidence or using the wrong workflow.
- 2: Usable with minor gaps, no unsafe behavior, and clear next action.
- 3: Production-grade for the scenario, with correct workflow, state, evidence, gates, and handoff.

Any score of 0 is a release blocker. Any score below the scenario minimum requires a fix and retest.

## Release Gate

Sagaz should not release a major workflow, protocol, task, or registry change unless:

- Every core evaluation scores at least 2.
- Every scenario meets its minimum score.
- Critical scenarios with minimum score 3 have direct evidence, not only intent.
- `npm test` passes.
- `node ./bin/sagaz.js doctor` passes.
- Regression log entries are recorded for every failed retest.

## Regression Log

```md
Date:
Version or commit:
Scenario ID:
Core evaluation affected:
Score:
Failure:
Root cause:
Fix:
Retest evidence:
Residual risk:
Owner:
```

## Evidence Template

```md
Date:
Evaluator:
Platform:
Scenario ID:
Prompt:
Selected workflow or focus:
Loaded files:
Actions taken:
Checks run:
Core scores:
Scenario score:
Evidence links or file paths:
Open risks:
Release decision:
```
