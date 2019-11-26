import { ValidatorFn, AbstractControl } from '@angular/forms';
import { MoreValidators } from '../index';

export const minLengthTrimmed = (min: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        const value = control.value;
        const key = MoreValidators.keys.minLengthTrimmed;
        const error = { [key]: true };
        
        if (value === undefined) return error;
        if (value === null) return error;
        if (value.trim().length < min) return error;

        return null;
    }
}