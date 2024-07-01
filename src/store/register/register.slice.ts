import { createSlice } from '@reduxjs/toolkit';

import StorageService from '../../storage-services/auth-storage.service/auth-storage.service';
import { logout } from '../auth/auth.thunks';

import { register } from './register.thunks';

export interface IRegisterState {
  registerLoading: boolean;
  registerError?: undefined | string;
  registerSuccess: boolean;
}

const REGISTER_SLICE_NAME = 'register-state';

const INITIAL_REGISTER_STATE: IRegisterState = {
  registerLoading: false,
  registerError: undefined,
  registerSuccess: false,
};

const registerSlice = createSlice({
  name: REGISTER_SLICE_NAME,
  initialState: INITIAL_REGISTER_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.registerLoading = true;
        state.registerError = undefined;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.registerLoading = false;
        StorageService.setToken(payload.token);
        state.registerSuccess = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.registerLoading = false;
        state.registerError = payload;
      })
      .addCase(logout, () => {
        return INITIAL_REGISTER_STATE;
      });
  },
});

export const registerReducer = registerSlice.reducer;
