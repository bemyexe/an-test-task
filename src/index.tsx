import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignPage } from './app/pages/SignPage';

import './styles/global-styles.scss';
import './styles/colors.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
