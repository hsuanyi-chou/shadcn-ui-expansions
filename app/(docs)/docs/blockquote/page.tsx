import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import fs from 'fs/promises';
import BlockquoteDemo from '@/app/(docs)/docs/blockquote/blockquote-demo';
import CodeHighlight from '@/app/(docs)/docs/components/code-card/parts/code-highlight';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';

const BlockquotePage = async () => {
  const installCode = await fs.readFile('components/ui/blockquote.tsx', 'utf8');
  const steps = [
    {
      title: 'Copy and paste the following code into your project.',
      children: <CodeHighlight code={installCode} withExpand />,
    },
  ];

  return (
    <PageTemplate
      title="Blockquote"
      description="Display a quote or a component that looks like a quote."
    >
      <PreviewCodeCard path="app/(docs)/docs/blockquote/blockquote-demo.tsx">
        <BlockquoteDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers steppers={steps} withEnd />
    </PageTemplate>
  );
};

export default BlockquotePage;
