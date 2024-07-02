import { useLocation, useNavigate } from 'react-router-dom';

import { STRINGS } from '../../../constants/strings';
import { useAppDispatch } from '../../../store';
import { logout } from '../../../store/auth/auth.thunks';
import { Button } from '../shared/button';
import { Icon } from '../shared/icon';
import { Icons } from '../shared/icon/enum/icon-enum';

import './style.scss';

export const Header = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isMainPage = location.pathname === '/main';
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth');
  };

  const leftContent = !isMainPage && (
    <>
      <Button
        className="header-left-back-button"
        title={STRINGS.back}
        onClick={handleGoBack}
      >
        {STRINGS.back}
      </Button>
      <Icon
        onClick={handleGoBack}
        name={Icons.back}
        className="header-left-back-icon"
      />
    </>
  );

  const rightContent = (
    <>
      <Button
        className="header-right-logout-button"
        title={STRINGS.exit}
        onClick={handleLogout}
      >
        {STRINGS.exit}
      </Button>
      <Icon
        className="header-right-logout-icon"
        name={Icons.logOut}
        onClick={handleLogout}
      />
    </>
  );

  return (
    <header className="header">
      <div className="header-left">{leftContent}</div>
      <div className="header-right">{rightContent}</div>
    </header>
  );
};
