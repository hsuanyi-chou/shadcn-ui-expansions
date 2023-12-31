import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import AutosizeTextareaDemo from '@/app/(docs)/docs/autosize-textarea/autosize-textarea-demo';
import Usage from '@/app/(docs)/docs/components/usage';
import AutosizeTextareaWithMaxHeight from '@/app/(docs)/docs/autosize-textarea/usage/autosize-textarea-with-max-height';
import AutosizeTextareaWithForm from '@/app/(docs)/docs/autosize-textarea/usage/autosize-textarea-with-form';

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
        title="Form"
        path="app/(docs)/docs/autosize-textarea/usage/autosize-textarea-with-form.tsx"
      >
        <AutosizeTextareaWithForm />
      </Usage>
    </PageTemplate>
  );
};

export default AutosizeTextareaPage;
