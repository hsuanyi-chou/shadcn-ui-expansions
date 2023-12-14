import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import LoadingButtonDemo from '@/app/(docs)/docs/loading-button/loading-button-demo';
import { Steppers } from '@/components/ui/steppers';

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
      <Steppers withInstall installCodePath="components/ui/loading-button.tsx" withEnd />
    </PageTemplate>
  );
};

export default LoadingButtonPage;
