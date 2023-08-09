import { Button, TextInput } from '@mantine/core';

import { DatePickerInput, DatesProvider } from '@mantine/dates';
import { ChangeEvent, useEffect, useState } from 'react';
import 'dayjs/locale/ru';
import { CalendarIcon } from '../shared/icons/calendarIcon';

import styles from './search-hotels.module.scss';
import { getHotelFilter } from './search-hotel-slice';
import { useAppDispatch } from '../../hooks/app-use-dispatch';

import { getValidDateFormat } from './search-hotels.utils';
export const SearchHotels = () => {
  const [location, setLocation] = useState('Москва');
  const [checkDate, setCheckDate] = useState<Date | null>(new Date());
  const [dayCount, setDayCount] = useState('1');
  const checkIn = getValidDateFormat(checkDate ?? new Date());
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getHotelFilter({ location, checkIn, dayCount }));
  }, [dispatch]);

  const handleChangeLocation = (event: ChangeEvent<HTMLInputElement>) =>
    setLocation(event.target.value);
  const handleChangeDayCount = (event: ChangeEvent<HTMLInputElement>) =>
    setDayCount(event.target.value);

  const handleSearch = () => {
    dispatch(getHotelFilter({ location, checkIn, dayCount }));
  };

  return (
    <div className={styles.wrapper}>
      <TextInput
        placeholder="Выберите город"
        className={styles.textInput}
        classNames={{
          label: styles.label,
        }}
        label="Локация"
        value={location}
        onChange={handleChangeLocation}
      />
      <DatesProvider settings={{ locale: 'ru' }}>
        <DatePickerInput
          rightSection={<CalendarIcon />}
          className={styles.dateInput}
          classNames={{
            label: styles.label,
          }}
          valueFormat="DD.MM.YY"
          datatype="DD.MM.YY"
          label="Дата заселения"
          placeholder="Выберите дату"
          value={checkDate}
          onChange={setCheckDate}
          mx="auto"
        />
      </DatesProvider>

      <TextInput
        placeholder="Количество дней"
        className={styles.textInput}
        classNames={{ label: styles.label }}
        label="Количество дней"
        value={dayCount}
        onChange={handleChangeDayCount}
      />
      <Button className={styles.button} onClick={handleSearch}>
        Найти
      </Button>
    </div>
  );
};
