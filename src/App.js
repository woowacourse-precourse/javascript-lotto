const BoughtGames = require('./BoughtGames')
const Lotto = require('./Lotto')
const MissionUtils = require('@woowacourse/mission-utils')
const { Console } = MissionUtils

class App {
  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', (rawInput) => {
      const purchasePrice = parseInt(rawInput)
      if (purchasePrice % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위만 입력이 가능합니다.')
      }
      const boughtGames = new BoughtGames(purchasePrice)
      this.printBougtGames(boughtGames)
      
      Console.readLine('\n당첨 번호를 입력해 주세요.\n', (rawInput) => {
        // TODO: 내림차순으로 정렬, 배열 안 string -> number
        const numbers = rawInput.split(',').map(Number)
        const lotto = new Lotto(numbers)

        Console.readLine('보너스 번호를 입력해 주세요.\n', (rawInput) => {
          const luckyNumber = parseInt(rawInput)
          if (luckyNumber < 1 || luckyNumber > 45) {
            throw new Error('[ERROR] 1부터 45의 숫자만 입력이 가능합니다.')
          }
          // TODO: 예외 상황 추가하기
          const result = lotto.judge(boughtGames.getGameAt(), luckyNumber, purchasePrice)
          this.printResult(result)
        })
      })
    })
  }

  printResult() {
    // ...
  }

  printBougtGames(boughtGames)  {
    const quantity = boughtGames.getCount()
    Console.print(`\n${quantity}개를 구매했습니다.`)
    for(let i = 0; i < quantity; i ++) {
      Console.print(boughtGames.getGameAt()[i])
    }
	}
}

const app = new App()
app.play()

module.exports = App;
