import { FormControl, ValidatorFn } from "@angular/forms";
import { MoreValidators } from "../../index";

describe("Numeric", () => {
  let control: FormControl;
  let validator: ValidatorFn;
  let error: { numeric: boolean };

  beforeAll(() => {
    validator = MoreValidators.control.numeric();
    control = new FormControl("");
    error = { numeric: true };
  });

  test("undefined control should be invalid", () => {
    expect(validator(undefined)).toEqual(error);
  });

  test("undefined should be invalid", () => {
    control.setValue(undefined);
    expect(validator(control)).toEqual(error);
  });

  test("null should be invalid", () => {
    control.setValue(null);
    expect(validator(control)).toEqual(error);
  });

  test("alpha characters should be invalid", () => {
    control.setValue("abc");
    expect(validator(control)).toEqual(error);
  });

  test("numeric characters should be valid", () => {
    control.setValue("123");
    expect(validator(control)).toBeNull();
  });

  test("alphanumeric characters should be invalid", () => {
    control.setValue("abc123");
    expect(validator(control)).toEqual(error);
  });

  test("spaces should be invalid", () => {
    control.setValue("    ");
    expect(validator(control)).toEqual(error);
  });

  test("other non alphanumeric characters should be invalid", () => {
    control.setValue("~!@#$%^&*()_+");
    expect(validator(control)).toEqual(error);
  });
});
