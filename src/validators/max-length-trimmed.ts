import { ValidatorFn, AbstractControl } from '@angular/forms';

export const maxLengthTrimmed = (max: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (!control) return null;

        const value = control.value;

        if (!value) return null;
        if (value.trim().length <= max) return null;

        return { minLengthTrimmed: true };
    }
}