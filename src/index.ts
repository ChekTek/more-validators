import { minLengthTrimmed } from './lib/min-length-trimmed';
import { maxLengthTrimmed } from './lib/max-length-trimmed';
import { requiredTrimmed } from './lib/required-trimmed';
import { minWithCommas } from './lib/min-with-commas';
import { maxWithCommas } from './lib/max-with-commas';

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