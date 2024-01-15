import React from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';

const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'Nextjs' },
  { label: 'Vite', value: 'vite', disable: true },
  { label: 'Nuxt', value: 'nuxt', disable: true },
  { label: 'Vue', value: 'vue, disable: true', disable: true },
  { label: 'Remix', value: 'remix' },
  { label: 'Svelte', value: 'svelte', disable: true },
  { label: 'Angular', value: 'angular', disable: true },
  { label: 'Ember', value: 'ember', disable: true },
  { label: 'React', value: 'react' },
  { label: 'Gatsby', value: 'gatsby', disable: true },
  { label: 'Astro', value: 'astro', disable: true },
];

const MultipleSelectorWithDisabledOption = () => {
  return (
    <div className="flex w-full flex-col gap-5 px-10">
      <MultipleSelector
        defaultOptions={OPTIONS}
        placeholder="Select frameworks you like..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
    </div>
  );
};

export default MultipleSelectorWithDisabledOption;
