const InputView = require('../src/View/InputView')
const OutputView = require('../src/View/OutputView')
const Lotto = require('../src/Lotto')

class Controller {
  constructor() {
    this.lotto = new Lotto()
    this.lottoQuantity
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
  }


}

module.exports = Controller