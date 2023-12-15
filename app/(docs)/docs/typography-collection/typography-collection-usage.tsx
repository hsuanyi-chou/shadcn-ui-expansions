'use client';
import * as React from 'react';
import { H1, H2, H3, H4, H5, H6, P } from '@/components/ui/typography';

const TypographyUsage = () => {
  return (
    <div className="flex flex-col gap-3">
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      <P>Paragraph</P>
    </div>
  );
};

export default TypographyUsage;
