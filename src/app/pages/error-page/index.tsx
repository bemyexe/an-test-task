import { Link } from 'react-router-dom';

import { STRINGS } from '../../../constants/strings';
import { Button } from '../../components/shared/button';
import { Page } from '../../components/shared/page';

import './style.scss';

export const ErrorPage = () => {
  return (
    <Page className="error-page">
      <div className="error-page-main">
        {STRINGS.notFound}
        <Button title={STRINGS.back} onClick={() => {}}>
          <Link to={'/main'} replace>
            {STRINGS.backToMain}
          </Link>
        </Button>
      </div>
    </Page>
  );
};
