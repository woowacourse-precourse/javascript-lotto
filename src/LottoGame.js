const { Console } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("./constants/message.js");
const { LOTTO_PRICE } = require("./constants/condition.js");
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
    this.LottoGameView.requestInput(REQUEST_MESSAGE.PURCHASE_AMOUNT, this.purchaseLotto.bind(this));
  }
  purchaseLotto(purchaseAmount) {
    Validation.validatePurchaseAmount(purchaseAmount);
  }
  getLottoQuantity(purchaseAmount) {
    return parseInt(purchaseAmount, 10) / LOTTO_PRICE;
  }
}

module.exports = LottoGame;
