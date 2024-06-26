import { SIGN_PAGE_STRINGS } from '../../../constants/strings';
import { Button } from '../../components/shared/button';
import { Input } from '../../components/shared/input';
import { Page } from '../../components/shared/page';

import './style.scss';

export const AuthPage = () => {
  return (
    <Page className="auth-page">
      <div className="auth-main">
        <h1 className="auth-title">Авторизация</h1>
        <form className="auth-form">
          <Input
            value={''}
            error={''}
            onChange={() => {}}
            placeholder={SIGN_PAGE_STRINGS.emailExample}
            title={SIGN_PAGE_STRINGS.email}
          />
          <Input
            value={''}
            error={''}
            onChange={() => {}}
            placeholder={SIGN_PAGE_STRINGS.hiddenPass}
            type="password"
            title={SIGN_PAGE_STRINGS.password}
          />
          <Button
            onClick={() => {}}
            title={SIGN_PAGE_STRINGS.logIn}
            className="auth-button"
          >
            {SIGN_PAGE_STRINGS.logIn}
          </Button>
        </form>
      </div>
    </Page>
  );
};
