import React from 'react';
import CodeCard from '@/app/(docs)/docs/components/code-card/code-card';
import BlockquoteDemo from '@/app/(docs)/docs/blockquote/blockquote-demo';
import fs from 'fs/promises';
import { cn } from '@/lib/utils';

interface PreviewCodeCardProps {
  className?: string;
  path: string;
  children?: React.ReactNode;
}

const PreviewCodeCard = async ({ className, path, children }: PreviewCodeCardProps) => {
  const demoCode = await fs.readFile(path, 'utf8');

  if (!demoCode) {
    console.error(`No demo code found in ${path}`);
    return null;
  }

  return (
    <CodeCard code={demoCode} className={cn('mb-14', className)}>
      {children}
    </CodeCard>
  );
};

export default PreviewCodeCard;
