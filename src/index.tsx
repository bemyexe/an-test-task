import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignUpPage } from './app/pages/signup-page';
import { store } from './store';

import './styles/global-styles.scss';
import './styles/colors.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
