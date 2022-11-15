const {
  isNumberOfBonusNumbersCorrect,
  isNumbersInRange,
} = require("../Validation/Lotto");
const { ERROR } = require("../Constants");

class Bonus {
  #numbers;

  constructor(numbers, winningLotto) {
    this.validate(numbers, winningLotto);
    this.#numbers = numbers;
  }

  validate(numbers, winningLotto) {
    if (!isNumberOfBonusNumbersCorrect(numbers)) {
      throw new Error(ERROR.incorrect_number_of_bonus_number);
    }

    if (!isNumbersInRange(numbers)) {
      throw new Error(ERROR.number_out_of_range);
    }

    if (winningLotto.isBonusNumbersDuplicated(numbers)) {
      throw new Error(ERROR.has_duplicate_number);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Bonus;
