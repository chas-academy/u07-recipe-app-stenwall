import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guest-menu',
  templateUrl: './guest-menu.component.html',
  styleUrls: ['./guest-menu.component.scss'],
})
export class GuestMenuComponent implements OnInit, OnDestroy {
  isLargeScreen: boolean;
  breakpointSubscription: Subscription;

  constructor(
    public router: Router,
    public breakpointObserver: BreakpointObserver
  ) {
    this.breakpointSubscription = this.breakpointObserver
      .observe(['(max-width: 1070px)'])
      .subscribe((result) => {
        if (result.matches) {
          this.isLargeScreen = false;
        } else {
          this.isLargeScreen = true;
        }
      });
  }

  ngOnInit(): void { }

  ngOnDestroy() {
    this.breakpointSubscription.unsubscribe();
  }
}
