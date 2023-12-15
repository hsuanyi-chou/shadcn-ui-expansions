'use client';
import * as React from 'react';
import { H1, H2, H3, H4, H5, H6, P } from '@/components/ui/heading-with-anchor';

const HeadingUsage = () => {
  return (
    <div className="flex w-full flex-col gap-3 px-10">
      <H1 anchor="usage-h1">Heading 1</H1>
      <H2 anchor="usage-h2">Heading 2</H2>
      <H3 anchor="usage-h3">Heading 3</H3>
      <H4 anchor="usage-h4">Heading 4</H4>
      <H5 anchor="usage-h5">Heading 5</H5>
      <H6 anchor="usage-h6">Heading 6</H6>
      <P>Paragraph</P>
    </div>
  );
};

export default HeadingUsage;
