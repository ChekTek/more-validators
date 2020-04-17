import { minLengthTrimmed } from './lib/control/min-length-trimmed';
import { maxLengthTrimmed } from './lib/control/max-length-trimmed';
import { requiredTrimmed } from './lib/control/required-trimmed';
import { minWithCommas } from './lib/control/min-with-commas';
import { maxWithCommas } from './lib/control/max-with-commas';

export class MoreValidators {
    static control = {
        minLengthTrimmed,
        maxLengthTrimmed,
        requiredTrimmed,
        minWithCommas,
        maxWithCommas,
        keys: {
            minLengthTrimmed: 'minLengthTrimmed',
            maxLengthTrimmed: 'maxLengthTrimmed',
            requiredTrimmed: 'requiredTrimmed',
            minWithCommas: 'minWithCommas',
            maxWithCommas: 'maxWithCommas',
        }
    };
} 