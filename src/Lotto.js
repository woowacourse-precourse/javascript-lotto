const {
  validationError,
  WINNING_NUMBER_COUNT,
  range,
} = require('./constants/lotto.js')

/**
 * @typedef {Object} lotto
 * @property {number[]} wins - 당첨 번호
 * @property {number} bonus - 보너스 번호
 */

class Lotto {
  #numbers

  /**
   * @param {lotto} numbers
   */
  constructor(numbers) {
    this.#validate(numbers)

    this.#numbers = numbers
  }

  /**
   * @param {lotto} numbers
   */
  #validate(numbers) {
    if (this.#isNotValidType(numbers)) {
      throw new Error(validationError.TYPE)
    }

    if (this.#isNotValidLength(numbers)) {
      throw new Error(validationError.WINNING_NUMBER_COUNT)
    }

    if (this.#isNotValidRange(numbers)) {
      throw new Error(validationError.RANGE)
    }

    if (this.#isNotValidDuplication(numbers)) {
      throw new Error(validationError.DUPLICATION)
    }
  }

  /**
   * @param {lotto} numbers
   * @returns {boolean}
   */
  #isNotValidType(numbers) {
    if (!Array.isArray(numbers.wins)) {
      return true
    }

    const isNotAllNumber =
      numbers.wins.some((win) => !Number.isInteger(win)) ||
      !Number.isInteger(numbers.bonus)

    if (isNotAllNumber) {
      return true
    }

    return false
  }

  /**
   * @param {lotto} numbers
   * @returns {booelan}
   */
  #isNotValidLength(numbers) {
    if (numbers.wins.length !== WINNING_NUMBER_COUNT) {
      return true
    }

    return false
  }

  /**
   * @param {lotto} numbers
   * @returns {booelan}
   */
  #isNotValidRange(numbers) {
    const isNotInRange =
      numbers.wins.some((win) => win < range.MIN || range.MAX < win) ||
      numbers.bonus < range.MIN ||
      range.MAX < numbers.bonus

    if (isNotInRange) {
      return true
    }

    return false
  }

  /**
   * @param {lotto} numbers
   * @returns {booelan}
   */
  #isNotValidDuplication(numbers) {
    const lottoNumbers = [...numbers.wins, numbers.bonus]
    const hasDuplication =
      new Set(lottoNumbers).size !== WINNING_NUMBER_COUNT + 1

    if (hasDuplication) {
      return true
    }

    return false
  }
}

module.exports = Lotto
