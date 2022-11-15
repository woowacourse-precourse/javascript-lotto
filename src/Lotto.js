// @ts-check

const { LOTTO } = require('./utils/const');
const { ERROR } = require('./utils/messages');

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
      throw new Error(ERROR.LOTTO_LENGTH);
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
        number < LOTTO.MIN_NUMBER ||
        number > LOTTO.MAX_NUMBER
      ) {
        throw new Error(ERROR.LOTTO_BOUND);
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
      throw new Error(ERROR.DUPLICATE);
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
