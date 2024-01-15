import React from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';

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

const MultipleSelectorWithGroup = () => {
  return (
    <div className="w-full px-10">
      <MultipleSelector
        defaultOptions={OPTIONS}
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
