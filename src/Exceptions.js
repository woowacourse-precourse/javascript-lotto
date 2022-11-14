const { ERROR } = require('../util/Message');

class Exceptions {
  constructor(input) {
    this.input = input;
  }

  occurError(errorMessage) {
    throw new Error(errorMessage);
  }
}

class MoneyExceptions extends Exceptions {
  check() {
    if (this.isNotDigit()) super.occurError(ERROR.MONEY_DIGIT);
    if (this.isNotDivisible()) super.occurError(ERROR.MONEY_DIVISIBLE);
  }

  isNotDigit() {
    return isNaN(this.input);
  }

  isNotDivisible() {
    return parseInt(this.input) % 1000 !== 0;
  }
}

module.exports = { MoneyExceptions };
