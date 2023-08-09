import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoritesHotels } from './types';
import { FilterHotel } from '../search-hotels/types';

const initialState: FavoritesHotels = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite(state, { payload }: PayloadAction<FilterHotel[]>) {
      state.favorites = payload;
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
