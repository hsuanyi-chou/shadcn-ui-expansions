'use client';

import * as React from 'react';
import { DualRangeSlider } from '@/components/ui/dual-range-slider';
import { useState } from 'react';

const DualRangeSliderSingle = () => {
  const [values, setValues] = useState([10]);

  return (
    <div className="w-full space-y-5 px-10">
      <div>With Label:</div>
      <DualRangeSlider
        label={(value) => value}
        value={values}
        onValueChange={setValues}
        min={0}
        max={100}
        step={1}
      />
      <div>Without Label</div>
      <DualRangeSlider value={values} onValueChange={setValues} min={0} max={100} step={1} />
    </div>
  );
};
export default DualRangeSliderSingle;
