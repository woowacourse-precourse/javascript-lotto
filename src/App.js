const Lotto = require('./Lotto')
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 로또 구입
  buyLotto(money) {
    console.log(`${money} 만큼 구입`)
  }

  // 로또 구입 금액
  money() {
    let MONEY = 0
    MissionUtils.Console.readLine('', (number) => {
      console.log(`${number}`)
      MONEY = number
    })
    this.buyLotto(MONEY)
  }
  play() {
    // Start
    MissionUtils.Console.print("구입금액을 입력해 주세요.")
    this.money()

  }
}

module.exports = App;
