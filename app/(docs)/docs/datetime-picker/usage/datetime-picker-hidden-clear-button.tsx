import React from 'react';
import { OldDatetimePicker } from '@/components/ui/old-datetime-picker';

const DatetimePickerHiddenClearButton = () => {
  return <OldDatetimePicker granularity="second" showClearButton={false} />;
};

export default DatetimePickerHiddenClearButton;
