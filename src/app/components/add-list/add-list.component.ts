import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  user: User;
  addListForm: FormGroup;
  userSubscription: Subscription;
  formSubscription: Subscription;
  errors = null;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public listService: ListService,
    public authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.addListForm = this.formBuilder.group({
      title: ['', [
          Validators.required,
          Validators.pattern('^[_A-z0-9 -\s]$'),
        ],], 
    });
  }

  ngOnInit(): void {
    // this.user = this.authService.profileUser();
    this.userSubscription = this.authService.profileUser().subscribe(
      (user) => {
        this.user = user
      }
    );
  }

  onSubmit() {
    this.formSubscription = this.listService.addNewList(this.addListForm.value).subscribe(
      (result) => {
        this.snackBar.open(result.message, '', {
          duration: 2500,
          verticalPosition: 'top'
        });
        console.log(result)
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
        // this.addListForm.reset();
        this.reloadComponent()
        // this.router.navigate(['']);
      }
    );
  }

  reloadComponent() {
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }
}

// source to validation:
// -----------------------------------------------------------------------
// https://www.positronx.io/angular-7-reactive-forms-validation-tutorial/
// https://blog.angular-university.io/angular-custom-validators/

// source to validation pattern (regular expressions):
// -----------------------------------------------------------------------
// https://regexr.com/

// source to reload component:
// -----------------------------------------------------------------------
// https://www.codegrepper.com/code-examples/javascript/How+to+Reload+a+Component+in+Angular