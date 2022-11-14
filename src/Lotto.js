const { ERROR_MESSAGE } = require("./constants/MessageConstants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NOT_SIX_LENGTH);
    }

    const setNumbers = new Set(numbers);
    if (setNumbers.size !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_DO_NOT_OVERLAP);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
