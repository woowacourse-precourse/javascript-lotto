class Util {
  static isNumericInput(str) {
    const NUMBER_REGEXP = /^[0-9]+$/;
    return NUMBER_REGEXP.test(str);
  }

  static isZeroStartInput(str) {
    const ZERO_START_REGEXP = /^[0]+/;
    return ZERO_START_REGEXP.test(str);
  }

  static isPositiveNumber(str) {
    return parseInt(str) > 0;
  }
}

module.exports = Util;
