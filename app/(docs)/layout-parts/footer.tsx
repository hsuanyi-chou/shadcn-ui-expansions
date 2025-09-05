import BuyMeCoffee from '@/app/(docs)/layout-parts/buy-me-coffee';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={cn(
        'mt-5 flex justify-end gap-2 border-t-2 border-t-gray-300 py-4 lg:hidden',
        className,
      )}
    >
      <BuyMeCoffee />
    </footer>
  );
};

export default Footer;
