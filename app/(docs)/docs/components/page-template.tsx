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

const PageSubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <H2 className="mb-2 border-b-2 border-b-gray-300 pb-2" anchor={children?.toString()}>
      {children}
    </H2>
  );
};

export { PageTemplate, PageSubTitle };
