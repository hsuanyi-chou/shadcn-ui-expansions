import React from 'react';
import { Spinner } from '@/components/ui/spinner';

const SpinnerWithText = () => {
  return (
    <div className="flex items-center gap-3">
      <Spinner>Loading...</Spinner>
      <Spinner className="text-red-400">
        <span className="text-red-400">Loading with custom style</span>
      </Spinner>
    </div>
  );
};

export default SpinnerWithText;
