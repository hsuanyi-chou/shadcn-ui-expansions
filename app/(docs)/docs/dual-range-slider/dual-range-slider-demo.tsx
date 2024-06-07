'use client';
import React, { useState } from 'react';
import { DualRangeSlider } from '@/components/ui/dual-range-slider';

const DualRangeSliderDemo = () => {
  const [values, setValues] = useState([0, 100]);

  return (
    <div className="w-full px-10">
      <DualRangeSlider
        label={(value) => value}
        value={values}
        onValueChange={setValues}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
};

export default DualRangeSliderDemo;
