import { FilterHotel } from '../search-hotels/types';

export const getSortData = (arr: FilterHotel[] = [], typeSort: 'raiting' | 'price') => {
  if (typeSort === 'price') {
    return [...arr].sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (typeSort === 'raiting') {
    return [...arr].sort((a, b) => a.raiting - b.raiting);
  }

  return arr;
};
