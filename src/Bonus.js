const {
  isNumberOfBonusNumberCorrect,
  isNumbersInRange,
} = require("./Validate");
const { ERROR } = require("./Constants");

class Bonus {
  #number;

  constructor(number, winningLotto) {
    this.validate(number, winningLotto);
    this.#number = number;
  }

  validate(number, winningLotto) {
    if (!isNumberOfBonusNumberCorrect(number)) {
      throw new Error(ERROR.incorrect_number_of_bonus_number);
    }

    if (!isNumbersInRange(number)) {
      throw new Error(ERROR.number_out_of_range);
    }

    if (winningLotto.isBonusNumberDuplicated(number)) {
      throw new Error(ERROR.has_duplicate_number);
    }
  }

  getNumber() {
    // 배열임
    return this.#number;
  }
}

module.exports = Bonus;
