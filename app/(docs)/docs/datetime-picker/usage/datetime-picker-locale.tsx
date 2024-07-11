'use client';
import React, { useState } from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';
import { zhTW } from 'date-fns/locale';
const DatetimePickerLocale = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return <DateTimePicker locale={zhTW} value={date} onChange={setDate} />;
};

export default DatetimePickerLocale;
