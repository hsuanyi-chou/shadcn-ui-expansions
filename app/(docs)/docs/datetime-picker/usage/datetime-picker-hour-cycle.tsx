import React from 'react';
import { OldDatetimePicker } from '@/components/ui/old-datetime-picker';

const DatetimePickerHourCycle = () => {
  return (
    <div className="space-y-3">
      <OldDatetimePicker granularity="second" hourCycle={12} />
      <OldDatetimePicker granularity="second" hourCycle={24} />
    </div>
  );
};

export default DatetimePickerHourCycle;
