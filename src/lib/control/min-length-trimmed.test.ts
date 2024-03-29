import {FormControl, ValidatorFn} from "@angular/forms";
import {MoreValidators} from "../../index";

describe('Min Length Trimmed (3)', () => {
    let control: FormControl;
    let validator: ValidatorFn;
    let error: { minLengthTrimmed: boolean };

    beforeAll(() => {
        validator = MoreValidators.control.minLengthTrimmed(3);
        control = new FormControl();
        error = {minLengthTrimmed: true};
    })

    test('undefined control should be invalid', () => {
        expect(validator(undefined)).toEqual(error);
    })

    test('undefined should be invalid', () => {
        control.setValue(undefined);
        expect(validator(control)).toEqual(error);
    })

    test('null should be invalid', () => {
        control.setValue(null);
        expect(validator(control)).toEqual(error);
    })

    test('the min should be valid', () => {
        control.setValue("123");
        expect(validator(control)).toBeNull();
    })

    test('not needed spaces should be valid', () => {
        control.setValue("123  ");
        expect(validator(control)).toBeNull();
    })

    test('under the min should be invalid', () => {
        control.setValue("12");
        expect(validator(control)).toEqual(error)
    })

    test('filling spaces should be invalid', () => {
        control.setValue("12   ");
        expect(validator(control)).toEqual(error);
    })

    test('only spaces should be invalid', () => {
        control.setValue("     ");
        expect(validator(control)).toEqual(error)
    })
})
