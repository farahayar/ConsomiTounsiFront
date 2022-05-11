import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username:'Username',
    password:'Password'
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Authservice: AuthenticationService) { }

  ngOnInit() {

            // reset login status
            this.Authservice.logOut();

            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  checkLogin() {
    (this.Authservice.authenticate(this.form.username,this.form.password).subscribe(
      data => {
        this.router.navigate([''])
        this.isLoginFailed = false
      },
      error => {
        this.isLoginFailed = true

      }
    )
    );

  }

}
