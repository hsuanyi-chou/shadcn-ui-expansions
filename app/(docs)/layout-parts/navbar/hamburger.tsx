'use client';
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { DOCS } from '@/app/(docs)/layout-parts/documentation.constant';
import LeftSideLink from '@/app/(docs)/layout-parts/left-side/left-side-link';
import { LogoLink } from '@/app/(docs)/layout-parts/navbar/navbar-logo';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={(o) => setOpen(o)}>
      <SheetTrigger className="cursor-pointer md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <LogoLink alwaysRender className="mb-5 gap-3" />
        <section className="pl-10">
          {DOCS.map((component) => (
            <div className="flex flex-col gap-1" key={component.groupKey}>
              <h2 className="text-lg font-extrabold">{component.groupValue}</h2>
              {component.children.map((child) => (
                <span className="flex items-center gap-2" key={child.label}>
                  <LeftSideLink href={child.url} key={child.value} onClick={() => setOpen(false)}>
                    {child.label}
                  </LeftSideLink>
                  {child.new && <span className="text-xs text-red-500 dark:text-red-300">NEW</span>}
                </span>
              ))}
            </div>
          ))}
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default Hamburger;
