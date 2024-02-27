'use client';
import React, { useRef } from 'react';
import { DateTimePicker, DateTimePickerRef } from '@/components/ui/datetime-picker';
import { Button } from '@/components/ui/button';

const DatetimePickerRef = () => {
  const ref = useRef<DateTimePickerRef>(null);

  return (
    <div className="space-y-3">
      <Button
        onClick={() => {
          alert(JSON.stringify(ref.current?.jsDate));
          /** following are the ref values. */
          // console.log(ref.current?.buttonRef);
          // console.log(ref.current?.divRef);
          // console.log(ref.current?.contentRef);
          // console.log(ref.current?.jsDate);
          // console.log(ref.current?.open);
        }}
      >
        alert ref value
      </Button>
      <DateTimePicker granularity="second" ref={ref} />
    </div>
  );
};

export default DatetimePickerRef;
