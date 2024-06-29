import { useState } from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../../../models/users/users';
import { Icon } from '../../shared/icon';
import { Icons } from '../../shared/icon/enum/icon-enum';

import './style.scss';

export const UserCard = ({ id, first_name, last_name, avatar }: User) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="user-card">
      <img className="user-card-avatar" src={avatar} alt="avatar" />
      <div className="user-card-name">
        <Link to={`/users/${id}`}>
          {first_name} {last_name}
        </Link>
      </div>
      <div className="user-like-container">
        <Icon
          className="user-like"
          height="12px"
          width="14px"
          onClick={() => setIsLiked((prev) => !prev)}
          name={isLiked ? Icons.like : Icons.likeOff}
        />
      </div>
    </div>
  );
};
