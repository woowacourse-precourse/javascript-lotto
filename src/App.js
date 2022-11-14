const { Random, Console } = require('@woowacourse/mission-utils')
const { LOTTO_PRICE, query, validationError } = require('./constants/app.js')
const { range, WINNING_NUMBER_COUNT } = require('./constants/common.js')
const { sortIncreasingOrder } = require('./lib/utils.js')

class App {
  #lottosOwnedByUser
  #perchaseAmount

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

      // TODO: 당첨 통계를 계산한다.

      this.#close()
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

  #close() {
    Console.close()
  }
}

new App().play()

module.exports = App
