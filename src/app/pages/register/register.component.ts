import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomErrorStateMatcher } from 'src/app/custom-state-matcher';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerForm: FormGroup;
  registerSubscription: Subscription;
  errorMatcher = new CustomErrorStateMatcher();
  errors = null;
  hide = true;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[_A-z0-9]*(( -|\s)*[_A-z0-9])*$'),
      ],],
      email: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      ],],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
      ],],
      password_confirmation: ['', [
        Validators.required,
      ],],
    }, {
      validators: this.checkPasswords
    });
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.password_confirmation.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() {
    if(!this.registerForm.valid) {
      alert('Please fill all the required fields to register a user!');
      return false;
    } else {
      this.registerSubscription = this.authService
        .register(this.registerForm.value)
        .subscribe(
          result => {
            this.snackBar.open(result.message, '', {
              duration: 2500,
              verticalPosition: 'top'
            });
          },
          error => {
            this.errors = error.error;
            this.snackBar.open(this.errors?.error || this.errors?.password || this.errors?.email, '', {
              duration: 2500,
              verticalPosition: 'top'
            });
          },
          () => {
            this.registerSubscription.unsubscribe();
            this.registerForm.reset()
            this.router.navigate(['login']);
          }
        );
    }    
  }
}

// source to validation:
// -----------------------------------------------------------------------
// https://www.positronx.io/angular-7-reactive-forms-validation-tutorial/
// https://blog.angular-university.io/angular-custom-validators/