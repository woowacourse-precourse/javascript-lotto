const { LOTTO_PRICE } = require("./constants/condition.js");

class Validation {
  static hasOnlyNumber(input, separator = "") {
    return input
      .split(separator)
      .map((eachLetter) => parseInt(eachLetter, 10))
      .every((number) => !isNaN(number));
  }
  static isDivisibleByLottoPrice(purchaseMoney) {
    const remainder = purchaseMoney % LOTTO_PRICE;

    return remainder === 0;
  }
}

module.exports = Validation;
