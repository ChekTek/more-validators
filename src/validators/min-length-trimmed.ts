import { ValidatorFn, AbstractControl } from '@angular/forms';

export const minLengthTrimmed = (min: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (!control) return null;

        const value = control.value;

        if (!value) return null;
        if (value.trim().length >= min) return null;

        return { minLengthTrimmed: true };
    }
}