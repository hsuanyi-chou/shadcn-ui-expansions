'use client';
import React, { useRef } from 'react';
import { OldDatetimePicker, DateTimePickerRef } from '@/components/ui/old-datetime-picker';
import { Button } from '@/components/ui/button';

const DatetimePickerRef = () => {
  const ref = useRef<DateTimePickerRef>(null);

  return (
    <div className="space-y-3">
      <Button
        onClick={() => {
          alert(JSON.stringify(ref.current?.jsDate?.toLocaleString()));
          /** following are the ref values. */
          // console.log(ref.current?.buttonRef);
          // console.log(ref.current?.divRef);
          // console.log(ref.current?.contentRef);
          // console.log(ref.current?.jsDate);
          // console.log(ref.current?.state);
        }}
      >
        alert ref value
      </Button>
      <OldDatetimePicker granularity="second" ref={ref} />
    </div>
  );
};

export default DatetimePickerRef;
