import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import TypewriterDemo from './typewriter-demo';

export const metadata: Metadata = baseMetadata({
  title: 'Typewriter',
  description: 'Typewriter effect for text',
});

const TypewriterPage = () => {
  return (
    <PageTemplate title="Typewriter" description="Typewriter effect for text">
      <PreviewCodeCard path="app/(docs)/docs/typewriter/typewriter-demo.tsx">
        <TypewriterDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall codePath="components/ui/typewriter.tsx" withEnd />
    </PageTemplate>
  );
};

export default TypewriterPage;
