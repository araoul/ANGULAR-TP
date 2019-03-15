import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { FakeUsersService } from './services/users.fake.service';
import { UserTableComponent } from './user-table/user-table.component';
import { UsersOnlinePipe } from './user-table/users-online.pipe';
import { UserDialogComponent } from './user-dialog/user-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UsersOnlinePipe,
    UserDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [
    {provide: UsersService, useClass: FakeUsersService} //UsersService utilise le FakeUserService (dependency-injection-providers)
  ],
  bootstrap: [AppComponent],
  entryComponents: [UserDialogComponent]
})
export class AppModule { }
