import {FormControl, ValidatorFn} from "@angular/forms";
import {MoreValidators} from "../../index";

describe("Alpha", () => {
    let control: FormControl;
    let validator: ValidatorFn;
    let error: { alpha: boolean };

    beforeAll(() => {
        validator = MoreValidators.control.alpha();
        control = new FormControl("");
        error = {alpha: true};
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

    test("numeric characters should be invalid", () => {
        control.setValue("123");
        expect(validator(control)).toEqual(error);
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
