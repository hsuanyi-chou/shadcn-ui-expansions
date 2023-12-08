import React from 'react';
import { H1, H2, P } from '@/components/ui/typography';

interface PageTemplateProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const PageTemplate = ({ title, description, children }: PageTemplateProps) => {
  return (
    <section>
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
