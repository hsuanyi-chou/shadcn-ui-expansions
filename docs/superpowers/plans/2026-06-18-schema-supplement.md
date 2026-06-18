# Schema Supplement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Person entity, WebSite SearchAction, ItemList, HowTo, and enhanced TechArticle fields to complete JSON-LD schema coverage.

**Architecture:** Three isolated file edits — root layout gets Person + SearchAction, docs intro page gets ItemList, PageTemplate gets HowTo + enriched TechArticle. All three are independent and can be reviewed separately.

**Tech Stack:** Next.js 15 App Router, TypeScript, `components/seo/json-ld.tsx` (already exists)

## Global Constraints

- Site URL: `https://shadcnui-expansions.typeart.cc` — exact string, no trailing slash
- Author name: `Hsuan-Yi Chou`, url: `https://blog.typeart.cc/`
- Author GitHub sameAs: `https://github.com/hsuanyi-chou`
- `JsonLd` imported from `@/components/seo/json-ld` — already exists, do not recreate
- No new runtime dependencies
- Verification: `npx tsc --noEmit` from `/Users/ryan/projects/shadcn-ui-expansions`

---

### Task 1: Add `Person` schema and `SearchAction` to root layout

**Files:**
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `JsonLd` from `@/components/seo/json-ld` (already imported)
- Produces: `Person` JSON-LD on every page, `SearchAction` inside existing `WebSite` schema

- [ ] **Step 1: Extend `websiteSchema` with `potentialAction` and add `personSchema`**

Replace the existing `websiteSchema` const and the `export default function RootLayout` section in `app/layout.tsx`. Everything else in the file stays identical — only these two const blocks and the JSX body change.

The new schema consts (replace only the `const websiteSchema = { ... };` block — keep all imports and `metadata` export unchanged):

```ts
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'shadcn/ui expansions',
  url: 'https://shadcnui-expansions.typeart.cc',
  description:
    'Useful additional components built on top of shadcn/ui. Copy and paste into your apps. Accessible, customizable, open source.',
  author: {
    '@type': 'Person',
    name: 'Hsuan-Yi Chou',
    url: 'https://blog.typeart.cc/',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://shadcnui-expansions.typeart.cc/docs/{search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hsuan-Yi Chou',
  url: 'https://blog.typeart.cc/',
  sameAs: ['https://github.com/hsuanyi-chou'],
};
```

In the JSX body, add `<JsonLd data={personSchema} />` directly after the existing `<JsonLd data={websiteSchema} />`:

```tsx
      <body
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
        suppressHydrationWarning
      >
        <JsonLd data={websiteSchema} />
        <JsonLd data={personSchema} />
        <PageTracker />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <section className="container">{children}</section>
        </ThemeProvider>
      </body>
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(seo): add Person schema and SearchAction to WebSite schema"
```

---

### Task 2: Add `ItemList` schema to docs intro page

**Files:**
- Modify: `app/(docs)/docs/page.tsx`

**Interfaces:**
- Consumes: `JsonLd` from `@/components/seo/json-ld` (already imported)
- Produces: `ItemList` JSON-LD on `/docs` listing all 15 components

- [ ] **Step 1: Add `itemListSchema` const after the existing `breadcrumbSchema` const**

Insert this new const between `const breadcrumbSchema = { ... };` and `const IntroductionPage = () => {`:

```ts
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'shadcn/ui expansions Components',
  description: 'All available shadcn/ui expansion components',
  numberOfItems: 15,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Autosize Textarea',
      url: 'https://shadcnui-expansions.typeart.cc/docs/autosize-textarea',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blockquote',
      url: 'https://shadcnui-expansions.typeart.cc/docs/blockquote',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Datetime Picker',
      url: 'https://shadcnui-expansions.typeart.cc/docs/datetime-picker',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Dual Range Slider',
      url: 'https://shadcnui-expansions.typeart.cc/docs/dual-range-slider',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Floating Label Input',
      url: 'https://shadcnui-expansions.typeart.cc/docs/floating-label-input',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Heading With Anchor',
      url: 'https://shadcnui-expansions.typeart.cc/docs/heading-with-anchor',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Infinite Scroll',
      url: 'https://shadcnui-expansions.typeart.cc/docs/infinite-scroll',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'Interactive Stepper',
      url: 'https://shadcnui-expansions.typeart.cc/docs/interactive-stepper',
    },
    {
      '@type': 'ListItem',
      position: 9,
      name: 'Loading Button',
      url: 'https://shadcnui-expansions.typeart.cc/docs/loading-button',
    },
    {
      '@type': 'ListItem',
      position: 10,
      name: 'Magic Back Button',
      url: 'https://shadcnui-expansions.typeart.cc/docs/magic-back-button',
    },
    {
      '@type': 'ListItem',
      position: 11,
      name: 'Multiple Selector',
      url: 'https://shadcnui-expansions.typeart.cc/docs/multiple-selector',
    },
    {
      '@type': 'ListItem',
      position: 12,
      name: 'Progress With Value',
      url: 'https://shadcnui-expansions.typeart.cc/docs/progress-with-value',
    },
    {
      '@type': 'ListItem',
      position: 13,
      name: 'Responsive Modal',
      url: 'https://shadcnui-expansions.typeart.cc/docs/responsive-modal',
    },
    {
      '@type': 'ListItem',
      position: 14,
      name: 'Spinner',
      url: 'https://shadcnui-expansions.typeart.cc/docs/spinner',
    },
    {
      '@type': 'ListItem',
      position: 15,
      name: 'Typewriter',
      url: 'https://shadcnui-expansions.typeart.cc/docs/typewriter',
    },
  ],
};
```

- [ ] **Step 2: Add `<JsonLd data={itemListSchema} />` to the component JSX**

In `IntroductionPage`, add it after the existing two `<JsonLd>` calls:

```tsx
const IntroductionPage = () => {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
      <H1 className="mb-10">Introduction</H1>
      ...
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add "app/(docs)/docs/page.tsx"
git commit -m "feat(seo): add ItemList schema to docs introduction page"
```

---

### Task 3: Add `HowTo` schema and enhance `TechArticle` in `PageTemplate`

**Files:**
- Modify: `app/(docs)/docs/components/page-template.tsx`

**Interfaces:**
- Consumes: `JsonLd` from `@/components/seo/json-ld` (already imported)
- Produces: `HowTo` JSON-LD on all 15 component pages; enriched `TechArticle` with `proficiencyLevel`, `programmingLanguage`, `keywords`, `inLanguage`

- [ ] **Step 1: Replace the entire `PageTemplate` function body**

Replace `const PageTemplate = ...` through the end of the component (keeping `PageSubTitle` and the `export` unchanged). The `BASE_URL` const, `PageTemplateProps` interface, `PageSubTitle`, and `export` at the bottom all stay the same — only `PageTemplate` itself changes:

```tsx
const PageTemplate = ({ title, description, children, className }: PageTemplateProps) => {
  const slug = title?.toLowerCase().replace(/\s+/g, '-') ?? '';
  const url = `${BASE_URL}/docs/${slug}`;

  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${title} - shadcn/ui expansions`,
    description,
    url,
    proficiencyLevel: 'Beginner',
    programmingLanguage: 'TypeScript',
    keywords: 'React, TypeScript, Tailwind CSS, shadcn/ui',
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: 'Hsuan-Yi Chou',
      url: 'https://blog.typeart.cc/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'shadcn/ui expansions',
      url: BASE_URL,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Docs', item: `${BASE_URL}/docs` },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to install and use ${title}`,
    description,
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Install dependencies',
        text: 'Install shadcn/ui and its peer dependencies (Tailwind CSS, Radix UI) if not already set up.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Copy the component',
        text: 'Copy the component source code into your project\'s components/ui directory.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Import and use',
        text: 'Import the component from your components/ui directory and use it in your React application.',
      },
    ],
  };

  return (
    <section className={cn('flex flex-col gap-3 pb-10', className)}>
      {title && (
        <>
          <JsonLd data={techArticleSchema} />
          <JsonLd data={breadcrumbSchema} />
          <JsonLd data={howToSchema} />
        </>
      )}
      <H1>{title}</H1>
      <P className="font-normal text-muted-foreground">{description}</P>
      {children}
      <AdBottom />
    </section>
  );
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add "app/(docs)/docs/components/page-template.tsx"
git commit -m "feat(seo): add HowTo schema and enhance TechArticle fields in PageTemplate"
```

---

## Self-Review

**Spec coverage:**
- [x] `Person` schema with `sameAs` GitHub — Task 1
- [x] `WebSite` `potentialAction` SearchAction — Task 1
- [x] `ItemList` on `/docs` with all 15 components — Task 2
- [x] `HowTo` schema on all component pages — Task 3
- [x] `TechArticle` enriched: `proficiencyLevel`, `programmingLanguage`, `keywords`, `inLanguage` — Task 3

**Placeholder scan:** All steps contain complete code. No TBDs.

**Type consistency:**
- `JsonLd` accepts `Record<string, unknown>` — all schema objects are plain literals, compatible
- `PageTemplate` props interface unchanged — zero breaking changes to existing callers
- `howToSchema` uses `description` prop (same as `techArticleSchema`) — both are guarded by the `{title && ...}` check so they only render when title exists
