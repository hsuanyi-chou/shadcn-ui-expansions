'use client';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DateTimePicker, DateTimePickerRef } from '@/components/ui/datetime-picker';

const DatetimePickerRef = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const ref = useRef<DateTimePickerRef>(null);

  return (
    <div className="w-72 space-y-3">
      <Button
        onClick={() => {
          alert(JSON.stringify(ref.current?.value?.toLocaleString()));
          /** following are the ref operations which is equivalent to button. */
          // ref.current?.focus();
          // ref.current?.blur();
          // ...
        }}
      >
        alert ref value
      </Button>
      <DateTimePicker ref={ref} value={date} onChange={setDate} />
    </div>
  );
};

export default DatetimePickerRef;
