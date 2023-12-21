import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import InfiniteScrollDemo from '@/app/(docs)/docs/infinite-scroll/infinite-scroll-demo';

export const metadata: Metadata = baseMetadata({
  title: 'Infinite Scroll',
  description: 'Infinite Scroll',
});

const InfiniteScrollPage = () => {
  return (
    <PageTemplate
      title="Infinite Scroll"
      description="Display a button or a component that looks like a button with loading spinner. Everything is just the same as the button in shadcnui."
    >
      {/*<ReferenceBorder>*/}
      {/*  <Reference href="https://www.radix-ui.com/themes/docs/components/button" />*/}
      {/*  <Reference href="https://ui.shadcn.com/docs/components/button" />*/}
      {/*</ReferenceBorder>*/}

      <PreviewCodeCard path="app/(docs)/docs/infinite-scroll/infinite-scroll-demo.tsx">
        <InfiniteScrollDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall codePath="components/ui/infinite-scroll.tsx" withEnd />
    </PageTemplate>
  );
};

export default InfiniteScrollPage;
