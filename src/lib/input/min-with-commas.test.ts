import { FormControl, ValidatorFn, ReactiveFormsModule, Validators } from "@angular/forms";

import { TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MoreValidators } from "../../index";

describe('Min With Commas', () => {
    const min = 1001;
    let control: FormControl;
    let validator: ValidatorFn;
    let error: { minWithCommas: boolean };

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, BrowserAnimationsModule, MoreValidators],
            declarations: [MoreValidators]
        })
        validator = MoreValidators.minWithCommas(min)
        control = new FormControl('');
        error = { minWithCommas: true };
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

    test('under the min should be invalid', () => {
        control.setValue('1000');
        expect(validator(control)).toEqual(error);
    })

    test('under the min with commas should be invalid', () => {
        control.setValue('1,000');
        expect(validator(control)).toEqual(error);
    })

    test('on the min should be valid', () => {
        control.setValue(min);
        expect(validator(control)).toBeNull();
    })

    test('on the min with commas should be valid', () => {
        control.setValue('1,001');
        expect(validator(control)).toBeNull();
    })

    test('over the min should be valid', () => {
        control.setValue('1002');
        expect(validator(control)).toBeNull();
    })

    test('over the min with commas should be valid', () => {
        control.setValue('1,002');
        expect(validator(control)).toBeNull();
    })

});