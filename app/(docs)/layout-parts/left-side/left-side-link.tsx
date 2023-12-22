'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';

interface LeftSideLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  /** 是 nextLink 本來就有的欄位，但 LinkProps 沒有他。所以自行定義。用來設定新分頁打開 */
  target?: '_blank';
}

const LeftSideLink = (props: LeftSideLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        'pl-4 text-gray-500 hover:underline',
        pathname === props.href && 'font-bold text-primary underline',
        props.className,
      )}
    />
  );
};

export default LeftSideLink;
