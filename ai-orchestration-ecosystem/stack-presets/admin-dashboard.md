# Stack Preset: Admin Dashboard

## Best For

Operational dashboards, internal tools, CRM-like interfaces, analytics panels, and back-office applications.

## Default Stack

- React or Next.js
- TypeScript
- shadcn/ui, another component library, or a strict internal design system
- Tables, filters, forms, role permissions, and audit logs
- Playwright for critical workflows

## Component Guidance

- Prefer shadcn/ui when building a new React or Next.js dashboard with Tailwind CSS.
- Use another component library only when the project needs specialized enterprise components or already depends on that library.
- Use a strict internal design system when brand, accessibility, or product consistency requirements are already defined.

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
- responsive behavior
