import { createSlice } from '@reduxjs/toolkit';

import StorageService from '../../storage-services/auth-storage.service/auth-storage.service';

import { register } from './register.thunks';

export interface IRegisterState {
  registerLoading: boolean;
  registerError?: undefined | string;
}

const REGISTER_SLICE_NAME = 'register-state';

const INITIAL_REGISTER_STATE: IRegisterState = {
  registerLoading: false,
  registerError: undefined,
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
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.registerLoading = false;
        state.registerError = payload;
      });
  },
});

export const registerReducer = registerSlice.reducer;
