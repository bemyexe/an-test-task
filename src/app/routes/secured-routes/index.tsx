import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import StorageService from '../../../storage-services/auth-storage.service/auth-storage.service';
import { Header } from '../../components/header';
import { MainPage } from '../../pages/main-page';
import { UserPage } from '../../pages/user-page';

export const SecuredRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = StorageService.getToken();
    if (!token) {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <div className={'secured-routes'}>
      <Header />
      <Routes>
        <Route path={'/main'} element={<MainPage />} />
        <Route path={'/users/:userId'} element={<UserPage />} />
      </Routes>
    </div>
  );
};
