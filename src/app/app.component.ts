import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { TokenService } from './services/token.service';
import { AuthStateService } from './services/auth-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title: string = 'Parsley & Sage';
  visibleHeader: boolean = false;
  isSignedIn: boolean;

  constructor(
    public router: Router,
    public tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private authStateService: AuthStateService
  ) {
    this.router.events
      .pipe(
        filter((events) => events instanceof NavigationEnd),
        map((evt) => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) =>
        data.header === true
          ? (this.visibleHeader = true)
          : (this.visibleHeader = false)
      );
  }

  ngOnInit(): void {
    this.authStateService.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });
  }
}

// source to showing header-component conditionally:
// -----------------------------------------------------------------------
// https://ramya-bala221190.medium.com/how-to-flexibly-show-or-hide-components-like-header-navigation-bar-in-angular-1f4b14fc51cc
