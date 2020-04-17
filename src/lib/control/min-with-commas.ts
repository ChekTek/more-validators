import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MoreValidators } from '../../index';

export const minWithCommas = (min: number): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const key = MoreValidators.control.keys.minWithCommas;
        const error = { [key]: true };

        if (!control) return error;

        const value = Number.parseFloat(String(control.value).replace(new RegExp(',', 'g'), ''));

        if (isNaN(value)) return error;
        if (value < min) return error;

        return null;
    }
}