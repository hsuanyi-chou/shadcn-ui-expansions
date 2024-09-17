'use client';
import React, { useState } from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';

const DatetimePickerDisabled = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return <DateTimePicker disabled value={date} onChange={setDate} className="w-72" />;
};

export default DatetimePickerDisabled;
