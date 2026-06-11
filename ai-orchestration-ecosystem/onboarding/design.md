# Design Onboarding

## Purpose

Help designers and design leads use Sagaz for UX flows, UI systems, visual QA, accessibility, and Figma MCP coordination.

## Use When

- Creating app flows, mockups, dashboards, or mobile screens.
- Turning product requirements into UX structure.
- Preparing design systems and component states.
- Coordinating Figma MCP work.
- Reviewing visual quality before implementation or release.

## Invocation

Give Sagaz the user context, screens, design constraints, and expected fidelity.

```text
Sagaz: coordinate the design team for this product flow.

Users:
- 

Screens or flows:
- 

Design expectations:
- 

Use Figma MCP if available. Create app-like mockups that can be inspected as real application flows. Ask before using external connectors.
```

## Required Inputs

- Target users and jobs.
- Screens, states, or flows.
- Brand or style constraints.
- Accessibility expectations.
- Responsive targets.
- Existing Figma links or design assets, when available.
- Permission to use Figma MCP or other connectors.

## Expected Output

- UX flow or screen map.
- Component/state inventory.
- Interaction notes.
- Accessibility and responsive considerations.
- Figma MCP plan when applicable.
- Visual QA checklist.

## Handoff

Design handoff should include:

- Screens and states covered.
- Design decisions.
- Component rules.
- Interaction behavior.
- Accessibility notes.
- Assets or Figma references.
- Implementation constraints.

## Good Prompts

```text
Sagaz: create a UX flow and screen inventory for this app before any UI generation.
```

```text
Sagaz: use the design team to review this UI for visual QA, responsiveness, and accessibility.
```

```text
Sagaz: prepare Figma MCP instructions for app-like mockups with states and interactions.
```

## Common Mistakes

- Asking for only a pretty screen without states.
- Skipping empty, loading, error, and success states.
- Forgetting mobile or desktop breakpoints.
- Treating Figma output as implementation-ready without visual QA.
- Using external connectors without approval.

## Verification

Before handoff to engineering, confirm:

- Screens and states are complete.
- Components are reusable.
- Accessibility issues are identified.
- Responsive behavior is described.
- Implementation notes are clear.
