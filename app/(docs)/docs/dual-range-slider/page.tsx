import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import DualRangeSliderDemo from '@/app/(docs)/docs/dual-range-slider/dual-range-slider-demo';
import DualRangeSliderCustomLabel from '@/app/(docs)/docs/dual-range-slider/usage/dual-range-slider-custom-label';
import Usage from '@/app/(docs)/docs/components/usage';
import DualRangeSliderLabelPosition from '@/app/(docs)/docs/dual-range-slider/usage/dual-range-slider-label-position';
import { Reference, ReferenceBorder } from '@/app/(docs)/docs/components/reference';
import DualRangeSliderSingle from '@/app/(docs)/docs/dual-range-slider/usage/dual-range-slider-single';

export const metadata: Metadata = baseMetadata({
  title: 'Dual Range Slider',
  description: 'An enhancement slider that allows you to select a range of values.',
});

const DualRangeSliderPage = () => {
  return (
    <PageTemplate
      title="Dual Range Slider"
      description="An enhancement slider that allows you to select a range of values."
    >
      <ReferenceBorder>
        <Reference href="https://www.radix-ui.com/themes/docs/components/slider" />
      </ReferenceBorder>
      <PreviewCodeCard path="app/(docs)/docs/dual-range-slider/dual-range-slider-demo.tsx">
        <DualRangeSliderDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="components/ui/dual-range-slider.tsx"
        withEnd
        installScript="npm i @radix-ui/react-slider"
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage
        title="Custom Label"
        path="app/(docs)/docs/dual-range-slider/usage/dual-range-slider-custom-label.tsx"
      >
        <DualRangeSliderCustomLabel />
      </Usage>
      <Usage
        title="Label Position"
        path="app/(docs)/docs/dual-range-slider/usage/dual-range-slider-label-position.tsx"
      >
        <DualRangeSliderLabelPosition />
      </Usage>
      <Usage
        title="Single Slider"
        path="app/(docs)/docs/dual-range-slider/usage/dual-range-slider-single.tsx"
      >
        <DualRangeSliderSingle />
      </Usage>
    </PageTemplate>
  );
};

export default DualRangeSliderPage;
