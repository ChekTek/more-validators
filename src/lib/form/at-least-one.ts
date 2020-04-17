import { ValidatorFn, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { MoreFormUtils } from '../more-form-utils';

const atLeastOne = (...controls: string[]): ValidatorFn => (
    group: FormGroup
): ValidationErrors | null => {
    const key = "atLeastOne";

    if (!controls) {
        controls = Object.keys(group.controls);
    }

    const hasAtLeastOne =
        group &&
        group.controls &&
        controls.some((control) => !Validators.required(group.controls[control]));

    if (!hasAtLeastOne) {
        controls.forEach((controlName) => {
            const control = group.get(controlName);
            MoreFormUtils.addError(control, key);
        });
    } else {
        controls.forEach((controlName) => {
            const control = group.get(controlName);
            MoreFormUtils.removeError(control, key);
        });
    }

    return hasAtLeastOne ? null : { key: true };
};