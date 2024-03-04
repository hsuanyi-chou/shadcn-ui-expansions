'use client';
import React, { useState } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

const SpinnerToggle = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center gap-5">
      <Button onClick={() => setShow((pre) => !pre)}>toggle spinner</Button>
      <Spinner show={show} />
    </div>
  );
};

export default SpinnerToggle;
