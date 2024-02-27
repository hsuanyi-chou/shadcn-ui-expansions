import React from 'react';
import { DateTimePicker, TimePicker } from '@/components/ui/datetime-picker';

const DatePickerAndTimePicker = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-10">
      <div className="space-y-2">
        <p>Date Picker</p>
        <DateTimePicker />
      </div>
      <div className="space-y-2">
        <p>Time Picker</p>
        <TimePicker />
      </div>
    </div>
  );
};

export default DatePickerAndTimePicker;
