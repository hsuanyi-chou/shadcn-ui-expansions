import React from 'react';
import { LoadingButton } from '@/components/ui/loading-button';
import Link from 'next/link';

const LoadingButtonAsChild = () => {
  return (
    <div className="flex items-center gap-2">
      <LoadingButton asChild loading>
        <p>As a p child</p>
      </LoadingButton>
      <LoadingButton asChild>
        <Link href="#">as a Link child</Link>
      </LoadingButton>
    </div>
  );
};

export default LoadingButtonAsChild;
