const { LOTTO } = require('./utils/const');
const { ERROR } = require('./utils/messages');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortLottoNumbers(numbers);
  }

  #validate(numbers) {
    this.#validateNumbersLength(numbers);
    this.#validateLottoNumbersBound(numbers);
    this.#validateDuplication(numbers);
  }

  #sortLottoNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  #validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_LENGTH);
    }
  }

  #validateLottoNumbersBound(numbers) {
    numbers.forEach((number) => {
      if (
        !Number.isInteger(number) ||
        number < LOTTO.MIN_NUMBER ||
        number > LOTTO.MAX_NUMBER
      ) {
        throw new Error(ERROR.LOTTO_BOUND);
      }
    });
  }

  #validateDuplication(numbers) {
    const numberSet = new Set(numbers);

    if (numberSet.size !== numbers.length) {
      throw new Error(ERROR.DUPLICATE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
