import React from 'react';
import { H2 } from '@/components/ui/heading-with-anchor';

const HeadingWithAnchorHover = () => {
  return (
    <div className="w-full px-10">
      <H2
        anchor="hover-to-show-anchor"
        className="border-b-2 border-gray-200 pb-2"
        anchorVisibility="hover"
      >
        Show anchor when hover heading
      </H2>
    </div>
  );
};

export default HeadingWithAnchorHover;
