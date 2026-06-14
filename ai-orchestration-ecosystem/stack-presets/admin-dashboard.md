# Stack Preset: Admin Dashboard

## Best For

Operational dashboards, internal tools, CRM-like interfaces, analytics panels, and back-office applications.

## Default Stack

- React or Next.js
- TypeScript with `strict: true` for new projects
- shadcn/ui, another component library, or a strict internal design system
- Tables, filters, forms, role permissions, and audit logs
- Playwright for critical workflows

## Component Guidance

- Prefer shadcn/ui when building a new React or Next.js dashboard with Tailwind CSS.
- Use another component library only when the project needs specialized enterprise components or already depends on that library.
- Use a strict internal design system when brand, accessibility, or product consistency requirements are already defined.

## Strengths

- Good fit for dense operational interfaces.
- Encourages consistent tables, forms, filters, permissions, and audit trails.
- Keeps repeated workflows scannable and testable.

## Tradeoffs

- Requires careful information architecture to avoid clutter.
- Data tables, filters, permissions, and empty states add implementation complexity.
- Visual polish must stay practical rather than marketing-oriented.

## Use When

- The user needs an internal tool, CRM, analytics panel, or back-office workflow.
- Operators need to scan, compare, filter, edit, approve, or audit records repeatedly.
- Role permissions, destructive actions, or operational state need explicit UI handling.

## Design Rules

- Prioritize dense, scannable layouts.
- Avoid marketing-style hero sections.
- Make navigation predictable.
- Use tables, filters, segmented controls, drawers, and modals intentionally.
- Preserve keyboard and accessibility quality.

## Required Sagaz Checks

- role-based access
- empty states
- loading states
- error states
- destructive-action confirmations
- audit trail needs
- TypeScript strict compatibility
- responsive behavior
