import React from 'react';
import GroupMultipleSelector, { GroupOption } from '@/components/ui/group-multiple-selector';

const OPTIONS: GroupOption = {
  React: [
    { label: 'React', value: 'react' },
    { label: 'nextjs', value: 'nextjs' },
    { label: 'Remix', value: 'remix' },
  ],
  Vue: [
    { label: 'Vite', value: 'vite' },
    { label: 'Nuxt', value: 'nuxt' },
    { label: 'Vue', value: 'vue' },
  ],
};

const GroupMultipleSelectorDisabled = () => {
  return (
    <div className="w-full px-10">
      <GroupMultipleSelector
        value={[
          { label: 'React', value: 'react' },
          { label: 'Vue', value: 'vue' },
        ]}
        options={OPTIONS}
        disabled
        hidePlaceholderWhenSelected
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

export default GroupMultipleSelectorDisabled;
