import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import LoadingButtonDemo from '@/app/(docs)/docs/loading-button/loading-button-demo';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';

export const metadata: Metadata = baseMetadata({
  title: 'Loading Button',
  description:
    'Display a button or a component that looks like a button with loading spinner. Everything is just the same as the button in shadcnui.',
});

const LoadingButtonPage = async () => {
  return (
    <PageTemplate
      title="Loading Button"
      description="Display a button or a component that looks like a button with loading spinner. Everything is just the same as the button in shadcnui."
    >
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
    </PageTemplate>
  );
};

export default LoadingButtonPage;
