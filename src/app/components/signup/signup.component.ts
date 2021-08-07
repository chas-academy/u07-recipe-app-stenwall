import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomErrorStateMatcher } from 'src/app/custom-state-matcher';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  errorMatcher = new CustomErrorStateMatcher();
  errors = null;
  hide = true;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {validators: this.checkPasswords});
  }

  ngOnInit() { }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() {
    if(!this.registerForm.valid) {
      alert('Please fill all the required fields to register a user!')
      return false;
    } else {
      this.authService.register(this.registerForm.value).subscribe(
        result => {
          console.log(result)
        },
        error => {
          this.errors = error.error;
        },
        () => {
          this.registerForm.reset()
          this.router.navigate(['']);
        }
      )
      console.log(this.registerForm.value)
    }    
  }
}
