---
title: SEO Maximization
date: 2026-06-18
status: approved
---

## Overview

Maximize SEO for shadcnui-expansions.typeart.cc — a Next.js 15 SSG site with 15 component documentation pages. Goals: complete JSON-LD schema on every page, `llms.txt`, enhanced Open Graph/Twitter metadata, and sitemap improvements.

## Scope

### 1. JSON-LD Schema

**Root `app/layout.tsx`** — Add `WebSite` schema (applies to all pages):
```json
{ "@type": "WebSite", "name": "shadcn/ui expansions", "url": "...", "author": {...} }
```

**`app/page.tsx`** — Add `SoftwareApplication` schema:
```json
{ "@type": "SoftwareApplication", "applicationCategory": "DeveloperApplication", "offers": { "price": "0" } }
```

**`app/(docs)/docs/page.tsx`** — Add `WebPage` + `BreadcrumbList` schemas.

**`app/(docs)/docs/components/page-template.tsx`** — Add `TechArticle` + `BreadcrumbList` schemas. The slug is derived from `title` prop via lowercase + kebab-case (verified to match all 15 component URLs). No changes needed to individual component pages.

All schemas rendered via a thin `JsonLd` server component (`components/seo/json-ld.tsx`) that outputs `<script type="application/ld+json">`.

### 2. Enhanced `baseMetadata`

Update `app/(docs)/layout-parts/base-metadata.ts` to accept `keywords` and add:
- `openGraph`: type `article`, url, siteName, images (favicon as fallback)
- `twitter`: card `summary_large_image`, site/creator
- `alternates.canonical`
- `keywords` array

Update all 15 component `page.tsx` files to pass `keywords` to `baseMetadata`.

### 3. Missing `metadata` exports

- `app/page.tsx`: Add complete homepage metadata (title, description, OG, twitter, keywords)
- `app/(docs)/docs/page.tsx`: Add intro page metadata

### 4. `public/llms.txt`

Standard [llmstxt.org](https://llmstxt.org) format:
```
# shadcn/ui expansions
> Site description and purpose

## Docs
- [Introduction](url): description

## Components  
- [Component Name](url): description
... (all 15 components)
```

### 5. `next-sitemap.config.js` improvements

Add `transform` function to assign per-path priorities:
- `/` → priority 1.0, changefreq `monthly`
- `/docs` → priority 0.9, changefreq `monthly`
- `/docs/*` → priority 0.8, changefreq `weekly`

## Out of Scope

- OG image generation (requires `@vercel/og`, high complexity for SSG, limited uplift)
- PWA `manifest.json` (not requested, separate concern)

## Files Changed

| File | Action |
|---|---|
| `components/seo/json-ld.tsx` | Create |
| `app/layout.tsx` | Add WebSite JSON-LD |
| `app/page.tsx` | Add metadata export + SoftwareApplication JSON-LD |
| `app/(docs)/docs/page.tsx` | Add metadata export + WebPage JSON-LD |
| `app/(docs)/docs/components/page-template.tsx` | Add TechArticle + BreadcrumbList JSON-LD |
| `app/(docs)/layout-parts/base-metadata.ts` | Enhance with OG, twitter, keywords, canonical |
| All 15 `app/(docs)/docs/*/page.tsx` | Pass `keywords` to baseMetadata |
| `public/llms.txt` | Create |
| `next-sitemap.config.js` | Add transform for per-path priorities |
