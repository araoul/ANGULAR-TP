import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription, Observable } from 'rxjs';

import { User } from '../services/users.interface';
import { UsersService } from '../services/users.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { AuthenticationService } from '../services/authentication.service';
import { UsersSocketService } from '../services/users-socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private users: Observable<User[]>;
  private subscription: Subscription;
  private isConnected: boolean;
  private currentUser: User;

  constructor(private userService: UsersService,
              public dialog: MatDialog,
              public authService: AuthenticationService,
              private usersSocketService: UsersSocketService) {
    this.updateUserState();
    this.subscription = this.authService.onConnectionChange.subscribe(isConnected => this.updateUserState());
  }

  private updateUserState() {
    this.isConnected = this.authService.isConnected();
    this.currentUser = this.authService.user;
  }

  ngOnInit() {
    const source1 = this.userService.getObservableUsers();
    const source2 = this.usersSocketService.getUsers();

    this.users = Observable.merge(
      source1,
      source2
    );
  }

  private onClickUser(user: User) {

    console.log('Show user dialog =>', user);

    const dialogRef = this.dialog.open(UserDialogComponent);
    dialogRef.componentInstance.user = user;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
