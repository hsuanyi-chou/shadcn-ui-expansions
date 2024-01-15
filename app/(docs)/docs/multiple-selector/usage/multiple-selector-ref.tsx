'use client';
import React from 'react';
import MultipleSelector, { MultipleSelectorRef, Option } from '@/components/ui/multiple-selector';
import { LoadingButton } from '@/components/ui/loading-button';
import { toast } from '@/components/ui/use-toast';

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

const MultipleSelectorRef = () => {
  const ref = React.useRef<MultipleSelectorRef>(null);

  /**
   * An example for focus on input when component mounted.
   * I commented it out because it will affect the demo page.
   **/
  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.input.focus();
  //   }
  // }, []);

  return (
    <div className="w-full px-10">
      <MultipleSelector
        defaultOptions={OPTIONS}
        ref={ref}
        placeholder="Select frameworks you like..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
      <div className="flex gap-3">
        <LoadingButton
          onClick={() => {
            toast({
              title: 'Your ref data',
              description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                  <code className="text-white">
                    {JSON.stringify(ref.current?.selectedValue, null, 2)}
                  </code>
                </pre>
              ),
            });
          }}
        >
          get value from ref
        </LoadingButton>
        <LoadingButton
          onClick={() => {
            ref.current?.input.focus();
          }}
        >
          focus on multiple selector
        </LoadingButton>
      </div>
    </div>
  );
};

export default MultipleSelectorRef;
