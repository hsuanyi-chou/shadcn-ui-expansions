import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import DatetimePickerDemo from '@/app/(docs)/docs/datetime-picker/datetime-picker-demo';
import Usage from '@/app/(docs)/docs/components/usage';
import DatetimePickerHourCycle from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-hour-cycle';
import DatePickerAndTimeInput from '@/app/(docs)/docs/datetime-picker/usage/date-picker-and-time-input';
import { Reference, ReferenceBorder } from '@/app/(docs)/docs/components/reference';
import { P } from '@/components/ui/heading-with-anchor';
import { InlineCode } from '@/components/ui/inline-code';
import { PropLink } from '@/app/(docs)/docs/components/props-table/prop-link';
import DatetimePickerForm from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-form';
import DatetimePickerRef from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-ref';
import DatetimePickerCalendarSettings from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-calendar-settings';
import DatetimePickerGranularity from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-granularity';
import DatetimePickerYearRange from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-year-range';
import DatetimePickerDisplayFormat from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-display-format';
import DatetimePickerLocale from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-locale';
import DatetimePickerDisabled from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-disabled';
import { PropsTable } from '@/app/(docs)/docs/components/props-table/props-table';
import { datetimePickerProp } from '@/app/(docs)/docs/datetime-picker/datetime-picker-prop';
import DatetimePickerPlaceholder from '@/app/(docs)/docs/datetime-picker/usage/datetime-picker-placeholder';
import YearDropdownDesc from '@/app/(docs)/docs/datetime-picker/year-dropdown-desc';

export const metadata: Metadata = baseMetadata({
  title: 'Datetime Picker',
  description: 'A datetime picker built on top of shadcn-ui and no additional library needed.',
});

const DatetimePickerPage = () => {
  return (
    <PageTemplate
      title="Datetime Picker"
      description="A datetime picker built on top of shadcn-ui and no additional library needed."
    >
      <ReferenceBorder>
        <Reference href="https://ui.shadcn.com/docs/components/calendar" />
      </ReferenceBorder>

      <PageSubTitle>About</PageSubTitle>
      <P className="text-muted-foreground">
        This component is inspired by{' '}
        <PropLink href="https://time.openstatus.dev/">
          <InlineCode>Time Picker</InlineCode>
        </PropLink>{' '}
        and thanks to{' '}
        <PropLink href="https://www.openstatus.dev/">
          <InlineCode>OpenStatus</InlineCode>
        </PropLink>
        for creating this.
      </P>
      <ol className="list-disc p-5 text-lg font-normal leading-5 text-muted-foreground lg:text-xl">
        <li>
          All logics exposed. No additional library. Only <InlineCode>DayPicker</InlineCode> that
          shadcn-ui already uses.
        </li>
        <li>Everything is built on top of shadcn-ui.</li>
        <li>
          Locale supported by <InlineCode>date-fns</InlineCode>.
        </li>
        <li>Supports year, Month dropdown menu for quick navigation to a specific date.</li>
        <li>Listens to keydown events.</li>
        <li>Supports arrow navigation.</li>
        <li>Format date values.</li>
        <li>
          Supports <InlineCode>react-day-picker 9</InlineCode>.
        </li>
      </ol>

      <PreviewCodeCard path="app/(docs)/docs/datetime-picker/datetime-picker-demo.tsx">
        <DatetimePickerDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall={true}
        codePath="components/ui/datetime-picker.tsx"
        withEnd
        installScript="npx shadcn@latest add calendar select input popover"
        steps={[{ title: 'Update react-day-picker to ^9.*' }]}
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
        path="app/(docs)/docs/datetime-picker/usage/date-picker-and-time-input.tsx"
      >
        <DatePickerAndTimeInput />
      </Usage>

      <Usage
        title="Year Dropdown Range"
        path="app/(docs)/docs/datetime-picker/usage/datetime-picker-year-range.tsx"
        description={<YearDropdownDesc />}
      >
        <DatetimePickerYearRange />
      </Usage>

      <Usage
        title="Locale"
        path="app/(docs)/docs/datetime-picker/usage/datetime-picker-locale.tsx"
        description={
          <>
            <P className="text-muted-foreground">
              Import locale from{' '}
              <PropLink href="https://date-fns.org/v3.6.0/docs/I18n-Contribution-Guide">
                <InlineCode>date-fns</InlineCode>
              </PropLink>
            </P>
          </>
        }
      >
        <DatetimePickerLocale />
      </Usage>

      <Usage
        title="Week start on Monday, Show week number, Disable outside days"
        path="app/(docs)/docs/datetime-picker/usage/datetime-picker-calendar-settings.tsx"
      >
        <DatetimePickerCalendarSettings />
      </Usage>

      <Usage
        title="Display Format"
        path="app/(docs)/docs/datetime-picker/usage/datetime-picker-display-format.tsx"
        description={
          <>
            <P className="text-muted-foreground">
              Visit{' '}
              <PropLink href="https://date-fns.org/v3.6.0/docs/format">
                <InlineCode>date-fns</InlineCode>
              </PropLink>{' '}
              to customize the format.
            </P>
          </>
        }
      >
        <DatetimePickerDisplayFormat />
      </Usage>

      <Usage
        title="Placeholder"
        path="app/(docs)/docs/datetime-picker/usage/datetime-picker-placeholder.tsx"
      >
        <DatetimePickerPlaceholder />
      </Usage>

      <Usage
        title="Granularity"
        path="app/(docs)/docs/datetime-picker/usage/datetime-picker-granularity.tsx"
      >
        <DatetimePickerGranularity />
      </Usage>

      <Usage
        title="Disabled"
        path="app/(docs)/docs/datetime-picker/usage/datetime-picker-disabled.tsx"
      >
        <DatetimePickerDisabled />
      </Usage>

      <Usage title="Ref" path="app/(docs)/docs/datetime-picker/usage/datetime-picker-ref.tsx">
        <DatetimePickerRef />
      </Usage>

      <Usage title="Form" path="app/(docs)/docs/datetime-picker/usage/datetime-picker-form.tsx">
        <DatetimePickerForm />
      </Usage>

      <PropsTable props={datetimePickerProp} />
    </PageTemplate>
  );
};

export default DatetimePickerPage;
