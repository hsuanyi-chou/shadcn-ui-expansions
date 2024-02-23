import { Props } from '@/app/(docs)/docs/components/props-table/props-table';
import React from 'react';
import { InlineCode } from '@/components/ui/inline-code';

export const headingWithAnchorProp: Props[] = [
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
    prop: 'anchor',
    required: false,
    description: (
      <>
        <p>anchor</p>
      </>
    ),
    type: 'string',
  },
  {
    prop: 'anchorAlignment',
    required: false,
    default: 'spaced',
    description: (
      <>
        <p>Alignment of anchor</p>
      </>
    ),
    type: `'close' | 'spaced'`,
  },
  {
    prop: 'anchorVisibility',
    required: false,
    description: (
      <>
        <p>Visibility of anchor.</p>
      </>
    ),
    type: `'hover' | 'always' | 'never'`,
    default: 'always',
  },
  {
    prop: 'disableCopyToClipboard',
    required: false,
    description: (
      <>
        <p>When clicking the anchor, it will copy the anchor link to clipboard.</p>
        <p>
          If you want to disable, set it to <InlineCode>true</InlineCode>.
        </p>
      </>
    ),
    type: 'boolean',
    default: 'false',
  },
];
