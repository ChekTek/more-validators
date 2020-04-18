import { FormControl, ReactiveFormsModule, ValidatorFn } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TestBed } from "@angular/core/testing";
import { MoreValidators } from "../../index";

describe("AlphaNumeric", () => {
  let control: FormControl;
  let validator: ValidatorFn;
  let error: { alphaNumeric: boolean };

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, BrowserAnimationsModule, MoreValidators],
      declarations: [MoreValidators],
    });
    validator = MoreValidators.control.alphaNumeric();
    control = new FormControl("");
    error = { alphaNumeric: true };
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

  test("alpha characters should be valid", () => {
    control.setValue("abc");
    expect(validator(control)).toBeNull();
  });

  test("numeric characters should be valid", () => {
    control.setValue("123");
    expect(validator(control)).toBeNull();
  });

  test("alphanumeric characters should be valid", () => {
    control.setValue("abc123");
    expect(validator(control)).toBeNull();
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
