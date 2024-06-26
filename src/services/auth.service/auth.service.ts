import { HttpClient } from '../instance';

import { LoginRequest } from './requests/requests';
import { LoginResponse, RegisterResponse } from './responses/responses';

class AuthServiceImpl {
  login = async (body: LoginRequest): Promise<LoginResponse> => {
    return HttpClient.post<LoginResponse>('login', body).then(
      (res) => res.data
    );
  };
  register = async (body: LoginRequest): Promise<RegisterResponse> => {
    return HttpClient.post<RegisterResponse>('register', body).then(
      (res) => res.data
    );
  };
}

export const AuthService = new AuthServiceImpl();
