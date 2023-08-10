import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { FilterHotel, FilterHotels, FilterParams } from './types';
import { getPriceRandom, getRaitingRandom } from './search-hotels.utils';

const initialState: FilterHotels = {
  isLoading: false,
  filteredHotels: [],
  error: null,
};

export const getHotelFilter = createAsyncThunk(
  'hotel/getFilterHotel',
  async ({ location, checkIn }: FilterParams, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://engine.hotellook.com/api/v2/lookup.json?query=${location}&lang=ru&checkIn=${checkIn}&limit=10`,
      );

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return data.results.hotels;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const filterHotelSlice = createSlice({
  name: 'filterHotel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHotelFilter.pending, (state) => {
      state.filteredHotels = [];
      state.isLoading = true;
    });

    builder.addCase(
      getHotelFilter.fulfilled,
      (state, { payload }: PayloadAction<FilterHotel[]>) => {
        state.filteredHotels = payload.map((item) => ({
          ...item,
          price: getPriceRandom(),
          raiting: getRaitingRandom(),
        }));
        state.isLoading = false;
      },
    );

    builder.addCase(getHotelFilter.rejected, (state, { payload }: PayloadAction<unknown>) => {
      state.filteredHotels = [];
      state.error = payload;
    });
  },
});
