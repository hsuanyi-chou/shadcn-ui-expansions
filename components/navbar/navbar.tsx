import React from 'react';
import { DarkModeToggle } from '@/components/navbar/darkmode-toggle';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4">
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
