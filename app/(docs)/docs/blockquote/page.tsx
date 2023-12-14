import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import BlockquoteDemo from '@/app/(docs)/docs/blockquote/blockquote-demo';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';

const BlockquotePage = async () => {
  return (
    <PageTemplate
      title="Blockquote"
      description="Display a quote or a component that looks like a quote."
    >
      <PreviewCodeCard path="app/(docs)/docs/blockquote/blockquote-demo.tsx">
        <BlockquoteDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall installCodePath="components/ui/blockquote.tsx" withEnd />
    </PageTemplate>
  );
};

export default BlockquotePage;
