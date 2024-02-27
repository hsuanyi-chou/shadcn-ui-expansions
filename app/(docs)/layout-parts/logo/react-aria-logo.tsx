import React from 'react';
import Image from 'next/image';
import { LogoProps } from '@/app/(docs)/layout-parts/logo/logo';

const ReactAriaLogo = ({ width = 24, height = 24, ...props }: LogoProps) => {
  return (
    <Image
      {...props}
      src="/logo/react-aria.svg"
      width={width}
      height={height}
      alt="react-aria logo"
      suppressHydrationWarning
    />
  );
};

export default ReactAriaLogo;
