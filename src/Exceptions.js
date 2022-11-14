const { ERROR } = require('../util/Message');

class Exceptions {
  constructor(input) {
    this.input = input;
  }

  occurError(errorMessage) {
    throw new Error(errorMessage);
  }

  isNotDigit() {
    return isNaN(this.input);
  }
}

class MoneyExceptions extends Exceptions {
  check() {
    if (super.isNotDigit()) super.occurError(ERROR.MONEY_DIGIT);
    if (this.isNotDivisible()) super.occurError(ERROR.MONEY_DIVISIBLE);
  }

  isNotDivisible() {
    return parseInt(this.input) % 1000 !== 0;
  }
}

module.exports = { MoneyExceptions };
