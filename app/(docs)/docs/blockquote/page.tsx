import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import CodeCard from '@/app/(docs)/docs/components/code-card';
import fs from 'fs/promises';
import BlockquoteDemo from '@/app/(docs)/docs/blockquote/blockquote-demo';
import { H3, H4 } from '@/components/ui/typography';
import CodeHighlight from '@/app/(docs)/docs/components/code-card/code-highlight';
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
      <div className="pl-10">
        <H4>Copy and paste the following code into your project.</H4>
        <CodeHighlight code={installCode} />
        <H4>Update the import paths to match your project setup.</H4>
      </div>
    </PageTemplate>
  );
};

export default BlockquotePage;
