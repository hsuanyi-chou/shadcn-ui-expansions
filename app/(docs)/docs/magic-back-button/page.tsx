import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import MagicBackButtonDemo from '@/app/(docs)/docs/magic-back-button/magic-back-button-demo';
import { P } from '@/components/ui/heading-with-anchor';
import { InlineCode } from '@/components/ui/inline-code';
import { PropLink } from '@/app/(docs)/docs/components/props-table/prop-link';
import Usage from '@/app/(docs)/docs/components/usage';
import MagicBackButtonBackLink from '@/app/(docs)/docs/magic-back-button/usage/magic-back-button-back-link';
import { Reference, ReferenceBorder } from '@/app/(docs)/docs/components/reference';
import CodeHighlight from '@/app/(docs)/docs/components/code-card/parts/code-highlight';

export const metadata: Metadata = baseMetadata({
  title: 'Infinite Scroll',
  description:
    'Redirects first-time visitors to the homepage; otherwise, respects browser history.',
});

const MagicBackButtonPage = () => {
  return (
    <PageTemplate
      title="Magic Back Button"
      description="Redirects first-time visitors to the homepage; otherwise, respects browser history."
    >
      <ReferenceBorder>
        <Reference href="https://ui.shadcn.com/docs/components/button" />
        <Reference href="https://react-page-tracker.typeart.cc/" text="React Page Tracker" />
      </ReferenceBorder>

      <PageSubTitle>About</PageSubTitle>
      <P className="text-muted-foreground">
        The Magic Back button is designed to prevent users from unintentionally leaving your site.
        When a user directly visits a page with a back button (i.e., their first visit), clicking
        the button will redirect them to the homepage. However, if they navigate to the page from
        another part of the site, the button respects the browser's history and behaves like a
        normal back button, without disrupting the browser's history records.
        <br />
        <br />
        This component is built on top of{' '}
        <PropLink href="https://react-page-tracker.typeart.cc/">
          <InlineCode>React Page Tracker</InlineCode>
        </PropLink>
        . before using this component, please following the{' '}
        <PropLink href="https://react-page-tracker.typeart.cc/docs/nextjs">
          <InlineCode>installation</InlineCode>
        </PropLink>
        .
      </P>
      <PreviewCodeCard path="app/(docs)/docs/magic-back-button/magic-back-button-demo.tsx">
        <MagicBackButtonDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        installScript="npx shadcn@latest add button"
        codePath="components/ui/magic-back-button.tsx"
        steps={[
          {
            title: 'npm i react-page-tracker',
            children: (
              <div className="text-xl text-primary">
                Following the
                <PropLink href="https://react-page-tracker.typeart.cc/docs/nextjs">
                  <InlineCode className="text-xl">installation</InlineCode>
                </PropLink>{' '}
                to use the package. <br />
                <br />
                Simply import <InlineCode className="text-xl">PageTracker</InlineCode> in your root
                layout.
                <CodeHighlight
                  code={`
import { PageTracker } from 'react-page-tracker';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
+        <PageTracker />
        {children}
      </body>
    </html>)
}`}
                  withExpand
                />
              </div>
            ),
          },
        ]}
        withEnd
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage
        title="Custom your back link"
        path="app/(docs)/docs/magic-back-button/usage/magic-back-button-back-link.tsx"
      >
        <MagicBackButtonBackLink />
      </Usage>
    </PageTemplate>
  );
};

export default MagicBackButtonPage;
