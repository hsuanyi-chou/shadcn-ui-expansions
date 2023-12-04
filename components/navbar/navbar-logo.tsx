import React from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/logo/logo';

const NavbarLogo = () => {
  return (
    <>
      <Menu className="cursor-pointer md:hidden" />
      <Link className="hidden gap-1 md:flex" href="/">
        <Logo />
        <span className="text-xl font-bold">shadcn/ui expansions</span>
      </Link>
    </>
  );
};

export default NavbarLogo;
