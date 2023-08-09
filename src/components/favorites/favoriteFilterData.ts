import { Sort, SortPropertyEnum } from './types';

export const sortList: Sort[] = [
  { name: 'популярности (DESC)', sortProperty: SortPropertyEnum.RAITING_DESC },
  { name: 'популярности (ASK)', sortProperty: SortPropertyEnum.RAITING_ASK },
  { name: 'цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'цене (ASK)', sortProperty: SortPropertyEnum.PRICE_ASK },
  { name: 'алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту (ASK)', sortProperty: SortPropertyEnum.TITLE_ASK },
];
