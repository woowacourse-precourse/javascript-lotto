const Purchase = require('../model/Purchase');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  constructor() {
    this.#inputPurchaseAmount();
  }

  #inputPurchaseAmount() {
    InputView.readLinePurchaseAmount((amount) => {
      const purchaseAmount = new Purchase(amount);
      const lottoTicktes = purchaseAmount.purchaseLotto();
      OutputView.printLottoTickets(lottoTicktes);
    });
  }
}

module.exports = { GameController };
