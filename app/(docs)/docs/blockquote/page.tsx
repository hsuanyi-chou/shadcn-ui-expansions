import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import BlockquoteDemo from '@/app/(docs)/docs/blockquote/blockquote-demo';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';

export const metadata: Metadata = baseMetadata({
  title: 'Blockquote',
  description: 'Display a quote or a component that looks like a quote.',
});

const BlockquotePage = () => {
  return (
    <PageTemplate
      title="Blockquote"
      description="Display a quote or a component that looks like a quote."
    >
      <PreviewCodeCard path="app/(docs)/docs/blockquote/blockquote-demo.tsx">
        <BlockquoteDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall codePath="components/ui/blockquote.tsx" withEnd />
    </PageTemplate>
  );
};

export default BlockquotePage;
