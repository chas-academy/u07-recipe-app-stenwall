import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent {
  addListForm: FormGroup;
  formSubscription: Subscription;
  errors = null;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public listService: ListService,
    private snackBar: MatSnackBar
  ) {
    this.addListForm = this.formBuilder.group({
      title: ['', {
          validators: [
            Validators.required,
            Validators.pattern('^[_A-z0-9- \s]+$')
          ],
          updateOn: 'blur',
      }]
    });
  }

  onSubmit(): any {
    if (!this.addListForm.valid) {
      alert('Please fill in a valid title to add a new list!');
      return false;
    }
    this.formSubscription = this.listService
      .addNewList(this.addListForm.value)
      .subscribe(
        (result) => {
          this.snackBar.open(result.message, '', {
            duration: 2500,
            verticalPosition: 'top'
          });
        },
        (error) => {
          this.errors = error.error;
          this.snackBar.open(this.errors.error, '', {
            duration: 2500,
            verticalPosition: 'top'
          });
        },
        () => {
          this.formSubscription.unsubscribe();
          this.reloadComponent();
        }
      );
  }

  reloadComponent(): void {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
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
