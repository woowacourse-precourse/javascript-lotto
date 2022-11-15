const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  constructor() {

  }
  play() {
    this.buy()
  }

  buy() {
    let lottoNum = 0
    Console.readLine("구입 금액을 입력해주세요.\n", (num) => {
      lottoNum = num / 1000
      Console.print(lottoNum+'개 구매했습니다.')
      this.computer(lottoNum)
    })
  }
  computer(lottoNum) {
    const myLotto = []
    for (let i = 0; i < lottoNum; i++) {
      const data = Random.pickUniqueNumbersInRange(1, 45, 6)
      data.sort(function (a, b) { // 오름차순
        return a - b;
      });
      Console.print(data)
      myLotto.push(data)
      Console.close()
    }
  }
}

const app = new App()
app.play()

module.exports = App;
