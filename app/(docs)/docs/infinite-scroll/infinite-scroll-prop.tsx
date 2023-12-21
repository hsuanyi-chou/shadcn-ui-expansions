import { Props } from '@/app/(docs)/docs/components/props-table/props-table';
import Link from 'next/link';
import React from 'react';

// TODO: description 尚未完成

export const infiniteScrollProp: Props[] = [
  {
    prop: 'isLoading',
    required: true,
    description:
      'If isLoading is true, infinite scroll will stop calling next() function to avoid duplicate calls.',
    type: 'boolean',
    default: '-',
  },
  {
    prop: 'hasMore',
    required: true,
    description: 'If hasMore is false, infinite scroll will stop calling next() function.',
    type: 'boolean',
    default: '-',
  },
  {
    prop: 'next',
    required: true,
    description: 'Function to call when the user scrolls to the bottom of the "children" element.',
    type: '() => unknown',
    default: '-',
  },
  {
    prop: 'threshold',
    required: false,
    description:
      'The threshold is the number of pixels from the bottom of the element where the next function will be called.',
    type: 'number',
    default: '1',
  },
  {
    prop: 'root',
    required: false,
    description: '',
    type: 'number',
    default: 'null',
  },
  {
    prop: 'rootMargin',
    required: false,
    description: (
      <>
        <span>
          The rootMargin is the margin around the root. You can use any valid CSS unit like px, em,
          rem, %, etc.
        </span>
        <br />
        <span>
          Since InfiniteScroll is implemented with IntersectionObserver, you can find more on{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            target="_blank"
            className="underline"
          >
            MDN
          </Link>
          .
        </span>
      </>
    ),
    type: 'string',
    default: '0px',
  },
  {
    prop: 'reverse',
    required: false,
    description:
      'Set this property to true means that InfiniteScroll will call next when the first item shows up in the viewport. This property is usually used to implement the chatbox behavior.',
    type: 'boolean',
    default: 'false',
  },
  {
    prop: 'children',
    required: false,
    description: 'The children of the InfiniteScroll component that user see on the screen.',
    type: 'ReactNode',
    default: 'undefined',
  },
];
