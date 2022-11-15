const { Exceptions } = require('./Exceptions');
const { ERROR } = require('../util/Message');

class Lotto extends Exceptions {
  #numbers;

  constructor(numbers) {
    super(numbers);
    this.validate();
    this.#numbers = numbers;
  }

  validate() {
    if (this.isNotRightLength()) super.occurError(ERROR.WINNING_LENGTH);
    if (this.isNotAllDigit()) super.occurError(ERROR.WINNING_DIGIT);
    if (this.isNotInRangeArr()) super.occurError(ERROR.WINNING_RANGE);
    if (this.isDuplicated()) super.occurError(ERROR.WINNING_DUPLICATED);
  }

  isNotRightLength() {
    return this.input.length !== 6;
  }

  isNotAllDigit() {
    return !this.input.every((winningNum) => !super.isNotDigit(winningNum));
  }

  isNotInRangeArr() {
    return !this.input.every((winningNum) => super.isInRange(winningNum));
  }

  isDuplicated() {
    const winningArr = this.input.map((num) => parseInt(num));
    const set = new Set(winningArr);
    return [...set].length !== winningArr.length;
  }
}

module.exports = Lotto;
