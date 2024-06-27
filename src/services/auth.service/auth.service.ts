import { HttpClient } from '../instance';

import { LoginRequest } from './requests/requests';
import { LoginResponse, RegisterResponse } from './responses/responses';

class AuthServiceImpl {
  private readonly loginEndpoint: string = 'login';
  private readonly registerEndpoint: string = 'register';

  login = async (body: LoginRequest): Promise<LoginResponse> => {
    return HttpClient.post<LoginResponse>(this.loginEndpoint, body).then(
      (res) => res.data
    );
  };
  register = async (body: LoginRequest): Promise<RegisterResponse> => {
    return HttpClient.post<RegisterResponse>(this.registerEndpoint, body).then(
      (res) => res.data
    );
  };
}

export const AuthService = new AuthServiceImpl();
