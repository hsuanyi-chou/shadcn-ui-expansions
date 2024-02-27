'use client';
import React from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';
import { Button } from '@/components/ui/button';

const DatetimePickerOpen = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-3">
      <Button
        onClick={() => {
          setOpen((pre) => !pre);
        }}
      >
        toggle open state
      </Button>
      <DateTimePicker granularity="second" isOpen={open} />
    </div>
  );
};

export default DatetimePickerOpen;
