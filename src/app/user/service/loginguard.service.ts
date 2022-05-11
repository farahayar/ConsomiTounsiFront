import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './auth.service';
@Injectable()
export class LoginguardService implements CanActivate {

    constructor(private router: Router, private AuthService: AuthenticationService) { }

    canAccess(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        if (localStorage.getItem('username')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

    canActivate(): boolean {
      if (this.AuthService.isUserLoggedIn()) {
          this.router.navigate(['/home'])
          return false
      } else {
          return true
      }
  }
}
