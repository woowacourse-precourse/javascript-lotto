const LottoGame = require("./LottoGame");
const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");

class LottoGameView {
  constructor() {
    this.game = new LottoGame(this);
  }
  
  gameStart() {
    this.receivePurchaseAmount(this.gameFinish);
  }

  receivePurchaseAmount(callback) {
    Console.readLine(MESSAGE.INPUT.PURCHASE_AMOUNT, (amount) => {
      this.game.setPurchaseAmount(amount);
      callback();
    });
  }

  gameFinish() {
    Console.close();
  }
}

module.exports = LottoGameView;
