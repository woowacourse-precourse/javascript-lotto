const { ERROR } = require('../util/Message');
const { RANGE_START, RANGE_END, MONEY_UNIT } = require('../util/constants');

class Exceptions {
  constructor(input) {
    this.input = input;
  }

  occurError(errorMessage) {
    throw new Error(errorMessage);
  }

  isNotDigit(numStr) {
    const element = numStr.toString();
    if (element === '') return true;
    for (let letter of [...element]) {
      if (isNaN(parseInt(letter))) return true;
    }
    return false;
  }

  isInRange(num) {
    return RANGE_START <= parseInt(num) && parseInt(num) <= RANGE_END;
  }
}

class MoneyExceptions extends Exceptions {
  check() {
    if (super.isNotDigit(this.input)) super.occurError(ERROR.MONEY_DIGIT);
    if (this.isNotDivisible()) super.occurError(ERROR.MONEY_DIVISIBLE);
    return parseInt(this.input);
  }

  isNotDivisible() {
    return parseInt(this.input) % MONEY_UNIT !== 0;
  }
}

class BonusExceptions extends Exceptions {
  check(winningArr) {
    if (super.isNotDigit(this.input)) super.occurError(ERROR.BONUS_DIGIT);
    if (!super.isInRange(this.input)) super.occurError(ERROR.BONUS_RANGE);
    if (this.isDuplicated(winningArr)) super.occurError(ERROR.BONUS_DUPLICATED);
    return parseInt(this.input);
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
