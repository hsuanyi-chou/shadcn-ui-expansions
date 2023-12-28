import { Props } from '@/app/(docs)/docs/components/props-table/props-table';
import React from 'react';
import { InlineCode } from '@/components/ui/inline-code';
import { PropLink } from '@/app/(docs)/docs/components/props-table/prop-link';

export const infiniteScrollProp: Props[] = [
  {
    prop: 'isLoading',
    required: true,
    description: (
      <>
        <p>
          If <InlineCode>isLoading</InlineCode> is true, infinite scroll will stop calling{' '}
          <InlineCode>next()</InlineCode> function to avoid duplicate calls.
        </p>
      </>
    ),
    type: 'boolean',
  },
  {
    prop: 'hasMore',
    required: true,
    description: (
      <>
        <p>
          If <InlineCode>hasMore</InlineCode> is false, infinite scroll will stop calling{' '}
          <InlineCode>next()</InlineCode> function.
        </p>
      </>
    ),
    type: 'boolean',
  },
  {
    prop: 'next',
    required: true,
    description: (
      <>
        <p>
          <InlineCode>next</InlineCode> Function to call when the user scrolls to the bottom of the{' '}
          <InlineCode>children</InlineCode> element.
        </p>
      </>
    ),
    type: '() => unknown',
  },
  {
    prop: 'threshold',
    required: false,
    description: (
      <>
        <p>
          The threshold is the number of pixels from the bottom of the element where the next
          function will be called.
        </p>
        <p>
          The range of threshold is <InlineCode>0 ~ 1</InlineCode>, and the default value is{' '}
          <InlineCode>1</InlineCode>.
        </p>
        <p>
          Since InfiniteScroll is implemented with IntersectionObserver, you can find more on{' '}
          <PropLink href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">
            MDN
          </PropLink>
          .
        </p>
      </>
    ),
    type: 'number',
    default: '1',
  },
  {
    prop: 'root',
    required: false,
    description: (
      <>
        <p>
          This property will be used as the viewport for checking visibility of the last or the
          first item. Must be the ancestor of the item. Defaults to the browser viewport.
        </p>
        <p>
          Since InfiniteScroll is implemented with IntersectionObserver, you can find more on{' '}
          <PropLink href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">
            MDN
          </PropLink>
          .
        </p>
      </>
    ),
    type: 'number',
    default: 'null',
  },
  {
    prop: 'rootMargin',
    required: false,
    description: (
      <>
        <p>
          The rootMargin is the margin around the root. You can use any valid CSS unit like px, em,
          rem, %, etc.
        </p>
        <p>
          Since InfiniteScroll is implemented with IntersectionObserver, you can find more on{' '}
          <PropLink href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">
            MDN
          </PropLink>
          .
        </p>
      </>
    ),
    type: 'string',
    default: '0px',
  },
  {
    prop: 'reverse',
    required: false,
    description: (
      <>
        <p>
          Set this property to true means that InfiniteScroll will call{' '}
          <InlineCode>next</InlineCode> when the first item shows up in the viewport. This property
          is usually used to implement the chatbox behavior.
        </p>
        <p>
          If your <InlineCode>next</InlineCode> function prepend the new data to the previous data,
          the first item will always show up on the top. This will cause InfiniteScroll continuously
          call next. Make sure write some code to prevent this circumstance.
        </p>
      </>
    ),

    type: 'boolean',
    default: 'false',
  },
  {
    prop: 'children',
    required: false,
    description: (
      <>
        This property is that user will see according to the
        <InlineCode>threshold</InlineCode> position and call <InlineCode>next</InlineCode> on the
        viewpoint.
      </>
    ),
    type: 'ReactNode',
    default: 'undefined',
  },
];
