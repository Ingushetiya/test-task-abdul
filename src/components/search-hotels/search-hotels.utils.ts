import { format } from 'date-fns';

export const getValidDateFormat = (date: Date) => format(date, 'yyyy-MM-dd');

export const getPriceRandom = () => Math.floor(Math.random() * 50000);

export const getRaitingRandom = () => Math.random() * (5 - 1) + 1;
