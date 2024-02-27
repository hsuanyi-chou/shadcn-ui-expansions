import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import DatetimePickerDemo from '@/app/(docs)/docs/datetime-picker/datetime-picker-demo';
import Usage from '@/app/(docs)/docs/components/usage';
import DatetimePickerHourCycle from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-hour-cycle';
import DatePickerAndTimePicker from '@/app/(docs)/docs/datetime-picker/usage/date-picker-and-time-picker';
import { Reference, ReferenceBorder } from '@/app/(docs)/docs/components/reference';
import { P } from '@/components/ui/heading-with-anchor';
import { InlineCode } from '@/components/ui/inline-code';
import { PropLink } from '@/app/(docs)/docs/components/props-table/prop-link';
import DatetimePickerForm from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-form';
import DatetimePickerControlled from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-controlled';
import DatetimePickerRef from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-ref';

export const metadata: Metadata = baseMetadata({
  title: 'Datetime Picker',
  description:
    'A datetime picker built on top of react-aria and react-stately for the accessible date & time components, with the shadcn-ui theming.',
});

const DatetimePickerPage = () => {
  return (
    <PageTemplate
      title="Datetime Picker"
      description="A datetime picker built on top of react-aria and react-stately for the accessible date & time components, with the shadcn-ui theming."
    >
      <ReferenceBorder>
        <Reference href="https://react-spectrum.adobe.com/react-aria/useDatePicker.html" />
      </ReferenceBorder>

      <PageSubTitle>About</PageSubTitle>
      <P className="text-muted-foreground">
        This component is inspired by{' '}
        <PropLink href="https://github.com/uncvrd/shadcn-ui-date-time-picker">
          <InlineCode>shadcn-ui-date-time-picker</InlineCode>
        </PropLink>{' '}
        and thanks to{' '}
        <PropLink href="https://github.com/uncvrd">
          <InlineCode>@uncvrd</InlineCode>
        </PropLink>
        for creating this.
      </P>
      <P className="text-muted-foreground">
        I keep all the react-aria props and add 2 props: <InlineCode>jsDate</InlineCode>,{' '}
        <InlineCode>onJsDateChange</InlineCode>, also expose all the ref of the react-aria.
      </P>
      <P className="text-muted-foreground">
        All you need to do is to use the <InlineCode>jsDate</InlineCode> and{' '}
        <InlineCode>onJsDateChange</InlineCode>.
      </P>

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
        title="Hour cycle - 12H / 24H"
        path="app/(docs)/docs/datetime-picker/usage/datetime-picker-hour-cycle.tsx"
      >
        <DatetimePickerHourCycle />
      </Usage>
      <Usage
        title="Date picker or Time picker"
        path="app/(docs)/docs/datetime-picker/usage/date-picker-and-time-picker.tsx"
      >
        <DatePickerAndTimePicker />
      </Usage>

      <Usage
        title="Controlled component"
        path="app/(docs)/docs/datetime-picker/usage/datetime-picker-controlled.tsx"
      >
        <DatetimePickerControlled />
      </Usage>

      <Usage title="Ref" path="app/(docs)/docs/datetime-picker/usage/datetime-picker-ref.tsx">
        <DatetimePickerRef />
      </Usage>

      <Usage title="Form" path="app/(docs)/docs/datetime-picker/usage/datetime-picker-form.tsx">
        <DatetimePickerForm />
      </Usage>
    </PageTemplate>
  );
};

export default DatetimePickerPage;
