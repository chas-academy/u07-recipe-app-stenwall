import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Parsley & Sage';
  visibility: boolean = false;

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(events => events instanceof NavigationEnd),
      map(evt => this.activatedRoute),
      map(route => {
        while(route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      )
    .pipe(
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    )
    .subscribe(data => data.header === true ? this.visibility = true : this.visibility = false)
  }
}

// source to showing header-component conditionally:
// -----------------------------------------------------------------------
// https://ramya-bala221190.medium.com/how-to-flexibly-show-or-hide-components-like-header-navigation-bar-in-angular-1f4b14fc51cc