const { ERROR } = require('../util/Message');

class Exceptions {
  constructor(input) {
    this.input = parseInt(input);
  }

  occurError(errorMessage) {
    throw new Error(errorMessage);
  }
}

class MoneyExceptions extends Exceptions {
  check() {
    if (this.isNotDivisible()) super.occurError(ERROR.MONEY_DIVISIBLE);
  }

  isNotDivisible() {
    return this.input % 1000 !== 0;
  }
}

module.exports = { MoneyExceptions };
