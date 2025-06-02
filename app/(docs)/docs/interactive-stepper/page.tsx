import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { PropsTable } from '@/app/(docs)/docs/components/props-table/props-table';
import Usage from '@/app/(docs)/docs/components/usage';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import InteractiveStepperDemo from './interactive-stepper-demo';
import {
  interactiveStepperContentProps,
  interactiveStepperDescriptionProps,
  interactiveStepperIndicatorProps,
  interactiveStepperItemProps,
  interactiveStepperRootProps,
  interactiveStepperSeparatorProps,
  interactiveStepperTitleProps,
  interactiveStepperTriggerProps,
} from './interactive-stepper-prop';
import InteractiveStepperHorizontal from './usage/interactive-stepper-horizontal';
import InteractiveStepperVertical from './usage/interactive-stepper-vertical';

export const metadata: Metadata = baseMetadata({
  title: 'Interactive Stepper',
  description: 'A set of steps that are used to indicate progress through a multi-step process.',
});

const InteractiveStepperPage = () => {
  return (
    <PageTemplate
      title="Interactive Stepper"
      description="A set of steps that are used to indicate progress through a multi-step process."
    >
      <PreviewCodeCard path="app/(docs)/docs/interactive-stepper/interactive-stepper-demo.tsx">
        <InteractiveStepperDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall codePath="components/ui/interactive-stepper.tsx" withEnd />

      <PageSubTitle>Usage</PageSubTitle>

      <Usage
        path="app/(docs)/docs/interactive-stepper/usage/interactive-stepper-horizontal.tsx"
        title="Horizontal Interactive Stepper"
      >
        <InteractiveStepperHorizontal />
      </Usage>

      <Usage
        path="app/(docs)/docs/interactive-stepper/usage/interactive-stepper-vertical.tsx"
        title="Vertical Interactive Stepper"
      >
        <InteractiveStepperVertical />
      </Usage>

      <PropsTable title="Props: InteractiveStepper" props={interactiveStepperRootProps} />
      <PropsTable title="Props: InteractiveStepperItem" props={interactiveStepperItemProps} />
      <PropsTable
        title="Props: InteractiveStepperIndicator"
        props={interactiveStepperIndicatorProps}
      />
      <PropsTable title="Props: InteractiveStepperTrigger" props={interactiveStepperTriggerProps} />
      <PropsTable title="Props: InteractiveStepperTitle" props={interactiveStepperTitleProps} />
      <PropsTable
        title="Props: InteractiveStepperDescription"
        props={interactiveStepperDescriptionProps}
      />
      <PropsTable
        title="Props: InteractiveStepperSeparator"
        props={interactiveStepperSeparatorProps}
      />
      <PropsTable title="Props: InteractiveStepperContent" props={interactiveStepperContentProps} />
    </PageTemplate>
  );
};

export default InteractiveStepperPage;
