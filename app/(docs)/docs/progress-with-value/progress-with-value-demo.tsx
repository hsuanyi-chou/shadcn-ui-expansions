'use client';
import React, { useEffect, useState } from 'react';
import { ProgressWithValue } from '@/components/ui/progress-with-value';

const PERCENTAGE = [0, 10, 15, 30, 45, 50, 65, 80, 90, 100];

const ProgressWithValueDemo = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setValue(PERCENTAGE[index % PERCENTAGE.length]);
      index++;
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full px-10">
      <ProgressWithValue value={value} position="follow" />
    </div>
  );
};

export default ProgressWithValueDemo;
