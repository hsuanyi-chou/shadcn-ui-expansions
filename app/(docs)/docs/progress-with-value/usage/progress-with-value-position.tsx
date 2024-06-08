'use client';
import React, { useEffect, useState } from 'react';
import { ProgressWithValue } from '@/components/ui/progress-with-value';

const PERCENTAGE = [0, 10, 15, 30, 45, 50, 65, 80, 90, 100];

const DEMO: Array<'start' | 'start-outside' | 'follow' | 'end' | 'end-outside'> = [
  'follow',
  'start',
  'end',
  'start-outside',
  'end-outside',
];

const ProgressWithValuePosition = () => {
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
    <div className="w-full space-y-2 px-10">
      {DEMO.map((position) => (
        <div key={position}>
          <div>
            position: <span className="text-blue-500">{position}</span>
          </div>
          <ProgressWithValue key={position} value={value} position={position} />
        </div>
      ))}
    </div>
  );
};

export default ProgressWithValuePosition;
