'use client';
import React, { useState } from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';

const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember', disable: true },
  { label: 'Gatsby', value: 'gatsby', disable: true },
  { label: 'Astro', value: 'astro' },
];

const MultipleSelectorWithFixedOption = () => {
  const [value, setValue] = useState<Option[]>([
    { label: 'nextjs', value: 'nextjs', fixed: true },
    { label: 'React', value: 'react', fixed: true },
  ]);
  return (
    <div className="w-full px-10">
      <MultipleSelector
        value={value}
        onChange={setValue}
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

export default MultipleSelectorWithFixedOption;
