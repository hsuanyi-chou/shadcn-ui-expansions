'use client';
import React, { useState } from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';
import { InlineCode } from '@/components/ui/inline-code';
import { format } from 'date-fns';
// I put it outside the component to avoid re-creating the date object every time the component re-renders.
const DefaultDate = new Date();
DefaultDate.setMonth(DefaultDate.getMonth() - 3);
DefaultDate.setHours(13, 14, 0, 0);

const DatetimePickerInitMonth = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div>
      <p>
        The example of default popup value is{' '}
        <InlineCode>
          current month - 3 = {DefaultDate.getMonth() + 1} and manually set the time to 13:14:00
        </InlineCode>{' '}
        which is <InlineCode>{format(DefaultDate, 'yyyy/MM/dd hh:mm:ss b')}</InlineCode> when popup
        the calendar.
        <br />
        You can set the month by giving <InlineCode>the Date</InlineCode> to{' '}
        <InlineCode>initMonth</InlineCode> prop.
      </p>
      <DateTimePicker
        value={date}
        defaultPopupValue={DefaultDate}
        // defaultPopupValue={new Date(2025, 0, 1)} // You can set the month by giving the Date here to initMonth prop.
        onChange={setDate}
        className="w-[280px]"
      />
    </div>
  );
};

export default DatetimePickerInitMonth;
