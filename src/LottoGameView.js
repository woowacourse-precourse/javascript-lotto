const LottoGame = require("./LottoGame");
const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");

class LottoGameView {
  constructor() {
    this.game = new LottoGame(this);
  }
  
  gameStart() {
    this.receivePurchaseAmount();
  }

  receivePurchaseAmount() {
    Console.readLine(MESSAGE.INPUT.PURCHASE_AMOUNT, (amount) => {
      this.game.setPurchaseAmount(Number(amount));
      this.game.issueLottories();
    });
  }

  gameFinish() {
    Console.close();
  }
}

module.exports = LottoGameView;
