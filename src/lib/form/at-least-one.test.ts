import {
  FormControl,
  ReactiveFormsModule,
  ValidatorFn,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TestBed } from "@angular/core/testing";
import { MoreValidators } from "../../index";
import { MoreFormUtils } from "../more-form-utils";

describe("AtLeastOne", () => {
  let formBuilder: FormBuilder;
  let formGroup: FormGroup;
  let validator: ValidatorFn;
  let error: { atLeastOne: boolean };

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, BrowserAnimationsModule, MoreValidators],
      declarations: [MoreValidators],
    });
    formBuilder = new FormBuilder();
    formGroup = formBuilder.group({
      control1: new FormControl(),
      control2: new FormControl(),
    });
    validator = MoreValidators.form.atLeastOne("control1", "control2");
    error = { atLeastOne: true };
  });

  test("undefined control should be invalid", () => {
    expect(validator(undefined)).toEqual(error);
  });

  test("null should be invalid", () => {
    expect(validator(null)).toEqual(error);
  });

  test("no controls with values should be invalid", () => {
    expect(validator(formGroup)).toEqual(error);
  });

  test("should apply error to controls", () => {
    const spy = spyOn(MoreFormUtils, "addError");
    expect(validator(formGroup)).toEqual(error);
    expect(spy).toHaveBeenCalledWith(formGroup.get("control1"), "atLeastOne");
    expect(spy).toHaveBeenCalledWith(formGroup.get("control2"), "atLeastOne");
  });

  test('should use all controls if none provided',()=>{
    const spy = spyOn(MoreFormUtils, "addError");
    validator = MoreValidators.form.atLeastOne();
    expect(validator(formGroup)).toEqual(error);
    expect(spy).toHaveBeenCalledWith(formGroup.get("control1"), "atLeastOne");
    expect(spy).toHaveBeenCalledWith(formGroup.get("control2"), "atLeastOne");
  })

  test("one control with value should be valid", () => {
    formGroup.get("control1").setValue("value1");
    expect(validator(formGroup)).toBeNull();
  });

  test("all controls with values should be valid", () => {
    formGroup.get("control1").setValue("value1");
    formGroup.get("control2").setValue("value2");
    expect(validator(formGroup)).toBeNull();
  });  
});
