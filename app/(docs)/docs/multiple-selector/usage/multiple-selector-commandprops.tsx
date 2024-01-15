'use client';
import React, { useState } from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { InlineCode } from '@/components/ui/inline-code';

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

const MultipleSelectorCommandProps = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="flex w-full flex-col gap-5 px-10">
      <p>
        Is focus? <InlineCode>{String(isFocus)}</InlineCode>
      </p>
      <p>
        You can open console and search <InlineCode>command description</InlineCode> and{' '}
        <InlineCode>input description</InlineCode> to check the customization of{' '}
        <InlineCode>aria-description</InlineCode>.
      </p>
      <MultipleSelector
        defaultOptions={OPTIONS}
        placeholder="Select frameworks you like..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
        commandProps={{ 'aria-description': 'command description' }}
        inputProps={{
          onBlur: () => {
            setIsFocus(false);
          },
          onFocus: () => {
            setIsFocus(true);
          },
          'aria-description': 'input description',
        }}
      />
    </div>
  );
};

export default MultipleSelectorCommandProps;
