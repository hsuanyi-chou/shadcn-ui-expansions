import LeftSide from '@/app/(docs)/layout-parts/left-side';
import React from 'react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-10 flex">
      <LeftSide />
      <div className="flex-1">{children}</div>
    </section>
  );
}
