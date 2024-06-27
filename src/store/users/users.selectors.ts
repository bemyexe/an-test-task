import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

import { IUsersState } from './users.slice';

const selectUsersState: (state: RootState) => IUsersState = (state) =>
  state.usersState;

const selectSingleUser = createSelector(
  selectUsersState,
  (state) => state.singleUser
);

const selectSingleUserLoading = createSelector(
  selectUsersState,
  (state) => state.singleUserLoading
);
const selectSingleUserError = createSelector(
  selectUsersState,
  (state) => state.singleUserError
);

const selectUsersList = createSelector(
  selectUsersState,
  (state) => state.usersList
);

const selectUsersLoading = createSelector(
  selectUsersState,
  (state) => state.usersLoading
);
const selectUsersError = createSelector(
  selectUsersState,
  (state) => state.usersError
);

export const usersSelectors = {
  selectSingleUser,
  selectSingleUserLoading,
  selectSingleUserError,
  selectUsersList,
  selectUsersLoading,
  selectUsersError,
};
