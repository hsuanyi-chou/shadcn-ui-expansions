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
