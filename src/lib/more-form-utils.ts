import { FormControl, FormGroup, AbstractControl } from "@angular/forms";

export class MoreFormUtils {
    static addError(control: AbstractControl, errorKey: string): void {
        let errors = control.errors ? control.errors : {};
        errors[errorKey] = true;
        control.setErrors(errors);
    }

    static removeError(control: AbstractControl, errorKey: string): void {
        let errors = control.errors ? control.errors : {};
        delete errors["atLeastOne"];
        control.setErrors(errors);
    }
}
