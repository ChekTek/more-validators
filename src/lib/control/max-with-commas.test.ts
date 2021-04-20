import {FormControl, ValidatorFn} from "@angular/forms";
import {MoreValidators} from "../../index";

describe('Max With Commas', () => {
    const max = 1001;
    let control: FormControl;
    let validator: ValidatorFn;
    let error: { maxWithCommas: boolean };

    beforeAll(() => {
        validator = MoreValidators.control.maxWithCommas(max)
        control = new FormControl();
        error = {maxWithCommas: true};
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

    test('under the max should be valid', () => {
        control.setValue('1000');
        expect(validator(control)).toBeNull();
    })

    test('on the max should be valid', () => {
        control.setValue(max);
        expect(validator(control)).toBeNull();
    })

    test('on the max with commas should be valid', () => {
        control.setValue('1,001');
        expect(validator(control)).toBeNull();
    })

    test('under the max with commas should be valid', () => {
        control.setValue('1,000');
        expect(validator(control)).toBeNull();
    })

    test('over the max should be invalid', () => {
        control.setValue('1002');
        expect(validator(control)).toEqual(error);
    })

    test('over the max with commas should be invalid', () => {
        control.setValue('1,002');
        expect(validator(control)).toEqual(error);
    })

});