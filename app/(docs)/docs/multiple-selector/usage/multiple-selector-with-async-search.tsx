'use client';
import React from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { InlineCode } from '@/components/ui/inline-code';

const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'Nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember' },
  { label: 'Gatsby', value: 'gatsby' },
  { label: 'Astro', value: 'astro' },
];

const mockSearch = async (value: string): Promise<Option[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = OPTIONS.filter((option) => option.value.includes(value));
      resolve(res);
    }, 1000);
  });
};

const MultipleSelectorWithAsyncSearch = () => {
  const [options, setOptions] = React.useState<Option[]>([]);
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
          setOptions(res);
          setIsTriggered(false);
        }}
        options={options}
        placeholder="Select frameworks you like..."
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

export default MultipleSelectorWithAsyncSearch;
