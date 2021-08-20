import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthStateService } from '../services/auth-state.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authStateService: AuthStateService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authStateService.userAuthState.pipe(map((response: boolean) => {
        if (response) {
            return true;
        }
        this.snackBar.open('Please log in to visit that page.', '', {
          duration: 2500,
          verticalPosition: 'top'
        });
        this.router.navigate(['/login']);
        return false;
    }), catchError((error) => {
        console.log(error);
        this.router.navigate(['/login']);
        return of(false);
    }));
  }
}
