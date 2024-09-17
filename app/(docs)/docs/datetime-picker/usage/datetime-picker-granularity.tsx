'use client';
import React from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';

const DatetimePickerGranularity = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
      <div className="w-72 space-y-2">
        <p>Minute</p>
        <DateTimePicker granularity="minute" value={date} onChange={setDate} />
      </div>
      <div className="w-72 space-y-2">
        <p>Hour</p>
        <DateTimePicker granularity="hour" value={date} onChange={setDate} />
      </div>
      <div className="w-72 space-y-2">
        <p>Day</p>
        <DateTimePicker granularity="day" value={date} onChange={setDate} />
      </div>
    </div>
  );
};

export default DatetimePickerGranularity;
