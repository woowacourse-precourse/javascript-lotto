const { LOTTO_PURCHASE } = require('../constant/Lotto');
const Validation = require('../model/Validation');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  constructor() {
    this.#inputPurchaseAmount();
  }

  #inputPurchaseAmount() {
    InputView.readLinePurchaseAmount((amount) => {
      new Validation(LOTTO_PURCHASE.CHECK_VALIDATION, amount).showResult();
    });
  }
}

module.exports = { GameController };
