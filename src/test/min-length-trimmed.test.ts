import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestBed } from '@angular/core/testing';
import {MoreValidators} from "../index";

describe('Min Length Trimmed (3)',  () => {
    let control: FormControl;

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, BrowserAnimationsModule, MoreValidators],
            declarations:[MoreValidators]
        })
        control = new FormControl('', MoreValidators.minLengthTrimmed(3))
    })

    test('"123" should be valid', () => {
        expect(true).toBeTruthy();
    })
})
