interface Documentation {
  groupKey: string;
  groupValue: string;
  children: DocumentationChild[];
}

interface DocumentationChild {
  key: string;
  value: string;
  url: string;
}

export const DOCS: Documentation[] = [
  {
    groupKey: 'gettingStart',
    groupValue: 'Getting Started',
    children: [
      {
        key: 'introduction',
        value: 'Introduction',
        url: '/docs',
      },
    ],
  },
  {
    groupKey: 'components',
    groupValue: 'Components',
    children: [
      {
        key: 'loadingButton',
        value: 'Loading Button',
        url: '/docs/loading-button',
      },
      { key: 'multipleSelect', value: 'Multiple Select', url: '/docs/multiple-select' },
      {
        key: 'groupMultipleSelect',
        value: 'Group Multiple Select',
        url: '/docs/group-multiple-select',
      },
      { key: 'infiniteScroll', value: 'Infinite Scroll', url: '/docs/infinite-scroll' },
      {
        key: 'autosizeTextarea',
        value: 'Autosize Textarea',
        url: '/docs/autosize-textarea',
      },
    ],
  },
];
