import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import { P } from '@/components/ui/heading-with-anchor';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import { PropLink } from '../components/props-table/prop-link';
import RateLimitDemo from './rate-limit-demo';

export const metadata: Metadata = baseMetadata({
  title: 'Rate Limit',
  description: 'Rate limit for Nextjs App Router',
});

const RateLimitPage = () => {
  return (
    <PageTemplate
      title="Rate Limit for Nextjs App Router"
      description="A rewrite version of rate limit for Nextjs App Router"
    >
      <PageSubTitle>About</PageSubTitle>
      <P className="text-muted-foreground">
        This is a rewrite version for Nextjs App Router. If you are using Page Router, Simply use{' '}
        <PropLink
          href="https://github.com/vercel/next.js/tree/canary/examples/api-routes-rate-limit"
          target="_blank"
        >
          the vercel version
        </PropLink>
        .
      </P>

      <PreviewCodeCard path="app/(docs)/docs/rate-limit/rate-limit-demo.tsx">
        <RateLimitDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers withInstall codePath="lib/rate-limit.ts" withEnd />
    </PageTemplate>
  );
};

export default RateLimitPage;
