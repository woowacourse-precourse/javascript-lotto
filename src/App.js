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
      
      Console.readLine('당첨 번호를 입력해 주세요.\n', (rawInput) => {
        const input = rawInput.split(',')
        // TODO: 내림차순으로 정렬, 배열 안 string -> number
        if (input.length !== 6) {
        throw new Error('[ERROR] 6개의 숫자만 입력이 가능합니다.')
        }
      })

      Console.readLine('보너스 번호를 입력해 주세요.\n', (rawInput) => {
        if (rawInput.length !== 1) {
          throw new Error('[ERROR] 1개의 숫자만 입력이 가능합니다.')
          }
        // TODO: 예외 상황 추가하기
      })
    })
  }
}

module.exports = App;
