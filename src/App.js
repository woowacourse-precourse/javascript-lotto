const { Console } = require("@woowacourse/mission-utils");
const Game = require("./Game");
const Lotto = require("./Lotto");
const Exception = require("./Exception");
const { MESSAGES } = require("./Constants");

class App {
  constructor() {
    this.game = new Game();
    this.lotto = new Lotto();
    this.exception = new Exception();
  }

  purchaseLotto() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (amount) => {
      this.exception.checkAmountExceptions(amount);
      const lottoQuantity = this.game.countLottoTickets(amount);

      this.game.issueLotto(lottoQuantity);
    });
  }

  play() {
    this.purchaseLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
