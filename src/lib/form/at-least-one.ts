import {
  ValidatorFn,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { MoreFormUtils } from "../more-form-utils";
import { MoreValidators } from "../../index";

export const atLeastOne = (...controls: string[]): ValidatorFn => (
  group: FormGroup
): ValidationErrors | null => {
  const key = MoreValidators.form.keys.atLeastOne;
  const error = { [key]: true };

  if (group === undefined) return error;
  if (group === null) return error;

  if (controls.length === 0) {
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

  return hasAtLeastOne ? null : error;
};
