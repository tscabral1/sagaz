# Golden Output: Design Handoff

## Purpose

Show a reference design-to-engineering handoff.

## Use When

- UX/UI work is ready to become implementation context.
- Figma MCP or design artifacts need a practical engineering handoff.
- Visual QA expectations must be preserved.

## Input Prompt

```text
Sagaz: prepare a design handoff for engineering. Include states, accessibility, responsiveness, and implementation constraints.
```

## Expected Response

```md
Selected squad: Design Studio
Next recommended squad: Product Factory or Implementation Engineer

Screens covered:
- Primary screen
- Secondary screen
- Confirmation or completion screen

States:
- empty
- loading
- error
- success
- disabled or unavailable

Component rules:
- Reuse existing design system components where possible.
- Preserve spacing, typography, and responsive behavior.
- Avoid one-off UI unless justified.

Accessibility:
- Form labels required.
- Keyboard focus visible.
- Color contrast must be checked.

Responsive behavior:
- Mobile: single-column and touch-friendly.
- Desktop: denser layout where appropriate.

Implementation constraints:
- Inspect existing components before creating new ones.
- Do not change unrelated design patterns.

Permission level:
- Implementation file changes require approval unless already authorized.
```

## Quality Criteria

- It names screens and states.
- It includes accessibility and responsive expectations.
- It gives implementation constraints.
- It preserves current project patterns.
- It states the next approval boundary.

## Bad Output Signals

- Only describes visual style.
- Omits error or empty states.
- Skips accessibility.
- Ignores existing components.
- Lets design assumptions override product scope.

## Verification

Engineering should be able to create an implementation plan from the handoff.
