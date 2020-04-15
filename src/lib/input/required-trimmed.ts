import { ValidatorFn, AbstractControl } from '@angular/forms';
import { MoreValidators } from '../../index';

export const requiredTrimmed = (): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        const key = MoreValidators.keys.requiredTrimmed;
        const error = { [key]: true };

        if (!control) return error;

        const value = control.value;

        if (value === undefined) return error;
        if (value === null) return error;
        if (value.trim().length <= 0) return error;

        return null;
    }
}