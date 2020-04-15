import { FormControl, ReactiveFormsModule, ValidatorFn } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestBed } from '@angular/core/testing';
import { MoreValidators } from "../../index";

describe('Max Length Trimmed (3)', () => {
    let control: FormControl;
    let validator: ValidatorFn;
    let error: { maxLengthTrimmed: boolean };

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, BrowserAnimationsModule, MoreValidators],
            declarations: [MoreValidators]
        })
        validator = MoreValidators.maxLengthTrimmed(3);
        control = new FormControl('');
        error = { maxLengthTrimmed: true };
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

    test('the max should be valid', () => {
        control.setValue("123");
        expect(validator(control)).toBeNull();
    })

    test('extra spaces should be valid', () => {
        control.setValue("123  ");
        expect(validator(control)).toBeNull();
    })

    test('black should be valid', () => {
        control.setValue("");
        expect(validator(control)).toBeNull();
    })

    test('spaces should be valid', () => {
        control.setValue("    ");
        expect(validator(control)).toBeNull();
    })

    test('over the max should be invalid', () => {
        control.setValue("1234");
        expect(validator(control)).toEqual(error);
    })

    test('over the max and extra spaces should be invalid', () => {
        control.setValue("1234  ");
        expect(validator(control)).toEqual(error);
    })
})
