const { REQUIRE, ERROR, NOTICE, LOTTO, REGEXP, PRIZE_MONEY } = require('./constant');

class BonusNumber {
  constructor(winningNumbers, number) {
    this.validate(number);
    this.number = number;
    this.winningNumbers = winningNumbers;
  }

  static validate() {
    const isNumber = REGEXP.bonusNumber.test(this.number);
    if (!isNumber) throw new Error(ERROR.bonusNumber);

    const isInRange = LOTTO.rangeStart <= this.number && this.number <= LOTTO.rangeEnd;
    if (!isInRange) throw new Error(ERROR.bonusNumber);

    const isDuplicate = this.winningNumbers.includes(this.umber);
    if (isDuplicate) throw new Error(ERROR.bonusNumber);

    return Number(this.number);
  }
}

module.exports = BonusNumber;
