'use client';
import React from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';
import dynamic from 'next/dynamic';
const DatetimePickerControlled = () => {
  const [date, setDate] = React.useState(new Date());

  return <DateTimePicker granularity="second" jsDate={date} onJsDateChange={setDate} />;
};

/** avoid Nextjs hydration error */
const dynamicDatetimePickerControlled = dynamic(() => Promise.resolve(DatetimePickerControlled), {
  ssr: false,
});

export default dynamicDatetimePickerControlled;
