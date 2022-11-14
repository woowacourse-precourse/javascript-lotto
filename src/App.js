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
    //let winningNumber=
  }

  getLottoNum(buyCount) {
    let count = 0
    while (count < Number(buyCount)) {
      //pickUniqueNumbersInRange의 인자를 자세히 보면 인자 하나가 6자리 배열이다
      //즉, 한번에 6자리 로또번호가 들어옴

      //하나씩 넣는걸 의도한 것 같다
      const userLottoPick=Random.pickUniqueNumbersInRange(1, 45)
      let lotto=new Lotto(userLottoPick)
      lotto.resultPrint()
      

      count++
    }
  }

  
}

module.exports = App
