import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export const alphaNumeric = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const error = { alphaNumeric: true };
        const result = Validators.pattern("[0-9a-zA-Z]*")(control);
        return result ? error : null;
    };
}