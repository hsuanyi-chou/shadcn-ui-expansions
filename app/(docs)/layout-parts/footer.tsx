import React from 'react';
import { cn } from '@/lib/utils';
import BuyMeCoffee from '@/app/(docs)/layout-parts/buy-me-coffee';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={cn('mt-5 flex justify-end border-t-2 border-t-gray-300 py-4 lg:hidden', className)}
    >
      <BuyMeCoffee />
    </footer>
  );
};

export default Footer;
