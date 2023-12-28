import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import InfiniteScrollDemo from '@/app/(docs)/docs/infinite-scroll/infinite-scroll-demo';
import { PropsTable } from '@/app/(docs)/docs/components/props-table/props-table';
import { infiniteScrollProp } from '@/app/(docs)/docs/infinite-scroll/infinite-scroll-prop';
export const metadata: Metadata = baseMetadata({
  title: 'Infinite Scroll',
  description:
    'Simple infinite scroll component. You have fully control over the loading spinner and IntersectionObserver API.',
});

const InfiniteScrollPage = () => {
  return (
    <PageTemplate
      title="Infinite Scroll"
      description="Simple infinite scroll component. You have fully control over the loading spinner and IntersectionObserver API."
    >
      <PreviewCodeCard path="app/(docs)/docs/infinite-scroll/infinite-scroll-demo.tsx">
        <InfiniteScrollDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall codePath="components/ui/infinite-scroll.tsx" withEnd />

      <PropsTable props={infiniteScrollProp} />
    </PageTemplate>
  );
};

export default InfiniteScrollPage;
