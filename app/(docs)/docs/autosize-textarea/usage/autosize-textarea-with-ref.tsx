'use client';
import React, { useState } from 'react';
import { AutosizeTextarea, AutosizeTextAreaRef } from '@/components/ui/autosize-textarea';

const AutosizeTextareaWithRef = () => {
  const ref = React.useRef<AutosizeTextAreaRef>(null);
  const [currMaxHeight, setCurrMaxHeight] = useState(0);
  React.useEffect(() => {
    if (ref.current) {
      setCurrMaxHeight(ref.current.maxHeight);
    }
  }, []);
  return (
    <div className="flex w-full flex-col gap-2 px-10">
      <p>current max height from ref: {currMaxHeight}</p>
      <AutosizeTextarea ref={ref} maxHeight={200} placeholder="with ref example." />
    </div>
  );
};

export default AutosizeTextareaWithRef;
