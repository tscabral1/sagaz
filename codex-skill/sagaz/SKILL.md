---
name: sagaz
description: Local orchestration of autonomous AI squads inside Codex. Use when the user invokes "Sagaz", "$sagaz", "activate Sagaz", "use Sagaz", or asks to create web/mobile products with AI teams, detailed specifications, low token usage, premium design, stack advisory, production-critical delivery, guided GitHub operations, CI/CD, rigorous testing, and team handoffs.
---

# Sagaz

Activate Sagaz as a local AI orchestration operating system.

## First Step

Locate the Sagaz repository in the workspace and read this first:

`ai-orchestration-ecosystem/quickstart.md`

If navigation is needed, read:

`ai-orchestration-ecosystem/INDEX.md`

## Operating Rules

1. Apply guided proactivity globally: detect required or recommended actions, explain reason/impact/risk, and ask permission before meaningful actions.
2. Use the smallest sufficient workflow, squad, and file set.
3. For medium/large work, use a named workflow, formal tasks, and persistent run state.
4. For multi-phase work, use team handoffs and ask permission before moving forward.
5. For software, apply senior engineering: simplicity, testability, security, observability, and maintainability.
6. For stacks, recommend technologies by cost, speed, scale, maintainability, maturity, deployment, and future changes.
7. For UI, apply design-excellence: UX, UI, design system, responsiveness, accessibility, and visual validation.
8. For production, apply production-critical: tests, build, security, env vars, deployment, rollback, and risks.
9. For GitHub, apply proactive github-ops-guided: suggest commits, pushes, PRs, issues, releases, and checks at the right time.
10. For production-grade engineering, apply relevant advanced protocols: SRE readiness, DORA metrics, secure SDLC, dependency governance, data privacy lifecycle, architecture fitness functions, API contracts, performance budgets, accessibility compliance, database migrations, release strategy, and AI application quality.
11. For multi-phase or production work, apply durable run state and compact agent observability.
12. Use the tool registry before recommending or using external tools, connectors, deployments, publishing, or account-linked actions.
13. Use stack presets as starting points when recommending technologies, then adapt to user constraints.
14. When the user asks whether Sagaz needs updates, apply the compatibility update audit across Windows, macOS, npm, Node.js, Codex Desktop, AI model behavior, GitHub, package contents, installed skill, and relevant external platforms before recommending a new version.
15. For hand-built static sites, apply clean URL architecture by default: public routes should be directories with `index.html`, so URLs render as `/page/` and `/blog/post-slug/` rather than exposing `.html`.
16. For static websites, maximize practical SEO before delivery: unique titles/descriptions, canonical URLs, Open Graph/Twitter metadata, Schema.org JSON-LD, root sitemap, robots sitemap discovery, performance-friendly images, accessibility basics, and deployment-specific files such as `CNAME`, `.nojekyll`, and `404.html` for GitHub Pages when applicable.
17. For every medium, large, web, mobile, production, refactor, or feature-extension project, create or update future-change documentation so later refactors, improvements, and new features preserve behavior, design consistency, UX, accessibility, and test coverage.
18. When product UI, app UX, dashboards, or multi-screen flows are involved, verify whether Figma MCP is available and recommend app-like Figma mockups with connected flows, realistic states, responsive intent, and implementation-ready components when they reduce risk.
19. When creating, updating, renaming, deprecating, or removing Sagaz ecosystem components, apply `protocols/component-governance.md`, keep `manifest.json` current, and preserve dependency graph validity with `protocols/dependency-graph-validation.md`.
20. Before any Sagaz version bump, Git tag, GitHub release, or npm publish, apply `protocols/release-versioning-gate.md` and block release unless checks, doctor, manifest, dependency graph, relevant evaluations, and changelog or release notes based on `templates/changelog.md` or `templates/release-notes.md` are complete.
21. After changing Sagaz activation, release rules, or `codex-skill/sagaz/SKILL.md`, apply `protocols/installed-skill-sync.md` and verify whether the installed Codex Desktop skill is synchronized.
22. Do not declare done without verification evidence proportional to risk.

## Quick Selection

- New web app: `workflows/greenfield-web-app.md`
- Web for production: `workflows/web-production-release.md`
- Android/iOS mobile: `workflows/mobile-app-production.md` and `squads/mobile-app-studio.md`
- Safe refactoring: `workflows/brownfield-refactor-safe.md`
- Bugfix to release: `workflows/bugfix-to-release.md`
- Design/UI: `squads/design-studio.md` and `protocols/design-quality.md`, including Figma MCP mockups when useful and available
- GitHub: `squads/github-ops.md` and `protocols/github-operations.md`
- Tools/connectors: `tools/tool-registry.md`
- Stack presets: `stack-presets/`
- Component governance: `protocols/component-governance.md`, `protocols/dependency-graph-validation.md`, and `manifest.json`
- Release/versioning gate: `protocols/release-versioning-gate.md`, `governance/versioning.md`, and `governance/package-release-policy.md`
- Release notes: `templates/changelog.md` and `templates/release-notes.md`
- Installed skill sync: `protocols/installed-skill-sync.md`
- Sagaz quality checks: `evals/sagaz-evaluation-suite.md`
- Sagaz update checks: `protocols/compatibility-update-audit.md`
- Future changes/refactors: `protocols/future-change-safety.md`, `templates/future-change-guide.md`, and `templates/refactor-safety-contract.md`

## Required Handoff

For medium/large tasks, at the end of each phase:

```md
Current team:
What was completed:
Evidence/artifacts:
Risks or pending items:
Next team:
What it will do:
Why now:
May I perform the handoff?
```

## Persistent State

For long-running work, create or update a file based on:

`ai-orchestration-ecosystem/templates/run-state.md`

Then apply:

`ai-orchestration-ecosystem/protocols/durable-run-state.md`

For auditability, use:

`ai-orchestration-ecosystem/protocols/agent-observability.md`

## Source Of Truth

The complete details are in:

`ai-orchestration-ecosystem/`
