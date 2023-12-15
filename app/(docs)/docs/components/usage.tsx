import React from 'react';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { H3 } from '@/components/ui/heading-with-anchor';
import { cn } from '@/lib/utils';

interface UsageProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  path: string;
}
const Usage = ({ className, children, title, path }: UsageProps) => {
  return (
    <div className={cn(className)}>
      {title && <H3 anchor={title}>{title}</H3>}
      <PreviewCodeCard path={path}>{children}</PreviewCodeCard>
    </div>
  );
};

export default Usage;
