const { ERROR_LOTTO_NUMBER, VALUE_NUMBER } = require("./constants");

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
      numbers.find(
        (arrayElement) =>
          parseInt(arrayElement) < VALUE_NUMBER.SMALLEST_LOTTO_NUMBER ||
          parseInt(arrayElement) > VALUE_NUMBER.BIGGEST_LOTTO_NUMBER
      )
    )
      throw new Error(ERROR_LOTTO_NUMBER.OUT_OF_RANGE);
  }
}

module.exports = Lotto;
