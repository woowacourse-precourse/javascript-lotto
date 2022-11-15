const BoughtGames = require('./BoughtGames')
const Lotto = require('./Lotto')
const MissionUtils = require('@woowacourse/mission-utils')
const { Console } = MissionUtils

class App {
  play() {
    this.getPurchasePrice()
  }

  getPurchasePrice() {
    Console.readLine('구입금액을 입력해 주세요.\n', (rawInput) => {
      const purchasePrice = parseInt(rawInput)
      if (purchasePrice % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위만 입력이 가능합니다.')
      }
      const boughtGames = new BoughtGames(purchasePrice)
      this.printBougtGames(boughtGames)
      this.getNumbers(boughtGames)
  })}

  getNumbers(boughtGames) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (rawInput) => {
      const numbers = rawInput.split(',').map(Number)
      this.getLuckyNumber(boughtGames, numbers)
    })}
    
  getLuckyNumber(boughtGames, numbers) {
    const lotto = new Lotto(numbers)
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (rawInput) => {
      const luckyNumber = parseInt(rawInput)
      if (luckyNumber < 1 || luckyNumber > 45) {
        throw new Error('[ERROR] 1부터 45의 숫자만 입력이 가능합니다.')
      }
      if (isNaN(luckyNumber)) {
        throw new Error('[ERROR] 하나의 숫자만 입력이 가능합니다.')
      }
      this.getPrizeResult(boughtGames, lotto, luckyNumber)
    })
  }

  getPrizeResult(boughtGames, lotto, luckyNumber) {
    const result = lotto.judge(boughtGames, boughtGames.getPurchasePrice(), luckyNumber)
    this.printResult(result)
  }

  printResult(result) {
    Console.print(`
      당첨 통계
      ---
      3개 일치 (5,000원) - ${result.three}개
      4개 일치 (50,000원) - ${result.four}개
      5개 일치 (1,500,000원) - ${result.five}개
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.fiveLucky}개
      6개 일치 (2,000,000,000원) - ${result.six}개
      총 수익률은 ${result.yield.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}% 입니다.`
    )
    Console.close()
  }

  printBougtGames(boughtGames) {
    const quantity = boughtGames.getGameCount()
    Console.print(`\n${quantity}개를 구매했습니다.`)
    for(let i = 0; i < quantity; i ++) {
      Console.print(boughtGames.getGameAt(i))
    }
	}
}

module.exports = App;
