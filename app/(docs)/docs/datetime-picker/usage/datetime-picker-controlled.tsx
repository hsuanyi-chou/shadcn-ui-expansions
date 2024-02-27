'use client';
import React from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';

const DatetimePickerControlled = () => {
  const [date, setDate] = React.useState(new Date());

  return <DateTimePicker granularity="second" jsDate={date} onJsDateChange={setDate} />;
};

export default DatetimePickerControlled;
