'use client';
import React from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { H4 } from '@/components/ui/heading-with-anchor';

const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'nextjs' },
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

const GROUP_OPTIONS: Option[] = [
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

const mockSearch = (value: string): Option[] => {
  return OPTIONS.filter((option) => option.value.includes(value));
};

const mockSearchGroup = (value: string): Option[] => {
  return GROUP_OPTIONS.filter((option) => option.value.includes(value));
};

const MultipleSelectorWithSyncSearch = () => {
  return (
    <div className="flex w-full flex-col gap-5 px-10">
      <H4>Sync search</H4>
      <MultipleSelector
        onSearchSync={(value) => {
          const res = mockSearch(value);
          return res;
        }}
        placeholder="trying to search 'a' to get more options..."
        emptyIndicator={
          <p className="w-full text-center text-lg leading-10 text-muted-foreground">
            no results found.
          </p>
        }
      />
      <H4>Creatable</H4>
      <MultipleSelector
        onSearchSync={(value) => {
          const res = mockSearch(value);
          return res;
        }}
        placeholder="trying to search 'a' to get more options..."
        creatable
        emptyIndicator={
          <p className="w-full text-center text-lg leading-10 text-muted-foreground">
            no results found.
          </p>
        }
      />

      <H4>GroupBy</H4>
      <MultipleSelector
        onSearchSync={(value) => {
          const res = mockSearchGroup(value);
          return res;
        }}
        placeholder="trying to search 'a' to get more options..."
        groupBy="group"
        creatable
        emptyIndicator={
          <p className="w-full text-center text-lg leading-10 text-muted-foreground">
            no results found.
          </p>
        }
      />

      <H4>Debounce</H4>
      <MultipleSelector
        onSearchSync={(value) => {
          const res = mockSearch(value);
          return res;
        }}
        placeholder="trying to search 'a' to get more options..."
        delay={1000}
        emptyIndicator={
          <p className="w-full text-center text-lg leading-10 text-muted-foreground">
            no results found.
          </p>
        }
      />
    </div>
  );
};

export default MultipleSelectorWithSyncSearch;
