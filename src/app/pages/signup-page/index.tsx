import { SIGN_PAGE_STRINGS } from '../../../constants/strings';
import { Button } from '../../components/shared/button';
import { Input } from '../../components/shared/input';
import { Page } from '../../components/shared/page';

import './style.scss';

export const SignUpPage = () => {
  return (
    <Page className="signUp-page">
      <div className="signUp-main">
        <h1 className="signUp-title">{SIGN_PAGE_STRINGS.title}</h1>
        <form className="signUp-form" action="" method="post">
          <Input
            title={SIGN_PAGE_STRINGS.name}
            value={''}
            error={''}
            placeholder={SIGN_PAGE_STRINGS.nameExample}
          />
          <Input
            title={SIGN_PAGE_STRINGS.email}
            value={''}
            error={''}
            placeholder={SIGN_PAGE_STRINGS.emailExample}
          />
          <Input
            title={SIGN_PAGE_STRINGS.password}
            value={''}
            error={''}
            placeholder={SIGN_PAGE_STRINGS.hiddenPass}
            type="password"
          />
          <Input
            title={SIGN_PAGE_STRINGS.confirmPass}
            value={''}
            error={''}
            type="password"
            placeholder={SIGN_PAGE_STRINGS.hiddenPass}
          />
          <Button
            title={SIGN_PAGE_STRINGS.registration}
            onClick={() => {}}
            className="signUp-button"
          >
            {SIGN_PAGE_STRINGS.registration}
          </Button>
        </form>
      </div>
    </Page>
  );
};
