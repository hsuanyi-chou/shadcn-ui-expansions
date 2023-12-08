import LeftSide from '@/app/(docs)/layout-parts/left-side';
import React from 'react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-10 flex">
      <LeftSide />
      <section className="flex-1 overflow-x-auto px-5">{children}</section>
    </main>
  );
}
