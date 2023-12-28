import React from 'react';
import { DarkModeToggle } from '@/app/(docs)/layout-parts/navbar/darkmode-toggle';
import NavbarLogo from '@/app/(docs)/layout-parts/navbar/navbar-logo';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search } from '@/app/(docs)/layout-parts/navbar/search';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <NavbarLogo />
      <div className="flex gap-3">
        <Search />
        <Link href="https://github.com/hsuanyi-chou/shadcn-ui-expansions" target="_blank">
          <Button variant="outline" size="icon">
            <Github />
          </Button>
        </Link>
        <span>
          <DarkModeToggle />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
