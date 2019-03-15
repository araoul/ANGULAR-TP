import { Injectable } from '@angular/core';
import { IUsersService, User } from './users.interface';

@Injectable()
export class UsersService {

  constructor() { }

  getUsers(): Promise<User[]> {
    return null;
  }

}
