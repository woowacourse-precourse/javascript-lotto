const LOTTO = require('./constants/Lotto');
const ERROR = require('./constants/Error');

class Validator {
  static isDistinct(numbers) {
    let set = new Set(numbers);
    return numbers.length === set.size;
  }

  static isInRange(number) {
    return (
      /^[0-9]+$/.test(number) &&
      number >= LOTTO.RANGE_BEGIN &&
      number <= LOTTO.RANGE_END
    );
  }

  static validateNumbers(numbers) {
    if (numbers.length !== LOTTO.NUMBER_LENGTH) {
      throw new Error(ERROR.WRONG_LENGTH);
    }
    if (!this.isDistinct(numbers)) {
      throw new Error(ERROR.DUPLICATED);
    }

    numbers.forEach((number) => {
      if (!this.isInRange(Number(number))) {
        throw new Error(ERROR.WRONG_RANGE);
      }
    });
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (!this.isInRange(Number(bonusNumber))) {
      throw new Error(ERROR.WRONG_RANGE);
    }
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(ERROR.DUPLICATED);
    }
  }

  static validateMoney(money) {
    if (
      !/^[0-9]+$/.test(money) ||
      Number(money) <= 0 ||
      Number(money) % 1000 !== 0
    ) {
      throw new Error(ERROR.WRONG_MONEY);
    }
  }
}

module.exports = Validator;
