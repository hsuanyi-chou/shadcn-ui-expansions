'use client';
import React from 'react';
import { MagicBackButton } from '@/components/ui/magic-back-button';
import { P } from '@/components/ui/heading-with-anchor';
import { InlineCode } from '@/components/ui/inline-code';

const MagicBackButtonBackLink = () => {
  return (
    <div className="flex max-h-[300px] w-full flex-col items-center justify-center gap-3">
      <P className="text-muted-foreground">
        back to <InlineCode>/docs</InlineCode> when you first visit this page.
      </P>
      <MagicBackButton backLink="/docs" />
    </div>
  );
};

export default MagicBackButtonBackLink;
