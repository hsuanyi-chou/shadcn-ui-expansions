'use client';
import React, { useState } from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';

const DatetimePickerDemo = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return <DateTimePicker date={date} onChange={setDate} />;
};

export default DatetimePickerDemo;
