# Stack Preset: Static Site

## Best For

Marketing pages, documentation, portfolios, landing pages, and simple content sites.

## Default Stack

- Hand-built HTML/CSS/JS when the user explicitly wants no static site generator or CMS
- Astro, Eleventy, or Vite depending on content needs when a generator is acceptable
- TypeScript when the project has interactive code
- Netlify, Vercel, Cloudflare Pages, or GitHub Pages

## URL Architecture

- Use clean URLs by default.
- For hand-built static sites, create each public route as a directory containing `index.html`.
- Examples:
  - `/blog/` maps to `blog/index.html`
  - `/blog/desafios-de-alfabetizacao/` maps to `blog/desafios-de-alfabetizacao/index.html`
- Do not expose `.html` in navigation, canonical URLs, sitemap URLs, Open Graph URLs, or internal links.
- Prefer trailing slashes for directory routes because GitHub Pages, Netlify, Cloudflare Pages, and most static hosts serve directory indexes naturally.
- If converting an existing static site, update all internal links, canonical tags, sitemap entries, and structured data URLs in the same change.

## SEO Baseline

Apply this baseline before delivery unless the user explicitly asks for a draft only:

- Unique `<title>` and meta description for every indexable page.
- `rel="canonical"` on every indexable page.
- Open Graph metadata: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`, and locale when relevant.
- Twitter Card metadata for share previews.
- Schema.org JSON-LD:
  - `WebSite` for the root site.
  - `Person`, `Organization`, `LocalBusiness`, or `ProfessionalService` when the site represents a person or business.
  - `Blog` for the blog listing.
  - `BlogPosting` or `Article` for posts.
  - `BreadcrumbList` for blog posts and nested pages.
- Root `sitemap.xml` containing clean canonical URLs, `lastmod`, and sensible priority/change frequency when known.
- Root `robots.txt` that allows intended content and references the sitemap.
- Descriptive `alt` text for meaningful images; empty `alt` only for decorative images.
- Optimized image formats such as WebP/AVIF plus reasonable dimensions.
- One clear `h1` per page and semantic heading hierarchy.
- Accessible navigation, focusable controls, and no hidden text used only for keyword stuffing.

## GitHub Pages Defaults

When the user wants GitHub Pages:

- Add `.nojekyll` for plain static delivery.
- Add `CNAME` with the custom domain when known.
- Add `404.html` for GitHub Pages fallback.
- Use absolute root-relative asset links such as `/assets/styles.css` for nested clean routes.
- Keep the publishing source compatible with branch deploy from repository root unless the user chooses a custom Actions workflow.
- Tell the user to configure the custom domain in repository `Settings > Pages` before or alongside DNS changes to reduce takeover risk.
- For apex domains, use GitHub Pages `A` records or provider-supported `ALIAS`/`ANAME`; for `www`, use `CNAME` to `<user>.github.io` or `<org>.github.io`.

## Strengths

- Low cost.
- Simple hosting.
- Strong performance and security baseline.
- Easy maintenance.

## Tradeoffs

- Dynamic features require external services or backend functions.
- Content workflows must be planned if nontechnical users edit content.
- No CMS means blog updates require direct file edits, link updates, sitemap updates, and verification.

## Use When

- The site is mostly content, marketing, documentation, portfolio, or landing-page work.
- Clean URLs, low hosting cost, performance, and SEO basics matter.
- Dynamic application behavior is limited or can be handled by external services.

## Verification Checklist

- Local route test for `/`, `/blog/`, and representative nested routes.
- Check that no public internal links contain `.html`.
- Check broken images and asset loading from nested pages.
- Parse JSON-LD to verify valid JSON.
- Confirm sitemap URLs match canonical URLs.
- Confirm `robots.txt`, `sitemap.xml`, `CNAME`, `.nojekyll`, and `404.html` are present when GitHub Pages is the target.
