import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {IUsersService, Status, User} from './users.interface';

@Injectable()
export class UsersService implements IUsersService {

  constructor(private http: Http) { }

  create(user: User): Promise<User> {
    user.status = Status.offline;
    return this.http
      .post('/api/users', {user})
      .map(response => response.json())
      .toPromise();
  }

  exists(email: string): Promise<boolean> {
    return this.http
      .get(`/api/users/${email}`)
      .toPromise()
      .then(() => true )
      .catch(() => false );
  }

  getUsers(): Promise<User[]> {
    return this.http
      .get('api/users')
      .map(response => response.json())
      .toPromise();
  }


  get(email: string): Promise<User> {
    return this.http
      .get(`/api/users/${email}`)
      .map(response => response.json())
      .toPromise();
  }

}
