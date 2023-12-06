import React from 'react';
import { H1, P } from '@/components/ui/typography';
import { Blockquote } from '@/components/ui/blockquote';
import Link from 'next/link';

const IntroductionPage = () => {
  return (
    <>
      <H1>Introduction</H1>
      <Blockquote className="mb-4">
        shadcn/ui is a re-usable components built using Radix UI and Tailwind CSS. It is <b>NOT</b>{' '}
        a component library. It's a collection of re-usable components that you can copy and paste
        into your apps.{' '}
        <Link href="https://ui.shadcn.com/docs" className="underline">
          Learn more about shadcn/ui.
        </Link>
      </Blockquote>
      <P>
        This is built on top of shadcn/ui and expanded many useful components such as multiple
        selector, loading button, infinite scroll and more.
      </P>
      <P className="font-bold italic">
        Same as shadcn/ui, all components are free to use for personal and commercial. Just copy and
        paste to your project and customize to your needs. The code is yours.
      </P>
    </>
  );
};

export default IntroductionPage;
