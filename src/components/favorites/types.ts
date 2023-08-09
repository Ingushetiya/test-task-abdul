import { FilterHotel } from '../search-hotels/types';

export interface FavoritesHotels {
  favorites: FilterHotel[];
}

export type sortDataType = {
  raiting: string;
  price: number;
};
