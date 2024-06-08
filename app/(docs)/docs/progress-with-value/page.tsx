import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import Usage from '@/app/(docs)/docs/components/usage';
import { Reference, ReferenceBorder } from '@/app/(docs)/docs/components/reference';
import ProgressWithValueDemo from '@/app/(docs)/docs/progress-with-value/progress-with-value-demo';
import ProgressWithValuePosition from '@/app/(docs)/docs/progress-with-value/usage/progress-with-value-position';
import ProgressWithValueLabel from '@/app/(docs)/docs/progress-with-value/usage/progress-with-value-label';

export const metadata: Metadata = baseMetadata({
  title: 'Progress With Value',
  description: 'A progress bar that displays the current value.',
});

const DualRangeSliderPage = () => {
  return (
    <PageTemplate
      title="Progress With Value"
      description="A progress bar that displays the current value."
    >
      <ReferenceBorder>
        <Reference href="https://www.radix-ui.com/themes/docs/components/progress" />
      </ReferenceBorder>
      <PreviewCodeCard path="app/(docs)/docs/progress-with-value/progress-with-value-demo.tsx">
        <ProgressWithValueDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="components/ui/progress-with-value.tsx"
        withEnd
        installScript="npm i @radix-ui/react-progress"
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage
        title="Value Position"
        path="app/(docs)/docs/progress-with-value/usage/progress-with-value-position.tsx"
      >
        <ProgressWithValuePosition />
      </Usage>
      <Usage
        title="Custom Label"
        path="app/(docs)/docs/progress-with-value/usage/progress-with-value-label.tsx"
      >
        <ProgressWithValueLabel />
      </Usage>
    </PageTemplate>
  );
};

export default DualRangeSliderPage;
