'use client';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DateTimePicker, DateTimePickerRef } from '@/components/ui/datetime-picker';

const DatetimePickerRef = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const ref = useRef<DateTimePickerRef>(null);

  return (
    <div className="space-y-3">
      <Button
        onClick={() => {
          alert(JSON.stringify(ref.current?.date?.toLocaleString()));
          /** following are the ref operations which is equivalent to button. */
          // ref.current?.focus();
          // ref.current?.blur();
          // ...
        }}
      >
        alert ref value
      </Button>
      <DateTimePicker ref={ref} date={date} onChange={setDate} />
    </div>
  );
};

export default DatetimePickerRef;
