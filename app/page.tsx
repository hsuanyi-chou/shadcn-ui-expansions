import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
import ShadcnuiLogo from '@/app/(docs)/layout-parts/logo/shadcnui-logo';
import Logo from '@/app/(docs)/layout-parts/logo/logo';
import { H1, H3 } from '@/components/ui/heading-with-anchor';

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <H1>More components built on top of shadcn-ui.</H1>
      <H3 className="text-lg font-light text-muted-foreground sm:text-xl">
        Useful additional components collection base on shadcn/ui to help you ship new features
        faster. Copy and paste into your apps, Accessible, Customizable, Open Source.
      </H3>
      <div className="mt-16 flex flex-col gap-3 md:flex-row">
        <Link href="/docs">
          <Button asChild>
            <span>
              <Logo className="mr-2" reverse /> Get Started
            </span>
          </Button>
        </Link>
        <Link href="https://ui.shadcn.com/" target="_blank">
          <Button variant="outline" asChild>
            <span>
              <ShadcnuiLogo className="mr-2" />
              Learn shadcn/ui
            </span>
          </Button>
        </Link>
        <Link href="https://github.com/hsuanyi-chou/shadcn-ui-expansions" target="_blank">
          <Button variant="outline" asChild>
            <span>
              <Github className="mr-2" />
              GitHub
            </span>
          </Button>
        </Link>
      </div>
    </main>
  );
}
