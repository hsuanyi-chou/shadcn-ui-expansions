import React from 'react';
import { Spinner } from '@/components/ui/spinner';

const SpinnerSize = () => {
  return (
    <div className="flex items-center gap-3">
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  );
};

export default SpinnerSize;
