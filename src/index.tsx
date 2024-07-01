import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthPage } from './app/pages/auth-page';
import { ErrorPage } from './app/pages/error-page';
import { MainPage } from './app/pages/main-page';
import { SignUpPage } from './app/pages/signup-page';
import { UserPage } from './app/pages/user-page';
import { SecuredRoutes } from './app/routes/secured-routes';
import { store } from './store';

import './styles/global-styles.scss';
import './styles/colors.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SecuredRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'main',
        element: <MainPage />,
      },
      {
        path: 'users/:userId',
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
