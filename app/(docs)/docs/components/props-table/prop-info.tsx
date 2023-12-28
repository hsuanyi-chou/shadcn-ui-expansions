import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropInfoProps {
  children?: React.ReactNode;
  className?: string;
}
const PropInfo = ({ className, children }: PropInfoProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Info className={cn('h-5 w-5 cursor-pointer text-gray-500', className)} />
      </PopoverTrigger>
      <PopoverContent
        className="w-full max-w-3xl"
        side="top"
        sideOffset={10}
        align="start"
        alignOffset={-20}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PropInfo;
