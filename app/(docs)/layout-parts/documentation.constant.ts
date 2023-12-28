interface Documentation {
  groupKey: string;
  groupValue: string;
  children: DocumentationChild[];
}

interface DocumentationChild {
  label: string;
  value: string;
  url: string;
}

export const DOCS: Documentation[] = [
  {
    groupKey: 'gettingStart',
    groupValue: 'Getting Started',
    children: [
      {
        label: 'Introduction',
        value: 'introduction',
        url: '/docs',
      },
    ],
  },
  {
    groupKey: 'components',
    groupValue: 'Components',
    children: [
      {
        label: 'Autosize Textarea',
        value: 'autosize-textarea',
        url: '/docs/autosize-textarea',
      },
      { label: 'Blockquote', value: 'blockquote', url: '/docs/blockquote' },
      {
        label: 'Heading With Anchor',
        value: 'heading-with-anchor',
        url: '/docs/heading-with-anchor',
      },
      { label: 'Infinite Scroll', value: 'infiniteScroll', url: '/docs/infinite-scroll' },
      {
        label: 'Loading Button',
        value: 'loading-button',
        url: '/docs/loading-button',
      },
      { label: 'Multiple Selector', value: 'multipleSelector', url: '/docs/multiple-selector' },
    ],
  },
];
