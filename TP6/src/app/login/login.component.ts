import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserCredential, User } from '../services/users.interface';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private credential: UserCredential = new UserCredential();
  private error: string;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {

    this.error = '';

    this.authenticationService
      .authenticate(this.credential.email, this.credential.password)
      .then(user => {
        this.router.navigate(['']);
      })
      .catch(err => {

        console.log(err);

        this.error = err._body;

      });
  }

}
