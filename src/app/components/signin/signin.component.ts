import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenService } from '../../services/token.service';
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
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
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() { }

  onSubmit() {
    if(!this.loginForm.valid) {
      alert('Please fill all the required fields to login!')
      return false;
    } else {
      this.authService.signin(this.loginForm.value).subscribe(
        result => {
          this.responseHandler(result);
        },
        error => {
          this.errors = error.error;
          console.log(error.error);
        },() => {
          this.authState.setAuthState(true);
          this.loginForm.reset()
          this.router.navigate(['']);
        }
      );
     }  
  }

  // Handle response
  responseHandler(data){
    this.tokenService.handleData(data.access_token);
  }

}

// import { CustomErrorStateMatcher } from 'src/app/custom-state-matcher';
//   errorMatcher = new CustomErrorStateMatcher();
  // checkPasswords(group: FormGroup) {
  //   const pass = group.controls.password.value;
  //   const confirmPass = group.controls.confirmPassword.value;

  //   return pass === confirmPass ? null : { notSame: true };
  // }

