import { minLengthTrimmed } from './lib/input/min-length-trimmed';
import { maxLengthTrimmed } from './lib/input/max-length-trimmed';
import { requiredTrimmed } from './lib/input/required-trimmed';
import { minWithCommas } from './lib/input/min-with-commas';
import { maxWithCommas } from './lib/input/max-with-commas';

export class MoreValidators {
    static minLengthTrimmed = minLengthTrimmed;
    static maxLengthTrimmed = maxLengthTrimmed;
    static requiredTrimmed = requiredTrimmed;
    static minWithCommas = minWithCommas;
    static maxWithCommas = maxWithCommas;

    static keys = {
        minLengthTrimmed: 'minLengthTrimmed',
        maxLengthTrimmed: 'maxLengthTrimmed',
        requiredTrimmed: 'requiredTrimmed',
        minWithCommas: 'minWithCommas',
        maxWithCommas: 'maxWithCommas',
    };
} 