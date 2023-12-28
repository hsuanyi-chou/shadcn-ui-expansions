import React from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';

const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'Nextjs', group: 'React' },
  { label: 'React', value: 'react', group: 'React' },
  { label: 'Remix', value: 'remix', group: 'React' },
  { label: 'Vite', value: 'vite', group: 'Vue' },
  { label: 'Nuxt', value: 'nuxt', group: 'Vue' },
  { label: 'Vue', value: 'vue', group: 'Vue' },
];

const MultipleSelectorWithGroup = () => {
  return (
    <div className="w-full px-10">
      <MultipleSelector
        options={OPTIONS}
        placeholder="Select frameworks you like..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
        groupBy="group"
      />
    </div>
  );
};

export default MultipleSelectorWithGroup;
