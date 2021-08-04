import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Parsley & Sage';
  preferences: object;
  visibleTabs: boolean = false;

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
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
        data.tabs === true
          ? (this.visibleTabs = true)
          : (this.visibleTabs = false)
      );
  }

  receivePreferences(event) {
    this.preferences = event;
  }
}
