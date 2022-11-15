// @ts-check

const { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER } = require('./utils/const');
const { error } = require('./utils/messages');

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortLottoNumbers(numbers);
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validate(numbers) {
    this.#validateNumbersLength(numbers);
    this.#validateLottoNumbersBound(numbers);
    this.#validateDuplication(numbers);
  }

  /**
   *
   * @param {number[]} numbers
   * @returns {number[]}
   */
  #sortLottoNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(error.LOTTO_LENGTH_ERROR_MESSAGE);
    }
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validateLottoNumbersBound(numbers) {
    numbers.forEach((number) => {
      if (
        !Number.isInteger(number) ||
        number < LOTTO_MIN_NUMBER ||
        number > LOTTO_MAX_NUMBER
      ) {
        throw new Error(error.LOTTO_BOUND_ERROR_MESSAGE);
      }
    });
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validateDuplication(numbers) {
    const numberSet = new Set(numbers);

    if (numberSet.size !== numbers.length) {
      throw new Error(error.DUPLICATE_ERROR_MESSAGE);
    }
  }

  /**
   *
   * @returns {number[]}
   */
  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
