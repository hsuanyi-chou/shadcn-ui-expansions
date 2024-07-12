import { Props } from '@/app/(docs)/docs/components/props-table/props-table';
import React from 'react';
import { InlineCode } from '@/components/ui/inline-code';

export const datetimePickerProp: Props[] = [
  {
    prop: 'value',
    required: false,
    description: (
      <>
        <p>Date value.</p>
      </>
    ),
    type: 'Date | undefined',
    typeInfo: <p>Date value.</p>,
  },
  {
    prop: 'onChange',
    required: false,
    description: (
      <>
        <p>
          When you pick a date, the <InlineCode>onChange</InlineCode> will be called.
        </p>
      </>
    ),
    type: '(Date) => void',
  },
  {
    prop: 'hourCycle',
    required: false,
    description: (
      <>
        <p>Hour cycle that showing AM/PM or not.</p>
      </>
    ),
    type: '12 | 24',
    default: '24',
  },
  {
    prop: 'placeholder',
    required: false,
    description: (
      <>
        <p>The datetime picker placeholder.</p>
      </>
    ),
    type: 'string',
    default: 'Pick a date',
  },
  {
    prop: 'disabled',
    required: false,
    description: (
      <>
        <p>Disabled Datetime Picker.</p>
      </>
    ),
    type: 'boolean',
    default: 'false',
  },
  {
    prop: 'yearRange',
    required: false,
    description: (
      <>
        <p>
          The year dropdown range according to this year. By default is 50, which means this year ±
          50.
        </p>
        <p>
          For example: This year is {new Date().getFullYear()}. the year dropdown range will be{' '}
          {new Date().getFullYear() - 50} to {new Date().getFullYear() + 50}.
        </p>
      </>
    ),
    type: 'number',
    default: '50',
  },
  {
    prop: 'displayFormat',
    required: false,
    description: (
      <>
        <p>
          Custom display format by <InlineCode>date-fns</InlineCode>.
        </p>
      </>
    ),
    type: '{ hour24?: string, hour12?: string }',
    default: "{ hour24: 'PPP HH:mm:ss', hour12: 'PP hh:mm:ss b' }",
  },
  {
    prop: 'granularity',
    required: false,
    description: (
      <>
        <p>
          The granularity prop allows you to control the smallest unit that is displayed by
          DatePicker. By default is <InlineCode>second</InlineCode> which shows all time inputs.
        </p>
      </>
    ),
    type: "'day' | 'hour' | 'minute' | 'second'",
    default: 'second',
  },
];
