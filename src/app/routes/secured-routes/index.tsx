import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import StorageService from '../../../storage-services/auth-storage.service/auth-storage.service';
import { Header } from '../../components/header';
import { Loader } from '../../components/shared/loader';

export const SecuredRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = StorageService.getToken();
    if (!token) {
      navigate('/auth');
    } else {
      setIsLoading(false);
      navigate('/main');
    }
  }, [navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={'secured-routes'}>
      <Header />
      <Outlet />
    </div>
  );
};
