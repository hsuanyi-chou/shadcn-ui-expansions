import Link, { LinkProps } from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

interface PropLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

export const PropLink = ({ className, href, ...props }: PropLinkProps) => {
  return <Link {...props} href={href} className={cn('underline', className)} target="_blank" />;
};
