import { useLocation } from 'react-router-dom';

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

  const { isMobile } = useWindowSize();

  const handleBackButtonClick = () => {};

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  };

  const leftContent = !isMobile ? (
    !isMainPage && (
      <Button title={STRINGS.back} onClick={handleBackButtonClick}>
        {STRINGS.back}
      </Button>
    )
  ) : (
    <Icon onClick={handleBackButtonClick} name={Icons.back} className="back" />
  );

  const rightContent = !isMobile ? (
    <Button title={STRINGS.exit} onClick={handleLogoutButtonClick}>
      {STRINGS.exit}
    </Button>
  ) : (
    <Icon name={Icons.logOut} onClick={handleLogoutButtonClick} />
  );

  return (
    <header className="header">
      <div className="header-left">{leftContent}</div>
      <div className="header-right">{rightContent}</div>
    </header>
  );
};
