# Design And Figma Prompts

## Purpose

Provide prompts for UX, UI, design systems, visual QA, and Figma MCP workflows.

## Use When

- The team needs mockups, app flows, UI states, or design systems.
- Designers want Sagaz to coordinate Figma MCP.
- Engineering needs implementation-ready design handoff.

## Prompt: UX Flow

```text
Sagaz: act as the design team and create a UX flow for this product.

Users:
-

Core tasks:
-

Screens:
-

Do not use external connectors yet. Produce screen map, states, accessibility notes, and design handoff.
```

## Prompt: Figma MCP Mockup

```text
Sagaz: coordinate the design team using Figma MCP to create app-like mockups that can be inspected as real application flows.

Include:
- target users
- main screens
- empty/loading/error/success states
- component states
- interaction notes
- responsive considerations
- visual QA checklist

Ask before using Figma MCP or writing to external design files.
```

## Prompt: Visual QA

```text
Sagaz: review this UI with the design and visual QA team.

Check:
- layout consistency
- typography
- spacing
- accessibility
- responsiveness
- component states
- visual regressions

Do not change files until you list findings and ask for approval.
```

## Verification

A good design response should include states, accessibility, responsive behavior, implementation constraints, and permission needed for Figma or file changes.
