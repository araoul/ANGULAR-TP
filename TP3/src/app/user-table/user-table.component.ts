import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../services/users.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  private hideOffline = false;
  private _users: User[];
  public label = "All Users";

  @Output()
  private clickUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  toggleStatus() {
    if(this.hideOffline){
      this.label = "All Users"
    }
    else { this.label= "Online Only"}
    this.hideOffline = !this.hideOffline;
  
  } 

  @Input()
  set users(users: User[]) {
    console.log('Table users =>', users);
    this._users = users;
  }

  get users() {
    return this._users;
  }

  onClickUser(user) {
    console.log('UserTable, user clicked =>', user);
    this.clickUser.emit(user);
  }

}
