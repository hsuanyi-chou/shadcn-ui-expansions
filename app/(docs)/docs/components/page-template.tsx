import React from 'react';
import { H1, H2, P } from '@/components/ui/heading-with-anchor';
import { cn } from '@/lib/utils';

interface PageTemplateProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

const PageTemplate = ({ title, description, children, className }: PageTemplateProps) => {
  return (
    <section className={cn('flex flex-col gap-3 pb-10', className)}>
      <H1>{title}</H1>
      <P className="font-normal text-gray-500">{description}</P>
      {children}
    </section>
  );
};

const PageSubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <H2 className="mb-2 border-b-2 border-b-gray-300 pb-2" anchor={children?.toString()}>
      {children}
    </H2>
  );
};

export { PageTemplate, PageSubTitle };
