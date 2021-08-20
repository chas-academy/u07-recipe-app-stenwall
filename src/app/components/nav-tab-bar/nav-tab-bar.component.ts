import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-tab-bar',
  templateUrl: './nav-tab-bar.component.html',
  styleUrls: ['./nav-tab-bar.component.scss'],
})
export class NavTabBarComponent implements OnInit, OnDestroy {
  navLinks: any[];
  activeLinkIndex = -1;
  routerSubscription: Subscription;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Appetizers',
        link: './appetizers',
        index: 0,
      },
      {
        label: 'Mains',
        link: './mains',
        index: 1,
      },
      {
        label: 'Desserts',
        link: './desserts',
        index: 2,
      },
      {
        label: 'Sides',
        link: './sides',
        index: 3,
      },
    ];
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}

// source to routing with angular material tabs:
// -----------------------------------------------------------------------
// https://nirajsonawane.github.io/2018/10/27/Angular-Material-Tabs-with-Router/
