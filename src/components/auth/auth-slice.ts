import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<string>) {
      state.token = payload;
      localStorage.setItem('token', payload);
    },
    logout(state) {
      state.token = '';
      localStorage.removeItem('token');
    },
  },
});

export const { login, logout } = authSlice.actions;
