const { Console } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("./constants/message.js");
const LottoGameView = require("./LottoGameView.js");
const Validation = require("./Validation.js");

class LottoGame {
  constructor() {
    this.LottoGameView = new LottoGameView();
  }

  play() {
    this.purchaseLottoPhase();
  }

  purchaseLottoPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.PURCHASE_AMOUNT, this.purchaseLotto);
  }
  purchaseLotto(purchaseAmount) {
    Validation.validatePurchaseAmount(purchaseAmount);
  }
}

module.exports = LottoGame;
