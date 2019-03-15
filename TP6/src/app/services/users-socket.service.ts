import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { User } from './users.interface';

@Injectable()
export class UsersSocketService {

  private socket;

  constructor() {

  }

  getUsers(): Observable<User[]> {
    const observable:Observable<User[]> = new Observable(observer => {

      this.socket = io(window.location.origin);

      this.socket.on('users.update', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }

}
