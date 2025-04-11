import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import CodeHighlight from '../components/code-card/parts/code-highlight';
import { PropsTable } from '../components/props-table/props-table';
import TypewriterDemo from './typewriter-demo';
import { typewriterProp } from './typewriter-prop';

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
