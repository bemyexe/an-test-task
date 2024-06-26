import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/auth.slice';
import { registerReducer } from './register/register.slice';

export const store = configureStore({
  reducer: { authState: authReducer, registerState: registerReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
