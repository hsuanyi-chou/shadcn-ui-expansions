'use client';
import React, { useState } from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';

const DatetimePickerDisplayFormat = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <DateTimePicker
      displayFormat={{ hour24: 'yyyy/MM/dd' }}
      value={date}
      onChange={setDate}
      className="w-72"
    />
  );
};

export default DatetimePickerDisplayFormat;
