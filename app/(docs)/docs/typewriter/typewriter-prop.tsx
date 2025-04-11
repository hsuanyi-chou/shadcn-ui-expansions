import { Props } from '@/app/(docs)/docs/components/props-table/props-table';
import { InlineCode } from '@/components/ui/inline-code';

export const typewriterProp: Props[] = [
  {
    prop: 'text',
    required: false,
    default: 'string',
    description: (
      <>
        <p>Text to type.</p>
      </>
    ),
    type: 'string',
  },
  {
    prop: 'typeSpeed',
    required: false,
    default: '33',
    description: (
      <>
        <p>Speed of typing.</p>
      </>
    ),
    type: 'number',
  },
  {
    prop: 'renderMarkdown',
    required: false,
    description: (
      <>
        <p>Render markdown text.</p>
      </>
    ),
    type: `boolean`,
  },
  {
    prop: 'markdownComponents',
    required: false,
    description: (
      <>
        <p>
          Markdown components. Only works with renderMarkdown=<InlineCode>true</InlineCode>.
        </p>
      </>
    ),
    type: `Components`,
  },
  {
    prop: 'onComplete',
    required: false,
    description: (
      <>
        <p>Callback function when typing is complete.</p>
      </>
    ),
    type: `() => void`,
  },
  {
    prop: 'alwaysHideCursor',
    required: false,
    default: 'false',
    description: (
      <>
        <p>Hide cursor always.</p>
      </>
    ),
    type: 'boolean',
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
    prop: 'flashCursorClassName',
    required: false,
    description: (
      <>
        <p>Customize the style by adding tailwind.</p>
      </>
    ),
    type: 'string',
  },
];
