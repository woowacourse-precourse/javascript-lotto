const { LOTTO_LENGTH, ERROR } = require("./constant/lotto");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (this.isNotVaildLength(numbers)) {
      this.throwError(ERROR.NOT_SIX_NUMBER);
    }
    if (this.isNotDiffNumbers(numbers)) {
      this.throwError(ERROR.DUPLICATE_NUMBERS);
    }
  }

  isNotVaildLength(numbers) {
    return numbers.length !== LOTTO_LENGTH;
  }

  isNotDiffNumbers(numbers) {
    const numberSet = new Set(numbers);
    return numberSet.size !== LOTTO_LENGTH;
  }

  throwError(messege) {
    throw new Error(`[ERROR] ${messege}`);
  }
}

module.exports = Lotto;
