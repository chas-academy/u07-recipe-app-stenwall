import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../../services/token.service';
import { AuthStateService } from '../../services/auth-state.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errors = null;
  hide = true;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    private tokenService: TokenService,
    private authState: AuthStateService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],], 
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
        this.snackBar.open(this.errors.error, '', {
          duration: 2500,
          verticalPosition: 'top'
        });
        console.log(error.error);
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['']);
      }
    );
  }

  // Handle response
  responseHandler(data) {
    this.tokenService.handleData(data.access_token);
  }
}

// source to validation:
// -----------------------------------------------------------------------
// https://www.positronx.io/angular-7-reactive-forms-validation-tutorial/
// https://blog.angular-university.io/angular-custom-validators/