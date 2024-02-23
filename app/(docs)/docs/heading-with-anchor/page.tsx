import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import HeadingDemo from '@/app/(docs)/docs/heading-with-anchor/heading-with-anchor-demo';
import Usage from '@/app/(docs)/docs/components/usage';
import TypographyUsage from '@/app/(docs)/docs/heading-with-anchor/heading-with-anchor-usage';
import { PropsTable } from '@/app/(docs)/docs/components/props-table/props-table';
import { headingWithAnchorProp } from '@/app/(docs)/docs/heading-with-anchor/heading-with-anchor-prop';
import HeadingWithAnchorHover from '@/app/(docs)/docs/heading-with-anchor/usage/heading-with-anchor-hover';
import HeadingWithAnchorAlign from '@/app/(docs)/docs/heading-with-anchor/usage/heading-with-anchor-align';

export const metadata: Metadata = baseMetadata({
  title: 'Heading With Anchor',
  description: 'Add anchor for every heading.',
});

const HeadingWithAnchorPage = () => {
  return (
    <PageTemplate title="Heading With Anchor" description="Add anchor for every heading.">
      <PreviewCodeCard path="app/(docs)/docs/heading-with-anchor/heading-with-anchor-demo.tsx">
        <HeadingDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="components/ui/heading-with-anchor.tsx"
        withEnd
        steps={[
          {
            title:
              'Modify `scroll-m-20` according to your header height and `Link` to `a` if you are not using Next.js',
          },
        ]}
        installScript="npm i @radix-ui/react-slot class-variance-authority"
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage
        path="app/(docs)/docs/heading-with-anchor/heading-with-anchor-usage.tsx"
        title="h1 to h6"
      >
        <TypographyUsage />
      </Usage>
      <Usage
        path="app/(docs)/docs/heading-with-anchor/usage/heading-with-anchor-hover.tsx"
        title="Show anchor when hover heading"
      >
        <HeadingWithAnchorHover />
      </Usage>

      <Usage
        path="app/(docs)/docs/heading-with-anchor/usage/heading-with-anchor-align.tsx"
        title="Close to heading"
      >
        <HeadingWithAnchorAlign />
      </Usage>

      <PropsTable props={headingWithAnchorProp} />
    </PageTemplate>
  );
};

export default HeadingWithAnchorPage;
