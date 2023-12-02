import React from 'react';
import { DarkModeToggle } from '@/components/navbar/darkmode-toggle';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex w-full justify-between border-b bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
