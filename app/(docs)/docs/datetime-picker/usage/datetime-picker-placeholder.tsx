'use client';
import React, { useState } from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';

const DatetimePickerPlaceholder = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return <DateTimePicker value={date} onChange={setDate} placeholder="What's your birthday?" />;
};

export default DatetimePickerPlaceholder;
