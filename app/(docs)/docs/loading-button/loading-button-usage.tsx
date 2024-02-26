'use client';
import * as React from 'react';
import { LoadingButton } from '@/components/ui/loading-button';

const LoadingButtonUsage = () => {
  const [loading, setLoading] = React.useState(false);
  const onClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="flex flex-col gap-3">
      <LoadingButton loading={loading} onClick={onClick}>
        default
      </LoadingButton>
      <LoadingButton variant="secondary" loading={loading} onClick={onClick}>
        secondary
      </LoadingButton>
      <LoadingButton variant="destructive" loading={loading} onClick={onClick}>
        destructive
      </LoadingButton>
      <LoadingButton variant="outline" loading={loading} onClick={onClick}>
        outline
      </LoadingButton>
      <LoadingButton variant="ghost" loading={loading} onClick={onClick}>
        ghost
      </LoadingButton>
      <LoadingButton variant="link" loading={loading} onClick={onClick}>
        link
      </LoadingButton>
    </div>
  );
};

export default LoadingButtonUsage;
