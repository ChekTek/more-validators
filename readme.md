# More Validators

![build](https://github.com/ChekTek/more-validators/workflows/build/badge.svg)
![100% test coverage](https://github.com/ChekTek/more-validators/workflows/test%20coverage/badge.svg)

This is an addition to Angular's form validators.

## Installation

`npm i more-validators --save`

## Validators

### Controls

* requiredTrimmed
* minLengthTrimmed
* maxLengthTrimmed
* minWithCommas
* maxWithCommas
* alpha
* alphaNumeric
* numeric

### Form

* atLeastOne

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
      myInput1: new FormControl(null),
      myInput2: new FormControl(null,
        [
          Validators.minLength(3),         // <-- built in angular validator
          MoreValidators.controls.minLengthTrimmed(3) // <-- more validators
        ])
    },
    {
      validators: [MoreValidators.form.atLeastOne("myInput1", "myInput2")],
    })
```

### component.html

```HTML
    <form [formGroup]="validationTestForm">
    ...
    <input formControlName="myInput1" />
    <input formControlName="myInput2" />
    ...
    </form>
```
