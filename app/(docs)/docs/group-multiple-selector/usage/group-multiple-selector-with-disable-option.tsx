import React from 'react';
import GroupMultipleSelector, { GroupOption } from '@/components/ui/group-multiple-selector';

const OPTIONS: GroupOption = {
  React: [
    { label: 'React', value: 'react', disable: true },
    { label: 'nextjs', value: 'nextjs' },
    { label: 'Remix', value: 'remix' },
  ],
  Vue: [
    { label: 'Vite', value: 'vite' },
    { label: 'Nuxt', value: 'nuxt' },
    { label: 'Vue', value: 'vue', disable: true },
  ],
};

const GroupMultipleSelectorWithDisabledOption = () => {
  return (
    <div className="flex w-full flex-col gap-5 px-10">
      <GroupMultipleSelector
        options={OPTIONS}
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

export default GroupMultipleSelectorWithDisabledOption;
