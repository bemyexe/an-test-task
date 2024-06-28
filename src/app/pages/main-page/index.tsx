import { STRINGS } from '../../../constants/strings';
import { Page } from '../../components/shared/page';
import { UserGrid } from '../../components/users-grid';

import './style.scss';

export const MainPage = () => {
  return (
    <Page className="main-page" withHeader>
      <div className="main-page-header">
        <h1 className="main-page-title">{STRINGS.ourTeam}</h1>
        <p className="main-page-lorem">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          nihil aliquam maiores libero! Quidem saepe officiis id facere labore?
        </p>
      </div>
      <div className="main-page-container">
        <UserGrid />
      </div>
    </Page>
  );
};

/* TODO 
роуты, переходы по кнопкам, грид юзеров, адапатив для хедера*/
