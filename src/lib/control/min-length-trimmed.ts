import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MoreValidators } from '../../index';

export const minLengthTrimmed = (min: number): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const key = MoreValidators.control.keys.minLengthTrimmed;
        const error = { [key]: true };

        if (!control) return error;

        const value = control.value;

        if (value === undefined) return error;
        if (value === null) return error;
        if (value.trim().length < min) return error;

        return null;
    }
}