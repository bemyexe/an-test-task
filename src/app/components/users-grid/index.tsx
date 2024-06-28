import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../store';
import { usersSelectors } from '../../../store/users/users.selectors';
import { getUsers } from '../../../store/users/users.thunks';

import { UserCard } from './user-card';

import './style.scss';

export const UserGrid = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(usersSelectors.selectUsersList);
  useEffect(() => {
    dispatch(getUsers(1));
  }, [dispatch]);

  return (
    <div className="users-grid">
      {users?.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};
