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

  receiveWinningNumber() {
    Console.readLine(MESSAGE.INPUT.WINNING_NUMBER, (number) => {
      this.game.setWinningLotto(number);
      this.receiveBonusNumber();
    });
  }

  receiveBonusNumber() {
    Console.readLine(MESSAGE.INPUT.BONUS_NUMBER, (bonus) => {
      this.game.setBonusNumber(bonus);
      this.gameFinish();
    });
  }

  gameFinish() {
    Console.close();
  }
}

module.exports = LottoGameView;
