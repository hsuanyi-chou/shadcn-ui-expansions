import React from 'react';
import Link, { LinkProps } from 'next/link';
import { Badge } from '@/components/ui/badge';
import RadixuiLogo from '@/app/(docs)/layout-parts/logo/radix-logo';
import ShadcnuiLogo from '@/app/(docs)/layout-parts/logo/shadcnui-logo';
import { cn } from '@/lib/utils';
import ReactAriaLogo from '@/app/(docs)/layout-parts/logo/react-aria-logo';

interface ReferenceProps extends LinkProps {
  icon?: React.ReactNode;
  text?: string;
}

export const Reference = ({ icon, text, ...props }: ReferenceProps) => {
  if ((props.href as string).includes('radix-ui')) {
    text = 'Radix UI';
    icon = <RadixuiLogo width={12} height={12} />;
  }

  if ((props.href as string).includes('ui.shadcn')) {
    text = 'Shadcn UI';
    icon = <ShadcnuiLogo width={12} height={12} />;
  }

  if ((props.href as string).includes('react-spectrum')) {
    text = 'React Aria';
    icon = <ReactAriaLogo width={12} height={12} />;
  }

  return (
    <Link {...props} target="_blank">
      <Badge variant="secondary" className="flex gap-2">
        {icon}
        {text}
      </Badge>
    </Link>
  );
};

export const ReferenceBorder = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn('mb-5 flex gap-3', className)} />;
};
