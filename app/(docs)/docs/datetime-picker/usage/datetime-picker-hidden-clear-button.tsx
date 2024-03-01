import React from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';

const DatetimePickerHiddenClearButton = () => {
  return <DateTimePicker granularity="second" showClearButton={false} />;
};

export default DatetimePickerHiddenClearButton;
