'use client';
import React from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <>
      <Menu className="cursor-pointer md:hidden" />
      <Link className="hidden gap-1 md:flex" href="/">
        <Image
          src={`/logo/logo-${theme === 'dark' ? 'dark' : 'light'}.svg`}
          width={24}
          height={24}
          alt="logo"
        />
        <span className="text-xl font-bold">shadn/ui plugins</span>
      </Link>
    </>
  );
};

export default Logo;
