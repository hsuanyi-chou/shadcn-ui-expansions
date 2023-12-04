'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { LogoProps } from '@/components/logo/logo';

const ShadcnuiLogo = (props: LogoProps) => {
  const { theme } = useTheme();

  return (
    <Image
      {...props}
      src={`/logo/shadcnui-${theme === 'dark' ? 'dark.png' : 'light.svg'}`}
      width={24}
      height={24}
      alt="shadcn-ui logo"
      suppressHydrationWarning
    />
  );
};

export default ShadcnuiLogo;
