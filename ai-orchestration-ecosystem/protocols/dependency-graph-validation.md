# Protocol: Dependency Graph Validation

## Objective

Keep Sagaz components connected through an explicit dependency graph so registered components do not drift away from workflows, tasks, protocols, templates, the skill entrypoint, or the ecosystem manifest.

## Required Practice

- Treat `manifest.json` as the registry of known components.
- Treat references in `SKILL.md`, `INDEX.md`, workflow contracts, task contracts, and protocol text as dependency edges.
- Validate that critical components are reachable from at least one entrypoint or formal contract.
- Validate that workflows reference existing squads, tasks, protocols, and templates.
- Validate that tasks declare the workflows that consume them.
- Validate that templates and protocols referenced by workflows or tasks exist and are registered.
- Allow support libraries such as examples, evals, governance, skills, and stack presets to exist when they are registered and reachable from `INDEX.md`, `README.md`, or the manifest.
- Run `npm test` after creating, renaming, moving, deprecating, or removing components.

## Graph Sources

- `manifest.json`
- `codex-skill/sagaz/SKILL.md`
- `ai-orchestration-ecosystem/INDEX.md`
- workflow `Formal Workflow Contract` tables
- task `Used By Workflows`, `Produces`, and `Verification` sections
- Markdown links and backtick references to ecosystem paths

## Required Edges

- `SKILL.md` must point to the quickstart and index.
- `INDEX.md` must point to major component groups and critical protocols.
- each workflow phase must point to existing owner squads and resources.
- each task must point back to the workflows that use it.
- each produced template must exist and be registered.
- each referenced protocol must exist and be registered.
- component governance and dependency graph validation must be reachable from skill or index guidance.

## Output

- Dependency graph validation result.
- Missing, stale, duplicate, orphaned, or unreachable component report.
- Updated registry or references when drift is found.

## Blocking Conditions

- A formal workflow contract references a missing component.
- A task contract declares a workflow that does not consume it.
- A critical protocol is not reachable from `SKILL.md`, `INDEX.md`, a workflow, or a task.
- `manifest.json` and the filesystem disagree.
- A component rename or removal leaves stale references.
