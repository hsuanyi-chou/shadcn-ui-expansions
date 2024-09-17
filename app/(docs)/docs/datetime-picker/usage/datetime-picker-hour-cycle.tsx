'use client';
import React, { useState } from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';
import { Label } from '@/components/ui/label';

const DatetimePickerHourCycle = () => {
  const [date12, setDate12] = useState<Date | undefined>(undefined);
  const [date24, setDate24] = useState<Date | undefined>(undefined);
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <div className="flex w-72 flex-col gap-2">
        <Label>12 Hour</Label>
        <DateTimePicker hourCycle={12} value={date12} onChange={setDate12} />
      </div>
      <div className="flex w-72 flex-col gap-2">
        <Label>24 Hour</Label>
        <DateTimePicker hourCycle={24} value={date24} onChange={setDate24} />
      </div>
    </div>
  );
};

export default DatetimePickerHourCycle;
