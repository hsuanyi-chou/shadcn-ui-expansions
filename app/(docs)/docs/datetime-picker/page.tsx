import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import DatetimePickerDemo from '@/app/(docs)/docs/datetime-picker/datetime-picker-demo';
import Usage from '@/app/(docs)/docs/components/usage';
import AutosizeTextareaWithMaxHeight from '@/app/(docs)/docs/autosize-textarea/usage/autosize-textarea-with-max-height';
import DatetimePickerHourCycle from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-hour-cycle';

export const metadata: Metadata = baseMetadata({
  title: 'Datetime Picker',
  description: '',
});

const DatetimePickerPage = () => {
  return (
    <PageTemplate title="Datetime Picker" description="">
      <PreviewCodeCard path="app/(docs)/docs/datetime-picker/datetime-picker-demo.tsx">
        <DatetimePickerDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="components/ui/datetime-picker.tsx"
        withEnd
        installScript="npm i react-aria react-stately"
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage
        title="Hoour cycle - 12 / 24H"
        path="app/(docs)/docs/datetime-picker/usage/datetime-picker-hour-cycle.tsx"
      >
        <DatetimePickerHourCycle />
      </Usage>
    </PageTemplate>
  );
};

export default DatetimePickerPage;
