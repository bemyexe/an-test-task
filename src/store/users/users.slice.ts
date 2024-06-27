import { createSlice } from '@reduxjs/toolkit';

import { User, Users } from '../../models/users/users';

import { getUser, getUsers } from './users.thunks';

export interface IUsersState {
  singleUser?: User;
  singleUserLoading: boolean;
  singleUserError?: undefined | string;

  usersList?: Users;
  usersLoading: boolean;
  usersError?: undefined | string;
}

const USERS_SLICE_NAME = 'users-state';

const INITIAL_USERS_STATE: IUsersState = {
  singleUser: undefined,
  singleUserLoading: false,
  singleUserError: undefined,

  usersList: undefined,
  usersLoading: false,
  usersError: undefined,
};

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: INITIAL_USERS_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.singleUserLoading = true;
        state.singleUserError = undefined;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.singleUserLoading = false;
        state.singleUser = payload;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.singleUserLoading = false;
        state.singleUserError = payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.usersLoading = true;
        state.usersError = undefined;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.usersLoading = false;
        state.usersList = payload;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.usersLoading = false;
        state.usersError = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
