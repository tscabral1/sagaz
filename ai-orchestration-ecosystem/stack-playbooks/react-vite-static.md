# Stack Playbook: React/Vite Or Static Deploy

## Purpose

Operate React/Vite applications or hand-built static sites intended for static hosting.

## Use When

- The chosen preset is `stack-presets/react-vite.md` or `stack-presets/static-site.md`.
- The app is mostly client-side or content/static.
- Deployment target is GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages, or similar.

## Setup

1. Inspect scripts and build output directory.
2. Confirm clean URL requirements.
3. Confirm SEO requirements for public pages.
4. Confirm deployment target before generating platform-specific files.
5. Apply `protocols/permission-contract.md` before publishing or changing DNS/deployment settings.

Common commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Verification

- Build succeeds.
- Preview renders key routes.
- Text does not overflow on mobile or desktop.
- Links, forms, and navigation work.
- Public pages include title, description, canonical URL, Open Graph/Twitter metadata, sitemap, robots, and accessible structure when SEO matters.
- Static routes use directory `index.html` when clean URLs are required.

## Deployment

1. Confirm build output.
2. Confirm base path for GitHub Pages or subdirectory deployments.
3. Prepare `404.html`, `.nojekyll`, `CNAME`, sitemap, and robots when needed.
4. Deploy preview if available.
5. Ask approval before production publish.

## Handoff

```md
Stack playbook: react-vite-static
Current phase:
Commands run:
Build output:
Preview status:
SEO status:
Deployment status:
Risks:
Permission needed:
```

