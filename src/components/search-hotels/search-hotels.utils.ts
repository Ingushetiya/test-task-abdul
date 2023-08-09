import { format } from 'date-fns';

export const getValidDateFormat = (date: Date) => format(date, 'yyyy-MM-dd');
