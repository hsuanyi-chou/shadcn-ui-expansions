import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import CodeCard from '@/app/(docs)/docs/components/code-card';
import fs from 'fs/promises';
import BlockquoteDemo from '@/app/(docs)/docs/blockquote/blockquote-demo';
import CodeHighlight from '@/app/(docs)/docs/components/code-card/code-highlight';
import { Stepper } from '@/components/ui/stepper';
const BlockquotePage = async () => {
  const demoCode = await fs.readFile('app/(docs)/docs/blockquote/blockquote-demo.tsx', 'utf8');
  const installCode = await fs.readFile('components/ui/blockquote.tsx', 'utf8');

  return (
    <PageTemplate
      title="Blockquote"
      description="Display a quote or a component that looks like a quote."
    >
      <CodeCard code={demoCode} className="mb-14">
        <BlockquoteDemo />
      </CodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Stepper title="Copy and paste the following code into your project." step={1}>
        <CodeHighlight code={installCode} withExpand />
      </Stepper>
      <Stepper title="Update the import paths to match your project setup." step={2} />
    </PageTemplate>
  );
};

export default BlockquotePage;
