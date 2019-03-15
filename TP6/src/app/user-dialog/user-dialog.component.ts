import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../services/users.interface';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  public user: User;

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>) {
    console.log(dialogRef.componentInstance);
  }

  ngOnInit() {
  }

}
