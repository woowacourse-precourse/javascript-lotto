const { ERROR } = require('./Constants')

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


    if (numbers.length !== 6)
      throw new Error(ERROR.NOT_SIX_NUMBER);

    if (uniqueNumbers.has(NaN))
      throw new Error(ERROR.NOT_NUMBER);

    if (uniqueNumbers.size !== 6)
      throw new Error(ERROR.NOT_UNIQUE);

    if (numbers.some((value) => value < 1 || value > 45))
      throw new Error(ERROR.INVAID_NUMBER);
  }
}

module.exports = Lotto;
