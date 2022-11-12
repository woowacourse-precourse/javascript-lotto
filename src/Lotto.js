const { LOTTO_LENGTH, ERROR } = require("./constant/lotto");
const Utils = require("./utils/utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.utils = new Utils();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (this.isNotVaildLength(numbers)) {
      this.utils.throwError(ERROR.NOT_SIX_NUMBERS);
    }
    if (this.isNotDiffNumbers(numbers)) {
      this.utils.throwError(ERROR.DUPLICATE_NUMBERS);
    }
  }

  isNotVaildLength(numbers) {
    return numbers.length !== LOTTO_LENGTH;
  }

  isNotDiffNumbers(numbers) {
    const numberSet = new Set(numbers);
    return numberSet.size !== LOTTO_LENGTH;
  }
}

module.exports = Lotto;
