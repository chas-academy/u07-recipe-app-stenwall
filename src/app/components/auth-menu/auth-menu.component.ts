import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { TokenService } from '../../services/token.service';
import { AuthStateService } from '../../services/auth-state.service';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.scss']
})

export class AuthMenuComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    public router: Router,
    public tokenService: TokenService,
    private authStateService: AuthStateService,
    public authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.user$ = this.authService.profileUser();
  }

  signOut(): void {
    this.authService.logout().subscribe(
      (result) => {
        this.snackBar.open(result.message, '', {
          duration: 2500,
          verticalPosition: 'top'
        });
      },
      () => {
        this.authStateService.setAuthState(false);
        this.tokenService.removeToken();
        this.router.navigate(['/']);
      }
    );
  }
}
