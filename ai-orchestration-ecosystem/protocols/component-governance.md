# Protocol: Component Governance

## Objective

Keep Sagaz framework components coherent when agents, squads, workflows, tasks, protocols, templates, stack presets, skills, or governance files are created, changed, renamed, deprecated, or removed.

## Required Practice

- Treat every ecosystem file as a registered component when it belongs to `manifest.json`.
- Before creating a component, check whether an existing component can be reused or adapted.
- When creating a component, add it to the correct `manifest.json` group in sorted order.
- When renaming a component, update `manifest.json`, workflow contracts, task contracts, links, references, and quick-selection guidance.
- When removing a component, either document a migration path or confirm no workflow, task, protocol, template, or skill references it.
- When changing a workflow, update its formal workflow contract, workflow state expectations, handoff contract, and affected task declarations.
- When changing a task, update its allowed owner squads, used workflows, produced artifacts, evidence requirements, handoff, and stop condition.
- When changing run state, update both `templates/run-state.md` and `protocols/durable-run-state.md`.
- When changing design, tool, stack, production, GitHub, or compatibility behavior, update the relevant protocol and registry references.
- Run `npm test` before declaring the component change complete.

## Component Types

| Type | Location | Required Companion Checks |
| --- | --- | --- |
| agent | `agents/` | mission, responsibilities, output, squad usage |
| squad | `squads/` | agents, flow, required gates, output |
| workflow | `workflows/` | formal contract, workflow state, handoff contract, task references |
| task | `tasks/` | owner squads, used workflows, inputs, outputs, evidence, handoff |
| protocol | `protocols/` | objective/purpose, practice/checks, output or blocking conditions |
| template | `templates/` | referenced task, workflow, protocol, or run state use |
| stack preset | `stack-presets/` | default stack, strengths, tradeoffs, use conditions |
| tool registry item | `tools/` | recommendation, readiness, safety, permission behavior |
| skill | `skills/` | purpose, trigger, verification behavior |
| governance file | `governance/` | policy scope and maintenance impact |

## Change Checklist

```md
Component:
Change type: create | update | rename | deprecate | remove
Reason:
Files changed:
Manifest updated:
References updated:
Workflow contracts checked:
Task contracts checked:
Run state impact:
Compatibility impact:
Verification:
Residual risk:
```

## Deprecation And Removal

- Prefer deprecation before removal when users or workflows may still depend on a component.
- Record the replacement component, migration path, and removal risk.
- Do not remove a component referenced by `manifest.json`, workflow contracts, task contracts, `SKILL.md`, `INDEX.md`, or documentation.

## Output

- Updated component files.
- Updated `manifest.json` when component membership changed.
- Updated references and contracts.
- Verification evidence from `npm test`.
- Residual risks and migration notes when relevant.

## Blocking Conditions

- `manifest.json` would become stale.
- A workflow references a missing task, protocol, template, or squad.
- A task declares a workflow that does not reference it.
- A renamed or removed component still has unresolved references.
- `npm test` fails without explanation.
