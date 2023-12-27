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
import GroupMultipleSelectorDemo from '@/app/(docs)/docs/group-multiple-selector/group-multiple-selector-demo';
import GroupMultipleSelectorDisabled from '@/app/(docs)/docs/group-multiple-selector/usage/group-multiple-selector-disabled';
import GroupMultipleSelectorWithDisabledOption from '@/app/(docs)/docs/group-multiple-selector/usage/group-multiple-selector-with-disable-option';

export const metadata: Metadata = baseMetadata({
  title: 'Group Multiple Selector',
  description:
    'Fast,composable, unstyled, full featured multiple group selector for React. such as async search with debounce, max selected ...etc.',
});

const GroupMultipleSelectorPage = () => {
  return (
    <PageTemplate
      title="Group Multiple Selector"
      description="Fast, composable, unstyled, full featured group multiple selector for React."
    >
      <ReferenceBorder>
        <Reference href="https://ui.shadcn.com/docs/components/command" />
        <Reference href="https://github.com/pacocoursey/cmdk" text="cmdk" />
      </ReferenceBorder>

      <PageSubTitle>About</PageSubTitle>
      <P className="text-muted-foreground">
        This component is almost the same as{' '}
        <PropLink href="/docs/multiple-selector" target={null}>
          <InlineCode>Multiple Selector</InlineCode>
        </PropLink>
        .
      </P>
      <P className="text-muted-foreground">
        The only difference is that options type uses <InlineCode>object</InlineCode> called{' '}
        <InlineCode>GroupOption</InlineCode>. It uses <InlineCode>key</InlineCode> to group options.
        Rest of the props are the same.
      </P>

      <PreviewCodeCard path="app/(docs)/docs/group-multiple-selector/group-multiple-selector-demo.tsx">
        <GroupMultipleSelectorDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="components/ui/group-multiple-selector.tsx"
        installScript="npx shadcn-ui@latest add command badge"
        withEnd
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage
        title="Disable Option"
        path="app/(docs)/docs//group-multiple-selector/usage/group-multiple-selector-with-disable-option.tsx"
      >
        <GroupMultipleSelectorWithDisabledOption />
      </Usage>
      <Usage
        title="Disabled"
        path="app/(docs)/docs/group-multiple-selector/usage/group-multiple-selector-disabled.tsx"
      >
        <GroupMultipleSelectorDisabled />
      </Usage>
      {/*<Usage*/}
      {/*  title="Controlled Component"*/}
      {/*  path="app/(docs)/docs//group-multiple-selector/usage/group-multiple-selector-controlled.tsx"*/}
      {/*>*/}
      {/*  <MultipleSelectorControlled />*/}
      {/*</Usage>*/}
      {/*<Usage*/}
      {/*  title="Async Search with Debounce"*/}
      {/*  description={*/}
      {/*    <>*/}
      {/*      <P className="text-muted-foreground">*/}
      {/*        The async search is debounced by default. The delay time is 500ms if you do not*/}
      {/*        provide it.*/}
      {/*      </P>*/}
      {/*      <P className="text-muted-foreground">*/}
      {/*        You can provide <InlineCode>delay</InlineCode> to customize the time.*/}
      {/*      </P>*/}
      {/*    </>*/}
      {/*  }*/}
      {/*  path="app/(docs)/docs//group-multiple-selector/usage/group-multiple-selector-with-async-search.tsx"*/}
      {/*>*/}
      {/*  <MultipleSelectorWithAsyncSearch />*/}
      {/*</Usage>*/}
      {/*<Usage*/}
      {/*  title="Max Selected"*/}
      {/*  description={*/}
      {/*    <P className="text-muted-foreground">*/}
      {/*      Following example is set to 3. The default of max selected is{' '}*/}
      {/*      <InlineCode>Number.MAX_SAFE_INTEGER</InlineCode>*/}
      {/*    </P>*/}
      {/*  }*/}
      {/*  path="app/(docs)/docs//group-multiple-selector/usage/group-multiple-selector-max-selected.tsx"*/}
      {/*>*/}
      {/*  <MultipleSelectorWithMaxSelected />*/}
      {/*</Usage>*/}
      {/*<Usage*/}
      {/*  title="Hide Placeholder When Selected"*/}
      {/*  description={*/}
      {/*    <>*/}
      {/*      <P className="text-muted-foreground">*/}
      {/*        If you would like to work as a normal input that hide the placeholder when there are*/}
      {/*        options selected.*/}
      {/*      </P>*/}
      {/*      <P className="text-muted-foreground">*/}
      {/*        Just set <InlineCode>hidePlaceholderWhenSelected</InlineCode> to{' '}*/}
      {/*        <InlineCode>true</InlineCode>*/}
      {/*      </P>*/}
      {/*    </>*/}
      {/*  }*/}
      {/*  path="app/(docs)/docs//group-multiple-selector/usage/group-multiple-selector-no-placeholder-when-selected.tsx"*/}
      {/*>*/}
      {/*  <MultipleSelectorNoPlaceholderWhenSelected />*/}
      {/*</Usage>*/}
      {/*<Usage*/}
      {/*  title="Form"*/}
      {/*  path="app/(docs)/docs//group-multiple-selector/usage/group-multiple-selector-with-form.tsx"*/}
      {/*>*/}
      {/*  <MultipleSelectorWithForm />*/}
      {/*</Usage>*/}

      {/*<PropsTable props={multipleSelectorProp} />*/}
    </PageTemplate>
  );
};

export default GroupMultipleSelectorPage;
