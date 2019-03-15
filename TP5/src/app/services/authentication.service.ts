import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './users.interface';
import { UsersService } from './users.service';

@Injectable()
export class AuthenticationService {
  private _onConnexionChange: EventEmitter<boolean> = new EventEmitter();

  constructor(private usersService: UsersService, private http: Http) { }

  public authenticate(email: string, password: string): Promise<boolean> {

    console.log('authenticate user by email', email, 'password', password);

    return this
      .http
      .post('/api/users/authenticate', { email: email, password: password })
      .toPromise()
      .then(response => response.json())
      .then(user => {
        this._onConnexionChange.emit(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      })
      .catch(() => false );
  }

  public logout(): Promise<any> {

    localStorage.removeItem('currentUser');
    this._onConnexionChange.emit(false);

    return Promise.resolve();
  }

  public isConnected(): boolean {
    console.log('isConnected =>', localStorage.getItem('currentUser'));
    return !!JSON.parse(localStorage.getItem('currentUser'));
  }

  get onConnectionChange(): EventEmitter<boolean> {
    return this._onConnexionChange;
  }

  get user() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
