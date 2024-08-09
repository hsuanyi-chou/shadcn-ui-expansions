import { Props } from '@/app/(docs)/docs/components/props-table/props-table';
import React from 'react';
import { InlineCode } from '@/components/ui/inline-code';
import { PropLink } from '@/app/(docs)/docs/components/props-table/prop-link';

const OptionTypeInfo = () => (
  <>
    <p>
      Option:{' '}
      <InlineCode>
        {'\u007B'} value: string; label: string; disable?: boolean; fixed?: boolean; [key:string]:
        string | undefined; {'\u007D'}
      </InlineCode>
      .
    </p>
    <p>
      The <InlineCode>[key:string]: string | undefined</InlineCode> is for you to customize{' '}
      <InlineCode> groupBy</InlineCode>
      field.
    </p>
  </>
);

const MultipleSelectorRefInfo = () => (
  <>
    <p>
      MultipleSelectorRef:{' '}
      <InlineCode>
        {'\u007B'} selectedValue: Option[]; input: HTMLInputElement {'\u007D'}
      </InlineCode>
      .
    </p>
  </>
);

export const multipleSelectorProp: Props[] = [
  {
    prop: 'value',
    required: false,
    description: (
      <>
        <p>Selected Value.</p>
      </>
    ),
    type: 'Option[]',
    typeInfo: <OptionTypeInfo />,
    default: '[]',
  },
  {
    prop: 'defaultOptions',
    required: false,
    description: (
      <>
        <p>The dropdown options for most case.</p>
      </>
    ),
    type: 'Option[]',
    typeInfo: <OptionTypeInfo />,
    default: '[]',
  },
  {
    prop: 'options',
    required: false,
    description: (
      <>
        <p>
          The dropdown options that you can control yourself. In most case,{' '}
          <InlineCode>defaultOptions</InlineCode> is a better choice.
        </p>
      </>
    ),
    type: 'Option[]',
    typeInfo: <OptionTypeInfo />,
  },
  {
    prop: 'placeholder',
    required: false,
    description: (
      <>
        <p>The input placeholder.</p>
      </>
    ),
    type: 'string',
    default: ' ',
  },
  {
    prop: 'hidePlaceholderWhenSelected',
    required: false,
    description: (
      <>
        <p>Hide the placeholder when there are options selected.</p>
      </>
    ),
    type: 'boolean',
    default: 'false',
  },
  {
    prop: 'onChange',
    required: false,
    description: (
      <>
        <p>
          When you select or remove an option, the <InlineCode>onChange</InlineCode> will be called.
        </p>
      </>
    ),
    type: '(options: Option[]) => void',
    typeInfo: <OptionTypeInfo />,
  },
  {
    prop: 'disabled',
    required: false,
    description: (
      <>
        <p>disabled select.</p>
      </>
    ),
    type: 'boolean',
    default: 'false',
  },
  {
    prop: 'delay',
    required: false,
    description: (
      <>
        <p>
          The debounce time. only works with <InlineCode>onSearch</InlineCode>.
        </p>
      </>
    ),
    type: 'number',
    default: '500',
  },
  {
    prop: 'triggerSearchOnFocus',
    required: false,
    description: (
      <>
        <p>
          Only works with <InlineCode>onSearch</InlineCode> prop. Trigger search when{' '}
          <InlineCode>onFocus</InlineCode>.
        </p>
        <p>
          For example, when user click on the input, it will trigger the search to get initial
          options.
        </p>
      </>
    ),
    type: 'boolean',
    default: 'false',
  },
  {
    prop: 'onSearch',
    required: false,
    description: (
      <>
        <p>
          Load options from a remote source when user types. You can provide{' '}
          <InlineCode>delay</InlineCode> to set debounce time.
        </p>
      </>
    ),
    type: '(value: string) => Promise<Option[]>',
    typeInfo: <OptionTypeInfo />,
  },
  {
    prop: 'onSearchSync',
    required: false,
    description: (
      <>
        <p>
          Load options from a local source when user types. This will not show{' '}
          <InlineCode>loadingIndicator</InlineCode> even if you provide it. The rest props are the
          same as async search. i.e.: <InlineCode>creatable</InlineCode>,{' '}
          <InlineCode>groupBy</InlineCode>, <InlineCode>delay</InlineCode>.
        </p>
      </>
    ),
    type: '(value: string) => Option[]',
    typeInfo: <OptionTypeInfo />,
  },
  {
    prop: 'creatable',
    required: false,
    description: (
      <>
        <p>Create option when there is no option matched.</p>
      </>
    ),
    type: 'boolean',
    default: 'false',
  },
  {
    prop: 'groupBy',
    required: false,
    description: (
      <>
        <p>Group the options base on provided key.</p>
      </>
    ),
    type: 'string',
  },
  {
    prop: 'maxSelected',
    required: false,
    description: (
      <>
        <p>Limit the maximum number of selected options.</p>
      </>
    ),
    type: 'number',
    default: 'Number.MAX_SAFE_INTEGER',
  },
  {
    prop: 'onMaxSelected',
    required: false,
    description: (
      <>
        <p>
          When the number of selected options exceeds the limit, the{' '}
          <InlineCode>onMaxSelected</InlineCode> will be called.
        </p>
      </>
    ),
    type: '(maxLimit: number) => void',
  },
  {
    prop: 'loadingIndicator',
    required: false,
    description: (
      <>
        <p>
          Show the loading component when <InlineCode>onSearch</InlineCode> is not finished.
        </p>
      </>
    ),
    type: 'ReactNode',
  },
  {
    prop: 'emptyIndicator',
    required: false,
    description: (
      <>
        <p>Show the empty component when there is no options.</p>
      </>
    ),
    type: 'ReactNode',
  },
  {
    prop: 'selectFirstItem',
    required: false,
    description: (
      <>
        <p>
          First item selected is a default behavior by{' '}
          <PropLink href="https://github.com/pacocoursey/cmdk">
            <InlineCode>cmdk</InlineCode>
          </PropLink>
          . That is why the default is <InlineCode>true</InlineCode>.
        </p>
        <p>This is a workaround solution by add a dummy item.</p>
        <p>
          Learn more about the{' '}
          <PropLink href="https://github.com/pacocoursey/cmdk/issues/171">
            <InlineCode>issue</InlineCode>
          </PropLink>
          .
        </p>
      </>
    ),
    type: 'boolean',
    default: 'true',
  },
  {
    prop: 'className',
    required: false,
    description: (
      <>
        <p>Customize the style by adding tailwind.</p>
      </>
    ),
    type: 'string',
  },
  {
    prop: 'badgeClassName',
    required: false,
    description: (
      <>
        <p>Customize the style by adding tailwind for the selected options (badge).</p>
      </>
    ),
    type: 'string',
  },
  {
    prop: 'ref',
    required: false,
    description: (
      <>
        <p>Pass a ref to the input element and retrieve the selected value as well.</p>
      </>
    ),
    type: 'React.RefObject<MultipleSelectorRef>',
    typeInfo: <MultipleSelectorRefInfo />,
  },
  {
    prop: 'commandProps',
    required: false,
    description: (
      <>
        <p>
          props of <InlineCode>Command</InlineCode>
        </p>
      </>
    ),
    type: 'React.ComponentPropsWithoutRef<typeof Command>',
  },
  {
    prop: 'inputProps',
    required: false,
    description: (
      <>
        <p>
          props of <InlineCode>CommandInput</InlineCode>
        </p>
      </>
    ),
    type: "Omit<React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>,'value' | 'placeholder' | 'disabled' >",
  },
  {
    prop: 'hideClearAllButton',
    required: false,
    description: (
      <>
        <p>
          Hide the <InlineCode>Clear All</InlineCode> button.
        </p>
      </>
    ),
    type: 'boolean',
  },
];
