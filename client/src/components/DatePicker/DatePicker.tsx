// @ts-nocheck @todo fix issues
import { useState, useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';
import styles from "./DatePicker.module.scss"

export const DatePicker = ({ onChange }) => {
  const [value, setValue] = useState<Date | null>();

  const onDateChange = useCallback((date: Date) => {
    setValue(date);
		onChange(date);
  }, [onChange]);

  return (
    <SelectDatepicker
      className={styles.container}
      selectedDate={value}
      onDateChange={onDateChange}
    />
  );
};