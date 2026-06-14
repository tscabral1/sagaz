# Sagaz AI Orchestration Ecosystem

A local AI orchestration ecosystem for Codex, focused on autonomous teams, consistent outcomes, low token usage, high-quality software engineering, premium UX/UI, and production-ready delivery.

## How To Use

1. Read `governance/operations-runbook.md` for the daily operating procedure.
2. Read `ADOPTION.md` when starting Sagaz in another project or onboarding a team.
3. Read `quickstart.md`.
4. Choose the smallest sufficient workflow or squad.
5. Use formal tasks, handoffs, and quality gates.
6. Create or update run state for medium/large work.
7. Verify before declaring done.

## Structure

- `manifest.json`: internal component registry used to validate and navigate the ecosystem.
- `ADOPTION.md`: first-use guide for adopting Sagaz in another project or team.
- `workflows/`: named end-to-end flows.
- `squads/`: specialized teams.
- `agents/`: role definitions.
- `tasks/`: formal task contracts.
- `protocols/`: operating rules and quality gates.
- `stack-playbooks/`: operational guides for common stack implementation, verification, and deployment.
- `templates/`: reusable Markdown artifacts.
- `examples/`: complete web, mobile, bugfix, and refactor flow examples.
- `onboarding/`: role-specific guides for product, design, engineering, QA, release, and handoff calibration.
- `prompts/`: copy-ready prompts for common Sagaz scenarios.
- `training/`: guided exercises for learning Sagaz as a team.
- `golden-outputs/`: reference-quality outputs for human QA and future evaluations.
- `engineering/`: software engineering standards.
- `governance/`: quality, security, and maintenance policies.

## Golden Rule

No delivery is complete without verification evidence proportional to the risk.

## Ecosystem Maintenance

Use `manifest.json` as the component registry and `protocols/component-governance.md` when creating, updating, renaming, deprecating, or removing Sagaz ecosystem components.

Use `protocols/release-versioning-gate.md` before version bumps, Git tags, GitHub releases, or npm publishes. A Sagaz release is not ready until package checks, doctor, manifest coverage, dependency graph validation, relevant evaluation scenarios, and changelog or release notes are complete.

Use `protocols/installed-skill-sync.md` after changing the Sagaz skill or release rules so the installed Codex Desktop skill does not drift from the repository copy.

Use `governance/capabilities-matrix.md` when comparing Sagaz with CrewAI, AutoGen, LangChain, LangGraph, AIOX, Synkra, or similar orchestration systems.

Use `protocols/permission-contract.md` before actions that change local state, remote state, accounts, deployments, packages, credentials, or GitHub history.

Use `protocols/agent-observability.md` and `templates/execution-trace.md` for multi-phase, production, release, deployment, package, or high-risk work.

Use `protocols/mcp-connector-policy.md` before using MCPs or external connectors such as Figma, GitHub, Canva, Browser, Vercel, Supabase, Firebase, npm, or observability tools.

Use `protocols/memory.md` and `templates/operational-memory.md` before creating durable project or team preferences for future Sagaz runs.

Use `evals/golden-output-evaluation.md` when comparing real Sagaz responses against `golden-outputs/`.

Use `protocols/generated-code-linting.md` whenever Sagaz generates or changes code so lint, format, typecheck, and static-analysis expectations are discovered and reported.

Use `protocols/stack-selection.md` before choosing a stack; it requires explicit TypeScript strict and Supabase decisions when relevant.

## Advanced Engineering Coverage

Sagaz includes protocols for SRE readiness, DORA metrics, secure SDLC, dependency governance, data privacy lifecycle, architecture fitness functions, API contracts, performance budgets, accessibility compliance, database migrations, release strategy, and AI application quality.

