'use client';
import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useTheme } from 'next-themes';

export type LogoProps = Omit<ImageProps, 'src' | 'alt'>;

type MyLogoProps = LogoProps & { reverse?: boolean };
const Logo = ({ reverse = false, width = 24, height = 24, ...props }: MyLogoProps) => {
  const { theme } = useTheme();

  return (
    <Image
      {...props}
      src={`/logo/logo-${theme === 'dark' || reverse ? 'dark' : 'light'}.svg`}
      width={width}
      height={height}
      alt="shadcn-ui logo"
      suppressHydrationWarning
    />
  );
};

export default Logo;
