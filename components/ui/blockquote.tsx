import React from 'react';

const Blockquote = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pr-1; relative rounded-lg border-l-8 border-l-gray-700 bg-gray-100 py-5 pl-16 font-sans text-lg italic leading-relaxed text-gray-500 before:absolute before:left-3 before:top-3 before:font-serif before:text-7xl before:text-gray-700 before:content-['\201C']">
      {children}
    </div>
  );
};

const BlockquoteAuthor = ({ children }: { children: React.ReactNode }) => {
  return <div className="pr-4 text-right font-bold text-gray-700">{children}</div>;
};

export { Blockquote, BlockquoteAuthor };
