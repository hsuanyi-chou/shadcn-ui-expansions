import React from 'react';
import { H1 } from '@/components/ui/typography';
import { Blockquote } from '@/components/ui/blockquote';
import Link from 'next/link';

const IntroductionPage = () => {
  return (
    <>
      <H1>Introduction</H1>
      <Blockquote>
        shadcn/ui is a re-usable components built using Radix UI and Tailwind CSS. It is <b>NOT</b>{' '}
        a component library. It's a collection of re-usable components that you can copy and paste
        into your apps.{' '}
        <Link href="https://ui.shadcn.com/docs" className="underline">
          more info
        </Link>
      </Blockquote>
    </>
  );
};

export default IntroductionPage;
