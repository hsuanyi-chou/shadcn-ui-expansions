import React from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';

const DatetimePickerHourCycle = () => {
  return (
    <div className="space-y-3">
      <DateTimePicker granularity="second" hourCycle={12} />
      <DateTimePicker granularity="second" hourCycle={24} />
    </div>
  );
};

export default DatetimePickerHourCycle;
