import { Props } from '@/app/(docs)/docs/components/props-table/props-table';
import React from 'react';

export const spinnerProp: Props[] = [
  {
    prop: 'className',
    required: false,
    description: (
      <>
        <p>Customize the style by adding tailwind.</p>
      </>
    ),
    type: 'string',
  },
  {
    prop: 'size',
    required: false,
    description: (
      <>
        <p>Spinner size.</p>
      </>
    ),
    type: `'small' | 'medium' | 'large'`,
    default: 'medium',
  },
  {
    prop: 'show',
    required: false,
    default: 'true',
    description: (
      <>
        <p>Visibility of spinner.</p>
      </>
    ),
    type: 'boolean',
  },
  {
    prop: 'children',
    required: false,
    description: (
      <>
        <p>Add custom component or text.</p>
      </>
    ),
    type: `React.ReactNode`,
  },
];
