"use strict";

const { validateLottoNumber, validateUniqueNumbers } = require("./Utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
  }

  validate(numbers) {
    validateLottoNumber(numbers);
    validateUniqueNumbers(numbers);
  }
}

module.exports = Lotto;
