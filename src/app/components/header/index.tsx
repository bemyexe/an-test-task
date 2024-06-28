import { useLocation } from 'react-router-dom';

import { STRINGS } from '../../../constants/strings';
import { useAppDispatch } from '../../../store';
import { logout } from '../../../store/auth/auth.thunks';
import { Button } from '../shared/button';

import './style.scss';

export const Header = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isMainPage = location.pathname === '/main';
  return (
    <header className="header">
      <div className="header-left">
        {!isMainPage && (
          <Button title={STRINGS.back} onClick={() => {}}>
            {STRINGS.back}
          </Button>
        )}
      </div>
      <div className="header-right">
        <Button title={STRINGS.exit} onClick={() => dispatch(logout())}>
          {STRINGS.exit}
        </Button>
      </div>
    </header>
  );
};
