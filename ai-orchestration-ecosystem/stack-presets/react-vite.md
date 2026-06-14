# Stack Preset: React With Vite

## Best For

Client-heavy apps, dashboards, internal tools, prototypes, and static sites that do not need a full-stack framework.

## Default Stack

- React
- TypeScript with `strict: true` for new projects
- Vite
- Tailwind CSS or existing CSS architecture
- shadcn/ui when using Tailwind CSS and the app needs reusable, accessible UI components
- Vitest
- Playwright when user workflows matter

## Component Guidance

- Prefer shadcn/ui for dashboards, internal tools, multi-step forms, settings pages, and reusable app surfaces.
- Keep the stack lighter for simple static sites, prototypes with minimal UI, or projects that already have a component system.

## Strengths

- Simple mental model.
- Fast local development.
- Low framework overhead.
- Easy static deployment.

## Tradeoffs

- Backend, auth, routing, and data strategy must be chosen separately.
- SEO and server rendering are not the default.

## Use When

- The app is mostly client-side.
- The project needs simplicity and speed.
- The backend already exists.
- TypeScript strict and lint/typecheck feedback are useful for maintainability.
