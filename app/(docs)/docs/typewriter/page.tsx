import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import { InlineCode } from '@/components/ui/inline-code';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import CodeHighlight from '../components/code-card/parts/code-highlight';
import { PropLink } from '../components/props-table/prop-link';
import { PropsTable } from '../components/props-table/props-table';
import Usage from '../components/usage';
import TypewriterDemo from './typewriter-demo';
import { typewriterProp } from './typewriter-prop';
import TypewriterChatGPT from './usage/typewriter-chatgpt';
import TypewriterMd from './usage/typewriter-md';

export const metadata: Metadata = baseMetadata({
  title: 'Typewriter',
  description: 'Typewriter effect for text. Supports html and markdown.',
});

const TypewriterPage = () => {
  return (
    <PageTemplate
      title="Typewriter"
      description="Typewriter effect for text. Supports html and markdown."
    >
      <PreviewCodeCard path="app/(docs)/docs/typewriter/typewriter-demo.tsx">
        <TypewriterDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        installScript="npm install react-markdown"
        codePath="components/ui/typewriter.tsx"
        withEnd
        steps={[
          {
            title: 'Copy following animation to tailwind.config.js',
            children: (
              <div>
                <CodeHighlight code={TAILWIND_ANIMATION}></CodeHighlight>
              </div>
            ),
          },
        ]}
      />
      <Usage
        title="Markdown"
        path="app/(docs)/docs/typewriter/usage/typewriter-md.tsx"
        description={
          <>
            <p className="text-muted-foreground">
              Following markdown style is using{' '}
              <PropLink
                href="https://github.com/tailwindlabs/tailwindcss-typography"
                target="_blank"
              >
                tailwindcss-typography
              </PropLink>
            </p>
          </>
        }
      >
        <TypewriterMd />
      </Usage>

      <Usage
        title="Playground for ChatGPT"
        description={
          <>
            <p className="text-muted-foreground">
              Here is the ChatGPT integration playground. Please enter your token to test.
              Don&apos;t worry, the API endpoint does not store your token. You can check the{' '}
              <PropLink
                href="https://github.com/hsuanyi-chou/shadcn-ui-expansions/blob/main/app/api/typewriter-chat-gpt-playground/route.ts"
                target="_blank"
              >
                API source code
              </PropLink>
              .
              <br />
              If you still have concerns, you can clone the project and test it locally.
              <br />
              Default is using <InlineCode>gpt-4o-mini</InlineCode> model.
            </p>
          </>
        }
        path="app/(docs)/docs/typewriter/usage/typewriter-chatgpt.tsx"
      >
        <TypewriterChatGPT />
      </Usage>
      <PropsTable props={typewriterProp} />
    </PageTemplate>
  );
};

const TAILWIND_ANIMATION = `
      keyframes: {
        'blink-caret': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      'blink-caret': {
        '0%, 100%': { opacity: '0' },
        '50%': { opacity: '1' },
      },
`;

export default TypewriterPage;
