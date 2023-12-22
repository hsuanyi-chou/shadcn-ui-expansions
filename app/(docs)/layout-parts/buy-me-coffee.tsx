import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BuyMeCoffeeProps {
  className?: string;
  width?: number;
  height?: number;
}
const BuyMeCoffee = ({ className, width = 135, height = 45 }: BuyMeCoffeeProps) => {
  return (
    <Link href="https://www.buymeacoffee.com/typeart" target="_blank" className={className}>
      <Image
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default BuyMeCoffee;
