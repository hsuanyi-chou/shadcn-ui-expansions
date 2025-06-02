import { Props } from '@/app/(docs)/docs/components/props-table/props-table';
import { InlineCode } from '@/components/ui/inline-code';

export const interactiveStepperRootProps: Props[] = [
  {
    prop: 'className',
    required: false,
    description: <>Customize the style with additional Tailwind code.</>,
    type: 'string',
  },
  {
    prop: 'children',
    required: true,
    description: (
      <>
        The content of the stepper, usually one or more <InlineCode>StepperItem</InlineCode>{' '}
        components.
      </>
    ),
    type: 'React.ReactNode',
  },
  {
    prop: 'defaultValue',
    required: false,
    description: <>Sets the default active step index.</>,
    type: 'number',
    default: '0',
  },
  {
    prop: 'orientation',
    required: false,
    description: (
      <>
        Defines the orientation of the stepper. Can be <InlineCode>horizontal</InlineCode> or{' '}
        <InlineCode>vertical</InlineCode>.
      </>
    ),
    type: "'horizontal' | 'vertical'",
    default: 'horizontal',
  },
];

export const interactiveStepperItemProps: Props[] = [
  {
    prop: 'className',
    required: false,
    description: <>Customize the style with additional Tailwind code.</>,
    type: 'string',
  },
  {
    prop: 'children',
    required: true,
    description: <>The content inside the step item.</>,
    type: 'React.ReactNode',
  },
  {
    prop: 'completed',
    required: false,
    description: <>Marks the step as completed.</>,
    type: 'boolean',
    default: 'false',
  },
  {
    prop: 'disabled',
    required: false,
    description: <>Disables the step, preventing user interaction.</>,
    type: 'boolean',
    default: 'false',
  },
];

export const interactiveStepperIndicatorProps: Props[] = [
  {
    prop: 'className',
    required: false,
    description: <>Customize the style with additional Tailwind code.</>,
    type: 'string',
  },
];

export const interactiveStepperTriggerProps: Props[] = [
  {
    prop: 'className',
    required: false,
    description: <>Customize the style with additional Tailwind code.</>,
    type: 'string',
  },
  {
    prop: 'children',
    required: false,
    description: <>Content of the trigger, typically a button label or icon.</>,
    type: 'React.ReactNode',
  },
  {
    prop: 'onClick',
    required: false,
    description: <>Callback when the trigger is clicked.</>,
    type: 'callback',
  },
];

export const interactiveStepperTitleProps: Props[] = [
  {
    prop: 'className',
    required: false,
    description: <>Customize the style with additional Tailwind code.</>,
    type: 'string',
  },
  {
    prop: 'children',
    required: true,
    description: <>The title text for the step.</>,
    type: 'React.ReactNode',
  },
];

export const interactiveStepperDescriptionProps: Props[] = [
  {
    prop: 'className',
    required: false,
    description: <>Customize the style with additional Tailwind code.</>,
    type: 'string',
  },
  {
    prop: 'children',
    required: true,
    description: <>A short description for the step.</>,
    type: 'React.ReactNode',
  },
];

export const interactiveStepperSeparatorProps: Props[] = [
  {
    prop: 'className',
    required: false,
    description: <>Customize the style with additional Tailwind code.</>,
    type: 'string',
  },
];

export const interactiveStepperContentProps: Props[] = [
  {
    prop: 'className',
    required: false,
    description: <>Customize the style with additional Tailwind code.</>,
    type: 'string',
  },
  {
    prop: 'children',
    required: true,
    description: <>Content displayed for the active step.</>,
    type: 'React.ReactNode',
  },
  {
    prop: 'step',
    required: true,
    description: <>The index of the step this content belongs to.</>,
    type: 'number',
  },
];
