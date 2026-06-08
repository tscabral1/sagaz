# Task: Design System

## Owner

Design Studio or active workflow owner squad when the UI work is minimal.

## Allowed Owner Squads

- design-studio
- product-factory
- mobile-app-studio
- refactor-lab
- code-audit

## Used By Workflows

- greenfield-web-app
- web-production-release
- mobile-app-production
- brownfield-refactor-safe
- bugfix-to-release

## Required Inputs

- Product requirements or preserved behavior contract.
- Brand, audience, domain, accessibility needs, and device targets.
- Existing design system or component library when present.
- Figma MCP availability when mockups or multi-screen flows are useful.

## Produces

- `template:design-system-spec`.
- UX rules, visual direction, tokens, component inventory, states, and responsive rules.
- Figma MCP mockup or alternative design evidence when useful and available.
- Accessibility and visual QA criteria.

## Evidence Required

- Primary journeys and states are covered.
- Components map to the chosen frontend stack or existing design system.
- Empty, loading, error, disabled, focus, hover, and success states are considered when relevant.
- Visual QA path is documented.

## Handoff

design-studio -> active workflow owner squad.

## Acceptance Criteria

- Output is specific and testable.
- Assumptions are recorded.
- Verification method is stated.
- Next step is clear.

## Verification

Check against `protocol:design-quality`, `protocol:accessibility-compliance`, and the active workflow contract.

## Stop Condition

Stop and ask the user when design direction, brand interpretation, Figma file creation, or external design tooling changes scope or external state.
