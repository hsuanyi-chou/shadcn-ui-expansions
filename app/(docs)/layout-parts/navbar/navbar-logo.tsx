import Logo from '@/app/(docs)/layout-parts/logo/logo';
import Hamburger from '@/app/(docs)/layout-parts/navbar/hamburger';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoLinkProps {
  alwaysRender?: boolean;
  className?: string;
}

export const LogoLink = ({ alwaysRender, className }: LogoLinkProps) => {
  return (
    <Link className={cn('hidden gap-1 lg:flex', alwaysRender && 'flex', className)} href="/">
      <Logo />
      <span className="text-xl font-bold">shadcn/ui expansions</span>
    </Link>
  );
};

const NavbarLogo = () => {
  return (
    <>
      <Hamburger />
      <LogoLink />
    </>
  );
};

export default NavbarLogo;
