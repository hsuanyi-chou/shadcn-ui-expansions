import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import CodeHighlight from '../components/code-card/parts/code-highlight';
import { PropLink } from '../components/props-table/prop-link';
import { PropsTable } from '../components/props-table/props-table';
import Usage from '../components/usage';
import TypewriterDemo from './typewriter-demo';
import { typewriterProp } from './typewriter-prop';
import TypewriterHideCursor from './usage/typewriter-hide-cursor';
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
      <Usage title="Hide Cursor" path="app/(docs)/docs/typewriter/usage/typewriter-hide-cursor.tsx">
        <TypewriterHideCursor />
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
