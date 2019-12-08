# More Validators

This is an addition to Angular's form validators.

## Installation

`npm i more-validators --save`

## Validators

* requireTrimmed
* minWithCommas
* maxWithCommas
* minLengthTrimmed
* maxLengthTrimmed

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
