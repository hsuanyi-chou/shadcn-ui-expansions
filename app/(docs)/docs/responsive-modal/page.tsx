import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import Usage from '@/app/(docs)/docs/components/usage';
import ResponsiveModalDemo from '@/app/(docs)/docs/responsive-modal/responsive-modal-demo';
import ResponsiveModalSide from '@/app/(docs)/docs/responsive-modal/usage/responsive-modal-side';

export const metadata: Metadata = baseMetadata({
  title: 'Responsive Modal',
  description: 'A dialog that pops up in the center of the screen on desktop and slide on mobile.',
});

const ResponsiveModalPage = () => {
  return (
    <PageTemplate
      title="Responsive Modal"
      description="A dialog that pops up in the center of the screen on desktop and slide up on mobile."
    >
      <PreviewCodeCard path="app/(docs)/docs/responsive-modal/responsive-modal-demo.tsx">
        <ResponsiveModalDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall codePath="components/ui/responsive-modal.tsx" withEnd />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage title="Side" path="app/(docs)/docs//responsive-modal/usage/responsive-modal-side.tsx">
        <ResponsiveModalSide />
      </Usage>
    </PageTemplate>
  );
};

export default ResponsiveModalPage;
