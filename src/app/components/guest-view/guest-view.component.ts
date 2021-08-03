import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-guest-view',
  templateUrl: './guest-view.component.html',
  styleUrls: ['./guest-view.component.scss']
})
export class GuestViewComponent implements OnInit {
  // isSignedIn: boolean;

  constructor(
    public router: Router,
    public tokenService: TokenService,
    private authStateService: AuthStateService
  ) {}

  ngOnInit(): void {
    // this.authStateService.userAuthState.subscribe(val => {
    //   this.isSignedIn = val;
    // });
  }

  signOut() {
    this.authStateService.setAuthState(false);
    this.tokenService.removeToken();
    this.router.navigate(['/']);
  }

}
