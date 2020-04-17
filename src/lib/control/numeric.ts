import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export const numeric = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const error = { numeric: true };
        const result = Validators.pattern("[0-9]*")(control);
        return result ? error : null;
    };
}