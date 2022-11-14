const { Random, Console } = require('@woowacourse/mission-utils')
const Lotto = require('./Lotto.js')
const {
  LOTTO_PRICE,
  query,
  validationError,
  prize,
} = require('./constants/app.js')
const { range, WINNING_NUMBER_COUNT } = require('./constants/common.js')
const { sortIncreasingOrder, addComma } = require('./lib/utils.js')

/**
 * @typedef {import('./Lotto.js').lotto} lotto
 */

/**
 * @typedef {Object.<string, number>} lottoResult - key: 등수, value: 개수
 */

class App {
  #lottosOwnedByUser
  #perchaseAmount

  /**
   * @param {number[][]} lottosOwnedByUser
   */
  set lottosOwnedByUser(lottosOwnedByUser) {
    this.#lottosOwnedByUser = lottosOwnedByUser
  }

  /**
   * @param {number} perchaseAmount
   */
  set perchaseAmount(perchaseAmount) {
    this.#perchaseAmount = perchaseAmount
  }

  play() {
    this.#lottosOwnedByUser = []
    this.#perchaseAmount = 0

    this.#getPurchaseAmount()
  }

  #getPurchaseAmount() {
    Console.readLine(`${query.PURCHASE}\n`, (price) => {
      this.#perchaseAmount = Number(price)
      this.#checkValidation()

      const lottoCount = this.#perchaseAmount / LOTTO_PRICE
      this.#lottosOwnedByUser = this.buyLotto(lottoCount)
      this.#printLottosOwnedByUser()

      this.#selectWinningNumbers()
    })
  }

  #checkValidation() {
    if (this.#isNotValidType()) {
      this.#close()

      throw new Error(validationError.TYPE)
    }

    if (this.#isNotValidUnit()) {
      this.#close()

      throw new Error(validationError.UNIT)
    }
  }

  /**
   * @returns {booelan}
   */
  #isNotValidType() {
    return !Number.isInteger(this.#perchaseAmount)
  }

  /**
   * @returns {booelan}
   */
  #isNotValidUnit() {
    return this.#perchaseAmount <= 0 || this.#perchaseAmount % LOTTO_PRICE !== 0
  }

  /**
   * @param {number} lottoCount
   * @returns {number[][]}
   */
  buyLotto(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.`)

    const lottos = []

    while (lottos.length !== lottoCount) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        range.MIN,
        range.MAX,
        WINNING_NUMBER_COUNT
      ).sort(sortIncreasingOrder)

      lottos.push(lottoNumbers)
    }

    return lottos
  }

  #printLottosOwnedByUser() {
    this.#lottosOwnedByUser.forEach((lotto) => {
      Console.print(lotto)
    })
  }

  #selectWinningNumbers() {
    Console.readLine(`\n${query.WINNING_NUMBERS}\n`, (numbersInString) => {
      const winningNumbers = numbersInString.split(',').map(Number)

      this.#selectBonusNumber(winningNumbers)
    })
  }

  /**
   * @param {*[]} winningNumbers
   */
  #selectBonusNumber(winningNumbers) {
    Console.readLine(`\n${query.BONUS_NUMBER}\n`, (numberInString) => {
      const bonusNumber = Number(numberInString)

      const lottoResult = this.getLottoResult({
        wins: winningNumbers,
        bonus: bonusNumber,
      })

      this.#printLottoResult(lottoResult)
      // calcReturnRate
    })
  }

  /**
   * @param {lotto} lotto
   * @returns {lottoResult}
   */
  getLottoResult({ wins, bonus }) {
    const lotto = new Lotto({ wins, bonus })
    const lottoResult = Object.keys(prize).reduce((result, rank) => {
      result[rank] = 0

      return result
    }, {})

    this.#lottosOwnedByUser.forEach((lottoOwnedByUser) => {
      const rank = lotto.checkRank(lottoOwnedByUser)
      if (rank in lottoResult) {
        lottoResult[rank]++
      }
    })

    return lottoResult
  }

  /**
   * @param {lottoResult} lottoResult
   */
  #printLottoResult(lottoResult) {
    Console.print('\n당첨 통계\n---')

    const keysInDescendingOrder = Object.keys(prize).sort((number1, number2) =>
      sortIncreasingOrder(-number1, -number2)
    )

    keysInDescendingOrder.forEach((key) => {
      Console.print(
        `${prize[key].CRITERIA} (${addComma(prize[key].PRICE)}원) - ${
          lottoResult[key]
        }개`
      )
    })
  }

  #close() {
    Console.close()
  }
}

new App().play()

module.exports = App
