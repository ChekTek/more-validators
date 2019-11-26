import { minLengthTrimmed } from './lib/min-length-trimmed';
import { maxLengthTrimmed } from './lib/max-length-trimmed';
import { requiredTrimmed } from './lib/required-trimmed';

export class MoreValidators {
    static minLengthTrimmed = minLengthTrimmed;
    static maxLengthTrimmed = maxLengthTrimmed;
    static requiredTrimmed = requiredTrimmed;

    static keys = {
        minLengthTrimmed: 'minLengthTrimmed',
        maxLengthTrimmed: 'maxLengthTrimmed',
        requiredTrimmed: 'requiredTrimmed'
    };
} 