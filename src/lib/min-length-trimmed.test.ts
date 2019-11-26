import { FormControl, ReactiveFormsModule, ValidatorFn } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestBed } from '@angular/core/testing';
import { MoreValidators } from "../index";

fdescribe('Min Length Trimmed (3)', () => {
    let control: FormControl;
    let validator: ValidatorFn;
    let error: { minLengthTrimmed: boolean };

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, BrowserAnimationsModule, MoreValidators],
            declarations: [MoreValidators]
        })
        validator = MoreValidators.minLengthTrimmed(3);
        control = new FormControl('');
        error = { "minLengthTrimmed": true };
    })

    test('undefined should be invalid', () => {
        control.setValue(undefined);
        expect(validator(control)).toEqual(error);
    })

    test('null should be invalid', () => {
        control.setValue(null);
        expect(validator(control)).toEqual(error);
    })

    test('"123"   should be valid', () => {
        control.setValue("123");
        expect(validator(control)).toBeNull();
    })

    test('"123  " should be valid', () => {
        control.setValue("123  ");
        expect(validator(control)).toBeNull();
    })

    test('"12"    should be invalid', () => {
        control.setValue("12");
        expect(validator(control)).toEqual(error)
    })

    test('"12   " should be invalid', () => {
        control.setValue("12   ");
        expect(validator(control)).toEqual(error);
    })

    test('"     " should be invalid', () => {
        control.setValue("     ");
        expect(validator(control)).toEqual(error)
    })
})
