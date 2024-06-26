import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

import { IAuthState } from './auth.slice';

const selectAuthState: (state: RootState) => IAuthState = (state) =>
  state.authState;

const selectLoginLoading = createSelector(
  selectAuthState,
  (state) => state.loginLoading
);
const selectLoginError = createSelector(
  selectAuthState,
  (state) => state.loginError
);

export const authSelectors = {
  selectLoginLoading,
  selectLoginError,
};
