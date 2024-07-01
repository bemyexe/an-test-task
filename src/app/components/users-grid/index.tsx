import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../store';
import { usersSelectors } from '../../../store/users/users.selectors';
import { getUsers } from '../../../store/users/users.thunks';

import { UserCard } from './user-card';
import { UserCardSkeleton } from './user-card-skeleton';

import './style.scss';

export const UserGrid = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(usersSelectors.selectUsersList);
  const isUserLoading = useSelector(usersSelectors.selectUsersLoading);
  const isUserError = useSelector(usersSelectors.selectUsersError);

  useEffect(() => {
    if (!users || users.length === 0) {
      dispatch(getUsers(1));
    }
  }, [dispatch, users]);

  const usersSkeleton = useMemo(
    () => [...new Array(6)].map((_, i) => <UserCardSkeleton key={i} />),
    []
  );

  const usersGrid = useMemo(
    () => users?.map((user) => <UserCard key={user.id} {...user} />),
    [users]
  );

  if (isUserLoading) {
    return <div className="users-grid">{usersSkeleton}</div>;
  }

  if (isUserError) {
    return <div className="users-grid">{isUserError}</div>;
  }

  return <div className="users-grid">{usersGrid}</div>;
};
