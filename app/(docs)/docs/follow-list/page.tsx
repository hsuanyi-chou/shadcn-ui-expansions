import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { PropsTable } from '@/app/(docs)/docs/components/props-table/props-table';
import Usage from '@/app/(docs)/docs/components/usage';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import FollowListDemo from './follow-list-demo';
import FollowListAsChild from './usage/follow-list-as-child';

export const metadata: Metadata = baseMetadata({
  title: 'Follow List',
  description: 'A component to display followers and following lists.',
});

const FollowListDocsPage = () => {
  return (
    <PageTemplate title="Follow List" description="A component to display followers and following lists.">
      <PreviewCodeCard path="app/(docs)/docs/follow-list/follow-list-demo.tsx">
        <FollowListDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="components/ui/follow-list-modal.tsx"
        withEnd
        installScript="npx shadcn@latest add scroll-area dialog"
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage path="app/(docs)/docs/follow-list/usage/follow-list-as-child.tsx" title="asChild Usage">
        <FollowListAsChild />
      </Usage>

      <PropsTable
        props={[
          { prop: 'title', type: 'string', description: 'The title of the modal.', required: true },
          { prop: 'users', type: 'User[]', description: 'Array of user objects.', required: true },
          { prop: 'asChild', type: 'boolean', description: 'If true, renders as a child component.', required: false, default: 'false' },
          { prop: 'variant', type: "'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'", description: 'Button variant.', required: false, default: 'default' },
          { prop: 'triggerText', type: 'string', description: 'Text for the trigger button.', required: false, default: 'Open' },
        ]}
      />
    </PageTemplate>
  );
};

export default FollowListDocsPage;
