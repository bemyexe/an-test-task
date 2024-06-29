import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TEXT } from '../../../constants/strings';
import { useAppDispatch } from '../../../store';
import { usersSelectors } from '../../../store/users/users.selectors';
import { getUser } from '../../../store/users/users.thunks';
import { Icon } from '../../components/shared/icon';
import { Icons } from '../../components/shared/icon/enum/icon-enum';
import { Page } from '../../components/shared/page';
import { ErrorPage } from '../error-page';

import './style.scss';

export const UserPage = () => {
  const { userId = '' } = useParams();
  const dispatch = useAppDispatch();
  const user = useSelector(usersSelectors.selectSingleUser);
  const error = useSelector(usersSelectors.selectSingleUserError);
  const isLoading = useSelector(usersSelectors.selectSingleUserLoading);
  useEffect(() => {
    dispatch(getUser(Number(userId)));
  }, [dispatch, userId]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Page className="user-page" withHeader>
      <div className="user-page-header">
        <div className="user-page-header-container">
          <img
            className="user-page-header-avatar"
            src={user?.avatar}
            alt="avatar"
          />
          <div className="user-page-header-info">
            <div className="user-page-header-info-name">
              {user?.first_name} {user?.last_name}
            </div>
            <div className="user-page-header-info-job">{TEXT.job}</div>
          </div>
        </div>
      </div>
      <div className="user-page-main">
        <div className="user-page-main-text">{TEXT.SingleUserPage}</div>
        <div className="user-page-main-info">
          <div className="user-page-main-phone">
            <Icon
              className="user-page-main-info-phone-icon"
              name={Icons.phone}
            />
            {TEXT.phone}
          </div>
          <div className="user-page-main-email">
            <Icon className="user-page-main-info-mail-icon" name={Icons.mail} />
            {user?.email}
          </div>
        </div>
      </div>
    </Page>
  );
};
