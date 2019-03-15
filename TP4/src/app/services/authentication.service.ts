import { Injectable, EventEmitter } from '@angular/core';
import { User } from './users.interface';
import { UsersService } from './users.service';

@Injectable()
export class AuthenticationService {
  private _onConnexionChange: EventEmitter<boolean> = new EventEmitter();

  constructor(private usersService: UsersService) { }

  public authenticate(email: string, password: string): Promise<boolean> {

    console.log('authenticate user by email', email, 'password', password);

    return this.usersService
      .get(email)

      .then<any>(user => {

        if (user && user.password === password) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this._onConnexionChange.emit(true);
          return true;
        }
        this._onConnexionChange.emit(false);
        return Promise.reject({_body: 'e-mail ou mot de passe incorrect'});
      });

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
