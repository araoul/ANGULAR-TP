export enum Status {
  online = 'online',
  offline = 'offline',
  busy = 'busy'
}

export class UserCredential {
  email: string;
  password: string;
}

export class User {
  id: number;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  status: Status;
}

export interface IUsersService {
  getUsers(): Promise<User[]>;
}
