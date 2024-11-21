'use client';
import React from 'react';
import { MagicBackButton } from '@/components/ui/magic-back-button';
import { P } from '@/components/ui/heading-with-anchor';
import { InlineCode } from '@/components/ui/inline-code';

const MagicBackButtonDemo = () => {
  return (
    <div className="flex max-h-[300px] w-full flex-col items-center justify-center gap-3">
      <div>
        <P className="text-muted-foreground">
          Try opening this page link in a new tab, <br />
          and you’ll notice the button will navigate directly to the homepage. (
          <InlineCode>{`router.push('/')`}</InlineCode>)<br />
          However, if you navigate to this page from another component, <br />
          the button will simply go back to the previous page. (
          <InlineCode>{`router.back()`}</InlineCode>)
        </P>
      </div>
      <MagicBackButton />
    </div>
  );
};

export default MagicBackButtonDemo;
