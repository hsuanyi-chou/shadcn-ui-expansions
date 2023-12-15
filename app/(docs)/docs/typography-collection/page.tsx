import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import TypographyDemo from '@/app/(docs)/docs/typography-collection/typography-collection-demo';
import Usage from '@/app/(docs)/docs/components/usage';
import TypographyUsage from '@/app/(docs)/docs/typography-collection/typography-collection-usage';

export const metadata: Metadata = baseMetadata({
  title: 'Typography Collection',
  description: 'Collect all typography components so that you can just copy and paste the code.',
});

const TypographyCollectionPage = () => {
  return (
    <PageTemplate
      title="Typography Collection"
      description="Collect all typography components so that you can just copy and paste the code."
    >
      <PreviewCodeCard path="app/(docs)/docs/typography-collection/typography-collection-demo.tsx">
        <TypographyDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall codePath="components/ui/typography.tsx" withEnd />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage path="app/(docs)/docs/typography-collection/typography-collection-usage.tsx">
        <TypographyUsage />
      </Usage>
    </PageTemplate>
  );
};

export default TypographyCollectionPage;
