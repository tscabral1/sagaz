# Future Change Safety

## Purpose

Ensure every production-oriented Sagaz project can be refactored, improved, extended, and redesigned later without breaking core behavior, visual consistency, usability, accessibility, or maintainability.

## When To Use

Use this protocol for every new web app, website, dashboard, mobile app, production release, major refactor, feature addition, or handoff where future work is likely.

## Required Project Documentation

Sagaz must create or update a project-level future-change guide before final delivery. Store it in a durable project documentation location such as:

- `docs/future-change-guide.md`
- `docs/maintenance/future-change-guide.md`
- `docs/engineering/future-change-guide.md`

Use the closest existing documentation convention if the project already has one.

## Required Content

The guide must include:

- product intent and non-negotiable user outcomes
- architecture overview
- data model and state ownership
- routing/navigation map
- design system and visual invariants
- UX rules and interaction patterns
- accessibility requirements
- component ownership and reuse rules
- API contracts and integration boundaries
- environment variables and operational dependencies
- testing strategy and regression checklist
- performance budgets
- security and privacy invariants
- deployment and rollback notes
- safe refactor procedure
- safe feature-addition procedure
- known risks and future work

## Consistency Invariants

Define what must remain true after any future change:

```md
Invariant:
Why it matters:
How to verify:
Files/components affected:
Regression tests:
```

## Design And UX Preservation

For user-facing projects, document:

- typography scale
- spacing scale
- color tokens
- layout grid rules
- breakpoint behavior
- component states: default, hover, focus, active, disabled, loading, error, empty
- animation and motion rules
- icon style
- content tone
- accessibility and contrast expectations
- screenshots or visual QA references when available

Future UI work must compare against this documentation before implementation and again before delivery.

## Refactor Safety

Before refactoring, Sagaz must:

1. Read the future-change guide.
2. Identify behavior contracts and invariants.
3. Map affected files and components.
4. Define tests that prove behavior is preserved.
5. Make the smallest safe change.
6. Run verification.
7. Update the guide when architecture, UX, design, contracts, or risks changed.

## Feature Addition Safety

Before adding a feature, Sagaz must:

1. Locate the relevant product, design, architecture, and test sections.
2. Explain how the new feature fits existing patterns.
3. Identify new or changed invariants.
4. Update design system or component rules when needed.
5. Add tests and documentation proportional to risk.
6. Avoid one-off UI or architecture patterns unless explicitly justified.

## Final Delivery Rule

Sagaz must not mark a medium, large, production, web, or mobile project as complete until future-change documentation exists or has been updated. If the user declines this documentation, record the risk clearly in the final handoff.
