'use client';
import React, { useState } from 'react';
import { DateTimePicker, TimePicker } from '@/components/ui/datetime-picker';

const DatePickerAndTimeInput = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-10">
      <div className="w-72 space-y-2">
        <p>Date Picker</p>
        <DateTimePicker granularity="day" value={date} onChange={setDate} />
      </div>
      <div className="w-72 space-y-2">
        <p>Time Input</p>
        <TimePicker date={time} onChange={setTime} />
      </div>
    </div>
  );
};

export default DatePickerAndTimeInput;
