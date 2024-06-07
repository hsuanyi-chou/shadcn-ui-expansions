'use client';

import * as React from 'react';
import { DualRangeSlider } from '@/components/ui/dual-range-slider';
import { useState } from 'react';

const DualRangeSliderLabelPosition = () => {
  const [values, setValues] = useState([0, 100]);

  return (
    <div className="w-full space-y-5 px-10">
      <div className="mb-8">TOP:</div>
      <DualRangeSlider
        label={(value) => value}
        labelPosition="top"
        value={values}
        onValueChange={setValues}
        min={0}
        max={100}
        step={1}
      />
      <div>BOTTOM:</div>
      <DualRangeSlider
        label={(value) => value}
        labelPosition="bottom"
        value={values}
        onValueChange={setValues}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
};
export default DualRangeSliderLabelPosition;
