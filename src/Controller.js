const InputView = require('../src/View/InputView')
const OutputView = require('../src/View/OutputView')
const Lotto = require('../src/Lotto')
const {Console} = require("@woowacourse/mission-utils");

class Controller {
  constructor() {
    this.lotto = new Lotto()
    this.lottoQuantity
    this.userLottoList
  }
  askLottoPurchaseAmount() {
    InputView.readLottoPurchaseAmount(this.getLottoQuantity.bind(this));
  }

  getLottoQuantity(amount) {
    this.lottoQuantity = this.lotto.purchaseQuantity(amount)
    this.printPurchaseQuantity()
  }

  printPurchaseQuantity() {
    OutputView.purchaseQuantity(this.lottoQuantity)
    this.printUserLotto()
  }

  printUserLotto() {
    this.userLottoList = this.lotto.lottomaker(this.lottoQuantity)
    this.userLottoList.forEach((lottoList) => {
    let printLottoList = lottoList.join().split(',').join(', ')
    Console.print(`[${printLottoList}]`)
    })
  }


}

module.exports = Controller