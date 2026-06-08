# Stack Preset: Next.js On Vercel

## Best For

Production web apps, SaaS products, dashboards, marketing sites with dynamic features, and apps that benefit from fast deployment.

## Default Stack

- Next.js
- TypeScript
- Tailwind CSS or an existing design system
- shadcn/ui when the project needs customizable React components and no established component system exists
- Vercel
- Playwright
- GitHub Actions

## Component Guidance

- Prefer shadcn/ui for SaaS apps, dashboards, portals, forms, settings screens, and other component-heavy interfaces.
- Use the project's existing design system instead when one is already established.
- Avoid adding shadcn/ui for very small static pages when plain Tailwind CSS is enough.

## Strengths

- Strong ecosystem and hiring market.
- Excellent deployment path on Vercel.
- Good performance defaults.
- Works well for full-stack web applications.
- Easy to evolve from prototype to production.

## Tradeoffs

- Platform features can create Vercel coupling.
- Server/client boundaries require discipline.
- Complex apps still need architecture, testing, and observability.

## Use When

- The user wants a serious browser-based app.
- SEO or performance matters.
- Deployment simplicity matters.

## Avoid When

- The app is mostly native mobile.
- The user needs a static-only site with no dynamic behavior.
