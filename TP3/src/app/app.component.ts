import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { User } from './services/users.interface';
import { UsersService } from './services/users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tp 3';
  private users: User[];


  constructor(private userService: UsersService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
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

}
