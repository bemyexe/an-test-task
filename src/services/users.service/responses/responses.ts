import { User } from '../../../models/users/users';

interface SupportResponse {
  url: string;
  text: string;
}

export interface IUserReponse {
  data: User;
  support: SupportResponse;
}
export interface IUsersReponse {
  data: User[];
  support: SupportResponse;
}
