'use client';
import React, { useState } from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { LoadingButton } from '@/components/ui/loading-button';

const REACT_OPTIONS: Option[] = [
  { label: 'nextjs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'shadcn-ui', value: 'shadcn-ui' },
  { label: 'MUI', value: 'mui' },
  { label: 'Ant Design', value: 'antDesign' },
];

const VUE_OPTIONS: Option[] = [
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Vuetify', value: 'vuetify' },
  { label: 'Quasar', value: 'quasar' },
];

const MultipleSelectorManuallyRenewOptions = () => {
  const [options, setOptions] = useState<Option[]>(REACT_OPTIONS);
  const [placeholder, setPlaceholder] = useState('Which framework do you want to use for react?');
  const [toggle, setToggle] = useState('react');
  return (
    <div className="w-full px-10">
      <MultipleSelector
        options={options}
        placeholder={placeholder}
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
      <div className="flex gap-3">
        <LoadingButton
          onClick={() => {
            if (toggle === 'react') {
              setOptions(VUE_OPTIONS);
              setPlaceholder('Which framework do you want to use for vue?');
              setToggle('vue');
            } else {
              setOptions(REACT_OPTIONS);
              setPlaceholder('Which framework do you want to use for react?');
              setToggle('react');
            }
          }}
        >
          manually renew options
        </LoadingButton>
      </div>
    </div>
  );
};

export default MultipleSelectorManuallyRenewOptions;
