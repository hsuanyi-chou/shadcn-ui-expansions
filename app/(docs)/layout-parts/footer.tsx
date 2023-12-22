import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn('mt-5 flex justify-end border-t-2 border-t-gray-300 py-4', className)}>
      <Link href="https://www.buymeacoffee.com/typeart" target="_blank">
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          width={135}
          height={45}
        />
      </Link>
    </footer>
  );
};

export default Footer;
