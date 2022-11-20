const { ERROR, LOTTO, REGEXP } = require('./constant');

class BonusNumber {
  #bonusNumber;

  constructor(input, winningNumbers) {
    this.validate(input, winningNumbers);
    this.#bonusNumber = Number(input);
  }

  validate(input, winningNumbers) {
    const isNumber = REGEXP.bonusNumber.test(input);
    if (!isNumber) throw new Error(ERROR.bonusNumber);

    const number = Number(input);
    const isInRange = LOTTO.rangeStart <= number && number <= LOTTO.rangeEnd;
    if (!isInRange) throw new Error(ERROR.bonusNumber);

    const isDuplicate = winningNumbers.includes(number);
    if (isDuplicate) throw new Error(ERROR.bonusNumber);
  }

  get() {
    return this.#bonusNumber;
  }
}

module.exports = BonusNumber;
