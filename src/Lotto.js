const { FROM_ONE_TO_FORTYFIVE, SIX, ERROR_MESSAGES } = require("./Constants");

const { NOT_BETWEEN_ONE_AND_FORTYFIVE, DUPLICATE, NOT_SIX } = ERROR_MESSAGES;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateNumbers(numbers);
    this.#numbers = numbers;
  }

  validateNumbers(numbers) {
    if (numbers.length !== SIX) {
      throw new Error(NOT_SIX);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(DUPLICATE);
    }

    if (
      numbers.length !==
      numbers.filter((num) => FROM_ONE_TO_FORTYFIVE.includes(num)).length
    ) {
      throw new Error(NOT_BETWEEN_ONE_AND_FORTYFIVE);
    }
  }
}

module.exports = Lotto;
