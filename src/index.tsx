import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { router } from './router-path';
import { store } from './store';

import './styles/global-styles.scss';
import './styles/colors.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster richColors />
    </Provider>
  </React.StrictMode>
);
