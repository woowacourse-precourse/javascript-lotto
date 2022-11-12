class Util {
  static consistsOfNumbers(str) {
    const NUMBER_REGEXP = /^[0-9]+$/;
    return NUMBER_REGEXP.test(str);
  }
}

module.exports = Util;
