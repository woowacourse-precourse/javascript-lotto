const { ERROR_MESSAGE } = require("./constants/constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_ERROR);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_SAME_ERROR);
    }

    numbers.map((number) => {
      if (!(Number(number) >= 1 && Number(number) <= 45)) throw new Error(ERROR_MESSAGE.BONUS_RANGE_ERROR);
      this.filterNumber(number);
    });
  }

  filterNumber(number) {
    if (!(/^[0-9]{1,2}$/.test(number))) throw new Error(ERROR_MESSAGE.INPUT_CHARACTER_ERROR);
  }
}

module.exports = Lotto;