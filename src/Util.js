class Util {
  static isNumericInput(str) {
    const NUMBER_REGEXP = /^[0-9]+$/;
    return NUMBER_REGEXP.test(str);
  }
}

module.exports = Util;
