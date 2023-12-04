import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
import ShadcnuiLogo from '@/components/logo/shadcnui-logo';
import Logo from '@/components/logo/logo';

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
        The shadcn/ui Components Expansions
      </h1>
      <h2 className="text-lg text-muted-foreground sm:text-xl">
        Useful components collections base on shadcn/ui to help you ship new features faster. Copy
        and paste into your apps, Accessible, Customizable, Open Source.
      </h2>
      <div className="mt-16 flex flex-col gap-3 md:flex-row">
        <Link href="/docs">
          <Button>
            <Logo className="mr-2" reverse /> Get Started
          </Button>
        </Link>
        <Link href="https://ui.shadcn.com/" target="_blank">
          <Button variant="outline">
            <ShadcnuiLogo className="mr-2" />
            Learn shadcn/ui
          </Button>
        </Link>
        <Link href="https://github.com/" target="_blank">
          <Button variant="outline">
            <Github className="mr-2" />
            GitHub
          </Button>
        </Link>
      </div>
    </main>
  );
}
