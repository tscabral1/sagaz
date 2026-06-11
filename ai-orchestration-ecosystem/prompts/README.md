# Prompt Matrix

## Purpose

Provide copy-ready Sagaz prompts for common project, design, engineering, QA, release, and memory scenarios.

Use these prompts when a user or team member knows the desired outcome but does not yet know which Sagaz workflow, squad, or protocol to invoke.

## Use When

- Starting a new project.
- Auditing an existing repository.
- Asking for Figma MCP or design work.
- Implementing a feature.
- Fixing a bug.
- Preparing QA or release.
- Creating operational memory.
- Requesting review without file changes.

## Prompt Rules

- Start with `Sagaz:`.
- Include goal, constraints, definition of done, and risk level when known.
- State whether Sagaz may change files.
- State whether external tools, MCPs, GitHub, deployment, or package publishing are allowed.
- Ask Sagaz to identify workflow, squad, permission level, and first handoff.

## Prompt Families

- `project-start.md`: new projects and existing project audits.
- `design-figma.md`: design, UX, UI, Figma MCP, and visual QA.
- `implementation.md`: feature implementation, refactors, and bug fixes.
- `qa-release.md`: verification, release readiness, GitHub, deploy, and publishing.
- `memory.md`: project or team operational memory.

## Verification

Before using a prompt in production work, confirm:

- It says whether file changes are allowed.
- It names external operation limits.
- It asks for evidence and risks.
- It leaves room for Sagaz to inspect the current project before acting.
