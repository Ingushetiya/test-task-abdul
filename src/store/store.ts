import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../components/auth/auth-slice';
import { filterHotelSlice } from '../components/search-hotels/search-hotel-slice';
import { favoriteSlice } from '../components/favorites/favorite-slice';

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    filterHotel: filterHotelSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
