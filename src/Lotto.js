const { VALID_LOTTO, ERROR_MESSAGES } = require('./constant');
const Utils = require('./Utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== VALID_LOTTO.NUMBER_COUNT)
      throw new Error(`${ERROR_MESSAGES.LOTTO_NUMBER_COUNT}`);

    const setNumbers = new Set(numbers);
    if (setNumbers.size !== numbers.length)
      throw new Error(`${ERROR_MESSAGES.LOTTO_REDUPLICATION}`);

    for (let i = 0; i < numbers.length; i++) {
      Utils.validateLottoSingleNumber(numbers[i]);
    }
  }

  getValue() {
    return this.#numbers;
  }
}

module.exports = Lotto;
