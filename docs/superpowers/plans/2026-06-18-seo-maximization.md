# SEO Maximization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add complete JSON-LD schema to every page, `llms.txt`, enhanced OG/Twitter metadata, keywords, canonical URLs, and improved sitemap config.

**Architecture:** A shared `JsonLd` server component renders `<script type="application/ld+json">` inline. Root layout gets `WebSite` schema; homepage gets `SoftwareApplication`; docs intro gets `WebPage`; all 15 component pages get `TechArticle` + `BreadcrumbList` via `PageTemplate` (slug auto-derived from `title` prop). `baseMetadata` gains OG, Twitter, keywords, and canonical fields. `llms.txt` and `next-sitemap` config round out the changes.

**Tech Stack:** Next.js 15 App Router, TypeScript, SSG (output: `out/`), `next-sitemap` post-build

## Global Constraints

- Site URL: `https://shadcnui-expansions.typeart.cc` — hardcode exactly this string in all schema/metadata
- All component page slugs derive from title via `.toLowerCase().replace(/\s+/g, '-')` — verified for all 15
- Author: `Hsuan-Yi Chou`, author URL: `https://blog.typeart.cc/`
- Twitter creator handle: `@hsuanyi_chou`
- No new runtime dependencies — everything uses Next.js built-ins
- No test framework exists; verification = `npx tsc --noEmit` + visual check of `<script>` in browser devtools

---

### Task 1: Create `JsonLd` server component

**Files:**
- Create: `components/seo/json-ld.tsx`

**Interfaces:**
- Produces: `JsonLd({ data: Record<string, unknown> }): JSX.Element` — renders `<script type="application/ld+json">`

- [ ] **Step 1: Create the component**

```tsx
// components/seo/json-ld.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add components/seo/json-ld.tsx
git commit -m "feat(seo): add JsonLd component for schema markup"
```

---

### Task 2: Add `WebSite` schema to root layout and homepage metadata + `SoftwareApplication` schema

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `JsonLd` from `@/components/seo/json-ld`
- Produces: `WebSite` JSON-LD on every page, `SoftwareApplication` JSON-LD on homepage only, full homepage `metadata` export

- [ ] **Step 1: Add `WebSite` JSON-LD to root layout**

Replace the `export default function RootLayout` in `app/layout.tsx` with:

```tsx
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { JsonLd } from '@/components/seo/json-ld';

import './globals.css';
import Navbar from '@/app/(docs)/layout-parts/navbar/navbar';
import Script from 'next/script';
import { PageTracker } from 'react-page-tracker';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'shadcn/ui expansions',
  description:
    'shadcn/ui expansions collect lots of useful components which shadcn/ui does not have out of box. All the components are base on shadcn/ui. Just copy and paste. The component is yours.',
  twitter: {
    card: 'summary_large_image',
    title: 'shadcn/ui expansions',
    description:
      'shadcn/ui expansions collect lots of useful components which shadcn/ui does not have out of box. All the components are base on shadcn/ui. Just copy and paste. The component is yours.',
    creator: '@hsuanyi_chou',
  },
  openGraph: {
    title: 'shadcn/ui expansions',
    description:
      'shadcn/ui expansions collect lots of useful components which shadcn/ui does not have out of box. All the components are base on shadcn/ui. Just copy and paste. The component is yours.',
    url: 'https://shadcnui-expansions.typeart.cc',
    siteName: 'shadcn/ui expansions',
  },
  other: {
    'google-site-verification': 'q2TjtYRJbnG5q8Am34DYea1AL_VmYHOUOLlKQGgamGQ',
  },
};

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MNNJR7PT89"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">{`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-MNNJR7PT89');
                `}</Script>
      <body
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
        suppressHydrationWarning
      >
        <JsonLd data={websiteSchema} />
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
    </html>
  );
}
```

- [ ] **Step 2: Add homepage `metadata` export and `SoftwareApplication` JSON-LD to `app/page.tsx`**

Replace the entire contents of `app/page.tsx` with:

```tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
import ShadcnuiLogo from '@/app/(docs)/layout-parts/logo/shadcnui-logo';
import Logo from '@/app/(docs)/layout-parts/logo/logo';
import { H1, H3 } from '@/components/ui/heading-with-anchor';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'shadcn/ui expansions — More components built on top of shadcn/ui',
  description:
    'Useful additional components built on top of shadcn/ui. Autosize textarea, datetime picker, multiple selector, infinite scroll, and more. Copy and paste into your apps. Accessible, customizable, open source.',
  keywords: [
    'shadcn ui',
    'shadcnui expansions',
    'react components',
    'tailwind components',
    'radix ui components',
    'copy paste components',
    'typescript components',
    'next.js components',
  ],
  alternates: { canonical: 'https://shadcnui-expansions.typeart.cc' },
  openGraph: {
    type: 'website',
    title: 'shadcn/ui expansions — More components built on top of shadcn/ui',
    description:
      'Useful additional components built on top of shadcn/ui. Copy and paste into your apps.',
    url: 'https://shadcnui-expansions.typeart.cc',
    siteName: 'shadcn/ui expansions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shadcn/ui expansions',
    description:
      'Useful additional components built on top of shadcn/ui. Copy and paste into your apps.',
    creator: '@hsuanyi_chou',
  },
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'shadcn/ui expansions',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  description:
    'Useful additional components built on top of shadcn/ui. Copy and paste into your apps.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  url: 'https://shadcnui-expansions.typeart.cc',
  author: {
    '@type': 'Person',
    name: 'Hsuan-Yi Chou',
    url: 'https://blog.typeart.cc/',
  },
};

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <JsonLd data={softwareAppSchema} />
      <H1>More components built on top of shadcn-ui.</H1>
      <H3 className="text-lg font-light text-muted-foreground sm:text-xl">
        Useful additional components collection base on shadcn/ui to help you ship new features
        faster. Copy and paste into your apps, Accessible, Customizable, Open Source.
      </H3>
      <div className="mt-16 flex flex-col gap-3 md:flex-row">
        <Link href="/docs">
          <Button asChild>
            <span>
              <Logo className="mr-2" reverse /> Get Started
            </span>
          </Button>
        </Link>
        <Link href="https://ui.shadcn.com/" target="_blank">
          <Button variant="outline" asChild>
            <span>
              <ShadcnuiLogo className="mr-2" />
              Learn shadcn/ui
            </span>
          </Button>
        </Link>
        <Link href="https://github.com/hsuanyi-chou/shadcn-ui-expansions" target="_blank">
          <Button variant="outline" asChild>
            <span>
              <Github className="mr-2" />
              GitHub
            </span>
          </Button>
        </Link>
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/page.tsx
git commit -m "feat(seo): add WebSite and SoftwareApplication JSON-LD schemas, homepage metadata"
```

---

### Task 3: Add metadata + `WebPage`/`BreadcrumbList` schemas to docs intro page

**Files:**
- Modify: `app/(docs)/docs/page.tsx`

**Interfaces:**
- Consumes: `JsonLd` from `@/components/seo/json-ld`
- Produces: `metadata` export on the Introduction page, `WebPage` + `BreadcrumbList` JSON-LD

- [ ] **Step 1: Replace `app/(docs)/docs/page.tsx` with metadata + schemas**

```tsx
import React from 'react';
import { H1, P } from '@/components/ui/heading-with-anchor';
import { Blockquote } from '@/components/ui/blockquote';
import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Introduction - shadcnui expansions',
  description:
    'shadcn/ui expansions is a collection of useful additional components built on top of shadcn/ui. Copy and paste into your apps. Accessible, customizable, open source.',
  keywords: [
    'shadcn ui expansions',
    'react components',
    'shadcn ui components',
    'introduction',
    'getting started',
    'copy paste components',
  ],
  alternates: { canonical: 'https://shadcnui-expansions.typeart.cc/docs' },
  openGraph: {
    type: 'article',
    title: 'Introduction - shadcnui expansions',
    description:
      'shadcn/ui expansions is a collection of useful additional components built on top of shadcn/ui.',
    url: 'https://shadcnui-expansions.typeart.cc/docs',
    siteName: 'shadcn/ui expansions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introduction - shadcnui expansions',
    description:
      'shadcn/ui expansions is a collection of useful additional components built on top of shadcn/ui.',
    creator: '@hsuanyi_chou',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Introduction - shadcn/ui expansions',
  description:
    'shadcn/ui expansions is a collection of useful additional components built on top of shadcn/ui.',
  url: 'https://shadcnui-expansions.typeart.cc/docs',
  isPartOf: {
    '@type': 'WebSite',
    name: 'shadcn/ui expansions',
    url: 'https://shadcnui-expansions.typeart.cc',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://shadcnui-expansions.typeart.cc',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Docs',
      item: 'https://shadcnui-expansions.typeart.cc/docs',
    },
  ],
};

const IntroductionPage = () => {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <H1 className="mb-10">Introduction</H1>
      <Blockquote className="mb-4">
        <P className="text-gray-600">
          shadcn/ui is a re-usable components built using Radix UI and Tailwind CSS.
        </P>
        <P className="text-gray-600">
          It is <b>NOT</b> a component library. It is a collection of re-usable components that you
          can copy and paste into your apps.
        </P>
        <Link href="https://ui.shadcn.com/docs" className="underline">
          Learn more about shadcn/ui.
        </Link>
      </Blockquote>
      <P className="text-gray-600">
        This is built on top of shadcn/ui and includes many useful components such as multiple
        selector, loading button, infinite scroll and more.
      </P>
      <P className="font-bold italic">
        The same as shadcn/ui, all components are free to use for personal and commercial.
      </P>
      <P className="font-bold italic">
        Just copy and paste to your project and customize to your needs. The code is yours.
      </P>
    </>
  );
};

export default IntroductionPage;
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add "app/(docs)/docs/page.tsx"
git commit -m "feat(seo): add metadata and JSON-LD schemas to docs introduction page"
```

---

### Task 4: Enhance `baseMetadata` with OG, Twitter, keywords, canonical

**Files:**
- Modify: `app/(docs)/layout-parts/base-metadata.ts`

**Interfaces:**
- Produces: `baseMetadata({ title, description, keywords? }): Metadata`
  - Canonical URL auto-derived: `https://shadcnui-expansions.typeart.cc/docs/${title.toLowerCase().replace(/\s+/g, '-')}`
  - All 15 component page titles resolve correctly to their URL slugs via this formula

- [ ] **Step 1: Replace `base-metadata.ts` with enhanced version**

```typescript
// app/(docs)/layout-parts/base-metadata.ts
import { Metadata } from 'next';

const BASE_URL = 'https://shadcnui-expansions.typeart.cc';

interface BaseMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
}

export function baseMetadata({ title, description, keywords }: BaseMetadataProps): Metadata {
  const fullTitle = `${title} - shadcnui expansions`;
  const fullDescription = `shadcnui expansion: ${description}`;
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  const url = `${BASE_URL}/docs/${slug}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords,
    authors: [{ name: 'typeart.cc' }, { url: 'https://blog.typeart.cc/', name: 'Hsuan-Yi, Chou' }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: 'shadcn/ui expansions',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      creator: '@hsuanyi_chou',
    },
  };
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: no errors (the `BaseMetadataProps` interface is now stricter — `title` and `description` are no longer optional, which matches all existing callsites)

- [ ] **Step 3: Commit**

```bash
git add "app/(docs)/layout-parts/base-metadata.ts"
git commit -m "feat(seo): enhance baseMetadata with OG, Twitter, keywords, and canonical URL"
```

---

### Task 5: Add `keywords` to all 15 component pages

**Files:**
- Modify (all 15): `app/(docs)/docs/autosize-textarea/page.tsx`, `app/(docs)/docs/blockquote/page.tsx`, `app/(docs)/docs/datetime-picker/page.tsx`, `app/(docs)/docs/dual-range-slider/page.tsx`, `app/(docs)/docs/floating-label-input/page.tsx`, `app/(docs)/docs/heading-with-anchor/page.tsx`, `app/(docs)/docs/infinite-scroll/page.tsx`, `app/(docs)/docs/interactive-stepper/page.tsx`, `app/(docs)/docs/loading-button/page.tsx`, `app/(docs)/docs/magic-back-button/page.tsx`, `app/(docs)/docs/multiple-selector/page.tsx`, `app/(docs)/docs/progress-with-value/page.tsx`, `app/(docs)/docs/responsive-modal/page.tsx`, `app/(docs)/docs/spinner/page.tsx`, `app/(docs)/docs/typewriter/page.tsx`

**Interfaces:**
- Consumes: `baseMetadata({ title, description, keywords })` from Task 4

For each file, add a `keywords` array to the existing `baseMetadata()` call. The call already has `title` and `description`; you are only adding `keywords`. Do not change any other imports or component code.

- [ ] **Step 1: Update autosize-textarea**

In `app/(docs)/docs/autosize-textarea/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Autosize Textarea',
  description: 'auto resize textarea height based on content.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Autosize Textarea',
  description: 'auto resize textarea height based on content.',
  keywords: ['autosize textarea', 'shadcn ui', 'react textarea', 'auto resize textarea', 'textarea component', 'react-hook-form textarea'],
});
```

- [ ] **Step 2: Update blockquote**

In `app/(docs)/docs/blockquote/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Blockquote',
  description: 'Display a quote or a component that looks like a quote.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Blockquote',
  description: 'Display a quote or a component that looks like a quote.',
  keywords: ['blockquote', 'shadcn ui', 'react blockquote', 'quote component', 'blockquote component'],
});
```

- [ ] **Step 3: Update datetime-picker**

In `app/(docs)/docs/datetime-picker/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Datetime Picker',
  description: 'A datetime picker built on top of shadcn-ui and no additional library needed.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Datetime Picker',
  description: 'A datetime picker built on top of shadcn-ui and no additional library needed.',
  keywords: ['datetime picker', 'shadcn ui', 'react date picker', 'date time picker', 'calendar picker', 'time picker'],
});
```

- [ ] **Step 4: Update dual-range-slider**

In `app/(docs)/docs/dual-range-slider/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Dual Range Slider',
  description: 'An enhancement slider that allows you to select a range of values.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Dual Range Slider',
  description: 'An enhancement slider that allows you to select a range of values.',
  keywords: ['dual range slider', 'shadcn ui', 'react range slider', 'double slider', 'range input', 'price range slider'],
});
```

- [ ] **Step 5: Update floating-label-input**

In `app/(docs)/docs/floating-label-input/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Floating Label Input',
  description: 'Material UI design system floating label input',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Floating Label Input',
  description: 'Material UI design system floating label input',
  keywords: ['floating label input', 'shadcn ui', 'material ui input', 'animated label', 'react input', 'floating placeholder'],
});
```

- [ ] **Step 6: Update heading-with-anchor**

In `app/(docs)/docs/heading-with-anchor/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Heading With Anchor',
  description: 'Add anchor for every heading.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Heading With Anchor',
  description: 'Add anchor for every heading.',
  keywords: ['heading with anchor', 'shadcn ui', 'anchor headings', 'heading link', 'react heading', 'anchor link'],
});
```

- [ ] **Step 7: Update infinite-scroll**

In `app/(docs)/docs/infinite-scroll/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Infinite Scroll',
  description:
    'Simple infinite scroll component. You have fully control over the loading spinner and IntersectionObserver API.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Infinite Scroll',
  description:
    'Simple infinite scroll component. You have fully control over the loading spinner and IntersectionObserver API.',
  keywords: ['infinite scroll', 'shadcn ui', 'react infinite scroll', 'intersection observer', 'lazy loading', 'pagination'],
});
```

- [ ] **Step 8: Update interactive-stepper**

In `app/(docs)/docs/interactive-stepper/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Interactive Stepper',
  description: 'A set of steps that are used to indicate progress through a multi-step process.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Interactive Stepper',
  description: 'A set of steps that are used to indicate progress through a multi-step process.',
  keywords: ['interactive stepper', 'shadcn ui', 'react stepper', 'multi-step form', 'progress steps', 'wizard steps'],
});
```

- [ ] **Step 9: Update loading-button**

In `app/(docs)/docs/loading-button/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Loading Button',
  description:
    'Display a button or a component that looks like a button with loading spinner. Everything is just the same as the button in shadcnui.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Loading Button',
  description:
    'Display a button or a component that looks like a button with loading spinner. Everything is just the same as the button in shadcnui.',
  keywords: ['loading button', 'shadcn ui', 'react loading button', 'async button', 'spinner button', 'submit button loading'],
});
```

- [ ] **Step 10: Update magic-back-button**

In `app/(docs)/docs/magic-back-button/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Magic Back Button',
  description:
    'Redirects first-time visitors to the homepage; otherwise, respects browser history.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Magic Back Button',
  description:
    'Redirects first-time visitors to the homepage; otherwise, respects browser history.',
  keywords: ['magic back button', 'shadcn ui', 'react back button', 'browser history', 'navigation button', 'back navigation'],
});
```

- [ ] **Step 11: Update multiple-selector**

In `app/(docs)/docs/multiple-selector/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Multiple Selector',
  description:
    'Fast,composable, fully-featured multiple selector for React. such as async search with debounce, maximum selected count, grouping, creatable selector ...etc.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Multiple Selector',
  description:
    'Fast,composable, fully-featured multiple selector for React. such as async search with debounce, maximum selected count, grouping, creatable selector ...etc.',
  keywords: ['multiple selector', 'shadcn ui', 'react multiselect', 'combobox', 'tag input', 'async search select', 'creatable select'],
});
```

- [ ] **Step 12: Update progress-with-value**

In `app/(docs)/docs/progress-with-value/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Progress With Value',
  description: 'A progress bar that displays the current value.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Progress With Value',
  description: 'A progress bar that displays the current value.',
  keywords: ['progress with value', 'shadcn ui', 'react progress bar', 'progress indicator', 'loading progress', 'progress percentage'],
});
```

- [ ] **Step 13: Update responsive-modal**

In `app/(docs)/docs/responsive-modal/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Responsive Modal',
  description: 'A dialog that pops up in the center of the screen on desktop and slide on mobile.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Responsive Modal',
  description: 'A dialog that pops up in the center of the screen on desktop and slide on mobile.',
  keywords: ['responsive modal', 'shadcn ui', 'react modal', 'bottom sheet', 'dialog mobile', 'drawer mobile'],
});
```

- [ ] **Step 14: Update spinner**

In `app/(docs)/docs/spinner/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Spinner',
  description: 'A simple spinner for displaying loading state',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Spinner',
  description: 'A simple spinner for displaying loading state',
  keywords: ['spinner', 'shadcn ui', 'react spinner', 'loading spinner', 'loading indicator', 'circular progress'],
});
```

- [ ] **Step 15: Update typewriter**

In `app/(docs)/docs/typewriter/page.tsx`, change:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Typewriter',
  description: 'Typewriter effect for text. Supports html and markdown.',
});
```
to:
```ts
export const metadata: Metadata = baseMetadata({
  title: 'Typewriter',
  description: 'Typewriter effect for text. Supports html and markdown.',
  keywords: ['typewriter', 'shadcn ui', 'typewriter effect', 'react typewriter', 'text animation', 'typing animation'],
});
```

- [ ] **Step 16: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 17: Commit**

```bash
git add "app/(docs)/docs/autosize-textarea/page.tsx" \
  "app/(docs)/docs/blockquote/page.tsx" \
  "app/(docs)/docs/datetime-picker/page.tsx" \
  "app/(docs)/docs/dual-range-slider/page.tsx" \
  "app/(docs)/docs/floating-label-input/page.tsx" \
  "app/(docs)/docs/heading-with-anchor/page.tsx" \
  "app/(docs)/docs/infinite-scroll/page.tsx" \
  "app/(docs)/docs/interactive-stepper/page.tsx" \
  "app/(docs)/docs/loading-button/page.tsx" \
  "app/(docs)/docs/magic-back-button/page.tsx" \
  "app/(docs)/docs/multiple-selector/page.tsx" \
  "app/(docs)/docs/progress-with-value/page.tsx" \
  "app/(docs)/docs/responsive-modal/page.tsx" \
  "app/(docs)/docs/spinner/page.tsx" \
  "app/(docs)/docs/typewriter/page.tsx"
git commit -m "feat(seo): add keywords to all 15 component page metadata"
```

---

### Task 6: Add `TechArticle` + `BreadcrumbList` JSON-LD to `PageTemplate`

**Files:**
- Modify: `app/(docs)/docs/components/page-template.tsx`

**Interfaces:**
- Consumes: `JsonLd` from `@/components/seo/json-ld`
- `PageTemplate` props are unchanged: `{ title?, description?, children?, className? }`
- Slug derivation: `title.toLowerCase().replace(/\s+/g, '-')` — produces correct slug for all 15 component titles

- [ ] **Step 1: Replace `page-template.tsx` with schema-enhanced version**

```tsx
// app/(docs)/docs/components/page-template.tsx
import React from 'react';
import { H1, H2, P } from '@/components/ui/heading-with-anchor';
import { cn } from '@/lib/utils';
import AdBottom from '@/components/ad/ad-bottom';
import { JsonLd } from '@/components/seo/json-ld';

const BASE_URL = 'https://shadcnui-expansions.typeart.cc';

interface PageTemplateProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

const PageTemplate = ({ title, description, children, className }: PageTemplateProps) => {
  const slug = title?.toLowerCase().replace(/\s+/g, '-') ?? '';
  const url = `${BASE_URL}/docs/${slug}`;

  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${title} - shadcn/ui expansions`,
    description,
    url,
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

  return (
    <section className={cn('flex flex-col gap-3 pb-10', className)}>
      <JsonLd data={techArticleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <H1>{title}</H1>
      <P className="font-normal text-muted-foreground">{description}</P>
      {children}
      <AdBottom />
    </section>
  );
};

const PageSubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <H2 className="mb-2 border-b-2 border-b-gray-300 pb-2" anchor={children?.toString()}>
      {children}
    </H2>
  );
};

export { PageTemplate, PageSubTitle };
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add "app/(docs)/docs/components/page-template.tsx"
git commit -m "feat(seo): add TechArticle and BreadcrumbList JSON-LD to PageTemplate"
```

---

### Task 7: Create `public/llms.txt`

**Files:**
- Create: `public/llms.txt`

**Interfaces:**
- None — static file served at `https://shadcnui-expansions.typeart.cc/llms.txt`

- [ ] **Step 1: Create `public/llms.txt`**

```
# shadcn/ui expansions

> A collection of useful additional components built on top of shadcn/ui. All components are accessible, customizable, and free to use. Just copy and paste into your project — the code is yours.

Built with Radix UI, Tailwind CSS, and TypeScript. Compatible with Next.js, Vite, Remix, and any React project.

## Docs

- [Introduction](https://shadcnui-expansions.typeart.cc/docs): Getting started with shadcn/ui expansions. Explains what the project is and how to use it.

## Components

- [Autosize Textarea](https://shadcnui-expansions.typeart.cc/docs/autosize-textarea): Auto resize textarea height based on content. Supports max height, ref forwarding, and react-hook-form integration.
- [Blockquote](https://shadcnui-expansions.typeart.cc/docs/blockquote): Display a styled blockquote or quote component built on top of shadcn/ui.
- [Datetime Picker](https://shadcnui-expansions.typeart.cc/docs/datetime-picker): A datetime picker built on top of shadcn/ui with no additional library needed. Supports year dropdown, time selection, and keyboard navigation.
- [Dual Range Slider](https://shadcnui-expansions.typeart.cc/docs/dual-range-slider): An enhanced slider that allows you to select a range of values with two handles.
- [Floating Label Input](https://shadcnui-expansions.typeart.cc/docs/floating-label-input): Material UI style floating label input built with shadcn/ui and Tailwind CSS.
- [Heading With Anchor](https://shadcnui-expansions.typeart.cc/docs/heading-with-anchor): Add anchor links to every heading for easy section navigation and sharing.
- [Infinite Scroll](https://shadcnui-expansions.typeart.cc/docs/infinite-scroll): Simple infinite scroll component with full control over the loading spinner using the IntersectionObserver API.
- [Interactive Stepper](https://shadcnui-expansions.typeart.cc/docs/interactive-stepper): A set of steps to indicate progress through a multi-step process. Supports click navigation and vertical/horizontal orientation.
- [Loading Button](https://shadcnui-expansions.typeart.cc/docs/loading-button): A button with a loading spinner. Drop-in replacement for shadcn/ui Button with a loading state prop.
- [Magic Back Button](https://shadcnui-expansions.typeart.cc/docs/magic-back-button): Redirects first-time visitors to the homepage; otherwise respects browser history for a native back-button feel.
- [Multiple Selector](https://shadcnui-expansions.typeart.cc/docs/multiple-selector): Fast, composable, fully-featured multiple selector for React. Supports async search with debounce, maximum selected count, grouping, and creatable mode.
- [Progress With Value](https://shadcnui-expansions.typeart.cc/docs/progress-with-value): A progress bar that displays the current percentage value as an inline label.
- [Responsive Modal](https://shadcnui-expansions.typeart.cc/docs/responsive-modal): A dialog that opens as a centered modal on desktop and slides up as a bottom sheet on mobile.
- [Spinner](https://shadcnui-expansions.typeart.cc/docs/spinner): A simple, accessible spinner component for displaying loading state.
- [Typewriter](https://shadcnui-expansions.typeart.cc/docs/typewriter): Typewriter effect for text. Supports HTML and markdown rendering.

## Links

- [GitHub](https://github.com/hsuanyi-chou/shadcn-ui-expansions): Source code, issues, and contributions
- [shadcn/ui](https://ui.shadcn.com/): The base component library this project extends
- [Author Blog](https://blog.typeart.cc/): Blog by Hsuan-Yi Chou, the creator
```

- [ ] **Step 2: Commit**

```bash
git add public/llms.txt
git commit -m "feat(seo): add llms.txt for LLM discoverability"
```

---

### Task 8: Update `next-sitemap.config.js` with per-path priorities

**Files:**
- Modify: `next-sitemap.config.js`

**Interfaces:**
- None — config consumed by `next-sitemap` during `postbuild`

- [ ] **Step 1: Replace `next-sitemap.config.js`**

```javascript
// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shadcnui-expansions.typeart.cc',
  generateRobotsTxt: true,
  outDir: './out',
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'monthly';
    } else if (path === '/docs') {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.startsWith('/docs/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add next-sitemap.config.js
git commit -m "feat(seo): update next-sitemap config with per-path priorities and current lastmod"
```

---

## Self-Review

**Spec coverage:**
- [x] JSON-LD schema on every page — Tasks 1–3, 6 cover `WebSite`, `SoftwareApplication`, `WebPage`, `TechArticle`, `BreadcrumbList`
- [x] `llms.txt` — Task 7
- [x] Enhanced OG/Twitter/keywords/canonical in `baseMetadata` — Task 4
- [x] Missing homepage + intro page `metadata` exports — Tasks 2, 3
- [x] Sitemap improvements — Task 8

**Placeholder scan:** All steps have complete code. No TBDs.

**Type consistency:**
- `JsonLd` accepts `Record<string, unknown>` — compatible with all schema objects passed (plain object literals)
- `baseMetadata` parameters: `title: string`, `description: string`, `keywords?: string[]` — all 15 callsites pass string literals for both required fields; adding `keywords` is additive
- `PageTemplate` props unchanged — existing callers unaffected
