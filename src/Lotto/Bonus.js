const {
  isNumberOfBonusNumbersCorrect,
  isNumbersInRange,
} = require("../Validation/Lotto");
const { ERROR } = require("../Constants");

class Bonus {
  #numbers;

  constructor({ numbers, winningNumbers }) {
    this.validate({ numbers, winningNumbers });
    this.#numbers = numbers;
  }

  validate({ numbers, winningNumbers }) {
    if (!isNumberOfBonusNumbersCorrect(numbers)) {
      throw new Error(ERROR.incorrect_number_of_bonus_number);
    }

    if (!isNumbersInRange(numbers)) {
      throw new Error(ERROR.number_out_of_range);
    }

    if (winningNumbers.isBonusNumbersDuplicated(numbers)) {
      throw new Error(ERROR.has_duplicate_number);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Bonus;
