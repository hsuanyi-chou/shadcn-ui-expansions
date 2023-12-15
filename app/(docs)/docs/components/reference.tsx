import React from 'react';
import Link, { LinkProps } from 'next/link';
import { Badge } from '@/components/ui/badge';
import RadixuiLogo from '@/app/(docs)/layout-parts/logo/radix-logo';
import ShadcnuiLogo from '@/app/(docs)/layout-parts/logo/shadcnui-logo';
import { cn } from '@/lib/utils';

export const Reference = (props: LinkProps) => {
  let Icon: React.ReactNode | null = null;
  let text = '';
  if ((props.href as string).includes('radix-ui')) {
    text = 'Radix UI';
    Icon = <RadixuiLogo width={12} height={12} />;
  }

  if ((props.href as string).includes('ui.shadcn')) {
    text = 'Shadcn UI';
    Icon = <ShadcnuiLogo width={12} height={12} />;
  }

  return (
    <Link {...props} target="_blank">
      <Badge variant="secondary" className="flex gap-3">
        {Icon}
        {text}
      </Badge>
    </Link>
  );
};

export const ReferenceBorder = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn('flex gap-3', className)} />;
};
