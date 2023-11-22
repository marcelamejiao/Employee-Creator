// @ts-nocheck @todo fix issues
import { useState, useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';

export const DatePicker = ({ onChange }) => {
  const [value, setValue] = useState<Date | null>();

  const onDateChange = useCallback((date: Date) => {
    setValue(date);
		onChange(date);
  }, [onChange]);

  return (
    <SelectDatepicker
      selectedDate={value}
      onDateChange={onDateChange}
    />
  );
};