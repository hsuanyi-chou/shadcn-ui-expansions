import React from 'react';
import { OldDatetimePicker, TimePicker } from '@/components/ui/old-datetime-picker';

const DatePickerAndTimePicker = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-10">
      <div className="space-y-2">
        <p>Date Picker</p>
        <OldDatetimePicker />
      </div>
      <div className="space-y-2">
        <p>Time Picker</p>
        <TimePicker />
      </div>
    </div>
  );
};

export default DatePickerAndTimePicker;
