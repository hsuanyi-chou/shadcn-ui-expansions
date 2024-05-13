import React from 'react';
import { LoadingButton } from '@/components/ui/loading-button';
import Link from 'next/link';

const LoadingButtonAsChild = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <LoadingButton asChild loading>
        <p>As a `p` child</p>
      </LoadingButton>
      <LoadingButton asChild>
        <Link href="#">as a `Link` child</Link>
      </LoadingButton>
      <LoadingButton asChild variant="secondary">
        <Link href="#">as a `Link` child with `secondary` variant</Link>
      </LoadingButton>
    </div>
  );
};

export default LoadingButtonAsChild;
