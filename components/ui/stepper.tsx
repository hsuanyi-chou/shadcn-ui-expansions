import React from 'react';
import { H4 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface StepperProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  step?: number;
}
export const Stepper = ({ title, className, children, step }: StepperProps) => {
  return (
    <div className={cn(className)}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 p-3 text-primary dark:text-primary-foreground">
          {step}
        </span>
        <H4 className="pt-3">{title}</H4>
      </div>
      <div className="ml-5 border-l-2 border-l-gray-200 pl-8">{children}</div>
    </div>
  );
};
