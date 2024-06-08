'use client';
import React, { useEffect, useState } from 'react';
import { ProgressWithValue } from '@/components/ui/progress-with-value';

const PERCENTAGE = [0, 10, 15, 30, 45, 50, 65, 80, 90, 100];

const LABEL_DEMOS = [
  {
    title: 'No Label',
    label: () => null,
  },
  {
    title: 'Custom label',
    label: (value?: number | null) => <span className="text-amber-400">current: {value}%</span>,
  },
];

const ProgressWithValueLabel = () => {
  const [value, setValue] = useState(20);
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
      {LABEL_DEMOS.map((demo) => (
        <div key={demo.title}>
          <div className="text-blue-500">{demo.title}</div>
          <ProgressWithValue value={value} position="follow" label={demo.label} />
        </div>
      ))}
    </div>
  );
};

export default ProgressWithValueLabel;
