import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { TokenService } from '../../services/token.service';
import { AuthStateService } from '../../services/auth-state.service';
import { AuthService } from './../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss']
})

export class AuthViewComponent implements OnInit {
  user: User;

  constructor(
    public router: Router,
    public tokenService: TokenService,
    private authStateService: AuthStateService,
    public authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.authService.profileUser().subscribe((data:any) => {
      this.user = data;
    })
  }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.logout().subscribe(
      (result) => {
        this.snackBar.open(result.message, '', {
          duration: 2500,
          verticalPosition: 'top'
        });
        console.log(result)
      },
      () => {
        this.authStateService.setAuthState(false);
        this.tokenService.removeToken();
        this.router.navigate(['']);
      }
    );
  }

}
