import React from 'react';
import { PageTemplate } from '@/app/(docs)/docs/components/page-template';
import CodeCard from '@/app/(docs)/docs/components/code-card';
import fs from 'fs/promises';
const BlockquotePage = async () => {
  const code = await fs.readFile('components/ui/blockquote.tsx', 'utf8');
  console.log(code);
  return (
    <PageTemplate
      title="Blockquote"
      description="Display a quote or a component that looks like a quote."
    >
      <CodeCard code={code}></CodeCard>
    </PageTemplate>
  );
};

export default BlockquotePage;
