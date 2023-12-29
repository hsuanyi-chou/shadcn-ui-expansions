import React from 'react';
import { H1, P } from '@/components/ui/heading-with-anchor';
import { Blockquote } from '@/components/ui/blockquote';
import Link from 'next/link';

const IntroductionPage = () => {
  return (
    <>
      <H1 className="mb-10">Introduction</H1>
      <Blockquote className="mb-4">
        <P className="text-gray-600">
          shadcn/ui is a re-usable components built using Radix UI and Tailwind CSS.
        </P>
        <P className="text-gray-600">
          It is <b>NOT</b> a component library. It is a collection of re-usable components that you
          can copy and paste into your apps.
        </P>
        <Link href="https://ui.shadcn.com/docs" className="underline">
          Learn more about shadcn/ui.
        </Link>
      </Blockquote>
      <P className="text-gray-600">
        This is built on top of shadcn/ui and includes many useful components such as multiple
        selector, loading button, infinite scroll and more.
      </P>
      <P className="font-bold italic">
        The same as shadcn/ui, all components are free to use for personal and commercial.
      </P>
      <P className="font-bold italic">
        Just copy and paste to your project and customize to your needs. The code is yours.
      </P>
    </>
  );
};

export default IntroductionPage;
