// control imports
import { minLengthTrimmed } from "./lib/control/min-length-trimmed";
import { maxLengthTrimmed } from "./lib/control/max-length-trimmed";
import { requiredTrimmed } from "./lib/control/required-trimmed";
import { minWithCommas } from "./lib/control/min-with-commas";
import { maxWithCommas } from "./lib/control/max-with-commas";
import { alpha } from "./lib/control/alpha";
import { alphaNumeric } from "./lib/control/alpha-numeric";
import { numeric } from "./lib/control/numeric";

// form imports
import { atLeastOne } from "./lib/form/at-least-one";

export class MoreValidators {
  static control = {
    minLengthTrimmed,
    maxLengthTrimmed,
    requiredTrimmed,
    minWithCommas,
    maxWithCommas,
    alpha,
    alphaNumeric,
    numeric,

    keys: {
      minLengthTrimmed: "minLengthTrimmed",
      maxLengthTrimmed: "maxLengthTrimmed",
      requiredTrimmed: "requiredTrimmed",
      minWithCommas: "minWithCommas",
      maxWithCommas: "maxWithCommas",
      alpha: "alpha",
      alphaNumeric: "alphaNumeric",
      numeric: "numeric",
    },
  };

  static form = {
    atLeastOne,

    keys: {
      atLeastOne: "atLeastOne",
    },
  };
}
