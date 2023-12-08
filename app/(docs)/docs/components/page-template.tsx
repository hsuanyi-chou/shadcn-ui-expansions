import React from 'react';
import { H1, H2, P } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface PageTemplateProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

const PageTemplate = ({ title, description, children, className }: PageTemplateProps) => {
  return (
    <section className={cn(className)}>
      <H1>{title}</H1>
      <P className="text-gray-500">{description}</P>
      {children}
    </section>
  );
};

// TODO 要加 anchor
const PageSubTitle = ({ children }: { children: React.ReactNode }) => {
  return <H2 className="mb-2 border-b-2 border-b-gray-400 pb-2">{children}</H2>;
};

export { PageTemplate, PageSubTitle };
