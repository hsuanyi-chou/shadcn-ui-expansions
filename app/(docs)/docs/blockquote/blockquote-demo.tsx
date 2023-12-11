import React from 'react';
import { Blockquote, BlockquoteAuthor } from '@/components/ui/blockquote';

const BlockquoteDemo = () => {
  return (
    <Blockquote>
      Happiness lies not in the mere possession of money; it lies in the joy of achievement, in the
      thrill of creative effort.
      <BlockquoteAuthor>Franklin Roosevelt</BlockquoteAuthor>
    </Blockquote>
  );
};

export default BlockquoteDemo;
