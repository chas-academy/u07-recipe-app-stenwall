import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { AuthStateService } from '../../services/auth-state.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss']
})

export class AuthViewComponent implements OnInit {

  constructor(
    public router: Router,
    public tokenService: TokenService,
    private authStateService: AuthStateService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  signOut() {
    this.authStateService.setAuthState(false);
    this.tokenService.removeToken();
    this.router.navigate(['/']);
    this.snackBar.open('You have been signed out.', '', {
      duration: 2500,
      verticalPosition: 'top'
    });
  }

}
