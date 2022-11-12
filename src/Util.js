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

  static isDivisibleBy(str, unit) {
    return parseInt(str) % unit === 0;
  }

  static hasDuplicateElements(arr) {
    const setToCompare = new Set(arr);
    return arr.length !== setToCompare.size;
  }

  static hasNElements(arr, num) {
    return arr.length === num;
  }

  static getSortedArrayInAsc(arr) {
    return [...arr].sort((a, b) => a - b);
  }

  static isBetween(numbers, start, end) {
    return numbers.every((num) => start <= num && num <= end);
  }
}

module.exports = Util;
