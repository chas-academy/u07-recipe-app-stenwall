import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthStateService } from '../services/auth-state.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private authStateService: AuthStateService,
    private router: Router
  ) {
    // this.authStateService.userAuthState.subscribe((result) => {
    //   this.isLoggedIn = result;
    // });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authStateService.userAuthState.pipe(map((response: boolean) => {
        if (response) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }), catchError((error) => {
        console.log(error);
        this.router.navigate(['/login']);
        return of(false);
    }));

      // const url: string = state.url;

      // console.log(this.isLoggedIn);

      // return this.checkLogin(url);
    // return true;

    // if (!this.isLoggedIn) {
    //   return this.router.createUrlTree(
    //     ['/login', { message: 'Log in or register a user' }]
    //     // { skipLocationChange: true }
    //   );
    // } else {
    //   return true;
    // }
  }

  // checkLogin(url: string): true|UrlTree {
  //   if (this.isLoggedIn) { 
  //     return true;
  //   }

  //   // Store the attempted URL for redirecting
  //   // this.authService.redirectUrl = url;

  //   // Redirect to the login page
  //   return this.router.parseUrl('/login');
  // }
  
}
