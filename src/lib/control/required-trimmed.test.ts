import { FormControl, ReactiveFormsModule, ValidatorFn } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestBed } from '@angular/core/testing';
import { MoreValidators } from "../../index";

describe('Required Trimmed', () => {
    let control: FormControl;
    let validator: ValidatorFn;
    let error: { requiredTrimmed: boolean };

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, BrowserAnimationsModule, MoreValidators],
            declarations: [MoreValidators]
        })
        validator = MoreValidators.control.requiredTrimmed();
        control = new FormControl('');
        error = { requiredTrimmed: true };
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

    test('a value should be valid', () => {
        control.setValue("123");
        expect(validator(control)).toBeNull();
    })

    test('a value with trailing spaces should be valid', () => {
        control.setValue("123   ");
        expect(validator(control)).toBeNull();
    })

    test('blank should be invalid', () => {
        control.setValue("");
        expect(validator(control)).toEqual(error);
    })

    test('spaces should be invalid', () => {
        control.setValue("   ");
        expect(validator(control)).toEqual(error);
    })
})
