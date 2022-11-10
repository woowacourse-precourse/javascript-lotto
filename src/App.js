const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./constants/lotto');
const LottoBuyer = require('./LottoBuyer');

class App {
  #buyer;

  #sales;

  #lotto;

  play() {
    this.#readMoney();
  }

  #readMoney() {
    Console.readLine(GAME_MESSAGE.MONEY_INPUT, (money) => {
      this.#buyer = new LottoBuyer(money);
      Console.print(this.#buyer.money);
      Console.close();
    });
  }
}

module.exports = App;
