# Sagaz AI Orchestration Ecosystem

A local AI orchestration ecosystem for Codex, focused on autonomous teams, consistent outcomes, low token usage, high-quality software engineering, premium UX/UI, and production-ready delivery.

## How To Use

1. Read `quickstart.md`.
2. Choose the smallest sufficient workflow or squad.
3. Use formal tasks, handoffs, and quality gates.
4. Create or update run state for medium/large work.
5. Verify before declaring done.

## Structure

- `manifest.json`: internal component registry used to validate and navigate the ecosystem.
- `workflows/`: named end-to-end flows.
- `squads/`: specialized teams.
- `agents/`: role definitions.
- `tasks/`: formal task contracts.
- `protocols/`: operating rules and quality gates.
- `templates/`: reusable Markdown artifacts.
- `engineering/`: software engineering standards.
- `governance/`: quality, security, and maintenance policies.

## Golden Rule

No delivery is complete without verification evidence proportional to the risk.

## Ecosystem Maintenance

Use `manifest.json` as the component registry and `protocols/component-governance.md` when creating, updating, renaming, deprecating, or removing Sagaz ecosystem components.

Use `protocols/release-versioning-gate.md` before version bumps, Git tags, GitHub releases, or npm publishes. A Sagaz release is not ready until package checks, doctor, manifest coverage, dependency graph validation, relevant evaluation scenarios, and changelog or release notes are complete.

Use `protocols/installed-skill-sync.md` after changing the Sagaz skill or release rules so the installed Codex Desktop skill does not drift from the repository copy.

## Advanced Engineering Coverage

Sagaz includes protocols for SRE readiness, DORA metrics, secure SDLC, dependency governance, data privacy lifecycle, architecture fitness functions, API contracts, performance budgets, accessibility compliance, database migrations, release strategy, and AI application quality.

