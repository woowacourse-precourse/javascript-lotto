const { Console } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("./constants/message.js");
const LottoGameView = require("./LottoGameView.js");
const Validation = require("./Validation.js");

class LottoGame {
  constructor() {
    this.LottoGameView = new LottoGameView();
  }

  play() {
    this.createLottoPhase();
  }

  createLottoPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.PURCHASE_MONEY, this.createLotto);
  }
  createLotto(purchaseMoney) {}
}

module.exports = LottoGame;
