import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { MoreValidators } from "../../index";

export const alphaNumeric = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const key = MoreValidators.control.keys.alphaNumeric;
    const error = { [key]: true };

    if (!control) return error;

    const value = control.value;

    if (value === undefined) return error;
    if (value === null) return error;

    return Validators.pattern("[0-9a-zA-Z]*")(control) ? error : null;
  };
};
