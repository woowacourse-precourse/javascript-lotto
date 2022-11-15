const { ERROR } = require('../util/Message');

class Exceptions {
  constructor(input) {
    this.input = input;
  }

  occurError(errorMessage) {
    throw new Error(errorMessage);
  }

  isNotDigit(numStr) {
    if (numStr === '') return true;
    for (let letter of [...numStr.toString()]) {
      if (isNaN(parseInt(letter))) return true;
    }
    return false;
  }

  isInRange(num) {
    return 0 < parseInt(num) && parseInt(num) < 46;
  }
}

class MoneyExceptions extends Exceptions {
  check() {
    if (super.isNotDigit(this.input)) super.occurError(ERROR.MONEY_DIGIT);
    if (this.isNotDivisible()) super.occurError(ERROR.MONEY_DIVISIBLE);
  }

  isNotDivisible() {
    return parseInt(this.input) % 1000 !== 0;
  }
}

class BonusExceptions extends Exceptions {
  check(winningArr) {
    if (super.isNotDigit(this.input)) super.occurError(ERROR.BONUS_DIGIT);
    if (!super.isInRange(this.input)) super.occurError(ERROR.BONUS_RANGE);
    if (this.isDuplicated(winningArr)) super.occurError(ERROR.BONUS_DUPLICATED);
  }

  isDuplicated(winningArr) {
    return winningArr.includes(parseInt(this.input));
  }
}

module.exports = {
  Exceptions,
  MoneyExceptions,
  BonusExceptions,
};
