import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import { Reference, ReferenceBorder } from '@/app/(docs)/docs/components/reference';
import Usage from '@/app/(docs)/docs/components/usage';
import { P } from '@/components/ui/heading-with-anchor';
import { InlineCode } from '@/components/ui/inline-code';
import { PropLink } from '@/app/(docs)/docs/components/props-table/prop-link';
import MultipleSelectorDemo from '@/app/(docs)/docs/multiple-selector/multiple-selector-demo';
import MultipleSelectorControlled from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-controlled';
import MultipleSelectorWithDisabledOption from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-with-disable-option';
import MultipleSelectorWithAsyncSearch from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-with-async-search';
import MultipleSelectorWithMaxSelected from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-max-selected';
import { PropsTable } from '@/app/(docs)/docs/components/props-table/props-table';
import { multipleSelectorProp } from '@/app/(docs)/docs/multiple-selector/multiple-selector-prop';

export const metadata: Metadata = baseMetadata({
  title: 'Multiple Selector',
  description:
    'Fast,composable, unstyled, full featured multiple selector for React. such as async search with debounce, max selected ...etc.',
});

const LoadingButtonPage = () => {
  return (
    <PageTemplate
      title="Multiple Selector"
      description="Fast, composable, unstyled, full featured multiple selector for React."
    >
      <ReferenceBorder>
        <Reference href="https://ui.shadcn.com/docs/components/command" />
        <Reference href="https://github.com/pacocoursey/cmdk" text="cmdk" />
      </ReferenceBorder>

      <PageSubTitle>About</PageSubTitle>
      <P className="text-muted-foreground">
        This component is inspired by{' '}
        <PropLink href="https://craft.mxkaske.dev/post/fancy-multi-select">
          <InlineCode>Fancy Multi Select</InlineCode>
        </PropLink>{' '}
        and added some features such as async search(with debounce), max selected, disabled option
        ...etc.
      </P>
      <P className="text-muted-foreground">
        {' '}
        It is built on top of{' '}
        <PropLink href="https://github.com/pacocoursey/cmdk">
          <InlineCode>cmdk</InlineCode>
        </PropLink>{' '}
        package like <InlineCode>Command</InlineCode> component in shadcn-ui.
      </P>

      <PreviewCodeCard path="app/(docs)/docs/multiple-selector/multiple-selector-demo.tsx">
        <MultipleSelectorDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="components/ui/multiple-selector.tsx"
        installScript="npx shadcn-ui@latest add command badge"
        withEnd
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage
        title="Disable Option"
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-with-disable-option.tsx"
      >
        <MultipleSelectorWithDisabledOption />
      </Usage>
      <Usage
        title="Controlled Component"
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-controlled.tsx"
      >
        <MultipleSelectorControlled />
      </Usage>
      <Usage
        title="Async Search with Debounce"
        description={
          <>
            <P className="text-muted-foreground">
              The async search is debounced by default. The delay time is 500ms if you do not
              provide it.
            </P>
            <P className="text-muted-foreground">
              You can provide <InlineCode>delay</InlineCode> to customize the time.
            </P>
          </>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-with-async-search.tsx"
      >
        <MultipleSelectorWithAsyncSearch />
      </Usage>
      <Usage
        title="Max Selected"
        description={
          <P className="text-muted-foreground">
            Following example is set to 3. The default of max selected is{' '}
            <InlineCode>Number.MAX_SAFE_INTEGER</InlineCode>
          </P>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-max-selected.tsx"
      >
        <MultipleSelectorWithMaxSelected />
      </Usage>

      <PropsTable props={multipleSelectorProp} />
    </PageTemplate>
  );
};

export default LoadingButtonPage;
