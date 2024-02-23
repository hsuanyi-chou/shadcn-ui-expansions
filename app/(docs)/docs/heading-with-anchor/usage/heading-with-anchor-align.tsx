import React from 'react';
import { H2 } from '@/components/ui/heading-with-anchor';

const HeadingWithAnchorAlign = () => {
  return (
    <div className="w-full px-10">
      <H2
        anchor="heading-with-anchor-align"
        className="border-b-2 border-gray-200 pb-2"
        anchorAlignment="close"
      >
        Heading with anchor align
      </H2>
    </div>
  );
};

export default HeadingWithAnchorAlign;
