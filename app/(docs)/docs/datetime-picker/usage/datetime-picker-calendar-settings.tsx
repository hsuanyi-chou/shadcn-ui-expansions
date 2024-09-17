'use client';
import React from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';

const DatetimePickerCalendarSettings = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
      <div className="w-72 space-y-2">
        <p>Week start on Monday</p>
        <DateTimePicker weekStartsOn={1} value={date} onChange={setDate} />
      </div>
      <div className="w-72 space-y-2">
        <p>Show week number</p>
        <DateTimePicker showWeekNumber value={date} onChange={setDate} />
      </div>
      <div className="w-72 space-y-2">
        <p>Disable outside days</p>
        <DateTimePicker showOutsideDays={false} value={date} onChange={setDate} />
      </div>
    </div>
  );
};

export default DatetimePickerCalendarSettings;
