import { createAction } from '@reduxjs/toolkit';

import { createAppAsyncThunk } from '../../helpers/create-thunk';
import { AuthService } from '../../services/auth.service/auth.service';
import { LoginRequest } from '../../services/auth.service/requests/requests';

export const login = createAppAsyncThunk(
  'login/loginUser',
  async (requestData: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(requestData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.status);
    }
  }
);

export const logout = createAction('logout');
