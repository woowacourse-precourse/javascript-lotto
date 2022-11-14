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
    for (let letter of [...numStr]) {
      if (isNaN(parseInt(letter))) return true;
    }
    return false;
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

class WinningExceptions extends Exceptions {
  check() {
    if (this.isNotRightLength(6)) super.occurError(ERROR.WINNING_LENGTH);
    if (this.isNotAllDigit()) super.occurError(ERROR.WINNING_DIGIT);
    if (this.isNotInRange()) super.occurError(ERROR.WINNING_RANGE);
    if (this.isDuplicated()) super.occurError(ERROR.WINNING_DUPLICATED);
  }

  isNotRightLength(LENGTH) {
    return this.input.length !== LENGTH;
  }

  isNotAllDigit() {
    return !this.input.every((winningNum) => !super.isNotDigit(winningNum));
  }

  isNotInRange() {
    return !this.input.every(
      (winningNum) => 0 < parseInt(winningNum) && parseInt(winningNum) < 46
    );
  }

  isDuplicated() {
    const winningArr = this.input.map((num) => parseInt(num));
    const set = new Set(winningArr);
    return [...set].length !== winningArr.length;
  }
}

module.exports = { MoneyExceptions, WinningExceptions };
