'use client';
import React from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';
import { Label } from '@/components/ui/label';

const DatetimePickerYearRange = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <div className="flex w-72 flex-col gap-2">
        <Label>± 3 Years</Label>
        <DateTimePicker yearRange={3} value={date} onChange={setDate} />
      </div>
      <div className="flex w-72 flex-col gap-2">
        <Label>± 10 Years</Label>
        <DateTimePicker yearRange={10} value={date} onChange={setDate} />
      </div>
      <div className="flex w-72 flex-col gap-2">
        <Label>± 30 Years</Label>
        <DateTimePicker yearRange={30} value={date} onChange={setDate} />
      </div>
    </div>
  );
};

export default DatetimePickerYearRange;
