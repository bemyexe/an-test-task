import { User, Users } from '../../models/users/users';
import { HttpClient } from '../instance';

import { IUserReponse, IUsersReponse } from './responses/responses';

class UsersServiceImpl {
  private readonly usersEndpoint: string = 'users/';

  getUsers = async (page: number = 0): Promise<Users> => {
    return await HttpClient.get<IUsersReponse>(
      `${this.usersEndpoint}?page=${page}`
    ).then((res) => res.data.data);
  };
  getUser = async (id: number): Promise<User> => {
    return HttpClient.get<IUserReponse>(`${this.usersEndpoint}${id}`).then(
      (res) => res.data.data
    );
  };
}

export const UsersService = new UsersServiceImpl();
