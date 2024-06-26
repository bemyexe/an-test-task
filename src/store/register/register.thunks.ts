import { createAppAsyncThunk } from '../../helpers/create-thunk';
import { AuthService } from '../../services/auth.service/auth.service';
import { LoginRequest } from '../../services/auth.service/requests/requests';

export const register = createAppAsyncThunk(
  'register/registerUser',
  async (requestData: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await AuthService.register(requestData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.status);
    }
  }
);
