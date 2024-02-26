import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import DatetimePickerDemo from '@/app/(docs)/docs/datetime-picker/datetime-picker-demo';

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

      {/*<PageSubTitle>Installation</PageSubTitle>*/}
      {/*<Steppers withInstall codePath="components/ui/blockquote.tsx" withEnd />*/}
    </PageTemplate>
  );
};

export default DatetimePickerPage;
