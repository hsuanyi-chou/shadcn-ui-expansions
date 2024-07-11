'use client';
import React, { useState } from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';
import { zhTW } from 'date-fns/locale/zh-TW';

const DatetimePickerDemo = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return <DateTimePicker date={date} onChange={setDate} locale={zhTW} hourCycle={12} />;
};

export default DatetimePickerDemo;
