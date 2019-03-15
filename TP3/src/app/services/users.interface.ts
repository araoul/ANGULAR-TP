export enum Status {
  online = 'online',
  offline = 'offline',
  busy = 'busy'
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
    create(user: User): Promise<User>;
exists(email: string): Promise<boolean>;
get(email: string): Promise<User>;
}
