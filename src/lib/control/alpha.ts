import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export const alpha = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const error = { alpha: true };
        const result = Validators.pattern("[a-zA-Z]*")(control);
        return result ? error : null;
    };
}