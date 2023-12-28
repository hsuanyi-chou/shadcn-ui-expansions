import LeftSide from '@/app/(docs)/layout-parts/left-side/left-side';
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/app/(docs)/layout-parts/footer';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-10 flex">
      <LeftSide />
      <section className="flex flex-1 flex-col overflow-auto px-5">
        <div className="flex-1">{children}</div>
        <Footer />
      </section>
      <Toaster />
    </main>
  );
}
