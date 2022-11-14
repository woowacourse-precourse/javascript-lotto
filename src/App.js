const PurchasePrice = require('./PurchasePrice')
const Lotto = require('./Lotto')
const { Console } = require('@woowacourse/mission-utils')
const { Random } = require('@woowacourse/mission-utils')

class App {
  constructor() {}

  play() {
    this.start()
  }

  start() {
    let buyCount = PurchasePrice.getPurchasePrice()
    this.getLottoNum(buyCount)
  }

  getLottoNum(buyCount) {
    //let lottoNumArr = []
    while (lottoNumArr.length < Number(buyCount)) {
      //pickUniqueNumbersInRange의 인자를 자세히 보면 인자 하나가 6자리 배열이다
      //lottoNumArr.push(Random.pickUniqueNumbersInRange(1, 45))
      //console.log(lottoNumArr)

      //하나씩 넣는걸 의도한 것 같다
      let tmp = new Lotto(Random.pickUniqueNumbersInRange(1, 45))
    }
  }
}

module.exports = App
