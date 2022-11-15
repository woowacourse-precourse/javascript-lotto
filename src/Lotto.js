const { ERROR_LOTTO_NUMBER, VALUE_NUMBER } = require("../src/utils/constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== VALUE_NUMBER.TOTAL_LOTTO_NUMBERS) {
      throw new Error(ERROR_LOTTO_NUMBER.NOT_SIX);
    }
    if (new Set(numbers).size !== numbers.length) throw new Error(ERROR_LOTTO_NUMBER.DUPLICATE_NUMBER);
    if (
      numbers.some(
        (arrayElement) =>
          arrayElement < VALUE_NUMBER.FIRST_LOTTO_NUMBER || arrayElement > VALUE_NUMBER.LAST_LOTTO_NUMBER
      )
    )
      throw new Error(ERROR_LOTTO_NUMBER.OUT_OF_RANGE);
  }
}

module.exports = Lotto;
