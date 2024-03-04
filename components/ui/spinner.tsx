import { Loader2 } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export type SpinnerProps = {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children?: React.ReactNode;
  show?: boolean;
};

export function Spinner({ size = 'medium', show = true, className, children }: SpinnerProps) {
  return (
    <span className={cn('flex flex-col items-center justify-center', !show && 'hidden')}>
      <Loader2
        className={cn(
          'animate-spin text-primary',
          size === 'small' && 'h-6 w-6',
          size === 'medium' && 'h-8 w-8',
          size === 'large' && 'h-12 w-12',
          className,
        )}
      />
      {children}
    </span>
  );
}
