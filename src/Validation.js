const { LOTTO_PRICE } = require("./constants/condition.js");

class Validation {
  static hasOnlyNumber(input, separator = "") {
    if (input) {
      return input
        .split(separator)
        .map((eachLetter) => parseInt(eachLetter, 10))
        .every((number) => !isNaN(number));
    }

    return false;
  }
  static isStartedZero(input) {
    return input.startsWith("0");
  }
  static isDivisibleByLottoPrice(purchaseMoney) {
    const remainder = purchaseMoney % LOTTO_PRICE;

    return remainder === 0;
  }
}

module.exports = Validation;
