const { MESSAGE } = require("../constant/Message");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MESSAGE.ERROR_LENGTH);
    }
    this.validateRange(numbers);
    this.validateDuplicate(numbers);
  }

  validateRange(numbers) {
    for (let index = 0; index < 6; index++) {
      if (!(1 <= numbers[index] && numbers[index] <= 45)) {
        throw new Error(MESSAGE.ERROR_RANGE);
      }
    }
  }

  validateDuplicate(numbers) {
    if (new Set(numbers).size !== 6) {
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
    if (!(1 <= number && number <= 45)) {
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
