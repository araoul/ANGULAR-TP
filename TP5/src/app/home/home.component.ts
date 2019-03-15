import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';

import { User } from '../services/users.interface';
import { UsersService } from '../services/users.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private users: User[];
  private subscription: Subscription;
  private isConnected: boolean;
  private currentUser: User;

  constructor(private userService: UsersService,
              public dialog: MatDialog,
              public authService: AuthenticationService) {
    this.updateUserState();
    this.subscription = this.authService.onConnectionChange.subscribe(isConnected => this.updateUserState());
  }

  private updateUserState() {
    this.isConnected = this.authService.isConnected();
    this.currentUser = this.authService.user;
  }

  ngOnInit() {
    this.userService.getUsers().then(users => {
      console.log('Users =>', users);
      this.users = users;
    });
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
