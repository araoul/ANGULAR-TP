import { Injectable } from '@angular/core';
import { IUsersService, User } from './users.interface';

@Injectable()
export class UsersService {

  constructor() { }

  create(user: User): Promise<User> { // appel la méthode create de userFakeService
    return null;
  }

  exists(email: string): Promise<boolean> {
    return null;
  }

  getUsers(): Promise<User[]> {
    return null;
  }


  get(email: string): Promise<User> {
    return null;
  }

}
