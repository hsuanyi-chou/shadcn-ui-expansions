---
title: Schema Supplement — Additional JSON-LD
date: 2026-06-18
status: approved
---

## Overview

Extend the existing JSON-LD schema coverage on shadcnui-expansions.typeart.cc with five additions: `Person` entity for the author, `SearchAction` on the `WebSite` schema, `ItemList` on the docs intro page, `HowTo` on every component page, and enriched `TechArticle` fields.

## Current Schema State (do not duplicate)

- Root layout: `WebSite`
- Homepage: `SoftwareApplication`
- `/docs`: `WebPage` + `BreadcrumbList`
- All 15 component pages (via `PageTemplate`): `TechArticle` + `BreadcrumbList`

## Changes

### 1. `Person` schema — root layout (`app/layout.tsx`)

Add a standalone `Person` schema alongside the existing `WebSite` schema. Establishes the author as a Knowledge Graph entity (E-E-A-T signal).

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hsuan-Yi Chou",
  "url": "https://blog.typeart.cc/",
  "sameAs": ["https://github.com/hsuanyi-chou"]
}
```

Rendered as a second `<JsonLd>` in the root layout body.

### 2. `SearchAction` on existing `WebSite` schema — root layout (`app/layout.tsx`)

Extend the existing `websiteSchema` object to include `potentialAction`. Enables Google Sitelinks Search Box in search results.

```json
"potentialAction": {
  "@type": "SearchAction",
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": "https://shadcnui-expansions.typeart.cc/docs/{search_term_string}"
  },
  "query-input": "required name=search_term_string"
}
```

This is an in-place mutation of the existing `websiteSchema` constant — no new `<JsonLd>` component needed.

### 3. `ItemList` schema — `/docs` intro page (`app/(docs)/docs/page.tsx`)

Add a third `<JsonLd>` to the intro page listing all 15 components. Helps Google understand the full component catalog.

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "shadcn/ui expansions Components",
  "description": "All available shadcn/ui expansion components",
  "numberOfItems": 15,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Autosize Textarea", "url": "https://shadcnui-expansions.typeart.cc/docs/autosize-textarea" },
    { "@type": "ListItem", "position": 2, "name": "Blockquote", "url": "https://shadcnui-expansions.typeart.cc/docs/blockquote" },
    { "@type": "ListItem", "position": 3, "name": "Datetime Picker", "url": "https://shadcnui-expansions.typeart.cc/docs/datetime-picker" },
    { "@type": "ListItem", "position": 4, "name": "Dual Range Slider", "url": "https://shadcnui-expansions.typeart.cc/docs/dual-range-slider" },
    { "@type": "ListItem", "position": 5, "name": "Floating Label Input", "url": "https://shadcnui-expansions.typeart.cc/docs/floating-label-input" },
    { "@type": "ListItem", "position": 6, "name": "Heading With Anchor", "url": "https://shadcnui-expansions.typeart.cc/docs/heading-with-anchor" },
    { "@type": "ListItem", "position": 7, "name": "Infinite Scroll", "url": "https://shadcnui-expansions.typeart.cc/docs/infinite-scroll" },
    { "@type": "ListItem", "position": 8, "name": "Interactive Stepper", "url": "https://shadcnui-expansions.typeart.cc/docs/interactive-stepper" },
    { "@type": "ListItem", "position": 9, "name": "Loading Button", "url": "https://shadcnui-expansions.typeart.cc/docs/loading-button" },
    { "@type": "ListItem", "position": 10, "name": "Magic Back Button", "url": "https://shadcnui-expansions.typeart.cc/docs/magic-back-button" },
    { "@type": "ListItem", "position": 11, "name": "Multiple Selector", "url": "https://shadcnui-expansions.typeart.cc/docs/multiple-selector" },
    { "@type": "ListItem", "position": 12, "name": "Progress With Value", "url": "https://shadcnui-expansions.typeart.cc/docs/progress-with-value" },
    { "@type": "ListItem", "position": 13, "name": "Responsive Modal", "url": "https://shadcnui-expansions.typeart.cc/docs/responsive-modal" },
    { "@type": "ListItem", "position": 14, "name": "Spinner", "url": "https://shadcnui-expansions.typeart.cc/docs/spinner" },
    { "@type": "ListItem", "position": 15, "name": "Typewriter", "url": "https://shadcnui-expansions.typeart.cc/docs/typewriter" }
  ]
}
```

### 4. `HowTo` schema — `PageTemplate` (`app/(docs)/docs/components/page-template.tsx`)

Add a `HowTo` schema alongside the existing `TechArticle` + `BreadcrumbList`. The 3-step install process is the same for all components: add dependencies → copy component → import and use. Uses the component `title` for the name field.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to install and use [title]",
  "description": "[description]",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Install dependencies",
      "text": "Install shadcn/ui and its peer dependencies (Tailwind CSS, Radix UI) if not already set up."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Copy the component",
      "text": "Copy the component source code into your project's components/ui directory."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Import and use",
      "text": "Import the component from your components/ui directory and use it in your React application."
    }
  ]
}
```

Only rendered when `title` is defined (same guard as the existing TechArticle + BreadcrumbList).

### 5. Enhanced `TechArticle` fields — `PageTemplate`

Extend the existing `techArticleSchema` object in `page-template.tsx` with:

```json
"proficiencyLevel": "Beginner",
"programmingLanguage": "TypeScript",
"keywords": "React, TypeScript, Tailwind CSS, shadcn/ui",
"inLanguage": "en"
```

These are in-place additions to the existing `techArticleSchema` constant — no structural change.

## Files Changed

| File | Action |
|---|---|
| `app/layout.tsx` | Add `Person` JsonLd + extend `websiteSchema` with `potentialAction` |
| `app/(docs)/docs/page.tsx` | Add `ItemList` JsonLd |
| `app/(docs)/docs/components/page-template.tsx` | Add `HowTo` JsonLd + extend `techArticleSchema` with 4 new fields |
