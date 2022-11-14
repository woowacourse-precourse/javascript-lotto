const {
  validationError,
  WINNING_NUMBER_COUNT,
  range,
  prize,
} = require('./constants/lotto.js')
const { getIntersection } = require('./lib/utils.js')

/**
 * @typedef {Object} lotto
 * @property {number[]} wins - 당첨 번호
 * @property {number} bonus - 보너스 번호
 */

/**
 * @typedef {Object} lottoResult
 * @property {number} matchCount - 당첨 번호와 일치하는 개수
 * @property {boolean} bonusContained - 보너스 수를 포함하는지 여부
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

  /**
   * @param {number[]} lottoOwnedByUser
   * @returns {string}
   */
  checkRank(lottoOwnedByUser) {
    const { matchCount, bonusContained } = this.#calculateRank(lottoOwnedByUser)

    if (matchCount === WINNING_NUMBER_COUNT) return prize.FIRST

    if (matchCount === WINNING_NUMBER_COUNT - 1 && bonusContained)
      return prize.SECOND

    if (matchCount === WINNING_NUMBER_COUNT - 1) return prize.THIRD

    if (matchCount === WINNING_NUMBER_COUNT - 2) return prize.FOURTH

    if (matchCount === WINNING_NUMBER_COUNT - 3) return prize.FIFTH

    return prize.NONE
  }

  /**
   * @param {number[]} lottoOwnedByUser
   * @returns {lottoResult}
   */
  #calculateRank(lottoOwnedByUser) {
    const intersection = getIntersection(
      new Set(this.#numbers.wins),
      new Set(lottoOwnedByUser)
    )

    return {
      matchCount: intersection.size,
      bonusContained: lottoOwnedByUser.includes(this.#numbers.bonus),
    }
  }
}

module.exports = Lotto
