const BoughtGames = require('./BoughtGames')
const { REQUEST_MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE } = require('./common/contants')
const Lotto = require('./Lotto')
const MissionUtils = require('@woowacourse/mission-utils')
const { Console } = MissionUtils

class App {
  play() {
    this.getPurchasePrice()
  }

  getPurchasePrice() {
    Console.readLine(REQUEST_MESSAGE.MONEY, (rawInput) => {
      const purchasePrice = Number(rawInput)
      if (purchasePrice % 1000 !== 0 || purchasePrice === 0) {
        throw new Error(ERROR_MESSAGE.GAME_UNIT)
      }
      const boughtGames = new BoughtGames(purchasePrice)
      this.printBougtGames(boughtGames)
      this.getNumbers(boughtGames)
    })
  }

  printBougtGames(boughtGames) {
    const quantity = boughtGames.getGameCount()
    Console.print(`\n${quantity}${RESULT_MESSAGE.PURCHAGE}`)
    for(let i = 0; i < quantity; i ++) {
      Console.print(`[${boughtGames.getGameAt(i).join(', ')}]`)
    }
	}

  getNumbers(boughtGames) {
    Console.readLine(REQUEST_MESSAGE.NUMBERS, (rawInput) => {
      const numbers = rawInput.split(',').map(Number)
      this.getLuckyNumber(boughtGames, numbers)
    })
  }
    
  getLuckyNumber(boughtGames, numbers) {
    const lotto = new Lotto(numbers)
    Console.readLine(REQUEST_MESSAGE.LUCKY_NUMBER, (rawInput) => {
      const luckyNumber = Number(rawInput)
      if (luckyNumber < 1 || luckyNumber > 45) {
        throw new Error(ERROR_MESSAGE.NUMBER_RANGE)
      }
      if (isNaN(luckyNumber)) {
        throw new Error(ERROR_MESSAGE.SINGLE_NUMBER)
      }
      this.getPrizeResult(boughtGames, lotto, luckyNumber)
    })
  }

  getPrizeResult(boughtGames, lotto, luckyNumber) {
    const result = lotto.judge(boughtGames, boughtGames.getPurchasePrice(), luckyNumber)
    this.printResult(result)
  }

  printResult(result) {
    const roundNumber = result.yield.toFixed(1)
    const formmattedNumber = roundNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    const resultMessages = [
      RESULT_MESSAGE.TITLE,
      RESULT_MESSAGE.BORDER,
      `${RESULT_MESSAGE.THREE}${result.three}${RESULT_MESSAGE.UNIT}`,
      `${RESULT_MESSAGE.FOUR}${result.four}${RESULT_MESSAGE.UNIT}`,
      `${RESULT_MESSAGE.FIVE}${result.five}${RESULT_MESSAGE.UNIT}`,
      `${RESULT_MESSAGE.FIVE_LUCKY}${result.fiveLucky}${RESULT_MESSAGE.UNIT}`,
      `${RESULT_MESSAGE.SIX}${result.six}${RESULT_MESSAGE.UNIT}`,
      `${RESULT_MESSAGE.YIELD_HEAD}${formmattedNumber}${RESULT_MESSAGE.YIELD_TAIL}`
    ]

    resultMessages.map( message => Console.print(message))
    Console.close()
  }
}

module.exports = App;
