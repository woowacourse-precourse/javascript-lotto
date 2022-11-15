const { MESSAGE, CONSTANTS } = require("../constant/Message");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== CONSTANTS.LOTTO_MAX_COUNT) {
      throw new Error(MESSAGE.ERROR_LENGTH);
    }
    this.validateRange(numbers);
    this.validateDuplicate(numbers);
  }

  validateRange(numbers) {
    for (
      let index = CONSTANTS.ZERO;
      index < CONSTANTS.LOTTO_MAX_COUNT;
      index++
    ) {
      if (
        !(
          CONSTANTS.MIN_LOTTO <= numbers[index] &&
          numbers[index] <= CONSTANTS.MAX_LOTTO
        )
      ) {
        throw new Error(MESSAGE.ERROR_RANGE);
      }
    }
  }

  validateDuplicate(numbers) {
    if (new Set(numbers).size !== CONSTANTS.LOTTO_MAX_COUNT) {
      throw new Error(MESSAGE.ERROR_DUPLICATE);
    }
  }

  validateBonus(number) {
    if (isNaN(number)) {
      throw new Error(MESSAGE.ERROR_BONUS_LENGTH);
    }
    this.validateBonusRange(number);
    this.validateBonusInclude(number);
    return number;
  }

  validateBonusRange(number) {
    if (!(CONSTANTS.MIN_LOTTO <= number && number <= CONSTANTS.MAX_LOTTO)) {
      throw new Error(MESSAGE.ERROR_BONUS_RANGE);
    }
  }

  validateBonusInclude(number) {
    if (this.#numbers.includes(number)) {
      throw new Error(MESSAGE.ERROR_BONUS_DUPLICATE);
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
