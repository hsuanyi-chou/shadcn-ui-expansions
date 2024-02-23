import React from 'react';
import { H1 } from '@/components/ui/heading-with-anchor';

const HeadingWithAnchorDemo = () => {
  return (
    <div className="w-full space-y-5 px-10">
      <H1 anchor="demo-heading-1" className="border-b-2 border-gray-200 pb-2">
        Heading 1
      </H1>
      <H1
        anchor="demo-heading-align"
        className="border-b-2 border-gray-200 pb-2"
        anchorAlignment="close"
      >
        Heading 1 align
      </H1>
    </div>
  );
};

export default HeadingWithAnchorDemo;
