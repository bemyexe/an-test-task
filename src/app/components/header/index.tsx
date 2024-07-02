import { useLocation, useNavigate } from 'react-router-dom';

import { STRINGS } from '../../../constants/strings';
import { useAppDispatch } from '../../../store';
import { logout } from '../../../store/auth/auth.thunks';
import useWindowSize from '../../hooks/use-window-size';
import { Button } from '../shared/button';
import { Icon } from '../shared/icon';
import { Icons } from '../shared/icon/enum/icon-enum';

import './style.scss';

export const Header = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isMainPage = location.pathname === '/main';
  const navigate = useNavigate();
  const { isMobile } = useWindowSize();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth');
  };

  const leftContent = isMobile
    ? !isMainPage && (
        <Icon onClick={handleGoBack} name={Icons.back} className="back" />
      )
    : !isMainPage && (
        <Button title={STRINGS.back} onClick={handleGoBack}>
          {STRINGS.back}
        </Button>
      );

  const rightContent = isMobile ? (
    <Icon name={Icons.logOut} onClick={handleLogout} />
  ) : (
    <Button title={STRINGS.exit} onClick={handleLogout}>
      {STRINGS.exit}
    </Button>
  );

  return (
    <header className="header">
      <div className="header-left">{leftContent}</div>
      <div className="header-right">{rightContent}</div>
    </header>
  );
};
