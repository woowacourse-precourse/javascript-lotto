const { ERROR, MIN_NUMBER, MAX_NUMBER, MAX_NUMBER_COUNT } = require('./Constants')

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortLotto(numbers);
  }

  getNumber() {
    return this.#numbers;
  }

  sortLotto(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  validate(numbers) {
    let uniqueNumbers = new Set(numbers);

    if (numbers.length !== MAX_NUMBER_COUNT)
      throw new Error(ERROR.NOT_SIX_NUMBER);

    if (uniqueNumbers.has(NaN))
      throw new Error(ERROR.NOT_NUMBER);

    if (uniqueNumbers.size !== MAX_NUMBER_COUNT)
      throw new Error(ERROR.NOT_UNIQUE);

    if (numbers.some((number) => number < MIN_NUMBER || number > MAX_NUMBER))
      throw new Error(ERROR.INVAID_NUMBER);
  }
}

module.exports = Lotto;
