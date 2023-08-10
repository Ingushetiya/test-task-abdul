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
    setFavorites(state, { payload }: PayloadAction<FilterHotel[]>) {
      state.favorites = payload;
    },
  },
});

export const { setFavorites } = favoriteSlice.actions;
