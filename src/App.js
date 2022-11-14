const { Random, Console } = require('@woowacourse/mission-utils')
const { LOTTO_PRICE, query, validationError } = require('./constants/app.js')

class App {
  #perchaseAmount

  play() {
    this.#perchaseAmount = 0

    this.#getPurchaseAmount()
  }

  #getPurchaseAmount() {
    Console.readLine(query.PURCHASE, (price) => {
      this.#perchaseAmount = Number(price)
      this.#checkValidation()

      // TODO: 로또 개수 입력받고 개수대로 로또 만들어서 출력 + property에 추가\

      // TODO: 당첨 통계를 계산한다.
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
    return this.#perchaseAmount % LOTTO_PRICE !== 0
  }

  #close() {
    Console.close()
  }
}

module.exports = App
