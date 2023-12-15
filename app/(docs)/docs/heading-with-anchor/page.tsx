import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import HeadingDemo from '@/app/(docs)/docs/heading-with-anchor/heading-with-anchor-demo';
import Usage from '@/app/(docs)/docs/components/usage';
import TypographyUsage from '@/app/(docs)/docs/heading-with-anchor/heading-with-anchor-usage';

export const metadata: Metadata = baseMetadata({
  title: 'Heading With Anchor',
  description: 'Add anchor for every heading.',
});

const HeadingWithAnchorPage = () => {
  return (
    <PageTemplate title="Heading With Anchor" description="Add anchor for every heading.">
      <PreviewCodeCard path="app/(docs)/docs/heading-with-anchor/heading-with-anchor-demo.tsx">
        <HeadingDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall codePath="components/ui/heading-with-anchor.tsx" withEnd />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage path="app/(docs)/docs/heading-with-anchor/heading-with-anchor-usage.tsx">
        <TypographyUsage />
      </Usage>
    </PageTemplate>
  );
};

export default HeadingWithAnchorPage;
