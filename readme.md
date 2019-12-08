# More Validators

![build](https://github.com/ChekTek/more-validators/workflows/build/badge.svg)
![100% test coverage](https://github.com/ChekTek/more-validators/workflows/test%20coverage/badge.svg)

This is an addition to Angular's form validators.

## Installation

`npm i more-validators --save`

## Validators

* requireTrimmed
* minLengthTrimmed
* maxLengthTrimmed
* minWithCommas
* maxWithCommas

## Usage

### component.ts

```TypeScript
   import { MoreValidators } from 'more-validators';
    ...
   validationTestForm: FormGroup;
    ...
   constructor(private readonly fromBuilder: FormBuilder) { }
    ...
    this.validationTestForm = this.fromBuilder.group({
      myInput: new FormControl('',
        [
          Validators.required,                  // <-- built in angular validator
          MoreValidators.minLengthTrimmed(3)    // <-- more validators
        ])
    })
```

### component.html

```HTML
    <form [formGroup]="validationTestForm">
    ...
    <input formControlName="myInput" />
    ...
    </form>
```
