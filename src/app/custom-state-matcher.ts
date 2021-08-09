import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null): boolean {
      const invalidControl = !!(control && control.invalid && control.parent.dirty);
      const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

      return control.parent.errors && control.touched && ( invalidControl || invalidParent );
    }
}

// sources to validating password match:
// -----------------------------------------------------------------------
// https://youtu.be/yWw7CYFIDVw
// https://stackoverflow.com/questions/51605737/confirm-password-validation-in-angular-6
// https://stackblitz.com/edit/angular-yhbuqn-s5lmtv?file=app%2Finput-error-state-matcher-example.ts