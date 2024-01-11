import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import AutosizeTextareaDemo from '@/app/(docs)/docs/autosize-textarea/autosize-textarea-demo';
import Usage from '@/app/(docs)/docs/components/usage';
import AutosizeTextareaWithMaxHeight from '@/app/(docs)/docs/autosize-textarea/usage/autosize-textarea-with-max-height';
import AutosizeTextareaCustomize from '@/app/(docs)/docs/autosize-textarea/usage/autosize-textarea-customize';
import AutosizeTextareaWithRef from '@/app/(docs)/docs/autosize-textarea/usage/autosize-textarea-with-ref';
import AutosizeTextareaForm from '@/app/(docs)/docs/autosize-textarea/usage/autosize-textarea-form';
import { InlineCode } from '@/components/ui/inline-code';
import { P } from '@/components/ui/heading-with-anchor';

export const metadata: Metadata = baseMetadata({
  title: 'Autosize Textarea',
  description: 'auto resize textarea height based on content.',
});

const AutosizeTextareaPage = () => {
  return (
    <PageTemplate
      title="Autosize Textarea"
      description="Auto resize textarea height based on content."
    >
      <PreviewCodeCard path="app/(docs)/docs/autosize-textarea/autosize-textarea-demo.tsx">
        <AutosizeTextareaDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall codePath="components/ui/autosize-textarea.tsx" withEnd />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage
        title="Max height"
        path="app/(docs)/docs/autosize-textarea/usage/autosize-textarea-with-max-height.tsx"
      >
        <AutosizeTextareaWithMaxHeight />
      </Usage>
      <Usage
        title="ref"
        path="app/(docs)/docs/autosize-textarea/usage/autosize-textarea-with-ref.tsx"
      >
        <AutosizeTextareaWithRef />
      </Usage>
      <Usage title="Form" path="app/(docs)/docs/autosize-textarea/usage/autosize-textarea-form.tsx">
        <AutosizeTextareaForm />
      </Usage>
      <Usage
        title="Customize"
        description={
          <>
            <P className="text-muted-foreground">
              This is an example that you can use the hook{' '}
              <InlineCode>useAutosizeTextArea()</InlineCode> to create your own textarea to match
              your needs.
            </P>
            <P className="text-muted-foreground">
              In this example, we use <InlineCode>react-hook-form</InlineCode> and{' '}
              <InlineCode>shadcn-ui Textarea</InlineCode> to fully control your customize textarea.
            </P>
          </>
        }
        path="app/(docs)/docs/autosize-textarea/usage/autosize-textarea-customize.tsx"
      >
        <AutosizeTextareaCustomize />
      </Usage>
    </PageTemplate>
  );
};

export default AutosizeTextareaPage;
