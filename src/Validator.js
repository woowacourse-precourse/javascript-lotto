const {
  LOTTO_NUMBER_LENGTH,
  LOTTO_RANGE_BEGIN,
  LOTTO_RANGE_END,
} = require('./constants/lotto');
const {
  ERROR_WRONG_LENGTH,
  ERROR_DUPLICATED,
  ERROR_WRONG_RANGE,
  ERROR_WRONG_MONEY,
} = require('./constants/error');

class Validator {
  static isDistinct(numbers) {
    let set = new Set(numbers);
    return numbers.length === set.size;
  }

  static isInRange(number) {
    return (
      /^[0-9]+$/.test(number) &&
      number >= LOTTO_RANGE_BEGIN &&
      number <= LOTTO_RANGE_END
    );
  }

  static validateNumbers(numbers) {
    if (numbers.length !== LOTTO_NUMBER_LENGTH) {
      throw new Error(ERROR_WRONG_LENGTH);
    }
    if (!this.isDistinct(numbers)) {
      throw new Error(ERROR_DUPLICATED);
    }

    numbers.forEach((number) => {
      if (!this.isInRange(Number(number))) {
        throw new Error(ERROR_WRONG_RANGE);
      }
    });
  }

  static validateMoney(money) {
    if (
      !/^[0-9]+$/.test(money) ||
      Number(money) <= 0 ||
      Number(money) % 1000 !== 0
    ) {
      throw new Error(ERROR_WRONG_MONEY);
    }
  }
}

module.exports = Validator;
