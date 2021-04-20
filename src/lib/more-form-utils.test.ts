import { FormControl } from "@angular/forms";
import { MoreFormUtils } from "./more-form-utils";

describe("MoreFormUtils", () => {
  let control: FormControl;

  beforeEach(() => {
    control = new FormControl();
  });

  describe("addError", () => {
    test("should add error to control", () => {
      MoreFormUtils.addError(control, "error");
      expect(control.hasError("error")).toEqual(true);
    });

    test("should not remove other errors", () => {
      control.setErrors({ previousError: true });
      MoreFormUtils.addError(control, "error");
      expect(control.hasError("previousError")).toEqual(true);
    });
  });

  describe("removeError", () => {
    test("should remove error from control", () => {
      control.setErrors({ error: true });
      MoreFormUtils.removeError(control, "error");
      expect(control.hasError("error")).toEqual(false);
    });

    test("should not remove other errors", () => {
      control.setErrors({ previousError: true, error: true });
      MoreFormUtils.removeError(control, "error");
      expect(control.hasError("previousError")).toEqual(true);
    });
  });
});
