import { createBrowserRouter } from 'react-router-dom';

import { AuthPage } from '../app/pages/auth-page';
import { ErrorPage } from '../app/pages/error-page';
import { MainPage } from '../app/pages/main-page';
import { SignUpPage } from '../app/pages/signup-page';
import { UserPage } from '../app/pages/user-page';
import { SecuredRoutes } from '../app/routes/secured-routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SecuredRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/main',
        element: <MainPage />,
      },
      {
        path: '/users/:userId',
        element: <UserPage />,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
