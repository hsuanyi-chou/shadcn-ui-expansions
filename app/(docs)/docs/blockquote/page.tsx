import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import CodeCard from '@/app/(docs)/docs/components/code-card';
import fs from 'fs/promises';
import BlockquoteDemo from '@/app/(docs)/docs/blockquote/blockquote-demo';
import CodeHighlight from '@/app/(docs)/docs/components/code-card/code-highlight';
import { Steppers } from '@/components/ui/steppers';

const BlockquotePage = async () => {
  const demoCode = await fs.readFile('app/(docs)/docs/blockquote/blockquote-demo.tsx', 'utf8');
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
      <CodeCard code={demoCode} className="mb-14">
        <BlockquoteDemo />
      </CodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers steppers={steps} withEnd />
    </PageTemplate>
  );
};

export default BlockquotePage;
