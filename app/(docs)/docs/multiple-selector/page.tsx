import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import LoadingButtonDemo from '@/app/(docs)/docs/loading-button/loading-button-demo';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import { Reference, ReferenceBorder } from '@/app/(docs)/docs/components/reference';
import LoadingButtonUsage from '@/app/(docs)/docs/loading-button/loading-button-usage';
import Usage from '@/app/(docs)/docs/components/usage';
import { P } from '@/components/ui/heading-with-anchor';
import { InlineCode } from '@/components/ui/inline-code';
import { PropLink } from '@/app/(docs)/docs/components/props-table/prop-link';
export const metadata: Metadata = baseMetadata({
  title: 'Multiple Selector',
  description: 'Fast,composable, unstyled, multiple selector for React',
});

const LoadingButtonPage = () => {
  return (
    <PageTemplate
      title="Multiple Selector"
      description="Fast, composable, unstyled, multiple selector for React."
    >
      <ReferenceBorder>
        <Reference href="https://ui.shadcn.com/docs/components/command" />
        <Reference href="https://github.com/pacocoursey/cmdk" text="cmdk" />
      </ReferenceBorder>

      <PageSubTitle>About</PageSubTitle>
      <P className="text-gray-700">
        This component is inspired by{' '}
        <PropLink href="https://craft.mxkaske.dev/post/fancy-multi-select">
          <InlineCode>Fancy Multi Select</InlineCode>
        </PropLink>{' '}
        and added some features such as async search.
      </P>
      <P className="text-gray-700">
        {' '}
        It is built on top of{' '}
        <PropLink href="https://github.com/pacocoursey/cmdk">
          <InlineCode>cmdk</InlineCode>
        </PropLink>{' '}
        package like <InlineCode>command</InlineCode> component in shadcn-ui.
      </P>

      {/*<PreviewCodeCard path="app/(docs)/docs/loading-button/loading-button-demo.tsx">*/}
      {/*  <LoadingButtonDemo />*/}
      {/*</PreviewCodeCard>*/}

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="components/ui/multiple-selector.tsx"
        installScript="npx shadcn-ui@latest add command badge"
        withEnd
      />

      {/*<PageSubTitle>Usage</PageSubTitle>*/}
      {/*<Usage path="app/(docs)/docs/loading-button/loading-button-usage.tsx">*/}
      {/*  <LoadingButtonUsage />*/}
      {/*</Usage>*/}
    </PageTemplate>
  );
};

export default LoadingButtonPage;
