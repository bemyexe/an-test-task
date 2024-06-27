import { createAppAsyncThunk } from '../../helpers/create-thunk';
import { UsersService } from '../../services/users.service/users.service';

export const getUser = createAppAsyncThunk(
  'user/getUser',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await UsersService.getUser(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.status);
    }
  }
);

export const getUsers = createAppAsyncThunk(
  'users/getUsers',
  async (page: number = 0, { rejectWithValue }) => {
    try {
      const response = await UsersService.getUsers(page);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.status);
    }
  }
);
