const { ERROR_MESSAGE } = require("./constants/MessageConstants");
const { LOTTO } = require("./constants/NumberConstants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO.SIX_NUMBERS) {
      throw new Error(ERROR_MESSAGE.LOTTO_NOT_SIX_LENGTH);
    }

    const setNumbers = new Set(numbers);
    if (setNumbers.size !== LOTTO.SIX_NUMBERS) {
      throw new Error(ERROR_MESSAGE.LOTTO_DO_NOT_OVERLAP);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
