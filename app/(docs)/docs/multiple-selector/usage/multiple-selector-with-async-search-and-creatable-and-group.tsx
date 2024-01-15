'use client';
import React from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { InlineCode } from '@/components/ui/inline-code';

const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'nextjs', group: 'React' },
  { label: 'React', value: 'react', group: 'React' },
  { label: 'Remix', value: 'remix', group: 'React' },
  { label: 'shadcn-ui', value: 'shadcn-ui', group: 'React' },
  { label: 'mui', value: 'mui', group: 'React' },
  { label: 'Vite', value: 'vite', group: 'Vue' },
  { label: 'Nuxt', value: 'nuxt', group: 'Vue' },
  { label: 'Vue', value: 'vue', group: 'Vue' },
  { label: 'Quasar', value: 'quasar', group: 'Vue' },
  { label: 'Angular', value: 'angular', group: 'Angular' },
  { label: 'Material UI', value: 'material-ui', group: 'Angular' },
  { label: 'Ng-zorro', value: 'ng-zorro', group: 'Angular' },
];

const mockSearch = async (value: string): Promise<Option[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = OPTIONS.filter((option) => option.value.includes(value));
      resolve(res);
    }, 1000);
  });
};

const MultipleSelectorWithAsyncSearchAndCreatableAndGroup = () => {
  const [isTriggered, setIsTriggered] = React.useState(false);

  return (
    <div className="flex w-full flex-col gap-5 px-10">
      <p>
        Is request been triggered? <InlineCode>{String(isTriggered)}</InlineCode>
      </p>
      <MultipleSelector
        onSearch={async (value) => {
          setIsTriggered(true);
          const res = await mockSearch(value);
          setIsTriggered(false);
          return res;
        }}
        defaultOptions={[]}
        creatable
        groupBy="group"
        placeholder="trying to search 'a' to get more options..."
        loadingIndicator={
          <p className="py-2 text-center text-lg leading-10 text-muted-foreground">loading...</p>
        }
        emptyIndicator={
          <p className="w-full text-center text-lg leading-10 text-muted-foreground">
            no results found.
          </p>
        }
      />
    </div>
  );
};

export default MultipleSelectorWithAsyncSearchAndCreatableAndGroup;
