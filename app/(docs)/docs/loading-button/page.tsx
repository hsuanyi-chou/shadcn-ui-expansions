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
import LoadingButtonAsChild from '@/app/(docs)/docs/loading-button/loading-button-as-child';

export const metadata: Metadata = baseMetadata({
  title: 'Loading Button',
  description:
    'Display a button or a component that looks like a button with loading spinner. Everything is just the same as the button in shadcnui.',
});

const LoadingButtonPage = () => {
  return (
    <PageTemplate
      title="Loading Button"
      description="Display a button or a component that looks like a button with loading spinner. Everything is just the same as the button in shadcnui."
    >
      <ReferenceBorder>
        <Reference href="https://www.radix-ui.com/themes/docs/components/button" />
        <Reference href="https://ui.shadcn.com/docs/components/button" />
      </ReferenceBorder>

      <PreviewCodeCard path="app/(docs)/docs/loading-button/loading-button-demo.tsx">
        <LoadingButtonDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="components/ui/loading-button.tsx"
        installScript="npm i class-variance-authority @radix-ui/react-slot"
        withEnd
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage path="app/(docs)/docs/loading-button/loading-button-usage.tsx">
        <LoadingButtonUsage />
      </Usage>
      <Usage title="asChild" path="app/(docs)/docs/loading-button/loading-button-as-child.tsx">
        <LoadingButtonAsChild />
      </Usage>
    </PageTemplate>
  );
};

export default LoadingButtonPage;
